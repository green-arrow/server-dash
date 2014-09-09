

exports.getUserProfiles = function(userId, callback) {
    _userHasProfiles(userId, function(error, hasProfiles) {
        if(error) {
            callback(error);
        } else if(!hasProfiles) {
            _generateUserProfiles(userId, function(error) {
                if(error) {
                    callback(error);
                } else {
                    _getUserProfiles(userId, callback);
                }
            });
        } else {
            _getUserProfiles(userId, callback);
        }
    });

};

exports.updateUserProfile = function(profile, callback) {
    var error = {
        serverError: false,
        messages: []
    };

    if(profile.profileWidgets.length) {
        _updateUserProfile(profile.profileWidgets, 0, function(err) {
            if(err) {
                sails.log.error('Error updating user profiles: ', err);
                error.messages.push('Failed to update user profiles.');
                error.serverError = true;
                callback(error);
            } else {
                callback();
            }
        });
    } else {
        callback();
    }
};

var _userHasProfiles = function(userId, callback) {
    var error = {
        serverError: false,
        messages: []
    };

    User.findOne(userId).populate('profiles').exec(function(err, user) {
        if(err || !user) {
            sails.log.error('Error retrieving user: ', err || '');
            error.messages.push('Failed to retrieve user.');
            error.serverError = true;
            callback(error);
        } else if(!user.profiles.length) {
            callback(null, false);
        } else {
            callback(null, true);
        }
    });
};

var _generateUserProfiles = function(userId, callback) {
    var objectId = require('mongojs').ObjectId,
        profiles = require('../../setup/profiles.js'),
        profileWidgetLookup = require('../../setup/profileWidgets.js'),
        profileWidgets = [], generatedId,
        error = {
            serverError: false,
            messages: []
        };

    profiles.forEach(function(profile) {
        generatedId = new objectId();
        profile['id'] = generatedId;
        profile['user'] = userId;

        profileWidgetLookup[profile.name].forEach(function(profileWidget) {
            // Associate profile widget to profile
            profileWidget['profile'] = profile['id'];

            // Generate new ID for profileWidget
            generatedId = new objectId();
            profileWidget['id'] = generatedId;
            profileWidget['widget'] = parseInt(profileWidget['widget'], 10);

            profileWidgets.push(profileWidget);
        });
    });

    Profile.create(profiles).exec(function(err, profiles) {
        if(err || !profiles) {
            sails.log.error('Error generating profiles: ', err || '');
            error.messages.push('Failed to generate user profiles.');
            error.serverError = true;
            callback(error);
        } else {
            ProfileWidget.create(profileWidgets).exec(function (err, profileWidgets) {
                if(err || !profileWidgets) {
                    sails.log.error('Error generating profile widgets: ', err || '');
                    error.messages.push('Failed to generate profile widgets.');
                    error.serverError = true;
                    callback(error);
                } else {
                    callback();
                }
            });
        }
    });
};

var _getUserProfiles = function(userId, callback) {
    var error = {
        serverError: false,
        messages: []
    };

    async.auto({
        profiles: function(cb) {
            Profile.find({user: userId}).populate('profileWidgets').exec(cb);
        },
        profileWidgets: ['profiles', function(cb, results) {
            var profileWidgetIds = [];
            _.each(results.profiles, function(profile) {
                profileWidgetIds = _.union(profileWidgetIds, _.pluck(profile.profileWidgets, 'id'));
            });

            ProfileWidget.findById(profileWidgetIds).populate('widget').exec(cb);
        }],
        map: ['profileWidgets', function(cb, results) {
            //sails.log.info('map: profileWidgets: ', results.profileWidgets);
            var profileWidgetMapper = _.indexBy(results.profileWidgets, 'id');
            // Map profiles to profileWidgets
            var profilesMappedToProfileWidgets = _.map(results.profiles, function(profile) {
                var _profile = profile.toObject();
                _profile.profileWidgets = _.map(profile.profileWidgets, function(profileWidget) {
                    return profileWidgetMapper[profileWidget.id];
                });
                return _profile;
            });

            return cb(null, profilesMappedToProfileWidgets);
        }]
    }, function(err, results) {
        if(err) {
            sails.log.error('Failed to retrieve user profiles: ', err);
            error.messages.push('Failed to retrieve user profiles.');
            error.serverError = true;
            callback(error);
        } else {
            callback(null, results.map);
        }
    });
};

var _updateUserProfile = function(profileWidgetArray, index, callback) {
    var profileWidget = profileWidgetArray[index];
    if(!profileWidget) {
        callback();
    } else {
        if (typeof profileWidget.widget === 'object') {
            profileWidget.widget = profileWidget.widget.id;
        }

        ProfileWidget.update(profileWidget.id, profileWidget).exec(function (err, result) {
            if (err) {
                callback(err);
            } else {
                _updateUserProfile(profileWidgetArray, index + 1, callback);
            }
        });
    }
};
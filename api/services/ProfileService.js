var Profile = require('../models/Profile'),
    ProfileWidget = require('../models/ProfileWidget'),
    User = require('../models/User');

var sanitize = function(obj){
    obj = obj.toObject();
    obj.id = obj._id.toString();
    delete obj._id;
    delete obj.__v;

    return obj;
};

var sanitizeList = function(list) {
    var sanitized = [];

    list.forEach(function(item) {
        sanitized.push(sanitize(item));
    });

    return sanitized;
};

exports.getUserProfiles = function(userId, callback) {
    _getUserProfiles(userId, function(error, profiles) {
        if(error) {
            callback(error);
        } else if (!profiles.length) {
            _generateUserProfiles(userId, function(error) {
                if(error) {
                    callback(error);
                } else {
                    _getUserProfiles(userId, callback);
                }
            });
        } else {
            callback(null, profiles);
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

var _generateUserProfiles = function(userId, callback) {
    var objectId = require('mongoose').Schema.ObjectId,
        availableProfiles = require('../../setup/profiles.js'),
        profileWidgetLookup = require('../../setup/profileWidgets.js'),
        dbProfiles = [], dbProfileWidgets = [], dbProfile, dbProfileWidget, sortOrder
        error = {
            serverError: false,
            messages: []
        };

    availableProfiles.forEach(function(availableProfile) {
        dbProfile = new Profile(availableProfile);
        dbProfile.user = userId;

        profileWidgetLookup[dbProfile.name].forEach(function(lookup) {
            dbProfileWidget = new ProfileWidget(lookup);
            dbProfileWidget._id = new objectId();
            dbProfileWidgets.push(dbProfileWidget);

            // Create profile -> profile widget association
            dbProfile.profileWidgets.push(dbProfileWidget._id);
        });

        dbProfiles.push(dbProfile);
    });

    Profile.create(dbProfiles, function(err) {
        if (err) {
            sails.log.error('Error generating profiles: ', err);
            error.messages.push('Failed to generate user profiles.');
            error.serverError = true;
            callback(error);
        } else {
            ProfileWidget.create(dbProfileWidgets, function(err) {
                if(err) {
                    sails.log.error('Error generating profile widgets: ', err);
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

    Profile.find({ "user": userId }).exec(function(err, profiles) {
        if (err) {
            sails.log.error('Error retrieving user profiles: ', err);
            error.messages.push('Error retrieving user profiles.');
            error.serverError = true;
            callback(error);
        } else {
            callback(null, sanitizeList(profiles));
        }
    });

    /*async.auto({
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
    });*/
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
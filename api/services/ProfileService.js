exports.generateUserProfiles = function(userId, callback) {
    var objectId = require('mongojs').ObjectId,
        profiles = require('../../setup/profiles.js'),
        profileWidgetLookup = require('../../setup/profileWidgets.js'),
        profileWidgets = [], generatedId;

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
            sails.log.error('Error generating profiles: ', err);
            callback(err);
        } else {
            sails.log.info('Default profiles successfully generated.');
            ProfileWidget.create(profileWidgets).exec(function (err, profileWidgets) {
                if(err || !profileWidgets) {
                    callback(err);
                } else {
                    sails.log.info('Profile widgets successfully created.');
                    callback();
                }
            });
        }
    });
};

exports.getUserProfiles = function(userId, callback) {
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
        callback(err, results.map);
    });
};

exports.updateUserProfile = function(profile, callback) {
    if(profile.profileWidgets.length) {
        _updateUserProfile(profile.profileWidgets, 0, callback);
    } else {
        callback();
    }
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
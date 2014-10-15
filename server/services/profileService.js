var Profile = require('../models/profile'),
    ProfileWidget = require('../models/profileWidget'),
    User = require('../models/user');

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

var _generateUserProfiles = function(userId, callback) {
    var objectId = require('mongoose').Schema.ObjectId,
        availableProfiles = require('../../setup/profiles.js'),
        profileWidgetLookup = require('../../setup/profileWidgets.js'),
        dbProfiles = [], dbProfileWidgets = [], dbProfile, dbProfileWidget, sortOrder,
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
            console.error('Error generating profiles: ', err);
            error.messages.push('Failed to generate user profiles.');
            error.serverError = true;
            callback(error);
        } else {
            ProfileWidget.create(dbProfileWidgets, function(err) {
                if(err) {
                    console.error('Error generating profile widgets: ', err);
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
            console.error('Error retrieving user profiles: ', err);
            error.messages.push('Error retrieving user profiles.');
            error.serverError = true;
            callback(error);
        } else {
            callback(null, sanitizeList(profiles));
        }
    });
};
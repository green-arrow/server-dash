exports.getUnusedWidgetsForProfile = function(profileId, callback) {
    var filteredWidgets,
        error = {
            serverError: false,
            messages: []
        };

    _getExistingProfileWidgets(profileId, function(error, profileWidgetIds) {
        if(error) {
            callback(error);
        } else {
            _getWidgets(function(error, allWidgets) {
                if(error) {
                    callback(error);
                } else {
                    filteredWidgets = allWidgets.filter(function(item) {
                        return profileWidgetIds.indexOf(+item.id) === -1;
                    });

                    callback(null, filteredWidgets);
                }
            });
        }
    });
};

var _getExistingProfileWidgets = function(profileId, callback) {
    var widgetIds = [],
        error = {
        serverError: false,
        messages: []
    };

    if(profileId) {
        Profile.findOne(profileId).populate('profileWidgets').exec(function (err, profile) {
            if (err || !profile) {
                sails.log.error('WidgetService._getExistingProfileWidgets: Error retrieving profile: ', err || '');
                error.messages.push('Failed to retrieve profile.');
                error.serverError = true;
                callback(error);
            } else {
                profile.profileWidgets.forEach(function(item, index) {
                    widgetIds.push(item.widget);
                });

                callback(null, widgetIds);
            }
        });
    } else {
        callback(null, widgetIds);
    }
};

var _getWidgets = function(callback) {
    var error = {
        serverError: false,
        messages: []
    };

    Widget.find().exec(function(err, widgets) {
        if(err || !widgets) {
            sails.log.error('WidgetService._getWidgets: Error retrieving widgets: ', err || '');
            error.messages.push('Failed to retrieve widgets.');
            error.serverError = true;
            callback(error);
        } else {
            callback(null, widgets);
        }
    });
};
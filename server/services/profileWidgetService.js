var ProfileWidget = require('../models/profileWidget');

var sanitize = function(obj){
    obj = obj.toObject();
    obj.id = obj._id.toString();
    delete obj._id;
    delete obj.__v;

    if(obj.widget && obj.widget._id) {
        obj.widget.id = obj.widget._id;
        delete obj.widget._id;
        delete obj.widget.__v;
    }

    return obj;
};

exports.findById = function(profileWidgetId, callback) {
    var error = {
        serverError: false,
        messages: []
    };

    ProfileWidget.findOne({ "_id": profileWidgetId }).populate('widget').exec(function(err, profileWidget) {
        if (err) {
            console.error('Profile widget lookup failed: ', err);
            error.messages.push('Profile widget lookup failed');
            error.serverError = true;
        } else if (profileWidget) {
            callback(null, sanitize(profileWidget));
        } else {
            error.messages.push('Profile widget lookup failed.');
            callback(error);
        }
    });
};

exports.update = function(profileWidgetId, profileWidget, callback) {
    var error = {
        serverError: false,
        messages: []
    };

    if (typeof profileWidget.widget === 'object') {
        profileWidget.widget = profileWidget.widget.id;
    }

    ProfileWidget.findOneAndUpdate({ "_id": profileWidgetId }, profileWidget).populate('widget').exec(function(err, updated) {
        if(err) {
            console.error('Error updating user profile: ', err);
            error.messages.push('Failed to update user profile.');
            error.serverError = true;
        } else {
            callback(null, sanitize(updated));
        }
    });
};
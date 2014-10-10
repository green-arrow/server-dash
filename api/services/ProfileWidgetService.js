var ProfileWidget = require('../models/ProfileWidget');

var sanitize = function(obj){
    obj = obj.toObject();
    obj.id = obj._id.toString();
    delete obj._id;
    delete obj.__v;

    if(obj.widget) {
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
            sails.log.error('Profile widget lookup failed: ', err);
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
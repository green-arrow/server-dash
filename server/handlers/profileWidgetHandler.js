var ProfileWidgetService = require('../services/profileWidgetService');

module.exports = {
	findOne: function(request, reply) {
        var profileWidgetId = request.params.id;

        ProfileWidgetService.findById(profileWidgetId, function(err, profileWidget) {
            if(err) {
                if(err.serverError) {
                    reply({ errors: err.messages }).code(500);
                } else {
                    reply({ errors: err.messages }).code(400);
                }
            } else {
                reply({
                    profileWidget: profileWidget
                });
            }
        });
    },
    update: function(request, reply) {
        var profileWidgetId = request.params.id;

        ProfileWidgetService.update(profileWidgetId, request.body.profileWidget, function(err, profileWidget) {
            if(err) {
                if(err.serverError) {
                    reply({ errors: err.messages }).code(500);
                } else {
                    reply({ errors: err.messages }).code(400);
                }
            } else {
                reply({
                    profileWidget: profileWidget
                });
            }
        });
    }
};


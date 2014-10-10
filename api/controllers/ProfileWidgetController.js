var ProfileWidgetService = require('../services/ProfileWidgetService');

module.exports = {
	findOne: function(req, res) {
        var profileWidgetId = req.param('id');
        ProfileWidgetService.findById(profileWidgetId, function(err, profileWidget) {
            if(err) {
                if(err.serverError) {
                    res.serverError({ errors: err.messages });
                } else {
                    res.badRequest({ errors: err.messages });
                }
            } else {
                res.ok({
                    profileWidget: profileWidget
                });
            }
        });
    }
};


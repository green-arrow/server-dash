var ProfileService = require('../services/ProfileService');

module.exports = {
	index: function(req, res) {
        var userId = req.session.user.id;

        ProfileService.getUserProfiles(userId, function(err, profiles) {
            if(err) {
                if(err.serverError) {
                    res.serverError({ errors: err.messages });
                } else {
                    res.badRequest({ errors: err.messages });
                }
            } else {
                res.ok({
                    profiles: profiles
                });
            }
        });
    },
    update: function(req, res) {
        ProfileService.updateUserProfile(req.body.profile, function(err) {
            if(err) {
                if(err.serverError) {
                    res.serverError({ errors: err.messages });
                } else {
                    res.badRequest({ errors: err.messages });
                }
            } else {
                res.ok();
            }
        });
    }
};


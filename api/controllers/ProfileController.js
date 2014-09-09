/**
 * ProfilesController
 *
 * @description :: Server-side logic for managing profiles
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

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


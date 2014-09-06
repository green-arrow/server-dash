/**
 * ProfilesController
 *
 * @description :: Server-side logic for managing profiles
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function(req, res) {
        var userId = req.session.user.id,
            getProfiles = function() {
                ProfileService.getUserProfiles(userId, function(err, profiles) {
                    if(err) {
                        sails.log.error('Error in retrieving user profiles: ', err);
                        res.serverError({ error: 'Error in retrieving user profiles.' });
                    } else {
                        // wrap the result for ember-data
                        var result = {
                            profiles: profiles
                        };

                        res.ok(result);
                    }
                });
            };

        User.findOne(userId).populate('profiles').exec(function(err, user) {
            if(!user.profiles.length) {
                sails.log.info('No profiles exist for user ' + user.email + '.');
                sails.log.info('Generating profiles now.');
                ProfileService.generateUserProfiles(userId, function(err) {
                    if(err) {
                        sails.log.error('Error in generating user profiles.\n', err);
                        res.serverError({ error: 'Error in generating user profiles.' });
                    } else {
                        getProfiles();
                    }
                });
            } else {
                getProfiles();
            }
        });
    },
    update: function(req, res) {
        ProfileService.updateUserProfile(req.body.profile, function(err) {
           if(err) {
                res.serverError({ error: 'Error in saving user profile.' });
           } else {
               sails.log.info('Updated profile successfully.');
               res.ok();
           }
        });
    }
};


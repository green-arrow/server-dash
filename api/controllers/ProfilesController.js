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
                        //res.send(500, { error: 'Error in retrieving user profiles.' });
                    } else {
                        //res.ok(profiles);
                    }
                });
            };

        User.findOne(userId).exec(function(err, user) {
            if(!user.profiles.length) {
                sails.log.info('No profiles exist for user ' + user.email + '.');
                sails.log.info('Generating profiles now.');
                ProfileService.generateUserProfiles(userId, function(err) {
                    if(err) {
                        sails.log.error('Error in generating user profiles.\n', err);
                    } else {
                        getProfiles();
                    }
                });
            } else {
                getProfiles();
            }
        });

        // NOTE: We're returning this for now because we need to update the front end to
        // take into account the new structure (profile -> profileWidget -> widget instead of profile -> widget)
        res.ok({
            "profiles": [
                {
                    "id": 1,
                    "name": "Hardware",
                    "icon": "fa-desktop",
                    "widgets": [
                        {
                            "id": 1,
                            "name": "general",
                            "displayName": "General Info"
                        },
                        {
                            "id": 2,
                            "name": "disk",
                            "displayName": "Disk Usage"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Network",
                    "icon": "fa-globe",
                    "widgets": [
                        {
                            "id": 3,
                            "name": "dhcp",
                            "displayName": "DHCP Leases"
                        },
                        {
                            "id": 4,
                            "name": "network-stats",
                            "displayName": "Network Statistics"
                        }
                    ]
                }
            ]
        });
    }
};


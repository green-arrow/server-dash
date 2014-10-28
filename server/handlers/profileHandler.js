var ProfileService = require('../services/profileService');

module.exports = {
	index: function(request, reply) {
        var userId = request.auth.credentials.user.id;

        ProfileService.getUserProfiles(userId, function(err, profiles) {
            if(err) {
                if(err.serverError) {
                    reply({ errors: err.messages }).code(500);
                } else {
                    reply({ errors: err.messages }).code(400);
                }
            } else {
                reply({
                    profiles: profiles
                });
            }
        });
    }
};


var UserService = require('../services/userService');

module.exports = {
    findOne: function(request, reply) {
        UserService.findById(request.params.id, function(err, user) {
            if(err) {
                if(err.serverError) {
                    reply({ errors: err.messages }).code(500);
                } else {
                    reply({ errors: err.messages }).code(400);
                }
            } else {
                reply({
                    user: user
                });
            }
        });
    },
    update: function(request, reply) {
        UserService.updateUser(request.payload.user, function(err, user) {
            if(err) {
                if(err.serverError) {
                    reply({ errors: err.messages }).code(500);
                } else {
                    reply({ errors: err.messages }).code(400);
                }
            } else {
                request.auth.session.set({
                    authenticated: true,
                    user: user
                });
                reply({
                    user: user
                });
            }
        });
    },
    validate: function(request, reply) {
        var userId = request.auth.credentials.user.id,
            password = request.payload.password;

        UserService.validateById(userId, password, function(err, user) {
            if(err) {
                if(err.serverError) {
                    reply({ errors: err.messages }).code(500);
                } else {
                    reply({ errors: err.messages }).code(400);
                }
            } else {
                reply();
            }
        });
    }
};

var UserService = require('../services/userService');

module.exports = {
    logout: function(request, reply) {
        request.auth.session.clear();

        reply();
    },
    doLogin: function(request, reply) {
        var email = request.payload.email,
            password = request.payload.password;

        console.log('Processing login for ' + email);

        UserService.validateByEmail(email, password, function(err, user) {
            if(err) {
                if(err.serverError) {
                    reply({ errors: err.messages }).code(500);
                } else {
                    reply({ errors: err.messages }).code(400);
                }
            } else {
                request.auth.session.set({
                    authenticated: !user.firstLogin,
                    user: user
                });

                reply({ userId: user.id, firstLogin: user.firstLogin });
            }
        });
    },
    doUpdate: function(request, reply) {
        var user = {
                id: request.auth.credentials.user.id,
                email: request.payload.newEmail,
                password: request.payload.newPassword,
                firstLogin: false
            };

        UserService.updateUser(user, function(err, user) {
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

                reply();
            }
        });
    }
};


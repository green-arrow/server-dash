var UserService = require('../services/userService');

module.exports = {
    logout: function(req, res) {
        req.auth.session.clear();

        res.ok();
    },
    doLogin: function(req, res) {
        var email = req.param('email'),
            password = req.param('password');

        console.log('Processing login for ' + email);

        UserService.validateByEmail(email, password, function(err, user) {
            if(err) {
                if(err.serverError) {
                    res.serverError({ errors: err.messages });
                } else {
                    res.badRequest({ errors: err.messages });
                }
            } else {
                req.auth.session.set({
                    authenticated: !user.firstLogin,
                    user: user
                });

                res.ok({ userId: user.id, firstLogin: user.firstLogin });
            }
        });
    },
    doUpdate: function(req, res) {
        var user = {
                id: req.auth.credentials.user.id,
                email: req.param('newEmail'),
                password: req.param('newPassword'),
                firstLogin: false
            };

        UserService.updateUser(user, function(err, user) {
            if(err) {
                if(err.serverError) {
                    res.serverError({ errors: err.messages });
                } else {
                    res.badRequest({ errors: err.messages });
                }
            } else {
                req.auth.session.set({
                    authenticated: true,
                    user: user
                });

                res.ok();
            }
        });
    }
};


/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    logout: function(req, res) {
        req.session.destroy();

        res.ok();
    },
    doLogin: function(req, res) {
        var email = req.param('email'),
            password = req.param('password');

        sails.log.info('Processing login for ' + email);

        UserService.validateByEmail(email, password, function(err, user) {
            if(err) {
                if(err.serverError) {
                    res.serverError({ errors: err.messages });
                } else {
                    res.badRequest({ errors: err.messages });
                }
            } else {
                if(!user.firstLogin) {
                    req.session.authenticated = true;
                }

                req.session.user = user;
                res.ok({ userId: user.id, firstLogin: user.firstLogin });
            }
        });
    },
    doUpdate: function(req, res) {
        var user = {
                id: req.session.user.id,
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
                req.session.authenticated = true;
                req.session.user = user;
                res.ok();
            }
        });
    }
};


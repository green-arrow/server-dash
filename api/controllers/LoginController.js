/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function(req, res) {
        res.view({ layout: 'login-layout.ejs' });
    },
    doLogin: function(req, res) {
        var email = req.param('email'),
            password = req.param('password');

        sails.log.info('Processing login for ' + email);

        Users.findOneByEmail(email).then(function(user) {
            if (user) {
                sails.log.info('User lookup successful, validating passwords now.');

                var bcrypt = require("bcrypt");

                bcrypt.hash(password, user.salt, function (err, hash) {
                    if(err) {
                        sails.log.error('Failed to generate password with bcrypt.\n', err);
                        res.send(500, { error: 'Failed to generate password hash with bcrypt: ' + err });
                    } else {
                        if(hash === user.password) {
                            sails.log.info('Password validated successfully');
                            req.session.user = user;
                            res.redirect('/');
                        } else {
                            sails.log.info('Password invalid');
                            res.send(400, { error: "Password incorrect" });
                        }
                    }
                });
            } else {
                sails.log.info('User lookup failed: user not found.');
                res.send(404, { error: "User not found" });
            }
        }).fail(function(err) {
            sails.log.error('Error with DB.\n', err);
            res.send(500, { error: "DB Error" });
        });
    }
};


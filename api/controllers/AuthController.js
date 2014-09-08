/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    logout: function(req, res) {
        if(req.session.authenticated) {
            req.session.destroy();
        }

        res.redirect('/auth/login');
    },
	login: function(req, res) {
        if(req.session.authenticated) {
            res.redirect('/');
        } else if(req.session.user) {
            res.redirect('/auth/update');
        } else {
            res.view({ layout: 'login-layout.ejs' });
        }
    },
    update: function(req, res) {
        if(req.session.authenticated) {
            res.redirect('/');
        } else if (!req.session.user) {
            res.redirect('/auth/login');
        } else {
            res.view({ layout: 'login-layout.ejs' });
        }
    },
    doLogin: function(req, res) {
        var email = req.param('email'),
            password = req.param('password');

        sails.log.info('Processing login for ' + email);

        User.findOneByEmail(email).then(function(user) {
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
                            var url = '/';
                            if(!user.firstLogin) {
                                req.session.authenticated = true;
                                url = '/auth/update';
                            }

                            req.session.user = user;
                            res.redirect(url);
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
    },
    doUpdate: function(req, res) {
        var userId = req.session.user.id,
            newEmail = req.param('newEmail'),
            newPassword = req.param('newPassword');

        User.findOneById(userId).then(function(user) {
            if(!user) {
                sails.log.info('User lookup failed: user not found.');
                res.send(404, { error: "User not found" });
            } else {
                var bcrypt = require('bcrypt');

                bcrypt.hash(newPassword, user.salt, function (err, hash) {
                    if(err) {
                        sails.log.error('Failed to generate password hash with bcrypt.\n', err);
                        res.serverError({ error: 'Failed to generate password hash.' });
                    } else {
                        User.update(user.id, {
                            email: newEmail,
                            password: hash,
                            firstLogin: false
                        }, function (err, saved) {
                            if (err || !saved) {
                                sails.log.error('Failed to update user.\n', err || '');
                                res.serverError({ error: 'Failed to update user.' });
                            } else {
                                sails.log.info('User updated successfully.');
                                req.session.authenticated = true;
                                res.redirect('/');
                            }
                        });
                    }
                });
            }
        });
    }
};


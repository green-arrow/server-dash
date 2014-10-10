var UserService = require('../services/UserService');

module.exports = {
    findOne: function(req, res) {
        UserService.findById(req.param('id'), function(err, user) {
            if(err) {
                if(err.serverError) {
                    res.serverError({ errors: err.messages });
                } else {
                    res.badRequest({ errors: err.messages });
                }
            } else {
                res.ok({
                    user: user
                });
            }
        });
    },
    update: function(req, res) {
        UserService.updateUser(req.body.user, function(err, user) {
            if(err) {
                if(err.serverError) {
                    res.serverError({ errors: err.messages });
                } else {
                    res.badRequest({ errors: err.messages });
                }
            } else {
                req.session.user = user;
                res.ok({
                    user: user
                });
            }
        });
    },
    validate: function(req, res) {
        var userId = req.session.user.id,
            password = req.param('password');

        UserService.validateById(userId, password, function(err, user) {
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
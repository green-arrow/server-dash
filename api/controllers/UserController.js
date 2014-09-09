module.exports = {
    findOne: function(req, res) {
        User.findOneById(req.param('id')).then(function(user) {
            if(!user) {
                res.send(404, { errors: [ "User not found" ] });
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
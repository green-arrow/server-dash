module.exports = {
	index: function(req, res) {
        var userId = req.session.user ? req.session.user.id : undefined,
            firstLogin = userId ? req.session.user.firstLogin : false;

        res.view({ userId: userId, firstLogin: firstLogin });
    }
};


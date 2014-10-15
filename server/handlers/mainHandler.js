module.exports = {
	index: function(req, res) {
        var userId = req.auth.credentials && req.auth.credentials.user ? req.auth.credentials.user.id : undefined,
            firstLogin = userId ? req.auth.credentials.user.firstLogin : false;

        res.view('index', { userId: userId, firstLogin: firstLogin });
    }
};


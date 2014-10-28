module.exports = {
	index: function(request, reply) {
        var userId = request.auth.credentials && request.auth.credentials.user ? request.auth.credentials.user.id : undefined,
            firstLogin = userId ? request.auth.credentials.user.firstLogin : false;

        reply.view('index', { userId: userId, firstLogin: firstLogin });
    }
};


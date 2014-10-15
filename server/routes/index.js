var authHandler = require('../handlers/authHandler'),
    mainHandler = require('../handlers/mainHandler'),
    profileHandler = require('../handlers/profileHandler'),
    profileWidgetHandler = require('../handlers/profileWidgetHandler'),
    userHandler = require('../handlers/userHandler'),
    widgetHandler = require('../handlers/widgetHandler');

module.exports.registerRoutes = function(server) {
    /* Static files */
    server.route({
        method: 'GET',
        path: '/assets/{param*}',
        handler: {
            directory: {
                path: 'dist'
            }
        }
    });

    /* Authentication */
    server.route({
        method: 'GET',
        path: '/api/session/logout',
        handler: authHandler.logout
    });

    server.route({
        method: 'POST',
        path: '/api/session/login',
        handler: authHandler.doLogin
    });

    server.route({
        method: 'GET',
        path: '/api/session/update',
        handler: authHandler.doUpdate
    });

    /* RESTful API */
    server.route({
        method: 'GET',
        path: '/api/users/{id}',
        handler: userHandler.findOne
    });

    server.route({
        method: 'PUT',
        path: '/api/users',
        handler: userHandler.update
    });

    server.route({
        method: 'GET',
        path: '/api/users/validate',
        handler: userHandler.validate
    });

    server.route({
        method: 'GET',
        path: '/api/profiles',
        handler: profileHandler.index
    });

    server.route({
        method: 'GET',
        path: '/api/profileWidgets/{id}',
        handler: profileWidgetHandler.findOne
    });

    server.route({
        method: 'PUT',
        path: '/api/profileWidgets/{id}',
        handler: profileWidgetHandler.update
    });

    server.route({
        method: 'GET',
        path: '/api/widgets',
        handler: widgetHandler.index
    });

    server.route({
        method: 'GET',
        path: '/api/widgets/general',
        handler: widgetHandler.general
    });

    /* Main application */
    server.route({
        method: 'GET',
        path: '/{path*}',
        config: {
            auth: false
        },
        handler: mainHandler.index
    });
};
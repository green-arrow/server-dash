var path = require('path'),
    hapi = require('hapi'),
    good = require('good'),
    server = new hapi.Server(3000),
    routes = require('./server/routes'),
    db = require('./server/services/db');

// Setup server
routes.registerRoutes(server);
server.views({
    engines: {
        html: require('handlebars')
    },
    path: path.join(__dirname, 'server/views')
});

console.log('Attempting to connect to MongoDB via Mongoose...');
db.connect(function(valid) {
    if(valid) {
        console.log('Successfully connected to MongoDB via Mongoose!');

        // Application setup
        var argv = require('minimist')(process.argv.slice(2));

        if(argv['force-setup']) {
            require('shelljs/global');
            console.log('--force-setup flag detected, dropping server-dash database and running setup script.');
            exec('mongo server-dash --eval "db.dropDatabase()"');
        }

        var setup = require('./setup/setup.js');

        setup.userSetup(function() {
            setup.widgetSetup(function() {
                server.pack.register([good, require('hapi-auth-cookie')], function(err) {
                    if(err) {
                        throw err; // plugin failed
                    }

                    server.auth.strategy('session', 'cookie', {
                        password: 'Th!sAppR0cks!', // cookie secret
                        cookie: '_serverDashAuth', // cookie name
                        redirectTo: false,
                        isSecure: false,
                        ttl: 1000 * 60 * 60 * 24
                    });

                    server.start(function() {
                        server.log('info', 'Server running at: ', server.info.uri);
                    });
                });
            });
        });
    } else {
        console.error('Error in Mongoose connection.');
    }
});

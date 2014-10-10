/**
 * app.js
 *
 * Use `app.js` to run your app without `sails lift`.
 * To start the server, run: `node app.js`.
 *
 * This is handy in situations where the sails CLI is not relevant or useful.
 *
 * For example:
 *   => `node app.js`
 *   => `forever start app.js`
 *   => `node debug app.js`
 *   => `modulus deploy`
 *   => `heroku scale`
 *
 *
 * The same command-line arguments are supported, e.g.:
 * `node app.js --silent --port=80 --prod`
 */

// Ensure a "sails" can be located:
(function() {
    var sails;
    try {
        sails = require('sails');
    } catch (e) {
        console.error('To run an app using `node app.js`, you usually need to have a version of `sails` installed in the same directory as your app.');
        console.error('To do that, run `npm install sails`');
        console.error('');
        console.error('Alternatively, if you have sails installed globally (i.e. you did `npm install -g sails`), you can use `sails lift`.');
        console.error('When you run `sails lift`, your app will still use a local `./node_modules/sails` dependency if it exists,');
        console.error('but if it doesn\'t, the app will run with the global sails instead!');
        return;
    }

    // Try to get `rc` dependency
    var rc;
    try {
        rc = require('rc');
    } catch (e0) {
        try {
            rc = require('sails/node_modules/rc');
        } catch (e1) {
            console.error('Could not find dependency: `rc`.');
            console.error('Your `.sailsrc` file(s) will be ignored.');
            console.error('To resolve this, run:');
            console.error('npm install rc --save');
            rc = function () { return {}; };
        }
    }

    var db = require('./api/services/db');
    sails.log.info('Attempting to connect to MongoDB via Mongoose...');
    db.connect(function(valid) {
        if(valid) {
            sails.log.info('Successfully connected to MongoDB via Mongoose!');

            // Application setup
            var argv = require('minimist')(process.argv.slice(2));

            if(argv['force-setup']) {
                require('shelljs/global');
                sails.log.info('--force-setup flag detected, dropping server-dash database and running setup script.');
                exec('mongo server-dash --eval "db.dropDatabase()"');
            }

            var setup = require('./setup/setup.js');

            setup.userSetup(function() {
                setup.widgetSetup(function() {
                    sails.lift(rc('sails'));
                });
            });
        } else {
            sails.log.error('Error in Mongoose connection: ', error);
        }
    });
})();

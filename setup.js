/**
 * Setup the MongoDB instance with initial data.
 * This includes the default user account and
 * available widgets.
 */
var sails = require('sails');
var bcrypt = require('bcrypt');

sails.log.info('Running server-dash application setup.');

var dbConfig = require('./config/connections').connections.mongoDb;
var databaseURI = dbConfig.host + ':' + dbConfig.port + '/' + dbConfig.database;
var collections = ["users", "widgets"];

sails.log.info('Connecting to MongoDB: ', databaseURI)

var db = require("mongojs").connect(databaseURI, collections);

sails.log.info('Successfully connected to MongoDB instance.');

var email = 'admin@localhost',
    password = 'Adm!n';

db.users.find({email: email}, function(err, users) {
    if(err) {
        sails.log.error('Failed user lookup.\n', err);
        process.exit(1);
    } else if(users.length > 0) {
        sails.log.info('Located default user, skipping user generation.');
    } else {
        sails.log.info('Generating default user...');
        generateDefaultUser(function() {
            // TODO: generate available widgets
        });
    }
});

var generateDefaultUser = function(callback) {
    bcrypt.genSalt(10, function(err, salt) {
        if(err) {
            sails.log.error('Failed to generate salt with bcrypt.\n', err);
            process.exit(1);
        } else {
            bcrypt.hash(password, salt, function (err, hash) {
                if(err) {
                    sails.log.error('Failed to generate password hash with bcrypt.\n', err);
                    process.exit(1);
                } else {
                    db.users.save({email: email, password: hash, salt: salt}, function (err, saved) {
                        if (err || !saved) {
                            sails.log.error('Failed to create default user.\n', err || '');
                        } else {
                            sails.log.info('Default user created successfully.');
                            sails.log.info('Please use the following credentials for your initial login.');
                            sails.log.info('Email: ', email);
                            sails.log.info('Password: ', password);

                            callback.call();
                        }
                    });
                }
            });
        }
    });
};
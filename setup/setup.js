/**
 * Setup the MongoDB instance with initial data.
 * This includes the default user account and
 * available widgets.
 */
var sails = require('sails');
var bcrypt = require('bcrypt');

sails.log.info('Running server-dash application setup.');

var dbConfig = require('./../config/connections').connections.mongoDb;
var databaseURI = dbConfig.host + ':' + dbConfig.port + '/' + dbConfig.database;
var collections = ["user", "widget", 'profile', 'profileWidget'];

sails.log.info('Connecting to MongoDB: ', databaseURI)

var mongojs = require('mongojs');
var db = mongojs.connect(databaseURI, collections);

sails.log.info('Successfully connected to MongoDB instance.');

var email = 'admin@localhost',
    password = 'Adm!n',
    needsDashboardGenerated = true;

module.exports.userSetup = function(callback) {
    this.userExists(function(found) {
        if(found) {
            sails.log.info('Located default user, skipping user generation.');
            needsDashboardGenerated = false;
            callback.call(this);
        } else {
            sails.log.info('Generating default user...');
            module.exports.generateDefaultUser(callback);
        }
    });
};

module.exports.widgetSetup = function(callback) {
    this.widgetsExist(function(found) {
        if(found) {
            sails.log.info('Found widgets in database, skipping widget generation.');
            callback.call(this);
        } else {
            sails.log.info('Generating widget database records.');
            module.exports.generateWidgets(callback);
        }
    });
};

module.exports.userExists = function(callback) {
    db.user.find({}, function(err, users) {
        if(err) {
            sails.log.error('Failed user lookup.\n', err);
            process.exit(1);
        }

        callback.call(this, users.length > 0);
    });
};

module.exports.generateDefaultUser = function(callback) {
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
                    db.user.save({email: email, password: hash, firstLogin: true}, function (err, saved) {
                        if (err || !saved) {
                            sails.log.error('Failed to create default user.\n', err || '');
                            process.exit(1);
                        } else {
                            sails.log.info('Default user created successfully.');
                            sails.log.info('Please use the following credentials for your initial login.');
                            sails.log.info('Email: ', email);
                            sails.log.info('Password: ', password);

                            callback.call(this);
                        }
                    });
                }
            });
        }
    });
};

module.exports.widgetsExist = function(callback) {
    db.widget.find({}, function(err, widgets) {
        if(err) {
            sails.log.error('Failed widget lookup.\n', err);
            process.exit(1);
        }

        callback.call(this, widgets.length > 0);
    });
};

module.exports.generateWidgets = function(callback) {
    var widgets = require('./widgets.js');

    db.widget.insert(widgets, function(err, saved) {
        if(err || !saved) {
            sails.log.error('Failed to generate widgets.\n', err || '');
            process.exit(1);
        } else {
            sails.log.info('Widgets successfully created.');
            callback.call(this);
        }
    });
};
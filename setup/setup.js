/**
 * Setup the MongoDB instance with initial data.
 * This includes the default user account and
 * available widgets.
 */
var bcrypt = require('bcrypt'),
    User = require('../server/models/user'),
    Widget = require('../server/models/widget');

console.log('Running server-dash application setup.');

var email = 'admin@local.host',
    password = 'Adm!n',
    needsDashboardGenerated = true;

module.exports.userSetup = function(callback) {
    this.userExists(function(found) {
        if(found) {
            console.log('Located default user, skipping user generation.');
            needsDashboardGenerated = false;
            callback.call(this);
        } else {
            console.log('Generating default user...');
            module.exports.generateDefaultUser(callback);
        }
    });
};

module.exports.widgetSetup = function(callback) {
    this.widgetsExist(function(found) {
        if(found) {
            console.log('Found widgets in database, skipping widget generation.');
            callback.call(this);
        } else {
            console.log('Generating widget database records.');
            module.exports.generateWidgets(callback);
        }
    });
};

module.exports.userExists = function(callback) {
    User.find({}, function(err, users) {
        if(err) {
            console.error('Failed user lookup.\n', err);
            process.exit(1);
        }

        callback.call(this, users.length > 0);
    });
};

module.exports.generateDefaultUser = function(callback) {
    bcrypt.genSalt(10, function(err, salt) {
        if(err) {
            console.error('Failed to generate salt with bcrypt.\n', err);
            process.exit(1);
        } else {
            bcrypt.hash(password, salt, function (err, hash) {
                if(err) {
                    console.error('Failed to generate password hash with bcrypt.\n', err);
                    process.exit(1);
                } else {
                    User.create({email: email, password: hash, firstLogin: true}, function (err, saved) {
                        if (err || !saved) {
                            console.error('Failed to create default user.\n', err || '');
                            process.exit(1);
                        } else {
                            console.log('Default user created successfully.');
                            console.log('Please use the following credentials for your initial login.');
                            console.log('Email: ', email);
                            console.log('Password: ', password);

                            callback.call(this);
                        }
                    });
                }
            });
        }
    });
};

module.exports.widgetsExist = function(callback) {
    Widget.find({}, function(err, widgets) {
        if(err) {
            console.error('Failed widget lookup.\n', err);
            process.exit(1);
        }

        callback.call(this, widgets.length > 0);
    });
};

module.exports.generateWidgets = function(callback) {
    var widgets = require('./widgets.js');

    Widget.create(widgets, function(err, saved) {
        if(err || !saved) {
            console.error('Failed to generate widgets.\n', err || '');
            process.exit(1);
        } else {
            console.log('Widgets successfully created.');
            callback.call(this);
        }
    });
};
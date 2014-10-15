var User = require('../models/user');

var sanitize = function(obj){
    obj = obj.toObject();
    obj.id = obj._id.toString();
    delete obj._id;
    delete obj.__v;
    delete obj.password;

    return obj;
};

var validate = function(lookupCriteria, password, callback) {
    var error = {
        serverError: false,
        messages: []
    };

    User.findOne(lookupCriteria).exec(function(err, user) {
        if (err) {
            console.error('User lookup failed: ', err);
            error.messages.push('User lookup failed');
            error.serverError = true;
        } else if (user) {
            var bcrypt = require("bcrypt");

            bcrypt.compare(password, user.password, function(err, result) {
                if(err) {
                    error.messages.push('Failed to compare with bcrypt.');
                    error.serverError = true;
                } else if(!result) {
                    error.messages.push('Invalid password.');
                } else {
                    error = null;
                }

                callback(error, sanitize(user));
            });
        } else {
            error.messages.push('User lookup failed.');
            callback(error);
        }
    });
};

exports.validateById = function(userId, password, callback) {
    validate({ _id: userId }, password, callback);
};

exports.validateByEmail = function(email, password, callback) {
    validate({ email: email }, password, callback);
};

exports.findById = function(userId, callback) {
    var error = {
        serverError: false,
        messages: []
    };

    User.findOne({ "_id": userId }).exec(function(err, user) {
        if (err) {
            console.error('User lookup failed: ', err);
            error.messages.push('User lookup failed');
            error.serverError = true;
        } else if (user) {
            callback(null, sanitize(user));
        } else {
            error.messages.push('User lookup failed.');
            callback(error);
        }
    });
};

exports.generateHash = function(password, callback) {
    var bcrypt = require('bcrypt'),
        error = {
            serverError: false,
            messages: []
        };

    bcrypt.genSalt(10, function(err, salt) {
        if(err) {
            error.messages.push('Failed to generate salt with bcrypt.');
            error.serverError = true;
            callback(error);
        } else {
            bcrypt.hash(password, salt, function(err, hash) {
                if(err) {
                    error.messages.push('Failed to generate hash with bcrypt.');
                    error.serverError = true;
                    callback(error);
                } else {
                    callback(null, hash);
                }
            });
        }
    });
};

exports.updateUser = function(user, callback) {
    var userId = user.id,
        email = user.email,
        password = user.password,
        firstLogin = user.firstLogin,
        error = {
            serverError: false,
            messages: []
        },
        updateUser = function(user) {
            user.save(function (err, saved) {
                if (err || !saved) {
                    if(err.name === 'ValidationError') {
                        Object.keys(err.errors).forEach(function(key) {
                            error.messages.push(err.errors[key].message);
                        });
                    } else {
                        console.error('Failed to update user.\n', err || '');
                        error.serverError = true;
                        error.messages.push('Unexpected error');
                    }

                    callback(error);
                } else {
                    console.log('User updated successfully.');
                    callback(null, sanitize(user));
                }
            });
        };

    User.findOne({ "_id": userId }).exec(function(err, user) {
        if(email) {
            user.email = email;
        }

        if(firstLogin !== undefined) {
            user.firstLogin = firstLogin;
        }

        if(password) {
            exports.generateHash(password, function(err, hash) {
                if(err) {
                    error.messages.push('Error generating hash with bcrypt.');
                    error.serverError = true;
                    callback(error)
                } else {
                    user.password = hash;
                    updateUser(user);
                }
            });
        } else {
            updateUser(user);
        }
    });
};
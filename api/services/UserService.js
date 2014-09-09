var validate = function(lookupCriteria, password, callback) {
    var error = {
        serverError: false,
        messages: []
    };

    User.findOne(lookupCriteria).then(function(user) {
        if (user) {
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

                callback(error, user);
            });
        } else {
            error.messages.push('User lookup failed.');
            callback(error);
        }
    }).fail(function(err) {
        error.messages.push('Database error');
        error.serverError = true;
        callback(error);
    });
}

exports.validateById = function(userId, password, callback) {
    validate({ id: userId }, password, callback);
};

exports.validateByEmail = function(email, password, callback) {
    validate({ email: email }, password, callback);
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
        updatedObj = {},
        error = {
            serverError: false,
            messages: []
        },
        updateUser = function() {
            User.update(userId, updatedObj,
                function (err, saved) {
                    if (err || !saved) {
                        if(err.ValidationError) {
                            error.messages = ValidationService.getErrorMessages('user', err.ValidationError);
                        } else {
                            sails.log.error('Failed to update user.\n', err || '');
                            error.serverError = true;
                            error.messages.push('Unexpected error');
                        }

                        callback(error);
                    } else {
                        sails.log.info('User updated successfully.');
                        callback(null, saved[0]);
                    }
                });
        };

    if(email) {
        updatedObj['email'] = email;
    }

    if(firstLogin !== undefined) {
        updatedObj['firstLogin'] = firstLogin;
    }

    if(password) {
        exports.generateHash(password, function(err, hash) {
            if(err) {
                error.messages.push('Error generating hash with bcrypt.');
                error.serverError = true;
                callback(error)
            } else {
                updatedObj['password'] = hash;
                updateUser();
            }
        });
    } else {
        updateUser();
    }
};
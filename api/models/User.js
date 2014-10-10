var mongoose = require('mongoose'),
    schema = mongoose.Schema,
    objectId = schema.ObjectId,
    userSchema = schema({
        email:             { type: String, required: 'E-mail is required' },
        password:          { type: String, required: 'Password is required' },
        firstLogin:        Boolean,
        lastUpdatedDate:   { type: Date, default: Date.now }
    }),
    User = mongoose.model('user', userSchema);

User.schema.path('email').validate(function(email) {
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}, 'Invalid e-mail address');

module.exports = User;

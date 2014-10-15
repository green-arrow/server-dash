var mongoose = require('mongoose'),
    schema = mongoose.Schema,
    objectId = schema.ObjectId,
    profileSchema = schema({
        name:              String,
        icon:              String,
        user:              { type: objectId, ref: 'user' },
        profileWidgets:    [{ type: objectId, ref: 'profileWidget' }]
    }),
    Profile = mongoose.model('profile', profileSchema);

module.exports = Profile;

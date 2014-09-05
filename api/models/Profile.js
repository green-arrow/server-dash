/**
* Profile.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        name: {
            type: 'string',
            required: true
        },
        icon: {
            type: 'string',
            required: true
        },
        user: {
            model: 'user'
        },
        profileWidgets: {
            collection: 'profileWidget',
            via: 'profile'
        },
        toJSON: function() {
            var obj = this.toObject();
            obj.profileWidgets = this.profileWidgets;
            delete obj.createdAt;
            delete obj.updatedAt;
            return obj;
        }
    }
};


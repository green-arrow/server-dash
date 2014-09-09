/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    email: {
        type: 'email',
        required: true,
        index: true,
        unique: true
    },
    password: {
        type: 'string',
        required: true
    },
    firstLogin: {
        type: 'boolean'
    },
    profiles: {
        collection: 'profile',
        via: 'user'
    },
    toJSON: function() {
        var obj = this.toObject();
        delete obj.password;
        delete obj.createdAt;
        delete obj.updatedAt;
        return obj;
    }
  }
};


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
    salt: {
        type: 'string',
        required: true
    },
    profiles: {
        collection: 'profile',
        via: 'user'
    }
  }
};


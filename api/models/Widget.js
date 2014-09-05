/**
* Widget.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        id: {
            type: 'integer',
            primaryKey: true,
            required: true
        },
        name: {
            type: 'string',
            required: true
        },
        displayName: {
            type: 'string',
            required: true
        },
        profileWidgets: {
            collection: 'profileWidget',
            via: 'widget'
        }
    }
};


var sails = require('sails'),
    mongoose = require('mongoose'),
    connection = require('../../config/connections').connections.mongoDb,
    db = mongoose.connection;

module.exports = {
    connect: function(callback) {
        mongoose.connect('mongodb://' + connection.host + ':' + connection.port + '/' + connection.database);

        db.on('error', function(){
            callback(false);
        });

        db.once('open', function() {
            callback(true);
        });
    }
}
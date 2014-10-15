var mongoose = require('mongoose'),
    db = mongoose.connection;

module.exports = {
    connect: function(callback) {
        mongoose.connect('mongodb://localhost:27017/server-dash');

        db.on('error', function(){
            callback(false);
        });

        db.once('open', function() {
            callback(true);
        });
    }
}
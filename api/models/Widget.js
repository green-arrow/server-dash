var mongoose = require('mongoose'),
    schema = mongoose.Schema,
    widgetSchema = schema({
        _id:               Number,
        name:              { type: String, required: true },
        displayName:       { type: String, required: true }
    }),
    Widget = mongoose.model('widget', widgetSchema);

module.exports = Widget;


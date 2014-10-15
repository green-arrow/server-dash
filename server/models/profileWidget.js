var mongoose = require('mongoose'),
    schema = mongoose.Schema,
    profileWidgetSchema = schema({
        sortOrder:          Number,
        widget:             { type: Number, ref: 'widget' },
        lastUpdatedDate:    { type: Date, default: Date.now }
    }),
    ProfileWidget = mongoose.model('profileWidget', profileWidgetSchema);

module.exports = ProfileWidget;


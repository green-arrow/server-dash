ServerDash.ProfileWidgetModel = DS.Model.extend({
    sortOrder: DS.attr('number'),
    widget: DS.belongsTo('widget')
});

ServerDash.ProfileModel = DS.Model.extend({
    name: DS.attr('string'),
    widgets: DS.hasMany('widget')
});

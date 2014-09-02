ServerDash.ProfileModel = DS.Model.extend({
    name: DS.attr('string'),
    icon: DS.attr('string'),
    widgets: DS.hasMany('widget')
});

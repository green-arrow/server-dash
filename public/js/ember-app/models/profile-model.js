ServerDash.ProfileModel = DS.Model.extend({
    name: DS.attr('string'),
    icon: DS.attr('string'),
    profileWidgets: DS.hasMany('profileWidget', { async: true })
});

ServerDash.UserModel = DS.Model.extend({
    email: DS.attr('string'),
    password: DS.attr('string'),
    newPassword: DS.attr('string')
});

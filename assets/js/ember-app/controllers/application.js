ServerDash.ApplicationController = Ember.Controller.extend({
    actions: {
        logout: function() {
            window.location = '/auth/logout';
        }
    }
});
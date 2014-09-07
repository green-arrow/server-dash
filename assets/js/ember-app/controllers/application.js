ServerDash.ApplicationController = Ember.Controller.extend({
    actions: {
        logout: function() {
            Ember.$.post('auth/logout', function() {
                // Force page reload
                window.location = window.location;
            });
        }
    }
});
ServerDash.LoginRoute = Ember.Route.extend({
    beforeModel: function() {
        var appController = this.controllerFor('application'),
            userId = appController.get('userId'),
            firstLogin = appController.get('firstLogin');

        if(userId) {
            this.transitionTo('profiles');
        } else if(firstLogin) {
            this.transitionTo('accountSetup');
        }
    }
});
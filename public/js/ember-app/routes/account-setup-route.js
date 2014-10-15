ServerDash.AccountSetupRoute = Ember.Route.extend({
    beforeModel: function() {
        var appController = this.controllerFor('application'),
            userId = appController.get('userId'),
            firstLogin = appController.get('firstLogin');
        console.log('firstLogin: ' + firstLogin);
        if(!userId) {
            this.transitionTo('login');
        } else if(!firstLogin) {
            this.transitionTo('index');
        }
    }
});

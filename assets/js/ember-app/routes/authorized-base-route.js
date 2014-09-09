ServerDash.AuthorizedBaseRoute = Ember.Route.extend({
    beforeModel: function() {
        var appController = this.controllerFor('application'),
            userId = appController.get('userId'),
            firstLogin = appController.get('firstLogin');
        console.log('user id is ' + userId);
        if(!userId) {
            this.transitionTo('login');
        } else if(firstLogin) {
            this.transitionTo('accountSetup');
        }
    }
});

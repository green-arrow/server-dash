ServerDash.ProfilesRoute = ServerDash.AuthorizedBaseRoute.extend({
    model: function() {
        var that = this,
            store = that.store;

        return store.find('profile').catch(function(error) {
            if(error.responseJSON.firstLogin) {
                that.controllerFor('application').set('firstLogin', true);
                that.transitionTo('accountSetup');
            }
        });
    }
});

ServerDash.ProfilesIndexRoute = ServerDash.AuthorizedBaseRoute.extend({
    redirect: function() {
        var profile = this.modelFor('profiles').content[0];
        this.transitionTo('activeProfile', profile);
    }
});

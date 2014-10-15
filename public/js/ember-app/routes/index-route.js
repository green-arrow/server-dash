ServerDash.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('profiles');
    }
});
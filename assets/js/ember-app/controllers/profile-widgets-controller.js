ServerDash.ProfileWidgetsController = Ember.Controller.extend(Ember.Evented, {
    needs: 'activeProfile',
    profileBinding: 'controllers.activeProfile.model',
    widgetDataBinding: 'controllers.activeProfile.widgetData',
    profileObserver: function() {
        this.trigger('profileChanged');
    }.observes('profile.id')
});
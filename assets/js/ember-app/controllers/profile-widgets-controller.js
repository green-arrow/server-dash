ServerDash.ProfileWidgetsController = Ember.Controller.extend(Ember.Evented, {
    needs: 'activeProfile',
    profileBinding: 'controllers.activeProfile.model',
    widgetDataBinding: 'controllers.activeProfile.widgetData',
    profileObserver: function() {
        this.trigger('profileChanged');
    }.observes('profile.id'),
    actions: {
        save: function() {
            var that = this,
                toSave = [];

            that.get('model.content').forEach(function(item) {
                if(item.get('isDirty')) {
                    toSave.push(item);
                }
            });

            toSave.invoke('save');
        }
    }
});
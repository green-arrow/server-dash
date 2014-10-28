ServerDash.ProfilesController = Ember.Controller.extend({
    needs: 'application',
    mobileSidebarVisibleBinding: 'controllers.application.mobileSidebarVisible',
    actions: {
        selectProfile: function(profile) {
            this.set('mobileSidebarVisible', false);
            this.transitionToRoute('activeProfile', profile);
        },
        showAddWidget: function() {
            this.set('mobileSidebarVisible', false);
            this.transitionToRoute('widgets.add');
        }
    }
});

ServerDash.ProfilesController = Ember.Controller.extend({
    needs: 'application',
    mobileSidebarVisibleBinding: 'controllers.application.mobileSidebarVisible',
    actions: {
        selectProfile: function(profile) {
            this.transitionToRoute('activeProfile', profile);
        },
        showAddWidget: function() {
            this.transitionToRoute('widgets.add');
        }
    }
});
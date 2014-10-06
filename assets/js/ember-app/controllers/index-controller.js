ServerDash.IndexController = Ember.Controller.extend({
    needs: 'application',
    mobileSidebarVisibleBinding: 'controllers.application.mobileSidebarVisible',
    activeProfileId: null,
    actions: {
        selectProfile: function(profile) {
            var that = this,
                profileId;

            if(profile) {
                profileId = profile.id;
            } else {
                profileId = that.get('model')[0].id;
            }

            that.set('activeProfileId', profileId);
        },
        showAddWidget: function() {
            this.transitionToRoute('widgets.add');
        }
    }
});
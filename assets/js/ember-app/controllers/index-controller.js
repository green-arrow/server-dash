ServerDash.IndexController = Ember.Controller.extend({
    needs: 'application',
    mobileSidebarVisibleBinding: 'controllers.application.mobileSidebarVisible',
    actions: {
        showAddWidget: function() {
            this.transitionToRoute('widgets.add');
        }
    }
});
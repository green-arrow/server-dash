ServerDash.IndexController = Ember.Controller.extend({
    needs: 'application',
    mobileSidebarVisibleBinding: 'controllers.application.mobileSidebarVisible'
});
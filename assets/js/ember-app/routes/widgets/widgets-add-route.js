ServerDash.WidgetsAddRoute = ServerDash.AuthorizedBaseRoute.extend({
    model: function(params) {
        return this.store.find('widget', { profileId: this.modelFor('activeProfile').get('id') });
    },
    setupController: function(controller, model) {
        controller.set('model', model);
        controller.set('widgetData', this.controllerFor('activeProfile').get('widgetData'));
    }
});

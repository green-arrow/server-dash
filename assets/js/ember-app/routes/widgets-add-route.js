ServerDash.WidgetsAddRoute = ServerDash.AuthorizedBaseRoute.extend({
    model: function() {
        return this.store.find('widget', { profileId: this.controllerFor('index').get('activeProfileId') });
    },
    setupController: function(controller, model) {
        controller.set('model', model);
        controller.set('widgetData', this.controllerFor('index').get('widgetData'));
    }
});

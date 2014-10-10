ServerDash.ProfileWidgetsRoute = ServerDash.AuthorizedBaseRoute.extend({
    model: function(params) {
        var that = this,
            store = that.store;

        return that.modelFor('activeProfile').get('profileWidgets');
    },
    setupController: function(controller, model) {
        controller.set('model', model);
    }
});

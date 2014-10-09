ServerDash.ActiveProfileRoute = ServerDash.AuthorizedBaseRoute.extend({
    model: function(params) {
        var that = this,
            store = that.store;

        return store.find('profile', params.profile_id);
    }
});

ServerDash.ActiveProfileIndexRoute = ServerDash.AuthorizedBaseRoute.extend({
    model: function(params) {
        return this.modelFor('activeProfile');
    },
    setupController: function(controller, model) {
        this.controllerFor('activeProfile').set('widgetData', {
            general: this.store.find('widgetGeneral', 1),
            diskUsage: this.store.find('widgetDiskUsage', 1)
        });
    }
});

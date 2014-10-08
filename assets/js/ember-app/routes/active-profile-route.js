ServerDash.ActiveProfileRoute = ServerDash.AuthorizedBaseRoute.extend({
    model: function(params) {
        var that = this,
            store = that.store;

        return store.find('profile', params.profile_id).then(function(data) {
            that.controllerFor('activeProfile').set('widgetData', {
                general: store.find('widgetGeneral', 1)
            });

            return data;
        });
    }
});

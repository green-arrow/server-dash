ServerDash.IndexRoute = ServerDash.AuthorizedBaseRoute.extend({
    model: function() {
        var that = this,
            store = that.store;

        return store.find('profile').then(function(data) {
            that.controllerFor('index').set('widgetData', {
                general: store.find('widgetGeneral', 1)
            });

            return data.content;
        }).catch(function(error) {
            if(error.responseJSON.firstLogin) {
                that.controllerFor('application').set('firstLogin', true);
                that.transitionTo('accountSetup');
            }
        });
    }
});

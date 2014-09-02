ServerDash.IndexRoute = Ember.Route.extend({
    model: function() {
        var self = this,
            store = self.store;

        return store.find('profile').then(function(data) {
            self.controllerFor('index').set('widgetData', {
                general: store.find('widgetGeneral', 1)
            });

            return data.content;
        });
    }
});

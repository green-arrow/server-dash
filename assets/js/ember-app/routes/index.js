ServerDash.IndexRoute = Ember.Route.extend({
    model: function() {
        var self = this;

        return {
            profiles: this.store.find('profile'),
            widgetData: {
                general: this.store.find('widgetGeneral', 1) //generalAdapter.create().getData(this.store)
            }
        };
    }
});

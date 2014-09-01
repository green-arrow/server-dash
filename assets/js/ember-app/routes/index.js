ServerDash.IndexRoute = Ember.Route.extend({
    model: function() {
        var self = this;

        return {
            profiles: this.store.find('profile'),
            widgetData: {
                general: this.store.find('widgetGeneral') //generalAdapter.create().getData(this.store)
            }
        };
    }
});

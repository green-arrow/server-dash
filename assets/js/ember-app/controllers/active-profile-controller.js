ServerDash.ActiveProfileController = Ember.Controller.extend(Ember.Evented, {
    testFunc: function() {
        this.trigger('modelChanged');
    }.observes('model.id')
});
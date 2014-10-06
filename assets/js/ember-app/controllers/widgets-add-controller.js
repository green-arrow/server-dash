ServerDash.WidgetsAddController = Ember.Controller.extend({
    isShowing: false,
    showingDetails: false,
    actions: {
        cancel: function() {
            var that = this;

            that.set('isShowing', false);

            setTimeout(function() {
                that.transitionToRoute('index');
            }, 700);
        }
    }
});
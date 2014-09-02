ServerDash.IndexView = Ember.View.extend({
    didInsertElement: function(){
        this._super();

        ServerDash.Dashboard = Dashboard('.packery');

        ServerDash.Dashboard.initialize();

        var onProfileChange = function (e) {
            var index = e ? Ember.$(e.target).data("index") : 0;

            ServerDash.Dashboard.updateActiveView(index);

            // Update icon images
            Ember.$('.sidebar .icon[data-index]').removeClass('active');
            Ember.$('.sidebar .icon[data-index="' + ServerDash.Dashboard.getActiveIndex() + '"]').addClass('active');
        };

        // Add next action to animate button.
        Ember.$('.sidebar .icon[data-index]').on('click', onProfileChange);

        // Add widget screen
        Ember.$('.sidebar .icon.add').on('click', function () {
            ServerDash.Dashboard.showAddWidget();
        });

        // Show the first dashboard.
        setTimeout(onProfileChange, 10);
    }
});
ServerDash.IndexView = Ember.View.extend({
    didInsertElement: function(){
        this._super();

        ServerDash.Dashboard = Dashboard('.packery');

        ServerDash.Dashboard.initialize();

        var onProfileChange = function (e) {
            var packeryElements = Ember.$('.packery'),
                index, profileId;

            if(e) {
                profileId = Ember.$(e.target).closest('.profile-icon').data('target');
            } else {
                profileId = Ember.$('.sidebar .profile-icon[data-target]:first').data('target');
            }

            for(var i = 0, len = packeryElements.length; i < len; i++) {
                if (Ember.$(packeryElements[i]).data('profile-id') === profileId) {
                    index = i;
                    break;
                }
            }

            if(ServerDash.Dashboard.updateActiveView(index)) {
                // Update icon images
                Ember.$('.sidebar .profile-icon[data-target]').removeClass('active');
                Ember.$('.sidebar .profile-icon[data-target="' + profileId + '"]').addClass('active');
            }
        };

        // Add next action to animate button.
        Ember.$('.sidebar .profile-icon[data-target]').on('click', onProfileChange);

        // Add widget screen
        Ember.$('.sidebar .profile-icon.add').on('click', function () {
            ServerDash.Dashboard.showAddWidget();
        });

        // Show the first dashboard.
        setTimeout(onProfileChange, 10);
    }
});
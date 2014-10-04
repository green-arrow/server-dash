ServerDash.IndexView = Ember.View.extend({
    didInsertElement: function(){
        var that = this,
            controller = that.get('controller');

        that._super();

        ServerDash.Dashboard = Dashboard('#main .packery', {
            packeryIdAttr: 'data-profile-id',
            widgetIdAttr: 'data-profile-widget-id',
            methods: {
                saveLayout: function(profileId, items) {
                    var model = that.get('controller.model'),
                        profile, profileWidgetArray, profileWidget, item;

                    for(var i = 0, len = model.length; i < len; i++) {
                        if(model[i].get('id') === profileId) {
                            profile = model[i];
                            break;
                        }
                    }

                    if(profile) {
                        profileWidgetArray = profile.get('profileWidgets').content;
                        for (var i = 0, len = profileWidgetArray.length; i < len; i++) {
                            profileWidget = profileWidgetArray[i];
                            item = $.grep(items, function (e) {
                                return e.id === profileWidget.id;
                            })[0];
                            profileWidget.set('sortOrder', item.sortOrder);
                        }

                        profile.save();
                    }
                }
            }
        });

        ServerDash.Dashboard.initialize();

        var onProfileChange = function (e) {
            var packeryElements = Ember.$('.packery'),
                controller = that.get('controller'),
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
                controller.set('mobileSidebarVisible', false);
            }
        };

        // Add next action to animate button.
        Ember.$('.sidebar .profile-icon[data-target]').on('click', onProfileChange);

        // Show the first dashboard.
        setTimeout(onProfileChange, 10);
    }
});
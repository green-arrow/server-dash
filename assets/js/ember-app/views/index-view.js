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

        // Show the first dashboard.
        setTimeout(controller.send('selectProfile'), 10);
    },
    updateActiveProfile: function () {
        var that = this,
            packeryElements = Ember.$('.packery'),
            profileId = that.get('controller.activeProfileId'),
            index;

        if(profileId) {
            for (var i = 0, len = packeryElements.length; i < len; i++) {
                if (Ember.$(packeryElements[i]).data('profile-id') === profileId) {
                    index = i;
                    break;
                }
            }

            if (ServerDash.Dashboard.updateActiveView(index)) {
                // Update icon images
                Ember.$('.sidebar .profile-icon[data-target]').removeClass('active');
                Ember.$('.sidebar .profile-icon[data-target="' + profileId + '"]').addClass('active');
                that.set('controller.mobileSidebarVisible', false);
            }
        }
    }.observes('controller.activeProfileId')
});
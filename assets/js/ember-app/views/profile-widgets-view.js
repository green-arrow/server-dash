ServerDash.ProfileWidgetsView = Ember.View.extend({
    didInsertElement: function(){
        var that = this;

        that._super();
        that.setupPackery(false);

        that.get('controller').on('profileChanged', that.onModelChanged.bind(that));
    },
    removeDataAttributes: function(element) {
        var regex = new RegExp('^(data-)', "g");
        return element.each(function() {
            var that = $(this),
                attrsToRemove = '';

            $.each(this.attributes, function(i, attr){
                if (attr && attr.specified && attr.name.search(regex) >= 0) {
                    attrsToRemove += ' '+attr.name;
                }
            });

            that.removeAttr(attrsToRemove);
        });
    },
    onModelChanged: function() {
        var that = this,
            packeryEl = Ember.$('#main .packery');

        if(packeryEl.length) {
            if(ServerDash.Dashboard) {
                var oldDashboard = ServerDash.Dashboard.clone();
                that.removeDataAttributes(oldDashboard.getPackeryDashboard().element);
                oldDashboard.hide(true);
                Ember.run.scheduleOnce('afterRender', that, that.setupPackery);
            } else {
                Ember.run.scheduleOnce('afterRender', that, that.setupPackery);
            }
        }
    },
    setupPackery: function(withTransition) {
        var that = this,
            controller = that.get('controller'),
            packeryEl = Ember.$('#main .packery[data-profile-id="' + controller.get('profile.id') + '"]');

        withTransition = withTransition !== undefined ? withTransition : true

        if(packeryEl.length) {
            ServerDash.Dashboard = Dashboard(packeryEl, {
                packeryIdAttr: 'data-profile-id',
                widgetIdAttr: 'data-profile-widget-id',
                methods: {
                    saveLayout: function (profileId, items) {
                        var profileWidgetArray = controller.get('model.content'),
                            item;

                        if(profileWidgetArray.length) {
                            for (var i = 0, len = profileWidgetArray.length; i < len; i++) {
                                item = $.grep(items, function (e) {
                                    return e.id === profileWidgetArray[i].id;
                                })[0];
                                profileWidgetArray[i].set('sortOrder', item.sortOrder);
                            }

                            profileWidgetArray.invoke('save');
                        }
                    }
                }
            });

            ServerDash.Dashboard.initialize(withTransition);
            ServerDash.Dashboard.show();
        }
    }
});
(function () {
    window.Dashboard = function (selector, options) {
        var localOptions = $.extend(true, {
                widgetSelector: '.item',
                packeryIdAttr: 'data-packery-id',
                widgetIdAttr: 'data-widget-id',
                sortOrderAttr: 'data-sort-order',
                zeroBasedSortOrder: false,
                methods: {
                    saveLayout: function(packeryId, items) {},
                    beforeInitialLayout: onBeforeInitialLayout,
                    layoutUpdated: onLayoutUpdated,
                    draggabilly: {
                        dragStart: function (instance, event, pointer) {
                            // Once we start dragging, we want to wait to update the user's layout 
                            // until they've finished positioning the widget
                            clearTimeout(updateTimeout);
                        }
                    }
                },
                packeryOptions: {
                    isInitLayout: false,
                    containerStyle: {
                        position: 'absolute'
                    }
                }
            }, options),
            packDash, updateTimeout;

        /***** Dashboard Functions *****/

        function onBeforeInitialLayout(packery) {
            // create a hash of items by their sort order
            var itemsBySortOrder = [];
            for ( var i=0, len = packery.items.length; i < len; i++ ) {
                var item = packery.items[i],
                    sortOrder = item.element.getAttribute(localOptions.sortOrderAttr),
                    index = localOptions.zeroBasedSortOrder ? sortOrder : sortOrder - 1;
                itemsBySortOrder[ index ] = item;
            }

            packery.items = itemsBySortOrder;
        }

        function onLayoutUpdated() {
            var packDash = this;

            clearTimeout(updateTimeout);

            updateTimeout = setTimeout($.proxy(function () {
                var packeryId = packDash.element.attr(localOptions.packeryIdAttr),
                    items = this.getPackeryItems(),
                    orderedItems = [];

                for (var i = 0; i < items.length; i++) {
                    orderedItems.push({
                        id: $(items[i]).attr(localOptions.widgetIdAttr),
                        sortOrder: i + 1
                    });
                }

                localOptions.methods.saveLayout(packeryId, orderedItems);
            }, packDash), 2000);
        }

        return {
            initialize: function (immediate) {
                var self = this;

                $(selector).each(function () {
                    var container = $(this);

                    self.packDash = PackDash(container, localOptions).initialize(true);

                    self.packDash.makeDraggable().offset(immediate);
                });
            },
            show: function() {
                this.packDash.align().show();
            },
            hide: function(destroy) {
                this.packDash.offset().hide(false, destroy);
            },
            offset: function() {
                this.packDash.offset();
            },
            align: function() {
                this.packDash.align();
            },
            getPackeryDashboard: function() {
                return this.packDash;
            },
            clone: function() {
                var elClone = Ember.$(this.packDash.element).clone(),
                    dashClone;

                Ember.$(this.packDash.element).parent().append(elClone);

                dashClone = Dashboard(elClone);
                dashClone.packDash = PackDash(elClone, {
                    packeryOptions: {
                        containerStyle: {
                            position: 'absolute'
                        }
                    }
                }).initialize();

                return dashClone;
            }
        };
    };
}());
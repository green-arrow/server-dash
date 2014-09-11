(function () {
    window.PackDash = function (selector, options) {
        var body = $('body'),
            container = $(selector),
            localOptions = $.extend(true, {
                animationTimeout: 700,
                deferTimeout: 10,
                visibleItemSelector: '.visible-item',
                methods: {
                    beforeInitialLayout: function() { },
                    layoutUpdated: function () { },
                    resize: function () {
                        if (container.is(":visible")) {
                            var singleWidth = getSingleWidth(),
                                gutterWidth = getGutterWidth();

                            packery.options.rowHeight = getRowHeight();

                            container.find(localOptions.packeryOptions.itemSelector).each(function () {
                                var $this = $(this),
                                    width = $this.width(),
                                    multiplier = getWidgetHeight($this) || Math.floor(width / singleWidth),
                                    height = (multiplier * singleWidth * 9 / 16) + (gutterWidth * (multiplier - 1));

                                $this.height(height);
                            });

                            setTimeout(function() {
                                packery.layout();
                            }, 500);
                        }
                    },
                    packery: {
                        dragItemPositioned: function () {
                            var self = this;
                            setTimeout(function () {
                                packery.layout();

                                self.methods.layoutUpdated.apply(self);
                            }, localOptions.deferTimeout);
                        }
                    }
                },
                packeryOptions: {
                    isInitLayout: false,
                    columnWidth: '.grid-sizer',
                    gutter: '.gutter-sizer',
                    itemSelector: '.item'
                }
            }, options),
            toHide = false,
            connect = function () {
                var self = this;

                $(window).smartresize(self.methods.resize);

                for (var property in self.methods.packery) {
                    if (self.methods.packery.hasOwnProperty(property)) {
                        packery.on(property, self.methods.packery[property].bind(self));
                    }
                }

                self.methods.resize();

                return this;
            },
            packery;

        function getRowHeight() {
            return getSingleWidth() * 9 / 16;
        }

        function getWidgetHeight(widget) {
            var screenWidth = $(window).width(),
                widgetHeights = JSON.parse(widget.attr('data-height')),
                prefix;

            if (screenWidth >= 1200) { prefix = 'xl'; }
            else if (screenWidth < 1200 && screenWidth >= 992) { prefix = 'lg'; }
            else if (screenWidth < 992 && screenWidth >= 768) { prefix = 'md'; }
            else if (screenWidth < 768 && screenWidth >= 482) { prefix = 'sm'; }
            else { prefix = 'xs'; }

            return widgetHeights[prefix];
        }

        function getSingleWidth() {
            return container.find(localOptions.packeryOptions.columnWidth).width();
        }

        function getGutterWidth() {
            return container.find(localOptions.packeryOptions.gutter).width();
        }
        
        return {
            initialize: function(hidden) {
                packery = container.packery($.extend({
                    rowHeight: getRowHeight()
                }, localOptions.packeryOptions)).data('packery');

                connect.apply(this);

                localOptions.methods.beforeInitialLayout(packery);

                packery.layout();

                if (hidden) {
                    container.hide();
                }

                return this;
            },
            element: container,
            methods: localOptions.methods,
            getPackeryObject: function() {
                return packery;
            },
            getPackeryItems: function() {
                return packery.getItemElements();
            },
            show: function () {
                toHide = false;
                container.show();
                packery.layout();

                setTimeout(function () {
                    container.css({ opacity: 1 });
                }, localOptions.deferTimeout);

                setTimeout(function () {
                    body.css('overflow-x', 'visible');
                }, localOptions.animationTimeout);

                return this;
            },
            hide: function (instant) {
                toHide = true;
                if (instant) {
                    container.hide();
                } else {
                    setTimeout(function () {
                        body.css('overflow-x', 'hidden');
                        if (toHide) {
                            container.hide();
                        }
                    }, localOptions.animationTimeout);
                }

                container.css({ opacity: 0 });

                return this;
            },
            // ****************** LAYOUT ******************
            layout: function () {
                packery.layout();

                return this;
            },
            offset: function () {
                container.find('.widget-wrapper').each(function (index, value) {
                    var $value = $(value),
                        offsetTop = 300 - (Math.floor(Math.random() * 16) + 10) * 20,
                        offsetLeft = 300 - (Math.floor(Math.random() * 16) + 10) * 20;

                    $value.css({
                        'top': offsetTop,
                        'left': offsetLeft,
                        'right': -offsetLeft,
                        'bottom': -offsetTop
                    });
                });

                return this;
            },
            align: function () {
                setTimeout(function () {
                    container.find('.widget-wrapper').css({
                        'top': '0',
                        'left': '0',
                        'right': '0',
                        'bottom': '0'
                    });
                }, localOptions.deferTimeout);

                return this;
            },
            makeDraggable: function () {
                var self = this;

                setTimeout(function () {
                    var itemElements = packery.getItemElements();

                    for (var i = 0, len = itemElements.length; i < len; i++) {
                        var elem = itemElements[i];

                        // make element draggable with Draggabilly
                        var draggie = new Draggabilly(elem, {
                            handle: '.handle, .header'
                        });

                        for (var property in self.methods.draggabilly) {
                            if (self.methods.draggabilly.hasOwnProperty(property)) {
                                draggie.on(property, self.methods.draggabilly[property].bind(self));
                            }
                        }

                        // bind Draggabilly events to Packery
                        packery.bindDraggabillyEvents(draggie);
                    }
                }, localOptions.deferTimeout);

                return self;
            }
        };
    };
}());
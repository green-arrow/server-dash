(function () {
    window.Dashboard = function (selector, options) {
        var packeryArray = [],
            active = -1,
            localOptions = $.extend(true, {
                widgetSelector: '.item',
                methods: {
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
                    containerStyle: {
                        position: 'absolute'
                    }
                }
            }, options),
            addWidgetTemplate = '<div id="add-widget" class="packery no-left add-widget">' +
                                    '<div class="grid-sizer"></div>' +
                                    '<div class="gutter-sizer"></div>' +
                                '</div>',
            addWidgetButtonTemplate = '<div id="add-widget-button-bar" class="add-widget-button-bar"><button class="btn" data-action="cancelAdd">Cancel</button></div>',
            sampleWidgetTemplate = '<div class="item col-xl-2 col-lg-3 col-md-2 col-sm-2 col-xs-1 sample-widget">' +
                                       '<div class="header">{0}</div>' +
                                       '<div class="content">{1}</div>' +
                                       '<img src="{2}" />' +
                                       '<div class="button-bar">' +
                                           '<button class="btn btn-primary" data-action="select">Details</button>' +
                                           '<button class="btn" data-action="add">Add</button>' +
                                       '</div>' +
                                   '</div>',
            listWidgets = [],
            tableWidgets = [],
            updateTimeout,
            testAddWidgets = [
                {
                    Name: "Sample Widget 1",
                    Description: "This is a description of the widget. Here is where we will describe what data this widget provides.",
                    Image: "/Home/Images/widgets/Tasks.png"
                },
                {
                    Name: "Sample Widget 2",
                    Description: "This is a description of the widget. Here is where we will describe what data this widget provides.",
                    Image: "/Home/Images/widgets/Tasks.png"
                },
                {
                    Name: "Sample Widget 3",
                    Description: "This is a description of the widget. Here is where we will describe what data this widget provides.",
                    Image: "/Home/Images/widgets/Tasks.png"
                },
                {
                    Name: "Sample Widget 4",
                    Description: "This is a description of the widget. Here is where we will describe what data this widget provides.",
                    Image: "/Home/Images/widgets/Tasks.png"
                }
            ];

        /***** Dashboard Functions *****/

        function onLayoutUpdated() {
            var self = this;

            clearTimeout(updateTimeout);

            updateTimeout = setTimeout($.proxy(function () {
                var items = this.getPackeryItems(),
                    postItems = [],
                    url = '/Home2/api/DashboardProfile/' + this.element.data('user-dashboard-profile-id');

                for (var i = 0; i < items.length; i++) {
                    postItems.push({
                        UserProfileWidgetId: $(items[i]).data('user-profile-widget-id'),
                        SortOrder: i + 1
                    });
                }

                $.ajax({
                    type: 'PUT',
                    url: url,
                    data: { '': postItems },
                    dataType: 'JSON',
                    success: function (result) {
                        console.log(result);
                    },
                    error: function (result) {
                        console.log(result);
                    }
                });
            }, self), 2000);
        }

        /***** Add Widget Functions *****/

        function displayAddWidgetUI() {
            var container = $(addWidgetTemplate),
                buttonBar = $(addWidgetButtonTemplate),
                body = $('body'),
                contents = '';

            for (var index in testAddWidgets) {
                contents += String.format(sampleWidgetTemplate, testAddWidgets[index].Name, testAddWidgets[index].Description, testAddWidgets[index].Image);
            }

            container.append(contents);

            $('#backdrop').addClass('in dark');

            body.append(container);
            body.append(buttonBar);

            packery = container.packery({
                rowHeight: 300,
                containerStyle: {
                    position: 'absolute'
                }
            }).data('packery');

            packery.layout();

            container.addClass('in');
            buttonBar.addClass('in');
            body.find('button[data-action="cancelAdd"]').on('click', onCancelAddWidget);
            container.find('button[data-action="select"]').on('click', onSelectWidget);
            container.find('button[data-action="add"]').on('click', onAddWidget);

            return container;
        }

        function onCancelAddWidget() {
            var container = $('.add-widget'),
                buttonBar = $('.add-widget-button-bar');

            container.removeClass('in');
            buttonBar.removeClass('in');
            $('#backdrop').removeClass('in dark');

            setTimeout(function () {
                container.remove();
                buttonBar.remove();
            }, 700);
        }

        function onSelectWidget() {
            var button = $(this),
                item = button.parents('.item');

            button.hide();

            item.find('button[data-action="add"]').addClass('btn-primary');
            item.find('.button-bar').append('<button class="btn" data-action="cancel">Cancel</button>');
            item.find('button[data-action="cancel"]').on('click', onCancelSelect);

            centerWidget(item);
            hideSiblings(item);

            setTimeout(function () {
                item.find('.content').slideDown();
            }, 400);
            
        }

        function onCancelSelect() {
            var button = $(this),
                item = button.parents('.item');

            item.find('.content').slideUp();

            setTimeout(function () {
                button.remove();
                item.find('button[data-action="select"]').show();
                item.find('button[data-action="add"]').removeClass('btn-primary');

                resetWidget(item);
                showSiblings(item);
            }, 400);
        }

        function onAddWidget() {

        }

        function hideSiblings(widget) {
            widget.siblings().css({
                '-webkit-transition': 'opacity 0.4s',
                'transition': 'opacity 0.4s',
                'opacity': '0',
                'z-index': '0'
            });

            removeTransition(widget.siblings(), 400);
        }

        function showSiblings(widget) {
            widget.siblings().css({
                '-webkit-transition': 'opacity 0.4s',
                'transition': 'opacity 0.4s',
                'opacity': '1',
                'z-index': '1'
            });

            removeTransition(widget.siblings(), 400);
        }

        function centerWidget(widget) {
            var top = parseFloat(widget.css('top')),
                left = parseFloat(widget.css('left')),
                widgetWidth = widget.width(),
                widgetHeight = widget.height(),
                width = $('.add-widget').width(),
                height = $(window).height() - 76,
                posX = (width / 2) - (widgetWidth / 2),
                posY = (height / 2) - (widgetHeight / 2) - 76,
                offsetX = posX - left,
                offsetY = posY - top;

            widget.data('orig', {
                top: top,
                left: left,
                offsetX: left - posX,
                offsetY: top - posY
            });

            widget.css({
                '-webkit-transition': 'transform 0.4s',
                'transition': 'transform 0.4s',
                'transform': 'translate3d(' + offsetX + 'px, ' + offsetY + 'px, 0)'
            });

            setTimeout(function () {
                widget.css({
                    'transform': '',
                    'top': posY + 'px',
                    'left': posX + 'px'
                });
                removeTransition(widget, 0);
            }, 400);
        }

        function resetWidget(widget) {
            var orig = widget.data('orig');

            widget.css({
                '-webkit-transition': 'transform 0.4s',
                'transition': 'transform 0.4s',
                'transform': 'translate3d(' + orig.offsetX + 'px, ' + orig.offsetY + 'px, 0)'
            });

            setTimeout(function () {
                widget.css({
                    'transform': '',
                    'top': orig.top + 'px',
                    'left': orig.left + 'px'
                });
                removeTransition(widget, 0);
            }, 400);
        }

        /***** Utility Functions *****/

        function removeTransition(elements, delay) {
            if (delay > 0) {
                setTimeout(function () {
                    forceRemoveTransition(elements);
                }, delay);
            } else {
                forceRemoveTransition(elements);
            }
        }

        function forceRemoveTransition(elements) {
            elements.css({
                '-webkit-transition': '',
                'transition': ''
            });
        }

        return {
            initialize: function () {
                var self = this;

                $(selector).each(function () {
                    var container = $(this),
                        packery = PackDash(container, localOptions).initialize(true);

                    packery.makeDraggable();

                    packeryArray.push(packery);
                });
            },
            showAddWidget: function () {
                var container = displayAddWidgetUI();
            },
            updateActiveView: function (index) {
                var success = true;

                if(index !== undefined && active !== index) {
                    if(active >= 0) {
                        // Hide Current Packery.
                        packeryArray[active].offset().hide();
                    }

                    // Show Next Packery
                    active = index;
                    packeryArray[active].align().show();
                } else if(index === undefined) {
                    success = false;
                }

                return success;
            },
            getActiveIndex: function () {
                return active;
            }
        };
    };
}());
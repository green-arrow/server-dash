ServerDash.WidgetsAddView = Ember.View.extend({
    didInsertElement: function(){
        var that = this,
            controller = that.get('controller'),
            addWidgetContainer = Ember.$('#add-widget'),
            packeryDash = PackDash(addWidgetContainer, {
                packeryOptions: {
                    isInitLayout: true,
                    containerStyle: {
                        position: 'absolute'
                    }
                }
            }).initialize(false);

        packeryDash.layout();

        controller.set('isShowing', true);
    },
    actions: {
        addWidget: function(widget) {
            console.log('add widget');
        },
        showDetails: function(context) {
            var that = this,
                controller = that.get('controller'),
                widget = Ember.$('#add-widget .item[data-name="' + context.get('name') + '"]');

            controller.set('showingDetails', true);
            //widget.find('button[data-action="add"]').addClass('btn-primary');
            //widget.find('.button-bar').append('<button class="btn" data-action="cancel">Cancel</button>');
            //widget.find('button[data-action="cancel"]').on('click', onCancelSelect);

            that.centerWidget(widget);
            that.hideSiblings(widget);
        },
        hideDetails: function(context) {
            var that = this,
                controller = that.get('controller'),
                widget = Ember.$('#add-widget .item[data-name="' + context.get('name') + '"]');

            controller.set('showingDetails', false);

            that.resetWidget(widget);
            that.showSiblings(widget);
        }
    },
    displayAddWidgetUI: function() {
        var addWidgetContainer = Ember.$('#add-widget'),
            buttonBar = Ember.$('#add-widget-button-bar'),
            body = $('body');

        body.find('button[data-action="cancelAdd"]').on('click', onCancelAddWidget);
        addWidgetContainer.find('button[data-action="select"]').on('click', onSelectWidget);
        addWidgetContainer.find('button[data-action="add"]').on('click', onAddWidget);

        return addWidgetContainer;
    },

    /******* Utility Functions *******/
    hideSiblings: function(widget) {
        var that = this;

        widget.parent().siblings().find('.item').css({
            '-webkit-transition': 'opacity 0.4s',
            'transition': 'opacity 0.4s',
            'opacity': '0',
            'z-index': '0'
        });

        that.removeTransition(widget.siblings(), 400);
    },
    showSiblings: function(widget) {
        var that = this;

        widget.parent().siblings().find('.item').css({
            '-webkit-transition': 'opacity 0.4s',
            'transition': 'opacity 0.4s',
            'opacity': '1',
            'z-index': '1'
        });

        that.removeTransition(widget.siblings(), 400);
    },
    centerWidget: function(widget) {
        var that = this,
            top = parseFloat(widget.css('top')),
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

        widget.addClass('active');
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

            that.removeTransition(widget, 0);
        }, 400);
    },
    resetWidget: function(widget) {
        var that = this,
            orig = widget.data('orig');

        widget.removeClass('active');

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
            that.removeTransition(widget, 0);
        }, 400);
    },
    removeTransition: function(elements, delay) {
        var that = this;

        if (delay > 0) {
            setTimeout(function () {
                that.forceRemoveTransition(elements);
            }, delay);
        } else {
            that.forceRemoveTransition(elements);
        }
    },
    forceRemoveTransition: function (elements) {
        elements.css({
            '-webkit-transition': '',
            'transition': ''
        });
    }
});
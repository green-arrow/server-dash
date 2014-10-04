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
    displayAddWidgetUI: function() {
        var addWidgetContainer = Ember.$('#add-widget'),
            buttonBar = Ember.$('#add-widget-button-bar'),
            body = $('body');

        body.find('button[data-action="cancelAdd"]').on('click', onCancelAddWidget);
        addWidgetContainer.find('button[data-action="select"]').on('click', onSelectWidget);
        addWidgetContainer.find('button[data-action="add"]').on('click', onAddWidget);

        return addWidgetContainer;
    },

    onCancelAddWidget: function() {
        var container = $('.add-widget'),
            buttonBar = $('.add-widget-button-bar');

        container.removeClass('in');
        buttonBar.removeClass('in');
        $('#backdrop').removeClass('in dark');

        setTimeout(function () {
            container.remove();
            buttonBar.remove();
        }, 700);
    },
    onSelectWidget: function() {
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

    },
    onCancelSelect: function() {
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
    },
    onAddWidget: function() {

    },
    hideSiblings: function(widget) {
        widget.siblings().css({
            '-webkit-transition': 'opacity 0.4s',
            'transition': 'opacity 0.4s',
            'opacity': '0',
            'z-index': '0'
        });

        removeTransition(widget.siblings(), 400);
    },
    showSiblings: function(widget) {
        widget.siblings().css({
            '-webkit-transition': 'opacity 0.4s',
            'transition': 'opacity 0.4s',
            'opacity': '1',
            'z-index': '1'
        });

        removeTransition(widget.siblings(), 400);
    },
    centerWidget: function(widget) {
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
    },
    resetWidget: function(widget) {
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
});
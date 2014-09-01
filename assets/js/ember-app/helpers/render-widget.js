Ember.Handlebars.registerHelper('render-widget', function(widgetName, options) {
    var widgetName = Ember.Handlebars.get(this, widgetName, options),
        helper = Ember.Handlebars.resolveHelper(options.data.view.container, 'widget-' + widgetName),
        template;

    try {
        template = helper.call(this, options);
    } catch(ex) {
        template = 'Widget template for "' + widgetName + '" not found';
    }

    return template;
});

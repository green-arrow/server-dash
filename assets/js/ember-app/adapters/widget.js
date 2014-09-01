ServerDash.WidgetAdapter = ServerDash.ApplicationAdapter.extend({
    find: function(store, type, id, record) {
        var widgetType = type.typeKey.replace('widget', '').toLowerCase();
        return this.ajax(this.buildWidgetUrl(widgetType), 'GET');
    },
    buildWidgetUrl: function(widgetType) {
        var url = [],
            host = this.get('host'),
            prefix = this.urlPrefix();

        url.push('widgetData/' + widgetType);

        if (prefix) { url.unshift(prefix); }

        url = url.join('/');
        if (!host && url) { url = '/' + url; }

        return url;
    }
});

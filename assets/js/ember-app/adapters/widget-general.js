ServerDash.WidgetGeneralAdapter = ServerDash.ApplicationAdapter.extend({
    findAll: function(store, type, sinceToken) {
        var query;

        if (sinceToken) {
            query = { since: sinceToken };
        }

        return this.ajax(this.buildWidgetUrl('general'), 'GET', { data: query });
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

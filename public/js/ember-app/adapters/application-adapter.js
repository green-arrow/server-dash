ServerDash.ApplicationAdapter =  DS.RESTAdapter.extend({
    namespace: 'api',
    find: function(store, type, id, record) {
        var split = type.typeKey.split('widget'),
            isWidget = split.length === 2 && split[0] === '',
            url = isWidget ? this.buildWidgetUrl(split[1].toLowerCase()) : this.buildURL(type.typeKey, id, record);

        return this.ajax(url, 'GET');
    },
    buildWidgetUrl: function(widgetType) {
        var url = [],
            host = this.get('host'),
            prefix = this.urlPrefix();

        url.push('widgets/' + widgetType);

        if (prefix) { url.unshift(prefix); }

        url = url.join('/');
        if (!host && url) { url = '/' + url; }

        return url;
    }
});

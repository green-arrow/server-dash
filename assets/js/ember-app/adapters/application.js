ServerDash.ApplicationAdapter =  DS.RESTAdapter.extend({
    host: 'http://jsonstub.com',
    headers: {
        'JsonStub-User-Key': 'cdc147a1-e0b3-4ebf-bee2-7d1024cf2670',
        'JsonStub-Project-Key': '125eb655-ba7a-454f-a2ca-f6e63847e7ff'
    },
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

        url.push('widgetData/' + widgetType);

        if (prefix) { url.unshift(prefix); }

        url = url.join('/');
        if (!host && url) { url = '/' + url; }

        return url;
    }
});

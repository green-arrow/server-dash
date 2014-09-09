ServerDash.WidgetGeneralModel = DS.Model.extend({
    os: DS.attr('string'),
    uptime: DS.attr('string'),
    serverTime: DS.attr('string'),
    hostname: DS.attr('string')
});

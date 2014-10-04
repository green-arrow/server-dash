ServerDash.WidgetsAddRoute = ServerDash.AuthorizedBaseRoute.extend({
    model: function() {
        return [
            {
                id: 1,
                name: 'general',
                displayName: 'General Info'
            },
            {
                id: 2,
                name: 'disk',
                displayName: 'Disk Usage'
            },
            {
                id: 3,
                name: 'ram',
                displayName: 'RAM'
            },
            {
                id: 4,
                name: 'load',
                displayName: 'Load Average'
            },
            {
                id: 5,
                name: 'software',
                displayName: 'Software'
            },
            {
                id: 6,
                name: 'dhcp',
                displayName: 'DHCP Leases'
            }
        ];
    },
    setupController: function(controller, model) {
        controller.set('model', model);
        controller.set('widgetData', this.controllerFor('index').get('widgetData'));
    }
});

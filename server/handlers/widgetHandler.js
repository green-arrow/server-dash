var WidgetService = require('../services/widgetService'),
    ShellService = require('../services/shellService');

module.exports = {
    index: function(request, reply) {
        var profileId = request.query.profileId;

        WidgetService.getUnusedWidgetsForProfile(profileId, function(err, widgets) {
            if(err) {
                if(err.serverError) {
                    reply({ errors: err.messages }).code(500);
                } else {
                    reply({ errors: err.messages }).code(400);
                }
            } else {
                reply({
                    widgets: widgets
                });
            }
        });
    },
	general: function(request, reply) {
        var data = {
            "widgetGeneral": {
                "id": 1,
                "os": ShellService.getOsInfo(),
                "uptime": ShellService.getUptime(),
                "serverTime": ShellService.getTime(),
                "hostname": ShellService.getHostname()
            }
        };

        reply(data);
    },
    diskUsage: function(request, reply) {
        var data = {
            "widgetDiskUsage": {
                "id": 1,
                "diskUsage": ShellService.getDiskUsage()
            }
        };

        reply(data);
    },
    process: function(request, reply) {
        var data = {
            "widgetProcess": {
                "id": 1,
                "processes": ShellService.getProcesses()
            }
        };

        reply(data);
    }
};


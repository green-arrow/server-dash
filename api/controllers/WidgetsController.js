/**
 * WidgetsController
 *
 * @description :: Server-side logic for managing widgets
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	general: function(req, res) {
        var data = {
            "widgetGeneral": {
                "id": 1,
                "os": ShellService.getOsInfo(),
                "uptime": ShellService.getUptime(),
                "serverTime": ShellService.getTime(),
                "hostname": ShellService.getHostname()
            }
        };

        res.ok(data);
    }
};


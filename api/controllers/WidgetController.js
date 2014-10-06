/**
 * WidgetsController
 *
 * @description :: Server-side logic for managing widgets
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index: function(req, res) {
        var profileId = req.param('profileId');

        WidgetService.getUnusedWidgetsForProfile(profileId, function(err, widgets) {
            if(err) {
                if(err.serverError) {
                    res.serverError({ errors: err.messages });
                } else {
                    res.badRequest({ errors: err.messages });
                }
            } else {
                res.ok({
                    widgets: widgets
                });
            }
        });
    },
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


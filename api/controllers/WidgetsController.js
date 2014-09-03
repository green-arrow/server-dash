/**
 * WidgetsController
 *
 * @description :: Server-side logic for managing widgets
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	general: function(req, res) {
        res.ok({
            "widgetGeneral": {
                "id": 1,
                "os": "2.6.32-358.6.2.el6.x86_64",
                "uptime": "129 days 3 hours 15 minutes",
                "serverTime": "Thu Aug 28 17:15:50 UTC 2014",
                "hostname": "waltonwebdev.com"
            }
        })
    }
};


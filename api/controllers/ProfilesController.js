/**
 * ProfilesController
 *
 * @description :: Server-side logic for managing profiles
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function(req, res) {
        res.ok({
            "profiles": [
                {
                    "id": 1,
                    "name": "Hardware",
                    "icon": "fa-desktop",
                    "widgets": [
                        {
                            "id": 1,
                            "name": "general",
                            "displayName": "General Info"
                        },
                        {
                            "id": 2,
                            "name": "disk",
                            "displayName": "Disk Usage"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Network",
                    "icon": "fa-globe",
                    "widgets": [
                        {
                            "id": 3,
                            "name": "dhcp",
                            "displayName": "DHCP Leases"
                        },
                        {
                            "id": 4,
                            "name": "network-stats",
                            "displayName": "Network Statistics"
                        }
                    ]
                }
            ]
        });
    }
};


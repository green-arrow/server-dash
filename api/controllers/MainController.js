/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function(req, res) {
        if(req.session.user) {
            res.view();
        } else {
            res.redirect('/login');
        }
    }
};


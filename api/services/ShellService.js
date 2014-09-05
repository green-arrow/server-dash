/**
 * ShellService
 *
 * @description :: A service for getting information via shell commands
 */

require('shelljs/global');

var execOpts = { silent: true };

exports.getOsInfo = function() {
    return exec('uname -sr', execOpts).output;
};

exports.getUptime = function() {
    var uptimeString = exec('uptime', execOpts).output,
        uptimeArray = uptimeString.split('up')[1].split(/\d+ user/)[0].split(','),
        uptimeDays = uptimeArray[0].indexOf('day') > -1 ? parseInt(uptimeArray[0].replace(/day(.*)/, '').trim(), 10) : 0,
        uptimeHoursMinutes = (uptimeDays ? uptimeArray[1] : uptimeArray[0]).split(':'),
        uptimeHours = parseInt(uptimeHoursMinutes[0], 10),
        uptimeMinutes = parseInt(uptimeHoursMinutes[1], 10);

    return uptimeDays + ' days ' + uptimeHours + ' hours ' + uptimeMinutes + ' minutes';
};

exports.getTime = function() {
    var moment = require('moment');

    return moment.utc().format('MMMM DD, YYYY HH:mm:ss UTC');
};

exports.getHostname = function() {
    return exec('uname -n', execOpts).output;
};

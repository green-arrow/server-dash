module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'emberTemplates:dev',
		'less:dev',
		'sync:dev',
		'coffee:dev'
	]);
};

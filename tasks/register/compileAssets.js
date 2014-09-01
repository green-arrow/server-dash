module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'emberTemplates:dev',
		'less:dev',
		'copy:dev',
		'coffee:dev'
	]);
};

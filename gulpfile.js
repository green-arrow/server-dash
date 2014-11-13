var gulp = require('gulp'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    emberTemplates = require('gulp-ember-templates'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    appScriptSrc = [
        './public/js/dependencies/jquery.js',
        './public/js/dependencies/handlebars.js',
        './public/js/dependencies/ember.js',
        './public/js/dependencies/ember-data.js',
        './public/js/dependencies/packery.pkgd.js',
        './public/js/dependencies/draggabilly.js',
        './public/js/ember-app/app.js',
        './public/js/ember-app/controllers/base-controller.js',
        './public/js/ember-app/routes/authorized-base-route.js',
        './public/js/**/*.js'
    ],
    appTemplateSrc = [ './public/js/ember-app/templates/**/*.hbs' ],
    appLessSrc = [ './public/styles/application.less'],
    fontSrc = [ './bower_components/components-font-awesome/fonts/*' ];

gulp.task('clean-scripts', function() {
    return gulp.src('./dist/js/application.js', { read: false })
        .pipe(clean({ force: true }));
});

gulp.task('clean-templates', function() {
    return gulp.src('./dist/js/ember-templates.js', { read: false })
        .pipe(clean({ force: true }));
});

gulp.task('clean-styles', function() {
    return gulp.src('./dist/styles', { read: false })
        .pipe(clean({ force: true }));
});

gulp.task('clean-fonts', function() {
    return gulp.src('./dist/fonts', { read: false })
        .pipe(clean({ force: true }));
});

gulp.task('scripts', [ 'clean-scripts' ], function() {
    gulp.src(appScriptSrc)
        .pipe(sourcemaps.init())
            .pipe(concat('application.js'))
            .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js'))
        .pipe(livereload());
});

gulp.task('templates', [ 'clean-templates' ], function() {
    gulp.src(appTemplateSrc)
        .pipe(emberTemplates())
        .pipe(concat('ember-templates.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(livereload());
});

gulp.task('less', [ 'clean-styles' ], function() {
    gulp.src(appLessSrc)
        .pipe(less())
        .pipe(gulp.dest('./dist/styles'))
        .pipe(livereload());
});

gulp.task('fonts', [ 'clean-fonts' ], function() {
    gulp.src(fontSrc)
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('watch', function() {
    gulp.watch('./public/js/**/*.js', [ 'scripts' ]);
    gulp.watch('./public/js/ember-app/templates/**/*.hbs', [ 'templates' ]);
    gulp.watch('./public/styles/*.less', [ 'less' ]);
});

gulp.task('default', [ 'watch', 'scripts', 'templates', 'less', 'fonts' ]);

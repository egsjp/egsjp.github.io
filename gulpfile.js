'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var cssnext = require('gulp-cssnext');
var ejs = require('gulp-ejs');

gulp.task('sass', function () {
	gulp.src('./sass/*.scss')
		.pipe(plumber())
		.pipe(sass().on('error', sass.logError))
		.pipe(cssnext())
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('ejs', function () {
    gulp.src(['./dev/**/*.ejs', '!' + './dev/**/_*.ejs'])
		.pipe(plumber())
        .pipe(ejs({}, {}, {ext: '.html'}))
        .pipe(gulp.dest('./'));
});

gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: './',
			index: 'index.html'
		}
	});
});

gulp.task('bs-reload', function () {
	browserSync.reload();
});

gulp.task('default', ['browser-sync'], function () {
	gulp.watch('./sass/*.scss', ['sass']);
    gulp.watch('./dev/**/*.ejs', ['ejs']);
	gulp.watch('./**/*.html', ['bs-reload']);
});

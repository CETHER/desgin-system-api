const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-minify-css');
const concat = require('gulp-concat');

// npm install gulp --save --only=dev
gulp.task('hello', async function () {
	console.log('Hello!!');
});

// npm install sass gulp-sass --save-dev
gulp.task('sass', function () {
	return gulp
		.src('scss/**/*.scss')
		.pipe(sass()) // Converts sass to css with gulp sass
		.pipe(gulp.dest('public/stylesheets'));
});

// npm install gulp-minify-css
gulp.task('style_min', function () {
	return gulp
		.src('scss/**/*.scss')
		.pipe(sass())
		.pipe(minifyCSS())
		.pipe(concat('style_main_min.css'))
		.pipe(gulp.dest('public/stylesheets'));
});

// gulp watch
gulp.task(
	'watch',
	gulp.series('style_min', function () {
		gulp.watch('scss/**/*.scss', gulp.series('style_min'));
	})
);

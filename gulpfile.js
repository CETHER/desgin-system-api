var gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("hello", function () {
  console.log("Hello!!");
});

gulp.task("sass", function () {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("public/stylesheets"));
});

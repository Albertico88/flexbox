var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('style', function() {
  gulp.src('main/style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});


gulp.task('watch', function() {
  gulp.watch('main/style.css', ['style']);
});

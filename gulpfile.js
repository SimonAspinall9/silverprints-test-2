// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('content/styles/sass/styles.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('content/styles/'))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('content/styles/sass/styles.scss', ['sass']);
});
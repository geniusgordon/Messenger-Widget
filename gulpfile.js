var gulp = require('gulp');
var builder = require('gulp-node-webkit-builder');

gulp.task('build', function() {
    return gulp.src(['./src/**/*'])
        .pipe(builder({
            version: 'v0.12.3',
            platforms: ['linux64']
        }));
});


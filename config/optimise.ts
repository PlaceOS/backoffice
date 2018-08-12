
import * as gulp from 'gulp';
import * as runSequence from 'run-sequence';
import * as svgo from 'gulp-svgmin';

gulp.task('optimise', () => runSequence('optimise:svgs'));

gulp.task('optimise:svgs', () => {
    return gulp.src('src/assets/**/*.svg')
        .pipe(svgo({ plugins: [{ cleanupIDs: false }] }))
        .pipe(gulp.dest('src/assets'));
});

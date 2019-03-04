
import * as gulp from 'gulp';

import { cypress } from './cmd';

gulp.task('test', ['serve', 'cypress']);

gulp.task('cypress', () => cypress('open'));

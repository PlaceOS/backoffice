const del = require('del');
const gulp = require('gulp');
const yargs = require('yargs');
const replace = require('gulp-string-replace');
const dayjs = require('dayjs');
const m_fs = require('fs-extra');

const { version } = require('./cmd');

/** Node project configuration */
const npmconfig = require('../package.json');

const app_path = './src/app';

/** Nuke old build assets */
gulp.task('clean', () => ((...globs: string[]) => del(globs))('dist/', 'compiled/', '_package'));

/** Update core */
gulp.task('update-core-version', () => {
    let version = yargs.argv.v || npmconfig.version;
    version = version.replace(/^v/, '');
    if (npmconfig.name.indexOf('ngx-') === 0 && version) {
        return m_fs.outputJson('./package.json', { ...npmconfig, core_version: version }, { spaces: 4 });
    }
    return m_fs.outputJson('./package.json', npmconfig, { spaces: 4 });
});

/** Update version details to the current time and version */
gulp.task('version:update', () => {
    let v = yargs.argv.v || npmconfig.version;
    const core = npmconfig.core_version;
    v = v.replace(/^v/, '');
    const b = dayjs()
        .startOf('s')
        .valueOf();
    return gulp
        .src([`${app_path}/shared/globals/application.ts`])
        .pipe(replace(/export const version = '[0-9a-zA-Z.-]*'/g, `export const version = '${v}'`, { logs: { enabled: true } }))
        .pipe(replace(/export const core_version = '[0-9a-zA-Z.-]*'/g, `export const core_version = '${core}'`, { logs: { enabled: true } }))
        .pipe(replace(/export const build = dayjs\([0-9]*\);/g, `export const build = dayjs(${b});`, { logs: { enabled: true } }))
        .pipe(gulp.dest(`${app_path}/shared/globals/`));
});

/** Return version details back to the dev details */
gulp.task('version:clean', () => {
    const v = npmconfig.version;
    const b = dayjs()
        .startOf('s')
        .valueOf();
    return gulp
        .src([`${app_path}/shared/globals/application.ts`])
        .pipe(replace(/export const version = '[0-9a-zA-Z.-]*'/g, `export const version = 'local-dev'`, { logs: { enabled: true } }))
        .pipe(replace(/export const build = dayjs\([0-9]*\);/g, `export const build = dayjs();`, { logs: { enabled: true } }))
        .pipe(gulp.dest(`${app_path}/shared/globals/`));
});

/** Remove mock data from being included in builds */
gulp.task('mocks:disable', () => {
    return gulp
        .src([`${app_path}/app.module.ts`])
        .pipe(replace(/import '\.\/shared\/mocks'/g, `//import './shared/mocks'`, { logs: { enabled: true } }))
        .pipe(gulp.dest(`${app_path}/`));
});

/** Add mock data to being included in builds */
gulp.task('mocks:enable', () => {
    return gulp
        .src([`${app_path}/app.module.ts`])
        .pipe(replace(/\/*import '\.\/shared\/mocks'/g, `import './shared/mocks'`, { logs: { enabled: true } }))
        .pipe(gulp.dest(`${app_path}/`));
});

/** Run build tasks */
gulp.task('build', gulp.series('pre-build', 'ng:build', 'post-build'));

/** Run serve tasks */
gulp.task('serve', gulp.series('pre-serve', 'ng:serve'));

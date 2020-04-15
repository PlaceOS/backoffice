
const d_del = require('del');
const d_gulp = require('gulp');
const merge = require('deepmerge');

const d_yargs = require('yargs');
const fs = require('fs-extra');

const { Dashboard } = require('./dashboard');
const { ng } = require('./cmd');

const settings = require('../src/assets/settings.json');
/** Command line arguments */
const argv = d_yargs.argv;

Dashboard.show(argv.prod ? 'prod' : 'dev');

/** Angular CLI arguments */
const ngargs: string[] = [];
/** Setup CLI arguments for Angular CLI */
if (argv.prod || (argv.demo === true && argv.prod !== 'false')) {
    ngargs.push('--prod');
}
if (argv.aot || (argv.demo === true && argv.aot !== 'false')) {
    ngargs.push('--aot');
}

/** Application Base HREF */
const baseHref = '/backoffice/';

const prod_settings = {
    composer: {
        domain: '',
        route: baseHref.substr(0, baseHref.length - 1),
        protocol: 'https:',
        local_login: false
    },
    mock: false
};

/** Build the application */
d_gulp.task('ng:build', () => ng('build', ...ngargs));

/** Serve the application locally */
d_gulp.task('ng:serve', () => ng('serve', ...ngargs));

/** Nuke old build assets.  */
d_gulp.task('clean', () => ((...globs: string[]) => d_del(globs))('dist/', 'compiled/', '_package'));

/** Update setting flags when serving application */
d_gulp.task('check:flags', () => {
    const s = JSON.parse(JSON.stringify(settings));
    s.mock = !!d_yargs.argv.mock || argv.demo;
    return fs.outputJson('./src/assets/settings.json', s, { spaces: 4 })
});

/** Update settings after building the application */
d_gulp.task('settings:update', () => {
    const s = JSON.parse(JSON.stringify(settings));
    s.composer.route = argv.route ? argv.route : baseHref;
    if (argv.demo || argv.mock) {
        prod_settings.mock = true;
    }
    return fs.outputJson('./dist/assets/settings.json', merge(s, prod_settings), { spaces: 4 })
});

/** Set the base href for the Angular CLI serve/build command */
d_gulp.task('set-base', () => Promise.resolve(ngargs.push(`--baseHref=${argv.route ? argv.route : baseHref}`)));

/** Pre application build tasks */
d_gulp.task('pre-build', (done) => {
    const sequence: string[] = ['set-base', 'settings:update', 'version:update'];
    if (!argv.mock && !argv.demo) {
        sequence.push('mocks:disable');
    }
    return d_gulp.series(...sequence, () => Promise.resolve(done()))();
});

/** Pre application serve tasks */
d_gulp.task('pre-serve', d_gulp.series('check:flags'));

/** Post application build tasks */
d_gulp.task('post-build', (done) => {
    const sequence: string[] = ['version:clean', 'settings:update', 'mocks:enable'];
    if (argv.demo) {
        sequence.push('upload');
    }
    return d_gulp.series(...sequence, () => Promise.resolve(done()))();
});

/** Available gulp commands */
d_gulp.task('usage', () => {
    console.log(`Commands:`);
    console.log(`    build - Build project`);
    console.log(`    bump  - Update project version`);
    console.log(`    clean - Nuke old build assets`);
    console.log(`    lint  - Lint Typescript and Sass files`);
    console.log(`    test  - Run tests`);
    console.log(`    usage - List available gulp tasks`);
});

module.exports = {
    baseHref
};

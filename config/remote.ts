
const r_gulp = require('gulp');
const r_yargs = require('yargs');
const sftp = require('gulp-sftp-clean');
const aws_s3 = require('gulp-s3-upload');

const base_href = require('./default').baseHref;

let credentials;

try {
    credentials = require('./credentials.json');
} catch (e) {
    console.log('Error loading upload credentials:', e ? e.code || '' : '');
}

const aws_env = {
    secret_access_key:  process.env.AWS_SECRET_KEY,
    bucket: process.env.AWS_BUCKET,
    access_key_id: process.env.AWS_ACCESS_KEY
};

const ssh_creds = credentials ? credentials.ssh || {} : {};
const aws_creds = credentials ? credentials.aws || aws_env : aws_env;

const r_argv = r_yargs.argv;

if (ssh_creds.path && ssh_creds.path[0] !== '/') {
    ssh_creds.path = `${ssh_creds.path}`;
}

const s3 = aws_s3({
    accessKeyId: aws_creds.access_key_id,
    secretAccessKey: aws_creds.secret_access_key
});

r_gulp.task('upload:sftp', () => {
    if (!ssh_creds || !ssh_creds.host) { return; }
    const remote_path = `${ssh_creds.path}${(r_argv.route ? r_argv.route || base_href : base_href) || '/'}`;
    return r_gulp.src('./dist/**/*')
        .pipe(sftp({
            host: ssh_creds.host,
            port: ssh_creds.port,
            user: ssh_creds.user,
            pass: ssh_creds.pass,
            remotePath: remote_path,
            clearDestination: true
        }));
});

r_gulp.task('upload:aws-s3', () => {
    if (!aws_creds || !aws_creds.secret_access_key) { return; }
    let remote_path = `${(r_argv.route ? r_argv.route || base_href : base_href) || '/'}`;
    if (remote_path && remote_path[0] === '/') {
        remote_path = remote_path.substr(1);
    }
    if (remote_path && remote_path[remote_path.length - 1] === '/') {
        remote_path = remote_path.substr(0, remote_path.length - 1);
    }
    const Bucket = aws_creds ? aws_creds.bucket || 'aca.im' : 'aca.im';
    return r_gulp.src('./dist/**/*')
        .pipe(s3({
            Bucket,
            ACL: 'public-read',
            keyTransform: (file) => `${remote_path}/${file}`
        }));
});

r_gulp.task('upload', r_gulp.parallel(/*'upload:sftp',*/ 'upload:aws-s3'));

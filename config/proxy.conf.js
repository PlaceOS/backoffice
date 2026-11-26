// Override to develop against another environment, e.g. the local PlaceOS
// stack, which has a self-signed certificate:
// `PLACEOS_DOMAIN=localhost:9543 PLACEOS_SELF_SIGNED=true bun run start`
const domain = process.env.PLACEOS_DOMAIN || 'placeos-dev.aca.im';
// Plain HTTP to the upstream
const secure = process.env.PLACEOS_INSECURE !== 'true';
// The proxy checks the upstream TLS certificate. Set PLACEOS_SELF_SIGNED=true
// only for a local backend with a self-signed certificate.
const verify_tls = process.env.PLACEOS_SELF_SIGNED !== 'true';

const PROXY_CONFIG = {};

const context = [
    '/control',
    '/auth',
    '/api',
    '/styles',
    '/scripts',
    '/login',
    '/backoffice',
    '/stylesheets',
];
const ws_context = ['/api', '/control'];

function add(endpoint, extras = {}) {
    PROXY_CONFIG[`${endpoint}/**`] = {
        target: `http${secure ? 's' : ''}://${domain}`,
        secure: verify_tls,
        changeOrigin: true,
        ...extras,
    };
}

context.forEach((e) => add(e));
ws_context.forEach((e) => add(e, { ws: true }));

module.exports = PROXY_CONFIG;

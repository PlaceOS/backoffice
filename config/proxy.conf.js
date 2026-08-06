// Override to develop against another environment, e.g. the local PlaceOS
// stack: `PLACEOS_DOMAIN=localhost:8443 bun run start`
const domain = process.env.PLACEOS_DOMAIN || 'placeos-dev.aca.im';
const secure = process.env.PLACEOS_INSECURE !== 'true';
const valid_ssl = false;

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
        secure: valid_ssl,
        changeOrigin: true,
        ...extras,
    };
}

context.forEach((e) => add(e));
ws_context.forEach((e) => add(e, { ws: true }));

module.exports = PROXY_CONFIG;


const domain = 'localhost:8443';
const secure = true;
const valid_ssl = false;

const PROXY_CONFIG = [
    {
        context: [
            "/control",
            "/auth",
            "/api",
            "/styles",
            "/scripts",
            "/login",
            "/backoffice",
            "/stylesheets"
        ],
        target: `http${secure ? 's' : ''}://${domain}`,
        secure: valid_ssl,
        changeOrigin: true
    },
    {
        context: [
            "/api/engine/v2/systems/control",
        ],
        target: `ws${secure ? 's' : ''}://${domain}`,
        secure: valid_ssl,
        changeOrigin: true,
        ws: true
    }
];

module.exports = PROXY_CONFIG;

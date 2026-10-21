/**
 * Configuration for the local-backend e2e suite.
 *
 * This suite runs against a LOCAL backend only. `assertLocalOnly()` refuses
 * any host that is not loopback before a browser launches: specs create and
 * delete real data.
 *
 * Two origins, which are not the same under the dev server:
 *   BACKEND_URL  the PlaceOS stack (nginx TLS entrypoint)
 *   APP_URL      the dev server. It proxies /api, /auth and /login through to
 *                BACKEND_URL, so the browser only sees APP_URL, and the token
 *                lives in APP_URL's localStorage.
 */
import * as path from 'path';

// Load e2e/.env before any value below is read
try {
    require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });
} catch {
    // dotenv not available, continue with the process environment
}

/** Auth artifacts. Resolved from this file, because the cwd changes with the runner */
export const AUTH_DIR = path.resolve(__dirname, '..', '.auth');

const LOCAL_HOSTS = ['localhost', '127.0.0.1', '::1', '[::1]'];

/** The PlaceOS stack under test (`e2e/stack/up.sh`) */
export const BACKEND_URL =
    process.env['E2E_BACKEND_URL'] ?? 'https://localhost:9543';

/**
 * Where the dev server serves the SPA. Not 4200, so that a developer's own dev
 * server, which proxies to a shared deployment, is never reused by mistake.
 */
export const APP_URL = process.env['E2E_APP_URL'] ?? 'http://localhost:4216';

/** Throw if any URL is not on a loopback host */
export function assertLocalOnly(...urls: string[]): void {
    for (const url of urls) {
        const hostname = new URL(url).hostname;
        if (!LOCAL_HOSTS.includes(hostname)) {
            throw new Error(
                `E2E refused: "${url}" is not a local backend (host "${hostname}").\n` +
                    `This suite creates and deletes real data. Point E2E_BACKEND_URL and ` +
                    `E2E_APP_URL at a loopback host and run e2e/stack/up.sh.`,
            );
        }
    }
}

export type RoleName = 'admin' | 'staff';

export interface Role {
    name: RoleName;
    email: string;
    password: string;
    /** Playwright storageState file of this role */
    storage_path: string;
}

/** The sys_admin that `init` creates, and a non-admin that seed.ts creates */
export function roleFor(name: RoleName): Role {
    const admin = name === 'admin';
    return {
        name,
        email: admin
            ? (process.env['E2E_ADMIN_EMAIL'] ?? 'support@place.tech')
            : 'e2e-staff@place.tech',
        password: admin
            ? (process.env['E2E_ADMIN_PASSWORD'] ?? 'development')
            : (process.env['E2E_STAFF_PASSWORD'] ?? 'e2e-staff-development'),
        storage_path: path.join(AUTH_DIR, `${name}.json`),
    };
}

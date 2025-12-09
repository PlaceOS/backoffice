/**
 * E2E Test Environment Configuration
 *
 * This module handles environment configuration for E2E tests.
 * By default, tests run against a mock environment.
 * Set USE_MOCK=false to run against a live environment.
 */

export interface TestEnvConfig {
    /** Whether to use mock data */
    use_mock: boolean;
    /** Base URL for the application */
    base_url: string;
    /** API domain for live environment */
    api_domain: string;
    /** API port for live environment */
    api_port: string;
    /** API protocol for live environment */
    api_protocol: 'http' | 'https';
    /** Test user email for live environment */
    test_user_email: string;
    /** Test user password for live environment */
    test_user_password: string;
}

/**
 * Get the test environment configuration from environment variables
 */
export function getTestEnvConfig(): TestEnvConfig {
    return {
        use_mock: process.env['USE_MOCK'] !== 'false',
        base_url: process.env['BASE_URL'] || 'http://localhost:4200',
        api_domain: process.env['API_DOMAIN'] || 'localhost',
        api_port: process.env['API_PORT'] || '4200',
        api_protocol:
            (process.env['API_PROTOCOL'] as 'http' | 'https') || 'http',
        test_user_email: process.env['TEST_USER_EMAIL'] || 'admin@place.tech',
        test_user_password: process.env['TEST_USER_PASSWORD'] || '',
    };
}

/**
 * Build the application URL with mock parameter if needed
 */
export function buildAppUrl(path: string = '/'): string {
    const config = getTestEnvConfig();
    const base = config.base_url;
    const mock_param = config.use_mock ? 'mock=true' : '';

    // Handle hash-based routing - mock param must come before the hash
    // e.g., http://localhost:4200/?mock=true#/systems
    if (path.startsWith('/#')) {
        const hash_part = path.substring(1); // Remove leading /
        return mock_param
            ? `${base}/?${mock_param}${hash_part}`
            : `${base}${path}`;
    }

    // Handle path with existing query params
    if (path.includes('?')) {
        return mock_param ? `${base}${path}&${mock_param}` : `${base}${path}`;
    }
    return mock_param ? `${base}${path}?${mock_param}` : `${base}${path}`;
}

/**
 * Check if running in mock mode
 */
export function isMockMode(): boolean {
    return getTestEnvConfig().use_mock;
}

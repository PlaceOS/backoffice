import { setMockNotFoundHandler } from '@placeos/ts-client';
import './backend';

/** Show requests that have no mock, so gaps are easy to find */
setMockNotFoundHandler((method, url) => {
    console.warn(`[mock] No handler for ${method} ${url}`);
    const error = new Error(`Mock endpoint not found: ${method} ${url}`);
    (error as Error & { status: number }).status = 404;
    return Promise.reject(error);
});

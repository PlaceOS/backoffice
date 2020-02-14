import { Injectable, ErrorHandler } from '@angular/core';

import * as Sentry from '@sentry/browser';

@Injectable()
export class SentryService implements ErrorHandler {
    /**
     * Handle error thrown by Angular
     * @param error Angular error
     */
    public handleError(error) {
        Sentry.captureException(error.originalError || error);
        throw error;
    }
}

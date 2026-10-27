import {
    ApplicationConfig,
    ErrorHandler,
    isDevMode,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection,
} from '@angular/core';
import {
    provideRouter,
    withHashLocation,
    withNavigationErrorHandler,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { appRoutes } from './app.routes';
import { reloadApplicationOnChunkLoadError } from './common/application';
import { SentryReportingErrorHandler } from './common/sentry';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        { provide: ErrorHandler, useClass: SentryReportingErrorHandler },
        provideZonelessChangeDetection(),
        provideRouter(
            appRoutes,
            withHashLocation(),
            withNavigationErrorHandler((event) =>
                reloadApplicationOnChunkLoadError(event.error),
            ),
        ),
        provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(), // Disable in development, enable in production
        }),
    ],
};

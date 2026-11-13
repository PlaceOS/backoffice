import {
    ApplicationConfig,
    ErrorHandler,
    isDevMode,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection,
} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    provideRouter,
    withHashLocation,
    withNavigationErrorHandler,
    withViewTransitions,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { appRoutes } from './app.routes';
import { reloadApplicationOnChunkLoadError } from './common/application';
import { SentryReportingErrorHandler } from './common/sentry';

/** Upper bound of route levels that `routePath` walks */
const MAX_ROUTE_DEPTH = 32;

/** Path of a router state without its query params, e.g. `systems/sys-1/about` */
function routePath(route: ActivatedRouteSnapshot) {
    let leaf = route;
    for (let i = 0; leaf.firstChild && i < MAX_ROUTE_DEPTH; i++) {
        leaf = leaf.firstChild;
    }
    return leaf.pathFromRoot
        .flatMap((level) => level.url.map((segment) => segment.path))
        .join('/');
}

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
            // Styles for the transitions are in styles.css. A change of
            // query params only, e.g. a filter, does not animate.
            withViewTransitions({
                skipInitialTransition: true,
                onViewTransitionCreated: ({ transition, from, to }) => {
                    if (routePath(from) === routePath(to)) {
                        transition.skipTransition();
                    }
                },
            }),
        ),
        provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(), // Disable in development, enable in production
        }),
    ],
};

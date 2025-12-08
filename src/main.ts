import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { appConfig } from './app/app.config';

// Check if mock mode is enabled via URL or localStorage
const is_mock =
    location.href.includes('mock=true') ||
    localStorage.getItem('mock') === 'true';

// Conditionally load mocks before bootstrapping
const bootstrap = async () => {
    if (is_mock) {
        await import('./app/mocks');
    }
    bootstrapApplication(AppComponent, appConfig).catch((err) =>
        console.error(err),
    );
};

bootstrap();

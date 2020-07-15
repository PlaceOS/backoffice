import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';

import { AGoogleAnalyticsModule } from '@acaprojects/ngx-google-analytics';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { SharedOverlaysModule } from './overlays/overlays.module';
import { SharedContentModule } from './shared/shared.module';
import { SentryService } from './services/sentry.service';

import { APP_COMPONENTS } from './shell';

import './shared/mocks';
import { AuthorisedUserGuard } from './shared/guards/authorised-user.guard';
import { AuthorisedAdminGuard } from './shared/guards/authorised-admin.guard';

@NgModule({
    declarations: [AppComponent, ...APP_COMPONENTS],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        HttpClientModule,
        FormsModule,
        AGoogleAnalyticsModule,
        SharedOverlaysModule,
        SharedContentModule,
    ],
    providers: [
        { provide: ErrorHandler, useClass: SentryService },
        AuthorisedUserGuard,
        AuthorisedAdminGuard,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

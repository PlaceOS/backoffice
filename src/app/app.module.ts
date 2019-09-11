import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import './shared/mocks';

import { ComposerModule } from '@acaprojects/ngx-composer';
import { AGoogleAnalyticsModule } from '@acaprojects/ngx-google-analytics';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { SharedOverlaysModule } from './overlays/overlays.module';
import { SharedContentModule } from './shared/shared.module';

import { APP_COMPONENTS } from './shell';

@NgModule({
    declarations: [
        AppComponent,
        ...APP_COMPONENTS
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        HttpClientModule,
        FormsModule,
        ComposerModule,
        AGoogleAnalyticsModule,
        SharedOverlaysModule,
        SharedContentModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

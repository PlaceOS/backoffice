
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { ComposerModule } from '@acaprojects/ngx-composer';
import { WidgetsModule } from '@acaprojects/ngx-widgets';

import './shared/mock';

import { AppComponent } from './app.component';
import { APP_COMPONENTS, APP_ENTRY_COMPONENTS } from './shell';
import { ROUTES } from './app.routes';
import { environment } from '../environments/environment';

import { AppOverlaysModule } from './overlays/overlays.module';
import { SharedComponentsModule } from './shared/components/shared-components.module';

@NgModule({
    declarations: [
        AppComponent,
        ...APP_COMPONENTS,
        ...APP_ENTRY_COMPONENTS,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        RouterModule.forRoot(ROUTES, { useHash: true }),
        HttpClientModule,
        FormsModule,
        ServiceWorkerModule.register('__base__ngsw-worker.js', { enabled: environment.production }),
        WidgetsModule.forRoot(),
        ComposerModule.forRoot(),
        SharedComponentsModule,
        AppOverlaysModule
    ],
    providers: [ ],
    entryComponents: [
        ...APP_ENTRY_COMPONENTS
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

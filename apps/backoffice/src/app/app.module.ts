import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TopbarHeaderComponent } from './ui/topbar-header/topbar-header.component';
import { GlobalSearchComponent } from './ui/global-search.component';
import { SidebarMenuComponent } from './ui/sidebar-menu.component';

import { SharedOverlaysModule } from './overlays/overlays.module';
import { SharedContentModule } from './ui/ui.module';
import { SentryService } from './common/sentry.service';

import { AuthorisedUserGuard } from './ui/guards/authorised-user.guard';
import { AuthorisedAdminGuard } from './ui/guards/authorised-admin.guard';

import './mocks';

@NgModule({
    declarations: [AppComponent, TopbarHeaderComponent, GlobalSearchComponent, SidebarMenuComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        HttpClientModule,
        FormsModule,
        SharedOverlaysModule,
        SharedContentModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: environment.production,
          // Register the ServiceWorker as soon as the app is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        }),
    ],
    providers: [
        { provide: ErrorHandler, useClass: SentryService },
        AuthorisedUserGuard,
        AuthorisedAdminGuard,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

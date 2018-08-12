
import { Component, ViewContainerRef } from '@angular/core';
import { OverlayService } from '@acaprojects/ngx-widgets';
import { ViewEncapsulation } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    template: `
    <div class="app">
        <router-outlet></router-outlet>
    </div>
    `,
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    constructor(private view: ViewContainerRef, private overlay: OverlayService) {
        this.overlay.view = view;
        (window as any).app_loaded = true;
        if (environment.production && 'serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistration()
                .then(active => !active && navigator.serviceWorker.register('__base__ngsw-worker.js'))
                .catch(console.error);
        }
    }
}

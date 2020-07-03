import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { ApplicationService } from './services/app.service';
import { BaseDirective } from './shared/globals/base.directive';
import { detectIE } from './shared/utilities/general.utilities';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './styles/app.component.scss',
        './styles/custom-element.styles.scss',
        './styles/native-element.styles.scss',
    ],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent extends BaseDirective implements OnInit {
    constructor(
        private _service: ApplicationService,
    ) {
        super();
        /* istanbul ignore if */
        if (detectIE() && detectIE() < 12) {
            location.href = `${location.origin}${location.pathname}assets/not-supported.html`;
            return;
        }
    }


    public ngOnInit(): void {
        this._service.title = 'Loading...';
    }
}

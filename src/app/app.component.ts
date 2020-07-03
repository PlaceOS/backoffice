import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ComposerService } from '@placeos/composer';
import { UploadManager, Md5Workers, Amazon, Azure, Google, OpenStack } from '@acaprojects/ngx-uploads';

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
        private _uploads: UploadManager,
        private _md5_workers: Md5Workers,
        private _composer: ComposerService
    ) {
        super();
        /* istanbul ignore if */
        if (detectIE() && detectIE() < 12) {
            location.href = `${location.origin}${location.pathname}assets/not-supported.html`;
            return;
        }
        this._md5_workers.setup('assets/md5_worker.js');
        this.initUploads();
    }

    private initUploads() {
        this.subscription(
            'composer',
            this._service.initialised.subscribe((state) => {
                /* istanbul ignore else */
                if (state) {
                    this.timeout('init_uploads', () => {
                        const token = this._composer.auth.token;
                        if (!token) {
                            return setTimeout(() => this.initUploads(), 300);
                        }
                        this._uploads.token = token;
                        this._uploads.autoStart = true;
                        this._uploads.endpoint = '/api/staff/uploads';
                        UploadManager.addProvider(Amazon);
                        UploadManager.addProvider(Azure);
                        UploadManager.addProvider(Google);
                        UploadManager.addProvider(OpenStack);
                    });
                    this.unsub('composer');
                }
            })
        );
    }

    public ngOnInit(): void {
        this._service.title = 'Loading...';
    }
}

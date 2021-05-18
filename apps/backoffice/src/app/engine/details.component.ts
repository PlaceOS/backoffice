import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { get, apiEndpoint } from '@placeos/ts-client';

import { VERSION } from '../../environments/version';
import { BaseClass } from 'apps/backoffice/src/app/common/base.class';
import {
    ChangelogModalComponent,
    ChangelogModalData,
} from 'apps/backoffice/src/app/overlays/changelog-modal/changelog-modal.component';
import { BackofficeUsersService } from 'apps/backoffice/src/app/users/users.service';
import {
    notifyError,
    notifyInfo,
} from 'apps/backoffice/src/app/common/notifications';

import * as dayjs from 'dayjs';
import { copyToClipboard } from '../common/general';

export interface PlaceAPIDetails {
    /** Display name for the application */
    readonly app: string;
    /** Semantic version of the API */
    readonly version: string;
    /** Build time of the current version of the API */
    readonly build_time: number;
    /** Commit hash of the current version of the API */
    readonly commit: string;
}

@Component({
    selector: 'app-engine-details',
    template: `
        <h3 class="text-lg font-medium" i18n="@@backoffice">Backoffice</h3>
        <section class="space-y-2 mb-4">
            <div class="flex flex-col">
                <label for="version" i18n="@@version">Version:</label>
                <div
                    name="version"
                    class="select-all"
                    (click)="copy('version', backoffice_version)"
                >
                    {{ backoffice_version }}
                </div>
            </div>
            <div class="flex flex-col">
                <label for="hash" i18n="@@commitHash">Commit Hash:</label>
                <div
                    name="hash"
                    class="select-all"
                    (click)="copy('hash', backoffice_hash)"
                >
                    {{ backoffice_hash }}
                </div>
            </div>
            <div class="flex flex-col">
                <label for="build-time" i18n="@@buildTime">Build:</label>
                <div
                    name="build-time"
                    class="select-all"
                    (click)="copy('build time', backoffice_build)"
                >
                    {{ backoffice_build }}
                </div>
            </div>
        </section>
        <h3 class="text-lg font-medium" i18n="@@apiHeader">API</h3>
        <section class="space-y-2">
            <div class="flex flex-col">
                <label for="version" i18n="@@apiName">Application Name:</label>
                <div
                    class="select-all"
                    (click)="copy('app name', api_details?.app)"
                >
                    {{ api_details?.app }}
                </div>
            </div>
            <div class="flex flex-col">
                <label for="version" i18n="@@version">Version:</label>
                <div
                    class="select-all"
                    (click)="copy('app version', api_details?.version)"
                >
                    {{ api_details?.version }}
                </div>
            </div>
            <div class="flex flex-col">
                <label for="version" i18n="@@buildTime">Build:</label>
                <div
                    class="select-all"
                    (click)="copy('app build time', api_build)"
                >
                    {{ api_build }}
                </div>
            </div>
            <div class="flex flex-col">
                <label for="version" i18n="@@commitHash">Commit Hash:</label>
                <div
                    class="select-all"
                    (click)="copy('app commit', api_details?.commit || 'HEAD')"
                >
                    {{ api_details?.commit || 'HEAD' }}
                </div>
            </div>
        </section>
    `,
    styles: [
        `
            :host {
                padding: 1rem;
                width: 100%;
                height: 100%;
            }
        `,
    ],
})
export class PlaceDetailsComponent extends BaseClass implements OnInit {
    /** Current details about the API */
    public api_details: PlaceAPIDetails;

    public get api_build(): string {
        if (!this.api_details || !this.api_details.build_time) {
            return 'Unknown';
        }
        return dayjs(this.api_details.build_time).format(
            'DD MMM YYYY [at] h:mma'
        );
    }

    public get user() {
        return this._users.user;
    }

    public get backoffice_version() {
        return VERSION?.tag || '';
    }

    public get backoffice_hash() {
        return VERSION?.hash || '';
    }

    public get backoffice_build() {
        const build = dayjs(VERSION.time);
        return build.format('DD MMM YYYY [at] h:mma');
    }

    constructor(
        private _users: BackofficeUsersService,
        private _dialog: MatDialog
    ) {
        super();
    }

    public ngOnInit(): void {
        this.loadApiDetails();
    }

    public changelog(log: string) {
        this._dialog.open<ChangelogModalComponent, ChangelogModalData>(
            ChangelogModalComponent,
            {
                data: { changelog: log },
            }
        );
    }

    public copy(name: string, content: string) {
        copyToClipboard(content);
        notifyInfo(`Copied ${name} to clipboard`);
    }

    public loadApiDetails(): void {
        get(`${apiEndpoint()}/version`)
            .toPromise()
            .then(
                (details) => (this.api_details = details as any),
                (err) =>
                    notifyError(
                        `Error loading API details. Error: ${JSON.stringify(
                            err.response || err.message || err
                        )}`
                    )
            );
    }
}

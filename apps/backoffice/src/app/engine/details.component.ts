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

import { copyToClipboard } from '../common/general';
import { format } from 'date-fns';

export interface PlaceServiceDetails {
    /** Name of the service */
    service: string;
    /** Commit hash of the service */
    commit: string;
    /** Current version number of the service */
    version: string;
    /** Build time of the active version of the service */
    build_time: string;
    /** Version of the backend service platform */
    platform_version: string;
}

@Component({
    selector: 'app-engine-details',
    template: `
        <h3 class="text-lg font-medium" i18n="@@backoffice">Backoffice</h3>
        <section class="space-y-2 mb-4 flex flex-col px-2">
            <div class="flex items-center">
                <label for="version" class="w-24" i18n="@@version">Version:</label>
                <div
                    name="version"
                    class="bg-gray-300/60 rounded p-1 text-xs mono flex items-center"
                    (click)="copy('version', backoffice_version)"
                >
                    {{ backoffice_version }}
                </div>
            </div>
            <div class="flex items-center">
                <label for="hash" class="w-24" i18n="@@commitHash">Commit Hash:</label>
                <div
                    name="hash"
                    class="bg-gray-300/60 rounded p-1 text-xs mono flex items-center"
                    (click)="copy('hash', backoffice_hash)"
                >
                    {{ backoffice_hash }}
                </div>
            </div>
            <div class="flex items-center">
                <label for="build-time" class="w-24" i18n="@@buildTime">Build:</label>
                <div
                    name="build-time" 
                    class="text-sm"
                    (click)="copy('build time', backoffice_build)"
                >
                    {{ backoffice_build }}
                </div>
            </div>
        </section>
        <h3 class="text-lg font-medium flex items-center" i18n="@@apiHeader">
            API
            <button *ngIf="changelog_data" class="p-2 text-xs underline" (click)="changelog(changelog_data)">View Changelog</button>
        </h3>
        <section class="flex flex-wrap py-2">
            <div
                class="bg-white dark:bg-[#424242] rounded shadow m-2 min-w-[40%] flex-1 overflow-hidden"
                *ngFor="let api of api_details"
            >
                <h3 class="w-full px-4 py-2 mb-1 border-b border-gray-200 dark:border-white/20">
                    {{ api.service }}
                </h3>
                <div class="flex items-center px-4 py-1 hover:bg-gray-400/20">
                    <label class="w-24">Commit Hash:</label>
                    <div class="bg-gray-300/60 rounded p-1 text-xs mono">
                        {{ api.commit }}
                    </div>
                </div>
                <div class="flex items-center px-4 py-1 hover:bg-gray-400/20">
                    <label class="w-24">Version:</label>
                    <div class="bg-gray-300/60 rounded p-1 text-xs mono">
                        {{ api.version }}
                    </div>
                </div>
                <div class="flex items-center px-4 py-1 hover:bg-gray-400/20">
                    <label class="w-24">Build time:</label>
                    <div class="text-sm">{{ api.build_time }}</div>
                </div>
                <div class="flex items-center px-4 py-1 hover:bg-gray-400/20 mb-1">
                    <label class="w-24">Platform:</label>
                    <div class="bg-gray-300/60 rounded p-1 text-xs mono">
                        {{ api.platform_version }}
                    </div>
                </div>
            </div>
        </section>
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                padding: 1rem;
                width: 100%;
                height: 100%;
                overflow: auto;
            }
        `,
    ],
})
export class PlaceDetailsComponent extends BaseClass implements OnInit {
    /** Current details about the API */
    public api_details: PlaceServiceDetails[];
    public changelog_data: string = '';

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
        return format(VERSION.time, 'DD MMM YYYY [at] h:mma');
    }

    constructor(
        private _users: BackofficeUsersService,
        private _dialog: MatDialog
    ) {
        super();
    }

    public ngOnInit(): void {
        this.loadApiDetails();
        this.loadPlatformDetails();
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
        get(`${apiEndpoint()}/cluster/versions`)
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

    public loadPlatformDetails(): void {
        get(`${apiEndpoint()}/platform`)
            .toPromise()
            .then(
                (details) => this.changelog_data = details.changelog.replace("# Changelog\n\n", ""),
                (err) =>
                    notifyError(
                        `Error loading API details. Error: ${JSON.stringify(
                            err.response || err.message || err
                        )}`
                    )
            );
    }
}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { get, apiEndpoint } from '@placeos/ts-client';

import { VERSION } from '../../environments/version';
import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
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
import { i18n } from '../common/translate';

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
        <div class="flex items-center justify-between space-x-2 my-4">
            <div class="text-2xl">Backoffice & PlaceOS Details</div>
        </div>
        <div
            class="flex items-center space-x-2 mb-4 px-4 py-2 bg-base-200 rounded"
        >
            <h3 class="text-lg font-medium">
                {{ 'ADMIN.APPLICATION_DETAILS' | translate }}
                <span class="mono opacity-60 ml-2">Backoffice</span>
            </h3>
            <div class="flex-1"></div>
            <button
                *ngIf="backoffice_logs"
                class="p-2 text-xs underline"
                (click)="changelog(backoffice_logs)"
            >
                {{ 'ADMIN.VIEW_CHANGELOG' | translate }}
            </button>
        </div>
        <section
            class="border border-base-200 rounded p-4 mb-4 inline-grid gap-2"
            [style.gridTemplateColumns]="'6.5rem auto'"
        >
            <div class="text-sm font-medium flex items-center" for="version">
                {{ 'COMMON.VERSION' | translate }}:
            </div>
            <div class="flex items-center space-x-2">
                <code
                    name="version"
                    (click)="copy('version', backoffice_version)"
                >
                    {{ backoffice_version }}
                </code>
                <code
                    name="tag"
                    class="ml-2"
                    (click)="copy('tag', backoffice_tag)"
                >
                    {{ backoffice_tag }}
                </code>
            </div>
            <div class="text-sm font-medium flex items-center" for="hash">
                {{ 'COMMON.GIT_COMMIT' | translate }}:
            </div>
            <div>
                <code name="hash" (click)="copy('hash', backoffice_hash)">
                    {{ backoffice_hash }}
                </code>
            </div>
            <div class="text-sm font-medium flex items-center" for="build-time">
                {{ 'ADMIN.BUILD' | translate }}:
            </div>
            <div
                name="build-time"
                class="text-sm"
                (click)="copy('build time', backoffice_build)"
            >
                {{ backoffice_build }}
            </div>
        </section>
        <div class="flex items-center space-x-4 px-4 py-2 bg-base-200 rounded">
            <div class="text-lg font-medium">
                {{ 'ADMIN.BACKEND_SERVICES' | translate }}
                <span class="mono opacity-60 ml-2">API</span>
            </div>
            <code class="bg-base-300" *ngIf="backend_version">
                {{ backend_version }}
            </code>
            <div class="flex-1"></div>
            <button
                *ngIf="changelog_data"
                class="p-2 text-xs underline"
                (click)="changelog(changelog_data)"
            >
                {{ 'ADMIN.VIEW_CHANGELOG' | translate }}
            </button>
        </div>
        <section class="flex flex-wrap py-2 -mx-2">
            <ng-container *ngIf="api_details.length > 0; else empty_state">
                <div
                    class="bg-base-100  rounded border border-base-200  m-2 min-w-[40%] flex-1 overflow-hidden"
                    *ngFor="let api of api_details"
                >
                    <h3 class="w-full px-4 py-2 border-b border-base-200 mono">
                        {{ api.service }}
                    </h3>
                    <div
                        class="p-4 inline-grid gap-2"
                        [style.gridTemplateColumns]="'6.5rem auto'"
                    >
                        <div class="text-sm font-medium flex items-center">
                            {{ 'COMMON.GIT_COMMIT' | translate }}:
                        </div>
                        <div>
                            <code>{{ api.commit | slice: 0:8 }}</code>
                        </div>
                        <div class="text-sm font-medium flex items-center">
                            {{ 'COMMON.VERSION' | translate }}:
                        </div>
                        <div>
                            <code>{{ api.version }}</code>
                        </div>
                        <div class="text-sm font-medium flex items-center">
                            {{ 'ADMIN.PLATFORM' | translate }}:
                        </div>
                        <div>
                            <code>{{ api.platform_version }}</code>
                        </div>
                        <div class="text-sm font-medium flex items-center">
                            {{ 'ADMIN.BUILT_AT' | translate }}:
                        </div>
                        <div class="text-sm">
                            {{ api.build_time | date: 'MMM d, y, h:mm a' }}
                        </div>
                    </div>
                </div>
            </ng-container>
        </section>
        <ng-template #empty_state>
            <div class="w-full p-24 flex flex-col items-center justify-center">
                <div
                    class="p-4 border border-base-300 rounded-lg bg-base-200 opacity-30"
                >
                    {{ 'ADMIN.BACKEND_SERVICES_EMPTY' | translate }}
                </div>
            </div>
        </ng-template>
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
export class PlaceDetailsComponent extends AsyncHandler implements OnInit {
    /** Current details about the API */
    public api_details: PlaceServiceDetails[] = [];
    public changelog_data: string = '';
    public backend_version = '';
    public backoffice_logs = '';

    public get user() {
        return this._users.user;
    }

    public get backoffice_version() {
        return VERSION?.stamp || '';
    }

    public get backoffice_tag() {
        return VERSION?.tag || '';
    }

    public get backoffice_hash() {
        return VERSION?.hash || '';
    }

    public get backoffice_build() {
        return `${format(VERSION.time, 'dd MMM yyyy')} at ${format(
            VERSION.time,
            ' h:mma'
        )}`;
    }

    constructor(
        private _users: BackofficeUsersService,
        private _dialog: MatDialog,
        private _cdr: ChangeDetectorRef
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
        notifyInfo(i18n('ADMIN.COPIED', { name }));
    }

    public async loadApiDetails() {
        const details = await get(`${apiEndpoint()}/cluster/versions`)
            .toPromise()
            .catch((err) =>
                notifyError(
                    i18n('ADMIN.BACKEND_SERVICES_ERROR', {
                        error: JSON.stringify(
                            err.response || err.message || err
                        ),
                    })
                )
            );
        this.api_details = (details as any) || [];
        this._cdr.detectChanges();
    }

    public async loadPlatformDetails() {
        const { changelog, version } = await get(`${apiEndpoint()}/platform`)
            .toPromise()
            .catch((err) => {
                notifyError(
                    i18n('ADMIN.BACKEND_SERVICES_ERROR', {
                        error: JSON.stringify(
                            err.response || err.message || err
                        ),
                    })
                );
                throw err;
            });
        this.changelog_data = changelog.replace('# Changelog\n\n', '');
        this.backend_version = version;
        this.backoffice_logs = await (
            await fetch(
                'https://raw.githubusercontent.com/PlaceOS/backoffice/develop/CHANGELOG.md'
            )
        ).text();
    }
}

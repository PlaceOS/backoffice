import { Component, OnInit, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { apiEndpoint, get } from '@placeos/ts-client';

import { VERSION } from '../../env/version';
import { AsyncHandler } from '../common/async-handler.class';
import { notifyError, notifyInfo } from '../common/notifications';
import {
    ChangelogModalComponent,
    ChangelogModalData,
} from '../overlays/changelog-modal.component';
import { BackofficeUsersService } from '../users/users.service';

import { CommonModule } from '@angular/common';
import { format } from 'date-fns';
import { copyToClipboard } from '../common/general';
import { i18n } from '../common/locale.service';
import { TranslatePipe } from '../ui/translate.pipe';

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
        <div class="my-4 flex items-center justify-between space-x-2">
            <div class="text-2xl">Backoffice & PlaceOS Details</div>
        </div>
        <div
            class="bg-base-200 mb-4 flex items-center space-x-2 rounded-sm px-4 py-2"
        >
            <h3 class="text-lg font-medium">
                {{ 'ADMIN.APPLICATION_DETAILS' | translate }}
                <span class="mono ml-2 opacity-60">Backoffice</span>
            </h3>
            <div class="flex-1"></div>
            @if (backoffice_logs()) {
                <button
                    class="p-2 text-xs underline"
                    (click)="changelog(backoffice_logs())"
                >
                    {{ 'ADMIN.VIEW_CHANGELOG' | translate }}
                </button>
            }
        </div>
        <section
            class="border-base-200 mb-4 inline-grid gap-2 rounded-sm border p-4"
            [style.gridTemplateColumns]="'6.5rem auto'"
        >
            <div class="flex items-center text-sm font-medium" for="version">
                {{ 'COMMON.VERSION' | translate }}
            </div>
            <div class="flex items-center space-x-2">
                <button matRipple (click)="copy('version', backoffice_version)">
                    <code name="version">
                        {{ backoffice_version }}
                    </code>
                </button>
                <button
                    matRipple
                    class="ml-2"
                    (click)="copy('tag', backoffice_tag)"
                >
                    <code name="tag">
                        {{ backoffice_tag }}
                    </code>
                </button>
            </div>
            <div class="flex items-center text-sm font-medium" for="hash">
                {{ 'COMMON.GIT_COMMIT' | translate }}
            </div>
            <div>
                <code
                    name="hash"
                    tabindex="0"
                    role="button"
                    (click)="copy('hash', backoffice_hash)"
                    (keyup.enter)="copy('hash', backoffice_hash)"
                >
                    {{ backoffice_hash }}
                </code>
            </div>
            <div class="flex items-center text-sm font-medium" for="build-time">
                {{ 'ADMIN.BUILD' | translate }}
            </div>
            <div
                name="build-time"
                class="text-sm"
                tabindex="0"
                role="button"
                (click)="copy('build time', backoffice_build)"
                (keyup.enter)="copy('build time', backoffice_build)"
            >
                {{ backoffice_build }}
            </div>
        </section>
        <div
            class="bg-base-200 flex items-center space-x-4 rounded-sm px-4 py-2"
        >
            <div class="text-lg font-medium">
                {{ 'ADMIN.BACKEND_SERVICES' | translate }}
                <span class="mono ml-2 opacity-60">API</span>
            </div>
            @if (backend_version()) {
                <code class="bg-base-300">
                    {{ backend_version() }}
                </code>
            }
            <div class="flex-1"></div>
            @if (changelog_data()) {
                <button
                    class="p-2 text-xs underline"
                    (click)="changelog(changelog_data())"
                >
                    {{ 'ADMIN.VIEW_CHANGELOG' | translate }}
                </button>
            }
        </div>
        <section class="-mx-2 flex flex-wrap py-2">
            @if (api_details().length > 0) {
                @for (api of api_details(); track $index) {
                    <div
                        class="border-base-200 bg-base-100 m-2 min-w-[40%] flex-1 overflow-hidden rounded-sm border"
                    >
                        <h3
                            class="mono border-base-200 w-full border-b px-4 py-2"
                        >
                            {{ api.service }}
                        </h3>
                        <div
                            class="inline-grid gap-2 p-4"
                            [style.gridTemplateColumns]="'7.5rem auto'"
                        >
                            <div class="flex items-center text-sm font-medium">
                                {{ 'COMMON.GIT_COMMIT' | translate }}
                            </div>
                            <div>
                                <code>{{ api.commit | slice: 0 : 8 }}</code>
                            </div>
                            <div class="flex items-center text-sm font-medium">
                                {{ 'COMMON.VERSION' | translate }}
                            </div>
                            <div>
                                <code>{{ api.version }}</code>
                            </div>
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ADMIN.PLATFORM' | translate }}
                            </div>
                            <div>
                                <code>{{ api.platform_version }}</code>
                            </div>
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ADMIN.BUILT_AT' | translate }}
                            </div>
                            <div class="text-sm">
                                {{ api.build_time | date: 'MMM d, y, h:mm a' }}
                            </div>
                        </div>
                    </div>
                }
            } @else {
                <div
                    class="flex w-full flex-col items-center justify-center p-24"
                >
                    <div
                        class="border-base-300 bg-base-200 rounded-lg border p-4 opacity-30"
                    >
                        {{ 'ADMIN.BACKEND_SERVICES_EMPTY' | translate }}
                    </div>
                </div>
            }
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
    imports: [TranslatePipe, CommonModule],
})
export class PlaceDetailsComponent extends AsyncHandler implements OnInit {
    private _users = inject(BackofficeUsersService);
    private _dialog = inject(MatDialog);

    /** Current details about the API */
    public readonly api_details = signal([] as PlaceServiceDetails[]);
    public readonly changelog_data = signal('');
    public readonly backend_version = signal('');
    public readonly backoffice_logs = signal('');

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
            ' h:mma',
        )}`;
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
            },
        );
    }

    public copy(name: string, content: string) {
        copyToClipboard(content);
        notifyInfo(i18n('ADMIN.COPIED', { name }));
    }

    public async loadApiDetails() {
        const details = await get(`${apiEndpoint()}/cluster/versions`).catch(
            (err) =>
                notifyError(
                    i18n('ADMIN.BACKEND_SERVICES_ERROR', {
                        error: JSON.stringify(
                            err.response || err.message || err,
                        ),
                    }),
                ),
        );
        this.api_details.set((details as PlaceServiceDetails[]) || []);
    }

    public async loadPlatformDetails() {
        const { changelog, version } = await get(
            `${apiEndpoint()}/platform`,
        ).catch((err) => {
            notifyError(
                i18n('ADMIN.BACKEND_SERVICES_ERROR', {
                    error: JSON.stringify(err.response || err.message || err),
                }),
            );
            throw err;
        });
        this.changelog_data.set(changelog.replace('# Changelog\n\n', ''));
        this.backend_version.set(version);
        this.backoffice_logs.set(
            await (
                await fetch(
                    'https://raw.githubusercontent.com/PlaceOS/backoffice/develop/CHANGELOG.md',
                )
            ).text(),
        );
    }
}

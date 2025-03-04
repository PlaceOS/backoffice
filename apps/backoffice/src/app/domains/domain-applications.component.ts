import { Component } from '@angular/core';
import { PlaceApplication, PlaceDomain } from '@placeos/ts-client';

import { copyToClipboard } from 'apps/backoffice/src/app/common/general';
import { notifyInfo } from 'apps/backoffice/src/app/common/notifications';
import { HashMap } from 'apps/backoffice/src/app/common/types';
import { i18n } from '../common/translate';
import { DomainStateService } from './domain-state.service';

@Component({
    selector: 'domain-applications',
    template: `
        <div class="flex h-full w-full flex-col">
            <div header class="">
                <button
                    btn
                    class="mb-4 w-full sm:w-40"
                    (click)="newApplication()"
                >
                    {{ 'DOMAINS.APPLICATION_NEW' | translate }}
                </button>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!(loading | async)"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-[84rem] text-sm"
                    [data]="applications"
                    [columns]="[
                        { key: 'name', name: 'Name', content: name_template },
                        {
                            key: 'redirect_uri',
                            name: 'DOMAINS.FIELD_REDIRECT_URI' | translate,
                            content: redirect_template,
                            size: '20rem',
                        },
                        {
                            key: 'uid',
                            name: 'DOMAINS.FIELD_CLIENT_ID' | translate,
                            content: client_id_template,
                            size: '17rem',
                        },
                        {
                            key: 'secret',
                            name: 'DOMAINS.FIELD_CLIENT_SECRET' | translate,
                            content: secret_template,
                        },
                        { key: 'scopes', name: 'Scopes' },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '6rem',
                            sortable: false,
                            content: actions_template,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'DOMAINS.APPLICATIONS_EMPTY' | translate"
                ></simple-table>
            </div>
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div class="text-sm">{{ row.name }}</div>
            </div>
        </ng-template>
        <ng-template #redirect_template let-row="row">
            <a
                [href]="row.redirect_uri"
                target="_blank"
                class="truncate p-4 underline"
            >
                {{ row.redirect_uri }}
            </a>
        </ng-template>
        <ng-template #client_id_template let-row="row">
            <div class="p-4 font-mono text-xs">{{ row.uid }}</div>
        </ng-template>
        <ng-template #secret_template let-row="row">
            <div class="flex items-center p-2">
                <button
                    icon
                    matRipple
                    (click)="copySecret(row)"
                    [matTooltip]="'DOMAINS.COPY_SECRET' | translate"
                >
                    <app-icon>content_copy</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    (mousedown)="show_secret[row.id] = true"
                    (touchstart)="show_secret[row.id] = true"
                    (window:mouseup)="show_secret[row.id] = false"
                    (window:touchend)="show_secret[row.id] = false"
                    [matTooltip]="'DOMAINS.VIEW_SECRET' | translate"
                >
                    <app-icon>visibility</app-icon>
                </button>
                <div class="p-2 font-mono text-xs">
                    <span
                        *ngIf="!show_secret[row.id]"
                        class="rounded bg-base-200 p-2"
                        >{{ 'DOMAINS.SECRET_HIDDEN' | translate }}</span
                    >
                    <span *ngIf="show_secret[row.id]">{{ row.secret }}</span>
                </div>
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    [matTooltip]="'DOMAINS.APPLICATION_EDIT' | translate"
                    (click)="editApplication(row)"
                >
                    <app-icon>edit</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    class="text-error"
                    [matTooltip]="'DOMAINS.APPLICATION_REMOVE' | translate"
                    (click)="removeApplication(row)"
                >
                    <app-icon>delete</app-icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }

            [role='table'] > div {
                min-width: 56rem;
            }
        `,
    ],
})
export class DomainApplicationsComponent {
    /** List of applications associated with the active domain */
    public readonly applications = this._service.applications;
    public readonly loading = this._service.loading;

    public show_secret: HashMap<boolean> = {};

    public readonly newApplication = () => this._service.editApplication();
    public readonly editApplication = (item) =>
        this._service.editApplication(item);
    public readonly removeApplication = (item) =>
        this._service.deleteApplication(item);

    public get item(): PlaceDomain {
        return this._service.active_item as any;
    }

    constructor(private _service: DomainStateService) {}

    public copySecret(item: PlaceApplication) {
        this.show_secret[item.id] = false;
        copyToClipboard(item.secret);
        notifyInfo(i18n('DOMAINS.COPIED_SECRET'));
    }
}

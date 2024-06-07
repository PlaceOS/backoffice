import { Component } from '@angular/core';
import { PlaceDomain, PlaceApplication } from '@placeos/ts-client';

import { HashMap } from 'apps/backoffice/src/app/common/types';
import { copyToClipboard } from 'apps/backoffice/src/app/common/general';
import { notifyInfo } from 'apps/backoffice/src/app/common/notifications';
import { DomainStateService } from './domain-state.service';

@Component({
    selector: 'domain-applications',
    template: `
        <div class="flex flex-col h-full w-full">
            <div header class="">
                <button
                    btn
                    class="w-full sm:w-40 mb-4"
                    (click)="newApplication()"
                    i18n="@@newAction"
                >
                    New Application
                </button>
            </div>
            <div class="flex-1 w-full h-1/2 overflow-auto">
                <simple-table
                    class="min-w-[84rem] block text-sm"
                    [data]="applications"
                    [columns]="[
                        { key: 'name', name: 'Name', content: name_template },
                        {
                            key: 'redirect_uri',
                            name: 'Redirect URI',
                            content: redirect_template,
                            size: '20rem'
                        },
                        {
                            key: 'uid',
                            name: 'Client ID',
                            content: client_id_template,
                            size: '17rem'
                        },
                        {
                            key: 'secret',
                            name: 'Client Secret',
                            content: secret_template
                        },
                        { key: 'scopes', name: 'Scopes' },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '6rem',
                            sortable: false,
                            content: actions_template
                        }
                    ]"
                    [sortable]="true"
                    empty_message="No applications for domain"
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
                    (click)="copySecret(item)"
                    matTooltip="Copy Secret to Clipboard"
                >
                    <app-icon>content_copy</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    (mousedown)="show_secret[item.id] = true"
                    (touchstart)="show_secret[item.id] = true"
                    (window:mouseup)="show_secret[item.id] = false"
                    (window:touchend)="show_secret[item.id] = false"
                    matTooltip="View Secret"
                >
                    <app-icon>visibility</app-icon>
                </button>
                <div class="p-2 font-mono text-xs">
                    <span
                        *ngIf="!show_secret[item.id]"
                        class="p-2 bg-base-200 rounded"
                        >Hidden</span
                    >
                    <span *ngIf="show_secret[item.id]">{{ row.secret }}</span>
                </div>
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2 mx-auto">
                <button icon matRipple (click)="editApplication(item)">
                    <app-icon>edit</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    class="text-error"
                    (click)="removeApplication(item)"
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

    public show_secret: HashMap<boolean> = {};

    public readonly newApplication = () => this._service.editApplication();
    public readonly editApplication = (item) =>
        this._service.editApplication(item);
    public readonly deleteApplication = (item) =>
        this._service.deleteApplication(item);

    public get item(): PlaceDomain {
        return this._service.active_item as any;
    }

    constructor(private _service: DomainStateService) {}

    public copySecret(item: PlaceApplication) {
        this.show_secret[item.id] = false;
        copyToClipboard(item.secret);
        notifyInfo('Copied client secret to clipboard');
    }
}

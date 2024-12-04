import { Component } from '@angular/core';
import { PlaceDomain } from '@placeos/ts-client';

import { HashMap } from 'apps/backoffice/src/app/common/types';
import { DomainStateService } from './domain-state.service';

@Component({
    selector: 'domain-authentication',
    template: `
        <div class="flex flex-col h-full w-full">
            <div header class="">
                <button
                    btn
                    class="w-full sm:w-48 mb-4"
                    (click)="newAuthSource()"
                >
                    {{ 'DOMAINS.AUTHENTICATION_NEW' | translate }}
                </button>
            </div>
            <div class="flex-1 w-full h-1/2 overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!(loading | async)"
                ></mat-progress-bar>
                <simple-table
                    class="min-w-[40rem] block text-sm"
                    [data]="auth_sources"
                    [columns]="[
                        {
                            key: 'name',
                            name: 'COMMON.FIELD_NAME' | translate,
                            content: name_template
                        },
                        {
                            key: 'type',
                            name: 'DOMAINS.FIELD_TYPE' | translate,
                            size: '6rem',
                            content: type_template
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            size: '6.5rem',
                            sortable: false
                        }
                    ]"
                    [sortable]="true"
                    [empty_message]="'DOMAINS.AUTHENTICATION_EMPTY' | translate"
                ></simple-table>
            </div>
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div class="text-sm">{{ row.name }}</div>
                <div class="text-xs opacity-30">{{ row.id }}</div>
            </div>
        </ng-template>
        <ng-template #type_template let-row="row">
            <div class="p-4 uppercase mono text-sm">{{ row.type }}</div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2 mx-auto">
                <button
                    icon
                    matRipple
                    [matTooltip]="'DOMAINS.AUTHENTICATION_EDIT' | translate"
                    (click)="editAuthSource(row)"
                >
                    <app-icon>edit</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    class="text-error"
                    [matTooltip]="'DOMAINS.AUTHENTICATION_REMOVE' | translate"
                    (click)="removeAuthSource(row)"
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
        `,
    ],
})
export class DomainAuthenticationComponent {
    /** List of auth sources associated with the active domain */
    public readonly auth_sources = this._service.auth_sources;
    public readonly loading = this._service.loading;
    /** Mapping of auth sources to their type */
    public source_types: HashMap<'oauth' | 'saml' | 'ldap'> = {};

    public readonly newAuthSource = () => this._service.editAuthSource();
    public readonly editAuthSource = (source) =>
        this._service.editAuthSource(source);
    public readonly deleteAuthSource = (source) =>
        this._service.deleteAuthSource(source);

    public get item(): PlaceDomain {
        return this._service.active_item as any;
    }

    constructor(private _service: DomainStateService) {}
}

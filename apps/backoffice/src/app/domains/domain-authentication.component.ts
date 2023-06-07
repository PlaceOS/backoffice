import { Component } from '@angular/core';
import { PlaceDomain } from '@placeos/ts-client';

import { HashMap } from 'apps/backoffice/src/app/common/types';
import { DomainStateService } from './domain-state.service';

@Component({
    selector: 'domain-authentication',
    template: `
        <button
            btn
            class="w-full sm:w-40 mb-4"
            (click)="newAuthSource()"
            i18n="@@newAction"
        >
            New Auth Source
        </button>
        <div
            role="table"
            class="min-w-[36rem]"
            *ngIf="(auth_sources | async)?.length; else empty_state"
        >
            <div table-head>
                <div class="w-48 p-2" i18n="@@authTableID">ID</div>
                <div class="flex-1 p-2" i18n="@@authTableName">Name</div>
                <div class="w-32 p-2" i18n="@@authTableType">Type</div>
                <div class="w-24 p-2"></div>
            </div>
            <div table-body>
                <div table-row *ngFor="let item of auth_sources | async">
                    <div class="w-48 p-2 mono text-xs">
                        {{ item.id }}
                    </div>
                    <div class="flex-1 p-2">
                        {{ item.name }}
                    </div>
                    <div class="w-32 p-2 uppercase">{{ item.type }}</div>
                    <div class="w-24 flex items-center justify-center">
                        <button btn icon (click)="editAuthSource(item)">
                            <app-icon
                                [icon]="{ class: 'backoffice-edit' }"
                            ></app-icon>
                        </button>
                        <button btn icon (click)="deleteAuthSource(item)">
                            <app-icon
                                [icon]="{ class: 'backoffice-trash' }"
                            ></app-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <ng-template #empty_state>
            <div empty-state>
                <p i18n="@@authTableEmpty">No authentication sources found</p>
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

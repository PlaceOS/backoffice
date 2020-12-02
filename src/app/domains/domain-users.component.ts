import { Component } from '@angular/core';
import { PlaceDomain } from '@placeos/ts-client';

import { DomainStateService } from './domain-state.service';

@Component({
    selector: 'domain-users',
    template: `
        <div role="table" *ngIf="(users | async).length; else empty_state">
            <div table-head>
                <div class="w-64 p-2" i18n="@@userTableName">Name</div>
                <div class="flex-1 p-2" i18n="@@userTableEmail">Email</div>
                <div class="w-24 p-2" i18n="@@userTableRole">Role</div>
            </div>
            <div table-body>
                <div table-row *ngFor="let item of users | async">
                    <div class="w-64 p-2 underline">
                        <a
                            [routerLink]="['/users', item.id]"
                            [matTooltip]="item.id"
                            matTooltipPosition="right"
                        >
                            {{ item.name }}
                        </a>
                    </div>
                    <div class="flex-1 p-2 underline">
                        <a [href]="'mailto:' + item.email">{{ item.email }}</a>
                    </div>
                    <div class="w-24 p-2">{{ item.sys_admin ? 'Admin' : item.support ? 'Support' : 'None' }}</div>
                </div>
            </div>
        </div>
        <ng-template #empty_state>
            <div class="flex flex-col items-center p-8">
                <p i18n="@@userTableEmpty">No users associated with domain</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                padding: 1rem;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class DomainUsersComponent {
    public readonly users = this._service.users;

    public get item(): PlaceDomain {
        return this._service.active_item as any;
    }

    constructor(private _service: DomainStateService) {}
}

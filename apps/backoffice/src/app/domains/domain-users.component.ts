import { Component } from '@angular/core';
import { PlaceDomain } from '@placeos/ts-client';

import { DomainStateService } from './domain-state.service';

@Component({
    selector: 'domain-users',
    template: `
        <div class="w-full h-full overflow-auto">
            <mat-progress-bar
                mode="indeterminate"
                class="w-full"
                [class.opacity-0]="!(loading | async)"
            ></mat-progress-bar>
            <simple-table
                class="min-w-[32rem] block text-sm"
                [data]="users"
                [columns]="[
                    { key: 'name', name: 'User', content: name_template },
                    {
                        key: 'role',
                        name: 'Role',
                        content: role_template,
                        size: '6rem'
                    }
                ]"
                [sortable]="true"
                empty_message="No users associated with domain"
            ></simple-table>
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div class="text-sm">{{ row.name }}</div>
                <div class="text-xs opacity-30">{{ row.email }}</div>
            </div>
        </ng-template>
        <ng-template #role_template let-row="row">
            <div class="p-4">
                <code
                    [class.text-opacity-20]="!item.sys_admin && !item.support"
                    class="px-2 py-1"
                >
                    {{
                        item.sys_admin
                            ? 'Admin'
                            : item.support
                            ? 'Support'
                            : 'None'
                    }}
                </code>
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
export class DomainUsersComponent {
    public readonly users = this._service.users;
    public readonly loading = this._service.loading;

    public get item(): PlaceDomain {
        return this._service.active_item as any;
    }

    constructor(private _service: DomainStateService) {}
}

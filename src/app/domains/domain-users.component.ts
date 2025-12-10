import { Component, inject } from '@angular/core';
import { PlaceDomain } from '@placeos/ts-client';

import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { DomainStateService } from './domain-state.service';

@Component({
    selector: 'domain-users',
    template: `
        <div class="h-full w-full overflow-auto">
            <mat-progress-bar
                mode="indeterminate"
                class="w-full"
                [class.opacity-0]="(loading | async) !== true"
            ></mat-progress-bar>
            <simple-table
                class="block min-w-lg text-sm"
                [data]="users"
                [columns]="[
                    {
                        key: 'name',
                        name: 'DOMAINS.FIELD_USER' | translate,
                        content: name_template,
                    },
                    {
                        key: 'role',
                        name: 'DOMAINS.FIELD_ROLE' | translate,
                        content: role_template,
                        size: '6rem',
                    },
                ]"
                [sortable]="true"
                [empty_message]="'DOMAINS.USER_LIST_EMPTY' | translate"
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
                    [class.opacity-20]="!row.sys_admin && !row.support"
                    class="px-2 py-1"
                >
                    {{
                        (row.sys_admin
                            ? 'COMMON.USER_ADMIN'
                            : row.support
                              ? 'COMMON.USER_SUPPORT'
                              : 'COMMON.USER_BASIC'
                        ) | translate
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
    imports: [
        SimpleTableComponent,
        TranslatePipe,
        CommonModule,
        MatProgressBarModule,
    ],
})
export class DomainUsersComponent {
    private _service = inject(DomainStateService);

    public readonly users = this._service.users;
    public readonly loading = this._service.loading;

    public get item(): PlaceDomain {
        return this._service.active_item as PlaceDomain;
    }
}

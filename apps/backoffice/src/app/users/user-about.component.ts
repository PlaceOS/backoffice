import { Component } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';

import { ActiveItemService } from 'apps/backoffice/src/app/common/item.service';

@Component({
    selector: 'user-about',
    template: `
        <section class="mb-4 flex items-center space-x-2">
            <div
                class="flex items-center space-x-2 rounded-3xl border border-base-300 p-2"
            >
                <div class="px-2">{{ 'USERS.ROLE_SUPPORT' | translate }}</div>
                <div
                    class="rounded-2xl px-2 py-1 text-xs"
                    [class.bg-success]="item?.support === true"
                    [class.text-success-content]="item?.support === true"
                    [class.bg-error]="item?.support !== true"
                    [class.text-error-content]="item?.support !== true"
                >
                    {{
                        (item?.support === true
                            ? 'COMMON.TRUE'
                            : 'COMMON.FALSE'
                        ) | translate
                    }}
                </div>
            </div>
            <div
                class="flex items-center space-x-2 rounded-3xl border border-base-300 p-2"
            >
                <div class="px-2">{{ 'USERS.ROLE_ADMIN' | translate }}</div>
                <div
                    class="rounded-2xl px-2 py-1 text-xs"
                    [class.bg-success]="item?.sys_admin === true"
                    [class.text-success-content]="item?.sys_admin === true"
                    [class.bg-error]="item?.sys_admin !== true"
                    [class.text-error-content]="item?.sys_admin !== true"
                >
                    {{
                        (item?.sys_admin === true
                            ? 'COMMON.TRUE'
                            : 'COMMON.FALSE'
                        ) | translate
                    }}
                </div>
            </div>
        </section>
        <section class="mb-4 flex space-x-2">
            <div
                class="grid w-1/3 flex-1 gap-2 rounded border border-base-200 p-4"
                [style.gridTemplateColumns]="'5.5rem auto'"
            >
                <div class="flex items-center text-sm font-medium">
                    {{ 'COMMON.FIELD_EMAIL' | translate }}
                </div>
                <div>
                    <a
                        class="mono truncate text-sm underline"
                        [href]="'mailto:' + item?.email"
                    >
                        {{ item?.email }}
                    </a>
                </div>
                <ng-container *ngIf="item?.department">
                    <div class="flex items-center text-sm font-medium">
                        {{ 'USERS.FIELD_DEPARTMENT' | translate }}
                    </div>
                    <div>{{ item?.department }}</div>
                </ng-container>
                <div class="flex items-center text-sm font-medium">
                    {{ 'USERS.AUTHORITY_ID' | translate }}
                </div>
                <div class="mono text-sm">
                    {{ item?.authority_id }}
                </div>
                <div class="flex items-center text-sm font-medium" for="groups">
                    {{ 'USERS.FIELD_GROUPS' | translate }}
                </div>
                <div
                    *ngIf="item.groups?.length; else empty_group_state"
                    class="-mx-1 flex flex-wrap"
                >
                    <div
                        *ngFor="let group of item.groups"
                        class="mono m-1 rounded bg-base-200 px-2 py-1 text-[0.625rem]"
                    >
                        {{ group }}
                    </div>
                </div>
                <div class="flex items-center text-sm font-medium">
                    {{ 'COMMON.CREATED_AT' | translate }}
                </div>
                <div class="flex items-center">
                    <span
                        [matTooltip]="
                            (item.created_at * 1000 | date: 'mediumDate') +
                            ', ' +
                            (item.created_at * 1000 | date: 'shortTime')
                        "
                        matTooltipPosition="right"
                    >
                        {{ item.created_at * 1000 | dateFrom }}
                    </span>
                </div>
                <ng-template *ngIf="item.updated_at">
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.UPDATED_AT' | translate }}
                    </div>
                    <div class="flex items-center">
                        <span
                            [matTooltip]="
                                (item.updated_at * 1000 | date: 'mediumDate') +
                                ', ' +
                                (item.updated_at * 1000 | date: 'shortTime')
                            "
                            matTooltipPosition="right"
                        >
                            {{ item.updated_at * 1000 | dateFrom }}
                        </span>
                    </div>
                </ng-template>
            </div>
        </section>
        <ng-template #empty_group_state>
            <div class="opacity-30">{{ 'USERS.NO_GROUPS' | translate }}</div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
            }
        `,
    ],
})
export class UserAboutComponent {
    public get item(): PlaceUser {
        return this._service.active_item as any;
    }

    constructor(private _service: ActiveItemService) {}
}

import { Component } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';

import { ActiveItemService } from 'apps/backoffice/src/app/common/item.service';

@Component({
    selector: 'user-about',
    template: `
        <section class="flex items-center space-x-2 mb-4">
            <div
                class="flex items-center space-x-2 border border-base-300 p-2 rounded-3xl"
            >
                <div class="px-2">Tech Support</div>
                <div
                    class="rounded-2xl px-2 py-1 text-xs"
                    [class.bg-success]="item?.support === true"
                    [class.text-success-content]="item?.support === true"
                    [class.bg-error]="item?.support !== true"
                    [class.text-error-content]="item?.support !== true"
                >
                    {{ item?.support === true ? 'Yes' : 'No' }}
                </div>
            </div>
            <div
                class="flex items-center space-x-2 border border-base-300 p-2 rounded-3xl"
            >
                <div class="px-2">System Admin</div>
                <div
                    class="rounded-2xl px-2 py-1 text-xs"
                    [class.bg-success]="item?.sys_admin === true"
                    [class.text-success-content]="item?.sys_admin === true"
                    [class.bg-error]="item?.sys_admin !== true"
                    [class.text-error-content]="item?.sys_admin !== true"
                >
                    {{ item?.sys_admin === true ? 'Yes' : 'No' }}
                </div>
            </div>
        </section>
        <section class="flex space-x-2 mb-4">
            <div
                class="rounded p-4 border border-base-200 w-1/3 flex-1 grid gap-2"
                [style.gridTemplateColumns]="'5.5rem auto'"
            >
                <div
                    class="text-sm font-medium flex items-center"
                    i18n="@@userCreatedAtLabel"
                >
                    Email:
                </div>
                <div>
                    <a
                        class="underline mono text-sm truncate"
                        [href]="'mailto:' + item?.email"
                    >
                        {{ item?.email }}
                    </a>
                </div>
                <ng-container *ngIf="item?.department">
                    <div
                        class="text-sm font-medium flex items-center"
                        i18n="@@userCreatedAtLabel"
                    >
                        Department:
                    </div>
                    <div>{{ item?.department }}</div>
                </ng-container>
                <div
                    class="text-sm font-medium flex items-center"
                    i18n="@userUpdatedAtLabel"
                >
                    Authority ID:
                </div>
                <div class="mono text-sm">
                    {{ item?.authority_id }}
                </div>
                <div
                    class="text-sm font-medium flex items-center"
                    for="groups"
                    i18n="@@userGroupsLabel"
                >
                    User Groups:
                </div>
                <div
                    *ngIf="item.groups?.length; else empty_group_state"
                    class="flex flex-wrap"
                >
                    <div
                        *ngFor="let group of item.groups"
                        class="mono text-[0.625rem] px-2 py-1 m-1 bg-base-200 rounded"
                    >
                        {{ group }}
                    </div>
                </div>
                <div
                    class="text-sm font-medium flex items-center"
                    i18n="@@repoCreatedAtLabel"
                >
                    Created:
                </div>
                <div class=" flex items-center">
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
                    <div
                        class="text-sm font-medium flex items-center"
                        i18n="@@repoUpdatedAtLabel"
                    >
                        Updated:
                    </div>
                    <div class=" flex items-center">
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
            <div class="opacity-30">No Access Groups</div>
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

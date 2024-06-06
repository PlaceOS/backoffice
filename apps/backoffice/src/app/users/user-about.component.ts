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
        <section class="space-y-2 p-2">
            <div class="flex items-center space-x-2" *ngIf="item?.created_at">
                <label class="w-24" i18n="@@userCreatedAtLabel">Email:</label>
                <div class="value">
                    <a [href]="'mailto:' + item?.email">{{ item?.email }}</a>
                </div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.department">
                <label i18n="@@userCreatedAtLabel">Department:</label>
                <div class="value">{{ item?.department }}</div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.created_at">
                <label class="w-24" i18n="@@userCreatedAtLabel">Created:</label>
                <div class="value">
                    {{ item?.created_at * 1000 | dateFrom }}
                </div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.updated_at">
                <label class="w-24" i18n="@userUpdatedAtLabel">Updated:</label>
                <div class="value">
                    {{ item?.updated_at * 1000 | dateFrom }}
                </div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.authority_id">
                <label class="w-24" i18n="@userUpdatedAtLabel"
                    >Authority ID:</label
                >
                <div class="value mono">
                    {{ item?.authority_id }}
                </div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.groups">
                <label class="my-1 w-24" for="groups" i18n="@@userGroupsLabel"
                    >User Groups:</label
                >
                <div
                    class="value"
                    *ngIf="item.groups?.length; else empty_group_state"
                >
                    <mat-chip-list name="groups">
                        <mat-chip class="m-1" *ngFor="let group of item.groups">
                            {{ group }}
                        </mat-chip>
                    </mat-chip-list>
                </div>
            </div>
        </section>
        <ng-template #empty_group_state>
            <div class="value">No Access Groups</div>
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

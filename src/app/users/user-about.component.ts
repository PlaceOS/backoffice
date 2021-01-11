import { Component } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';

import { ActiveItemService } from 'src/app/common/item.service';

@Component({
    selector: 'user-about',
    template: `
        <section class="mb-4 space-y-2">
            <div class="flex items-center space-x-2" *ngIf="item?.created_at">
                <label i18n="@@userCreatedAtLabel">Email:</label>
                <div class="value">
                    <a [href]="'mailto:' + item?.email">{{ item?.email }}</a>
                </div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.created_at">
                <label i18n="@@userCreatedAtLabel">Created:</label>
                <div class="value">{{ item?.created_at * 1000 | dateFrom }}</div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.updated_at">
                <label i18n="@userUpdatedAtLabel">Updated:</label>
                <div class="value">{{ item?.updated_at * 1000 | dateFrom }}</div>
            </div>
        </section>
        <section>
            <div role="table">
                <div table-head>
                    <div class="w-40 p-2" i18n="@@techSupportRole">User Role</div>
                    <div class="flex-1 p-2"></div>
                </div>
                <div table-body>
                    <div table-row>
                        <div class="w-40 p-2" i18n="@@techSupportRole">Tech Support</div>
                        <div class="flex-1 p-2">{{ item?.support === true }}</div>
                    </div>
                    <div table-row>
                        <div class="w-40 p-2" i18n="@@systemAdminRole">System Admin</div>
                        <div class="flex-1 p-2">{{ item?.sys_admin === true }}</div>
                    </div>
                </div>
            </div>
        </section>
    `,
    styles: [
        `
            :host {
                padding: 1rem;
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

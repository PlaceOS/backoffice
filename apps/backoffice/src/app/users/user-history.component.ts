import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';

import { BaseClass } from 'apps/backoffice/src/app/common/base.class';
import { ActiveItemService } from 'apps/backoffice/src/app/common/item.service';

@Component({
    selector: 'user-history',
    template: `
        <div role="table" *ngIf="logs?.length; else empty_state">
            <div table-head>
                <div class="w-1/3" i18n="@@logEventStart">Session Start</div>
                <div class="w-1/3" i18n="@@logEventEnd">Ended</div>
                <div class="w-1/3" i18n="@@logEventAction">
                    Systems Accessed
                </div>
            </div>
            <div table-body>
                <div table-row *ngFor="let item of logs">
                    <div class="w-1/3">
                        {{ item.start | date: 'MMM d, y, h:mm a' }}
                    </div>
                    <div class="w-1/3">
                        {{ item.end | date: 'MMM d, y, h:mm a' }}
                    </div>
                    <div class="w-1/3">
                        <div>{{ item.systems.length }}</div>
                        <div>View</div>
                    </div>
                </div>
            </div>
        </div>
        <ng-template #empty_state>
            <div class="p-8 text-center" i18n="@@logTableEmpty">
                No logs found
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
export class UserHistoryComponent extends BaseClass {
    public logs: { start: number; end: number; systems: string[] }[] = [];

    public get item(): PlaceUser {
        return this._service.active_item as any;
    }

    constructor(private _service: ActiveItemService) {
        super();
    }
    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.item.subscribe((item) => {
                this.loadUserLogs();
            })
        );
    }

    public loadUserLogs(offset: number = 0) {}
}

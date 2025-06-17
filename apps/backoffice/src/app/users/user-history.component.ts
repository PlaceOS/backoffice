import { Component } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { ActiveItemService } from 'apps/backoffice/src/app/common/item.service';

@Component({
    selector: 'user-history',
    template: `
        @if (logs?.length) {
            <div role="table">
                <div table-head>
                    <div class="w-1/3">
                        {{ 'USERS.FIELD_SESSION_START' | translate }}
                    </div>
                    <div class="w-1/3">
                        {{ 'USERS.FIELD_SESSION_END' | translate }}
                    </div>
                    <div class="w-1/3">
                        {{ 'USERS.FIELD_SYSTEMS_ACCESSED' | translate }}
                    </div>
                </div>
                <div table-body>
                    @for (item of logs; track item.id) {
                        <div table-row>
                            <div class="w-1/3">
                                {{ item.start | date: 'MMM d, y, h:mm a' }}
                            </div>
                            <div class="w-1/3">
                                {{ item.end | date: 'MMM d, y, h:mm a' }}
                            </div>
                            <div class="w-1/3">
                                <div>{{ item.systems.length }}</div>
                                <div>{{ 'USERS.VIEW_LOGS' | translate }}</div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        } @else {
            <div class="p-8 text-center opacity-30">
                {{ 'USERS.LOGS_EMPTY' | translate }}
            </div>
        }
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
        `,
    ],
    standalone: false,
})
export class UserHistoryComponent extends AsyncHandler {
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
            }),
        );
    }

    public loadUserLogs(offset: number = 0) {}
}

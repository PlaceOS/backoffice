import { Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PlaceUser } from '@placeos/ts-client';

import { CommonModule } from '@angular/common';
import { AsyncHandler } from '../common/async-handler.class';
import { ActiveItemService } from '../common/item.service';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';

interface UserLogEntry {
    start: number;
    end: number;
    systems: string[];
}

@Component({
    selector: 'user-history',
    template: `
        <div class="p-4">
            <simple-table
                class="block min-w-5xl text-sm"
                [data]="logs()"
                [columns]="[
                    {
                        key: 'start',
                        name: 'USERS.FIELD_SESSION_START' | translate,
                        content: date_template,
                    },
                    {
                        key: 'end',
                        name: 'USERS.FIELD_SESSION_END' | translate,
                        content: date_template,
                    },
                    {
                        key: 'systems',
                        name: 'USERS.FIELD_SYSTEMS_ACCESSED' | translate,
                        content: sys_template,
                    },
                ]"
                [sortable]="true"
                [empty_message]="'USERS.LOGS_EMPTY' | translate"
            />
            <ng-template #date_template let-date="data">
                <div class="p-4">
                    {{ date | date: 'MMM d, y, h:mm a' }}
                </div>
            </ng-template>
            <ng-template #sys_template let-systems="data">
                <div class="p-4">
                    <div>{{ systems.length }}</div>
                    <div>{{ 'USERS.VIEW_LOGS' | translate }}</div>
                </div>
            </ng-template>
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [TranslatePipe, CommonModule, SimpleTableComponent],
})
export class UserHistoryComponent extends AsyncHandler {
    private _service = inject(ActiveItemService);

    public readonly logs = signal<UserLogEntry[]>([]);

    public readonly item = toSignal(this._service.item, {
        initialValue: null as PlaceUser | null,
    });

    constructor() {
        super();
        effect(() => {
            if (this.item()) this.loadUserLogs();
        });
    }

    public loadUserLogs(_offset = 0) {
        // TODO: Implement user log loading functionality
    }
}

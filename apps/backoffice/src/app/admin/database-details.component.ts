import { Component } from '@angular/core';

import { PlaceDatabase } from 'apps/backoffice/src/app/common/database.service';
import { notifyError } from 'apps/backoffice/src/app/common/notifications';

@Component({
    selector: 'app-database-details',
    template: `
        <div class="flex w-full p-4 space-x-4">
            <div
                class="rounded p-2 border border-base-200  space-y-2 w-1/3 flex-1 flex flex-col"
            >
                <p class="text-center p-2">
                    Re-index elasticsearch for the<br />current state of the
                    database
                </p>
                <button
                    btn
                    class="w-[calc(100%-0.5rem)]"
                    [disabled]="reindexing"
                    (click)="reindex()"
                >
                    <ng-container *ngIf="!reindexing; else spinner">
                        Re-index
                    </ng-container>
                </button>
            </div>
            <div
                class="rounded p-2 border border-base-200  space-y-2 w-1/3 flex-1 flex flex-col"
            >
                <p class="text-center p-2">
                    Backfill elasticsearch with the<br />current state of the
                    database
                </p>
                <button
                    btn
                    class="w-[calc(100%-0.5rem)]"
                    [disabled]="backfilling"
                    (click)="backfill()"
                >
                    <ng-container *ngIf="!backfilling; else spinner">
                        Backfill
                    </ng-container>
                </button>
            </div>
        </div>
        <ng-template #spinner>
            <div class="flex justify-center w-full my-1">
                <mat-spinner diameter="32"></mat-spinner>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                padding-top: 1em;
                display: flex;
                flex-wrap: wrap;
            }

            button {
                min-width: 10em;
                margin: 0.25em;
            }

            mat-card {
                margin: 0.5em;
                text-align: center;
            }
        `,
    ],
})
export class PlaceDatabaseDetailsComponent {
    /** Whether backend is reindexing the database */
    public reindexing: boolean;
    /** Whether backend is reindexing the database */
    public backfilling: boolean;

    constructor(private _engine_service: PlaceDatabase) {}

    public reindex() {
        this.reindexing = true;
        this._engine_service.reindex().then(
            () => (this.reindexing = false),
            (err) => {
                this.reindexing = false;
                notifyError(
                    `Error reindexing database. Error: ${JSON.stringify(
                        err.response || err.message || err
                    )}`
                );
            }
        );
    }

    public backfill() {
        this.backfilling = true;
        this._engine_service.backfill().then(
            () => (this.backfilling = false),
            (err) => {
                this.backfilling = false;
                notifyError(
                    `Error reindexing database. Error: ${JSON.stringify(
                        err.response || err.message || err
                    )}`
                );
            }
        );
    }
}

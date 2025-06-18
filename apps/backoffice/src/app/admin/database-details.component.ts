import { Component, inject } from '@angular/core';

import { PlaceDatabase } from 'apps/backoffice/src/app/common/database.service';
import { notifyError } from 'apps/backoffice/src/app/common/notifications';

@Component({
    selector: 'app-database-details',
    template: `
        <div class="my-4 flex items-center justify-between space-x-2 px-2">
            <div class="text-2xl">PlaceOS Database</div>
        </div>
        <div class="flex w-full space-x-4 p-4">
            <div
                class="flex w-1/3 flex-1 flex-col space-y-2 rounded border border-base-200 p-2"
            >
                <p class="mx-auto max-w-64 p-2 text-center">
                    {{ 'ADMIN.DATABASE_REINDEX_MSG' | translate }}
                </p>
                <button
                    btn
                    class="w-[calc(100%-0.5rem)]"
                    [disabled]="reindexing"
                    (click)="reindex()"
                >
                    @if (!reindexing) {
                        {{ 'ADMIN.DATABASE_REINDEX' | translate }}
                    } @else {
                        <div class="my-1 flex w-full justify-center">
                            <mat-spinner diameter="32"></mat-spinner>
                        </div>
                    }
                </button>
            </div>
            <div
                class="flex w-1/3 flex-1 flex-col space-y-2 rounded border border-base-200 p-2"
            >
                <p class="mx-auto max-w-64 p-2 text-center">
                    {{ 'ADMIN.DATABASE_BACKFILL_MSG' | translate }}
                </p>
                <button
                    btn
                    class="w-[calc(100%-0.5rem)]"
                    [disabled]="backfilling"
                    (click)="backfill()"
                >
                    @if (!backfilling) {
                        {{ 'ADMIN.DATABASE_BACKFILL' | translate }}
                    } @else {
                        <div class="my-1 flex w-full justify-center">
                            <mat-spinner diameter="32"></mat-spinner>
                        </div>
                    }
                </button>
            </div>
        </div>
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
    standalone: false,
})
export class PlaceDatabaseDetailsComponent {
    private _engine_service = inject(PlaceDatabase);

    /** Whether backend is reindexing the database */
    public reindexing: boolean;
    /** Whether backend is reindexing the database */
    public backfilling: boolean;

    public reindex() {
        this.reindexing = true;
        this._engine_service.reindex().then(
            () => (this.reindexing = false),
            (err) => {
                this.reindexing = false;
                notifyError(
                    `Error reindexing database. Error: ${JSON.stringify(
                        err.response || err.message || err,
                    )}`,
                );
            },
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
                        err.response || err.message || err,
                    )}`,
                );
            },
        );
    }
}

import { Component } from '@angular/core';

import { PlaceDatabase } from 'apps/backoffice/src/app/common/database.service';
import { notifyError } from 'apps/backoffice/src/app/common/notifications';

@Component({
    selector: 'app-database-details',
    template: `
        <mat-card>
            <mat-card-content>
                Re-index elasticsearch for the
                <br />current state of the database
            </mat-card-content>
            <mat-card-actions>
                <button mat-button [disabled]="reindexing" (click)="reindex()">
                    <ng-container *ngIf="!reindexing; else spinner"
                        >Re-index</ng-container
                    >
                </button>
            </mat-card-actions>
        </mat-card>
        <mat-card>
            <mat-card-content>
                Backfill elasticsearch with the<br />
                current state of the database
            </mat-card-content>
            <mat-card-actions>
                <button
                    mat-button
                    [disabled]="backfilling"
                    (click)="backfill()"
                >
                    <ng-container *ngIf="!backfilling; else spinner"
                        >Backfill</ng-container
                    >
                </button>
            </mat-card-actions>
        </mat-card>
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

import { Component, signal } from '@angular/core';
import { apiEndpoint, post } from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';

import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { notifyError } from '../common/notifications';
import { TranslatePipe } from '../ui/translate.pipe';

function reindex(backfill = true) {
    const url = `${apiEndpoint()}/reindex${backfill ? '?backfill=true' : ''}`;
    return lastValueFrom(post(url, null));
}

function backfill() {
    const url = `${apiEndpoint()}/backfill`;
    return lastValueFrom(post(url, null));
}

@Component({
    selector: 'app-database-details',
    template: `
        <div class="mb-4 flex items-center justify-between space-x-2 px-4">
            <div class="text-2xl">PlaceOS Database</div>
        </div>
        <div class="flex w-full space-x-4 p-4">
            <div
                class="flex w-1/3 flex-1 flex-col space-y-2 rounded-sm border border-base-200 p-2"
            >
                <p class="mx-auto max-w-64 p-2 text-center">
                    {{ 'ADMIN.DATABASE_REINDEX_MSG' | translate }}
                </p>
                <button
                    btn
                    matRipple
                    class="w-[calc(100%-0.5rem)]"
                    [disabled]="reindexing()"
                    (click)="reindex()"
                >
                    @if (!reindexing()) {
                        {{ 'ADMIN.DATABASE_REINDEX' | translate }}
                    } @else {
                        <div class="my-1 flex w-full justify-center">
                            <mat-spinner diameter="32"></mat-spinner>
                        </div>
                    }
                </button>
            </div>
            <div
                class="flex w-1/3 flex-1 flex-col space-y-2 rounded-sm border border-base-200 p-2"
            >
                <p class="mx-auto max-w-64 p-2 text-center">
                    {{ 'ADMIN.DATABASE_BACKFILL_MSG' | translate }}
                </p>
                <button
                    btn
                    matRipple
                    class="w-[calc(100%-0.5rem)]"
                    [disabled]="backfilling()"
                    (click)="backfill()"
                >
                    @if (!backfilling()) {
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
    imports: [MatProgressSpinnerModule, TranslatePipe, MatRippleModule],
})
export class PlaceDatabaseDetailsComponent {
    /** Whether backend is reindexing the database */
    public readonly reindexing = signal(false);
    /** Whether backend is reindexing the database */
    public readonly backfilling = signal(false);

    public async reindex() {
        this.reindexing.set(true);
        await reindex().catch((err) => {
            notifyError(
                `Error reindexing database. Error: ${JSON.stringify(
                    err.response || err.message || err,
                )}`,
            );
        });
        this.reindexing.set(false);
    }

    public async backfill() {
        this.backfilling.set(true);
        await backfill().catch((err) => {
            notifyError(
                `Error backfilling database. Error: ${JSON.stringify(
                    err.response || err.message || err,
                )}`,
            );
        });
        this.backfilling.set(false);
    }
}

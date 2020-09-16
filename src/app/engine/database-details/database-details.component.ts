import { Component } from '@angular/core';

import { PlaceDatabase } from 'src/app/services/data/engine.service';
import { notifyError } from 'src/app/common/notifications';

@Component({
    selector: 'app-database-details',
    templateUrl: './database-details.component.html',
    styleUrls: ['./database-details.component.scss']
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
            err => {
                this.reindexing = false;
                notifyError(
                    `Error reindexing database. Error: ${JSON.stringify(err.response || err.message || err)}`
                );
            }
        );
    }

    public backfill() {
        this.backfilling = true;
        this._engine_service.backfill().then(
            () => (this.backfilling = false),
            err => {
                this.backfilling = false;
                notifyError(
                    `Error reindexing database. Error: ${JSON.stringify(err.response || err.message || err)}`
                );
            }
        );
    }
}

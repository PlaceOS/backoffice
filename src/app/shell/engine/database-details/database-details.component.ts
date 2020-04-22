import { Component } from '@angular/core';

import { EngineService } from 'src/app/services/data/engine.service';
import { ApplicationService } from 'src/app/services/app.service';

@Component({
    selector: 'app-database-details',
    templateUrl: './database-details.component.html',
    styleUrls: ['./database-details.component.scss']
})
export class EngineDatabaseDetailsComponent {
    /** Whether backend is reindexing the database */
    public reindexing: boolean;
    /** Whether backend is reindexing the database */
    public backfilling: boolean;

    constructor(private _service: ApplicationService, private _engine_service: EngineService) {}

    public reindex() {
        this.reindexing = true;
        this._engine_service.reindex().then(
            () => (this.reindexing = false),
            err => {
                this.reindexing = false;
                this._service.notifyError(
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
                this._service.notifyError(
                    `Error reindexing database. Error: ${JSON.stringify(err.response || err.message || err)}`
                );
            }
        );
    }
}

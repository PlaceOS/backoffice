import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import { IEngineLogEntry } from 'src/app/services/data/logs.service';

export interface SystemLogModalData {
    /** ID of the system to show the logs for */
    sys_id: string;
}

@Component({
    selector: 'system-log-modal',
    templateUrl: './system-log-modal.component.html',
    styleUrls: ['./system-log-modal.component.scss']
})
export class SystemLogModalComponent extends BaseDirective implements OnInit {
    /** ID of the system to get logs for */
    public id: string;
    /** List of the available log entries for the set system */
    public logs: IEngineLogEntry[];
    /** Whether the system's logs are loading */
    public loading: boolean;
    /**  */
    public name: string;
    /** Whether the modal is closing */
    public closing: boolean;

    constructor(
        private _dialog: MatDialogRef<SystemLogModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: SystemLogModalData,
        private _service: ApplicationService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.id = this._data.sys_id;
        if (this.id) {
            this.loading = true;
            this._service.SystemLogs.query({ limit: 500, id: this.id }).then(
                (list: IEngineLogEntry[]) => {
                    this.logs = list.sort((a, b) => b.created - a.created);
                },
                () => {
                    this._dialog.close();
                    this._service.notifyError('Error loading logs for system');
                }
            );
        } else {
            this._dialog.close();
        }
    }
}

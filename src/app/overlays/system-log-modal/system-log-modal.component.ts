import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import { IPlaceLogEntry } from 'src/app/services/data/logs.service';

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
    public logs: IPlaceLogEntry[];
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

        } else {
            this._dialog.close();
        }
    }
}

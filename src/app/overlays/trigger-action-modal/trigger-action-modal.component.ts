
import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';

export interface TriggerActionModalData {

}

@Component({
    selector: 'trigger-action-modal',
    templateUrl: './trigger-action-modal.template.html',
    styleUrls: ['./trigger-action-modal.styles.scss']
})
export class TriggerActionModalComponent extends BaseDirective implements OnInit {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();

    public model: any = {};

    public item: any;
    public loading: boolean;
    public has_errors: any;

    constructor(
        private _dialog: MatDialogRef<TriggerActionModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: TriggerActionModalData,
        private _service: ApplicationService
    ) {
        super();
    }

    public ngOnInit(): void {

    }

    public save(): void {

    }
}

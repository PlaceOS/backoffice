import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';

export interface SelectItemModalData {
    service_name: string;
}

@Component({
    selector: 'select-item-modal',
    templateUrl: './select-item-modal.component.html',
    styleUrls: ['./select-item-modal.component.scss']
})
export class SelectItemModalComponent extends BaseDirective implements OnInit {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether the item is being editing */
    public edit: boolean;
    /** Item to edit */
    public item: any;
    /** Whether the item request is being processed */
    public loading: boolean;

    constructor(
        private _dialog: MatDialogRef<SelectItemModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: SelectItemModalData,
        private _service: ApplicationService
    ) {
        super();
    }

    public get name(): string {
        return this.service.name || this.service._name;
    }

    public get service() {
        return this._service[this._data.service_name];
    }

    public ngOnInit(): void {
        if (!this.service) {
            this._dialog.close();
        }
    }

    public submit() {
        this.loading = true;
        this.event.emit({ reason: 'action', metadata: this.item });
    }
}

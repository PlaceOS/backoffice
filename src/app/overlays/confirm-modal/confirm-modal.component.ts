import { Component, OnInit, Output, EventEmitter, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { ApplicationIcon } from "../../shared/utilities/settings.interfaces";
import { DialogEvent } from "../../shared/utilities/types.utilities";
import { BaseDirective } from 'src/app/shared/globals/base.directive';

export interface ConfirmModalData {
    /** Title of the modal */
    title: string;
    /** Contents of the modal */
    content: string;
    /** Text displaed on the confirmation button */
    action?: string;
    /** Icon to display on the modal */
    icon: ApplicationIcon;
}

@Component({
    selector: "confirm-modal",
    templateUrl: "./confirm-modal.component.html",
    styleUrls: ["./confirm-modal.component.scss"]
})
export class ConfirmModalComponent extends BaseDirective implements OnInit {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Title of the confirm modal */
    public title: string;
    /** Body of the confirm modal */
    public content: string;
    /** Display text on the confirm button */
    public action: string;
    /** Display icon properties */
    public icon: ApplicationIcon;

    constructor(
        private _dialog: MatDialogRef<ConfirmModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: ConfirmModalData
    ) {
        super();
    }

    public ngOnInit(): void {
        const data = this._data;
        if (data) {
            this.title = data.title || "Confirm";
            this.content = data.content || "Confirm";
            this.action = data.action || "Ok";
            this.icon = data.icon;
        }
    }

    /**
     * User confirmation of the content of the modal
     */
    public accept() {
        this.event.emit({ reason: "done" });
    }
}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ViewResponseModalData {
    content: any;
}

@Component({
    selector: 'app-view-response-modal',
    templateUrl: './view-response-modal.component.html',
    styleUrls: ['./view-response-modal.component.scss']
})
export class ViewResponseModalComponent {

    public get content_string(): string {
        return typeof this._data.content === 'object'
            ? JSON.stringify(this._data.content, undefined, 4)
            : this._data.content;
    }

    constructor(@Inject(MAT_DIALOG_DATA) private _data: ViewResponseModalData) {}
}

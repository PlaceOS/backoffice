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

    public content_string: string;

    constructor(@Inject(MAT_DIALOG_DATA) private _data: ViewResponseModalData) {
        this.updateContentString();
    }

    public updateContentString() {
        if (typeof this._data.content === 'object') {
            this.content_string = JSON.stringify(this._data.content, undefined, 4)
        } else {
            try {
                this.content_string = JSON.stringify(JSON.parse(this._data.content), undefined, 4);
            } catch {
                this.content_string = this._data.content;
            }
        }
    }
}

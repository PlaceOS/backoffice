import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ViewResponseModalData {
    title?: string;
    content: any;
}

@Component({
    selector: 'app-view-response-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="title || ('COMMON.VIEW_RESPONSE' | translate)"
            [hide_confirm]="true"
        >
            <settings-form-field
                [ngModel]="content_string"
                [readonly]="true"
            ></settings-form-field>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    standalone: false,
})
export class ViewResponseModalComponent {
    public readonly title = this._data.title || '';
    public content_string: string;

    constructor(@Inject(MAT_DIALOG_DATA) private _data: ViewResponseModalData) {
        this.updateContentString();
    }

    public updateContentString() {
        if (typeof this._data.content === 'object') {
            this.content_string = JSON.stringify(
                this._data.content,
                undefined,
                4,
            );
        } else {
            try {
                this.content_string = JSON.stringify(
                    JSON.parse(this._data.content),
                    undefined,
                    4,
                );
            } catch {
                this.content_string = this._data.content;
            }
        }
    }
}

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SettingsFieldComponent } from '../ui/custom-fields/settings-field.component';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { TranslatePipe } from '../ui/translate.pipe';

export interface ViewResponseModalData {
    title?: string;
    content: unknown;
}

@Component({
    selector: 'app-view-response-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="title || ('COMMON.VIEW_RESPONSE' | translate)"
            [hide_confirm]="true"
        >
            <settings-form-field [ngModel]="content_string" [readonly]="true" />
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        SettingsFieldComponent,
        FormsModule,
        TranslatePipe,
    ],
})
export class ViewResponseModalComponent {
    private _data = inject<ViewResponseModalData>(MAT_DIALOG_DATA);

    public readonly title = this._data.title || '';
    public content_string: string;

    constructor() {
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
                    JSON.parse(this._data.content as string),
                    undefined,
                    4,
                );
            } catch {
                this.content_string = this._data.content as string;
            }
        }
    }
}

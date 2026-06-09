import { Component, inject, signal } from '@angular/core';
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
            <div class="flex min-h-full flex-1 flex-col">
                <settings-form-field
                    class="min-h-0 flex-1"
                    [ngModel]="content_string()"
                    [readonly]="true"
                    [fill]="true"
                />
            </div>
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
    public readonly content_string = signal<string | null>(null);

    constructor() {
        this.updateContentString();
    }

    public updateContentString() {
        if (typeof this._data.content === 'object') {
            this.content_string.set(
                JSON.stringify(this._data.content, undefined, 4),
            );
        } else {
            try {
                this.content_string.set(
                    JSON.stringify(
                        JSON.parse(this._data.content as string),
                        undefined,
                        4,
                    ),
                );
            } catch {
                this.content_string.set(this._data.content as string);
            }
        }
    }
}

import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject, OnInit, signal } from '@angular/core';
import { form, FormField, required, submit } from '@angular/forms/signals';
import { addEdge, PlaceEdge, updateEdge } from '@placeos/ts-client';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { FormFieldComponent } from '../ui/controls/form-field.component';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { TranslatePipe } from '../ui/translate.pipe';

export interface EdgeModalData {
    edge: PlaceEdge;
}

@Component({
    selector: 'edge-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (edge ? 'ADMIN.EDGE_EDIT' : 'ADMIN.EDGE_NEW') | translate
            "
            [loading]="loading()"
            (save)="save()"
        >
            <form>
                <div class="flex flex-1 flex-col">
                    <label for="edge-name">
                        {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                    </label>
                    <app-form-field>
                        <input
                            id="edge-name"
                            [formField]="form.name"
                            [placeholder]="
                                'ADMIN.EDGE_NAME_PLACEHOLDER' | translate
                            "
                        />
                        <div error>
                            {{ 'ADMIN.EDGE_NAME_REQUIRED' | translate }}
                        </div>
                    </app-form-field>
                </div>
                <div class="flex flex-1 flex-col">
                    <label for="edge-description">{{
                        'COMMON.FIELD_DESCRIPTION' | translate
                    }}</label>
                    <app-form-field>
                        <textarea
                            id="edge-description"
                            [formField]="form.description"
                            [placeholder]="
                                'ADMIN.EDGE_DESCRIPTION_PLACEHOLDER' | translate
                            "
                        ></textarea>
                    </app-form-field>
                </div>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [
        `
            main {
                width: 32rem;
                max-width: calc(100vw - 5rem);
                max-height: 65vh;
            }
        `,
    ],
    imports: [
        FormFieldComponent,
        FullscreenModalShellComponent,
        TranslatePipe,
        FormField,
    ],
})
export class EdgeModalComponent implements OnInit {
    private _data = inject<EdgeModalData>(DIALOG_DATA);
    private _dialog_ref =
        inject<DialogRef<unknown, EdgeModalComponent>>(DialogRef);

    public readonly edge = this._data.edge;

    public readonly formModel = signal({
        name: '',
        description: '',
    });
    public readonly form = form(this.formModel, (path) => {
        required(path.name);
    });

    public readonly loading = signal('');

    public ngOnInit() {
        this.formModel.set({
            name: this.edge?.name || '',
            description: this.edge?.description || '',
        });
    }

    public async save() {
        await submit(this.form, async () => undefined);
        if (this.form().invalid()) return;
        this.loading.set('Saving edge node...');
        const edge = { ...this.edge, ...this.formModel() };
        const method = edge.id ? updateEdge(edge.id, edge) : addEdge(edge);
        const new_edge = await method.catch(() => null);
        this.loading.set('');
        if (!new_edge) return notifyError(i18n('ADMIN.EDGE_ERROR'));
        if (edge.id) {
            notifySuccess(i18n('ADMIN.EDGE_NEW_SUCCESS'));
        } else {
            notifySuccess(i18n('ADMIN.EDGE_EDIT_SUCCESS'));
        }
        this._dialog_ref.close(new_edge);
    }
}

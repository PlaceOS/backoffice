import {
    Component,
    EventEmitter,
    inject,
    OnInit,
    Output,
    signal,
} from '@angular/core';
import { form, FormField, submit } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { addPartner, PlacePartner, updatePartner } from '@placeos/ts-client';
import { AsyncHandler } from '../common/async-handler.class';
import { readError } from '../common/errors';
import { HotkeysService } from '../common/hotkeys.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent } from '../common/types';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { TranslatePipe } from '../ui/translate.pipe';
import {
    applyPartnerFormSchema,
    generatePartnerFormModel,
} from './organisations.utilities';

@Component({
    selector: 'partner-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading()"
            (save)="submit()"
        >
            @if (form) {
                <form partner class="flex flex-col">
                    <div class="field">
                        <label
                            for="partner-name"
                            [class.error]="
                                form.name().invalid() && form.name().touched()
                            "
                        >
                            {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                id="partner-name"
                                [placeholder]="'COMMON.FIELD_NAME' | translate"
                                [formField]="form.name"
                            />
                            <mat-error>{{
                                'ORGANISATIONS.PARTNER_NAME_REQUIRED'
                                    | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="field">
                        <label for="description">
                            {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                id="description"
                                [placeholder]="
                                    'COMMON.FIELD_DESCRIPTION' | translate
                                "
                                [formField]="form.description"
                            ></textarea>
                        </mat-form-field>
                    </div>
                </form>
            }
        </fullscreen-modal-shell>
    `,
    imports: [
        FormField,
        FullscreenModalShellComponent,
        MatFormFieldModule,
        MatInputModule,
        TranslatePipe,
    ],
})
export class PartnerFormComponent extends AsyncHandler implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<PartnerFormComponent>>(MatDialogRef);
    private _data = inject<{ item: PlacePartner }>(MAT_DIALOG_DATA);
    private _hotkey = inject(HotkeysService);

    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly formModel = signal(
        generatePartnerFormModel(this._data.item),
    );
    public readonly form = form(this.formModel, applyPartnerFormSchema);
    public readonly loading = signal<string | null>(null);
    public heading = i18n(
        `ORGANISATIONS.PARTNER_${this._data.item.id ? 'EDIT' : 'NEW'}`,
    );

    public ngOnInit(): void {
        this.subscription(
            'save_item_key',
            this._hotkey.listen(['KeyS'], () => this.submit()),
        );
    }

    public async submit(): Promise<void> {
        await submit(this.form, async () => {
            const item = this._data.item;
            this.loading.set(i18n('ORGANISATIONS.PARTNER_SAVING'));
            this._dialog_ref.disableClose = true;
            const result = await (
                item.id
                    ? updatePartner(item.id, this.formModel())
                    : addPartner(this.formModel())
            ).catch(async (err) => {
                this.loading.set(null);
                this._dialog_ref.disableClose = false;
                notifyError(
                    i18n('ORGANISATIONS.PARTNER_SAVE_ERROR', {
                        error: await readError(err),
                    }),
                );
                return null;
            });
            if (!result) return;
            this._dialog_ref.disableClose = false;
            this.event.emit({ reason: 'done', metadata: { item: result } });
            notifySuccess(i18n('ORGANISATIONS.PARTNER_SAVE_SUCCESS'));
            this._dialog_ref.close();
        });
    }
}

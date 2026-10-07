import {
    Component,
    computed,
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
import { MatSelectModule } from '@angular/material/select';
import {
    addOrganisation,
    PlaceOrganisation,
    PlacePartner,
    updateOrganisation,
} from '@placeos/ts-client';
import { AsyncHandler } from '../common/async-handler.class';
import { readError } from '../common/errors';
import { HotkeysService } from '../common/hotkeys.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent } from '../common/types';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { SettingsToggleComponent } from '../ui/settings-toggle.component';
import { TranslatePipe } from '../ui/translate.pipe';
import {
    applyOrganisationFormSchema,
    generateOrganisationFormModel,
} from './organisations.utilities';

@Component({
    selector: 'organisation-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading()"
            (save)="submit()"
        >
            @if (form) {
                <form organisation class="flex flex-col">
                    <div class="field">
                        <label
                            for="organisation-name"
                            [class.error]="
                                form.name().invalid() && form.name().touched()
                            "
                        >
                            {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                id="organisation-name"
                                [placeholder]="'COMMON.FIELD_NAME' | translate"
                                [formField]="form.name"
                            />
                            <mat-error>{{
                                'ORGANISATIONS.NAME_REQUIRED' | translate
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
                    <div class="field">
                        <label for="partner" id="partner-label">
                            {{ 'ORGANISATIONS.FIELD_PARTNER' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                id="partner"
                                aria-labelledby="partner-label"
                                [formField]="form.partner_id"
                            >
                                <mat-option value="">
                                    {{
                                        'ORGANISATIONS.SELF_MANAGED' | translate
                                    }}
                                </mat-option>
                                @for (partner of partners(); track partner.id) {
                                    <mat-option [value]="partner.id">
                                        {{ partner.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    @if (has_partner()) {
                        <div class="field">
                            <label for="payer" id="payer-label">
                                {{ 'ORGANISATIONS.FIELD_PAYER' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    id="payer"
                                    aria-labelledby="payer-label"
                                    [formField]="form.payer"
                                >
                                    <mat-option value="partner">
                                        {{
                                            'ORGANISATIONS.PAYER_PARTNER'
                                                | translate
                                        }}
                                    </mat-option>
                                    <mat-option value="organisation">
                                        {{
                                            'ORGANISATIONS.PAYER_ORGANISATION'
                                                | translate
                                        }}
                                    </mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="field">
                            <settings-toggle
                                class="w-full"
                                [label]="
                                    'ORGANISATIONS.FIELD_PARTNER_STAFF'
                                        | translate
                                "
                                [formField]="form.partner_staff"
                            />
                            <p class="px-1 text-xs opacity-60">
                                {{
                                    'ORGANISATIONS.PARTNER_STAFF_HINT'
                                        | translate
                                }}
                            </p>
                        </div>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `,
    imports: [
        FormField,
        FullscreenModalShellComponent,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        SettingsToggleComponent,
        TranslatePipe,
    ],
})
export class OrganisationFormComponent extends AsyncHandler implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<OrganisationFormComponent>>(MatDialogRef);
    private _data = inject<{
        item: PlaceOrganisation;
        partners: PlacePartner[];
    }>(MAT_DIALOG_DATA);
    private _hotkey = inject(HotkeysService);

    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly formModel = signal(
        generateOrganisationFormModel(this._data.item),
    );
    public readonly form = form(this.formModel, applyOrganisationFormSchema);
    public readonly loading = signal<string | null>(null);
    public readonly partners = signal(this._data.partners || []);
    public readonly has_partner = computed(() => !!this.formModel().partner_id);
    public heading = i18n(
        `ORGANISATIONS.${this._data.item.id ? 'EDIT' : 'NEW'}`,
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
            const model = this.formModel();
            this.loading.set(i18n('ORGANISATIONS.SAVING'));
            this._dialog_ref.disableClose = true;
            const body = {
                name: model.name,
                description: model.description,
                partner_id: model.partner_id || undefined,
            } as Partial<PlaceOrganisation>;
            const options = model.partner_id
                ? { payer: model.payer, partner_staff: model.partner_staff }
                : { payer: 'organisation' as const, partner_staff: false };
            const result = await (
                item.id
                    ? updateOrganisation(item.id, body, options)
                    : addOrganisation(body, options)
            ).catch(async (err) => {
                this.loading.set(null);
                this._dialog_ref.disableClose = false;
                notifyError(
                    i18n('ORGANISATIONS.SAVE_ERROR', {
                        error: await readError(err),
                    }),
                );
                return null;
            });
            if (!result) return;
            this._dialog_ref.disableClose = false;
            this.event.emit({ reason: 'done', metadata: { item: result } });
            notifySuccess(i18n('ORGANISATIONS.SAVE_SUCCESS'));
            this._dialog_ref.close();
        });
    }
}

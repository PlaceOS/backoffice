import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    UntypedFormGroup,
} from '@angular/forms';
import {
    PlaceApplication,
    PlaceResource,
    addApplication,
    cleanObject,
    updateApplication,
} from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';
import { AsyncHandler } from '../common/async-handler.class';

import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Md5 } from 'ts-md5';
import { getInvalidFields } from '../common/general';
import { HotkeysService } from '../common/hotkeys.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent, Identity } from '../common/types';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { SettingsToggleComponent } from '../ui/settings-toggle.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { generateApplicationFormFields } from './applications.utilities';

@Component({
    selector: 'application-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading"
            (save)="submit()"
        >
            @if (form) {
                <form application class="flex flex-col" [formGroup]="form">
                    <div class="fieldset">
                        @if (form.controls.name) {
                            <div class="field">
                                <label
                                    for="application-name"
                                    [class.error]="
                                        form.controls.name.invalid &&
                                        form.controls.name.touched
                                    "
                                >
                                    {{ 'COMMON.FIELD_NAME' | translate
                                    }}<span>*</span>:
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="application-name"
                                        placeholder="Application Name"
                                        formControlName="name"
                                        required
                                    />
                                    <mat-error>{{
                                        'DOMAINS.APP_NAME_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                        @if (form.controls.scopes) {
                            <div class="field">
                                <label for="scopes"
                                    >{{
                                        'DOMAINS.APP_SCOPES' | translate
                                    }}:</label
                                >
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="scopes"
                                        [placeholder]="
                                            'DOMAINS.APP_SCOPES' | translate
                                        "
                                        formControlName="scopes"
                                    />
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    @if (form.controls.redirect_uri) {
                        <div class="field">
                            <label for="redirect-uri"
                                >{{ 'DOMAINS.APP_REDIRECT_URL' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="redirect-uri"
                                    placeholder="Redirect URI e.g. http://localhost:4200/oauth-resp.html"
                                    formControlName="redirect_uri"
                                />
                                <mat-error>{{
                                    'DOMAINS.APP_REDIRECT_URL_REQUIRED'
                                        | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    <div class="fieldset mb-4">
                        <settings-toggle
                            class="flex-1"
                            [name]="'DOMAINS.APP_SKIP' | translate"
                            formControlName="skip_authorization"
                        ></settings-toggle>
                        <settings-toggle
                            class="flex-1"
                            [name]="'DOMAINS.APP_PRESERVE_ID' | translate"
                            formControlName="preserve_client_id"
                        ></settings-toggle>
                    </div>
                    @if (form.controls.redirect_uri) {
                        <div class="field">
                            <label for="client-id"
                                >{{ 'DOMAINS.APP_CLIENT_ID' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="client-id"
                                    [placeholder]="
                                        'DOMAINS.APP_CLIENT_PLACEHOLDER'
                                            | translate
                                    "
                                    [disabled]="true"
                                    [ngModel]="client_id | async"
                                    [ngModelOptions]="{ standalone: true }"
                                />
                            </mat-form-field>
                        </div>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `,
    styles: [
        `
            settings-form-field {
                margin-bottom: 1.5em;
            }
        `,
    ],
    imports: [
        MatFormFieldModule,
        FormsModule,
        CommonModule,
        TranslatePipe,
        SettingsToggleComponent,
        ReactiveFormsModule,
        MatInputModule,
        FullscreenModalShellComponent,
    ],
})
export class ApplicationFormComponent extends AsyncHandler implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<ApplicationFormComponent>>(MatDialogRef);
    private _data = inject<{ item: PlaceApplication; readonly?: string }>(
        MAT_DIALOG_DATA,
    );
    private readonly _name = 'DOMAINS.APPLICATION';
    private _hotkey = inject(HotkeysService);

    @Output() public event = new EventEmitter<DialogEvent>();

    public form: UntypedFormGroup;
    public loading: string;
    public heading: string;
    public default_redirect_uri: string;
    public readonly client_id = new BehaviorSubject('');

    public ngOnInit(): void {
        const item = this._data.item;
        const edit = !!item.id;
        this.heading = i18n(`DOMAINS.APPLICATION_${edit ? 'EDIT' : 'NEW'}`);
        this.form = generateApplicationFormFields(item);
        const { client_id, redirect_uri } = this.form.value;
        this.default_redirect_uri = redirect_uri || '';
        this.client_id.next(
            client_id || redirect_uri ? Md5.hashStr(redirect_uri || '') : '',
        );
        this.subscription(
            'form.redirect_uri',
            this.form
                .get('redirect_uri')
                .valueChanges.subscribe((value: string) => {
                    if (this.form.value.preserve_client_id) return;
                    this.client_id.next(value ? Md5.hashStr(value) : '');
                    this.form.patchValue(
                        { redirect_uri: value?.trim() },
                        { emitEvent: false },
                    );
                }),
        );
        this.subscription(
            'form.preserve_client_id',
            this.form
                .get('preserve_client_id')
                .valueChanges.subscribe((preserve: boolean) => {
                    const value = this.form.value.redirect_uri;
                    const uri = preserve ? this.default_redirect_uri : value;
                    this.client_id.next(uri ? Md5.hashStr(uri) : '');
                }),
        );
        this.subscription(
            'save_item_key',
            this._hotkey.listen(['KeyS'], () => this.submit()),
        );
    }

    public submit(): void {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return notifyError(
                i18n('COMMON.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
            );
        }
        const item = this._data.item as unknown as PlaceResource;
        this.loading = i18n(`${this._name}.SAVING`);
        this._dialog_ref.disableClose = true;
        const item_json = item.toJSON ? item.toJSON() : item;
        const form_item = (
            item.id
                ? cleanObject({ ...item_json, ...this.form.value }, [undefined])
                : { ...item_json, ...this.form.value }
        ) as Identity;
        const save_item = { ...form_item };
        delete (save_item as any).client_id;
        (save_item.id
            ? updateApplication(
                  save_item.id as string,
                  save_item as unknown as PlaceApplication,
              )
            : addApplication(save_item as unknown as PlaceApplication)
        ).subscribe(
            (_item) => {
                this._dialog_ref.disableClose = false;
                this.event.emit({ reason: 'done', metadata: { item: _item } });
                notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
                this._dialog_ref.close();
            },
            async (err) => {
                this.loading = null;
                this._dialog_ref.disableClose = false;
                notifyError(
                    i18n(`${this._name}.SAVE_ERROR`, {
                        error: JSON.stringify(
                            (await err.text?.()) || err.message || err,
                        ),
                    }),
                );
            },
        );
    }
}

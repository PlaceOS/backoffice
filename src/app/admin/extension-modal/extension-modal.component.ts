import {
    Component,
    EventEmitter,
    inject,
    OnInit,
    Output,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField, required, submit } from '@angular/forms/signals';
import { AsyncHandler } from '../../common/async-handler.class';
import { HotkeysService } from '../../common/hotkeys.service';
import {
    DialogEvent,
    EXTENSION_SECTIONS,
    ExtensionConditions,
} from '../../common/types';

import { DIALOG_DATA } from '@angular/cdk/dialog';
import { FormFieldComponent } from '../../ui/controls/form-field.component';
import { OptionComponent } from '../../ui/controls/option.component';
import { SelectComponent } from '../../ui/controls/select.component';
import { FullscreenModalShellComponent } from '../../ui/fullscreen-modal-shell.component';
import { IconComponent } from '../../ui/icon.component';
import { TranslatePipe } from '../../ui/translate.pipe';
import { BackofficeExtension } from '../extensions.component';

@Component({
    selector: 'extension-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (item ? 'ADMIN.EXTENSIONS_EDIT' : 'ADMIN.EXTENSIONS_NEW')
                    | translate
            "
            [loading]="loading()"
            (save)="submit()"
        >
            <form>
                <div class="fieldset">
                    <div class="field">
                        <label for="extension-type" id="extension-type-label">
                            {{ 'ADMIN.EXTENSIONS_FIELD_TYPE' | translate }}
                            <span>*</span>
                        </label>
                        <app-form-field>
                            <app-select
                                id="extension-type"
                                aria-labelledby="extension-type-label"
                                [formField]="form.type"
                            >
                                @for (type of available_types; track type) {
                                    <app-option [value]="type">
                                        <span class="capitalize">{{
                                            type
                                        }}</span>
                                    </app-option>
                                }
                            </app-select>
                        </app-form-field>
                    </div>
                    <div class="field">
                        <label for="extension-name">
                            {{ 'COMMON.FIELD_NAME' | translate }}
                            <span>*</span>
                        </label>
                        <app-form-field>
                            <input
                                [placeholder]="
                                    'ADMIN.EXTENSIONS_FIELD_NAME' | translate
                                "
                                id="extension-name"
                                [formField]="form.name"
                            />
                            <div error>
                                {{
                                    'ADMIN.EXTENSIONS_NAME_REQUIRED' | translate
                                }}
                            </div>
                        </app-form-field>
                    </div>
                </div>
                <div class="field">
                    <label for="extension-url">
                        {{ 'ADMIN.EXTENSIONS_FIELD_URL' | translate }}
                        <span>*</span>
                    </label>
                    <app-form-field>
                        <input
                            [placeholder]="
                                'ADMIN.EXTENSIONS_FIELD_URL' | translate
                            "
                            id="extension-url"
                            [formField]="form.url"
                        />
                        <div error>
                            {{ 'ADMIN.EXTENSIONS_URL_REQUIRED' | translate }}
                        </div>
                    </app-form-field>
                </div>
                <div class="w-full">
                    @if (formModel().conditions.length) {
                        <span class="label">
                            {{
                                'ADMIN.EXTENSIONS_FIELD_CONDITIONS' | translate
                            }}
                        </span>
                    }
                    @for (
                        condition of formModel().conditions;
                        track condition
                    ) {
                        <div class="fieldset">
                            <div class="field">
                                <app-form-field>
                                    <input
                                        name="condition-field"
                                        [(ngModel)]="condition[0]"
                                        [ngModelOptions]="{ standalone: true }"
                                        [placeholder]="
                                            'ADMIN.EXTENSIONS_CONDITION_FIELD'
                                                | translate
                                        "
                                    />
                                </app-form-field>
                            </div>
                            <div class="field">
                                <app-form-field>
                                    <app-select
                                        [(ngModel)]="condition[1]"
                                        [ngModelOptions]="{ standalone: true }"
                                        [placeholder]="
                                            'ADMIN.EXTENSIONS_CONDITION_OP'
                                                | translate
                                        "
                                    >
                                        @for (
                                            type of condition_ops;
                                            track type
                                        ) {
                                            <app-option [value]="type">
                                                <span class="capitalize">{{
                                                    type
                                                }}</span>
                                            </app-option>
                                        }
                                    </app-select>
                                </app-form-field>
                            </div>
                            <div class="field">
                                <app-form-field>
                                    <input
                                        name="value"
                                        [disabled]="
                                            condition[1] === 'truthy' ||
                                            condition[1] === 'falsy'
                                        "
                                        [(ngModel)]="condition[2]"
                                        [ngModelOptions]="{ standalone: true }"
                                        [placeholder]="
                                            'ADMIN.EXTENSIONS_CONDITION_VALUE'
                                                | translate
                                        "
                                    />
                                </app-form-field>
                            </div>
                            <button
                                type="button"
                                icon
                                ripple
                                class="border-error text-error h-12 w-12 rounded-sm border"
                                (click)="removeCondition(condition)"
                                [attr.aria-label]="'COMMON.DELETE' | translate"
                            >
                                <icon>delete</icon>
                            </button>
                        </div>
                    }
                    <button
                        type="button"
                        btn
                        ripple
                        class="w-full"
                        (click)="addCondition()"
                    >
                        {{ 'ADMIN.EXTENSIONS_CONDITION_ADD' | translate }}
                    </button>
                </div>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        OptionComponent,
        SelectComponent,
        FormFieldComponent,
        FullscreenModalShellComponent,
        TranslatePipe,
        IconComponent,
        FormsModule,
        FormField,
    ],
})
export class ExtensionModalComponent extends AsyncHandler implements OnInit {
    private _data = inject<{
        item: BackofficeExtension;
    }>(DIALOG_DATA);
    private _hotkey = inject(HotkeysService);

    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly available_types = EXTENSION_SECTIONS;
    public readonly condition_ops: ExtensionConditions[] = [
        'includes',
        'equals',
        'truthy',
        'falsy',
    ];
    public readonly item = this._data.item;
    public readonly loading = signal('');
    public readonly formModel = signal<{
        type: string;
        name: string;
        url: string;
        conditions: [string, string, unknown][];
    }>({
        type: 'systems',
        name: '',
        url: '',
        conditions: [],
    });
    public readonly form = form(this.formModel, (p) => {
        required(p.type);
        required(p.name);
        required(p.url);
    });

    public ngOnInit() {
        this.subscription(
            'save',
            this._hotkey.listen(['KeyS'], () => this.submit()),
        );
        this.formModel.update((value) => ({ ...value, ...this.item }));
    }

    public addCondition() {
        this.formModel.update((value) => ({
            ...value,
            conditions: [...value.conditions, ['', '', '']],
        }));
    }

    public removeCondition(condition: [string, string, unknown]) {
        this.formModel.update((value) => ({
            ...value,
            conditions: value.conditions.filter((c) => c !== condition),
        }));
    }

    public async submit() {
        await submit(this.form, async () => {
            const value = {
                ...this.formModel(),
                conditions: this.formModel().conditions.filter(
                    (c) => c[0] && c[1],
                ),
            };
            this.event.emit({ reason: 'done', metadata: value });
        });
    }
}

import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    inject,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField, required, submit } from '@angular/forms/signals';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsyncHandler } from '../../common/async-handler.class';
import { HotkeysService } from '../../common/hotkeys.service';
import { DialogEvent } from '../../common/types';

import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
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
                        <label for="type">
                            {{ 'ADMIN.EXTENSIONS_FIELD_TYPE' | translate }}
                            <span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select [formField]="form.type">
                                @for (type of available_types; track type) {
                                    <mat-option [value]="type">
                                        <span class="capitalize">{{
                                            type
                                        }}</span>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="field">
                        <label for="name">
                            {{ 'COMMON.FIELD_NAME' | translate }}
                            <span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="
                                    'ADMIN.EXTENSIONS_FIELD_NAME' | translate
                                "
                                [formField]="form.name"
                            />
                            <mat-error>{{
                                'ADMIN.EXTENSIONS_NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div class="field">
                    <label for="url">
                        {{ 'ADMIN.EXTENSIONS_FIELD_URL' | translate }}
                        <span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="
                                'ADMIN.EXTENSIONS_FIELD_URL' | translate
                            "
                            [formField]="form.url"
                        />
                        <mat-error>{{
                            'ADMIN.EXTENSIONS_URL_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
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
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="condition-field"
                                        [(ngModel)]="condition[0]"
                                        [ngModelOptions]="{ standalone: true }"
                                        [placeholder]="
                                            'ADMIN.EXTENSIONS_CONDITION_FIELD'
                                                | translate
                                        "
                                    />
                                </mat-form-field>
                            </div>
                            <div class="field">
                                <mat-form-field appearance="outline">
                                    <mat-select
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
                                            <mat-option [value]="type">
                                                <span class="capitalize">{{
                                                    type
                                                }}</span>
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                            <div class="field">
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
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
                                </mat-form-field>
                            </div>
                            <button
                                icon
                                matRipple
                                class="border-error text-error h-12 w-12 rounded-sm border"
                                (click)="removeCondition(condition)"
                            >
                                <icon>delete</icon>
                            </button>
                        </div>
                    }
                    <button
                        btn
                        matRipple
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
        FullscreenModalShellComponent,
        TranslatePipe,
        MatRippleModule,
        IconComponent,
        FormsModule,
        FormField,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
    ],
})
export class ExtensionModalComponent extends AsyncHandler implements OnInit {
    private _data = inject<{
        item: BackofficeExtension;
    }>(MAT_DIALOG_DATA);
    private _hotkey = inject(HotkeysService);

    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly available_types = [
        'admin',
        'systems',
        'modules',
        'zones',
        'drivers',
        'repositories',
        'triggers',
        'users',
        'domains',
    ];
    public readonly condition_ops = ['includes', 'equals', 'truthy', 'falsy'];
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

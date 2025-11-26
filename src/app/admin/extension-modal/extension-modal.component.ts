import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    inject,
    signal,
} from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
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
            <form [formGroup]="form">
                <div class="fieldset">
                    <div class="field">
                        <label for="type">
                            {{ 'ADMIN.EXTENSIONS_FIELD_TYPE' | translate }}
                            <span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select formControlName="type">
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
                                name="name"
                                [placeholder]="
                                    'ADMIN.EXTENSIONS_FIELD_NAME' | translate
                                "
                                formControlName="name"
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
                            name="url"
                            [placeholder]="
                                'ADMIN.EXTENSIONS_FIELD_URL' | translate
                            "
                            formControlName="url"
                        />
                        <mat-error>{{
                            'ADMIN.EXTENSIONS_URL_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="w-full">
                    @if (form.controls.conditions.value?.length) {
                        <label>
                            {{
                                'ADMIN.EXTENSIONS_FIELD_CONDITIONS' | translate
                            }}
                        </label>
                    }
                    @for (
                        condition of form.controls.conditions.value;
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
                                class="h-12 w-12 rounded-sm border border-error text-error"
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
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule,
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
    public form = new FormGroup({
        type: new FormControl('systems', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        url: new FormControl('', [Validators.required]),
        conditions: new FormControl([]),
    });

    public ngOnInit() {
        this.subscription(
            'save',
            this._hotkey.listen(['KeyS'], () => this.submit()),
        );
        this.form.patchValue(this.item);
    }

    public addCondition() {
        const conditions = this.form.controls.conditions.value;
        conditions.push(['', '', '']);
    }

    public removeCondition(condition: [string, string, any]) {
        this.form.controls.conditions.setValue(
            this.form.controls.conditions.value.filter((c) => c !== condition),
        );
    }

    public submit() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return;
        }
        const value = this.form.value;
        value.conditions = value.conditions.filter((c) => c[0] && c[1]);
        this.event.emit({ reason: 'done', metadata: value });
    }
}

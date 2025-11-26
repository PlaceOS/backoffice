import {
    Component,
    forwardRef,
    input,
    OnChanges,
    output,
    signal,
    SimpleChanges,
} from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    ReactiveFormsModule,
    UntypedFormControl,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PlaceModuleFunction } from '@placeos/ts-client';
import { AsyncHandler } from '../../../common/async-handler.class';
import { HashMap } from '../../../common/types';
import { TranslatePipe } from '../../translate.pipe';

const validateType = (type) => (control: AbstractControl) => {
    let value: any = '';
    try {
        value = JSON.parse(control.value);
    } catch (e) {
        value = control.value;
    }
    if (value === undefined || value == '') return null;
    switch (type) {
        case 'boolean':
            return typeof value === 'boolean' ? null : { type: true };
        case 'number':
            return typeof value === 'number' ? null : { type: true };
        case 'string':
            return typeof value === 'string' ? null : { type: true };
        case 'object':
            return typeof value === 'object' ? null : { type: true };
        case 'array':
            return value instanceof Array ? null : { type: true };
    }
    return null;
};

@Component({
    selector: 'function-arguments',
    template: `
        @if (form()) {
            <form class="pl-8" [formGroup]="form()">
                @for (key of method().order; track key; let i = $index) {
                    <div field class="relative flex items-center space-x-2">
                        <div
                            class="absolute left-0 w-4 -translate-x-full -translate-y-1/2 transform border-b-2 border-l-2 border-base-200"
                            [class.h-6]="i === 0"
                            [class.h-14]="i !== 0"
                        ></div>
                        <!-- <label [for]="key">{{ key }}</label> -->
                        <mat-form-field
                            class="h-14 w-1/2 flex-1"
                            appearance="outline"
                        >
                            <input
                                [name]="key"
                                matInput
                                [formControlName]="key"
                                [placeholder]="
                                    key +
                                    (defaults[key] ? ' = ' + defaults[key] : '')
                                "
                            />
                        </mat-form-field>
                        <div
                            class="w-16 rounded-sm px-2 py-1 text-center text-xs"
                            [class.bg-success]="required[key]"
                            [class.text-success-content]="required[key]"
                            [class.bg-base-200]="!required[key]"
                            [class.text-base-content]="!required[key]"
                        >
                            {{
                                (required[key]
                                    ? 'COMMON.EXECUTE_REQUIRED'
                                    : 'COMMON.EXECUTE_OPTIONAL'
                                ) | translate
                            }}
                        </div>
                    </div>
                }
            </form>
        } @else {
            <div class="flex items-center justify-center space-x-2 p-4">
                <p class="opacity-30">
                    {{ 'COMMON.EXECUTE_NO_ARGS' | translate }}
                </p>
            </div>
        }
    `,
    styles: [
        `
            input {
                font-family: var(--mono-font);
            }
        `,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FunctionArgumentComponent),
            multi: true,
        },
    ],
    imports: [
        TranslatePipe,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
    ],
})
export class FunctionArgumentComponent
    extends AsyncHandler
    implements OnChanges, ControlValueAccessor
{
    public readonly method = input<PlaceModuleFunction>(undefined);
    public readonly valid = output<boolean>();

    public readonly form = signal<UntypedFormGroup>(new UntypedFormGroup({}));

    public value: HashMap;

    public required: HashMap = {};
    public defaults: HashMap = {};

    /** Form control on change handler */
    private _onChange: (_: HashMap) => void;
    /** Form control on touch handler */
    private _onTouch: (_: HashMap) => void;

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.method) this.loadForm();
    }

    public loadForm() {
        const method = this.method();
        if (!method && !method.order.length) return;
        const form_controls = {};
        for (const prop in method.params) {
            const prop_details = method.params[prop] as any;
            const optional = 'default' in prop_details;
            this.required[prop] = !optional;
            form_controls[prop] = new UntypedFormControl(
                (this.value ? this.value[prop] : '') || '',
                !optional
                    ? [
                          validateType(prop_details.type) as any,
                          Validators.required,
                      ]
                    : [validateType(prop_details.type) as any],
            );
            if (optional) {
                try {
                    this.defaults[prop] = JSON.stringify(prop_details.default);
                } catch {
                    this.defaults[prop] = prop_details.default;
                }
            }
        }
        this.form.set(new UntypedFormGroup(form_controls));
        this.valid.emit(this.form()?.valid);
        this.subscription(
            'form',
            this.form().valueChanges.subscribe((v) => this.setValue(v)),
        );
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: HashMap): void {
        this.value = new_value || {};
        this.valid.emit(this.form()?.valid);
        if (this._onChange) {
            this._onChange(new_value);
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: HashMap) {
        this.value = value || {};
        if (!value || !this.form) return;
        this.form().patchValue(value);
    }

    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public readonly registerOnChange = (fn) => (this._onChange = fn);

    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);
}

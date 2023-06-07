import {
    Component,
    forwardRef,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    EventEmitter,
} from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    UntypedFormControl,
    UntypedFormGroup,
    NG_VALUE_ACCESSOR,
    Validators,
} from '@angular/forms';
import { PlaceModuleFunction } from '@placeos/ts-client';
import { AsyncHandler } from '../../../common/base.class';
import { HashMap } from '../../../common/types';

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
        <form class="pl-8" *ngIf="form; else empty_state" [formGroup]="form">
            <div
                field
                class="flex items-center space-x-2 relative"
                *ngFor="let key of method.order; let i = index"
            >
                <div
                    class="absolute left-0 transform -translate-x-full -translate-y-1/2 border-l-2 border-b-2 border-gray-500 w-4"
                    [class.h-5]="i === 0"
                    [class.h-12]="i !== 0"
                ></div>
                <!-- <label [for]="key">{{ key }}</label> -->
                <mat-form-field class="w-1/2 flex-1 h-12" appearance="outline">
                    <input
                        [name]="key"
                        matInput
                        [formControlName]="key"
                        [placeholder]="
                            key + (defaults[key] ? ' = ' + defaults[key] : '')
                        "
                    />
                </mat-form-field>
                <div
                    class="text-xs rounded px-2 py-1 w-16"
                    [class.bg-success]="required[key]"
                    [class.text-white]="required[key]"
                    [class.bg-gray-200]="!required[key]"
                >
                    {{ required[key] ? 'Required' : 'Optional' }}
                </div>
            </div>
        </form>
        <ng-template #empty_state>
            <div class="p-4 flex space-x-2 items-center justify-center">
                <p>No arguments for selected method</p>
            </div>
        </ng-template>
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
})
export class FunctionArgumentComponent
    extends AsyncHandler
    implements OnChanges, ControlValueAccessor
{
    @Input() public method: PlaceModuleFunction;
    @Output() public valid = new EventEmitter<boolean>();

    public form: UntypedFormGroup;

    public value: HashMap;

    public required: HashMap = {};
    public defaults: HashMap = {};

    /** Form control on change handler */
    private _onChange: (_: HashMap) => void;
    /** Form control on touch handler */
    private _onTouch: (_: HashMap) => void;

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.method) {
            this.loadForm();
        }
    }

    public loadForm() {
        if (!this.method && !this.method.order.length) return;
        const form_controls = {};
        for (const prop in this.method.params) {
            const prop_details = this.method.params[prop] as any;
            const optional = 'default' in prop_details;
            this.required[prop] = !optional;
            form_controls[prop] = new UntypedFormControl(
                (this.value ? this.value[prop] : '') || '',
                !optional
                    ? [
                          validateType(prop_details.type) as any,
                          Validators.required,
                      ]
                    : [validateType(prop_details.type) as any]
            );
            if (optional) {
                try {
                    this.defaults[prop] = JSON.stringify(prop_details.default);
                } catch {
                    this.defaults[prop] = prop_details.default;
                }
            }
        }
        this.form = new UntypedFormGroup(form_controls);
        this.valid.emit(this.form?.valid);
        this.subscription(
            'form',
            this.form.valueChanges.subscribe((v) => this.setValue(v))
        );
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: HashMap): void {
        this.value = new_value || {};
        this.valid.emit(this.form?.valid);
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
        this.form.patchValue(value);
    }

    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange = (fn) => (this._onChange = fn);

    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched = (fn) => (this._onTouch = fn);
}

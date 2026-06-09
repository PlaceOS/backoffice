import {
    Component,
    forwardRef,
    input,
    model,
    OnChanges,
    output,
    signal,
    SimpleChanges,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PlaceModuleFunction } from '@placeos/ts-client';
import { AsyncHandler } from '../../../common/async-handler.class';
import { HashMap } from '../../../common/types';
import { TranslatePipe } from '../../translate.pipe';

const validateType = (type: string, raw_value: unknown) => {
    let value: unknown = '';
    try {
        value = JSON.parse(raw_value as string);
    } catch {
        value = raw_value;
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
            <form class="pl-8">
                @for (key of method().order; track key; let i = $index) {
                    <div field class="relative flex items-center space-x-2">
                        <div
                            class="border-base-200 absolute left-0 w-4 -translate-x-full -translate-y-1/2 transform border-b-2 border-l-2"
                            [class.h-6]="i === 0"
                            [class.h-14]="i !== 0"
                        ></div>
                        <!-- <label [for]="key">{{ key }}</label> -->
                        <mat-form-field
                            class="h-14 w-1/2 flex-1"
                            appearance="outline"
                        >
                            <input
                                matInput
                                [disabled]="disabled()"
                                [ngModel]="form()[key] || ''"
                                (ngModelChange)="updateField(key, $event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    key +
                                    (defaults[key] ? ' = ' + defaults[key] : '')
                                "
                            />
                        </mat-form-field>
                        <div
                            class="w-16 rounded-sm px-2 py-1 text-center text-xs"
                            [class.bg-success]="required()[key]"
                            [class.text-success-content]="required()[key]"
                            [class.bg-base-200]="!required()[key]"
                            [class.text-base-content]="!required()[key]"
                        >
                            {{
                                (required()[key]
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
    imports: [TranslatePipe, MatFormFieldModule, MatInputModule, FormsModule],
})
export class FunctionArgumentComponent
    extends AsyncHandler
    implements OnChanges, ControlValueAccessor
{
    public readonly method = input<PlaceModuleFunction>(undefined);
    public readonly valid = output<boolean>();
    public readonly disabled = model(false);

    public readonly form = signal<HashMap<unknown>>({});

    public value: HashMap<unknown>;

    public readonly required = signal<HashMap<boolean>>({});
    public defaults: HashMap<unknown> = {};

    /** Form control on change handler */
    private _onChange: (_: HashMap<unknown>) => void;
    /** Form control on touch handler */
    private _onTouch: (_: HashMap<unknown>) => void;

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.method) this.loadForm();
    }

    public loadForm() {
        const method = this.method();
        if (!method && !method.order.length) return;
        const form_values: HashMap<unknown> = {};
        for (const prop in method.params) {
            const prop_details = method.params[prop] as unknown as Record<
                string,
                unknown
            >;
            const optional = 'default' in prop_details;
            this.required.update((required) => ({
                ...required,
                [prop]: !optional,
            }));
            form_values[prop] = (this.value ? this.value[prop] : '') || '';
            if (optional) {
                try {
                    this.defaults[prop] = JSON.stringify(prop_details.default);
                } catch {
                    this.defaults[prop] = prop_details.default;
                }
            }
        }
        this.form.set(form_values);
        this.valid.emit(this.isValid(form_values));
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: HashMap<unknown>): void {
        if (this.disabled()) return;
        this.value = new_value || {};
        this.valid.emit(this.isValid(new_value));
        if (this._onChange) {
            this._onChange(new_value);
        }
        this._onTouch?.(new_value);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: HashMap<unknown>) {
        this.value = value || {};
        if (!value || !this.form()) return;
        this.form.set({ ...this.form(), ...value });
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

    public setDisabledState(disabled: boolean) {
        this.disabled.set(disabled);
    }

    public updateField(key: string, value: unknown) {
        if (this.disabled()) return;
        const new_value = { ...this.form(), [key]: value };
        this.form.set(new_value);
        this.setValue(new_value);
    }

    private isValid(value: HashMap<unknown> = {}) {
        const method = this.method();
        if (!method) return true;
        for (const prop in method.params) {
            const prop_details = method.params[prop] as unknown as Record<
                string,
                unknown
            >;
            const required = !('default' in prop_details);
            if (required && !value[prop]) return false;
            if (validateType(prop_details.type as string, value[prop])) {
                return false;
            }
        }
        return true;
    }
}

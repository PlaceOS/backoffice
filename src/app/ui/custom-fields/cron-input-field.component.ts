import { Component, effect, forwardRef, signal } from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
    disabled as disabledField,
    form,
    FormField,
    validate,
} from '@angular/forms/signals';

const VALID_INPUT = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '*',
    '/',
    '-',
    ',',
    'Backspace',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
    'Delete',
];
function listPattern(fieldPattern) {
    // One instance of `fieldPattern` plus any number of `,fieldPattern`
    return `(?:${fieldPattern})(?:,(?:${fieldPattern}))*`;
}

@Component({
    selector: 'cron-input-field',
    template: `
        <div
            class="border-base-300 focus-within:border-base-content focus-within:outline-base-content mb-1 flex w-full items-center space-x-2 rounded-sm border focus-within:outline-4"
            (focusout)="markTouched()"
        >
            <input
                class="w-px flex-1 border-none bg-none p-2 text-base outline-hidden"
                placeholder="*"
                [formField]="form.minute"
                (keydown)="preventInvalidCharacters($event)"
            />
            <input
                class="w-px flex-1 border-none bg-none p-2 text-base outline-hidden"
                placeholder="*"
                [formField]="form.hour"
            />
            <input
                class="w-px flex-1 border-none bg-none p-2 text-base outline-hidden"
                placeholder="*"
                [formField]="form.day"
            />
            <input
                class="w-px flex-1 border-none bg-none p-2 text-base outline-hidden"
                placeholder="*"
                [formField]="form.month"
            />
            <input
                class="w-px flex-1 border-none bg-none p-2 text-base outline-hidden"
                placeholder="*"
                [formField]="form.day_of_week"
            />
        </div>
        <div class="text-error text-xs" [class.opacity-0]="!form().invalid()">
            CRON expression is invalid
        </div>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CronInputFieldComponent),
            multi: true,
        },
    ],
    imports: [FormField],
})
export class CronInputFieldComponent implements ControlValueAccessor {
    public cron_string: string;
    public readonly disabled = signal(false);
    public readonly formModel = signal({
        minute: '*',
        hour: '*',
        day: '*',
        month: '*',
        day_of_week: '*',
    });
    public readonly form = form(this.formModel, (path) => {
        for (const field of [
            path.minute,
            path.hour,
            path.day,
            path.month,
            path.day_of_week,
        ]) {
            disabledField(field, { when: () => this.disabled() });
        }
        this.validatePattern(
            path.minute,
            listPattern(
                '(?:\\*(?:/\\d{1,2})?|[0-5]?\\d(?:-[0-5]?\\d)?(?:/\\d{1,2})?)',
            ),
        );
        this.validatePattern(
            path.hour,
            listPattern(
                '(?:\\*(?:/\\d{1,2})?|(?:[01]?\\d|2[0-3])(?:-(?:[01]?\\d|2[0-3]))?(?:/\\d{1,2})?)',
            ),
        );
        this.validatePattern(
            path.day,
            listPattern(
                '(?:\\*(?:/\\d{1,2})?|(?:[1-9]|[12]\\d|3[01])(?:-(?:[1-9]|[12]d|3[01]))?(?:/\\d{1,2})?)',
            ),
        );
        this.validatePattern(
            path.month,
            listPattern(
                '(?:\\*(?:/\\d{1,2})?|(?:[1-9]|1[0-2])(?:-(?:[1-9]|1[0-2]))?(?:/\\d{1,2})?)',
            ),
        );
        this.validatePattern(
            path.day_of_week,
            listPattern(
                '(?:\\*(?:/\\d{1,2})?|[0-6](?:-[0-6])?(?:/\\d{1,2})?)',
            ),
        );
    });

    public readonly registerOnChange = (fn) => (this._onChange = fn);
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);

    private _onChange: (_: string) => void;
    private _onTouch: (_: string) => void;

    constructor() {
        effect(() => {
            const value = this.formModel();
            if (this.form().invalid()) return;
            this.setValue(
                `${value.minute || '*'} ${value.hour || '*'} ${
                    value.day || '*'
                } ${value.month || '*'} ${value.day_of_week || '*'}`,
            );
        });
    }

    public setValue(value: string): void {
        if (this.disabled()) return;
        this.cron_string = value;
        if (this._onChange) this._onChange(value);
        this._onTouch?.(value);
    }

    public writeValue(value: string): void {
        if (!value) return;
        this.cron_string = value;
        const parts = value.split(' ');
        this.formModel.set({
            minute: parts[0] || '*',
            hour: parts[1] || '*',
            day: parts[2] || '*',
            month: parts[3] || '*',
            day_of_week: parts[4] || '*',
        });
    }

    public preventInvalidCharacters(event: KeyboardEvent): void {
        if (this.disabled()) event.preventDefault();
        if (!VALID_INPUT.includes(event.key)) event.preventDefault();
    }

    public setDisabledState(disabled: boolean): void {
        this.disabled.set(disabled);
    }

    public markTouched() {
        this._onTouch?.(this.cron_string);
    }

    private validatePattern(path, pattern: string) {
        const regex = new RegExp(`^${pattern}$`);
        validate(path, ({ value }) =>
            regex.test(String(value() || ''))
                ? undefined
                : { kind: 'pattern', message: 'Invalid CRON segment' },
        );
    }
}

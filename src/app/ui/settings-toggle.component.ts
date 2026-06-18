import { Component, forwardRef, input, model, signal } from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltip } from '@angular/material/tooltip';
import { IconComponent } from './icon.component';

@Component({
    selector: 'settings-toggle',
    template: `
        <button
            type="button"
            matRipple
            class="relative flex min-h-12 flex-1 items-center space-x-2 overflow-hidden rounded-sm border px-2"
            [class.border-base-300]="!value()"
            [class.border-info]="value()"
            [disabled]="disabled()"
            [class.opacity-30]="disabled()"
            (click)="setValue(!value())"
        >
            @if (value()) {
                <div class="bg-info absolute inset-0 m-0! opacity-10"></div>
            }
            <div class="ml-2 flex flex-1 items-center space-x-2 text-left">
                <div>{{ label() }}<ng-content /></div>
                @if (info()) {
                    <icon [matTooltip]="info()">info</icon>
                }
            </div>
            <mat-checkbox
                [(ngModel)]="value"
                class="pointer-events-none"
                [disabled]="disabled()"
            />
        </button>
    `,
    styles: [
        `
            :host {
                display: flex;
            }
        `,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SettingsToggleComponent),
            multi: true,
        },
    ],
    imports: [
        MatCheckboxModule,
        IconComponent,
        FormsModule,
        MatRippleModule,
        MatTooltip,
    ],
})
export class SettingsToggleComponent implements ControlValueAccessor {
    public readonly label = input<string>(undefined);
    public readonly info = input<string>(undefined);
    public readonly disabled = model(false);

    public readonly value = signal<boolean | null>(null);

    /** Form control on change handler */
    private _onChange: (_: boolean) => void;
    /** Form control on touch handler */
    private _onTouch: (_: boolean) => void;

    public readonly registerOnChange = (fn) => (this._onChange = fn);
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: boolean): void {
        if (this.disabled()) return;
        this.value.set(new_value);
        /* istanbul ignore else */
        if (this._onChange) this._onChange(new_value);
        this._onTouch?.(new_value);
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: boolean) {
        this.value.set(value);
    }

    public setDisabledState(disabled: boolean) {
        this.disabled.set(disabled);
    }
}

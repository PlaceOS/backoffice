import { Component, forwardRef, input } from '@angular/core';
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
            matRipple
            class="relative flex min-h-12 flex-1 items-center space-x-2 overflow-hidden rounded-sm border px-2"
            [class.border-base-300]="!value"
            [class.border-info]="value"
            (click)="setValue(!value)"
        >
            @if (value) {
                <div class="absolute inset-0 bg-info opacity-10"></div>
            }
            <div class="ml-2 flex flex-1 items-center space-x-2 text-left">
                <div>{{ name() }}<ng-content></ng-content></div>
                @if (info()) {
                    <icon [matTooltip]="info()">info</icon>
                }
            </div>
            <mat-checkbox
                [(ngModel)]="value"
                class="pointer-events-none"
            ></mat-checkbox>
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
    public readonly name = input<string>(undefined);
    public readonly info = input<string>(undefined);

    public value: boolean;

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
        this.value = new_value;
        /* istanbul ignore else */
        if (this._onChange) this._onChange(new_value);
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: boolean) {
        this.value = value;
    }
}

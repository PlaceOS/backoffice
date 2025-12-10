import { Component, forwardRef, HostListener, input } from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent } from './icon.component';

@Component({
    selector: 'a-counter',
    template: `
        <div counter class="flex items-center text-base">
            <button
                decrease
                icon
                matRipple
                type="button"
                class="border-secondary text-secondary z-10 h-12 w-12 rounded-l rounded-r-none border"
                [disabled]="!value || value === min()"
                (click)="remove()"
            >
                <icon>remove</icon>
            </button>
            <div
                value
                class="border-base-300 relative z-0 flex h-12 min-w-16 flex-1 items-center justify-center rounded-none border-y p-1 focus-within:z-20"
            >
                @if (!focused) {
                    <span>
                        {{ (render_fn() ? render_fn()(value) : value) || '0' }}
                    </span>
                }
                <input
                    type="text"
                    class="absolute inset-0 p-2 opacity-0 focus:opacity-100"
                    [(ngModel)]="value"
                    (focus)="focused = true"
                    (blur)="setValue(+value); focused = false"
                    limitInput
                />
            </div>
            <button
                increase
                icon
                matRipple
                type="button"
                class="border-secondary text-secondary z-10 h-12 w-12 rounded-l-none rounded-r border"
                [disabled]="value === max()"
                (click)="add()"
            >
                <icon>add</icon>
            </button>
        </div>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            /* istanbul ignore next */
            useExisting: forwardRef(() => CounterComponent),
            multi: true,
        },
    ],
    imports: [IconComponent, MatRippleModule, FormsModule],
})
export class CounterComponent implements ControlValueAccessor {
    /** Size of a single step */
    public readonly step = input(1);
    /** Maximum amount for the counter */
    public readonly max = input(999);
    /** Minimum amount for the counter */
    public readonly min = input(0);
    /** Custom function for rendering the counter value */
    public readonly render_fn = input<(v: number) => string>(undefined);
    /** Current value of the counter */
    public value: number;
    /** Whether shift key is being held by the user */
    public shift_key: boolean;
    /** Whether control key is being held by the user */
    public ctrl_key: boolean;
    public focused = false;

    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;

    @HostListener('window:keydown', ['$event'])
    public onKeyDown(event: KeyboardEvent) {
        this.shift_key = event.shiftKey;
        this.ctrl_key = event.ctrlKey;
    }

    @HostListener('window:keyup', ['$event'])
    public onKeyUp(event: KeyboardEvent) {
        this.shift_key = event.shiftKey;
        this.ctrl_key = event.ctrlKey;
    }

    /**
     * Add the `step` to the current value
     */
    public add() {
        if (!this.value) {
            this.value = this.min() || 0;
        }
        const step = this.ctrl_key
            ? 100 * this.step()
            : this.shift_key
              ? 10 * this.step()
              : this.step() || 1;
        this.value += step;
        if (this.value > this.max()) {
            this.value = this.max() || 10;
        }
        this.setValue(this.value);
    }

    /** Remove the `step` from the current value */
    public remove() {
        if (!this.value) {
            this.value = this.min() || 0;
        }
        const step = this.ctrl_key
            ? 100 * this.step()
            : this.shift_key
              ? 10 * this.step()
              : this.step() || 1;
        this.value -= step;
        if (this.value < this.min()) {
            this.value = this.min() || 0;
        }
        this.setValue(this.value);
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: number): void {
        if (new_value < this.min()) new_value = this.min();
        if (new_value > this.max()) new_value = this.max();
        if ((new_value / this.step()) % 1 !== 0) {
            new_value =
                Math.round(new_value * (1 / this.step())) / (1 / this.step());
        }
        this.value = new_value;
        /* istanbul ignore else */
        if (this._onChange) {
            this._onChange(new_value);
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: number) {
        this.value = value;
    }

    /* istanbul ignore next */
    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: number) => void): void {
        this._onChange = fn;
    }

    /* istanbul ignore next */
    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: number) => void): void {
        this._onTouch = fn;
    }
}

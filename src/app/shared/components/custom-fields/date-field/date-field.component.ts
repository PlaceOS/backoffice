import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import * as dayjs from 'dayjs';
import { BaseDirective } from 'src/app/shared/globals/base.directive';

@Component({
    selector: 'a-date-field',
    templateUrl: './date-field.component.html',
    styleUrls: ['./date-field.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateFieldComponent),
            multi: true
        }
    ]
})
export class DateFieldComponent extends BaseDirective implements OnInit, ControlValueAccessor {
    /** Earliest date available the user is allowed to pick */
    @Input('from') public from_time: number = dayjs().valueOf();
    /** Latest date available the user is allowed to pick */
    @Input('to') public to_time: number;
    /** Whether to show the calendar tooltip */
    public show_tooltip: boolean;
    /** Currently selected date */
    public date: number;
    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;

    /** First allowed date on the calendar */
    public get from(): number {
        return (
            this.from_time ||
            dayjs()
                .startOf('d')
                .valueOf()
        );
    }
    /** Current date value */
    public get until(): number {
        return (
            this.to_time ||
            dayjs()
                .endOf('d')
                .add(1, 'y')
                .valueOf()
        );
    }
    /** Display value for the current date */
    public get date_string(): string {
        return dayjs(this.date).format('DD MMM YYYY');
    }

    public ngOnInit() {
        this.date = dayjs().valueOf();
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: number) {
        this.date = new_value;
        if (this._onChange) {
            this._onChange(new_value);
        }
        this.show_tooltip = false;
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: number) {
        this.date = value;
        this.show_tooltip = false;
    }

    /**
     * Registers a callback function that is called when the
     * control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: number) => void): void {
        this._onChange = fn;
    }

    /**
     * Registers a callback function is called by the forms
     * API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: number) => void): void {
        this._onTouch = fn;
    }

    /** Set the state of the tooltip to closed after delay */
    public closeTooltip() {
        this.timeout('close_tooltip', () => (this.show_tooltip = false), 50);
    }

    /** Cancel tooltip close event */
    public cancelClose() {
        this.timeout('cancel_close', () => this.clearTimeout('close_tooltip'), 10);
    }
}

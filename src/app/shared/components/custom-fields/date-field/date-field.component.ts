import { Component, OnInit, forwardRef, Input, ViewChild, LOCALE_ID, Inject } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';

import { BaseDirective } from 'src/app/shared/globals/base.directive';

import * as dayjs from 'dayjs';
import { DatePipe } from '@angular/common';

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
    @Input('from') public _from: number = dayjs().valueOf();
    /** Latest date available the user is allowed to pick */
    @Input('to') public _to: number;
    /** Position of the tooltip */
    @Input() public position: 'right' | 'left' = 'right';
    /** Offset of the tooltip */
    @Input() public offset: 'top' | 'bottom' = 'bottom';
    /** Whether form control is disabled */
    @Input() public disabled: boolean;
    /** Whether to show the calendar tooltip */
    public show_tooltip: boolean;
    /** Currently selected date */
    public date: number;
    /** Pipe for formatting date strings */
    private date_pipe: DatePipe;
    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;

    @ViewChild(MatMenuTrigger, { static: true }) private _trigger: MatMenuTrigger;

    /** First allowed date on the calendar */
    public get from(): number {
        return this._from || dayjs().startOf('d').valueOf();
    }
    /** Current date value */
    public get until(): number {
        return this._to || dayjs().endOf('d').add(1, 'y').valueOf();
    }
    /** Display value for the current date */
    public get date_string(): string {
        return this.date_pipe.transform(dayjs(this.date).toDate(), 'DD MMM YYYY');
    }

    /** Whether date picker is open */
    public get is_open(): boolean {
        return this._trigger.menuOpen;
    }

    constructor(@Inject(LOCALE_ID) private _locale: string) {
        super();
        this.date_pipe = new DatePipe(this._locale);
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

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: number) {
        this.date = value;
        this.show_tooltip = false;
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

    public setDisabledState(disabled: boolean) {
        this.disabled = disabled;
    }

    /** Set the state of the tooltip to closed after delay */
    public closeDatePicker() {
        this._trigger.closeMenu();
    }

    /** Set the state of the tooltip to closed after delay */
    public openDatePicker() {
        this._trigger.openMenu();
    }
}

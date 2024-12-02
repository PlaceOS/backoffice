import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'cron-field',
    template: `
        <label for="period">Repeat Every:</label>
        <mat-form-field appearance="outline">
            <mat-select
                [(ngModel)]="period"
                (ngOnChange)="updateString($event)"
            >
                <mat-option [value]="0">Minute of Hour</mat-option>
                <mat-option [value]="1">Minute</mat-option>
                <mat-option [value]="5">5 minutes</mat-option>
                <mat-option [value]="15">15 minutes</mat-option>
                <mat-option [value]="30">30 minutes</mat-option>
                <mat-option [value]="60">Hour</mat-option>
                <mat-option [value]="120">2 hours</mat-option>
                <mat-option [value]="180">3 hours</mat-option>
                <mat-option [value]="360">6 hours</mat-option>
                <mat-option [value]="480">8 hours</mat-option>
                <mat-option [value]="720">12 hours</mat-option>
                <mat-option [value]="-1">Hour of day</mat-option>
                <mat-option [value]="-2">Day of week</mat-option>
                <mat-option [value]="-3">Day of month</mat-option>
                <mat-option [value]="-4">Day of year</mat-option>
            </mat-select>
        </mat-form-field>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CronFieldComponent),
            multi: true,
        },
    ],
})
export class CronFieldComponent implements ControlValueAccessor {
    public period: number = 1;
    public value: string;
    /** Form control on change handler */
    private _onChange: (_: string) => void;
    /** Form control on touch handler */
    private _onTouch: (_: string) => void;

    public readonly registerOnChange = (fn: (_: string) => void) =>
        (this._onChange = fn);
    public readonly registerOnTouched = (fn: (_: string) => void) =>
        (this._onTouch = fn);

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: string) {
        this.value = new_value;
        if (this._onChange) this._onChange(this.value);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: string) {
        const parts = value.split(' ');
        if (parts.length !== 5) return;
    }

    public updateString(period: number) {
        if (period === 1) {
            this.setValue(`* * * * *`);
        } else if (period < 1) {
            if (period === 0) {
                // Minute of Hour
                this.setValue(`0 * * * *`);
            } else if (period === -1) {
                // Hour of day
                this.setValue(`0 0 * * *`);
            } else if (period === -2) {
                // Day of week
                this.setValue(`0 0 * * 0`);
            } else if (period === -3) {
                // Day of month
                this.setValue(`0 0 18 * 0`);
            } else if (period === -4) {
                // Day of year
                this.setValue(`0 0 18 2 0`);
            }
        } else if (period < 60) {
            this.setValue(`*/${period} * * * *`);
        } else {
            const hour = Math.floor(period / 60);
            this.setValue(`0 */${hour} * * *`);
        }
    }
}

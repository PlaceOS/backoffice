import {
    Component,
    forwardRef,
    input,
    model,
    OnChanges,
    OnInit,
    SimpleChanges,
    viewChild,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import {
    addMinutes,
    endOfDay,
    format,
    isAfter,
    isSameDay,
    roundToNearestMinutes,
    set,
    startOfDay,
    startOfMinute,
} from 'date-fns';
import { AsyncHandler } from '../../common/async-handler.class';
import { Identity } from '../../common/types';
import { IconComponent } from '../icon.component';

@Component({
    selector: 'a-time-field',
    template: `
        <mat-form-field
            appearance="outline"
            [style.display]="show_select ? 'none' : ''"
            (keydown.enter)="showSelect()"
        >
            <input
                matInput
                type="time"
                [disabled]="disabled()"
                [ngModel]="time"
                (ngModelChange)="setValue($event)"
            />
            <button
                btn
                icon
                matSuffix
                class="relative top-1 -right-1"
                (click)="showSelect()"
            >
                <icon class="text-base-content text-opacity-50 text-2xl">
                    arrow_drop_down
                </icon>
            </button>
            <mat-error><ng-content /></mat-error>
        </mat-form-field>
        @if (show_select) {
            <mat-form-field appearance="outline">
                <mat-select
                    #select
                    [value]="time"
                    [disabled]="disabled()"
                    (valueChange)="setValue($event)"
                >
                    @for (option of time_options; track option) {
                        <mat-option [value]="option.id">
                            {{ option.name }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
        }
    `,
    styles: [
        `
            mat-form-field {
                width: 100%;
            }
        `,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TimeFieldComponent),
            multi: true,
        },
    ],
    imports: [
        MatFormFieldModule,
        MatSelectModule,
        IconComponent,
        MatRippleModule,
        FormsModule,
        MatInputModule,
    ],
})
export class TimeFieldComponent
    extends AsyncHandler
    implements OnInit, OnChanges, ControlValueAccessor
{
    /** Time step between each allowed time option */
    public readonly step = input(15);
    /** Whether form field is disabled */
    public readonly disabled = model<boolean>(false);
    /** Whether past times are allowed */
    public readonly no_past_times = input(true);
    /** String representing the currently set time */
    public date: number = new Date().valueOf();
    /** String representing the currently set time */
    public time: string = format(new Date(), 'HH:mm');
    /** Available time blocks for the selected date */
    public _time_options: Identity[];
    /** Whether select field should be shown */
    public show_select: boolean;
    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;

    /** Select field for selecting the time */
    private readonly select_field = viewChild<MatSelect>('select');

    public ngOnInit(): void {
        this.show_select = true;
        this._time_options = this.generateAvailableTimes(
            this.date,
            !this.no_past_times(),
            this.step(),
        );
        this.timeout('hide', () => (this.show_select = false));
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.no_past_times || changes.step) {
            this._time_options = this.generateAvailableTimes(
                this.date,
                !this.no_past_times(),
                this.step(),
            );
        }
    }

    /** Available time blocks for the selected date */
    public get time_options() {
        const time = (this.time || '00:00').split(':');
        const date = set(this.date, { hours: +time[0], minutes: +time[1] });
        if (
            date.getMinutes() % 15 !== 0 &&
            !this._time_options.find(
                (time) => time.id === format(date, 'HH:mm'),
            )
        ) {
            this._time_options.push({
                name: `${format(date, 'h:mm a')}`,
                id: format(date, 'HH:mm'),
            });
            this._time_options.sort((a, b) =>
                `${a.id}`.localeCompare(`${b.id}`),
            );
        }
        return this._time_options;
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: string): void {
        this.time = new_value;
        if (this._onChange) {
            const time = (this.time || '00:00').split(':');
            const date = startOfMinute(
                set(this.date, { hours: +time[0], minutes: +time[1] }),
            );
            this._onChange(date.valueOf());
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: number) {
        this.date = value || this.date;
        let date = startOfMinute(this.date);
        date = roundToNearestMinutes(date, { nearestTo: 5 });
        this.time = format(date, 'HH:mm');
        this._time_options = this.generateAvailableTimes(
            this.date,
            !this.no_past_times(),
            this.step(),
        );
    }

    public setDisabledState(disabled: boolean) {
        this.disabled.set(disabled);
    }

    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: number) => void): void {
        this._onChange = fn;
    }

    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: number) => void): void {
        this._onTouch = fn;
    }

    /**
     * Show select field for time options
     */
    public showSelect() {
        this.show_select = true;
        this.timeout('on_shown', () => {
            const select_field = this.select_field();
            if (select_field) {
                select_field.focus();
                select_field.open();
                this.subscription(
                    'listen_close',
                    select_field.openedChange.subscribe((state) => {
                        if (!state) {
                            this.show_select = false;
                        }
                    }),
                );
            }
        });
    }

    /**
     * Generate a list of time options for the given date
     * @param datestamp Date to generate options for
     * @param show_past Whether past times should be options
     */
    private generateAvailableTimes(
        datestamp: number,
        show_past: boolean,
        step = 15,
    ): Identity[] {
        const now = new Date();
        let date = new Date(datestamp);
        const blocks = [];
        if (show_past || (!isSameDay(date, now) && isAfter(date, now))) {
            date = startOfDay(date);
        } else if (isAfter(date, now)) {
            date = now;
        }
        date = roundToNearestMinutes(date, { nearestTo: step as any });
        const end = endOfDay(date);
        // Add options for the rest of the day
        while (isAfter(end, date)) {
            blocks.push({
                name: `${format(date, 'h:mm a')}`,
                id: format(date, 'HH:mm'),
            });
            date = addMinutes(date, step);
        }
        return blocks;
    }
}

import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { TriggerTimeConditionType } from '@placeos/ts-client';
import { format, setDay, setMonth } from 'date-fns';
import { AsyncHandler } from '../../../common/async-handler.class';
import { numberToPosition } from '../../../common/general';
import { i18n } from '../../../common/locale.service';
import { TIMEZONES_IANA } from '../../../common/timezones';
import { Identity } from '../../../common/types';

@Component({
    selector: 'trigger-condition-time-form',
    template: `
        <div
            class="trigger-condition form time"
            *ngIf="form"
            [formGroup]="form"
        >
            <div class="field mb-4">
                <settings-toggle
                    [name]="'TRIGGERS.TIME_SCHEDULE' | translate"
                    [(ngModel)]="is_cron"
                    (ngModelChange)="toggleCRON($event)"
                    [ngModelOptions]="{ standalone: true }"
                ></settings-toggle>
            </div>
            <div class="field" *ngIf="is_cron">
                <label for="timezone">{{
                    'COMMON.TIMEZONE' | translate
                }}</label>
                <mat-form-field appearance="outline">
                    <app-icon matPrefix class="text-2xl">search</app-icon>
                    <input
                        matInput
                        formControlName="timezone"
                        [placeholder]="'COMMON.TIMEZONE' | translate"
                        [matAutocomplete]="auto"
                    />
                </mat-form-field>
                <mat-autocomplete #auto="matAutocomplete">
                    <mat-option *ngFor="let tz of timezones" [value]="tz">{{
                        tz
                    }}</mat-option>
                    <mat-option *ngIf="!timezones.length" [disabled]="true">{{
                        'COMMON.TIMEZONE_EMPTY' | translate
                    }}</mat-option>
                </mat-autocomplete>
            </div>
            <div
                class="flex items-center space-x-4"
                *ngIf="!is_cron; else cron_time_form"
            >
                <div class="field" *ngIf="form.controls.time">
                    <label for="type"
                        >{{ 'TRIGGERS.TIME_FIELD_DATE' | translate }}
                    </label>
                    <a-date-field
                        name="date"
                        formControlName="time"
                    ></a-date-field>
                </div>
                <div class="field" *ngIf="form.controls.time">
                    <label for="type"
                        >{{ 'TRIGGERS.TIME_FIELD_TIME' | translate }}
                    </label>
                    <a-time-field
                        name="date"
                        formControlName="time"
                    ></a-time-field>
                </div>
            </div>
        </div>
        <ng-template #cron_time_form>
            <div class="field">
                <label for="type"
                    >{{ 'TRIGGERS.TIME_REPEAT' | translate }}:
                </label>
                <mat-form-field appearance="outline">
                    <mat-select
                        name="type"
                        [(ngModel)]="cron_period"
                        (ngModelChange)="updateCronString()"
                        [ngModelOptions]="{ standalone: true }"
                    >
                        <mat-option
                            *ngFor="let period of repeat_period"
                            [value]="period.id"
                        >
                            {{ period.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            @if (cron_period !== 'custom') {
                <div class="flex items-center space-x-4">
                    <div
                        class="field w-2/5 flex-1"
                        *ngIf="cron_period === 'year'"
                    >
                        <label for="month"
                            >{{ 'TRIGGERS.TIME_MONTH_OF_YEAR' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                name="month"
                                [(ngModel)]="cron_month"
                                (ngModelChange)="updateCronString()"
                                [ngModelOptions]="{ standalone: true }"
                            >
                                <mat-option
                                    *ngFor="
                                        let month of months_of_year;
                                        let i = index
                                    "
                                    [value]="i + 1"
                                >
                                    {{ month }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div
                        class="field w-2/5 flex-1"
                        *ngIf="
                            cron_period === 'month' || cron_period === 'year'
                        "
                    >
                        <label for="day"
                            >{{ 'TRIGGERS.TIME_DAY_OF_MONTH' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                name="day"
                                [(ngModel)]="cron_date"
                                (ngModelChange)="updateCronString()"
                                [ngModelOptions]="{ standalone: true }"
                            >
                                <mat-option
                                    *ngFor="let period of days_of_month"
                                    [value]="period.id"
                                >
                                    {{ period.name }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                </div>
                <div class="field" *ngIf="cron_period === 'week'">
                    <label for="weekday">
                        {{ 'TRIGGERS.TIME_DAY_OF_WEEK' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            name="weekday"
                            [(ngModel)]="cron_day"
                            (ngModelChange)="updateCronString()"
                            [ngModelOptions]="{ standalone: true }"
                        >
                            <mat-option
                                *ngFor="
                                    let weekday of days_of_week;
                                    let i = index
                                "
                                [value]="i"
                            >
                                {{ weekday }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="flex items-center space-x-4">
                    <div
                        class="field w-2/5 flex-1"
                        *ngIf="
                            cron_period !== 'minute' && cron_period !== 'hour'
                        "
                    >
                        <label for="hour">{{
                            'TRIGGERS.TIME_HOUR_OF_DAY' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                name="hour"
                                [(ngModel)]="cron_hour"
                                (ngModelChange)="updateCronString()"
                                [ngModelOptions]="{ standalone: true }"
                            >
                                <mat-select-trigger>
                                    {{ pad(cron_hour) }}:<span
                                        class="opacity-30"
                                        >00</span
                                    >
                                </mat-select-trigger>
                                <mat-option
                                    *ngFor="let hour of hours_in_day"
                                    [value]="+hour"
                                >
                                    {{ pad(hour) }}:<span class="opacity-30"
                                        >00</span
                                    >
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div
                        class="field w-2/5 flex-1"
                        *ngIf="cron_period !== 'minute'"
                    >
                        <label for="minute">{{
                            'TRIGGERS.TIME_MINUTE_OF_HOUR' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                name="minute"
                                [(ngModel)]="cron_minute"
                                (ngModelChange)="updateCronString()"
                                [ngModelOptions]="{ standalone: true }"
                            >
                                <mat-select-trigger>
                                    <span class="opacity-30">{{
                                        pad(cron_hour)
                                    }}</span
                                    >:{{ pad(cron_minute) }}
                                </mat-select-trigger>
                                <mat-option
                                    *ngFor="let minute of minutes_in_hour"
                                    [value]="+minute"
                                >
                                    <span class="opacity-30">{{
                                        pad(cron_hour)
                                    }}</span
                                    >:{{ pad(minute) }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                </div>
            } @else {
                <cron-input-field
                    [(ngModel)]="cron_string"
                    (ngModelChange)="saveCRON($event)"
                ></cron-input-field>
            }
        </ng-template>
    `,
    styles: [],
    standalone: false,
})
export class TriggerConditionTimeFormComponent
    extends AsyncHandler
    implements OnChanges, OnInit
{
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;
    /** List of available periods for scheduled repetition */
    public repeat_period: Identity[] = [];
    /** Whether condition is a cron(recurring) job */
    public is_cron: boolean;
    /** The period which the user selects the recurrence */
    public cron_period:
        | 'minute'
        | 'hour'
        | 'day'
        | 'week'
        | 'month'
        | 'year'
        | 'custom' = 'minute';

    public minutes_in_hour = new Array(12).fill(0).map((_, idx) => idx * 5);
    public hours_in_day = new Array(24).fill(0).map((_, idx) => idx);
    public days_of_week = [];
    public days_of_month: Identity[] = Array(31)
        .fill(0)
        .map((_, index) => ({
            id: index + 1,
            name: `${numberToPosition(index + 1)}`,
        }));
    public months_of_year = [];
    public cron_string = '';
    /** Minute of the hour to recurr on */
    public cron_minute = 0;
    /** Hour of the day to recurr on */
    public cron_hour = 0;
    /** Hour of the day to recurr on */
    public cron_hour_period = 'AM';
    /** Hour of the day to recurr on */
    public cron_day = 0;
    /** Hour of the day to recurr on */
    public cron_date = 1;
    /** Hour of the day to recurr on */
    public cron_month = 1;

    public timezones: string[] = [];

    public pad(str: any, digits = 2) {
        return `${str}`.padStart(digits, '0');
    }

    public ngOnInit() {
        this.repeat_period = [
            { id: 'minute', name: i18n('COMMON.MINUTE') },
            { id: 'hour', name: i18n('COMMON.HOUR') },
            { id: 'day', name: i18n('COMMON.DAY') },
            { id: 'week', name: i18n('COMMON.WEEK') },
            { id: 'month', name: i18n('COMMON.MONTH') },
            { id: 'year', name: i18n('COMMON.YEAR') },
            { id: 'custom', name: i18n('COMMON.CRON_CUSTOM') },
        ];
        this.days_of_week = new Array(7)
            .fill(0)
            .map((_, index) =>
                i18n(
                    `COMMON.${format(
                        setDay(Date.now(), index),
                        'EEEE',
                    ).toUpperCase()}`,
                ),
            );
        this.months_of_year = Array(12)
            .fill(0)
            .map((_, index) =>
                i18n(
                    `COMMON.${format(
                        setMonth(Date.now(), index),
                        'MMMM',
                    ).toUpperCase()}`,
                ),
            );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.form && this.form) {
            this.is_cron = this.form.controls.time_type.value === 'cron';
            if (this.is_cron) {
                this.loadCronTab(this.form.controls.cron.value);
            }
            this.subscription(
                'timezone',
                this.form
                    .get('timezone')
                    .valueChanges.subscribe((tz) =>
                        this.updateTimezoneList(tz),
                    ),
            );
            this.updateTimezoneList(this.form.get('timezone').value);
        }
    }

    public updateTimezoneList(tz: string) {
        const tz_lower = (tz || '').toLowerCase();
        this.timezones = TIMEZONES_IANA.filter((_) =>
            _.toLowerCase().includes(tz_lower),
        );
    }

    public toggleCRON(is_cron: boolean) {
        this.form.controls.cron.setValue(null);
        this.form.controls.time_type.setValue(
            is_cron
                ? TriggerTimeConditionType.CRON
                : TriggerTimeConditionType.AT,
        );
        this.updateCronString();
    }

    public saveCRON(cron_str: string) {
        this.timeout(
            'save_cron',
            () => this.form.controls.cron.setValue(cron_str),
            1000,
        );
    }

    /**
     * Update the output CRON string for the selected periods
     */
    public updateCronString() {
        if (this.form && this.form.controls.cron) {
            const hour =
                (this.cron_hour % 12) +
                (this.cron_hour_period === 'AM' ? 0 : 12);
            const minute = this.cron_minute % 60;
            const day_of_week = this.days_of_week.indexOf(this.cron_day);
            const day_of_month = this.cron_date;
            const month = this.months_of_year.indexOf(this.cron_month);
            let cron_str = '* * * * *';
            switch (this.cron_period) {
                case 'minute':
                    cron_str = minute ? `*/${minute} * * * *` : '* * * * *';
                    break;
                case 'hour':
                    cron_str = hour
                        ? `${minute} */${hour} * * *`
                        : `${minute} * * * *`;
                    break;
                case 'day':
                    cron_str = `${minute} ${hour} * * *`;
                    break;
                case 'week':
                    cron_str = `${minute} ${hour} * * ${day_of_week}`;
                    break;
                case 'month':
                    cron_str = `${minute} ${hour} ${day_of_month} * *`;
                    break;
                case 'year':
                    cron_str = `${minute} ${hour} ${day_of_month} ${month} *`;
                    break;
            }
            // const cron_str = current_cron.build();
            this.form.controls.cron.setValue(cron_str);
        }
    }

    private loadCronTab(cron_tab: string): void {
        this.cron_string = cron_tab;
        if (
            this.cron_string.includes('-') ||
            this.cron_string.includes('/') ||
            this.cron_string.includes(',')
        ) {
            this.cron_period = 'custom';
            return;
        }
        const [minute, hour, day, month, weekday] = cron_tab.split(' ');
        this.cron_minute = +minute || 0;
        this.cron_hour = +hour || 0;
        this.cron_day = +weekday || 0;
        this.cron_date = +hour || 1;
        this.cron_month = +month - 1;
        this.cron_period = 'minute';
        if (month !== '*') {
            this.cron_period = 'month';
        } else if (weekday !== '*') {
            this.cron_period = 'week';
        } else if (day !== '*') {
            this.cron_period = 'day';
        } else if (hour !== '*') {
            this.cron_period = 'hour';
        }
        this.cron_hour_period = this.cron_hour > 12 ? 'PM' : 'AM';
        // const cron_str = new CronBuilder(cron_tab);
        // this.cron_minute =
        //     cron_str.get('minute') === '*'
        //         ? this.cron_minute
        //         : +cron_str.get('minute');
        // this.cron_hour =
        //     cron_str.get('hour') === '*'
        //         ? this.cron_minute
        //         : +cron_str.get('hour');
        // if (this.cron_hour > 12) {
        //     this.cron_hour = this.cron_hour % 12;
        //     this.cron_hour_period = 'PM';
        // } else {
        //     this.cron_hour_period = 'AM';
        // }
        // this.cron_day =
        //     cron_str.get('dayOfTheWeek') === '*'
        //         ? this.cron_day
        //         : this.days_of_week[+cron_str.get('dayOfTheWeek')];
        // this.cron_date =
        //     cron_str.get('dayOfTheMonth') === '*'
        //         ? this.cron_date
        //         : +cron_str.get('dayOfTheMonth');
        // this.cron_month =
        //     cron_str.get('month') === '*'
        //         ? this.cron_month
        //         : this.months_of_year[+cron_str.get('month') - 1];
        // /** Set the cron period */
        // if (cron_str.get('month') !== '*') {
        //     this.cron_period = 'year';
        // } else if (cron_str.get('dayOfTheMonth') !== '*') {
        //     this.cron_period = 'month';
        // } else if (cron_str.get('dayOfTheWeek') !== '*') {
        //     this.cron_period = 'week';
        // } else if (cron_str.get('hour') !== '*') {
        //     this.cron_period = 'day';
        // } else if (cron_str.get('minute') !== '*') {
        //     this.cron_period = 'hour';
        // } else {
        //     this.cron_period = 'minute';
        // }
    }
}

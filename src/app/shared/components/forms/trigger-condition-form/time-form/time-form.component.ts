import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Identity } from 'src/app/shared/utilities/types.utilities';
import { numberToPosition } from 'src/app/shared/utilities/general.utilities';

import * as dayjs from 'dayjs';
import * as cron from 'cron-builder';

@Component({
    selector: 'trigger-condition-time-form',
    templateUrl: './time-form.component.html',
    styleUrls: ['./time-form.component.scss']
})
export class TriggerConditionTimeFormComponent implements OnChanges {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** List of available periods for scheduled repetition */
    public repeat_period: Identity[] = [
        { id: 'minute', name: 'Minute' },
        { id: 'hour', name: 'Hour' },
        { id: 'day', name: 'Day' },
        { id: 'week', name: 'Week' },
        { id: 'month', name: 'Month' },
        { id: 'year', name: 'Year' }
    ];
    /** Whether condition is a cron(recurring) job */
    public is_cron: boolean;
    /** The period which the user selects the recurrence */
    public cron_period: 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year' = 'minute';

    public minutes_in_hour = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    public hours_in_day = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    public days_of_week = Array(7)
        .fill(0)
        .map((_, index) =>
            dayjs()
                .day(index)
                .format('ddd')
        );
    public days_of_month: Identity[] = Array(31)
        .fill(0)
        .map((_, index) => ({ id: index + 1, name: `${numberToPosition(index + 1)}` }));
    public months_of_year = Array(12)
        .fill(0)
        .map((_, index) =>
            dayjs()
                .month(index)
                .format('MMM')
        );
    /** Minute of the hour to recurr on */
    public cron_minute: number = 0;
    /** Hour of the day to recurr on */
    public cron_hour: number = 0;
    /** Hour of the day to recurr on */
    public cron_hour_period: string = 'AM';
    /** Hour of the day to recurr on */
    public cron_day: string = this.days_of_week[0];
    /** Hour of the day to recurr on */
    public cron_date: number = 1;
    /** Hour of the day to recurr on */
    public cron_month: string = this.months_of_year[0];

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.form && this.form) {
            this.is_cron = this.form.controls.time_type.value === 'cron';
            if (this.is_cron) {
                this.loadCronTab(this.form.controls.cron.value);
            }
        }
    }

    /**
     * Update the output CRON string for the selected periods
     */
    public updateCronString() {
        if (this.form && this.form.controls.cron) {
            const current_cron = new cron();
            const hour = (this.cron_hour % 12) + (this.cron_hour_period === 'AM' ? 0 : 12);
            const day_of_week = this.days_of_week.indexOf(this.cron_day);
            const month = this.months_of_year.indexOf(this.cron_month);
            switch (this.cron_period) {
                case 'minute':
                    break;
                case 'hour':
                    current_cron.set('minute', [`${this.cron_minute}`]);
                    break;
                case 'day':
                    current_cron.set('minute', [`${this.cron_minute}`]);
                    current_cron.set('hour', [`${hour}`]);
                    break;
                case 'week':
                    current_cron.set('minute', [`${this.cron_minute}`]);
                    current_cron.set('hour', [`${hour}`]);
                    current_cron.set('dayOfTheWeek', [`${day_of_week + 1}`]);
                    break;
                case 'month':
                    current_cron.set('minute', [`${this.cron_minute}`]);
                    current_cron.set('hour', [`${hour}`]);
                    current_cron.set('dayOfTheMonth', [`${this.cron_date}`]);
                    break;
                case 'year':
                    current_cron.set('minute', [`${this.cron_minute}`]);
                    current_cron.set('hour', [`${hour}`]);
                    current_cron.set('dayOfTheMonth', [`${this.cron_date}`]);
                    current_cron.set('month', [`${month + 1}`]);
                    break;
            }
            const cron_str = current_cron.build();
            this.form.controls.cron.setValue(cron_str);
        }
    }

    private loadCronTab(cron_tab: string): void {
        const cron_str = new cron(cron_tab);
        this.cron_minute =
            cron_str.get('minute') === '*' ? this.cron_minute : +cron_str.get('minute');
        this.cron_hour = cron_str.get('hour') === '*' ? this.cron_minute : +cron_str.get('hour');
        if (this.cron_hour > 12) {
            this.cron_hour = this.cron_hour % 12;
            this.cron_hour_period = 'PM';
        } else {
            this.cron_hour_period = 'AM';
        }
        this.cron_day =
            cron_str.get('dayOfTheWeek') === '*'
                ? this.cron_day
                : this.days_of_week[+cron_str.get('dayOfTheWeek')];
        this.cron_date =
            cron_str.get('dayOfTheMonth') === '*' ? this.cron_date : +cron_str.get('dayOfTheMonth');
        this.cron_month =
            cron_str.get('month') === '*'
                ? this.cron_month
                : this.months_of_year[+cron_str.get('month') - 1];
        /** Set the cron period */
        if (cron_str.get('month') !== '*') {
            this.cron_period = 'year';
        } else if (cron_str.get('dayOfTheMonth') !== '*') {
            this.cron_period = 'month';
        } else if (cron_str.get('dayOfTheWeek') !== '*') {
            this.cron_period = 'week';
        } else if (cron_str.get('hour') !== '*') {
            this.cron_period = 'day';
        } else if (cron_str.get('minute') !== '*') {
            this.cron_period = 'hour';
        } else {
            this.cron_period = 'minute';
        }
    }
}

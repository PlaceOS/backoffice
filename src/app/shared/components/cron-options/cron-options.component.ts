import { Component, Input, OnInit } from '@angular/core';

import { BaseDirective } from '../../globals/base.directive';

const CRON_PERIOD: any[] = [
    { id: 'minute', name: 'Minutely', shorthand: 'm' },
    { id: 'hourly', name: 'Hourly', shorthand: 'H' },
    { id: 'daily', name: 'Daily', shorthand: 'D' },
    { id: 'weekdays', name: 'Weekdays', shorthand: 'WD' },
    { id: 'weekend', name: 'Weekends', shorthand: 'WE' },
    { id: 'weekly', name: 'Weekly', shorthand: 'WK' },
    { id: 'monthly', name: 'Monthly', shorthand: 'M' },
    { id: 'monthly', name: 'Yearly', shorthand: 'Y' }
];

@Component({
    selector: 'cron',
    templateUrl: './cron-options.template.html',
    styleUrls: ['./cron-options.styles.scss']
})
export class CronOptionsComponent extends BaseDirective implements OnInit {
    @Input() public cron: string;

    public model: any = {};

    public ngOnInit() {
        this.model.periods = CRON_PERIOD;
    }
}

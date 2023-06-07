import { Component, OnInit } from '@angular/core';
import { AsyncHandler } from '../common/base.class';

@Component({
    selector: 'clock',
    template: `
        <div class="rounded-full h-12 w-12 border-2 border-white relative">
            <div
                class="hand absolute bottom-1/2 left-1/2 bg-white h-3 w-1 rounded"
                [style.transform]="
                    'translateX(-50%) rotate(' + hour_angle + 'deg)'
                "
            ></div>
            <div
                class="hand absolute bottom-1/2 left-1/2 bg-white h-4 minute"
                [style.transform]="
                    'translateX(-50%) rotate(' + minute_angle + 'deg)'
                "
            ></div>
            <div
                class="hand absolute bottom-1/2 left-1/2 bg-white h-5 w-px"
                [style.transform]="
                    'translateX(-50%) rotate(' + second_angle + 'deg)'
                "
            ></div>
            <div
                class="absolute top-1/2 left-1/2 h-2 w-2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"
            ></div>
        </div>
    `,
    styles: [
        `
            .hand {
                transform-origin: 50% 100%;
            }

            .minute {
                width: 2px;
                border-radius: 1px;
            }
        `,
    ],
})
export class DashboardClockComponent extends AsyncHandler implements OnInit {
    /** Angle to display the hour hand of the clock at */
    public hour_angle: number;
    /** Angle to display the minute hand of the clock at */
    public minute_angle: number;
    /** Angle to display the seconds hand of the clock at */
    public second_angle: number;

    public ngOnInit() {
        this.updateTime();
        this.interval('time', () => this.updateTime(), 1000);
    }

    public updateTime() {
        const time = new Date();
        this.hour_angle =
            (((time.getHours() % 12) + time.getMinutes() / 60) / 12) * 360;
        this.minute_angle =
            ((time.getMinutes() + time.getSeconds() / 60) / 60) * 360;
        this.second_angle = (time.getSeconds() / 60) * 360;
    }
}

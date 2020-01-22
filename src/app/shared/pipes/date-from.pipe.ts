import { Pipe, PipeTransform } from '@angular/core';

import * as dayjs from 'dayjs';

@Pipe({
    name: 'dateFrom'
})
export class DateFromPipe implements PipeTransform {
    public transform(value: number): string {
        const now = dayjs();
        const date = dayjs(value);
        let diff = now.diff(date, 'm');
        const direction = diff < 0;
        diff = Math.abs(diff);
        if (diff < 1) { // Less than a minute
            return direction ? 'In less than a minute' : 'Less than a minute ago';
        } else if (diff === 1) { // 1 minute
            return direction ? 'In about 1 minute' : 'About a minute ago';
        } else if (diff < 60) { // Minutes
            return direction ? `In ${diff} minutes` : `${diff} minutes ago`;
        } else if (diff < 24 * 60) { // Hours
            const hours = Math.floor(diff / 60);
            return direction
                ? `In ${hours} hour${hours === 1 ? '' : 's'}`
                : `${hours} hour${hours === 1 ? '' : 's'} ago`;
        } else if (diff < 30 * 24 * 60) { // Days
            const days = Math.floor(diff / (24 * 60));
            return direction
                ? `In ${days} day${days === 1 ? '' : 's'}`
                : `${days} day${days === 1 ? '' : 's'} ago`;
        } else if (diff < 365 * 24 * 60) { // Months
            const months = Math.floor(diff / (30 * 24 * 60));
            return direction
                ? `In ${months} month${months === 1 ? '' : 's'}`
                : `${months} month${months === 1 ? '' : 's'} ago`;
        } else if (diff >= 365 * 24 * 60) { // Years
            const years = Math.floor(diff / (365 * 24 * 60));
            return direction
                ? `In ${years} year${years === 1 ? '' : 's'}`
                : `${years} year${years === 1 ? '' : 's'} ago`;
        }
        return 'Just now';
    }
}

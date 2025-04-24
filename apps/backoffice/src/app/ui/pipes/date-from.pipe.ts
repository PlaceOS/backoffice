import { Pipe, PipeTransform } from '@angular/core';
import { differenceInMinutes } from 'date-fns';
import { i18n } from '../../common/locale.service';

@Pipe({
    name: 'dateFrom',
    standalone: false,
})
export class DateFromPipe implements PipeTransform {
    public transform(date: number): string {
        const now = Date.now();
        let diff = differenceInMinutes(now, date);
        const direction = diff < 0;
        diff = Math.abs(diff);
        if (diff < 1) {
            // Less than a minute
            return direction
                ? i18n('COMMON.DATE_FROM_IN_LESS_MINUTE')
                : i18n('COMMON.DATE_FROM_LESS_MINUTE_AGO');
        } else if (diff === 1) {
            // 1 minute
            return direction
                ? i18n('COMMON.DATE_FROM_IN_ABOUT_MINUTE')
                : i18n('COMMON.DATE_FROM_ABOUT_MINUTE_AGO');
        } else if (diff < 60) {
            // Minutes
            return direction
                ? i18n('COMMON.DATE_FROM_IN_MINUTES', { minutes: diff })
                : i18n('COMMON.DATE_FROM_MINUTES_AGO', { minutes: diff });
        } else if (diff < 24 * 60) {
            // Hours
            const hours = Math.floor(diff / 60);
            return direction
                ? i18n('COMMON.DATE_FROM_IN_HOURS', { hours })
                : i18n('COMMON.DATE_FROM_HOURS_AGO', { hours });
        } else if (diff < 30 * 24 * 60) {
            // Days
            const days = Math.floor(diff / (24 * 60));
            return direction
                ? i18n('COMMON.DATE_FROM_IN_DAYS', { days })
                : i18n('COMMON.DATE_FROM_DAYS_AGO', { days });
        } else if (diff < 365 * 24 * 60) {
            // Months
            const months = Math.floor(diff / (30 * 24 * 60));
            return direction
                ? i18n('COMMON.DATE_FROM_IN_MONTHS', { months })
                : i18n('COMMON.DATE_FROM_MONTHS_AGO', { months });
        } else if (diff >= 365 * 24 * 60) {
            // Years
            const years = Math.floor(diff / (365 * 24 * 60));
            return direction
                ? i18n('COMMON.DATE_FROM_IN_YEARS', { years })
                : i18n('COMMON.DATE_FROM_YEARS_AGO', { years });
        }
        return i18n('COMMON.DATE_JUST_NOW');
    }
}

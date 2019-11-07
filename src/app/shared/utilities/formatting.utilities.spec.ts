import { formatAttendeesWithHost, formatAttendees, formatDate, formatTime, formatPeriodWithDuration, formatPeriod, formatRecurrence, formatDuration } from "./formatting.utilities";

import * as dayjs from 'dayjs';
import { humaniseDuration } from "./general.utilities";

describe('Formatting Utilites', () => {

    it('formatDate should return human readable date', () => {
        let date = dayjs().startOf('m');
        expect(formatDate(date.valueOf())).toBe(date.format('DD MMMM YYYY'));
        date = date.add(Math.floor(Math.random() * 480) * 5, 'm');
        expect(formatDate(date.valueOf())).toBe(date.format('DD MMMM YYYY'));
    });

    it('formatTime should return human readable time', () => {
        let date = dayjs().startOf('m');
        expect(formatTime(date.valueOf())).toBe(date.format('h:mm A'));
        date = date.add(Math.floor(Math.random() * 240) * 5, 'm');
        expect(formatTime(date.valueOf())).toBe(date.format('h:mm A'));
    });

    it('formatPeriodWithDuration should return a function', () => {
        const fn = formatPeriodWithDuration(60)
        expect(fn instanceof Function).toBeTruthy();
        expect(typeof fn(dayjs().format('HH:mm'))).toBe('string');
    });

    it('formatPeriod should return human readable period', () => {
        let date = dayjs().startOf('m');
        let end = date.add(60, 'm');
        const period_string = formatPeriod(date.format('HH:mm'), 60);
        expect(period_string).toContain(date.format('h:mm A'));
        expect(period_string).toContain(end.format('h:mm A'));
        expect(period_string).toContain(humaniseDuration(60));
        const duration = Math.floor(Math.random() * 24 + 6) * 5;
        date = date.add(duration, 'm');
        end = date.add(duration, 'm');
        const another_period_string = formatPeriod(date.format('HH:mm'), duration);
        expect(another_period_string).toContain(date.format('h:mm A'));
        expect(another_period_string).toContain(end.format('h:mm A'));
        expect(another_period_string).toContain(humaniseDuration(duration));
    });

    it('formatDuration should return human readable duration', () => {
        expect(formatDuration(60)).toBe('1 hour');
        const duration = Math.floor(Math.random() * 24) * 5;
        expect(formatDuration(duration)).toBe(humaniseDuration(duration));
    });

    it('formatRecurrence should return human readable recurrence string', () => {
        expect(formatRecurrence({ period: 0, end: 0 })).toBe('No recurrence');
        expect(formatRecurrence({ period: 1, end: 0 })).toBe('Daily forever');
        expect(formatRecurrence({ period: 6, end: 0 })).toBe('No recurrence');
        expect(formatRecurrence({ period: 'Test', end: 0 })).toContain('Test');
        const date = dayjs().add(Math.floor(Math.random() * 60), 'd');
        expect(formatRecurrence({ period: 1, end: date.valueOf() })).toBe(`Daily until ${date.format('DD MMM YYYY')}`);
    });
});
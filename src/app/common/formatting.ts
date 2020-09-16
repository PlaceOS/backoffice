
import { PlaceUser } from '@placeos/ts-client';

import { formatDuration as fDuration } from 'date-fns';

import * as dayjs from 'dayjs';

// attendees: FormFormatters.attendees(user),
// date: FormFormatters.date,
// room: FormFormatters.space,
// recurrence: FormFormatters.recurrence

/**
 * Get function to create formatted string for a list of users with a host
 * @param host Host user
 */
export function formatAttendeesWithHost(host: PlaceUser): (_: PlaceUser[]) => string {
    return (l) => formatAttendees(l, host);
}

/**
 * Create formatted string from a list of users
 * @param list List of users
 * @param host Owner of the list of users
 */
export function formatAttendees(list: PlaceUser[], host?: PlaceUser) {
    let attendee_str: string = '';
    if (list && list.length > 0) {
        const users = [...list];
        if (host) {
            const result = users.find(a => a.email === host.email);
            if (result) {
                users.splice(users.indexOf(result), 1);
            }
        }
        const length = users.length + (host ? 1 : 0);
        attendee_str = `${length} Attendee${length === 1 ? '' : 's'}; ${host ? host.name : ''}`;
        for (const item of users) {
            if (attendee_str) {
                attendee_str += ', ';
            }
            attendee_str += item.name;
        }
        attendee_str = attendee_str.replace('; ,', ';');
    }
    return attendee_str;
}

/**
 * Create date formatted string for given date
 * @param date Date to format
 */
export function formatDate(date: number) {
    return dayjs(date).format('DD MMMM YYYY');
}

/**
 * Create time formatted string for given date
 * @param date Date to format
 */
export function formatTime(date: number) {
    return dayjs(date).format('h:mm A');
}

/**
 * Create formatted string for a period of given duration
 * @param duration Period duration in minutes
 */
export function formatPeriodWithDuration(duration: number) {
    return (t) => formatPeriod(t, duration);
}

/**
 * Create formatted string for a period of given duration
 * @param timestamp Start hours and minutes of the period in the format `HH:mm`
 * @param duration Period duration in minutes
 */
export function formatPeriod(timestamp: string, duration: number = 60) {
    const parts = timestamp.split(':');
    const date = dayjs().hour(+parts[0]).minute(+parts[1]);
    return `${date.format('h:mm A')} - ${date.add(duration, 'm').format('h:mm A')} (${fDuration({ minutes: duration })})`;
}

/**
 * Create formatted human readable string for a given duration
 * @param duration Duration in minutes
 */
export function formatDuration(duration: number) {
    return fDuration({ minutes: duration });
}

/** Human readable names of applicable recurrence periods */
export const RECURRENCE_PERIODS: string[] = ['None', 'Daily', 'Weekly', 'Monthly', 'Yearly'];

/**
 * Create human readable string for recurrence metadata
 * @param value
 */
export function formatRecurrence(value: { period: string | number, end: number }) {
    if (!value || !value.period || value.period as any >= RECURRENCE_PERIODS.length) {
        return 'No recurrence';
    }
    const period = typeof value.period === 'string' ? value.period : RECURRENCE_PERIODS[value.period];
    const end = value.end ? `until ${dayjs(value.end).format('DD MMM YYYY')}` : 'forever';
    return `${period} ${end}`;
}

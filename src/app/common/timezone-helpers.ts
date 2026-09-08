import { padLength } from './general';

const TIMZONE_OFFSET_STRINGS = {};

export function getTimezoneOffsetString(tz: string) {
    if (TIMZONE_OFFSET_STRINGS[tz]) return TIMZONE_OFFSET_STRINGS[tz];
    const offset = getTimezoneOffsetInMinutes(tz);
    const hours = Math.floor(Math.abs(offset) / 60);
    const minutes = Math.abs(offset) % 60;
    const output = `${offset > 0 ? '+' : '-'}${padLength(hours, 2)}${padLength(
        minutes,
        2,
    )}`;
    TIMZONE_OFFSET_STRINGS[tz] = output;
    return output;
}

export function getTimezoneOffsetInMinutes(timeZone, date = new Date()) {
    const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour12: false,
        timeZoneName: 'short',
    };
    const formatter = new Intl.DateTimeFormat([], options);
    const parts = formatter.formatToParts(date);

    // Find the timeZoneName part which contains the GMT offset
    const tzOffsetPart = parts.find((part) => part.type === 'timeZoneName');
    const tzOffsetString = tzOffsetPart ? tzOffsetPart.value : 'GMT';

    // Match the offset from the string (e.g., "GMT+0530")
    const offsetMatch = tzOffsetString.match(/GMT([+-])(\d{1,2})(\d{2})?/);
    if (!offsetMatch) {
        return 0; // If no match, assume UTC (offset 0)
    }

    const sign = offsetMatch[1] === '+' ? 1 : -1;
    const hours = parseInt(offsetMatch[2], 10);
    const minutes = offsetMatch[3] ? parseInt(offsetMatch[3], 10) : 0;

    return sign * (hours * 60 + minutes);
}

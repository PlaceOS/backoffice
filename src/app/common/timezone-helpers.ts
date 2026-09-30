import { padLength } from './general';

const TIMZONE_OFFSET_STRINGS = {};

export function getTimezoneOffsetString(tz: string) {
    if (TIMZONE_OFFSET_STRINGS[tz]) return TIMZONE_OFFSET_STRINGS[tz];
    const offset = getTimezoneOffsetInMinutes(tz);
    const hours = Math.floor(Math.abs(offset) / 60);
    const minutes = Math.abs(offset) % 60;
    const output = `${offset >= 0 ? '+' : '-'}${padLength(hours, 2)}${padLength(
        minutes,
        2,
    )}`;
    TIMZONE_OFFSET_STRINGS[tz] = output;
    return output;
}

/**
 * Offset of the given timezone from UTC in minutes, at the given date.
 * Positive values are ahead of UTC, e.g. `Asia/Kolkata` is `330`.
 */
export function getTimezoneOffsetInMinutes(timeZone, date = new Date()) {
    // `longOffset` always gives a numeric offset (e.g. "GMT+05:30"), where
    // `short` gives an abbreviation (e.g. "AEST") for many zones.
    // A fixed locale keeps the digits and format predictable.
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone,
        timeZoneName: 'longOffset',
    });
    const tz_offset_part = formatter
        .formatToParts(date)
        .find((part) => part.type === 'timeZoneName');
    // UTC is given as plain "GMT", which does not match
    const offset_match = tz_offset_part?.value.match(
        /GMT([+-])(\d{2}):(\d{2})/,
    );
    if (!offset_match) return 0;

    const sign = offset_match[1] === '+' ? 1 : -1;
    const hours = parseInt(offset_match[2], 10);
    const minutes = parseInt(offset_match[3], 10);

    return sign * (hours * 60 + minutes);
}

import { AbstractControl, Validators } from '@angular/forms';

import * as dayjs from 'dayjs';
import { EngineUser } from '@acaengine/ts-client';

const HAS_ERROR = true;

/**
 * Check that control value is a date that is the same or after from date
 * @param control Angular form control
 * @param is_from Comparison date(ms from UTC epoch). Defaults to the current time
 */
export function validateDate(control: AbstractControl, is_from: number = dayjs().valueOf()) {
    const from = dayjs(is_from);
    const date = dayjs(control.value || undefined);
    return date.isBefore(from, 'd') ? { date: HAS_ERROR, message: 'Booking needs to be made in the future' } : null;
}

/**
 * Build start time validation function
 * @param date Date of the time to check
 * @param is_from Comparison date(ms from UTC epoch). Defaults to the current time
 */
export function buildValidateStartTime(date: number, is_from: number = dayjs().valueOf()) {
    return (c) => validateStartTime(c, date, is_from);
}

/**
 * Check that control value time is after the comparison date time
 * @param control Angular form control
 * @param date Date of the time to check
 * @param is_from Comparison date(ms from UTC epoch). Defaults to the current time
 */
export function validateStartTime(control: AbstractControl, date: number, is_from: number = dayjs().valueOf()) {
    const now = dayjs(is_from);
    const parts = control.value.split(':');
    const date_obj = dayjs(date).hour(+parts[0]).minute(+parts[1]);
    return date_obj.isBefore(now, 'm') ? { start: HAS_ERROR, message: 'Booking time needs to be made in the future' } : null;
}

export function buildValidateDuration(min: number = 30, max: number = 240) {
    return (c) => validateDuration(c, min, max);
}

export function validateDuration(control: AbstractControl, min: number = 30, max: number = 240) {
    if (control.value < (min || 30)) {
        return { duration: HAS_ERROR, message: `Minimum booking duration is ${min} minute${min === 1 ? 's' : ''}` };
    } else if (control.value > (max || 480)) {
        return { length: HAS_ERROR, message: `Maximum booking duration is ${max} minute${max === 1 ? 's' : ''}` };
    }
    return null;
}

export function buildValidateAttendees(host: EngineUser, min: number = 0) {
    return (c) => validateAttendees(c, host, min);
}

export function validateAttendees(control: AbstractControl, host: EngineUser, min: number = 0) {
    if (!control || !(control.value instanceof Array)) {
        return min > 0
            ? { invalid: true, message: `Minimum of ${min} attendee${min === 1 ? ' is' : 's are'} required other than you` }
            : null;
    }
    const list: EngineUser[] = control.value;
    if (host) {
        const result = list.find(a => a.email === host.email);
        if (result) { list.splice(list.indexOf(result), 1); }
    }
    return list.length >= min ? null : {
        count: true,
        message: `Minimum of ${min} attendee${min === 1 ? ' is' : 's are'} required other than you`
    };
}

/** Build validator for checking a number range */
export function buildValidateRange(min: number = 0, max: number = 100) {
    return (c) => validateRange(c, min, max);
}

/** Validate form control value is within number range */
export function validateRange(control: AbstractControl, min: number, max: number) {
    return control && control.value && control.value >= min && control.value <= max ? {
        range: true,
        message: `Value needs to be a number between ${min} and ${max}`
    }: null;
}

const IP_CHECK = Validators.pattern(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g);
/**
 * Validate that form control value is an IP address
 * @param control
 */
export function validateIpAddress(control: AbstractControl) {
    return IP_CHECK(control);
}

const URI_CHECK = Validators.pattern(/^([a-z][a-z0-9+.-]+):(\/\/([^@]+@)?([a-z0-9.\-_~]+)(:\d+)?)?((?:[a-z0-9-._~]|%[a-f0-9]|[!$&'()*+,;=:@])+(?:\/(?:[a-z0-9-._~]|%[a-f0-9]|[!$&'()*+,;=:@])*)*|(?:\/(?:[a-z0-9-._~]|%[a-f0-9]|[!$&'()*+,;=:@])+)*)?(\?(?:[a-z0-9-._~]|%[a-f0-9]|[!$&'()*+,;=:@]|[/?])+)?(\#(?:[a-z0-9-._~]|%[a-f0-9]|[!$&'()*+,;=:@]|[/?])+)?$/gi);
/**
 * Validate that form control value is a URI
 * @param control
 */
export function validateURI(control: AbstractControl) {
    return URI_CHECK(control);
}

const URL_CHECK = Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g);
/**
 * Validate that form control value is a URI
 * @param control
 */
export function validateURL(control: AbstractControl) {
    return URL_CHECK(control);
}

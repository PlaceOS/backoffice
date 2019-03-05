
import { AbstractControl } from '@angular/forms';
import { Utils } from './utility.class';

export class FormValidators {
    constructor() {
        throw new Error('No constructor for this class');
    }

    public static url(control: AbstractControl) {
        const error = !Utils.validate('url', control.value);
        return error ? { url: true, message: `Needs to be a valid URL` } : null;
    }

    public static uri(control: AbstractControl) {
        const error = !Utils.validate('uri', control.value);
        return error ? { url: true, message: `Needs to be a valid URI` } : null;
    }

    public static ip(control: AbstractControl) {
        const error = !Utils.validate('ip', control.value);
        return error ? { url: true, message: `Needs to be a valid IP address` } : null;
    }

    public static integer(control: AbstractControl) {
        const error = !Utils.validate('integer', control.value);
        return error ? { url: true, message: `Needs to be a valid whole number` } : null;
    }

    public static number(control: AbstractControl) {
        const error = !Utils.validate('number', control.value);
        return error ? { url: true, message: `Needs to be a valid number` } : null;
    }

    public static numberRange(min: number, max: number) {
        return (control: AbstractControl) => {
            const error = !Utils.validate('number', control.value) || control.value < min || control.value > max;
            return error ? { url: true, message: `Needs to be a valid number between ${min} and ${max}` } : null;
        };
    }
}

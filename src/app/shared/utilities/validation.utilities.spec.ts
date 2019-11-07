
import * as dayjs from 'dayjs';
import { validateDate, buildValidateStartTime, validateStartTime, buildValidateDuration, validateDuration, buildValidateAttendees } from './validation.utilities';

describe('Validation Utilities', () => {
    it('validateDate should properly validate the given date', () => {
        const control: any = { value: dayjs().add(1, 'm').valueOf() };
        expect(validateDate(control)).toBeNull();
        expect(validateDate({} as any)).toBeNull();
        control.value = dayjs().subtract(1, 'd').valueOf();
        expect(validateDate(control)).toBeTruthy();
    });

    it('buildValidateStartTime should return a validator function', () => {
        const date = dayjs();
        const fn = buildValidateStartTime(date.valueOf());
        expect(fn instanceof Function).toBeTruthy();
        expect(fn({ value: date.format('HH:mm') })).toBeNull();
    });

    it('validateStartTime should properly validate the given time', () => {
        const date = dayjs().endOf('d');
        const control: any = { value: date.format('HH:mm') };
        expect(validateStartTime(control, date.valueOf())).toBeNull();
        control.value = date.startOf('d').format('HH:mm');
        expect(validateStartTime(control, date.valueOf())).toBeTruthy();
    });

    it('buildValidateDuration should return a validator function', () => {
        const date = dayjs();
        const fn = buildValidateDuration(15, 120);
        expect(fn instanceof Function).toBeTruthy();
        expect(fn({ value: 30 })).toBeNull();
    });

    it('validateDuration should properly validate the given duration', () => {
        expect(validateDuration({ value: 60 } as any, 15, 120)).toBeNull();
        expect(validateDuration({ value: 60 } as any, 0, 0)).toBeNull();
        expect(validateDuration({ value: 2 } as any, 1, 1)).toBeTruthy();
        expect(validateDuration({ value: 0 } as any, 1, 1)).toBeTruthy();
        expect(validateDuration({ value: 10 } as any, 15, 120)).toBeTruthy();
        expect(validateDuration({ value: 200 } as any, 15, 120)).toBeTruthy();
        expect(validateDuration({ } as any, 15, 120)).toBeNull();
    });
});

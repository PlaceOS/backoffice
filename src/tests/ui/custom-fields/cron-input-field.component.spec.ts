import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, expect, it, vi } from 'vitest';
import { CronInputFieldComponent } from '../../../app/ui/custom-fields/cron-input-field.component';

const SEGMENTS = ['minute', 'hour', 'day', 'month', 'day_of_week'] as const;

describe('CronInputFieldComponent', () => {
    it.each([
        ['minute', '60', '59'],
        ['hour', '24', '23'],
        ['day', '0', '1'],
        ['day', '32', '31'],
        ['month', '0', '1'],
        ['month', '13', '12'],
        ['day_of_week', '7', '6'],
    ] as const)(
        'sends only a valid %s value (%s rejected, %s sent)',
        (segment, invalid, valid) => {
            TestBed.configureTestingModule({
                providers: [provideZonelessChangeDetection()],
            });
            const field = TestBed.runInInjectionContext(
                () => new CronInputFieldComponent(),
            );
            const changed = vi.fn();
            field.registerOnChange(changed);
            TestBed.tick();
            changed.mockClear();

            field.formModel.update((model) => ({
                ...model,
                [segment]: invalid,
            }));
            TestBed.tick();
            expect(changed).not.toHaveBeenCalled();

            field.formModel.update((model) => ({ ...model, [segment]: valid }));
            TestBed.tick();
            expect(changed).toHaveBeenCalledExactlyOnceWith(
                SEGMENTS.map((key) => (key === segment ? valid : '*')).join(
                    ' ',
                ),
            );
        },
    );
});

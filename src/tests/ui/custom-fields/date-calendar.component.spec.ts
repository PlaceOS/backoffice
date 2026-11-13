import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { describe, expect, it, vi } from 'vitest';
import { DateCalendarComponent } from '../../../app/ui/custom-fields/date-calendar.component';

vi.mock('@placeos/ts-client', () =>
    vi.importActual('@placeos/ts-client/dist/index.es.js'),
);

const FROM = new Date(2026, 0, 10).valueOf();
const TO = new Date(2026, 0, 20).valueOf();

describe('DateCalendarComponent', () => {
    it('accepts dates from the start up to but not including the end', () => {
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                { provide: ComponentFixtureAutoDetect, useValue: false },
            ],
        });
        const fixture = TestBed.createComponent(DateCalendarComponent);
        fixture.componentRef.setInput('from', FROM);
        fixture.componentRef.setInput('to', TO);
        const calendar = fixture.componentInstance;
        const changed = vi.fn();
        calendar.registerOnChange(changed);

        calendar.setValue(FROM - 1);
        calendar.setValue(TO);
        expect(changed).not.toHaveBeenCalled();
        expect(calendar.active_date()).toBe(calendar.today);

        calendar.setValue(FROM);
        calendar.setValue(TO - 1);
        expect(changed.mock.calls).toEqual([[FROM], [TO - 1]]);
        expect(calendar.active_date()).toBe(new Date(2026, 0, 19).valueOf());
    });
});

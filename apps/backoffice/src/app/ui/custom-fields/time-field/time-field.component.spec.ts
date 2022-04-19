import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { Component, SimpleChange } from '@angular/core';

import { TimeFieldComponent } from './time-field.component';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { addMinutes, format, setMinutes, startOfDay } from 'date-fns';

@Component({
    selector: 'app-icon',
    template: '',
    inputs: ['icon']
})
class MockAppIconComponent { }

describe('TimeFieldComponent', () => {
    let component: TimeFieldComponent;
    let fixture: ComponentFixture<TimeFieldComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TimeFieldComponent, MockAppIconComponent],
            imports: [FormsModule, MatFormFieldModule, MatSelectModule, NoopAnimationsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TimeFieldComponent);
        component = fixture.componentInstance;
        component.no_past_times = false;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should allow the user to select a time', async () => {
        const el: HTMLElement = fixture.debugElement.nativeElement;
        const icon_el = el.querySelector('.icon');
        icon_el.dispatchEvent(new Event('tapped'));
        fixture.detectChanges();
        await fixture.whenRenderingDone();
        setTimeout(async () => {
            fixture.detectChanges();
            await fixture.whenRenderingDone();
            const option_elements = document.querySelectorAll('mat-option');
            expect(option_elements.length).toBeGreaterThan(0);
            option_elements[0].dispatchEvent(new Event('click'));
            fixture.detectChanges();
            expect(component.time).toBe(component.time_options[0].value);
        }, 300);
    });

    it('should allow the user to manually input a time', () => {
        const el: HTMLElement = fixture.debugElement.nativeElement;
        const input_el = el.querySelector('input');
        input_el.value = '00:00';
        input_el.dispatchEvent(new Event('input'));
        expect(component.time).toBe('00:00');
    });

    it('should allow customising the step between time options', () => {
        component.step = 5;
        component.ngOnChanges({ no_past_times: new SimpleChange(15, 5, false) });
        fixture.detectChanges();
        expect(component._time_options[1].value).toBe('00:05');
        const step = Math.floor(Math.random() * 4 + 1) * 5;
        component.step = step;
        component.ngOnChanges({ no_past_times: new SimpleChange(5, step, false) });
        fixture.detectChanges();
        expect(component._time_options[1].value).toBe(format(addMinutes(startOfDay(Date.now()), step), 'HH:mm'));
    });

    it('should allow the current time as an option', () => {
        let date = new Date();
        date = setMinutes(date, Math.ceil(date.getMinutes() / 5) * 5);
        const date_str = format(date, 'HH:mm');
        const option = component.time_options.find(block => block.value === date_str);
        expect(option).toBeTruthy();
    });

    it('should allow preventing past times from being selected', () => {
        component.no_past_times = true;
        component.ngOnChanges({ no_past_times: new SimpleChange(false, true, false) });
        fixture.detectChanges();
        const date = Date.now();
        const date_str = format(date, 'HH:mm');
        expect(date_str.localeCompare(component.time_options[0].value)).toBeLessThanOrEqual(0);
    });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFieldComponent } from './date-field.component';
import { Component } from '@angular/core';

import * as dayjs from 'dayjs';
import { FormsModule } from '@angular/forms';
import { ADatePickerModule } from '@acaprojects/ngx-date-picker';

@Component({
    selector: 'app-icon',
    template: '',
    inputs: ['icon']
})
class MockAppIconComponent { }


describe('DateFieldComponent', () => {
    let component: DateFieldComponent;
    let fixture: ComponentFixture<DateFieldComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DateFieldComponent, MockAppIconComponent],
            imports: [FormsModule, ADatePickerModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DateFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should allow user to select date from calendar', () => {
        const el: HTMLElement = fixture.debugElement.nativeElement;
        const field_element = el.querySelector('.display');
        expect(field_element).toBeTruthy();
        expect(el.querySelector('a-date-picker')).toBeFalsy();
        field_element.dispatchEvent(new Event('tapped'));
        fixture.detectChanges();
        expect(el.querySelector('a-date-picker')).toBeTruthy();
        field_element.dispatchEvent(new Event('tapped'));
        fixture.detectChanges();
        expect(el.querySelector('a-date-picker')).toBeFalsy();
    });

    it('should handler external changes to the date selected', () => {
        const formatted_date = dayjs().format('DD MMM YYYY');
        const el: HTMLElement = fixture.debugElement.nativeElement;
        const field_element = el.querySelector('.display');
        expect(field_element).toBeTruthy();
        expect(field_element.textContent).toBe(formatted_date);
        const new_date = dayjs().add(Math.floor(Math.random() * 10 + 2), 'd');
        component.writeValue(new_date.valueOf());
        fixture.detectChanges();
        expect(field_element.textContent).toBe(new_date.format('DD MMM YYYY'));
    });
});

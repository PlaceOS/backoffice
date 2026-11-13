import { Component, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { FormFieldComponent } from '../../../app/ui/controls/form-field.component';

@Component({
    template: `
        <app-form-field>
            <input aria-describedby="note" />
            <div error>Name is required</div>
        </app-form-field>
    `,
    imports: [FormFieldComponent],
})
class HostComponent {}

describe('FormFieldComponent', () => {
    it('describes the control by its error and hint, keeping other ids', async () => {
        TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection()],
        });
        const fixture = TestBed.createComponent(HostComponent);
        await fixture.whenStable();
        const element: HTMLElement = fixture.nativeElement;
        const [note, subscript] = element
            .querySelector('input')
            .getAttribute('aria-describedby')
            .split(' ');
        expect(note).toBe('note');
        expect(element.querySelector(`#${subscript}`).textContent).toContain(
            'Name is required',
        );
    });
});

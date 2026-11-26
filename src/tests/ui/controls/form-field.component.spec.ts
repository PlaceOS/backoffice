import {
    Component,
    provideZonelessChangeDetection,
    signal,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { form, FormField, required } from '@angular/forms/signals';
import { describe, expect, it } from 'vitest';
import { ChipListComponent } from '../../../app/ui/controls/chip-list.component';
import { FormFieldComponent } from '../../../app/ui/controls/form-field.component';

@Component({
    template: `
        <app-form-field>
            <app-chip-list editable [value]="['a', 'b']" />
            <div hint>One item for each line</div>
        </app-form-field>
    `,
    imports: [FormFieldComponent, ChipListComponent],
})
class ChipHostComponent {}

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

@Component({
    template: `
        <app-form-field>
            <input [formField]="form.name" />
        </app-form-field>
    `,
    imports: [FormFieldComponent, FormField],
})
class SignalFormHostComponent {
    public readonly model = signal({ name: '' });
    public readonly form = form(this.model, (path) => required(path.name));
}

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

    it('shows the invalid state only while a touched control is invalid', async () => {
        TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection()],
        });
        const fixture = TestBed.createComponent(SignalFormHostComponent);
        await fixture.whenStable();
        const field: HTMLElement =
            fixture.nativeElement.querySelector('app-form-field');
        const input: HTMLInputElement = field.querySelector('input');
        expect(field.classList).not.toContain('field-invalid');

        input.dispatchEvent(new Event('blur'));
        await fixture.whenStable();
        expect(field.classList).toContain('field-invalid');

        input.value = 'Ada';
        input.dispatchEvent(new Event('input'));
        await fixture.whenStable();
        expect(field.classList).not.toContain('field-invalid');
    });

    it('describes the chip text input, not an inline chip editor', async () => {
        TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection()],
        });
        const fixture = TestBed.createComponent(ChipHostComponent);
        await fixture.whenStable();
        const element: HTMLElement = fixture.nativeElement;
        element.querySelector<HTMLElement>('.chip-action').click();
        await fixture.whenStable();
        expect(
            element
                .querySelector('.chip-edit')
                .hasAttribute('aria-describedby'),
        ).toBe(false);
        expect(
            element
                .querySelector('.chip-input')
                .getAttribute('aria-describedby'),
        ).toMatch(/app-form-field-subscript/);
    });
});

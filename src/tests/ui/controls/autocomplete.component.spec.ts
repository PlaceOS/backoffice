import { Component, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { describe, expect, it, vi } from 'vitest';
import {
    AutocompleteComponent,
    AutocompleteTriggerDirective,
} from '../../../app/ui/controls/autocomplete.component';
import { OptionComponent } from '../../../app/ui/controls/option.component';

vi.mock('@placeos/ts-client', () =>
    vi.importActual('@placeos/ts-client/dist/index.es.js'),
);

@Component({
    template: `
        <input [(ngModel)]="value" [appAutocomplete]="auto" />
        <app-autocomplete #auto="appAutocomplete">
            <app-option [value]="10">Ten</app-option>
            <app-option [value]="20">Twenty</app-option>
        </app-autocomplete>
    `,
    imports: [
        FormsModule,
        AutocompleteComponent,
        AutocompleteTriggerDirective,
        OptionComponent,
    ],
})
class HostComponent {
    public value = '';
}

describe('AutocompleteComponent', () => {
    it('writes a suggestion picked with the keyboard into the input', async () => {
        TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection()],
        });
        const fixture = TestBed.createComponent(HostComponent);
        await fixture.whenStable();
        const input: HTMLInputElement =
            fixture.nativeElement.querySelector('input');
        // The CDK key manager reads the key code
        const press = async (key: string, keyCode: number) => {
            input.dispatchEvent(new KeyboardEvent('keydown', { key, keyCode }));
            await fixture.whenStable();
        };

        await press('ArrowDown', 40);
        await press('Enter', 13);

        expect(input.value).toBe('10');
        expect(fixture.componentInstance.value).toBe('10');
        expect(input.getAttribute('aria-expanded')).toBe('false');
    });
});

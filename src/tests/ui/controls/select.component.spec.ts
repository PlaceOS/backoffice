import {
    Component,
    provideZonelessChangeDetection,
    signal,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { describe, expect, it, vi } from 'vitest';
import { OptionComponent } from '../../../app/ui/controls/option.component';
import { SelectComponent } from '../../../app/ui/controls/select.component';

vi.mock('@placeos/ts-client', () =>
    vi.importActual('@placeos/ts-client/dist/index.es.js'),
);

@Component({
    template: `
        <app-select
            [(ngModel)]="value"
            [multiple]="multiple()"
            placeholder="Pick one"
        >
            <app-option value="a">Alpha</app-option>
            <app-option value="b">Beta</app-option>
            <app-option value="c" disabled>Gamma</app-option>
        </app-select>
    `,
    imports: [FormsModule, SelectComponent, OptionComponent],
})
class HostComponent {
    public value: string | string[] = 'a';
    public readonly multiple = signal(false);
}

async function setup(multiple = false, value: string | string[] = 'a') {
    TestBed.configureTestingModule({
        providers: [provideZonelessChangeDetection()],
    });
    const fixture = TestBed.createComponent(HostComponent);
    fixture.componentInstance.multiple.set(multiple);
    fixture.componentInstance.value = value;
    await fixture.whenStable();
    await fixture.whenStable();
    const select: HTMLElement =
        fixture.nativeElement.querySelector('app-select');
    const open = async () => {
        select.click();
        await fixture.whenStable();
    };
    const option = (text: string) =>
        [...document.querySelectorAll<HTMLElement>('app-option')].find(
            (element) => element.textContent.includes(text),
        );
    return { fixture, select, open, option };
}

describe('SelectComponent', () => {
    it('shows the label of the selected option', async () => {
        const { select } = await setup();
        expect(select.textContent).toContain('Alpha');
    });

    it('sets the value from a clicked option and closes', async () => {
        const { fixture, select, open, option } = await setup();
        await open();
        option('Beta').click();
        await fixture.whenStable();
        expect(fixture.componentInstance.value).toBe('b');
        expect(select.getAttribute('aria-expanded')).toBe('false');
    });

    it('ignores a disabled option', async () => {
        const { fixture, open, option } = await setup();
        await open();
        option('Gamma').click();
        expect(fixture.componentInstance.value).toBe('a');
    });

    it('toggles options in an array when multiple', async () => {
        const { fixture, select, open, option } = await setup(true, ['a']);
        await open();
        option('Beta').click();
        option('Alpha').click();
        await fixture.whenStable();
        expect(fixture.componentInstance.value).toEqual(['b']);
        expect(select.getAttribute('aria-expanded')).toBe('true');
    });

    it('opens with the keyboard and closes on Escape', async () => {
        const { fixture, select } = await setup();
        select.dispatchEvent(
            new KeyboardEvent('keydown', { key: 'ArrowDown' }),
        );
        await fixture.whenStable();
        expect(select.getAttribute('aria-expanded')).toBe('true');
        select.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
        await fixture.whenStable();
        expect(select.getAttribute('aria-expanded')).toBe('false');
    });
});

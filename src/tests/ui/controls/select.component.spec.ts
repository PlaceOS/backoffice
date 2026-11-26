import {
    Component,
    provideZonelessChangeDetection,
    signal,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { describe, expect, it } from 'vitest';
import { OptionComponent } from '../../../app/ui/controls/option.component';
import { SelectComponent } from '../../../app/ui/controls/select.component';

@Component({
    template: `
        <app-select
            [(ngModel)]="value"
            [multiple]="multiple()"
            placeholder="Pick one"
        >
            <div select-search><input aria-label="Search" /></div>
            @for (option of shown(); track option.value) {
                <app-option [value]="option.value" [disabled]="option.disabled">
                    {{ option.label }}
                </app-option>
            }
        </app-select>
    `,
    imports: [FormsModule, SelectComponent, OptionComponent],
})
class HostComponent {
    public value: string | string[] = 'a';
    public readonly multiple = signal(false);
    /** The options. A test removes some, as a search does. */
    public readonly shown = signal([
        { value: 'a', label: 'Alpha', disabled: false },
        { value: 'b', label: 'Beta', disabled: false },
        { value: 'c', label: 'Gamma', disabled: true },
    ]);
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

    it('picks an option with the arrow keys and Enter, skipping a disabled one', async () => {
        const { fixture, select } = await setup(false, 'b');
        // The CDK key manager reads the key code
        const press = async (key: string, keyCode: number) => {
            select.dispatchEvent(
                new KeyboardEvent('keydown', { key, keyCode }),
            );
            await fixture.whenStable();
        };
        await press('ArrowDown', 40);
        await new Promise((done) => requestAnimationFrame(done));
        // Gamma after Beta is disabled, so the active option wraps to Alpha
        await press('ArrowDown', 40);
        await press('Enter', 13);
        expect(fixture.componentInstance.value).toBe('a');
        expect(select.getAttribute('aria-expanded')).toBe('false');
    });

    it('picks an option with the arrow keys and Enter from its search input', async () => {
        const { fixture, select, open, option } = await setup();
        await open();
        await new Promise((done) => requestAnimationFrame(done));
        const search = document.querySelector<HTMLInputElement>(
            '[select-search] input',
        );
        const press = async (key: string, keyCode: number) => {
            search.dispatchEvent(
                new KeyboardEvent('keydown', { key, keyCode, bubbles: true }),
            );
            await fixture.whenStable();
        };

        await press('ArrowDown', 40);
        expect(search.getAttribute('aria-activedescendant')).toBe(
            option('Beta').id,
        );
        // Enter that confirms IME text does not pick
        search.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'Enter',
                keyCode: 13,
                isComposing: true,
                bubbles: true,
            }),
        );
        await fixture.whenStable();
        expect(select.getAttribute('aria-expanded')).toBe('true');
        await press('Enter', 13);

        expect(fixture.componentInstance.value).toBe('b');
        expect(select.getAttribute('aria-expanded')).toBe('false');
    });

    it('clears the active option of the search input when a search removes it', async () => {
        const { fixture, open, option } = await setup();
        await open();
        await new Promise((done) => requestAnimationFrame(done));
        const search = document.querySelector<HTMLInputElement>(
            '[select-search] input',
        );
        search.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'ArrowDown',
                keyCode: 40,
                bubbles: true,
            }),
        );
        await fixture.whenStable();
        expect(search.getAttribute('aria-activedescendant')).toBe(
            option('Beta').id,
        );

        fixture.componentInstance.shown.update((list) =>
            list.filter(({ value }) => value !== 'b'),
        );
        await fixture.whenStable();

        expect(search.hasAttribute('aria-activedescendant')).toBe(false);
        // Enter has no option to pick, so the value stays
        search.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'Enter',
                keyCode: 13,
                bubbles: true,
            }),
        );
        await fixture.whenStable();
        expect(fixture.componentInstance.value).toBe('a');
    });

    it('marks the control touched when the panel closes', async () => {
        const { fixture, select, open } = await setup();
        await open();
        select.click();
        await fixture.whenStable();
        expect(select.classList).toContain('ng-touched');
    });

    it('highlights one option after it opens with a new value', async () => {
        const { fixture, select, open } = await setup();
        const frame = () => new Promise((done) => requestAnimationFrame(done));
        await open();
        await frame();
        select.click();
        fixture.componentInstance.value = 'b';
        await fixture.whenStable();
        await open();
        await frame();
        await fixture.whenStable();
        const active = document.querySelectorAll('app-option.active');
        expect([...active].map((e) => e.textContent.trim())).toEqual(['Beta']);
    });
});

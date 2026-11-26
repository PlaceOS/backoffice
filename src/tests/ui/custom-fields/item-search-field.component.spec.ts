import {
    Component,
    provideZonelessChangeDetection,
    signal,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { form, FormField } from '@angular/forms/signals';
import { Module } from '@placeos/ts-client';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { newItem } from '../../../app/common/placeos';
import { ItemSearchFieldComponent } from '../../../app/ui/custom-fields/item-search-field.component';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

interface SystemLike {
    id: string;
    name: string;
}

@Component({
    template: `<item-search-field [formField]="form.system" />`,
    imports: [ItemSearchFieldComponent, FormField],
})
class HostComponent {
    model = signal<{ system: SystemLike | null }>({ system: null });
    form = form(this.model);
}

describe('ItemSearchFieldComponent', () => {
    let fixture: ComponentFixture<HostComponent>;
    let host: HostComponent;

    const inputValue = () =>
        (fixture.nativeElement.querySelector('input') as HTMLInputElement)
            .value;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HostComponent],
            providers: [provideZonelessChangeDetection()],
        }).compileComponents();
        fixture = TestBed.createComponent(HostComponent);
        host = fixture.componentInstance;
    });

    it('should display an initial value set before render', async () => {
        host.model.set({ system: { id: 'sys-1', name: 'Test System' } });
        fixture.detectChanges();
        await sleep(400);
        fixture.detectChanges();
        expect(inputValue()).toBe('Test System');
    });

    it('should display a value set asynchronously after render', async () => {
        fixture.detectChanges();
        await sleep(400);
        host.model.set({ system: { id: 'sys-1', name: 'Late System' } });
        fixture.detectChanges();
        await sleep(400);
        fixture.detectChanges();
        expect(inputValue()).toBe('Late System');
    });

    it('should escape item names in option labels', async () => {
        const field = TestBed.createComponent(ItemSearchFieldComponent);
        const mod = newItem(Module, {
            id: 'mod-1',
            name: '<img src=x>',
            role: 2,
            uri: 'https://a.com/<b>',
        });
        field.componentRef.setInput('options', [
            mod,
            { id: 'sys-1', name: '' },
        ]);
        field.detectChanges();
        await sleep(50);
        const names = field.componentInstance.item_name();
        expect(names['mod-1']).toBe(
            '&lt;img src=x&gt; <span class="small">https://a.com/&lt;b&gt;</span>',
        );
        expect(names['sys-1']).toBe('&lt;Unnamed&gt;');
    });

    it('should query only once the trimmed search reaches the minimum length', async () => {
        const query_fn = vi.fn(() =>
            Promise.resolve([
                { id: 'sys-1', name: 'Lobby' },
                { id: 'sys-2', name: 'Board room' },
            ]),
        );
        const field = TestBed.createComponent(ItemSearchFieldComponent);
        field.componentRef.setInput('minLength', 3);
        field.componentRef.setInput('query_fn', query_fn);
        field.detectChanges();

        field.componentInstance.search_str.set(' lo ');
        await sleep(450);
        expect(query_fn).not.toHaveBeenCalled();

        field.componentInstance.search_str.set(' lob ');
        await sleep(450);
        expect(query_fn).toHaveBeenCalledExactlyOnceWith(
            'lob',
            expect.any(AbortSignal),
        );
        expect(field.componentInstance.item_list()).toEqual([
            { id: 'sys-1', name: 'Lobby' },
        ]);
    });

    it('should abort the query in flight when a newer search starts', async () => {
        const signals: AbortSignal[] = [];
        const query_fn = vi.fn((_: string, signal: AbortSignal) => {
            signals.push(signal);
            return new Promise<SystemLike[]>(() => undefined);
        });
        const field = TestBed.createComponent(ItemSearchFieldComponent);
        field.componentRef.setInput('query_fn', query_fn);
        field.detectChanges();

        field.componentInstance.search_str.set('lob');
        await sleep(450);
        field.componentInstance.search_str.set('lobby');
        await sleep(450);
        expect(query_fn).toHaveBeenLastCalledWith(
            'lobby',
            expect.any(AbortSignal),
        );
        expect(signals.at(-2).aborted).toBe(true);
        expect(signals.at(-1).aborted).toBe(false);
        expect(field.componentInstance.loading()).toBe(true);
    });
});

import {
    Component,
    provideZonelessChangeDetection,
    signal,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { form, FormField } from '@angular/forms/signals';
import { PlaceModule } from '@placeos/ts-client';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ItemSearchFieldComponent } from '../../../app/ui/custom-fields/item-search-field.component';

// Mock the ts-client to avoid CJS/ESM issues
vi.mock('@placeos/ts-client', () => ({
    PlaceDriverRole: { SSH: 0, Device: 1, Service: 2, Websocket: 3, Logic: 99 },
    PlaceModule: class PlaceModule {},
}));

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
        const mod = Object.assign(new PlaceModule(), {
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
});

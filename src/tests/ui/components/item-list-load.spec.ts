import { provideZonelessChangeDetection, signal, Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { type Domain } from '@placeos/ts-client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AdminDataService } from '../../../app/admin/admin-data.service';
import { HotkeysService } from '../../../app/common/hotkeys.service';
import { ActiveItemService } from '../../../app/common/item.service';
import { LocaleService } from '../../../app/common/locale.service';
import { ItemSelectionComponent } from '../../../app/ui/item-selection.component';
import { ItemSidebarComponent } from '../../../app/ui/item-sidebar.component';
import { VirtualScrollComponent } from '../../../app/ui/virtual-scroll.component';

interface Row {
    id: string;
    name: string;
}

const rows = (...names: string[]): Row[] =>
    names.map((name) => ({ id: `sys-${name}`, name }));

/** Item service double with the list state the two lists read */
function fakeService() {
    const list = signal<Row[]>([]);
    const service = {
        type: 'users',
        list,
        list_items: () => list(),
        list_failed: signal(false),
        loading_list: signal(false),
        loading: signal(false),
        count: signal(0),
        include_deleted: signal(false),
        items_changed: signal(0),
        active_item: null,
        active_item$: signal(null),
        moreItems: vi.fn(),
        // A new query gives a new first page of the same size
        setSearch: vi.fn(() => list.set(rows('Cy', 'Dee'))),
        setUserDomain: vi.fn(() => list.set(rows('Eve', 'Flo'))),
        setIncludeDeleted: vi.fn(),
    };
    return service;
}

describe.each<{ name: string; component: Type<unknown> }>([
    { name: 'ItemSidebarComponent', component: ItemSidebarComponent },
    { name: 'ItemSelectionComponent', component: ItemSelectionComponent },
])('$name list loads', ({ component }) => {
    let service: ReturnType<typeof fakeService>;

    beforeEach(() => {
        vi.useFakeTimers();
        // The virtual scroll list needs ResizeObserver, which jsdom lacks
        vi.stubGlobal(
            'ResizeObserver',
            class {
                public observe() {
                    // Not needed in these tests
                }
                public disconnect() {
                    // Not needed in these tests
                }
            },
        );
        service = fakeService();
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                provideRouter([]),
                { provide: ActiveItemService, useValue: service },
                {
                    provide: HotkeysService,
                    useValue: { listen: () => () => undefined },
                },
                {
                    provide: AdminDataService,
                    useValue: {
                        domain_list: signal<Domain[]>([
                            { id: 'domain-a', name: 'Alpha' } as Domain,
                        ]),
                        selectedDomain: () => signal<Domain | null>(null),
                        setDomain: vi.fn(),
                    },
                },
            ],
        });
    });

    afterEach(() => {
        document.body.replaceChildren();
        vi.unstubAllGlobals();
        vi.useRealTimers();
    });

    /** Render the list of the users section */
    async function render() {
        // The text shows in English once the translations load
        await TestBed.inject(LocaleService).ready;
        const fixture = TestBed.createComponent(component);
        fixture.componentRef.setInput('route', 'users');
        document.body.appendChild(fixture.nativeElement);
        await settle();
        const element: HTMLElement = fixture.nativeElement;
        /** Scroll to the end of the list, as the virtual scroll reports it */
        const scrollToEnd = async () => {
            fixture.debugElement
                .query(By.directive(VirtualScrollComponent))
                .injector.get(VirtualScrollComponent)
                .scrolled.emit([0, service.list().length]);
            await settle();
        };
        const alert = () =>
            element.querySelector<HTMLElement>('[role="alert"]');
        return { element, settle, scrollToEnd, alert };

        /** Run the load-more delay and render */
        async function settle() {
            await vi.advanceTimersByTimeAsync(200);
            fixture.detectChanges();
        }
    }

    it('shows a failed next page with Retry in place of the end of the list', async () => {
        service.list.set(rows('Ann', 'Bea'));
        service.count.set(4);
        service.list_failed.set(true);
        const { element, alert } = await render();

        const footer = element.querySelector('virtual-scroll [role="alert"]');
        expect(footer?.textContent).toContain('The list did not load.');
        expect(element.textContent).not.toContain('End of the list');

        const retry = [...footer.querySelectorAll('button')].find((button) =>
            button.textContent.includes('Retry'),
        );
        retry.click();
        expect(service.moreItems).toHaveBeenCalledTimes(1);
        expect(alert()).toBe(footer);
    });

    it('moves the focus from Retry to the search box when the retry loads', async () => {
        service.list.set(rows('Ann', 'Bea'));
        service.count.set(4);
        service.list_failed.set(true);
        const { element, settle, alert } = await render();
        // The retry loads the page, so Retry goes
        service.moreItems.mockImplementation(() => {
            service.list.set(rows('Ann', 'Bea', 'Cy', 'Dee'));
            service.list_failed.set(false);
        });
        const retry = alert().querySelector('button');
        retry.focus();

        retry.click();
        await settle();

        expect(alert()).toBeNull();
        expect(document.activeElement).toBe(element.querySelector('input'));
    });

    it('shows a failed first page with Retry in the empty list', async () => {
        service.list_failed.set(true);
        const { element, alert } = await render();

        expect(element.querySelector('virtual-scroll')).toBeNull();
        expect(alert()?.textContent).toContain('The list did not load.');
        alert().querySelector('button').click();
        expect(service.moreItems).toHaveBeenCalledTimes(1);
    });

    it('loads the next page of a new search at once', async () => {
        service.list.set(rows('Ann', 'Bea'));
        service.count.set(4);
        const { element, settle, scrollToEnd } = await render();
        await scrollToEnd();
        expect(service.moreItems).toHaveBeenCalledTimes(1);

        const input = element.querySelector<HTMLInputElement>('input');
        input.value = 'C';
        input.dispatchEvent(new Event('input'));
        await settle();
        expect(service.setSearch).toHaveBeenCalled();
        await scrollToEnd();

        // The new list has as many rows as the old one. It is new all the same.
        expect(service.moreItems).toHaveBeenCalledTimes(2);
    });

    it('loads the next page of a new domain at once', async () => {
        service.list.set(rows('Ann', 'Bea'));
        service.count.set(4);
        const { element, settle, scrollToEnd } = await render();
        await scrollToEnd();
        expect(service.moreItems).toHaveBeenCalledTimes(1);

        element
            .querySelector<HTMLElement>('admin-domain-select app-select')
            .click();
        await settle();
        [...document.querySelectorAll<HTMLElement>('app-option')]
            .find((option) => option.textContent.includes('Alpha'))
            .click();
        await settle();
        expect(service.setUserDomain).toHaveBeenCalled();
        await scrollToEnd();

        expect(service.moreItems).toHaveBeenCalledTimes(2);
    });
});

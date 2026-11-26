import {
    Component,
    model,
    provideZonelessChangeDetection,
    signal,
} from '@angular/core';
import { DeferBlockBehavior, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { type Domain } from '@placeos/ts-client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AdminDataService } from '../../../app/admin/admin-data.service';
import { PlaceDebugService } from '../../../app/common/debug.service';
import { HotkeysService } from '../../../app/common/hotkeys.service';
import { ActiveItemService } from '../../../app/common/item.service';
import { LocaleService } from '../../../app/common/locale.service';
import { ItemShellComponent } from '../../../app/ui/item-shell.component';
import { SidebarMenuComponent } from '../../../app/ui/sidebar-menu.component';

/** Main menu double. The real menu loads the user and the settings. */
@Component({ selector: 'sidebar-menu', template: '' })
class StubMenuComponent {
    public readonly open = model(false);
}

/** Item service double with the state that the shell and the picker read */
function fakeService() {
    const item = signal<{ id: string; name: string } | null>(null);
    return {
        type: 'systems',
        item,
        active_item$: item,
        get active_item() {
            return item();
        },
        loading: signal(false),
        list: signal<unknown[]>([]),
        list_items: () => [],
        list_failed: signal(false),
        loading_list: signal(false),
        count: signal(0),
        include_deleted: signal(false),
        canMutate: () => true,
        create: vi.fn(),
        bulkAdd: vi.fn(),
        moreItems: vi.fn(),
        setSearch: vi.fn(),
        setIncludeDeleted: vi.fn(),
        setUserDomain: vi.fn(),
    };
}

/** Whether `element` or one of its ancestors is inert */
const isInert = (element: Element) => {
    for (let node = element; node; node = node.parentElement) {
        if ((node as HTMLElement).inert) return true;
    }
    return false;
};

describe('ItemShellComponent on a phone', () => {
    let service: ReturnType<typeof fakeService>;

    beforeEach(() => {
        vi.useFakeTimers();
        service = fakeService();
        TestBed.configureTestingModule({
            // The item details load later. The skeleton shows for them.
            deferBlockBehavior: DeferBlockBehavior.Manual,
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
                    useValue: { domain_list: signal<Domain[]>([]) },
                },
                {
                    provide: PlaceDebugService,
                    useValue: { position: signal('side') },
                },
            ],
        }).overrideComponent(ItemShellComponent, {
            remove: { imports: [SidebarMenuComponent] },
            add: { imports: [StubMenuComponent] },
        });
    });

    afterEach(() => {
        document.body.replaceChildren();
        vi.useRealTimers();
    });

    /** Render the shell of the systems section. jsdom has no matchMedia, so it is a phone. */
    async function render(bulk = false) {
        // The text shows in English once the translations load
        await TestBed.inject(LocaleService).ready;
        const fixture = TestBed.createComponent(ItemShellComponent);
        fixture.componentRef.setInput('name', 'systems');
        fixture.componentRef.setInput('i18n_key', 'SYSTEMS');
        fixture.componentRef.setInput('bulk', bulk);
        document.body.appendChild(fixture.nativeElement);
        const element: HTMLElement = fixture.nativeElement;
        const settle = async () => {
            await vi.advanceTimersByTimeAsync(200);
            fixture.detectChanges();
        };
        await settle();
        /** Button of the shell with the icon `name` */
        const iconButton = (name: string) =>
            [
                ...element.querySelectorAll<HTMLButtonElement>('main > button'),
            ].find((button) => button.textContent.trim() === name);
        const trigger = () =>
            element.querySelector<HTMLButtonElement>(
                'item-selection button[aria-keyshortcuts]',
            );
        const search = () =>
            element.querySelector<HTMLInputElement>('item-selection input');
        const closeButton = () =>
            element.querySelector<HTMLButtonElement>(
                'item-selection button[aria-label="Close"]',
            );
        const details = () =>
            element.querySelector<HTMLElement>('item-details-skeleton')
                .parentElement;
        return {
            element,
            settle,
            iconButton,
            trigger,
            search,
            closeButton,
            details,
        };
    }

    it('keeps New and Bulk Add usable while the empty picker is the page', async () => {
        const { element, iconButton, search } = await render(true);

        expect(search()).not.toBeNull();
        expect(element.textContent).toContain('No Systems available');
        for (const [name, action] of [
            ['add', service.create],
            ['playlist_add', service.bulkAdd],
        ] as const) {
            const button = iconButton(name);
            expect(button.disabled).toBe(false);
            expect(isInert(button)).toBe(false);
            expect(button.closest('[aria-hidden="true"]')).toBeNull();
            button.click();
            expect(action).toHaveBeenCalledTimes(1);
        }
    });

    it('makes the details inert while the picker shows over an open item', async () => {
        service.item.set({ id: 'sys-1', name: 'Room' });
        const { settle, trigger, search, closeButton, details } =
            await render();
        expect(search()).toBeNull();
        expect(isInert(details())).toBe(false);

        // Close returns the focus to the trigger
        trigger().click();
        await settle();
        expect(isInert(details())).toBe(true);
        closeButton().click();
        await settle();
        expect(search()).toBeNull();
        expect(isInert(details())).toBe(false);
        expect(document.activeElement).toBe(trigger());

        // Escape does the same
        trigger().click();
        await settle();
        search().focus();
        search().dispatchEvent(
            new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }),
        );
        await settle();
        expect(search()).toBeNull();
        expect(isInert(details())).toBe(false);
        expect(document.activeElement).toBe(trigger());
    });

    it('keeps the picker open with no item, as it is the page', async () => {
        const { settle, search, closeButton } = await render();

        expect(closeButton()).toBeNull();
        search().focus();
        search().dispatchEvent(
            new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }),
        );
        await settle();
        expect(search()).not.toBeNull();
    });
});

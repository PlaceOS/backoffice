import { Dialog } from '@angular/cdk/dialog';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { configure, Domain } from '@placeos/ts-client';
import {
    clearEndpointMocks,
    endpointMocks,
    httpError,
    mockEndpoint,
} from '@placeos/ts-client/mock';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AdminDataService } from '../../app/admin/admin-data.service';
import { ResourceImportsComponent } from '../../app/admin/resource-imports.component';
import { LocaleService } from '../../app/common/locale.service';
import { authority, newItem } from '../../app/common/placeos';

// Spy on `authority`, so a test can give the domain of the session
vi.mock('../../app/common/placeos', { spy: true });

describe('ResourceImportsComponent', () => {
    beforeEach(() => {
        configure({
            base_url: '',
            auth: { kind: 'none' },
            mock: endpointMocks,
        });
        clearEndpointMocks();
        mockEndpoint('staff.place.query', () => [
            {
                id: 'room-1',
                displayName: 'Room 1',
                emailAddress: 'Room.1@Place.tech',
            },
            {
                id: 'room-2',
                displayName: 'Room 2',
                emailAddress: 'room.2@place.tech',
            },
        ]);
        mockEndpoint('systems.findByEmail', () => [
            { id: 'sys-other', email: 'other@place.tech' },
            { id: 'sys-1', email: 'ROOM.1@place.tech' },
        ]);
    });

    async function setup() {
        await TestBed.configureTestingModule({
            imports: [ResourceImportsComponent],
            providers: [
                { provide: Dialog, useValue: { open: vi.fn() } },
                {
                    provide: AdminDataService,
                    useValue: {
                        selectedDomain: () =>
                            signal({ id: 'domain-1', name: 'Place' }),
                        selectDefaultDomain: () => Promise.resolve(null),
                    },
                },
            ],
        })
            .overrideComponent(ResourceImportsComponent, {
                set: { template: '' },
            })
            .compileComponents();
        return TestBed.createComponent(ResourceImportsComponent)
            .componentInstance;
    }

    it('marks a resource imported when a system has its email in any case', async () => {
        const component = await setup();

        await component.loadResourceList();

        expect(
            component.resource_list().map(({ id, imported, system_id }) => ({
                id,
                imported,
                system_id,
            })),
        ).toEqual([
            { id: 'room-1', imported: true, system_id: 'sys-1' },
            { id: 'room-2', imported: false, system_id: '' },
        ]);
    });

    it('makes one system when a room import is clicked twice', async () => {
        const create = vi.fn(() => ({ id: 'sys-2', name: 'Room 2' }));
        mockEndpoint('systems.create', create);
        const component = await setup();
        await component.loadResourceList();
        const room = component.resource_list()[1];

        const results = await Promise.all([
            component.importResource(room, false),
            component.importResource(room, false),
        ]);
        // Import All has a copy of the row from before the import
        const later = await component.importResource(room, false);

        expect(create).toHaveBeenCalledTimes(1);
        // Each call gets the result of the one import
        expect([...results, later]).toEqual([true, true, true]);
    });

    it('shows no rooms when it cannot check for imported rooms', async () => {
        mockEndpoint('systems.findByEmail', () => {
            throw httpError(500);
        });
        const component = await setup();

        await component.loadResourceList();

        // Every room would look new, and an import would make a second system
        expect(component.resource_list()).toEqual([]);
        expect(component.loading()).toBe(false);
    });
});

describe('ResourceImportsComponent page', () => {
    const domain_a = newItem(Domain, { id: 'domain-a', name: 'Alpha' });
    const domain_b = newItem(Domain, { id: 'domain-b', name: 'Beta' });

    beforeEach(() => {
        configure({
            base_url: '',
            auth: { kind: 'none' },
            mock: endpointMocks,
        });
        clearEndpointMocks();
        mockEndpoint('domains.query', () => [domain_a, domain_b]);
        mockEndpoint('systems.findByEmail', () => []);
    });

    /** Render the page with the real domain picker */
    async function render(selected: typeof domain_a | null = domain_a) {
        TestBed.configureTestingModule({
            imports: [ResourceImportsComponent],
            providers: [{ provide: Dialog, useValue: { open: vi.fn() } }],
        });
        // The text shows in English once the translations load
        await TestBed.inject(LocaleService).ready;
        if (selected) {
            TestBed.inject(AdminDataService).setDomain(
                'resource-imports',
                selected,
            );
        }
        const fixture = TestBed.createComponent(ResourceImportsComponent);
        document.body.appendChild(fixture.nativeElement);
        await fixture.whenStable();
        const element: HTMLElement = fixture.nativeElement;
        const settle = async () => {
            await vi.waitFor(() =>
                expect(fixture.componentInstance.loading()).toBe(false),
            );
            await fixture.whenStable();
        };
        const rows = () =>
            [...element.querySelectorAll<HTMLElement>('[role="row"]')].filter(
                (row) => row.textContent.includes('Room'),
            );
        // The room load error. The domain list error is a separate alert.
        const alert = () =>
            element.querySelector<HTMLElement>('div[role="alert"]');
        return { fixture, element, settle, rows, alert };
    }

    afterEach(() => {
        document.body.replaceChildren();
        vi.mocked(authority).mockReset();
    });

    it('loads the rooms once and names an import with the new domain', async () => {
        const query = vi.fn(() => [
            { id: 'room-1', displayName: 'Room 1', emailAddress: 'r1@x.tech' },
        ]);
        mockEndpoint('staff.place.query', query);
        const create = vi.fn(() => ({ id: 'sys-1', name: 'x' }));
        mockEndpoint('systems.create', create);
        const { fixture, element, settle, rows } = await render();
        await settle();

        // Pick the second domain in the picker
        element.querySelector<HTMLElement>('app-select').click();
        await fixture.whenStable();
        [...document.querySelectorAll<HTMLElement>('app-option')]
            .find((option) => option.textContent.includes('Beta'))
            .click();
        await settle();

        // The rooms do not depend on the domain
        expect(query).toHaveBeenCalledTimes(1);
        expect(rows()).toHaveLength(1);

        const import_button = [
            ...rows()[0].querySelectorAll<HTMLButtonElement>('button'),
        ].find((button) => button.textContent.includes('publish'));
        import_button.click();
        await vi.waitFor(() => expect(create).toHaveBeenCalledTimes(1));
        expect(create).toHaveBeenCalledWith(
            expect.objectContaining({
                body: expect.objectContaining({ name: '[Beta] Room 1' }),
            }),
        );
    });

    it('shows a failed room load with Retry, and Retry loads the rooms', async () => {
        mockEndpoint('staff.place.query', () => {
            throw httpError(500);
        });
        // No domain is selected yet. The rooms load all the same.
        mockEndpoint('domains.query', () => []);
        const { fixture, settle, rows, alert } = await render(null);
        await settle();

        expect(alert()?.textContent).toContain('Failed to load rooms');
        expect(rows()).toHaveLength(0);

        mockEndpoint('staff.place.query', () => [
            { id: 'room-1', displayName: 'Room 1', emailAddress: 'r1@x.tech' },
        ]);
        const retry = [...alert().querySelectorAll('button')].find((button) =>
            button.textContent.includes('Retry'),
        );
        retry.click();
        await vi.waitFor(() => {
            fixture.detectChanges();
            expect(rows()).toHaveLength(1);
        });
        expect(alert()).toBeNull();
    });

    /** Room list with one room, as the staff API gives it */
    const one_room = () => [
        { id: 'room-1', displayName: 'Room 1', emailAddress: 'r1@x.tech' },
    ];
    /** Retry button in the error */
    const retryButton = (alert: HTMLElement) =>
        [...alert.querySelectorAll('button')].find((button) =>
            button.textContent.includes('Retry'),
        );

    it('keeps the focused Retry while it loads, then focuses the heading', async () => {
        mockEndpoint('staff.place.query', () => {
            throw httpError(500);
        });
        const { fixture, element, settle, rows, alert } = await render();
        await settle();
        const retry = retryButton(alert());
        retry.focus();

        let resolve: (rooms: ReturnType<typeof one_room>) => void;
        mockEndpoint(
            'staff.place.query',
            () => new Promise((done) => (resolve = done)),
        );
        retry.click();
        await fixture.whenStable();
        // The same button stays, with the focus, while the rooms load
        expect(retry.isConnected).toBe(true);
        expect(document.activeElement).toBe(retry);
        expect(retry.getAttribute('aria-busy')).toBe('true');

        resolve(one_room());
        await settle();
        expect(rows()).toHaveLength(1);
        expect(alert()).toBeNull();
        expect(document.activeElement).toBe(element.querySelector('h2'));
    });

    it('turns off the row import while no domain is selected', async () => {
        mockEndpoint('staff.place.query', one_room);
        mockEndpoint('domains.query', () => []);
        const { settle, rows } = await render(null);
        await settle();

        const import_button = [
            ...rows()[0].querySelectorAll<HTMLButtonElement>('button'),
        ].find((button) => button.textContent.includes('publish'));
        expect(import_button.disabled).toBe(true);
    });

    it('loads the domains again on Retry when none is selected', async () => {
        mockEndpoint('staff.place.query', () => {
            throw httpError(500);
        });
        const domains = vi.fn((): Domain[] => {
            throw httpError(500);
        });
        mockEndpoint('domains.query', domains);
        const { settle, alert } = await render(null);
        await settle();
        expect(domains).toHaveBeenCalledTimes(1);

        mockEndpoint('staff.place.query', one_room);
        retryButton(alert()).click();
        await settle();
        expect(domains).toHaveBeenCalledTimes(2);
    });

    it('shows a domain error with its own Retry while the rooms show', async () => {
        // The rooms load. Only the domains fail.
        const rooms_query = vi.fn(one_room);
        mockEndpoint('staff.place.query', rooms_query);
        mockEndpoint('domains.query', () => {
            throw httpError(500);
        });
        const { fixture, element, settle, rows, alert } = await render(null);
        await settle();

        // The domain error is next to the picker. There is no room error.
        const domain_error = () =>
            element.querySelector<HTMLElement>('span[role="alert"]');
        expect(domain_error()?.textContent).toContain(
            'No domains are available.',
        );
        expect(alert()).toBeNull();
        expect(rows()).toHaveLength(1);
        const picker = element.querySelector('admin-domain-select');
        expect(domain_error().parentElement.contains(picker)).toBe(true);

        // The session domain is the default when the domains load
        vi.mocked(authority).mockReturnValue({ id: domain_b.id } as ReturnType<
            typeof authority
        >);
        mockEndpoint('domains.query', () => [domain_a, domain_b]);
        const retry = domain_error().nextElementSibling as HTMLElement;
        expect(retry.textContent).toContain('Retry');
        retry.focus();
        retry.click();
        await vi.waitFor(() => {
            fixture.detectChanges();
            expect(domain_error()).toBeNull();
        });
        await fixture.whenStable();

        // The picker has the domains. The rooms stay and did not load again.
        expect(fixture.componentInstance.domain()?.id).toBe('domain-b');
        expect(rooms_query).toHaveBeenCalledTimes(1);
        expect(rows()).toHaveLength(1);
        // Retry went, so the heading has the focus
        expect(document.activeElement?.tagName).toBe('H2');
    });
});

import { Dialog } from '@angular/cdk/dialog';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlaceSystem, query, querySystemsWithEmails } from '@placeos/ts-client';
import { describe, expect, it, vi } from 'vitest';
import { AdminDataService } from '../../app/admin/admin-data.service';
import { ResourceImportsComponent } from '../../app/admin/resource-imports.component';

vi.mock('@placeos/ts-client', () => ({
    addSystem: vi.fn(),
    query: vi.fn(),
    querySystemsWithEmails: vi.fn(),
    showMetadata: vi.fn(() => Promise.resolve({})),
}));

describe('ResourceImportsComponent', () => {
    it('marks a resource imported when a later page has its system', async () => {
        const domain = signal({ id: 'domain-1', name: 'Place' });
        vi.mocked(query).mockResolvedValue({
            data: [
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
            ],
        } as Awaited<ReturnType<typeof query>>);
        const page = (data: Partial<PlaceSystem>[], next?: () => unknown) =>
            ({ data, next }) as Awaited<
                ReturnType<typeof querySystemsWithEmails>
            >;
        vi.mocked(querySystemsWithEmails).mockResolvedValue(
            page([{ id: 'sys-other', email: 'other@place.tech' }], () =>
                Promise.resolve(
                    page([{ id: 'sys-1', email: 'ROOM.1@place.tech' }]),
                ),
            ),
        );
        await TestBed.configureTestingModule({
            imports: [ResourceImportsComponent],
            providers: [
                { provide: Dialog, useValue: { open: vi.fn() } },
                {
                    provide: AdminDataService,
                    useValue: {
                        selectedDomain: () => domain,
                        selectDefaultDomain: () => Promise.resolve(null),
                    },
                },
            ],
        })
            .overrideComponent(ResourceImportsComponent, {
                set: { template: '' },
            })
            .compileComponents();
        const component = TestBed.createComponent(
            ResourceImportsComponent,
        ).componentInstance;

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
});

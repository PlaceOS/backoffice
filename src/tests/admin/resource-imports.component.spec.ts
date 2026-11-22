import { Dialog } from '@angular/cdk/dialog';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { configure } from '@placeos/ts-client';
import {
    clearEndpointMocks,
    endpointMocks,
    mockEndpoint,
} from '@placeos/ts-client/mock';
import { describe, expect, it, vi } from 'vitest';
import { AdminDataService } from '../../app/admin/admin-data.service';
import { ResourceImportsComponent } from '../../app/admin/resource-imports.component';

describe('ResourceImportsComponent', () => {
    it('marks a resource imported when a system has its email in any case', async () => {
        const domain = signal({ id: 'domain-1', name: 'Place' });
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

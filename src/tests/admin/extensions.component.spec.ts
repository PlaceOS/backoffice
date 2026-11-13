import { Dialog } from '@angular/cdk/dialog';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlaceDomain, updateDomain } from '@placeos/ts-client';
import { Subject } from 'rxjs';
import { describe, expect, it, vi } from 'vitest';
import { AdminDataService } from '../../app/admin/admin-data.service';
import { PlaceExtensionsComponent } from '../../app/admin/extensions.component';
import { DialogEvent } from '../../app/common/types';

vi.mock('@placeos/ts-client', () => ({
    PlaceDomain: class {
        constructor(data: object) {
            Object.assign(this, data);
        }
    },
    showMetadata: vi.fn(() => Promise.resolve({})),
    updateDomain: vi.fn((_id: string, domain: unknown) =>
        Promise.resolve(domain),
    ),
}));

describe('PlaceExtensionsComponent', () => {
    it('keeps other domain settings when an extension is edited', async () => {
        const domain = signal(
            new PlaceDomain({
                id: 'domain-1',
                config: {
                    theme: 'dark',
                    backoffice: {
                        logo: 'logo.svg',
                        extend: {
                            systems: {
                                Docs: {
                                    url: 'https://old.example',
                                    conditions: [],
                                },
                                Help: {
                                    url: 'https://help.example',
                                    conditions: [],
                                },
                            },
                        },
                    },
                },
            }),
        );
        const ref = {
            componentInstance: {
                event: new Subject<DialogEvent>(),
                loading: signal(''),
            },
            close: vi.fn(),
        };
        await TestBed.configureTestingModule({
            imports: [PlaceExtensionsComponent],
            providers: [
                { provide: Dialog, useValue: { open: () => ref } },
                {
                    provide: AdminDataService,
                    useValue: {
                        selectedDomain: () => domain,
                        selectDefaultDomain: () => Promise.resolve(domain()),
                        replaceDomain: vi.fn(),
                    },
                },
            ],
        })
            .overrideComponent(PlaceExtensionsComponent, {
                set: { template: '' },
            })
            .compileComponents();
        const component = TestBed.createComponent(
            PlaceExtensionsComponent,
        ).componentInstance;
        const docs = component.extensions().find(({ name }) => name === 'Docs');

        component.editExtension(docs);
        ref.componentInstance.event.next({
            reason: 'done',
            metadata: { ...docs, url: 'https://new.example' },
        });
        await vi.waitFor(() => expect(ref.close).toHaveBeenCalled());

        expect(updateDomain).toHaveBeenCalledWith(
            'domain-1',
            expect.objectContaining({
                config: {
                    theme: 'dark',
                    backoffice: {
                        logo: 'logo.svg',
                        extend: {
                            systems: {
                                Docs: {
                                    url: 'https://new.example',
                                    conditions: [],
                                },
                                Help: {
                                    url: 'https://help.example',
                                    conditions: [],
                                },
                            },
                        },
                    },
                },
            }),
        );
    });
});

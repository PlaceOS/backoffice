import { Dialog } from '@angular/cdk/dialog';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Domain, domains } from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';
import { Subject } from 'rxjs';
import { describe, expect, it, vi } from 'vitest';
import { AdminDataService } from '../../app/admin/admin-data.service';
import { PlaceExtensionsComponent } from '../../app/admin/extensions.component';
import { newItem } from '../../app/common/placeos';
import { DialogEvent } from '../../app/common/types';

vi.mock('@placeos/ts-client', { spy: true });

describe('PlaceExtensionsComponent', () => {
    it('keeps other domain settings when an extension is edited', async () => {
        vi.mocked(domains.update).mockImplementation(async ({ body }) =>
            mockReply(newItem(Domain, body)),
        );
        const domain = signal(
            newItem(Domain, {
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

        expect(domains.update).toHaveBeenCalledWith({
            id: 'domain-1',
            body: expect.objectContaining({
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
        });
    });
});

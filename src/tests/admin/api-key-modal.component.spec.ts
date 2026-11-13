import { DIALOG_DATA } from '@angular/cdk/dialog';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, expect, it, vi } from 'vitest';
import { PlaceAPIKeyDetails } from '../../app/admin/api-keys/api-key-details.class';
import { APIKeyModalComponent } from '../../app/admin/api-keys/api-key-modal.component';
import { APIKeyService } from '../../app/admin/api-keys/api-keys.service';
import { DialogEvent } from '../../app/common/types';

vi.mock('@placeos/ts-client', () => ({
    queryUsers: vi.fn(() => Promise.resolve({ data: [] })),
    showMetadata: vi.fn(() => Promise.resolve({})),
    showUser: vi.fn(() => Promise.resolve(null)),
}));
// The real service loads scopes and the current user, which this test does not use
vi.mock('../../app/admin/api-keys/api-keys.service', () => ({
    APIKeyService: class {},
}));
vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
}));

describe('APIKeyModalComponent', () => {
    it('drops the TTL but keeps the expiry when a key is edited', async () => {
        const key = new PlaceAPIKeyDetails({
            id: 'key-1',
            name: 'Kiosk',
            user_id: 'user-1',
            scopes: ['public'],
            expires_at: 1_900_000_000,
        });
        await TestBed.configureTestingModule({
            imports: [APIKeyModalComponent],
            providers: [
                { provide: DIALOG_DATA, useValue: { domain: null, key } },
                {
                    provide: APIKeyService,
                    useValue: { available_scopes: signal([]) },
                },
            ],
        })
            .overrideComponent(APIKeyModalComponent, {
                set: { template: '' },
            })
            .compileComponents();
        const fixture = TestBed.createComponent(APIKeyModalComponent);
        fixture.detectChanges();
        const component = fixture.componentInstance;
        const events: DialogEvent[] = [];
        component.event.subscribe((event) => events.push(event));

        component.setTTL(3600);
        await component.save();

        expect(events).toHaveLength(1);
        expect(events[0].metadata).toEqual(
            expect.objectContaining({ id: 'key-1', expires_at: 1_900_000_000 }),
        );
        expect(events[0].metadata).not.toHaveProperty('ttl');
    });
});

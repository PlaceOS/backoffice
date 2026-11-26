import { Dialog } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { configure } from '@placeos/ts-client';
import {
    clearEndpointMocks,
    endpointMocks,
    httpError,
    mockEndpoint,
} from '@placeos/ts-client/mock';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { AdminDataService } from '../../app/admin/admin-data.service';
import { AdminAPIKeysComponent } from '../../app/admin/api-keys/api-keys.component';

describe('AdminAPIKeysComponent', () => {
    const domain = { id: 'authority-1', name: 'Place Technology' };

    beforeEach(() => {
        configure({
            base_url: '',
            auth: { kind: 'none' },
            mock: endpointMocks,
        });
        clearEndpointMocks();
        mockEndpoint('root.scopes', () => ['public']);
        const selected_domain = signal(domain);
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                { provide: Dialog, useValue: { open: vi.fn() } },
                {
                    provide: AdminDataService,
                    useValue: {
                        domain_list: signal([domain]).asReadonly(),
                        selectedDomain: vi.fn(() => selected_domain),
                        setDomain: vi.fn(),
                        selectDefaultDomain: vi.fn(() =>
                            Promise.resolve(domain),
                        ),
                    },
                },
            ],
        });
    });

    it('keeps Retry focused while it loads, then moves focus to the heading', async () => {
        mockEndpoint('api_keys.query', () => {
            throw httpError(500);
        });
        const fixture = TestBed.createComponent(AdminAPIKeysComponent);
        document.body.appendChild(fixture.nativeElement);
        await fixture.whenStable();
        const retry = () =>
            (
                fixture.nativeElement as HTMLElement
            ).querySelector<HTMLButtonElement>('[role="alert"] button');
        retry().focus();

        // A retry that fails again keeps the same focused button
        let fail: (reason: unknown) => void;
        mockEndpoint(
            'api_keys.query',
            () => new Promise((_, reject) => (fail = reject)),
        );
        const button = retry();
        button.click();
        await vi.waitFor(() => {
            fixture.detectChanges();
            expect(button.getAttribute('aria-busy')).toBe('true');
        });
        expect(retry()).toBe(button);
        fail(httpError(500));
        await fixture.whenStable();
        expect(retry()).toBe(button);
        expect(document.activeElement).toBe(button);

        // A retry that loads the list moves focus to the heading
        mockEndpoint('api_keys.query', () => [{ id: 'key-1', name: 'Key' }]);
        button.click();
        await fixture.whenStable();
        expect(retry()).toBeNull();
        expect(document.activeElement).toBe(
            fixture.nativeElement.querySelector('h2'),
        );
        fixture.nativeElement.remove();
    });
});

import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { AdminDataService } from '../../app/admin/admin-data.service';
import { SignageAIComponent } from '../../app/admin/signage-ai/signage-ai.component';

const get_mock = vi.hoisted(() =>
    vi.fn<(url: string) => Promise<unknown>>(() => Promise.resolve([])),
);

vi.mock('@placeos/ts-client', () => ({
    apiEndpoint: vi.fn(() => '/api/engine/v2'),
    del: vi.fn(() => Promise.resolve({})),
    get: get_mock,
    patch: vi.fn(() => Promise.resolve({})),
    post: vi.fn(() => Promise.resolve({})),
}));

describe('SignageAIComponent', () => {
    beforeEach(async () => {
        get_mock.mockReset();
        await TestBed.configureTestingModule({
            imports: [SignageAIComponent],
            providers: [
                { provide: MatDialog, useValue: { open: vi.fn() } },
                {
                    provide: AdminDataService,
                    useValue: {
                        domain_list: signal([]),
                        loadDomains: vi.fn(() => Promise.resolve([])),
                    },
                },
            ],
        })
            .overrideComponent(SignageAIComponent, {
                set: { template: '' },
            })
            .compileComponents();
    });

    it('shows a provider error instead of the provider empty state', async () => {
        get_mock.mockImplementation((url) =>
            url.endsWith('/providers')
                ? Promise.reject(new Error('provider failed'))
                : Promise.resolve([]),
        );
        const fixture = TestBed.createComponent(SignageAIComponent);

        await fixture.componentInstance.load();

        expect(fixture.componentInstance.provider_error()).not.toBe('');
        expect(fixture.componentInstance.usage_error()).toBe('');
    });

    it('shows a usage error without hiding the provider result', async () => {
        get_mock.mockImplementation((url) =>
            url.endsWith('/usage')
                ? Promise.reject(new Error('usage failed'))
                : Promise.resolve([]),
        );
        const fixture = TestBed.createComponent(SignageAIComponent);

        await fixture.componentInstance.load();

        expect(fixture.componentInstance.provider_error()).toBe('');
        expect(fixture.componentInstance.usage_error()).not.toBe('');
    });
});

import { Dialog } from '@angular/cdk/dialog';
import { signal } from '@angular/core';
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
import { SignageAIComponent } from '../../app/admin/signage-ai/signage-ai.component';

describe('SignageAIComponent', () => {
    beforeEach(async () => {
        configure({
            base_url: '',
            auth: { kind: 'none' },
            mock: endpointMocks,
        });
        clearEndpointMocks();
        await TestBed.configureTestingModule({
            imports: [SignageAIComponent],
            providers: [
                { provide: Dialog, useValue: { open: vi.fn() } },
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
        mockEndpoint('signage_ai_providers.query', () => {
            throw httpError(500);
        });
        mockEndpoint('signage_ai.usage', () => []);
        const fixture = TestBed.createComponent(SignageAIComponent);

        await fixture.componentInstance.load();

        expect(fixture.componentInstance.provider_error()).not.toBe('');
        expect(fixture.componentInstance.usage_error()).toBe('');
    });

    it('shows a usage error without hiding the provider result', async () => {
        mockEndpoint('signage_ai_providers.query', () => [
            { id: 'provider-1', name: 'OpenAI' },
        ]);
        mockEndpoint('signage_ai.usage', () => {
            throw httpError(500);
        });
        const fixture = TestBed.createComponent(SignageAIComponent);

        await fixture.componentInstance.load();

        expect(fixture.componentInstance.provider_error()).toBe('');
        expect(fixture.componentInstance.usage_error()).not.toBe('');
        expect(
            fixture.componentInstance.providers().map(({ name }) => name),
        ).toEqual(['OpenAI']);
    });
});

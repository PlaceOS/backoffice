import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { TestBed } from '@angular/core/testing';
import { configure } from '@placeos/ts-client';
import {
    clearEndpointMocks,
    endpointMocks,
    mockEndpoint,
} from '@placeos/ts-client/mock';
import { EMPTY } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { SignageAIProviderModalComponent } from '../../app/admin/signage-ai/signage-ai-provider-modal.component';
vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

describe('SignageAIProviderModalComponent', () => {
    beforeEach(async () => {
        vi.clearAllMocks();
        configure({
            base_url: '',
            auth: { kind: 'none' },
            mock: endpointMocks,
        });
        clearEndpointMocks();
        await TestBed.configureTestingModule({
            imports: [SignageAIProviderModalComponent],
            providers: [
                { provide: DIALOG_DATA, useValue: {} },
                {
                    provide: DialogRef,
                    useValue: {
                        close: vi.fn(),
                        disableClose: false,
                        backdropClick: EMPTY,
                        keydownEvents: EMPTY,
                    },
                },
            ],
        })
            .overrideComponent(SignageAIProviderModalComponent, {
                set: { template: '' },
            })
            .compileComponents();
    });

    it('requires a region only for Google Vertex', () => {
        const fixture = TestBed.createComponent(
            SignageAIProviderModalComponent,
        );
        const component = fixture.componentInstance;

        component.form_model.update((model) => ({
            ...model,
            provider: 'GOOGLE_VERTEX',
            location: '',
        }));
        expect(component.form.location().invalid()).toBe(true);

        component.form_model.update((model) => ({
            ...model,
            location: 'australia-southeast1',
        }));
        expect(component.form.location().valid()).toBe(true);

        component.form_model.update((model) => ({
            ...model,
            provider: 'OPENAI',
            location: '',
        }));
        expect(component.form.location().valid()).toBe(true);
    });

    it('keeps the stored credentials when an edit leaves them empty', async () => {
        TestBed.overrideProvider(DIALOG_DATA, {
            useValue: {
                item: { id: 'provider-1', name: 'OpenAI', provider: 'OPENAI' },
            },
        });
        const update = vi.fn(() => ({ id: 'provider-1', name: 'OpenAI' }));
        mockEndpoint('signage_ai_providers.update', update);
        const component = TestBed.createComponent(
            SignageAIProviderModalComponent,
        ).componentInstance;

        await component.save();

        expect(update).toHaveBeenCalledWith({
            id: 'provider-1',
            body: expect.not.objectContaining({
                credentials: expect.anything(),
            }),
        });
    });
});

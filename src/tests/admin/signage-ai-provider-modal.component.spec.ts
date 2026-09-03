import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { SignageAIProviderModalComponent } from '../../app/admin/signage-ai/signage-ai-provider-modal.component';

vi.mock('@placeos/ts-client', () => ({
    apiEndpoint: vi.fn(() => '/api/engine/v2'),
    del: vi.fn(() => Promise.resolve({})),
    get: vi.fn(() => Promise.resolve([])),
    patch: vi.fn(() => Promise.resolve({})),
    post: vi.fn(() => Promise.resolve({})),
    showMetadata: vi.fn(() => Promise.resolve({})),
}));

describe('SignageAIProviderModalComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SignageAIProviderModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: {} },
                {
                    provide: MatDialogRef,
                    useValue: { close: vi.fn(), disableClose: false },
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
});

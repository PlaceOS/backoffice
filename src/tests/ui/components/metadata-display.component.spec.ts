import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
    listMetadata: vi.fn(),
    updateMetadata: vi.fn(),
    removeMetadata: vi.fn(),
    notifyError: vi.fn(),
}));

vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<object>('@placeos/ts-client/dist/index.es.js')),
    listMetadata: mocks.listMetadata,
    updateMetadata: mocks.updateMetadata,
    removeMetadata: mocks.removeMetadata,
}));

vi.mock('../../../app/common/notifications', () => ({
    notifyError: mocks.notifyError,
    notifySuccess: vi.fn(),
}));

import { MetadataDisplayComponent } from '../../../app/ui/metadata-display.component';

describe('MetadataDisplayComponent', () => {
    beforeEach(() => {
        vi.resetAllMocks();
        mocks.listMetadata.mockResolvedValue({
            config: { name: 'config', description: '', details: { a: 1 } },
        });
        mocks.removeMetadata.mockResolvedValue(undefined);
        TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection()],
        });
    });

    it('keeps the original block when saving a rename fails', async () => {
        mocks.updateMetadata.mockRejectedValue(new Error('500'));
        const fixture = TestBed.createComponent(MetadataDisplayComponent);
        fixture.componentRef.setInput('item', { id: 'zone-1' });
        await fixture.whenStable();
        const component = fixture.componentInstance;
        const [block] = component.metadata();

        component.updateMetadataField('config', 'name', 'renamed');
        component.saveMetadata(block);
        await new Promise((resolve) => setTimeout(resolve));

        expect(mocks.updateMetadata).toHaveBeenCalledWith(
            'zone-1',
            expect.objectContaining({ name: 'renamed' }),
        );
        expect(mocks.removeMetadata).not.toHaveBeenCalled();
        expect(component.metadata().map(({ name }) => name)).toEqual([
            'config',
        ]);
        expect(mocks.notifyError).toHaveBeenCalledWith(
            expect.stringContaining('Error saving "renamed"'),
        );
    });
});

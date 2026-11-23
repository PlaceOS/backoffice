import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { mockReply } from '@placeos/ts-client/compat';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
    show: vi.fn(),
    update: vi.fn(),
    destroy: vi.fn(),
    notifyError: vi.fn(),
}));

vi.mock('@placeos/ts-client', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@placeos/ts-client')>();
    return {
        ...actual,
        metadata: {
            ...actual.metadata,
            show: mocks.show,
            update: mocks.update,
            destroy: mocks.destroy,
        },
    };
});

vi.mock('../../../app/common/notifications', () => ({
    notifyError: mocks.notifyError,
    notifySuccess: vi.fn(),
}));

import { MetadataDisplayComponent } from '../../../app/ui/metadata-display.component';

describe('MetadataDisplayComponent', () => {
    beforeEach(() => {
        vi.resetAllMocks();
        mocks.show.mockResolvedValue(
            mockReply({
                config: { name: 'config', description: '', details: { a: 1 } },
            }),
        );
        mocks.destroy.mockResolvedValue(mockReply(''));
        TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection()],
        });
    });

    it('keeps the original block when saving a rename fails', async () => {
        mocks.update.mockRejectedValue(new Error('500'));
        const fixture = TestBed.createComponent(MetadataDisplayComponent);
        fixture.componentRef.setInput('item', { id: 'zone-1' });
        await fixture.whenStable();
        const component = fixture.componentInstance;
        const [block] = component.metadata();

        component.updateMetadataField('config', 'name', 'renamed');
        component.saveMetadata(block);
        await new Promise((resolve) => setTimeout(resolve));

        expect(mocks.update).toHaveBeenCalledWith({
            id: 'zone-1',
            body: expect.objectContaining({ name: 'renamed' }),
        });
        expect(mocks.destroy).not.toHaveBeenCalled();
        expect(component.metadata().map(({ name }) => name)).toEqual([
            'config',
        ]);
        expect(mocks.notifyError).toHaveBeenCalledWith(
            expect.stringContaining('Error saving "renamed"'),
        );
    });
});

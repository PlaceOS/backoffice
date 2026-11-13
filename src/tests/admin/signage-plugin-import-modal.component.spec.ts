import { DialogRef } from '@angular/cdk/dialog';
import { TestBed } from '@angular/core/testing';
import { listRepositoryFiles } from '@placeos/ts-client';
import { describe, expect, it, vi } from 'vitest';
import { SignagePluginImportModalComponent } from '../../app/admin/signage-plugins/signage-plugin-import-modal.component';

vi.mock('@placeos/ts-client', () => ({
    listRepositoryFiles: vi.fn(),
    PlaceRepositoryType: { Interface: 'interface' },
    queryRepositories: vi.fn(() => Promise.resolve({ data: [] })),
    showMetadata: vi.fn(() => Promise.resolve({})),
    SignagePlugin: class {},
}));
vi.mock('../../app/admin/signage-plugins/signage-plugins.utilities', () => ({
    probeSignagePlugin: vi.fn(() => Promise.resolve(null)),
}));

describe('SignagePluginImportModalComponent', () => {
    it('drops the files of a repository that is no longer selected', async () => {
        const file_lists: Record<string, (files: string[]) => void> = {};
        vi.mocked(listRepositoryFiles).mockImplementation(
            (id) => new Promise((resolve) => (file_lists[id] = resolve)),
        );
        await TestBed.configureTestingModule({
            imports: [SignagePluginImportModalComponent],
            providers: [{ provide: DialogRef, useValue: { close: vi.fn() } }],
        })
            .overrideComponent(SignagePluginImportModalComponent, {
                set: { template: '' },
            })
            .compileComponents();
        const component = TestBed.createComponent(
            SignagePluginImportModalComponent,
        ).componentInstance;

        const first = component.selectRepository('repo-a');
        const second = component.selectRepository('repo-b');
        file_lists['repo-b'](['b.html']);
        await second;
        file_lists['repo-a'](['a.html']);
        await first;

        expect(component.repository_id()).toBe('repo-b');
        expect(component.probes().map(({ uri }) => uri)).toEqual(['b.html']);
    });
});

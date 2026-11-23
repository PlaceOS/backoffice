import { DialogRef } from '@angular/cdk/dialog';
import { TestBed } from '@angular/core/testing';
import { repositories } from '@placeos/ts-client';
import { describe, expect, it, vi } from 'vitest';
import { SignagePluginImportModalComponent } from '../../app/admin/signage-plugins/signage-plugin-import-modal.component';
const { fromV1Mock } = await vi.hoisted(
    () => import('@placeos/ts-client/compat'),
);

vi.mock('@placeos/ts-client', () => ({
    PlaceRepositoryType: { Interface: 'interface' },
    SignagePlugin: class {},
    repositories: {
        files: vi.fn(fromV1Mock(undefined, ['id', '...'])),
        query: vi.fn(
            fromV1Mock(() => Promise.resolve({ data: [] }), ['...'], 'page'),
        ),
    },
    metadata: {
        show: vi.fn(
            fromV1Mock(
                () => Promise.resolve({}),
                ['id', 'name'],
                'data',
                'name',
            ),
        ),
    },
}));
vi.mock('../../app/admin/signage-plugins/signage-plugins.utilities', () => ({
    probeSignagePlugin: vi.fn(() => Promise.resolve(null)),
}));

describe('SignagePluginImportModalComponent', () => {
    it('drops the files of a repository that is no longer selected', async () => {
        const file_lists: Record<string, (files: string[]) => void> = {};
        vi.mocked(repositories.files).mockImplementation(
            fromV1Mock(
                (id) => new Promise((resolve) => (file_lists[id] = resolve)),
                ['id', '...'],
            ),
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

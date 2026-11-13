import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlaceGroup } from '@placeos/ts-client';
import { EMPTY } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { GroupFormComponent } from '../../app/groups/group-form.component';

const mocks = vi.hoisted(() => ({
    authority: vi.fn(),
    queryDomains: vi.fn(),
    queryGroups: vi.fn(),
    showGroup: vi.fn(),
}));
vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<typeof import('@placeos/ts-client')>(
        '@placeos/ts-client/dist/index.es.js',
    )),
    ...mocks,
}));

describe('group parent', () => {
    async function createForm(item: PlaceGroup) {
        TestBed.configureTestingModule({
            imports: [GroupFormComponent],
            providers: [
                provideZonelessChangeDetection(),
                {
                    provide: DialogRef,
                    useValue: {
                        close: vi.fn(),
                        disableClose: false,
                        backdropClick: EMPTY,
                        keydownEvents: EMPTY,
                    },
                },
                { provide: DIALOG_DATA, useValue: { item } },
            ],
        });
        const fixture = TestBed.createComponent(GroupFormComponent);
        await fixture.whenStable();
        return fixture.componentInstance;
    }

    beforeEach(() => {
        vi.resetAllMocks();
        mocks.queryDomains.mockResolvedValue({ data: [] });
        mocks.queryGroups.mockResolvedValue({ data: [] });
    });

    it('adds each parent subsystem once and keeps the existing subsystems', async () => {
        const component = await createForm(
            new PlaceGroup({ subsystems: ['support', 'lighting'] }),
        );
        component.setParentGroup(
            new PlaceGroup({
                id: 'parent-1',
                subsystems: ['signage', 'support'],
            }),
        );
        expect(component.formModel()).toMatchObject({
            parent_id: 'parent-1',
            subsystems: ['support', 'lighting', 'signage'],
        });
    });

    it('offers only parent groups in the selected domain', async () => {
        mocks.queryGroups.mockResolvedValue({
            data: [
                new PlaceGroup({ id: 'group-a', authority_id: 'domain-1' }),
                new PlaceGroup({ id: 'group-b', authority_id: 'domain-2' }),
            ],
        });
        const component = await createForm(
            new PlaceGroup({ authority_id: 'domain-1' }),
        );
        const ids = async () =>
            (await component.query_parent_groups()('')).map(({ id }) => id);
        expect(await ids()).toEqual(['group-a']);
        component.formModel.update((value) => ({
            ...value,
            authority_id: 'domain-2',
        }));
        expect(await ids()).toEqual(['group-b']);
    });
});

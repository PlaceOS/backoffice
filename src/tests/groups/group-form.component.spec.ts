import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Group } from '@placeos/ts-client';
import { mockPage } from '@placeos/ts-client/compat';
import { EMPTY } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { newItem } from '../../app/common/placeos';
import { GroupFormComponent } from '../../app/groups/group-form.component';

const mocks = vi.hoisted(() => ({
    authority: vi.fn(),
    queryDomains: vi.fn(),
    queryGroups: vi.fn(),
    showGroup: vi.fn(),
}));
vi.mock('@placeos/ts-client', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@placeos/ts-client')>();
    return {
        ...actual,
        domains: { ...actual.domains, query: mocks.queryDomains },
        groups: {
            ...actual.groups,
            query: mocks.queryGroups,
            show: mocks.showGroup,
        },
    };
});
vi.mock('../../app/common/placeos', async (importOriginal) => ({
    ...(await importOriginal<typeof import('../../app/common/placeos')>()),
    authority: mocks.authority,
}));

describe('group parent', () => {
    async function createForm(item: Group) {
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
        mocks.queryDomains.mockResolvedValue(mockPage({ data: [] }));
        mocks.queryGroups.mockResolvedValue(mockPage({ data: [] }));
    });

    it('adds each parent subsystem once and keeps the existing subsystems', async () => {
        const component = await createForm(
            newItem(Group, { subsystems: ['support', 'lighting'] }),
        );
        component.setParentGroup(
            newItem(Group, {
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
        mocks.queryGroups.mockResolvedValue(
            mockPage({
                data: [
                    newItem(Group, { id: 'group-a', authority_id: 'domain-1' }),
                    newItem(Group, { id: 'group-b', authority_id: 'domain-2' }),
                ],
            }),
        );
        const component = await createForm(
            newItem(Group, { authority_id: 'domain-1' }),
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

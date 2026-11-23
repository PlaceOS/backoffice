import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { User } from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';
import { EMPTY } from 'rxjs';
import { describe, expect, it, vi } from 'vitest';
import { newItem } from '../../app/common/placeos';
import { UserFormComponent } from '../../app/users/user-form.component';

const mocks = vi.hoisted(() => ({
    addUser: vi.fn(),
    updateUser: vi.fn(),
    queryDomains: vi.fn(),
    authority: vi.fn(),
}));
vi.mock('@placeos/ts-client', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@placeos/ts-client')>();
    return {
        ...actual,
        users: {
            ...actual.users,
            create: mocks.addUser,
            update: mocks.updateUser,
        },
        domains: { ...actual.domains, query: mocks.queryDomains },
    };
});
vi.mock('../../app/common/placeos', async (importOriginal) => ({
    ...(await importOriginal<typeof import('../../app/common/placeos')>()),
    authority: mocks.authority,
}));
vi.mock('../../app/common/support-access', async () => ({
    ...(await vi.importActual('../../app/common/support-access')),
    isSubsystemUser: () => true,
}));
vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

describe('saving users as a subsystem user', () => {
    it('drops privileged fields and saves in the signed-in domain', async () => {
        mocks.authority.mockReturnValue({ id: 'domain-1', name: 'Org' });
        mocks.updateUser.mockResolvedValue(
            mockReply(newItem(User, { id: 'user-1' })),
        );
        TestBed.configureTestingModule({
            imports: [UserFormComponent],
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
                {
                    provide: DIALOG_DATA,
                    useValue: {
                        item: newItem(User, {
                            id: 'user-1',
                            authority_id: 'domain-2',
                            first_name: 'Alex',
                            last_name: 'Smith',
                            email: 'alex@example.com',
                            login_name: 'alex',
                            sys_admin: true,
                            support: true,
                            groups: ['admins'],
                        }),
                    },
                },
            ],
        });
        const fixture = TestBed.createComponent(UserFormComponent);
        await fixture.whenStable();

        await fixture.componentInstance.submit();

        expect(mocks.updateUser).toHaveBeenCalledExactlyOnceWith({
            id: 'user-1',
            body: expect.objectContaining({
                authority_id: 'domain-1',
                email: 'alex@example.com',
            }),
        });
        const saved = mocks.updateUser.mock.calls[0][0].body;
        for (const key of ['sys_admin', 'support', 'groups', 'login_name']) {
            expect(saved).not.toHaveProperty(key);
        }
    });
});

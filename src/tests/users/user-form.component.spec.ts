import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlaceUser } from '@placeos/ts-client';
import { EMPTY } from 'rxjs';
import { describe, expect, it, vi } from 'vitest';
import { UserFormComponent } from '../../app/users/user-form.component';

const mocks = vi.hoisted(() => ({
    addUser: vi.fn(),
    updateUser: vi.fn(),
    queryDomains: vi.fn(),
    authority: vi.fn(),
}));
vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<typeof import('@placeos/ts-client')>(
        '@placeos/ts-client/dist/index.es.js',
    )),
    ...mocks,
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
        mocks.updateUser.mockResolvedValue(new PlaceUser({ id: 'user-1' }));
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
                        item: new PlaceUser({
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

        expect(mocks.updateUser).toHaveBeenCalledExactlyOnceWith(
            'user-1',
            expect.objectContaining({
                authority_id: 'domain-1',
                email: 'alex@example.com',
            }),
        );
        const saved = mocks.updateUser.mock.calls[0][1];
        for (const key of ['sys_admin', 'support', 'groups', 'login_name']) {
            expect(saved).not.toHaveProperty(key);
        }
    });
});

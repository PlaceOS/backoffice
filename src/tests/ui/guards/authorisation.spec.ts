import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, provideRouter, Router } from '@angular/router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AuthorisedAdminGuard } from '../../../app/ui/guards/authorised-admin.guard';
import { AuthorisedUserGuard } from '../../../app/ui/guards/authorised-user.guard';
import { BackofficeUsersService } from '../../../app/users/users.service';

const subsystem = vi.hoisted(() => ({ allowed: false }));
vi.mock('../../../app/common/support-access', () => ({
    hasSupportSubsystem: () => subsystem.allowed,
}));

const connection = await vi.hoisted(async () => {
    const { createSignal } = await import(
        '@placeos/ts-client/dist/index.es.js'
    );
    return createSignal(true);
});
vi.mock('@placeos/ts-client', () => ({ onlineState: () => connection }));
vi.mock('../../../app/users/users.service', () => ({
    BackofficeUsersService: class {},
}));

const roles = [
    { name: 'administrator', sys_admin: true, support: false },
    { name: 'support user', sys_admin: false, support: true },
    {
        name: 'administrator with support access',
        sys_admin: true,
        support: true,
    },
    { name: 'ordinary user', sys_admin: false, support: false },
];

describe.each([
    {
        name: 'admin routes',
        guard: AuthorisedAdminGuard,
        allowed: [true, false, true, false],
    },
    {
        name: 'support routes',
        guard: AuthorisedUserGuard,
        allowed: [true, true, true, false],
    },
])('$name', ({ guard, allowed }) => {
    const user = signal<{ sys_admin: boolean; support: boolean } | null>(null);

    beforeEach(() => {
        subsystem.allowed = false;
        connection.set(true);
        user.set(null);
        TestBed.configureTestingModule({
            providers: [
                provideRouter([]),
                guard,
                { provide: BackofficeUsersService, useValue: { user } },
            ],
        });
        vi.spyOn(TestBed.inject(Router), 'navigate').mockResolvedValue(true);
    });
    afterEach(() => {
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    for (const [index, role] of roles.entries()) {
        it.each(['activate', 'load'] as const)(
            `checks ${role.name} access before %s`,
            async (operation) => {
                user.set(role);
                const instance = TestBed.inject<
                    AuthorisedAdminGuard | AuthorisedUserGuard
                >(guard);
                const router = TestBed.inject(Router);
                const result =
                    operation === 'load'
                        ? await instance.canLoad({}, [])
                        : await instance.canActivate(
                              new ActivatedRouteSnapshot(),
                              router.routerState.snapshot,
                          );
                expect(result).toBe(allowed[index]);
                if (allowed[index])
                    expect(router.navigate).not.toHaveBeenCalled();
                else
                    expect(router.navigate).toHaveBeenCalledExactlyOnceWith([
                        '/unauthorised',
                    ]);
            },
        );
    }

    it('admits subsystem members only on subsystem routes', async () => {
        user.set({ sys_admin: false, support: false });
        subsystem.allowed = true;
        const instance = TestBed.inject<
            AuthorisedAdminGuard | AuthorisedUserGuard
        >(guard);
        expect(await instance.canLoad({}, [])).toBe(
            guard === AuthorisedUserGuard,
        );
        const route = new ActivatedRouteSnapshot();
        route.data = { role_only: true };
        expect(
            await instance.canActivate(
                route,
                TestBed.inject(Router).routerState.snapshot,
            ),
        ).toBe(false);
        expect(await instance.canLoad({ data: { role_only: true } }, [])).toBe(
            false,
        );
    });

    it('requires an explicit route opt-in for admin routes', async () => {
        if (guard !== AuthorisedAdminGuard) return;
        user.set({ sys_admin: false, support: false });
        subsystem.allowed = true;
        const instance = TestBed.inject(AuthorisedAdminGuard);
        expect(
            await instance.canLoad({ data: { allow_subsystem: true } }, []),
        ).toBe(true);
        const child = new ActivatedRouteSnapshot();
        child.data = { allow_subsystem: true };
        expect(
            await instance.canActivate(
                child,
                TestBed.inject(Router).routerState.snapshot,
            ),
        ).toBe(false);
    });

    it('waits for the connection and user before deciding access', async () => {
        vi.useFakeTimers();
        connection.set(false);
        const router = TestBed.inject(Router);
        const settled = vi.fn();
        const result = TestBed.inject<
            AuthorisedAdminGuard | AuthorisedUserGuard
        >(guard)
            .canActivate(
                new ActivatedRouteSnapshot(),
                router.routerState.snapshot,
            )
            .then(settled);
        await vi.advanceTimersByTimeAsync(100);
        expect(settled).not.toHaveBeenCalled();
        connection.set(true);
        await vi.advanceTimersByTimeAsync(100);
        expect(settled).not.toHaveBeenCalled();
        expect(router.navigate).not.toHaveBeenCalled();
        user.set({ sys_admin: true, support: false });
        await vi.advanceTimersByTimeAsync(50);
        await result;
        expect(settled).toHaveBeenCalledExactlyOnceWith(true);
    });
});

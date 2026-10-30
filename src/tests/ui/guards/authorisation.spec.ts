import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    ActivatedRouteSnapshot,
    provideRouter,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
    authorisedAdminGuard,
    authorisedUserGuard,
} from '../../../app/ui/guards/authorised.guard';
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
        guard: authorisedAdminGuard,
        allowed: [true, false, true, false],
    },
    {
        name: 'support routes',
        guard: authorisedUserGuard,
        allowed: [true, true, true, false],
    },
])('$name', ({ guard, allowed }) => {
    const user = signal<{ sys_admin: boolean; support: boolean } | null>(null);
    const canActivate = (route: ActivatedRouteSnapshot) =>
        TestBed.runInInjectionContext(() =>
            guard(route, {} as RouterStateSnapshot),
        ) as Promise<boolean>;

    beforeEach(() => {
        subsystem.allowed = false;
        connection.set(true);
        user.set(null);
        TestBed.configureTestingModule({
            providers: [
                provideRouter([]),
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
        it(`checks ${role.name} access before activate`, async () => {
            user.set(role);
            const router = TestBed.inject(Router);
            const result = await canActivate(new ActivatedRouteSnapshot());
            expect(result).toBe(allowed[index]);
            if (allowed[index]) expect(router.navigate).not.toHaveBeenCalled();
            else
                expect(router.navigate).toHaveBeenCalledExactlyOnceWith([
                    '/unauthorised',
                ]);
        });
    }

    it('admits subsystem members only on subsystem routes', async () => {
        user.set({ sys_admin: false, support: false });
        subsystem.allowed = true;
        expect(await canActivate(new ActivatedRouteSnapshot())).toBe(
            guard === authorisedUserGuard,
        );
        const route = new ActivatedRouteSnapshot();
        route.data = { role_only: true };
        expect(await canActivate(route)).toBe(false);
    });

    it('requires an explicit route opt-in for admin routes', async () => {
        if (guard !== authorisedAdminGuard) return;
        user.set({ sys_admin: false, support: false });
        subsystem.allowed = true;
        const opted_in = Object.assign(new ActivatedRouteSnapshot(), {
            routeConfig: { data: { allow_subsystem: true } },
        });
        expect(await canActivate(opted_in)).toBe(true);
        // Inherited data is not an opt-in; only the route's own config is
        const child = new ActivatedRouteSnapshot();
        child.data = { allow_subsystem: true };
        expect(await canActivate(child)).toBe(false);
    });

    it('waits for the connection and user before deciding access', async () => {
        vi.useFakeTimers();
        connection.set(false);
        const router = TestBed.inject(Router);
        const settled = vi.fn();
        const result = canActivate(new ActivatedRouteSnapshot()).then(settled);
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

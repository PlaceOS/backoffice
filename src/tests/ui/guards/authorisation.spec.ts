import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    ActivatedRouteSnapshot,
    provideRouter,
    Route,
    Router,
    RouterStateSnapshot,
    Routes,
} from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { appRoutes } from '../../../app/app.routes';
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
    const { signal } = await import('@angular/core');
    return signal(true);
});
vi.mock('../../../app/common/placeos', () => ({ online: connection }));
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

    it('waits for the connection and user before deciding access', async () => {
        vi.useFakeTimers();
        connection.set(false);
        const router = TestBed.inject(Router);
        const settled = vi.fn();
        const result = canActivate(new ActivatedRouteSnapshot()).then(settled);
        // The connection wait has no time limit, so 2 minutes offline is not a denial
        await vi.advanceTimersByTimeAsync(2 * 60 * 1000);
        expect(settled).not.toHaveBeenCalled();
        expect(router.navigate).not.toHaveBeenCalled();
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

@Component({ template: '' })
class StubComponent {}

/**
 * The registered routes, with a stub for each component. The guards, the
 * route data and the feature routes stay as the app registers them.
 */
function stubRoutes(routes: Routes): Routes {
    return routes.map((route): Route => {
        const { loadChildren, children } = route;
        const stubbed: Route = { ...route };
        if (route.component || route.loadComponent) {
            delete stubbed.component;
            stubbed.loadComponent = () => StubComponent;
        }
        if (children) stubbed.children = stubRoutes(children);
        if (loadChildren) {
            stubbed.loadChildren = async () => {
                const loaded = await loadChildren();
                if (!Array.isArray(loaded)) {
                    throw new Error('A feature must load a Routes array');
                }
                return stubRoutes(loaded);
            };
        }
        return stubbed;
    });
}

/** App URLs, and whether a member of a support subsystem with no role opens them */
const SUBSYSTEM_ACCESS: readonly [url: string, allowed: boolean][] = [
    ['/systems/-/about', true],
    ['/zones/-/about', true],
    ['/modules/-/about', true],
    // `allow_subsystem` on the users route
    ['/users/-/about', true],
    // An admin child route. The inherited `allow_subsystem` is not an opt-in
    ['/users/-/groups', false],
    // `role_only` routes
    ['/drivers/-/about', false],
    ['/triggers/-/about', false],
    ['/zones/-/triggers', false],
    // Admin routes with no opt-in
    ['/domains/-/about', false],
    ['/groups/-/about', false],
    ['/repositories/-/about', false],
    ['/admin/about', false],
];

describe('app routes for a support subsystem member', () => {
    beforeEach(() => {
        subsystem.allowed = true;
        connection.set(true);
        TestBed.configureTestingModule({
            providers: [
                provideRouter(stubRoutes(appRoutes)),
                {
                    provide: BackofficeUsersService,
                    useValue: {
                        user: signal({ sys_admin: false, support: false }),
                    },
                },
            ],
        });
    });

    it.each(SUBSYSTEM_ACCESS)('%s is allowed: %s', async (url, allowed) => {
        const harness = await RouterTestingHarness.create();
        await harness.navigateByUrl(url);
        // A denied route starts a second navigation to /unauthorised
        await harness.fixture.whenStable();

        expect(TestBed.inject(Router).url).toBe(
            allowed ? url : '/unauthorised',
        );
    });
});

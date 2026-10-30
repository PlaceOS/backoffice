import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { PlaceUser, onlineState } from '@placeos/ts-client';
import {
    waitForClientSignalValue,
    waitForSignalValue,
} from '../../common/signals';
import { hasSupportSubsystem } from '../../common/support-access';
import { BackofficeUsersService } from '../../users/users.service';

/**
 * Route guard that waits for the connection and the user, then admits the
 * user when `allowed` returns true. Other users go to `/unauthorised`.
 */
function authorisedGuard(
    allowed: (user: PlaceUser, route: ActivatedRouteSnapshot) => boolean,
): CanActivateFn {
    return async (route) => {
        const router = inject(Router);
        const users = inject(BackofficeUsersService);
        await waitForClientSignalValue(onlineState(), (_) => _);
        const user: PlaceUser = await waitForSignalValue(
            users.user,
            (_) => !!_,
        ).catch(() => null);
        const can_activate = !!user && allowed(user, route);
        if (!can_activate) router.navigate(['/unauthorised']);
        return can_activate;
    };
}

/** Admins and support users. Subsystem members too, unless `role_only` is set. */
export const authorisedUserGuard = authorisedGuard(
    (user, route) =>
        user.sys_admin ||
        user.support ||
        (!route.data?.['role_only'] && hasSupportSubsystem()),
);

/** Admins. Subsystem members only on routes that set `allow_subsystem`. */
export const authorisedAdminGuard = authorisedGuard(
    (user, route) =>
        user.sys_admin ||
        (!!route.routeConfig?.data?.['allow_subsystem'] &&
            hasSupportSubsystem()),
);

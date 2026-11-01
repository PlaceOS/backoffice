import {
  BackofficeUsersService
} from "./chunk-6QIICYIK.js";
import {
  hasSupportSubsystem
} from "./chunk-GR7PR5Q6.js";
import {
  Router
} from "./chunk-WDXKFFYO.js";
import {
  waitForClientSignalValue,
  waitForSignalValue
} from "./chunk-7CC5FNME.js";
import {
  io
} from "./chunk-OTGYPXXQ.js";
import {
  inject
} from "./chunk-HGOGRFKW.js";

// src/app/ui/guards/authorised.guard.ts
function authorisedGuard(allowed) {
  return async (route) => {
    const router = inject(Router);
    const users = inject(BackofficeUsersService);
    await waitForClientSignalValue(io(), (_) => _);
    const user = await waitForSignalValue(
      users.user,
      (_) => !!_
    ).catch(() => null);
    const can_activate = !!user && allowed(user, route);
    if (!can_activate) router.navigate(["/unauthorised"]);
    return can_activate;
  };
}
var authorisedUserGuard = authorisedGuard(
  (user, route) => user.sys_admin || user.support || !route.data?.["role_only"] && hasSupportSubsystem()
);
var authorisedAdminGuard = authorisedGuard(
  (user, route) => user.sys_admin || !!route.routeConfig?.data?.["allow_subsystem"] && hasSupportSubsystem()
);

export {
  authorisedUserGuard,
  authorisedAdminGuard
};
//# debugId=0ee84069-a15b-5156-a5d3-4cf6335f0957
//# sourceMappingURL=chunk-D4LWA3SX.js.map

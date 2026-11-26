import {
  BackofficeUsersService
} from "./chunk-PESDTUFQ.js";
import {
  hasSupportSubsystem
} from "./chunk-RN3AWFUF.js";
import {
  Router
} from "./chunk-LL56AHAM.js";
import {
  online
} from "./chunk-V3DC4H2S.js";
import {
  waitForSignalValue
} from "./chunk-OTF7M54K.js";
import {
  inject
} from "./chunk-6G3VFYSX.js";

// src/app/ui/guards/authorised.guard.ts
function authorisedGuard(allowed) {
  return async (route) => {
    const router = inject(Router);
    const users = inject(BackofficeUsersService);
    await waitForSignalValue(online, (_) => _, 50, Infinity);
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
//# debugId=e626a864-16a0-513e-8dfc-80344bd9526c
//# sourceMappingURL=chunk-PD6JVQCG.js.map

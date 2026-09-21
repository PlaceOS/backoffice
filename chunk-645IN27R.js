import {
  AuthorisedAdminGuard
} from "./chunk-NR7W3OJC.js";
import "./chunk-P2Q6CJ4Q.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-PNLASVLZ.js";
import "./chunk-LGCOJQOV.js";
import "./chunk-5XY3WE42.js";
import "./chunk-UPJHMA72.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-PKJVK52W.js";
import "./chunk-Q2BV2GZB.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-U7MJINT7.js";
import "./chunk-Z45QSLBL.js";
import "./chunk-KWSTWQNB.js";

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-DPWJX2D7.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-LR2ELVHX.js").then((m) => m.UserAboutComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-277NZIUT.js").then((m) => m.UserMetadataComponent)
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-657YB4BH.js").then((m) => m.UserGroupsComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-6SW64PNX.js").then((m) => m.UserHistoryComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-J6PAQIEE.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-645IN27R.js.map

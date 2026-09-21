import {
  AuthorisedUserGuard
} from "./chunk-IMWIRGII.js";
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

// src/app/zones/zones.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-BQPGONNT.js").then((m) => m.ZonesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-HCYFNS5O.js").then((m) => m.ZoneAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-FG5XOAK4.js").then((m) => m.ZoneSystemsComponent)
      },
      {
        path: "triggers",
        canActivate: [AuthorisedUserGuard],
        data: { role_only: true },
        loadComponent: () => import("./chunk-WC2ZBUYI.js").then((m) => m.ZoneTriggersComponent)
      },
      {
        path: "children",
        loadComponent: () => import("./chunk-UI2JMVHA.js").then((m) => m.ZoneChildrenComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-LDOJ7AGW.js").then((m) => m.ZoneMetadataComponent)
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-3B7GOKJZ.js").then((m) => m.ZoneGroupsComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-J6PAQIEE.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-E66ORXYX.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-VH6SV4K7.js.map

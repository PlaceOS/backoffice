import {
  AuthorisedUserGuard
} from "./chunk-YIUDHOHL.js";
import {
  AuthorisedAdminGuard
} from "./chunk-MVZ4GR2D.js";
import "./chunk-3D43EOHJ.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-KVQ45LGL.js";
import "./chunk-ZQOGPWQ4.js";
import "./chunk-2C722Z46.js";
import "./chunk-G27ITG57.js";
import "./chunk-T65YNYD6.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-F34GYKGE.js";
import "./chunk-B77ZBLFJ.js";
import "./chunk-SXYVSUAR.js";
import "./chunk-QYMVVG4Y.js";
import "./chunk-6NXCBA4X.js";
import "./chunk-DPH5AP7B.js";

// src/app/zones/zones.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-ELWAIJ75.js").then((m) => m.ZonesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-K7OECYUO.js").then((m) => m.ZoneAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-M5RIBADR.js").then((m) => m.ZoneSystemsComponent)
      },
      {
        path: "triggers",
        canActivate: [AuthorisedUserGuard],
        data: { role_only: true },
        loadComponent: () => import("./chunk-VISPMJOS.js").then((m) => m.ZoneTriggersComponent)
      },
      {
        path: "children",
        loadComponent: () => import("./chunk-ZG2FIV73.js").then((m) => m.ZoneChildrenComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-FWXANU75.js").then((m) => m.ZoneMetadataComponent)
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-57RD7GRZ.js").then((m) => m.ZoneGroupsComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-45NZZ7UP.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-CEC5U253.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-W4FAKZLK.js.map

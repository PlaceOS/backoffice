import {
  AuthorisedUserGuard
} from "./chunk-3B774JYP.js";
import {
  AuthorisedAdminGuard
} from "./chunk-3KIZABQU.js";
import "./chunk-LQK4CTL2.js";
import "./chunk-T7AMAKFI.js";
import "./chunk-7ICEG2QL.js";
import "./chunk-D7A7S3DF.js";
import "./chunk-3ONUAWGE.js";
import "./chunk-GPHMWQA5.js";
import "./chunk-E2Z2L4DB.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-P3FA5CPP.js";
import "./chunk-7ONBXR6Y.js";
import "./chunk-YCZTZCQV.js";
import "./chunk-RQBZITXC.js";

// src/app/zones/zones.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-F55QSTSC.js").then((m) => m.ZonesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-ZBKFLI5X.js").then(
          (m) => m.ZoneAboutComponent
        )
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-4IS2YO5Z.js").then(
          (m) => m.ZoneSystemsComponent
        )
      },
      {
        path: "triggers",
        canActivate: [AuthorisedUserGuard],
        data: { role_only: true },
        loadComponent: () => import("./chunk-UDTW4A2U.js").then(
          (m) => m.ZoneTriggersComponent
        )
      },
      {
        path: "children",
        loadComponent: () => import("./chunk-TC6HXVP2.js").then(
          (m) => m.ZoneChildrenComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-LQJGKTRK.js").then(
          (m) => m.ZoneMetadataComponent
        )
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-XR6CK3KE.js").then(
          (m) => m.ZoneGroupsComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-RXA6ZX3E.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-NQVRCDI6.js").then(
          (m) => m.SettingsHistoryViewComponent
        )
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# debugId=fb690dd7-c886-58f9-a258-5bb95235ab55
//# sourceMappingURL=chunk-UMFMXXO2.js.map

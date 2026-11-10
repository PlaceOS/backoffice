import {
  authorisedAdminGuard,
  authorisedUserGuard
} from "./chunk-QTUIPL6Q.js";
import "./chunk-2OUHWH7N.js";
import "./chunk-IN2BSCPT.js";
import "./chunk-2HWH2YE2.js";
import "./chunk-HFMNSA6D.js";
import "./chunk-GFMPFDY6.js";
import "./chunk-MUP2V42Q.js";
import "./chunk-6UTRGHRC.js";
import "./chunk-3VVTXJY2.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import "./chunk-UAEA3DWF.js";
import "./chunk-DTROA6L2.js";
import "./chunk-RQBZITXC.js";

// src/app/zones/zones.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-SLB2XLPM.js").then((m) => m.ZonesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-QVE2PKKZ.js").then(
          (m) => m.ZoneAboutComponent
        )
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-3MBJH7IH.js").then(
          (m) => m.ZoneSystemsComponent
        )
      },
      {
        path: "triggers",
        canActivate: [authorisedUserGuard],
        data: { role_only: true },
        loadComponent: () => import("./chunk-7I3II4Q4.js").then(
          (m) => m.ZoneTriggersComponent
        )
      },
      {
        path: "children",
        loadComponent: () => import("./chunk-2PUGCKJ2.js").then(
          (m) => m.ZoneChildrenComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-YRDCJPL2.js").then(
          (m) => m.ItemMetadataComponent
        )
      },
      {
        path: "groups",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-YR2ZO7EE.js").then(
          (m) => m.ZoneGroupsComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-HAFB37F2.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-2EJ2KDOU.js").then(
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
//# debugId=9106f3be-5a1e-559e-88ae-e1393d6cb879
//# sourceMappingURL=chunk-4FMRVA7U.js.map

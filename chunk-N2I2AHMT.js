import {
  AuthorisedUserGuard
} from "./chunk-AHMQ6KUZ.js";
import {
  AuthorisedAdminGuard
} from "./chunk-6ZDPAIXF.js";
import "./chunk-R3KIBYX2.js";
import "./chunk-F2UXRHVQ.js";
import "./chunk-WDXKFFYO.js";
import "./chunk-WLIXIQFW.js";
import "./chunk-KIA2WBKL.js";
import "./chunk-HASFJPLN.js";
import "./chunk-BS66IPO2.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-3QDC3AOP.js";
import "./chunk-DKYBNEOC.js";
import "./chunk-HGOGRFKW.js";
import "./chunk-RQBZITXC.js";

// src/app/zones/zones.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-WEE2RH7N.js").then((m) => m.ZonesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-GJQ2TWXH.js").then(
          (m) => m.ZoneAboutComponent
        )
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-GGCKP6A2.js").then(
          (m) => m.ZoneSystemsComponent
        )
      },
      {
        path: "triggers",
        canActivate: [AuthorisedUserGuard],
        data: { role_only: true },
        loadComponent: () => import("./chunk-QYLGFHD4.js").then(
          (m) => m.ZoneTriggersComponent
        )
      },
      {
        path: "children",
        loadComponent: () => import("./chunk-Q7ZNZO6U.js").then(
          (m) => m.ZoneChildrenComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-XRE4M3EQ.js").then(
          (m) => m.ZoneMetadataComponent
        )
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-YH6J5ZNR.js").then(
          (m) => m.ZoneGroupsComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-XWSAIUCD.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-XOYVNZQX.js").then(
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
//# sourceMappingURL=chunk-N2I2AHMT.js.map

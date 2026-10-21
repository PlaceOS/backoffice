import {
  AuthorisedUserGuard
} from "./chunk-ADF32XDM.js";
import {
  AuthorisedAdminGuard
} from "./chunk-24NSF32U.js";
import "./chunk-G7YFPNSL.js";
import "./chunk-SYH7ZBC5.js";
import "./chunk-XTDO4IU7.js";
import "./chunk-IID3C4LS.js";
import "./chunk-PIRFEBZC.js";
import "./chunk-JMHMEOZG.js";
import "./chunk-E63CPPEP.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-3QDC3AOP.js";
import "./chunk-33GRF44L.js";
import "./chunk-TCVU4336.js";
import "./chunk-RQBZITXC.js";

// src/app/zones/zones.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-6YDZQJC3.js").then((m) => m.ZonesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-OSELTG5E.js").then(
          (m) => m.ZoneAboutComponent
        )
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-4M3CHZM3.js").then(
          (m) => m.ZoneSystemsComponent
        )
      },
      {
        path: "triggers",
        canActivate: [AuthorisedUserGuard],
        data: { role_only: true },
        loadComponent: () => import("./chunk-OIJQQHWM.js").then(
          (m) => m.ZoneTriggersComponent
        )
      },
      {
        path: "children",
        loadComponent: () => import("./chunk-LYJQ7BBD.js").then(
          (m) => m.ZoneChildrenComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-VVUDIBMP.js").then(
          (m) => m.ZoneMetadataComponent
        )
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-HXI4PVGY.js").then(
          (m) => m.ZoneGroupsComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-HANWV6JU.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-2PA5B7ST.js").then(
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
//# sourceMappingURL=chunk-7R33EAIC.js.map

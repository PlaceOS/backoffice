import {
  AuthorisedUserGuard
} from "./chunk-7XKVQ2GT.js";
import {
  AuthorisedAdminGuard
} from "./chunk-XE5EIFSD.js";
import "./chunk-EIPFTMWR.js";
import "./chunk-EUOPYYFD.js";
import "./chunk-PV3B5VUM.js";
import "./chunk-LYZMFOYM.js";
import "./chunk-5RDGWPHM.js";
import "./chunk-WCEMOYFJ.js";
import "./chunk-NZ7ZPGVU.js";
import "./chunk-SXYVSUAR.js";
import "./chunk-P3FA5CPP.js";
import "./chunk-QHKUHZUG.js";
import "./chunk-RDM3X2TD.js";
import "./chunk-RQBZITXC.js";

// src/app/zones/zones.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-C5V2YS3B.js").then((m) => m.ZonesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-KLYWPHX2.js").then((m) => m.ZoneAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-MVNQYSKM.js").then((m) => m.ZoneSystemsComponent)
      },
      {
        path: "triggers",
        canActivate: [AuthorisedUserGuard],
        data: { role_only: true },
        loadComponent: () => import("./chunk-DMQV2OH7.js").then((m) => m.ZoneTriggersComponent)
      },
      {
        path: "children",
        loadComponent: () => import("./chunk-2T3L4VFS.js").then((m) => m.ZoneChildrenComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-XACKENEE.js").then((m) => m.ZoneMetadataComponent)
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-6YKKS4B5.js").then((m) => m.ZoneGroupsComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-IDCPHKOK.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-HVIMBGWH.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-TGQJTHJ4.js.map

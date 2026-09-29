import {
  AuthorisedUserGuard
} from "./chunk-O7ASX3BW.js";
import {
  AuthorisedAdminGuard
} from "./chunk-OUHEQUVD.js";
import "./chunk-OFZFIF6J.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-YJGUUXUQ.js";
import "./chunk-FEDW4OWZ.js";
import "./chunk-FTKMWGBF.js";
import "./chunk-FFPP635U.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-VBYM4RWJ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-2IMPIBRD.js";
import "./chunk-2NTIF4N6.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-AFPWYCQQ.js";
import "./chunk-UAS3QR7R.js";
import "./chunk-DPH5AP7B.js";

// src/app/zones/zones.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-77SONOKA.js").then((m) => m.ZonesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-NOCMEQ2P.js").then((m) => m.ZoneAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-2GIGOR2X.js").then((m) => m.ZoneSystemsComponent)
      },
      {
        path: "triggers",
        canActivate: [AuthorisedUserGuard],
        data: { role_only: true },
        loadComponent: () => import("./chunk-CQ5XM75W.js").then((m) => m.ZoneTriggersComponent)
      },
      {
        path: "children",
        loadComponent: () => import("./chunk-BTXQYBDO.js").then((m) => m.ZoneChildrenComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-SAKX3UKP.js").then((m) => m.ZoneMetadataComponent)
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-QCEZL3HU.js").then((m) => m.ZoneGroupsComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-G6KRHGAQ.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-YVBWS6F5.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-ITRI5RRR.js.map

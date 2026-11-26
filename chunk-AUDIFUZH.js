import {
  authorisedAdminGuard,
  authorisedUserGuard
} from "./chunk-ZFAG3WTR.js";
import "./chunk-XMC3ZZ3M.js";
import "./chunk-6TJHSNQM.js";
import "./chunk-TVHKFUKR.js";
import "./chunk-LL56AHAM.js";
import "./chunk-DRPOBNEO.js";
import "./chunk-I54KCQXM.js";
import "./chunk-PZ3HFH4N.js";
import "./chunk-UONBBRS5.js";
import "./chunk-TXVXL5KT.js";
import "./chunk-OTF7M54K.js";
import "./chunk-PRQVSGD2.js";
import "./chunk-LD3K5ATK.js";
import "./chunk-Y2QSYZTA.js";
import "./chunk-BRT76G6A.js";
import "./chunk-6G3VFYSX.js";
import "./chunk-RQBZITXC.js";

// src/app/zones/zones.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-FCUNQK3H.js").then((m) => m.ZonesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-SDUBWMRH.js").then(
          (m) => m.ZoneAboutComponent
        )
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-ZBV5S7T7.js").then(
          (m) => m.ZoneSystemsComponent
        )
      },
      {
        path: "triggers",
        canActivate: [authorisedUserGuard],
        data: { role_only: true },
        loadComponent: () => import("./chunk-IRORKGGA.js").then(
          (m) => m.ZoneTriggersComponent
        )
      },
      {
        path: "children",
        loadComponent: () => import("./chunk-K5LTHPUC.js").then(
          (m) => m.ZoneChildrenComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-B225LFRG.js").then(
          (m) => m.ItemMetadataComponent
        )
      },
      {
        path: "groups",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-CVRQF5H2.js").then(
          (m) => m.ZoneGroupsComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-3M3SPBZ4.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-B6VGLFZ3.js").then(
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
//# debugId=3fdbaa69-d32d-5de1-b9cc-d4308d881562
//# sourceMappingURL=chunk-AUDIFUZH.js.map

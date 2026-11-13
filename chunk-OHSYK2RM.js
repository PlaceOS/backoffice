import {
  authorisedAdminGuard,
  authorisedUserGuard
} from "./chunk-VSA3XOQC.js";
import "./chunk-DS54MEBD.js";
import "./chunk-XSBVNB3I.js";
import "./chunk-LL56AHAM.js";
import "./chunk-AOBLWXUV.js";
import "./chunk-4VR6R4OK.js";
import "./chunk-RYLWZIJP.js";
import "./chunk-UONBBRS5.js";
import "./chunk-UBUJ7KM4.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import "./chunk-BRT76G6A.js";
import "./chunk-6G3VFYSX.js";
import "./chunk-RQBZITXC.js";

// src/app/zones/zones.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-KBZXZEA5.js").then((m) => m.ZonesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-VSTBHD3N.js").then(
          (m) => m.ZoneAboutComponent
        )
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-U525KHTT.js").then(
          (m) => m.ZoneSystemsComponent
        )
      },
      {
        path: "triggers",
        canActivate: [authorisedUserGuard],
        data: { role_only: true },
        loadComponent: () => import("./chunk-ZBWD65Z4.js").then(
          (m) => m.ZoneTriggersComponent
        )
      },
      {
        path: "children",
        loadComponent: () => import("./chunk-Z4XCLSZO.js").then(
          (m) => m.ZoneChildrenComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-K6AS5MWR.js").then(
          (m) => m.ItemMetadataComponent
        )
      },
      {
        path: "groups",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-AW4UGK56.js").then(
          (m) => m.ZoneGroupsComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-4DJEITME.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-T5SY7XHL.js").then(
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
//# sourceMappingURL=chunk-OHSYK2RM.js.map

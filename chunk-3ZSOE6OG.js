import {
  authorisedAdminGuard
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

// src/app/systems/systems.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-47SYMWON.js").then((m) => m.SystemsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-L4YKUUG2.js").then(
          (m) => m.SystemAboutComponent
        )
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-S5EGEVVM.js").then(
          (m) => m.SystemModulesComponent
        )
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-YOJOCOR7.js").then(
          (m) => m.SystemTriggersComponent
        )
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-3T7PGBXR.js").then(
          (m) => m.SystemZonesComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-K6AS5MWR.js").then(
          (m) => m.ItemMetadataComponent
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
//# debugId=1a5f2c68-392f-5af8-aa5f-6b7fa9de38e6
//# sourceMappingURL=chunk-3ZSOE6OG.js.map

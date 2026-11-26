import {
  authorisedAdminGuard
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

// src/app/systems/systems.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-R5BJWP6G.js").then((m) => m.SystemsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-BC67FJFX.js").then(
          (m) => m.SystemAboutComponent
        )
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-KL2AH2C6.js").then(
          (m) => m.SystemModulesComponent
        )
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-KY4MTUEH.js").then(
          (m) => m.SystemTriggersComponent
        )
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-I3T3GONJ.js").then(
          (m) => m.SystemZonesComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-B225LFRG.js").then(
          (m) => m.ItemMetadataComponent
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
//# debugId=7b68765d-ca97-5db0-8d96-1fe46a3ce040
//# sourceMappingURL=chunk-PSASRHOV.js.map

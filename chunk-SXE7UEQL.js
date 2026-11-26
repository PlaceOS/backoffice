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

// src/app/modules/modules.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-S57IERUC.js").then((m) => m.ModulesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-N5RLWI4N.js").then(
          (m) => m.ModuleAboutComponent
        )
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-O455ZXQP.js").then(
          (m) => m.ModuleSystemsComponent
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
//# debugId=010ef578-a41f-5bb8-ac0b-e8b685f4ff79
//# sourceMappingURL=chunk-SXE7UEQL.js.map

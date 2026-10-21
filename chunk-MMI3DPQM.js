import {
  AuthorisedAdminGuard
} from "./chunk-MBTB5FRH.js";
import "./chunk-JLMQNUTQ.js";
import "./chunk-UOJTYLOH.js";
import "./chunk-P3BK5ZDJ.js";
import "./chunk-SJPETQBZ.js";
import "./chunk-V3CYZPSM.js";
import "./chunk-S7FMIV3Y.js";
import "./chunk-WZTE63Q5.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-NMVMT4VD.js";
import "./chunk-4LBKZFUW.js";
import "./chunk-OQOLG7V4.js";
import "./chunk-RQBZITXC.js";

// src/app/modules/modules.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-KVHPTPRP.js").then((m) => m.ModulesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-YH6MRLXR.js").then(
          (m) => m.ModuleAboutComponent
        )
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-XGY7FYZM.js").then(
          (m) => m.ModuleSystemsComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-H25EYV3H.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-NGVA6MNE.js").then(
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
//# debugId=3adcdd30-0dba-5ef1-a8f4-fdc97f6d1513
//# sourceMappingURL=chunk-MMI3DPQM.js.map

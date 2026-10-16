import {
  AuthorisedAdminGuard
} from "./chunk-ECRBJ742.js";
import "./chunk-UY6HPU4F.js";
import "./chunk-T7AMAKFI.js";
import "./chunk-2UJFDB5M.js";
import "./chunk-LRQ6J6BW.js";
import "./chunk-5FH2CPQ5.js";
import "./chunk-GPHMWQA5.js";
import "./chunk-E2Z2L4DB.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-NMVMT4VD.js";
import "./chunk-7ONBXR6Y.js";
import "./chunk-YCZTZCQV.js";
import "./chunk-RQBZITXC.js";

// src/app/modules/modules.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-422UX2JH.js").then((m) => m.ModulesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-XACGUKIT.js").then(
          (m) => m.ModuleAboutComponent
        )
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-243TLMS6.js").then(
          (m) => m.ModuleSystemsComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-43KQCZAV.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-ML6I75GC.js").then(
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
//# sourceMappingURL=chunk-QM7BML4K.js.map

import {
  AuthorisedAdminGuard
} from "./chunk-6ZDPAIXF.js";
import "./chunk-R3KIBYX2.js";
import "./chunk-F2UXRHVQ.js";
import "./chunk-WDXKFFYO.js";
import "./chunk-WLIXIQFW.js";
import "./chunk-KIA2WBKL.js";
import "./chunk-HASFJPLN.js";
import "./chunk-BS66IPO2.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-3QDC3AOP.js";
import "./chunk-DKYBNEOC.js";
import "./chunk-HGOGRFKW.js";
import "./chunk-RQBZITXC.js";

// src/app/modules/modules.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-FVZNEXPR.js").then((m) => m.ModulesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-7G6KYWVM.js").then(
          (m) => m.ModuleAboutComponent
        )
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-3KWNICAK.js").then(
          (m) => m.ModuleSystemsComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-XWSAIUCD.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-XOYVNZQX.js").then(
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
//# sourceMappingURL=chunk-YQXTGATO.js.map

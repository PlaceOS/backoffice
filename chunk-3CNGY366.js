import {
  AuthorisedAdminGuard
} from "./chunk-24NSF32U.js";
import "./chunk-G7YFPNSL.js";
import "./chunk-SYH7ZBC5.js";
import "./chunk-XTDO4IU7.js";
import "./chunk-IID3C4LS.js";
import "./chunk-PIRFEBZC.js";
import "./chunk-JMHMEOZG.js";
import "./chunk-E63CPPEP.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-3QDC3AOP.js";
import "./chunk-33GRF44L.js";
import "./chunk-TCVU4336.js";
import "./chunk-RQBZITXC.js";

// src/app/modules/modules.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-WA2U4YB5.js").then((m) => m.ModulesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-WJCIPHPY.js").then(
          (m) => m.ModuleAboutComponent
        )
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-65CUVJW6.js").then(
          (m) => m.ModuleSystemsComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-HANWV6JU.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-2PA5B7ST.js").then(
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
//# sourceMappingURL=chunk-3CNGY366.js.map

import {
  AuthorisedAdminGuard
} from "./chunk-NR7W3OJC.js";
import "./chunk-P2Q6CJ4Q.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-PNLASVLZ.js";
import "./chunk-LGCOJQOV.js";
import "./chunk-5XY3WE42.js";
import "./chunk-UPJHMA72.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-PKJVK52W.js";
import "./chunk-Q2BV2GZB.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-U7MJINT7.js";
import "./chunk-Z45QSLBL.js";
import "./chunk-KWSTWQNB.js";

// src/app/modules/modules.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-NMYL2EBZ.js").then((m) => m.ModulesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-HEJGXAIR.js").then((m) => m.ModuleAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-NPYIYUSL.js").then((m) => m.ModuleSystemsComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-J6PAQIEE.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-E66ORXYX.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-3CAYO7WL.js.map

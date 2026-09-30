import {
  AuthorisedAdminGuard
} from "./chunk-MVZ4GR2D.js";
import "./chunk-3D43EOHJ.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-KVQ45LGL.js";
import "./chunk-ZQOGPWQ4.js";
import "./chunk-2C722Z46.js";
import "./chunk-G27ITG57.js";
import "./chunk-T65YNYD6.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-F34GYKGE.js";
import "./chunk-B77ZBLFJ.js";
import "./chunk-SXYVSUAR.js";
import "./chunk-QYMVVG4Y.js";
import "./chunk-6NXCBA4X.js";
import "./chunk-DPH5AP7B.js";

// src/app/modules/modules.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-AB667IEU.js").then((m) => m.ModulesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-LBHEZEG5.js").then((m) => m.ModuleAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-RMD65QYA.js").then((m) => m.ModuleSystemsComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-45NZZ7UP.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-CEC5U253.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-XORSCDEX.js.map

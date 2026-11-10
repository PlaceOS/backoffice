import {
  authorisedAdminGuard
} from "./chunk-QTUIPL6Q.js";
import "./chunk-2OUHWH7N.js";
import "./chunk-IN2BSCPT.js";
import "./chunk-2HWH2YE2.js";
import "./chunk-HFMNSA6D.js";
import "./chunk-GFMPFDY6.js";
import "./chunk-MUP2V42Q.js";
import "./chunk-6UTRGHRC.js";
import "./chunk-3VVTXJY2.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import "./chunk-UAEA3DWF.js";
import "./chunk-DTROA6L2.js";
import "./chunk-RQBZITXC.js";

// src/app/modules/modules.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-XLS77YYP.js").then((m) => m.ModulesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-2QA4REFF.js").then(
          (m) => m.ModuleAboutComponent
        )
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-DECW5GQY.js").then(
          (m) => m.ModuleSystemsComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-HAFB37F2.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-2EJ2KDOU.js").then(
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
//# debugId=b290ab44-8274-5d04-bdc3-aebd2d4d0d36
//# sourceMappingURL=chunk-LR4FEHKI.js.map

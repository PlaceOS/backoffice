import {
  AuthorisedAdminGuard
} from "./chunk-VPBKJ65W.js";
import "./chunk-27RGLWGV.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-LDPMLA3S.js";
import "./chunk-FQQU2C6T.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TWCYY2HH.js";
import "./chunk-G5DVCCF5.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-DG5F5M2I.js";
import "./chunk-SDGTGI2H.js";
import "./chunk-IWUSEH7D.js";
import "./chunk-M2N6S2L7.js";
import "./chunk-RQBZITXC.js";

// src/app/modules/modules.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-NJMYIGN4.js").then((m) => m.ModulesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-6I6MJRPT.js").then((m) => m.ModuleAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-SDFVUGVU.js").then((m) => m.ModuleSystemsComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-GIO3HQL4.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-DMTTXRFG.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-IXTQUHCL.js.map

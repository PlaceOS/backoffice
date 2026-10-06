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

// src/app/systems/systems.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-KB6NMKXR.js").then((m) => m.SystemsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-WGHE2ENC.js").then((m) => m.SystemAboutComponent)
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-GC3VEJUH.js").then((m) => m.SystemModulesComponent)
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-F5VCHCAT.js").then((m) => m.SystemTriggersComponent)
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-YZQINWHO.js").then((m) => m.SystemZonesComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-FSE7KPLK.js").then((m) => m.SystemMetadataComponent)
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
//# sourceMappingURL=chunk-DDPSHHDK.js.map

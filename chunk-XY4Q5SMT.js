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

// src/app/systems/systems.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-4HBDPKVZ.js").then((m) => m.SystemsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-BJBE6NVS.js").then((m) => m.SystemAboutComponent)
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-5CYDOBB7.js").then((m) => m.SystemModulesComponent)
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-V3FTX3MM.js").then((m) => m.SystemTriggersComponent)
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-YG5YKOYJ.js").then((m) => m.SystemZonesComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-S4L3C5IN.js").then((m) => m.SystemMetadataComponent)
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
//# sourceMappingURL=chunk-XY4Q5SMT.js.map

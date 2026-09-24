import {
  AuthorisedAdminGuard
} from "./chunk-2XWEDNA4.js";
import "./chunk-2F73QLMV.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-DSTTN5ZK.js";
import "./chunk-RWTEO4RZ.js";
import "./chunk-P7CK6ZAK.js";
import "./chunk-5UGYVUD7.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-QNBYRJPA.js";
import "./chunk-X5UG4F5Q.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-ODRM6BWH.js";
import "./chunk-62T6XHVB.js";
import "./chunk-KWSTWQNB.js";

// src/app/systems/systems.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-6FSFSXOF.js").then((m) => m.SystemsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-6HDOBLX4.js").then((m) => m.SystemAboutComponent)
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-L7MVJD6D.js").then((m) => m.SystemModulesComponent)
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-KT2NXWLR.js").then((m) => m.SystemTriggersComponent)
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-HH7ADTVN.js").then((m) => m.SystemZonesComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-6NPNE7A2.js").then((m) => m.SystemMetadataComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-TXZBQUBI.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-BMXHJVXJ.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-QF7NRE7I.js.map

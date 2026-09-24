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

// src/app/modules/modules.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-67KHWRNV.js").then((m) => m.ModulesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-TTE2JRHZ.js").then((m) => m.ModuleAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-3EOMOICU.js").then((m) => m.ModuleSystemsComponent)
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
//# sourceMappingURL=chunk-DNVR4WBB.js.map

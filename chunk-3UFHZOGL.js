import {
  AuthorisedAdminGuard
} from "./chunk-IV4R5XJB.js";
import "./chunk-XBHEJBLP.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-WRLTJCLW.js";
import "./chunk-FTY3EIHT.js";
import "./chunk-DVQI66VA.js";
import "./chunk-UBLR53FR.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-6IWBYUDE.js";
import "./chunk-BYWH3GLU.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-7XKIGCHY.js";
import "./chunk-DYV6NXUQ.js";
import "./chunk-KWSTWQNB.js";

// src/app/modules/modules.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-AUPE2OLN.js").then((m) => m.ModulesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-6GTYXPO4.js").then((m) => m.ModuleAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-JAL4SLGD.js").then((m) => m.ModuleSystemsComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-NF6GEFVH.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-JTMFX6AW.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-3UFHZOGL.js.map

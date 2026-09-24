import {
  AuthorisedAdminGuard
} from "./chunk-POI5XTHY.js";
import "./chunk-3VH5IDBT.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-X3MWAFCJ.js";
import "./chunk-4BL3WELN.js";
import "./chunk-O7OQ7JEW.js";
import "./chunk-TEN3ABAY.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-LMUB4LUK.js";
import "./chunk-OOF3366H.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-2S4OQ6TV.js";
import "./chunk-YPXZNU3N.js";
import "./chunk-KWSTWQNB.js";

// src/app/modules/modules.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-GHPW5R76.js").then((m) => m.ModulesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-OUCBYCXX.js").then((m) => m.ModuleAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-II6KKBEF.js").then((m) => m.ModuleSystemsComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-MRBQBD32.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-ZFHNFSMS.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-WC4ENCAF.js.map

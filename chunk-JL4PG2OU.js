import {
  AuthorisedAdminGuard
} from "./chunk-OUHEQUVD.js";
import "./chunk-OFZFIF6J.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-YJGUUXUQ.js";
import "./chunk-FEDW4OWZ.js";
import "./chunk-FTKMWGBF.js";
import "./chunk-FFPP635U.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-VBYM4RWJ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-2IMPIBRD.js";
import "./chunk-2NTIF4N6.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-AFPWYCQQ.js";
import "./chunk-UAS3QR7R.js";
import "./chunk-DPH5AP7B.js";

// src/app/modules/modules.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-AZUE6E5X.js").then((m) => m.ModulesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-XSUCBQ6Q.js").then((m) => m.ModuleAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-SZMFCGLK.js").then((m) => m.ModuleSystemsComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-G6KRHGAQ.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-YVBWS6F5.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-JL4PG2OU.js.map

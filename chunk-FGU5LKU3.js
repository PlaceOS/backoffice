import {
  authorisedAdminGuard
} from "./chunk-BY2MNJ6I.js";
import "./chunk-RPCO7W3D.js";
import "./chunk-BPSZRBL2.js";
import "./chunk-5N7DC3QB.js";
import "./chunk-SHWF4MFV.js";
import "./chunk-32E64OOS.js";
import "./chunk-GR5HLJ6A.js";
import "./chunk-ZPWJKOG5.js";
import "./chunk-ZXDSRNPN.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import "./chunk-XWSZBFF5.js";
import "./chunk-OGAUD6Z3.js";
import "./chunk-RQBZITXC.js";

// src/app/modules/modules.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-ZWOE2XCW.js").then((m) => m.ModulesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-YIY6CTWP.js").then(
          (m) => m.ModuleAboutComponent
        )
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-IJ2NIW3X.js").then(
          (m) => m.ModuleSystemsComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-VNWPVCGH.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-CWAQRVUX.js").then(
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
//# sourceMappingURL=chunk-FGU5LKU3.js.map

import {
  AuthorisedAdminGuard
} from "./chunk-6ZDPAIXF.js";
import "./chunk-R3KIBYX2.js";
import "./chunk-F2UXRHVQ.js";
import "./chunk-WDXKFFYO.js";
import "./chunk-WLIXIQFW.js";
import "./chunk-KIA2WBKL.js";
import "./chunk-HASFJPLN.js";
import "./chunk-BS66IPO2.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-3QDC3AOP.js";
import "./chunk-DKYBNEOC.js";
import "./chunk-HGOGRFKW.js";
import "./chunk-RQBZITXC.js";

// src/app/systems/systems.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-Q7MKW7LA.js").then((m) => m.SystemsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-VONK37H3.js").then(
          (m) => m.SystemAboutComponent
        )
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-FL5THUQ5.js").then(
          (m) => m.SystemModulesComponent
        )
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-CFNBC2VC.js").then(
          (m) => m.SystemTriggersComponent
        )
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-ZTHXZLA6.js").then(
          (m) => m.SystemZonesComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-SOQLHTGN.js").then(
          (m) => m.SystemMetadataComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-XWSAIUCD.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-XOYVNZQX.js").then(
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
//# debugId=849e77c1-199e-5e1f-9697-5e5c5c213b6d
//# sourceMappingURL=chunk-5I2UUOGO.js.map

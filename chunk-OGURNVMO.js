import {
  AuthorisedAdminGuard
} from "./chunk-3KIZABQU.js";
import "./chunk-LQK4CTL2.js";
import "./chunk-T7AMAKFI.js";
import "./chunk-7ICEG2QL.js";
import "./chunk-D7A7S3DF.js";
import "./chunk-3ONUAWGE.js";
import "./chunk-GPHMWQA5.js";
import "./chunk-E2Z2L4DB.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-P3FA5CPP.js";
import "./chunk-7ONBXR6Y.js";
import "./chunk-YCZTZCQV.js";
import "./chunk-RQBZITXC.js";

// src/app/systems/systems.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-M4RVZL6U.js").then((m) => m.SystemsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-PJBZQ4RY.js").then(
          (m) => m.SystemAboutComponent
        )
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-USBJYLHE.js").then(
          (m) => m.SystemModulesComponent
        )
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-NLC6MS76.js").then(
          (m) => m.SystemTriggersComponent
        )
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-TB5TSFLU.js").then(
          (m) => m.SystemZonesComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-CPYKZJMG.js").then(
          (m) => m.SystemMetadataComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-RXA6ZX3E.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-NQVRCDI6.js").then(
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
//# sourceMappingURL=chunk-OGURNVMO.js.map

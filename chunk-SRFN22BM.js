import {
  AuthorisedAdminGuard
} from "./chunk-24NSF32U.js";
import "./chunk-G7YFPNSL.js";
import "./chunk-SYH7ZBC5.js";
import "./chunk-XTDO4IU7.js";
import "./chunk-IID3C4LS.js";
import "./chunk-PIRFEBZC.js";
import "./chunk-JMHMEOZG.js";
import "./chunk-E63CPPEP.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-3QDC3AOP.js";
import "./chunk-33GRF44L.js";
import "./chunk-TCVU4336.js";
import "./chunk-RQBZITXC.js";

// src/app/systems/systems.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-QGQKQWPU.js").then((m) => m.SystemsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-4FIBUIDW.js").then(
          (m) => m.SystemAboutComponent
        )
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-BC6TTIBZ.js").then(
          (m) => m.SystemModulesComponent
        )
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-BXVP3BR7.js").then(
          (m) => m.SystemTriggersComponent
        )
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-7N35XCR2.js").then(
          (m) => m.SystemZonesComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-EHWMSCZU.js").then(
          (m) => m.SystemMetadataComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-HANWV6JU.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-2PA5B7ST.js").then(
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
//# sourceMappingURL=chunk-SRFN22BM.js.map

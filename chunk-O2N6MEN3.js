import {
  authorisedAdminGuard
} from "./chunk-QTUIPL6Q.js";
import "./chunk-2OUHWH7N.js";
import "./chunk-IN2BSCPT.js";
import "./chunk-2HWH2YE2.js";
import "./chunk-HFMNSA6D.js";
import "./chunk-GFMPFDY6.js";
import "./chunk-MUP2V42Q.js";
import "./chunk-6UTRGHRC.js";
import "./chunk-3VVTXJY2.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import "./chunk-UAEA3DWF.js";
import "./chunk-DTROA6L2.js";
import "./chunk-RQBZITXC.js";

// src/app/systems/systems.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-OJAAYCMP.js").then((m) => m.SystemsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-262A5USX.js").then(
          (m) => m.SystemAboutComponent
        )
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-WFKC642P.js").then(
          (m) => m.SystemModulesComponent
        )
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-OFS6GPZK.js").then(
          (m) => m.SystemTriggersComponent
        )
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-KHBS4YWP.js").then(
          (m) => m.SystemZonesComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-YRDCJPL2.js").then(
          (m) => m.ItemMetadataComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-HAFB37F2.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-2EJ2KDOU.js").then(
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
//# debugId=1a5f2c68-392f-5af8-aa5f-6b7fa9de38e6
//# sourceMappingURL=chunk-O2N6MEN3.js.map

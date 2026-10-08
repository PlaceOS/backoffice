import {
  AuthorisedAdminGuard
} from "./chunk-XE5EIFSD.js";
import "./chunk-EIPFTMWR.js";
import "./chunk-EUOPYYFD.js";
import "./chunk-PV3B5VUM.js";
import "./chunk-LYZMFOYM.js";
import "./chunk-5RDGWPHM.js";
import "./chunk-WCEMOYFJ.js";
import "./chunk-NZ7ZPGVU.js";
import "./chunk-SXYVSUAR.js";
import "./chunk-P3FA5CPP.js";
import "./chunk-QHKUHZUG.js";
import "./chunk-RDM3X2TD.js";
import "./chunk-RQBZITXC.js";

// src/app/systems/systems.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-XBDWXE5C.js").then((m) => m.SystemsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-UE6ATUNA.js").then((m) => m.SystemAboutComponent)
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-62DJKG4N.js").then((m) => m.SystemModulesComponent)
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-ACFLATSI.js").then((m) => m.SystemTriggersComponent)
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-WVRPLN7L.js").then((m) => m.SystemZonesComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-Y5E2O4AE.js").then((m) => m.SystemMetadataComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-IDCPHKOK.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-HVIMBGWH.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-IHWJO4SL.js.map

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

// src/app/systems/systems.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-2QMTLS57.js").then((m) => m.SystemsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-56A76LHS.js").then(
          (m) => m.SystemAboutComponent
        )
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-RYXELA7O.js").then(
          (m) => m.SystemModulesComponent
        )
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-TSRFSUYG.js").then(
          (m) => m.SystemTriggersComponent
        )
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-67ZSDFXL.js").then(
          (m) => m.SystemZonesComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-5UCU3LJY.js").then(
          (m) => m.ItemMetadataComponent
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
//# debugId=1a5f2c68-392f-5af8-aa5f-6b7fa9de38e6
//# sourceMappingURL=chunk-L4VRSEFW.js.map

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

// src/app/systems/systems.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-DSQGMSBY.js").then((m) => m.SystemsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-C72RNZOR.js").then((m) => m.SystemAboutComponent)
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-7VJ5DWV3.js").then((m) => m.SystemModulesComponent)
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-SHR3SSFN.js").then((m) => m.SystemTriggersComponent)
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-7WDRYDHJ.js").then((m) => m.SystemZonesComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-JPHFNA7U.js").then((m) => m.SystemMetadataComponent)
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
//# sourceMappingURL=chunk-EIIC7MUY.js.map

import {
  AuthorisedAdminGuard
} from "./chunk-MVZ4GR2D.js";
import "./chunk-3D43EOHJ.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-KVQ45LGL.js";
import "./chunk-ZQOGPWQ4.js";
import "./chunk-2C722Z46.js";
import "./chunk-G27ITG57.js";
import "./chunk-T65YNYD6.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-F34GYKGE.js";
import "./chunk-B77ZBLFJ.js";
import "./chunk-SXYVSUAR.js";
import "./chunk-QYMVVG4Y.js";
import "./chunk-6NXCBA4X.js";
import "./chunk-DPH5AP7B.js";

// src/app/systems/systems.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-7MQWOXCC.js").then((m) => m.SystemsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-V7ZTIDLE.js").then((m) => m.SystemAboutComponent)
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-24SZGGYH.js").then((m) => m.SystemModulesComponent)
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-QDSTNYMJ.js").then((m) => m.SystemTriggersComponent)
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-Y3GJJM5T.js").then((m) => m.SystemZonesComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-WSQIQTKM.js").then((m) => m.SystemMetadataComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-45NZZ7UP.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-CEC5U253.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-6BSBX2TK.js.map

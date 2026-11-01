import {
  authorisedAdminGuard
} from "./chunk-D4LWA3SX.js";
import "./chunk-6QIICYIK.js";
import "./chunk-GR7PR5Q6.js";
import "./chunk-WDXKFFYO.js";
import "./chunk-5BJVRHWW.js";
import "./chunk-VLLM34JN.js";
import "./chunk-55LQ6V7M.js";
import "./chunk-HASFJPLN.js";
import "./chunk-7CC5FNME.js";
import "./chunk-J5ZLUQMI.js";
import "./chunk-OTGYPXXQ.js";
import "./chunk-DKYBNEOC.js";
import "./chunk-HGOGRFKW.js";
import "./chunk-RQBZITXC.js";

// src/app/systems/systems.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-ZJ3R4ZOD.js").then((m) => m.SystemsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-SGV6IHAJ.js").then(
          (m) => m.SystemAboutComponent
        )
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-CFVE4PHE.js").then(
          (m) => m.SystemModulesComponent
        )
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-GOKXHRXG.js").then(
          (m) => m.SystemTriggersComponent
        )
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-COBSMULR.js").then(
          (m) => m.SystemZonesComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-CBXXGUV6.js").then(
          (m) => m.ItemMetadataComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-W26PDZG5.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-AGE3ISRO.js").then(
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
//# sourceMappingURL=chunk-5Y2B2MST.js.map

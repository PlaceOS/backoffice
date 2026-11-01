import {
  authorisedAdminGuard,
  authorisedUserGuard
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

// src/app/zones/zones.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-TS77JEPI.js").then((m) => m.ZonesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-LCJ5KL7W.js").then(
          (m) => m.ZoneAboutComponent
        )
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-GYICFQEX.js").then(
          (m) => m.ZoneSystemsComponent
        )
      },
      {
        path: "triggers",
        canActivate: [authorisedUserGuard],
        data: { role_only: true },
        loadComponent: () => import("./chunk-4SC5EHA2.js").then(
          (m) => m.ZoneTriggersComponent
        )
      },
      {
        path: "children",
        loadComponent: () => import("./chunk-OWSRFREL.js").then(
          (m) => m.ZoneChildrenComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-CBXXGUV6.js").then(
          (m) => m.ItemMetadataComponent
        )
      },
      {
        path: "groups",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-GX2WVKET.js").then(
          (m) => m.ZoneGroupsComponent
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
//# debugId=9106f3be-5a1e-559e-88ae-e1393d6cb879
//# sourceMappingURL=chunk-X56NLRCF.js.map

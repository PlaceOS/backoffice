import {
  AuthorisedUserGuard
} from "./chunk-KYXV2CLS.js";
import {
  AuthorisedAdminGuard
} from "./chunk-IV4R5XJB.js";
import "./chunk-XBHEJBLP.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-WRLTJCLW.js";
import "./chunk-FTY3EIHT.js";
import "./chunk-DVQI66VA.js";
import "./chunk-UBLR53FR.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-6IWBYUDE.js";
import "./chunk-BYWH3GLU.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-7XKIGCHY.js";
import "./chunk-DYV6NXUQ.js";
import "./chunk-KWSTWQNB.js";

// src/app/zones/zones.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-M7FN4RHK.js").then((m) => m.ZonesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-K6POBCRG.js").then((m) => m.ZoneAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-OGAMQKD4.js").then((m) => m.ZoneSystemsComponent)
      },
      {
        path: "triggers",
        canActivate: [AuthorisedUserGuard],
        data: { role_only: true },
        loadComponent: () => import("./chunk-XG2WCMY4.js").then((m) => m.ZoneTriggersComponent)
      },
      {
        path: "children",
        loadComponent: () => import("./chunk-2GIGJXZF.js").then((m) => m.ZoneChildrenComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-22MIOT3Q.js").then((m) => m.ZoneMetadataComponent)
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-EZ5QGXO7.js").then((m) => m.ZoneGroupsComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-NF6GEFVH.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-JTMFX6AW.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-MEVRENVH.js.map

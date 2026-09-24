import {
  AuthorisedUserGuard
} from "./chunk-SJTWXW7E.js";
import {
  AuthorisedAdminGuard
} from "./chunk-2XWEDNA4.js";
import "./chunk-2F73QLMV.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-DSTTN5ZK.js";
import "./chunk-RWTEO4RZ.js";
import "./chunk-P7CK6ZAK.js";
import "./chunk-5UGYVUD7.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-QNBYRJPA.js";
import "./chunk-X5UG4F5Q.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-ODRM6BWH.js";
import "./chunk-62T6XHVB.js";
import "./chunk-KWSTWQNB.js";

// src/app/zones/zones.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-EMTRBXID.js").then((m) => m.ZonesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-XRDD7FKG.js").then((m) => m.ZoneAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-IHT3Y6X2.js").then((m) => m.ZoneSystemsComponent)
      },
      {
        path: "triggers",
        canActivate: [AuthorisedUserGuard],
        data: { role_only: true },
        loadComponent: () => import("./chunk-CH6AD42X.js").then((m) => m.ZoneTriggersComponent)
      },
      {
        path: "children",
        loadComponent: () => import("./chunk-MEH7M6HC.js").then((m) => m.ZoneChildrenComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-6HARLD4H.js").then((m) => m.ZoneMetadataComponent)
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-WKFD5KVS.js").then((m) => m.ZoneGroupsComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-TXZBQUBI.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-BMXHJVXJ.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-KZYVMKHD.js.map

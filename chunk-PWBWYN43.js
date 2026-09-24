import {
  AuthorisedUserGuard
} from "./chunk-ZFFCDKPM.js";
import {
  AuthorisedAdminGuard
} from "./chunk-POI5XTHY.js";
import "./chunk-3VH5IDBT.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-X3MWAFCJ.js";
import "./chunk-4BL3WELN.js";
import "./chunk-O7OQ7JEW.js";
import "./chunk-TEN3ABAY.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-LMUB4LUK.js";
import "./chunk-OOF3366H.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-2S4OQ6TV.js";
import "./chunk-YPXZNU3N.js";
import "./chunk-KWSTWQNB.js";

// src/app/zones/zones.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-MIVBDOKF.js").then((m) => m.ZonesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-FV2RHUSE.js").then((m) => m.ZoneAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-JKLBBKPC.js").then((m) => m.ZoneSystemsComponent)
      },
      {
        path: "triggers",
        canActivate: [AuthorisedUserGuard],
        data: { role_only: true },
        loadComponent: () => import("./chunk-B7ZLVWVC.js").then((m) => m.ZoneTriggersComponent)
      },
      {
        path: "children",
        loadComponent: () => import("./chunk-Q67XTAXC.js").then((m) => m.ZoneChildrenComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-3L3JMZAP.js").then((m) => m.ZoneMetadataComponent)
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-4JMVUZUH.js").then((m) => m.ZoneGroupsComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-MRBQBD32.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-ZFHNFSMS.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-PWBWYN43.js.map

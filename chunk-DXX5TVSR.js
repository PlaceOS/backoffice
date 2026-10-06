import {
  AuthorisedUserGuard
} from "./chunk-53VUDFAG.js";
import {
  AuthorisedAdminGuard
} from "./chunk-VPBKJ65W.js";
import "./chunk-27RGLWGV.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-LDPMLA3S.js";
import "./chunk-FQQU2C6T.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TWCYY2HH.js";
import "./chunk-G5DVCCF5.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-DG5F5M2I.js";
import "./chunk-SDGTGI2H.js";
import "./chunk-IWUSEH7D.js";
import "./chunk-M2N6S2L7.js";
import "./chunk-RQBZITXC.js";

// src/app/zones/zones.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-SNTLKLU4.js").then((m) => m.ZonesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-O6IVYB4N.js").then((m) => m.ZoneAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-5O6ZBNPH.js").then((m) => m.ZoneSystemsComponent)
      },
      {
        path: "triggers",
        canActivate: [AuthorisedUserGuard],
        data: { role_only: true },
        loadComponent: () => import("./chunk-3AMZBTTZ.js").then((m) => m.ZoneTriggersComponent)
      },
      {
        path: "children",
        loadComponent: () => import("./chunk-S5GEND2R.js").then((m) => m.ZoneChildrenComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-CSDGTAJF.js").then((m) => m.ZoneMetadataComponent)
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-YTJ4CFES.js").then((m) => m.ZoneGroupsComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-GIO3HQL4.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-DMTTXRFG.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-DXX5TVSR.js.map

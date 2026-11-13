import {
  authorisedAdminGuard,
  authorisedUserGuard
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

// src/app/zones/zones.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-JMHCQ7KB.js").then((m) => m.ZonesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-ZNAIPMJI.js").then(
          (m) => m.ZoneAboutComponent
        )
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-Q5ZBDICE.js").then(
          (m) => m.ZoneSystemsComponent
        )
      },
      {
        path: "triggers",
        canActivate: [authorisedUserGuard],
        data: { role_only: true },
        loadComponent: () => import("./chunk-2NXANBDE.js").then(
          (m) => m.ZoneTriggersComponent
        )
      },
      {
        path: "children",
        loadComponent: () => import("./chunk-UCGAZLVJ.js").then(
          (m) => m.ZoneChildrenComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-5UCU3LJY.js").then(
          (m) => m.ItemMetadataComponent
        )
      },
      {
        path: "groups",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-T3PVDHXZ.js").then(
          (m) => m.ZoneGroupsComponent
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
//# debugId=9106f3be-5a1e-559e-88ae-e1393d6cb879
//# sourceMappingURL=chunk-RVKPEQBK.js.map

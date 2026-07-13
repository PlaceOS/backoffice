import "./chunk-KWSTWQNB.js";

// src/app/zones/zones.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-QQO3RX2H.js").then((m) => m.ZonesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-PSAKFDWP.js").then((m) => m.ZoneAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-XMEXVDLD.js").then((m) => m.ZoneSystemsComponent)
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-VBTY6AXB.js").then((m) => m.ZoneTriggersComponent)
      },
      {
        path: "children",
        loadComponent: () => import("./chunk-LXDB2LAC.js").then((m) => m.ZoneChildrenComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-S34LOSVE.js").then((m) => m.ZoneMetadataComponent)
      },
      {
        path: "groups",
        loadComponent: () => import("./chunk-ZWF4VTXS.js").then((m) => m.ZoneGroupsComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-37YK44AV.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-LIE4FBKP.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-LWFTQJTS.js.map

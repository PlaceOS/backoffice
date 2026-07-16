import "./chunk-KWSTWQNB.js";

// src/app/zones/zones.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-4B7QSPHQ.js").then((m) => m.ZonesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-7HW3NA7Z.js").then((m) => m.ZoneAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-S2N3FWWE.js").then((m) => m.ZoneSystemsComponent)
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-GGDGILNS.js").then((m) => m.ZoneTriggersComponent)
      },
      {
        path: "children",
        loadComponent: () => import("./chunk-S5QJTTEY.js").then((m) => m.ZoneChildrenComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-26DTFOXS.js").then((m) => m.ZoneMetadataComponent)
      },
      {
        path: "groups",
        loadComponent: () => import("./chunk-7Z253DSS.js").then((m) => m.ZoneGroupsComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-SJF5YJTQ.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-ZW6DVUWL.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-BOLMGHIG.js.map

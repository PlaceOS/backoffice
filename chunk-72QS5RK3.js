import "./chunk-KWSTWQNB.js";

// src/app/zones/zones.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-V3LYPF5N.js").then((m) => m.ZonesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-A3RKSUTV.js").then((m) => m.ZoneAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-T3PANM33.js").then((m) => m.ZoneSystemsComponent)
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-4SHRF5AK.js").then((m) => m.ZoneTriggersComponent)
      },
      {
        path: "children",
        loadComponent: () => import("./chunk-YIUHMM5L.js").then((m) => m.ZoneChildrenComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-JV2IMPJ2.js").then((m) => m.ZoneMetadataComponent)
      },
      {
        path: "groups",
        loadComponent: () => import("./chunk-IW535WNK.js").then((m) => m.ZoneGroupsComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-3U5KLVA7.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-USMZGBJ7.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-72QS5RK3.js.map

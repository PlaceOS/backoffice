import "./chunk-VYXW4D3Z.js";

// src/app/zones/zones.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-2AJ7W4RB.js").then((m) => m.ZonesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-BASD3OPS.js").then((m) => m.ZoneAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-NUY4X3XK.js").then((m) => m.ZoneSystemsComponent)
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-EUSJQES3.js").then((m) => m.ZoneTriggersComponent)
      },
      {
        path: "children",
        loadComponent: () => import("./chunk-362L4FJI.js").then((m) => m.ZoneChildrenComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-3B6KCP3R.js").then((m) => m.ZoneMetadataComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-HM4RE6TN.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-SIYT3UXH.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-DRR3WRS2.js.map

import "./chunk-VYXW4D3Z.js";

// src/app/systems/systems.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-GJMTHPYK.js").then((m) => m.SystemsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-DBCNG3S7.js").then((m) => m.SystemAboutComponent)
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-QHPDXXFB.js").then((m) => m.SystemModulesComponent)
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-YBQUYGWV.js").then((m) => m.SystemTriggersComponent)
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-7LBHYEWG.js").then((m) => m.SystemZonesComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-B6CGBTNV.js").then((m) => m.SystemMetadataComponent)
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
//# sourceMappingURL=chunk-W22L32XT.js.map

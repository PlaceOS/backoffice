import "./chunk-KWSTWQNB.js";

// src/app/systems/systems.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-OJYHNON3.js").then((m) => m.SystemsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-FM67PQXM.js").then((m) => m.SystemAboutComponent)
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-Y6NCK6JP.js").then((m) => m.SystemModulesComponent)
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-Q2DL3RCT.js").then((m) => m.SystemTriggersComponent)
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-XEOGP3II.js").then((m) => m.SystemZonesComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-AM7DRS2P.js").then((m) => m.SystemMetadataComponent)
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
//# sourceMappingURL=chunk-CY7Z67BI.js.map

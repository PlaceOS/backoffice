import "./chunk-KWSTWQNB.js";

// src/app/systems/systems.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-C6ELK7BF.js").then((m) => m.SystemsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-5GP76NSG.js").then((m) => m.SystemAboutComponent)
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-KTR6SC52.js").then((m) => m.SystemModulesComponent)
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-ZOGEUS57.js").then((m) => m.SystemTriggersComponent)
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-UCHKJPGG.js").then((m) => m.SystemZonesComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-5DFQ3AVH.js").then((m) => m.SystemMetadataComponent)
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
//# sourceMappingURL=chunk-U5ILLCJ7.js.map

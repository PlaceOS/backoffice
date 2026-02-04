import "./chunk-VYXW4D3Z.js";

// src/app/systems/systems.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-ZU3LSJIK.js").then((m) => m.SystemsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-IDTWM46E.js").then((m) => m.SystemAboutComponent)
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-UPT5CQRC.js").then((m) => m.SystemModulesComponent)
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-IJN3QRP6.js").then((m) => m.SystemTriggersComponent)
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-DZEQXYTP.js").then((m) => m.SystemZonesComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-XFOOQ6MO.js").then((m) => m.SystemMetadataComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-Y5VPVK6F.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-5C6O73RF.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-E3YC3MXJ.js.map

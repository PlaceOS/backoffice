import "./chunk-VYXW4D3Z.js";

// src/app/drivers/drivers.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-LJRQYZ53.js").then((m) => m.DriversComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-MGGWHFSE.js").then((m) => m.DriverAboutComponent)
      },
      {
        path: "docs",
        loadComponent: () => import("./chunk-HVNWUSS7.js").then((m) => m.DriverDocsComponent)
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-UQUQLNPG.js").then((m) => m.DriverModulesComponent)
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
//# sourceMappingURL=chunk-47M7HD7P.js.map

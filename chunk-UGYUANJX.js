import "./chunk-VYXW4D3Z.js";

// src/app/drivers/drivers.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-RN7HS7JO.js").then((m) => m.DriversComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-EZFGV5B5.js").then((m) => m.DriverAboutComponent)
      },
      {
        path: "docs",
        loadComponent: () => import("./chunk-UIFY2X6D.js").then((m) => m.DriverDocsComponent)
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-LTDXTIZI.js").then((m) => m.DriverModulesComponent)
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
//# sourceMappingURL=chunk-UGYUANJX.js.map

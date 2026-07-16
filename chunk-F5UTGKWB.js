import "./chunk-KWSTWQNB.js";

// src/app/drivers/drivers.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-Q2RSSKKP.js").then((m) => m.DriversComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-72N4FJI2.js").then((m) => m.DriverAboutComponent)
      },
      {
        path: "docs",
        loadComponent: () => import("./chunk-7O47QX5Z.js").then((m) => m.DriverDocsComponent)
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-2PJF3JRZ.js").then((m) => m.DriverModulesComponent)
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
//# sourceMappingURL=chunk-F5UTGKWB.js.map

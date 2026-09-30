import "./chunk-DPH5AP7B.js";

// src/app/drivers/drivers.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-UEPLPI3G.js").then((m) => m.DriversComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-I4W5BX7T.js").then((m) => m.DriverAboutComponent)
      },
      {
        path: "docs",
        loadComponent: () => import("./chunk-554PZXKV.js").then((m) => m.DriverDocsComponent)
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-J4UA34AN.js").then((m) => m.DriverModulesComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-45NZZ7UP.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-CEC5U253.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-KKW3YAXS.js.map

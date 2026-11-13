import "./chunk-RQBZITXC.js";

// src/app/drivers/drivers.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-GXCLUVSV.js").then((m) => m.DriversComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-NUNYTK3R.js").then(
          (m) => m.DriverAboutComponent
        )
      },
      {
        path: "docs",
        loadComponent: () => import("./chunk-X4ZCTIV7.js").then(
          (m) => m.DriverDocsComponent
        )
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-CNITLDT2.js").then(
          (m) => m.DriverModulesComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-4DJEITME.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-T5SY7XHL.js").then(
          (m) => m.SettingsHistoryViewComponent
        )
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# debugId=dbdf1fb0-41a3-5197-8cef-bc3e0cd7d4b8
//# sourceMappingURL=chunk-3QBS2254.js.map

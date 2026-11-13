import "./chunk-RQBZITXC.js";

// src/app/drivers/drivers.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-ZLA5NYTT.js").then((m) => m.DriversComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-UBOPBRZT.js").then(
          (m) => m.DriverAboutComponent
        )
      },
      {
        path: "docs",
        loadComponent: () => import("./chunk-KNGT6KSN.js").then(
          (m) => m.DriverDocsComponent
        )
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-VSHGS2PP.js").then(
          (m) => m.DriverModulesComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-VNWPVCGH.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-CWAQRVUX.js").then(
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
//# sourceMappingURL=chunk-EF6FVU2W.js.map

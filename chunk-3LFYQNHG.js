import "./chunk-RQBZITXC.js";

// src/app/drivers/drivers.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-CO6RDOSN.js").then((m) => m.DriversComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-7NB7WA6Q.js").then(
          (m) => m.DriverAboutComponent
        )
      },
      {
        path: "docs",
        loadComponent: () => import("./chunk-7LHEG6YO.js").then(
          (m) => m.DriverDocsComponent
        )
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-4IWBT62H.js").then(
          (m) => m.DriverModulesComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-W26PDZG5.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-AGE3ISRO.js").then(
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
//# sourceMappingURL=chunk-3LFYQNHG.js.map

import "./chunk-RQBZITXC.js";

// src/app/drivers/drivers.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-B4EXZXYF.js").then((m) => m.DriversComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-EX64MQOE.js").then(
          (m) => m.DriverAboutComponent
        )
      },
      {
        path: "docs",
        loadComponent: () => import("./chunk-B5QI5VYM.js").then(
          (m) => m.DriverDocsComponent
        )
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-AGWUBMNC.js").then(
          (m) => m.DriverModulesComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-HANWV6JU.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-2PA5B7ST.js").then(
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
//# sourceMappingURL=chunk-OZH7GEKX.js.map

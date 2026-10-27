import "./chunk-RQBZITXC.js";

// src/app/drivers/drivers.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-SLHJUDDU.js").then((m) => m.DriversComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-BPVKITEF.js").then(
          (m) => m.DriverAboutComponent
        )
      },
      {
        path: "docs",
        loadComponent: () => import("./chunk-BMPODDDX.js").then(
          (m) => m.DriverDocsComponent
        )
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-4LIGEAHX.js").then(
          (m) => m.DriverModulesComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-XWSAIUCD.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-XOYVNZQX.js").then(
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
//# sourceMappingURL=chunk-72MM4YWK.js.map

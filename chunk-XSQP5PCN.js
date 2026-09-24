import "./chunk-KWSTWQNB.js";

// src/app/drivers/drivers.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-WVSLJCFW.js").then((m) => m.DriversComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-QLB5FJN5.js").then((m) => m.DriverAboutComponent)
      },
      {
        path: "docs",
        loadComponent: () => import("./chunk-XAROBFED.js").then((m) => m.DriverDocsComponent)
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-YKVS6KGS.js").then((m) => m.DriverModulesComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-MRBQBD32.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-ZFHNFSMS.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-XSQP5PCN.js.map

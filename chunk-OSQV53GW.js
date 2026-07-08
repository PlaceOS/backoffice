import "./chunk-KWSTWQNB.js";

// src/app/modules/modules.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-5QEFNIAC.js").then((m) => m.ModulesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-MJO4AJFQ.js").then((m) => m.ModuleAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-Y2PBQEZ7.js").then((m) => m.ModuleSystemsComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-3U5KLVA7.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-USMZGBJ7.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-OSQV53GW.js.map

import "./chunk-KWSTWQNB.js";

// src/app/modules/modules.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-WOXLEMRI.js").then((m) => m.ModulesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-QLJ7X5N2.js").then((m) => m.ModuleAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-ODFTZEPT.js").then((m) => m.ModuleSystemsComponent)
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
//# sourceMappingURL=chunk-KU43GX66.js.map

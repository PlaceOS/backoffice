import "./chunk-VYXW4D3Z.js";

// src/app/modules/modules.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-HBNAZH6T.js").then((m) => m.ModulesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-IRPQDZZK.js").then((m) => m.ModuleAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-RUKRAORD.js").then((m) => m.ModuleSystemsComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-HM4RE6TN.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-SIYT3UXH.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-KI535BNY.js.map

import "./chunk-VYXW4D3Z.js";

// src/app/modules/modules.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-VRY5U4ZZ.js").then((m) => m.ModulesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-B32BUHNN.js").then((m) => m.ModuleAboutComponent)
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-NNQWW3KD.js").then((m) => m.ModuleSystemsComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-Y5VPVK6F.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-5C6O73RF.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-SYWAOLYT.js.map

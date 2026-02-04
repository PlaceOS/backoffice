import "./chunk-VYXW4D3Z.js";

// src/app/repositories/repositories.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-YCOQT4CW.js").then((m) => m.RepositoriesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-BY6L2FXY.js").then((m) => m.RepositoryAboutComponent)
      },
      {
        path: "drivers",
        loadComponent: () => import("./chunk-UMNYVZ75.js").then((m) => m.RepositoryDriversComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-Y5VPVK6F.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-7QOJB6XE.js.map

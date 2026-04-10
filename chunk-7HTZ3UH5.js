import "./chunk-VYXW4D3Z.js";

// src/app/repositories/repositories.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-U5GUPQWE.js").then((m) => m.RepositoriesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-WKZPFBTU.js").then((m) => m.RepositoryAboutComponent)
      },
      {
        path: "drivers",
        loadComponent: () => import("./chunk-7NSSHVDM.js").then((m) => m.RepositoryDriversComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-HM4RE6TN.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-7HTZ3UH5.js.map

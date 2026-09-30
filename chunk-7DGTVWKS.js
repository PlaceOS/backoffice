import "./chunk-DPH5AP7B.js";

// src/app/repositories/repositories.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-A5PPTE7P.js").then((m) => m.RepositoriesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-GWLZCOLL.js").then((m) => m.RepositoryAboutComponent)
      },
      {
        path: "drivers",
        loadComponent: () => import("./chunk-CIVYFVM2.js").then((m) => m.RepositoryDriversComponent)
      },
      {
        path: "changelog",
        loadComponent: () => import("./chunk-M7RV6GME.js").then((m) => m.RepositoryChangelogComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-45NZZ7UP.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-7DGTVWKS.js.map

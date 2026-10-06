import "./chunk-RQBZITXC.js";

// src/app/repositories/repositories.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-JM6CPFX2.js").then((m) => m.RepositoriesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-Y6EEYURA.js").then((m) => m.RepositoryAboutComponent)
      },
      {
        path: "drivers",
        loadComponent: () => import("./chunk-FK65NH4K.js").then((m) => m.RepositoryDriversComponent)
      },
      {
        path: "changelog",
        loadComponent: () => import("./chunk-3OMCKC7C.js").then((m) => m.RepositoryChangelogComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-GIO3HQL4.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-IBSBRUMN.js.map

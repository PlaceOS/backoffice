import "./chunk-RQBZITXC.js";

// src/app/repositories/repositories.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-HH3E6TKK.js").then(
      (m) => m.RepositoriesComponent
    ),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-ISJ7TEV5.js").then(
          (m) => m.RepositoryAboutComponent
        )
      },
      {
        path: "drivers",
        loadComponent: () => import("./chunk-SJ2PHCI5.js").then(
          (m) => m.RepositoryDriversComponent
        )
      },
      {
        path: "changelog",
        loadComponent: () => import("./chunk-VLOC462N.js").then(
          (m) => m.RepositoryChangelogComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-UKGYOPOQ.js").then(
          (m) => m.ExtensionOutletComponent
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
//# debugId=a32685d8-b62d-523f-bcf9-bed0bb0e05e2
//# sourceMappingURL=chunk-SGAH24ZE.js.map

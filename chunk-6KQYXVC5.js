import "./chunk-RQBZITXC.js";

// src/app/repositories/repositories.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-MHE5O3F4.js").then(
      (m) => m.RepositoriesComponent
    ),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-UIVSLYJF.js").then(
          (m) => m.RepositoryAboutComponent
        )
      },
      {
        path: "drivers",
        loadComponent: () => import("./chunk-ELL6J24T.js").then(
          (m) => m.RepositoryDriversComponent
        )
      },
      {
        path: "changelog",
        loadComponent: () => import("./chunk-IZWWOHUS.js").then(
          (m) => m.RepositoryChangelogComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-HANWV6JU.js").then(
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
//# sourceMappingURL=chunk-6KQYXVC5.js.map

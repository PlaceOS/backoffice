import "./chunk-RQBZITXC.js";

// src/app/repositories/repositories.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-5HUWYJOM.js").then(
      (m) => m.RepositoriesComponent
    ),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-VPO4HNUE.js").then(
          (m) => m.RepositoryAboutComponent
        )
      },
      {
        path: "drivers",
        loadComponent: () => import("./chunk-G7O7YMZN.js").then(
          (m) => m.RepositoryDriversComponent
        )
      },
      {
        path: "changelog",
        loadComponent: () => import("./chunk-N6SVLYUP.js").then(
          (m) => m.RepositoryChangelogComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-W26PDZG5.js").then(
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
//# sourceMappingURL=chunk-BQMCJG7B.js.map

import "./chunk-RQBZITXC.js";

// src/app/repositories/repositories.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-6H2BSK3G.js").then(
      (m) => m.RepositoriesComponent
    ),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-MC7CB3AD.js").then(
          (m) => m.RepositoryAboutComponent
        )
      },
      {
        path: "drivers",
        loadComponent: () => import("./chunk-R5OV7RXS.js").then(
          (m) => m.RepositoryDriversComponent
        )
      },
      {
        path: "changelog",
        loadComponent: () => import("./chunk-FTBSC2QL.js").then(
          (m) => m.RepositoryChangelogComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-4DJEITME.js").then(
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
//# sourceMappingURL=chunk-7J2BEG6M.js.map

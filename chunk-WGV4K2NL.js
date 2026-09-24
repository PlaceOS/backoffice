import "./chunk-KWSTWQNB.js";

// src/app/repositories/repositories.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-MNQWB5X5.js").then((m) => m.RepositoriesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-ZPHAFGYZ.js").then((m) => m.RepositoryAboutComponent)
      },
      {
        path: "drivers",
        loadComponent: () => import("./chunk-LBFN7JHO.js").then((m) => m.RepositoryDriversComponent)
      },
      {
        path: "changelog",
        loadComponent: () => import("./chunk-KRYLW7AY.js").then((m) => m.RepositoryChangelogComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-MRBQBD32.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-WGV4K2NL.js.map

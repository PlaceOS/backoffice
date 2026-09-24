import "./chunk-KWSTWQNB.js";

// src/app/repositories/repositories.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-C5XBNP5H.js").then((m) => m.RepositoriesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-DUOSJ4BA.js").then((m) => m.RepositoryAboutComponent)
      },
      {
        path: "drivers",
        loadComponent: () => import("./chunk-CN6BEVZJ.js").then((m) => m.RepositoryDriversComponent)
      },
      {
        path: "changelog",
        loadComponent: () => import("./chunk-2TEGBDZE.js").then((m) => m.RepositoryChangelogComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-TXZBQUBI.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-RTSRN2UI.js.map

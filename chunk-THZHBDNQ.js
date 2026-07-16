import "./chunk-KWSTWQNB.js";

// src/app/repositories/repositories.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-JPJP3VOK.js").then((m) => m.RepositoriesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-7LBDJU4V.js").then((m) => m.RepositoryAboutComponent)
      },
      {
        path: "drivers",
        loadComponent: () => import("./chunk-HYPFXH2W.js").then((m) => m.RepositoryDriversComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-SJF5YJTQ.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-THZHBDNQ.js.map

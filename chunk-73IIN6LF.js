import "./chunk-KWSTWQNB.js";

// src/app/repositories/repositories.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-TLLIPHYT.js").then((m) => m.RepositoriesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-GDFEMWJH.js").then((m) => m.RepositoryAboutComponent)
      },
      {
        path: "drivers",
        loadComponent: () => import("./chunk-OAM767AM.js").then((m) => m.RepositoryDriversComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-3U5KLVA7.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-73IIN6LF.js.map

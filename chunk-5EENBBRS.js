import "./chunk-KWSTWQNB.js";

// src/app/repositories/repositories.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-WLHS5CSO.js").then((m) => m.RepositoriesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-ICRHNIFV.js").then((m) => m.RepositoryAboutComponent)
      },
      {
        path: "drivers",
        loadComponent: () => import("./chunk-B57ZCLX7.js").then((m) => m.RepositoryDriversComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-3Z4JW4RF.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-5EENBBRS.js.map

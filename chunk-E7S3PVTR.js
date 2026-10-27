import "./chunk-RQBZITXC.js";

// src/app/repositories/repositories.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-276MCHUO.js").then(
      (m) => m.RepositoriesComponent
    ),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-FOYFCBX7.js").then(
          (m) => m.RepositoryAboutComponent
        )
      },
      {
        path: "drivers",
        loadComponent: () => import("./chunk-YYKR5V36.js").then(
          (m) => m.RepositoryDriversComponent
        )
      },
      {
        path: "changelog",
        loadComponent: () => import("./chunk-4LFZMSXQ.js").then(
          (m) => m.RepositoryChangelogComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-XWSAIUCD.js").then(
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
//# sourceMappingURL=chunk-E7S3PVTR.js.map

import "./chunk-RQBZITXC.js";

// src/app/domains/domains.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-VFICFAJP.js").then((m) => m.DomainsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-YLXICS7B.js").then(
          (m) => m.DomainAboutComponent
        )
      },
      {
        path: "applications",
        loadComponent: () => import("./chunk-GMYDZ435.js").then(
          (m) => m.DomainApplicationsComponent
        )
      },
      {
        path: "authentication",
        loadComponent: () => import("./chunk-2SJKO6GH.js").then(
          (m) => m.DomainAuthenticationComponent
        )
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-YVG5YG5J.js").then(
          (m) => m.DomainUsersComponent
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
//# debugId=6d0df396-4427-5e6e-9987-8368e0c4dfe1
//# sourceMappingURL=chunk-NA63QXUQ.js.map

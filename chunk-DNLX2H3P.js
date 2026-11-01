import "./chunk-RQBZITXC.js";

// src/app/domains/domains.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-EYIGKKFE.js").then((m) => m.DomainsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-B53RUKFB.js").then(
          (m) => m.DomainAboutComponent
        )
      },
      {
        path: "applications",
        loadComponent: () => import("./chunk-IYO6T7ZO.js").then(
          (m) => m.DomainApplicationsComponent
        )
      },
      {
        path: "authentication",
        loadComponent: () => import("./chunk-AGIVSU7V.js").then(
          (m) => m.DomainAuthenticationComponent
        )
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-SRW3C5QZ.js").then(
          (m) => m.DomainUsersComponent
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
//# debugId=6d0df396-4427-5e6e-9987-8368e0c4dfe1
//# sourceMappingURL=chunk-DNLX2H3P.js.map

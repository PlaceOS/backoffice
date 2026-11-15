import "./chunk-RQBZITXC.js";

// src/app/domains/domains.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-PI3G75S3.js").then((m) => m.DomainsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-DTKWMZBV.js").then(
          (m) => m.DomainAboutComponent
        )
      },
      {
        path: "applications",
        loadComponent: () => import("./chunk-2OKZSR53.js").then(
          (m) => m.DomainApplicationsComponent
        )
      },
      {
        path: "authentication",
        loadComponent: () => import("./chunk-BIKR43MC.js").then(
          (m) => m.DomainAuthenticationComponent
        )
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-TLMXRGUO.js").then(
          (m) => m.DomainUsersComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-XXVFF4K4.js").then(
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
//# sourceMappingURL=chunk-R3OHKK6G.js.map

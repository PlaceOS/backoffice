import "./chunk-RQBZITXC.js";

// src/app/domains/domains.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-QJ3GNRNC.js").then((m) => m.DomainsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-VG5UQPF7.js").then(
          (m) => m.DomainAboutComponent
        )
      },
      {
        path: "applications",
        loadComponent: () => import("./chunk-3453S4ZK.js").then(
          (m) => m.DomainApplicationsComponent
        )
      },
      {
        path: "authentication",
        loadComponent: () => import("./chunk-4XVFVEVD.js").then(
          (m) => m.DomainAuthenticationComponent
        )
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-5VAEZD3R.js").then(
          (m) => m.DomainUsersComponent
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
//# debugId=6d0df396-4427-5e6e-9987-8368e0c4dfe1
//# sourceMappingURL=chunk-SK4SE4VU.js.map

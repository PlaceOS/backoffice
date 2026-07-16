import "./chunk-KWSTWQNB.js";

// src/app/domains/domains.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-L7SNORZF.js").then((m) => m.DomainsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-7AMZCBGU.js").then((m) => m.DomainAboutComponent)
      },
      {
        path: "applications",
        loadComponent: () => import("./chunk-U5NJ67RO.js").then((m) => m.DomainApplicationsComponent)
      },
      {
        path: "authentication",
        loadComponent: () => import("./chunk-ULOLCDCS.js").then((m) => m.DomainAuthenticationComponent)
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-Z6MWOIBX.js").then((m) => m.DomainUsersComponent)
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
//# sourceMappingURL=chunk-YN55R5MO.js.map

import "./chunk-KWSTWQNB.js";

// src/app/domains/domains.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-KPNYFZAC.js").then((m) => m.DomainsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-4UAIJHVS.js").then((m) => m.DomainAboutComponent)
      },
      {
        path: "applications",
        loadComponent: () => import("./chunk-YRK4PE5C.js").then((m) => m.DomainApplicationsComponent)
      },
      {
        path: "authentication",
        loadComponent: () => import("./chunk-PRHMWEJY.js").then((m) => m.DomainAuthenticationComponent)
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-5TJXSOIU.js").then((m) => m.DomainUsersComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-MRBQBD32.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-ZQCSTXZN.js.map

import "./chunk-KWSTWQNB.js";

// src/app/domains/domains.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-PBJAZ7HN.js").then((m) => m.DomainsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-5WV4JFDE.js").then((m) => m.DomainAboutComponent)
      },
      {
        path: "applications",
        loadComponent: () => import("./chunk-MQXZHAFY.js").then((m) => m.DomainApplicationsComponent)
      },
      {
        path: "authentication",
        loadComponent: () => import("./chunk-EYRT3352.js").then((m) => m.DomainAuthenticationComponent)
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-KFWXID5S.js").then((m) => m.DomainUsersComponent)
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
//# sourceMappingURL=chunk-7E7T3X3A.js.map

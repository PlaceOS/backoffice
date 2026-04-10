import "./chunk-VYXW4D3Z.js";

// src/app/domains/domains.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-MRMNSHZG.js").then((m) => m.DomainsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-TMTDVPHW.js").then((m) => m.DomainAboutComponent)
      },
      {
        path: "applications",
        loadComponent: () => import("./chunk-R7YO4YXI.js").then((m) => m.DomainApplicationsComponent)
      },
      {
        path: "authentication",
        loadComponent: () => import("./chunk-ZEC4AZHV.js").then((m) => m.DomainAuthenticationComponent)
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-ZI56CQN7.js").then((m) => m.DomainUsersComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-HM4RE6TN.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-M6DZIN23.js.map

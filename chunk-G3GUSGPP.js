import "./chunk-VYXW4D3Z.js";

// src/app/domains/domains.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-5IBILS3W.js").then((m) => m.DomainsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-HQA6CORI.js").then((m) => m.DomainAboutComponent)
      },
      {
        path: "applications",
        loadComponent: () => import("./chunk-AM2GKEAW.js").then((m) => m.DomainApplicationsComponent)
      },
      {
        path: "authentication",
        loadComponent: () => import("./chunk-4XD6OTMK.js").then((m) => m.DomainAuthenticationComponent)
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-2SNEK4IJ.js").then((m) => m.DomainUsersComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-Y5VPVK6F.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-G3GUSGPP.js.map

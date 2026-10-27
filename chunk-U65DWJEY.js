import "./chunk-RQBZITXC.js";

// src/app/domains/domains.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-VTBT2GUH.js").then((m) => m.DomainsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-OLP5C5ZQ.js").then(
          (m) => m.DomainAboutComponent
        )
      },
      {
        path: "applications",
        loadComponent: () => import("./chunk-ONNHRIGL.js").then(
          (m) => m.DomainApplicationsComponent
        )
      },
      {
        path: "authentication",
        loadComponent: () => import("./chunk-WPRTY2VT.js").then(
          (m) => m.DomainAuthenticationComponent
        )
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-OZNW2VM5.js").then(
          (m) => m.DomainUsersComponent
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
//# debugId=6d0df396-4427-5e6e-9987-8368e0c4dfe1
//# sourceMappingURL=chunk-U65DWJEY.js.map

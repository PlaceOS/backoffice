import "./chunk-RQBZITXC.js";

// src/app/groups/groups.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-XXWDTDNP.js").then((m) => m.GroupsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-TPIMADO4.js").then(
          (m) => m.GroupAboutComponent
        )
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-255PNQML.js").then(
          (m) => m.GroupUsersComponent
        )
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-ELKIDR2C.js").then(
          (m) => m.GroupZonesComponent
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
//# debugId=8956bc9e-6e70-5f88-bb53-858beede3895
//# sourceMappingURL=chunk-5Q3IXMAK.js.map

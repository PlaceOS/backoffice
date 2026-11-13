import "./chunk-RQBZITXC.js";

// src/app/groups/groups.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-ZSNKGJZD.js").then((m) => m.GroupsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-FVQJ74J4.js").then(
          (m) => m.GroupAboutComponent
        )
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-DFGM7TNF.js").then(
          (m) => m.GroupUsersComponent
        )
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-PCK7MKXO.js").then(
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
//# sourceMappingURL=chunk-DX2LWIKG.js.map

import "./chunk-RQBZITXC.js";

// src/app/groups/groups.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-YQJMXNZX.js").then((m) => m.GroupsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-FE2QH77O.js").then(
          (m) => m.GroupAboutComponent
        )
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-DB75RLUG.js").then(
          (m) => m.GroupUsersComponent
        )
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-V22XMQU3.js").then(
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
//# sourceMappingURL=chunk-T67UXK3O.js.map

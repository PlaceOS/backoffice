import "./chunk-RQBZITXC.js";

// src/app/groups/groups.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-HMYDTW5C.js").then((m) => m.GroupsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-EG64ZJG4.js").then(
          (m) => m.GroupAboutComponent
        )
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-4XJBPH2V.js").then(
          (m) => m.GroupUsersComponent
        )
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-H3JM4362.js").then(
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
//# sourceMappingURL=chunk-6HJKUQ7A.js.map

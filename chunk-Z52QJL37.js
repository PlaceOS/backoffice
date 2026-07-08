import "./chunk-KWSTWQNB.js";

// src/app/groups/groups.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-A5MP2GTT.js").then((m) => m.GroupsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-QKVBRYRS.js").then((m) => m.GroupAboutComponent)
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-SQBPICY6.js").then((m) => m.GroupUsersComponent)
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-TIFBLZXH.js").then((m) => m.GroupZonesComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-Z52QJL37.js.map

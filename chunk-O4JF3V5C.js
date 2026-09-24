import "./chunk-KWSTWQNB.js";

// src/app/groups/groups.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-LWPZYKPE.js").then((m) => m.GroupsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-PHR3RDZI.js").then((m) => m.GroupAboutComponent)
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-442J4UQ7.js").then((m) => m.GroupUsersComponent)
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-S3U36L5E.js").then((m) => m.GroupZonesComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-O4JF3V5C.js.map

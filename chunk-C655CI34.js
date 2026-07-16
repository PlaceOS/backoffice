import "./chunk-KWSTWQNB.js";

// src/app/groups/groups.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-KE23HOPB.js").then((m) => m.GroupsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-AG3EPRCU.js").then((m) => m.GroupAboutComponent)
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-H5SGT4SL.js").then((m) => m.GroupUsersComponent)
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-CIRVALUM.js").then((m) => m.GroupZonesComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-C655CI34.js.map

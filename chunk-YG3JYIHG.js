import "./chunk-KWSTWQNB.js";

// src/app/groups/groups.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-G2FLNQWF.js").then((m) => m.GroupsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-PL7HEUL7.js").then((m) => m.GroupAboutComponent)
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-T7IBZMIE.js").then((m) => m.GroupUsersComponent)
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-Q2FSMGLA.js").then((m) => m.GroupZonesComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-YG3JYIHG.js.map

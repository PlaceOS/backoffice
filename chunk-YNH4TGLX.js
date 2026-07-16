import "./chunk-KWSTWQNB.js";

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-ENRU54NE.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-ZKCBCHDC.js").then((m) => m.UserAboutComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-YJGXTXSK.js").then((m) => m.UserMetadataComponent)
      },
      {
        path: "groups",
        loadComponent: () => import("./chunk-AN7GA5EU.js").then((m) => m.UserGroupsComponent)
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-HP6OBELC.js").then((m) => m.UserHistoryComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-SJF5YJTQ.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-YNH4TGLX.js.map

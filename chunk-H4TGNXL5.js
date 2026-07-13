import "./chunk-KWSTWQNB.js";

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-OABI55WN.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-RQMLH2ZZ.js").then((m) => m.UserAboutComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-UOX5ZXGQ.js").then((m) => m.UserMetadataComponent)
      },
      {
        path: "groups",
        loadComponent: () => import("./chunk-D4E26O2V.js").then((m) => m.UserGroupsComponent)
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-LFGEMEAI.js").then((m) => m.UserHistoryComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-37YK44AV.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-H4TGNXL5.js.map

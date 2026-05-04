import "./chunk-KWSTWQNB.js";

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-4RJB3UAA.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-KGRBRN6P.js").then((m) => m.UserAboutComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-O4RBLBXD.js").then((m) => m.UserMetadataComponent)
      },
      {
        path: "groups",
        loadComponent: () => import("./chunk-4335VXJE.js").then((m) => m.UserGroupsComponent)
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-IO5J76VK.js").then((m) => m.UserHistoryComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-3Z4JW4RF.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-U4BAFZL7.js.map

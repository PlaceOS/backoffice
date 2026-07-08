import "./chunk-KWSTWQNB.js";

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-E4YQ2KHE.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-OVIPI2GK.js").then((m) => m.UserAboutComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-JUOGGDFC.js").then((m) => m.UserMetadataComponent)
      },
      {
        path: "groups",
        loadComponent: () => import("./chunk-4RGO656T.js").then((m) => m.UserGroupsComponent)
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-VVXO4MKO.js").then((m) => m.UserHistoryComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-3U5KLVA7.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-4LUHFBHV.js.map

import "./chunk-KWSTWQNB.js";

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-CSFIXK6P.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-ZJU3QETB.js").then((m) => m.UserAboutComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-6XUPEXOC.js").then((m) => m.UserMetadataComponent)
      },
      {
        path: "groups",
        loadComponent: () => import("./chunk-N6QNWATT.js").then((m) => m.UserGroupsComponent)
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-TCDHWOKW.js").then((m) => m.UserHistoryComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-UP3BRFVH.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-EC433MWJ.js.map

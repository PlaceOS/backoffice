import "./chunk-VYXW4D3Z.js";

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-HK5LSV7G.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-6VDVTNTU.js").then((m) => m.UserAboutComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-DWQSFFYW.js").then((m) => m.UserMetadataComponent)
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-EPZXEOSB.js").then((m) => m.UserHistoryComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-Y5VPVK6F.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-QKTH2AQ2.js.map

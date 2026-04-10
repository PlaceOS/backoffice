import "./chunk-VYXW4D3Z.js";

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-RTAOU2TN.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-YSIQPHDN.js").then((m) => m.UserAboutComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-M5BKQZSC.js").then((m) => m.UserMetadataComponent)
      },
      {
        path: "history",
        loadComponent: () => import("./chunk-3PMCYRJR.js").then((m) => m.UserHistoryComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-HM4RE6TN.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-SZVZA2RF.js.map

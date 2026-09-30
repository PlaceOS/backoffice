import "./chunk-DPH5AP7B.js";

// src/app/groups/groups.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-YBJL6FER.js").then((m) => m.GroupsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-EYZ6T3CV.js").then((m) => m.GroupAboutComponent)
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-35HF2H5S.js").then((m) => m.GroupUsersComponent)
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-4JIMUIST.js").then((m) => m.GroupZonesComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-3ZA5DU6U.js.map

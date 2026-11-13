import "./chunk-RQBZITXC.js";

// src/app/groups/groups.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-ST7E2TJI.js").then((m) => m.GroupsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-D63WJN65.js").then(
          (m) => m.GroupAboutComponent
        )
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-FLFQ2KX6.js").then(
          (m) => m.GroupUsersComponent
        )
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-YUK2PRHK.js").then(
          (m) => m.GroupZonesComponent
        )
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# debugId=8956bc9e-6e70-5f88-bb53-858beede3895
//# sourceMappingURL=chunk-7OR44PIV.js.map

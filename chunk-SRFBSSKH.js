import "./chunk-RQBZITXC.js";

// src/app/triggers/triggers.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-KDEOYRUQ.js").then((m) => m.TriggersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-OMVICWBQ.js").then(
          (m) => m.TriggerAboutComponent
        )
      },
      {
        path: "instances",
        loadComponent: () => import("./chunk-2O4SMD47.js").then(
          (m) => m.TriggerInstancesComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-HANWV6JU.js").then(
          (m) => m.ExtensionOutletComponent
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
//# debugId=944ba572-ae07-51a3-8049-f7d9e3eeb2f3
//# sourceMappingURL=chunk-SRFBSSKH.js.map

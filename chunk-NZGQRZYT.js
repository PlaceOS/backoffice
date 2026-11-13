import "./chunk-RQBZITXC.js";

// src/app/triggers/triggers.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-ZQJQJ4XG.js").then((m) => m.TriggersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-KDFZ4Q27.js").then(
          (m) => m.TriggerAboutComponent
        )
      },
      {
        path: "instances",
        loadComponent: () => import("./chunk-G5X4UFT7.js").then(
          (m) => m.TriggerInstancesComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-VNWPVCGH.js").then(
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
//# sourceMappingURL=chunk-NZGQRZYT.js.map

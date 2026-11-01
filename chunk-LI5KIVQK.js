import "./chunk-RQBZITXC.js";

// src/app/triggers/triggers.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-AGNOZW2Y.js").then((m) => m.TriggersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-PIMBJ5SO.js").then(
          (m) => m.TriggerAboutComponent
        )
      },
      {
        path: "instances",
        loadComponent: () => import("./chunk-S6SRVNEG.js").then(
          (m) => m.TriggerInstancesComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-W26PDZG5.js").then(
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
//# sourceMappingURL=chunk-LI5KIVQK.js.map

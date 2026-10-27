import "./chunk-RQBZITXC.js";

// src/app/triggers/triggers.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-GRCJ3VJA.js").then((m) => m.TriggersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-3KWC7SGW.js").then(
          (m) => m.TriggerAboutComponent
        )
      },
      {
        path: "instances",
        loadComponent: () => import("./chunk-RZCFF2O4.js").then(
          (m) => m.TriggerInstancesComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-XWSAIUCD.js").then(
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
//# sourceMappingURL=chunk-J4RZ3F5J.js.map

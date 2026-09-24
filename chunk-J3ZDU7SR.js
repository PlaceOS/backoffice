import "./chunk-KWSTWQNB.js";

// src/app/triggers/triggers.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-MGMQG5JY.js").then((m) => m.TriggersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-4GA5DTIJ.js").then((m) => m.TriggerAboutComponent)
      },
      {
        path: "instances",
        loadComponent: () => import("./chunk-P4QDFZ4V.js").then((m) => m.TriggerInstancesComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-MRBQBD32.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-J3ZDU7SR.js.map

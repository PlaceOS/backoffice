import "./chunk-KWSTWQNB.js";

// src/app/triggers/triggers.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-QNSUKZFC.js").then((m) => m.TriggersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-W2TLVLIN.js").then((m) => m.TriggerAboutComponent)
      },
      {
        path: "instances",
        loadComponent: () => import("./chunk-PJ6HGQDO.js").then((m) => m.TriggerInstancesComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-SJF5YJTQ.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-VVFPMOVZ.js.map

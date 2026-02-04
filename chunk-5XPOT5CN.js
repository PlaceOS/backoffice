import "./chunk-VYXW4D3Z.js";

// src/app/triggers/triggers.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-UCIJQQSQ.js").then((m) => m.TriggersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-HY53MONS.js").then((m) => m.TriggerAboutComponent)
      },
      {
        path: "instances",
        loadComponent: () => import("./chunk-E4EBGYI5.js").then((m) => m.TriggerInstancesComponent)
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
//# sourceMappingURL=chunk-5XPOT5CN.js.map

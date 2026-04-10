import "./chunk-VYXW4D3Z.js";

// src/app/triggers/triggers.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-ZHKOMFSL.js").then((m) => m.TriggersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-FI4I4CJY.js").then((m) => m.TriggerAboutComponent)
      },
      {
        path: "instances",
        loadComponent: () => import("./chunk-6MCUGC2W.js").then((m) => m.TriggerInstancesComponent)
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
//# sourceMappingURL=chunk-BSPA7SQW.js.map

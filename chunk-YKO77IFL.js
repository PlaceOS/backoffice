import "./chunk-KWSTWQNB.js";

// src/app/triggers/triggers.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-KUXKV2OO.js").then((m) => m.TriggersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-6ETMFX5W.js").then((m) => m.TriggerAboutComponent)
      },
      {
        path: "instances",
        loadComponent: () => import("./chunk-ZUI2GSDL.js").then((m) => m.TriggerInstancesComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-3U5KLVA7.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-YKO77IFL.js.map

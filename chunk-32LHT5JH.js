import "./chunk-RQBZITXC.js";

// src/app/triggers/triggers.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-IJ2VYVHC.js").then((m) => m.TriggersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-7OROFT5B.js").then(
          (m) => m.TriggerAboutComponent
        )
      },
      {
        path: "instances",
        loadComponent: () => import("./chunk-VZMHNPUZ.js").then(
          (m) => m.TriggerInstancesComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-4DJEITME.js").then(
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
//# sourceMappingURL=chunk-32LHT5JH.js.map

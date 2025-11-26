import "./chunk-KWSTWQNB.js";

// src/app/metrics/metrics.routes.ts
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-GFQ4OTJ7.js").then((m) => m.MetricsComponent),
    children: []
  },
  {
    path: "dashboard",
    loadComponent: () => import("./chunk-GFQ4OTJ7.js").then((m) => m.MetricsComponent),
    children: []
  },
  {
    path: "dashboard/:period",
    loadComponent: () => import("./chunk-GFQ4OTJ7.js").then((m) => m.MetricsComponent),
    children: []
  },
  {
    path: ":period",
    loadComponent: () => import("./chunk-GFQ4OTJ7.js").then((m) => m.MetricsComponent),
    children: []
  },
  { path: "**", redirectTo: "" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-FPGG6QAW.js.map

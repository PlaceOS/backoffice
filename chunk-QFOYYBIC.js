import "./chunk-KWSTWQNB.js";

// src/app/metrics/metrics.routes.ts
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-K7FWRHAG.js").then((m) => m.MetricsComponent),
    children: []
  },
  {
    path: "dashboard",
    loadComponent: () => import("./chunk-K7FWRHAG.js").then((m) => m.MetricsComponent),
    children: []
  },
  {
    path: "dashboard/:period",
    loadComponent: () => import("./chunk-K7FWRHAG.js").then((m) => m.MetricsComponent),
    children: []
  },
  {
    path: ":period",
    loadComponent: () => import("./chunk-K7FWRHAG.js").then((m) => m.MetricsComponent),
    children: []
  },
  { path: "**", redirectTo: "" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-QFOYYBIC.js.map

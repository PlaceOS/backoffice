import "./chunk-KWSTWQNB.js";

// src/app/metrics/metrics.routes.ts
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-JFYARCC2.js").then((m) => m.MetricsComponent),
    children: []
  },
  {
    path: "dashboard",
    loadComponent: () => import("./chunk-JFYARCC2.js").then((m) => m.MetricsComponent),
    children: []
  },
  {
    path: "dashboard/:period",
    loadComponent: () => import("./chunk-JFYARCC2.js").then((m) => m.MetricsComponent),
    children: []
  },
  {
    path: ":period",
    loadComponent: () => import("./chunk-JFYARCC2.js").then((m) => m.MetricsComponent),
    children: []
  },
  { path: "**", redirectTo: "" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-W4JOSB7L.js.map

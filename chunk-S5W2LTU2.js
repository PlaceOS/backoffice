import {
  authorisedAdminGuard
} from "./chunk-7K56J27A.js";
import "./chunk-OXU3CTMC.js";
import "./chunk-X3HUV4CQ.js";
import "./chunk-TVHKFUKR.js";
import "./chunk-LL56AHAM.js";
import "./chunk-S6ATYSOE.js";
import "./chunk-LPAJZMY2.js";
import "./chunk-UY6DH2NQ.js";
import "./chunk-UONBBRS5.js";
import "./chunk-PXU3R4CZ.js";
import "./chunk-OTF7M54K.js";
import "./chunk-K7DUQFI6.js";
import "./chunk-4MDDUS4W.js";
import "./chunk-Y2QSYZTA.js";
import "./chunk-BRT76G6A.js";
import "./chunk-6G3VFYSX.js";
import "./chunk-RQBZITXC.js";

// src/app/modules/modules.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-F3CV57ZA.js").then((m) => m.ModulesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-EE7NMBMH.js").then(
          (m) => m.ModuleAboutComponent
        )
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-WCDSUJCR.js").then(
          (m) => m.ModuleSystemsComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-EPJRW7N4.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-WKBPWUQP.js").then(
          (m) => m.SettingsHistoryViewComponent
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
//# debugId=010ef578-a41f-5bb8-ac0b-e8b685f4ff79
//# sourceMappingURL=chunk-S5W2LTU2.js.map

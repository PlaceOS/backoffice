import {
  authorisedAdminGuard
} from "./chunk-VSA3XOQC.js";
import "./chunk-DS54MEBD.js";
import "./chunk-XSBVNB3I.js";
import "./chunk-LL56AHAM.js";
import "./chunk-AOBLWXUV.js";
import "./chunk-4VR6R4OK.js";
import "./chunk-RYLWZIJP.js";
import "./chunk-UONBBRS5.js";
import "./chunk-UBUJ7KM4.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import "./chunk-BRT76G6A.js";
import "./chunk-6G3VFYSX.js";
import "./chunk-RQBZITXC.js";

// src/app/modules/modules.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-22NYAXDX.js").then((m) => m.ModulesComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-TPLECLJ5.js").then(
          (m) => m.ModuleAboutComponent
        )
      },
      {
        path: "systems",
        loadComponent: () => import("./chunk-TB6HCJNK.js").then(
          (m) => m.ModuleSystemsComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-4DJEITME.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      {
        path: "history",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-T5SY7XHL.js").then(
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
//# debugId=b290ab44-8274-5d04-bdc3-aebd2d4d0d36
//# sourceMappingURL=chunk-D2XOEABS.js.map

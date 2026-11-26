import {
  authorisedAdminGuard
} from "./chunk-ZFAG3WTR.js";
import "./chunk-XMC3ZZ3M.js";
import "./chunk-6TJHSNQM.js";
import "./chunk-TVHKFUKR.js";
import "./chunk-LL56AHAM.js";
import "./chunk-DRPOBNEO.js";
import "./chunk-I54KCQXM.js";
import "./chunk-PZ3HFH4N.js";
import "./chunk-UONBBRS5.js";
import "./chunk-TXVXL5KT.js";
import "./chunk-OTF7M54K.js";
import "./chunk-PRQVSGD2.js";
import "./chunk-LD3K5ATK.js";
import "./chunk-Y2QSYZTA.js";
import "./chunk-BRT76G6A.js";
import "./chunk-6G3VFYSX.js";
import "./chunk-RQBZITXC.js";

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-GPMAUMCU.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-WQG7RCUN.js").then(
          (m) => m.UserAboutComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-B225LFRG.js").then(
          (m) => m.ItemMetadataComponent
        )
      },
      {
        path: "groups",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-PCZVSMNR.js").then(
          (m) => m.UserGroupsComponent
        )
      },
      {
        path: "history",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-33IWAGEK.js").then(
          (m) => m.UserHistoryComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-3M3SPBZ4.js").then(
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
//# debugId=f1c93e87-60cf-5eb2-ae13-c2faa216cda4
//# sourceMappingURL=chunk-MVXL4QAL.js.map

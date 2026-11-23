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

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-C6FWWSFI.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-FSB4CYXC.js").then(
          (m) => m.UserAboutComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-43SBAX4R.js").then(
          (m) => m.ItemMetadataComponent
        )
      },
      {
        path: "groups",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-5IRKDCVM.js").then(
          (m) => m.UserGroupsComponent
        )
      },
      {
        path: "history",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-UEAFDYYL.js").then(
          (m) => m.UserHistoryComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-EPJRW7N4.js").then(
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
//# sourceMappingURL=chunk-NUV5VR4P.js.map

import {
  AuthorisedAdminGuard
} from "./chunk-POI5XTHY.js";
import "./chunk-3VH5IDBT.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-X3MWAFCJ.js";
import "./chunk-4BL3WELN.js";
import "./chunk-O7OQ7JEW.js";
import "./chunk-TEN3ABAY.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-LMUB4LUK.js";
import "./chunk-OOF3366H.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-2S4OQ6TV.js";
import "./chunk-YPXZNU3N.js";
import "./chunk-KWSTWQNB.js";

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-ISOWPFJF.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-Y2TFB3UT.js").then((m) => m.UserAboutComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-DYFRWRIU.js").then((m) => m.UserMetadataComponent)
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-TTVWIAZU.js").then((m) => m.UserGroupsComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-KJBMP43A.js").then((m) => m.UserHistoryComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-MRBQBD32.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-6TKRN4KH.js.map

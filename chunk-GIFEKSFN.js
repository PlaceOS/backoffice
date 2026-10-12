import {
  AuthorisedAdminGuard
} from "./chunk-3KIZABQU.js";
import "./chunk-LQK4CTL2.js";
import "./chunk-T7AMAKFI.js";
import "./chunk-7ICEG2QL.js";
import "./chunk-D7A7S3DF.js";
import "./chunk-3ONUAWGE.js";
import "./chunk-GPHMWQA5.js";
import "./chunk-E2Z2L4DB.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-P3FA5CPP.js";
import "./chunk-7ONBXR6Y.js";
import "./chunk-YCZTZCQV.js";
import "./chunk-RQBZITXC.js";

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-LV5SHZYW.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-DTFTNGLD.js").then(
          (m) => m.UserAboutComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-LH4OBCQA.js").then(
          (m) => m.UserMetadataComponent
        )
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-USC5IXJX.js").then(
          (m) => m.UserGroupsComponent
        )
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-RQVFIFU3.js").then(
          (m) => m.UserHistoryComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-RXA6ZX3E.js").then(
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
//# debugId=4ecc152f-e88f-5e82-ab1a-f9a24c6f50ce
//# sourceMappingURL=chunk-GIFEKSFN.js.map

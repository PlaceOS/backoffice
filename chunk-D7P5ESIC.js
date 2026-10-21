import {
  AuthorisedAdminGuard
} from "./chunk-MBTB5FRH.js";
import "./chunk-JLMQNUTQ.js";
import "./chunk-UOJTYLOH.js";
import "./chunk-P3BK5ZDJ.js";
import "./chunk-SJPETQBZ.js";
import "./chunk-V3CYZPSM.js";
import "./chunk-S7FMIV3Y.js";
import "./chunk-WZTE63Q5.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-NMVMT4VD.js";
import "./chunk-4LBKZFUW.js";
import "./chunk-OQOLG7V4.js";
import "./chunk-RQBZITXC.js";

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-EREYBTO3.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-EMCFG6Z6.js").then(
          (m) => m.UserAboutComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-GJOWBWLT.js").then(
          (m) => m.UserMetadataComponent
        )
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-6WA7XWGE.js").then(
          (m) => m.UserGroupsComponent
        )
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-FGWSFBGE.js").then(
          (m) => m.UserHistoryComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-H25EYV3H.js").then(
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
//# sourceMappingURL=chunk-D7P5ESIC.js.map

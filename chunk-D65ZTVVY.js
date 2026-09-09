import {
  AuthorisedAdminGuard
} from "./chunk-IV4R5XJB.js";
import "./chunk-XBHEJBLP.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-WRLTJCLW.js";
import "./chunk-FTY3EIHT.js";
import "./chunk-DVQI66VA.js";
import "./chunk-UBLR53FR.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-6IWBYUDE.js";
import "./chunk-BYWH3GLU.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-7XKIGCHY.js";
import "./chunk-DYV6NXUQ.js";
import "./chunk-KWSTWQNB.js";

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-D6BZD7LC.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-QYOVS35W.js").then((m) => m.UserAboutComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-V2PSJ37F.js").then((m) => m.UserMetadataComponent)
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-QG5BCRJS.js").then((m) => m.UserGroupsComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-2QTHUHNX.js").then((m) => m.UserHistoryComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-NF6GEFVH.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-D65ZTVVY.js.map

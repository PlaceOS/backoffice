import {
  AuthorisedAdminGuard
} from "./chunk-2XWEDNA4.js";
import "./chunk-2F73QLMV.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-DSTTN5ZK.js";
import "./chunk-RWTEO4RZ.js";
import "./chunk-P7CK6ZAK.js";
import "./chunk-5UGYVUD7.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-QNBYRJPA.js";
import "./chunk-X5UG4F5Q.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-ODRM6BWH.js";
import "./chunk-62T6XHVB.js";
import "./chunk-KWSTWQNB.js";

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-XFHPS5VF.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-KH5SBMTJ.js").then((m) => m.UserAboutComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-CRON53QT.js").then((m) => m.UserMetadataComponent)
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-UFPMKX27.js").then((m) => m.UserGroupsComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-6KSBKVLN.js").then((m) => m.UserHistoryComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-TXZBQUBI.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-RUJQSY22.js.map

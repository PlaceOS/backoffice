import {
  AuthorisedAdminGuard
} from "./chunk-6ZDPAIXF.js";
import "./chunk-R3KIBYX2.js";
import "./chunk-F2UXRHVQ.js";
import "./chunk-WDXKFFYO.js";
import "./chunk-WLIXIQFW.js";
import "./chunk-KIA2WBKL.js";
import "./chunk-HASFJPLN.js";
import "./chunk-BS66IPO2.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-3QDC3AOP.js";
import "./chunk-DKYBNEOC.js";
import "./chunk-HGOGRFKW.js";
import "./chunk-RQBZITXC.js";

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-MVSK45D5.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-Y5WSA5UD.js").then(
          (m) => m.UserAboutComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-4HVPCDYS.js").then(
          (m) => m.UserMetadataComponent
        )
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-XX3KH2GM.js").then(
          (m) => m.UserGroupsComponent
        )
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-OY7RI5DB.js").then(
          (m) => m.UserHistoryComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-XWSAIUCD.js").then(
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
//# sourceMappingURL=chunk-J6I7BLPA.js.map

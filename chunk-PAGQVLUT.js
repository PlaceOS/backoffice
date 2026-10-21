import {
  AuthorisedAdminGuard
} from "./chunk-XUD767IQ.js";
import "./chunk-BISB7QAB.js";
import "./chunk-SYH7ZBC5.js";
import "./chunk-XTDO4IU7.js";
import "./chunk-ZTW4GFXA.js";
import "./chunk-PIRFEBZC.js";
import "./chunk-JMHMEOZG.js";
import "./chunk-E63CPPEP.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-3QDC3AOP.js";
import "./chunk-33GRF44L.js";
import "./chunk-TCVU4336.js";
import "./chunk-RQBZITXC.js";

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-KXPUM7JQ.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-YR2ENNKU.js").then(
          (m) => m.UserAboutComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-7D5CJT4W.js").then(
          (m) => m.UserMetadataComponent
        )
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-G7V3Z6YU.js").then(
          (m) => m.UserGroupsComponent
        )
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-QWUMMPUN.js").then(
          (m) => m.UserHistoryComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-UKGYOPOQ.js").then(
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
//# sourceMappingURL=chunk-PAGQVLUT.js.map

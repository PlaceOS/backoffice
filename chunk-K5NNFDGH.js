import {
  AuthorisedAdminGuard
} from "./chunk-24NSF32U.js";
import "./chunk-G7YFPNSL.js";
import "./chunk-SYH7ZBC5.js";
import "./chunk-XTDO4IU7.js";
import "./chunk-IID3C4LS.js";
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
    loadComponent: () => import("./chunk-3ZVTJ22X.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-L7Q3XO4Z.js").then(
          (m) => m.UserAboutComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-FDQOJTGW.js").then(
          (m) => m.UserMetadataComponent
        )
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-PESB6C5U.js").then(
          (m) => m.UserGroupsComponent
        )
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-IJ46SDIB.js").then(
          (m) => m.UserHistoryComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-HANWV6JU.js").then(
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
//# sourceMappingURL=chunk-K5NNFDGH.js.map

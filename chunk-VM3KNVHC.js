import {
  AuthorisedAdminGuard
} from "./chunk-XE5EIFSD.js";
import "./chunk-EIPFTMWR.js";
import "./chunk-EUOPYYFD.js";
import "./chunk-PV3B5VUM.js";
import "./chunk-LYZMFOYM.js";
import "./chunk-5RDGWPHM.js";
import "./chunk-WCEMOYFJ.js";
import "./chunk-NZ7ZPGVU.js";
import "./chunk-SXYVSUAR.js";
import "./chunk-P3FA5CPP.js";
import "./chunk-QHKUHZUG.js";
import "./chunk-RDM3X2TD.js";
import "./chunk-RQBZITXC.js";

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-55BEVFIJ.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-TIWCQZZQ.js").then((m) => m.UserAboutComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-T365IX5M.js").then((m) => m.UserMetadataComponent)
      },
      {
        path: "groups",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-AGFEU63C.js").then((m) => m.UserGroupsComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-PIBRSI3F.js").then((m) => m.UserHistoryComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-IDCPHKOK.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-VM3KNVHC.js.map

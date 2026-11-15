import {
  authorisedAdminGuard
} from "./chunk-PH3ZHR2A.js";
import "./chunk-KYIGEGV5.js";
import "./chunk-XSBVNB3I.js";
import "./chunk-LL56AHAM.js";
import "./chunk-7RNZ3ZDD.js";
import "./chunk-4VR6R4OK.js";
import "./chunk-ORSWOM2O.js";
import "./chunk-UONBBRS5.js";
import "./chunk-UBUJ7KM4.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import "./chunk-BRT76G6A.js";
import "./chunk-6G3VFYSX.js";
import "./chunk-RQBZITXC.js";

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-MIMWT7B3.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-N53J4OFP.js").then(
          (m) => m.UserAboutComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-45KAEB5P.js").then(
          (m) => m.ItemMetadataComponent
        )
      },
      {
        path: "groups",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-Q7TE6JQF.js").then(
          (m) => m.UserGroupsComponent
        )
      },
      {
        path: "history",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-ARPXCN5R.js").then(
          (m) => m.UserHistoryComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-XXVFF4K4.js").then(
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
//# debugId=6d80ba99-c533-5d68-9eb0-fd7bfb2672e2
//# sourceMappingURL=chunk-S6YUVOD7.js.map

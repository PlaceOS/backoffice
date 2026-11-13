import {
  authorisedAdminGuard
} from "./chunk-BY2MNJ6I.js";
import "./chunk-RPCO7W3D.js";
import "./chunk-BPSZRBL2.js";
import "./chunk-5N7DC3QB.js";
import "./chunk-SHWF4MFV.js";
import "./chunk-32E64OOS.js";
import "./chunk-GR5HLJ6A.js";
import "./chunk-ZPWJKOG5.js";
import "./chunk-ZXDSRNPN.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import "./chunk-XWSZBFF5.js";
import "./chunk-OGAUD6Z3.js";
import "./chunk-RQBZITXC.js";

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-LYOEMRFV.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-6SS4PEAQ.js").then(
          (m) => m.UserAboutComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-5UCU3LJY.js").then(
          (m) => m.ItemMetadataComponent
        )
      },
      {
        path: "groups",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-BQ5JBSAV.js").then(
          (m) => m.UserGroupsComponent
        )
      },
      {
        path: "history",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-5EHVVCH7.js").then(
          (m) => m.UserHistoryComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-VNWPVCGH.js").then(
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
//# sourceMappingURL=chunk-CTMAIKON.js.map

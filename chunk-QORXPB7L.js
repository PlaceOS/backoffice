import {
  authorisedAdminGuard
} from "./chunk-PD6JVQCG.js";
import "./chunk-PESDTUFQ.js";
import "./chunk-RN3AWFUF.js";
import "./chunk-SBKLZZRV.js";
import "./chunk-LL56AHAM.js";
import "./chunk-NGPG5OWB.js";
import "./chunk-IDLJ3PCR.js";
import "./chunk-RMI5N2H2.js";
import "./chunk-44FYJ5G4.js";
import "./chunk-V3DC4H2S.js";
import "./chunk-OTF7M54K.js";
import "./chunk-PRQVSGD2.js";
import "./chunk-LD3K5ATK.js";
import "./chunk-Y2QSYZTA.js";
import "./chunk-BRT76G6A.js";
import "./chunk-6G3VFYSX.js";
import "./chunk-RQBZITXC.js";

// src/app/users/users.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-6CWAXIXS.js").then((m) => m.UsersComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-HF6FK7LS.js").then(
          (m) => m.UserAboutComponent
        )
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-BJMX5VUW.js").then(
          (m) => m.ItemMetadataComponent
        )
      },
      {
        path: "groups",
        canActivate: [authorisedAdminGuard],
        loadComponent: () => import("./chunk-GGZFK2M7.js").then(
          (m) => m.UserGroupsComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-NJLQXFRU.js").then(
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
//# debugId=a93d89cb-f463-57e2-bee5-51bbe96c52ec
//# sourceMappingURL=chunk-QORXPB7L.js.map

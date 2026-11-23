import {
  authorisedAdminGuard
} from "./chunk-7K56J27A.js";
import "./chunk-OXU3CTMC.js";
import "./chunk-X3HUV4CQ.js";
import "./chunk-TVHKFUKR.js";
import "./chunk-LL56AHAM.js";
import "./chunk-S6ATYSOE.js";
import "./chunk-LPAJZMY2.js";
import "./chunk-UY6DH2NQ.js";
import "./chunk-UONBBRS5.js";
import "./chunk-PXU3R4CZ.js";
import "./chunk-OTF7M54K.js";
import "./chunk-K7DUQFI6.js";
import "./chunk-4MDDUS4W.js";
import "./chunk-Y2QSYZTA.js";
import "./chunk-BRT76G6A.js";
import "./chunk-6G3VFYSX.js";
import "./chunk-RQBZITXC.js";

// src/app/admin/admin.routes.ts
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-PTXLVGGC.js").then((m) => m.PlaceComponent),
    canActivate: [authorisedAdminGuard],
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-5KVCHRAT.js").then(
          (m) => m.PlaceDetailsComponent
        )
      },
      {
        path: "database",
        loadComponent: () => import("./chunk-XNEJQD3H.js").then(
          (m) => m.PlaceDatabaseDetailsComponent
        )
      },
      {
        path: "clusters",
        loadComponent: () => import("./chunk-FIOLK3S3.js").then(
          (m) => m.PlaceClusterDetailsComponent
        )
      },
      {
        path: "clusters/:id",
        loadComponent: () => import("./chunk-KPSR37M4.js").then((m) => m.PlaceClusterTaskListComponent)
      },
      {
        path: "interfaces",
        loadComponent: () => import("./chunk-24ESYPJN.js").then(
          (m) => m.AdminInterfacesComponent
        )
      },
      {
        path: "brokers",
        loadComponent: () => import("./chunk-S3YVFQCF.js").then(
          (m) => m.AdminBrokersComponent
        )
      },
      {
        path: "edge",
        loadComponent: () => import("./chunk-L6OFIKHC.js").then(
          (m) => m.PlaceEdgeComponent
        )
      },
      {
        path: "edge/:id",
        loadComponent: () => import("./chunk-L6OFIKHC.js").then(
          (m) => m.PlaceEdgeComponent
        )
      },
      {
        path: "extensions",
        loadComponent: () => import("./chunk-O2XJR2RU.js").then(
          (m) => m.PlaceExtensionsComponent
        )
      },
      {
        path: "staff-api",
        loadComponent: () => import("./chunk-EWXQPALS.js").then(
          (m) => m.PlaceStaffAPIComponent
        )
      },
      {
        path: "resource-imports",
        loadComponent: () => import("./chunk-LVXXR36A.js").then(
          (m) => m.ResourceImportsComponent
        )
      },
      {
        path: "schemas",
        loadComponent: () => import("./chunk-6JNEEVAD.js").then(
          (m) => m.AdminSchemasComponent
        )
      },
      {
        path: "api-keys",
        loadComponent: () => import("./chunk-F3M4YD6R.js").then(
          (m) => m.AdminAPIKeysComponent
        )
      },
      {
        path: "upload-storage",
        loadComponent: () => import("./chunk-ICUS5O6Z.js").then(
          (m) => m.StorageComponent
        )
      },
      {
        path: "signage-ai",
        loadComponent: () => import("./chunk-THGAFHLG.js").then(
          (m) => m.SignageAIComponent
        )
      },
      {
        path: "upload-library",
        loadComponent: () => import("./chunk-IXZVNUP5.js").then(
          (m) => m.UploadLibraryComponent
        )
      },
      {
        path: "signage-plugins",
        loadComponent: () => import("./chunk-ECJC4XVP.js").then(
          (m) => m.AdminSignagePluginsComponent
        )
      },
      {
        path: "build-jobs",
        loadComponent: () => import("./chunk-TD7JVWTE.js").then(
          (m) => m.PlaceBuildListComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-EPJRW7N4.js").then(
          (m) => m.ExtensionOutletComponent
        )
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "" }
];
export {
  ROUTES
};
//# debugId=12efbdb8-3bb3-52ac-9921-bffb98f47c07
//# sourceMappingURL=chunk-4IC4NIGL.js.map

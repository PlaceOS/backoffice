import {
  authorisedAdminGuard
} from "./chunk-VSA3XOQC.js";
import "./chunk-DS54MEBD.js";
import "./chunk-XSBVNB3I.js";
import "./chunk-LL56AHAM.js";
import "./chunk-AOBLWXUV.js";
import "./chunk-4VR6R4OK.js";
import "./chunk-RYLWZIJP.js";
import "./chunk-UONBBRS5.js";
import "./chunk-UBUJ7KM4.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import "./chunk-BRT76G6A.js";
import "./chunk-6G3VFYSX.js";
import "./chunk-RQBZITXC.js";

// src/app/admin/admin.routes.ts
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-D4LFTJB6.js").then((m) => m.PlaceComponent),
    canActivate: [authorisedAdminGuard],
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-UBATZCPK.js").then(
          (m) => m.PlaceDetailsComponent
        )
      },
      {
        path: "database",
        loadComponent: () => import("./chunk-NRLCXZSZ.js").then(
          (m) => m.PlaceDatabaseDetailsComponent
        )
      },
      {
        path: "clusters",
        loadComponent: () => import("./chunk-B3CO2U6E.js").then(
          (m) => m.PlaceClusterDetailsComponent
        )
      },
      {
        path: "clusters/:id",
        loadComponent: () => import("./chunk-RRBXDOPV.js").then((m) => m.PlaceClusterTaskListComponent)
      },
      {
        path: "interfaces",
        loadComponent: () => import("./chunk-KOKMEJMC.js").then(
          (m) => m.AdminInterfacesComponent
        )
      },
      {
        path: "brokers",
        loadComponent: () => import("./chunk-K4IHZOJY.js").then(
          (m) => m.AdminBrokersComponent
        )
      },
      {
        path: "edge",
        loadComponent: () => import("./chunk-KSYAGBD3.js").then(
          (m) => m.PlaceEdgeComponent
        )
      },
      {
        path: "edge/:id",
        loadComponent: () => import("./chunk-KSYAGBD3.js").then(
          (m) => m.PlaceEdgeComponent
        )
      },
      {
        path: "extensions",
        loadComponent: () => import("./chunk-742DLFJA.js").then(
          (m) => m.PlaceExtensionsComponent
        )
      },
      {
        path: "staff-api",
        loadComponent: () => import("./chunk-5DUZXUJG.js").then(
          (m) => m.PlaceStaffAPIComponent
        )
      },
      {
        path: "resource-imports",
        loadComponent: () => import("./chunk-UI4JQFIB.js").then(
          (m) => m.ResourceImportsComponent
        )
      },
      {
        path: "schemas",
        loadComponent: () => import("./chunk-KKKXTFH7.js").then(
          (m) => m.AdminSchemasComponent
        )
      },
      {
        path: "api-keys",
        loadComponent: () => import("./chunk-PCQ2LXUV.js").then(
          (m) => m.AdminAPIKeysComponent
        )
      },
      {
        path: "upload-storage",
        loadComponent: () => import("./chunk-E3ZERJOM.js").then(
          (m) => m.StorageComponent
        )
      },
      {
        path: "signage-ai",
        loadComponent: () => import("./chunk-DDF66KPQ.js").then(
          (m) => m.SignageAIComponent
        )
      },
      {
        path: "upload-library",
        loadComponent: () => import("./chunk-BOCGB76D.js").then(
          (m) => m.UploadLibraryComponent
        )
      },
      {
        path: "signage-plugins",
        loadComponent: () => import("./chunk-M24A6NG4.js").then(
          (m) => m.AdminSignagePluginsComponent
        )
      },
      {
        path: "build-jobs",
        loadComponent: () => import("./chunk-Q3WTICUE.js").then(
          (m) => m.PlaceBuildListComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-4DJEITME.js").then(
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
//# debugId=2d650122-e326-5927-a369-5e827f6cfe0d
//# sourceMappingURL=chunk-DS3RYHYO.js.map

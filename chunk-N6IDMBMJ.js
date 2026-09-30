import {
  AuthorisedAdminGuard
} from "./chunk-MVZ4GR2D.js";
import "./chunk-3D43EOHJ.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-KVQ45LGL.js";
import "./chunk-ZQOGPWQ4.js";
import "./chunk-2C722Z46.js";
import "./chunk-G27ITG57.js";
import "./chunk-T65YNYD6.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-F34GYKGE.js";
import "./chunk-B77ZBLFJ.js";
import "./chunk-SXYVSUAR.js";
import "./chunk-QYMVVG4Y.js";
import "./chunk-6NXCBA4X.js";
import "./chunk-DPH5AP7B.js";

// src/app/admin/admin.routes.ts
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-MTUIIDH3.js").then((m) => m.PlaceComponent),
    canActivate: [AuthorisedAdminGuard],
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-QSGFGBTC.js").then((m) => m.PlaceDetailsComponent)
      },
      {
        path: "database",
        loadComponent: () => import("./chunk-KR33NR63.js").then((m) => m.PlaceDatabaseDetailsComponent)
      },
      {
        path: "clusters",
        loadComponent: () => import("./chunk-4Q3NDYAL.js").then((m) => m.PlaceClusterDetailsComponent)
      },
      {
        path: "clusters/:id",
        loadComponent: () => import("./chunk-NS274LAL.js").then((m) => m.PlaceClusterTaskListComponent)
      },
      {
        path: "interfaces",
        loadComponent: () => import("./chunk-CUIQWE6L.js").then((m) => m.AdminInterfacesComponent)
      },
      {
        path: "brokers",
        loadComponent: () => import("./chunk-MZUM6WJB.js").then((m) => m.AdminBrokersComponent)
      },
      {
        path: "edge",
        loadComponent: () => import("./chunk-6EFSRTAO.js").then((m) => m.PlaceEdgeComponent)
      },
      {
        path: "edge/:id",
        loadComponent: () => import("./chunk-6EFSRTAO.js").then((m) => m.PlaceEdgeComponent)
      },
      {
        path: "extensions",
        loadComponent: () => import("./chunk-F7K5PG7C.js").then((m) => m.PlaceExtensionsComponent)
      },
      {
        path: "staff-api",
        loadComponent: () => import("./chunk-QSX6FXJE.js").then((m) => m.PlaceStaffAPIComponent)
      },
      {
        path: "resource-imports",
        loadComponent: () => import("./chunk-7SAV6MSV.js").then((m) => m.ResourceImportsComponent)
      },
      {
        path: "schemas",
        loadComponent: () => import("./chunk-K4GAUOXI.js").then((m) => m.AdminSchemasComponent)
      },
      {
        path: "api-keys",
        loadComponent: () => import("./chunk-VAHTF7ZE.js").then((m) => m.AdminAPIKeysComponent)
      },
      {
        path: "upload-storage",
        loadComponent: () => import("./chunk-AJVVNYZB.js").then((m) => m.StorageComponent)
      },
      {
        path: "signage-ai",
        loadComponent: () => import("./chunk-YAWBOKYV.js").then((m) => m.SignageAIComponent)
      },
      {
        path: "upload-library",
        loadComponent: () => import("./chunk-T77BIORH.js").then((m) => m.UploadLibraryComponent)
      },
      {
        path: "mailing-list",
        children: [
          {
            path: "",
            loadComponent: () => import("./chunk-GVNHHXFR.js").then((m) => m.EmailTemplatesComponent)
          },
          {
            path: "edit",
            loadComponent: () => import("./chunk-BD7XQFBJ.js").then((m) => m.EmailTemplateFormComponent)
          },
          {
            path: "edit/:id",
            loadComponent: () => import("./chunk-BD7XQFBJ.js").then((m) => m.EmailTemplateFormComponent)
          },
          { path: "**", redirectTo: "" }
        ]
      },
      {
        path: "signage-plugins",
        loadComponent: () => import("./chunk-MOT6LRPM.js").then((m) => m.AdminSignagePluginsComponent)
      },
      {
        path: "build-jobs",
        loadComponent: () => import("./chunk-RTCPK7V6.js").then((m) => m.PlaceBuildListComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-45NZZ7UP.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-N6IDMBMJ.js.map

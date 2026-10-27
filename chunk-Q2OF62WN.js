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

// src/app/admin/admin.routes.ts
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-R5XADXST.js").then((m) => m.PlaceComponent),
    canActivate: [AuthorisedAdminGuard],
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-3324PAMB.js").then(
          (m) => m.PlaceDetailsComponent
        )
      },
      {
        path: "database",
        loadComponent: () => import("./chunk-F22VE3J4.js").then(
          (m) => m.PlaceDatabaseDetailsComponent
        )
      },
      {
        path: "clusters",
        loadComponent: () => import("./chunk-F6M7CDJL.js").then(
          (m) => m.PlaceClusterDetailsComponent
        )
      },
      {
        path: "clusters/:id",
        loadComponent: () => import("./chunk-NJIRGHXN.js").then((m) => m.PlaceClusterTaskListComponent)
      },
      {
        path: "interfaces",
        loadComponent: () => import("./chunk-PSEJTEDV.js").then(
          (m) => m.AdminInterfacesComponent
        )
      },
      {
        path: "brokers",
        loadComponent: () => import("./chunk-626QGFNQ.js").then(
          (m) => m.AdminBrokersComponent
        )
      },
      {
        path: "edge",
        loadComponent: () => import("./chunk-3P5FUEQJ.js").then(
          (m) => m.PlaceEdgeComponent
        )
      },
      {
        path: "edge/:id",
        loadComponent: () => import("./chunk-3P5FUEQJ.js").then(
          (m) => m.PlaceEdgeComponent
        )
      },
      {
        path: "extensions",
        loadComponent: () => import("./chunk-VBZP7FN4.js").then(
          (m) => m.PlaceExtensionsComponent
        )
      },
      {
        path: "staff-api",
        loadComponent: () => import("./chunk-OQ7VR6EP.js").then(
          (m) => m.PlaceStaffAPIComponent
        )
      },
      {
        path: "resource-imports",
        loadComponent: () => import("./chunk-IFQ4NMPO.js").then(
          (m) => m.ResourceImportsComponent
        )
      },
      {
        path: "schemas",
        loadComponent: () => import("./chunk-QYRS3JVP.js").then(
          (m) => m.AdminSchemasComponent
        )
      },
      {
        path: "api-keys",
        loadComponent: () => import("./chunk-NWGQX6EI.js").then(
          (m) => m.AdminAPIKeysComponent
        )
      },
      {
        path: "upload-storage",
        loadComponent: () => import("./chunk-EVMNB7WJ.js").then(
          (m) => m.StorageComponent
        )
      },
      {
        path: "signage-ai",
        loadComponent: () => import("./chunk-5BREHWOY.js").then(
          (m) => m.SignageAIComponent
        )
      },
      {
        path: "upload-library",
        loadComponent: () => import("./chunk-KJZFR2CG.js").then(
          (m) => m.UploadLibraryComponent
        )
      },
      {
        path: "signage-plugins",
        loadComponent: () => import("./chunk-D3UAEZ7P.js").then(
          (m) => m.AdminSignagePluginsComponent
        )
      },
      {
        path: "build-jobs",
        loadComponent: () => import("./chunk-4OITY6SO.js").then(
          (m) => m.PlaceBuildListComponent
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
  { path: "**", redirectTo: "" }
];
export {
  ROUTES
};
//# debugId=b1aa5d73-d7c9-5793-bd8b-bc919ad84b9a
//# sourceMappingURL=chunk-Q2OF62WN.js.map

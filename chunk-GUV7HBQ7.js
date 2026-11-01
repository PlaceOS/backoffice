import {
  authorisedAdminGuard
} from "./chunk-D4LWA3SX.js";
import "./chunk-6QIICYIK.js";
import "./chunk-GR7PR5Q6.js";
import "./chunk-WDXKFFYO.js";
import "./chunk-5BJVRHWW.js";
import "./chunk-VLLM34JN.js";
import "./chunk-55LQ6V7M.js";
import "./chunk-HASFJPLN.js";
import "./chunk-7CC5FNME.js";
import "./chunk-J5ZLUQMI.js";
import "./chunk-OTGYPXXQ.js";
import "./chunk-DKYBNEOC.js";
import "./chunk-HGOGRFKW.js";
import "./chunk-RQBZITXC.js";

// src/app/admin/admin.routes.ts
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-OXE2XOUR.js").then((m) => m.PlaceComponent),
    canActivate: [authorisedAdminGuard],
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-DL4KDSFW.js").then(
          (m) => m.PlaceDetailsComponent
        )
      },
      {
        path: "database",
        loadComponent: () => import("./chunk-2GVOVFBM.js").then(
          (m) => m.PlaceDatabaseDetailsComponent
        )
      },
      {
        path: "clusters",
        loadComponent: () => import("./chunk-RKFG55RE.js").then(
          (m) => m.PlaceClusterDetailsComponent
        )
      },
      {
        path: "clusters/:id",
        loadComponent: () => import("./chunk-SQLV27ME.js").then((m) => m.PlaceClusterTaskListComponent)
      },
      {
        path: "interfaces",
        loadComponent: () => import("./chunk-N3STDP7A.js").then(
          (m) => m.AdminInterfacesComponent
        )
      },
      {
        path: "brokers",
        loadComponent: () => import("./chunk-WZUYOI4M.js").then(
          (m) => m.AdminBrokersComponent
        )
      },
      {
        path: "edge",
        loadComponent: () => import("./chunk-NMKIYHVD.js").then(
          (m) => m.PlaceEdgeComponent
        )
      },
      {
        path: "edge/:id",
        loadComponent: () => import("./chunk-NMKIYHVD.js").then(
          (m) => m.PlaceEdgeComponent
        )
      },
      {
        path: "extensions",
        loadComponent: () => import("./chunk-MJHDKCWF.js").then(
          (m) => m.PlaceExtensionsComponent
        )
      },
      {
        path: "staff-api",
        loadComponent: () => import("./chunk-NSPNJAOH.js").then(
          (m) => m.PlaceStaffAPIComponent
        )
      },
      {
        path: "resource-imports",
        loadComponent: () => import("./chunk-WAB5VQOH.js").then(
          (m) => m.ResourceImportsComponent
        )
      },
      {
        path: "schemas",
        loadComponent: () => import("./chunk-YNUVKDXN.js").then(
          (m) => m.AdminSchemasComponent
        )
      },
      {
        path: "api-keys",
        loadComponent: () => import("./chunk-ZI52B5UU.js").then(
          (m) => m.AdminAPIKeysComponent
        )
      },
      {
        path: "upload-storage",
        loadComponent: () => import("./chunk-XHHHUDXH.js").then(
          (m) => m.StorageComponent
        )
      },
      {
        path: "signage-ai",
        loadComponent: () => import("./chunk-VIMOWVNL.js").then(
          (m) => m.SignageAIComponent
        )
      },
      {
        path: "upload-library",
        loadComponent: () => import("./chunk-XDWQFY4I.js").then(
          (m) => m.UploadLibraryComponent
        )
      },
      {
        path: "signage-plugins",
        loadComponent: () => import("./chunk-H3K3EIJN.js").then(
          (m) => m.AdminSignagePluginsComponent
        )
      },
      {
        path: "build-jobs",
        loadComponent: () => import("./chunk-PFDMKZKP.js").then(
          (m) => m.PlaceBuildListComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-W26PDZG5.js").then(
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
//# sourceMappingURL=chunk-GUV7HBQ7.js.map

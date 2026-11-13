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

// src/app/admin/admin.routes.ts
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-KRCH44WU.js").then((m) => m.PlaceComponent),
    canActivate: [authorisedAdminGuard],
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-X3DBXUXC.js").then(
          (m) => m.PlaceDetailsComponent
        )
      },
      {
        path: "database",
        loadComponent: () => import("./chunk-IYSXTJEG.js").then(
          (m) => m.PlaceDatabaseDetailsComponent
        )
      },
      {
        path: "clusters",
        loadComponent: () => import("./chunk-GMHHZWLH.js").then(
          (m) => m.PlaceClusterDetailsComponent
        )
      },
      {
        path: "clusters/:id",
        loadComponent: () => import("./chunk-FSKEZKD3.js").then((m) => m.PlaceClusterTaskListComponent)
      },
      {
        path: "interfaces",
        loadComponent: () => import("./chunk-STM2HJYD.js").then(
          (m) => m.AdminInterfacesComponent
        )
      },
      {
        path: "brokers",
        loadComponent: () => import("./chunk-EL4TR22B.js").then(
          (m) => m.AdminBrokersComponent
        )
      },
      {
        path: "edge",
        loadComponent: () => import("./chunk-J4EO2AXO.js").then(
          (m) => m.PlaceEdgeComponent
        )
      },
      {
        path: "edge/:id",
        loadComponent: () => import("./chunk-J4EO2AXO.js").then(
          (m) => m.PlaceEdgeComponent
        )
      },
      {
        path: "extensions",
        loadComponent: () => import("./chunk-PPLWBNFK.js").then(
          (m) => m.PlaceExtensionsComponent
        )
      },
      {
        path: "staff-api",
        loadComponent: () => import("./chunk-LHDGYAX2.js").then(
          (m) => m.PlaceStaffAPIComponent
        )
      },
      {
        path: "resource-imports",
        loadComponent: () => import("./chunk-53ICBVTC.js").then(
          (m) => m.ResourceImportsComponent
        )
      },
      {
        path: "schemas",
        loadComponent: () => import("./chunk-YT3VUG5Q.js").then(
          (m) => m.AdminSchemasComponent
        )
      },
      {
        path: "api-keys",
        loadComponent: () => import("./chunk-4KQ7GKRX.js").then(
          (m) => m.AdminAPIKeysComponent
        )
      },
      {
        path: "upload-storage",
        loadComponent: () => import("./chunk-FOQCQQMX.js").then(
          (m) => m.StorageComponent
        )
      },
      {
        path: "signage-ai",
        loadComponent: () => import("./chunk-PGYHSN7E.js").then(
          (m) => m.SignageAIComponent
        )
      },
      {
        path: "upload-library",
        loadComponent: () => import("./chunk-MFPQ5KAL.js").then(
          (m) => m.UploadLibraryComponent
        )
      },
      {
        path: "signage-plugins",
        loadComponent: () => import("./chunk-LU6I3E7B.js").then(
          (m) => m.AdminSignagePluginsComponent
        )
      },
      {
        path: "build-jobs",
        loadComponent: () => import("./chunk-ZVBVFF5L.js").then(
          (m) => m.PlaceBuildListComponent
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
  { path: "**", redirectTo: "" }
];
export {
  ROUTES
};
//# debugId=2d650122-e326-5927-a369-5e827f6cfe0d
//# sourceMappingURL=chunk-VBO537SK.js.map

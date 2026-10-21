import {
  AuthorisedAdminGuard
} from "./chunk-24NSF32U.js";
import "./chunk-G7YFPNSL.js";
import "./chunk-SYH7ZBC5.js";
import "./chunk-XTDO4IU7.js";
import "./chunk-IID3C4LS.js";
import "./chunk-PIRFEBZC.js";
import "./chunk-JMHMEOZG.js";
import "./chunk-E63CPPEP.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-3QDC3AOP.js";
import "./chunk-33GRF44L.js";
import "./chunk-TCVU4336.js";
import "./chunk-RQBZITXC.js";

// src/app/admin/admin.routes.ts
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-BFUNTDW2.js").then((m) => m.PlaceComponent),
    canActivate: [AuthorisedAdminGuard],
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-NG5TWVOA.js").then(
          (m) => m.PlaceDetailsComponent
        )
      },
      {
        path: "database",
        loadComponent: () => import("./chunk-FTN4ZKHJ.js").then(
          (m) => m.PlaceDatabaseDetailsComponent
        )
      },
      {
        path: "clusters",
        loadComponent: () => import("./chunk-UZU2LKE3.js").then(
          (m) => m.PlaceClusterDetailsComponent
        )
      },
      {
        path: "clusters/:id",
        loadComponent: () => import("./chunk-ADBN7LW7.js").then((m) => m.PlaceClusterTaskListComponent)
      },
      {
        path: "interfaces",
        loadComponent: () => import("./chunk-UALRJLMP.js").then(
          (m) => m.AdminInterfacesComponent
        )
      },
      {
        path: "brokers",
        loadComponent: () => import("./chunk-FKC3WKK6.js").then(
          (m) => m.AdminBrokersComponent
        )
      },
      {
        path: "edge",
        loadComponent: () => import("./chunk-PYODUYWL.js").then(
          (m) => m.PlaceEdgeComponent
        )
      },
      {
        path: "edge/:id",
        loadComponent: () => import("./chunk-PYODUYWL.js").then(
          (m) => m.PlaceEdgeComponent
        )
      },
      {
        path: "extensions",
        loadComponent: () => import("./chunk-WEQEIRHY.js").then(
          (m) => m.PlaceExtensionsComponent
        )
      },
      {
        path: "staff-api",
        loadComponent: () => import("./chunk-M7LYVE22.js").then(
          (m) => m.PlaceStaffAPIComponent
        )
      },
      {
        path: "resource-imports",
        loadComponent: () => import("./chunk-NSWJOFTR.js").then(
          (m) => m.ResourceImportsComponent
        )
      },
      {
        path: "schemas",
        loadComponent: () => import("./chunk-LNOG4F3N.js").then(
          (m) => m.AdminSchemasComponent
        )
      },
      {
        path: "api-keys",
        loadComponent: () => import("./chunk-MA6N2J36.js").then(
          (m) => m.AdminAPIKeysComponent
        )
      },
      {
        path: "upload-storage",
        loadComponent: () => import("./chunk-VA2DZ5U7.js").then(
          (m) => m.StorageComponent
        )
      },
      {
        path: "signage-ai",
        loadComponent: () => import("./chunk-OCQEMAL3.js").then(
          (m) => m.SignageAIComponent
        )
      },
      {
        path: "upload-library",
        loadComponent: () => import("./chunk-PS6PATTO.js").then(
          (m) => m.UploadLibraryComponent
        )
      },
      {
        path: "signage-plugins",
        loadComponent: () => import("./chunk-WF7IHL5G.js").then(
          (m) => m.AdminSignagePluginsComponent
        )
      },
      {
        path: "build-jobs",
        loadComponent: () => import("./chunk-UTAEWFR7.js").then(
          (m) => m.PlaceBuildListComponent
        )
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-HANWV6JU.js").then(
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
//# sourceMappingURL=chunk-PWDYQQFR.js.map

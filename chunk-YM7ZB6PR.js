import {
  AuthorisedAdminGuard
} from "./chunk-XL726XVE.js";
import "./chunk-6S56CTCM.js";
import "./chunk-HGYRGX5U.js";
import "./chunk-6MXKYGIY.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-D6PVNXBZ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-3LEBC5GS.js";
import "./chunk-MMIWWJ2B.js";
import "./chunk-TUZQ7R7Y.js";
import "./chunk-74QWELJT.js";
import "./chunk-VYXW4D3Z.js";

// src/app/admin/admin.routes.ts
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-BP7EH3FN.js").then((m) => m.PlaceComponent),
    canActivate: [AuthorisedAdminGuard],
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-CUKWLM4Q.js").then((m) => m.PlaceDetailsComponent)
      },
      {
        path: "database",
        loadComponent: () => import("./chunk-6CXI4PMH.js").then((m) => m.PlaceDatabaseDetailsComponent)
      },
      {
        path: "clusters",
        loadComponent: () => import("./chunk-NBYN2HXS.js").then((m) => m.PlaceClusterDetailsComponent)
      },
      {
        path: "clusters/:id",
        loadComponent: () => import("./chunk-DAG3TIJ5.js").then((m) => m.PlaceClusterTaskListComponent)
      },
      {
        path: "interfaces",
        loadComponent: () => import("./chunk-LAVGDTWR.js").then((m) => m.AdminInterfacesComponent)
      },
      {
        path: "brokers",
        loadComponent: () => import("./chunk-UWQ7NIIX.js").then((m) => m.AdminBrokersComponent)
      },
      {
        path: "edge",
        loadComponent: () => import("./chunk-JPWVHP3W.js").then((m) => m.PlaceEdgeComponent)
      },
      {
        path: "edge/:id",
        loadComponent: () => import("./chunk-JPWVHP3W.js").then((m) => m.PlaceEdgeComponent)
      },
      {
        path: "extensions",
        loadComponent: () => import("./chunk-HQMI5KDM.js").then((m) => m.PlaceExtensionsComponent)
      },
      {
        path: "staff-api",
        loadComponent: () => import("./chunk-3YCEEPC7.js").then((m) => m.PlaceStaffAPIComponent)
      },
      {
        path: "resource-imports",
        loadComponent: () => import("./chunk-ETFBCW5A.js").then((m) => m.ResourceImportsComponent)
      },
      {
        path: "schemas",
        loadComponent: () => import("./chunk-A6SCRWG2.js").then((m) => m.AdminSchemasComponent)
      },
      {
        path: "api-keys",
        loadComponent: () => import("./chunk-VFKG35S6.js").then((m) => m.AdminAPIKeysComponent)
      },
      {
        path: "upload-storage",
        loadComponent: () => import("./chunk-CWQJI3II.js").then((m) => m.StorageComponent)
      },
      {
        path: "upload-library",
        loadComponent: () => import("./chunk-OFLQXDG6.js").then((m) => m.UploadLibraryComponent)
      },
      {
        path: "mailing-list",
        children: [
          {
            path: "",
            loadComponent: () => import("./chunk-XR66WUY7.js").then((m) => m.EmailTemplatesComponent)
          },
          {
            path: "edit",
            loadComponent: () => import("./chunk-GCU52HP4.js").then((m) => m.EmailTemplateFormComponent)
          },
          {
            path: "edit/:id",
            loadComponent: () => import("./chunk-GCU52HP4.js").then((m) => m.EmailTemplateFormComponent)
          },
          { path: "**", redirectTo: "" }
        ]
      },
      {
        path: "build-jobs",
        loadComponent: () => import("./chunk-AYFRFTDR.js").then((m) => m.PlaceBuildListComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-Y5VPVK6F.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-YM7ZB6PR.js.map

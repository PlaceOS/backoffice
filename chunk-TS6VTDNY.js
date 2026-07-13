import {
  AuthorisedAdminGuard
} from "./chunk-4AIINGSP.js";
import "./chunk-6AAMXG3P.js";
import "./chunk-FU6WNUR2.js";
import "./chunk-4LP2AQO3.js";
import "./chunk-HLJBC2QQ.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-Y4WYMPD6.js";
import "./chunk-OU4ZSGGA.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-VARF64W7.js";
import "./chunk-QSXZQV2A.js";
import "./chunk-KWSTWQNB.js";

// src/app/admin/admin.routes.ts
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-YRR7LHHP.js").then((m) => m.PlaceComponent),
    canActivate: [AuthorisedAdminGuard],
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-URPPWQGB.js").then((m) => m.PlaceDetailsComponent)
      },
      {
        path: "database",
        loadComponent: () => import("./chunk-CSATZCC7.js").then((m) => m.PlaceDatabaseDetailsComponent)
      },
      {
        path: "clusters",
        loadComponent: () => import("./chunk-SFCS5KCP.js").then((m) => m.PlaceClusterDetailsComponent)
      },
      {
        path: "clusters/:id",
        loadComponent: () => import("./chunk-JIJUF2KN.js").then((m) => m.PlaceClusterTaskListComponent)
      },
      {
        path: "interfaces",
        loadComponent: () => import("./chunk-WLQM3X6T.js").then((m) => m.AdminInterfacesComponent)
      },
      {
        path: "brokers",
        loadComponent: () => import("./chunk-3EXPWZH4.js").then((m) => m.AdminBrokersComponent)
      },
      {
        path: "edge",
        loadComponent: () => import("./chunk-TEMMDOW3.js").then((m) => m.PlaceEdgeComponent)
      },
      {
        path: "edge/:id",
        loadComponent: () => import("./chunk-TEMMDOW3.js").then((m) => m.PlaceEdgeComponent)
      },
      {
        path: "extensions",
        loadComponent: () => import("./chunk-FSAK2MKC.js").then((m) => m.PlaceExtensionsComponent)
      },
      {
        path: "staff-api",
        loadComponent: () => import("./chunk-C7NRFP77.js").then((m) => m.PlaceStaffAPIComponent)
      },
      {
        path: "resource-imports",
        loadComponent: () => import("./chunk-MWXVX37Q.js").then((m) => m.ResourceImportsComponent)
      },
      {
        path: "schemas",
        loadComponent: () => import("./chunk-3PTRBWB6.js").then((m) => m.AdminSchemasComponent)
      },
      {
        path: "api-keys",
        loadComponent: () => import("./chunk-JRUR3WZD.js").then((m) => m.AdminAPIKeysComponent)
      },
      {
        path: "upload-storage",
        loadComponent: () => import("./chunk-PBCG3VYM.js").then((m) => m.StorageComponent)
      },
      {
        path: "upload-library",
        loadComponent: () => import("./chunk-C5SAZ2DN.js").then((m) => m.UploadLibraryComponent)
      },
      {
        path: "mailing-list",
        children: [
          {
            path: "",
            loadComponent: () => import("./chunk-LW7JLFGC.js").then((m) => m.EmailTemplatesComponent)
          },
          {
            path: "edit",
            loadComponent: () => import("./chunk-7WDONUN7.js").then((m) => m.EmailTemplateFormComponent)
          },
          {
            path: "edit/:id",
            loadComponent: () => import("./chunk-7WDONUN7.js").then((m) => m.EmailTemplateFormComponent)
          },
          { path: "**", redirectTo: "" }
        ]
      },
      {
        path: "signage-plugins",
        loadComponent: () => import("./chunk-WVNJ6DTN.js").then((m) => m.AdminSignagePluginsComponent)
      },
      {
        path: "build-jobs",
        loadComponent: () => import("./chunk-NR2XKRBS.js").then((m) => m.PlaceBuildListComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-37YK44AV.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-TS6VTDNY.js.map

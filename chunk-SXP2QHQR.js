import {
  AuthorisedAdminGuard
} from "./chunk-NKUSXPHR.js";
import "./chunk-COKN6TJC.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-EBZ2J7XZ.js";
import "./chunk-HZ4CW3MH.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-23LALMM3.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-KP7S2BKY.js";
import "./chunk-GQLTM7WR.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-J2PUVZQM.js";
import "./chunk-2GWPJS4J.js";
import "./chunk-KWSTWQNB.js";

// src/app/admin/admin.routes.ts
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-JI2MYGCR.js").then((m) => m.PlaceComponent),
    canActivate: [AuthorisedAdminGuard],
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-XKRWOACJ.js").then((m) => m.PlaceDetailsComponent)
      },
      {
        path: "database",
        loadComponent: () => import("./chunk-27NJNEC4.js").then((m) => m.PlaceDatabaseDetailsComponent)
      },
      {
        path: "clusters",
        loadComponent: () => import("./chunk-3K5LFUYW.js").then((m) => m.PlaceClusterDetailsComponent)
      },
      {
        path: "clusters/:id",
        loadComponent: () => import("./chunk-XOOW5CPB.js").then((m) => m.PlaceClusterTaskListComponent)
      },
      {
        path: "interfaces",
        loadComponent: () => import("./chunk-FOA7TBZW.js").then((m) => m.AdminInterfacesComponent)
      },
      {
        path: "brokers",
        loadComponent: () => import("./chunk-XPV2IHR5.js").then((m) => m.AdminBrokersComponent)
      },
      {
        path: "edge",
        loadComponent: () => import("./chunk-LK63I4W7.js").then((m) => m.PlaceEdgeComponent)
      },
      {
        path: "edge/:id",
        loadComponent: () => import("./chunk-LK63I4W7.js").then((m) => m.PlaceEdgeComponent)
      },
      {
        path: "extensions",
        loadComponent: () => import("./chunk-GKRPZECT.js").then((m) => m.PlaceExtensionsComponent)
      },
      {
        path: "staff-api",
        loadComponent: () => import("./chunk-DU36MHEU.js").then((m) => m.PlaceStaffAPIComponent)
      },
      {
        path: "resource-imports",
        loadComponent: () => import("./chunk-GL3ZDOIH.js").then((m) => m.ResourceImportsComponent)
      },
      {
        path: "schemas",
        loadComponent: () => import("./chunk-VJ35ZHOA.js").then((m) => m.AdminSchemasComponent)
      },
      {
        path: "api-keys",
        loadComponent: () => import("./chunk-QX32R6ON.js").then((m) => m.AdminAPIKeysComponent)
      },
      {
        path: "upload-storage",
        loadComponent: () => import("./chunk-ZWZJGK7Y.js").then((m) => m.StorageComponent)
      },
      {
        path: "signage-ai",
        loadComponent: () => import("./chunk-A7IOM6TY.js").then((m) => m.SignageAIComponent)
      },
      {
        path: "upload-library",
        loadComponent: () => import("./chunk-7ZXFLOA5.js").then((m) => m.UploadLibraryComponent)
      },
      {
        path: "mailing-list",
        children: [
          {
            path: "",
            loadComponent: () => import("./chunk-XAPV4DKR.js").then((m) => m.EmailTemplatesComponent)
          },
          {
            path: "edit",
            loadComponent: () => import("./chunk-4DS4N3SJ.js").then((m) => m.EmailTemplateFormComponent)
          },
          {
            path: "edit/:id",
            loadComponent: () => import("./chunk-4DS4N3SJ.js").then((m) => m.EmailTemplateFormComponent)
          },
          { path: "**", redirectTo: "" }
        ]
      },
      {
        path: "signage-plugins",
        loadComponent: () => import("./chunk-NQOE4KGS.js").then((m) => m.AdminSignagePluginsComponent)
      },
      {
        path: "build-jobs",
        loadComponent: () => import("./chunk-MDQZCJIU.js").then((m) => m.PlaceBuildListComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-Y7J4W4FC.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-SXP2QHQR.js.map

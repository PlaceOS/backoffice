import {
  AuthorisedAdminGuard
} from "./chunk-POI5XTHY.js";
import "./chunk-3VH5IDBT.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-X3MWAFCJ.js";
import "./chunk-4BL3WELN.js";
import "./chunk-O7OQ7JEW.js";
import "./chunk-TEN3ABAY.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-LMUB4LUK.js";
import "./chunk-OOF3366H.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-2S4OQ6TV.js";
import "./chunk-YPXZNU3N.js";
import "./chunk-KWSTWQNB.js";

// src/app/admin/admin.routes.ts
var ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-5RESQT2T.js").then((m) => m.PlaceComponent),
    canActivate: [AuthorisedAdminGuard],
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-LOIPGD67.js").then((m) => m.PlaceDetailsComponent)
      },
      {
        path: "database",
        loadComponent: () => import("./chunk-IXIAXLN6.js").then((m) => m.PlaceDatabaseDetailsComponent)
      },
      {
        path: "clusters",
        loadComponent: () => import("./chunk-JD7ITRSE.js").then((m) => m.PlaceClusterDetailsComponent)
      },
      {
        path: "clusters/:id",
        loadComponent: () => import("./chunk-AGOVYT24.js").then((m) => m.PlaceClusterTaskListComponent)
      },
      {
        path: "interfaces",
        loadComponent: () => import("./chunk-2LO2YS6E.js").then((m) => m.AdminInterfacesComponent)
      },
      {
        path: "brokers",
        loadComponent: () => import("./chunk-VUQA7C5G.js").then((m) => m.AdminBrokersComponent)
      },
      {
        path: "edge",
        loadComponent: () => import("./chunk-YGXIXA7I.js").then((m) => m.PlaceEdgeComponent)
      },
      {
        path: "edge/:id",
        loadComponent: () => import("./chunk-YGXIXA7I.js").then((m) => m.PlaceEdgeComponent)
      },
      {
        path: "extensions",
        loadComponent: () => import("./chunk-X5YCOOA2.js").then((m) => m.PlaceExtensionsComponent)
      },
      {
        path: "staff-api",
        loadComponent: () => import("./chunk-VVLYEPHC.js").then((m) => m.PlaceStaffAPIComponent)
      },
      {
        path: "resource-imports",
        loadComponent: () => import("./chunk-K636ZWZ4.js").then((m) => m.ResourceImportsComponent)
      },
      {
        path: "schemas",
        loadComponent: () => import("./chunk-TBES3KWA.js").then((m) => m.AdminSchemasComponent)
      },
      {
        path: "api-keys",
        loadComponent: () => import("./chunk-GNGJJQZD.js").then((m) => m.AdminAPIKeysComponent)
      },
      {
        path: "upload-storage",
        loadComponent: () => import("./chunk-NPR3A67W.js").then((m) => m.StorageComponent)
      },
      {
        path: "signage-ai",
        loadComponent: () => import("./chunk-UWGDJSE4.js").then((m) => m.SignageAIComponent)
      },
      {
        path: "upload-library",
        loadComponent: () => import("./chunk-BDDTIYNH.js").then((m) => m.UploadLibraryComponent)
      },
      {
        path: "mailing-list",
        children: [
          {
            path: "",
            loadComponent: () => import("./chunk-EWKOZKQX.js").then((m) => m.EmailTemplatesComponent)
          },
          {
            path: "edit",
            loadComponent: () => import("./chunk-MVCBP52A.js").then((m) => m.EmailTemplateFormComponent)
          },
          {
            path: "edit/:id",
            loadComponent: () => import("./chunk-MVCBP52A.js").then((m) => m.EmailTemplateFormComponent)
          },
          { path: "**", redirectTo: "" }
        ]
      },
      {
        path: "signage-plugins",
        loadComponent: () => import("./chunk-BRD6XQXW.js").then((m) => m.AdminSignagePluginsComponent)
      },
      {
        path: "build-jobs",
        loadComponent: () => import("./chunk-YTLZC656.js").then((m) => m.PlaceBuildListComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-MRBQBD32.js").then((m) => m.ExtensionOutletComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-NVZ7MEF3.js.map

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

// src/app/systems/systems.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-3534IQ7D.js").then((m) => m.SystemsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-CLL3HOEW.js").then((m) => m.SystemAboutComponent)
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-RX6L2UDG.js").then((m) => m.SystemModulesComponent)
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-4KJEAX7Z.js").then((m) => m.SystemTriggersComponent)
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-KYWCAWNT.js").then((m) => m.SystemZonesComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-6QOYYM46.js").then((m) => m.SystemMetadataComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-MRBQBD32.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-ZFHNFSMS.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-5IS2JJCT.js.map

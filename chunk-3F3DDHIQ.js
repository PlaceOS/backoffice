import {
  AuthorisedAdminGuard
} from "./chunk-IV4R5XJB.js";
import "./chunk-XBHEJBLP.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-WRLTJCLW.js";
import "./chunk-FTY3EIHT.js";
import "./chunk-DVQI66VA.js";
import "./chunk-UBLR53FR.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-6IWBYUDE.js";
import "./chunk-BYWH3GLU.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-7XKIGCHY.js";
import "./chunk-DYV6NXUQ.js";
import "./chunk-KWSTWQNB.js";

// src/app/systems/systems.routes.ts
var ROUTES = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-RVN6OREU.js").then((m) => m.SystemsComponent),
    children: [
      {
        path: "about",
        loadComponent: () => import("./chunk-2PNEWQP7.js").then((m) => m.SystemAboutComponent)
      },
      {
        path: "modules",
        loadComponent: () => import("./chunk-EHDL5D3C.js").then((m) => m.SystemModulesComponent)
      },
      {
        path: "triggers",
        loadComponent: () => import("./chunk-UYBXNBZM.js").then((m) => m.SystemTriggersComponent)
      },
      {
        path: "zones",
        loadComponent: () => import("./chunk-H7MZPXEA.js").then((m) => m.SystemZonesComponent)
      },
      {
        path: "metadata",
        loadComponent: () => import("./chunk-HPOLX2X3.js").then((m) => m.SystemMetadataComponent)
      },
      {
        path: "extend/:id",
        loadComponent: () => import("./chunk-NF6GEFVH.js").then((m) => m.ExtensionOutletComponent)
      },
      {
        path: "history",
        canActivate: [AuthorisedAdminGuard],
        loadComponent: () => import("./chunk-JTMFX6AW.js").then((m) => m.SettingsHistoryViewComponent)
      },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
export {
  ROUTES
};
//# sourceMappingURL=chunk-3F3DDHIQ.js.map

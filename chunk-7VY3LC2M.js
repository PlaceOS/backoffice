import {
  ActiveItemService
} from "./chunk-YGRCHGLS.js";
import "./chunk-Z4RGDELG.js";
import {
  SimpleTableComponent
} from "./chunk-7PBGQ5GJ.js";
import "./chunk-27RGLWGV.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-LDPMLA3S.js";
import "./chunk-FQQU2C6T.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TWCYY2HH.js";
import {
  toSignal
} from "./chunk-G5DVCCF5.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-YZFSOCDR.js";
import "./chunk-DG5F5M2I.js";
import "./chunk-VZ4JF2ZJ.js";
import "./chunk-4MSIA662.js";
import "./chunk-RFD5AOWN.js";
import "./chunk-WSH7C5JM.js";
import "./chunk-M2O6T64P.js";
import "./chunk-G3IJGLD4.js";
import "./chunk-IQ5P3T5K.js";
import {
  AsyncHandler
} from "./chunk-SDGTGI2H.js";
import "./chunk-66VCHSRY.js";
import "./chunk-S3MO7QJA.js";
import "./chunk-HS6BVHDB.js";
import "./chunk-XMG57YWH.js";
import "./chunk-W6NODITO.js";
import "./chunk-PNGPFML7.js";
import "./chunk-4G55JYYO.js";
import {
  TranslatePipe
} from "./chunk-ETRW4JH6.js";
import "./chunk-MKMIAR67.js";
import {
  DatePipe
} from "./chunk-IWUSEH7D.js";
import {
  Component,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-M2N6S2L7.js";
import "./chunk-RQBZITXC.js";

// src/app/users/user-history.component.ts
var _c0 = (a0, a1) => ({ key: "start", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "end", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "systems", name: a0, content: a1 });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
function UserHistoryComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r1 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, date_r1, "MMM d, y, h:mm a"), " ");
  }
}
function UserHistoryComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const systems_r2 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(systems_r2.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "USERS.VIEW_LOGS"));
  }
}
var UserHistoryComponent = class _UserHistoryComponent extends AsyncHandler {
  _service = inject(ActiveItemService);
  logs = signal(
    [],
    ...ngDevMode ? [{ debugName: "logs" }] : (
      /* istanbul ignore next */
      []
    )
  );
  item = toSignal(this._service.item, {
    initialValue: null
  });
  constructor() {
    super();
    effect(() => {
      if (this.item())
        this.loadUserLogs();
    });
  }
  loadUserLogs(_offset = 0) {
  }
  static \u0275fac = function UserHistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserHistoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserHistoryComponent, selectors: [["user-history"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 25, consts: [["date_template", ""], ["sys_template", ""], [1, "p-4"], [1, "block", "min-w-5xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"]], template: function UserHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275element(1, "simple-table", 3);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275template(6, UserHistoryComponent_ng_template_6_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(8, UserHistoryComponent_ng_template_8_Template, 6, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const date_template_r3 = \u0275\u0275reference(7);
      const sys_template_r4 = \u0275\u0275reference(9);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.logs())("columns", \u0275\u0275pureFunction3(21, _c3, \u0275\u0275pureFunction2(12, _c0, \u0275\u0275pipeBind1(2, 4, "USERS.FIELD_SESSION_START"), date_template_r3), \u0275\u0275pureFunction2(15, _c1, \u0275\u0275pipeBind1(3, 6, "USERS.FIELD_SESSION_END"), date_template_r3), \u0275\u0275pureFunction2(18, _c2, \u0275\u0275pipeBind1(4, 8, "USERS.FIELD_SYSTEMS_ACCESSED"), sys_template_r4)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(5, 10, "USERS.LOGS_EMPTY"));
    }
  }, dependencies: [SimpleTableComponent, TranslatePipe, DatePipe], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=user-history.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserHistoryComponent, [{
    type: Component,
    args: [{ selector: "user-history", template: `
        <div class="p-4">
            <simple-table
                class="block min-w-5xl text-sm"
                [data]="logs()"
                [columns]="[
                    {
                        key: 'start',
                        name: 'USERS.FIELD_SESSION_START' | translate,
                        content: date_template,
                    },
                    {
                        key: 'end',
                        name: 'USERS.FIELD_SESSION_END' | translate,
                        content: date_template,
                    },
                    {
                        key: 'systems',
                        name: 'USERS.FIELD_SYSTEMS_ACCESSED' | translate,
                        content: sys_template,
                    },
                ]"
                [sortable]="true"
                [empty_message]="'USERS.LOGS_EMPTY' | translate"
            />
            <ng-template #date_template let-date="data">
                <div class="p-4">
                    {{ date | date: 'MMM d, y, h:mm a' }}
                </div>
            </ng-template>
            <ng-template #sys_template let-systems="data">
                <div class="p-4">
                    <div>{{ systems.length }}</div>
                    <div>{{ 'USERS.VIEW_LOGS' | translate }}</div>
                </div>
            </ng-template>
        </div>
    `, imports: [TranslatePipe, SimpleTableComponent, DatePipe], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/users/user-history.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=user-history.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserHistoryComponent, { className: "UserHistoryComponent", filePath: "src/app/users/user-history.component.ts", lineNumber: 67 });
})();
export {
  UserHistoryComponent
};
//# sourceMappingURL=chunk-7VY3LC2M.js.map

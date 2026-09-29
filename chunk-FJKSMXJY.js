import {
  SettingsToggleComponent
} from "./chunk-VL2ZDJSE.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-A5YO7EC5.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-CSM2PZV4.js";
import {
  MatRippleModule
} from "./chunk-CNTREK2Y.js";
import {
  TranslatePipe
} from "./chunk-HEABSJS3.js";
import {
  IconComponent
} from "./chunk-HM3Y6HJR.js";
import {
  MatRipple
} from "./chunk-GOSX3HNW.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UAS3QR7R.js";

// src/app/groups/group-permissions.ts
var GROUP_PERMISSION_FLAGS = [
  { key: "read", label: "GROUPS.PERMISSION_READ", value: 1 },
  { key: "create", label: "GROUPS.PERMISSION_CREATE", value: 2 },
  { key: "update", label: "GROUPS.PERMISSION_UPDATE", value: 4 },
  { key: "delete", label: "GROUPS.PERMISSION_DELETE", value: 8 },
  { key: "operate", label: "GROUPS.PERMISSION_OPERATE", value: 16 },
  { key: "approve", label: "GROUPS.PERMISSION_APPROVE", value: 32 },
  { key: "manage", label: "GROUPS.PERMISSION_MANAGE", value: 64 },
  { key: "share", label: "GROUPS.PERMISSION_SHARE", value: 128 }
];
function hasGroupPermission(permissions, value) {
  return ((+permissions || 0) & value) === value;
}
function setGroupPermission(permissions, value, enabled) {
  const current = +permissions || 0;
  return enabled ? current | value : current & ~value;
}
function groupPermissionLabels(permissions) {
  return GROUP_PERMISSION_FLAGS.filter((permission) => hasGroupPermission(permissions, permission.value)).map((permission) => permission.label);
}

// src/app/groups/group-permissions-modal.component.ts
var _forTrack0 = ($index, $item) => $item.key;
function GroupPermissionsModalComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 9);
    \u0275\u0275listener("ngModelChange", function GroupPermissionsModalComponent_For_7_Template_settings_toggle_ngModelChange_0_listener($event) {
      const permission_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setPermission(permission_r2.value, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const permission_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r2.hasPermission(ctx_r2.permissions(), permission_r2.value));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, permission_r2.label), " ");
  }
}
function GroupPermissionsModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "hr", 10);
    \u0275\u0275elementStart(1, "settings-toggle", 9);
    \u0275\u0275twoWayListener("ngModelChange", function GroupPermissionsModalComponent_Conditional_8_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.deny, $event) || (ctx_r2.deny = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.deny);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "GROUPS.FIELD_DENY"), " ");
  }
}
var GroupPermissionsModalComponent = class _GroupPermissionsModalComponent {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  title = this._data.title;
  show_deny = this._data.show_deny;
  permissions = signal(
    +this._data.permissions || 0,
    ...ngDevMode ? [{ debugName: "permissions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  permission_flags = GROUP_PERMISSION_FLAGS;
  hasPermission = hasGroupPermission;
  deny = !!this._data.deny;
  setPermission(permission, enabled) {
    this.permissions.set(setGroupPermission(this.permissions(), permission, enabled));
  }
  save() {
    this._dialog_ref.close({
      permissions: this.permissions(),
      deny: this.deny
    });
  }
  static \u0275fac = function GroupPermissionsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GroupPermissionsModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupPermissionsModalComponent, selectors: [["group-permissions-modal"]], decls: 18, vars: 10, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "min-w-[22rem]", "items-center", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], [1, "flex", "w-lg", "max-w-[85vw]", "flex-col", "gap-4", "p-4", "sm:h-auto"], [1, "grid", "grid-cols-2", "gap-x-4", "gap-y-2"], [3, "ngModel"], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "bg-base-100", "flex-1"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [1, "mr-2"], [3, "ngModelChange", "ngModel"], [1, "border-base-200"]], template: function GroupPermissionsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "main", 2)(5, "section", 3);
      \u0275\u0275repeaterCreate(6, GroupPermissionsModalComponent_For_7_Template, 3, 4, "settings-toggle", 4, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, GroupPermissionsModalComponent_Conditional_8_Template, 4, 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "footer", 5)(10, "button", 6);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function GroupPermissionsModalComponent_Template_button_click_13_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(14, "icon", 8);
      \u0275\u0275text(15, "save");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, ctx.title));
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.permission_flags);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.show_deny ? 8 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 6, "COMMON.CANCEL"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 8, "COMMON.SAVE"), " ");
    }
  }, dependencies: [
    FormsModule,
    NgControlStatus,
    NgModel,
    IconComponent,
    MatDialogModule,
    MatDialogClose,
    MatRippleModule,
    MatRipple,
    SettingsToggleComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupPermissionsModalComponent, [{
    type: Component,
    args: [{ selector: "group-permissions-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex h-14 w-[calc(100%-1rem)] min-w-[22rem] items-center rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">{{ title | translate }}</h2>
        </header>
        <main class="flex w-lg max-w-[85vw] flex-col gap-4 p-4 sm:h-auto">
            <section class="grid grid-cols-2 gap-x-4 gap-y-2">
                @for (permission of permission_flags; track permission.key) {
                    <settings-toggle
                        [ngModel]="
                            hasPermission(permissions(), permission.value)
                        "
                        (ngModelChange)="
                            setPermission(permission.value, $event)
                        "
                    >
                        {{ permission.label | translate }}
                    </settings-toggle>
                }
            </section>
            @if (show_deny) {
                <hr class="border-base-200" />
                <settings-toggle [(ngModel)]="deny">
                    {{ 'GROUPS.FIELD_DENY' | translate }}
                </settings-toggle>
            }
        </main>
        <footer
            class="bg-base-200 sticky bottom-0 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
        >
            <button
                btn
                matRipple
                class="inverse bg-base-100 flex-1"
                mat-dialog-close
            >
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button btn matRipple class="flex-1" (click)="save()">
                <icon class="mr-2">save</icon>
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
    `, imports: [
      FormsModule,
      IconComponent,
      MatDialogModule,
      MatRippleModule,
      SettingsToggleComponent,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupPermissionsModalComponent, { className: "GroupPermissionsModalComponent", filePath: "src/app/groups/group-permissions-modal.component.ts", lineNumber: 87 });
})();

export {
  GROUP_PERMISSION_FLAGS,
  hasGroupPermission,
  setGroupPermission,
  groupPermissionLabels,
  GroupPermissionsModalComponent
};
//# sourceMappingURL=chunk-FJKSMXJY.js.map

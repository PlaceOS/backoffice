import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-EHRHPS3K.js";
import {
  GROUP_PERMISSION_FLAGS,
  hasGroupPermission,
  setGroupPermission
} from "./chunk-FJKSMXJY.js";
import {
  SettingsToggleComponent
} from "./chunk-VL2ZDJSE.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-2QGG546G.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-RYVMR3UL.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix,
  MatSuffix
} from "./chunk-MJ3UWWSD.js";
import {
  DefaultValueAccessor,
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
  computed,
  inject,
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-UAS3QR7R.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-DPH5AP7B.js";

// src/app/groups/group-bulk-add-modal.component.ts
var _c0 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.key;
function GroupBulkAddModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-tab-group", 10);
    \u0275\u0275listener("selectedIndexChange", function GroupBulkAddModalComponent_Conditional_7_Template_mat_tab_group_selectedIndexChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tab.set($event));
    });
    \u0275\u0275element(1, "mat-tab", 11);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "mat-tab", 11);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("selectedIndex", ctx_r1.tab());
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 3, "GROUPS.TAB_USERS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(4, 5, "GROUPS.FIELD_PERMISSIONS"));
  }
}
function GroupBulkAddModalComponent_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "mat-spinner", 19);
    \u0275\u0275elementEnd();
  }
}
function GroupBulkAddModalComponent_Conditional_9_Conditional_8_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 23);
    \u0275\u0275text(1, "done");
    \u0275\u0275elementEnd();
  }
}
function GroupBulkAddModalComponent_Conditional_9_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function GroupBulkAddModalComponent_Conditional_9_Conditional_8_For_1_Template_button_click_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleItem(item_r5));
    });
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275conditionalCreate(2, GroupBulkAddModalComponent_Conditional_9_Conditional_8_For_1_Conditional_2_Template, 2, 0, "icon", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24)(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-base-200", ctx_r1.isSelected(item_r5.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-info", ctx_r1.isSelected(item_r5.id))("border-info", ctx_r1.isSelected(item_r5.id))("text-info-content", ctx_r1.isSelected(item_r5.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSelected(item_r5.id) ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r5.name || item_r5.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r5.email || item_r5.description || item_r5.id, " ");
  }
}
function GroupBulkAddModalComponent_Conditional_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, GroupBulkAddModalComponent_Conditional_9_Conditional_8_For_1_Template, 8, 11, "button", 20, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.list_items());
  }
}
function GroupBulkAddModalComponent_Conditional_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.empty_message), " ");
  }
}
function GroupBulkAddModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 12)(1, "input", 13);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function GroupBulkAddModalComponent_Conditional_9_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.search.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "div", 14)(4, "icon", 15);
    \u0275\u0275text(5, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, GroupBulkAddModalComponent_Conditional_9_Conditional_6_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "section", 17);
    \u0275\u0275conditionalCreate(8, GroupBulkAddModalComponent_Conditional_9_Conditional_8_Template, 2, 0)(9, GroupBulkAddModalComponent_Conditional_9_Conditional_9_Template, 3, 3, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 4, ctx_r1.placeholder))("ngModel", ctx_r1.search());
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.loading() ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.list_items().length ? 8 : 9);
  }
}
function GroupBulkAddModalComponent_Conditional_10_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 30);
    \u0275\u0275listener("ngModelChange", function GroupBulkAddModalComponent_Conditional_10_For_6_Template_settings_toggle_ngModelChange_0_listener($event) {
      const permission_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setPermission(permission_r7.value, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const permission_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r1.hasPermission(ctx_r1.permissions(), permission_r7.value));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, permission_r7.label), " ");
  }
}
function GroupBulkAddModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "section", 28);
    \u0275\u0275repeaterCreate(5, GroupBulkAddModalComponent_Conditional_10_For_6_Template, 3, 4, "settings-toggle", 29, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "GROUPS.USERS_BULK_PERMISSIONS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.permission_flags);
  }
}
var GroupBulkAddModalComponent = class _GroupBulkAddModalComponent {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  selected = signal(
    [],
    ...ngDevMode ? [{ debugName: "selected" }] : (
      /* istanbul ignore next */
      []
    )
  );
  search = signal(
    "",
    ...ngDevMode ? [{ debugName: "search" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  permissions = signal(
    this._data.permissions ?? 0,
    ...ngDevMode ? [{ debugName: "permissions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tab = signal(
    0,
    ...ngDevMode ? [{ debugName: "tab" }] : (
      /* istanbul ignore next */
      []
    )
  );
  title = this._data.title;
  placeholder = this._data.placeholder;
  empty_message = this._data.empty_message;
  query_fn = this._data.query_fn;
  show_permissions = !!this._data.show_permissions;
  permission_flags = GROUP_PERMISSION_FLAGS;
  hasPermission = hasGroupPermission;
  selected_count = computed(
    () => this.selected().length,
    ...ngDevMode ? [{ debugName: "selected_count" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _items = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_items" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => this.search().trim(),
    loader: async ({ params }) => {
      this.loading.set(true);
      try {
        const items = await this.query_fn(params).catch(() => []);
        const search = params.toLowerCase();
        return items.filter((item) => !this.exclude_fn(item, search));
      } finally {
        this.loading.set(false);
      }
    }
  }));
  items = computed(
    () => this._items.value() || [],
    ...ngDevMode ? [{ debugName: "items" }] : (
      /* istanbul ignore next */
      []
    )
  );
  list_items = computed(
    () => {
      const selected = this.selected();
      const selected_ids = new Set(selected.map((_) => _.id));
      return [
        ...selected,
        ...this.items().filter((_) => !selected_ids.has(_.id))
      ];
    },
    ...ngDevMode ? [{ debugName: "list_items" }] : (
      /* istanbul ignore next */
      []
    )
  );
  exclude_fn = (item, search) => !!this._data.exclude?.(item, search);
  isSelected(id) {
    return !!this.selected().find((_) => _.id === id);
  }
  toggleItem(item) {
    if (!item?.id)
      return;
    if (this.isSelected(item.id)) {
      this.selected.set(this.selected().filter((_) => _.id !== item.id));
    } else {
      this.selected.set([...this.selected(), item]);
    }
  }
  setPermission(permission, enabled) {
    this.permissions.set(setGroupPermission(this.permissions(), permission, enabled));
  }
  save() {
    this._dialog_ref.close({
      items: this.selected(),
      permissions: this.permissions()
    });
  }
  static \u0275fac = function GroupBulkAddModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GroupBulkAddModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupBulkAddModalComponent, selectors: [["group-bulk-add-modal"]], decls: 20, vars: 16, consts: [[1, "bg-base-200", "m-2", "flex", "h-14", "shrink-0", "items-center", "justify-between", "gap-2", "rounded-sm", "border-none", "p-2"], [1, "truncate", "px-2", "text-lg", "font-medium", "sm:text-xl"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "border-base-200", "shrink-0", "border-b", 3, "selectedIndex"], [1, "flex", "min-h-0", "flex-1", "flex-col", "gap-4", "overflow-y-auto", "px-4", "py-2"], [1, "flex", "flex-col", "gap-2"], [1, "bg-base-200", "m-2", "flex", "shrink-0", "items-center", "justify-center", "gap-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "bg-base-100", "flex-1"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click", "disabled"], [1, "mr-2"], [1, "border-base-200", "shrink-0", "border-b", 3, "selectedIndexChange", "selectedIndex"], [3, "label"], ["appearance", "outline", 1, "no-subscript"], ["matInput", "", "name", "group-bulk-add-search", 3, "ngModelChange", "placeholder", "ngModel"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matSuffix", "", 1, "suffix"], [1, "border-base-200", "min-h-0", "flex-1", "overflow-auto", "rounded", "border", "sm:h-[45vh]", "sm:flex-none"], [1, "flex", "h-full", "min-h-40", "items-center", "justify-center", "p-6", "text-sm", "opacity-40"], ["diameter", "16"], ["matRipple", "", 1, "border-base-200", "hover:bg-base-200", "flex", "w-full", "items-center", "gap-3", "border-b", "px-3", "py-2", "text-left", "last:border-b-0", 3, "bg-base-200"], ["matRipple", "", 1, "border-base-200", "hover:bg-base-200", "flex", "w-full", "items-center", "gap-3", "border-b", "px-3", "py-2", "text-left", "last:border-b-0", 3, "click"], [1, "flex", "h-6", "w-6", "items-center", "justify-center", "rounded", "border"], [1, "text-lg"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm"], [1, "truncate", "text-xs", "opacity-50"], [1, "text-xs", "font-medium", "uppercase", "opacity-50"], [1, "grid", "grid-cols-1", "gap-x-4", "gap-y-2", "sm:grid-cols-2"], [3, "ngModel"], [3, "ngModelChange", "ngModel"]], template: function GroupBulkAddModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2)(5, "icon");
      \u0275\u0275text(6, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(7, GroupBulkAddModalComponent_Conditional_7_Template, 5, 7, "mat-tab-group", 3);
      \u0275\u0275elementStart(8, "main", 4);
      \u0275\u0275conditionalCreate(9, GroupBulkAddModalComponent_Conditional_9_Template, 10, 6);
      \u0275\u0275conditionalCreate(10, GroupBulkAddModalComponent_Conditional_10_Template, 7, 3, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "footer", 6)(12, "button", 7);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 8);
      \u0275\u0275listener("click", function GroupBulkAddModalComponent_Template_button_click_15_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(16, "icon", 9);
      \u0275\u0275text(17, "playlist_add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, ctx.title), " ");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.show_permissions ? 7 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.show_permissions || ctx.tab() === 0 ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.show_permissions && ctx.tab() === 1 ? 10 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 9, "COMMON.CANCEL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.selected().length);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 11, "GROUPS.BULK_ADD_SELECTED", \u0275\u0275pureFunction1(14, _c0, ctx.selected().length)), " ");
    }
  }, dependencies: [
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    IconComponent,
    MatDialogModule,
    MatDialogClose,
    MatFormFieldModule,
    MatFormField,
    MatPrefix,
    MatSuffix,
    MatInputModule,
    MatInput,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatRippleModule,
    MatRipple,
    MatTabsModule,
    MatTab,
    MatTabGroup,
    SettingsToggleComponent,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 32rem;\n  max-width: calc(100vw - 1rem);\n  max-height: calc(100vh - 2em);\n  overflow: hidden;\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n    height: 100%;\n    max-width: 100%;\n    max-height: 100%;\n  }\n}\n/*# sourceMappingURL=group-bulk-add-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupBulkAddModalComponent, [{
    type: Component,
    args: [{ selector: "group-bulk-add-modal", template: `
        <header
            class="bg-base-200 m-2 flex h-14 shrink-0 items-center justify-between gap-2 rounded-sm border-none p-2"
        >
            <h2 class="truncate px-2 text-lg font-medium sm:text-xl">
                {{ title | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        @if (show_permissions) {
            <mat-tab-group
                class="border-base-200 shrink-0 border-b"
                [selectedIndex]="tab()"
                (selectedIndexChange)="tab.set($event)"
            >
                <mat-tab [label]="'GROUPS.TAB_USERS' | translate" />
                <mat-tab [label]="'GROUPS.FIELD_PERMISSIONS' | translate" />
            </mat-tab-group>
        }
        <main class="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4 py-2">
            @if (!show_permissions || tab() === 0) {
                <mat-form-field appearance="outline" class="no-subscript">
                    <input
                        matInput
                        name="group-bulk-add-search"
                        [placeholder]="placeholder | translate"
                        [ngModel]="search()"
                        (ngModelChange)="search.set($event)"
                    />
                    <div class="prefix" matPrefix>
                        <icon class="relative -left-0.5 text-2xl">search</icon>
                    </div>
                    @if (loading()) {
                        <div class="suffix" matSuffix>
                            <mat-spinner diameter="16" />
                        </div>
                    }
                </mat-form-field>
                <section
                    class="border-base-200 min-h-0 flex-1 overflow-auto rounded border sm:h-[45vh] sm:flex-none"
                >
                    @if (list_items().length) {
                        @for (item of list_items(); track item.id) {
                            <button
                                matRipple
                                class="border-base-200 hover:bg-base-200 flex w-full items-center gap-3 border-b px-3 py-2 text-left last:border-b-0"
                                [class.bg-base-200]="isSelected(item.id)"
                                (click)="toggleItem(item)"
                            >
                                <div
                                    class="flex h-6 w-6 items-center justify-center rounded border"
                                    [class.bg-info]="isSelected(item.id)"
                                    [class.border-info]="isSelected(item.id)"
                                    [class.text-info-content]="
                                        isSelected(item.id)
                                    "
                                >
                                    @if (isSelected(item.id)) {
                                        <icon class="text-lg">done</icon>
                                    }
                                </div>
                                <div class="min-w-0 flex-1">
                                    <div class="truncate text-sm">
                                        {{ item.name || item.id }}
                                    </div>
                                    <div class="truncate text-xs opacity-50">
                                        {{
                                            item.email ||
                                                item.description ||
                                                item.id
                                        }}
                                    </div>
                                </div>
                            </button>
                        }
                    } @else {
                        <div
                            class="flex h-full min-h-40 items-center justify-center p-6 text-sm opacity-40"
                        >
                            {{ empty_message | translate }}
                        </div>
                    }
                </section>
            }
            @if (show_permissions && tab() === 1) {
                <div class="flex flex-col gap-2">
                    <div class="text-xs font-medium uppercase opacity-50">
                        {{ 'GROUPS.USERS_BULK_PERMISSIONS' | translate }}
                    </div>
                    <section
                        class="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2"
                    >
                        @for (
                            permission of permission_flags;
                            track permission.key
                        ) {
                            <settings-toggle
                                [ngModel]="
                                    hasPermission(
                                        permissions(),
                                        permission.value
                                    )
                                "
                                (ngModelChange)="
                                    setPermission(permission.value, $event)
                                "
                            >
                                {{ permission.label | translate }}
                            </settings-toggle>
                        }
                    </section>
                </div>
            }
        </main>
        <footer
            class="bg-base-200 m-2 flex shrink-0 items-center justify-center gap-2 rounded-sm border-none p-2"
        >
            <button
                btn
                matRipple
                class="inverse bg-base-100 flex-1"
                mat-dialog-close
            >
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button
                btn
                matRipple
                class="flex-1"
                [disabled]="!selected().length"
                (click)="save()"
            >
                <icon class="mr-2">playlist_add</icon>
                {{
                    'GROUPS.BULK_ADD_SELECTED'
                        | translate: { count: selected().length }
                }}
            </button>
        </footer>
    `, imports: [
      FormsModule,
      IconComponent,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatTabsModule,
      SettingsToggleComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;6ae5e8984580491c405091e67d45887ebdea1cabd7aacb69021e61fd27b13124;/home/runner/work/backoffice/backoffice/src/app/groups/group-bulk-add-modal.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 32rem;\n  max-width: calc(100vw - 1rem);\n  max-height: calc(100vh - 2em);\n  overflow: hidden;\n}\n@media (max-width: 640px) {\n  :host {\n    width: 100%;\n    height: 100%;\n    max-width: 100%;\n    max-height: 100%;\n  }\n}\n/*# sourceMappingURL=group-bulk-add-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupBulkAddModalComponent, { className: "GroupBulkAddModalComponent", filePath: "src/app/groups/group-bulk-add-modal.component.ts", lineNumber: 224 });
})();

export {
  GroupBulkAddModalComponent
};
//# sourceMappingURL=chunk-QW6TLFGR.js.map

import {
  GROUP_PERMISSION_FLAGS,
  GroupPermissionsModalComponent,
  groupPermissionLabels,
  hasGroupPermission,
  setGroupPermission
} from "./chunk-YCZJQIA3.js";
import {
  subtreeFilter
} from "./chunk-ZEZ65MC2.js";
import {
  waitForEvent
} from "./chunk-G5DVCCF5.js";
import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-D2UW5FFM.js";
import {
  ItemSearchFieldComponent
} from "./chunk-O4WOCGMX.js";
import "./chunk-77EWWK2U.js";
import "./chunk-5DZHHUHH.js";
import {
  SettingsToggleComponent
} from "./chunk-FDG4YB46.js";
import "./chunk-VZ4JF2ZJ.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-4MSIA662.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-RFD5AOWN.js";
import {
  addSignalChipItem,
  getInvalidSignalFields,
  removeSignalChipItem
} from "./chunk-OKMGGQII.js";
import {
  FormField,
  disabled,
  form,
  required,
  submit
} from "./chunk-QBQ5C53A.js";
import {
  FullscreenModalShellComponent
} from "./chunk-NPIW26D2.js";
import {
  HotkeysService
} from "./chunk-WSH7C5JM.js";
import "./chunk-M2O6T64P.js";
import {
  readError
} from "./chunk-G3IJGLD4.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  AsyncHandler
} from "./chunk-SDGTGI2H.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-66VCHSRY.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-S3MO7QJA.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-HS6BVHDB.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-XMG57YWH.js";
import "./chunk-W6NODITO.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-PNGPFML7.js";
import "./chunk-4G55JYYO.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-ETRW4JH6.js";
import {
  COMMA,
  ENTER,
  IconComponent,
  MatRipple
} from "./chunk-MKMIAR67.js";
import "./chunk-IWUSEH7D.js";
import {
  Component,
  Eu,
  EventEmitter,
  Input,
  Mt,
  Mu,
  Output,
  Ru,
  Tu,
  Wo,
  computed,
  f,
  inject,
  input,
  model,
  oi,
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-M2N6S2L7.js";
import {
  __objRest,
  __restKey,
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/groups/groups.utilities.ts
function generateGroupFormModel(group) {
  return {
    name: group?.name || "",
    description: group?.description || "",
    parent_id: group?.parent_id || "",
    authority_id: group?.authority_id || Mt()?.id || "",
    subsystems: group?.subsystems || [],
    default_permissions: group?.default_permissions || 0,
    ad_group_mappings: __spreadValues({}, group?.ad_group_mappings || {})
  };
}
var applyGroupFormSchema = (path) => {
  required(path.name);
};
function setAdGroupMapping(mappings, id, name, permissions) {
  const key = id.trim().toLowerCase();
  if (!key)
    return mappings;
  return __spreadProps(__spreadValues({}, mappings), { [key]: [name.trim() || key, +permissions || 0] });
}
function removeAdGroupMapping(mappings, id) {
  const _a = mappings, { [id]: _ } = _a, rest = __objRest(_a, [__restKey(id)]);
  return rest;
}
async function hasStaffGroupSearch(authority_id) {
  const current = Mt();
  if (!current?.id || current.id !== authority_id)
    return false;
  try {
    const tenants = await f("/api/staff/v1/tenants");
    return tenants.some((tenant) => tenant.domain === current.domain && tenant.platform === "office365");
  } catch {
    return searchStaffGroups("").then(() => true, () => false);
  }
}
async function searchStaffGroups(q) {
  return await f(`/api/staff/v1/groups?q=${encodeURIComponent(q)}`);
}

// src/app/groups/group-ad-groups-field.component.ts
var _c0 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.id;
function GroupAdGroupsFieldComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "item-search-field", 5);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("ngModelChange", function GroupAdGroupsFieldComponent_Conditional_1_Template_item_search_field_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addGroup($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(1, 6, "GROUPS.AD_GROUP_SEARCH"))("query_fn", ctx_r1.query_fn)("exclude", ctx_r1.exclude_fn)("clear_on_select", true)("ngModel", null)("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275control();
  }
}
function GroupAdGroupsFieldComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "mat-form-field", 6)(2, "input", 7);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function GroupAdGroupsFieldComponent_Conditional_2_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.new_id, $event) || (ctx_r1.new_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function GroupAdGroupsFieldComponent_Conditional_2_Template_input_keydown_enter_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addManual());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6)(5, "input", 8);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function GroupAdGroupsFieldComponent_Conditional_2_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.new_name, $event) || (ctx_r1.new_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function GroupAdGroupsFieldComponent_Conditional_2_Template_input_keydown_enter_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addManual());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 9);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("click", function GroupAdGroupsFieldComponent_Conditional_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addManual());
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 6, "GROUPS.AD_GROUP_ID"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.new_id);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 8, "GROUPS.AD_GROUP_NAME"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.new_name);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.new_id().trim())("matTooltip", \u0275\u0275pipeBind1(8, 10, "GROUPS.AD_GROUP_ADD"));
  }
}
function GroupAdGroupsFieldComponent_For_4_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, label_r5), " ");
  }
}
function GroupAdGroupsFieldComponent_For_4_ForEmpty_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.NONE"));
  }
}
function GroupAdGroupsFieldComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 10)(2, "div", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275repeaterCreate(7, GroupAdGroupsFieldComponent_For_4_For_8_Template, 3, 3, "span", 14, \u0275\u0275repeaterTrackByIdentity, false, GroupAdGroupsFieldComponent_For_4_ForEmpty_9_Template, 3, 3, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 16);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("click", function GroupAdGroupsFieldComponent_For_4_Template_button_click_10_listener() {
      const row_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editPermissions(row_r6));
    });
    \u0275\u0275elementStart(12, "icon");
    \u0275\u0275text(13, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 17);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275listener("click", function GroupAdGroupsFieldComponent_For_4_Template_button_click_14_listener() {
      const row_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeGroup(row_r6.id));
    });
    \u0275\u0275elementStart(16, "icon");
    \u0275\u0275text(17, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r6.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.permissionLabels(row_r6.permissions));
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 5, "GROUPS.AD_GROUP_PERMISSIONS"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(15, 7, "GROUPS.AD_GROUP_REMOVE"));
  }
}
function GroupAdGroupsFieldComponent_ForEmpty_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "GROUPS.AD_GROUPS_EMPTY"), " ");
  }
}
var GroupAdGroupsFieldComponent = class _GroupAdGroupsFieldComponent {
  _dialog = inject(MatDialog);
  mappings = model(
    {},
    ...ngDevMode ? [{ debugName: "mappings" }] : (
      /* istanbul ignore next */
      []
    )
  );
  default_permissions = input(
    0,
    ...ngDevMode ? [{ debugName: "default_permissions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Unset while the form checks for staff API search */
  searchable = input(
    ...ngDevMode ? [void 0, { debugName: "searchable" }] : (
      /* istanbul ignore next */
      []
    )
  );
  new_id = signal(
    "",
    ...ngDevMode ? [{ debugName: "new_id" }] : (
      /* istanbul ignore next */
      []
    )
  );
  new_name = signal(
    "",
    ...ngDevMode ? [{ debugName: "new_name" }] : (
      /* istanbul ignore next */
      []
    )
  );
  permissionLabels = groupPermissionLabels;
  rows = computed(
    () => Object.entries(this.mappings()).map(([id, [name, permissions]]) => ({ id, name, permissions })).sort((a, b) => a.name.localeCompare(b.name)),
    ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  query_fn = (q) => searchStaffGroups(q);
  exclude_fn = (group) => !!this.mappings()[group.id.trim().toLowerCase()];
  /** Maps a new AD group with the default permissions. Existing ones are kept */
  addGroup(group) {
    if (!group?.id || this.mappings()[group.id.trim().toLowerCase()]) {
      return;
    }
    this.mappings.update((mappings) => setAdGroupMapping(mappings, group.id, group.name, this.default_permissions()));
  }
  addManual() {
    if (!this.new_id().trim())
      return;
    this.addGroup({ id: this.new_id(), name: this.new_name() });
    this.new_id.set("");
    this.new_name.set("");
  }
  removeGroup(id) {
    this.mappings.update((mappings) => removeAdGroupMapping(mappings, id));
  }
  async editPermissions(row) {
    const result = await waitForEvent(this._dialog.open(GroupPermissionsModalComponent, {
      data: {
        title: "GROUPS.AD_GROUP_PERMISSIONS",
        permissions: row.permissions
      }
    }).afterClosed());
    if (!result)
      return;
    this.mappings.update((mappings) => setAdGroupMapping(mappings, row.id, row.name, result.permissions));
  }
  static \u0275fac = function GroupAdGroupsFieldComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GroupAdGroupsFieldComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupAdGroupsFieldComponent, selectors: [["group-ad-groups-field"]], inputs: { mappings: [1, "mappings"], default_permissions: [1, "default_permissions"], searchable: [1, "searchable"] }, outputs: { mappings: "mappingsChange" }, decls: 6, vars: 2, consts: [[1, "flex", "flex-col", "gap-2"], [3, "placeholder", "query_fn", "exclude", "clear_on_select", "ngModel", "ngModelOptions"], [1, "flex", "items-center", "gap-2"], [1, "border-base-200", "flex", "items-center", "gap-2", "rounded-sm", "border", "px-4", "py-2"], [1, "p-2", "text-center", "text-sm", "opacity-30"], [3, "ngModelChange", "placeholder", "query_fn", "exclude", "clear_on_select", "ngModel", "ngModelOptions"], ["appearance", "outline", 1, "no-subscript", "flex-1"], ["matInput", "", "name", "ad-group-id", 3, "ngModelChange", "keydown.enter", "placeholder", "ngModel"], ["matInput", "", "name", "ad-group-name", 3, "ngModelChange", "keydown.enter", "placeholder", "ngModel"], ["type", "button", "btn", "", "icon", "", "matRipple", "", 1, "h-12", "w-12", 3, "click", "disabled", "matTooltip"], [1, "flex", "min-w-0", "flex-1", "flex-col"], [1, "truncate", "text-sm"], [1, "mono", "truncate", "text-xs", "opacity-30"], [1, "flex", "max-w-[50%]", "flex-wrap", "justify-end", "gap-1"], [1, "bg-base-200", "rounded", "px-2", "py-1", "text-xs"], [1, "text-xs", "opacity-30"], ["type", "button", "icon", "", "matRipple", "", 3, "click", "matTooltip"], ["type", "button", "icon", "", "error", "", "matRipple", "", 3, "click", "matTooltip"]], template: function GroupAdGroupsFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, GroupAdGroupsFieldComponent_Conditional_1_Template, 2, 9, "item-search-field", 1)(2, GroupAdGroupsFieldComponent_Conditional_2_Template, 11, 12, "div", 2);
      \u0275\u0275repeaterCreate(3, GroupAdGroupsFieldComponent_For_4_Template, 18, 9, "div", 3, _forTrack0, false, GroupAdGroupsFieldComponent_ForEmpty_5_Template, 3, 3, "p", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.searchable() ? 1 : ctx.searchable() === false ? 2 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.rows());
    }
  }, dependencies: [
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    IconComponent,
    ItemSearchFieldComponent,
    MatFormFieldModule,
    MatFormField,
    MatInputModule,
    MatInput,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupAdGroupsFieldComponent, [{
    type: Component,
    args: [{ selector: "group-ad-groups-field", template: `
        <div class="flex flex-col gap-2">
            @if (searchable()) {
                <item-search-field
                    [placeholder]="'GROUPS.AD_GROUP_SEARCH' | translate"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [clear_on_select]="true"
                    [ngModel]="null"
                    [ngModelOptions]="{ standalone: true }"
                    (ngModelChange)="addGroup($event)"
                />
            } @else if (searchable() === false) {
                <div class="flex items-center gap-2">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript flex-1"
                    >
                        <input
                            matInput
                            name="ad-group-id"
                            [placeholder]="'GROUPS.AD_GROUP_ID' | translate"
                            [(ngModel)]="new_id"
                            (keydown.enter)="addManual()"
                        />
                    </mat-form-field>
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript flex-1"
                    >
                        <input
                            matInput
                            name="ad-group-name"
                            [placeholder]="'GROUPS.AD_GROUP_NAME' | translate"
                            [(ngModel)]="new_name"
                            (keydown.enter)="addManual()"
                        />
                    </mat-form-field>
                    <button
                        type="button"
                        btn
                        icon
                        matRipple
                        class="h-12 w-12"
                        [disabled]="!new_id().trim()"
                        [matTooltip]="'GROUPS.AD_GROUP_ADD' | translate"
                        (click)="addManual()"
                    >
                        <icon>add</icon>
                    </button>
                </div>
            }
            @for (row of rows(); track row.id) {
                <div
                    class="border-base-200 flex items-center gap-2 rounded-sm border px-4 py-2"
                >
                    <div class="flex min-w-0 flex-1 flex-col">
                        <div class="truncate text-sm">{{ row.name }}</div>
                        <div class="mono truncate text-xs opacity-30">
                            {{ row.id }}
                        </div>
                    </div>
                    <div class="flex max-w-[50%] flex-wrap justify-end gap-1">
                        @for (
                            label of permissionLabels(row.permissions);
                            track label
                        ) {
                            <span class="bg-base-200 rounded px-2 py-1 text-xs">
                                {{ label | translate }}
                            </span>
                        } @empty {
                            <span class="text-xs opacity-30">{{
                                'COMMON.NONE' | translate
                            }}</span>
                        }
                    </div>
                    <button
                        type="button"
                        icon
                        matRipple
                        [matTooltip]="'GROUPS.AD_GROUP_PERMISSIONS' | translate"
                        (click)="editPermissions(row)"
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        type="button"
                        icon
                        error
                        matRipple
                        [matTooltip]="'GROUPS.AD_GROUP_REMOVE' | translate"
                        (click)="removeGroup(row.id)"
                    >
                        <icon>delete</icon>
                    </button>
                </div>
            } @empty {
                <p class="p-2 text-center text-sm opacity-30">
                    {{ 'GROUPS.AD_GROUPS_EMPTY' | translate }}
                </p>
            }
        </div>
    `, imports: [
      FormsModule,
      IconComponent,
      ItemSearchFieldComponent,
      MatFormFieldModule,
      MatInputModule,
      MatRippleModule,
      MatTooltipModule,
      TranslatePipe
    ] }]
  }], null, { mappings: [{ type: Input, args: [{ isSignal: true, alias: "mappings", required: false }] }, { type: Output, args: ["mappingsChange"] }], default_permissions: [{ type: Input, args: [{ isSignal: true, alias: "default_permissions", required: false }] }], searchable: [{ type: Input, args: [{ isSignal: true, alias: "searchable", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupAdGroupsFieldComponent, { className: "GroupAdGroupsFieldComponent", filePath: "src/app/groups/group-ad-groups-field.component.ts", lineNumber: 151 });
})();

// src/app/groups/group-form.component.ts
var _c02 = () => ({ standalone: true });
var _c1 = (a0) => ({ item: a0 });
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.key;
function GroupFormComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const domain_r1 = ctx.$implicit;
    \u0275\u0275property("value", domain_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", domain_r1.name, " ");
  }
}
function GroupFormComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 25);
    \u0275\u0275listener("removed", function GroupFormComponent_For_45_Template_mat_chip_row_removed_0_listener() {
      const subsystem_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeSubsystem(subsystem_r3));
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 27);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const subsystem_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", subsystem_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(4, 2, "COMMON.ITEM_REMOVE", \u0275\u0275pureFunction1(5, _c1, subsystem_r3)));
  }
}
function GroupFormComponent_For_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 28);
    \u0275\u0275listener("ngModelChange", function GroupFormComponent_For_57_Template_settings_toggle_ngModelChange_0_listener($event) {
      const permission_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setDefaultPermission(permission_r6.value, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const permission_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r3.hasPermission(ctx_r3.formModel().default_permissions, permission_r6.value))("ngModelOptions", \u0275\u0275pureFunction0(5, _c02));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, permission_r6.label), " ");
  }
}
var GroupFormComponent = class _GroupFormComponent extends AsyncHandler {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  _hotkey = inject(HotkeysService);
  _name = "GROUPS";
  event = new EventEmitter();
  formModel = signal(
    generateGroupFormModel(this._data.item),
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.formModel, (path) => {
    applyGroupFormSchema(path);
    disabled(path.authority_id, () => !!this._data.item.id);
  });
  loading = signal(
    null,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  heading = i18n(`${this._name}.${this._data.item.id ? "EDIT" : "NEW"}`);
  _domain_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_domain_list" } : (
    /* istanbul ignore next */
    {}
  )), { loader: async () => (await Wo({ limit: 1e3 })).data }));
  domain_list = computed(
    () => this._domain_list.value() || [],
    ...ngDevMode ? [{ debugName: "domain_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  parent_group = signal(
    null,
    ...ngDevMode ? [{ debugName: "parent_group" }] : (
      /* istanbul ignore next */
      []
    )
  );
  subsystem_list = computed(
    () => this.formModel().subsystems || [],
    ...ngDevMode ? [{ debugName: "subsystem_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  separators = [ENTER, COMMA];
  permission_flags = GROUP_PERMISSION_FLAGS;
  hasPermission = hasGroupPermission;
  /** Whether AD groups can be found with the staff API */
  staff_group_search = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "staff_group_search" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => this.formModel().authority_id,
    loader: ({ params }) => hasStaffGroupSearch(params)
  }));
  _excludeSubtree = subtreeFilter((id) => Ru(id));
  _authority_id = computed(
    () => this.formModel().authority_id,
    ...ngDevMode ? [{ debugName: "_authority_id" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Lists groups in the selected authority, as a parent must be in the same
   * authority. Hides this group's descendants, so the parent can't create a
   * cycle. A new function per authority makes the search field query again.
   */
  query_parent_groups = computed(
    () => {
      const authority_id = this._authority_id();
      return (q) => Tu({ q, limit: 20 }).then(({ data }) => this._excludeSubtree(data.filter((group) => group.authority_id === authority_id), this._data.item.id));
    },
    ...ngDevMode ? [{ debugName: "query_parent_groups" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** A group can't be its own parent */
  exclude_parent_group = (group, __) => group.id === this._data.item.id;
  ngOnInit() {
    this.subscription("save_item_key", this._hotkey.listen(["KeyS"], () => this.submit()));
    this.loadParentGroup();
  }
  setParentGroup(group) {
    this.parent_group.set(group);
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
      parent_id: group?.id || ""
    }));
    if (!group?.subsystems?.length)
      return;
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
      subsystems: Array.from(/* @__PURE__ */ new Set([...value.subsystems || [], ...group.subsystems]))
    }));
  }
  setDefaultPermission(permission, enabled) {
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
      default_permissions: setGroupPermission(value.default_permissions, permission, enabled)
    }));
  }
  setAdGroupMappings(ad_group_mappings) {
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), { ad_group_mappings }));
  }
  addSubsystem = (event) => this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
    subsystems: addSignalChipItem(value.subsystems, event)
  }));
  removeSubsystem = (subsystem) => this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
    subsystems: removeSignalChipItem(value.subsystems, subsystem)
  }));
  async submit() {
    await submit(this.form, async () => {
      const item = this._data.item;
      this.loading.set(i18n(`${this._name}.SAVING`));
      this._dialog_ref.disableClose = true;
      const form_value = this.formModel();
      const form_item = oi(__spreadProps(__spreadValues(__spreadValues({}, item), form_value), {
        subsystems: form_value.subsystems || []
      }), ["", void 0]);
      try {
        const _item = await (form_item.id ? Mu(form_item.id, form_item) : Eu(form_item));
        this._dialog_ref.disableClose = false;
        this.event.emit({ reason: "done", metadata: { item: _item } });
        notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
        this._dialog_ref.close();
      } catch (err) {
        this.loading.set(null);
        this._dialog_ref.disableClose = false;
        notifyError(i18n(`${this._name}.SAVE_ERROR`, {
          error: await readError(err)
        }));
      }
    });
    if (this.form().invalid()) {
      return notifyError(i18n("COMMON.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form).join(", ")
      }));
    }
  }
  async loadParentGroup() {
    const parent_id = this.formModel().parent_id;
    if (!parent_id)
      return;
    const parent = await Ru(parent_id).catch(() => null);
    this.parent_group.set(parent);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275GroupFormComponent_BaseFactory;
    return function GroupFormComponent_Factory(__ngFactoryType__) {
      return (\u0275GroupFormComponent_BaseFactory || (\u0275GroupFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_GroupFormComponent)))(__ngFactoryType__ || _GroupFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupFormComponent, selectors: [["group-form"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 66, vars: 63, consts: [["chipList", ""], [3, "save", "heading", "loading"], [1, "flex", "flex-col"], [1, "field"], ["for", "group-name"], ["appearance", "outline"], ["matInput", "", "id", "group-name", 3, "placeholder", "formField"], ["for", "group-description"], ["matInput", "", "id", "group-description", 3, "placeholder", "formField"], [1, "fieldset"], ["for", "group-parent", "id", "group-parent-label"], ["id", "group-parent", "role", "group", "aria-labelledby", "group-parent-label", 3, "ngModelChange", "placeholder", "query_fn", "exclude", "ngModel", "ngModelOptions"], ["for", "group-authority", "id", "group-authority-label"], ["id", "group-authority", "aria-labelledby", "group-authority-label", 3, "selectionChange", "placeholder", "formField"], [3, "value"], ["for", "group-subsystems"], ["appearance", "outline", 1, "w-full"], ["aria-label", "Subsystem List"], ["id", "group-subsystems", "name", "group-subsystems", 3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [1, "mb-1", "text-[0.8em]", "font-medium"], [1, "mb-2", "text-xs", "opacity-60"], [1, "grid", "grid-cols-2", "gap-2", "sm:grid-cols-4"], [3, "ngModel", "ngModelOptions"], [1, "field", "mt-4"], [3, "mappingsChange", "mappings", "default_permissions", "searchable"], [3, "removed"], [1, "max-w-md", "truncate"], ["type", "button", "matChipRemove", ""], [3, "ngModelChange", "ngModel", "ngModelOptions"]], template: function GroupFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
      \u0275\u0275listener("save", function GroupFormComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(1, "form", 2)(2, "div", 3)(3, "label", 4);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "mat-form-field", 5);
      \u0275\u0275element(9, "input", 6);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(11, "mat-error");
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 3)(15, "label", 7);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "mat-form-field", 5);
      \u0275\u0275element(19, "textarea", 8);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 9)(22, "div", 3)(23, "label", 10);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "item-search-field", 11);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275listener("ngModelChange", function GroupFormComponent_Template_item_search_field_ngModelChange_26_listener($event) {
        return ctx.setParentGroup($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 3)(29, "label", 12);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "mat-form-field", 5)(33, "mat-select", 13);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275listener("selectionChange", function GroupFormComponent_Template_mat_select_selectionChange_33_listener() {
        return ctx.setParentGroup(null);
      });
      \u0275\u0275repeaterCreate(35, GroupFormComponent_For_36_Template, 2, 2, "mat-option", 14, _forTrack02);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 3)(38, "label", 15);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "mat-form-field", 16)(42, "mat-chip-grid", 17, 0);
      \u0275\u0275repeaterCreate(44, GroupFormComponent_For_45_Template, 7, 7, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "input", 18);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275listener("matChipInputTokenEnd", function GroupFormComponent_Template_input_matChipInputTokenEnd_46_listener($event) {
        return ctx.addSubsystem($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "fieldset", 3)(49, "legend", 19);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p", 20);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 21);
      \u0275\u0275repeaterCreate(56, GroupFormComponent_For_57_Template, 3, 6, "settings-toggle", 22, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "fieldset", 23)(59, "legend", 19);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "p", 20);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "group-ad-groups-field", 24);
      \u0275\u0275listener("mappingsChange", function GroupFormComponent_Template_group_ad_groups_field_mappingsChange_65_listener($event) {
        return ctx.setAdGroupMappings($event);
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const chipList_r7 = \u0275\u0275reference(43);
      \u0275\u0275property("heading", ctx.heading)("loading", ctx.loading());
      \u0275\u0275advance(3);
      \u0275\u0275classProp("error", ctx.form.name().invalid() && ctx.form.name().touched());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 32, "COMMON.FIELD_NAME"));
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 34, "COMMON.FIELD_NAME"))("formField", ctx.form.name);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 36, "GROUPS.NAME_REQUIRED"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 38, "COMMON.FIELD_DESCRIPTION"));
      \u0275\u0275advance(3);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(20, 40, "COMMON.FIELD_DESCRIPTION"))("formField", ctx.form.description);
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 42, "GROUPS.PARENT_ID"));
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(27, 44, "GROUPS.PARENT_SEARCH"))("query_fn", ctx.query_parent_groups())("exclude", ctx.exclude_parent_group)("ngModel", ctx.parent_group())("ngModelOptions", \u0275\u0275pureFunction0(62, _c02));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 46, "GROUPS.AUTHORITY_ID"));
      \u0275\u0275advance(3);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(34, 48, "GROUPS.AUTHORITY_SELECT"))("formField", ctx.form.authority_id);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.domain_list());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 50, "GROUPS.SUBSYSTEMS"));
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.subsystem_list());
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(47, 52, "GROUPS.SUBSYSTEMS_HINT"))("matChipInputFor", chipList_r7)("matChipInputSeparatorKeyCodes", ctx.separators)("matChipInputAddOnBlur", true);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 54, "GROUPS.DEFAULT_PERMISSIONS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(54, 56, "GROUPS.DEFAULT_PERMISSIONS_HINT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.permission_flags);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(61, 58, "GROUPS.AD_GROUPS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(64, 60, "GROUPS.AD_GROUPS_HINT"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("mappings", ctx.formModel().ad_group_mappings)("default_permissions", ctx.formModel().default_permissions)("searchable", ctx.staff_group_search.value());
    }
  }, dependencies: [
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
    MatChipsModule,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
    FormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    ItemSearchFieldComponent,
    IconComponent,
    FormField,
    FullscreenModalShellComponent,
    GroupAdGroupsFieldComponent,
    SettingsToggleComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupFormComponent, [{
    type: Component,
    args: [{ selector: "group-form", template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading()"
            (save)="submit()"
        >
            <form class="flex flex-col">
                <div class="field">
                    <label
                        for="group-name"
                        [class.error]="
                            form.name().invalid() && form.name().touched()
                        "
                    >
                        {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            id="group-name"
                            [placeholder]="'COMMON.FIELD_NAME' | translate"
                            [formField]="form.name"
                        />
                        <mat-error>{{
                            'GROUPS.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="field">
                    <label for="group-description">{{
                        'COMMON.FIELD_DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            id="group-description"
                            [placeholder]="
                                'COMMON.FIELD_DESCRIPTION' | translate
                            "
                            [formField]="form.description"
                        ></textarea>
                    </mat-form-field>
                </div>
                <div class="fieldset">
                    <div class="field">
                        <label for="group-parent" id="group-parent-label">{{
                            'GROUPS.PARENT_ID' | translate
                        }}</label>
                        <item-search-field
                            id="group-parent"
                            role="group"
                            aria-labelledby="group-parent-label"
                            [placeholder]="'GROUPS.PARENT_SEARCH' | translate"
                            [query_fn]="query_parent_groups()"
                            [exclude]="exclude_parent_group"
                            [ngModel]="parent_group()"
                            [ngModelOptions]="{ standalone: true }"
                            (ngModelChange)="setParentGroup($event)"
                        />
                    </div>
                    <div class="field">
                        <label
                            for="group-authority"
                            id="group-authority-label"
                            >{{ 'GROUPS.AUTHORITY_ID' | translate }}</label
                        >
                        <mat-form-field appearance="outline">
                            <mat-select
                                [placeholder]="
                                    'GROUPS.AUTHORITY_SELECT' | translate
                                "
                                id="group-authority"
                                aria-labelledby="group-authority-label"
                                [formField]="form.authority_id"
                                (selectionChange)="setParentGroup(null)"
                            >
                                @for (
                                    domain of domain_list();
                                    track domain.id
                                ) {
                                    <mat-option [value]="domain.id">
                                        {{ domain.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                </div>
                <div class="field">
                    <label for="group-subsystems">{{
                        'GROUPS.SUBSYSTEMS' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-chip-grid #chipList aria-label="Subsystem List">
                            @for (
                                subsystem of subsystem_list();
                                track subsystem
                            ) {
                                <mat-chip-row
                                    (removed)="removeSubsystem(subsystem)"
                                >
                                    <div class="max-w-md truncate">
                                        {{ subsystem }}
                                    </div>
                                    <button
                                        type="button"
                                        matChipRemove
                                        [attr.aria-label]="
                                            'COMMON.ITEM_REMOVE'
                                                | translate: { item: subsystem }
                                        "
                                    >
                                        <icon>cancel</icon>
                                    </button>
                                </mat-chip-row>
                            }
                        </mat-chip-grid>
                        <input
                            id="group-subsystems"
                            name="group-subsystems"
                            [placeholder]="'GROUPS.SUBSYSTEMS_HINT' | translate"
                            [matChipInputFor]="chipList"
                            [matChipInputSeparatorKeyCodes]="separators"
                            [matChipInputAddOnBlur]="true"
                            (matChipInputTokenEnd)="addSubsystem($event)"
                        />
                    </mat-form-field>
                </div>
                <fieldset class="field">
                    <legend class="mb-1 text-[0.8em] font-medium">
                        {{ 'GROUPS.DEFAULT_PERMISSIONS' | translate }}
                    </legend>
                    <p class="mb-2 text-xs opacity-60">
                        {{ 'GROUPS.DEFAULT_PERMISSIONS_HINT' | translate }}
                    </p>
                    <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        @for (
                            permission of permission_flags;
                            track permission.key
                        ) {
                            <settings-toggle
                                [ngModel]="
                                    hasPermission(
                                        formModel().default_permissions,
                                        permission.value
                                    )
                                "
                                [ngModelOptions]="{ standalone: true }"
                                (ngModelChange)="
                                    setDefaultPermission(
                                        permission.value,
                                        $event
                                    )
                                "
                            >
                                {{ permission.label | translate }}
                            </settings-toggle>
                        }
                    </div>
                </fieldset>
                <fieldset class="field mt-4">
                    <legend class="mb-1 text-[0.8em] font-medium">
                        {{ 'GROUPS.AD_GROUPS' | translate }}
                    </legend>
                    <p class="mb-2 text-xs opacity-60">
                        {{ 'GROUPS.AD_GROUPS_HINT' | translate }}
                    </p>
                    <group-ad-groups-field
                        [mappings]="formModel().ad_group_mappings"
                        (mappingsChange)="setAdGroupMappings($event)"
                        [default_permissions]="formModel().default_permissions"
                        [searchable]="staff_group_search.value()"
                    />
                </fieldset>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatChipsModule,
      FormsModule,
      ItemSearchFieldComponent,
      IconComponent,
      TranslatePipe,
      FormField,
      FullscreenModalShellComponent,
      GroupAdGroupsFieldComponent,
      SettingsToggleComponent
    ] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupFormComponent, { className: "GroupFormComponent", filePath: "src/app/groups/group-form.component.ts", lineNumber: 253 });
})();
export {
  GroupFormComponent
};
//# sourceMappingURL=chunk-ZCZLX4RQ.js.map

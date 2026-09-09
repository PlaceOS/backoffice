import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-UVVPQNTD.js";
import {
  ItemSearchFieldComponent
} from "./chunk-ILMVS6QK.js";
import "./chunk-F7OROUUS.js";
import "./chunk-ATWSAHBG.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-2W6BZ6LN.js";
import {
  addSignalChipItem,
  getInvalidSignalFields,
  removeSignalChipItem
} from "./chunk-OKMGGQII.js";
import {
  FormField,
  form,
  required,
  submit
} from "./chunk-PTZ46HPL.js";
import {
  FullscreenModalShellComponent
} from "./chunk-477WPICR.js";
import {
  HotkeysService
} from "./chunk-2PEJLWYX.js";
import "./chunk-DT2ZHKF4.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  AsyncHandler
} from "./chunk-BYWH3GLU.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-ABONVDIB.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-SVKHUIUH.js";
import {
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-QRHAUA7K.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-3GQLVTAP.js";
import "./chunk-U4DS3ATP.js";
import "./chunk-A5D2ZFG3.js";
import {
  MatOption
} from "./chunk-EITG46SC.js";
import "./chunk-EFIMJKOP.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-32YXDKI3.js";
import {
  IconComponent
} from "./chunk-KWINWSBN.js";
import {
  COMMA,
  ENTER
} from "./chunk-UV7WJQ5D.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-7XKIGCHY.js";
import {
  Au,
  Component,
  EventEmitter,
  It,
  Output,
  Su,
  computed,
  inject,
  ku,
  ni,
  qu,
  resource,
  setClassMetadata,
  signal,
  zo,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵtextInterpolate1
} from "./chunk-DYV6NXUQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/groups/groups.utilities.ts
function generateGroupFormModel(group) {
  return {
    name: group?.name || "",
    description: group?.description || "",
    parent_id: group?.parent_id || "",
    authority_id: group?.authority_id || It()?.id || "",
    subsystems: group?.subsystems || []
  };
}
var applyGroupFormSchema = (path) => {
  required(path.name);
};

// src/app/groups/group-form.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ item: a0 });
var _forTrack0 = ($index, $item) => $item.id;
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
    \u0275\u0275elementStart(0, "mat-chip-row", 19);
    \u0275\u0275listener("removed", function GroupFormComponent_For_45_Template_mat_chip_row_removed_0_listener() {
      const subsystem_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeSubsystem(subsystem_r3));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 21);
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
  form = form(this.formModel, applyGroupFormSchema);
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
  )), { loader: async () => (await zo({ limit: 1e3 })).data }));
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
  query_parent_groups = (_) => ku({ q: _, limit: 20 }).then(({ data }) => data);
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
      const form_item = ni(__spreadProps(__spreadValues(__spreadValues({}, item), form_value), {
        subsystems: form_value.subsystems || []
      }), ["", void 0]);
      try {
        const _item = await (form_item.id ? qu(form_item.id, form_item) : Au(form_item));
        this._dialog_ref.disableClose = false;
        this.event.emit({ reason: "done", metadata: { item: _item } });
        notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
        this._dialog_ref.close();
      } catch (err) {
        this.loading.set(null);
        this._dialog_ref.disableClose = false;
        notifyError(i18n(`${this._name}.SAVE_ERROR`, {
          error: JSON.stringify(await err.text?.() || err.message || err)
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
    const parent = await Su(parent_id).catch(() => null);
    this.parent_group.set(parent);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275GroupFormComponent_BaseFactory;
    return function GroupFormComponent_Factory(__ngFactoryType__) {
      return (\u0275GroupFormComponent_BaseFactory || (\u0275GroupFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_GroupFormComponent)))(__ngFactoryType__ || _GroupFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupFormComponent, selectors: [["group-form"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 48, vars: 48, consts: [["chipList", ""], [3, "save", "heading", "loading"], [1, "flex", "flex-col"], [1, "field"], ["for", "group-name"], ["appearance", "outline"], ["matInput", "", "id", "group-name", 3, "placeholder", "formField"], ["for", "group-description"], ["matInput", "", "id", "group-description", 3, "placeholder", "formField"], [1, "fieldset"], ["for", "group-parent"], [3, "ngModelChange", "placeholder", "query_fn", "exclude", "ngModel", "ngModelOptions"], ["for", "group-authority"], [3, "placeholder", "formField"], [3, "value"], ["for", "group-subsystems"], ["appearance", "outline", 1, "w-full"], ["aria-label", "Subsystem List"], ["id", "group-subsystems", "name", "group-subsystems", 3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], [1, "max-w-md", "truncate"], ["type", "button", "matChipRemove", ""]], template: function GroupFormComponent_Template(rf, ctx) {
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
      \u0275\u0275repeaterCreate(35, GroupFormComponent_For_36_Template, 2, 2, "mat-option", 14, _forTrack0);
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
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const chipList_r5 = \u0275\u0275reference(43);
      \u0275\u0275property("heading", ctx.heading)("loading", ctx.loading());
      \u0275\u0275advance(3);
      \u0275\u0275classProp("error", ctx.form.name().invalid() && ctx.form.name().touched());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 25, "COMMON.FIELD_NAME"));
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 27, "COMMON.FIELD_NAME"))("formField", ctx.form.name);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 29, "GROUPS.NAME_REQUIRED"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 31, "COMMON.FIELD_DESCRIPTION"));
      \u0275\u0275advance(3);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(20, 33, "COMMON.FIELD_DESCRIPTION"))("formField", ctx.form.description);
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 35, "GROUPS.PARENT_ID"));
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(27, 37, "GROUPS.PARENT_SEARCH"))("query_fn", ctx.query_parent_groups)("exclude", ctx.exclude_parent_group)("ngModel", ctx.parent_group())("ngModelOptions", \u0275\u0275pureFunction0(47, _c0));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 39, "GROUPS.AUTHORITY_ID"));
      \u0275\u0275advance(3);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(34, 41, "GROUPS.AUTHORITY_SELECT"))("formField", ctx.form.authority_id);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.domain_list());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 43, "GROUPS.SUBSYSTEMS"));
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.subsystem_list());
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(47, 45, "GROUPS.SUBSYSTEMS_HINT"))("matChipInputFor", chipList_r5)("matChipInputSeparatorKeyCodes", ctx.separators)("matChipInputAddOnBlur", true);
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
                        <label for="group-parent">{{
                            'GROUPS.PARENT_ID' | translate
                        }}</label>
                        <item-search-field
                            [placeholder]="'GROUPS.PARENT_SEARCH' | translate"
                            [query_fn]="query_parent_groups"
                            [exclude]="exclude_parent_group"
                            [ngModel]="parent_group()"
                            [ngModelOptions]="{ standalone: true }"
                            (ngModelChange)="setParentGroup($event)"
                        />
                    </div>
                    <div class="field">
                        <label for="group-authority">{{
                            'GROUPS.AUTHORITY_ID' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                [placeholder]="
                                    'GROUPS.AUTHORITY_SELECT' | translate
                                "
                                [formField]="form.authority_id"
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
      FullscreenModalShellComponent
    ] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupFormComponent, { className: "GroupFormComponent", filePath: "src/app/groups/group-form.component.ts", lineNumber: 186 });
})();
export {
  GroupFormComponent
};
//# sourceMappingURL=chunk-KN5S7JTC.js.map

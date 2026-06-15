import {
  SelectItemModalComponent
} from "./chunk-KNLZNSIL.js";
import {
  ViewResponseModalComponent
} from "./chunk-4Z6PS3LA.js";
import {
  calculateModuleIndex
} from "./chunk-RXNQ4S2I.js";
import {
  PlaceDebugService
} from "./chunk-EC2U6GGN.js";
import {
  ActiveItemService,
  generateTriggerSettingsFormModel
} from "./chunk-GAF6M4XD.js";
import {
  MatChip,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipsModule
} from "./chunk-C7NP5PYP.js";
import {
  HotkeysService
} from "./chunk-JZPASCCB.js";
import {
  addSignalChipItem,
  getInvalidSignalFields,
  removeSignalChipItem
} from "./chunk-KJQGK2OM.js";
import {
  FormField,
  form,
  submit
} from "./chunk-64N44YTD.js";
import {
  openConfirmModal
} from "./chunk-VRIRLPBG.js";
import {
  moveItemInArray
} from "./chunk-FCU3WVEC.js";
import {
  FullscreenModalShellComponent
} from "./chunk-Z5RBFVQV.js";
import {
  SettingsToggleComponent
} from "./chunk-J5O27MHS.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-6FMO72CJ.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-IE6E7XHG.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-KHVEC2ZJ.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  waitForEvent
} from "./chunk-HS5WHROJ.js";
import {
  AsyncHandler
} from "./chunk-JJ5DNIGX.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-ZZM2ZLWR.js";
import {
  IconComponent
} from "./chunk-YUNY6RXQ.js";
import {
  unique
} from "./chunk-Y2VDX4KN.js";
import {
  COMMA,
  ENTER,
  SPACE
} from "./chunk-2UI5N333.js";
import {
  Component,
  EventEmitter,
  Jc,
  Kc,
  Ku,
  Lu,
  Ou,
  Output,
  Qu,
  Service,
  Ws,
  Yc,
  aa,
  ba,
  computed,
  da,
  ea,
  fa,
  gs,
  ha,
  inject,
  la,
  ms,
  na,
  resource,
  sa,
  setClassMetadata,
  signal,
  ta,
  u,
  ue,
  ya,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineService,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-N6UZRJAT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/systems/system-trigger-form.component.ts
function SystemTriggerFormComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "SYSTEMS.TRIGGER_NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formModel().name, " ");
  }
}
function SystemTriggerFormComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12)(5, "div", 13);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 10, "SYSTEMS.TRIGGER_ACTIVE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-success", ctx_r0.trigger_state().triggered)("text-success-content", ctx_r0.trigger_state().triggered)("bg-error", !ctx_r0.trigger_state().triggered)("text-error-content", !ctx_r0.trigger_state().triggered);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 12, ctx_r0.trigger_state().triggered ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
  }
}
function SystemTriggerFormComponent_Conditional_1_Conditional_4_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip", 19);
    \u0275\u0275listener("removed", function SystemTriggerFormComponent_Conditional_1_Conditional_4_For_8_Template_mat_chip_removed_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removePlaylist(item_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "icon", 20);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("removable", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4, " ");
  }
}
function SystemTriggerFormComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 15)(5, "mat-chip-grid", 16, 0);
    \u0275\u0275repeaterCreate(7, SystemTriggerFormComponent_Conditional_1_Conditional_4_For_8_Template, 4, 2, "mat-chip", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(9, "input", 18);
    \u0275\u0275listener("matChipInputTokenEnd", function SystemTriggerFormComponent_Conditional_1_Conditional_4_Template_input_matChipInputTokenEnd_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addPlaylist($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const chipList_r5 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "SYSTEMS.PLAYLISTS"));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.trigger_state().playlists);
    \u0275\u0275advance(2);
    \u0275\u0275property("matChipInputFor", chipList_r5)("matChipInputSeparatorKeyCodes", ctx_r0.separators)("matChipInputAddOnBlur", true);
  }
}
function SystemTriggerFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 2)(1, "div", 3);
    \u0275\u0275conditionalCreate(2, SystemTriggerFormComponent_Conditional_1_Conditional_2_Template, 6, 4, "div", 4);
    \u0275\u0275conditionalCreate(3, SystemTriggerFormComponent_Conditional_1_Conditional_3_Template, 8, 14, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SystemTriggerFormComponent_Conditional_1_Conditional_4_Template, 10, 6, "div", 6);
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275element(6, "settings-toggle", 8);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275element(8, "settings-toggle", 8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275element(10, "settings-toggle", 8);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.name ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.name ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.playlists ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(7, 9, "SYSTEMS.TRIGGER_ENABLED"))("formField", ctx_r0.form.enabled);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(9, 11, "SYSTEMS.TRIGGER_EXECUTE_ENABLED"))("formField", ctx_r0.form.exec_enabled);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(11, 13, "SYSTEMS.TRIGGER_IMPORTANT"))("formField", ctx_r0.form.important);
    \u0275\u0275control();
  }
}
var SystemTriggerFormComponent = class _SystemTriggerFormComponent extends AsyncHandler {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  _hotkey = inject(HotkeysService);
  event = new EventEmitter();
  formModel = signal(
    generateTriggerSettingsFormModel(this._data.item),
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.formModel);
  loading;
  heading = i18n(`Trigger.${this._data.item.id ? "EDIT" : "NEW"}`);
  trigger_state = this.formModel.asReadonly();
  separators = [ENTER, COMMA, SPACE];
  addPlaylist = (e) => this.formModel.update((model) => __spreadProps(__spreadValues({}, model), {
    playlists: addSignalChipItem(model.playlists, e)
  }));
  removePlaylist = (i) => this.formModel.update((model) => __spreadProps(__spreadValues({}, model), {
    playlists: removeSignalChipItem(model.playlists, i)
  }));
  ngOnInit() {
    this.subscription("save_item_key", this._hotkey.listen(["KeyS"], () => this.submit()));
  }
  async submit() {
    await submit(this.form, async () => void 0);
    if (this.form().invalid()) {
      return notifyError(i18n("COMMON.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form).join(", ")
      }));
    }
    const item = this._data.item;
    const item_json = item.toJSON ? item.toJSON() : item;
    const form_item = item.id ? Ws(__spreadValues(__spreadValues({}, item_json), this.formModel()), [
      void 0
    ]) : __spreadValues(__spreadValues({}, item_json), this.formModel());
    this.event.emit({ reason: "action", metadata: form_item });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SystemTriggerFormComponent_BaseFactory;
    return function SystemTriggerFormComponent_Factory(__ngFactoryType__) {
      return (\u0275SystemTriggerFormComponent_BaseFactory || (\u0275SystemTriggerFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SystemTriggerFormComponent)))(__ngFactoryType__ || _SystemTriggerFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemTriggerFormComponent, selectors: [["system-trigger-form"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 3, consts: [["chipList", ""], [3, "save", "heading", "loading"], ["system-trigger", "", 1, "flex", "flex-col"], [1, "mb-4", "flex", "space-x-4"], [1, "border-base-300", "relative", "flex", "flex-1", "items-center", "rounded-sm", "border", "p-4"], [1, "border-base-300", "relative", "flex-1", "rounded-sm", "border", "p-4"], [1, "flex", "flex-col"], [1, "-mx-2", "flex", "flex-wrap", "items-center"], [1, "m-2", "max-w-[calc(50%-1rem)]", "min-w-[40%]", "flex-1", 3, "label", "formField"], [1, "truncation", "bg-base-100", "absolute", "top-0", "left-4", "-translate-y-1/2", "rounded-sm", "p-2", "text-xs"], [1, "text-xl"], [1, "bg-base-100", "absolute", "top-0", "left-4", "-translate-y-1/2", "rounded-sm", "p-2", "text-xs"], [1, "flex"], [1, "rounded-full", "px-4", "py-2", "text-sm"], ["for", "playlists"], ["appearance", "outline"], ["aria-label", "Playlists"], [3, "removable"], ["matInput", "", "placeholder", "Playlist IDs", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed", "removable"], ["matChipRemove", ""]], template: function SystemTriggerFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
      \u0275\u0275listener("save", function SystemTriggerFormComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(1, SystemTriggerFormComponent_Conditional_1_Template, 12, 15, "form", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", ctx.heading)("loading", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form ? 1 : -1);
    }
  }, dependencies: [
    SettingsToggleComponent,
    FormField,
    MatFormFieldModule,
    MatFormField,
    MatChipsModule,
    MatChip,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatInputModule,
    MatInput,
    FullscreenModalShellComponent,
    IconComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemTriggerFormComponent, [{
    type: Component,
    args: [{ selector: "system-trigger-form", template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading"
            (save)="submit()"
        >
            @if (form) {
                <form system-trigger class="flex flex-col">
                    <div class="mb-4 flex space-x-4">
                        @if (form.name) {
                            <div
                                class="border-base-300 relative flex flex-1 items-center rounded-sm border p-4"
                            >
                                <div
                                    class="truncation bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm p-2 text-xs"
                                >
                                    {{ 'SYSTEMS.TRIGGER_NAME' | translate }}
                                </div>
                                <div class="text-xl">
                                    {{ formModel().name }}
                                </div>
                            </div>
                        }
                        @if (form.name) {
                            <div
                                class="border-base-300 relative flex-1 rounded-sm border p-4"
                            >
                                <div
                                    class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm p-2 text-xs"
                                >
                                    {{ 'SYSTEMS.TRIGGER_ACTIVE' | translate }}
                                </div>
                                <div class="flex">
                                    <div
                                        class="rounded-full px-4 py-2 text-sm"
                                        [class.bg-success]="
                                            trigger_state().triggered
                                        "
                                        [class.text-success-content]="
                                            trigger_state().triggered
                                        "
                                        [class.bg-error]="
                                            !trigger_state().triggered
                                        "
                                        [class.text-error-content]="
                                            !trigger_state().triggered
                                        "
                                    >
                                        {{
                                            (trigger_state().triggered
                                                ? 'COMMON.TRUE'
                                                : 'COMMON.FALSE'
                                            ) | translate
                                        }}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    @if (form.playlists) {
                        <div class="flex flex-col">
                            <label for="playlists">{{
                                'SYSTEMS.PLAYLISTS' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <mat-chip-grid #chipList aria-label="Playlists">
                                    @for (
                                        item of trigger_state().playlists;
                                        track item
                                    ) {
                                        <mat-chip
                                            [removable]="true"
                                            (removed)="removePlaylist(item)"
                                        >
                                            {{ item }}
                                            <icon matChipRemove>close</icon>
                                        </mat-chip>
                                    }
                                    <input
                                        matInput
                                        placeholder="Playlist IDs"
                                        [matChipInputFor]="chipList"
                                        [matChipInputSeparatorKeyCodes]="
                                            separators
                                        "
                                        [matChipInputAddOnBlur]="true"
                                        (matChipInputTokenEnd)="
                                            addPlaylist($event)
                                        "
                                    />
                                </mat-chip-grid>
                            </mat-form-field>
                        </div>
                    }
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            class="m-2 max-w-[calc(50%-1rem)] min-w-[40%] flex-1"
                            [label]="'SYSTEMS.TRIGGER_ENABLED' | translate"
                            [formField]="form.enabled"
                        />
                        <settings-toggle
                            class="m-2 max-w-[calc(50%-1rem)] min-w-[40%] flex-1"
                            [label]="
                                'SYSTEMS.TRIGGER_EXECUTE_ENABLED' | translate
                            "
                            [formField]="form.exec_enabled"
                        />
                        <settings-toggle
                            class="m-2 max-w-[calc(50%-1rem)] min-w-[40%] flex-1"
                            [label]="'SYSTEMS.TRIGGER_IMPORTANT' | translate"
                            [formField]="form.important"
                        />
                    </div>
                </form>
            }
        </fullscreen-modal-shell>
    `, imports: [
      SettingsToggleComponent,
      TranslatePipe,
      FormField,
      MatFormFieldModule,
      MatChipsModule,
      MatInputModule,
      FullscreenModalShellComponent,
      IconComponent
    ] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemTriggerFormComponent, { className: "SystemTriggerFormComponent", filePath: "src/app/systems/system-trigger-form.component.ts", lineNumber: 163 });
})();

// src/app/systems/system-state.service.ts
var SystemStateService = class _SystemStateService extends AsyncHandler {
  _state = inject(ActiveItemService);
  _debug = inject(PlaceDebugService);
  _dialog = inject(MatDialog);
  /** Signal of the active item */
  item = computed(
    () => this._state.item(),
    ...ngDevMode ? [{ debugName: "item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _loading = signal(
    {},
    ...ngDevMode ? [{ debugName: "_loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _modules = signal(
    [],
    ...ngDevMode ? [{ debugName: "_modules" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _change = signal(
    0,
    ...ngDevMode ? [{ debugName: "_change" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _associated_settings = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_associated_settings" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), changed: this._change() }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof ms))
        return [];
      return da(item.id).catch(() => []);
    }
  }));
  /** Signal for associated settings of the active item */
  associated_settings = computed(
    () => this._associated_settings.value() || [],
    ...ngDevMode ? [{ debugName: "associated_settings" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _counts = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_counts" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), changed: this._change() }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof ms))
        return {};
      this.setLoading("settings", true);
      try {
        const [triggers, metadata] = await Promise.all([
          ha(item.id).then((response) => response.total).catch(() => 0),
          Ou(item.id).then((response) => response.length).catch(() => 0)
        ]);
        return {
          devices: item.modules.length,
          zones: item.zones.length,
          triggers,
          metadata
        };
      } finally {
        this.setLoading("settings", false);
      }
    }
  }));
  /** Signal of the counts of the active item */
  counts = computed(
    () => this._counts.value() || {
      devices: 0,
      zones: 0,
      triggers: 0,
      metadata: 0
    },
    ...ngDevMode ? [{ debugName: "counts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _module_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_module_resource" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), changed: this._change() }),
    loader: async ({ params }) => {
      const { item } = params;
      this._modules.set([]);
      if (!(item instanceof ms))
        return [];
      this.setLoading("modules", true);
      try {
        const response = await Lu({
          control_system_id: item.id,
          complete: true,
          limit: 200
        }).catch(() => ({ data: [] }));
        const modules = [...response.data];
        modules.forEach((_) => _.connected = void 0);
        modules.sort((a, b) => {
          const index_a = item.modules.indexOf(a.id) > -1 ? item.modules.indexOf(a.id) : 9999;
          const index_b = item.modules.indexOf(b.id) > -1 ? item.modules.indexOf(b.id) : 9999;
          return index_a - index_b;
        });
        this._modules.set(modules);
        return modules;
      } finally {
        this.setLoading("modules", false);
      }
    }
  }));
  /** Signal for modules associated with system */
  modules = computed(
    () => this._module_resource.value() || [],
    ...ngDevMode ? [{ debugName: "modules" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Signal for debug state of the active modules */
  debug_state = computed(
    () => {
      this._debug.changed();
      return this.modules().reduce((mapping, device) => {
        mapping[device.id] = this._debug.isListening(device);
        return mapping;
      }, {});
    },
    ...ngDevMode ? [{ debugName: "debug_state" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Signal for module bindings */
  module_bindings = computed(
    () => this.modules().map((mod) => `${mod.custom_name || mod.name || "Blank"}_${calculateModuleIndex(this.modules(), mod)}`),
    ...ngDevMode ? [{ debugName: "module_bindings" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _zones = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_zones" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), changed: this._change() }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof ms))
        return [];
      this.setLoading("zones", true);
      try {
        const response = await aa(item.id).catch(() => ({
          data: []
        }));
        const zones = [...response.data];
        zones.sort((a, b) => item.zones.indexOf(a.id) - item.zones.indexOf(b.id));
        return zones;
      } finally {
        this.setLoading("zones", false);
      }
    }
  }));
  /** Signal for zones associated with system */
  zones = computed(
    () => this._zones.value() || [],
    ...ngDevMode ? [{ debugName: "zones" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _triggers = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_triggers" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), changed: this._change() }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof ms))
        return [];
      this.setLoading("triggers", true);
      try {
        const response = await ha(item.id).catch(() => ({
          data: []
        }));
        return response.data;
      } finally {
        this.setLoading("triggers", false);
      }
    }
  }));
  /** Signal for triggers associated with system */
  triggers = computed(
    () => this._triggers.value() || [],
    ...ngDevMode ? [{ debugName: "triggers" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Signal of loading states */
  loading = this._loading.asReadonly();
  getModules = () => this._modules();
  /** Active system */
  get active_item() {
    return this._state.active_item || {};
  }
  /**
   * Open confirmation modal for stopping the active system
   */
  async startSystem() {
    const details = await this.confirm({
      title: "Start system?",
      content: `Are you sure you want to start this system?<br>All stopped modules within the system will boot up.`,
      icon: { type: "icon", class: "backoffice-controller-play" }
    });
    if (!details?.reason)
      return;
    details.loading("Starting system...");
    const error = await na(this.active_item.id).then(() => null).catch((err) => {
      notifyError(`Failed to start system: ${JSON.stringify(err.response || err.message || err)}`);
      return err;
    });
    if (!error) {
      notifySuccess(`Successfully started system`);
      this.timeout("change", () => this.changed());
    }
    details.close();
  }
  /**
   * Open confirmation modal for stopping the active system
   */
  async stopSystem() {
    const details = await this.confirm({
      title: "Stop system?",
      content: `Are you sure you want to stop this system?<br>All modules will be immediately stopped regardless of any other systems they may be in.`,
      icon: { type: "icon", class: "backoffice-controller-stop" }
    });
    if (!details?.reason)
      return;
    details.loading("Stopping system...");
    const error = await sa(this.active_item.id).then(() => null).catch((err) => {
      notifyError(`Failed to stop system: ${JSON.stringify(err.response || err.message || err)}`);
      return err;
    });
    if (!error) {
      notifySuccess(`Successfully stopped system`);
      this.timeout("change", () => this.changed());
    }
    details.close();
  }
  toggleModuleDebug(device) {
    if (!device)
      return;
    if (this._debug.isListening(device)) {
      this._debug.unbind(device);
    } else {
      this._debug.bind(device, `${device.custom_name || device.name || "Blank"}_${calculateModuleIndex(this._modules(), device)}`);
    }
  }
  async newModule() {
    const mod = await this._state.edit(new gs({
      system: this.active_item,
      control_system_id: this.active_item.id
    })).catch((_err) => null);
    if (!mod)
      return;
    this.joinModule(mod.id);
  }
  async editModule(device) {
    await this._state.edit(device).catch((_err) => null);
    this.changed();
  }
  async addModuleToSystem(device) {
    if (device.control_system_id)
      return notifyError("Logic modules cannot be added to another system");
    const item = this.item();
    const ref = this._dialog.open(SelectItemModalComponent, {
      data: {
        service_name: "module to system",
        query_fn: (_) => Kc({ q: _ }).then((resp) => resp.data.filter((_2) => _2.id !== item.id))
      }
    });
    const details = await Promise.race([
      waitForEvent(ref.componentInstance.event, (_) => _.reason === "action"),
      waitForEvent(ref.afterClosed())
    ]);
    if (!details?.reason)
      return ref.close();
    const system = ref.componentInstance.item;
    if (!system)
      return ref.close();
    await ea(system.id, device.id).catch((_e) => {
      ref.close();
      notifyError(`Error adding module to system "${system.display_name || system.name}". Error: ${JSON.stringify(_e.response || _e.message || _e)}`);
      throw _e;
    });
    this.changed();
    ref.close();
    notifySuccess(`Successfully added module to system "${system.display_name || system.name}".`);
  }
  async selectTrigger() {
    const ref = this._dialog.open(SelectItemModalComponent, {
      data: {
        service_name: "Triggers",
        query_fn: (_) => ya({ q: _ }).then((resp) => resp.data)
      }
    });
    const details = await Promise.race([
      waitForEvent(ref.componentInstance.event, (_) => _.reason === "action"),
      waitForEvent(ref.afterClosed())
    ]);
    if (!details?.reason)
      return ref.close();
    const t = await this.addTrigger(ref.componentInstance.item);
    ref.close();
    this.changed();
    return t;
  }
  async addTrigger(trigger) {
    const t = await la(this.active_item.id, {
      control_system_id: this.active_item.id,
      enabled: true,
      important: false,
      trigger_id: trigger.id
    });
    this.timeout("change", () => this.changed());
    return t;
  }
  async editTrigger(trigger) {
    if (this.item() && trigger) {
      const ref = this._dialog.open(SystemTriggerFormComponent, {
        data: {
          item: trigger,
          name: "Trigger",
          save: (item) => ba(item.id, item),
          external_save: true
        }
      });
      const instance = ref.componentInstance;
      const details = await Promise.race([
        waitForEvent(instance.event, (_) => _.reason === "action"),
        waitForEvent(ref.afterClosed())
      ]);
      if (!details?.reason)
        return;
      instance.loading = "Saving trigger settings...";
      const url = `${u()}/systems/${this.active_item.id}/triggers/${trigger.id}`;
      const trig = await ue(url, details.metadata).catch((err) => {
        notifyError(`Error updating trigger settings. Error: ${JSON.stringify(err.response || err.message || err)}`);
        throw err;
      });
      ref.close();
      if (!trig)
        return trigger;
      notifySuccess(`Successfully updated trigger settings.`);
      this.timeout("change", () => this.changed());
      return trig;
    }
  }
  async removeTrigger(trigger) {
    const details = await this.confirm({
      title: `Remove trigger`,
      content: `<p>Are you sure you want remove trigger "${trigger.name}"?</p><p>Configuration will be updated <strong>immediately</strong>.</p>`,
      icon: { type: "icon", content: "delete" }
    });
    if (!details?.reason)
      return;
    await fa(this.active_item.id, trigger.id).catch((err) => {
      details.close();
      notifyError(`Error removing trigger ${trigger.id} from system. Error: ${err.statusText || err.message || err}`);
      throw err;
    });
    details.close();
    notifySuccess(`Successfully removed trigger from system.`);
    this.changed();
  }
  async reorderModules(fst, snd) {
    const details = await this.confirm({
      title: "Change order?",
      content: `Are you sure you want to change the module priority?<br>Settings will be updated immediately for the system.`,
      icon: { type: "icon", content: "layers" }
    });
    if (!details?.reason)
      return;
    details.loading("Updating module order...");
    const list = [...this.active_item.modules];
    moveItemInArray(list, fst, snd);
    const resp = await Yc(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      modules: list
    })).catch((err) => {
      notifyError(`Failed to reorder system modules: ${JSON.stringify(err.response || err.message || err)}`);
      return err;
    });
    details.close();
    if (resp instanceof ms) {
      notifySuccess(`Successfully reordered system modules.`);
      if (resp)
        this._state.replaceItem(resp);
    }
  }
  async sortModulesByType(alphabetical = false) {
    const modules = this._modules();
    if (modules.length < 2)
      return;
    const details = await this.confirm({
      title: "Sort modules by class?",
      content: `Are you sure you want to sort modules by class?<br>Modules with the same class name will be grouped together.`,
      icon: { type: "icon", content: "sort" }
    });
    if (!details?.reason)
      return;
    details.loading("Sorting modules by class...");
    let sorted_modules = [];
    if (alphabetical) {
      sorted_modules = [...modules].sort((a, b) => {
        const class_a = (a.custom_name || a.name || a.driver?.class_name || "").toLowerCase();
        const class_b = (b.custom_name || b.name || b.driver?.class_name || "").toLowerCase();
        return class_a.localeCompare(class_b);
      });
    } else {
      const processed = /* @__PURE__ */ new Set();
      for (const mod_a of modules) {
        if (processed.has(mod_a))
          continue;
        const mod_class = mod_a.custom_name || mod_a.name || mod_a.driver?.class_name || "";
        sorted_modules.push(mod_a);
        processed.add(mod_a);
        for (const mod_b of modules) {
          if (processed.has(mod_b))
            continue;
          const mod_b_class = mod_b.custom_name || mod_b.name || mod_b.driver?.class_name || "";
          if (mod_class === mod_b_class) {
            sorted_modules.push(mod_b);
            processed.add(mod_b);
          }
        }
      }
    }
    const sorted_ids = sorted_modules.map((m) => m.id);
    const resp = await Yc(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      modules: sorted_ids
    })).catch((err) => {
      notifyError(`Failed to sort system modules: ${JSON.stringify(err.response || err.message || err)}`);
      return err;
    });
    details.close();
    if (resp instanceof ms) {
      notifySuccess(`Successfully sorted system modules by class.`);
      if (resp)
        this._state.replaceItem(resp);
    }
  }
  async reorderZones(order) {
    if (order.length !== this.active_item.zones.length)
      return;
    const details = await this.confirm({
      title: "Change order?",
      content: `Are you sure you want to change the zone priority?<br>Settings will be updated immediately for the system.`,
      icon: { type: "icon", content: "layers" }
    });
    if (!details?.reason)
      return;
    details.loading("Updating zone order...");
    const resp = await Yc(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      zones: order
    })).catch((err) => {
      notifyError(`Failed to reorder system zones: ${JSON.stringify(err.response || err.message || err)}`);
      return err;
    });
    if (resp instanceof ms) {
      notifySuccess(`Successfully reordered system zones.`);
      if (resp)
        this._state.replaceItem(resp);
    }
    details.close();
  }
  /**
   * Associate module with the active system
   * @param id ID of the module to associate with the active system
   */
  async joinModule(id) {
    await ea(this.active_item.id, id).catch((err) => {
      notifyError(`Error adding module ${id} to system. Error: ${err.statusText || err.message || err}`);
    });
    this.timeout("join", async () => {
      const system = await Jc(this.active_item.id);
      if (system)
        this._state.replaceItem(system);
      notifySuccess(`Successfully added module to system.`);
      this.changed();
    });
  }
  /**
   * Remove associated module from the active system
   * @param id ID of the module to disassociate with the active system
   */
  async removeModule(device) {
    const details = await this.confirm({
      title: "Remove module?",
      content: `Remove ${device.driver_id} from this system?<br>If this is not used elsewhere the associated data will be removed immediately.`,
      icon: { type: "icon", content: "delete" }
    });
    if (!details?.reason)
      return;
    const system = await ta(this.active_item.id, device.id).catch((err) => {
      notifyError(`Error removing module ${device.id} from system. Error: ${err.statusText || err.message || err}`);
    });
    details.close();
    if (system)
      this._state.replaceItem(system);
    notifySuccess(`Successfully removed module from system.`);
  }
  /**
   * Add list of zones to the system
   * @param zones List of zones to add
   */
  async addZones(zone_list) {
    const zones = unique([
      ...this.active_item.zones,
      ...zone_list.map((_) => _.id)
    ]);
    const system = await Yc(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      zones
    })).catch((err) => {
      notifyError(`Error adding ${zone_list.length} zone(s) to system. Error: ${err.statusText || err.message || err}`);
    });
    if (system)
      this._state.replaceItem(system);
    notifySuccess(`Successfully added zone to system.`);
  }
  /**
   * Remove associated module from the active system
   * @param id ID of the module to disassociate with the active system
   */
  async removeZone(zone) {
    const details = await this.confirm({
      title: "Remove zone?",
      content: `<p>Are you sure you want remove zone "${zone.name}" from the system?</p>Configuration will be updated immediately.`,
      icon: { type: "icon", content: "delete" }
    });
    if (!details?.reason)
      return;
    const zones = this.active_item.zones.filter((z) => z !== zone.id);
    const system = await Yc(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      zones
    })).catch((err) => {
      notifyError(`Error removing zone ${zone.id} from system. Error: ${err.statusText || err.message || err}`);
    });
    details.close();
    if (system)
      this._state.replaceItem(system);
    notifySuccess(`Successfully removed zone from system.`);
  }
  /**
   * Toggle the power state
   * @param device Module to toggle the power state
   */
  async toggleModulePower(device) {
    const method = device.running ? Ku : Qu;
    await method(device.id).catch((err) => {
      if (typeof err === "string" && err.length < 64) {
        notifyError(err);
      } else {
        notifyError(`Failed to ${device.running ? "stop" : "start"} module '${device.id}'.
View Error?`, "View", () => this.viewDetails(err));
      }
      throw err;
    });
    notifySuccess(`Module successfully ${device.running ? "stopped" : "started"}`);
    device.running = !device.running;
    this.changed();
  }
  /** View Results of the execute */
  viewDetails(content) {
    this._dialog.open(ViewResponseModalComponent, {
      data: { content }
    });
  }
  async confirm(data) {
    return openConfirmModal(data, this._dialog);
  }
  setLoading(key, value) {
    this._loading.update((state) => __spreadProps(__spreadValues({}, state), { [key]: value }));
  }
  changed() {
    this._change.set(Date.now());
  }
  static \u0275fac = function SystemStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _SystemStateService, factory: _SystemStateService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemStateService, [{
    type: Service
  }], null, null);
})();

export {
  SystemStateService
};
//# sourceMappingURL=chunk-Y3ZX6KKG.js.map

import {
  generateTriggerSettingsFormModel
} from "./chunk-GKLY2P6H.js";
import {
  ItemSearchFieldComponent
} from "./chunk-NSPWPCTJ.js";
import "./chunk-7UHZOKRJ.js";
import "./chunk-WKU6NAJG.js";
import {
  getInvalidSignalFields
} from "./chunk-NA6URCKI.js";
import {
  FullscreenModalShellComponent
} from "./chunk-5PVJFQI3.js";
import "./chunk-FF4ADQI6.js";
import {
  HotkeysService
} from "./chunk-AEEAYNFO.js";
import "./chunk-BGDKOWYJ.js";
import "./chunk-ARF53UMV.js";
import "./chunk-WWSSYZEA.js";
import "./chunk-T3O7QHHC.js";
import {
  notifyError
} from "./chunk-2DKDRFBI.js";
import {
  AsyncHandler
} from "./chunk-UONBBRS5.js";
import "./chunk-UBUJ7KM4.js";
import {
  SettingsToggleComponent
} from "./chunk-A7VS2VYD.js";
import "./chunk-CH2YF4Y7.js";
import "./chunk-O2B7KTSR.js";
import {
  FormField,
  form,
  submit
} from "./chunk-SSVO7UC4.js";
import {
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-5APMNGCP.js";
import "./chunk-QSK7KYKQ.js";
import "./chunk-SQMBYJ2Q.js";
import {
  DIALOG_DATA,
  DialogRef
} from "./chunk-762ECDWF.js";
import {
  TranslatePipe
} from "./chunk-G7DGN64C.js";
import {
  i18n
} from "./chunk-JJ65W2TY.js";
import {
  Jh,
  Vh,
  ci
} from "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-JEKJ3JY5.js";
import "./chunk-QY7ZA5QE.js";
import "./chunk-ERJVBWAI.js";
import "./chunk-POM3EJZY.js";
import "./chunk-UVK6APTK.js";
import "./chunk-QNK6X2WC.js";
import "./chunk-BRT76G6A.js";
import {
  Component,
  EventEmitter,
  Output,
  inject,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/systems/system-trigger-form.component.ts
var _c0 = () => ({ standalone: true });
function SystemTriggerFormComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9);
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
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11)(5, "div", 12);
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
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 18)(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 21);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function SystemTriggerFormComponent_Conditional_1_Conditional_4_For_8_Template_button_click_6_listener() {
      const id_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removePlaylist(id_r4));
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const id_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.playlist_names()[id_r4] || id_r4, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", id_r4, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 3, "SYSTEMS.PLAYLIST_REMOVE"));
  }
}
function SystemTriggerFormComponent_Conditional_1_Conditional_4_ForEmpty_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SYSTEMS.PLAYLISTS_EMPTY"), " ");
  }
}
function SystemTriggerFormComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "item-search-field", 14);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275listener("ngModelChange", function SystemTriggerFormComponent_Conditional_1_Conditional_4_Template_item_search_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addPlaylist($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275repeaterCreate(7, SystemTriggerFormComponent_Conditional_1_Conditional_4_For_8_Template, 10, 5, "div", 16, \u0275\u0275repeaterTrackByIdentity, false, SystemTriggerFormComponent_Conditional_1_Conditional_4_ForEmpty_9_Template, 3, 3, "p", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 8, "SYSTEMS.PLAYLISTS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 10, "SYSTEMS.PLAYLISTS_SEARCH"))("query_fn", ctx_r0.query_fn)("exclude", ctx_r0.exclude_fn)("clear_on_select", true)("ngModel", null)("ngModelOptions", \u0275\u0275pureFunction0(12, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.trigger_state().playlists);
  }
}
function SystemTriggerFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 1)(1, "div", 2);
    \u0275\u0275conditionalCreate(2, SystemTriggerFormComponent_Conditional_1_Conditional_2_Template, 6, 4, "div", 3);
    \u0275\u0275conditionalCreate(3, SystemTriggerFormComponent_Conditional_1_Conditional_3_Template, 8, 14, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SystemTriggerFormComponent_Conditional_1_Conditional_4_Template, 10, 13, "div", 5);
    \u0275\u0275elementStart(5, "div", 6)(6, "settings-toggle", 7);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "settings-toggle", 7);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "settings-toggle", 7);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
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
  _dialog_ref = inject(DialogRef);
  _data = inject(DIALOG_DATA);
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
  loading = signal(
    "",
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  heading = i18n(`TRIGGERS.${this._data.item.id ? "EDIT" : "NEW"}`);
  trigger_state = this.formModel.asReadonly();
  /** Playlist names keyed by playlist ID. IDs without a name show the ID. */
  playlist_names = signal(
    {},
    ...ngDevMode ? [{ debugName: "playlist_names" }] : (
      /* istanbul ignore next */
      []
    )
  );
  query_fn = (q) => Jh({ q, limit: 20 }).then((resp) => resp.data);
  exclude_fn = (playlist) => this.formModel().playlists.includes(playlist.id);
  /** Add the selected playlist from the search field to the trigger */
  addPlaylist = (playlist) => {
    if (!playlist?.id)
      return;
    this.playlist_names.update((names) => __spreadProps(__spreadValues({}, names), {
      [playlist.id]: playlist.name
    }));
    this.formModel.update((model) => model.playlists.includes(playlist.id) ? model : __spreadProps(__spreadValues({}, model), { playlists: [...model.playlists, playlist.id] }));
  };
  removePlaylist = (id) => this.formModel.update((model) => __spreadProps(__spreadValues({}, model), {
    playlists: model.playlists.filter((_) => _ !== id)
  }));
  ngOnInit() {
    this.subscription("save_item_key", this._hotkey.listen(["KeyS"], () => this.submit()));
    this._loadPlaylistNames();
  }
  async submit() {
    if (this.loading())
      return;
    await submit(this.form, async () => void 0);
    if (this.form().invalid()) {
      return notifyError(i18n("COMMON.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form).join(", ")
      }));
    }
    const item = this._data.item;
    const item_json = item.toJSON ? item.toJSON() : item;
    const form_item = item.id ? ci(__spreadValues(__spreadValues({}, item_json), this.formModel()), [
      void 0
    ]) : __spreadValues(__spreadValues({}, item_json), this.formModel());
    this.event.emit({ reason: "action", metadata: form_item });
  }
  /** Load names for the playlists already assigned to the trigger */
  async _loadPlaylistNames() {
    const playlists = await Promise.all(this.formModel().playlists.map((id) => Vh(id).catch(() => null)));
    const names = {};
    for (const playlist of playlists) {
      if (playlist?.id)
        names[playlist.id] = playlist.name;
    }
    this.playlist_names.update((current) => __spreadValues(__spreadValues({}, names), current));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SystemTriggerFormComponent_BaseFactory;
    return function SystemTriggerFormComponent_Factory(__ngFactoryType__) {
      return (\u0275SystemTriggerFormComponent_BaseFactory || (\u0275SystemTriggerFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SystemTriggerFormComponent)))(__ngFactoryType__ || _SystemTriggerFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemTriggerFormComponent, selectors: [["system-trigger-form"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 3, consts: [[3, "save", "heading", "loading"], ["system-trigger", "", 1, "flex", "flex-col"], [1, "mb-4", "flex", "space-x-4"], [1, "border-base-300", "relative", "flex", "flex-1", "items-center", "rounded-sm", "border", "p-4"], [1, "border-base-300", "relative", "flex-1", "rounded-sm", "border", "p-4"], [1, "mb-4", "flex", "flex-col"], [1, "-mx-2", "flex", "flex-wrap", "items-center"], [1, "m-2", "max-w-[calc(50%-1rem)]", "min-w-[40%]", "flex-1", 3, "label", "formField"], [1, "truncation", "bg-base-100", "absolute", "top-0", "left-4", "-translate-y-1/2", "rounded-sm", "p-2", "text-xs"], [1, "text-xl"], [1, "bg-base-100", "absolute", "top-0", "left-4", "-translate-y-1/2", "rounded-sm", "p-2", "text-xs"], [1, "flex"], [1, "rounded-full", "px-4", "py-2", "text-sm"], ["for", "playlists"], ["name", "playlists", 3, "ngModelChange", "placeholder", "query_fn", "exclude", "clear_on_select", "ngModel", "ngModelOptions"], [1, "border-base-300", "divide-base-300", "divide-y", "rounded-sm", "border"], ["playlist", "", 1, "flex", "items-center", "gap-2", "py-1", "pr-1", "pl-4"], [1, "p-4", "text-center", "text-sm", "opacity-30"], [1, "min-w-0", "flex-1"], [1, "truncate"], [1, "truncate", "text-xs", "opacity-30"], ["icon", "", "ripple", "", "type", "button", 3, "click"]], template: function SystemTriggerFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275listener("save", function SystemTriggerFormComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(1, SystemTriggerFormComponent_Conditional_1_Template, 12, 15, "form", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", ctx.heading)("loading", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form ? 1 : -1);
    }
  }, dependencies: [
    SettingsToggleComponent,
    FormField,
    FormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    ItemSearchFieldComponent,
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
            [loading]="loading()"
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
                        <div class="mb-4 flex flex-col">
                            <label for="playlists">{{
                                'SYSTEMS.PLAYLISTS' | translate
                            }}</label>
                            <item-search-field
                                name="playlists"
                                [placeholder]="
                                    'SYSTEMS.PLAYLISTS_SEARCH' | translate
                                "
                                [query_fn]="query_fn"
                                [exclude]="exclude_fn"
                                [clear_on_select]="true"
                                [ngModel]="null"
                                [ngModelOptions]="{ standalone: true }"
                                (ngModelChange)="addPlaylist($event)"
                            />
                            <div
                                class="border-base-300 divide-base-300 divide-y rounded-sm border"
                            >
                                @for (
                                    id of trigger_state().playlists;
                                    track id
                                ) {
                                    <div
                                        playlist
                                        class="flex items-center gap-2 py-1 pr-1 pl-4"
                                    >
                                        <div class="min-w-0 flex-1">
                                            <div class="truncate">
                                                {{ playlist_names()[id] || id }}
                                            </div>
                                            <div
                                                class="truncate text-xs opacity-30"
                                            >
                                                {{ id }}
                                            </div>
                                        </div>
                                        <button
                                            icon
                                            ripple
                                            type="button"
                                            [attr.aria-label]="
                                                'SYSTEMS.PLAYLIST_REMOVE'
                                                    | translate
                                            "
                                            (click)="removePlaylist(id)"
                                        >
                                            <icon>close</icon>
                                        </button>
                                    </div>
                                } @empty {
                                    <p
                                        class="p-4 text-center text-sm opacity-30"
                                    >
                                        {{
                                            'SYSTEMS.PLAYLISTS_EMPTY'
                                                | translate
                                        }}
                                    </p>
                                }
                            </div>
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
      FormsModule,
      ItemSearchFieldComponent,
      FullscreenModalShellComponent,
      IconComponent
    ] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemTriggerFormComponent, { className: "SystemTriggerFormComponent", filePath: "src/app/systems/system-trigger-form.component.ts", lineNumber: 191 });
})();
export {
  SystemTriggerFormComponent
};
//# debugId=bf7a5e7b-a305-51a5-9a9b-47021ec64e14
//# sourceMappingURL=chunk-AKZOIDCK.js.map

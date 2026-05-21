import {
  UserPipe
} from "./chunk-JSR2V5ZQ.js";
import {
  SettingsFieldComponent
} from "./chunk-YK2KHR5K.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-SLVL7P43.js";
import {
  dump,
  load,
  validateYAML
} from "./chunk-VQGAWLOU.js";
import {
  DateFromPipe
} from "./chunk-SUZCL24N.js";
import {
  HotkeysService
} from "./chunk-IYY5PYJ5.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-LZSVYB2G.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-QOHO4EXP.js";
import {
  BackofficeUsersService
} from "./chunk-PLTFMK5A.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  AsyncHandler
} from "./chunk-4DW55IZJ.js";
import {
  MatRippleModule
} from "./chunk-P4ZFFXRB.js";
import {
  IconComponent
} from "./chunk-OJQGLQXV.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-SFSVGVOC.js";
import {
  MatRipple
} from "./chunk-X3IV36B5.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  DatePipe,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  Input,
  NgControlStatus,
  NgControlStatusGroup,
  Output,
  ReactiveFormsModule,
  computed,
  effect,
  inject,
  input,
  model,
  setClassMetadata,
  signal,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JFTEBBHC.js";
import {
  Ge,
  Ol,
  Ue,
  Ul,
  lastValueFrom
} from "./chunk-55CIHLAT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/ui/forms/settings-form.component.ts
var _c0 = () => [];
function SettingsFormComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 6);
    \u0275\u0275text(1, "delete_sweep");
    \u0275\u0275elementEnd();
  }
}
function SettingsFormComponent_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 7);
  }
}
function SettingsFormComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 6);
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function SettingsFormComponent_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 7);
  }
}
function SettingsFormComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "button", 5);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function SettingsFormComponent_Conditional_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearChanges());
    });
    \u0275\u0275conditionalCreate(3, SettingsFormComponent_Conditional_4_Conditional_3_Template, 2, 0, "icon", 6)(4, SettingsFormComponent_Conditional_4_Conditional_4_Template, 1, 0, "mat-spinner", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 8);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function SettingsFormComponent_Conditional_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save(+ctx_r1.shown_option().id));
    });
    \u0275\u0275conditionalCreate(7, SettingsFormComponent_Conditional_4_Conditional_7_Template, 2, 0, "icon", 6)(8, SettingsFormComponent_Conditional_4_Conditional_8_Template, 1, 0, "mat-spinner", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.edited_count() <= 0)("matTooltip", \u0275\u0275pipeBind1(2, 6, "COMMON.CLEAR"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.saving()[ctx_r1.shown_option().id] ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.active_edited() || ctx_r1.has_errors() && !ctx_r1.saving()[ctx_r1.shown_option().id])("matTooltip", \u0275\u0275pipeBind1(6, 8, "COMMON.SAVE"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.saving()[ctx_r1.shown_option().id] ? 7 : 8);
  }
}
function SettingsFormComponent_Conditional_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-tab", 10);
  }
  if (rf & 2) {
    let tmp_12_0;
    const option_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", option_r4.name + (option_r4.id !== 4 && ((tmp_12_0 = ctx_r1.form().controls["settings" + option_r4.id]) == null ? null : tmp_12_0.dirty) ? " *" : ""));
  }
}
function SettingsFormComponent_Conditional_5_For_5_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.form().controls["settings" + option_r5.id].errors.yaml, " ");
  }
}
function SettingsFormComponent_Conditional_5_For_5_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "user");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "code", 15);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "dateFrom");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    const \u0275$index_38_r6 = \u0275\u0275nextContext(2).$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_15_0 = \u0275\u0275pipeBind1(4, 6, \u0275\u0275pipeBind1(3, 4, (tmp_15_0 = ctx_r1.settings()[\u0275$index_38_r6 - 1]) == null ? null : tmp_15_0.modified_by_id))) == null ? null : tmp_15_0.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(6, 8, ((tmp_16_0 = ctx_r1.settings()[\u0275$index_38_r6 - 1]) == null ? null : tmp_16_0.updated_at) * 1e3 || 0, "medium"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(8, 11, "COMMON.LAST_EDIT"), ": ", \u0275\u0275pipeBind1(9, 13, ((tmp_17_0 = ctx_r1.settings()[\u0275$index_38_r6 - 1]) == null ? null : tmp_17_0.updated_at) * 1e3), " ");
  }
}
function SettingsFormComponent_Conditional_5_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "settings-form-field", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, SettingsFormComponent_Conditional_5_For_5_Conditional_0_Conditional_2_Template, 2, 1, "div", 12);
    \u0275\u0275conditionalCreate(3, SettingsFormComponent_Conditional_5_For_5_Conditional_0_Conditional_3_Template, 10, 15, "div", 13);
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_18_0;
    let tmp_19_0;
    const ctx_r6 = \u0275\u0275nextContext();
    const option_r5 = ctx_r6.$implicit;
    const \u0275$index_38_r6 = ctx_r6.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("error-border", (tmp_14_0 = ctx_r1.form().controls["settings" + option_r5.id]) == null ? null : tmp_14_0.errors);
    \u0275\u0275advance();
    \u0275\u0275property("decorations", +option_r5.id === 4 ? ctx_r1.merge_decorations : \u0275\u0275pureFunction0(7, _c0))("formControlName", "settings" + option_r5.id)("readonly", !option_r5.active || ctx_r1.saving()[option_r5.id]);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_18_0 = ctx_r1.form().controls["settings" + option_r5.id]) == null ? null : tmp_18_0.errors) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(option_r5.name !== "Merged" && ((tmp_19_0 = ctx_r1.settings()[\u0275$index_38_r6 - 1]) == null ? null : tmp_19_0.modified_by_id) ? 3 : -1);
  }
}
function SettingsFormComponent_Conditional_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SettingsFormComponent_Conditional_5_For_5_Conditional_0_Template, 4, 8);
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.form() && ctx_r1.encryption_level() === option_r5.id && ctx_r1.form().controls["settings" + option_r5.id] ? 0 : -1);
  }
}
function SettingsFormComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 4)(1, "mat-tab-group", 9);
    \u0275\u0275listener("selectedIndexChange", function SettingsFormComponent_Conditional_5_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.encryption_level.set(+ctx_r1.levels()[$event].id));
    });
    \u0275\u0275repeaterCreate(2, SettingsFormComponent_Conditional_5_For_3_Template, 1, 1, "mat-tab", 10, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, SettingsFormComponent_Conditional_5_For_5_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form());
    \u0275\u0275advance();
    \u0275\u0275property("selectedIndex", ctx_r1.level_index());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.levels());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function SettingsFormComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 7);
  }
}
var SettingsFormComponent = class _SettingsFormComponent extends AsyncHandler {
  _hotkey = inject(HotkeysService);
  _users = inject(BackofficeUsersService);
  changed = signal(0, ...ngDevMode ? [{ debugName: "changed" }] : []);
  /** ID of the parent object */
  id = input(void 0, ...ngDevMode ? [{ debugName: "id" }] : []);
  /** List of settings for the  */
  settings = model(void 0, ...ngDevMode ? [{ debugName: "settings" }] : []);
  /** Whether to display merged settings */
  merge = input(void 0, ...ngDevMode ? [{ debugName: "merge" }] : []);
  /** List of settings to merge into the main settings */
  merge_settings = input(void 0, ...ngDevMode ? [{ debugName: "merge_settings" }] : []);
  /** Form fields for settings */
  form = signal(new FormGroup({
    settings0: new FormControl("", [validateYAML]),
    settings1: new FormControl("", [validateYAML]),
    settings2: new FormControl("", [validateYAML]),
    settings3: new FormControl("", [validateYAML]),
    settings4: new FormControl("", [validateYAML])
  }), ...ngDevMode ? [{ debugName: "form" }] : []);
  /** Whether a setting is being saved */
  saving = signal([
    false,
    false,
    false,
    false
  ], ...ngDevMode ? [{ debugName: "saving" }] : []);
  /** Currently displayed encryption level */
  encryption_level = signal(void 0, ...ngDevMode ? [{ debugName: "encryption_level" }] : []);
  /** Settings available to display on the UI */
  used_settings = signal([], ...ngDevMode ? [{ debugName: "used_settings" }] : []);
  /** Index of the active settings tab */
  level_index = computed(() => {
    const current_level = this.encryption_level();
    const index = this.levels().findIndex((item) => item.id === current_level);
    return index >= 0 ? index : 0;
  }, ...ngDevMode ? [{ debugName: "level_index" }] : []);
  /** List of decorations to apply to the merge settings */
  merge_decorations = [];
  user = this._users.currentSignal();
  /** Whether user is admin */
  is_admin = computed(() => this.user().sys_admin, ...ngDevMode ? [{ debugName: "is_admin" }] : []);
  /** Whether user is support */
  is_support = computed(() => this.user().sys_admin || this.user().support, ...ngDevMode ? [{ debugName: "is_support" }] : []);
  /** Currently shown settings */
  shown_option = computed(() => {
    return this.levels().find((i) => i.id === this.encryption_level());
  }, ...ngDevMode ? [{ debugName: "shown_option" }] : []);
  /** Whether the currently active settings have been edited */
  active_edited = computed(() => {
    this.changed();
    return this.used_settings() && this.used_settings()[this.encryption_level()] && this.form().controls[`settings${this.encryption_level()}`]?.dirty;
  }, ...ngDevMode ? [{ debugName: "active_edited" }] : []);
  /** Number of settings blocks edited */
  edited_count = computed(() => {
    this.changed();
    let count = 0;
    for (const field in this.form().controls) {
      if (this.form().controls[field].dirty) {
        count++;
      }
    }
    return count;
  }, ...ngDevMode ? [{ debugName: "edited_count" }] : []);
  /** Whether a settings group has errors */
  has_errors = computed(() => {
    this.changed();
    for (const key in this.form().controls) {
      if (this.form().controls[key] && this.form().controls[key].errors) {
        return true;
      }
    }
    return false;
  }, ...ngDevMode ? [{ debugName: "has_errors" }] : []);
  levels = computed(() => {
    const levels = [
      {
        id: Ge.None,
        name: i18n("COMMON.SETTINGS_PLAINTEXT"),
        active: true
      },
      {
        id: Ge.Support,
        name: i18n("COMMON.SETTINGS_SUPPORT"),
        active: this.is_support
      },
      {
        id: Ge.Admin,
        name: i18n("COMMON.SETTINGS_ADMIN"),
        active: this.is_admin()
      },
      {
        id: Ge.NeverDisplay,
        name: i18n("COMMON.SETTINGS_ENCRYPTED"),
        active: this.is_admin
      }
    ];
    if (this.merge()) {
      levels.unshift({
        id: Ge.NeverDisplay + 1,
        name: i18n("COMMON.SETTINGS_MERGED")
      });
    }
    return levels;
  }, ...ngDevMode ? [{ debugName: "levels" }] : []);
  constructor() {
    super();
    effect(() => {
      this.encryption_level.set(this.merge() ? Ge.NeverDisplay + 1 : Ge.None);
    });
    effect(() => {
      if (this.merge_settings() !== void 0) {
        this.timeout("update_merge", () => this.clearChanges(), 50);
      }
    });
    effect(() => {
      if (this.settings()) {
        this.clearChanges();
      }
    });
  }
  type(level) {
    switch (level) {
      case Ge.None:
        return i18n("COMMON.SETTINGS_PLAINTEXT");
      case Ge.Support:
        return i18n("COMMON.SETTINGS_SUPPORT");
      case Ge.Admin:
        return i18n("COMMON.SETTINGS_ADMIN");
    }
    return i18n("COMMON.SETTINGS_ENCRYPTED");
  }
  ngOnInit() {
    this.subscription("save_all", this._hotkey.listen(["KeyA"], () => this.saveAll()));
    this.subscription("clear_all", this._hotkey.listen(["KeyC"], () => this.clearChanges()));
  }
  /** Save changes to the given setting level */
  save(level) {
    const item = this.used_settings()[level];
    if (!item && this.saving()[level])
      return;
    this.saving.update((s) => {
      s[level] = true;
      return s;
    });
    const details = __spreadProps(__spreadValues({}, item), {
      settings_string: this.form().controls[`settings${level}`].value
    });
    const settings = this.settings();
    lastValueFrom(settings[level].id ? Ol(settings[level].id, details) : Ul(details)).then((new_settings) => {
      this.saving.update((s) => {
        s[level] = false;
        return s;
      });
      this.settings.update((s) => {
        s[level] = new_settings;
        return s;
      });
      notifySuccess(i18n("COMMON.SETTINGS_SAVE_SUCCESS", {
        type: this.type(level)
      }));
      this.clearChanges();
    }, (err) => {
      this.saving.update((s) => {
        s[level] = false;
        return s;
      });
      notifyError(i18n("COMMON.SETTINGS_SAVE_ERROR", {
        error: JSON.stringify(err.response || err.message || err)
      }));
    });
  }
  /** Save all changes to settings */
  saveAll() {
    if (this.has_errors())
      return notifyError("Some of the settings are invalid");
    const promises = [];
    for (let i = 0; i < Ge.NeverDisplay + 1; i++) {
      const settings = this.settings();
      if (settings[i] && !this.saving()[i]) {
        this.saving.update((s) => {
          s[i] = true;
          return s;
        });
        const details = __spreadProps(__spreadValues({}, settings[i]), {
          settings_string: this.form().controls[`settings${i}`].value
        });
        promises.push(settings[i].id ? Ol(settings[i].id, details) : Ul(details));
      }
    }
    if (promises.length) {
      Promise.all(promises).then((results) => {
        for (const result of results) {
          this.saving.update((s) => {
            s[result.encryption_level] = false;
            return s;
          });
          this.settings.update((s) => {
            s[result.encryption_level] = result;
            return s;
          });
        }
        notifySuccess(i18n("COMMON.SETTINGS_SAVE_SUCCESS_ALL"));
        this.clearChanges();
      }, (err) => {
        for (let i = 0; i < Ge.NeverDisplay + 1; i++) {
          this.saving.update((s) => {
            s[i] = false;
            return s;
          });
        }
        notifyError(i18n("COMMON.SETTINGS_SAVE_ERROR", {
          error: JSON.stringify(err.response || err.message || err)
        }));
      });
    }
  }
  clearChanges() {
    this.used_settings.set(this._processSettings(this.settings() || []));
    this._initForm();
  }
  _initForm() {
    const used = this.used_settings();
    this.form.set(new FormGroup({
      settings0: new FormControl(used[0].settings_string, [
        validateYAML
      ]),
      settings1: new FormControl(used[1].settings_string, [
        validateYAML
      ]),
      settings2: new FormControl(used[2].settings_string, [
        validateYAML
      ]),
      settings3: new FormControl(used[3].settings_string, [
        validateYAML
      ]),
      settings4: new FormControl(used[4].settings_string, [
        validateYAML
      ])
    }));
    this.subscription("changes", this.form().valueChanges.subscribe(() => this.changed.set(Date.now())));
  }
  _processSettings(settings) {
    if (!settings.length)
      return [];
    const processed_settings = [];
    for (let i = 0; i < Ge.NeverDisplay + 1; i++) {
      const setting = settings?.find((_) => _.encryption_level === i);
      if (!setting) {
        processed_settings.push(this._processSetting(new Ue({ encryption_level: i })));
        continue;
      }
      processed_settings.push(this._processSetting(settings[i]));
    }
    processed_settings.push(this.merge() ? this._generateMergedSettings(processed_settings) : settings[3]);
    return processed_settings;
  }
  _processSetting(setting) {
    if (setting.encryption_level === Ge.Admin && !this.is_admin || setting.encryption_level === Ge.Support && !this.is_support || setting.encryption_level === Ge.NeverDisplay) {
      const obj = {};
      for (const key of setting.keys) {
        obj[key] = `<${i18n("COMMON.SETTINGS_MASKED")}>`;
      }
      const settings_string = (setting.keys || []).length ? dump(obj) : "";
      return new Ue(__spreadProps(__spreadValues({}, setting), {
        parent_id: this.id(),
        settings_string
      }));
    }
    return new Ue(__spreadProps(__spreadValues({}, setting), { parent_id: this.id() }));
  }
  /** Genereate merged settings from all available settings */
  _generateMergedSettings(settings = []) {
    const merge_settings = this.merge_settings()?.filter((item) => item.parent_id !== this.id()) || [];
    const local_settings = (settings || []).map((item) => {
      let obj = {};
      try {
        obj = load(item.settings_string) || {};
      } catch {
        for (const key of item.keys) {
          obj[key] = `<${i18n("COMMON.SETTINGS_MASKED")}>`;
        }
      }
      return obj;
    });
    const remote_settings = merge_settings.map((item) => {
      let obj = {};
      try {
        obj = load(item.settings_string) || {};
      } catch {
        for (const key of item.keys) {
          obj[key] = `<${i18n("COMMON.SETTINGS_MASKED")}>`;
        }
      }
      return obj;
    });
    const merged_settings = remote_settings.concat(local_settings).reduce((m, i) => __spreadValues(__spreadValues({}, m), i), {});
    const settings_string = Object.keys(merged_settings).length ? dump(merged_settings, { strict: true }) : "";
    this.merge_decorations = this._decorationForSettings(settings_string, merge_settings.concat(settings), remote_settings.concat(local_settings));
    return new Ue({
      id: "merged",
      settings_string,
      parent_id: this.id(),
      keys: Object.keys(merged_settings)
    });
  }
  _decorationForSettings(display, settings, setting_maps) {
    const decorations = {};
    for (let i = 0; i < settings.length; i++) {
      const type = Math.max(-1, i - (settings.length - 4));
      this._decorationsForObject(decorations, setting_maps[i], display, settings[i], type);
    }
    return Object.keys(decorations).map((i) => decorations[i]);
  }
  _decorationsForObject(decorations, obj, display, settings, type, prefix = "", level = 0) {
    for (const key in obj) {
      if (key in obj) {
        const field = `${prefix}${key}`;
        decorations[field] = {
          options: {
            linesDecorationsClassName: `${MAPPING_CLASS[type + 1]}-margin`,
            inlineClassName: MAPPING_CLASS[type + 1],
            hoverMessage: {
              value: this._generateHoverMessage(type, settings),
              isTrusted: true
            }
          },
          range: calcRangeOfStringInText(`${whiteSpace(level * 2)}${key}:`, display, level * 2)
        };
        const value = obj[key];
        if (typeof value === "object" && value !== null) {
          this._decorationsForObject(decorations, value, display, settings, type, `${field}.`, level + 1);
        }
      }
    }
  }
  _generateHoverMessage(type, settings) {
    if (type === -1) {
      return i18n("COMMON.SETTINGS_INHERITED", {
        parent: settings.parent_id,
        path: itemUrl(settings.parent_id),
        type: this.type(settings.encryption_level)
      });
    } else {
      return i18n("COMMON.SETTINGS_LOCAL", {
        type: this.type(settings.encryption_level)
      });
    }
  }
  static \u0275fac = function SettingsFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsFormComponent, selectors: [["a-settings-form"]], inputs: { id: [1, "id"], settings: [1, "settings"], merge: [1, "merge"], merge_settings: [1, "merge_settings"] }, outputs: { settings: "settingsChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 5, consts: [["spinner", ""], [1, "bg-base-200", "mb-2", "flex", "h-16", "w-full", "items-center", "justify-between", "rounded-sm", "px-2", "text-lg", "font-medium"], [1, "px-2"], [1, "flex", "items-center", "space-x-2"], [3, "formGroup"], ["icon", "", "matRipple", "", 1, "border-secondary", "bg-base-100", "text-secondary", "rounded-sm", "border", 3, "click", "disabled", "matTooltip"], [1, "text-2xl"], ["diameter", "32"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "rounded-sm", 3, "click", "disabled", "matTooltip"], [1, "border-base-300", "border-x", "border-t", 3, "selectedIndexChange", "selectedIndex"], [3, "label"], [3, "decorations", "formControlName", "readonly"], [1, "error-display"], [1, "border-base-300", "mb-4", "flex", "items-center", "justify-between", "space-x-2", "border-x", "border-b", "border-gray-300", "p-1"], [1, "pl-2", "text-xs"], [1, "text-xs", 3, "matTooltip"]], template: function SettingsFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 1)(1, "h3", 2);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, SettingsFormComponent_Conditional_4_Template, 9, 10, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, SettingsFormComponent_Conditional_5_Template, 6, 2, "form", 4);
      \u0275\u0275template(6, SettingsFormComponent_ng_template_6_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "COMMON.SETTINGS"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.active_edited() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form() && ctx.used_settings() && ctx.used_settings().length ? 5 : -1);
    }
  }, dependencies: [
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    SettingsFieldComponent,
    MatTabsModule,
    MatTab,
    MatTabGroup,
    MatTooltipModule,
    MatTooltip,
    MatRippleModule,
    MatRipple,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    IconComponent,
    AsyncPipe,
    DatePipe,
    TranslatePipe,
    DateFromPipe,
    UserPipe
  ], styles: ["\n\n.settings[_ngcontent-%COMP%] {\n  position: relative;\n  width: calc(100vw - 29em);\n  height: calc(100vh - 32em);\n}\n@media screen and (max-width: 640px) {\n  .settings[_ngcontent-%COMP%] {\n    width: calc(100vw - 3em);\n  }\n}\n.error-border[_ngcontent-%COMP%] {\n  border: 2px solid var(--error);\n}\n.error-display[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: var(--error);\n  white-space: pre-wrap;\n  margin: 0 0.5em 0.5em;\n  padding: 0.5em;\n  border-radius: 0 0 4px 4px;\n  font-family: var(--mono-font);\n  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  padding: 0.5em 0;\n  margin-top: -2em;\n  height: 3em;\n}\n@media screen and (max-width: 640px) {\n  .actions[_ngcontent-%COMP%] {\n    margin-left: 4.5em;\n  }\n}\n@media screen and (max-width: 640px) {\n  .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n  }\n}\n.off-screen[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 110vw;\n}\n/*# sourceMappingURL=settings-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsFormComponent, [{
    type: Component,
    args: [{ selector: "a-settings-form", template: `
        <header
            class="bg-base-200 mb-2 flex h-16 w-full items-center justify-between rounded-sm px-2 text-lg font-medium"
        >
            <h3 class="px-2">{{ 'COMMON.SETTINGS' | translate }}</h3>
            @if (active_edited()) {
                <div class="flex items-center space-x-2">
                    <button
                        icon
                        matRipple
                        class="border-secondary bg-base-100 text-secondary rounded-sm border"
                        [disabled]="edited_count() <= 0"
                        [matTooltip]="'COMMON.CLEAR' | translate"
                        (click)="clearChanges()"
                    >
                        @if (!saving()[shown_option().id]) {
                            <icon class="text-2xl">delete_sweep</icon>
                        } @else {
                            <mat-spinner diameter="32"></mat-spinner>
                        }
                    </button>
                    <button
                        icon
                        matRipple
                        class="bg-secondary text-secondary-content rounded-sm"
                        [disabled]="
                            !active_edited() ||
                            (has_errors() && !saving()[shown_option().id])
                        "
                        [matTooltip]="'COMMON.SAVE' | translate"
                        (click)="save(+shown_option().id)"
                    >
                        @if (!saving()[shown_option().id]) {
                            <icon class="text-2xl">save</icon>
                        } @else {
                            <mat-spinner diameter="32"></mat-spinner>
                        }
                    </button>
                </div>
            }
        </header>
        @if (form() && used_settings() && used_settings().length) {
            <form [formGroup]="form()">
                <mat-tab-group
                    [selectedIndex]="level_index()"
                    (selectedIndexChange)="
                        encryption_level.set(+levels()[$event].id)
                    "
                    class="border-base-300 border-x border-t"
                >
                    @for (option of levels(); track $index) {
                        <mat-tab
                            [label]="
                                option.name +
                                (option.id !== 4 &&
                                form().controls['settings' + option.id]?.dirty
                                    ? ' *'
                                    : '')
                            "
                        >
                        </mat-tab>
                    }
                </mat-tab-group>
                @for (option of levels(); track $index; let i = $index) {
                    @if (
                        form() &&
                        encryption_level() === option.id &&
                        form().controls['settings' + option.id]
                    ) {
                        <div
                            [class.error-border]="
                                form().controls['settings' + option.id]?.errors
                            "
                        >
                            <settings-form-field
                                [decorations]="
                                    +option.id === 4 ? merge_decorations : []
                                "
                                [formControlName]="'settings' + option.id"
                                [readonly]="
                                    !option.active || this.saving()[option.id]
                                "
                            ></settings-form-field>
                        </div>
                        @if (form().controls['settings' + option.id]?.errors) {
                            <div class="error-display">
                                {{
                                    form().controls['settings' + option.id]
                                        .errors.yaml
                                }}
                            </div>
                        }
                        @if (
                            option.name !== 'Merged' &&
                            settings()[i - 1]?.modified_by_id
                        ) {
                            <div
                                class="border-base-300 mb-4 flex items-center justify-between space-x-2 border-x border-b border-gray-300 p-1"
                            >
                                <div class="pl-2 text-xs">
                                    {{
                                        (
                                            settings()[i - 1]?.modified_by_id
                                            | user
                                            | async
                                        )?.name
                                    }}
                                </div>
                                <code
                                    class="text-xs"
                                    [matTooltip]="
                                        settings()[i - 1]?.updated_at * 1000 ||
                                            0 | date: 'medium'
                                    "
                                >
                                    {{ 'COMMON.LAST_EDIT' | translate }}:
                                    {{
                                        settings()[i - 1]?.updated_at * 1000
                                            | dateFrom
                                    }}
                                </code>
                            </div>
                        }
                    }
                }
            </form>
        }
        <ng-template #spinner>
            <mat-spinner diameter="32" />
        </ng-template>
    `, imports: [
      CommonModule,
      MatProgressSpinnerModule,
      TranslatePipe,
      DateFromPipe,
      SettingsFieldComponent,
      MatTabsModule,
      MatTooltipModule,
      MatRippleModule,
      ReactiveFormsModule,
      IconComponent,
      UserPipe
    ], styles: ["/* angular:styles/component:css;1deb34ad240d8e44fb8fe5494915a563b75f5e58072786ad4e94cf75ba8e1a64;/home/runner/work/backoffice/backoffice/src/app/ui/forms/settings-form.component.ts */\n.settings {\n  position: relative;\n  width: calc(100vw - 29em);\n  height: calc(100vh - 32em);\n}\n@media screen and (max-width: 640px) {\n  .settings {\n    width: calc(100vw - 3em);\n  }\n}\n.error-border {\n  border: 2px solid var(--error);\n}\n.error-display {\n  color: #fff;\n  background-color: var(--error);\n  white-space: pre-wrap;\n  margin: 0 0.5em 0.5em;\n  padding: 0.5em;\n  border-radius: 0 0 4px 4px;\n  font-family: var(--mono-font);\n  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n}\n.actions {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  padding: 0.5em 0;\n  margin-top: -2em;\n  height: 3em;\n}\n@media screen and (max-width: 640px) {\n  .actions {\n    margin-left: 4.5em;\n  }\n}\n@media screen and (max-width: 640px) {\n  .actions button {\n    font-size: 0.8em;\n  }\n}\n.off-screen {\n  position: absolute;\n  left: 110vw;\n}\n/*# sourceMappingURL=settings-form.component.css.map */\n"] }]
  }], () => [], { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false }] }], settings: [{ type: Input, args: [{ isSignal: true, alias: "settings", required: false }] }, { type: Output, args: ["settingsChange"] }], merge: [{ type: Input, args: [{ isSignal: true, alias: "merge", required: false }] }], merge_settings: [{ type: Input, args: [{ isSignal: true, alias: "merge_settings", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsFormComponent, { className: "SettingsFormComponent", filePath: "src/app/ui/forms/settings-form.component.ts", lineNumber: 252 });
})();
var MAPPING_CLASS = [
  "external-setting",
  "encryption-none",
  "encryption-support",
  "encryption-admin",
  "encryption-hide"
];
function whiteSpace(char_len) {
  return new Array(char_len).fill(" ").join("");
}
function itemUrl(id) {
  const path = `${location.origin}${location.pathname}`.replace(/\/$/g, "");
  if (id.indexOf("sys-") === 0) {
    return `${path}/#/systems/${id}/about`;
  } else if (id.indexOf("mod-") === 0) {
    return `${path}/#/modules/${id}/about`;
  } else if (id.indexOf("zone-") === 0) {
    return `${path}/#/zones/${id}/about`;
  } else if (id.indexOf("driver-") === 0) {
    return `${path}/#/drivers/${id}/about`;
  }
  return "";
}
function calcRangeOfStringInText(find, in_text, index = 0) {
  const lines = in_text.split("\n");
  let line = "";
  let line_number = 0;
  for (line of lines) {
    line_number++;
    if (line.indexOf(find) === 0) {
      break;
    }
  }
  return {
    startColumn: index + 1,
    startLineNumber: line_number,
    endColumn: find.length,
    endLineNumber: line_number
  };
}

export {
  SettingsFormComponent
};
//# sourceMappingURL=chunk-VH7B4ILP.js.map

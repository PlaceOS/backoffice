import {
  subMinutes
} from "./chunk-JEFNVMRS.js";
import {
  isAfter
} from "./chunk-PLQM4RLZ.js";
import {
  format
} from "./chunk-BQISQ53F.js";
import {
  dump,
  load
} from "./chunk-LZZWTBYD.js";
import {
  ItemSearchFieldComponent
} from "./chunk-UNZ6SOVU.js";
import {
  SettingsToggleComponent
} from "./chunk-55R7UEQ2.js";
import {
  validateURI
} from "./chunk-BZKFKJMB.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-EPIXDTWN.js";
import {
  getInvalidSignalFields
} from "./chunk-OKMGGQII.js";
import {
  FormField,
  form,
  max,
  min,
  required,
  submit,
  validate
} from "./chunk-FSWONNLF.js";
import {
  FullscreenModalShellComponent
} from "./chunk-LQ4JFOMC.js";
import {
  HotkeysService
} from "./chunk-4FMA4IVG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-HAY6XAXW.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  AsyncHandler
} from "./chunk-Q2BV2GZB.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-NHXLW3Z3.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-WXUWESJ2.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-7NXN4G42.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-4XBU66YH.js";
import {
  MatOption
} from "./chunk-O5B6FUTE.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-N557G3HM.js";
import {
  DatePipe
} from "./chunk-U7MJINT7.js";
import {
  Bc,
  Component,
  EventEmitter,
  Fe,
  Ms,
  Nc,
  Nt,
  Output,
  Pe,
  Wc,
  Zc,
  computed,
  effect,
  eu,
  fa,
  inject,
  oi,
  resource,
  setClassMetadata,
  signal,
  tu,
  wc,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Z45QSLBL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/drivers/drivers.utilities.ts
function generateDriverFormModel(driver) {
  return {
    id: driver?.id || "",
    repository_id: driver?.repository_id || "",
    file_name: driver?.file_name || "",
    commit: driver?.commit || "",
    name: driver?.name || "",
    role: driver?.role ?? Nt.Logic,
    module_name: driver?.module_name || "",
    default_uri: driver?.default_uri || "",
    default_port: driver?.default_port || 1,
    alert_level: driver?.alert_level || "medium",
    class_name: driver?.class_name || "",
    description: driver?.description || "",
    ignore_connected: driver?.ignore_connected || false,
    settings: ""
  };
}
var applyDriverFormSchema = (path) => {
  required(path.name);
  required(path.module_name);
  validate(path.default_uri, ({ value }) => validateURI({ value: value() }) ? { kind: "pattern", message: "Invalid URI" } : void 0);
  min(path.default_port, 1);
  max(path.default_port, 65535);
};

// src/app/drivers/driver-form.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DriverFormComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "item-search-field", 4);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function DriverFormComponent_Conditional_1_Conditional_5_Template_item_search_field_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.driver, $event) || (ctx_r1.driver = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function DriverFormComponent_Conditional_1_Conditional_5_Template_item_search_field_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.commit.set(null));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 5, "DRIVERS.BASE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 7, "DRIVERS.SEARCH"))("options", ctx_r1.driver_list())("loading", ctx_r1.loading_type().includes("drivers"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.driver);
    \u0275\u0275control();
  }
}
function DriverFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "item-search-field", 4);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function DriverFormComponent_Conditional_1_Template_item_search_field_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.repo, $event) || (ctx_r1.repo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function DriverFormComponent_Conditional_1_Template_item_search_field_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.driver.set(null);
      return \u0275\u0275resetView(ctx_r1.commit.set(null));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(5, DriverFormComponent_Conditional_1_Conditional_5_Template, 5, 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 6, "REPOS.SINGULAR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 8, "REPOS.SEARCH"))("options", ctx_r1.repo_list())("loading", ctx_r1.loading_type().includes("repository"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.repo);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.repo() ? 5 : -1);
  }
}
function DriverFormComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "DRIVERS.DETAILS_ERROR_1"), " ", \u0275\u0275pipeBind1(3, 4, "DRIVERS.DETAILS_ERROR_2"), " ");
  }
}
function DriverFormComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "item-search-field", 4);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("ngModelChange", function DriverFormComponent_Conditional_2_Template_item_search_field_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.commit.set($event);
      return \u0275\u0275resetView(ctx_r1.applyDriverCommit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(5, DriverFormComponent_Conditional_2_Conditional_5_Template, 4, 6, "div", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("error", ctx_r1.commit_error());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 8, "DRIVERS.COMMIT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 10, "DRIVERS.COMMIT_SEARCH"))("options", ctx_r1.commit_list())("loading", ctx_r1.loading_type().includes("commits"))("ngModel", ctx_r1.commit());
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.commit_error() ? 5 : -1);
  }
}
function DriverFormComponent_Conditional_3_Conditional_13_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r5 = ctx.$implicit;
    \u0275\u0275property("value", type_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, type_r5.name), " ");
  }
}
function DriverFormComponent_Conditional_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 10)(5, "mat-select", 23);
    \u0275\u0275repeaterCreate(6, DriverFormComponent_Conditional_3_Conditional_13_For_7_Template, 3, 4, "mat-option", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "DRIVERS.ROLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.role);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.role_types);
  }
}
function DriverFormComponent_Conditional_3_For_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r6 = ctx.$implicit;
    \u0275\u0275property("value", level_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, level_r6.name), " ");
  }
}
function DriverFormComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 10);
    \u0275\u0275element(7, "input", 11);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 12);
    \u0275\u0275conditionalCreate(13, DriverFormComponent_Conditional_3_Conditional_13_Template, 8, 4, "div", 13);
    \u0275\u0275elementStart(14, "div", 13)(15, "label", 14);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementStart(18, "span", 9);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-form-field", 10);
    \u0275\u0275element(21, "input", 11);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(23, "mat-error");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "label", 15);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-form-field", 10);
    \u0275\u0275element(30, "textarea", 11);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "label", 16);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 10);
    \u0275\u0275element(36, "input", 11);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 17)(39, "div", 13)(40, "label", 18);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "mat-form-field", 10);
    \u0275\u0275element(44, "input", 19);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(46, "mat-error");
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 13);
    \u0275\u0275element(50, "div", 20)(51, "settings-toggle", 21);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "label", 22);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "mat-form-field", 10)(57, "mat-select", 23);
    \u0275\u0275repeaterCreate(58, DriverFormComponent_Conditional_3_For_59_Template, 3, 4, "mat-option", 24, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.fieldInvalid("name"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 29, "COMMON.FIELD_NAME"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 31, "COMMON.FIELD_NAME"))("formField", ctx_r1.form.name);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 33, "DRIVERS.NAME_REQUIRED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.is_editing() ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("error", ctx_r1.fieldInvalid("module_name"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 35, "DRIVERS.MODULE_NAME"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 37, "DRIVERS.MODULE_NAME"))("formField", ctx_r1.form.module_name);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 39, "DRIVERS.MODULE_NAME_REQUIRED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 41, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(31, 43, "COMMON.FIELD_DESCRIPTION"))("formField", ctx_r1.form.description);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 45, "DRIVERS.DEFAULT_URI"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(37, 47, "DRIVERS.DEFAULT_URI"))("formField", ctx_r1.form.default_uri);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r1.fieldInvalid("default_port"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 49, "DRIVERS.DEFAULT_PORT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(45, 51, "DRIVERS.DEFAULT_PORT"))("formField", ctx_r1.form.default_port);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 53, "MODULES.PORT_REQUIRED"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(52, 55, "MODULES.IGNORE_CONNECTED"))("formField", ctx_r1.form.ignore_connected);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 57, "COMMON.ALERT_LEVEL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.alert_level);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.alert_levels);
  }
}
function DriverFormComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 26);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, ctx_r1.loading()));
  }
}
var DriverFormComponent = class _DriverFormComponent extends AsyncHandler {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  _name = "DRIVERS";
  _hotkey = inject(HotkeysService);
  _date_pipe = new DatePipe("en");
  event = new EventEmitter();
  formModel = signal(
    generateDriverFormModel(this._data.item),
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.formModel, applyDriverFormSchema);
  saving = signal(
    null,
    ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  heading = signal(
    "",
    ...ngDevMode ? [{ debugName: "heading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  is_editing = computed(
    () => !!this.formModel().id,
    ...ngDevMode ? [{ debugName: "is_editing" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = signal(
    "",
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading_type = signal(
    [],
    ...ngDevMode ? [{ debugName: "loading_type" }] : (
      /* istanbul ignore next */
      []
    )
  );
  commit_error = signal(
    false,
    ...ngDevMode ? [{ debugName: "commit_error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _details_request = signal(
    0,
    ...ngDevMode ? [{ debugName: "_details_request" }] : (
      /* istanbul ignore next */
      []
    )
  );
  role_types = [
    { id: Nt.SSH, name: "DRIVERS.SSH" },
    { id: Nt.Device, name: "DRIVERS.DEVICE" },
    { id: Nt.Service, name: "DRIVERS.SERVICE" },
    { id: Nt.Websocket, name: "DRIVERS.WEBSOCKET" },
    { id: Nt.Logic, name: "DRIVERS.LOGIC" }
  ];
  alert_levels = [
    { id: "low", name: "COMMON.ALERT_LOW" },
    { id: "medium", name: "COMMON.ALERT_MEDIUM" },
    { id: "high", name: "COMMON.ALERT_HIGH" },
    { id: "critical", name: "COMMON.ALERT_CRITICAL" }
  ];
  repo = signal(
    null,
    ...ngDevMode ? [{ debugName: "repo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  driver = signal(
    null,
    ...ngDevMode ? [{ debugName: "driver" }] : (
      /* istanbul ignore next */
      []
    )
  );
  commit = signal(
    null,
    ...ngDevMode ? [{ debugName: "commit" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _repo_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_repo_list" } : (
    /* istanbul ignore next */
    {}
  )), { loader: async () => {
    this._setLoadingType("repository", true);
    try {
      const { data } = await wc({ limit: 1e3 });
      return data.filter((repo) => repo.type === Ms.Driver);
    } finally {
      this._setLoadingType("repository", false);
    }
  } }));
  repo_list = computed(
    () => this._repo_list.value() || [],
    ...ngDevMode ? [{ debugName: "repo_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _driver_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_driver_list" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => this.repo()?.id,
    loader: async ({ params: repo_id }) => {
      if (!repo_id)
        return [];
      this._setLoadingType("drivers", true);
      try {
        const list = await Bc(repo_id, {
          limit: 1e3
        }).catch(() => []);
        return list.map((_) => ({
          id: _,
          name: _.replace(/\//g, " > ")
        }));
      } finally {
        this._setLoadingType("drivers", false);
      }
    }
  }));
  driver_list = computed(
    () => this._driver_list.value() || [],
    ...ngDevMode ? [{ debugName: "driver_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _commit_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_commit_list" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({
      repo_id: this.repo()?.id,
      driver_id: this.driver()?.id
    }),
    loader: async ({ params }) => {
      if (!params.repo_id || !params.driver_id)
        return [];
      return this._loadCommitList(params.repo_id, params.driver_id);
    }
  }));
  commit_list = computed(
    () => this._commit_list.value() || [],
    ...ngDevMode ? [{ debugName: "commit_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    const item = this._data.item;
    const edit = !!item.id;
    this.heading.set(i18n(`${this._name}.${edit ? "EDIT" : "NEW"}`));
    this._loadDetailsFromForm();
    this.subscription("save_item_key", this._hotkey.listen(["KeyS"], () => this.submit()));
  }
  constructor() {
    super();
    effect(() => {
      const module_name = this.formModel().module_name;
      const clean_name = module_name?.replace(/ /g, "_") || "";
      if (module_name !== clean_name) {
        this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
          module_name: clean_name
        }));
      }
    });
  }
  fieldInvalid(field) {
    const form_field = this.form[field];
    return typeof form_field === "function" ? form_field().invalid() && form_field().touched() : false;
  }
  async applyDriverCommit(commit) {
    const request_id = this._details_request() + 1;
    this._details_request.set(request_id);
    const old_commit = this.commit();
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), { commit: commit.id }));
    this.commit.set(commit);
    this.commit_error.set(false);
    const repo = this.repo();
    const driver = this.driver();
    if (!repo?.id || !driver?.id)
      return;
    this.loading.set("DRIVERS.DETAILS_LOADING");
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
      repository_id: repo.id,
      file_name: driver.id
    }));
    const details = await Zc(repo.id, {
      driver: `${driver.id}`,
      commit: `${commit.id}`
    }).catch(() => null);
    if (request_id !== this._details_request())
      return;
    if (!details) {
      this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
        commit: old_commit?.id || ""
      }));
      this.commit.set(old_commit);
      this.loading.set("");
      this.commit_error.set(true);
      notifyError(`Failed to get driver details for commit "${commit.id}"`);
      return;
    }
    if (this.formModel().id) {
      this.loading.set("");
      return;
    }
    this._applyDriverDetails(details);
  }
  async submit() {
    await submit(this.form, async () => {
      const item = this._data.item;
      this.saving.set(i18n(`${this._name}.SAVING`));
      this._dialog_ref.disableClose = true;
      const item_json = item.toJSON ? item.toJSON() : item;
      const form_value = __spreadValues({}, this.formModel());
      if (item.id) {
        delete form_value.role;
        delete form_value.class_name;
      }
      const form_item = item.id ? oi(__spreadValues(__spreadValues({}, item_json), form_value), [void 0]) : __spreadValues(__spreadValues({}, item_json), form_value);
      try {
        const _item = await (form_item.id ? eu(form_item.id, form_item) : tu(form_item));
        this._dialog_ref.disableClose = false;
        this.event.emit({
          reason: "done",
          metadata: { item: _item }
        });
        notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
        if (!this.formModel().id && this.formModel().settings) {
          await this.newSettings(_item, this.formModel().settings);
        }
        this._dialog_ref.close();
      } catch (err) {
        this.saving.set(null);
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
  _applyDriverDetails(details) {
    if (details == null) {
      this.loading.set("");
      return;
    }
    const driver = this.driver();
    const details_any = details;
    let settings = details_any.default_settings || "";
    try {
      JSON.parse(details_any.default_settings);
      const doc = load(details_any.default_settings);
      settings = dump(doc);
    } catch (error) {
      console.error("Error parsing settings:", error, driver.default_settings);
    }
    const port_number = details_any.tcp_port || details_any.udp_port || null;
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
      name: details_any.descriptive_name || "",
      module_name: details_any.generic_name || "",
      class_name: driver.id || "",
      settings,
      default_port: port_number,
      default_uri: details_any.uri_base || "",
      role: port_number ? port_number === 22 ? Nt.SSH : Nt.Device : details_any.uri_base ? details_any.uri_base.startsWith("ws") ? Nt.Websocket : Nt.Service : Nt.Logic,
      description: details_any.description || ""
    }));
    this.loading.set("");
  }
  async _loadDetailsFromForm() {
    const { id, commit, file_name, repository_id } = this.formModel();
    if (!id)
      return;
    this.loading.set("DRIVERS.DETAILS_LOADING");
    const repo = await Nc(repository_id);
    const driver = {
      id: file_name,
      name: file_name.replace(/\//g, " > ")
    };
    this.repo.set(repo);
    this.driver.set(driver);
    const commit_list = await this._loadCommitList(repository_id, file_name);
    const active_commit = commit_list.find((c) => c.id === commit);
    if (active_commit)
      this.commit.set(active_commit);
    this.loading.set("");
  }
  async newSettings(item, settings_string) {
    const new_settings = new Pe({
      parent_id: item.id,
      settings_string,
      encryption_level: Fe.Support
    });
    await fa(new_settings).catch((err) => {
      this.saving.set(null);
      notifyError(`Error saving settings for ${item.name || item.id}. Error: ${JSON.stringify(err.response || err.message || err)}`);
    });
  }
  async _loadCommitList(repo_id, driver_id) {
    this._setLoadingType("commits", true);
    try {
      const list = await Wc(repo_id, {
        driver: driver_id,
        limit: 1e3
      }).catch(() => []);
      return list.map((item) => ({
        id: item.commit,
        name: `${item.subject}`,
        extra: isAfter(item.date, subMinutes(item.date, 1)) ? this._date_pipe.transform(item.date.valueOf()) : format(item.date, "dd MMM yyyy")
      }));
    } finally {
      this._setLoadingType("commits", false);
    }
  }
  _setLoadingType(type, loading) {
    this.loading_type.update((types) => {
      const list = types.filter((_) => _ !== type);
      return loading ? [...list, type] : list;
    });
  }
  static \u0275fac = function DriverFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverFormComponent, selectors: [["driver-form"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 6, consts: [[3, "save", "heading", "loading"], [1, "flex", "flex-col"], [1, "bg-base-200", "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "px-8", "py-16"], ["for", "repos"], [3, "ngModelChange", "placeholder", "options", "loading", "ngModel"], ["for", "driver"], ["for", "commit"], [1, "text-error", "text-xs"], ["for", "driver-name"], ["required", ""], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], [1, "flex", "space-x-4"], [1, "flex", "flex-1", "flex-col"], ["for", "module-name"], ["for", "description"], ["for", "default-uri"], [1, "flex", "items-center", "space-x-4"], ["for", "default-port"], ["matInput", "", "type", "number", 3, "placeholder", "formField"], [1, "h-1", "w-full"], [1, "w-full", 3, "label", "formField"], ["for", "alert-level"], [3, "formField"], [3, "value"], ["for", "role"], [3, "diameter"]], template: function DriverFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275listener("save", function DriverFormComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(1, DriverFormComponent_Conditional_1_Template, 6, 10);
      \u0275\u0275conditionalCreate(2, DriverFormComponent_Conditional_2_Template, 6, 12);
      \u0275\u0275conditionalCreate(3, DriverFormComponent_Conditional_3_Template, 60, 59, "div", 1);
      \u0275\u0275conditionalCreate(4, DriverFormComponent_Conditional_4_Template, 5, 4, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", ctx.heading())("loading", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.is_editing() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.driver() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.commit() && !ctx.loading() && ctx.form.id ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 4 : -1);
    }
  }, dependencies: [
    MatProgressSpinnerModule,
    MatProgressSpinner,
    SettingsToggleComponent,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatInputModule,
    MatInput,
    FormField,
    MatSelectModule,
    MatSelect,
    MatOption,
    ItemSearchFieldComponent,
    FormsModule,
    NgControlStatus,
    NgModel,
    FullscreenModalShellComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverFormComponent, [{
    type: Component,
    args: [{ selector: "driver-form", template: `
        <fullscreen-modal-shell
            [heading]="heading()"
            [loading]="saving()"
            (save)="submit()"
        >
            @if (!is_editing()) {
                <label for="repos">{{ 'REPOS.SINGULAR' | translate }}</label>
                <item-search-field
                    [placeholder]="'REPOS.SEARCH' | translate"
                    [options]="repo_list()"
                    [loading]="loading_type().includes('repository')"
                    [(ngModel)]="repo"
                    (ngModelChange)="driver.set(null); commit.set(null)"
                />
                @if (repo()) {
                    <label for="driver">{{ 'DRIVERS.BASE' | translate }}</label>
                    <item-search-field
                        [placeholder]="'DRIVERS.SEARCH' | translate"
                        [options]="driver_list()"
                        [loading]="loading_type().includes('drivers')"
                        [(ngModel)]="driver"
                        (ngModelChange)="commit.set(null)"
                    />
                }
            }
            @if (driver()) {
                <label for="commit" [class.error]="commit_error()">
                    {{ 'DRIVERS.COMMIT' | translate }}
                </label>
                <item-search-field
                    [placeholder]="'DRIVERS.COMMIT_SEARCH' | translate"
                    [options]="commit_list()"
                    [loading]="loading_type().includes('commits')"
                    [ngModel]="commit()"
                    (ngModelChange)="
                        commit.set($event); applyDriverCommit($event)
                    "
                />
                @if (commit_error()) {
                    <div class="text-error text-xs">
                        {{ 'DRIVERS.DETAILS_ERROR_1' | translate }}
                        {{ 'DRIVERS.DETAILS_ERROR_2' | translate }}
                    </div>
                }
            }
            @if (commit() && !loading() && form.id) {
                <div class="flex flex-col">
                    <label
                        for="driver-name"
                        [class.error]="fieldInvalid('name')"
                    >
                        {{ 'COMMON.FIELD_NAME' | translate }}
                        <span required>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="'COMMON.FIELD_NAME' | translate"
                            [formField]="form.name"
                        />
                        <mat-error>
                            {{ 'DRIVERS.NAME_REQUIRED' | translate }}
                        </mat-error>
                    </mat-form-field>
                    <div class="flex space-x-4">
                        @if (!is_editing()) {
                            <div class="flex flex-1 flex-col">
                                <label for="role">
                                    {{ 'DRIVERS.ROLE' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <mat-select [formField]="form.role">
                                        @for (type of role_types; track type) {
                                            <mat-option [value]="type.id">
                                                {{ type.name | translate }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        }
                        <div class="flex flex-1 flex-col">
                            <label
                                for="module-name"
                                [class.error]="fieldInvalid('module_name')"
                            >
                                {{ 'DRIVERS.MODULE_NAME' | translate }}
                                <span required>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DRIVERS.MODULE_NAME' | translate
                                    "
                                    [formField]="form.module_name"
                                />
                                <mat-error>
                                    {{
                                        'DRIVERS.MODULE_NAME_REQUIRED'
                                            | translate
                                    }}
                                </mat-error>
                            </mat-form-field>
                        </div>
                    </div>
                    <label for="description">
                        {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            [placeholder]="
                                'COMMON.FIELD_DESCRIPTION' | translate
                            "
                            [formField]="form.description"
                        ></textarea>
                    </mat-form-field>
                    <label for="default-uri">{{
                        'DRIVERS.DEFAULT_URI' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="'DRIVERS.DEFAULT_URI' | translate"
                            [formField]="form.default_uri"
                        />
                    </mat-form-field>
                    <div class="flex items-center space-x-4">
                        <div class="flex flex-1 flex-col">
                            <label
                                for="default-port"
                                [class.error]="fieldInvalid('default_port')"
                            >
                                {{ 'DRIVERS.DEFAULT_PORT' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    type="number"
                                    [placeholder]="
                                        'DRIVERS.DEFAULT_PORT' | translate
                                    "
                                    [formField]="form.default_port"
                                />
                                <mat-error>
                                    {{ 'MODULES.PORT_REQUIRED' | translate }}
                                </mat-error>
                            </mat-form-field>
                        </div>
                        <div class="flex flex-1 flex-col">
                            <div class="h-1 w-full"></div>
                            <settings-toggle
                                class="w-full"
                                [label]="'MODULES.IGNORE_CONNECTED' | translate"
                                [formField]="form.ignore_connected"
                            />
                        </div>
                    </div>
                    <label for="alert-level">
                        {{ 'COMMON.ALERT_LEVEL' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select [formField]="form.alert_level">
                            @for (level of alert_levels; track level.id) {
                                <mat-option [value]="level.id">
                                    {{ level.name | translate }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
            }
            <!-- Form fields go here -->
            @if (loading()) {
                <div
                    class="bg-base-200 flex w-full flex-col items-center justify-center space-y-4 rounded-xl px-8 py-16"
                >
                    <mat-spinner [diameter]="32" />
                    <p>{{ loading() | translate }}</p>
                </div>
            }
        </fullscreen-modal-shell>
    `, imports: [
      TranslatePipe,
      MatProgressSpinnerModule,
      SettingsToggleComponent,
      MatFormFieldModule,
      MatInputModule,
      FormField,
      MatSelectModule,
      ItemSearchFieldComponent,
      FormsModule,
      FullscreenModalShellComponent
    ] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverFormComponent, { className: "DriverFormComponent", filePath: "src/app/drivers/driver-form.component.ts", lineNumber: 260 });
})();

export {
  DriverFormComponent
};
//# sourceMappingURL=chunk-KMX2JR3L.js.map

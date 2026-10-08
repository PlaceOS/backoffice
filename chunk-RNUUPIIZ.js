import {
  dump,
  load
} from "./chunk-LZZWTBYD.js";
import {
  ItemSearchFieldComponent
} from "./chunk-SZEKVCLP.js";
import {
  validateURI
} from "./chunk-F45UEFFY.js";
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
} from "./chunk-LMCXBYGC.js";
import {
  FullscreenModalShellComponent
} from "./chunk-NQS2MXIA.js";
import {
  HotkeysService
} from "./chunk-NY2WALLY.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-QTD6K5LA.js";
import {
  readError
} from "./chunk-G3IJGLD4.js";
import {
  SettingsToggleComponent
} from "./chunk-24BHDQJX.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-V5PUZAZK.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-WVKNYC6X.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-IGQAWJ6Y.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TUWOEI35.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-AYJXTTVT.js";
import {
  AsyncHandler
} from "./chunk-NZ7ZPGVU.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-EZWGQADM.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-5OMVQZOP.js";
import {
  MatOption
} from "./chunk-PSYHHKS3.js";
import {
  Dc,
  Jc,
  Le,
  Ms,
  Nc,
  Nt,
  Pe,
  Qc,
  Wc,
  eu,
  ma,
  oi,
  tu
} from "./chunk-P3FA5CPP.js";
import {
  DatePipe
} from "./chunk-QHKUHZUG.js";
import {
  Component,
  EventEmitter,
  Output,
  computed,
  effect,
  inject,
  resource,
  setClassMetadata,
  signal,
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
} from "./chunk-RDM3X2TD.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

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
    \u0275\u0275elementStart(3, "item-search-field", 6);
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
    \u0275\u0275elementStart(0, "div", 9);
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
    \u0275\u0275elementStart(0, "label", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "item-search-field", 8);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("ngModelChange", function DriverFormComponent_Conditional_2_Template_item_search_field_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.commit.set($event);
      return \u0275\u0275resetView(ctx_r1.applyDriverCommit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(5, DriverFormComponent_Conditional_2_Conditional_5_Template, 4, 6, "div", 9);
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
    \u0275\u0275elementStart(0, "mat-option", 29);
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
    \u0275\u0275elementStart(0, "div", 15)(1, "label", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 12)(5, "mat-select", 31);
    \u0275\u0275repeaterCreate(6, DriverFormComponent_Conditional_3_Conditional_13_For_7_Template, 3, 4, "mat-option", 29, \u0275\u0275repeaterTrackByIdentity);
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
function DriverFormComponent_Conditional_3_For_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 29);
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
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 12);
    \u0275\u0275element(7, "input", 13);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 14);
    \u0275\u0275conditionalCreate(13, DriverFormComponent_Conditional_3_Conditional_13_Template, 8, 4, "div", 15);
    \u0275\u0275elementStart(14, "div", 15)(15, "label", 16);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementStart(18, "span", 11);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-form-field", 12);
    \u0275\u0275element(21, "input", 17);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(23, "mat-error");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "label", 18);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-form-field", 12);
    \u0275\u0275element(30, "textarea", 19);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "label", 20);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 12);
    \u0275\u0275element(36, "input", 21);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(38, "mat-error");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 22)(42, "div", 15)(43, "label", 23);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "mat-form-field", 12);
    \u0275\u0275element(47, "input", 24);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(49, "mat-error");
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 15);
    \u0275\u0275element(53, "div", 25)(54, "settings-toggle", 26);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "label", 27);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "mat-form-field", 12)(60, "mat-select", 28);
    \u0275\u0275repeaterCreate(61, DriverFormComponent_Conditional_3_For_62_Template, 3, 4, "mat-option", 29, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.fieldInvalid("name"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 32, "COMMON.FIELD_NAME"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 34, "COMMON.FIELD_NAME"))("formField", ctx_r1.form.name);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 36, "DRIVERS.NAME_REQUIRED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.is_editing() ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("error", ctx_r1.fieldInvalid("module_name"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 38, "DRIVERS.MODULE_NAME"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 40, "DRIVERS.MODULE_NAME"))("formField", ctx_r1.form.module_name);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 42, "DRIVERS.MODULE_NAME_REQUIRED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 44, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(31, 46, "COMMON.FIELD_DESCRIPTION"))("formField", ctx_r1.form.description);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("error", ctx_r1.fieldInvalid("default_uri"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 48, "DRIVERS.DEFAULT_URI"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(37, 50, "DRIVERS.DEFAULT_URI"))("formField", ctx_r1.form.default_uri);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 52, "MODULES.URI_REQUIRED"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r1.fieldInvalid("default_port"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 54, "DRIVERS.DEFAULT_PORT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(48, 56, "DRIVERS.DEFAULT_PORT"))("formField", ctx_r1.form.default_port);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 58, "MODULES.PORT_REQUIRED"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(55, 60, "MODULES.IGNORE_CONNECTED"))("formField", ctx_r1.form.ignore_connected);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 62, "COMMON.ALERT_LEVEL"), " ");
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
    \u0275\u0275element(1, "mat-spinner", 32);
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
      const { data } = await Nc({ limit: 1e3 });
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
        const list = await Wc(repo_id, {
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
    const details = await Jc(repo.id, {
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
  /**
   * Load the repository, driver and commit for an existing driver.
   * For a new driver, pre-select the repository and driver if given.
   */
  async _loadDetailsFromForm() {
    const { id, commit, file_name, repository_id } = this.formModel();
    if (!repository_id)
      return;
    this.loading.set("DRIVERS.DETAILS_LOADING");
    try {
      const repo = await Dc(repository_id);
      this.repo.set(repo);
      if (!file_name)
        return;
      this.driver.set({
        id: file_name,
        name: file_name.replace(/\//g, " > ")
      });
      if (!id)
        return;
      const commit_list = await this._loadCommitList(repository_id, file_name);
      const active_commit = commit_list.find((c) => c.id === commit) || {
        id: commit,
        name: commit,
        extra: null
      };
      this.commit.set(active_commit);
    } finally {
      this.loading.set("");
    }
  }
  async newSettings(item, settings_string) {
    const new_settings = new Pe({
      parent_id: item.id,
      settings_string,
      encryption_level: Le.Support
    });
    await ma(new_settings).catch(async (err) => {
      this.saving.set(null);
      notifyError(`Error saving settings for ${item.name || item.id}. Error: ${await readError(err)}`);
    });
  }
  async _loadCommitList(repo_id, driver_id) {
    this._setLoadingType("commits", true);
    try {
      const list = await Qc(repo_id, {
        driver: driver_id,
        limit: 1e3
      }).catch(() => []);
      return list.map((item) => ({
        id: item.commit,
        name: `${item.subject}`,
        extra: this._date_pipe.transform(item.date)
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverFormComponent, selectors: [["driver-form"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 6, consts: [[3, "save", "heading", "loading"], [1, "flex", "flex-col"], [1, "bg-base-200", "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "px-8", "py-16"], ["for", "repos", "id", "repos-label"], ["id", "repos", "role", "group", "aria-labelledby", "repos-label", 3, "ngModelChange", "placeholder", "options", "loading", "ngModel"], ["for", "driver", "id", "driver-label"], ["id", "driver", "role", "group", "aria-labelledby", "driver-label", 3, "ngModelChange", "placeholder", "options", "loading", "ngModel"], ["for", "commit", "id", "commit-label"], ["id", "commit", "role", "group", "aria-labelledby", "commit-label", 3, "ngModelChange", "placeholder", "options", "loading", "ngModel"], [1, "text-error", "text-xs"], ["for", "driver-name"], ["required", ""], ["appearance", "outline"], ["matInput", "", "id", "driver-name", 3, "placeholder", "formField"], [1, "flex", "space-x-4"], [1, "flex", "flex-1", "flex-col"], ["for", "module-name"], ["matInput", "", "id", "module-name", 3, "placeholder", "formField"], ["for", "description"], ["matInput", "", "id", "description", 3, "placeholder", "formField"], ["for", "default-uri"], ["matInput", "", "id", "default-uri", 3, "placeholder", "formField"], [1, "flex", "items-center", "space-x-4"], ["for", "default-port"], ["matInput", "", "type", "number", "id", "default-port", 3, "placeholder", "formField"], [1, "h-1", "w-full"], [1, "w-full", 3, "label", "formField"], ["for", "alert-level", "id", "alert-level-label"], ["id", "alert-level", "aria-labelledby", "alert-level-label", 3, "formField"], [3, "value"], ["for", "role", "id", "role-label"], ["id", "role", "aria-labelledby", "role-label", 3, "formField"], [3, "diameter"]], template: function DriverFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275listener("save", function DriverFormComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(1, DriverFormComponent_Conditional_1_Template, 6, 10);
      \u0275\u0275conditionalCreate(2, DriverFormComponent_Conditional_2_Template, 6, 12);
      \u0275\u0275conditionalCreate(3, DriverFormComponent_Conditional_3_Template, 63, 64, "div", 1);
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
                <label for="repos" id="repos-label">{{
                    'REPOS.SINGULAR' | translate
                }}</label>
                <item-search-field
                    id="repos"
                    role="group"
                    aria-labelledby="repos-label"
                    [placeholder]="'REPOS.SEARCH' | translate"
                    [options]="repo_list()"
                    [loading]="loading_type().includes('repository')"
                    [(ngModel)]="repo"
                    (ngModelChange)="driver.set(null); commit.set(null)"
                />
                @if (repo()) {
                    <label for="driver" id="driver-label">{{
                        'DRIVERS.BASE' | translate
                    }}</label>
                    <item-search-field
                        id="driver"
                        role="group"
                        aria-labelledby="driver-label"
                        [placeholder]="'DRIVERS.SEARCH' | translate"
                        [options]="driver_list()"
                        [loading]="loading_type().includes('drivers')"
                        [(ngModel)]="driver"
                        (ngModelChange)="commit.set(null)"
                    />
                }
            }
            @if (driver()) {
                <label
                    for="commit"
                    id="commit-label"
                    [class.error]="commit_error()"
                >
                    {{ 'DRIVERS.COMMIT' | translate }}
                </label>
                <item-search-field
                    id="commit"
                    role="group"
                    aria-labelledby="commit-label"
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
                            id="driver-name"
                            [formField]="form.name"
                        />
                        <mat-error>
                            {{ 'DRIVERS.NAME_REQUIRED' | translate }}
                        </mat-error>
                    </mat-form-field>
                    <div class="flex space-x-4">
                        @if (!is_editing()) {
                            <div class="flex flex-1 flex-col">
                                <label for="role" id="role-label">
                                    {{ 'DRIVERS.ROLE' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <mat-select
                                        id="role"
                                        aria-labelledby="role-label"
                                        [formField]="form.role"
                                    >
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
                                    id="module-name"
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
                            id="description"
                            [formField]="form.description"
                        ></textarea>
                    </mat-form-field>
                    <label
                        for="default-uri"
                        [class.error]="fieldInvalid('default_uri')"
                    >
                        {{ 'DRIVERS.DEFAULT_URI' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="'DRIVERS.DEFAULT_URI' | translate"
                            id="default-uri"
                            [formField]="form.default_uri"
                        />
                        <mat-error>
                            {{ 'MODULES.URI_REQUIRED' | translate }}
                        </mat-error>
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
                                    id="default-port"
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
                    <label for="alert-level" id="alert-level-label">
                        {{ 'COMMON.ALERT_LEVEL' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            id="alert-level"
                            aria-labelledby="alert-level-label"
                            [formField]="form.alert_level"
                        >
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverFormComponent, { className: "DriverFormComponent", filePath: "src/app/drivers/driver-form.component.ts", lineNumber: 296 });
})();

export {
  DriverFormComponent
};
//# sourceMappingURL=chunk-RNUUPIIZ.js.map

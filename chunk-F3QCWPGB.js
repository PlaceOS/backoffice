import {
  DateFromPipe
} from "./chunk-GPDIMQMT.js";
import "./chunk-TPDHL3PI.js";
import {
  SettingsToggleComponent
} from "./chunk-XZK5COZK.js";
import "./chunk-KFZ5XOEB.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-MAM7KZJG.js";
import {
  isValidUrl
} from "./chunk-BZKFKJMB.js";
import {
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-ND6UINCH.js";
import {
  getInvalidSignalFields
} from "./chunk-OKMGGQII.js";
import {
  FormField,
  disabled,
  form,
  required,
  submit,
  validate
} from "./chunk-CW7GKMUR.js";
import {
  FullscreenModalShellComponent
} from "./chunk-E3OTE2NP.js";
import {
  HotkeysService
} from "./chunk-2FYP6MEV.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KNGYWE3U.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  AsyncHandler
} from "./chunk-Z6WA4HOG.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-IMYOUAZQ.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatSuffix
} from "./chunk-AOLD3S2D.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-YNW2ZIUP.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-P5OVUE75.js";
import "./chunk-E5TTP6RX.js";
import "./chunk-KCZID3OB.js";
import {
  MatOption
} from "./chunk-DQVW3JTC.js";
import "./chunk-HFFZMFOU.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-4WEZYQJI.js";
import {
  IconComponent
} from "./chunk-KMXZ3OKY.js";
import "./chunk-UB346ZBO.js";
import "./chunk-7A2HMJBQ.js";
import {
  DatePipe,
  SlicePipe
} from "./chunk-2YYGQVEM.js";
import {
  Cc,
  Component,
  Ec,
  EventEmitter,
  Fc,
  Hc,
  Ic,
  Injector,
  Nc,
  Output,
  Pe,
  Us,
  ViewChild,
  computed,
  effect,
  inject,
  ni,
  setClassMetadata,
  signal,
  ua,
  viewChild,
  wc,
  zc,
  ze,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-4QIQTM3T.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/repositories/repositories.utilities.ts
function generateRepositoryFormModel(repository) {
  return {
    id: repository?.id || "",
    commit_hash: repository?.commit_hash || "HEAD",
    branch: repository?.branch || "",
    name: repository?.name || "",
    folder_name: repository?.folder_name || "",
    description: repository?.description || "",
    uri: repository?.uri || "",
    repo_type: repository?.repo_type || Us.Driver,
    root_path: repository?.root_path || "",
    username: repository?.username || "",
    password: repository?.password || ""
  };
}
var applyRepositoryFormSchema = (path) => {
  required(path.branch);
  required(path.name);
  required(path.folder_name, {
    when({ valueOf }) {
      return !valueOf(path.id);
    }
  });
  validate(path.folder_name, ({ value, valueOf }) => {
    if (valueOf(path.id))
      return void 0;
    return /^[a-zA-Z0-9_+\-().]*$/.test(value()) ? void 0 : { kind: "pattern", message: "Invalid folder name" };
  });
  required(path.uri);
};

// src/app/repositories/repository-form.component.ts
var _c0 = ["branch_search"];
var _c1 = ["commit_search"];
var _c2 = () => ({ standalone: true });
var _c3 = () => ({ name: "branches" });
var _c4 = () => ({ name: "commits" });
function RepositoryFormComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 7);
    \u0275\u0275element(7, "input", 8);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.name().invalid() && ctx_r0.form.name().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 8, "COMMON.FIELD_NAME"))("formField", ctx_r0.form.name);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "REPOS.NAME_REQUIRED"));
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_3_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    \u0275\u0275property("value", type_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r2.name, " ");
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7)(5, "mat-select", 10);
    \u0275\u0275repeaterCreate(6, RepositoryFormComponent_Conditional_1_Conditional_3_For_7_Template, 2, 2, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "REPOS.TYPE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.repo_type);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.repo_types());
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 7);
    \u0275\u0275element(7, "input", 8);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.folder_name().invalid() && ctx_r0.form.folder_name().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "REPOS.FOLDER_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 8, "REPOS.FOLDER_NAME"))("formField", ctx_r0.form.folder_name);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "REPOS.FOLDER_NAME_REQUIRED"));
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 7)(7, "input", 14);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("blur", function RepositoryFormComponent_Conditional_1_Conditional_5_Template_input_blur_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markCredentialsBlur());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.uri().invalid() && ctx_r0.form.uri().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "REPOS.URI"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 8, "REPOS.URI"))("formField", ctx_r0.form.uri);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "REPOS.URI_REQUIRED"));
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7)(5, "input", 16);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("blur", function RepositoryFormComponent_Conditional_1_Conditional_7_Template_input_blur_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markCredentialsBlur());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "REPOS.USERNAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "REPOS.USERNAME"))("formField", ctx_r0.form.username);
    \u0275\u0275control();
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7)(5, "input", 18);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("blur", function RepositoryFormComponent_Conditional_1_Conditional_8_Template_input_blur_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markCredentialsBlur());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(7, "button", 19);
    \u0275\u0275listener("click", function RepositoryFormComponent_Conditional_1_Conditional_8_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.togglePassword());
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "visibility");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "REPOS.PASSWORD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r0.show_password() ? "text" : "password")("placeholder", \u0275\u0275pipeBind1(6, 6, "COMMON.PASSWORD"))("formField", ctx_r0.form.password);
    \u0275\u0275control();
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_9_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const branch_r7 = ctx.$implicit;
    \u0275\u0275property("value", branch_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", branch_r7, " ");
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_9_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "mat-spinner", 24);
    \u0275\u0275elementEnd();
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 7)(7, "mat-select", 20);
    \u0275\u0275listener("openedChange", function RepositoryFormComponent_Conditional_1_Conditional_9_Template_mat_select_openedChange_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setBranchOpen($event));
    });
    \u0275\u0275elementStart(8, "mat-option", 21)(9, "input", 22, 0);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("ngModelChange", function RepositoryFormComponent_Conditional_1_Conditional_9_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.branch_filter.set($event));
    })("mousedown", function RepositoryFormComponent_Conditional_1_Conditional_9_Template_input_mousedown_9_listener($event) {
      return $event.stopPropagation();
    })("click", function RepositoryFormComponent_Conditional_1_Conditional_9_Template_input_click_9_listener($event) {
      return $event.stopPropagation();
    })("keydown", function RepositoryFormComponent_Conditional_1_Conditional_9_Template_input_keydown_9_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(13, RepositoryFormComponent_Conditional_1_Conditional_9_For_14_Template, 2, 2, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(15, RepositoryFormComponent_Conditional_1_Conditional_9_Conditional_15_Template, 2, 0, "div", 23);
    \u0275\u0275elementStart(16, "mat-error");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.branch().invalid() && ctx_r0.form.branch().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 11, "REPOS.BRANCH"));
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r0.form.branch)("placeholder", "Select Branch");
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.branch_filter())("ngModelOptions", \u0275\u0275pureFunction0(21, _c2))("placeholder", \u0275\u0275pipeBind2(11, 13, "COMMON.SEARCH_FOR", \u0275\u0275pureFunction0(22, _c3)));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(12, 16, "COMMON.SEARCH_FOR", \u0275\u0275pureFunction0(23, _c3)));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.filtered_branch_list());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.loading_branches() ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 19, "REPOS.BRANCH_REQUIRED"));
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_10_For_19_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const commit_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(commit_r10.author);
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_10_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 11)(1, "div", 33);
    \u0275\u0275listener("click", function RepositoryFormComponent_Conditional_1_Conditional_10_For_19_Template_div_click_1_listener() {
      const commit_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.base_commit.set(commit_r10));
    });
    \u0275\u0275elementStart(2, "div", 34)(3, "div", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 36);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, RepositoryFormComponent_Conditional_1_Conditional_10_For_19_Conditional_8_Template, 2, 1, "code", 37);
    \u0275\u0275elementStart(9, "code", 37);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "slice");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const commit_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", commit_r10.hash);
    \u0275\u0275advance();
    \u0275\u0275classProp("w-full!", ctx_r0.formModel().commit_hash === commit_r10.hash);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", commit_r10.subject);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", commit_r10.subject, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 8, commit_r10.date, "medium"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(commit_r10.author ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(11, 11, commit_r10.hash, 0, 8));
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_10_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "mat-spinner", 24);
    \u0275\u0275elementEnd();
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "label", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7)(5, "mat-select", 27);
    \u0275\u0275listener("openedChange", function RepositoryFormComponent_Conditional_1_Conditional_10_Template_mat_select_openedChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setCommitOpen($event));
    });
    \u0275\u0275elementStart(6, "mat-select-trigger")(7, "div", 28)(8, "div", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 30);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "slice");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "mat-option", 21)(14, "input", 31, 1);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("ngModelChange", function RepositoryFormComponent_Conditional_1_Conditional_10_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.commit_filter.set($event));
    })("mousedown", function RepositoryFormComponent_Conditional_1_Conditional_10_Template_input_mousedown_14_listener($event) {
      return $event.stopPropagation();
    })("click", function RepositoryFormComponent_Conditional_1_Conditional_10_Template_input_click_14_listener($event) {
      return $event.stopPropagation();
    })("keydown", function RepositoryFormComponent_Conditional_1_Conditional_10_Template_input_keydown_14_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(18, RepositoryFormComponent_Conditional_1_Conditional_10_For_19_Template, 12, 15, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(20, RepositoryFormComponent_Conditional_1_Conditional_10_Conditional_20_Template, 2, 0, "div", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 4)(22, "settings-toggle", 32);
    \u0275\u0275listener("ngModelChange", function RepositoryFormComponent_Conditional_1_Conditional_10_Template_settings_toggle_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setFollow($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 11, "REPOS.COMMIT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.commit_hash);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.base_commit()?.subject || "Latest commit", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(12, 13, ctx_r0.formModel().commit_hash || "HEAD", 0, 8), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r0.commit_filter())("ngModelOptions", \u0275\u0275pureFunction0(23, _c2))("placeholder", \u0275\u0275pipeBind2(16, 17, "COMMON.SEARCH_FOR", \u0275\u0275pureFunction0(24, _c4)));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(17, 20, "COMMON.SEARCH_FOR", \u0275\u0275pureFunction0(25, _c4)));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.filtered_commit_list());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.loading_commits() ? 20 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.follow_latest())("ngModelOptions", \u0275\u0275pureFunction0(26, _c2));
    \u0275\u0275control();
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7);
    \u0275\u0275element(5, "textarea", 8);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "COMMON.FIELD_DESCRIPTION"))("formField", ctx_r0.form.description);
    \u0275\u0275control();
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7);
    \u0275\u0275element(5, "input", 8);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "REPOS.ROOT_PATH"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "REPOS.ROOT_PATH"))("formField", ctx_r0.form.root_path);
    \u0275\u0275control();
  }
}
function RepositoryFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 3);
    \u0275\u0275conditionalCreate(1, RepositoryFormComponent_Conditional_1_Conditional_1_Template, 12, 12, "div", 4);
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275conditionalCreate(3, RepositoryFormComponent_Conditional_1_Conditional_3_Template, 8, 4, "div", 4);
    \u0275\u0275conditionalCreate(4, RepositoryFormComponent_Conditional_1_Conditional_4_Template, 12, 12, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, RepositoryFormComponent_Conditional_1_Conditional_5_Template, 12, 12, "div", 4);
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275conditionalCreate(7, RepositoryFormComponent_Conditional_1_Conditional_7_Template, 7, 7, "div", 4);
    \u0275\u0275conditionalCreate(8, RepositoryFormComponent_Conditional_1_Conditional_8_Template, 10, 8, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, RepositoryFormComponent_Conditional_1_Conditional_9_Template, 19, 24, "div", 4);
    \u0275\u0275conditionalCreate(10, RepositoryFormComponent_Conditional_1_Conditional_10_Template, 23, 27);
    \u0275\u0275conditionalCreate(11, RepositoryFormComponent_Conditional_1_Conditional_11_Template, 7, 7, "div", 4);
    \u0275\u0275conditionalCreate(12, RepositoryFormComponent_Conditional_1_Conditional_12_Template, 7, 7, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.name ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.is_editing() && ctx_r0.form.repo_type && ctx_r0.form.folder_name ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.is_editing() && ctx_r0.form.folder_name ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.uri && !ctx_r0.hide_uri ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.username ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.password ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.branch ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.is_interface() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.description ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.root_path ? 12 : -1);
  }
}
var RepositoryFormComponent = class _RepositoryFormComponent extends AsyncHandler {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  _hotkey = inject(HotkeysService);
  _injector = inject(Injector);
  _name = "REPOS";
  event = new EventEmitter();
  formModel = signal(
    generateRepositoryFormModel(this._data.item),
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _repository_uri = computed(
    () => this.formModel().uri,
    ...ngDevMode ? [{ debugName: "_repository_uri" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _repository_branch = computed(
    () => this.formModel().branch,
    ...ngDevMode ? [{ debugName: "_repository_branch" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _repository_commit = computed(
    () => this.formModel().commit_hash,
    ...ngDevMode ? [{ debugName: "_repository_commit" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
  /** List of commits available for repository */
  commit_list = signal(
    [],
    ...ngDevMode ? [{ debugName: "commit_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  commit_filter = signal(
    "",
    ...ngDevMode ? [{ debugName: "commit_filter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filtered_commit_list = computed(
    () => {
      const search = this.commit_filter().trim().toLowerCase();
      if (!search)
        return this.commit_list();
      const selected = this._repository_commit();
      return this.commit_list().filter((commit) => commit.hash === selected || `${commit.subject} ${commit.hash} ${commit.author || ""}`.toLowerCase().includes(search)).sort((a, b) => a.hash === selected ? -1 : b.hash === selected ? 1 : 0);
    },
    ...ngDevMode ? [{ debugName: "filtered_commit_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of branches available for repository */
  branch_list = signal(
    [],
    ...ngDevMode ? [{ debugName: "branch_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  branch_filter = signal(
    "",
    ...ngDevMode ? [{ debugName: "branch_filter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filtered_branch_list = computed(
    () => {
      const search = this.branch_filter().trim().toLowerCase();
      if (!search)
        return this.branch_list();
      const selected = this._repository_branch();
      return this.branch_list().filter((branch) => branch === selected || branch.toLowerCase().includes(search)).sort((a, b) => a === selected ? -1 : b === selected ? 1 : 0);
    },
    ...ngDevMode ? [{ debugName: "filtered_branch_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether repository's branches are being loaded */
  loading_branches = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading_branches" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether repository's commits are being loaded */
  loading_commits = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading_commits" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Currently selected commit for the repository */
  base_commit = signal(
    null,
    ...ngDevMode ? [{ debugName: "base_commit" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether to follow the latest branch commits(Auto-update) */
  follow_latest = signal(
    false,
    ...ngDevMode ? [{ debugName: "follow_latest" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of available types of repositories */
  repo_types = signal(
    [],
    ...ngDevMode ? [{ debugName: "repo_types" }] : (
      /* istanbul ignore next */
      []
    )
  );
  show_password = signal(
    false,
    ...ngDevMode ? [{ debugName: "show_password" }] : (
      /* istanbul ignore next */
      []
    )
  );
  date_pipe = new DateFromPipe();
  is_editing = signal(
    false,
    ...ngDevMode ? [{ debugName: "is_editing" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Emits when URI, username, or password fields lose focus */
  credentials_blur = signal(
    0,
    ...ngDevMode ? [{ debugName: "credentials_blur" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _branch_search_el = viewChild(
    "branch_search",
    ...ngDevMode ? [{ debugName: "_branch_search_el" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _commit_search_el = viewChild(
    "commit_search",
    ...ngDevMode ? [{ debugName: "_commit_search_el" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.formModel, (path) => {
    applyRepositoryFormSchema(path);
    disabled(path.branch, () => {
      return this.loading_branches() || !this.branch_list().length;
    });
    disabled(path.commit_hash, () => {
      return this.loading_commits() || !this.commit_list().length || !this.formModel().branch;
    });
  });
  is_interface = computed(
    () => this.formModel().repo_type === Us.Interface,
    ...ngDevMode ? [{ debugName: "is_interface" }] : (
      /* istanbul ignore next */
      []
    )
  );
  get hide_uri() {
    return !this.is_interface() && this.formModel().id;
  }
  ngOnInit() {
    const item = this._data.item;
    const edit = !!item.id;
    this.heading.set(i18n(`${this._name}.${edit ? "EDIT" : "NEW"}`));
    this.repo_types.set([
      { id: Us.Driver, name: i18n("REPOS.TYPE_DRIVER") },
      {
        id: Us.Interface,
        name: i18n("REPOS.TYPE_INTERFACE")
      }
    ]);
    this.follow_latest.set(this.formModel().commit_hash === "HEAD");
    this.is_editing.set(!!this.formModel().id);
    this._setupBranchAndCommitStreams();
    this.subscription("save_item_key", this._hotkey.listen(["KeyS"], () => this.submit()));
  }
  async submit() {
    await submit(this.form, async () => {
      const item = this._data.item;
      this.saving.set(i18n(`${this._name}.SAVING`));
      this._dialog_ref.disableClose = true;
      const item_json = item.toJSON ? item.toJSON() : item;
      const form_value = __spreadValues({}, this.formModel());
      if (form_value.root_path) {
        form_value.root_path = form_value.root_path.replace(/^\/+|\/+$/g, "");
      }
      if (item.id) {
        delete form_value.folder_name;
      }
      const form_item = item.id ? ni(__spreadValues(__spreadValues({}, item_json), form_value), [void 0]) : __spreadValues(__spreadValues({}, item_json), form_value);
      try {
        const _item = await (form_item.id ? Ic(form_item.id, form_item) : Ec(form_item));
        this._dialog_ref.disableClose = false;
        this.event.emit({ reason: "done", metadata: { item: _item } });
        notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
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
  setFollow(value) {
    this.follow_latest.set(value);
    if (value) {
      this.formModel.update((model) => __spreadProps(__spreadValues({}, model), {
        commit_hash: "HEAD"
      }));
    } else if (this.formModel().commit_hash === "HEAD") {
      this.formModel.update((model) => __spreadProps(__spreadValues({}, model), {
        commit_hash: this.commit_list()[1]?.hash || ""
      }));
    }
  }
  markCredentialsBlur() {
    this.credentials_blur.update((value) => value + 1);
  }
  togglePassword() {
    this.show_password.update((value) => !value);
  }
  setBranchOpen(open) {
    if (!open)
      return;
    this.branch_filter.set("");
    this.timeout("focus_branch_search", () => this._branch_search_el()?.nativeElement.focus());
  }
  setCommitOpen(open) {
    if (!open)
      return;
    this.commit_filter.set("");
    this.timeout("focus_commit_search", () => this._commit_search_el()?.nativeElement.focus());
  }
  _setupBranchAndCommitStreams() {
    effect(() => {
      void this._repository_uri();
      void this.credentials_blur();
      this.timeout("repository_branches", () => this._loadBranches(), 300);
    }, { injector: this._injector });
    effect(() => {
      void this._repository_uri();
      void this._repository_branch();
      void this.credentials_blur();
      this.timeout("repository_commits", () => this._loadCommits(), 300);
    }, { injector: this._injector });
  }
  async _loadBranches() {
    const { id, uri, username, password } = this.formModel();
    if (!id && (!isValidUrl(uri) || !uri.startsWith("http"))) {
      this.branch_list.set([]);
      return;
    }
    this.loading_branches.set(true);
    try {
      const list = await (id ? zc(id) : wc({
        repository_url: uri,
        username,
        password
      })).catch(() => []);
      this.branch_list.set(list);
      const branch = await this._loadDefaultBranch();
      if (branch && (!this.formModel().branch || !list.includes(this.formModel().branch))) {
        this.formModel.update((model) => __spreadProps(__spreadValues({}, model), { branch }));
      }
    } finally {
      this.loading_branches.set(false);
    }
  }
  async _loadDefaultBranch() {
    const { id, uri, username, password } = this.formModel();
    return (id ? Fc(id) : isValidUrl(uri) && uri.startsWith("http") ? Cc({
      repository_url: uri,
      username,
      password
    }) : Promise.resolve("")).catch(() => "");
  }
  async _loadCommits() {
    const { id, uri, branch, username, password } = this.formModel();
    if (!id && (!isValidUrl(uri) || !uri.startsWith("http") || !branch)) {
      this.commit_list.set([
        {
          hash: "HEAD",
          subject: "Latest commit on the branch"
        }
      ]);
      return;
    }
    this.loading_commits.set(true);
    try {
      const list = await (id ? Hc(id, { branch }) : Nc({
        repository_url: uri,
        username,
        password,
        branch
      })).catch(() => []);
      const commit_list = [
        {
          hash: "HEAD",
          subject: "Latest commit on the branch"
        },
        ...list.map((commit) => this._normaliseCommit(commit))
      ];
      this.commit_list.set(commit_list);
      this.base_commit.set(commit_list.find((commit) => commit.hash === this.formModel().commit_hash) || commit_list[0]);
    } finally {
      this.loading_commits.set(false);
    }
  }
  _normaliseCommit(commit) {
    return __spreadProps(__spreadValues({}, commit), {
      hash: commit.commit,
      subject: commit.subject || commit.commit
    });
  }
  async newSettings(item, settings_string) {
    const new_settings = new Pe({
      parent_id: item.id,
      settings_string,
      encryption_level: ze.Support
    });
    await ua(new_settings).catch((err) => {
      this.saving.set(null);
      notifyError(`Error saving settings for ${item.name || item.id}. Error: ${JSON.stringify(err.response || err.message || err)}`);
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RepositoryFormComponent_BaseFactory;
    return function RepositoryFormComponent_Factory(__ngFactoryType__) {
      return (\u0275RepositoryFormComponent_BaseFactory || (\u0275RepositoryFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RepositoryFormComponent)))(__ngFactoryType__ || _RepositoryFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RepositoryFormComponent, selectors: [["repository-form"]], viewQuery: function RepositoryFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._branch_search_el, _c0, 5)(ctx._commit_search_el, _c1, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 3, consts: [["branch_search", ""], ["commit_search", ""], [3, "save", "heading", "loading"], ["repository", "", 1, "flex", "flex-col"], [1, "field"], [1, "fieldset"], ["for", "repository-name"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], ["for", "type"], [3, "formField"], [3, "value"], ["for", "folder-name"], ["for", "uri"], ["matInput", "", 3, "blur", "placeholder", "formField"], ["for", "repo-u"], ["matInput", "", "autocomplete", "off", 3, "blur", "placeholder", "formField"], ["for", "repo-p"], ["matInput", "", "autocomplete", "new-password", 3, "blur", "type", "placeholder", "formField"], ["type", "button", "matSuffix", "", 3, "click"], [3, "openedChange", "formField", "placeholder"], [1, "bg-base-100", "sticky", "-top-2", "z-20"], ["type", "search", "name", "branch-search", 1, "option-search-input", "focus:bg-info/10", "pointer-events-auto", "absolute", "inset-1", "h-auto", "cursor-text", "rounded-sm", "p-4", 3, "ngModelChange", "mousedown", "click", "keydown", "ngModel", "ngModelOptions", "placeholder"], ["matSuffix", "", 1, "suffix", "ml-2"], ["diameter", "24"], [1, "field", "commit"], ["for", "commit"], ["placeholder", "Select commit", 3, "openedChange", "formField"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1", "truncate"], [1, "bg-base-200", "mr-4!", "rounded-sm", "px-1.5", "font-mono", "text-[0.625rem]"], ["type", "search", "name", "commit-search", 1, "option-search-input", "focus:bg-info/10", "pointer-events-auto", "absolute", "inset-1", "h-auto", "cursor-text", "rounded-sm", "p-4", 3, "ngModelChange", "mousedown", "click", "keydown", "ngModel", "ngModelOptions", "placeholder"], ["label", "Follow latest commit", 1, "mb-4", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex", "w-[calc(100%-2.20rem)]", "flex-1", "items-center", "space-x-2", 3, "click"], [1, "flex", "w-px", "flex-1", "flex-col", "truncate", "leading-tight"], [1, "truncate", "text-sm", 3, "matTooltip"], [1, "text-base-content", "truncate", "font-mono", "text-[0.625rem]", "opacity-30"], [1, "bg-base-200", "rounded-sm", "p-1", "text-xs"], ["for", "description"], ["for", "root-path"]], template: function RepositoryFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 2);
      \u0275\u0275listener("save", function RepositoryFormComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(1, RepositoryFormComponent_Conditional_1_Template, 13, 10, "form", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", ctx.heading())("loading", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form ? 1 : -1);
    }
  }, dependencies: [
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatSuffix,
    MatInputModule,
    MatInput,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    FormField,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    MatSelectModule,
    MatSelect,
    MatSelectTrigger,
    MatOption,
    MatTooltipModule,
    MatTooltip,
    IconComponent,
    SettingsToggleComponent,
    FullscreenModalShellComponent,
    TranslatePipe,
    DatePipe,
    SlicePipe
  ], styles: ["\n.option-search-input[_ngcontent-%COMP%] {\n  width: calc(100% - 0.5rem);\n  outline: none;\n}\n.option-search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--base-400, currentColor);\n  opacity: 0.65;\n}\n/*# sourceMappingURL=repository-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepositoryFormComponent, [{
    type: Component,
    args: [{ selector: "repository-form", template: `
        <fullscreen-modal-shell
            [heading]="heading()"
            [loading]="saving()"
            (save)="submit()"
        >
            @if (form) {
                <form repository class="flex flex-col">
                    @if (form.name) {
                        <div class="field">
                            <label
                                for="repository-name"
                                [class.error]="
                                    form.name().invalid() &&
                                    form.name().touched()
                                "
                            >
                                {{ 'COMMON.FIELD_NAME' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'COMMON.FIELD_NAME' | translate
                                    "
                                    [formField]="form.name"
                                />
                                <mat-error>{{
                                    'REPOS.NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    <div class="fieldset">
                        @if (
                            !is_editing() && form.repo_type && form.folder_name
                        ) {
                            <div class="field">
                                <label for="type">
                                    {{ 'REPOS.TYPE' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <mat-select [formField]="form.repo_type">
                                        @for (
                                            type of repo_types();
                                            track type
                                        ) {
                                            <mat-option [value]="type.id">
                                                {{ type.name }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        }
                        @if (!is_editing() && form.folder_name) {
                            <div class="field">
                                <label
                                    for="folder-name"
                                    [class.error]="
                                        form.folder_name().invalid() &&
                                        form.folder_name().touched()
                                    "
                                >
                                    {{ 'REPOS.FOLDER_NAME' | translate
                                    }}<span>*</span>
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [placeholder]="
                                            'REPOS.FOLDER_NAME' | translate
                                        "
                                        [formField]="form.folder_name"
                                    />
                                    <mat-error>{{
                                        'REPOS.FOLDER_NAME_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    @if (form.uri && !hide_uri) {
                        <div class="field">
                            <label
                                for="uri"
                                [class.error]="
                                    form.uri().invalid() && form.uri().touched()
                                "
                            >
                                {{ 'REPOS.URI' | translate }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="'REPOS.URI' | translate"
                                    [formField]="form.uri"
                                    (blur)="markCredentialsBlur()"
                                />
                                <mat-error>{{
                                    'REPOS.URI_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    <div class="fieldset">
                        @if (form.username) {
                            <div class="field">
                                <label for="repo-u"
                                    >{{ 'REPOS.USERNAME' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        autocomplete="off"
                                        [placeholder]="
                                            'REPOS.USERNAME' | translate
                                        "
                                        [formField]="form.username"
                                        (blur)="markCredentialsBlur()"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @if (form.password) {
                            <div class="field">
                                <label for="repo-p">
                                    {{ 'REPOS.PASSWORD' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        autocomplete="new-password"
                                        [type]="
                                            show_password()
                                                ? 'text'
                                                : 'password'
                                        "
                                        [placeholder]="
                                            'COMMON.PASSWORD' | translate
                                        "
                                        [formField]="form.password"
                                        (blur)="markCredentialsBlur()"
                                    />
                                    <button
                                        type="button"
                                        matSuffix
                                        (click)="togglePassword()"
                                    >
                                        <icon>visibility</icon>
                                    </button>
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    @if (form.branch) {
                        <div class="field">
                            <label
                                for="repository-name"
                                [class.error]="
                                    form.branch().invalid() &&
                                    form.branch().touched()
                                "
                            >
                                {{ 'REPOS.BRANCH' | translate }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    [formField]="form.branch"
                                    [placeholder]="'Select Branch'"
                                    (openedChange)="setBranchOpen($event)"
                                >
                                    <mat-option
                                        class="bg-base-100 sticky -top-2 z-20"
                                    >
                                        <input
                                            #branch_search
                                            type="search"
                                            name="branch-search"
                                            [ngModel]="branch_filter()"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            (ngModelChange)="
                                                branch_filter.set($event)
                                            "
                                            (mousedown)="
                                                $event.stopPropagation()
                                            "
                                            (click)="$event.stopPropagation()"
                                            (keydown)="$event.stopPropagation()"
                                            class="option-search-input focus:bg-info/10 pointer-events-auto absolute inset-1 h-auto cursor-text rounded-sm p-4"
                                            [placeholder]="
                                                'COMMON.SEARCH_FOR'
                                                    | translate
                                                        : { name: 'branches' }
                                            "
                                            [attr.aria-label]="
                                                'COMMON.SEARCH_FOR'
                                                    | translate
                                                        : { name: 'branches' }
                                            "
                                        />
                                    </mat-option>
                                    @for (
                                        branch of filtered_branch_list();
                                        track branch
                                    ) {
                                        <mat-option [value]="branch">
                                            {{ branch }}
                                        </mat-option>
                                    }
                                </mat-select>
                                @if (loading_branches()) {
                                    <div class="suffix ml-2" matSuffix>
                                        <mat-spinner diameter="24" />
                                    </div>
                                }
                                <mat-error>{{
                                    'REPOS.BRANCH_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (is_interface()) {
                        <div class="field commit">
                            <label for="commit">
                                {{ 'REPOS.COMMIT' | translate }}</label
                            >
                            <mat-form-field appearance="outline">
                                <mat-select
                                    [formField]="form.commit_hash"
                                    placeholder="Select commit"
                                    (openedChange)="setCommitOpen($event)"
                                >
                                    <mat-select-trigger>
                                        <div
                                            class="flex items-center space-x-4"
                                        >
                                            <div class="flex-1 truncate">
                                                {{
                                                    base_commit()?.subject ||
                                                        'Latest commit'
                                                }}
                                            </div>
                                            <div
                                                class="bg-base-200 mr-4! rounded-sm px-1.5 font-mono text-[0.625rem]"
                                            >
                                                {{
                                                    formModel().commit_hash ||
                                                        'HEAD' | slice: 0 : 8
                                                }}
                                            </div>
                                        </div>
                                    </mat-select-trigger>
                                    <mat-option
                                        class="bg-base-100 sticky -top-2 z-20"
                                    >
                                        <input
                                            #commit_search
                                            type="search"
                                            name="commit-search"
                                            [ngModel]="commit_filter()"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            (ngModelChange)="
                                                commit_filter.set($event)
                                            "
                                            (mousedown)="
                                                $event.stopPropagation()
                                            "
                                            (click)="$event.stopPropagation()"
                                            (keydown)="$event.stopPropagation()"
                                            class="option-search-input focus:bg-info/10 pointer-events-auto absolute inset-1 h-auto cursor-text rounded-sm p-4"
                                            [placeholder]="
                                                'COMMON.SEARCH_FOR'
                                                    | translate
                                                        : { name: 'commits' }
                                            "
                                            [attr.aria-label]="
                                                'COMMON.SEARCH_FOR'
                                                    | translate
                                                        : { name: 'commits' }
                                            "
                                        />
                                    </mat-option>
                                    @for (
                                        commit of filtered_commit_list();
                                        track commit
                                    ) {
                                        <mat-option [value]="commit.hash">
                                            <!-- eslint-disable @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/interactive-supports-focus -->
                                            <div
                                                class="flex w-[calc(100%-2.20rem)] flex-1 items-center space-x-2"
                                                [class.w-full!]="
                                                    formModel().commit_hash ===
                                                    commit.hash
                                                "
                                                (click)="
                                                    base_commit.set(commit)
                                                "
                                            >
                                                <div
                                                    class="flex w-px flex-1 flex-col truncate leading-tight"
                                                >
                                                    <div
                                                        class="truncate text-sm"
                                                        [matTooltip]="
                                                            commit.subject
                                                        "
                                                    >
                                                        {{ commit.subject }}
                                                    </div>
                                                    <div
                                                        class="text-base-content truncate font-mono text-[0.625rem] opacity-30"
                                                    >
                                                        {{
                                                            commit.date
                                                                | date: 'medium'
                                                        }}
                                                    </div>
                                                </div>
                                                @if (commit.author) {
                                                    <code
                                                        class="bg-base-200 rounded-sm p-1 text-xs"
                                                        >{{
                                                            commit.author
                                                        }}</code
                                                    >
                                                }
                                                <code
                                                    class="bg-base-200 rounded-sm p-1 text-xs"
                                                    >{{
                                                        commit.hash
                                                            | slice: 0 : 8
                                                    }}</code
                                                >
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                                @if (loading_commits()) {
                                    <div class="suffix ml-2" matSuffix>
                                        <mat-spinner diameter="24" />
                                    </div>
                                }
                            </mat-form-field>
                        </div>
                        <div class="field">
                            <settings-toggle
                                label="Follow latest commit"
                                class="mb-4"
                                [ngModel]="follow_latest()"
                                [ngModelOptions]="{ standalone: true }"
                                (ngModelChange)="setFollow($event)"
                            />
                        </div>
                    }
                    @if (form.description) {
                        <div class="field">
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
                        </div>
                    }
                    @if (form.root_path) {
                        <div class="field">
                            <label for="root-path">
                                {{ 'REPOS.ROOT_PATH' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'REPOS.ROOT_PATH' | translate
                                    "
                                    [formField]="form.root_path"
                                />
                            </mat-form-field>
                        </div>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `, imports: [
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      FormField,
      TranslatePipe,
      FormsModule,
      MatSelectModule,
      MatTooltipModule,
      IconComponent,
      SettingsToggleComponent,
      FullscreenModalShellComponent,
      DatePipe,
      SlicePipe
    ], styles: ["/* angular:styles/component:css;3b46df56f0a5e3974cdadd860fc19de61797233e1e86004c5c25e4e286271137;/home/runner/work/backoffice/backoffice/src/app/repositories/repository-form.component.ts */\n.option-search-input {\n  width: calc(100% - 0.5rem);\n  outline: none;\n}\n.option-search-input::placeholder {\n  color: var(--base-400, currentColor);\n  opacity: 0.65;\n}\n/*# sourceMappingURL=repository-form.component.css.map */\n"] }]
  }], null, { event: [{
    type: Output
  }], _branch_search_el: [{ type: ViewChild, args: ["branch_search", { isSignal: true }] }], _commit_search_el: [{ type: ViewChild, args: ["commit_search", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepositoryFormComponent, { className: "RepositoryFormComponent", filePath: "src/app/repositories/repository-form.component.ts", lineNumber: 491 });
})();
export {
  RepositoryFormComponent
};
//# sourceMappingURL=chunk-F3QCWPGB.js.map

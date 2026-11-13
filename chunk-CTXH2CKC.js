import {
  applyRepositoryFormSchema,
  generateRepositoryFormModel
} from "./chunk-YPARZYKH.js";
import {
  isValidUrl
} from "./chunk-WKU6NAJG.js";
import {
  mergeFormItem,
  onSaveHotkey,
  submitFormDialog
} from "./chunk-NA6URCKI.js";
import {
  FullscreenModalShellComponent
} from "./chunk-5PVJFQI3.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-AEEAYNFO.js";
import "./chunk-BGDKOWYJ.js";
import "./chunk-ARF53UMV.js";
import {
  SpinnerComponent
} from "./chunk-WWSSYZEA.js";
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
import {
  SelectComponent,
  SelectTriggerDirective
} from "./chunk-XLCDDNWX.js";
import {
  OptionComponent
} from "./chunk-CH2YF4Y7.js";
import {
  FormFieldComponent
} from "./chunk-O2B7KTSR.js";
import {
  FormField,
  disabled,
  form
} from "./chunk-SSVO7UC4.js";
import {
  DefaultValueAccessor,
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
  Gc,
  Kc,
  Os,
  Qc,
  Vc,
  Xc,
  Yc,
  Zc,
  jc
} from "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-JEKJ3JY5.js";
import "./chunk-QY7ZA5QE.js";
import {
  TooltipDirective
} from "./chunk-ERJVBWAI.js";
import "./chunk-POM3EJZY.js";
import "./chunk-UVK6APTK.js";
import "./chunk-QNK6X2WC.js";
import {
  DatePipe,
  SlicePipe
} from "./chunk-BRT76G6A.js";
import {
  Component,
  EventEmitter,
  Injector,
  Output,
  ViewChild,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  viewChild,
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
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

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
    \u0275\u0275elementStart(6, "app-form-field")(7, "input", 7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 8);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "REPOS.NAME_REQUIRED"), " ");
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_3_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 11);
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
    \u0275\u0275elementStart(4, "app-form-field")(5, "app-select", 10);
    \u0275\u0275controlCreate();
    \u0275\u0275repeaterCreate(6, RepositoryFormComponent_Conditional_1_Conditional_3_For_7_Template, 2, 2, "app-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
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
    \u0275\u0275elementStart(6, "app-form-field")(7, "input", 13);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 8);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "REPOS.FOLDER_NAME_REQUIRED"), " ");
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-form-field")(7, "input", 15);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275listener("blur", function RepositoryFormComponent_Conditional_1_Conditional_5_Template_input_blur_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markCredentialsBlur());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 8);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "REPOS.URI_REQUIRED"), " ");
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 17);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275listener("blur", function RepositoryFormComponent_Conditional_1_Conditional_7_Template_input_blur_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markCredentialsBlur());
    });
    \u0275\u0275elementEnd()()();
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
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 19);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275listener("blur", function RepositoryFormComponent_Conditional_1_Conditional_8_Template_input_blur_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markCredentialsBlur());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 20);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("click", function RepositoryFormComponent_Conditional_1_Conditional_8_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.togglePassword($event));
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "visibility");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "REPOS.PASSWORD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r0.show_password() ? "text" : "password")("placeholder", \u0275\u0275pipeBind1(6, 8, "COMMON.PASSWORD"))("formField", ctx_r0.form.password);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 10, "COMMON.PASSWORD_TOGGLE"))("aria-pressed", ctx_r0.show_password());
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_9_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 11);
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
function RepositoryFormComponent_Conditional_1_Conditional_9_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "app-spinner", 27);
    \u0275\u0275elementEnd();
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-form-field")(7, "app-select", 22);
    \u0275\u0275controlCreate();
    \u0275\u0275listener("openedChange", function RepositoryFormComponent_Conditional_1_Conditional_9_Template_app_select_openedChange_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setBranchOpen($event));
    });
    \u0275\u0275elementStart(8, "div", 23)(9, "input", 24, 0);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275controlCreate();
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
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 25);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, RepositoryFormComponent_Conditional_1_Conditional_9_For_17_Template, 2, 2, "app-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, RepositoryFormComponent_Conditional_1_Conditional_9_Conditional_18_Template, 2, 0, "div", 26);
    \u0275\u0275elementStart(19, "div", 8);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.branch().invalid() && ctx_r0.form.branch().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 12, "REPOS.BRANCH"));
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r0.form.branch)("placeholder", "Select Branch");
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.branch_filter())("ngModelOptions", \u0275\u0275pureFunction0(25, _c2))("placeholder", \u0275\u0275pipeBind2(11, 14, "COMMON.SEARCH_FOR", \u0275\u0275pureFunction0(26, _c3)));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(12, 17, "COMMON.SEARCH_FOR", \u0275\u0275pureFunction0(27, _c3)));
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 20, "COMMON.SEARCH_EMPTY", \u0275\u0275pureFunction0(28, _c3)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.filtered_branch_list());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.loading_branches() ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 23, "REPOS.BRANCH_REQUIRED"), " ");
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_10_For_22_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const commit_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(commit_r10.author);
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_10_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-option", 11)(1, "div", 36);
    \u0275\u0275listener("click", function RepositoryFormComponent_Conditional_1_Conditional_10_For_22_Template_div_click_1_listener() {
      const commit_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.base_commit.set(commit_r10));
    });
    \u0275\u0275elementStart(2, "div", 37)(3, "div", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 39);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, RepositoryFormComponent_Conditional_1_Conditional_10_For_22_Conditional_8_Template, 2, 1, "code", 40);
    \u0275\u0275elementStart(9, "code", 40);
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
    \u0275\u0275property("appTooltip", commit_r10.subject);
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
function RepositoryFormComponent_Conditional_1_Conditional_10_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "app-spinner", 27);
    \u0275\u0275elementEnd();
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "app-select", 30);
    \u0275\u0275controlCreate();
    \u0275\u0275listener("openedChange", function RepositoryFormComponent_Conditional_1_Conditional_10_Template_app_select_openedChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setCommitOpen($event));
    });
    \u0275\u0275elementStart(6, "app-select-trigger")(7, "div", 31)(8, "div", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 33);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "slice");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 23)(14, "input", 34, 1);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275controlCreate();
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
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p", 25);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(21, RepositoryFormComponent_Conditional_1_Conditional_10_For_22_Template, 12, 15, "app-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, RepositoryFormComponent_Conditional_1_Conditional_10_Conditional_23_Template, 2, 0, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 4)(25, "settings-toggle", 35);
    \u0275\u0275controlCreate();
    \u0275\u0275listener("ngModelChange", function RepositoryFormComponent_Conditional_1_Conditional_10_Template_settings_toggle_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setFollow($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 12, "REPOS.COMMIT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.commit_hash);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.base_commit()?.subject || "Latest commit", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(12, 14, ctx_r0.formModel().commit_hash || "HEAD", 0, 8), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r0.commit_filter())("ngModelOptions", \u0275\u0275pureFunction0(27, _c2))("placeholder", \u0275\u0275pipeBind2(16, 18, "COMMON.SEARCH_FOR", \u0275\u0275pureFunction0(28, _c4)));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(17, 21, "COMMON.SEARCH_FOR", \u0275\u0275pureFunction0(29, _c4)));
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 24, "COMMON.SEARCH_EMPTY", \u0275\u0275pureFunction0(30, _c4)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.filtered_commit_list());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.loading_commits() ? 23 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.follow_latest())("ngModelOptions", \u0275\u0275pureFunction0(31, _c2));
    \u0275\u0275control();
  }
}
function RepositoryFormComponent_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 41);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "textarea", 42);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
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
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 44);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
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
    \u0275\u0275conditionalCreate(8, RepositoryFormComponent_Conditional_1_Conditional_8_Template, 11, 12, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, RepositoryFormComponent_Conditional_1_Conditional_9_Template, 22, 29, "div", 4);
    \u0275\u0275conditionalCreate(10, RepositoryFormComponent_Conditional_1_Conditional_10_Template, 26, 32);
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
  _dialog_ref = inject(DialogRef);
  _data = inject(DIALOG_DATA);
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
    () => this.formModel().repo_type === Os.Interface,
    ...ngDevMode ? [{ debugName: "is_interface" }] : (
      /* istanbul ignore next */
      []
    )
  );
  get hide_uri() {
    return !this.is_interface() && this.formModel().id;
  }
  constructor() {
    super();
    onSaveHotkey(() => this.submit());
  }
  ngOnInit() {
    const item = this._data.item;
    const edit = !!item.id;
    this.heading.set(i18n(`${this._name}.${edit ? "EDIT" : "NEW"}`));
    this.repo_types.set([
      { id: Os.Driver, name: i18n("REPOS.TYPE_DRIVER") },
      {
        id: Os.Interface,
        name: i18n("REPOS.TYPE_INTERFACE")
      }
    ]);
    this.follow_latest.set(this.formModel().commit_hash === "HEAD");
    this.is_editing.set(!!this.formModel().id);
    this._setupBranchAndCommitStreams();
  }
  async submit() {
    await submitFormDialog(this.form, {
      loading: this.saving,
      event: this.event,
      close: () => this._dialog_ref.close()
    }, `${this._name}.`, () => {
      if (!this.formModel().branch) {
        notifyError(i18n(`${this._name}.BRANCH_REQUIRED`));
        return void 0;
      }
      const item = this._data.item;
      const form_value = __spreadValues({}, this.formModel());
      if (form_value.root_path) {
        form_value.root_path = form_value.root_path.replace(/^\/+|\/+$/g, "");
      }
      if (item.id) {
        delete form_value.folder_name;
      }
      const form_item = mergeFormItem(item, form_value);
      return form_item.id ? jc(form_item.id, form_item) : Gc(form_item);
    });
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
  /** Show or hide the password. Stops the click so the form field does not focus the input. */
  togglePassword(event) {
    event.stopPropagation();
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
      const list = await (id ? Yc(id) : Kc({
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
    return (id ? Xc(id) : isValidUrl(uri) && uri.startsWith("http") ? Qc({
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
      const list = await (id ? Vc(id, { branch }) : Zc({
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
  static \u0275fac = function RepositoryFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RepositoryFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RepositoryFormComponent, selectors: [["repository-form"]], viewQuery: function RepositoryFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._branch_search_el, _c0, 5)(ctx._commit_search_el, _c1, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 3, consts: [["branch_search", ""], ["commit_search", ""], [3, "save", "heading", "loading"], ["repository", "", 1, "flex", "flex-col"], [1, "field"], [1, "fieldset"], ["for", "repository-name"], ["id", "repository-name", 3, "placeholder", "formField"], ["error", ""], ["for", "repo-type", "id", "repo-type-label"], ["id", "repo-type", "aria-labelledby", "repo-type-label", 3, "formField"], [3, "value"], ["for", "folder-name"], ["id", "folder-name", 3, "placeholder", "formField"], ["for", "uri"], ["id", "uri", 3, "blur", "placeholder", "formField"], ["for", "repo-u"], ["autocomplete", "off", "id", "repo-u", 3, "blur", "placeholder", "formField"], ["for", "repo-p"], ["autocomplete", "new-password", "id", "repo-p", 3, "blur", "type", "placeholder", "formField"], ["type", "button", "suffix", "", 3, "click"], ["for", "branch", "id", "branch-label"], ["id", "branch", "aria-labelledby", "branch-label", 3, "openedChange", "formField", "placeholder"], ["select-search", ""], ["type", "search", "name", "branch-search", 3, "ngModelChange", "mousedown", "click", "keydown", "ngModel", "ngModelOptions", "placeholder"], ["select-empty", ""], ["suffix", "", 1, "suffix", "ml-2"], ["diameter", "24"], [1, "field", "commit"], ["for", "commit", "id", "commit-label"], ["id", "commit", "aria-labelledby", "commit-label", "placeholder", "Select commit", 3, "openedChange", "formField"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1", "truncate"], [1, "bg-base-200", "mr-4!", "rounded-sm", "px-1.5", "font-mono", "text-[0.625rem]"], ["type", "search", "name", "commit-search", 3, "ngModelChange", "mousedown", "click", "keydown", "ngModel", "ngModelOptions", "placeholder"], ["label", "Follow latest commit", 1, "mb-4", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex", "w-[calc(100%-2.20rem)]", "flex-1", "items-center", "space-x-2", 3, "click"], [1, "flex", "w-px", "flex-1", "flex-col", "truncate", "leading-tight"], [1, "truncate", "text-sm", 3, "appTooltip"], [1, "text-base-content", "truncate", "font-mono", "text-[0.625rem]", "opacity-30"], [1, "bg-base-200", "rounded-sm", "p-1", "text-xs"], ["for", "description"], ["id", "description", 3, "placeholder", "formField"], ["for", "root-path"], ["id", "root-path", 3, "placeholder", "formField"]], template: function RepositoryFormComponent_Template(rf, ctx) {
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
    SpinnerComponent,
    TooltipDirective,
    SelectTriggerDirective,
    OptionComponent,
    SelectComponent,
    FormFieldComponent,
    FormField,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    IconComponent,
    SettingsToggleComponent,
    FullscreenModalShellComponent,
    TranslatePipe,
    DatePipe,
    SlicePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepositoryFormComponent, [{
    type: Component,
    args: [{
      selector: "repository-form",
      template: `
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
                            <app-form-field>
                                <input
                                    [placeholder]="
                                        'COMMON.FIELD_NAME' | translate
                                    "
                                    id="repository-name"
                                    [formField]="form.name"
                                />
                                <div error>
                                    {{ 'REPOS.NAME_REQUIRED' | translate }}
                                </div>
                            </app-form-field>
                        </div>
                    }
                    <div class="fieldset">
                        @if (
                            !is_editing() && form.repo_type && form.folder_name
                        ) {
                            <div class="field">
                                <label for="repo-type" id="repo-type-label">
                                    {{ 'REPOS.TYPE' | translate }}
                                </label>
                                <app-form-field>
                                    <app-select
                                        id="repo-type"
                                        aria-labelledby="repo-type-label"
                                        [formField]="form.repo_type"
                                    >
                                        @for (
                                            type of repo_types();
                                            track type
                                        ) {
                                            <app-option [value]="type.id">
                                                {{ type.name }}
                                            </app-option>
                                        }
                                    </app-select>
                                </app-form-field>
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
                                <app-form-field>
                                    <input
                                        [placeholder]="
                                            'REPOS.FOLDER_NAME' | translate
                                        "
                                        id="folder-name"
                                        [formField]="form.folder_name"
                                    />
                                    <div error>
                                        {{
                                            'REPOS.FOLDER_NAME_REQUIRED'
                                                | translate
                                        }}
                                    </div>
                                </app-form-field>
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
                            <app-form-field>
                                <input
                                    [placeholder]="'REPOS.URI' | translate"
                                    id="uri"
                                    [formField]="form.uri"
                                    (blur)="markCredentialsBlur()"
                                />
                                <div error>
                                    {{ 'REPOS.URI_REQUIRED' | translate }}
                                </div>
                            </app-form-field>
                        </div>
                    }
                    <div class="fieldset">
                        @if (form.username) {
                            <div class="field">
                                <label for="repo-u"
                                    >{{ 'REPOS.USERNAME' | translate }}
                                </label>
                                <app-form-field>
                                    <input
                                        autocomplete="off"
                                        [placeholder]="
                                            'REPOS.USERNAME' | translate
                                        "
                                        id="repo-u"
                                        [formField]="form.username"
                                        (blur)="markCredentialsBlur()"
                                    />
                                </app-form-field>
                            </div>
                        }
                        @if (form.password) {
                            <div class="field">
                                <label for="repo-p">
                                    {{ 'REPOS.PASSWORD' | translate }}
                                </label>
                                <app-form-field>
                                    <input
                                        autocomplete="new-password"
                                        [type]="
                                            show_password()
                                                ? 'text'
                                                : 'password'
                                        "
                                        [placeholder]="
                                            'COMMON.PASSWORD' | translate
                                        "
                                        id="repo-p"
                                        [formField]="form.password"
                                        (blur)="markCredentialsBlur()"
                                    />
                                    <button
                                        type="button"
                                        suffix
                                        [attr.aria-label]="
                                            'COMMON.PASSWORD_TOGGLE' | translate
                                        "
                                        [attr.aria-pressed]="show_password()"
                                        (click)="togglePassword($event)"
                                    >
                                        <icon>visibility</icon>
                                    </button>
                                </app-form-field>
                            </div>
                        }
                    </div>
                    @if (form.branch) {
                        <div class="field">
                            <label
                                for="branch"
                                id="branch-label"
                                [class.error]="
                                    form.branch().invalid() &&
                                    form.branch().touched()
                                "
                            >
                                {{ 'REPOS.BRANCH' | translate }}<span>*</span>
                            </label>
                            <app-form-field>
                                <app-select
                                    id="branch"
                                    aria-labelledby="branch-label"
                                    [formField]="form.branch"
                                    [placeholder]="'Select Branch'"
                                    (openedChange)="setBranchOpen($event)"
                                >
                                    <div select-search>
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
                                    </div>
                                    <p select-empty>
                                        {{
                                            'COMMON.SEARCH_EMPTY'
                                                | translate
                                                    : { name: 'branches' }
                                        }}
                                    </p>
                                    @for (
                                        branch of filtered_branch_list();
                                        track branch
                                    ) {
                                        <app-option [value]="branch">
                                            {{ branch }}
                                        </app-option>
                                    }
                                </app-select>
                                @if (loading_branches()) {
                                    <div class="suffix ml-2" suffix>
                                        <app-spinner diameter="24" />
                                    </div>
                                }
                                <div error>
                                    {{ 'REPOS.BRANCH_REQUIRED' | translate }}
                                </div>
                            </app-form-field>
                        </div>
                    }
                    @if (is_interface()) {
                        <div class="field commit">
                            <label for="commit" id="commit-label">
                                {{ 'REPOS.COMMIT' | translate }}</label
                            >
                            <app-form-field>
                                <app-select
                                    id="commit"
                                    aria-labelledby="commit-label"
                                    [formField]="form.commit_hash"
                                    placeholder="Select commit"
                                    (openedChange)="setCommitOpen($event)"
                                >
                                    <app-select-trigger>
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
                                    </app-select-trigger>
                                    <div select-search>
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
                                    </div>
                                    <p select-empty>
                                        {{
                                            'COMMON.SEARCH_EMPTY'
                                                | translate: { name: 'commits' }
                                        }}
                                    </p>
                                    @for (
                                        commit of filtered_commit_list();
                                        track commit
                                    ) {
                                        <app-option [value]="commit.hash">
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
                                                        [appTooltip]="
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
                                        </app-option>
                                    }
                                </app-select>
                                @if (loading_commits()) {
                                    <div class="suffix ml-2" suffix>
                                        <app-spinner diameter="24" />
                                    </div>
                                }
                            </app-form-field>
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
                            <app-form-field>
                                <textarea
                                    [placeholder]="
                                        'COMMON.FIELD_DESCRIPTION' | translate
                                    "
                                    id="description"
                                    [formField]="form.description"
                                ></textarea>
                            </app-form-field>
                        </div>
                    }
                    @if (form.root_path) {
                        <div class="field">
                            <label for="root-path">
                                {{ 'REPOS.ROOT_PATH' | translate }}
                            </label>
                            <app-form-field>
                                <input
                                    [placeholder]="
                                        'REPOS.ROOT_PATH' | translate
                                    "
                                    id="root-path"
                                    [formField]="form.root_path"
                                />
                            </app-form-field>
                        </div>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `,
      imports: [
        SpinnerComponent,
        TooltipDirective,
        SelectTriggerDirective,
        OptionComponent,
        SelectComponent,
        FormFieldComponent,
        FormField,
        TranslatePipe,
        FormsModule,
        IconComponent,
        SettingsToggleComponent,
        FullscreenModalShellComponent,
        DatePipe,
        SlicePipe
      ]
    }]
  }], () => [], { event: [{
    type: Output
  }], _branch_search_el: [{ type: ViewChild, args: ["branch_search", { isSignal: true }] }], _commit_search_el: [{ type: ViewChild, args: ["commit_search", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepositoryFormComponent, { className: "RepositoryFormComponent", filePath: "src/app/repositories/repository-form.component.ts", lineNumber: 499 });
})();
export {
  RepositoryFormComponent
};
//# debugId=ad618639-74b9-5f76-b31a-e553033406c0
//# sourceMappingURL=chunk-CTXH2CKC.js.map

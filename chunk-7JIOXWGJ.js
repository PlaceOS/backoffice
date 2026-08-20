import {
  Clipboard
} from "./chunk-7GTI4RRT.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-I55NGSFI.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-N7YQCQZM.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-TH36Z5QV.js";
import {
  notifyInfo
} from "./chunk-IQ5P3T5K.js";
import {
  waitForEvent
} from "./chunk-EVUO4PXU.js";
import {
  AsyncHandler
} from "./chunk-ALQ3QZS6.js";
import {
  MatRippleModule
} from "./chunk-TPBAO5IV.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-ERVNLYZR.js";
import {
  IconComponent
} from "./chunk-4HEIKSFD.js";
import {
  MatRipple
} from "./chunk-43FRBZB3.js";
import {
  Component,
  EventEmitter,
  Output,
  computed,
  inject,
  lastValueFrom,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-LPT3PWXX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/overlays/confirm-modal.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ConfirmModalComponent_Conditional_3_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 13)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275listener("click", function ConfirmModalComponent_Conditional_3_Conditional_1_For_2_Template_button_click_5_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.copyId(item_r3.id));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r3.type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r3.name, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-id", item_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.id, " ");
  }
}
function ConfirmModalComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 6);
    \u0275\u0275repeaterCreate(1, ConfirmModalComponent_Conditional_3_Conditional_1_For_2_Template, 7, 4, "li", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const receipt_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(receipt_r5.items);
  }
}
function ConfirmModalComponent_Conditional_3_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r6.type, " \u2014 ", item_r6.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r6.id, " ");
  }
}
function ConfirmModalComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ConfirmModalComponent_Conditional_3_Conditional_2_For_5_Template, 4, 3, "p", 18, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const receipt_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "CASCADE.RECEIPT_FAILED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(receipt_r5.failed);
  }
}
function ConfirmModalComponent_Conditional_3_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r7.type, " \u2014 ", item_r7.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r7.id, " ");
  }
}
function ConfirmModalComponent_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ConfirmModalComponent_Conditional_3_Conditional_3_For_5_Template, 4, 3, "p", 18, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const receipt_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "CASCADE.RECEIPT_SKIPPED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(receipt_r5.skipped);
  }
}
function ConfirmModalComponent_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const receipt_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(receipt_r5.note);
  }
}
function ConfirmModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275conditionalCreate(1, ConfirmModalComponent_Conditional_3_Conditional_1_Template, 3, 0, "ul", 6);
    \u0275\u0275conditionalCreate(2, ConfirmModalComponent_Conditional_3_Conditional_2_Template, 6, 3, "div", 7);
    \u0275\u0275conditionalCreate(3, ConfirmModalComponent_Conditional_3_Conditional_3_Template, 6, 3, "div", 8);
    \u0275\u0275conditionalCreate(4, ConfirmModalComponent_Conditional_3_Conditional_4_Template, 2, 1, "p", 9);
    \u0275\u0275elementStart(5, "button", 10);
    \u0275\u0275listener("click", function ConfirmModalComponent_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyAll());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "footer", 11)(9, "button", 12);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const receipt_r5 = ctx;
    \u0275\u0275advance();
    \u0275\u0275conditional(receipt_r5.items.length ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(receipt_r5.failed?.length ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(receipt_r5.skipped?.length ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(receipt_r5.note ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, "CASCADE.RECEIPT_COPY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 8, "COMMON.CLOSE"), " ");
  }
}
function ConfirmModalComponent_Conditional_4_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r9.description, " ");
  }
}
function ConfirmModalComponent_Conditional_4_For_5_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "mat-spinner", 29);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "CASCADE.RESOLVING"), " ");
  }
}
function ConfirmModalComponent_Conditional_4_For_5_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.detailsError(option_r9.id), " ");
  }
}
function ConfirmModalComponent_Conditional_4_For_5_Conditional_4_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", line_r10, " ");
  }
}
function ConfirmModalComponent_Conditional_4_For_5_Conditional_4_Conditional_3_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r11);
  }
}
function ConfirmModalComponent_Conditional_4_For_5_Conditional_4_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 30);
    \u0275\u0275repeaterCreate(1, ConfirmModalComponent_Conditional_4_For_5_Conditional_4_Conditional_3_Conditional_2_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const detail_r12 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(detail_r12.summary);
  }
}
function ConfirmModalComponent_Conditional_4_For_5_Conditional_4_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CASCADE.NOTHING"), " ");
  }
}
function ConfirmModalComponent_Conditional_4_For_5_Conditional_4_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", line_r13, " ");
  }
}
function ConfirmModalComponent_Conditional_4_For_5_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ConfirmModalComponent_Conditional_4_For_5_Conditional_4_Conditional_3_For_1_Template, 2, 1, "p", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(2, ConfirmModalComponent_Conditional_4_For_5_Conditional_4_Conditional_3_Conditional_2_Template, 3, 0, "ul", 30)(3, ConfirmModalComponent_Conditional_4_For_5_Conditional_4_Conditional_3_Conditional_3_Template, 3, 3, "p", 31);
    \u0275\u0275repeaterCreate(4, ConfirmModalComponent_Conditional_4_For_5_Conditional_4_Conditional_3_For_5_Template, 2, 1, "p", 32, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const detail_r12 = ctx;
    \u0275\u0275repeater(detail_r12.scope);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(detail_r12.summary?.length ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(detail_r12.warnings);
  }
}
function ConfirmModalComponent_Conditional_4_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275conditionalCreate(1, ConfirmModalComponent_Conditional_4_For_5_Conditional_4_Conditional_1_Template, 5, 3, "div", 27)(2, ConfirmModalComponent_Conditional_4_For_5_Conditional_4_Conditional_2_Template, 2, 1, "p", 28)(3, ConfirmModalComponent_Conditional_4_For_5_Conditional_4_Conditional_3_Template, 6, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const option_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isLoadingDetails(option_r9.id) ? 1 : ctx_r3.detailsError(option_r9.id) ? 2 : (tmp_12_0 = ctx_r3.detailsFor(option_r9.id)) ? 3 : -1, tmp_12_0);
  }
}
function ConfirmModalComponent_Conditional_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "mat-checkbox", 24);
    \u0275\u0275listener("change", function ConfirmModalComponent_Conditional_4_For_5_Template_mat_checkbox_change_1_listener($event) {
      const option_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleOption(option_r9, $event.checked));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ConfirmModalComponent_Conditional_4_For_5_Conditional_3_Template, 2, 1, "p", 25);
    \u0275\u0275conditionalCreate(4, ConfirmModalComponent_Conditional_4_For_5_Conditional_4_Template, 4, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-option", option_r9.id);
    \u0275\u0275advance();
    \u0275\u0275property("name", option_r9.id)("checked", ctx_r3.isSelected(option_r9.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r9.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(option_r9.description ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isSelected(option_r9.id) ? 4 : -1);
  }
}
function ConfirmModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 2);
    \u0275\u0275element(1, "icon", 20)(2, "p", 21)(3, "p", 22);
    \u0275\u0275repeaterCreate(4, ConfirmModalComponent_Conditional_4_For_5_Template, 5, 6, "div", 23, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r3.icon);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r3.content, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275classMap("text-" + ctx_r3.extra[0] + " text-center text-sm");
    \u0275\u0275property("innerHTML", ctx_r3.extra[1], \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.options);
  }
}
function ConfirmModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3)(1, "div", 33);
    \u0275\u0275element(2, "mat-spinner", 34);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.loading());
  }
}
function ConfirmModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 4)(1, "button", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 36);
    \u0275\u0275listener("click", function ConfirmModalComponent_Conditional_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onConfirm());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, ctx_r3.cancel_text), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.resolving() || ctx_r3.blocked());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, ctx_r3.confirm_text), " ");
  }
}
function describeError(error) {
  if (!error)
    return "Unknown error";
  if (typeof error === "string")
    return error;
  if (typeof Response !== "undefined" && error instanceof Response) {
    return `${error.status} ${error.statusText || "request failed"}`.trim();
  }
  const message = error?.message;
  if (message)
    return message;
  const status = error?.status;
  if (status) {
    return `${status} ${error.statusText || "request failed"}`.trim();
  }
  return "Unknown error";
}
function receiptToTsv(result) {
  const rows = [
    ...result.items.map((item) => [item.type, item.name, item.id]),
    ...(result.failed || []).map((item) => [
      item.type,
      item.name,
      item.id,
      "FAILED"
    ]),
    ...(result.skipped || []).map((item) => [
      item.type,
      item.name,
      item.id,
      "SKIPPED"
    ])
  ];
  return rows.map((row) => row.join("	")).join("\n");
}
var CONFIRM_METADATA = {
  height: "auto"
};
async function openConfirmModal(data, dialog) {
  const ref = dialog.open(ConfirmModalComponent, __spreadProps(__spreadValues({}, CONFIRM_METADATA), {
    data
  }));
  return __spreadProps(__spreadValues({}, await Promise.race([
    waitForEvent(ref.componentInstance.event, (_) => _.reason === "done"),
    lastValueFrom(ref.afterClosed())
  ])), {
    loading: (s) => ref.componentInstance.loading.set(s),
    close: () => ref.close()
  });
}
var ConfirmModalComponent = class _ConfirmModalComponent extends AsyncHandler {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  _clipboard = inject(Clipboard);
  /** Loading state */
  loading = signal(
    "",
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Receipt of what the action removed. While set the modal shows the list
   * instead of the confirmation, so the user can read (and copy) the ids
   * rather than watch a notification disappear.
   */
  result = signal(
    null,
    ...ngDevMode ? [{ debugName: "result" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Emitter for user action on the modal */
  event = new EventEmitter();
  /** Title of the confirm modal */
  title = this._data.title || "COMMON.CONFIRM";
  /** Body of the confirm modal */
  content = this._data.content || "Are you sure?";
  /** Body of the confirm modal */
  extra = this._data.extra || ["", ""];
  /** Display text on the confirm button */
  confirm_text = this._data.confirm_text || "COMMON.ACCEPT";
  /** Display text on the cancel button */
  cancel_text = this._data.cancel_text || "COMMON.CANCEL";
  /** Display icon properties */
  icon = this._data.icon || {
    class: "material-symbols-rounded",
    content: "done"
  };
  /** Opt-in toggles offered alongside the confirmation */
  options = this._data.options || [];
  /** Currently enabled options, keyed by option id */
  _selected = signal(
    Object.fromEntries((this._data.options || []).map((option) => [
      option.id,
      !!option.enabled
    ])),
    ...ngDevMode ? [{ debugName: "_selected" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Resolved breakdowns, keyed by option id */
  _details = signal(
    {},
    ...ngDevMode ? [{ debugName: "_details" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Options currently resolving their breakdown */
  _resolving = signal(
    {},
    ...ngDevMode ? [{ debugName: "_resolving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Failures from resolving a breakdown, keyed by option id */
  _errors = signal(
    {},
    ...ngDevMode ? [{ debugName: "_errors" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Whether a *selected* option is still resolving its breakdown. Scoped to
   * the selection on purpose: unticking an option whose lookup is still in
   * flight must release the confirm button rather than hold it until a
   * request nobody is waiting on finally settles.
   */
  resolving = computed(
    () => this.options.some((option) => this._selected()[option.id] && this._resolving()[option.id]),
    ...ngDevMode ? [{ debugName: "resolving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Whether confirmation has to be withheld because a selected option has no
   * usable breakdown. An option that offers `details` is promising to say
   * what it will do; if that resolution failed there is nothing to act on,
   * and confirming would run whatever the caller does *without* the option —
   * which for a cascade delete means removing the parent and orphaning
   * everything the cascade was there to take with it.
   */
  blocked = computed(
    () => this.options.some((option) => !!option.details && this._selected()[option.id] && !this._resolving()[option.id] && !this._details()[option.id]),
    ...ngDevMode ? [{ debugName: "blocked" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isSelected = (id) => !!this._selected()[id];
  isLoadingDetails = (id) => !!this._resolving()[id];
  detailsFor = (id) => this._details()[id];
  detailsError = (id) => this._errors()[id];
  /** Enable or disable an option, resolving its breakdown on first enable */
  toggleOption(option, enabled) {
    this._selected.update((state) => __spreadProps(__spreadValues({}, state), { [option.id]: enabled }));
    if (!enabled)
      return;
    this._resolveDetails(option);
  }
  /** Resolves an option's breakdown, once */
  _resolveDetails(option) {
    if (!option.details || this._details()[option.id])
      return;
    if (this._resolving()[option.id])
      return;
    this._errors.update((state) => __spreadProps(__spreadValues({}, state), { [option.id]: "" }));
    this._resolving.update((state) => __spreadProps(__spreadValues({}, state), { [option.id]: true }));
    option.details().then((details) => this._details.update((state) => __spreadProps(__spreadValues({}, state), {
      [option.id]: details
    }))).catch((error) => this._errors.update((state) => __spreadProps(__spreadValues({}, state), {
      [option.id]: describeError(error)
    }))).finally(() => this._resolving.update((state) => __spreadProps(__spreadValues({}, state), {
      [option.id]: false
    })));
  }
  /** Prevent user from closing the modal */
  disableClose = () => this._dialog_ref.disableClose = true;
  /** Allow the user to close the modal */
  enableClose = () => this._dialog_ref.disableClose = false;
  ngOnInit() {
    for (const option of this.options) {
      if (this._selected()[option.id])
        this._resolveDetails(option);
    }
    if (this._data.close_delay) {
      this.timeout("close", () => this._dialog_ref.close(), this._data.close_delay);
    }
  }
  /** Copy a single resource id to the clipboard */
  copyId(id) {
    this._clipboard.copy(id);
    notifyInfo(i18n("COMMON.COPIED_ID"));
  }
  /** Copy the whole receipt as TSV, for pasting into a ticket */
  copyAll() {
    const receipt = this.result();
    if (!receipt)
      return;
    const count = receipt.items.length + (receipt.failed || []).length + (receipt.skipped || []).length;
    this._clipboard.copy(receiptToTsv(receipt));
    notifyInfo(i18n("CASCADE.RECEIPT_COPIED", { count }, count));
  }
  /** User confirmation of the content of the modal */
  onConfirm() {
    if (this.resolving() || this.blocked())
      return;
    this.event.emit(this.options.length ? { reason: "done", metadata: { options: this._selected() } } : { reason: "done" });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ConfirmModalComponent_BaseFactory;
    return function ConfirmModalComponent_Factory(__ngFactoryType__) {
      return (\u0275ConfirmModalComponent_BaseFactory || (\u0275ConfirmModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ConfirmModalComponent)))(__ngFactoryType__ || _ConfirmModalComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmModalComponent, selectors: [["confirm-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 3, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "items-center", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], [1, "flex", "w-md", "max-w-[85vw]", "flex-col", "items-center", "space-y-4", "p-4", "sm:h-auto"], ["loading", ""], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border-none", "p-2"], ["result", "", 1, "flex", "w-md", "max-w-[85vw]", "flex-col", "space-y-3", "p-4", "sm:h-auto"], ["result-items", "", 1, "divide-base-200", "border-base-200", "max-h-80", "divide-y", "overflow-auto", "rounded-sm", "border"], ["result-failed", "", 1, "border-error/40", "bg-error/10", "space-y-1", "rounded-sm", "border", "p-2"], ["result-skipped", "", 1, "border-base-300", "bg-base-200", "space-y-1", "rounded-sm", "border", "p-2"], [1, "text-xs", "opacity-70"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "items-center", "justify-center", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "name", "close", "mat-dialog-close", "", 1, "flex-1"], [1, "flex", "items-center", "space-x-2", "px-3", "py-2"], [1, "bg-base-200", "shrink-0", "rounded-xl", "px-2", "py-1", "text-xs", "uppercase"], [1, "flex-1", "truncate", "text-sm"], [1, "mono", "shrink-0", "text-xs", "opacity-70", "hover:opacity-100", 3, "click"], [1, "text-xs", "font-medium"], [1, "text-xs"], [1, "mono", "opacity-70"], [1, "text-5xl", 3, "icon"], ["content", "", 1, "text-center", 3, "innerHTML"], ["extra", "", 3, "innerHTML"], ["confirm-option", "", 1, "border-base-200", "bg-base-200/40", "w-full", "space-y-2", "rounded-sm", "border", "p-3"], [3, "change", "name", "checked"], [1, "pl-8", "text-xs", "opacity-70"], [1, "pl-8", "text-sm"], ["details-loading", "", 1, "flex", "items-center", "space-x-2", "opacity-60"], [1, "text-error", "text-xs"], ["diameter", "16"], ["details-summary", "", 1, "list-disc", "pl-4"], ["details-empty", "", 1, "text-xs", "opacity-60"], ["details-warning", "", 1, "border-warning", "bg-warning/10", "mt-2", "rounded-sm", "border-l-2", "py-1", "pr-1", "pl-2", "text-xs"], [1, "flex", "h-48", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "p-12"], ["diameter", "32"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "bg-base-100", "flex-1"], ["btn", "", "matRipple", "", "name", "accept", 1, "flex-1", 3, "click", "disabled"]], template: function ConfirmModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(3, ConfirmModalComponent_Conditional_3_Template, 12, 10)(4, ConfirmModalComponent_Conditional_4_Template, 6, 5, "main", 2)(5, ConfirmModalComponent_Conditional_5_Template, 5, 1, "main", 3);
      \u0275\u0275conditionalCreate(6, ConfirmModalComponent_Conditional_6_Template, 7, 7, "footer", 4);
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.result() ? ctx.result().title : ctx.title, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_1_0 = ctx.result()) ? 3 : !ctx.loading() ? 4 : 5, tmp_1_0);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.loading() && !ctx.result() ? 6 : -1);
    }
  }, dependencies: [
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatCheckboxModule,
    MatCheckbox,
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatDialogModule,
    MatDialogClose,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmModalComponent, [{
    type: Component,
    args: [{ selector: "confirm-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex h-14 w-[calc(100%-1rem)] min-w-[20rem] items-center rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ result() ? result().title : title }}
            </h2>
        </header>
        @if (result(); as receipt) {
            <main
                result
                class="flex w-md max-w-[85vw] flex-col space-y-3 p-4 sm:h-auto"
            >
                @if (receipt.items.length) {
                    <ul
                        result-items
                        class="divide-base-200 border-base-200 max-h-80 divide-y overflow-auto rounded-sm border"
                    >
                        @for (item of receipt.items; track item.id) {
                            <li class="flex items-center space-x-2 px-3 py-2">
                                <span
                                    class="bg-base-200 shrink-0 rounded-xl px-2 py-1 text-xs uppercase"
                                >
                                    {{ item.type }}
                                </span>
                                <span class="flex-1 truncate text-sm">
                                    {{ item.name }}
                                </span>
                                <button
                                    class="mono shrink-0 text-xs opacity-70 hover:opacity-100"
                                    [attr.data-id]="item.id"
                                    (click)="copyId(item.id)"
                                >
                                    {{ item.id }}
                                </button>
                            </li>
                        }
                    </ul>
                }
                @if (receipt.failed?.length) {
                    <div
                        result-failed
                        class="border-error/40 bg-error/10 space-y-1 rounded-sm border p-2"
                    >
                        <p class="text-xs font-medium">
                            {{ 'CASCADE.RECEIPT_FAILED' | translate }}
                        </p>
                        @for (item of receipt.failed; track item.id) {
                            <p class="text-xs">
                                {{ item.type }} \u2014 {{ item.name }}
                                <span class="mono opacity-70">
                                    {{ item.id }}
                                </span>
                            </p>
                        }
                    </div>
                }
                @if (receipt.skipped?.length) {
                    <div
                        result-skipped
                        class="border-base-300 bg-base-200 space-y-1 rounded-sm border p-2"
                    >
                        <p class="text-xs font-medium">
                            {{ 'CASCADE.RECEIPT_SKIPPED' | translate }}
                        </p>
                        @for (item of receipt.skipped; track item.id) {
                            <p class="text-xs">
                                {{ item.type }} \u2014 {{ item.name }}
                                <span class="mono opacity-70">
                                    {{ item.id }}
                                </span>
                            </p>
                        }
                    </div>
                }
                @if (receipt.note) {
                    <p class="text-xs opacity-70">{{ receipt.note }}</p>
                }
                <button btn matRipple class="w-full" (click)="copyAll()">
                    {{ 'CASCADE.RECEIPT_COPY' | translate }}
                </button>
            </main>
            <footer
                class="bg-base-200 sticky bottom-0 m-2 flex items-center justify-center rounded-sm border-none p-2"
            >
                <button
                    btn
                    matRipple
                    name="close"
                    class="flex-1"
                    mat-dialog-close
                >
                    {{ 'COMMON.CLOSE' | translate }}
                </button>
            </footer>
        } @else if (!loading()) {
            <main
                class="flex w-md max-w-[85vw] flex-col items-center space-y-4 p-4 sm:h-auto"
            >
                <icon [icon]="icon" class="text-5xl" />
                <p content class="text-center" [innerHTML]="content"></p>
                <p
                    extra
                    [class]="'text-' + extra[0] + ' text-center text-sm'"
                    [innerHTML]="extra[1]"
                ></p>
                @for (option of options; track option.id) {
                    <div
                        confirm-option
                        class="border-base-200 bg-base-200/40 w-full space-y-2 rounded-sm border p-3"
                        [attr.data-option]="option.id"
                    >
                        <mat-checkbox
                            [name]="option.id"
                            [checked]="isSelected(option.id)"
                            (change)="toggleOption(option, $event.checked)"
                        >
                            {{ option.label }}
                        </mat-checkbox>
                        @if (option.description) {
                            <p class="pl-8 text-xs opacity-70">
                                {{ option.description }}
                            </p>
                        }
                        @if (isSelected(option.id)) {
                            <div class="pl-8 text-sm">
                                @if (isLoadingDetails(option.id)) {
                                    <div
                                        details-loading
                                        class="flex items-center space-x-2 opacity-60"
                                    >
                                        <mat-spinner diameter="16" />
                                        <span>
                                            {{
                                                'CASCADE.RESOLVING' | translate
                                            }}
                                        </span>
                                    </div>
                                } @else if (detailsError(option.id)) {
                                    <p class="text-error text-xs">
                                        {{ detailsError(option.id) }}
                                    </p>
                                } @else if (detailsFor(option.id); as detail) {
                                    @for (line of detail.scope; track line) {
                                        <p class="text-xs opacity-70">
                                            {{ line }}
                                        </p>
                                    }
                                    @if (detail.summary?.length) {
                                        <ul
                                            details-summary
                                            class="list-disc pl-4"
                                        >
                                            @for (
                                                line of detail.summary;
                                                track line
                                            ) {
                                                <li>{{ line }}</li>
                                            }
                                        </ul>
                                    } @else {
                                        <p
                                            details-empty
                                            class="text-xs opacity-60"
                                        >
                                            {{ 'CASCADE.NOTHING' | translate }}
                                        </p>
                                    }
                                    @for (line of detail.warnings; track line) {
                                        <!-- The warn colour is a yellow that
                                             only reads on a dark background,
                                             so it tints the block rather than
                                             the text. -->
                                        <p
                                            details-warning
                                            class="border-warning bg-warning/10 mt-2 rounded-sm border-l-2 py-1 pr-1 pl-2 text-xs"
                                        >
                                            {{ line }}
                                        </p>
                                    }
                                }
                            </div>
                        }
                    </div>
                }
            </main>
        } @else {
            <main loading>
                <div
                    class="flex h-48 w-full flex-col items-center justify-center space-y-4 p-12"
                >
                    <mat-spinner diameter="32" />
                    <p>{{ loading() }}</p>
                </div>
            </main>
        }
        @if (!loading() && !result()) {
            <footer
                class="bg-base-200 sticky bottom-0 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse bg-base-100 flex-1"
                    mat-dialog-close
                >
                    {{ cancel_text | translate }}
                </button>
                <button
                    btn
                    matRipple
                    name="accept"
                    class="flex-1"
                    [disabled]="resolving() || blocked()"
                    (click)="onConfirm()"
                >
                    {{ confirm_text | translate }}
                </button>
            </footer>
        }
    `, imports: [
      MatProgressSpinnerModule,
      MatCheckboxModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatDialogModule
    ] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmModalComponent, { className: "ConfirmModalComponent", filePath: "src/app/overlays/confirm-modal.component.ts", lineNumber: 423 });
})();

export {
  describeError,
  CONFIRM_METADATA,
  openConfirmModal,
  ConfirmModalComponent
};
//# sourceMappingURL=chunk-7JIOXWGJ.js.map

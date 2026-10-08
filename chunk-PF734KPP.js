import {
  UploadsService
} from "./chunk-AXHSP3HK.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-TFAOXLJB.js";
import {
  notifyInfo
} from "./chunk-AYJXTTVT.js";
import {
  SettingsService
} from "./chunk-LYZMFOYM.js";
import "./chunk-5RDGWPHM.js";
import "./chunk-WCEMOYFJ.js";
import {
  AsyncHandler
} from "./chunk-NZ7ZPGVU.js";
import {
  MatDialog
} from "./chunk-EZWGQADM.js";
import {
  TranslatePipe
} from "./chunk-5OMVQZOP.js";
import "./chunk-PSYHHKS3.js";
import "./chunk-GORY6HKE.js";
import {
  copyToClipboard
} from "./chunk-SXYVSUAR.js";
import "./chunk-P3FA5CPP.js";
import {
  IconComponent
} from "./chunk-Y7HZB3U4.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-XX3FQFUN.js";
import {
  MatRippleModule
} from "./chunk-5NTI54SQ.js";
import {
  MatRipple
} from "./chunk-YEGFHODJ.js";
import "./chunk-ZVFWHHSJ.js";
import "./chunk-H4IW3C2Y.js";
import "./chunk-DZQDK6ER.js";
import "./chunk-FVPQ6H6W.js";
import {
  DecimalPipe
} from "./chunk-QHKUHZUG.js";
import {
  Component,
  effect,
  inject,
  setClassMetadata,
  signal,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RDM3X2TD.js";
import "./chunk-RQBZITXC.js";

// src/app/ui/upload-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function UploadListComponent_Conditional_0_Conditional_16_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, item_r3.progress, "1.1-1"), "% ");
  }
}
function UploadListComponent_Conditional_0_Conditional_16_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 16);
    \u0275\u0275text(1, " done ");
    \u0275\u0275elementEnd();
  }
}
function UploadListComponent_Conditional_0_Conditional_16_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 17);
    \u0275\u0275text(1, " close ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("matTooltip", item_r3.error);
  }
}
function UploadListComponent_Conditional_0_Conditional_16_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function UploadListComponent_Conditional_0_Conditional_16_For_2_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.copyLink(item_r3));
    });
    \u0275\u0275elementStart(2, "icon", 21);
    \u0275\u0275text(3, "content_copy");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "COMMON.COPY_LINK"));
  }
}
function UploadListComponent_Conditional_0_Conditional_16_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function UploadListComponent_Conditional_0_Conditional_16_For_2_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.retry(item_r3));
    });
    \u0275\u0275elementStart(2, "icon", 21);
    \u0275\u0275text(3, "refresh");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "COMMON.RETRY"));
  }
}
function UploadListComponent_Conditional_0_Conditional_16_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 19);
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", item_r3.progress);
  }
}
function UploadListComponent_Conditional_0_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 12)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, UploadListComponent_Conditional_0_Conditional_16_For_2_Conditional_5_Template, 3, 4, "div", 15);
    \u0275\u0275conditionalCreate(6, UploadListComponent_Conditional_0_Conditional_16_For_2_Conditional_6_Template, 2, 0, "icon", 16);
    \u0275\u0275conditionalCreate(7, UploadListComponent_Conditional_0_Conditional_16_For_2_Conditional_7_Template, 2, 1, "icon", 17);
    \u0275\u0275conditionalCreate(8, UploadListComponent_Conditional_0_Conditional_16_For_2_Conditional_8_Template, 4, 3, "button", 18);
    \u0275\u0275conditionalCreate(9, UploadListComponent_Conditional_0_Conditional_16_For_2_Conditional_9_Template, 4, 3, "button", 18);
    \u0275\u0275conditionalCreate(10, UploadListComponent_Conditional_0_Conditional_16_For_2_Conditional_10_Template, 1, 1, "mat-progress-bar", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275classProp("error", item_r3.error);
    \u0275\u0275property("title", item_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r3.formatted_size, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.progress < 100 && !item_r3.error ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.progress >= 100 && !item_r3.error ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.error ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.progress >= 100 && item_r3.link ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.error ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.progress < 100 && !item_r3.error ? 10 : -1);
  }
}
function UploadListComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275repeaterCreate(1, UploadListComponent_Conditional_0_Conditional_16_For_2_Template, 11, 11, "li", 11, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.uploads());
  }
}
function UploadListComponent_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "icon", 22);
    \u0275\u0275text(2, "cloud_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "COMMON.NO_UPLOADS"));
  }
}
function UploadListComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 6);
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("click", function UploadListComponent_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearList());
    });
    \u0275\u0275elementStart(10, "icon");
    \u0275\u0275text(11, "clear_all");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 8);
    \u0275\u0275listener("click", function UploadListComponent_Conditional_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show.set(false));
    });
    \u0275\u0275elementStart(13, "icon");
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 9);
    \u0275\u0275conditionalCreate(16, UploadListComponent_Conditional_0_Conditional_16_Template, 3, 0, "ul")(17, UploadListComponent_Conditional_0_Conditional_17_Template, 6, 3, "div", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "COMMON.UPLOADS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.uploads().length || "0", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(9, 6, "COMMON.CLEAR_UPLOADS"));
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.uploads().length ? 16 : 17);
  }
}
function UploadListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("dragend", function UploadListComponent_Conditional_2_Template_div_dragend_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_overlay.set(false));
    })("dragleave", function UploadListComponent_Conditional_2_Template_div_dragleave_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_overlay.set(false));
    })("drop", function UploadListComponent_Conditional_2_Template_div_drop_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleFileEvent($event));
    });
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275elementStart(2, "div", 25)(3, "icon", 26);
    \u0275\u0275text(4, " cloud_upload ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 28);
    \u0275\u0275listener("change", function UploadListComponent_Conditional_2_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleFileEvent($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 1, "COMMON.DROP_UPLOAD_MSG"), " ");
  }
}
var UploadListComponent = class _UploadListComponent extends AsyncHandler {
  _settings = inject(SettingsService);
  _uploads = inject(UploadsService);
  _dialog = inject(MatDialog);
  /** Whether upload list should be displayed */
  show = signal(
    false,
    ...ngDevMode ? [{ debugName: "show" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether drop details overlay should be shown */
  show_overlay = signal(
    false,
    ...ngDevMode ? [{ debugName: "show_overlay" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether normal cloud uploads should ignore file drag/drop events */
  disabled = signal(
    false,
    ...ngDevMode ? [{ debugName: "disabled" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of uploads */
  uploads = this._uploads.upload_list;
  _show_upload_manager = this._settings.listen("show_upload_manager");
  _disable_uploads = this._settings.listen("disable_uploads");
  constructor() {
    super();
    effect(() => this.show.set(!!this._show_upload_manager()));
    effect(() => {
      const disabled = !!this._disable_uploads();
      this.disabled.set(disabled);
      if (disabled)
        this.show_overlay.set(false);
    });
  }
  ngOnInit() {
    this.subscription("on_dialog_open", this._dialog.afterOpened.subscribe(() => {
      this._settings.post("disable_uploads", true);
    }));
    this.subscription("on_dialog_closed", this._dialog.afterAllClosed.subscribe(() => {
      this._settings.post("disable_uploads", false);
    }));
  }
  onEnter(e) {
    if (this.disabled()) {
      this.show_overlay.set(false);
      return;
    }
    this.show_overlay.set(e?.dataTransfer?.types.includes("Files"));
  }
  hideOverlay() {
    this.timeout("hide_overlay", () => this.show_overlay.set(false));
  }
  clearList() {
    this._uploads.clearList();
  }
  /** Upload the image to the cloud */
  handleFileEvent(event) {
    if (this.disabled()) {
      this.show_overlay.set(false);
      return;
    }
    this.clearTimeout("hide_overlay");
    this.timeout("file_event", () => {
      this.show_overlay.set(false);
      const element = event.target;
      if (element?.files) {
        const files = element.files;
        if (files.length) {
          this.show.set(true);
          for (let i = 0; i < files.length; i++) {
            this._uploads.uploadFileWithPermissions(files[i]).catch(() => null);
          }
        }
      }
    });
  }
  /**
   * Copy the uploaded access URL to the clipboard
   * @param details Details of the successful upload
   */
  copyLink(details) {
    copyToClipboard(details.link);
    notifyInfo(`Copied link for file ${details.name} to clipboard.`);
  }
  /**
   * Retry a failed upload
   * @param details Details of the failed upload
   */
  retry(details) {
    if (details.error) {
      details.error = null;
      details.upload.resume();
    }
  }
  static \u0275fac = function UploadListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UploadListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploadListComponent, selectors: [["app-upload-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 2, consts: [["upload-list", "", 1, "border-base-300", "bg-base-100", "text-base-content", "pointer-events-auto", "absolute", "bottom-2", "left-2", "overflow-hidden", "rounded-sm", "border", "text-sm", "shadow-sm"], [1, "fixed", "inset-0", 3, "dragenter", "drop"], ["dropzone", "", 1, "fixed", "inset-0"], [1, "bg-base-200", "text-base-content", "flex", "items-center", "gap-2", "p-2"], [1, "px-2", "text-lg", "font-medium"], [1, "mono", "border-base-100", "bg-base-300", "rounded-full", "border", "px-2", "py-1", "text-xs"], [1, "flex-1"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 3, "click"], ["list", "", 1, "max-h-[65vh]", "overflow-auto"], [1, "m-auto", "flex", "w-full", "flex-col", "items-center", "space-y-4", "p-8", "opacity-30"], ["upload-file", "", 1, "hover:bg-base-200", "relative", "my-1", "flex", "h-12", "items-center", "space-x-2", "px-2", 3, "error", "title"], ["upload-file", "", 1, "hover:bg-base-200", "relative", "my-1", "flex", "h-12", "items-center", "space-x-2", "px-2", 3, "title"], [1, "w-1/2", "flex-1", "truncate", "pl-2"], [1, "size", "mr-2", "w-20", "text-right", "font-mono", "text-sm"], [1, "progress", "font-mono"], [1, "bg-success", "text-base-100", "rounded-full", "text-xl"], [1, "bg-error", "text-base-100", "rounded-full", "text-xl", 3, "matTooltip"], ["icon", "", "default", "", "matRipple", "", "matTooltipPosition", "right", 3, "matTooltip"], ["mode", "determinate", 1, "absolute", "inset-x-0", "bottom-0", "mx-0!", 3, "value"], ["icon", "", "default", "", "matRipple", "", "matTooltipPosition", "right", 3, "click", "matTooltip"], [1, "text-2xl"], [1, "text-4xl"], ["dropzone", "", 1, "fixed", "inset-0", 3, "dragend", "dragleave", "drop"], [1, "bg-base-content", "absolute", "inset-0", "z-0", "opacity-60"], [1, "pointer-events-none", "absolute", "bottom-0", "left-1/2", "flex", "-translate-x-1/2", "transform", "flex-col", "items-center", "p-4"], [1, "text-base-100", "mb-4", "animate-bounce", "text-7xl"], [1, "bg-base-100", "text-base-content", "rounded-sm", "p-4", "shadow-sm"], ["type", "file", "multiple", "", 1, "pointer-events-auto", "absolute", "inset-0", "z-9999", "w-full", "opacity-0", 3, "change"]], template: function UploadListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, UploadListComponent_Conditional_0_Template, 18, 8, "div", 0);
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("dragenter", function UploadListComponent_Template_div_dragenter_1_listener($event) {
        return ctx.onEnter($event);
      }, \u0275\u0275resolveDocument)("drop", function UploadListComponent_Template_div_drop_1_listener() {
        return ctx.hideOverlay();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(2, UploadListComponent_Conditional_2_Template, 9, 3, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.show() ? 0 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.show_overlay() ? 2 : -1);
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatProgressBarModule,
    MatProgressBar,
    MatTooltipModule,
    MatTooltip,
    TranslatePipe,
    DecimalPipe
  ], styles: ["\n[_nghost-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n[upload-list][_ngcontent-%COMP%] {\n  width: 32rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=upload-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadListComponent, [{
    type: Component,
    args: [{ selector: "app-upload-list", template: `
        @if (show()) {
            <div
                upload-list
                class="border-base-300 bg-base-100 text-base-content pointer-events-auto absolute bottom-2 left-2 overflow-hidden rounded-sm border text-sm shadow-sm"
            >
                <div
                    class="bg-base-200 text-base-content flex items-center gap-2 p-2"
                >
                    <div class="px-2 text-lg font-medium">
                        {{ 'COMMON.UPLOADS' | translate }}
                    </div>
                    <div
                        class="mono border-base-100 bg-base-300 rounded-full border px-2 py-1 text-xs"
                    >
                        {{ uploads().length || '0' }}
                    </div>
                    <div class="flex-1"></div>
                    <button
                        icon
                        default
                        matRipple
                        (click)="clearList()"
                        [matTooltip]="'COMMON.CLEAR_UPLOADS' | translate"
                    >
                        <icon>clear_all</icon>
                    </button>
                    <button icon matRipple (click)="show.set(false)">
                        <icon>close</icon>
                    </button>
                </div>
                <div list class="max-h-[65vh] overflow-auto">
                    @if (uploads().length) {
                        <ul>
                            @for (item of uploads(); track item.id) {
                                <li
                                    upload-file
                                    class="hover:bg-base-200 relative my-1 flex h-12 items-center space-x-2 px-2"
                                    [class.error]="item.error"
                                    [title]="item.name"
                                >
                                    <div class="w-1/2 flex-1 truncate pl-2">
                                        {{ item.name }}
                                    </div>
                                    <div
                                        class="size mr-2 w-20 text-right font-mono text-sm"
                                    >
                                        {{ item.formatted_size }}
                                    </div>
                                    @if (item.progress < 100 && !item.error) {
                                        <div class="progress font-mono">
                                            {{
                                                item.progress | number: '1.1-1'
                                            }}%
                                        </div>
                                    }
                                    @if (item.progress >= 100 && !item.error) {
                                        <icon
                                            class="bg-success text-base-100 rounded-full text-xl"
                                        >
                                            done
                                        </icon>
                                    }
                                    @if (item.error) {
                                        <icon
                                            class="bg-error text-base-100 rounded-full text-xl"
                                            [matTooltip]="item.error"
                                        >
                                            close
                                        </icon>
                                    }
                                    @if (item.progress >= 100 && item.link) {
                                        <button
                                            icon
                                            default
                                            matRipple
                                            [matTooltip]="
                                                'COMMON.COPY_LINK' | translate
                                            "
                                            matTooltipPosition="right"
                                            (click)="copyLink(item)"
                                        >
                                            <icon class="text-2xl"
                                                >content_copy</icon
                                            >
                                        </button>
                                    }
                                    @if (item.error) {
                                        <button
                                            icon
                                            default
                                            matRipple
                                            matTooltipPosition="right"
                                            [matTooltip]="
                                                'COMMON.RETRY' | translate
                                            "
                                            (click)="retry(item)"
                                        >
                                            <icon class="text-2xl"
                                                >refresh</icon
                                            >
                                        </button>
                                    }
                                    @if (item.progress < 100 && !item.error) {
                                        <mat-progress-bar
                                            class="absolute inset-x-0 bottom-0 mx-0!"
                                            mode="determinate"
                                            [value]="item.progress"
                                        />
                                    }
                                </li>
                            }
                        </ul>
                    } @else {
                        <div
                            class="m-auto flex w-full flex-col items-center space-y-4 p-8 opacity-30"
                        >
                            <icon class="text-4xl">cloud_off</icon>
                            <p>{{ 'COMMON.NO_UPLOADS' | translate }}</p>
                        </div>
                    }
                </div>
            </div>
        }
        <div
            class="fixed inset-0"
            (document:dragenter)="onEnter($event)"
            (drop)="hideOverlay()"
        ></div>
        @if (show_overlay()) {
            <div
                class="fixed inset-0"
                dropzone
                (dragend)="show_overlay.set(false)"
                (dragleave)="show_overlay.set(false)"
                (drop)="handleFileEvent($event)"
            >
                <div
                    class="bg-base-content absolute inset-0 z-0 opacity-60"
                ></div>
                <div
                    class="pointer-events-none absolute bottom-0 left-1/2 flex -translate-x-1/2 transform flex-col items-center p-4"
                >
                    <icon class="text-base-100 mb-4 animate-bounce text-7xl">
                        cloud_upload
                    </icon>
                    <div
                        class="bg-base-100 text-base-content rounded-sm p-4 shadow-sm"
                    >
                        {{ 'COMMON.DROP_UPLOAD_MSG' | translate }}
                    </div>
                </div>
                <input
                    class="pointer-events-auto absolute inset-0 z-9999 w-full opacity-0"
                    type="file"
                    multiple
                    (change)="handleFileEvent($event)"
                />
            </div>
        }
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatProgressBarModule,
      MatTooltipModule,
      DecimalPipe
    ], styles: ["/* angular:styles/component:css;718dcd01f875d00ec29dd2a5b05b455147e97149118a0543eb67a28069a10c01;/home/runner/work/backoffice/backoffice/src/app/ui/upload-list.component.ts */\n:host {\n  position: absolute;\n  pointer-events: none;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n[upload-list] {\n  width: 32rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=upload-list.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploadListComponent, { className: "UploadListComponent", filePath: "src/app/ui/upload-list.component.ts", lineNumber: 206 });
})();
export {
  UploadListComponent
};
//# sourceMappingURL=chunk-PF734KPP.js.map

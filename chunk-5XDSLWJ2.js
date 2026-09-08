import {
  AuthenticatedImageDirective
} from "./chunk-7WLVZASV.js";
import {
  Clipboard
} from "./chunk-SPOLLM5K.js";
import {
  UploadsService
} from "./chunk-MR336GRL.js";
import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-KCV6DKPB.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-XSKTF7KU.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-YBDRHXOO.js";
import {
  notifyInfo
} from "./chunk-IQ5P3T5K.js";
import {
  AsyncHandler
} from "./chunk-Z6WA4HOG.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-NTN47BNT.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-YNW2ZIUP.js";
import {
  MatRippleModule
} from "./chunk-DJWSVGV7.js";
import {
  TranslatePipe
} from "./chunk-4WEZYQJI.js";
import {
  IconComponent
} from "./chunk-KMXZ3OKY.js";
import {
  COMMA,
  ENTER,
  MatRipple
} from "./chunk-BZNLRQXM.js";
import {
  unique
} from "./chunk-7A2HMJBQ.js";
import {
  Component,
  ViewChild,
  computed,
  effect,
  forwardRef,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-4QIQTM3T.js";

// src/app/ui/custom-fields/image-list-field.component.ts
var _c0 = ["image_list"];
var _forTrack0 = ($index, $item) => $item.id;
function ImageListFieldComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "img", 13);
    \u0275\u0275elementStart(2, "div", 14);
    \u0275\u0275element(3, "div", 15);
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function ImageListFieldComponent_For_10_Template_button_click_5_listener() {
      const url_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyLink(url_r2));
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, "link");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 17);
    \u0275\u0275listener("click", function ImageListFieldComponent_For_10_Template_button_click_8_listener() {
      const url_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewImage(url_r2));
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 18);
    \u0275\u0275listener("click", function ImageListFieldComponent_For_10_Template_button_click_11_listener() {
      const url_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeImage(url_r2));
    });
    \u0275\u0275elementStart(12, "icon");
    \u0275\u0275text(13, "close");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const url_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", "translate(-" + ctx_r2.offset() + "00%)");
    \u0275\u0275advance();
    \u0275\u0275property("source", url_r2)("alt", "Preview - " + url_r2);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r2.disabled());
  }
}
function ImageListFieldComponent_For_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 20);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", item_r5.progress)("diameter", 64);
  }
}
function ImageListFieldComponent_For_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 21);
    \u0275\u0275text(1, "warning");
    \u0275\u0275elementEnd();
  }
}
function ImageListFieldComponent_For_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "icon", 23);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd()();
  }
}
function ImageListFieldComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function ImageListFieldComponent_For_12_Template_button_click_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.retryUpload(item_r5));
    });
    \u0275\u0275conditionalCreate(1, ImageListFieldComponent_For_12_Conditional_1_Template, 1, 2, "mat-progress-spinner", 20);
    \u0275\u0275conditionalCreate(2, ImageListFieldComponent_For_12_Conditional_2_Template, 2, 0, "icon", 21);
    \u0275\u0275conditionalCreate(3, ImageListFieldComponent_For_12_Conditional_3_Template, 3, 0, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", "translate(-" + ctx_r2.offset() + "00%)");
    \u0275\u0275property("matTooltip", item_r5.error);
    \u0275\u0275advance();
    \u0275\u0275conditional(!item_r5.error ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r5.error ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r5.error ? 3 : -1);
  }
}
function ImageListFieldComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function ImageListFieldComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.decrement());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 25);
    \u0275\u0275listener("click", function ImageListFieldComponent_Conditional_13_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.increment());
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.offset() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.offset() >= ctx_r2.length() - ctx_r2.view_space());
  }
}
function ImageListFieldComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 26);
    \u0275\u0275listener("removed", function ImageListFieldComponent_For_18_Template_mat_chip_row_removed_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeImage(item_r8));
    });
    \u0275\u0275elementStart(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 28)(4, "icon");
    \u0275\u0275text(5, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.disabled());
    \u0275\u0275attribute("aria-label", "Remove " + item_r8);
  }
}
var ImageListFieldComponent = class _ImageListFieldComponent extends AsyncHandler {
  _clipboard = inject(Clipboard);
  _uploads = inject(UploadsService);
  /** List of images */
  list = signal(
    [],
    ...ngDevMode ? [{ debugName: "list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of images */
  upload_ids = signal(
    [],
    ...ngDevMode ? [{ debugName: "upload_ids" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _upload_list = signal(
    [],
    ...ngDevMode ? [{ debugName: "_upload_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  upload_list = this._upload_list;
  offset = signal(
    0,
    ...ngDevMode ? [{ debugName: "offset" }] : (
      /* istanbul ignore next */
      []
    )
  );
  view_space = signal(
    0,
    ...ngDevMode ? [{ debugName: "view_space" }] : (
      /* istanbul ignore next */
      []
    )
  );
  disabled = signal(
    false,
    ...ngDevMode ? [{ debugName: "disabled" }] : (
      /* istanbul ignore next */
      []
    )
  );
  separators = [COMMA, ENTER];
  length = computed(
    () => this.list().length + this.upload_list().length + 1,
    ...ngDevMode ? [{ debugName: "length" }] : (
      /* istanbul ignore next */
      []
    )
  );
  uploads = computed(
    () => {
      const ids = this.upload_ids();
      return this.upload_list().filter((i) => ids.includes(i.id));
    },
    ...ngDevMode ? [{ debugName: "uploads" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _list_el = viewChild(
    "image_list",
    ...ngDevMode ? [{ debugName: "_list_el" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Form control on change handler */
  _onChange;
  /** Form control on touch handler */
  _onTouch;
  constructor() {
    super();
    effect(() => {
      const list = this.upload_list();
      const id_list = this.upload_ids();
      for (const id of id_list) {
        const item = list.find((_) => _.id === id);
        if (item && item.progress >= 100) {
          this.addImageUrl(item.link);
          this.upload_ids.update((ids) => ids.filter((_) => _ !== id));
        }
      }
    });
  }
  ngAfterViewInit() {
    const box = this._list_el().nativeElement.getBoundingClientRect();
    this.view_space.set(Math.floor(box.width / 152));
  }
  increment() {
    this.offset.update((o) => o + 1);
  }
  decrement() {
    this.offset.update((o) => o - 1);
  }
  copyLink(url) {
    this._clipboard.copy(url);
    notifyInfo("Copied image URL to clipboard");
  }
  viewImage(_url) {
  }
  removeImage(url) {
    if (this.disabled())
      return;
    this.setValue(this.list().filter((_) => _ !== url));
  }
  addImage(event) {
    if (this.disabled())
      return;
    if (!event.value)
      return;
    this.setValue(unique([...this.list(), event.value]));
    event.chipInput.inputElement.value = "";
  }
  addImageUrl(url) {
    if (this.disabled())
      return;
    this.setValue(unique([...this.list(), url]));
  }
  retryUpload(item) {
    if (this.disabled())
      return;
    if (item.error) {
      item.error = null;
      item.upload.resume();
    }
  }
  async uploadImages(event) {
    if (this.disabled())
      return;
    const element = event.target;
    if (element?.files) {
      const files = element.files;
      if (files.length) {
        this.interval("update_status", () => this._updateUploadHistory());
        for (let i = 0; i < files.length; i++) {
          const id = await this._uploads.uploadFileWithPermissions(files[i]);
          this.upload_ids.update((list) => [...list, id]);
        }
      }
    }
  }
  setValue(value) {
    if (this.disabled())
      return;
    this.list.set(value);
    if (this._onChange)
      this._onChange(value);
    this._onTouch?.(value);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.list.set(value || []);
  }
  registerOnChange = (fn) => this._onChange = fn;
  registerOnTouched = (fn) => this._onTouch = fn;
  setDisabledState(disabled) {
    this.disabled.set(disabled);
  }
  async _updateUploadHistory() {
    const list = this.upload_ids();
    if (list.length === 0)
      return;
    const global_list = this._uploads.upload_list();
    const new_list = global_list.filter((_) => list.find((i) => i === _.id));
    const done_list = new_list.filter((file) => file.progress >= 100);
    this._upload_list.set(new_list);
    done_list.forEach((i) => delete i.upload);
    if (done_list.length >= list.length)
      this.clearInterval("update_status");
  }
  static \u0275fac = function ImageListFieldComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImageListFieldComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageListFieldComponent, selectors: [["image-list-field"]], viewQuery: function ImageListFieldComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._list_el, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _ImageListFieldComponent),
      multi: true
    }
  ]), \u0275\u0275InheritDefinitionFeature], decls: 21, vars: 18, consts: [["image_list", ""], ["chipList", ""], ["images", "", 1, "relative", "mb-2", "flex", "w-full", "items-center", "space-x-2", "overflow-hidden", "py-2", 3, "resize"], ["image", "", 1, "hover:bg-base-content/10", ":bg-base-100/10", "border-base-200", "relative", "flex", "h-32", "w-36", "shrink-0", "cursor-pointer", "flex-col", "items-center", "justify-center", "rounded-sm", "border-2", "border-dashed"], [1, "text-4xl", "opacity-60"], [1, "w-4/5", "text-center", "opacity-60"], ["type", "file", 1, "absolute", "inset-0", "h-32", "w-32", "cursor-pointer", "opacity-0", 3, "change", "disabled"], ["image", "", 1, "border-base-300", "bg-base-200", "relative", "h-32", "w-36", "shrink-0", "overflow-hidden", "rounded-sm", "border", 3, "transform"], ["type", "button", "image", "", 1, "border-base-content/10", "/5", "bg-base-200", "flex", "h-32", "w-36", "shrink-0", "items-center", "justify-center", "rounded-sm", "border", "bg-cover", "bg-center", 3, "transform", "matTooltip"], ["appearance", "outline", 1, "w-full"], ["aria-label", "Image List"], [3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "disabled"], ["image", "", 1, "border-base-300", "bg-base-200", "relative", "h-32", "w-36", "shrink-0", "overflow-hidden", "rounded-sm", "border"], ["auth", "", 1, "pointer-events-none", "absolute", "inset-0", "z-10", "object-contain", "p-2", "text-center", "align-middle", "text-xs", 3, "source", "alt"], ["overlay", "", 1, "text-base-100", "absolute", "inset-0", "z-20"], ["bg", "", 1, "absolute", "inset-0", "bg-black", "opacity-0"], ["actions", "", 1, "absolute", "top-0", "right-0", "left-0", "flex", "items-center", "justify-center", "space-x-2", "opacity-0"], ["type", "button", "icon", "", 3, "click"], ["type", "button", "icon", "", 3, "click", "disabled"], ["type", "button", "image", "", 1, "border-base-content/10", "/5", "bg-base-200", "flex", "h-32", "w-36", "shrink-0", "items-center", "justify-center", "rounded-sm", "border", "bg-cover", "bg-center", 3, "click", "matTooltip"], ["mode", "determinate", 3, "value", "diameter"], [1, "text-error", "text-6xl"], ["overlay", "", 1, "text-base-100", "hover:bg-base-content", "hover:bg-opacity-50", "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "text-3xl", "opacity-0"], ["type", "button", "icon", "", "matRipple", "", 1, "bg-base-100", "absolute", "top-1/2", "left-0", "-translate-y-1/2", "transform", 3, "click", "disabled"], ["type", "button", "icon", "", "matRipple", "", 1, "bg-base-100", "absolute", "top-1/2", "right-0", "-translate-y-1/2", "transform", 3, "click", "disabled"], [3, "removed"], [1, "max-w-md", "truncate"], ["type", "button", "matChipRemove", "", 3, "disabled"]], template: function ImageListFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2, 0);
      \u0275\u0275listener("resize", function ImageListFieldComponent_Template_div_resize_0_listener() {
        return ctx.ngAfterViewInit();
      }, \u0275\u0275resolveWindow);
      \u0275\u0275elementStart(2, "div", 3)(3, "icon", 4);
      \u0275\u0275text(4, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 6);
      \u0275\u0275listener("change", function ImageListFieldComponent_Template_input_change_8_listener($event) {
        return ctx.uploadImages($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(9, ImageListFieldComponent_For_10_Template, 14, 5, "div", 7, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275repeaterCreate(11, ImageListFieldComponent_For_12_Template, 4, 6, "button", 8, _forTrack0);
      \u0275\u0275conditionalCreate(13, ImageListFieldComponent_Conditional_13_Template, 6, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "mat-form-field", 9)(15, "mat-chip-grid", 10, 1);
      \u0275\u0275repeaterCreate(17, ImageListFieldComponent_For_18_Template, 6, 3, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 11);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275listener("matChipInputTokenEnd", function ImageListFieldComponent_Template_input_matChipInputTokenEnd_19_listener($event) {
        return ctx.addImage($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const chipList_r9 = \u0275\u0275reference(16);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("transform", "translate(-" + ctx.offset() + "00%)");
      \u0275\u0275classProp("pointer-events-none", ctx.disabled())("opacity-30", ctx.disabled());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 14, "COMMON.IMAGE_UPLOADS"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.disabled());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.list());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.uploads());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.length() > ctx.view_space() ? 13 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.list());
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(20, 16, "COMMON.IMAGE_ADD_URL"))("matChipInputFor", chipList_r9)("matChipInputSeparatorKeyCodes", ctx.separators)("matChipInputAddOnBlur", true)("disabled", ctx.disabled());
    }
  }, dependencies: [
    IconComponent,
    MatFormFieldModule,
    MatFormField,
    MatChipsModule,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
    MatRippleModule,
    MatRipple,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    AuthenticatedImageDirective,
    MatTooltipModule,
    MatTooltip,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n}\n[overlay][_ngcontent-%COMP%] {\n  transition: background 200ms;\n}\n[image][_ngcontent-%COMP%]:hover   [actions][_ngcontent-%COMP%], \n[image][_ngcontent-%COMP%]:hover    > icon[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n}\n[image][_ngcontent-%COMP%]:hover   [bg][_ngcontent-%COMP%] {\n  opacity: 0.4 !important;\n}\n[actions][_ngcontent-%COMP%], \n[image][_ngcontent-%COMP%]    > icon[_ngcontent-%COMP%] {\n  transition: opacity 200ms;\n}\n[image][_ngcontent-%COMP%] {\n  transition: transform 200ms;\n}\n/*# sourceMappingURL=image-list-field.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageListFieldComponent, [{
    type: Component,
    args: [{ selector: "image-list-field", template: `
        <div
            images
            #image_list
            class="relative mb-2 flex w-full items-center space-x-2 overflow-hidden py-2"
            (window:resize)="ngAfterViewInit()"
        >
            <div
                image
                class="hover:bg-base-content/10 :bg-base-100/10 border-base-200 relative flex h-32 w-36 shrink-0 cursor-pointer flex-col items-center justify-center rounded-sm border-2 border-dashed"
                [style.transform]="'translate(-' + offset() + '00%)'"
                [class.pointer-events-none]="disabled()"
                [class.opacity-30]="disabled()"
            >
                <icon class="text-4xl opacity-60">add</icon>
                <p class="w-4/5 text-center opacity-60">
                    {{ 'COMMON.IMAGE_UPLOADS' | translate }}
                </p>
                <input
                    type="file"
                    class="absolute inset-0 h-32 w-32 cursor-pointer opacity-0"
                    [disabled]="disabled()"
                    (change)="uploadImages($event)"
                />
            </div>
            @for (url of list(); track url; let i = $index) {
                <div
                    image
                    class="border-base-300 bg-base-200 relative h-32 w-36 shrink-0 overflow-hidden rounded-sm border"
                    [style.transform]="'translate(-' + offset() + '00%)'"
                >
                    <img
                        auth
                        [source]="url"
                        [alt]="'Preview - ' + url"
                        class="pointer-events-none absolute inset-0 z-10 object-contain p-2 text-center align-middle text-xs"
                    />
                    <div overlay class="text-base-100 absolute inset-0 z-20">
                        <div
                            bg
                            class="absolute inset-0 bg-black opacity-0"
                        ></div>
                        <div
                            actions
                            class="absolute top-0 right-0 left-0 flex items-center justify-center space-x-2 opacity-0"
                        >
                            <button type="button" icon (click)="copyLink(url)">
                                <icon>link</icon>
                            </button>
                            <button type="button" icon (click)="viewImage(url)">
                                <icon>visibility</icon>
                            </button>
                            <button
                                type="button"
                                icon
                                [disabled]="disabled()"
                                (click)="removeImage(url)"
                            >
                                <icon>close</icon>
                            </button>
                        </div>
                    </div>
                </div>
            }
            @for (item of uploads(); track item.id; let i = $index) {
                <button
                    type="button"
                    image
                    class="border-base-content/10 /5 bg-base-200 flex h-32 w-36 shrink-0 items-center justify-center rounded-sm border bg-cover bg-center"
                    [style.transform]="'translate(-' + offset() + '00%)'"
                    [matTooltip]="item.error"
                    (click)="retryUpload(item)"
                >
                    @if (!item.error) {
                        <mat-progress-spinner
                            [value]="item.progress"
                            [diameter]="64"
                            mode="determinate"
                        />
                    }
                    @if (item.error) {
                        <icon class="text-error text-6xl">warning</icon>
                    }
                    @if (item.error) {
                        <div
                            overlay
                            class="text-base-100 hover:bg-base-content hover:bg-opacity-50 absolute inset-0 flex items-center justify-center"
                        >
                            <icon class="text-3xl opacity-0">refresh</icon>
                        </div>
                    }
                </button>
            }
            @if (length() > view_space()) {
                <button
                    type="button"
                    icon
                    matRipple
                    [disabled]="offset() === 0"
                    class="bg-base-100 absolute top-1/2 left-0 -translate-y-1/2 transform"
                    (click)="decrement()"
                >
                    <icon>chevron_left</icon>
                </button>
                <button
                    type="button"
                    icon
                    matRipple
                    [disabled]="offset() >= length() - view_space()"
                    class="bg-base-100 absolute top-1/2 right-0 -translate-y-1/2 transform"
                    (click)="increment()"
                >
                    <icon>chevron_right</icon>
                </button>
            }
        </div>
        <mat-form-field appearance="outline" class="w-full">
            <mat-chip-grid #chipList aria-label="Image List">
                @for (item of list(); track item) {
                    <mat-chip-row (removed)="removeImage(item)">
                        <div class="max-w-md truncate">{{ item }}</div>
                        <button
                            type="button"
                            matChipRemove
                            [attr.aria-label]="'Remove ' + item"
                            [disabled]="disabled()"
                        >
                            <icon>cancel</icon>
                        </button>
                    </mat-chip-row>
                }
            </mat-chip-grid>
            <input
                [placeholder]="'COMMON.IMAGE_ADD_URL' | translate"
                [matChipInputFor]="chipList"
                [matChipInputSeparatorKeyCodes]="separators"
                [matChipInputAddOnBlur]="true"
                [disabled]="disabled()"
                (matChipInputTokenEnd)="addImage($event)"
            />
        </mat-form-field>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ImageListFieldComponent),
        multi: true
      }
    ], imports: [
      TranslatePipe,
      IconComponent,
      MatFormFieldModule,
      MatChipsModule,
      MatRippleModule,
      MatProgressSpinnerModule,
      AuthenticatedImageDirective,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;95dcaaaa826894df5bf437b6ea5774f7f209a30340873d0fad154aed06b72211;/home/runner/work/backoffice/backoffice/src/app/ui/custom-fields/image-list-field.component.ts */\n:host {\n  width: 100%;\n}\n[overlay] {\n  transition: background 200ms;\n}\n[image]:hover [actions],\n[image]:hover > icon {\n  opacity: 1 !important;\n}\n[image]:hover [bg] {\n  opacity: 0.4 !important;\n}\n[actions],\n[image] > icon {\n  transition: opacity 200ms;\n}\n[image] {\n  transition: transform 200ms;\n}\n/*# sourceMappingURL=image-list-field.component.css.map */\n"] }]
  }], () => [], { _list_el: [{ type: ViewChild, args: ["image_list", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageListFieldComponent, { className: "ImageListFieldComponent", filePath: "src/app/ui/custom-fields/image-list-field.component.ts", lineNumber: 221 });
})();

export {
  ImageListFieldComponent
};
//# sourceMappingURL=chunk-5XDSLWJ2.js.map

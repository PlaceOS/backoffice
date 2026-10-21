import {
  describeError
} from "./chunk-T3O7QHHC.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-M3XU23PA.js";
import {
  notifyInfo
} from "./chunk-PK5A7L3I.js";
import {
  waitForEvent
} from "./chunk-WZTE63Q5.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-GAHHDLCB.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-NBJYZGNA.js";
import {
  IconComponent
} from "./chunk-AWTACVQN.js";
import {
  MatRippleModule
} from "./chunk-6DV7MASG.js";
import {
  MatRipple
} from "./chunk-LWFSYFOG.js";
import {
  BidiModule,
  _getAnimationsState
} from "./chunk-UROHCZFR.js";
import {
  NgTemplateOutlet
} from "./chunk-4LBKZFUW.js";
import {
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  Service,
  ViewChild,
  ViewEncapsulation,
  computed,
  effect,
  inject,
  lastValueFrom,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefineService,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-OQOLG7V4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// node_modules/@angular/material/fesm2022/progress-spinner.mjs
var _c0 = ["determinateSpinner"];
function MatProgressSpinner_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "circle", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("viewBox", ctx_r0._viewBox());
    \u0275\u0275advance();
    \u0275\u0275styleProp("stroke-dasharray", ctx_r0._strokeCircumference(), "px")("stroke-dashoffset", ctx_r0._strokeCircumference() / 2, "px")("stroke-width", ctx_r0._circleStrokeWidth(), "%");
    \u0275\u0275attribute("r", ctx_r0._circleRadius());
  }
}
var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new InjectionToken("mat-progress-spinner-default-options", {
  providedIn: "root",
  factory: () => ({
    diameter: BASE_SIZE
  })
});
var BASE_SIZE = 100;
var BASE_STROKE_WIDTH = 10;
var MatProgressSpinner = class _MatProgressSpinner {
  _elementRef = inject(ElementRef);
  _noopAnimations;
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  _defaultColor = "primary";
  _determinateCircle;
  constructor() {
    const defaults = inject(MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS);
    const animationsState = _getAnimationsState();
    const element = this._elementRef.nativeElement;
    this._noopAnimations = animationsState === "di-disabled" && !!defaults && !defaults._forceAnimations;
    this.mode = element.nodeName.toLowerCase() === "mat-spinner" ? "indeterminate" : "determinate";
    if (!this._noopAnimations && animationsState === "reduced-motion") {
      element.classList.add("mat-progress-spinner-reduced-motion");
    }
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      if (defaults.diameter) {
        this.diameter = defaults.diameter;
      }
      if (defaults.strokeWidth) {
        this.strokeWidth = defaults.strokeWidth;
      }
    }
  }
  mode;
  get value() {
    return this.mode === "determinate" ? this._value : 0;
  }
  set value(v) {
    this._value = Math.max(0, Math.min(100, v || 0));
  }
  _value = 0;
  get diameter() {
    return this._diameter;
  }
  set diameter(size) {
    this._diameter = size || 0;
  }
  _diameter = BASE_SIZE;
  get strokeWidth() {
    return this._strokeWidth ?? this.diameter / 10;
  }
  set strokeWidth(value) {
    this._strokeWidth = value || 0;
  }
  _strokeWidth;
  _circleRadius() {
    return (this.diameter - BASE_STROKE_WIDTH) / 2;
  }
  _viewBox() {
    const viewBox = this._circleRadius() * 2 + this.strokeWidth;
    return `0 0 ${viewBox} ${viewBox}`;
  }
  _strokeCircumference() {
    return 2 * Math.PI * this._circleRadius();
  }
  _strokeDashOffset() {
    if (this.mode === "determinate") {
      return this._strokeCircumference() * (100 - this._value) / 100;
    }
    return null;
  }
  _circleStrokeWidth() {
    return this.strokeWidth / this.diameter * 100;
  }
  static \u0275fac = function MatProgressSpinner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressSpinner)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatProgressSpinner,
    selectors: [["mat-progress-spinner"], ["mat-spinner"]],
    viewQuery: function MatProgressSpinner_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._determinateCircle = _t.first);
      }
    },
    hostAttrs: ["role", "progressbar", "tabindex", "-1", 1, "mat-mdc-progress-spinner", "mdc-circular-progress"],
    hostVars: 18,
    hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuemin", 0)("aria-valuemax", 100)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);
        \u0275\u0275classMap("mat-" + ctx.color);
        \u0275\u0275styleProp("width", ctx.diameter, "px")("height", ctx.diameter, "px")("--%NS%mat-progress-spinner-size", ctx.diameter + "px")("--%NS%mat-progress-spinner-active-indicator-width", ctx.diameter + "px");
        \u0275\u0275classProp("_mat-animation-noopable", ctx._noopAnimations)("mdc-circular-progress--indeterminate", ctx.mode === "indeterminate");
      }
    },
    inputs: {
      color: "color",
      mode: "mode",
      value: [2, "value", "value", numberAttribute],
      diameter: [2, "diameter", "diameter", numberAttribute],
      strokeWidth: [2, "strokeWidth", "strokeWidth", numberAttribute]
    },
    exportAs: ["matProgressSpinner"],
    decls: 14,
    vars: 11,
    consts: [["circle", ""], ["determinateSpinner", ""], ["aria-hidden", "true", 1, "mdc-circular-progress__determinate-container"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__determinate-circle-graphic"], ["cx", "50%", "cy", "50%", 1, "mdc-circular-progress__determinate-circle"], ["aria-hidden", "true", 1, "mdc-circular-progress__indeterminate-container"], [1, "mdc-circular-progress__spinner-layer"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-left"], [3, "ngTemplateOutlet"], [1, "mdc-circular-progress__gap-patch"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-right"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__indeterminate-circle-graphic"], ["cx", "50%", "cy", "50%"]],
    template: function MatProgressSpinner_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MatProgressSpinner_ng_template_0_Template, 2, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(2, "div", 2, 1);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 3);
        \u0275\u0275element(5, "circle", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
        \u0275\u0275elementContainer(9, 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9);
        \u0275\u0275elementContainer(11, 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10);
        \u0275\u0275elementContainer(13, 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const circle_r2 = \u0275\u0275reference(1);
        \u0275\u0275advance(4);
        \u0275\u0275attribute("viewBox", ctx._viewBox());
        \u0275\u0275advance();
        \u0275\u0275styleProp("stroke-dasharray", ctx._strokeCircumference(), "px")("stroke-dashoffset", ctx._strokeDashOffset(), "px")("stroke-width", ctx._circleStrokeWidth(), "%");
        \u0275\u0275attribute("r", ctx._circleRadius());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
      }
    },
    dependencies: [NgTemplateOutlet],
    styles: [".mat-mdc-progress-spinner {\n  --%NS%mat-progress-spinner-animation-multiplier: 1;\n  display: block;\n  overflow: hidden;\n  line-height: 0;\n  position: relative;\n  direction: ltr;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mat-mdc-progress-spinner circle {\n  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);\n}\n.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {\n  transition: none !important;\n}\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {\n  animation: none !important;\n}\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {\n  stroke-dasharray: 0 !important;\n}\n@media (forced-colors: active) {\n  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,\n  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {\n    stroke: currentColor;\n    stroke: CanvasText;\n  }\n}\n\n.mat-progress-spinner-reduced-motion {\n  --%NS%mat-progress-spinner-animation-multiplier: 1.25;\n}\n\n.mdc-circular-progress__determinate-container,\n.mdc-circular-progress__indeterminate-circle-graphic,\n.mdc-circular-progress__indeterminate-container,\n.mdc-circular-progress__spinner-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.mdc-circular-progress__determinate-container {\n  transform: rotate(-90deg);\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {\n  opacity: 0;\n}\n\n.mdc-circular-progress__indeterminate-container {\n  font-size: 0;\n  letter-spacing: 0;\n  white-space: nowrap;\n  opacity: 0;\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {\n  opacity: 1;\n  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;\n}\n\n.mdc-circular-progress__determinate-circle-graphic,\n.mdc-circular-progress__indeterminate-circle-graphic {\n  fill: transparent;\n}\n\n.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,\n.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {\n  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));\n}\n@media (forced-colors: active) {\n  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,\n  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {\n    stroke: CanvasText;\n  }\n}\n\n.mdc-circular-progress__determinate-circle {\n  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-circular-progress__gap-patch {\n  position: absolute;\n  top: 0;\n  left: 47.5%;\n  box-sizing: border-box;\n  width: 5%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {\n  left: -900%;\n  width: 2000%;\n  transform: rotate(180deg);\n}\n.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {\n  width: 200%;\n}\n.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {\n  left: -100%;\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {\n  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {\n  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.mdc-circular-progress__circle-clipper {\n  display: inline-flex;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {\n  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n@keyframes mdc-circular-progress-container-rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes mdc-circular-progress-spinner-layer-rotate {\n  12.5% {\n    transform: rotate(135deg);\n  }\n  25% {\n    transform: rotate(270deg);\n  }\n  37.5% {\n    transform: rotate(405deg);\n  }\n  50% {\n    transform: rotate(540deg);\n  }\n  62.5% {\n    transform: rotate(675deg);\n  }\n  75% {\n    transform: rotate(810deg);\n  }\n  87.5% {\n    transform: rotate(945deg);\n  }\n  100% {\n    transform: rotate(1080deg);\n  }\n}\n@keyframes mdc-circular-progress-left-spin {\n  from {\n    transform: rotate(265deg);\n  }\n  50% {\n    transform: rotate(130deg);\n  }\n  to {\n    transform: rotate(265deg);\n  }\n}\n@keyframes mdc-circular-progress-right-spin {\n  from {\n    transform: rotate(-265deg);\n  }\n  50% {\n    transform: rotate(-130deg);\n  }\n  to {\n    transform: rotate(-265deg);\n  }\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressSpinner, [{
    type: Component,
    args: [{
      selector: "mat-progress-spinner, mat-spinner",
      exportAs: "matProgressSpinner",
      host: {
        "role": "progressbar",
        "class": "mat-mdc-progress-spinner mdc-circular-progress",
        "tabindex": "-1",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": `_noopAnimations`,
        "[class.mdc-circular-progress--indeterminate]": 'mode === "indeterminate"',
        "[style.width.px]": "diameter",
        "[style.height.px]": "diameter",
        "[style.--mat-progress-spinner-size]": 'diameter + "px"',
        "[style.--mat-progress-spinner-active-indicator-width]": 'diameter + "px"',
        "[attr.aria-valuemin]": "0",
        "[attr.aria-valuemax]": "100",
        "[attr.aria-valuenow]": 'mode === "determinate" ? value : null',
        "[attr.mode]": "mode"
      },
      encapsulation: ViewEncapsulation.None,
      imports: [NgTemplateOutlet],
      template: '<ng-template #circle>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__indeterminate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeCircumference() / 2"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            cx="50%" cy="50%"/>\n  </svg>\n</ng-template>\n\n<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<div class="mdc-circular-progress__determinate-container" aria-hidden="true" #determinateSpinner>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__determinate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeDashOffset()"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            class="mdc-circular-progress__determinate-circle"\n            cx="50%" cy="50%"/>\n  </svg>\n</div>\n<!--TODO: figure out why there are 3 separate svgs-->\n<div class="mdc-circular-progress__indeterminate-container" aria-hidden="true">\n  <div class="mdc-circular-progress__spinner-layer">\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__gap-patch">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n  </div>\n</div>\n',
      styles: [".mat-mdc-progress-spinner {\n  --mat-progress-spinner-animation-multiplier: 1;\n  display: block;\n  overflow: hidden;\n  line-height: 0;\n  position: relative;\n  direction: ltr;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mat-mdc-progress-spinner circle {\n  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);\n}\n.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {\n  transition: none !important;\n}\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {\n  animation: none !important;\n}\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {\n  stroke-dasharray: 0 !important;\n}\n@media (forced-colors: active) {\n  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,\n  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {\n    stroke: currentColor;\n    stroke: CanvasText;\n  }\n}\n\n.mat-progress-spinner-reduced-motion {\n  --mat-progress-spinner-animation-multiplier: 1.25;\n}\n\n.mdc-circular-progress__determinate-container,\n.mdc-circular-progress__indeterminate-circle-graphic,\n.mdc-circular-progress__indeterminate-container,\n.mdc-circular-progress__spinner-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.mdc-circular-progress__determinate-container {\n  transform: rotate(-90deg);\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {\n  opacity: 0;\n}\n\n.mdc-circular-progress__indeterminate-container {\n  font-size: 0;\n  letter-spacing: 0;\n  white-space: nowrap;\n  opacity: 0;\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {\n  opacity: 1;\n  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;\n}\n\n.mdc-circular-progress__determinate-circle-graphic,\n.mdc-circular-progress__indeterminate-circle-graphic {\n  fill: transparent;\n}\n\n.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,\n.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {\n  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));\n}\n@media (forced-colors: active) {\n  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,\n  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {\n    stroke: CanvasText;\n  }\n}\n\n.mdc-circular-progress__determinate-circle {\n  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-circular-progress__gap-patch {\n  position: absolute;\n  top: 0;\n  left: 47.5%;\n  box-sizing: border-box;\n  width: 5%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {\n  left: -900%;\n  width: 2000%;\n  transform: rotate(180deg);\n}\n.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {\n  width: 200%;\n}\n.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {\n  left: -100%;\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {\n  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {\n  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.mdc-circular-progress__circle-clipper {\n  display: inline-flex;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {\n  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n@keyframes mdc-circular-progress-container-rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes mdc-circular-progress-spinner-layer-rotate {\n  12.5% {\n    transform: rotate(135deg);\n  }\n  25% {\n    transform: rotate(270deg);\n  }\n  37.5% {\n    transform: rotate(405deg);\n  }\n  50% {\n    transform: rotate(540deg);\n  }\n  62.5% {\n    transform: rotate(675deg);\n  }\n  75% {\n    transform: rotate(810deg);\n  }\n  87.5% {\n    transform: rotate(945deg);\n  }\n  100% {\n    transform: rotate(1080deg);\n  }\n}\n@keyframes mdc-circular-progress-left-spin {\n  from {\n    transform: rotate(265deg);\n  }\n  50% {\n    transform: rotate(130deg);\n  }\n  to {\n    transform: rotate(265deg);\n  }\n}\n@keyframes mdc-circular-progress-right-spin {\n  from {\n    transform: rotate(-265deg);\n  }\n  50% {\n    transform: rotate(-130deg);\n  }\n  to {\n    transform: rotate(-265deg);\n  }\n}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    _determinateCircle: [{
      type: ViewChild,
      args: ["determinateSpinner"]
    }],
    mode: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    diameter: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    strokeWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }]
  });
})();
var MatSpinner = MatProgressSpinner;
var MatProgressSpinnerModule = class _MatProgressSpinnerModule {
  static \u0275fac = function MatProgressSpinnerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressSpinnerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatProgressSpinnerModule,
    imports: [MatProgressSpinner, MatSpinner],
    exports: [MatProgressSpinner, MatSpinner, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressSpinner, MatSpinner],
      exports: [MatProgressSpinner, MatSpinner, BidiModule]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/clipboard.mjs
var PendingCopy = class {
  _document;
  _textarea;
  constructor(text, _document) {
    this._document = _document;
    const textarea = this._textarea = this._document.createElement("textarea");
    const styles = textarea.style;
    styles.position = "fixed";
    styles.top = styles.opacity = "0";
    styles.left = "-999em";
    textarea.setAttribute("aria-hidden", "true");
    textarea.value = text;
    textarea.readOnly = true;
    (this._document.fullscreenElement || this._document.body).appendChild(textarea);
  }
  copy() {
    const textarea = this._textarea;
    let successful = false;
    try {
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand("copy");
        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch {
    }
    return successful;
  }
  destroy() {
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = void 0;
    }
  }
};
var Clipboard = class _Clipboard {
  _document = inject(DOCUMENT);
  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }
  static \u0275fac = function Clipboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Clipboard)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _Clipboard,
    factory: _Clipboard.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Clipboard, [{
    type: Service
  }], null, null);
})();
var CDK_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");
var CdkCopyToClipboard = class _CdkCopyToClipboard {
  _clipboard = inject(Clipboard);
  _ngZone = inject(NgZone);
  text = "";
  attempts = 1;
  copied = new EventEmitter();
  _pending = /* @__PURE__ */ new Set();
  _destroyed = false;
  _currentTimeout;
  constructor() {
    const config = inject(CDK_COPY_TO_CLIPBOARD_CONFIG, {
      optional: true
    });
    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  copy(attempts = this.attempts) {
    attempts = Math.min(attempts, 50);
    if (attempts > 1) {
      let remainingAttempts = attempts;
      const pending = this._clipboard.beginCopy(this.text);
      this._pending.add(pending);
      const attempt = () => {
        const successful = pending.copy();
        if (!successful && --remainingAttempts && !this._destroyed) {
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;
          this._pending.delete(pending);
          pending.destroy();
          this.copied.emit(successful);
        }
      };
      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }
  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }
    this._pending.forEach((copy) => copy.destroy());
    this._pending.clear();
    this._destroyed = true;
  }
  static \u0275fac = function CdkCopyToClipboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkCopyToClipboard)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkCopyToClipboard,
    selectors: [["", "cdkCopyToClipboard", ""]],
    hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkCopyToClipboard_click_HostBindingHandler() {
          return ctx.copy();
        });
      }
    },
    inputs: {
      text: [0, "cdkCopyToClipboard", "text"],
      attempts: [0, "cdkCopyToClipboardAttempts", "attempts"]
    },
    outputs: {
      copied: "cdkCopyToClipboardCopied"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCopyToClipboard, [{
    type: Directive,
    args: [{
      selector: "[cdkCopyToClipboard]",
      host: {
        "(click)": "copy()"
      }
    }]
  }], () => [], {
    text: [{
      type: Input,
      args: ["cdkCopyToClipboard"]
    }],
    attempts: [{
      type: Input,
      args: ["cdkCopyToClipboardAttempts"]
    }],
    copied: [{
      type: Output,
      args: ["cdkCopyToClipboardCopied"]
    }]
  });
})();
var ClipboardModule = class _ClipboardModule {
  static \u0275fac = function ClipboardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClipboardModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ClipboardModule,
    imports: [CdkCopyToClipboard],
    exports: [CdkCopyToClipboard]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardModule, [{
    type: NgModule,
    args: [{
      imports: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
})();

// src/app/overlays/confirm-modal.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ConfirmModalComponent_Conditional_4_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 13)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275listener("click", function ConfirmModalComponent_Conditional_4_Conditional_1_For_2_Template_button_click_5_listener() {
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
function ConfirmModalComponent_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 6);
    \u0275\u0275repeaterCreate(1, ConfirmModalComponent_Conditional_4_Conditional_1_For_2_Template, 7, 4, "li", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const receipt_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(receipt_r5.items);
  }
}
function ConfirmModalComponent_Conditional_4_Conditional_2_For_5_Template(rf, ctx) {
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
function ConfirmModalComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ConfirmModalComponent_Conditional_4_Conditional_2_For_5_Template, 4, 3, "p", 18, _forTrack0);
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
function ConfirmModalComponent_Conditional_4_Conditional_3_For_5_Template(rf, ctx) {
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
function ConfirmModalComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ConfirmModalComponent_Conditional_4_Conditional_3_For_5_Template, 4, 3, "p", 18, _forTrack0);
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
function ConfirmModalComponent_Conditional_4_Conditional_4_Template(rf, ctx) {
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
function ConfirmModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275conditionalCreate(1, ConfirmModalComponent_Conditional_4_Conditional_1_Template, 3, 0, "ul", 6);
    \u0275\u0275conditionalCreate(2, ConfirmModalComponent_Conditional_4_Conditional_2_Template, 6, 3, "div", 7);
    \u0275\u0275conditionalCreate(3, ConfirmModalComponent_Conditional_4_Conditional_3_Template, 6, 3, "div", 8);
    \u0275\u0275conditionalCreate(4, ConfirmModalComponent_Conditional_4_Conditional_4_Template, 2, 1, "p", 9);
    \u0275\u0275elementStart(5, "button", 10);
    \u0275\u0275listener("click", function ConfirmModalComponent_Conditional_4_Template_button_click_5_listener() {
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
function ConfirmModalComponent_Conditional_5_For_5_Conditional_3_Template(rf, ctx) {
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
function ConfirmModalComponent_Conditional_5_For_5_Conditional_4_Conditional_1_Template(rf, ctx) {
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
function ConfirmModalComponent_Conditional_5_For_5_Conditional_4_Conditional_2_Template(rf, ctx) {
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
function ConfirmModalComponent_Conditional_5_For_5_Conditional_4_Conditional_3_For_1_Template(rf, ctx) {
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
function ConfirmModalComponent_Conditional_5_For_5_Conditional_4_Conditional_3_Conditional_2_For_2_Template(rf, ctx) {
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
function ConfirmModalComponent_Conditional_5_For_5_Conditional_4_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 30);
    \u0275\u0275repeaterCreate(1, ConfirmModalComponent_Conditional_5_For_5_Conditional_4_Conditional_3_Conditional_2_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const detail_r12 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(detail_r12.summary);
  }
}
function ConfirmModalComponent_Conditional_5_For_5_Conditional_4_Conditional_3_Conditional_3_Template(rf, ctx) {
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
function ConfirmModalComponent_Conditional_5_For_5_Conditional_4_Conditional_3_For_5_Template(rf, ctx) {
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
function ConfirmModalComponent_Conditional_5_For_5_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ConfirmModalComponent_Conditional_5_For_5_Conditional_4_Conditional_3_For_1_Template, 2, 1, "p", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(2, ConfirmModalComponent_Conditional_5_For_5_Conditional_4_Conditional_3_Conditional_2_Template, 3, 0, "ul", 30)(3, ConfirmModalComponent_Conditional_5_For_5_Conditional_4_Conditional_3_Conditional_3_Template, 3, 3, "p", 31);
    \u0275\u0275repeaterCreate(4, ConfirmModalComponent_Conditional_5_For_5_Conditional_4_Conditional_3_For_5_Template, 2, 1, "p", 32, \u0275\u0275repeaterTrackByIdentity);
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
function ConfirmModalComponent_Conditional_5_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275conditionalCreate(1, ConfirmModalComponent_Conditional_5_For_5_Conditional_4_Conditional_1_Template, 5, 3, "div", 27)(2, ConfirmModalComponent_Conditional_5_For_5_Conditional_4_Conditional_2_Template, 2, 1, "p", 28)(3, ConfirmModalComponent_Conditional_5_For_5_Conditional_4_Conditional_3_Template, 6, 1);
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
function ConfirmModalComponent_Conditional_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "mat-checkbox", 24);
    \u0275\u0275listener("change", function ConfirmModalComponent_Conditional_5_For_5_Template_mat_checkbox_change_1_listener($event) {
      const option_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleOption(option_r9, $event.checked));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ConfirmModalComponent_Conditional_5_For_5_Conditional_3_Template, 2, 1, "p", 25);
    \u0275\u0275conditionalCreate(4, ConfirmModalComponent_Conditional_5_For_5_Conditional_4_Template, 4, 1, "div", 26);
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
function ConfirmModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 2);
    \u0275\u0275element(1, "icon", 20)(2, "p", 21)(3, "p", 22);
    \u0275\u0275repeaterCreate(4, ConfirmModalComponent_Conditional_5_For_5_Template, 5, 6, "div", 23, _forTrack0);
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
function ConfirmModalComponent_Conditional_6_Template(rf, ctx) {
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
function ConfirmModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 4)(1, "button", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 36);
    \u0275\u0275listener("click", function ConfirmModalComponent_Conditional_7_Template_button_click_4_listener() {
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, ctx_r3.cancel_text), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("error", ctx_r3.destructive);
    \u0275\u0275property("disabled", ctx_r3.resolving() || ctx_r3.blocked());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, ctx_r3.confirm_text), " ");
  }
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
    loading: (s) => ref.componentInstance?.loading.set(s),
    close: () => ref.close()
  });
}
var ConfirmModalComponent = class _ConfirmModalComponent {
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
  /** Whether the confirm button deletes or loses data */
  destructive = !!this._data.destructive;
  /** Display text on the confirm button */
  confirm_text = this._data.confirm_text || (this.destructive ? "COMMON.DELETE" : "COMMON.ACCEPT");
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
  constructor() {
    effect(() => {
      this._dialog_ref.disableClose = !!this.loading() && !this.result();
    });
  }
  ngOnInit() {
    for (const option of this.options) {
      if (this._selected()[option.id])
        this._resolveDetails(option);
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
  static \u0275fac = function ConfirmModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmModalComponent, selectors: [["confirm-modal"]], outputs: { event: "event" }, decls: 8, vars: 5, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "items-center", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], [1, "flex", "w-md", "max-w-[85vw]", "flex-col", "items-center", "space-y-4", "p-4", "sm:h-auto"], ["loading", ""], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border-none", "p-2"], ["result", "", 1, "flex", "w-md", "max-w-[85vw]", "flex-col", "space-y-3", "p-4", "sm:h-auto"], ["result-items", "", 1, "divide-base-200", "border-base-200", "max-h-80", "divide-y", "overflow-auto", "rounded-sm", "border"], ["result-failed", "", 1, "border-error/40", "bg-error/10", "space-y-1", "rounded-sm", "border", "p-2"], ["result-skipped", "", 1, "border-base-300", "bg-base-200", "space-y-1", "rounded-sm", "border", "p-2"], [1, "text-xs", "opacity-70"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "items-center", "justify-center", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "name", "close", "mat-dialog-close", "", 1, "flex-1"], [1, "flex", "items-center", "space-x-2", "px-3", "py-2"], [1, "bg-base-200", "shrink-0", "rounded-xl", "px-2", "py-1", "text-xs", "uppercase"], [1, "flex-1", "truncate", "text-sm"], [1, "mono", "shrink-0", "text-xs", "opacity-70", "hover:opacity-100", 3, "click"], [1, "text-xs", "font-medium"], [1, "text-xs"], [1, "mono", "opacity-70"], [1, "text-5xl", 3, "icon"], ["content", "", 1, "text-center", 3, "innerHTML"], ["extra", "", 3, "innerHTML"], ["confirm-option", "", 1, "border-base-200", "bg-base-200/40", "w-full", "space-y-2", "rounded-sm", "border", "p-3"], [3, "change", "name", "checked"], [1, "pl-8", "text-xs", "opacity-70"], [1, "pl-8", "text-sm"], ["details-loading", "", 1, "flex", "items-center", "space-x-2", "opacity-60"], [1, "text-error", "text-xs"], ["diameter", "16"], ["details-summary", "", 1, "list-disc", "pl-4"], ["details-empty", "", 1, "text-xs", "opacity-60"], ["details-warning", "", 1, "border-warning", "bg-warning/10", "mt-2", "rounded-sm", "border-l-2", "py-1", "pr-1", "pl-2", "text-xs"], [1, "flex", "h-48", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "p-12"], ["diameter", "32"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "bg-base-100", "flex-1"], ["btn", "", "matRipple", "", "name", "accept", 1, "flex-1", 3, "click", "disabled"]], template: function ConfirmModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(4, ConfirmModalComponent_Conditional_4_Template, 12, 10)(5, ConfirmModalComponent_Conditional_5_Template, 6, 5, "main", 2)(6, ConfirmModalComponent_Conditional_6_Template, 5, 1, "main", 3);
      \u0275\u0275conditionalCreate(7, ConfirmModalComponent_Conditional_7_Template, 7, 9, "footer", 4);
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.result() ? ctx.result().title : \u0275\u0275pipeBind1(3, 3, ctx.title), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_1_0 = ctx.result()) ? 4 : !ctx.loading() ? 5 : 6, tmp_1_0);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.loading() && !ctx.result() ? 7 : -1);
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
                {{ result() ? result().title : (title | translate) }}
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
                    [class.error]="destructive"
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
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmModalComponent, { className: "ConfirmModalComponent", filePath: "src/app/overlays/confirm-modal.component.ts", lineNumber: 410 });
})();

export {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  Clipboard,
  CONFIRM_METADATA,
  openConfirmModal,
  ConfirmModalComponent
};
//# debugId=5cb51020-b9d9-577e-b2a8-2e7e2d8e38b6
//# sourceMappingURL=chunk-7QWEFWP7.js.map

import {
  EmailStateService
} from "./chunk-NEORP3ZR.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-QHCJ3DU4.js";
import {
  Clipboard
} from "./chunk-UOZPOTVN.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-P7ABAMPF.js";
import {
  uploadFile
} from "./chunk-XODD7BCV.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-PRL2UEXY.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-TDOACRHX.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-DNJ5OGXJ.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-LZJ3O446.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-JVZQGINH.js";
import "./chunk-RFI67JC7.js";
import {
  AsyncHandler
} from "./chunk-KMWOHLBD.js";
import "./chunk-AFCWNDGX.js";
import "./chunk-6RFGFMVU.js";
import {
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import "./chunk-2FVYYETS.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-763UXDJC.js";
import "./chunk-HOFUYBS5.js";
import {
  MatRipple
} from "./chunk-ODP5LKCS.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  Input,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ViewChild,
  forwardRef,
  inject,
  input,
  nextValueFrom,
  setClassMetadata,
  viewChild,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
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
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-CMCD56FG.js";
import {
  Ht,
  X
} from "./chunk-IXMJWBEL.js";
import {
  __commonJS,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-KWSTWQNB.js";

// node_modules/suneditor/src/lang/en.js
var require_en = __commonJS({
  "node_modules/suneditor/src/lang/en.js"(exports, module) {
    "use strict";
    (function(global, factory) {
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w) {
          if (!w.document) {
            throw new Error("SUNEDITOR_LANG a window with a document");
          }
          return factory(w);
        };
      } else {
        factory(global);
      }
    })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
      const lang = {
        code: "en",
        toolbar: {
          default: "Default",
          save: "Save",
          font: "Font",
          formats: "Formats",
          fontSize: "Size",
          bold: "Bold",
          underline: "Underline",
          italic: "Italic",
          strike: "Strike",
          subscript: "Subscript",
          superscript: "Superscript",
          removeFormat: "Remove Format",
          fontColor: "Font Color",
          hiliteColor: "Highlight Color",
          indent: "Indent",
          outdent: "Outdent",
          align: "Align",
          alignLeft: "Align left",
          alignRight: "Align right",
          alignCenter: "Align center",
          alignJustify: "Align justify",
          list: "List",
          orderList: "Ordered list",
          unorderList: "Unordered list",
          horizontalRule: "Horizontal line",
          hr_solid: "Solid",
          hr_dotted: "Dotted",
          hr_dashed: "Dashed",
          table: "Table",
          link: "Link",
          math: "Math",
          image: "Image",
          video: "Video",
          audio: "Audio",
          fullScreen: "Full screen",
          showBlocks: "Show blocks",
          codeView: "Code view",
          undo: "Undo",
          redo: "Redo",
          preview: "Preview",
          print: "print",
          tag_p: "Paragraph",
          tag_div: "Normal (DIV)",
          tag_h: "Header",
          tag_blockquote: "Quote",
          tag_pre: "Code",
          template: "Template",
          lineHeight: "Line height",
          paragraphStyle: "Paragraph style",
          textStyle: "Text style",
          imageGallery: "Image gallery",
          dir_ltr: "Left to right",
          dir_rtl: "Right to left",
          mention: "Mention"
        },
        dialogBox: {
          linkBox: {
            title: "Insert Link",
            url: "URL to link",
            text: "Text to display",
            newWindowCheck: "Open in new window",
            downloadLinkCheck: "Download link",
            bookmark: "Bookmark"
          },
          mathBox: {
            title: "Math",
            inputLabel: "Mathematical Notation",
            fontSizeLabel: "Font Size",
            previewLabel: "Preview"
          },
          imageBox: {
            title: "Insert image",
            file: "Select from files",
            url: "Image URL",
            altText: "Alternative text"
          },
          videoBox: {
            title: "Insert Video",
            file: "Select from files",
            url: "Media embed URL, YouTube/Vimeo"
          },
          audioBox: {
            title: "Insert Audio",
            file: "Select from files",
            url: "Audio URL"
          },
          browser: {
            tags: "Tags",
            search: "Search"
          },
          caption: "Insert description",
          close: "Close",
          submitButton: "Submit",
          revertButton: "Revert",
          proportion: "Constrain proportions",
          basic: "Basic",
          left: "Left",
          right: "Right",
          center: "Center",
          width: "Width",
          height: "Height",
          size: "Size",
          ratio: "Ratio"
        },
        controller: {
          edit: "Edit",
          unlink: "Unlink",
          remove: "Remove",
          insertRowAbove: "Insert row above",
          insertRowBelow: "Insert row below",
          deleteRow: "Delete row",
          insertColumnBefore: "Insert column before",
          insertColumnAfter: "Insert column after",
          deleteColumn: "Delete column",
          fixedColumnWidth: "Fixed column width",
          resize100: "Resize 100%",
          resize75: "Resize 75%",
          resize50: "Resize 50%",
          resize25: "Resize 25%",
          autoSize: "Auto size",
          mirrorHorizontal: "Mirror, Horizontal",
          mirrorVertical: "Mirror, Vertical",
          rotateLeft: "Rotate left",
          rotateRight: "Rotate right",
          maxSize: "Max size",
          minSize: "Min size",
          tableHeader: "Table header",
          mergeCells: "Merge cells",
          splitCells: "Split Cells",
          HorizontalSplit: "Horizontal split",
          VerticalSplit: "Vertical split"
        },
        menu: {
          spaced: "Spaced",
          bordered: "Bordered",
          neon: "Neon",
          translucent: "Translucent",
          shadow: "Shadow",
          code: "Code"
        }
      };
      if (typeof noGlobal === "undefined") {
        if (!window2.SUNEDITOR_LANG) {
          Object.defineProperty(window2, "SUNEDITOR_LANG", {
            enumerable: true,
            writable: false,
            configurable: false,
            value: {}
          });
        }
        Object.defineProperty(window2.SUNEDITOR_LANG, "en", {
          enumerable: true,
          writable: true,
          configurable: true,
          value: lang
        });
      }
      return lang;
    });
  }
});

// node_modules/suneditor/src/plugins/modules/dialog.js
var require_dialog = __commonJS({
  "node_modules/suneditor/src/plugins/modules/dialog.js"(exports, module) {
    "use strict";
    (function(global, factory) {
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w) {
          if (!w.document) {
            throw new Error("SUNEDITOR_MODULES a window with a document");
          }
          return factory(w);
        };
      } else {
        factory(global);
      }
    })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
      const dialog2 = {
        name: "dialog",
        /**
         * @description Constructor
         * @param {Object} core Core object 
         */
        add: function(core) {
          const context = core.context;
          context.dialog = {
            kind: "",
            updateModal: false,
            _closeSignal: false
          };
          let dialog_div = core.util.createElement("DIV");
          dialog_div.className = "se-dialog sun-editor-common";
          let dialog_back = core.util.createElement("DIV");
          dialog_back.className = "se-dialog-back";
          dialog_back.style.display = "none";
          let dialog_area = core.util.createElement("DIV");
          dialog_area.className = "se-dialog-inner";
          dialog_area.style.display = "none";
          dialog_div.appendChild(dialog_back);
          dialog_div.appendChild(dialog_area);
          context.dialog.modalArea = dialog_div;
          context.dialog.back = dialog_back;
          context.dialog.modal = dialog_area;
          context.dialog.modal.addEventListener("mousedown", this._onMouseDown_dialog.bind(core));
          context.dialog.modal.addEventListener("click", this._onClick_dialog.bind(core));
          context.element.relative.appendChild(dialog_div);
          dialog_div = null, dialog_back = null, dialog_area = null;
        },
        /**
         * @description Event to control the behavior of closing the dialog
         * @param {MouseEvent} e Event object
         * @private
         */
        _onMouseDown_dialog: function(e) {
          if (/se-dialog-inner/.test(e.target.className)) {
            this.context.dialog._closeSignal = true;
          } else {
            this.context.dialog._closeSignal = false;
          }
        },
        /**
         * @description Event to close the window when the outside area of the dialog or close button is click
         * @param {MouseEvent} e Event object
         * @private
         */
        _onClick_dialog: function(e) {
          if (/close/.test(e.target.getAttribute("data-command")) || this.context.dialog._closeSignal) {
            this.plugins.dialog.close.call(this);
          }
        },
        /**
         * @description Open a Dialog plugin
         * @param {String} kind Dialog plugin name
         * @param {Boolean} update Whether it will open for update ('image' === this.currentControllerName)
         */
        open: function(kind, update) {
          if (this.modalForm) return false;
          if (this.plugins.dialog._bindClose) {
            this._d.removeEventListener("keydown", this.plugins.dialog._bindClose);
            this.plugins.dialog._bindClose = null;
          }
          this.plugins.dialog._bindClose = (function(e) {
            if (!/27/.test(e.keyCode)) return;
            this.plugins.dialog.close.call(this);
          }).bind(this);
          this._d.addEventListener("keydown", this.plugins.dialog._bindClose);
          this.context.dialog.updateModal = update;
          if (this.options.popupDisplay === "full") {
            this.context.dialog.modalArea.style.position = "fixed";
          } else {
            this.context.dialog.modalArea.style.position = "absolute";
          }
          this.context.dialog.kind = kind;
          this.modalForm = this.context[kind].modal;
          const focusElement = this.context[kind].focusElement;
          if (typeof this.plugins[kind].on === "function") this.plugins[kind].on.call(this, update);
          this.context.dialog.modalArea.style.display = "block";
          this.context.dialog.back.style.display = "block";
          this.context.dialog.modal.style.display = "block";
          this.modalForm.style.display = "block";
          if (focusElement) focusElement.focus();
        },
        _bindClose: null,
        /**
         * @description Close a Dialog plugin
         * The plugin's "init" method is called.
         */
        close: function() {
          if (this.plugins.dialog._bindClose) {
            this._d.removeEventListener("keydown", this.plugins.dialog._bindClose);
            this.plugins.dialog._bindClose = null;
          }
          const kind = this.context.dialog.kind;
          this.modalForm.style.display = "none";
          this.context.dialog.back.style.display = "none";
          this.context.dialog.modalArea.style.display = "none";
          this.context.dialog.updateModal = false;
          if (typeof this.plugins[kind].init === "function") this.plugins[kind].init.call(this);
          this.context.dialog.kind = "";
          this.modalForm = null;
          this.focus();
        }
      };
      if (typeof noGlobal === "undefined") {
        if (!window2.SUNEDITOR_MODULES) {
          Object.defineProperty(window2, "SUNEDITOR_MODULES", {
            enumerable: true,
            writable: false,
            configurable: false,
            value: {}
          });
        }
        Object.defineProperty(window2.SUNEDITOR_MODULES, "dialog", {
          enumerable: true,
          writable: false,
          configurable: false,
          value: dialog2
        });
      }
      return dialog2;
    });
  }
});

// node_modules/suneditor/src/assets/defaultIcons.js
var defaultIcons_default = {
  // rtl icon
  rtl: {
    italic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.5 15.8" xml:space="preserve"><g><path d="M0.3,0.1c0.3,0,0.5,0,0.7,0c1,0.1,1.7,0.1,2.2,0.1H4L7.2,0l0.2,1.1H7c-0.5,0-1,0.1-1.5,0.3v0.4l0.3,1.9L6,4.4L6.3,6 l0.1,0.4l0.1,0.5c0.1,0.2,0.1,0.4,0.2,0.7s0.1,0.6,0.2,0.9L7,9.1l0.6,2.8l0.3,1.4c0.1,0.4,0.2,0.7,0.4,1c0.4,0.2,0.8,0.3,1.2,0.4 l0.8,0.2l0.2,0.9l-1.1,0c-0.9-0.1-1.5-0.1-1.8-0.1h-2c-0.9,0.1-1.4,0.2-1.5,0.2c-0.1,0-0.2,0-0.3,0H3.4c-0.1,0-0.2,0-0.2,0 l-0.1-0.4c0-0.2-0.1-0.4-0.1-0.6l0.7-0.1c0.4,0,0.8-0.1,1.2-0.2c0-0.1,0-0.2,0-0.3l-0.1-0.5l-0.4-2.4L4,9.6L3.4,6.4 C3.2,5.7,3,4.7,2.7,3.3c0-0.3-0.1-0.5-0.1-0.8C2.5,2.1,2.4,1.9,2.3,1.6C2,1.4,1.6,1.3,1.3,1.2C0.9,1.2,0.5,1.1,0.2,0.9L0,0.4L0,0 L0.3,0.1L0.3,0.1z"/></g></svg>',
    indent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 12.4" xml:space="preserve"><g><g><path d="M15.5,10.1L15.5,10.1c0.1,0,0.3,0.1,0.3,0.3v1.7c0,0.1,0,0.1-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1l-15.2,0 c-0.1,0-0.1,0-0.2-0.1C0,12.2,0,12.2,0,12.1l0-1.7c0-0.1,0-0.1,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1C0.3,10.1,15.5,10.1,15.5,10.1z M9.8,6.7c0.1,0,0.1,0,0.2,0.1C10.1,6.9,10.1,7,10.1,7v1.7c0,0.1,0,0.2-0.1,0.2C10,9,9.9,9,9.8,9L0.3,9C0.2,9,0.1,9,0.1,8.9 C0,8.9,0,8.8,0,8.7V7C0,7,0,6.9,0.1,6.8c0.1-0.1,0.1-0.1,0.2-0.1C0.3,6.7,9.8,6.7,9.8,6.7z M0.3,3.4h9.6h0c0.1,0,0.3,0.1,0.3,0.3 v1.7v0c0,0.1-0.1,0.3-0.3,0.3H0.3c-0.1,0-0.1,0-0.2-0.1C0,5.5,0,5.4,0,5.3V3.6c0-0.1,0-0.1,0.1-0.2C0.1,3.4,0.2,3.4,0.3,3.4 L0.3,3.4z M0.3,0l15.2,0c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.2V2c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1H0.3 c-0.1,0-0.1,0-0.2-0.1C0,2.1,0,2,0,2l0-1.7c0-0.1,0-0.1,0.1-0.2C0.1,0,0.2,0,0.3,0z"/></g><path d="M13.1,3.5L15.7,6c0.1,0.1,0.1,0.3,0,0.4l-2.5,2.5C13.1,9,13,9,12.9,9c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.1-0.1-0.2V3.7 c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1C13,3.4,13.1,3.4,13.1,3.5z"/></g></svg>',
    outdent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 12.4" xml:space="preserve"><g><g><path d="M15.5,10.1L15.5,10.1c0.1,0,0.3,0.1,0.3,0.3v1.7c0,0.1,0,0.1-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1l-15.2,0 c-0.1,0-0.1,0-0.2-0.1C0,12.2,0,12.2,0,12.1l0-1.7c0-0.1,0-0.1,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1C0.3,10.1,15.5,10.1,15.5,10.1z M9.8,6.7c0.1,0,0.1,0,0.2,0.1C10.1,6.9,10.1,7,10.1,7v1.7c0,0.1,0,0.2-0.1,0.2C10,9,9.9,9,9.8,9L0.3,9C0.2,9,0.1,9,0.1,8.9 C0,8.9,0,8.8,0,8.7V7C0,7,0,6.9,0.1,6.8c0.1-0.1,0.1-0.1,0.2-0.1C0.3,6.7,9.8,6.7,9.8,6.7z M0.3,3.4h9.6h0c0.1,0,0.3,0.1,0.3,0.3 v1.7v0c0,0.1-0.1,0.3-0.3,0.3H0.3c-0.1,0-0.1,0-0.2-0.1C0,5.5,0,5.4,0,5.3V3.6c0-0.1,0-0.1,0.1-0.2C0.1,3.4,0.2,3.4,0.3,3.4 L0.3,3.4z M0.3,0l15.2,0c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.2V2c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1H0.3 c-0.1,0-0.1,0-0.2-0.1C0,2.1,0,2,0,2l0-1.7c0-0.1,0-0.1,0.1-0.2C0.1,0,0.2,0,0.3,0z"/></g><path d="M15.5,3.4c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.2v5.1c0,0.1,0,0.1-0.1,0.2C15.6,9,15.5,9,15.5,9 c-0.1,0-0.1,0-0.2-0.1l-2.5-2.5c-0.1-0.1-0.1-0.3,0-0.4l2.5-2.5C15.3,3.4,15.4,3.4,15.5,3.4z"/></g></svg>',
    list_bullets: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 12.4" xml:space="preserve"><g><path d="M12.4,10.7c0,0.9,0.8,1.7,1.7,1.7c0.9,0,1.7-0.8,1.7-1.7C15.7,9.8,15,9,14.1,9c-0.4,0-0.9,0.2-1.2,0.5 C12.5,9.8,12.4,10.2,12.4,10.7C12.4,10.7,12.4,10.7,12.4,10.7z M12.4,6.2c0,0.9,0.8,1.7,1.7,1.7c0.4,0,0.9-0.2,1.2-0.5 c0.3-0.3,0.4-0.7,0.4-1.1c0-0.9-0.7-1.7-1.6-1.7C13.1,4.6,12.4,5.3,12.4,6.2C12.4,6.2,12.4,6.2,12.4,6.2z M0,9.8v1.7 c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1l10.7,0c0,0,0,0,0,0c0.1,0,0.3-0.1,0.3-0.3V9.8c0-0.1,0-0.1-0.1-0.2 C11.1,9.6,11,9.6,11,9.6l-10.7,0c-0.1,0-0.1,0-0.2,0.1C0,9.7,0,9.8,0,9.8L0,9.8z M12.9,2.9c0.3,0.3,0.7,0.5,1.2,0.5 c0.4,0,0.9-0.2,1.2-0.5c0.7-0.7,0.7-1.7,0-2.4C14.9,0.2,14.5,0,14.1,0c-0.4,0-0.9,0.2-1.2,0.5c-0.3,0.3-0.5,0.7-0.5,1.2 C12.4,2.1,12.5,2.6,12.9,2.9z M0,5.3V7c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1H11c0.1,0,0.1,0,0.2-0.1 c0.1-0.1,0.1-0.1,0.1-0.2V5.3c0,0,0,0,0,0c0-0.1-0.1-0.3-0.3-0.3H0.3c-0.1,0-0.1,0-0.2,0.1C0,5.2,0,5.3,0,5.3L0,5.3z M0,0.8v1.7 c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1h10.7c0.1,0,0.1,0,0.2-0.1c0,0,0.1-0.1,0.1-0.2V0.8c0-0.1,0-0.1-0.1-0.2 c0-0.1-0.1-0.1-0.2-0.1H0.3c-0.1,0-0.1,0-0.2,0.1C0,0.7,0,0.8,0,0.8L0,0.8z"/></g></svg>',
    list_number: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.7" xml:space="preserve"><g><path d="M0,11.5l0,1.7c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1H11c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.2v-1.7 c0-0.1,0-0.1-0.1-0.2c-0.1-0.1-0.1-0.1-0.2-0.1H0.3c-0.1,0-0.2,0-0.2,0.1C0,11.4,0,11.4,0,11.5L0,11.5z M0,8.7c0,0.1,0,0.1,0.1,0.2 C0.1,8.9,0.2,9,0.3,9H11c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.2V7c0-0.1,0-0.1-0.1-0.2c-0.1-0.1-0.1-0.1-0.2-0.1l-10.7,0 c-0.1,0-0.2,0-0.2,0.1C0,6.8,0,6.9,0,7C0,7,0,8.7,0,8.7z M0,2.5v1.7c0,0.1,0,0.1,0.1,0.2c0,0,0.1,0.1,0.2,0.1l10.7,0 c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.2V2.4c0-0.1,0-0.1-0.1-0.2c-0.1,0-0.1,0-0.2,0H0.3c-0.1,0-0.1,0-0.2,0 C0,2.3,0,2.4,0,2.5L0,2.5z"/></g><path d="M15.6,14.2c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.4-0.4-0.7-0.4l0.9-1v-0.8h-2.9v1.3h0.9v-0.5h0.9l0,0c-0.1,0.1-0.2,0.2-0.3,0.3 s-0.2,0.3-0.4,0.5l-0.3,0.3l0.2,0.5c0.6,0,0.9,0.1,0.9,0.5c0,0.1-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.1-0.4,0.1c-0.3,0-0.7-0.1-0.9-0.3 l-0.5,0.8c0.4,0.4,0.9,0.6,1.5,0.6c0.4,0,0.9-0.1,1.2-0.4C15.5,15.1,15.6,14.7,15.6,14.2z"/><path d="M15.6,8.7h-0.9v0.5h-1.1c0-0.2,0.2-0.4,0.4-0.5c0.2-0.2,0.4-0.3,0.7-0.4c0.3-0.2,0.5-0.3,0.7-0.6c0.2-0.2,0.3-0.5,0.3-0.8 c0-0.4-0.2-0.8-0.5-1c-0.6-0.4-1.4-0.5-2-0.1c-0.3,0.2-0.5,0.4-0.6,0.7L13.3,7c0.1-0.3,0.4-0.5,0.7-0.5c0.1,0,0.3,0,0.3,0.1 c0.1,0.1,0.1,0.2,0.1,0.3c0,0.2-0.1,0.3-0.2,0.4c-0.2,0.1-0.3,0.3-0.5,0.4c-0.2,0.1-0.4,0.3-0.6,0.4c-0.2,0.2-0.4,0.4-0.5,0.6 c-0.1,0.2-0.2,0.5-0.2,0.8c0,0.2,0,0.3,0,0.5h3.2L15.6,8.7L15.6,8.7z"/><path d="M15.6,3.6h-1V0h-0.9l-1.2,1.1l0.6,0.7c0.2-0.1,0.3-0.3,0.4-0.5l0,0v2.2h-0.9v0.9h3L15.6,3.6L15.6,3.6z"/></svg>',
    link: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.7" xml:space="preserve"><g><path d="M7.4,9.9l3.1,3.1c0.3,0.3,0.8,0.5,1.3,0.5c0.5,0,0.9-0.2,1.3-0.5c0,0,0,0,0,0c0.7-0.7,0.7-1.9,0-2.6L9.9,7.3 c0-0.1,0-0.2,0-0.3C9.9,7,10,7,10.1,7l2.2-0.2c0.1,0,0.1,0,0.2,0.1l2.1,2.1c0.4,0.4,0.7,0.8,0.9,1.3c0.2,0.5,0.3,1,0.3,1.5 c0,0.5-0.1,1-0.3,1.5c-0.8,2-3.2,3-5.2,2.2c-0.5-0.2-0.9-0.5-1.3-0.9l-2.1-2.1c-0.1,0-0.1-0.1-0.1-0.2L7,10.1C7,10,7,9.9,7.1,9.9 C7.2,9.8,7.3,9.9,7.4,9.9z M1.2,1.1C1.6,0.7,2,0.4,2.5,0.3c1-0.4,2.1-0.4,3.1,0C6,0.4,6.5,0.7,6.8,1.1L9,3.2C9,3.3,9.1,3.3,9,3.4 L8.8,5.6c0,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.2,0.1-0.3,0L5.3,2.7C5,2.3,4.5,2.1,4,2.1c-0.5,0-0.9,0.2-1.3,0.5c0,0,0,0,0,0 C2,3.4,2,4.5,2.7,5.2l3.1,3.2c0.1,0.1,0.1,0.2,0,0.3c0,0.1-0.1,0.1-0.2,0.1L3.5,9C3.4,9,3.4,9,3.3,8.9L1.2,6.8c0,0,0,0,0,0 C-0.4,5.2-0.4,2.7,1.2,1.1L1.2,1.1z M14.3,6h-2.6c0,0,0,0,0,0c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0-0.2,0.1-0.3l2.5-0.7 c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0.1,0.1,0.2l0.1,0.8c0,0.1,0,0.1-0.1,0.2C14.5,6,14.4,6,14.3,6L14.3,6z M10.2,4.1 c0,0.1-0.1,0.2-0.2,0.2l0,0c0,0,0,0,0,0C9.8,4.2,9.7,4.1,9.8,4L9.7,1.4c0-0.1,0-0.1,0.1-0.2c0.1,0,0.1,0,0.2,0h0.8 c0.1,0,0.1,0,0.2,0.1c0,0.1,0,0.1,0,0.2L10.2,4.1L10.2,4.1z M1.5,9.7h1.3h1.3c0.1,0,0.2,0.1,0.2,0.2c0,0.1,0,0.2-0.1,0.3l-2.5,0.6 H1.6c0,0-0.1,0-0.1,0c-0.1,0-0.1-0.1-0.1-0.2L1.2,9.9c0-0.1,0-0.1,0.1-0.2c0-0.1,0.1-0.1,0.2-0.1L1.5,9.7z M5.6,11.6 C5.6,11.6,5.6,11.6,5.6,11.6c0-0.1,0.1-0.2,0.3-0.1c0,0,0,0,0,0c0.1,0,0.2,0.1,0.2,0.2v2.6c0,0.1,0,0.1-0.1,0.2 c0,0-0.1,0.1-0.2,0.1L5,14.5c-0.1,0-0.1,0-0.2-0.1c0-0.1,0-0.1,0-0.2L5.6,11.6L5.6,11.6z"/></g></svg>',
    unlink: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.7" xml:space="preserve"><g><path d="M14.6,14.6c1.6-1.6,1.6-4.1,0-5.7l0,0l-3.1-3.1l-1.2,1.6l2.9,2.9c0.4,0.4,0.6,0.9,0.6,1.5c0,1.1-0.9,2.1-2.1,2.1l0,0 c-0.6,0-1.1-0.2-1.5-0.6l-0.4-0.4l-1.7,1l0.8,0.8C10.4,16.2,13,16.2,14.6,14.6L14.6,14.6L14.6,14.6z M3.6,6C3,5.9,2.6,5.5,2.3,5 S1.9,4,2.1,3.4C2.3,2.9,2.6,2.5,3,2.2C3.5,2,4.1,1.9,4.6,2l3.3,1.4l0.5-2L5.1,0.1C4-0.1,2.9,0,2,0.5C1.1,1.1,0.4,1.9,0.2,3 C-0.1,4,0,5.1,0.6,6C1.1,6.9,1.9,7.6,3,7.8l5.4,2l0.5-2L6.2,6.9L3.6,6z"/></g></svg>'
  },
  // common, ltr icon
  redo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.59 14.18"><g><path d="M11.58,18.48a6.84,6.84,0,1,1,6.85-6.85s0,.26,0,.67a8,8,0,0,1-.22,1.44l.91-.55a.51.51,0,0,1,.36,0,.45.45,0,0,1,.29.22.47.47,0,0,1,.06.36.45.45,0,0,1-.22.29L17.42,15.3l-.12,0h-.25l-.12-.06-.09-.09-.06-.07,0-.06-.87-2.12a.43.43,0,0,1,0-.37.49.49,0,0,1,.27-.26.41.41,0,0,1,.36,0,.53.53,0,0,1,.27.26l.44,1.09a6.51,6.51,0,0,0,.24-1.36,4.58,4.58,0,0,0,0-.64,5.83,5.83,0,0,0-1.73-4.17,5.88,5.88,0,0,0-8.34,0,5.9,5.9,0,0,0,4.17,10.06.51.51,0,0,1,.33.15.48.48,0,0,1,0,.68.53.53,0,0,1-.33.12Z" transform="translate(-4.48 -4.54)"/></g></svg>',
  undo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.59 14.18"><g><path d="M5,14a.43.43,0,0,1-.22-.29.46.46,0,0,1,.06-.36.43.43,0,0,1,.29-.22.56.56,0,0,1,.36,0l.91.55a8.27,8.27,0,0,1-.22-1.45,5.07,5.07,0,0,1,0-.67A6.85,6.85,0,1,1,13,18.47a.44.44,0,0,1-.33-.13.48.48,0,0,1,0-.68.51.51,0,0,1,.33-.15A5.89,5.89,0,0,0,17.15,7.45a5.88,5.88,0,0,0-8.33,0,5.84,5.84,0,0,0-1.73,4.17s0,.25,0,.65a6.49,6.49,0,0,0,.24,1.37l.44-1.09a.57.57,0,0,1,.27-.26.41.41,0,0,1,.36,0,.53.53,0,0,1,.27.26.43.43,0,0,1,0,.37L7.82,15l0,.09-.09.09-.1.07-.06,0H7.28l-.13,0-1.09-.63c-.65-.36-1-.57-1.1-.63Z" transform="translate(-4.49 -4.53)"/></g></svg>',
  bold: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.76 15.75"><g><path d="M6.4,3.76V19.5h6.76a5.55,5.55,0,0,0,2-.32,4.93,4.93,0,0,0,1.52-1,4.27,4.27,0,0,0,1.48-3.34,3.87,3.87,0,0,0-.69-2.37,5.74,5.74,0,0,0-.71-.83,3.44,3.44,0,0,0-1.1-.65,3.6,3.6,0,0,0,1.58-1.36,3.66,3.66,0,0,0,.53-1.93,3.7,3.7,0,0,0-1.21-2.87,4.65,4.65,0,0,0-3.25-1.1H6.4Zm2.46,6.65V5.57h3.52a4.91,4.91,0,0,1,1.36.15,2.3,2.3,0,0,1,.85.45,2.06,2.06,0,0,1,.74,1.71,2.3,2.3,0,0,1-.78,1.92,2.54,2.54,0,0,1-.86.46,4.7,4.7,0,0,1-1.32.15H8.86Zm0,7.27V12.15H12.7a4.56,4.56,0,0,1,1.38.17,3.43,3.43,0,0,1,.95.49,2.29,2.29,0,0,1,.92,2,2.73,2.73,0,0,1-.83,2.1,2.66,2.66,0,0,1-.83.58,3.25,3.25,0,0,1-1.26.2H8.86Z" transform="translate(-6.4 -3.75)"/></g></svg>',
  underline: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.78 15.74"><g><path d="M14.64,3.76h2.52v7.72a4.51,4.51,0,0,1-.59,2.31,3.76,3.76,0,0,1-1.71,1.53,6.12,6.12,0,0,1-2.64.53,5,5,0,0,1-3.57-1.18,4.17,4.17,0,0,1-1.27-3.24V3.76H9.9v7.3a3,3,0,0,0,.55,2,2.3,2.3,0,0,0,1.83.65,2.26,2.26,0,0,0,1.8-.65,3.09,3.09,0,0,0,.55-2V3.76Zm2.52,13.31V19.5H7.39V17.08h9.77Z" transform="translate(-7.38 -3.76)"/></g></svg>',
  italic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.49 15.76"><g><path d="M17.16,3.79l.37,0-.06.38-.14.52A10,10,0,0,1,16.21,5a9.37,9.37,0,0,0-1,.32,6.68,6.68,0,0,0-.25.89c-.06.31-.11.59-.14.85-.3,1.36-.52,2.41-.68,3.14l-.61,3.18L13.1,15l-.43,2.4-.12.46a.62.62,0,0,0,0,.28c.44.1.85.17,1.23.22l.68.11a4.51,4.51,0,0,1-.08.6l-.09.42a.92.92,0,0,0-.23,0l-.43,0a1.37,1.37,0,0,1-.29,0c-.13,0-.63-.08-1.49-.16l-2,0c-.28,0-.87,0-1.78.12L7,19.5l.17-.88.8-.2A6.61,6.61,0,0,0,9.19,18,2.62,2.62,0,0,0,9.61,17l.28-1.41.58-2.75.12-.66c.05-.3.11-.58.17-.86s.12-.51.17-.69l.12-.48.12-.43.31-1.6.15-.65.31-1.91V5.14a3.86,3.86,0,0,0-1.48-.29l-.38,0,.2-1.06,3.24.14.75,0c.45,0,1.18,0,2.18-.09.23,0,.46,0,.71,0Z" transform="translate(-7.04 -3.76)"/></g></svg>',
  strike: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.9"><g><path d="M12.94,13a4.27,4.27,0,0,1,1.32.58,1.46,1.46,0,0,1,.55,1.2,1.87,1.87,0,0,1-.88,1.64,4.17,4.17,0,0,1-2.35.59,4.44,4.44,0,0,1-2.74-.71,2.72,2.72,0,0,1-1-2.17H5.57a4.56,4.56,0,0,0,1.55,3.7,7,7,0,0,0,4.47,1.23,6,6,0,0,0,4.07-1.3,4.24,4.24,0,0,0,1.52-3.37,4,4,0,0,0-.26-1.4h-4ZM6.37,10.24A3.27,3.27,0,0,1,6,8.68a4,4,0,0,1,1.48-3.3,5.92,5.92,0,0,1,3.88-1.21,5.58,5.58,0,0,1,3.91,1.24,4.36,4.36,0,0,1,1.45,3.17H14.44a2.12,2.12,0,0,0-.91-1.81,4.45,4.45,0,0,0-2.44-.55,3.69,3.69,0,0,0-2,.51A1.64,1.64,0,0,0,8.3,8.22a1.3,1.3,0,0,0,.48,1.11,7,7,0,0,0,2.1.78l.28.06.28.08H6.37Zm13.09.68a.73.73,0,0,1,.49.21.66.66,0,0,1,.2.48.64.64,0,0,1-.2.48.71.71,0,0,1-.49.19H5.1a.67.67,0,0,1-.49-.19.66.66,0,0,1-.2-.48.64.64,0,0,1,.2-.48.73.73,0,0,1,.49-.21H19.46Z" transform="translate(-4.41 -4.17)"/></g></svg>',
  subscript: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 14.61"><g><path d="M15.38,4.33H12.74L11.19,7c-.28.46-.51.87-.69,1.21L10.07,9h0l-.44-.8c-.22-.4-.45-.81-.71-1.23L7.34,4.33H4.68L8.26,10,4.4,16.08H7.1l1.69-2.83c.38-.63.72-1.22,1-1.78l.25-.46h0l.49.92c.24.45.48.89.74,1.32L13,16.08h2.61L11.84,10l1.77-2.84,1.77-2.85Zm4.77,13.75H17v-.15c0-.4.05-.64.16-.72a4.42,4.42,0,0,1,1.16-.31,3.3,3.3,0,0,0,1.54-.56A1.84,1.84,0,0,0,20.15,15a1.78,1.78,0,0,0-.44-1.41A2.8,2.8,0,0,0,18,13.25a2.71,2.71,0,0,0-1.69.37,1.83,1.83,0,0,0-.44,1.43v.23H17v-.23q0-.63.18-.78a1.62,1.62,0,0,1,.88-.15,1.59,1.59,0,0,1,.88.15q.18.15.18.75t-.18.75a3.58,3.58,0,0,1-1.18.33,3.33,3.33,0,0,0-1.52.51,1.57,1.57,0,0,0-.32,1.18v1.15h4.27v-.86Z" transform="translate(-4.4 -4.33)"/></g></svg>',
  superscript: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.42"><g><path d="M12,13.14l3.61-5.81H12.94L11.33,10c-.28.46-.51.88-.69,1.25l-.45.83h0l-.45-.85c-.22-.41-.45-.82-.71-1.24L7.4,7.33H4.68l3.66,5.81L4.4,19.33H7.14l1.74-2.87q.58-1,1-1.83l.25-.48h0l.51.94.75,1.37,1.72,2.87h2.67l-1.92-3.09c-1.12-1.8-1.76-2.83-1.92-3.1Zm4.84-4.41h0l0,.15h3.27v.86H15.77V8.58a1.66,1.66,0,0,1,.33-1.22,3.51,3.51,0,0,1,1.56-.51,3.68,3.68,0,0,0,1.21-.34c.13-.1.19-.36.19-.77S19,5.07,18.87,5A1.63,1.63,0,0,0,18,4.8a1.58,1.58,0,0,0-.91.17c-.13.11-.19.38-.19.8V6H15.78V5.76a1.87,1.87,0,0,1,.45-1.47A2.84,2.84,0,0,1,18,3.91a2.8,2.8,0,0,1,1.72.38,1.84,1.84,0,0,1,.45,1.44,1.91,1.91,0,0,1-.34,1.35,3.24,3.24,0,0,1-1.58.57A3.69,3.69,0,0,0,17,8c-.12.1-.17.35-.17.76Z" transform="translate(-4.4 -3.91)"/></g></svg>',
  erase: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.76"><g><path d="M13.69,17.2h6.46v1.31H8.56L4.41,14.37,14,4.75l6.06,6.06L16.89,14l-3.2,3.19Zm-4.61,0h2.77L14.09,15,9.88,10.75,6.25,14.38l1.41,1.41c.84.82,1.31,1.29,1.42,1.41Z" transform="translate(-4.41 -4.75)"/></g></svg>',
  indent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 12.36"><g><path d="M4.68,14.45a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V9.1a.27.27,0,0,1,.08-.19.28.28,0,0,1,.2-.08.25.25,0,0,1,.19.07l2.54,2.54a.29.29,0,0,1,0,.4L4.88,14.36a.24.24,0,0,1-.2.09Zm15.19,1.12a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.25.25,0,0,1-.08-.19V15.84a.27.27,0,0,1,.27-.27H19.87Zm0-3.38a.27.27,0,0,1,.19.08.28.28,0,0,1,.08.21v1.68a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V12.48a.32.32,0,0,1,.08-.21.24.24,0,0,1,.19-.08h9.56Zm0-3.37a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.27-.27V9.1a.27.27,0,0,1,.27-.27h9.56Zm.2-3.29a.28.28,0,0,1,.08.2V7.41a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V5.73a.32.32,0,0,1,.08-.21.25.25,0,0,1,.19-.08H19.87a.28.28,0,0,1,.2.09Z" transform="translate(-4.41 -5.44)"/></g></svg>',
  outdent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 12.36"><g><path d="M19.87,15.57a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.25.25,0,0,1-.08-.19V15.84a.27.27,0,0,1,.27-.27H19.87ZM7.5,14.45a.25.25,0,0,1-.2-.09L4.76,11.84a.29.29,0,0,1,0-.4L7.3,8.9a.29.29,0,0,1,.4,0,.31.31,0,0,1,.07.2v5.06a.32.32,0,0,1-.08.21.26.26,0,0,1-.19.08ZM19.87,8.82a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.27-.27V9.1a.27.27,0,0,1,.27-.27h9.56Zm0,3.37a.27.27,0,0,1,.19.08.28.28,0,0,1,.08.21v1.68a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V12.48a.32.32,0,0,1,.08-.21.24.24,0,0,1,.19-.08h9.56Zm.2-6.66a.28.28,0,0,1,.08.2V7.41a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V5.73a.32.32,0,0,1,.08-.21.25.25,0,0,1,.19-.08H19.87a.28.28,0,0,1,.2.09Z" transform="translate(-4.41 -5.44)"/></g></svg>',
  expansion: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M11.8,13.06l-5.1,5.1H9.51V19.5H4.41V14.4H5.75v2.81L8.3,14.66q2.25-2.23,2.55-2.55Zm8.35-9.3v5.1H18.81V6.05l-5.1,5.1-1-1,5.1-5.1H15.05V3.76Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  reduction: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M14.91,10h2.87v1.38H12.55V6.12h1.38V9l5.24-5.24.48.49.49.48ZM6.77,11.92H12v5.23H10.62V14.26L5.37,19.5l-1-1L9.63,13.3H6.77Z" transform="translate(-4.4 -3.76)"/></g></svg>',
  code_view: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 11.8"><g><path d="M8.09,7.94a.76.76,0,0,1,.53.22.72.72,0,0,1,.21.52.76.76,0,0,1-.22.54L6.18,11.63l2.43,2.44a.69.69,0,0,1,.2.51.66.66,0,0,1-.21.51.75.75,0,0,1-.51.22.63.63,0,0,1-.51-.21h0L4.63,12.15a.7.7,0,0,1-.22-.53.67.67,0,0,1,.25-.55L7.57,8.16a.82.82,0,0,1,.52-.22Zm12.05,3.69a.7.7,0,0,1-.23.52L17,15.1h0a.66.66,0,0,1-.51.21.73.73,0,0,1-.51-.22.75.75,0,0,1-.22-.51.63.63,0,0,1,.21-.51l2.43-2.44L15.92,9.22a.73.73,0,0,1-.22-.53A.74.74,0,0,1,17,8.18h0l2.91,2.91a.67.67,0,0,1,.27.54Zm-5.9-5.9a.73.73,0,0,1,.61.32.71.71,0,0,1,.07.68L11,17a1,1,0,0,1-.22.32.6.6,0,0,1-.35.16.75.75,0,0,1-.69-.26.69.69,0,0,1-.12-.72L13.56,6.23a.75.75,0,0,1,.26-.35.74.74,0,0,1,.42-.15Z" transform="translate(-4.41 -5.73)"/></g></svg>',
  preview: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.65 15.66"><g><path d="M16.19,14.43l2.49,2.49a.73.73,0,0,1,.21.52.67.67,0,0,1-.22.51.7.7,0,0,1-.52.22.69.69,0,0,1-.51-.21l-2.49-2.48a5.17,5.17,0,0,1-1.34.69,4.64,4.64,0,0,1-1.48.24,4.78,4.78,0,1,1,0-9.56,4.79,4.79,0,0,1,1.84.36,4.9,4.9,0,0,1,1.56,1,4.77,4.77,0,0,1,.46,6.18ZM10,14a3.3,3.3,0,0,0,2.34.93A3.37,3.37,0,0,0,14.7,14a3.3,3.3,0,0,0-1.08-5.41,3.47,3.47,0,0,0-2.56,0A3,3,0,0,0,10,9.28,3.31,3.31,0,0,0,10,14ZM16,4a3.86,3.86,0,0,1,2.77,1.14A3.9,3.9,0,0,1,20,7.85v4a.77.77,0,0,1-.22.53.7.7,0,0,1-.52.21.72.72,0,0,1-.74-.74v-4a2.46,2.46,0,0,0-.72-1.73A2.37,2.37,0,0,0,16,5.45H8.53A2.42,2.42,0,0,0,6.08,7.89v7.52a2.41,2.41,0,0,0,.71,1.73,2.46,2.46,0,0,0,1.74.72h4.08a.73.73,0,0,1,0,1.46H8.53a3.85,3.85,0,0,1-2.78-1.14A3.93,3.93,0,0,1,4.6,15.4V7.87A3.94,3.94,0,0,1,5.76,5.09,3.88,3.88,0,0,1,8.54,4H16Z" transform="translate(-4.45 -3.8)"/></g></svg>',
  print: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.05 16.04"><g><path d="M19.76,15.84a1.29,1.29,0,0,0,.39-.92V8.35A2.05,2.05,0,0,0,19.57,7a1.93,1.93,0,0,0-1.38-.57H6.37a1.95,1.95,0,0,0-2,2v6.56a1.23,1.23,0,0,0,.38.92,1.35,1.35,0,0,0,.93.38h2V14.9l-2,0V8.35a.67.67,0,0,1,.18-.47.62.62,0,0,1,.48-.19H18.18a.6.6,0,0,1,.46.19.66.66,0,0,1,.18.47V14.9h-2v1.32h2A1.35,1.35,0,0,0,19.76,15.84ZM17.52,7.69V5.06a1.31,1.31,0,0,0-.38-.92,1.34,1.34,0,0,0-.94-.38H8.34A1.3,1.3,0,0,0,7,5.06V7.69H8.34V5.06h7.87V7.69h1.31ZM8.34,12.93h7.87l0,5.26H8.34V12.93Zm7.87,5.26v0Zm.65,1.31a.6.6,0,0,0,.46-.19.72.72,0,0,0,.2-.47V12.29a.74.74,0,0,0-.2-.47.6.6,0,0,0-.46-.19H7.68a.6.6,0,0,0-.46.19.72.72,0,0,0-.2.47v6.55a.74.74,0,0,0,.2.47.6.6,0,0,0,.46.19h9.18ZM16.67,9.28a.7.7,0,0,0-.94,0,.63.63,0,0,0-.18.46.67.67,0,0,0,.18.47.68.68,0,0,0,.94,0,.66.66,0,0,0,.18-.47A.58.58,0,0,0,16.67,9.28Z" transform="translate(-4.25 -3.61)"/></g></svg>',
  template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.27 15.64"><g><path d="M18.18,19.16a1,1,0,0,0,1-1V5.73a1,1,0,0,0-1-1h-2v1h2V18.19H6.37V5.73h2v-1h-2A.94.94,0,0,0,5.68,5a1,1,0,0,0-.29.7V18.18a.94.94,0,0,0,.29.69,1,1,0,0,0,.69.29H18.18ZM9.82,10.31h4.92a.49.49,0,0,0,.35-.15.47.47,0,0,0,.15-.35.49.49,0,0,0-.15-.35.47.47,0,0,0-.35-.15H9.82a.49.49,0,0,0-.35.15.47.47,0,0,0-.15.35.49.49,0,0,0,.15.35.47.47,0,0,0,.35.15Zm5.9,4.92H8.83a.49.49,0,0,0-.35.15.47.47,0,0,0-.15.35.49.49,0,0,0,.15.35.47.47,0,0,0,.35.15h6.89a.49.49,0,0,0,.35-.15.47.47,0,0,0,.15-.35.51.51,0,0,0-.5-.5ZM7.36,12.77a.49.49,0,0,0,.15.35.47.47,0,0,0,.35.15h8.85a.49.49,0,0,0,.35-.15.47.47,0,0,0,.15-.35.49.49,0,0,0-.15-.35.47.47,0,0,0-.35-.15H7.85a.49.49,0,0,0-.35.15.52.52,0,0,0-.14.35Z" transform="translate(-5.14 -3.77)"/><path d="M14.24,6.71a1,1,0,0,0,1-1,1,1,0,0,0-1-1,1,1,0,0,0-1-1h-2a.94.94,0,0,0-.69.28,1,1,0,0,0-.29.7A.94.94,0,0,0,9.62,5a.91.91,0,0,0-.29.69,1,1,0,0,0,.29.7,1,1,0,0,0,.69.29h3.93Z" transform="translate(-5.14 -3.77)"/></g></svg>',
  line_height: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 13.56"><g><path d="M4.4,4.88V8.26a2,2,0,0,0,.5.39s.1,0,.18-.12a.62.62,0,0,0,.17-.28c.06-.19.13-.44.21-.74s.14-.52.19-.66a.58.58,0,0,1,.21-.3,2.41,2.41,0,0,1,.63-.21,3.83,3.83,0,0,1,.88-.12,9.15,9.15,0,0,1,1.31.06.16.16,0,0,1,.11,0,.26.26,0,0,1,.06.14,4,4,0,0,1,0,.49v2l.05,3.77c0,1.41,0,2.68-.05,3.81a1.79,1.79,0,0,1-.11.49,10.68,10.68,0,0,1-1.4.45,1.12,1.12,0,0,0-.69.43v.31l0,.22.61,0c.85-.08,1.54-.12,2.06-.12a19.76,19.76,0,0,1,2.09.08,15.08,15.08,0,0,0,1.64.08,1.4,1.4,0,0,0,.29,0,1.58,1.58,0,0,0,0-.26l-.05-.43a2.26,2.26,0,0,0-.43-.17l-.77-.22-.15,0a2.55,2.55,0,0,1-.78-.28,2.56,2.56,0,0,1-.11-.75l0-1.29,0-3.15V7.53a10.51,10.51,0,0,1,.06-1.2,3.83,3.83,0,0,1,.6,0l1.88,0a2.18,2.18,0,0,1,.38,0,.45.45,0,0,1,.23.17.9.9,0,0,1,.05.25c0,.16.06.35.1.58a3.33,3.33,0,0,0,.14.55A6.39,6.39,0,0,0,15,9a2.91,2.91,0,0,0,.6-.15,2.77,2.77,0,0,0,0-.46l0-.51,0-2.95-.25,0-.38,0L15,4.94a.71.71,0,0,1-.18.15.45.45,0,0,1-.25.07l-.29,0H8.75l-.15,0H7.45a17,17,0,0,1-1.86,0L5.36,5l-.25-.13ZM19.75,16.14h-.69v-9h.69A.4.4,0,0,0,20.13,7c.06-.11,0-.24-.1-.39L18.92,5.15a.52.52,0,0,0-.86,0L17,6.58c-.12.15-.16.28-.1.39s.18.16.38.16h.69v9h-.69a.4.4,0,0,0-.38.16c-.06.11,0,.24.1.39l1.11,1.43a.52.52,0,0,0,.86,0L20,16.69c.12-.15.16-.28.1-.39a.4.4,0,0,0-.38-.16Z" transform="translate(-4.4 -4.86)"/></g></svg>',
  paragraph_style: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.81 15.74"><g><path d="M18.18,3.76v2h-2V19.5h-2V5.73h-2V19.5h-2V11.63a3.94,3.94,0,0,1,0-7.87h7.87Z" transform="translate(-6.37 -3.76)"/></g></svg>',
  text_style: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.76 15.74"><g><path d="M17.68,6.71a2.22,2.22,0,0,0,1.06-.22.74.74,0,0,0,.42-.7.73.73,0,0,0-.08-.33.67.67,0,0,0-.17-.22,1,1,0,0,0-.31-.15L18.26,5l-.45-.09A15.27,15.27,0,0,0,13.26,5V4.74c0-.66-.63-1-1.92-1-.24,0-.43.15-.59.46a4,4,0,0,0-.36,1.14h0v0a26.45,26.45,0,0,1-3.5.35A2,2,0,0,0,5.77,6a.84.84,0,0,0-.37.79,2.14,2.14,0,0,0,.41,1.29,1.23,1.23,0,0,0,1.05.63,16.62,16.62,0,0,0,3.29-.45l-.34,3.35c-.16,1.61-.29,2.9-.37,3.86s-.12,1.66-.12,2.09l0,.65a5.15,5.15,0,0,0,.05.6,1.28,1.28,0,0,0,.16.54.34.34,0,0,0,.28.18,1.16,1.16,0,0,0,.79-.46,3.66,3.66,0,0,0,.68-1,22.08,22.08,0,0,0,1-4.33q.49-3.1.78-6.15a24.69,24.69,0,0,1,4.62-.84Z" transform="translate(-5.4 -3.76)"/></g></svg>',
  save: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M18.53,19.5l.2-.05A1.78,1.78,0,0,0,20.13,18l0-.09V7.14a2,2,0,0,0-.28-.64A3.18,3.18,0,0,0,19.43,6c-.5-.52-1-1-1.55-1.54A2.59,2.59,0,0,0,17.37,4a1.83,1.83,0,0,0-.61-.25H6l-.21,0a1.78,1.78,0,0,0-1.4,1.49l0,.1V17.87a2.49,2.49,0,0,0,.09.37,1.79,1.79,0,0,0,1.44,1.23l.09,0Zm-6.25-.6H6.92a.61.61,0,0,1-.68-.48.78.78,0,0,1,0-.22V12.3a.62.62,0,0,1,.69-.68H17.64a.62.62,0,0,1,.69.69V18.2a.64.64,0,0,1-.71.69H12.28ZM12,9.81H8.15a.63.63,0,0,1-.72-.71v-4a.64.64,0,0,1,.72-.72h7.66a.64.64,0,0,1,.72.72v4a.65.65,0,0,1-.74.72ZM13.5,5V9.18h1.78V5Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  blockquote: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.082 475.081"><g><path d="M164.45,219.27h-63.954c-7.614,0-14.087-2.664-19.417-7.994c-5.327-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177,7.139-37.401,21.416-51.678c14.276-14.272,31.503-21.411,51.678-21.411h18.271c4.948,0,9.229-1.809,12.847-5.424c3.616-3.617,5.424-7.898,5.424-12.847V54.819c0-4.948-1.809-9.233-5.424-12.85c-3.617-3.612-7.898-5.424-12.847-5.424h-18.271c-19.797,0-38.684,3.858-56.673,11.563c-17.987,7.71-33.545,18.132-46.68,31.267c-13.134,13.129-23.553,28.688-31.262,46.677C3.855,144.039,0,162.931,0,182.726v200.991c0,15.235,5.327,28.171,15.986,38.834c10.66,10.657,23.606,15.985,38.832,15.985h109.639c15.225,0,28.167-5.328,38.828-15.985c10.657-10.663,15.987-23.599,15.987-38.834V274.088c0-15.232-5.33-28.168-15.994-38.832C192.622,224.6,179.675,219.27,164.45,219.27z"/><path d="M459.103,235.256c-10.656-10.656-23.599-15.986-38.828-15.986h-63.953c-7.61,0-14.089-2.664-19.41-7.994c-5.332-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177,7.139-37.401,21.409-51.678c14.271-14.272,31.497-21.411,51.682-21.411h18.267c4.949,0,9.233-1.809,12.848-5.424c3.613-3.617,5.428-7.898,5.428-12.847V54.819c0-4.948-1.814-9.233-5.428-12.85c-3.614-3.612-7.898-5.424-12.848-5.424h-18.267c-19.808,0-38.691,3.858-56.685,11.563c-17.984,7.71-33.537,18.132-46.672,31.267c-13.135,13.129-23.559,28.688-31.265,46.677c-7.707,17.987-11.567,36.879-11.567,56.674v200.991c0,15.235,5.332,28.171,15.988,38.834c10.657,10.657,23.6,15.985,38.828,15.985h109.633c15.229,0,28.171-5.328,38.827-15.985c10.664-10.663,15.985-23.599,15.985-38.834V274.088C475.082,258.855,469.76,245.92,459.103,235.256z"/></g></svg>',
  arrow_down: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 8.67"><g><path d="M18.79,7.52a.8.8,0,0,1,.56-.23.82.82,0,0,1,.79.79.8.8,0,0,1-.23.56l-7.07,7.07a.79.79,0,0,1-.57.25.77.77,0,0,1-.57-.25h0L4.64,8.65a.8.8,0,0,1-.23-.57.82.82,0,0,1,.79-.79.8.8,0,0,1,.56.23L12.28,14l3.26-3.26,3.25-3.26Z" transform="translate(-4.41 -7.29)"/></g></svg>',
  align_justify: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm0,5.9H20.15v-2H4.41v2Zm0,3.94H20.15v-2H4.41v2Zm0,3.93h7.87v-2H4.41v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
  align_left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm11.8,3.94H4.41v2H16.22v-2Zm-11.8,5.9H18.18v-2H4.41v2Zm0,3.93h9.84v-2H4.41v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
  align_right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm3.93,5.9H20.15v-2H8.34v2Zm-2,3.94H20.14v-2H6.37v2Zm3.94,3.93h9.84v-2H10.31v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
  align_center: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm2,3.94v2H18.18v-2H6.37Zm-1,5.9H19.16v-2H5.39v2Zm2,3.93H17.2v-2H7.36v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
  font_color: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.61"><g><path d="M18.5,15.57,14.28,4.32h-3.4L6.65,15.57h3l.8-2.26h4.23l.8,2.26h3ZM14,11.07H11.14L12.54,7,13.25,9c.41,1.18.64,1.86.7,2ZM4.41,16.69v2.24H20.15V16.69H4.41Z" transform="translate(-4.41 -4.32)"/></g></svg>',
  highlight_color: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.66 15.74"><g><path d="M12.32,9.31,13.38,13H11.21l.52-1.83q.46-1.61.54-1.83ZM4.44,3.76H20.1V19.5H4.44V3.76ZM14.71,17.32h2.63L13.7,6H10.89L7.26,17.32H9.89l.63-2.24h3.55l.32,1.12c.18.65.29,1,.32,1.12Z" transform="translate(-4.44 -3.76)"/></g></svg>',
  list_bullets: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 12.37"><g><path d="M7.77,16.12a1.59,1.59,0,0,0-.49-1.18,1.62,1.62,0,0,0-1.19-.49,1.68,1.68,0,1,0,0,3.36,1.67,1.67,0,0,0,1.68-1.69Zm0-4.48A1.67,1.67,0,0,0,6.09,10,1.68,1.68,0,0,0,4.9,12.82a1.62,1.62,0,0,0,1.19.49,1.67,1.67,0,0,0,1.68-1.67Zm12.38,3.64a.27.27,0,0,0-.08-.19.28.28,0,0,0-.2-.09H9.19a.28.28,0,0,0-.2.08.29.29,0,0,0-.08.19V17a.27.27,0,0,0,.28.28H19.87a.27.27,0,0,0,.19-.08.24.24,0,0,0,.08-.2V15.28ZM7.77,7.13a1.63,1.63,0,0,0-.49-1.2,1.61,1.61,0,0,0-1.19-.49,1.61,1.61,0,0,0-1.19.49,1.71,1.71,0,0,0,0,2.4,1.62,1.62,0,0,0,1.19.49,1.61,1.61,0,0,0,1.19-.49,1.63,1.63,0,0,0,.49-1.2Zm12.38,3.66a.28.28,0,0,0-.08-.2.29.29,0,0,0-.19-.08H9.19a.27.27,0,0,0-.28.28v1.69a.27.27,0,0,0,.08.19.24.24,0,0,0,.2.08H19.87a.27.27,0,0,0,.19-.08.25.25,0,0,0,.08-.19V10.79Zm0-4.5a.27.27,0,0,0-.08-.19A.25.25,0,0,0,19.88,6H9.19A.28.28,0,0,0,9,6.1a.26.26,0,0,0-.08.19V8A.27.27,0,0,0,9,8.17a.24.24,0,0,0,.2.08H19.87a.27.27,0,0,0,.19-.08A.25.25,0,0,0,20.14,8V6.29Z" transform="translate(-4.41 -5.44)"/></g></svg>',
  list_number: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.69 15.74"><g><path d="M7.66,18a1.24,1.24,0,0,0-.26-.78,1.17,1.17,0,0,0-.72-.42l.85-1V15H4.58v1.34h.94v-.46l.85,0h0c-.11.11-.22.23-.32.35s-.23.27-.37.47L5.39,17l.23.51c.61-.05.92.11.92.49a.42.42,0,0,1-.18.37.79.79,0,0,1-.45.12A1.41,1.41,0,0,1,5,18.15l-.51.77A2.06,2.06,0,0,0,6,19.5a1.8,1.8,0,0,0,1.2-.41A1.38,1.38,0,0,0,7.66,18Zm0-5.54H6.75V13H5.63A.72.72,0,0,1,6,12.51a5.45,5.45,0,0,1,.66-.45,2.71,2.71,0,0,0,.67-.57,1.19,1.19,0,0,0,.31-.81,1.29,1.29,0,0,0-.45-1,1.86,1.86,0,0,0-2-.11,1.51,1.51,0,0,0-.62.7l.74.52A.87.87,0,0,1,6,10.28a.51.51,0,0,1,.35.12.42.42,0,0,1,.13.33.55.55,0,0,1-.21.4,3,3,0,0,1-.5.38c-.19.13-.39.27-.58.42a2,2,0,0,0-.5.6,1.63,1.63,0,0,0-.21.81,3.89,3.89,0,0,0,.05.48h3.2V12.44Zm12.45,2.82a.27.27,0,0,0-.08-.19.28.28,0,0,0-.21-.08H9.1a.32.32,0,0,0-.21.08.24.24,0,0,0-.08.2V17a.27.27,0,0,0,.08.19.3.3,0,0,0,.21.08H19.83a.32.32,0,0,0,.21-.08.25.25,0,0,0,.08-.19V15.26ZM7.69,7.32h-1V3.76H5.8L4.6,4.88l.63.68a1.85,1.85,0,0,0,.43-.48h0l0,2.24H4.74V8.2h3V7.32Zm12.43,3.42a.27.27,0,0,0-.08-.19.28.28,0,0,0-.21-.08H9.1a.32.32,0,0,0-.21.08.24.24,0,0,0-.08.2v1.71a.27.27,0,0,0,.08.19.3.3,0,0,0,.21.08H19.83a.32.32,0,0,0,.21-.08.25.25,0,0,0,.08-.19V10.74Zm0-4.52A.27.27,0,0,0,20,6,.28.28,0,0,0,19.83,6H9.1A.32.32,0,0,0,8.89,6a.24.24,0,0,0-.08.19V7.93a.27.27,0,0,0,.08.19.32.32,0,0,0,.21.08H19.83A.32.32,0,0,0,20,8.12a.26.26,0,0,0,.08-.2V6.22Z" transform="translate(-4.43 -3.76)"/></g></svg>',
  table: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M4.41,8.05V3.76H8.7V8.05H4.41Zm5.71,0V3.76h4.3V8.05h-4.3Zm5.74-4.29h4.29V8.05H15.86V3.76Zm-11.45,10V9.48H8.7v4.3H4.41Zm5.71,0V9.48h4.3v4.3h-4.3Zm5.74,0V9.48h4.29v4.3H15.86ZM4.41,19.5V15.21H8.7V19.5H4.41Zm5.71,0V15.21h4.3V19.5h-4.3Zm5.74,0V15.21h4.29V19.5H15.86Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  horizontal_rule: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 2.24"><g><path d="M20.15,12.75V10.51H4.41v2.24H20.15Z" transform="translate(-4.41 -10.51)"/></g></svg>',
  show_blocks: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.66 15.67"><g><path d="M19.72,5.58a1.64,1.64,0,0,0-1.64-1.64H6.23a1.62,1.62,0,0,0-1.16.48,1.63,1.63,0,0,0-.48,1.16V9.63a1.6,1.6,0,0,0,.48,1.16,1.62,1.62,0,0,0,1.16.47H18.09a1.67,1.67,0,0,0,1.16-.47,1.62,1.62,0,0,0,.48-1.16V5.58Zm-.94,4.05a.68.68,0,0,1-.7.7H6.23a.66.66,0,0,1-.48-.2.74.74,0,0,1-.21-.5V5.58a.66.66,0,0,1,.2-.48.71.71,0,0,1,.48-.21H18.08a.74.74,0,0,1,.5.21.66.66,0,0,1,.2.48ZM6.48,7.72a.21.21,0,0,0,.17-.07.22.22,0,0,0,.07-.17V7.06a1.27,1.27,0,0,1,.11-.52.37.37,0,0,1,.36-.23H8.77A.25.25,0,0,0,9,6.17a.19.19,0,0,0,0-.23.27.27,0,0,0-.2-.12H7.19a.88.88,0,0,0-.72.39,1.51,1.51,0,0,0-.23.85v.42a.24.24,0,0,0,.24.24Zm-.19.81a.21.21,0,0,0,.17-.07.26.26,0,0,0,.07-.17.24.24,0,0,0-.24-.24.2.2,0,0,0-.16.09.2.2,0,0,0-.07.16.22.22,0,0,0,.07.17.23.23,0,0,0,.16.06Zm8.46,5.1a1.63,1.63,0,0,0-.47-1.16A1.61,1.61,0,0,0,13.12,12H6.23a1.6,1.6,0,0,0-1.16.46,1.62,1.62,0,0,0-.48,1.16v4.05a1.64,1.64,0,0,0,1.64,1.64h6.89a1.6,1.6,0,0,0,1.16-.48,1.62,1.62,0,0,0,.47-1.16Zm-.94,4a.7.7,0,0,1-.2.49.65.65,0,0,1-.5.2H6.23a.66.66,0,0,1-.48-.2.75.75,0,0,1-.21-.49v-4a.74.74,0,0,1,.21-.5.66.66,0,0,1,.48-.2h6.89a.68.68,0,0,1,.7.7v4Zm6.15,0v-4a1.6,1.6,0,0,0-.48-1.16A1.67,1.67,0,0,0,18.32,12H17.1a1.63,1.63,0,0,0-1.16.47,1.61,1.61,0,0,0-.47,1.16v4a1.67,1.67,0,0,0,.47,1.16,1.62,1.62,0,0,0,1.16.48h1.22A1.64,1.64,0,0,0,20,17.68Zm-.94-4v4a.75.75,0,0,1-.21.49.62.62,0,0,1-.48.2H17.11a.69.69,0,0,1-.5-.2.7.7,0,0,1-.2-.49v-4a.68.68,0,0,1,.7-.7h1.22a.66.66,0,0,1,.48.2.72.72,0,0,1,.21.5Z" transform="translate(-4.44 -3.79)"/></g></svg>',
  cancel: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M14.15,11.63l5.61,5.61a1.29,1.29,0,0,1,.38.93,1.27,1.27,0,0,1-.4.93,1.25,1.25,0,0,1-.92.4,1.31,1.31,0,0,1-.94-.4l-5.61-5.61L6.67,19.1a1.31,1.31,0,0,1-.94.4,1.24,1.24,0,0,1-.92-.4,1.27,1.27,0,0,1-.4-.93,1.33,1.33,0,0,1,.38-.93l5.61-5.63L4.79,6a1.26,1.26,0,0,1-.38-.93,1.22,1.22,0,0,1,.4-.92,1.28,1.28,0,0,1,.92-.39,1.38,1.38,0,0,1,.94.38l5.61,5.61,5.61-5.61a1.33,1.33,0,0,1,.94-.38,1.26,1.26,0,0,1,.92.39,1.24,1.24,0,0,1,.4.92,1.29,1.29,0,0,1-.39.93L17,8.81l-2.8,2.82Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.77"><g><path d="M8.77,8.72a.88.88,0,0,1-.61-.27.82.82,0,0,1-.25-.61.89.89,0,0,1,.25-.62A.82.82,0,0,1,8.77,7a.81.81,0,0,1,.61.25.83.83,0,0,1,.27.62.81.81,0,0,1-.25.61.91.91,0,0,1-.63.27Zm9.62-5a1.74,1.74,0,0,1,1.76,1.76V17.76a1.74,1.74,0,0,1-1.76,1.76H6.16A1.74,1.74,0,0,1,4.4,17.76V5.51A1.74,1.74,0,0,1,6.16,3.75H18.39Zm0,1.75H6.16v8L8.53,11.8a.94.94,0,0,1,.54-.17.86.86,0,0,1,.54.2L11.09,13l3.64-4.55a.78.78,0,0,1,.34-.25.85.85,0,0,1,.42-.07.89.89,0,0,1,.39.12.78.78,0,0,1,.28.29l2.24,3.67V5.51Zm0,12.24V15.6L15.3,10.53,11.89,14.8a.89.89,0,0,1-.59.32.82.82,0,0,1-.64-.18L9,13.62,6.16,15.74v2Z" transform="translate(-4.4 -3.75)"/></g></svg>',
  video: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.55"><g><path d="M20.15,10.26V18.9l-3.94-1.57v1.2H4.41V10.66H16.22v1.23l2-.81,2-.82ZM14.64,17h0V12.54h0v-.31H6V17h8.67Zm3.94-.37v-4l-2.37,1v2l1.18.48,1.19.48ZM7.94,9.86A2.77,2.77,0,0,1,5.19,7.11a2.76,2.76,0,0,1,5.51,0A2.78,2.78,0,0,1,7.94,9.86Zm0-3.93a1.21,1.21,0,0,0-.83.35,1.15,1.15,0,0,0-.34.84A1.09,1.09,0,0,0,7.11,8,1.15,1.15,0,0,0,8,8.28,1.13,1.13,0,0,0,9.11,7.12,1.16,1.16,0,0,0,7.94,5.93Zm5.9,3.93a2.34,2.34,0,0,1-1.67-.68,2.3,2.3,0,0,1-.68-1.67,2.35,2.35,0,0,1,4-1.67,2.37,2.37,0,0,1,0,3.34,2.33,2.33,0,0,1-1.68.68Zm0-3.14a.75.75,0,1,0,.55.22.73.73,0,0,0-.55-.22Z" transform="translate(-4.41 -4.35)"/></g></svg>',
  link: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.72"><g><path d="M13.05,13.63a.24.24,0,0,1,.15.22L13.42,16a.19.19,0,0,1-.08.18l-2.12,2.14a4.08,4.08,0,0,1-1.29.85A4,4,0,0,1,4.71,17a3.92,3.92,0,0,1-.3-1.52A4,4,0,0,1,4.71,14a3.91,3.91,0,0,1,.87-1.3L7.7,10.56a.25.25,0,0,1,.2-.06l2.17.22a.21.21,0,0,1,.19.15.24.24,0,0,1,0,.25L7.12,14.23a1.81,1.81,0,0,0,0,2.58,1.78,1.78,0,0,0,1.29.52,1.74,1.74,0,0,0,1.28-.52L12.8,13.7a.24.24,0,0,1,.25-.07ZM19,4.92a4,4,0,0,1,0,5.66L16.86,12.7a.25.25,0,0,1-.17.08l-2.2-.23a.21.21,0,0,1-.19-.15.22.22,0,0,1,0-.25L17.44,9a1.81,1.81,0,0,0,0-2.58,1.78,1.78,0,0,0-1.29-.52,1.74,1.74,0,0,0-1.28.52L11.76,9.57a.21.21,0,0,1-.25,0,.24.24,0,0,1-.16-.21l-.22-2.17a.19.19,0,0,1,.08-.18l2.12-2.14a4.08,4.08,0,0,1,1.29-.85,4.05,4.05,0,0,1,3.06,0,3.85,3.85,0,0,1,1.3.85ZM5.84,9.82a.25.25,0,0,1-.18-.08.19.19,0,0,1-.07-.19l.11-.77a.2.2,0,0,1,.11-.17.24.24,0,0,1,.2,0l2.5.72a.25.25,0,0,1,.15.27.22.22,0,0,1-.23.21l-2.59,0Zm4.12-2-.73-2.5a.27.27,0,0,1,0-.2A.21.21,0,0,1,9.41,5L10.19,5a.25.25,0,0,1,.19,0,.23.23,0,0,1,.08.18l-.05,2.61a.2.2,0,0,1-.19.23h0A.22.22,0,0,1,10,7.85Zm8.76,5.58a.25.25,0,0,1,.18.08.23.23,0,0,1,.06.2l-.11.77a.25.25,0,0,1-.11.17.21.21,0,0,1-.12,0l-.08,0L16,14a.25.25,0,0,1-.15-.27.22.22,0,0,1,.22-.21l1.29,0,1.33,0Zm-4.12,2,.74,2.51a.28.28,0,0,1,0,.2.23.23,0,0,1-.18.11l-.8.11a.23.23,0,0,1-.17-.07.25.25,0,0,1-.08-.18l0-2.61a.22.22,0,0,1,.22-.22.21.21,0,0,1,.26.15Z" transform="translate(-4.41 -3.77)"/></g></svg>',
  math: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.81 15.73"><g><path d="M17.19,5.73a1,1,0,0,0,.71-.29,1,1,0,0,0,.28-.7,1,1,0,0,0-1-1H7.35a1,1,0,0,0-1,1,.77.77,0,0,0,.13.47h0l4.58,6.43L6.68,17.81a1.25,1.25,0,0,0-.29.71.94.94,0,0,0,.28.7.92.92,0,0,0,.69.28H17.2a1,1,0,0,0,.71-.28,1,1,0,0,0,0-1.39.92.92,0,0,0-.71-.29H9.26l3.87-5.43a.86.86,0,0,0,0-.95L9.26,5.73h7.93Z" transform="translate(-6.38 -3.77)"/></g></svg>',
  unlink: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.72"><g><path d="M19,18.32a4,4,0,0,0,0-5.68L15.85,9.5l-1.17,1.55L17.57,14a2,2,0,0,1,.61,1.47,2.08,2.08,0,0,1-2.09,2.09,2,2,0,0,1-1.47-.61l-.38-.37-1.74,1,.8.78a4,4,0,0,0,5.68,0ZM8,9.77a2,2,0,0,1-1.27-1,1.89,1.89,0,0,1-.21-1.57A2.1,2.1,0,0,1,7.45,6,2,2,0,0,1,9,5.76L12.27,7.2l.49-2L9.48,3.9a4,4,0,0,0-3.06.41A3.82,3.82,0,0,0,4.56,6.73a3.8,3.8,0,0,0,.4,3A3.78,3.78,0,0,0,7.39,11.6l5.38,2,.49-2-2.64-.94L8,9.77Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  table_header: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.74"><g><path d="M17,19.5v-.78H15.5v.78H17Zm-3,0v-.78H12.5v.78H14Zm-3,0v-.78H9.53v.78H11Zm-3,0v-.78H6.53v.78H8Zm10.55,0a1.73,1.73,0,0,0,.85-.35,1.67,1.67,0,0,0,.56-.76l-.71-.31a1.21,1.21,0,0,1-.35.4,1.34,1.34,0,0,1-.53.23l.08.38c.06.24.09.38.1.41Zm-13.7-.63.55-.55A.77.77,0,0,1,5.25,18a1.31,1.31,0,0,1-.06-.38v-.38H4.41v.38a2,2,0,0,0,.12.68,1.6,1.6,0,0,0,.35.57Zm15.27-2.12V15.26h-.78v1.49h.78Zm-15-1V14.23H4.41v1.49h.78Zm15-2V12.26h-.78v1.49h.78Zm-15-1V11.22H4.41v1.51h.78Zm15-2V9.26h-.78v1.51h.78Zm-15-1V8.17H4.41V9.74h.78Zm15-2V6.28h-.78V7.77h.78Zm-15-1.11V5.33L4.48,5.1a.77.77,0,0,0-.07.27,2.72,2.72,0,0,0,0,.28v1h.79ZM19.21,5l.63-.4A1.62,1.62,0,0,0,19.16,4a1.94,1.94,0,0,0-.91-.22v.78a1.31,1.31,0,0,1,.56.12.88.88,0,0,1,.4.36ZM6,4.54H7.78V3.76H6a.82.82,0,0,0-.28.06l.12.35c.07.21.1.33.11.36Zm10.8,0V3.76H15.28v.78h1.49Zm-3,0V3.76H12.28v.78h1.49Zm-3,0V3.76H9.28v.78h1.51ZM6,10.84h12.6V6.91H6Z" transform="translate(-4.4 -3.76)"/></g></svg>',
  merge_cell: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 15.74"><g><path d="M18.92,13.5h1.23v4.15A1.84,1.84,0,0,1,18.3,19.5H14V18.27H18.3a.6.6,0,0,0,.44-.18.59.59,0,0,0,.18-.44V13.5ZM18.3,3.76a1.84,1.84,0,0,1,1.85,1.85V9.82H18.92V5.6a.6.6,0,0,0-.18-.44A.59.59,0,0,0,18.3,5H14V3.76H18.3Zm1.85,8.51H15.6L17.26,14l-.86.86-3.14-3.17L16.4,8.51l.86.86L15.62,11h4.54v1.24Zm-13.9,6h4.27V19.5H6.25A1.84,1.84,0,0,1,4.4,17.65V13.5H5.63v4.15a.61.61,0,0,0,.62.62Zm0-14.51h4.27V5H6.25a.6.6,0,0,0-.44.18.57.57,0,0,0-.17.43V9.81H4.41V5.6A1.83,1.83,0,0,1,6.25,3.76Zm5,7.9L8.15,14.83,7.3,14,9,12.27H4.41V11H8.94L7.3,9.38,7.73,9l.43-.43Z" transform="translate(-4.4 -3.76)"/></g></svg>',
  split_cell: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.74"><g><path d="M10.37,12.25H6.74L8.4,13.94l-.87.86L4.41,11.63,7.53,8.5l.87.86L6.74,11h3.62v1.23Zm9.78-.61L17,14.81,16.13,14l1.66-1.69H14.16V11h3.63L16.13,9.37l.43-.43A5.24,5.24,0,0,1,17,8.51ZM18.9,8.22V5.61a.57.57,0,0,0-.18-.43A.65.65,0,0,0,18.29,5H12.88V18.28h5.41a.7.7,0,0,0,.44-.18.57.57,0,0,0,.18-.43V15h1.23v2.64a1.84,1.84,0,0,1-1.85,1.83h-12A1.84,1.84,0,0,1,4.94,19a1.81,1.81,0,0,1-.54-1.29V15H5.63v2.64a.57.57,0,0,0,.18.43.67.67,0,0,0,.44.18h5.41V5H6.25a.7.7,0,0,0-.44.18.56.56,0,0,0-.17.43V8.22H4.41V5.61A1.8,1.8,0,0,1,5,4.31a1.91,1.91,0,0,1,1.31-.55h12a1.89,1.89,0,0,1,1.31.55,1.8,1.8,0,0,1,.54,1.3V8.23H18.9Z" transform="translate(-4.4 -3.76)"/></g></svg>',
  caption: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.79"><g><path d="M4.41,18.52H20.15v-2H4.41ZM20,4.73H18.07V6h.65v.65H20V4.73ZM17,6V4.73H14.55V6H17ZM13.49,6V4.73H11V6h2.47ZM10,6V4.73H7.5V6H10ZM5.79,6h.65V4.73H4.5V6.67H5.8V6ZM4.5,11.34H5.79V8.48H4.5ZM6.44,13.8H5.79v-.65H4.5v1.94H6.44ZM17,15.09V13.8H14.55v1.29H17Zm-3.52,0V13.8H11v1.29h2.47Zm-3.53,0V13.8H7.5v1.29H10ZM20,13.16H18.72v.65h-.65V15.1H20Zm-1.29-1.82H20V8.48h-1.3v2.86Z" transform="translate(-4.41 -4.73)"/></g></svg>',
  edit: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.73"><g><path d="M7.51,5.68h6l1.52-1.57H6.94a2.4,2.4,0,0,0-1.79.82A2.8,2.8,0,0,0,4.41,6.8V17a2.55,2.55,0,0,0,.75,1.8A2.48,2.48,0,0,0,7,19.5H17.22a2.57,2.57,0,0,0,1.83-.74,2.52,2.52,0,0,0,.77-1.8V8.83l-1.58,1.54v6a1.54,1.54,0,0,1-1.53,1.53H7.51A1.54,1.54,0,0,1,6,16.41V7.21A1.52,1.52,0,0,1,7.51,5.68Zm5.63,7.47h0L10.7,10.74l-1,3.38,1.71-.48,1.7-.49Zm.34-.34h0l5.36-5.32L16.4,5.08,11,10.4l1.23,1.21,1.21,1.2ZM19.93,6.4a.82.82,0,0,0,.22-.48A.54.54,0,0,0,20,5.47L18.45,4A.67.67,0,0,0,18,3.77a.7.7,0,0,0-.48.21l-.74.72,2.44,2.43.37-.37.35-.36Z" transform="translate(-4.41 -3.77)"/></g></svg>',
  delete: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 15.74"><g><path d="M19.16,6.71a.94.94,0,0,0,.69-.28.91.91,0,0,0,.29-.68A1,1,0,0,0,19.85,5a.93.93,0,0,0-.69-.3H14.24A.94.94,0,0,0,14,4.06a.92.92,0,0,0-.7-.3h-2a1,1,0,0,0-.7.3.93.93,0,0,0-.28.68H5.39A.92.92,0,0,0,4.7,5a1,1,0,0,0-.29.71.91.91,0,0,0,.29.68,1,1,0,0,0,.69.28H19.16Zm-12.79,1a1,1,0,0,0-.7.3.94.94,0,0,0-.28.69v8.85A1.88,1.88,0,0,0,6,18.93a1.9,1.9,0,0,0,1.39.57H17.2a1.87,1.87,0,0,0,1.39-.58,1.91,1.91,0,0,0,.58-1.39V8.68A1,1,0,0,0,18.88,8a.89.89,0,0,0-.7-.29,1,1,0,0,0-.69.29.92.92,0,0,0-.29.68v7.87a1,1,0,0,1-1,1H8.34a.94.94,0,0,1-.69-.28,1,1,0,0,1-.29-.71V8.68a1,1,0,0,0-1-1Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  modify: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.74"><g><path d="M19.79,15.23a.66.66,0,0,1,.3.38.59.59,0,0,1-.07.48l-.8,1.38a.66.66,0,0,1-.38.3.59.59,0,0,1-.48-.07l-.68-.38a4.55,4.55,0,0,1-1.34.77v.78a.64.64,0,0,1-.18.45.61.61,0,0,1-.45.18h-1.6a.6.6,0,0,1-.44-.18.66.66,0,0,1-.19-.45v-.78a4.36,4.36,0,0,1-1.32-.77l-.69.38a.58.58,0,0,1-.48.07.66.66,0,0,1-.38-.3l-.38-.66h.83a1.77,1.77,0,0,0,1.23-.52,1.72,1.72,0,0,0,.51-1.23v-.18a3,3,0,0,0,.49-.28l.15.09a1.83,1.83,0,0,0,.88.23A1.75,1.75,0,0,0,15.84,14l.88-1.52a1.7,1.7,0,0,0,.17-1.32,1.66,1.66,0,0,0-.3-.61,1.84,1.84,0,0,0-.51-.45l-.15-.09,0-.29,0-.28.15-.09a1,1,0,0,0,.26-.18l0,.06v.78a4.34,4.34,0,0,1,1.34.77l.68-.38a.68.68,0,0,1,.48-.06.64.64,0,0,1,.38.29l.8,1.38a.58.58,0,0,1,.07.48.63.63,0,0,1-.3.38l-.68.4a3.84,3.84,0,0,1,.08.76,4.13,4.13,0,0,1-.08.78l.34.18.32.2ZM10.17,7.86a1.9,1.9,0,0,1,1.35,3.23,1.85,1.85,0,0,1-1.35.55A1.9,1.9,0,0,1,8.83,8.41a1.92,1.92,0,0,1,1.34-.55Zm1.58,7.2a.73.73,0,0,1-.21.49.66.66,0,0,1-.48.2H9.29a.68.68,0,0,1-.69-.69V14.2a4.75,4.75,0,0,1-1.48-.86l-.75.45a.73.73,0,0,1-.7,0,.63.63,0,0,1-.25-.26L4.54,12a.67.67,0,0,1-.08-.53.71.71,0,0,1,.32-.42l.75-.43a4.8,4.8,0,0,1-.08-.85,4.71,4.71,0,0,1,.08-.85l-.74-.44a.71.71,0,0,1-.32-.42.65.65,0,0,1,.07-.54L5.42,6a.66.66,0,0,1,.42-.32l.18,0a.73.73,0,0,1,.35.09l.75.43A4.68,4.68,0,0,1,8.6,5.33V4.45a.68.68,0,0,1,.69-.69h1.77a.64.64,0,0,1,.48.2.73.73,0,0,1,.21.49v.88a4.75,4.75,0,0,1,1.48.85L14,5.75a.67.67,0,0,1,.34-.09l.18,0a.71.71,0,0,1,.42.32l.89,1.54a.67.67,0,0,1,.06.52.73.73,0,0,1-.32.43l-.75.42a4.8,4.8,0,0,1,.08.85,4.71,4.71,0,0,1-.08.85l.75.43a.66.66,0,0,1,.32.42.73.73,0,0,1-.06.54l-.89,1.52a.69.69,0,0,1-.25.26.7.7,0,0,1-.35.09.64.64,0,0,1-.34-.09l-.75-.45a4.87,4.87,0,0,1-1.48.86v.87ZM7.23,9.75a3,3,0,0,0,.86,2.08,2.94,2.94,0,1,0,4.16-4.16,3,3,0,0,0-2.08-.85A2.94,2.94,0,0,0,7.23,9.75Z" transform="translate(-4.44 -3.76)"/></g></svg>',
  revert: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 14.69"><g><path d="M18.26,15V12.3l1.89-2V15a2.58,2.58,0,0,1-.24,1c-.2.58-.75.92-1.65,1H7.56v2L4.41,15.63,7.56,13v2h10.7ZM6.3,8.28V11L4.41,13V8.28a2.58,2.58,0,0,1,.24-1c.2-.58.75-.92,1.65-1H17v-2l3.15,3.34L17,10.3v-2H6.3Z" transform="translate(-4.4 -4.28)"/></g></svg>',
  auto_size: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M6.71,17.19,6.89,16l1.21-.15A6,6,0,0,1,6.81,13.9a5.78,5.78,0,0,1-.45-2.27A6,6,0,0,1,8.1,7.45a5.83,5.83,0,0,1,4.17-1.73l1-1-1-1A7.89,7.89,0,0,0,5,14.64a7.73,7.73,0,0,0,1.71,2.55Zm5.57,2.31h0A7.86,7.86,0,0,0,17.85,6.07L17.67,7.3l-1.21.15a5.9,5.9,0,0,1,1.29,1.92,5.81,5.81,0,0,1,.45,2.26,5.91,5.91,0,0,1-5.9,5.9l-1,1,.49.49.47.5Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  insert_row_below: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M15.7,1.3c-0.1-0.1-0.1-0.2-0.2-0.2L15.3,1H0.4L0.3,1.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1L0,1.4v7.7l0.1,0.1c0,0.1,0.1,0.1,0.2,0.2l0.1,0.1h2.3V9.3l0.1-0.5L3,8.5l0.1-0.2c-0.1,0-0.2,0-0.3,0H1.2v-6h13.3v6h-1.6c-0.1,0-0.2,0-0.3,0l0.1,0.2l0.2,0.4C12.9,9,13,9.2,13,9.3v0.1h2.3l0.2-0.1c0.1,0,0.1-0.1,0.2-0.2l0.1-0.1V1.4L15.7,1.3z"/><path d="M10.5,7.5C9.9,7.1,9.3,6.8,8.6,6.7c-0.2,0-0.5-0.1-0.7,0c-0.2,0-0.5,0-0.7,0C6.6,6.7,6.1,6.9,5.6,7.3C5.2,7.6,4.7,8,4.4,8.4C4.3,8.6,4.2,8.8,4.2,8.9C4.1,9.1,4,9.3,3.9,9.4C3.9,9.6,3.8,9.7,3.8,9.9c0,0.2-0.1,0.3-0.1,0.5v-0.1c-0.1,0.8,0.1,1.6,0.5,2.4c0.4,0.7,1,1.3,1.7,1.7c0.3,0.2,0.6,0.3,0.9,0.3c0.3,0.1,0.7,0.1,1,0.1c0.3,0,0.7,0,1-0.1c0.3-0.1,0.6-0.2,0.9-0.3c0.5-0.3,0.9-0.6,1.3-1c0.3-0.4,0.6-0.8,0.8-1.3c0.1-0.4,0.2-0.9,0.2-1.4c0-0.5-0.1-1-0.3-1.4C11.5,8.6,11.1,8,10.5,7.5z M10.1,11.3H8.5v1.6H8H7.9H7.3v0v-0.1v-1.4H5.7v-0.4v-0.2v-0.6h0h1.5V8.5h1.2v1.6h1.6V11.3z"/></g></svg>',
  insert_row_above: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M0.1,14.5c0.1,0.1,0.1,0.2,0.2,0.2l0.1,0.1h14.9l0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1l0.1-0.1V6.7l-0.1-0.1c0-0.1-0.1-0.1-0.2-0.2l-0.1-0.1h-2.3v0.1l-0.1,0.5l-0.2,0.4l-0.1,0.2c0.1,0,0.2,0,0.3,0h1.6v6H1.3v-6h1.6c0.1,0,0.2,0,0.3,0L3.1,7.3L2.9,6.9C2.8,6.8,2.8,6.6,2.7,6.5V6.3H0.4L0.3,6.4c-0.1,0-0.1,0.1-0.2,0.2L0,6.7v7.7L0.1,14.5z"/><path d="M5.3,8.3c0.6,0.5,1.2,0.8,1.9,0.9c0.2,0,0.5,0.1,0.7,0c0.2,0,0.5,0,0.7,0c0.6-0.1,1.1-0.3,1.6-0.6c0.5-0.3,0.9-0.7,1.2-1.2c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.4,0.2-0.5c0.1-0.1,0.1-0.3,0.1-0.4C12,5.8,12,5.6,12,5.4v0.1c0.1-0.8-0.1-1.6-0.5-2.4c-0.4-0.7-1-1.3-1.7-1.7C9.5,1.3,9.2,1.2,8.9,1.1C8.5,1,8.2,1,7.9,1c-0.3,0-0.7,0-1,0.1C6.6,1.2,6.3,1.3,6,1.4C5.5,1.7,5.1,2,4.7,2.4C4.4,2.8,4.1,3.3,3.9,3.8C3.8,4.2,3.7,4.7,3.7,5.2c0,0.5,0.1,1,0.3,1.4C4.3,7.2,4.7,7.8,5.3,8.3z M5.7,4.5h1.6V2.9h0.5h0.1h0.6v0v0.1v1.4H10v0.4v0.2v0.6h0H8.5v1.6H7.3V5.7H5.7V4.5z"/></g></svg>',
  insert_column_left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M14.5,15.7c0.1-0.1,0.2-0.1,0.2-0.2l0.1-0.1V0.4l-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1L14.4,0H6.7L6.6,0.1c-0.1,0-0.1,0.1-0.2,0.2L6.3,0.4v2.3h0.1l0.5,0.1L7.3,3l0.2,0.1c0-0.1,0-0.2,0-0.3V1.2h6v13.3h-6v-1.6c0-0.1,0-0.2,0-0.3l-0.2,0.1l-0.4,0.2C6.7,12.9,6.6,13,6.4,13H6.3v2.3l0.1,0.2c0,0.1,0.1,0.1,0.2,0.2l0.1,0.1h7.7L14.5,15.7z"/><path d="M8.3,10.5C8.7,10,9,9.3,9.1,8.6c0-0.2,0.1-0.5,0-0.7c0-0.2,0-0.5,0-0.7C9,6.7,8.8,6.1,8.5,5.7C8.2,5.2,7.8,4.8,7.3,4.5C7.2,4.4,7,4.3,6.9,4.2C6.7,4.1,6.5,4,6.4,4C6.2,3.9,6.1,3.9,5.9,3.8c-0.2,0-0.3-0.1-0.5-0.1h0.1C4.7,3.7,3.8,3.9,3.1,4.3C2.4,4.7,1.8,5.3,1.4,6C1.3,6.3,1.2,6.6,1.1,6.9C1,7.2,1,7.6,1,7.9c0,0.3,0,0.7,0.1,1c0.1,0.3,0.2,0.6,0.3,0.9c0.3,0.5,0.6,0.9,1,1.3c0.4,0.3,0.8,0.6,1.3,0.8C4.2,12,4.7,12.1,5.1,12c0.5,0,1-0.1,1.4-0.3C7.2,11.5,7.8,11.1,8.3,10.5zM4.5,10.1V8.5H2.9V8V7.9V7.3h0H3h1.4V5.7h0.4h0.2h0.6v0v1.5h1.6v1.2H5.7v1.6H4.5z"/></g></svg>',
  insert_column_right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M1.3,0.1C1.2,0.2,1.1,0.2,1.1,0.3L1,0.4v14.9l0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1l0.1,0.1h7.7l0.1-0.1c0.1,0,0.1-0.1,0.2-0.2l0.1-0.1v-2.3H9.3l-0.5-0.1l-0.4-0.2l-0.2-0.1c0,0.1,0,0.2,0,0.3v1.6h-6V1.3h6v1.6c0,0.1,0,0.2,0,0.3l0.2-0.1l0.4-0.2C9,2.9,9.2,2.8,9.3,2.8h0.1V0.5L9.4,0.3c0-0.1-0.1-0.1-0.2-0.2L9.1,0H1.4L1.3,0.1z"/><path d="M7.5,5.3C7,5.8,6.7,6.5,6.6,7.2c0,0.2-0.1,0.5,0,0.7c0,0.2,0,0.5,0,0.7c0.1,0.6,0.3,1.1,0.6,1.6c0.3,0.5,0.7,0.9,1.2,1.2c0.2,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.4,0.2,0.5,0.2c0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.3,0.1,0.5,0.1h-0.1c0.8,0.1,1.6-0.1,2.4-0.5c0.7-0.4,1.3-1,1.7-1.7c0.2-0.3,0.3-0.6,0.3-0.9c0.1-0.3,0.1-0.7,0.1-1c0-0.3,0-0.7-0.1-1c-0.1-0.3-0.2-0.6-0.3-0.9c-0.3-0.5-0.6-0.9-1-1.3C13,4.4,12.5,4.2,12,4c-0.4-0.1-0.9-0.2-1.4-0.2c-0.5,0-1,0.1-1.4,0.2C8.5,4.3,7.9,4.7,7.5,5.3z M11.3,5.7v1.6h1.6v0.5v0.1v0.6h0h-0.1h-1.4v1.6h-0.4h-0.2h-0.6v0V8.5H8.5V7.3h1.6V5.7H11.3z"/></g></svg>',
  delete_row: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 13.83"><g><path d="M4.7,18.46l.12.08H19.73l.12-.08a.58.58,0,0,0,.22-.22l.08-.12,0-7.69-.08-.11a.77.77,0,0,0-.18-.18l-.11-.08-2.31,0-.08.28-.1.29a1.58,1.58,0,0,1-.12.29l-.14.34s0,0,.18,0H18.9v6H5.64v-6H7.35c.14,0,.2,0,.18,0l-.14-.34a2.85,2.85,0,0,1-.12-.29l-.1-.29-.07-.27-2.31,0-.11.08a.77.77,0,0,0-.18.18l-.08.11,0,7.69.08.12a.47.47,0,0,0,.09.12l.13.09ZM12.11,13a4,4,0,0,0,1.46-.21,4.51,4.51,0,0,0,1.31-.71A4,4,0,0,0,16.26,10a4.32,4.32,0,0,0-.08-2.54,4.34,4.34,0,0,0-1-1.52,4.15,4.15,0,0,0-1.54-1,4.34,4.34,0,0,0-1.35-.22A4.07,4.07,0,0,0,11,4.93,3.94,3.94,0,0,0,9.24,6.07,3.92,3.92,0,0,0,8.15,8.88a3.91,3.91,0,0,0,.12.95A4.16,4.16,0,0,0,12.11,13Zm2.35-4.14v.58H10.09V8.27h4.37v.58Z" transform="translate(-4.4 -4.71)"/></g></svg>',
  delete_column: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.81 15.74"><g><path d="M5.66,19.42l.12.08,7.69,0,.11-.08a.77.77,0,0,0,.18-.18l.08-.11,0-2.32-.15,0-.45-.15-.42-.18-.17-.07a1,1,0,0,0,0,.27v1.63h-6V5h6V6.62a.9.9,0,0,0,0,.26l.17-.07.42-.17a3.91,3.91,0,0,1,.45-.15l.15,0,0-2.32L13.75,4a.77.77,0,0,0-.18-.18l-.11-.08H5.79l-.13.07a.63.63,0,0,0-.21.22l-.08.12V19.08l.08.12a.47.47,0,0,0,.09.12.35.35,0,0,0,.12.1Zm9-3.67a4.16,4.16,0,0,0,2.36-.51,4.08,4.08,0,0,0,1.67-1.72,4,4,0,0,0,.35-.91,3.79,3.79,0,0,0,.1-1,4.71,4.71,0,0,0-.11-1,5,5,0,0,0-.3-.87,4.25,4.25,0,0,0-1-1.25,4.49,4.49,0,0,0-1.34-.81A4.26,4.26,0,0,0,15,7.48a3.88,3.88,0,0,0-1.41.25A4.32,4.32,0,0,0,11.86,9,4,4,0,0,0,11,10.94a4.4,4.4,0,0,0-.05.68,4.5,4.5,0,0,0,.05.68,3.93,3.93,0,0,0,.61,1.57,4.22,4.22,0,0,0,1.18,1.2,4.59,4.59,0,0,0,.48.27c.2.1.37.17.5.22a2.44,2.44,0,0,0,.45.12,4.61,4.61,0,0,0,.5.07Zm2.54-4.12v.58H12.87V11h4.37v.59Z" transform="translate(-5.37 -3.76)"/></g></svg>',
  fixed_column_width: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,5H18A1,1 0 0,1 19,6A1,1 0 0,1 18,7H6A1,1 0 0,1 5,6A1,1 0 0,1 6,5M21,2V4H3V2H21M15,8H17V22H15V8M7,8H9V22H7V8M11,8H13V22H11V8Z" /></svg>',
  rotate_left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M0.5,10.2c0,0.1,0,0.2,0,0.3v0.2l0,0c0.1,0.3,0.3,0.6,0.4,0.9l0,0C1,11.8,1.3,12,1.5,11.9h0.1h0.2h0.1c0.1-0.1,0.3-0.3,0.4-0.5v-0.2c0-0.1,0-0.2-0.1-0.3l0,0c-0.2-0.2-0.3-0.4-0.3-0.7l0,0C1.8,10,1.7,9.9,1.5,9.8c-0.1,0-0.2,0-0.3,0H0.9C0.7,9.9,0.6,10,0.5,10.2L0.5,10.2z"/><path d="M2.2,11.5L2.2,11.5L2.2,11.5z"/><path d="M5.9,3.6L5.9,3.6L5.9,3.6z"/><path d="M0.1,7.9c0,0.3,0,0.6,0,0.9l0,0l0,0l0,0l0,0c0,0.2,0.1,0.3,0.2,0.4l0,0c0.2,0.1,0.3,0.2,0.5,0.2l0,0l0,0c0.2,0,0.4-0.1,0.5-0.3l0,0c0-0.1,0.1-0.3,0.1-0.4V8.6l0,0c0-0.2,0-0.5,0-0.7l0,0c0-0.2-0.1-0.4-0.2-0.5C1.1,7.3,0.9,7.2,0.7,7.2S0.3,7.3,0.2,7.4C0.1,7.5,0,7.7,0.1,7.9z"/><path d="M1.9,12.7L1.9,12.7c0,0.2,0,0.4,0.2,0.5l0,0l0.2,0.3l0,0c0.2,0.1,0.3,0.2,0.5,0.4l0,0l0,0l0,0l0,0C2.9,14,3,14.1,3.2,14.1s0.4-0.1,0.5-0.2c0.1-0.2,0.2-0.3,0.2-0.5v-0.1c0-0.2-0.1-0.4-0.2-0.5l0,0l-0.4-0.4l-0.2-0.2l0,0C3,12.1,2.8,12,2.6,12l0,0c-0.2,0-0.4,0.1-0.5,0.2l0,0C2,12.3,1.9,12.5,1.9,12.7z"/><path d="M6.6,15c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.2,0.2,0.4,0.3l0,0c0.3,0,0.5,0,0.7,0h0.3l0,0c0.2,0,0.4-0.1,0.5-0.2c0.1-0.2,0.2-0.3,0.2-0.5l0,0l0,0c0-0.2-0.1-0.4-0.2-0.5l0,0c-0.1-0.1-0.3-0.2-0.5-0.2l0,0H7.9c-0.1,0-0.3,0-0.5,0l0,0H7.3c-0.2-0.1-0.3,0-0.5,0.1l0,0C6.7,14.6,6.6,14.8,6.6,15L6.6,15L6.6,15L6.6,15z"/><path d="M4.2,7.4C4,7.5,4,7.7,4,7.9c0,0.2,0,0.4,0.2,0.5l0,0l3.2,3.2l0,0c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2l0,0l3.2-3.2l0,0c0.1-0.1,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.2-0.5l0,0C11.5,7.3,11,6.7,10,5.8l0,0L8.4,4.2l0,0C8.3,4.1,8.1,4,7.9,4S7.5,4.1,7.4,4.2L4.2,7.4L4.2,7.4z M6.8,9L5.7,7.9l2.2-2.2l2.3,2.2l-2.3,2.2C7.7,9.9,7.3,9.5,6.8,9L6.8,9z"/><path d="M4.1,14.1C4,14.2,4,14.3,4,14.4v0.2l0,0c0.1,0.1,0.2,0.3,0.4,0.4l0,0c0.3,0.1,0.6,0.2,0.9,0.4h0.1h0.1l0,0c0.2,0,0.3-0.1,0.5-0.1l0,0c0.2-0.1,0.3-0.3,0.3-0.4l0,0l0,0l0,0l0,0v-0.2c0-0.1-0.1-0.2-0.1-0.3l0,0C6.1,14.2,6,14.1,5.8,14l0,0c-0.3-0.1-0.5-0.2-0.8-0.2l0,0c-0.1-0.1-0.2-0.1-0.3-0.1H4.5C4.3,13.7,4.2,13.9,4.1,14.1z"/><path d="M9.3,14.4c0,0.1-0.1,0.3,0,0.4V15l0,0c0,0.1,0.1,0.3,0.5,0.4c0.1,0.1,0.3,0.1,0.4,0.1l0,0h0.1l0,0c0.3-0.1,0.6-0.2,0.9-0.3l0,0c0.1-0.1,0.2-0.2,0.3-0.4l0.1-0.3c0-0.1-0.1-0.2-0.1-0.3l0,0c-0.1-0.2-0.2-0.3-0.4-0.4l0,0h-0.3c-0.1,0-0.2,0-0.3,0l0,0c-0.2,0.1-0.5,0.2-0.8,0.3l0,0C9.5,14.1,9.4,14.2,9.3,14.4L9.3,14.4z"/><path d="M11.4,14.7L11.4,14.7L11.4,14.7z"/><path d="M9.5,15.3L9.5,15.3L9.5,15.3z"/><path d="M15.9,7.9c0-1-0.2-2-0.6-3l0,0c-0.4-1-1-1.9-1.7-2.6C12.8,1.6,12,1,11,0.6l0,0C10.1,0.2,9,0,8,0C7.3,0,6.5,0.1,5.8,0.3l0,0C5.2,0.5,4.6,0.8,4,1.1L3.1,0.2l0,0C2.9,0.1,2.8,0,2.6,0H2.4l0,0C2.2,0,2,0.2,1.9,0.4l0,0L0.1,4.9l0,0C0,5,0,5.1,0,5.2c0,0.2,0.1,0.4,0.2,0.5l0,0c0.2,0.1,0.3,0.2,0.5,0.2h0.1H1l0,0l4.7-1.8l0,0C5.9,4,6.1,3.8,6.1,3.6V3.4C6.1,3.2,6,3,5.9,2.9l0,0L5.1,2.1c0.4-0.2,0.8-0.4,1.3-0.5c0.5-0.1,1.1-0.2,1.7-0.2c0.9,0,1.7,0.2,2.5,0.5l0,0c0.8,0.3,1.5,0.8,2.1,1.4c0.6,0.6,1.1,1.3,1.4,2.1l0,0c0.3,0.8,0.5,1.6,0.5,2.5s-0.2,1.7-0.5,2.5l0,0c-0.3,0.8-0.8,1.5-1.4,2.1c-0.2,0.2-0.4,0.3-0.6,0.5l0,0c-0.2,0.1-0.3,0.3-0.3,0.5v0.1c0,0.1,0,0.3,0.1,0.4l0,0c0.1,0.2,0.3,0.3,0.5,0.3l0,0c0.1,0,0.3-0.1,0.4-0.2l0,0l0,0l0,0l0,0c0.2-0.2,0.5-0.4,0.7-0.6l0,0l0,0l0,0l0,0c0.7-0.8,1.3-1.6,1.7-2.6C15.6,10,15.8,9,15.9,7.9z M1.9,4C2,3.8,2.1,3.5,2.3,3.1l0,0L2.7,2l1.2,1.2L1.9,4z"/><path d="M6.8,15.5L6.8,15.5L6.8,15.5z"/></g></svg>',
  rotate_right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M9.9,15.3L9.9,15.3L9.9,15.3z"/><path d="M6.9,15.1L6.9,15.1c0,0.1,0.1,0.3,0.2,0.4l0,0c0.1,0.2,0.3,0.3,0.5,0.3l0,0h0.3c0.2,0,0.4,0,0.7,0l0,0c0.2-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.2-0.2,0.2-0.4V15c0-0.2-0.1-0.4-0.2-0.4c-0.2-0.1-0.3-0.2-0.5-0.2H8.4l0,0c-0.1,0-0.3,0-0.5,0H7.6l0,0c-0.2,0-0.4,0.1-0.5,0.2C7,14.7,6.9,14.9,6.9,15.1z"/><path d="M6.5,14.4L6.5,14.4L6.5,14.4z"/><path d="M5.8,5.8L5.8,5.8c-1,0.9-1.5,1.5-1.7,1.6l0,0C4,7.5,4,7.7,4,7.9c0,0.2,0,0.4,0.2,0.5l0,0l3.2,3.2l0,0c0.2,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2l0,0l3.2-3.2l0,0c0.1-0.1,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.2-0.5l0,0L8.4,4.2C8.3,4.1,8.1,4,7.9,4C7.7,4,7.5,4.1,7.4,4.2l0,0L5.8,5.8z M5.6,7.9l2.3-2.2l2.2,2.2L9,9l0,0l0,0l0,0l0,0c-0.5,0.6-0.9,0.9-1.1,1.1L5.6,7.9z"/><path d="M9,15.5L9,15.5L9,15.5z"/><path d="M9.6,14.7v0.2l0,0l0,0l0,0l0,0c0.1,0.2,0.1,0.3,0.3,0.3c0.1,0.1,0.3,0.1,0.4,0.1l0,0h0.1h0.1c0.3-0.1,0.6-0.3,0.9-0.4l0,0c0.1-0.1,0.2-0.2,0.3-0.4l0,0v-0.2c0-0.1,0-0.2-0.1-0.3c-0.1-0.2-0.2-0.3-0.4-0.4H11c-0.1,0-0.2,0.1-0.3,0.1l0,0c-0.2,0.1-0.4,0.2-0.7,0.3l0,0l0,0c-0.1,0.1-0.3,0.2-0.4,0.4C9.6,14.5,9.6,14.6,9.6,14.7z"/><path d="M9,14.5L9,14.5L9,14.5z"/><path d="M9.6,14.4L9.6,14.4L9.6,14.4z"/><path d="M11.7,14L11.7,14L11.7,14z"/><path d="M15.6,7.4L15.6,7.4L15.6,7.4z"/><path d="M15,9.4c0.2,0,0.4,0,0.6-0.2l0,0c0.1-0.1,0.2-0.2,0.2-0.4l0,0l0,0l0,0l0,0c0-0.3,0-0.6,0-0.9c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.2s-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.5l0,0c0,0.2,0,0.4,0,0.7l0,0v0.1c0,0.1,0,0.3,0.1,0.4l0,0C14.6,9.3,14.8,9.4,15,9.4L15,9.4L15,9.4z"/><path d="M14,12h0.1h0.2h0.1c0.2,0,0.5-0.2,0.6-0.4l0,0c0.2-0.3,0.3-0.6,0.4-0.9l0,0v-0.2c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.2-0.2-0.3-0.4-0.4h-0.3c-0.1,0-0.2,0-0.3,0C14.2,9.9,14,10,14,10.3l0,0c-0.1,0.2-0.2,0.5-0.3,0.7l0,0c-0.1,0.1-0.1,0.2-0.1,0.3v0.2l0,0l0,0C13.6,11.6,13.8,11.8,14,12z"/><path d="M14.6,7.4L14.6,7.4L14.6,7.4z"/><path d="M4.4,14.2c-0.1,0.1-0.1,0.2-0.1,0.3l0.1,0.2c0,0.2,0.2,0.3,0.3,0.4l0,0c0.3,0.1,0.6,0.3,1.1,0.4l0,0h0.1l0,0c0.1,0,0.2-0.1,0.4-0.2c0.1,0,0.2-0.2,0.3-0.3l0,0v-0.2c0-0.1-0.1-0.3-0.2-0.4c-0.1-0.1-0.2-0.2-0.4-0.3l0,0c-0.2-0.1-0.5-0.2-0.7-0.3l0,0c-0.1,0-0.2,0-0.3,0H4.7l0,0C4.6,13.9,4.4,14,4.4,14.2L4.4,14.2z"/><path d="M11.9,13.3c0,0.2,0.1,0.4,0.2,0.6c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2l0,0l0,0l0,0l0,0c0.1-0.1,0.3-0.3,0.4-0.4l0,0l0.2-0.3l0,0c0.1-0.2,0.2-0.3,0.2-0.5l0,0c0-0.2-0.1-0.4-0.2-0.5l0,0c-0.1-0.1-0.3-0.2-0.5-0.2l0,0c-0.2,0-0.4,0.1-0.5,0.2l0,0l-0.2,0.2l-0.4,0.4l0,0C12,13,11.9,13.1,11.9,13.3L11.9,13.3z"/><path d="M12.1,13.8L12.1,13.8L12.1,13.8z"/><path d="M11.9,13.3L11.9,13.3L11.9,13.3z"/><path d="M15.9,5.2c0-0.1-0.1-0.2-0.1-0.3l0,0L14,0.4l0,0C13.9,0.2,13.7,0,13.5,0l0,0l0,0h-0.2c-0.2,0-0.4,0.1-0.5,0.2l0,0l-0.9,0.9c-0.5-0.3-1.1-0.6-1.8-0.8l0,0C9.4,0.1,8.7,0,7.9,0c-1,0-2,0.2-3,0.6S3,1.6,2.3,2.3C1.6,3.1,1,3.9,0.6,4.9l0,0C0.2,5.8,0,6.8,0,7.9c0,1,0.2,2,0.6,3s0.9,1.8,1.7,2.6l0,0l0,0l0,0l0,0c0.2,0.2,0.5,0.4,0.7,0.6l0,0l0,0l0,0l0,0c0.2,0.1,0.3,0.2,0.5,0.2l0,0c0.2,0,0.4-0.1,0.6-0.3l0,0c0.1-0.1,0.1-0.3,0.1-0.4v-0.1l0,0C4.1,13.3,4,13.1,3.9,13l0,0c-0.2-0.1-0.4-0.3-0.6-0.5c-0.6-0.6-1.1-1.3-1.4-2.1l0,0C1.6,9.6,1.4,8.8,1.4,7.9s0.2-1.7,0.5-2.5l0,0c0.3-0.8,0.8-1.5,1.4-2.1c0.6-0.6,1.3-1.1,2.1-1.4l0,0C6.2,1.6,7,1.4,7.9,1.4c0.6,0,1.1,0.1,1.7,0.2c0.5,0.1,0.9,0.3,1.3,0.5l-0.8,0.8l0,0C10,3.1,9.9,3.2,9.9,3.4v0.2l0,0l0,0c0,0.2,0.2,0.4,0.4,0.5l0,0l4.5,1.8l0,0H15h0.1c0.2,0,0.4-0.1,0.5-0.2l0,0C15.7,5.6,15.8,5.4,15.9,5.2z M11.8,3.2L13,2l0.4,1.1l0,0c0.2,0.4,0.3,0.7,0.4,0.9L11.8,3.2z"/></g></svg>',
  mirror_horizontal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.75 15.74"><g><path d="M13.75,3.76l5.9,15.74h-5.9V3.76ZM4.9,19.5,10.8,3.76V19.5H4.9Z" transform="translate(-4.9 -3.76)"/></g></svg>',
  mirror_vertical: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.75"><g><path d="M20.15,13.1,4.41,19V13.1H20.15ZM4.41,4.25l15.74,5.9H4.41V4.25Z" transform="translate(-4.41 -4.25)"/></g></svg>',
  checked: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 12.1"><g><path d="M4.59,12.23l.12.18L9.43,17.5a.58.58,0,0,0,.84,0L20,7.45h0a.58.58,0,0,0,0-.84l-.85-.85a.58.58,0,0,0-.84,0H18.2l-8.12,8.41a.29.29,0,0,1-.42,0l-3.4-3.63a.58.58,0,0,0-.84,0l-.85.85a.6.6,0,0,0-.14.21.51.51,0,0,0,0,.44c.05.06.1.13.16.19Z" transform="translate(-4.38 -5.58)"/></g></svg>',
  line_break: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,6a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H7.41l1.3-1.29A1,1,0,0,0,7.29,9.29l-3,3a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L7.41,14H17a3,3,0,0,0,3-3V7A1,1,0,0,0,19,6Z"/></svg>',
  audio: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>',
  image_gallery: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="30 30 150 150"><g><path d="M152.775,120.548V51.651c0-12.271-9.984-22.254-22.254-22.254H43.727c-12.271,0-22.254,9.983-22.254,22.254v68.896c0,12.27,9.983,22.254,22.254,22.254h86.795C142.791,142.802,152.775,132.817,152.775,120.548z M36.394,51.651c0-4.042,3.291-7.333,7.333-7.333h86.795c4.042,0,7.332,3.291,7.332,7.333v23.917l-14.938-17.767c-1.41-1.678-3.487-2.649-5.68-2.658h-0.029c-2.184,0-4.255,0.954-5.674,2.613L76.709,98.519l-9.096-9.398c-1.427-1.474-3.392-2.291-5.448-2.273c-2.052,0.025-4.004,0.893-5.396,2.4L36.394,111.32V51.651z M41.684,127.585l20.697-22.416l9.312,9.622c1.461,1.511,3.489,2.334,5.592,2.27c2.101-0.066,4.075-1.013,5.44-2.612l34.436-40.308l20.693,24.613v21.794c0,4.042-3.29,7.332-7.332,7.332H43.727C43.018,127.88,42.334,127.775,41.684,127.585z M182.616,152.5V75.657c0-4.12-3.34-7.46-7.461-7.46c-4.119,0-7.46,3.34-7.46,7.46V152.5c0,4.112-3.347,7.46-7.461,7.46h-94c-4.119,0-7.46,3.339-7.46,7.459c0,4.123,3.341,7.462,7.46,7.462h94C172.576,174.881,182.616,164.841,182.616,152.5z"/></g></svg>',
  bookmark: '<svg viewBox="0 0 24 24"><path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" /></svg>',
  download: '<svg viewBox="0 0 24 24"><path d="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z" /></svg>',
  dir_ltr: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 4v4c-1.1 0-2-.9-2-2s.9-2 2-2m8-2H9C6.79 2 5 3.79 5 6s1.79 4 4 4v5h2V4h2v11h2V4h2V2zm0 12v3H5v2h12v3l4-4-4-4z"/></svg>',
  dir_rtl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 4v4c-1.1 0-2-.9-2-2s.9-2 2-2m8-2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4v5h2V4h2v11h2V4h2V2zM8 14l-4 4 4 4v-3h12v-2H8v-3z"/></svg>',
  // Error
  alert_outline: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" /></svg>',
  // More icons
  more_text: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 180 180"><g><path d="M49.711,142.188h49.027c2.328,0.002,4.394,1.492,5.129,3.699l9.742,29.252c0.363,1.092,1.385,1.828,2.537,1.83l15.883,0.01c0.859,0,1.667-0.412,2.17-1.109s0.641-1.594,0.37-2.41l-16.625-50.045L86.503,28.953c-0.36-1.097-1.383-1.839-2.537-1.842H64.532c-1.153-0.001-2.178,0.736-2.542,1.831L13.847,173.457c-0.271,0.816-0.135,1.713,0.369,2.412c0.503,0.697,1.311,1.109,2.171,1.109h15.872c1.151,0,2.173-0.736,2.537-1.828l9.793-29.287C45.325,143.66,47.39,142.18,49.711,142.188L49.711,142.188z M53.493,119.098l15.607-46.9c0.744-2.196,2.806-3.674,5.125-3.674s4.381,1.478,5.125,3.674l15.607,46.904c0.537,1.621,0.263,3.402-0.736,4.789c-1.018,1.408-2.649,2.24-4.386,2.24H58.615c-1.736,0-3.368-0.832-4.386-2.24C53.23,122.504,52.956,120.721,53.493,119.098L53.493,119.098z M190.465,63.32c0-2.919-1.015-5.396-3.059-7.428c-2.029-2.031-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.016-7.388,3.047c-2.029,2.032-3.056,4.498-3.056,7.386c0,2.889,1.026,5.354,3.056,7.385c2.032,2.032,4.499,3.059,7.388,3.059c2.887,0,5.354-1.026,7.383-3.059C189.45,68.633,190.465,66.178,190.465,63.32L190.465,63.32z M190.465,101.994c0-2.858-1.015-5.313-3.059-7.333c-2.029-2.042-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.005-7.388,3.047c-2.029,2.021-3.056,4.486-3.056,7.376c0,2.887,1.026,5.352,3.056,7.395c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,107.389,190.465,104.914,190.465,101.994L190.465,101.994z M190.465,140.76c0-2.918-1.015-5.395-3.059-7.438c-2.029-2.041-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.006-7.388,3.047c-2.029,2.043-3.056,4.52-3.056,7.438c0,2.922,1.026,5.398,3.056,7.439c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,146.158,190.465,143.682,190.465,140.76L190.465,140.76z"/></g></svg>',
  more_paragraph: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 180 180"><g><path d="M128.39,28.499H63.493c-25.558,0-46.354,20.796-46.354,46.354c0,25.559,20.796,46.353,46.354,46.353h9.271v55.625h18.542V47.04h9.271V176.83h18.543V47.04h9.271V28.499z M72.764,102.664h-9.271c-15.337,0-27.813-12.475-27.813-27.812c0-15.336,12.476-27.813,27.813-27.813h9.271V102.664z M190.465,63.32c0-2.919-1.015-5.396-3.059-7.428c-2.029-2.031-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.016-7.388,3.047c-2.029,2.032-3.056,4.498-3.056,7.386c0,2.889,1.026,5.354,3.056,7.385c2.032,2.032,4.499,3.059,7.388,3.059c2.887,0,5.354-1.026,7.383-3.059C189.45,68.633,190.465,66.178,190.465,63.32L190.465,63.32z M190.465,101.994c0-2.858-1.015-5.313-3.059-7.333c-2.029-2.042-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.005-7.388,3.047c-2.029,2.021-3.056,4.486-3.056,7.376c0,2.887,1.026,5.352,3.056,7.395c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,107.389,190.465,104.914,190.465,101.994L190.465,101.994z M190.465,140.76c0-2.918-1.015-5.395-3.059-7.438c-2.029-2.041-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.006-7.388,3.047c-2.029,2.043-3.056,4.52-3.056,7.438c0,2.922,1.026,5.398,3.056,7.439c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,146.158,190.465,143.682,190.465,140.76L190.465,140.76z"/></g></svg>',
  more_plus: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="35 30 140 140"><g><path d="M137.215,102.045c0,3.498-2.835,6.332-6.333,6.332H24.549c-3.498,0-6.334-2.834-6.334-6.332l0,0c0-3.498,2.836-6.333,6.334-6.333h106.333C134.38,95.711,137.215,98.547,137.215,102.045L137.215,102.045z M77.715,161.545c-3.498,0-6.333-2.836-6.333-6.334V48.878c0-3.498,2.836-6.333,6.333-6.333l0,0c3.498,0,6.334,2.835,6.334,6.333v106.333C84.049,158.709,81.213,161.545,77.715,161.545L77.715,161.545z M190.465,63.32c0-2.919-1.015-5.396-3.059-7.428c-2.029-2.031-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.016-7.388,3.047c-2.029,2.032-3.056,4.498-3.056,7.386c0,2.889,1.026,5.354,3.056,7.385c2.032,2.032,4.499,3.059,7.388,3.059c2.887,0,5.354-1.026,7.383-3.059C189.45,68.632,190.465,66.177,190.465,63.32L190.465,63.32z M190.465,101.993c0-2.858-1.015-5.313-3.059-7.333c-2.029-2.042-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.005-7.388,3.047c-2.029,2.021-3.056,4.486-3.056,7.376c0,2.888,1.026,5.353,3.056,7.396c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,107.389,190.465,104.914,190.465,101.993L190.465,101.993z M190.465,140.76c0-2.918-1.015-5.395-3.059-7.438c-2.029-2.041-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.006-7.388,3.047c-2.029,2.043-3.056,4.52-3.056,7.438c0,2.922,1.026,5.398,3.056,7.439c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,146.158,190.465,143.682,190.465,140.76L190.465,140.76z"/></g></svg>',
  more_horizontal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 3.58"><g><path d="M4.64,10.73a1.84,1.84,0,0,1,.65-.65,1.76,1.76,0,0,1,1.79,0A1.79,1.79,0,0,1,8,11.63a1.84,1.84,0,0,1-.25.9,1.69,1.69,0,0,1-.65.65,1.8,1.8,0,0,1-2.69-1.55A2.08,2.08,0,0,1,4.64,10.73Zm6.09,0a1.84,1.84,0,0,1,.65-.65,1.78,1.78,0,0,1,2.67,1.55,1.73,1.73,0,0,1-.24.9,1.84,1.84,0,0,1-.65.65,1.76,1.76,0,0,1-1.79,0,1.79,1.79,0,0,1-.64-2.44Zm6.08,0a1.69,1.69,0,0,1,.65-.65,1.76,1.76,0,0,1,1.79,0,1.79,1.79,0,0,1,.9,1.54,1.73,1.73,0,0,1-.24.9,1.84,1.84,0,0,1-.65.65,1.8,1.8,0,0,1-2.69-1.55A2,2,0,0,1,16.81,10.73Z" transform="translate(-4.39 -9.84)"/></g></svg>',
  more_vertical: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.94 15.75"><g><path d="M12.28,7.69a1.92,1.92,0,0,1-1.39-.58,2,2,0,0,1-.58-1.39,1.92,1.92,0,0,1,.58-1.39,2,2,0,0,1,1.39-.58,1.92,1.92,0,0,1,1.39.58,2,2,0,0,1,.58,1.39,1.92,1.92,0,0,1-.58,1.39,2,2,0,0,1-1.39.58Zm0,2a1.92,1.92,0,0,1,1.39.58,2,2,0,0,1,.58,1.39A1.92,1.92,0,0,1,13.67,13a2,2,0,0,1-1.39.58A1.92,1.92,0,0,1,10.89,13a2,2,0,0,1-.58-1.39,2,2,0,0,1,2-2Zm0,5.9a1.92,1.92,0,0,1,1.39.58,2,2,0,0,1,.58,1.39,1.92,1.92,0,0,1-.58,1.39,2,2,0,0,1-1.39.58,1.92,1.92,0,0,1-1.39-.58,2,2,0,0,1-.58-1.39,1.92,1.92,0,0,1,.58-1.39,1.94,1.94,0,0,1,1.39-.58Z" transform="translate(-10.31 -3.75)"/></g></svg>',
  // Not currently used
  attachment: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.38 15.68"><g><path d="M15.23,6h1v9.78a3.88,3.88,0,0,1-1.31,2.45,4,4,0,0,1-6.57-2.45V7A3,3,0,0,1,9.2,4.89a3,3,0,0,1,5,2.09v8.31a1.92,1.92,0,0,1-.58,1.39,2,2,0,0,1-1.39.58,1.92,1.92,0,0,1-1.39-.58,2,2,0,0,1-.58-1.39V8h1v7.32a1,1,0,0,0,.29.69,1,1,0,0,0,.69.28A.9.9,0,0,0,13,16a1,1,0,0,0,.29-.69V7a1.92,1.92,0,0,0-.58-1.39A2,2,0,0,0,11.27,5a1.92,1.92,0,0,0-1.39.58A2,2,0,0,0,9.33,7v8.31a3,3,0,1,0,5.9,0V6Z" transform="translate(-8.08 -3.78)"/></g></svg>',
  map: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.7 15.62"><g><path d="M12.05,12.42a2.93,2.93,0,1,1,2.07-5A2.88,2.88,0,0,1,15,9.49a3,3,0,0,1-.86,2.07,2.89,2.89,0,0,1-2.07.86Zm0-5.36a2.43,2.43,0,0,0-1.72,4.16,2.48,2.48,0,0,0,1.72.72,2.44,2.44,0,0,0,0-4.88Zm0-3.3A5.84,5.84,0,0,1,17.9,9.62a9.94,9.94,0,0,1-1.73,5A33.59,33.59,0,0,1,12.84,19a1.52,1.52,0,0,1-.23.2,1,1,0,0,1-.55.2h0a1,1,0,0,1-.55-.2,1.52,1.52,0,0,1-.23-.2,33.59,33.59,0,0,1-3.33-4.32,9.93,9.93,0,0,1-1.72-5,5.84,5.84,0,0,1,5.85-5.86ZM12,18.34l.08.05.06-.06a35.58,35.58,0,0,0,3.06-3.93,9.35,9.35,0,0,0,1.74-4.77,4.88,4.88,0,0,0-4.88-4.88A4.79,4.79,0,0,0,8.6,6.17,4.84,4.84,0,0,0,7.17,9.62,9.29,9.29,0,0,0,8.91,14.4,36,36,0,0,0,12,18.34Z" transform="translate(-6.2 -3.76)"/></g></svg>',
  magic_stick: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 15.75"><g><path d="M19.86,19.21a1,1,0,0,0,.28-.68,1,1,0,0,0-.28-.7L13,10.93a1,1,0,0,0-.7-.28,1,1,0,0,0-.68,1.65l6.9,6.9a1,1,0,0,0,.69.29.93.93,0,0,0,.69-.28ZM9.19,8.55a3,3,0,0,0,1.68,0,14.12,14.12,0,0,0,1.41-.32A11.26,11.26,0,0,0,10.8,7.06c-.56-.36-.86-.56-.91-.58S10,5.91,10,5.11s0-1.26-.15-1.37a4.35,4.35,0,0,0-1.19.71c-.53.4-.81.62-.87.68a9,9,0,0,0-2-.6,6.84,6.84,0,0,0-.76-.09s0,.27.08.77a8.6,8.6,0,0,0,.61,2q-.09.09-.69.87a3.59,3.59,0,0,0-.68,1.17c.12.17.57.23,1.36.15S7,9.26,7.15,9.23s.21.36.57.91a10.49,10.49,0,0,0,1.14,1.48c0-.1.14-.57.31-1.4a3,3,0,0,0,0-1.67Z" transform="translate(-4.41 -3.74)"/></g></svg>',
  empty_file: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.78 15.75"><g><path d="M14.73,3.76,18.67,7.7v9.84a2,2,0,0,1-2,2H7.84a1.89,1.89,0,0,1-1.38-.58,2,2,0,0,1-.57-1.39V5.73a1.93,1.93,0,0,1,.57-1.38,2,2,0,0,1,1.38-.58h6.62l.26,0v0Zm2.95,4.92h-2a1.93,1.93,0,0,1-1.38-.57,2,2,0,0,1-.58-1.4V6.17c0-.36,0-.84,0-1.43H7.85a1,1,0,0,0-.7.29,1,1,0,0,0-.29.7V17.54a1,1,0,0,0,.29.69,1,1,0,0,0,.69.29h8.85a1,1,0,0,0,.71-.29.92.92,0,0,0,.28-.69Zm0-1L14.73,4.74v2A1,1,0,0,0,15,7.4a1,1,0,0,0,.69.29Z" transform="translate(-5.89 -3.76)"/></g></svg>'
};

// node_modules/suneditor/src/lib/constructor.js
var import_en = __toESM(require_en());

// node_modules/suneditor/src/lib/util.js
var util = {
  _d: null,
  _w: null,
  isIE: null,
  isIE_Edge: null,
  isOSX_IOS: null,
  isChromium: null,
  isMobile: null,
  isResizeObserverSupported: null,
  _propertiesInit: function() {
    if (this._d) return;
    this._d = document;
    this._w = window;
    this.isIE = navigator.userAgent.indexOf("Trident") > -1;
    this.isIE_Edge = navigator.userAgent.indexOf("Trident") > -1 || navigator.appVersion.indexOf("Edge") > -1;
    this.isOSX_IOS = /(Mac|iPhone|iPod|iPad)/.test(navigator.platform);
    this.isChromium = !!window.chrome;
    this.isResizeObserverSupported = typeof ResizeObserver === "function";
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "ontouchstart" in window;
  },
  _allowedEmptyNodeList: ".se-component, pre, blockquote, hr, li, table, img, iframe, video, audio, canvas",
  /**
   * @description HTML Reserved Word Converter.
   * @param {String} contents 
   * @returns {String} HTML string
   * @private
   */
  _HTMLConvertor: function(contents) {
    const ec = { "&": "&amp;", "\xA0": "&nbsp;", "'": "&apos;", '"': "&quot;", "<": "&lt;", ">": "&gt;" };
    return contents.replace(/&|\u00A0|'|"|<|>/g, function(m) {
      return typeof ec[m] === "string" ? ec[m] : m;
    });
  },
  /**
   * @description Unicode Character 'ZERO WIDTH SPACE' (\u200B)
   */
  zeroWidthSpace: String.fromCharCode(8203),
  /**
   * @description Regular expression to find 'zero width space' (/\u200B/g)
   */
  zeroWidthRegExp: new RegExp(String.fromCharCode(8203), "g"),
  /**
   * @description Regular expression to find only 'zero width space' (/^\u200B+$/)
   */
  onlyZeroWidthRegExp: new RegExp("^" + String.fromCharCode(8203) + "+$"),
  fontValueMap: {
    "xx-small": 1,
    "x-small": 2,
    "small": 3,
    "medium": 4,
    "large": 5,
    "x-large": 6,
    "xx-large": 7
  },
  /**
   * @description A method that checks If the text is blank or to see if it contains 'ZERO WIDTH SPACE' or empty (util.zeroWidthSpace)
   * @param {String|Node} text String value or Node
   * @returns {Boolean}
   */
  onlyZeroWidthSpace: function(text) {
    if (text === null || text === void 0) return false;
    if (typeof text !== "string") text = text.textContent;
    return text === "" || this.onlyZeroWidthRegExp.test(text);
  },
  /**
   * @description Gets XMLHttpRequest object
   * @returns {XMLHttpRequest|ActiveXObject}
   */
  getXMLHttpRequest: function() {
    if (this._w.ActiveXObject) {
      try {
        return new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e1) {
          return null;
        }
      }
    } else if (this._w.XMLHttpRequest) {
      return new XMLHttpRequest();
    } else {
      return null;
    }
  },
  /**
   * @description Object.values
   * @param {Object|null} obj Object parameter.
   * @returns {Array}
   */
  getValues: function(obj) {
    return !obj ? [] : this._w.Object.keys(obj).map(function(i) {
      return obj[i];
    });
  },
  /**
   * @description Convert the CamelCase To the KebabCase.
   * @param {String|Array} param [Camel string]
   * @returns {String|Array}
   */
  camelToKebabCase: function(param) {
    if (typeof param === "string") {
      return param.replace(/[A-Z]/g, function(letter) {
        return "-" + letter.toLowerCase();
      });
    } else {
      return param.map(function(str) {
        return util.camelToKebabCase(str);
      });
    }
  },
  /**
   * @description Convert the KebabCase To the CamelCase.
   * @param {String|Array} param [KebabCase string]
   * @returns {String|Array}
   */
  kebabToCamelCase: function(param) {
    if (typeof param === "string") {
      return param.replace(/-[a-zA-Z]/g, function(letter) {
        return letter.replace("-", "").toUpperCase();
      });
    } else {
      return param.map(function(str) {
        return util.camelToKebabCase(str);
      });
    }
  },
  /**
   * @description Create Element node
   * @param {String} elementName Element name
   * @returns {Element}
   */
  createElement: function(elementName) {
    return this._d.createElement(elementName);
  },
  /**
   * @description Create text node
   * @param {String} text text contents
   * @returns {Node}
   */
  createTextNode: function(text) {
    return this._d.createTextNode(text || "");
  },
  /**
   * @description The editor checks tags by string.
   * If there is "<" or ">" in the attribute of tag, HTML is broken when checking the tag.
   * When using an attribute with "<" or ">", use "HTMLEncoder" to save. (ex: math(katex))
   * @param {String} contents HTML or Text string
   * @returns {String}
   */
  HTMLEncoder: function(contents) {
    const ec = { "<": "$lt;", ">": "$gt;" };
    return contents.replace(/<|>/g, function(m) {
      return typeof ec[m] === "string" ? ec[m] : m;
    });
  },
  /**
   * @description The editor checks tags by string.
   * If there is "<" or ">" in the attribute of tag, HTML is broken when checking the tag.
   * Decoder of data stored as "HTMLEncoder" (ex: math(katex))
   * @param {String} contents HTML or Text string
   * @returns {String}
   */
  HTMLDecoder: function(contents) {
    const ec = { "$lt;": "<", "$gt;": ">" };
    return contents.replace(/\$lt;|\$gt;/g, function(m) {
      return typeof ec[m] === "string" ? ec[m] : m;
    });
  },
  /**
   * @description This method run Object.prototype.hasOwnProperty.call(obj, key)
   * @param {Object} obj Object
   * @param {String} key obj.key
   * @returns {Boolean}
   */
  hasOwn: function(obj, key) {
    return this._hasOwn.call(obj, key);
  },
  _hasOwn: Object.prototype.hasOwnProperty,
  /**
   * @deprecated
   * @description Get the the tag path of the arguments value
   * If not found, return the first found value
   * @param {Array} nameArray File name array
   * @param {String} extension js, css
   * @returns {String}
   */
  getIncludePath: function(nameArray, extension) {
    let path = "";
    const pathList = [];
    const tagName = extension === "js" ? "script" : "link";
    const src = extension === "js" ? "src" : "href";
    let fileName = "(?:";
    for (let i = 0, len = nameArray.length; i < len; i++) {
      fileName += nameArray[i] + (i < len - 1 ? "|" : ")");
    }
    const regExp = new this._w.RegExp("(^|.*[\\/])" + fileName + "(\\.[^\\/]+)?." + extension + "(?:\\?.*|;.*)?$", "i");
    const extRegExp = new this._w.RegExp(".+\\." + extension + "(?:\\?.*|;.*)?$", "i");
    for (let c = this._d.getElementsByTagName(tagName), i = 0; i < c.length; i++) {
      if (extRegExp.test(c[i][src])) {
        pathList.push(c[i]);
      }
    }
    for (let i = 0; i < pathList.length; i++) {
      let editorTag = pathList[i][src].match(regExp);
      if (editorTag) {
        path = editorTag[0];
        break;
      }
    }
    if (path === "") path = pathList.length > 0 ? pathList[0][src] : "";
    -1 === path.indexOf(":/") && "//" !== path.slice(0, 2) && (path = 0 === path.indexOf("/") ? location.href.match(/^.*?:\/\/[^\/]*/)[0] + path : location.href.match(/^[^\?]*\/(?:)/)[0] + path);
    if (!path) throw "[SUNEDITOR.util.getIncludePath.fail] The SUNEDITOR installation path could not be automatically detected. (name: +" + name + ", extension: " + extension + ")";
    return path;
  },
  /**
   * @deprecated
   * @description Returns the CSS text that has been applied to the current page.
   * @param {Document|null} doc To get the CSS text of an document(core._wd). If null get the current document.
   * @returns {String} Styles string
   */
  getPageStyle: function(doc) {
    let cssText = "";
    const sheets = (doc || this._d).styleSheets;
    for (let i = 0, len = sheets.length, rules; i < len; i++) {
      try {
        rules = sheets[i].cssRules;
      } catch (e) {
        continue;
      }
      if (rules) {
        for (let c = 0, cLen = rules.length; c < cLen; c++) {
          cssText += rules[c].cssText;
        }
      }
    }
    return cssText;
  },
  /**
   * @description Get the argument iframe's document object
   * @param {Element} iframe Iframe element (context.element.wysiwygFrame)
   * @returns {Document}
   */
  getIframeDocument: function(iframe) {
    let wDocument = iframe.contentWindow || iframe.contentDocument;
    if (wDocument.document) wDocument = wDocument.document;
    return wDocument;
  },
  /**
   * @description Get attributes of argument element to string ('class="---" name="---" ')
   * @param {Element} element Element object
   * @param {Array|null} exceptAttrs Array of attribute names to exclude from the result
   * @returns {String}
   */
  getAttributesToString: function(element, exceptAttrs) {
    if (!element.attributes) return "";
    const attrs = element.attributes;
    let attrString = "";
    for (let i = 0, len = attrs.length; i < len; i++) {
      if (exceptAttrs && exceptAttrs.indexOf(attrs[i].name) > -1) continue;
      attrString += attrs[i].name + '="' + attrs[i].value + '" ';
    }
    return attrString;
  },
  /**
   * @descriptionGets Get the length in bytes of a string.
   * referencing code: "https://github.com/shaan1974/myrdin/blob/master/expressions/string.js#L11"
   * @param {String} text String text
   * @returns {Number}
   */
  getByteLength: function(text) {
    if (!text || !text.toString) return 0;
    text = text.toString();
    const encoder = this._w.encodeURIComponent;
    let cr, cl;
    if (this.isIE_Edge) {
      cl = this._w.unescape(encoder(text)).length;
      cr = 0;
      if (encoder(text).match(/(%0A|%0D)/gi) !== null) {
        cr = encoder(text).match(/(%0A|%0D)/gi).length;
      }
      return cl + cr;
    } else {
      cl = new this._w.TextEncoder("utf-8").encode(text).length;
      cr = 0;
      if (encoder(text).match(/(%0A|%0D)/gi) !== null) {
        cr = encoder(text).match(/(%0A|%0D)/gi).length;
      }
      return cl + cr;
    }
  },
  /**
   * @description It is judged whether it is the edit region top div element or iframe's body tag.
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isWysiwygDiv: function(element) {
    return element && element.nodeType === 1 && (this.hasClass(element, "se-wrapper-wysiwyg") || /^BODY$/i.test(element.nodeName));
  },
  /**
   * @description It is judged whether it is the contenteditable property is false.
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isNonEditable: function(element) {
    return element && element.nodeType === 1 && element.getAttribute("contenteditable") === "false";
  },
  /**
   * @description It is judged whether it is a node related to the text style.
   * (strong|span|font|b|var|i|em|u|ins|s|strike|del|sub|sup|mark|a|label|code)
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isTextStyleElement: function(element) {
    return element && element.nodeType !== 3 && /^(strong|span|font|b|var|i|em|u|ins|s|strike|del|sub|sup|mark|a|label|code|summary)$/i.test(element.nodeName);
  },
  /**
   * @description It is judged whether it is the input element (INPUT, TEXTAREA)
   * @param {Node} element The node to check
   * @returns 
   */
  isInputElement: function(element) {
    return element && element.nodeType === 1 && /^(INPUT|TEXTAREA)$/i.test(element.nodeName);
  },
  /**
   * @description It is judged whether it is the format element (P, DIV, H[1-6], PRE, LI | class="__se__format__replace_xxx")
   * Format element also contain "free format Element"
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isFormatElement: function(element) {
    return element && element.nodeType === 1 && (/^(P|DIV|H[1-6]|PRE|LI|TH|TD|DETAILS)$/i.test(element.nodeName) || this.hasClass(element, "(\\s|^)__se__format__replace_.+(\\s|$)|(\\s|^)__se__format__free_.+(\\s|$)")) && !this.isComponent(element) && !this.isWysiwygDiv(element);
  },
  /**
   * @description It is judged whether it is the range format element. (BLOCKQUOTE, OL, UL, FIGCAPTION, TABLE, THEAD, TBODY, TR, TH, TD | class="__se__format__range_xxx")
   * Range format element is wrap the "format element" and "component"
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isRangeFormatElement: function(element) {
    return element && element.nodeType === 1 && (/^(BLOCKQUOTE|OL|UL|FIGCAPTION|TABLE|THEAD|TBODY|TR|TH|TD|DETAILS)$/i.test(element.nodeName) || this.hasClass(element, "(\\s|^)__se__format__range_.+(\\s|$)"));
  },
  /**
   * @description It is judged whether it is the closure range format element. (TH, TD | class="__se__format__range__closure_xxx")
   * Closure range format elements is included in the range format element.
   *  - Closure range format element is wrap the "format element" and "component"
   * ※ You cannot exit this format with the Enter key or Backspace key.
   * ※ Use it only in special cases. ([ex] format of table cells)
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isClosureRangeFormatElement: function(element) {
    return element && element.nodeType === 1 && (/^(TH|TD)$/i.test(element.nodeName) || this.hasClass(element, "(\\s|^)__se__format__range__closure_.+(\\s|$)"));
  },
  /**
   * @description It is judged whether it is the free format element. (PRE | class="__se__format__free_xxx")
   * Free format elements is included in the format element.
   * Free format elements's line break is "BR" tag.
   * ※ Entering the Enter key in the space on the last line ends "Free Format" and appends "Format".
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isFreeFormatElement: function(element) {
    return element && element.nodeType === 1 && (/^PRE$/i.test(element.nodeName) || this.hasClass(element, "(\\s|^)__se__format__free_.+(\\s|$)")) && !this.isComponent(element) && !this.isWysiwygDiv(element);
  },
  /**
   * @description It is judged whether it is the closure free format element. (class="__se__format__free__closure_xxx")
   * Closure free format elements is included in the free format element.
   *  - Closure free format elements's line break is "BR" tag.
   * ※ You cannot exit this format with the Enter key or Backspace key.
   * ※ Use it only in special cases. ([ex] format of table cells)
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isClosureFreeFormatElement: function(element) {
    return element && element.nodeType === 1 && this.hasClass(element, "(\\s|^)__se__format__free__closure_.+(\\s|$)");
  },
  /**
   * @description It is judged whether it is the component[img, iframe, video, audio, table] cover(class="se-component") and table, hr
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isComponent: function(element) {
    return element && (/se-component/.test(element.className) || /^(TABLE|HR)$/.test(element.nodeName));
  },
  /**
   * @description Checks for "__se__uneditable" in the class list.
   * Components with class "__se__uneditable" cannot be modified.
   * @param {Element} element The element to check
   * @returns {Boolean}
   */
  isUneditableComponent: function(element) {
    return element && this.hasClass(element, "__se__uneditable");
  },
  /**
   * @description It is judged whether it is the component [img, iframe] cover(class="se-component")
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isMediaComponent: function(element) {
    return element && /se-component/.test(element.className);
  },
  /**
   * @description It is judged whether it is the not checking node. (class="katex", "__se__tag")
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isNotCheckingNode: function(element) {
    return element && /katex|__se__tag/.test(element.className);
  },
  /**
   * @description If a parent node that contains an argument node finds a format node (util.isFormatElement), it returns that node.
   * @param {Node} element Reference node.
   * @param {Function|null} validation Additional validation function.
   * @returns {Element|null}
   */
  getFormatElement: function(element, validation) {
    if (!element) return null;
    if (!validation) {
      validation = function() {
        return true;
      };
    }
    while (element) {
      if (this.isWysiwygDiv(element)) return null;
      if (this.isRangeFormatElement(element)) element.firstElementChild;
      if (this.isFormatElement(element) && validation(element)) return element;
      element = element.parentNode;
    }
    return null;
  },
  /**
   * @description If a parent node that contains an argument node finds a format node (util.isRangeFormatElement), it returns that node.
   * @param {Node} element Reference node.
   * @param {Function|null} validation Additional validation function.
   * @returns {Element|null}
   */
  getRangeFormatElement: function(element, validation) {
    if (!element) return null;
    if (!validation) {
      validation = function() {
        return true;
      };
    }
    while (element) {
      if (this.isWysiwygDiv(element)) return null;
      if (this.isRangeFormatElement(element) && !/^(THEAD|TBODY|TR)$/i.test(element.nodeName) && validation(element)) return element;
      element = element.parentNode;
    }
    return null;
  },
  /**
   * @description If a parent node that contains an argument node finds a free format node (util.isFreeFormatElement), it returns that node.
   * @param {Node} element Reference node.
   * @param {Function|null} validation Additional validation function.
   * @returns {Element|null}
   */
  getFreeFormatElement: function(element, validation) {
    if (!element) return null;
    if (!validation) {
      validation = function() {
        return true;
      };
    }
    while (element) {
      if (this.isWysiwygDiv(element)) return null;
      if (this.isFreeFormatElement(element) && validation(element)) return element;
      element = element.parentNode;
    }
    return null;
  },
  /**
   * @description If a parent node that contains an argument node finds a closure free format node (util.isClosureFreeFormatElement), it returns that node.
   * @param {Node} element Reference node.
   * @param {Function|null} validation Additional validation function.
   * @returns {Element|null}
   */
  getClosureFreeFormatElement: function(element, validation) {
    if (!element) return null;
    if (!validation) {
      validation = function() {
        return true;
      };
    }
    while (element) {
      if (this.isWysiwygDiv(element)) return null;
      if (this.isClosureFreeFormatElement(element) && validation(element)) return element;
      element = element.parentNode;
    }
    return null;
  },
  /**
   * @description Add style and className of copyEl to originEl
   * @param {Element} originEl Origin element
   * @param {Element} copyEl Element to copy
   * @param {Array|null} blacklist Blacklist array(LowerCase)
   */
  copyTagAttributes: function(originEl, copyEl, blacklist) {
    if (copyEl.style.cssText) {
      const copyStyles = copyEl.style;
      for (let i = 0, len = copyStyles.length; i < len; i++) {
        originEl.style[copyStyles[i]] = copyStyles[copyStyles[i]];
      }
    }
    const attrs = copyEl.attributes;
    for (let i = 0, len = attrs.length, name2; i < len; i++) {
      name2 = attrs[i].name.toLowerCase();
      if (blacklist && blacklist.indexOf(name2) > -1 || !attrs[i].value) originEl.removeAttribute(name2);
      else if (name2 !== "style") originEl.setAttribute(attrs[i].name, attrs[i].value);
    }
  },
  /**
   * @description Copy and apply attributes of format tag that should be maintained. (style, class) Ignore "__se__format__" class
   * @param {Element} originEl Origin element
   * @param {Element} copyEl Element to copy
   */
  copyFormatAttributes: function(originEl, copyEl) {
    copyEl = copyEl.cloneNode(false);
    copyEl.className = copyEl.className.replace(/(\s|^)__se__format__[^\s]+/g, "");
    this.copyTagAttributes(originEl, copyEl);
  },
  /**
   * @description Get the item from the array that matches the condition.
   * @param {Array|HTMLCollection|NodeList} array Array to get item
   * @param {Function|null} validation Conditional function
   * @param {Boolean} multi If true, returns all items that meet the criteria otherwise, returns an empty array.
   * If false, returns only one item that meet the criteria otherwise return null.
   * @returns {Array|Node|null}
   */
  getArrayItem: function(array, validation, multi) {
    if (!array || array.length === 0) return null;
    validation = validation || function() {
      return true;
    };
    const arr = [];
    for (let i = 0, len = array.length, a; i < len; i++) {
      a = array[i];
      if (validation(a)) {
        if (!multi) return a;
        else arr.push(a);
      }
    }
    return !multi ? null : arr;
  },
  /**
   * @description Check if an array contains an element 
   * @param {Array|HTMLCollection|NodeList} array element array
   * @param {Node} element The element to check for
   * @returns {Boolean}
   */
  arrayIncludes: function(array, element) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
        return true;
      }
    }
    return false;
  },
  /**
   * @description Get the index of the argument value in the element array
   * @param {Array|HTMLCollection|NodeList} array element array
   * @param {Node} element The element to find index
   * @returns {Number}
   */
  getArrayIndex: function(array, element) {
    let idx = -1;
    for (let i = 0, len = array.length; i < len; i++) {
      if (array[i] === element) {
        idx = i;
        break;
      }
    }
    return idx;
  },
  /**
   * @description Get the next index of the argument value in the element array
   * @param {Array|HTMLCollection|NodeList} array element array
   * @param {Node} item The element to find index
   * @returns {Number}
   */
  nextIdx: function(array, item) {
    let idx = this.getArrayIndex(array, item);
    if (idx === -1) return -1;
    return idx + 1;
  },
  /**
   * @description Get the previous index of the argument value in the element array
   * @param {Array|HTMLCollection|NodeList} array Element array
   * @param {Node} item The element to find index
   * @returns {Number}
   */
  prevIdx: function(array, item) {
    let idx = this.getArrayIndex(array, item);
    if (idx === -1) return -1;
    return idx - 1;
  },
  /**
   * @description Returns the index compared to other sibling nodes.
   * @param {Node} node The Node to find index
   * @returns {Number}
   */
  getPositionIndex: function(node) {
    let idx = 0;
    while (node = node.previousSibling) {
      idx += 1;
    }
    return idx;
  },
  /**
   * @description Returns the position of the "node" in the "parentNode" in a numerical array.
   * ex) <p><span>aa</span><span>bb</span></p> : getNodePath(node: "bb", parentNode: "<P>") -> [1, 0]
   * @param {Node} node The Node to find position path
   * @param {Node|null} parentNode Parent node. If null, wysiwyg div area
   * @param {Object|null} _newOffsets If you send an object of the form "{s: 0, e: 0}", the text nodes that are attached together are merged into one, centered on the "node" argument.
   * "_newOffsets.s" stores the length of the combined characters after "node" and "_newOffsets.e" stores the length of the combined characters before "node".
   * Do not use unless absolutely necessary.
   * @returns {Array}
   */
  getNodePath: function(node, parentNode, _newOffsets) {
    const path = [];
    let finds = true;
    this.getParentElement(node, (function(el) {
      if (el === parentNode) finds = false;
      if (finds && !this.isWysiwygDiv(el)) {
        if (_newOffsets && el.nodeType === 3) {
          let temp = null, tempText = null;
          _newOffsets.s = _newOffsets.e = 0;
          let previous = el.previousSibling;
          while (previous && previous.nodeType === 3) {
            tempText = previous.textContent.replace(this.zeroWidthRegExp, "");
            _newOffsets.s += tempText.length;
            el.textContent = tempText + el.textContent;
            temp = previous;
            previous = previous.previousSibling;
            this.removeItem(temp);
          }
          let next = el.nextSibling;
          while (next && next.nodeType === 3) {
            tempText = next.textContent.replace(this.zeroWidthRegExp, "");
            _newOffsets.e += tempText.length;
            el.textContent += tempText;
            temp = next;
            next = next.nextSibling;
            this.removeItem(temp);
          }
        }
        path.push(el);
      }
      return false;
    }).bind(this));
    return path.map(this.getPositionIndex).reverse();
  },
  /**
   * @description Returns the node in the location of the path array obtained from "util.getNodePath".
   * @param {Array} offsets Position array, array obtained from "util.getNodePath"
   * @param {Node} parentNode Base parent element
   * @returns {Node}
   */
  getNodeFromPath: function(offsets, parentNode) {
    let current = parentNode;
    let nodes;
    for (let i = 0, len = offsets.length; i < len; i++) {
      nodes = current.childNodes;
      if (nodes.length === 0) break;
      if (nodes.length <= offsets[i]) {
        current = nodes[nodes.length - 1];
      } else {
        current = nodes[offsets[i]];
      }
    }
    return current;
  },
  /**
   * @description Compares the style and class for equal values.
   * Returns true if both are text nodes.
   * @param {Node} a Node to compare
   * @param {Node} b Node to compare
   * @returns {Boolean}
   */
  isSameAttributes: function(a, b) {
    if (a.nodeType === 3 && b.nodeType === 3) return true;
    if (a.nodeType === 3 || b.nodeType === 3) return false;
    const style_a = a.style;
    const style_b = b.style;
    let compStyle = 0;
    for (let i = 0, len = style_a.length; i < len; i++) {
      if (style_a[style_a[i]] === style_b[style_a[i]]) compStyle++;
    }
    const class_a = a.classList;
    const class_b = b.classList;
    const reg = this._w.RegExp;
    let compClass = 0;
    for (let i = 0, len = class_a.length; i < len; i++) {
      if (reg("(s|^)" + class_a[i] + "(s|$)").test(class_b.value)) compClass++;
    }
    return compStyle === style_b.length && compStyle === style_a.length && (compClass === class_b.length && compClass === class_a.length);
  },
  /**
   * @description Check the line element(util.isFormatElement) is empty.
   * @param {Element} element Format element node
   * @returns {Boolean}
   */
  isEmptyLine: function(element) {
    return !element || !element.parentNode || !element.querySelector("IMG, IFRAME, AUDIO, VIDEO, CANVAS, TABLE") && element.children.length === 0 && this.onlyZeroWidthSpace(element.textContent);
  },
  /**
   * @description Check the span's attributes are empty.
   * @param {Element|null} element Element node
   * @returns {Boolean}
   */
  isSpanWithoutAttr: function(element) {
    return !!element && element.nodeType === 1 && /^SPAN$/i.test(element.nodeName) && !element.className && !element.style.cssText;
  },
  /**
   * @description Check the node is a list (ol, ul)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isList: function(node) {
    return node && /^(OL|UL)$/i.test(typeof node === "string" ? node : node.nodeName);
  },
  /**
   * @description Check the node is a list cell (li)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isListCell: function(node) {
    return node && /^LI$/i.test(typeof node === "string" ? node : node.nodeName);
  },
  /**
   * @description Check the node is a table (table, thead, tbody, tr, th, td)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isTable: function(node) {
    return node && /^(TABLE|THEAD|TBODY|TR|TH|TD)$/i.test(typeof node === "string" ? node : node.nodeName);
  },
  /**
   * @description Check the node is a table cell (td, th)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isCell: function(node) {
    return node && /^(TD|TH)$/i.test(typeof node === "string" ? node : node.nodeName);
  },
  /**
   * @description Check the node is a break node (BR)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isBreak: function(node) {
    return node && /^BR$/i.test(typeof node === "string" ? node : node.nodeName);
  },
  /**
   * @description Check the node is a anchor node (A)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isAnchor: function(node) {
    return node && /^A$/i.test(typeof node === "string" ? node : node.nodeName);
  },
  /**
   * @description Check the node is a media node (img, iframe, audio, video, canvas)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isMedia: function(node) {
    return node && /^(IMG|IFRAME|AUDIO|VIDEO|CANVAS)$/i.test(typeof node === "string" ? node : node.nodeName);
  },
  /**
   * @description Check the node is a figure tag or util.isMedia()
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isFigures: function(node) {
    return node && (this.isMedia(node) || /^(FIGURE)$/i.test(typeof node === "string" ? node : node.nodeName));
  },
  /**
   * @description Checks for numeric (with decimal point).
   * @param {String|Number} text Text string or number
   * @returns {Boolean}
   */
  isNumber: function(text) {
    return !!text && /^-?\d+(\.\d+)?$/.test(text + "");
  },
  /**
   * @description Get a number.
   * @param {String|Number} text Text string or number
   * @param {Number} maxDec Maximum number of decimal places (-1 : Infinity)
   * @returns {Number}
   */
  getNumber: function(text, maxDec) {
    if (!text) return 0;
    let number = (text + "").match(/-?\d+(\.\d+)?/);
    if (!number || !number[0]) return 0;
    number = number[0];
    return maxDec < 0 ? number * 1 : maxDec === 0 ? this._w.Math.round(number * 1) : (number * 1).toFixed(maxDec) * 1;
  },
  /**
   * @description Get all "children" of the argument value element (Without text nodes)
   * @param {Element} element element to get child node
   * @param {Function|null} validation Conditional function
   * @returns {Array}
   */
  getListChildren: function(element, validation) {
    const children = [];
    if (!element || !element.children || element.children.length === 0) return children;
    validation = validation || function() {
      return true;
    };
    (function recursionFunc(current) {
      if (element !== current && validation(current)) {
        children.push(current);
      }
      if (!!current.children) {
        for (let i = 0, len = current.children.length; i < len; i++) {
          recursionFunc(current.children[i]);
        }
      }
    })(element);
    return children;
  },
  /**
   * @description Get all "childNodes" of the argument value element (Include text nodes)
   * @param {Node} element element to get child node
   * @param {Function|null} validation Conditional function
   * @returns {Array}
   */
  getListChildNodes: function(element, validation) {
    const children = [];
    if (!element || element.childNodes.length === 0) return children;
    validation = validation || function() {
      return true;
    };
    (function recursionFunc(current) {
      if (element !== current && validation(current)) {
        children.push(current);
      }
      for (let i = 0, len = current.childNodes.length; i < len; i++) {
        recursionFunc(current.childNodes[i]);
      }
    })(element);
    return children;
  },
  /**
   * @description Returns the number of parents nodes.
   * "0" when the parent node is the WYSIWYG area.
   * "-1" when the element argument is the WYSIWYG area.
   * @param {Node} element The element to check
   * @returns {Number}
   */
  getElementDepth: function(element) {
    if (!element || this.isWysiwygDiv(element)) return -1;
    let depth = 0;
    element = element.parentNode;
    while (element && !this.isWysiwygDiv(element)) {
      depth += 1;
      element = element.parentNode;
    }
    return depth;
  },
  /**
   * @description Compares two elements to find a common ancestor, and returns the order of the two elements.
   * @param {Node} a Node to compare.
   * @param {Node} b Node to compare.
   * @returns {Object} { ancesstor, a, b, result: (a > b ? 1 : a < b ? -1 : 0) };
   */
  compareElements: function(a, b) {
    let aNode = a, bNode = b;
    while (aNode && bNode && aNode.parentNode !== bNode.parentNode) {
      aNode = aNode.parentNode;
      bNode = bNode.parentNode;
    }
    if (!aNode || !bNode) return { ancestor: null, a, b, result: 0 };
    const children = aNode.parentNode.childNodes;
    const aIndex = this.getArrayIndex(children, aNode);
    const bIndex = this.getArrayIndex(children, bNode);
    return {
      ancestor: aNode.parentNode,
      a: aNode,
      b: bNode,
      result: aIndex > bIndex ? 1 : aIndex < bIndex ? -1 : 0
    };
  },
  /**
   * @description Get the parent element of the argument value.
   * A tag that satisfies the query condition is imported.
   * Returns null if not found.
   * @param {Node} element Reference element
   * @param {String|Function} query Query String (nodeName, .className, #ID, :name) or validation function.
   * Not use it like jquery.
   * Only one condition can be entered at a time.
   * @returns {Element|null}
   */
  getParentElement: function(element, query) {
    let check;
    if (typeof query === "function") {
      check = query;
    } else {
      let attr;
      if (/^\./.test(query)) {
        attr = "className";
        query = query.split(".")[1];
      } else if (/^#/.test(query)) {
        attr = "id";
        query = "^" + query.split("#")[1] + "$";
      } else if (/^:/.test(query)) {
        attr = "name";
        query = "^" + query.split(":")[1] + "$";
      } else {
        attr = "nodeName";
        query = "^" + query + "$";
      }
      const regExp = new this._w.RegExp(query, "i");
      check = function(el) {
        return regExp.test(el[attr]);
      };
    }
    while (element && !check(element)) {
      if (this.isWysiwygDiv(element)) {
        return null;
      }
      element = element.parentNode;
    }
    return element;
  },
  /**
   * @description Gets the previous sibling last child. If there is no sibling, then it'll take it from the closest ancestor with child
   * Returns null if not found.
   * @param {Node} node Reference element
   * @param {Node|null} ceiling Highest boundary allowed
   * @returns {Node|null}
   */
  getPreviousDeepestNode: function(node, ceiling) {
    let previousNode = node.previousSibling;
    if (!previousNode) {
      for (let parentNode = node.parentNode; parentNode; parentNode = parentNode.parentNode) {
        if (parentNode === ceiling) return null;
        if (parentNode.previousSibling) {
          previousNode = parentNode.previousSibling;
          break;
        }
      }
      if (!previousNode) return null;
    }
    while (previousNode.lastChild) previousNode = previousNode.lastChild;
    return previousNode;
  },
  /**
   * @description Gets the next sibling first child. If there is no sibling, then it'll take it from the closest ancestor with child
   * Returns null if not found.
   * @param {Node} node Reference element
   * @param {Node|null} ceiling Highest boundary allowed
   * @returns {Node|null}
   */
  getNextDeepestNode: function(node, ceiling) {
    let nextNode = node.nextSibling;
    if (!nextNode) {
      for (let parentNode = node.parentNode; parentNode; parentNode = parentNode.parentNode) {
        if (parentNode === ceiling) return null;
        if (parentNode.nextSibling) {
          nextNode = parentNode.nextSibling;
          break;
        }
      }
      if (!nextNode) return null;
    }
    while (nextNode.firstChild) nextNode = nextNode.firstChild;
    return nextNode;
  },
  /**
   * @description Get the child element of the argument value.
   * A tag that satisfies the query condition is imported.
   * Returns null if not found.
   * @param {Node} element Reference element
   * @param {String|Function} query Query String (nodeName, .className, #ID, :name) or validation function.
   * @param {Boolean} last If true returns the last node among the found child nodes. (default: first node)
   * Not use it like jquery.
   * Only one condition can be entered at a time.
   * @returns {Element|null}
   */
  getChildElement: function(element, query, last) {
    let check;
    if (typeof query === "function") {
      check = query;
    } else {
      let attr;
      if (/^\./.test(query)) {
        attr = "className";
        query = query.split(".")[1];
      } else if (/^#/.test(query)) {
        attr = "id";
        query = "^" + query.split("#")[1] + "$";
      } else if (/^:/.test(query)) {
        attr = "name";
        query = "^" + query.split(":")[1] + "$";
      } else {
        attr = "nodeName";
        query = "^" + (query === "text" ? "#" + query : query) + "$";
      }
      const regExp = new this._w.RegExp(query, "i");
      check = function(el) {
        return regExp.test(el[attr]);
      };
    }
    const childList = this.getListChildNodes(element, function(current) {
      return check(current);
    });
    return childList[last ? childList.length - 1 : 0];
  },
  /**
   * @description 1. The first node of all the child nodes of the "first" element is returned.
   * 2. The last node of all the child nodes of the "last" element is returned.
   * 3. When there is no "last" element, the first and last nodes of all the children of the "first" element are returned.
   * { sc: "first", ec: "last" }
   * @param {Node} first First element
   * @param {Node|null} last Last element
   * @returns {Object}
   */
  getEdgeChildNodes: function(first, last) {
    if (!first) return;
    if (!last) last = first;
    while (first && first.nodeType === 1 && first.childNodes.length > 0 && !this.isBreak(first)) first = first.firstChild;
    while (last && last.nodeType === 1 && last.childNodes.length > 0 && !this.isBreak(last)) last = last.lastChild;
    return {
      sc: first,
      ec: last || first
    };
  },
  /**
   * @description Returns the position of the left and top of argument. {left:0, top:0}
   * @param {Node} element Target node
   * @param {Element|null} wysiwygFrame When use iframe option, iframe object should be sent (context.element.wysiwygFrame)
   * @returns {Object}
   */
  getOffset: function(element, wysiwygFrame) {
    let offsetLeft = 0;
    let offsetTop = 0;
    let offsetElement = element.nodeType === 3 ? element.parentElement : element;
    const wysiwyg = this.getParentElement(element, this.isWysiwygDiv.bind(this));
    while (offsetElement && !this.hasClass(offsetElement, "se-container") && offsetElement !== wysiwyg) {
      offsetLeft += offsetElement.offsetLeft;
      offsetTop += offsetElement.offsetTop;
      offsetElement = offsetElement.offsetParent;
    }
    const iframe = wysiwygFrame && /iframe/i.test(wysiwygFrame.nodeName);
    return {
      left: offsetLeft + (iframe ? wysiwygFrame.parentElement.offsetLeft : 0),
      top: offsetTop - (wysiwyg ? wysiwyg.scrollTop : 0) + (iframe ? wysiwygFrame.parentElement.offsetTop : 0)
    };
  },
  /**
   * @description It compares the start and end indexes of "a" and "b" and returns the number of overlapping indexes in the range.
   * ex) 1, 5, 4, 6 => "2" (4 ~ 5)
   * @param {Number} aStart Start index of "a"
   * @param {Number} aEnd End index of "a"
   * @param {Number} bStart Start index of "b"
   * @param {Number} bEnd Start index of "b"
   * @returns {Number}
   */
  getOverlapRangeAtIndex: function(aStart, aEnd, bStart, bEnd) {
    if (aStart <= bEnd ? aEnd < bStart : aEnd > bStart) return 0;
    const overlap = (aStart > bStart ? aStart : bStart) - (aEnd < bEnd ? aEnd : bEnd);
    return (overlap < 0 ? overlap * -1 : overlap) + 1;
  },
  /**
   * @description Set the text content value of the argument value element
   * @param {Node} element Element to replace text content
   * @param {String} txt Text to be applied
   */
  changeTxt: function(element, txt) {
    if (!element || !txt) return;
    element.textContent = txt;
  },
  /**
   * @description Replace element
   * @param {Element} element Target element
   * @param {String|Element} newElement String or element of the new element to apply
   */
  changeElement: function(element, newElement) {
    if (typeof newElement === "string") {
      if (element.outerHTML) {
        element.outerHTML = newElement;
      } else {
        const doc = this.createElement("DIV");
        doc.innerHTML = newElement;
        newElement = doc.firstChild;
        element.parentNode.replaceChild(newElement, element);
      }
    } else if (newElement.nodeType === 1) {
      element.parentNode.replaceChild(newElement, element);
    }
  },
  /**
   * @description Set style, if all styles are deleted, the style properties are deleted.
   * @param {Element} element Element to set style
   * @param {String} styleName Style attribute name (marginLeft, textAlign...)
   * @param {String|Number} value Style value
   */
  setStyle: function(element, styleName, value) {
    element.style[styleName] = value;
    if (!value && !element.style.cssText) {
      element.removeAttribute("style");
    }
  },
  /**
   * @description Determine whether any of the matched elements are assigned the given class
   * @param {Element} element Elements to search class name
   * @param {String} className Class name to search for
   * @returns {Boolean}
   */
  hasClass: function(element, className) {
    if (!element) return;
    return new this._w.RegExp(className).test(element.className);
  },
  /**
   * @description Append the className value of the argument value element
   * @param {Element} element Elements to add class name
   * @param {String} className Class name to be add
   */
  addClass: function(element, className) {
    if (!element) return;
    const check = new this._w.RegExp("(\\s|^)" + className + "(\\s|$)");
    if (check.test(element.className)) return;
    element.className += (element.className.length > 0 ? " " : "") + className;
  },
  /**
   * @description Delete the className value of the argument value element
   * @param {Element} element Elements to remove class name
   * @param {String} className Class name to be remove
   */
  removeClass: function(element, className) {
    if (!element) return;
    const check = new this._w.RegExp("(\\s|^)" + className + "(\\s|$)");
    element.className = element.className.replace(check, " ").trim();
    if (!element.className.trim()) element.removeAttribute("class");
  },
  /**
   * @description Argument value If there is no class name, insert it and delete the class name if it exists
   * @param {Element} element Elements to replace class name
   * @param {String} className Class name to be change
   * @returns {Boolean|undefined}
   */
  toggleClass: function(element, className) {
    if (!element) return;
    let result = false;
    const check = new this._w.RegExp("(\\s|^)" + className + "(\\s|$)");
    if (check.test(element.className)) {
      element.className = element.className.replace(check, " ").trim();
    } else {
      element.className += " " + className;
      result = true;
    }
    if (!element.className.trim()) element.removeAttribute("class");
    return result;
  },
  /**
   * @description Checks if element can't be easily enabled
   * @param {Element} element Element to check for
   */
  isImportantDisabled: function(element) {
    return element.hasAttribute("data-important-disabled");
  },
  /**
   * @description In the predefined code view mode, the buttons except the executable button are changed to the 'disabled' state.
   * core.codeViewDisabledButtons (An array of buttons whose class name is not "se-code-view-enabled")
   * core.resizingDisabledButtons (An array of buttons whose class name is not "se-resizing-enabled")
   * @param {Boolean} disabled Disabled value
   * @param {Array|HTMLCollection|NodeList} buttonList Button array
   * @param {Boolean} important If priveleged mode should be used (Necessary to switch importantDisabled buttons)
   */
  setDisabledButtons: function(disabled, buttonList, important) {
    for (let i = 0, len = buttonList.length; i < len; i++) {
      let button = buttonList[i];
      if (important || !this.isImportantDisabled(button)) button.disabled = disabled;
      if (important) {
        if (disabled) {
          button.setAttribute("data-important-disabled", "");
        } else {
          button.removeAttribute("data-important-disabled");
        }
      }
    }
  },
  /**
   * @description Delete argumenu value element
   * @param {Node} item Node to be remove
   */
  removeItem: function(item) {
    if (!item) return;
    if (typeof item.remove === "function") item.remove();
    else if (item.parentNode) item.parentNode.removeChild(item);
  },
  /**
   * @description Delete all parent nodes that match the condition.
   * Returns an {sc: previousSibling, ec: nextSibling}(the deleted node reference) or null.
   * @param {Node} item Node to be remove
   * @param {Function|null} validation Validation function. default(Deleted if it only have breakLine and blanks)
   * @param {Element|null} stopParent Stop when the parent node reaches stopParent
   * @returns {Object|null} {sc: previousSibling, ec: nextSibling}
   */
  removeItemAllParents: function(item, validation, stopParent) {
    if (!item) return null;
    let cc = null;
    if (!validation) {
      validation = (function(current) {
        if (current === stopParent || this.isComponent(current)) return false;
        const text = current.textContent.trim();
        return text.length === 0 || /^(\n|\u200B)+$/.test(text);
      }).bind(this);
    }
    (function recursionFunc(element) {
      if (!util.isWysiwygDiv(element)) {
        const parent = element.parentNode;
        if (parent && validation(element)) {
          cc = {
            sc: element.previousElementSibling,
            ec: element.nextElementSibling
          };
          util.removeItem(element);
          recursionFunc(parent);
        }
      }
    })(item);
    return cc;
  },
  /**
   * @description Detach Nested all nested lists under the "baseNode".
   * Returns a list with nested removed.
   * @param {Node} baseNode Element on which to base.
   * @param {Boolean} all If true, it also detach all nested lists of a returned list.
   * @returns {Element}
   */
  detachNestedList: function(baseNode, all) {
    const rNode = this._deleteNestedList(baseNode);
    let rangeElement, cNodes;
    if (rNode) {
      rangeElement = rNode.cloneNode(false);
      cNodes = rNode.childNodes;
      const index = this.getPositionIndex(baseNode);
      while (cNodes[index]) {
        rangeElement.appendChild(cNodes[index]);
      }
    } else {
      rangeElement = baseNode;
    }
    let rChildren;
    if (!all) {
      const depth = this.getElementDepth(baseNode) + 2;
      rChildren = this.getListChildren(baseNode, (function(current) {
        return this.isListCell(current) && !current.previousElementSibling && this.getElementDepth(current) === depth;
      }).bind(this));
    } else {
      rChildren = this.getListChildren(rangeElement, (function(current) {
        return this.isListCell(current) && !current.previousElementSibling;
      }).bind(this));
    }
    for (let i = 0, len = rChildren.length; i < len; i++) {
      this._deleteNestedList(rChildren[i]);
    }
    if (rNode) {
      rNode.parentNode.insertBefore(rangeElement, rNode.nextSibling);
      if (cNodes && cNodes.length === 0) this.removeItem(rNode);
    }
    return rangeElement === baseNode ? rangeElement.parentNode : rangeElement;
  },
  /**
   * @description Sub function of util.detachNestedList method.
   * @private
   */
  _deleteNestedList: function(baseNode) {
    const baseParent = baseNode.parentNode;
    let sibling = baseParent;
    let parent = sibling.parentNode;
    let liSibling, liParent, child, index, c;
    while (this.isListCell(parent)) {
      index = this.getPositionIndex(baseNode);
      liSibling = parent.nextElementSibling;
      liParent = parent.parentNode;
      child = sibling;
      while (child) {
        sibling = sibling.nextSibling;
        if (this.isList(child)) {
          c = child.childNodes;
          while (c[index]) {
            liParent.insertBefore(c[index], liSibling);
          }
          if (c.length === 0) this.removeItem(child);
        } else {
          liParent.appendChild(child);
        }
        child = sibling;
      }
      sibling = liParent;
      parent = liParent.parentNode;
    }
    if (baseParent.children.length === 0) this.removeItem(baseParent);
    return liParent;
  },
  /**
   * @description Split all tags based on "baseNode"
   * Returns the last element of the splited tag.
   * @param {Node} baseNode Element or text node on which to base
   * @param {Number|Node|null} offset Text offset of "baseNode" (Only valid when "baseNode" is a text node)
   * @param {Number} depth The nesting depth of the element being split. (default: 0)
   * @returns {Element}
   */
  splitElement: function(baseNode, offset, depth) {
    if (this.isWysiwygDiv(baseNode)) return baseNode;
    if (offset && !this.isNumber(offset)) {
      const children2 = baseNode.childNodes;
      let index2 = this.getPositionIndex(offset);
      const prev = baseNode.cloneNode(false);
      const next2 = baseNode.cloneNode(false);
      for (let i = 0, len = children2.length; i < len; i++) {
        if (i < index2) prev.appendChild(children2[i]);
        else if (i > index2) next2.appendChild(children2[i]);
        else continue;
        i--;
        len--;
        index2--;
      }
      if (prev.childNodes.length > 0) baseNode.parentNode.insertBefore(prev, baseNode);
      if (next2.childNodes.length > 0) baseNode.parentNode.insertBefore(next2, baseNode.nextElementSibling);
      return baseNode;
    }
    const bp = baseNode.parentNode;
    let index = 0;
    let suffixIndex = 1;
    let next = true;
    let newEl, children, temp;
    if (!depth || depth < 0) depth = 0;
    if (baseNode.nodeType === 3) {
      index = this.getPositionIndex(baseNode);
      if (offset >= 0 && baseNode.length !== offset) {
        baseNode.splitText(offset);
        const after = this.getNodeFromPath([index + 1], bp);
        if (this.onlyZeroWidthSpace(after)) after.data = this.zeroWidthSpace;
      }
    } else if (baseNode.nodeType === 1) {
      if (offset === 0) {
        while (baseNode.firstChild) {
          baseNode = baseNode.firstChild;
        }
        if (baseNode.nodeType === 3) {
          const after = this.createTextNode(this.zeroWidthSpace);
          baseNode.parentNode.insertBefore(after, baseNode);
          baseNode = after;
        }
      }
      if (!baseNode.previousSibling) {
        if (this.getElementDepth(baseNode) === depth) next = false;
      } else {
        baseNode = baseNode.previousSibling;
      }
    }
    if (baseNode.nodeType === 1) suffixIndex = 0;
    let depthEl = baseNode;
    while (this.getElementDepth(depthEl) > depth) {
      index = this.getPositionIndex(depthEl) + suffixIndex;
      depthEl = depthEl.parentNode;
      temp = newEl;
      newEl = depthEl.cloneNode(false);
      children = depthEl.childNodes;
      if (temp) {
        if (this.isListCell(newEl) && this.isList(temp) && temp.firstElementChild) {
          newEl.innerHTML = temp.firstElementChild.innerHTML;
          util.removeItem(temp.firstElementChild);
          if (temp.children.length > 0) newEl.appendChild(temp);
        } else {
          newEl.appendChild(temp);
        }
      }
      while (children[index]) {
        newEl.appendChild(children[index]);
      }
    }
    if (depthEl.childNodes.length <= 1 && (!depthEl.firstChild || depthEl.firstChild.textContent.length === 0)) depthEl.innerHTML = "<br>";
    const pElement = depthEl.parentNode;
    if (next) depthEl = depthEl.nextSibling;
    if (!newEl) return depthEl;
    this.mergeSameTags(newEl, null, false);
    this.mergeNestedTags(newEl, (function(current) {
      return this.isList(current);
    }).bind(this));
    if (newEl.childNodes.length > 0) pElement.insertBefore(newEl, depthEl);
    else newEl = depthEl;
    if (this.isListCell(newEl) && newEl.children && this.isList(newEl.children[0])) {
      newEl.insertBefore(this.createElement("BR"), newEl.children[0]);
    }
    if (bp.childNodes.length === 0) this.removeItem(bp);
    return newEl;
  },
  /**
   * @description Use with "npdePath (util.getNodePath)" to merge the same attributes and tags if they are present and modify the nodepath.
   * If "offset" has been changed, it will return as much "offset" as it has been modified.
   * An array containing change offsets is returned in the order of the "nodePathArray" array.
   * @param {Element} element Element
   * @param {Array|null} nodePathArray Array of NodePath object ([util.getNodePath(), ..])
   * @param {Boolean} onlyText If true, non-text nodes(!util._isIgnoreNodeChange) like 'span', 'strong'.. are ignored.
   * @returns {Array} [offset, ..]
   */
  mergeSameTags: function(element, nodePathArray, onlyText) {
    const inst = this;
    const nodePathLen = nodePathArray ? nodePathArray.length : 0;
    let offsets = null;
    if (nodePathLen) {
      offsets = this._w.Array.apply(null, new this._w.Array(nodePathLen)).map(this._w.Number.prototype.valueOf, 0);
    }
    (function recursionFunc(current, depth, depthIndex) {
      const children = current.childNodes;
      for (let i = 0, len = children.length, child, next; i < len; i++) {
        child = children[i];
        next = children[i + 1];
        if (!child) break;
        if (inst.isBreak(child) || inst.isMedia(child) || inst.isInputElement(child)) continue;
        if (onlyText && inst._isIgnoreNodeChange(child) || !onlyText && (inst.isTable(child) || inst.isListCell(child) || inst.isFormatElement(child) && !inst.isFreeFormatElement(child))) {
          if (inst.isTable(child) || inst.isListCell(child)) {
            recursionFunc(child, depth + 1, i);
          }
          continue;
        }
        if (len === 1 && current.nodeName === child.nodeName && current.parentNode) {
          if (nodePathLen) {
            let path, c, p, cDepth, spliceDepth;
            for (let n = 0; n < nodePathLen; n++) {
              path = nodePathArray[n];
              if (path && path[depth] === i) {
                c = child, p = current, cDepth = depth, spliceDepth = true;
                while (cDepth >= 0) {
                  if (inst.getArrayIndex(p.childNodes, c) !== path[cDepth]) {
                    spliceDepth = false;
                    break;
                  }
                  c = child.parentNode;
                  p = c.parentNode;
                  cDepth--;
                }
                if (spliceDepth) {
                  path.splice(depth, 1);
                  path[depth] = i;
                }
              }
            }
          }
          inst.copyTagAttributes(child, current);
          current.parentNode.insertBefore(child, current);
          inst.removeItem(current);
        }
        if (!next) {
          if (child.nodeType === 1) recursionFunc(child, depth + 1, i);
          break;
        }
        if (child.nodeName === next.nodeName && inst.isSameAttributes(child, next) && child.href === next.href) {
          const childs = child.childNodes;
          let childLength = 0;
          for (let n = 0, nLen = childs.length; n < nLen; n++) {
            if (childs[n].textContent.length > 0) childLength++;
          }
          const l = child.lastChild;
          const r = next.firstChild;
          let addOffset = 0;
          if (l && r) {
            const textOffset = l.nodeType === 3 && r.nodeType === 3;
            addOffset = l.textContent.length;
            let tempL = l.previousSibling;
            while (tempL && tempL.nodeType === 3) {
              addOffset += tempL.textContent.length;
              tempL = tempL.previousSibling;
            }
            if (childLength > 0 && l.nodeType === 3 && r.nodeType === 3 && (l.textContent.length > 0 || r.textContent.length > 0)) childLength--;
            if (nodePathLen) {
              let path = null;
              for (let n = 0; n < nodePathLen; n++) {
                path = nodePathArray[n];
                if (path && path[depth] > i) {
                  if (depth > 0 && path[depth - 1] !== depthIndex) continue;
                  path[depth] -= 1;
                  if (path[depth + 1] >= 0 && path[depth] === i) {
                    path[depth + 1] += childLength;
                    if (textOffset) {
                      if (l && l.nodeType === 3 && r && r.nodeType === 3) {
                        offsets[n] += addOffset;
                      }
                    }
                  }
                }
              }
            }
          }
          if (child.nodeType === 3) {
            addOffset = child.textContent.length;
            child.textContent += next.textContent;
            if (nodePathLen) {
              let path = null;
              for (let n = 0; n < nodePathLen; n++) {
                path = nodePathArray[n];
                if (path && path[depth] > i) {
                  if (depth > 0 && path[depth - 1] !== depthIndex) continue;
                  path[depth] -= 1;
                  if (path[depth + 1] >= 0 && path[depth] === i) {
                    path[depth + 1] += childLength;
                    offsets[n] += addOffset;
                  }
                }
              }
            }
          } else {
            child.innerHTML += next.innerHTML;
          }
          inst.removeItem(next);
          i--;
        } else if (child.nodeType === 1) {
          recursionFunc(child, depth + 1, i);
        }
      }
    })(element, 0, 0);
    return offsets;
  },
  /**
   * @description Remove nested tags without other child nodes.
   * @param {Element} element Element object
   * @param {Function|String|null} validation Validation function / String("tag1|tag2..") / If null, all tags are applicable.
   */
  mergeNestedTags: function(element, validation) {
    if (typeof validation === "string") {
      validation = (function(current) {
        return this.test(current.tagName);
      }).bind(new this._w.RegExp("^(" + (validation ? validation : ".+") + ")$", "i"));
    } else if (typeof validation !== "function") {
      validation = function() {
        return true;
      };
    }
    (function recursionFunc(current) {
      let children = current.children;
      if (children.length === 1 && children[0].nodeName === current.nodeName && validation(current)) {
        const temp = children[0];
        children = temp.children;
        while (children[0]) {
          current.appendChild(children[0]);
        }
        current.removeChild(temp);
      }
      for (let i = 0, len = current.children.length; i < len; i++) {
        recursionFunc(current.children[i]);
      }
    })(element);
  },
  /**
   * @description Delete a empty child node of argument element.
   * @param {Element} element Element node
   * @param {Node|null} notRemoveNode Do not remove node
   * @param {boolean} forceDelete When all child nodes are deleted, the parent node is also deleted.
   */
  removeEmptyNode: function(element, notRemoveNode, forceDelete) {
    const inst = this;
    if (notRemoveNode) {
      notRemoveNode = inst.getParentElement(notRemoveNode, function(current) {
        return element === current.parentElement;
      });
    }
    (function recursionFunc(current) {
      if (inst._notTextNode(current) || current === notRemoveNode || inst.isNonEditable(current)) return 0;
      if (current !== element && inst.onlyZeroWidthSpace(current.textContent) && (!current.firstChild || !inst.isBreak(current.firstChild)) && !current.querySelector(inst._allowedEmptyNodeList)) {
        if (current.parentNode) {
          current.parentNode.removeChild(current);
          return -1;
        }
      } else {
        const children = current.children;
        for (let i = 0, len = children.length, r = 0; i < len; i++) {
          if (!children[i + r] || inst.isComponent(children[i + r])) continue;
          r += recursionFunc(children[i + r]);
        }
      }
      return 0;
    })(element);
    if (element.childNodes.length === 0) {
      if (forceDelete) {
        this.removeItem(element);
      } else {
        element.innerHTML = "<br>";
      }
    }
  },
  /**
   * @description Remove whitespace between tags in HTML string.
   * @param {String} html HTML string
   * @returns {String}
   */
  htmlRemoveWhiteSpace: function(html) {
    if (!html) return "";
    return html.trim().replace(/<\/?(?!strong|span|font|b|var|i|em|u|ins|s|strike|del|sub|sup|mark|a|label|code|summary)[^>^<]+>\s+(?=<)/ig, function(m) {
      return m.replace(/\n/g, "").replace(/\s+/, " ");
    });
  },
  /**
   * @description HTML code compression
   * @param {string} html HTML string
   * @returns {string} HTML string
   */
  htmlCompress: function(html) {
    return html.replace(/\n/g, "").replace(/>\s+</g, "> <");
  },
  /**
   * @description Sort a element array by depth of element.
   * @param {Array} array Array object
   * @param {Boolean} des true: descending order / false: ascending order
   */
  sortByDepth: function(array, des) {
    const t = !des ? -1 : 1;
    const f = t * -1;
    array.sort((function(a, b) {
      if (!this.isListCell(a) || !this.isListCell(b)) return 0;
      a = this.getElementDepth(a);
      b = this.getElementDepth(b);
      return a > b ? t : a < b ? f : 0;
    }).bind(this));
  },
  /**
   * @description Escape a string for safe use in regular expressions.
   * @param {String} string String to escape
   * @returns {String}
   */
  escapeStringRegexp: function(string) {
    if (typeof string !== "string") {
      throw new TypeError("Expected a string");
    }
    return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  },
  _isExcludeSelectionElement: function(element) {
    return !/FIGCAPTION/i.test(element.nodeName) && (this.isComponent(element) || /FIGURE/i.test(element.nodeName));
  },
  /**
   * @description Nodes that need to be added without modification when changing text nodes
   * @param {Node} element Element to check
   * @returns {Boolean}
   * @private
   */
  _isIgnoreNodeChange: function(element) {
    return element && element.nodeType !== 3 && (this.isNonEditable(element) || !this.isTextStyleElement(element));
  },
  /**
   * @description Nodes that must remain undetached when changing text nodes (A, Label, Code, Span:font-size)
   * @param {Node|String} element Element to check
   * @returns {Boolean}
   * @private
   */
  _isMaintainedNode: function(element) {
    return element && element.nodeType !== 3 && /^(a|label|code|summary)$/i.test(typeof element === "string" ? element : element.nodeName);
  },
  /**
   * @description Node with font-size style
   * @param {Node} element Element to check
   * @returns {Boolean}
   * @private
   */
  _isSizeNode: function(element) {
    return element && element.nodeType !== 3 && this.isTextStyleElement(element) && !!element.style.fontSize;
  },
  /**
   * @description Nodes without text
   * @param {Node} element Element to check
   * @returns {Boolean}
   * @private
   */
  _notTextNode: function(element) {
    return element && element.nodeType !== 3 && (this.isComponent(element) || /^(br|input|select|canvas|img|iframe|audio|video)$/i.test(typeof element === "string" ? element : element.nodeName));
  },
  /**
   * @deprecated
   * @description Check disallowed tags
   * @param {Node} element Element to check
   * @returns {Boolean}
   * @private
   */
  _disallowedTags: function(element) {
    return /^(meta|script|link|style|[a-z]+\:[a-z]+)$/i.test(element.nodeName);
  },
  /**
   * @description Create whitelist RegExp object.
   * Return RegExp format: new RegExp("<\\/?\\b(?!" + list + ")\\b[^>^<]*+>", "gi")
   * @param {String} list Tags list ("br|p|div|pre...")
   * @returns {RegExp}
   */
  createTagsWhitelist: function(list) {
    return new RegExp("<\\/?\\b(?!\\b" + (list || "").replace(/\|/g, "\\b|\\b") + "\\b)[^>]*>", "gi");
  },
  /**
   * @description Create blacklist RegExp object.
   * Return RegExp format: new RegExp("<\\/?\\b(?:" + list + ")\\b[^>^<]*+>", "gi")
   * @param {String} list Tags list ("br|p|div|pre...")
   * @returns {RegExp}
   */
  createTagsBlacklist: function(list) {
    return new RegExp("<\\/?\\b(?:\\b" + (list || "^").replace(/\|/g, "\\b|\\b") + "\\b)[^>]*>", "gi");
  },
  /**
   * @description Fix tags that do not fit the editor format.
   * @param {Element} documentFragment Document fragment "DOCUMENT_FRAGMENT_NODE" (nodeType === 11)
   * @param {RegExp} htmlCheckWhitelistRegExp Editor tags whitelist (core._htmlCheckWhitelistRegExp)
   * @param {RegExp} htmlCheckBlacklistRegExp Editor tags blacklist (core._htmlCheckBlacklistRegExp)
   * @param {Function} classNameFilter Class name filter function
   * @param {Function} strictHTMLValidation Enforces strict HTML validation based on the editor`s policy
   * @private
   */
  _consistencyCheckOfHTML: function(documentFragment, htmlCheckWhitelistRegExp, htmlCheckBlacklistRegExp, classNameFilter, strictHTMLValidation) {
    const removeTags = [], emptyTags = [], wrongList = [], withoutFormatCells = [];
    const wrongTags = this.getListChildNodes(documentFragment, (function(current) {
      if (current.nodeType !== 1) {
        if (this.isList(current.parentElement)) removeTags.push(current);
        return false;
      }
      if (htmlCheckBlacklistRegExp.test(current.nodeName) || !htmlCheckWhitelistRegExp.test(current.nodeName) && current.childNodes.length === 0 && this.isNotCheckingNode(current)) {
        removeTags.push(current);
        return false;
      }
      const nrtag = !this.getParentElement(current, this.isNotCheckingNode);
      if (!this.isTable(current) && !this.isListCell(current) && !this.isAnchor(current) && (this.isFormatElement(current) || this.isRangeFormatElement(current) || this.isTextStyleElement(current)) && current.childNodes.length === 0 && nrtag) {
        emptyTags.push(current);
        return false;
      }
      if (this.isList(current.parentNode) && !this.isList(current) && !this.isListCell(current)) {
        wrongList.push(current);
        return false;
      }
      if (this.isCell(current)) {
        const fel = current.firstElementChild;
        if (!this.isFormatElement(fel) && !this.isRangeFormatElement(fel) && !this.isComponent(fel)) {
          withoutFormatCells.push(current);
          return false;
        }
      }
      if (nrtag && current.className) {
        const className = new this._w.Array(current.classList).map(classNameFilter).join(" ").trim();
        if (className) current.className = className;
        else current.removeAttribute("class");
      }
      const result = strictHTMLValidation && current.parentNode !== documentFragment && nrtag && (this.isListCell(current) && !this.isList(current.parentNode) || (this.isFormatElement(current) || this.isComponent(current)) && !this.isRangeFormatElement(current.parentNode) && !this.getParentElement(current, this.isComponent));
      return result;
    }).bind(this));
    for (let i = 0, len = removeTags.length; i < len; i++) {
      this.removeItem(removeTags[i]);
    }
    const checkTags = [];
    for (let i = 0, len = wrongTags.length, t, p; i < len; i++) {
      t = wrongTags[i];
      p = t.parentNode;
      if (!p || !p.parentNode) continue;
      if (this.getParentElement(t, this.isListCell)) {
        const cellChildren = t.childNodes;
        for (let j = cellChildren.length - 1; len >= 0; j--) {
          p.insertBefore(t, cellChildren[j]);
        }
        checkTags.push(t);
      } else {
        p.parentNode.insertBefore(t, p);
        checkTags.push(p);
      }
    }
    for (let i = 0, len = checkTags.length, t; i < len; i++) {
      t = checkTags[i];
      if (this.onlyZeroWidthSpace(t.textContent.trim())) {
        this.removeItem(t);
      }
    }
    for (let i = 0, len = emptyTags.length; i < len; i++) {
      this.removeItem(emptyTags[i]);
    }
    for (let i = 0, len = wrongList.length, t, tp, children, p; i < len; i++) {
      t = wrongList[i];
      p = t.parentNode;
      if (!p) continue;
      tp = this.createElement("LI");
      if (this.isFormatElement(t)) {
        children = t.childNodes;
        while (children[0]) {
          tp.appendChild(children[0]);
        }
        p.insertBefore(tp, t);
        this.removeItem(t);
      } else {
        t = t.nextSibling;
        tp.appendChild(wrongList[i]);
        p.insertBefore(tp, t);
      }
    }
    for (let i = 0, len = withoutFormatCells.length, t, f; i < len; i++) {
      t = withoutFormatCells[i];
      f = this.createElement("DIV");
      f.innerHTML = t.textContent.trim().length === 0 && t.children.length === 0 ? "<br>" : t.innerHTML;
      t.innerHTML = f.outerHTML;
    }
  },
  _setDefaultOptionStyle: function(options, defaultStyle) {
    let optionStyle = "";
    if (options.height) optionStyle += "height:" + options.height + ";";
    if (options.minHeight) optionStyle += "min-height:" + options.minHeight + ";";
    if (options.maxHeight) optionStyle += "max-height:" + options.maxHeight + ";";
    if (options.position) optionStyle += "position:" + options.position + ";";
    if (options.width) optionStyle += "width:" + options.width + ";";
    if (options.minWidth) optionStyle += "min-width:" + options.minWidth + ";";
    if (options.maxWidth) optionStyle += "max-width:" + options.maxWidth + ";";
    let top = "", frame = "", editor = "";
    defaultStyle = optionStyle + defaultStyle;
    const styleArr = defaultStyle.split(";");
    for (let i = 0, len = styleArr.length, s; i < len; i++) {
      s = styleArr[i].trim();
      if (!s) continue;
      if (/^(min-|max-)?width\s*:/.test(s) || /^(z-index|position)\s*:/.test(s)) {
        top += s + ";";
        continue;
      }
      if (/^(min-|max-)?height\s*:/.test(s)) {
        if (/^height/.test(s) && s.split(":")[1].trim() === "auto") {
          options.height = "auto";
        }
        frame += s + ";";
        continue;
      }
      editor += s + ";";
    }
    return {
      top,
      frame,
      editor
    };
  },
  _setIframeDocument: function(frame, options) {
    frame.setAttribute("scrolling", "auto");
    frame.contentDocument.head.innerHTML = '<meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">' + this._setIframeCssTags(options);
    frame.contentDocument.body.className = options._editableClass;
    frame.contentDocument.body.setAttribute("contenteditable", true);
    frame.contentDocument.body.setAttribute("autocorrect", "off");
  },
  _setIframeCssTags: function(options) {
    const linkNames = options.iframeCSSFileName;
    const wRegExp = this._w.RegExp;
    let tagString = "";
    for (let f = 0, len = linkNames.length, path; f < len; f++) {
      path = [];
      if (/(^https?:\/\/)|(^data:text\/css,)/.test(linkNames[f])) {
        path.push(linkNames[f]);
      } else {
        const CSSFileName = new wRegExp("(^|.*[\\/])" + linkNames[f] + "(\\..+)?\\.css(?:\\?.*|;.*)?$", "i");
        for (let c = document.getElementsByTagName("link"), i = 0, len2 = c.length, styleTag; i < len2; i++) {
          styleTag = c[i].href.match(CSSFileName);
          if (styleTag) path.push(styleTag[0]);
        }
      }
      if (!path || path.length === 0) throw '[SUNEDITOR.constructor.iframe.fail] The suneditor CSS files installation path could not be automatically detected. Please set the option property "iframeCSSFileName" before creating editor instances.';
      for (let i = 0, len2 = path.length; i < len2; i++) {
        tagString += '<link href="' + path[i] + '" rel="stylesheet">';
      }
    }
    return tagString + (options.height === "auto" ? "<style>\n/** Iframe height auto */\nbody{height: min-content; overflow: hidden;}\n</style>" : "");
  }
};
var util_default = util;

// node_modules/suneditor/src/lib/constructor.js
var constructor_default = {
  /**
   * @description document create
   * @param {Element} element Textarea
   * @param {Object} options Options
   * @returns {Object}
   */
  init: function(element, options) {
    if (typeof options !== "object") options = {};
    const doc = document;
    this._initOptions(element, options);
    const top_div = doc.createElement("DIV");
    top_div.className = "sun-editor" + (options.rtl ? " se-rtl" : "");
    if (element.id) top_div.id = "suneditor_" + element.id;
    const relative = doc.createElement("DIV");
    relative.className = "se-container";
    const tool_bar = this._createToolBar(doc, options.buttonList, options.plugins, options);
    const toolbarShadow = tool_bar.element.cloneNode(false);
    toolbarShadow.className += " se-toolbar-shadow";
    tool_bar.element.style.visibility = "hidden";
    if (tool_bar.pluginCallButtons.math) this._checkKatexMath(options.katex);
    const arrow = doc.createElement("DIV");
    arrow.className = "se-arrow";
    const sticky_dummy = doc.createElement("DIV");
    sticky_dummy.className = "se-toolbar-sticky-dummy";
    const editor_div = doc.createElement("DIV");
    editor_div.className = "se-wrapper";
    const initElements = this._initElements(options, top_div, tool_bar.element, arrow);
    const bottomBar = initElements.bottomBar;
    const wysiwyg_div = initElements.wysiwygFrame;
    const placeholder_span = initElements.placeholder;
    let textarea = initElements.codeView;
    const resizing_bar = bottomBar.resizingBar;
    const navigation = bottomBar.navigation;
    const char_wrapper = bottomBar.charWrapper;
    const char_counter = bottomBar.charCounter;
    const loading_box = doc.createElement("DIV");
    loading_box.className = "se-loading-box sun-editor-common";
    loading_box.innerHTML = '<div class="se-loading-effect"></div>';
    const line_breaker = doc.createElement("DIV");
    line_breaker.className = "se-line-breaker";
    line_breaker.innerHTML = '<button class="se-btn">' + options.icons.line_break + "</button>";
    const line_breaker_t = doc.createElement("DIV");
    line_breaker_t.className += "se-line-breaker-component";
    const line_breaker_b = line_breaker_t.cloneNode(true);
    line_breaker_t.innerHTML = line_breaker_b.innerHTML = options.icons.line_break;
    const resize_back = doc.createElement("DIV");
    resize_back.className = "se-resizing-back";
    const focusTemp = doc.createElement("INPUT");
    focusTemp.tabIndex = -1;
    focusTemp.style.cssText = "position: fixed !important; top: -10000px !important; display: block !important; width: 0 !important; height: 0 !important; margin: 0 !important; padding: 0 !important;";
    const toolbarContainer = options.toolbarContainer;
    if (toolbarContainer) {
      toolbarContainer.appendChild(tool_bar.element);
      toolbarContainer.appendChild(toolbarShadow);
    }
    const resizingBarContainer = options.resizingBarContainer;
    if (resizing_bar && resizingBarContainer) resizingBarContainer.appendChild(resizing_bar);
    editor_div.appendChild(textarea);
    if (placeholder_span) editor_div.appendChild(placeholder_span);
    if (!toolbarContainer) {
      relative.appendChild(tool_bar.element);
      relative.appendChild(toolbarShadow);
    }
    relative.appendChild(sticky_dummy);
    relative.appendChild(editor_div);
    relative.appendChild(resize_back);
    relative.appendChild(loading_box);
    relative.appendChild(line_breaker);
    relative.appendChild(line_breaker_t);
    relative.appendChild(line_breaker_b);
    relative.appendChild(focusTemp);
    if (resizing_bar && !resizingBarContainer) relative.appendChild(resizing_bar);
    top_div.appendChild(relative);
    textarea = this._checkCodeMirror(options, textarea);
    return {
      constructed: {
        _top: top_div,
        _relative: relative,
        _toolBar: tool_bar.element,
        _toolbarShadow: toolbarShadow,
        _menuTray: tool_bar._menuTray,
        _editorArea: editor_div,
        _wysiwygArea: wysiwyg_div,
        _codeArea: textarea,
        _placeholder: placeholder_span,
        _resizingBar: resizing_bar,
        _navigation: navigation,
        _charWrapper: char_wrapper,
        _charCounter: char_counter,
        _loading: loading_box,
        _lineBreaker: line_breaker,
        _lineBreaker_t: line_breaker_t,
        _lineBreaker_b: line_breaker_b,
        _resizeBack: resize_back,
        _stickyDummy: sticky_dummy,
        _arrow: arrow,
        _focusTemp: focusTemp
      },
      options,
      plugins: tool_bar.plugins,
      pluginCallButtons: tool_bar.pluginCallButtons,
      _responsiveButtons: tool_bar.responsiveButtons
    };
  },
  /**
   * @description Check the CodeMirror option to apply the CodeMirror and return the CodeMirror element.
   * @param {Object} options options
   * @param {Element} textarea textarea element
   * @private
   */
  _checkCodeMirror: function(options, textarea) {
    if (options.codeMirror) {
      const cmOptions = [{
        mode: "htmlmixed",
        htmlMode: true,
        lineNumbers: true,
        lineWrapping: true
      }, options.codeMirror.options || {}].reduce(function(init, option) {
        for (let key in option) {
          if (util_default.hasOwn(option, key)) init[key] = option[key];
        }
        return init;
      }, {});
      if (options.height === "auto") {
        cmOptions.viewportMargin = Infinity;
        cmOptions.height = "auto";
      }
      const cm = options.codeMirror.src.fromTextArea(textarea, cmOptions);
      cm.display.wrapper.style.cssText = textarea.style.cssText;
      options.codeMirrorEditor = cm;
      textarea = cm.display.wrapper;
      textarea.className += " se-wrapper-code-mirror";
    }
    return textarea;
  },
  /**
   * @description Check for a katex object.
   * @param {Object} katex katex object
   * @private
   */
  _checkKatexMath: function(katex) {
    if (!katex) throw Error('[SUNEDITOR.create.fail] To use the math button you need to add a "katex" object to the options.');
    const katexOptions = [{
      throwOnError: false
    }, katex.options || {}].reduce(function(init, option) {
      for (let key in option) {
        if (util_default.hasOwn(option, key)) init[key] = option[key];
      }
      return init;
    }, {});
    katex.options = katexOptions;
  },
  /**
   * @description Add or reset options
   * @param {Object} mergeOptions New options property
   * @param {Object} context Context object of core
   * @param {Object} originOptions Origin options
   * @returns {Object} pluginCallButtons
   * @private
   */
  _setOptions: function(mergeOptions, context, originOptions) {
    this._initOptions(context.element.originElement, mergeOptions);
    const el = context.element;
    const relative = el.relative;
    const editorArea = el.editorArea;
    const isNewToolbarContainer = mergeOptions.toolbarContainer && mergeOptions.toolbarContainer !== originOptions.toolbarContainer;
    const isNewToolbar = mergeOptions.lang !== originOptions.lang || mergeOptions.buttonList !== originOptions.buttonList || mergeOptions.mode !== originOptions.mode || isNewToolbarContainer;
    const tool_bar = this._createToolBar(document, isNewToolbar ? mergeOptions.buttonList : originOptions.buttonList, mergeOptions.plugins, mergeOptions);
    if (tool_bar.pluginCallButtons.math) this._checkKatexMath(mergeOptions.katex);
    const arrow = document.createElement("DIV");
    arrow.className = "se-arrow";
    if (isNewToolbar) {
      tool_bar.element.style.visibility = "hidden";
      if (isNewToolbarContainer) {
        mergeOptions.toolbarContainer.appendChild(tool_bar.element);
        el.toolbar.parentElement.removeChild(el.toolbar);
      } else {
        el.toolbar.parentElement.replaceChild(tool_bar.element, el.toolbar);
      }
      el.toolbar = tool_bar.element;
      el._menuTray = tool_bar._menuTray;
      el._arrow = arrow;
    }
    const initElements = this._initElements(mergeOptions, el.topArea, isNewToolbar ? tool_bar.element : el.toolbar, arrow);
    const bottomBar = initElements.bottomBar;
    const wysiwygFrame = initElements.wysiwygFrame;
    const placeholder_span = initElements.placeholder;
    let code = initElements.codeView;
    if (el.resizingBar) util_default.removeItem(el.resizingBar);
    if (bottomBar.resizingBar) {
      if (mergeOptions.resizingBarContainer && mergeOptions.resizingBarContainer !== originOptions.resizingBarContainer) {
        mergeOptions.resizingBarContainer.appendChild(bottomBar.resizingBar);
      } else {
        relative.appendChild(bottomBar.resizingBar);
      }
    }
    editorArea.innerHTML = "";
    editorArea.appendChild(code);
    if (placeholder_span) editorArea.appendChild(placeholder_span);
    code = this._checkCodeMirror(mergeOptions, code);
    el.resizingBar = bottomBar.resizingBar;
    el.navigation = bottomBar.navigation;
    el.charWrapper = bottomBar.charWrapper;
    el.charCounter = bottomBar.charCounter;
    el.wysiwygFrame = wysiwygFrame;
    el.code = code;
    el.placeholder = placeholder_span;
    if (mergeOptions.rtl) util_default.addClass(el.topArea, "se-rtl");
    else util_default.removeClass(el.topArea, "se-rtl");
    return {
      callButtons: tool_bar.pluginCallButtons,
      plugins: tool_bar.plugins,
      toolbar: tool_bar
    };
  },
  /**
   * @description Initialize property of suneditor elements
   * @param {Object} options Options
   * @param {Element} topDiv Suneditor top div
   * @param {Element} toolBar Tool bar
   * @param {Element} toolBarArrow Tool bar arrow (balloon editor)
   * @returns {Object} Bottom bar elements (resizingBar, navigation, charWrapper, charCounter)
   * @private
   */
  _initElements: function(options, topDiv, toolBar, toolBarArrow) {
    topDiv.style.cssText = options._editorStyles.top;
    if (/inline/i.test(options.mode)) {
      toolBar.className += " se-toolbar-inline";
      toolBar.style.width = options.toolbarWidth;
    } else if (/balloon/i.test(options.mode)) {
      toolBar.className += " se-toolbar-balloon";
      toolBar.style.width = options.toolbarWidth;
      toolBar.appendChild(toolBarArrow);
    }
    const wysiwygDiv = document.createElement(!options.iframe ? "DIV" : "IFRAME");
    wysiwygDiv.className = "se-wrapper-inner se-wrapper-wysiwyg";
    if (!options.iframe) {
      wysiwygDiv.setAttribute("contenteditable", true);
      wysiwygDiv.setAttribute("autocorrect", "off");
      wysiwygDiv.setAttribute("scrolling", "auto");
      for (let key in options.iframeAttributes) {
        wysiwygDiv.setAttribute(key, options.iframeAttributes[key]);
      }
      wysiwygDiv.className += " " + options._editableClass;
      wysiwygDiv.style.cssText = options._editorStyles.frame + options._editorStyles.editor;
      wysiwygDiv.className += options.className;
    } else {
      wysiwygDiv.allowFullscreen = true;
      wysiwygDiv.frameBorder = 0;
      wysiwygDiv.style.cssText = options._editorStyles.frame;
      wysiwygDiv.className += options.className;
    }
    const textarea = document.createElement("TEXTAREA");
    textarea.className = "se-wrapper-inner se-wrapper-code" + options.className;
    textarea.style.cssText = options._editorStyles.frame;
    textarea.style.display = "none";
    if (options.height === "auto") textarea.style.overflow = "hidden";
    let resizingBar = null;
    let navigation = null;
    let charWrapper = null;
    let charCounter = null;
    if (options.resizingBar) {
      resizingBar = document.createElement("DIV");
      resizingBar.className = "se-resizing-bar sun-editor-common";
      navigation = document.createElement("DIV");
      navigation.className = "se-navigation sun-editor-common";
      resizingBar.appendChild(navigation);
      if (options.charCounter) {
        charWrapper = document.createElement("DIV");
        charWrapper.className = "se-char-counter-wrapper";
        if (options.charCounterLabel) {
          const charLabel = document.createElement("SPAN");
          charLabel.className = "se-char-label";
          charLabel.textContent = options.charCounterLabel;
          charWrapper.appendChild(charLabel);
        }
        charCounter = document.createElement("SPAN");
        charCounter.className = "se-char-counter";
        charCounter.textContent = "0";
        charWrapper.appendChild(charCounter);
        if (options.maxCharCount > 0) {
          const char_max = document.createElement("SPAN");
          char_max.textContent = " / " + options.maxCharCount;
          charWrapper.appendChild(char_max);
        }
        resizingBar.appendChild(charWrapper);
      }
    }
    let placeholder = null;
    if (options.placeholder) {
      placeholder = document.createElement("SPAN");
      placeholder.className = "se-placeholder";
      placeholder.innerText = options.placeholder;
    }
    return {
      bottomBar: {
        resizingBar,
        navigation,
        charWrapper,
        charCounter
      },
      wysiwygFrame: wysiwygDiv,
      codeView: textarea,
      placeholder
    };
  },
  /**
   * @description Initialize options
   * @param {Element} element Options object
   * @param {Object} options Options object
   * @private
   */
  _initOptions: function(element, options) {
    const plugins = {};
    if (options.plugins) {
      const _plugins = options.plugins;
      const pluginsValues = _plugins.length ? _plugins : Object.keys(_plugins).map(function(name2) {
        return _plugins[name2];
      });
      for (let i = 0, len = pluginsValues.length, p; i < len; i++) {
        p = pluginsValues[i].default || pluginsValues[i];
        plugins[p.name] = p;
      }
    }
    options.plugins = plugins;
    options.strictMode = options.strictMode !== false;
    options.strictHTMLValidation = options.strictHTMLValidation !== false;
    options.lang = options.lang || import_en.default;
    options.value = typeof options.value === "string" ? options.value : null;
    options.allowedClassNames = new util_default._w.RegExp((options.allowedClassNames && typeof options.allowedClassNames === "string" ? options.allowedClassNames + "|" : "") + "^__se__|se-|katex");
    options.historyStackDelayTime = typeof options.historyStackDelayTime === "number" ? options.historyStackDelayTime : 400;
    options.frameAttrbutes = options.frameAttrbutes || {};
    options.defaultTag = typeof options.defaultTag === "string" && options.defaultTag.length > 0 ? options.defaultTag : "p";
    const textTags = options.textTags = [{ bold: "STRONG", underline: "U", italic: "EM", strike: "DEL", sub: "SUB", sup: "SUP" }, options.textTags || {}].reduce(function(_default, _new) {
      for (let key in _new) {
        _default[key] = _new[key];
      }
      return _default;
    }, {});
    options._textTagsMap = {
      "strong": textTags.bold.toLowerCase(),
      "b": textTags.bold.toLowerCase(),
      "u": textTags.underline.toLowerCase(),
      "ins": textTags.underline.toLowerCase(),
      "em": textTags.italic.toLowerCase(),
      "i": textTags.italic.toLowerCase(),
      "del": textTags.strike.toLowerCase(),
      "strike": textTags.strike.toLowerCase(),
      "s": textTags.strike.toLowerCase(),
      "sub": textTags.sub.toLowerCase(),
      "sup": textTags.sup.toLowerCase()
    };
    options._defaultCommand = {
      bold: options.textTags.bold,
      underline: options.textTags.underline,
      italic: options.textTags.italic,
      strike: options.textTags.strike,
      subscript: options.textTags.sub,
      superscript: options.textTags.sup
    };
    options.__allowedScriptTag = options.__allowedScriptTag === true;
    const whitelist = "br|p|div|pre|blockquote|h1|h2|h3|h4|h5|h6|ol|ul|li|hr|figure|figcaption|img|iframe|audio|video|source|table|thead|tbody|tr|th|td|a|b|strong|var|i|em|u|ins|s|span|strike|del|sub|sup|code|svg|path|details|summary";
    options.tagsBlacklist = options.tagsBlacklist || "";
    options._defaultTagsWhitelist = (typeof options._defaultTagsWhitelist === "string" ? options._defaultTagsWhitelist : whitelist) + (options.__allowedScriptTag ? "|script" : "");
    options._editorTagsWhitelist = options.addTagsWhitelist === "*" ? "*" : this._setWhitelist(options._defaultTagsWhitelist + (typeof options.addTagsWhitelist === "string" && options.addTagsWhitelist.length > 0 ? "|" + options.addTagsWhitelist : ""), options.tagsBlacklist);
    options.pasteTagsBlacklist = options.tagsBlacklist + (options.tagsBlacklist && options.pasteTagsBlacklist ? "|" + options.pasteTagsBlacklist : options.pasteTagsBlacklist || "");
    options.pasteTagsWhitelist = options.pasteTagsWhitelist === "*" ? "*" : this._setWhitelist(typeof options.pasteTagsWhitelist === "string" ? options.pasteTagsWhitelist : options._editorTagsWhitelist, options.pasteTagsBlacklist);
    options.attributesWhitelist = !options.attributesWhitelist || typeof options.attributesWhitelist !== "object" ? null : options.attributesWhitelist;
    options.attributesBlacklist = !options.attributesBlacklist || typeof options.attributesBlacklist !== "object" ? null : options.attributesBlacklist;
    options.mode = options.mode || "classic";
    options.rtl = !!options.rtl;
    options.lineAttrReset = ["id"].concat(options.lineAttrReset && typeof options.lineAttrReset === "string" ? options.lineAttrReset.toLowerCase().split("|") : []);
    options._editableClass = "sun-editor-editable" + (options.rtl ? " se-rtl" : "");
    options._printClass = typeof options._printClass === "string" ? options._printClass : null;
    options.toolbarWidth = options.toolbarWidth ? util_default.isNumber(options.toolbarWidth) ? options.toolbarWidth + "px" : options.toolbarWidth : "auto";
    options.toolbarContainer = typeof options.toolbarContainer === "string" ? document.querySelector(options.toolbarContainer) : options.toolbarContainer;
    options.stickyToolbar = /balloon/i.test(options.mode) || !!options.toolbarContainer ? -1 : options.stickyToolbar === void 0 ? 0 : /^\d+/.test(options.stickyToolbar) ? util_default.getNumber(options.stickyToolbar, 0) : -1;
    options.hideToolbar = !!options.hideToolbar;
    options.fullScreenOffset = options.fullScreenOffset === void 0 ? 0 : /^\d+/.test(options.fullScreenOffset) ? util_default.getNumber(options.fullScreenOffset, 0) : 0;
    options.fullPage = !!options.fullPage;
    options.iframe = options.fullPage || !!options.iframe;
    options.iframeAttributes = options.iframeAttributes || {};
    options.iframeCSSFileName = options.iframe ? typeof options.iframeCSSFileName === "string" ? [options.iframeCSSFileName] : options.iframeCSSFileName || ["suneditor"] : null;
    options.previewTemplate = typeof options.previewTemplate === "string" ? options.previewTemplate : null;
    options.printTemplate = typeof options.printTemplate === "string" ? options.printTemplate : null;
    options.codeMirror = options.codeMirror ? options.codeMirror.src ? options.codeMirror : { src: options.codeMirror } : null;
    options.katex = options.katex ? options.katex.src ? options.katex : { src: options.katex } : null;
    options.mathFontSize = !!options.mathFontSize ? options.mathFontSize : [
      { text: "1", value: "1em" },
      { text: "1.5", value: "1.5em" },
      { text: "2", value: "2em" },
      { text: "2.5", value: "2.5em" }
    ];
    options.position = typeof options.position === "string" ? options.position : null;
    options.display = options.display || (element.style.display === "none" || !element.style.display ? "block" : element.style.display);
    options.popupDisplay = options.popupDisplay || "full";
    options.resizingBar = options.resizingBar === void 0 ? /inline|balloon/i.test(options.mode) ? false : true : options.resizingBar;
    options.showPathLabel = !options.resizingBar ? false : typeof options.showPathLabel === "boolean" ? options.showPathLabel : true;
    options.resizeEnable = options.resizeEnable === void 0 ? true : !!options.resizeEnable;
    options.resizingBarContainer = typeof options.resizingBarContainer === "string" ? document.querySelector(options.resizingBarContainer) : options.resizingBarContainer;
    options.charCounter = options.maxCharCount > 0 ? true : typeof options.charCounter === "boolean" ? options.charCounter : false;
    options.charCounterType = typeof options.charCounterType === "string" ? options.charCounterType : "char";
    options.charCounterLabel = typeof options.charCounterLabel === "string" ? options.charCounterLabel.trim() : null;
    options.maxCharCount = util_default.isNumber(options.maxCharCount) && options.maxCharCount > -1 ? options.maxCharCount * 1 : null;
    options.width = options.width ? util_default.isNumber(options.width) ? options.width + "px" : options.width : element.clientWidth ? element.clientWidth + "px" : "100%";
    options.minWidth = (util_default.isNumber(options.minWidth) ? options.minWidth + "px" : options.minWidth) || "";
    options.maxWidth = (util_default.isNumber(options.maxWidth) ? options.maxWidth + "px" : options.maxWidth) || "";
    options.height = options.height ? util_default.isNumber(options.height) ? options.height + "px" : options.height : element.clientHeight ? element.clientHeight + "px" : "auto";
    options.minHeight = (util_default.isNumber(options.minHeight) ? options.minHeight + "px" : options.minHeight) || "";
    options.maxHeight = (util_default.isNumber(options.maxHeight) ? options.maxHeight + "px" : options.maxHeight) || "";
    options.className = typeof options.className === "string" && options.className.length > 0 ? " " + options.className : "";
    options.defaultStyle = typeof options.defaultStyle === "string" ? options.defaultStyle : "";
    options.font = !options.font ? ["Arial", "Comic Sans MS", "Courier New", "Impact", "Georgia", "tahoma", "Trebuchet MS", "Verdana"] : options.font;
    options.fontSize = !options.fontSize ? null : options.fontSize;
    options.formats = !options.formats ? null : options.formats;
    options.colorList = !options.colorList ? null : options.colorList;
    options.lineHeights = !options.lineHeights ? null : options.lineHeights;
    options.paragraphStyles = !options.paragraphStyles ? null : options.paragraphStyles;
    options.textStyles = !options.textStyles ? null : options.textStyles;
    options.fontSizeUnit = typeof options.fontSizeUnit === "string" ? options.fontSizeUnit.trim().toLowerCase() || "px" : "px";
    options.alignItems = typeof options.alignItems === "object" ? options.alignItems : options.rtl ? ["right", "center", "left", "justify"] : ["left", "center", "right", "justify"];
    options.imageResizing = options.imageResizing === void 0 ? true : options.imageResizing;
    options.imageHeightShow = options.imageHeightShow === void 0 ? true : !!options.imageHeightShow;
    options.imageAlignShow = options.imageAlignShow === void 0 ? true : !!options.imageAlignShow;
    options.imageWidth = !options.imageWidth ? "auto" : util_default.isNumber(options.imageWidth) ? options.imageWidth + "px" : options.imageWidth;
    options.imageHeight = !options.imageHeight ? "auto" : util_default.isNumber(options.imageHeight) ? options.imageHeight + "px" : options.imageHeight;
    options.imageSizeOnlyPercentage = !!options.imageSizeOnlyPercentage;
    options._imageSizeUnit = options.imageSizeOnlyPercentage ? "%" : "px";
    options.imageRotation = options.imageRotation !== void 0 ? options.imageRotation : !(options.imageSizeOnlyPercentage || !options.imageHeightShow);
    options.imageFileInput = options.imageFileInput === void 0 ? true : options.imageFileInput;
    options.imageUrlInput = options.imageUrlInput === void 0 || !options.imageFileInput ? true : options.imageUrlInput;
    options.imageUploadHeader = options.imageUploadHeader || null;
    options.imageUploadUrl = typeof options.imageUploadUrl === "string" ? options.imageUploadUrl : null;
    options.imageUploadSizeLimit = /\d+/.test(options.imageUploadSizeLimit) ? util_default.getNumber(options.imageUploadSizeLimit, 0) : null;
    options.imageMultipleFile = !!options.imageMultipleFile;
    options.imageAccept = typeof options.imageAccept !== "string" || options.imageAccept.trim() === "*" ? "image/*" : options.imageAccept.trim() || "image/*";
    options.imageGalleryData = options.imageGalleryData || null;
    options.imageGalleryUrl = typeof options.imageGalleryUrl === "string" ? options.imageGalleryUrl : null;
    options.imageGalleryHeader = options.imageGalleryHeader || null;
    options.videoResizing = options.videoResizing === void 0 ? true : options.videoResizing;
    options.videoHeightShow = options.videoHeightShow === void 0 ? true : !!options.videoHeightShow;
    options.videoAlignShow = options.videoAlignShow === void 0 ? true : !!options.videoAlignShow;
    options.videoRatioShow = options.videoRatioShow === void 0 ? true : !!options.videoRatioShow;
    options.videoWidth = !options.videoWidth || !util_default.getNumber(options.videoWidth, 0) ? "" : util_default.isNumber(options.videoWidth) ? options.videoWidth + "px" : options.videoWidth;
    options.videoHeight = !options.videoHeight || !util_default.getNumber(options.videoHeight, 0) ? "" : util_default.isNumber(options.videoHeight) ? options.videoHeight + "px" : options.videoHeight;
    options.videoSizeOnlyPercentage = !!options.videoSizeOnlyPercentage;
    options._videoSizeUnit = options.videoSizeOnlyPercentage ? "%" : "px";
    options.videoRotation = options.videoRotation !== void 0 ? options.videoRotation : !(options.videoSizeOnlyPercentage || !options.videoHeightShow);
    options.videoRatio = util_default.getNumber(options.videoRatio, 4) || 0.5625;
    options.videoRatioList = !options.videoRatioList ? null : options.videoRatioList;
    options.youtubeQuery = (options.youtubeQuery || "").replace("?", "");
    options.vimeoQuery = (options.vimeoQuery || "").replace("?", "");
    options.videoFileInput = !!options.videoFileInput;
    options.videoUrlInput = options.videoUrlInput === void 0 || !options.videoFileInput ? true : options.videoUrlInput;
    options.videoUploadHeader = options.videoUploadHeader || null;
    options.videoUploadUrl = typeof options.videoUploadUrl === "string" ? options.videoUploadUrl : null;
    options.videoUploadSizeLimit = /\d+/.test(options.videoUploadSizeLimit) ? util_default.getNumber(options.videoUploadSizeLimit, 0) : null;
    options.videoMultipleFile = !!options.videoMultipleFile;
    options.videoTagAttrs = options.videoTagAttrs || null;
    options.videoIframeAttrs = options.videoIframeAttrs || null;
    options.videoAccept = typeof options.videoAccept !== "string" || options.videoAccept.trim() === "*" ? "video/*" : options.videoAccept.trim() || "video/*";
    options.audioWidth = !options.audioWidth ? "" : util_default.isNumber(options.audioWidth) ? options.audioWidth + "px" : options.audioWidth;
    options.audioHeight = !options.audioHeight ? "" : util_default.isNumber(options.audioHeight) ? options.audioHeight + "px" : options.audioHeight;
    options.audioFileInput = !!options.audioFileInput;
    options.audioUrlInput = options.audioUrlInput === void 0 || !options.audioFileInput ? true : options.audioUrlInput;
    options.audioUploadHeader = options.audioUploadHeader || null;
    options.audioUploadUrl = typeof options.audioUploadUrl === "string" ? options.audioUploadUrl : null;
    options.audioUploadSizeLimit = /\d+/.test(options.audioUploadSizeLimit) ? util_default.getNumber(options.audioUploadSizeLimit, 0) : null;
    options.audioMultipleFile = !!options.audioMultipleFile;
    options.audioTagAttrs = options.audioTagAttrs || null;
    options.audioAccept = typeof options.audioAccept !== "string" || options.audioAccept.trim() === "*" ? "audio/*" : options.audioAccept.trim() || "audio/*";
    options.tableCellControllerPosition = typeof options.tableCellControllerPosition === "string" ? options.tableCellControllerPosition.toLowerCase() : "cell";
    options.linkTargetNewWindow = !!options.linkTargetNewWindow;
    options.linkProtocol = typeof options.linkProtocol === "string" ? options.linkProtocol : null;
    options.linkRel = Array.isArray(options.linkRel) ? options.linkRel : [];
    options.linkRelDefault = options.linkRelDefault || {};
    options.tabDisable = !!options.tabDisable;
    options.shortcutsDisable = Array.isArray(options.shortcutsDisable) ? options.shortcutsDisable : [];
    options.shortcutsHint = options.shortcutsHint === void 0 ? true : !!options.shortcutsHint;
    options.callBackSave = !options.callBackSave ? null : options.callBackSave;
    options.templates = !options.templates ? null : options.templates;
    options.placeholder = typeof options.placeholder === "string" ? options.placeholder : null;
    options.mediaAutoSelect = options.mediaAutoSelect === void 0 ? true : !!options.mediaAutoSelect;
    options.buttonList = !!options.buttonList ? options.buttonList : [
      ["undo", "redo"],
      ["bold", "underline", "italic", "strike", "subscript", "superscript"],
      ["removeFormat"],
      ["outdent", "indent"],
      ["fullScreen", "showBlocks", "codeView"],
      ["preview", "print"]
    ];
    if (options.rtl) {
      options.buttonList = options.buttonList.reverse();
    }
    options.icons = !options.icons || typeof options.icons !== "object" ? defaultIcons_default : [defaultIcons_default, options.icons].reduce(function(_default, _new) {
      for (let key in _new) {
        if (util_default.hasOwn(_new, key)) _default[key] = _new[key];
      }
      return _default;
    }, {});
    options.icons = !options.rtl ? options.icons : [options.icons, options.icons.rtl].reduce(function(_default, _new) {
      for (let key in _new) {
        if (util_default.hasOwn(_new, key)) _default[key] = _new[key];
      }
      return _default;
    }, {});
    options.__listCommonStyle = options.__listCommonStyle || ["fontSize", "color", "fontFamily", "fontWeight", "fontStyle"];
    options._editorStyles = util_default._setDefaultOptionStyle(options, options.defaultStyle);
  },
  _setWhitelist: function(whitelist, blacklist) {
    if (typeof blacklist !== "string") return whitelist;
    blacklist = blacklist.split("|");
    whitelist = whitelist.split("|");
    for (let i = 0, len = blacklist.length, index; i < len; i++) {
      index = whitelist.indexOf(blacklist[i]);
      if (index > -1) whitelist.splice(index, 1);
    }
    return whitelist.join("|");
  },
  /**
   * @description Suneditor's Default button list
   * @param {Object} options options
   * @private
   */
  _defaultButtons: function(options) {
    const icons = options.icons;
    const lang = options.lang;
    const cmd = util_default.isOSX_IOS ? "\u2318" : "CTRL";
    const addShift = util_default.isOSX_IOS ? "\u21E7" : "+SHIFT";
    const shortcutsDisable = !options.shortcutsHint ? ["bold", "strike", "underline", "italic", "undo", "indent", "save"] : options.shortcutsDisable;
    const indentKey = options.rtl ? ["[", "]"] : ["]", "["];
    const indentIcon = options.rtl ? [icons.outdent, icons.indent] : [icons.indent, icons.outdent];
    return {
      /** default command */
      bold: ["", lang.toolbar.bold + '<span class="se-shortcut">' + (shortcutsDisable.indexOf("bold") > -1 ? "" : cmd + '+<span class="se-shortcut-key">B</span>') + "</span>", "bold", "", icons.bold],
      underline: ["", lang.toolbar.underline + '<span class="se-shortcut">' + (shortcutsDisable.indexOf("underline") > -1 ? "" : cmd + '+<span class="se-shortcut-key">U</span>') + "</span>", "underline", "", icons.underline],
      italic: ["", lang.toolbar.italic + '<span class="se-shortcut">' + (shortcutsDisable.indexOf("italic") > -1 ? "" : cmd + '+<span class="se-shortcut-key">I</span>') + "</span>", "italic", "", icons.italic],
      strike: ["", lang.toolbar.strike + '<span class="se-shortcut">' + (shortcutsDisable.indexOf("strike") > -1 ? "" : cmd + addShift + '+<span class="se-shortcut-key">S</span>') + "</span>", "strike", "", icons.strike],
      subscript: ["", lang.toolbar.subscript, "SUB", "", icons.subscript],
      superscript: ["", lang.toolbar.superscript, "SUP", "", icons.superscript],
      removeFormat: ["", lang.toolbar.removeFormat, "removeFormat", "", icons.erase],
      indent: ["", lang.toolbar.indent + '<span class="se-shortcut">' + (shortcutsDisable.indexOf("indent") > -1 ? "" : cmd + '+<span class="se-shortcut-key">' + indentKey[0] + "</span>") + "</span>", "indent", "", indentIcon[0]],
      outdent: ["", lang.toolbar.outdent + '<span class="se-shortcut">' + (shortcutsDisable.indexOf("indent") > -1 ? "" : cmd + '+<span class="se-shortcut-key">' + indentKey[1] + "</span>") + "</span>", "outdent", "", indentIcon[1]],
      fullScreen: ["se-code-view-enabled se-resizing-enabled", lang.toolbar.fullScreen, "fullScreen", "", icons.expansion],
      showBlocks: ["", lang.toolbar.showBlocks, "showBlocks", "", icons.show_blocks],
      codeView: ["se-code-view-enabled se-resizing-enabled", lang.toolbar.codeView, "codeView", "", icons.code_view],
      undo: ["", lang.toolbar.undo + '<span class="se-shortcut">' + (shortcutsDisable.indexOf("undo") > -1 ? "" : cmd + '+<span class="se-shortcut-key">Z</span>') + "</span>", "undo", "", icons.undo],
      redo: ["", lang.toolbar.redo + '<span class="se-shortcut">' + (shortcutsDisable.indexOf("undo") > -1 ? "" : cmd + '+<span class="se-shortcut-key">Y</span> / ' + cmd + addShift + '+<span class="se-shortcut-key">Z</span>') + "</span>", "redo", "", icons.redo],
      preview: ["se-resizing-enabled", lang.toolbar.preview, "preview", "", icons.preview],
      print: ["se-resizing-enabled", lang.toolbar.print, "print", "", icons.print],
      dir: ["", lang.toolbar[options.rtl ? "dir_ltr" : "dir_rtl"], "dir", "", icons[options.rtl ? "dir_ltr" : "dir_rtl"]],
      dir_ltr: ["", lang.toolbar.dir_ltr, "dir_ltr", "", icons.dir_ltr],
      dir_rtl: ["", lang.toolbar.dir_rtl, "dir_rtl", "", icons.dir_rtl],
      save: ["se-resizing-enabled", lang.toolbar.save + '<span class="se-shortcut">' + (shortcutsDisable.indexOf("save") > -1 ? "" : cmd + '+<span class="se-shortcut-key">S</span>') + "</span>", "save", "", icons.save],
      /** plugins - command */
      blockquote: ["", lang.toolbar.tag_blockquote, "blockquote", "command", icons.blockquote],
      /** plugins - submenu */
      font: ["se-btn-select se-btn-tool-font", lang.toolbar.font, "font", "submenu", '<span class="txt">' + lang.toolbar.font + "</span>" + icons.arrow_down],
      formatBlock: ["se-btn-select se-btn-tool-format", lang.toolbar.formats, "formatBlock", "submenu", '<span class="txt">' + lang.toolbar.formats + "</span>" + icons.arrow_down],
      fontSize: ["se-btn-select se-btn-tool-size", lang.toolbar.fontSize, "fontSize", "submenu", '<span class="txt">' + lang.toolbar.fontSize + "</span>" + icons.arrow_down],
      fontColor: ["", lang.toolbar.fontColor, "fontColor", "submenu", icons.font_color],
      hiliteColor: ["", lang.toolbar.hiliteColor, "hiliteColor", "submenu", icons.highlight_color],
      align: ["se-btn-align", lang.toolbar.align, "align", "submenu", options.rtl ? icons.align_right : icons.align_left],
      list: ["", lang.toolbar.list, "list", "submenu", icons.list_number],
      horizontalRule: ["btn_line", lang.toolbar.horizontalRule, "horizontalRule", "submenu", icons.horizontal_rule],
      table: ["", lang.toolbar.table, "table", "submenu", icons.table],
      lineHeight: ["", lang.toolbar.lineHeight, "lineHeight", "submenu", icons.line_height],
      template: ["", lang.toolbar.template, "template", "submenu", icons.template],
      paragraphStyle: ["", lang.toolbar.paragraphStyle, "paragraphStyle", "submenu", icons.paragraph_style],
      textStyle: ["", lang.toolbar.textStyle, "textStyle", "submenu", icons.text_style],
      /** plugins - dialog */
      link: ["", lang.toolbar.link, "link", "dialog", icons.link],
      image: ["", lang.toolbar.image, "image", "dialog", icons.image],
      video: ["", lang.toolbar.video, "video", "dialog", icons.video],
      audio: ["", lang.toolbar.audio, "audio", "dialog", icons.audio],
      math: ["", lang.toolbar.math, "math", "dialog", icons.math],
      /** plugins - fileBrowser */
      imageGallery: ["", lang.toolbar.imageGallery, "imageGallery", "fileBrowser", icons.image_gallery]
    };
  },
  /**
   * @description Create a group div containing each module
   * @returns {Object}
   * @private
   */
  _createModuleGroup: function() {
    const oDiv = util_default.createElement("DIV");
    oDiv.className = "se-btn-module se-btn-module-border";
    const oUl = util_default.createElement("UL");
    oUl.className = "se-menu-list";
    oDiv.appendChild(oUl);
    return {
      "div": oDiv,
      "ul": oUl
    };
  },
  /**
   * @description Create a button element
   * @param {string} buttonClass className in button
   * @param {string} title Title in button
   * @param {string} dataCommand The data-command property of the button
   * @param {string} dataDisplay The data-display property of the button ('dialog', 'submenu', 'command')
   * @param {string} innerHTML Html in button
   * @param {string} _disabled Button disabled
   * @param {Object} _icons Icons
   * @returns {Object}
   * @private
   */
  _createButton: function(buttonClass, title, dataCommand, dataDisplay, innerHTML, _disabled, _icons) {
    const oLi = util_default.createElement("LI");
    const oButton = util_default.createElement("BUTTON");
    const label = title || dataCommand;
    oButton.setAttribute("type", "button");
    oButton.setAttribute("class", "se-btn" + (buttonClass ? " " + buttonClass : "") + " se-tooltip");
    oButton.setAttribute("data-command", dataCommand);
    oButton.setAttribute("data-display", dataDisplay);
    oButton.setAttribute("aria-label", label.replace(/<span .+<\/span>/, ""));
    oButton.setAttribute("tabindex", "-1");
    if (!innerHTML) innerHTML = '<span class="se-icon-text">!</span>';
    if (/^default\./i.test(innerHTML)) {
      innerHTML = _icons[innerHTML.replace(/^default\./i, "")];
    }
    if (/^text\./i.test(innerHTML)) {
      innerHTML = innerHTML.replace(/^text\./i, "");
      oButton.className += " se-btn-more-text";
    }
    innerHTML += '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + label + "</span></span>";
    if (_disabled) oButton.setAttribute("disabled", true);
    oButton.innerHTML = innerHTML;
    oLi.appendChild(oButton);
    return {
      "li": oLi,
      "button": oButton
    };
  },
  /**
   * @description Create editor HTML
   * @param {Array} doc document object
   * @param {Array} buttonList option.buttonList
   * @param {Object|null} plugins Plugins
   * @param {Array} options options
   * @returns {Object} { element: (Element) Toolbar element, plugins: (Array|null) Plugins Array, pluginCallButtons: (Object), responsiveButtons: (Array) }
   * @private
   */
  _createToolBar: function(doc, buttonList, plugins, options) {
    const separator_vertical = doc.createElement("DIV");
    separator_vertical.className = "se-toolbar-separator-vertical";
    const tool_bar = doc.createElement("DIV");
    tool_bar.className = "se-toolbar sun-editor-common";
    const _buttonTray = doc.createElement("DIV");
    _buttonTray.className = "se-btn-tray";
    tool_bar.appendChild(_buttonTray);
    buttonList = JSON.parse(JSON.stringify(buttonList));
    const icons = options.icons;
    const defaultButtonList = this._defaultButtons(options);
    const pluginCallButtons = {};
    const responsiveButtons = [];
    let module = null;
    let button = null;
    let moduleElement = null;
    let buttonElement = null;
    let pluginName = "";
    let vertical = false;
    const moreLayer = util_default.createElement("DIV");
    moreLayer.className = "se-toolbar-more-layer";
    buttonGroupLoop:
      for (let i = 0, more, moreContainer, moreCommand, buttonGroup, align; i < buttonList.length; i++) {
        more = false;
        align = "";
        buttonGroup = buttonList[i];
        moduleElement = this._createModuleGroup();
        if (typeof buttonGroup === "object") {
          for (let j = 0, moreButton; j < buttonGroup.length; j++) {
            button = buttonGroup[j];
            moreButton = false;
            if (/^\%\d+/.test(button) && j === 0) {
              buttonGroup[0] = button.replace(/[^\d]/g, "");
              responsiveButtons.push(buttonGroup);
              buttonList.splice(i--, 1);
              continue buttonGroupLoop;
            }
            if (typeof button === "object") {
              if (typeof button.add === "function") {
                pluginName = button.name;
                module = defaultButtonList[pluginName];
                plugins[pluginName] = button;
              } else {
                pluginName = button.name;
                module = [button.buttonClass, button.title, button.name, button.dataDisplay, button.innerHTML, button._disabled];
              }
            } else {
              if (/^\-/.test(button)) {
                align = button.substr(1);
                moduleElement.div.className += " module-float-" + align;
                continue;
              }
              if (/^\#/.test(button)) {
                const option = button.substr(1);
                if (option === "fix") moduleElement.ul.className += " se-menu-dir-fix";
                continue;
              }
              if (/^\:/.test(button)) {
                moreButton = true;
                const matched = button.match(/^\:([^\-]+)\-([^\-]+)\-([^\-]+)/);
                moreCommand = "__se__" + matched[1].trim();
                const title = matched[2].trim();
                const innerHTML = matched[3].trim();
                module = ["se-btn-more", title, moreCommand, "MORE", innerHTML];
              } else {
                module = defaultButtonList[button];
              }
              pluginName = button;
              if (!module) {
                const custom = plugins[pluginName];
                if (!custom) throw Error("[SUNEDITOR.create.toolbar.fail] The button name of a plugin that does not exist. [" + pluginName + "]");
                module = [custom.buttonClass, custom.title, custom.name, custom.display, custom.innerHTML, custom._disabled];
              }
            }
            buttonElement = this._createButton(module[0], module[1], module[2], module[3], module[4], module[5], icons);
            (more ? moreContainer : moduleElement.ul).appendChild(buttonElement.li);
            if (plugins[pluginName]) {
              pluginCallButtons[pluginName] = buttonElement.button;
            }
            if (moreButton) {
              more = true;
              moreContainer = util_default.createElement("DIV");
              moreContainer.className = "se-more-layer " + moreCommand;
              moreContainer.innerHTML = '<div class="se-more-form"><ul class="se-menu-list"' + (align ? ' style="float: ' + align + ';"' : "") + "></ul></div>";
              moreLayer.appendChild(moreContainer);
              moreContainer = moreContainer.firstElementChild.firstElementChild;
            }
          }
          if (vertical) {
            const sv = separator_vertical.cloneNode(false);
            _buttonTray.appendChild(sv);
          }
          _buttonTray.appendChild(moduleElement.div);
          vertical = true;
        } else if (/^\/$/.test(buttonGroup)) {
          const enterDiv = doc.createElement("DIV");
          enterDiv.className = "se-btn-module-enter";
          _buttonTray.appendChild(enterDiv);
          vertical = false;
        }
      }
    switch (_buttonTray.children.length) {
      case 0:
        _buttonTray.style.display = "none";
        break;
      case 1:
        util_default.removeClass(_buttonTray.firstElementChild, "se-btn-module-border");
        break;
      default:
        if (options.rtl) {
          const sv = separator_vertical.cloneNode(false);
          sv.style.float = _buttonTray.lastElementChild.style.float;
          _buttonTray.appendChild(sv);
        }
    }
    if (responsiveButtons.length > 0) responsiveButtons.unshift(buttonList);
    if (moreLayer.children.length > 0) _buttonTray.appendChild(moreLayer);
    const _menuTray = doc.createElement("DIV");
    _menuTray.className = "se-menu-tray";
    tool_bar.appendChild(_menuTray);
    const tool_cover = doc.createElement("DIV");
    tool_cover.className = "se-toolbar-cover";
    tool_bar.appendChild(tool_cover);
    if (options.hideToolbar) tool_bar.style.display = "none";
    return {
      "element": tool_bar,
      "plugins": plugins,
      "pluginCallButtons": pluginCallButtons,
      "responsiveButtons": responsiveButtons,
      "_menuTray": _menuTray,
      "_buttonTray": _buttonTray
    };
  }
};

// node_modules/suneditor/src/lib/context.js
var _Context = function(element, cons, options) {
  return {
    element: {
      originElement: element,
      topArea: cons._top,
      relative: cons._relative,
      toolbar: cons._toolBar,
      _toolbarShadow: cons._toolbarShadow,
      _buttonTray: cons._toolBar.querySelector(".se-btn-tray"),
      _menuTray: cons._menuTray,
      resizingBar: cons._resizingBar,
      navigation: cons._navigation,
      charWrapper: cons._charWrapper,
      charCounter: cons._charCounter,
      editorArea: cons._editorArea,
      wysiwygFrame: cons._wysiwygArea,
      wysiwyg: cons._wysiwygArea,
      // if (options.iframe) cons._wysiwygArea.contentDocument.body
      code: cons._codeArea,
      placeholder: cons._placeholder,
      loading: cons._loading,
      lineBreaker: cons._lineBreaker,
      lineBreaker_t: cons._lineBreaker_t,
      lineBreaker_b: cons._lineBreaker_b,
      resizeBackground: cons._resizeBack,
      _stickyDummy: cons._stickyDummy,
      _arrow: cons._arrow,
      _focusTemp: cons._focusTemp
    },
    tool: {
      cover: cons._toolBar.querySelector(".se-toolbar-cover"),
      bold: cons._toolBar.querySelector('[data-command="bold"]'),
      underline: cons._toolBar.querySelector('[data-command="underline"]'),
      italic: cons._toolBar.querySelector('[data-command="italic"]'),
      strike: cons._toolBar.querySelector('[data-command="strike"]'),
      sub: cons._toolBar.querySelector('[data-command="SUB"]'),
      sup: cons._toolBar.querySelector('[data-command="SUP"]'),
      undo: cons._toolBar.querySelector('[data-command="undo"]'),
      redo: cons._toolBar.querySelector('[data-command="redo"]'),
      save: cons._toolBar.querySelector('[data-command="save"]'),
      outdent: cons._toolBar.querySelector('[data-command="outdent"]'),
      indent: cons._toolBar.querySelector('[data-command="indent"]'),
      fullScreen: cons._toolBar.querySelector('[data-command="fullScreen"]'),
      showBlocks: cons._toolBar.querySelector('[data-command="showBlocks"]'),
      codeView: cons._toolBar.querySelector('[data-command="codeView"]'),
      dir: cons._toolBar.querySelector('[data-command="dir"]'),
      dir_ltr: cons._toolBar.querySelector('[data-command="dir_ltr"]'),
      dir_rtl: cons._toolBar.querySelector('[data-command="dir_rtl"]')
    },
    options,
    option: options
  };
};
var context_default = _Context;

// node_modules/suneditor/src/lib/history.js
function history_default(core, change) {
  const _w = core._w;
  const util2 = core.util;
  const delayTime = core.options.historyStackDelayTime;
  let editor = core.context.element;
  let undo = core.context.tool.undo;
  let redo = core.context.tool.redo;
  let pushDelay = null;
  let stackIndex = 0;
  let stack = [];
  function setContentsFromStack() {
    const item = stack[stackIndex];
    editor.wysiwyg.innerHTML = item.contents;
    core.setRange(util2.getNodeFromPath(item.s.path, editor.wysiwyg), item.s.offset, util2.getNodeFromPath(item.e.path, editor.wysiwyg), item.e.offset);
    core.focus();
    if (stack.length <= 1) {
      if (undo) undo.setAttribute("disabled", true);
      if (redo) redo.setAttribute("disabled", true);
    } else {
      if (stackIndex === 0) {
        if (undo) undo.setAttribute("disabled", true);
        if (redo) redo.removeAttribute("disabled");
      } else if (stackIndex === stack.length - 1) {
        if (undo) undo.removeAttribute("disabled");
        if (redo) redo.setAttribute("disabled", true);
      } else {
        if (undo) undo.removeAttribute("disabled");
        if (redo) redo.removeAttribute("disabled");
      }
    }
    core.controllersOff();
    core._checkComponents();
    core._setCharCount();
    core._resourcesStateChange();
    change();
  }
  function pushStack() {
    core._checkComponents();
    const current = editor.wysiwyg.innerHTML;
    if (!current || !!stack[stackIndex] && current === stack[stackIndex].contents) return;
    stackIndex++;
    const range = core._variable._range;
    if (stack.length > stackIndex) {
      stack = stack.slice(0, stackIndex);
      if (redo) redo.setAttribute("disabled", true);
    }
    if (!range) {
      stack[stackIndex] = {
        contents: current,
        s: { path: [0, 0], offset: [0, 0] },
        e: { path: 0, offset: 0 }
      };
    } else {
      stack[stackIndex] = {
        contents: current,
        s: {
          path: util2.getNodePath(range.startContainer, null, null),
          offset: range.startOffset
        },
        e: {
          path: util2.getNodePath(range.endContainer, null, null),
          offset: range.endOffset
        }
      };
    }
    if (stackIndex === 1 && undo) undo.removeAttribute("disabled");
    core._setCharCount();
    change();
  }
  return {
    /**
     * @description History stack
     */
    stack,
    /**
     * @description Saving the current status to the history object stack
     * If "delay" is true, it will be saved after (options.historyStackDelayTime || 400) miliseconds
     * If the function is called again with the "delay" argument true before it is saved, the delay time is renewal
     * You can specify the delay time by sending a number.
     * @param {Boolean|Number} delay If true, Add stack without delay time.
     */
    push: function(delay) {
      _w.setTimeout(core._resourcesStateChange.bind(core));
      const time = typeof delay === "number" ? delay > 0 ? delay : 0 : !delay ? 0 : delayTime;
      if (!time || pushDelay) {
        _w.clearTimeout(pushDelay);
        if (!time) {
          pushStack();
          return;
        }
      }
      pushDelay = _w.setTimeout(function() {
        _w.clearTimeout(pushDelay);
        pushDelay = null;
        pushStack();
      }, time);
    },
    /**
     * @description Undo function
     */
    undo: function() {
      if (stackIndex > 0) {
        stackIndex--;
        setContentsFromStack();
      }
    },
    /**
     * @description Redo function
     */
    redo: function() {
      if (stack.length - 1 > stackIndex) {
        stackIndex++;
        setContentsFromStack();
      }
    },
    /**
     * @description Go to the history stack for that index.
     * If "index" is -1, go to the last stack
     */
    go: function(index) {
      stackIndex = index < 0 ? stack.length - 1 : index;
      setContentsFromStack();
    },
    /**
     * @description Get the current history stack index.
     * @returns {Number} Current Stack index
     */
    getCurrentIndex: function() {
      return stackIndex;
    },
    /**
     * @description Reset the history object
     */
    reset: function(ignoreChangeEvent) {
      if (undo) undo.setAttribute("disabled", true);
      if (redo) redo.setAttribute("disabled", true);
      core._variable.isChanged = false;
      if (core.context.tool.save) core.context.tool.save.setAttribute("disabled", true);
      stack.splice(0);
      stackIndex = 0;
      stack[stackIndex] = {
        contents: core.getContents(true),
        s: {
          path: [0, 0],
          offset: 0
        },
        e: {
          path: [0, 0],
          offset: 0
        }
      };
      if (!ignoreChangeEvent) change();
    },
    /**
     * @description Reset the disabled state of the buttons to fit the current stack.
     * @private
     */
    _resetCachingButton: function() {
      editor = core.context.element;
      undo = core.context.tool.undo;
      redo = core.context.tool.redo;
      if (stackIndex === 0) {
        if (undo) undo.setAttribute("disabled", true);
        if (redo && stackIndex === stack.length - 1) redo.setAttribute("disabled", true);
        core._variable.isChanged = false;
        if (core.context.tool.save) core.context.tool.save.setAttribute("disabled", true);
      } else if (stackIndex === stack.length - 1) {
        if (redo) redo.setAttribute("disabled", true);
      }
    },
    /**
     * @description Remove all stacks and remove the timeout function.
     * @private
     */
    _destroy: function() {
      if (pushDelay) _w.clearTimeout(pushDelay);
      stack = null;
    }
  };
}

// node_modules/suneditor/src/plugins/modules/_notice.js
var notice_default = {
  name: "notice",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(core) {
    const context = core.context;
    context.notice = {};
    let notice_div = core.util.createElement("DIV");
    let notice_span = core.util.createElement("SPAN");
    let notice_button = core.util.createElement("BUTTON");
    notice_div.className = "se-notice";
    notice_button.className = "close";
    notice_button.setAttribute("aria-label", "Close");
    notice_button.setAttribute("title", core.lang.dialogBox.close);
    notice_button.innerHTML = core.icons.cancel;
    notice_div.appendChild(notice_span);
    notice_div.appendChild(notice_button);
    context.notice.modal = notice_div;
    context.notice.message = notice_span;
    notice_button.addEventListener("click", this.onClick_cancel.bind(core));
    context.element.editorArea.appendChild(notice_div);
    notice_div = null;
  },
  /**
   * @description Event when clicking the cancel button
   * @param {MouseEvent} e Event object
   */
  onClick_cancel: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.plugins.notice.close.call(this);
  },
  /**
   * @description  Open the notice panel
   * @param {String} text Notice message
   */
  open: function(text) {
    this.context.notice.message.textContent = text;
    this.context.notice.modal.style.display = "block";
  },
  /**
   * @description  Open the notice panel
   */
  close: function() {
    this.context.notice.modal.style.display = "none";
  }
};

// node_modules/suneditor/src/lib/core.js
function core_default(context, pluginCallButtons, plugins, lang, options, _responsiveButtons) {
  const _d = context.element.originElement.ownerDocument || document;
  const _w = _d.defaultView || window;
  const util2 = util_default;
  const icons = options.icons;
  const core = {
    _d,
    _w,
    _parser: new _w.DOMParser(),
    _prevRtl: options.rtl,
    _editorHeight: 0,
    _editorHeightPadding: 0,
    _listCamel: options.__listCommonStyle,
    _listKebab: util2.camelToKebabCase(options.__listCommonStyle),
    __focusTemp: context.element._focusTemp,
    /**
     * @description Document object of the iframe if created as an iframe || _d
     * @private
     */
    _wd: null,
    /**
     * @description Window object of the iframe if created as an iframe || _w
     * @private
     */
    _ww: null,
    /**
     * @description Closest ShadowRoot to editor if found
     * @private
     */
    _shadowRoot: null,
    /**
     * @description Block controller mousedown events in "shadowRoot" environment
     * @private
     */
    _shadowRootControllerEventTarget: null,
    /**
     * @description Util object
     */
    util: util2,
    /**
     * @description Functions object
     */
    functions: null,
    /**
     * @description Editor options
     */
    options: null,
    /**
     * @description Computed style of the wysiwyg area (window.getComputedStyle(context.element.wysiwyg))
     */
    wwComputedStyle: null,
    /**
     * @description Notice object
     */
    notice: notice_default,
    /**
     * @description Default icons object
     */
    icons,
    /**
     * @description History object for undo, redo
     */
    history: null,
    /**
     * @description Elements and user options parameters of the suneditor
     */
    context,
    /**
     * @description Plugin buttons
     */
    pluginCallButtons,
    /**
     * @description Loaded plugins
     */
    plugins: plugins || {},
    /**
     * @description Whether the plugin is initialized
     */
    initPlugins: {},
    /**
     * @description Object for managing submenu elements
     * @private
     */
    _targetPlugins: {},
    /**
     * @description Save rendered submenus and containers
     * @private
     */
    _menuTray: {},
    /**
     * @description loaded language
     */
    lang,
    /**
     * @description The selection node (core.getSelectionNode()) to which the effect was last applied
     */
    effectNode: null,
    /**
     * @description submenu element
     */
    submenu: null,
    /**
     * @description container element
     */
    container: null,
    /**
     * @description current subment name
     * @private
     */
    _submenuName: "",
    /**
     * @description binded submenuOff method
     * @private
     */
    _bindedSubmenuOff: null,
    /**
     * @description binded containerOff method
     * @private
     */
    _bindedContainerOff: null,
    /**
     * @description active button element in submenu
     */
    submenuActiveButton: null,
    /**
     * @description active button element in container
     */
    containerActiveButton: null,
    /**
     * @description The elements array to be processed unvisible when the controllersOff function is executed (resizing, link modified button, table controller)
     */
    controllerArray: [],
    /**
     * @description The name of the plugin that called the currently active controller
     */
    currentControllerName: "",
    /**
     * @description The target element of current controller
     */
    currentControllerTarget: null,
    /**
     * @description The file component object of current selected file tag (getFileComponent)
     */
    currentFileComponentInfo: null,
    /**
     * @description An array of buttons whose class name is not "se-code-view-enabled"
     */
    codeViewDisabledButtons: [],
    /**
     * @description An array of buttons whose class name is not "se-resizing-enabled"
     */
    resizingDisabledButtons: [],
    /**
     * @description active more layer element in submenu
     * @private
     */
    _moreLayerActiveButton: null,
    /**
     * @description Tag whitelist RegExp object used in "_consistencyCheckOfHTML" method
     * ^(options._editorTagsWhitelist)$
     * @private
     */
    _htmlCheckWhitelistRegExp: null,
    /**
     * @description Tag blacklist RegExp object used in "_consistencyCheckOfHTML" method
     * @private
     */
    _htmlCheckBlacklistRegExp: null,
    /**
     * @description RegExp when using check disallowd tags. (b, i, ins, strike, s)
     * @private
     */
    _disallowedTextTagsRegExp: null,
    /**
     * @description Editor tags whitelist (RegExp object)
     * util.createTagsWhitelist(options._editorTagsWhitelist)
     */
    editorTagsWhitelistRegExp: null,
    /**
     * @description Editor tags blacklist (RegExp object)
     * util.createTagsBlacklist(options.tagsBlacklist)
     */
    editorTagsBlacklistRegExp: null,
    /**
     * @description Tag whitelist when pasting (RegExp object)
     * util.createTagsWhitelist(options.pasteTagsWhitelist)
     */
    pasteTagsWhitelistRegExp: null,
    /**
     * @description Tag blacklist when pasting (RegExp object)
     * util.createTagsBlacklist(options.pasteTagsBlacklist)
     */
    pasteTagsBlacklistRegExp: null,
    /**
     * @description Boolean value of whether the editor has focus
     */
    hasFocus: false,
    /**
     * @description Boolean value of whether the editor is disabled
     */
    isDisabled: false,
    /**
     * @description Boolean value of whether the editor is readOnly
     */
    isReadOnly: false,
    /**
     * @description Attributes whitelist used by the cleanHTML method
     * @private
     */
    _attributesWhitelistRegExp: null,
    _attributesWhitelistRegExp_all_data: null,
    /**
     * @description Attributes blacklist used by the cleanHTML method
     * @private
     */
    _attributesBlacklistRegExp: null,
    /**
     * @description Attributes of tags whitelist used by the cleanHTML method
     * @private
     */
    _attributesTagsWhitelist: null,
    /**
     * @description Attributes of tags blacklist used by the cleanHTML method
     * @private
     */
    _attributesTagsBlacklist: null,
    /**
     * @description binded controllersOff method
     * @private
     */
    _bindControllersOff: null,
    /**
     * @description Is inline mode?
     * @private
     */
    _isInline: null,
    /**
     * @description Is balloon|balloon-always mode?
     * @private
     */
    _isBalloon: null,
    /**
     * @description Is balloon-always mode?
     * @private
     */
    _isBalloonAlways: null,
    /**
     * @description Required value when using inline mode to sticky toolbar
     * @private
     */
    _inlineToolbarAttr: { top: "", width: "", isShow: false },
    /**
     * @description Variable that controls the "blur" event in the editor of inline or balloon mode when the focus is moved to submenu
     * @private
     */
    _notHideToolbar: false,
    /**
     * @description Variable value that sticky toolbar mode
     * @private
     */
    _sticky: false,
    /**
     * @description Variables for controlling focus and blur events
     * @private
     */
    _antiBlur: false,
    /**
     * @description Component line breaker element
     * @private
     */
    _lineBreaker: null,
    _lineBreakerButton: null,
    /**
     * @description If true, (initialize, reset) all indexes of image, video information
     * @private
     */
    _componentsInfoInit: true,
    _componentsInfoReset: false,
    /**
     * @description Plugins array with "active" method.
     * "activePlugins" runs the "add" method when creating the editor.
     */
    activePlugins: null,
    /**
     * @description Information of tags that should maintain HTML structure, style, class name, etc. (In use by "math" plugin)
     * When inserting "html" such as paste, it is executed on the "html" to be inserted. (core.cleanHTML)
     * Basic Editor Actions:
     * 1. All classes not starting with "__se__" or "se-" in the editor are removed.
     * 2. The style of all tags except the "span" tag is removed from the editor.
     * "managedTagsInfo" structure ex:
     * managedTagsInfo: {
     *   query: '.__se__xxx, se-xxx'
     *   map: {
     *     '__se__xxx': method.bind(core),
     *     'se-xxx': method.bind(core),
     *   }
     * }
     * @example
     * Define in the following return format in the "managedTagInfo" function of the plugin.
     * managedTagInfo() => {
     *  return {
     *    className: 'string', // Class name to identify the tag. ("__se__xxx", "se-xxx")
     *    // Change the html of the "element". ("element" is the element found with "className".)
     *    // "method" is executed by binding "core".
     *    method: function (element) {
     *      // this === core
     *      element.innerHTML = // (rendered html);
     *    }
     *  }
     * }
     */
    managedTagsInfo: null,
    /**
     * @description cashing: options.charCounterType === 'byte-html'
     * @private
     */
    _charTypeHTML: false,
    /**
     * @description Array of "checkFileInfo" functions with the core bound
     * (Plugins with "checkFileInfo" and "resetFileInfo" methods)
     * "fileInfoPlugins" runs the "add" method when creating the editor.
     * "checkFileInfo" method is always call just before the "change" event.
     * @private
     */
    _fileInfoPluginsCheck: null,
    /**
     * @description Array of "resetFileInfo" functions with the core bound
     * (Plugins with "checkFileInfo" and "resetFileInfo" methods)
     * "checkFileInfo" method is always call just before the "functions.setOptions" method.
     * @private
     */
    _fileInfoPluginsReset: null,
    /**
     * @description Variables for file component management
     * @private
     */
    _fileManager: {
      tags: null,
      regExp: null,
      queryString: null,
      pluginRegExp: null,
      pluginMap: null
    },
    /**
     * @description Elements that need to change text or className for each selection change
     * After creating the editor, "activePlugins" are added.
     * @property {Element} STRONG bold button
     * @property {Element} U underline button
     * @property {Element} EM italic button
     * @property {Element} DEL strike button
     * @property {Element} SUB subscript button
     * @property {Element} SUP superscript button
     * @property {Element} OUTDENT outdent button
     * @property {Element} INDENT indent button
     */
    commandMap: {},
    /**
     * @description CSS properties related to style tags 
     * @private
     */
    _commandMapStyles: {
      STRONG: ["font-weight"],
      U: ["text-decoration"],
      EM: ["font-style"],
      DEL: ["text-decoration"]
    },
    /**
     * @description Style button related to edit area
     * @property {Element} fullScreen fullScreen button element
     * @property {Element} showBlocks showBlocks button element
     * @property {Element} codeView codeView button element
     * @private
     */
    _styleCommandMap: null,
    /**
     * @private
     */
    _cleanStyleRegExp: {
      div: new _w.RegExp("\\s*[^-a-zA-Z](.+)\\s*:[^;]+(?!;)*", "ig"),
      span: new _w.RegExp("\\s*[^-a-zA-Z](font-family|font-size|color|background-color)\\s*:[^;]+(?!;)*", "ig"),
      format: new _w.RegExp("\\s*[^-a-zA-Z](text-align|margin-left|margin-right|width|height|line-height)\\s*:[^;]+(?!;)*", "ig"),
      fontSizeUnit: new _w.RegExp("\\d+" + options.fontSizeUnit + "$", "i")
    },
    /**
     * @description Variables used internally in editor operation
     * @property {Boolean} isCodeView State of code view
     * @property {Boolean} isFullScreen State of full screen
     * @property {Number} innerHeight_fullScreen InnerHeight in editor when in full screen
     * @property {Number} resizeClientY Remember the vertical size of the editor before resizing the editor (Used when calculating during resize operation)
     * @property {Number} tabSize Indent size of tab (4)
     * @property {Number} codeIndent Indent size of Code view mode (2)
     * @property {Number} minResizingSize Minimum size of editing area when resized {Number} (.se-wrapper-inner {min-height: 65px;} || 65)
     * @property {Array} currentNodes  An array of the current cursor's node structure
     * @private
     */
    _variable: {
      isChanged: false,
      isCodeView: false,
      isFullScreen: false,
      innerHeight_fullScreen: 0,
      resizeClientY: 0,
      tabSize: 4,
      codeIndent: 2,
      minResizingSize: util2.getNumber(context.element.wysiwygFrame.style.minHeight || "65", 0),
      currentNodes: [],
      currentNodesMap: [],
      _range: null,
      _selectionNode: null,
      _originCssText: context.element.topArea.style.cssText,
      _bodyOverflow: "",
      _editorAreaOriginCssText: "",
      _wysiwygOriginCssText: "",
      _codeOriginCssText: "",
      _fullScreenAttrs: { sticky: false, balloon: false, inline: false },
      _lineBreakComp: null,
      _lineBreakDir: ""
    },
    /**
     * @description Temp variable for set line attrs
     * @private
     */
    _formatAttrsTemp: null,
    /**
     * @description Save the current buttons states to "allCommandButtons" object
     * @private
     */
    _saveButtonStates: function() {
      if (!this.allCommandButtons) this.allCommandButtons = {};
      const currentButtons = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
      for (let i = 0, element, command; i < currentButtons.length; i++) {
        element = currentButtons[i];
        command = element.getAttribute("data-command");
        this.allCommandButtons[command] = element;
      }
    },
    /**
     * @description Recover the current buttons states from "allCommandButtons" object
     * @private
     */
    _recoverButtonStates: function() {
      if (this.allCommandButtons) {
        const currentButtons = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
        for (let i = 0, button, command, oldButton; i < currentButtons.length; i++) {
          button = currentButtons[i];
          command = button.getAttribute("data-command");
          oldButton = this.allCommandButtons[command];
          if (oldButton) {
            button.parentElement.replaceChild(oldButton, button);
            if (this.context.tool[command]) this.context.tool[command] = oldButton;
          }
        }
      }
    },
    /**
     * @description If the plugin is not added, add the plugin and call the 'add' function.
     * If the plugin is added call callBack function.
     * @param {String} pluginName The name of the plugin to call
     * @param {function} callBackFunction Function to be executed immediately after module call
     * @param {Element|null} _target Plugin target button (This is not necessary if you have a button list when creating the editor)
     */
    callPlugin: function(pluginName, callBackFunction, _target) {
      _target = _target || pluginCallButtons[pluginName];
      if (!this.plugins[pluginName]) {
        throw Error('[SUNEDITOR.core.callPlugin.fail] The called plugin does not exist or is in an invalid format. (pluginName:"' + pluginName + '")');
      } else if (!this.initPlugins[pluginName]) {
        this.plugins[pluginName].add(this, _target);
        this.initPlugins[pluginName] = true;
      } else if (typeof this._targetPlugins[pluginName] === "object" && !!_target) {
        this.initMenuTarget(pluginName, _target, this._targetPlugins[pluginName]);
      }
      if (this.plugins[pluginName].active && !this.commandMap[pluginName] && !!_target) {
        this.commandMap[pluginName] = _target;
        this.activePlugins.push(pluginName);
      }
      if (typeof callBackFunction === "function") callBackFunction();
    },
    /**
     * @description If the module is not added, add the module and call the 'add' function
     * @param {Array} moduleArray module object's Array [dialog, resizing]
     */
    addModule: function(moduleArray) {
      for (let i = 0, len = moduleArray.length, moduleName; i < len; i++) {
        moduleName = moduleArray[i].name;
        if (!this.plugins[moduleName]) {
          this.plugins[moduleName] = moduleArray[i];
        }
        if (!this.initPlugins[moduleName]) {
          this.initPlugins[moduleName] = true;
          if (typeof this.plugins[moduleName].add === "function") this.plugins[moduleName].add(this);
        }
      }
    },
    /**
     * @description Gets the current editor-relative scroll offset.
     * @returns {Object} {top, left}
     */
    getGlobalScrollOffset: function() {
      let t = 0, l = 0;
      let el = context.element.topArea;
      while (el) {
        t += el.scrollTop;
        l += el.scrollLeft;
        el = el.parentElement;
      }
      el = this._shadowRoot ? this._shadowRoot.host : null;
      while (el) {
        t += el.scrollTop;
        l += el.scrollLeft;
        el = el.parentElement;
      }
      return {
        top: t,
        left: l
      };
    },
    /**
     * @description Method for managing submenu element.
     * You must add the "submenu" element using the this method at custom plugin.
     * @param {String} pluginName Plugin name
     * @param {Element|null} target Target button
     * @param {Element} menu Submenu element
     */
    initMenuTarget: function(pluginName, target, menu) {
      if (!target) {
        this._targetPlugins[pluginName] = menu;
      } else {
        context.element._menuTray.appendChild(menu);
        this._targetPlugins[pluginName] = true;
        this._menuTray[target.getAttribute("data-command")] = menu;
      }
    },
    /**
     * @description Enable submenu
     * @param {Element} element Submenu's button element to call
     */
    submenuOn: function(element) {
      if (this._bindedSubmenuOff) this._bindedSubmenuOff();
      if (this._bindControllersOff) this.controllersOff();
      const submenuName = this._submenuName = element.getAttribute("data-command");
      const menu = this.submenu = this._menuTray[submenuName];
      this.submenuActiveButton = element;
      this._setMenuPosition(element, menu);
      this._bindedSubmenuOff = this.submenuOff.bind(this);
      this.addDocEvent("mousedown", this._bindedSubmenuOff, false);
      if (this.plugins[submenuName].on) this.plugins[submenuName].on.call(this);
      this._antiBlur = true;
    },
    /**
     * @description Disable submenu
     */
    submenuOff: function() {
      this.removeDocEvent("mousedown", this._bindedSubmenuOff);
      this._bindedSubmenuOff = null;
      if (this.submenu) {
        this._submenuName = "";
        this.submenu.style.display = "none";
        this.submenu = null;
        util2.removeClass(this.submenuActiveButton, "on");
        this.submenuActiveButton = null;
        this._notHideToolbar = false;
      }
      this._antiBlur = false;
    },
    /**
     * @description Disable more layer
     */
    moreLayerOff: function() {
      if (this._moreLayerActiveButton) {
        const layer = context.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command"));
        layer.style.display = "none";
        util2.removeClass(this._moreLayerActiveButton, "on");
        this._moreLayerActiveButton = null;
      }
    },
    /**
     * @description Enable container
     * @param {Element} element Container's button element to call
     */
    containerOn: function(element) {
      if (this._bindedContainerOff) this._bindedContainerOff();
      const containerName = this._containerName = element.getAttribute("data-command");
      const menu = this.container = this._menuTray[containerName];
      this.containerActiveButton = element;
      this._setMenuPosition(element, menu);
      this._bindedContainerOff = this.containerOff.bind(this);
      this.addDocEvent("mousedown", this._bindedContainerOff, false);
      if (this.plugins[containerName].on) this.plugins[containerName].on.call(this);
      this._antiBlur = true;
    },
    /**
     * @description Disable container
     */
    containerOff: function() {
      this.removeDocEvent("mousedown", this._bindedContainerOff);
      this._bindedContainerOff = null;
      if (this.container) {
        this._containerName = "";
        this.container.style.display = "none";
        this.container = null;
        util2.removeClass(this.containerActiveButton, "on");
        this.containerActiveButton = null;
        this._notHideToolbar = false;
      }
      this._antiBlur = false;
    },
    /**
     * @description Set the menu position. (submenu, container)
     * @param {*} element Button element
     * @param {*} menu Menu element
     * @private
     */
    _setMenuPosition: function(element, menu) {
      menu.style.visibility = "hidden";
      menu.style.display = "block";
      menu.style.height = "";
      util2.addClass(element, "on");
      const toolbar = this.context.element.toolbar;
      const toolbarW = toolbar.offsetWidth;
      const toolbarOffset = event._getEditorOffsets(context.element.toolbar);
      const menuW = menu.offsetWidth;
      const l = element.parentElement.offsetLeft + 3;
      if (options.rtl) {
        const elementW = element.offsetWidth;
        const rtlW = menuW > elementW ? menuW - elementW : 0;
        const rtlL = rtlW > 0 ? 0 : elementW - menuW;
        menu.style.left = l - rtlW + rtlL + "px";
        if (toolbarOffset.left > event._getEditorOffsets(menu).left) {
          menu.style.left = "0px";
        }
      } else {
        const overLeft = toolbarW <= menuW ? 0 : toolbarW - (l + menuW);
        if (overLeft < 0) menu.style.left = l + overLeft + "px";
        else menu.style.left = l + "px";
      }
      let t = 0;
      let offsetEl = element;
      while (offsetEl && offsetEl !== toolbar) {
        t += offsetEl.offsetTop;
        offsetEl = offsetEl.offsetParent;
      }
      const bt = t;
      if (this._isBalloon) {
        t += toolbar.offsetTop + element.offsetHeight;
      } else {
        t -= element.offsetHeight;
      }
      const toolbarTop = toolbarOffset.top;
      const menuHeight = menu.offsetHeight;
      const scrollTop = this.getGlobalScrollOffset().top;
      const menuHeight_bottom = _w.innerHeight - (toolbarTop - scrollTop + bt + element.parentElement.offsetHeight);
      if (menuHeight_bottom < menuHeight) {
        let menuTop = -1 * (menuHeight - bt + 3);
        const insTop = toolbarTop - scrollTop + menuTop;
        const menuHeight_top = menuHeight + (insTop < 0 ? insTop : 0);
        if (menuHeight_top > menuHeight_bottom) {
          menu.style.height = menuHeight_top + "px";
          menuTop = -1 * (menuHeight_top - bt + 3);
        } else {
          menu.style.height = menuHeight_bottom + "px";
          menuTop = bt + element.parentElement.offsetHeight;
        }
        menu.style.top = menuTop + "px";
      } else {
        menu.style.top = bt + element.parentElement.offsetHeight + "px";
      }
      menu.style.visibility = "";
    },
    /**
     * @description Show controller at editor area (controller elements, function, "controller target element(@Required)", "controller name(@Required)", etc..)
     * @param {*} arguments controller elements, functions..
     */
    controllersOn: function() {
      if (this._bindControllersOff) this._bindControllersOff();
      this.controllerArray = [];
      for (let i = 0, arg; i < arguments.length; i++) {
        arg = arguments[i];
        if (!arg) continue;
        if (typeof arg === "string") {
          this.currentControllerName = arg;
          continue;
        }
        if (typeof arg === "function") {
          this.controllerArray.push(arg);
          continue;
        }
        if (!util2.hasClass(arg, "se-controller")) {
          this.currentControllerTarget = arg;
          this.currentFileComponentInfo = this.getFileComponent(arg);
          continue;
        }
        if (arg.style) {
          arg.style.display = "block";
          if (this._shadowRoot && this._shadowRootControllerEventTarget.indexOf(arg) === -1) {
            arg.addEventListener("mousedown", function(e) {
              e.preventDefault();
              e.stopPropagation();
            });
            this._shadowRootControllerEventTarget.push(arg);
          }
        }
        this.controllerArray.push(arg);
      }
      this._bindControllersOff = this.controllersOff.bind(this);
      this.addDocEvent("mousedown", this._bindControllersOff, false);
      this.addDocEvent("keydown", this._bindControllersOff, false);
      this._antiBlur = true;
      if (typeof functions.showController === "function") functions.showController(this.currentControllerName, this.controllerArray, this);
    },
    /**
     * @description Hide controller at editor area (link button, image resize button..)
     * @param {KeyboardEvent|MouseEvent|null} e Event object when called from mousedown and keydown events registered in "core.controllersOn"
     */
    controllersOff: function(e) {
      this._lineBreaker.style.display = "none";
      const len = this.controllerArray.length;
      if (e && e.target && len > 0) {
        for (let i = 0; i < len; i++) {
          if (typeof this.controllerArray[i].contains === "function" && this.controllerArray[i].contains(e.target)) return;
        }
      }
      if (this._fileManager.pluginRegExp.test(this.currentControllerName) && e && e.type === "keydown" && e.keyCode !== 27) return;
      context.element.lineBreaker_t.style.display = context.element.lineBreaker_b.style.display = "none";
      this._variable._lineBreakComp = null;
      this.currentControllerName = "";
      this.currentControllerTarget = null;
      this.currentFileComponentInfo = null;
      this.effectNode = null;
      if (!this._bindControllersOff) return;
      this.removeDocEvent("mousedown", this._bindControllersOff);
      this.removeDocEvent("keydown", this._bindControllersOff);
      this._bindControllersOff = null;
      if (len > 0) {
        for (let i = 0; i < len; i++) {
          if (typeof this.controllerArray[i] === "function") this.controllerArray[i]();
          else this.controllerArray[i].style.display = "none";
        }
        this.controllerArray = [];
      }
      this._antiBlur = false;
    },
    /**
     * @description Specify the position of the controller.
     * @param {Element} controller Controller element.
     * @param {Element} referEl Element that is the basis of the controller's position.
     * @param {String} position Type of position ("top" | "bottom")
     * When using the "top" position, there should not be an arrow on the controller.
     * When using the "bottom" position there should be an arrow on the controller.
     * @param {Object} addOffset These are the left and top values that need to be added specially. 
     * This argument is required. - {left: 0, top: 0}
     * Please enter the value based on ltr mode.
     * Calculated automatically in rtl mode.
     */
    setControllerPosition: function(controller, referEl, position, addOffset) {
      if (options.rtl) addOffset.left *= -1;
      const offset = util2.getOffset(referEl, context.element.wysiwygFrame);
      controller.style.visibility = "hidden";
      controller.style.display = "block";
      const topMargin = position === "top" ? -(controller.offsetHeight + 2) : referEl.offsetHeight + 12;
      controller.style.top = offset.top + topMargin + addOffset.top + "px";
      const l = offset.left - context.element.wysiwygFrame.scrollLeft + addOffset.left;
      const controllerW = controller.offsetWidth;
      const referElW = referEl.offsetWidth;
      const allow = util2.hasClass(controller.firstElementChild, "se-arrow") ? controller.firstElementChild : null;
      if (options.rtl) {
        const rtlW = controllerW > referElW ? controllerW - referElW : 0;
        const rtlL = rtlW > 0 ? 0 : referElW - controllerW;
        controller.style.left = l - rtlW + rtlL + "px";
        if (rtlW > 0) {
          if (allow) allow.style.left = (controllerW - 14 < 10 + rtlW ? controllerW - 14 : 10 + rtlW) + "px";
        }
        const overSize = context.element.wysiwygFrame.offsetLeft - controller.offsetLeft;
        if (overSize > 0) {
          controller.style.left = "0px";
          if (allow) allow.style.left = overSize + "px";
        }
      } else {
        controller.style.left = l + "px";
        const overSize = context.element.wysiwygFrame.offsetWidth - (controller.offsetLeft + controllerW);
        if (overSize < 0) {
          controller.style.left = controller.offsetLeft + overSize + "px";
          if (allow) allow.style.left = 20 - overSize + "px";
        } else {
          if (allow) allow.style.left = "20px";
        }
      }
      controller.style.visibility = "";
    },
    /**
     * @description javascript execCommand
     * @param {String} command javascript execCommand function property
     * @param {Boolean|undefined} showDefaultUI javascript execCommand function property
     * @param {String|undefined} value javascript execCommand function property
     */
    execCommand: function(command, showDefaultUI, value) {
      this._wd.execCommand(command, showDefaultUI, command === "formatBlock" ? "<" + value + ">" : value);
      this.history.push(true);
    },
    /**
     * @description Focus to wysiwyg area using "native focus function"
     */
    nativeFocus: function() {
      this.__focus();
      this._editorRange();
    },
    /**
     * @description Focus method
     * @private
     */
    __focus: function() {
      const caption = util2.getParentElement(this.getSelectionNode(), "figcaption");
      if (caption) {
        caption.focus();
      } else {
        context.element.wysiwyg.focus();
      }
    },
    /**
     * @description Focus to wysiwyg area
     */
    focus: function() {
      if (context.element.wysiwygFrame.style.display === "none") return;
      if (options.iframe) {
        this.nativeFocus();
      } else {
        try {
          const range = this.getRange();
          if (range.startContainer === range.endContainer && util2.isWysiwygDiv(range.startContainer)) {
            const currentNode = range.commonAncestorContainer.children[range.startOffset];
            if (!util2.isFormatElement(currentNode) && !util2.isComponent(currentNode)) {
              const format = util2.createElement(options.defaultTag);
              const br = util2.createElement("BR");
              format.appendChild(br);
              context.element.wysiwyg.insertBefore(format, currentNode);
              this.setRange(br, 0, br, 0);
              return;
            }
          }
          this.setRange(range.startContainer, range.startOffset, range.endContainer, range.endOffset);
        } catch (e) {
          this.nativeFocus();
        }
      }
      event._applyTagEffects();
      if (this._isBalloon) event._toggleToolbarBalloon();
    },
    /**
     * @description If "focusEl" is a component, then that component is selected; if it is a format element, the last text is selected
     * If "focusEdge" is null, then selected last element
     * @param {Element|null} focusEl Focus element
     */
    focusEdge: function(focusEl) {
      if (!focusEl) focusEl = context.element.wysiwyg.lastElementChild;
      const fileComponentInfo = this.getFileComponent(focusEl);
      if (fileComponentInfo) {
        this.selectComponent(fileComponentInfo.target, fileComponentInfo.pluginName);
      } else if (focusEl) {
        focusEl = util2.getChildElement(focusEl, function(current) {
          return current.childNodes.length === 0 || current.nodeType === 3;
        }, true);
        if (!focusEl) this.nativeFocus();
        else this.setRange(focusEl, focusEl.textContent.length, focusEl, focusEl.textContent.length);
      } else {
        this.focus();
      }
    },
    /**
     * @description Focusout to wysiwyg area (.blur())
     */
    blur: function() {
      if (options.iframe) {
        context.element.wysiwygFrame.blur();
      } else {
        context.element.wysiwyg.blur();
      }
    },
    /**
     * @description Set current editor's range object and return.
     * @param {Node} startCon The startContainer property of the selection object.
     * @param {Number} startOff The startOffset property of the selection object.
     * @param {Node} endCon The endContainer property of the selection object.
     * @param {Number} endOff The endOffset property of the selection object.
     * @returns {Object} Range object.
     */
    setRange: function(startCon, startOff, endCon, endOff) {
      if (!startCon || !endCon) return;
      if ((util2.isBreak(startCon) || startCon.nodeType === 3) && startOff > startCon.textContent.length) startOff = startCon.textContent.length;
      if ((util2.isBreak(endCon) || endCon.nodeType === 3) && endOff > endCon.textContent.length) endOff = endCon.textContent.length;
      if (util2.isFormatElement(startCon)) {
        startCon = startCon.childNodes[startOff > 0 ? startCon.childNodes.length - 1 : 0] || startCon;
        startOff = startOff > 0 ? startCon.nodeType === 1 && !util2.isBreak(startCon) ? 1 : startCon.textContent ? startCon.textContent.length : 0 : 0;
      }
      if (util2.isFormatElement(endCon)) {
        endCon = endCon.childNodes[endOff > 0 ? endCon.childNodes.length - 1 : 0] || endCon;
        endOff = endOff > 0 ? endCon.nodeType === 1 && !util2.isBreak(endCon) ? 1 : endCon.textContent ? endCon.textContent.length : 0 : 0;
      }
      const range = this._wd.createRange();
      try {
        if (startOff > startCon.textContent.length) startOff = startCon.textContent.length;
        if (endOff > endCon.textContent.length) endOff = endCon.textContent.length;
        range.setStart(startCon, startOff);
        range.setEnd(endCon, endOff);
      } catch (error) {
        console.warn("[SUNEDITOR.core.focus.error] " + error);
        this.nativeFocus();
        return;
      }
      const selection = this.getSelection();
      if (selection.removeAllRanges) {
        selection.removeAllRanges();
      }
      selection.addRange(range);
      this._rangeInfo(range, this.getSelection());
      if (options.iframe) this.__focus();
      return range;
    },
    /**
     * @description Remove range object and button effect
     */
    removeRange: function() {
      this._variable._range = null;
      this._variable._selectionNode = null;
      if (this.hasFocus) this.getSelection().removeAllRanges();
      this._setKeyEffect([]);
    },
    /**
     * @description Get current editor's range object
     * @returns {Object}
     */
    getRange: function() {
      const range = this._variable._range || this._createDefaultRange();
      const selection = this.getSelection();
      if (range.collapsed === selection.isCollapsed || !context.element.wysiwyg.contains(selection.focusNode)) return range;
      if (selection.rangeCount > 0) {
        this._variable._range = selection.getRangeAt(0);
        return this._variable._range;
      } else {
        const sc = selection.anchorNode, ec = selection.focusNode, so = selection.anchorOffset, eo = selection.focusOffset;
        const compareValue = util2.compareElements(sc, ec);
        const rightDir = compareValue.ancestor && (compareValue.result === 0 ? so <= eo : compareValue.result > 1 ? true : false);
        return this.setRange(
          rightDir ? sc : ec,
          rightDir ? so : eo,
          rightDir ? ec : sc,
          rightDir ? eo : so
        );
      }
    },
    /**
     * @description If the "range" object is a non-editable area, add a line at the top of the editor and update the "range" object.
     * Returns a new "range" or argument "range".
     * @param {Object} range core.getRange()
     * @param {Element|null} container If there is "container" argument, it creates a line in front of the container.
     * @returns {Object} range
     */
    getRange_addLine: function(range, container) {
      if (this._selectionVoid(range)) {
        const wysiwyg = context.element.wysiwyg;
        const op = util2.createElement(options.defaultTag);
        op.innerHTML = "<br>";
        wysiwyg.insertBefore(op, container && container !== wysiwyg ? container.nextElementSibling : wysiwyg.firstElementChild);
        this.setRange(op.firstElementChild, 0, op.firstElementChild, 1);
        range = this._variable._range;
      }
      return range;
    },
    /**
     * @description Get window selection obejct
     * @returns {Object}
     */
    getSelection: function() {
      const selection = this._shadowRoot && this._shadowRoot.getSelection ? this._shadowRoot.getSelection() : this._ww.getSelection();
      if (!this._variable._range && !context.element.wysiwyg.contains(selection.focusNode)) {
        selection.removeAllRanges();
        selection.addRange(this._createDefaultRange());
      }
      return selection;
    },
    /**
     * @description Get current select node
     * @returns {Node}
     */
    getSelectionNode: function() {
      if (!context.element.wysiwyg.contains(this._variable._selectionNode)) this._editorRange();
      if (!this._variable._selectionNode) {
        const selectionNode = util2.getChildElement(context.element.wysiwyg.firstChild, function(current) {
          return current.childNodes.length === 0 || current.nodeType === 3;
        }, false);
        if (!selectionNode) {
          this._editorRange();
        } else {
          this._variable._selectionNode = selectionNode;
          return selectionNode;
        }
      }
      return this._variable._selectionNode;
    },
    /**
     * @description Saving the range object and the currently selected node of editor
     * @private
     */
    _editorRange: function() {
      const activeEl = this._wd.activeElement;
      if (util2.isInputElement(activeEl)) {
        this._variable._selectionNode = activeEl;
        return activeEl;
      }
      const selection = this.getSelection();
      if (!selection) return null;
      let range = null;
      if (selection.rangeCount > 0) {
        range = selection.getRangeAt(0);
      } else {
        range = this._createDefaultRange();
      }
      this._rangeInfo(range, selection);
    },
    /**
     * @description Set "range" and "selection" info.
     * @param {Object} range range object.
     * @param {Object} selection selection object.
     */
    _rangeInfo: function(range, selection) {
      let selectionNode = null;
      this._variable._range = range;
      if (range.collapsed) {
        if (util2.isWysiwygDiv(range.commonAncestorContainer)) selectionNode = range.commonAncestorContainer.children[range.startOffset] || range.commonAncestorContainer;
        else selectionNode = range.commonAncestorContainer;
      } else {
        selectionNode = selection.extentNode || selection.anchorNode;
      }
      this._variable._selectionNode = selectionNode;
    },
    /**
     * @description Return the range object of editor's first child node
     * @returns {Object}
     * @private
     */
    _createDefaultRange: function() {
      const wysiwyg = context.element.wysiwyg;
      const range = this._wd.createRange();
      let firstFormat = wysiwyg.firstElementChild;
      let focusEl = null;
      if (!firstFormat) {
        firstFormat = util2.createElement(options.defaultTag);
        focusEl = util2.createElement("BR");
        firstFormat.appendChild(focusEl);
        wysiwyg.appendChild(firstFormat);
      } else {
        focusEl = firstFormat.firstChild;
        if (!focusEl) {
          focusEl = util2.createElement("BR");
          firstFormat.appendChild(focusEl);
        }
      }
      range.setStart(focusEl, 0);
      range.setEnd(focusEl, 0);
      return range;
    },
    /**
     * @description Returns true if there is no valid "selection".
     * @param {Object} range core.getRange()
     * @returns {Object} range
     * @private
     */
    _selectionVoid: function(range) {
      const comm = range.commonAncestorContainer;
      return util2.isWysiwygDiv(range.startContainer) && util2.isWysiwygDiv(range.endContainer) || /FIGURE/i.test(comm.nodeName) || this._fileManager.regExp.test(comm.nodeName) || util2.isMediaComponent(comm);
    },
    /**
     * @description Reset range object to text node selected status.
     * @returns {Boolean} Returns false if there is no valid selection.
     * @private
     */
    _resetRangeToTextNode: function() {
      const range = this.getRange();
      if (this._selectionVoid(range)) return false;
      const collapsed = range.collapsed;
      let startCon = range.startContainer;
      let startOff = range.startOffset;
      let endCon = range.endContainer;
      let endOff = range.endOffset;
      let tempCon, tempOffset, tempChild;
      if (util2.isFormatElement(startCon)) {
        if (!startCon.childNodes[startOff]) {
          startCon = startCon.lastChild || startCon;
          startOff = startCon.textContent.length;
        } else {
          startCon = startCon.childNodes[startOff] || startCon;
          startOff = 0;
        }
        while (startCon && startCon.nodeType === 1 && startCon.firstChild) {
          startCon = startCon.firstChild || startCon;
          startOff = 0;
        }
      }
      if (util2.isFormatElement(endCon)) {
        endCon = endCon.childNodes[endOff] || endCon.lastChild || endCon;
        while (endCon && endCon.nodeType === 1 && endCon.lastChild) {
          endCon = endCon.lastChild;
        }
        endOff = collapsed ? 0 : endCon.textContent.length;
      }
      tempCon = util2.isWysiwygDiv(startCon) ? context.element.wysiwyg.firstChild : startCon;
      tempOffset = startOff;
      if (util2.isBreak(tempCon) || tempCon.nodeType === 1 && tempCon.childNodes.length > 0) {
        const onlyBreak = util2.isBreak(tempCon);
        if (!onlyBreak) {
          while (tempCon && !util2.isBreak(tempCon) && tempCon.nodeType === 1) {
            tempCon = tempCon.childNodes[tempOffset] || tempCon.nextElementSibling || tempCon.nextSibling;
            tempOffset = 0;
          }
          let format = util2.getFormatElement(tempCon, null);
          if (format === util2.getRangeFormatElement(format, null)) {
            format = util2.createElement(util2.getParentElement(tempCon, util2.isCell) ? "DIV" : options.defaultTag);
            tempCon.parentNode.insertBefore(format, tempCon);
            format.appendChild(tempCon);
          }
        }
        if (util2.isBreak(tempCon)) {
          const emptyText = util2.createTextNode(util2.zeroWidthSpace);
          tempCon.parentNode.insertBefore(emptyText, tempCon);
          tempCon = emptyText;
          if (onlyBreak) {
            if (startCon === endCon) {
              endCon = tempCon;
              endOff = 1;
            }
          }
        }
      }
      startCon = tempCon;
      startOff = tempOffset;
      tempCon = util2.isWysiwygDiv(endCon) ? context.element.wysiwyg.lastChild : endCon;
      tempOffset = endOff;
      if (util2.isBreak(tempCon) || tempCon.nodeType === 1 && tempCon.childNodes.length > 0) {
        const onlyBreak = util2.isBreak(tempCon);
        if (!onlyBreak) {
          while (tempCon && !util2.isBreak(tempCon) && tempCon.nodeType === 1) {
            tempChild = tempCon.childNodes;
            if (tempChild.length === 0) break;
            tempCon = tempChild[tempOffset > 0 ? tempOffset - 1 : tempOffset] || !/FIGURE/i.test(tempChild[0].nodeName) ? tempChild[0] : tempCon.previousElementSibling || tempCon.previousSibling || startCon;
            tempOffset = tempOffset > 0 ? tempCon.textContent.length : tempOffset;
          }
          let format = util2.getFormatElement(tempCon, null);
          if (format === util2.getRangeFormatElement(format, null)) {
            format = util2.createElement(util2.isCell(format) ? "DIV" : options.defaultTag);
            tempCon.parentNode.insertBefore(format, tempCon);
            format.appendChild(tempCon);
          }
        }
        if (util2.isBreak(tempCon)) {
          const emptyText = util2.createTextNode(util2.zeroWidthSpace);
          tempCon.parentNode.insertBefore(emptyText, tempCon);
          tempCon = emptyText;
          tempOffset = 1;
          if (onlyBreak && !tempCon.previousSibling) {
            util2.removeItem(endCon);
          }
        }
      }
      endCon = tempCon;
      endOff = tempOffset;
      this.setRange(startCon, startOff, endCon, endOff);
      return true;
    },
    /**
     * @description Returns a "formatElement"(util.isFormatElement) array from the currently selected range.
     * @param {Function|null} validation The validation function. (Replaces the default validation function-util.isFormatElement(current))
     * @returns {Array}
     */
    getSelectedElements: function(validation) {
      if (!this._resetRangeToTextNode()) return [];
      let range = this.getRange();
      if (util2.isWysiwygDiv(range.startContainer)) {
        const children = context.element.wysiwyg.children;
        if (children.length === 0) return [];
        this.setRange(children[0], 0, children[children.length - 1], children[children.length - 1].textContent.trim().length);
        range = this.getRange();
      }
      const startCon = range.startContainer;
      const endCon = range.endContainer;
      const commonCon = range.commonAncestorContainer;
      const lineNodes = util2.getListChildren(commonCon, function(current) {
        return validation ? validation(current) : util2.isFormatElement(current);
      });
      if (!util2.isWysiwygDiv(commonCon) && !util2.isRangeFormatElement(commonCon)) lineNodes.unshift(util2.getFormatElement(commonCon, null));
      if (startCon === endCon || lineNodes.length === 1) return lineNodes;
      let startLine = util2.getFormatElement(startCon, null);
      let endLine = util2.getFormatElement(endCon, null);
      let startIdx = null;
      let endIdx = null;
      const onlyTable = function(current) {
        return util2.isTable(current) ? /^TABLE$/i.test(current.nodeName) : true;
      };
      let startRangeEl = util2.getRangeFormatElement(startLine, onlyTable);
      let endRangeEl = util2.getRangeFormatElement(endLine, onlyTable);
      if (util2.isTable(startRangeEl) && util2.isListCell(startRangeEl.parentNode)) startRangeEl = startRangeEl.parentNode;
      if (util2.isTable(endRangeEl) && util2.isListCell(endRangeEl.parentNode)) endRangeEl = endRangeEl.parentNode;
      const sameRange = startRangeEl === endRangeEl;
      for (let i = 0, len = lineNodes.length, line; i < len; i++) {
        line = lineNodes[i];
        if (startLine === line || !sameRange && line === startRangeEl) {
          startIdx = i;
          continue;
        }
        if (endLine === line || !sameRange && line === endRangeEl) {
          endIdx = i;
          break;
        }
      }
      if (startIdx === null) startIdx = 0;
      if (endIdx === null) endIdx = lineNodes.length - 1;
      return lineNodes.slice(startIdx, endIdx + 1);
    },
    /**
     * @description Get format elements and components from the selected area. (P, DIV, H[1-6], OL, UL, TABLE..)
     * If some of the component are included in the selection, get the entire that component.
     * @param {Boolean} removeDuplicate If true, if there is a parent and child tag among the selected elements, the child tag is excluded.
     * @returns {Array}
     */
    getSelectedElementsAndComponents: function(removeDuplicate) {
      const commonCon = this.getRange().commonAncestorContainer;
      const myComponent = util2.getParentElement(commonCon, util2.isComponent);
      const selectedLines = util2.isTable(commonCon) ? this.getSelectedElements(null) : this.getSelectedElements((function(current) {
        const component = this.getParentElement(current, this.isComponent);
        return this.isFormatElement(current) && (!component || component === myComponent) || this.isComponent(current) && !this.getFormatElement(current);
      }).bind(util2));
      if (removeDuplicate) {
        for (let i = 0, len = selectedLines.length; i < len; i++) {
          for (let j = i - 1; j >= 0; j--) {
            if (selectedLines[j].contains(selectedLines[i])) {
              selectedLines.splice(i, 1);
              i--;
              len--;
              break;
            }
          }
        }
      }
      return selectedLines;
    },
    /**
     * @description Determine if this offset is the edge offset of container
     * @param {Node} container The node of the selection object. (range.startContainer..)
     * @param {Number} offset The offset of the selection object. (core.getRange().startOffset...)
     * @param {String|undefined} dir Select check point - Both edge, Front edge or End edge. ("start": Front edge, "end": End edge, undefined: Both edge)
     * @returns {Boolean}
     */
    isEdgePoint: function(container, offset, dir) {
      if (container.nodeType === 1 && !container.textContent.length) return true;
      return dir !== "end" && offset === 0 || (!dir || dir !== "start") && !container.nodeValue && offset === 1 || (!dir || dir === "end") && !!container.nodeValue && offset === container.nodeValue.length;
    },
    /**
     * @description Check if the container and offset values are the edges of the format tag
     * @param {Node} container The node of the selection object. (range.startContainer..)
     * @param {Number} offset The offset of the selection object. (core.getRange().startOffset...)
     * @param {String} dir Select check point - "start": Front edge, "end": End edge, undefined: Both edge.
     * @returns {Array|null}
     * @private
     */
    _isEdgeFormat: function(node, offset, dir) {
      if (!this.isEdgePoint(node, offset, dir)) return false;
      const result = [];
      dir = dir === "start" ? "previousSibling" : "nextSibling";
      while (node && !util2.isFormatElement(node) && !util2.isWysiwygDiv(node)) {
        if (!node[dir] || util2.isBreak(node[dir]) && !node[dir][dir]) {
          if (node.nodeType === 1) result.push(node.cloneNode(false));
          node = node.parentNode;
        } else {
          return null;
        }
      }
      return result;
    },
    /**
     * @description Show loading box
     */
    showLoading: function() {
      context.element.loading.style.display = "block";
    },
    /**
     * @description Close loading box
     */
    closeLoading: function() {
      context.element.loading.style.display = "none";
    },
    /**
     * @description Append format element to sibling node of argument element.
     * If the "formatNodeName" argument value is present, the tag of that argument value is inserted,
     * If not, the currently selected format tag is inserted.
     * @param {Element} element Insert as siblings of that element
     * @param {String|Element|null} formatNode Node name or node obejct to be inserted
     * @returns {Element}
     */
    appendFormatTag: function(element, formatNode) {
      if (!element || !element.parentNode) return null;
      const currentFormatEl = util2.getFormatElement(this.getSelectionNode(), null);
      let oFormat = null;
      if (!util2.isFormatElement(element) && util2.isFreeFormatElement(currentFormatEl || element.parentNode)) {
        oFormat = util2.createElement("BR");
      } else {
        const oFormatName = formatNode ? typeof formatNode === "string" ? formatNode : formatNode.nodeName : util2.isFormatElement(currentFormatEl) && !util2.isRangeFormatElement(currentFormatEl) && !util2.isFreeFormatElement(currentFormatEl) ? currentFormatEl.nodeName : options.defaultTag;
        oFormat = util2.createElement(oFormatName);
        oFormat.innerHTML = "<br>";
        if (formatNode && typeof formatNode !== "string" || !formatNode && util2.isFormatElement(currentFormatEl)) {
          util2.copyTagAttributes(oFormat, formatNode || currentFormatEl, ["id"]);
        }
      }
      if (util2.isCell(element)) element.insertBefore(oFormat, element.nextElementSibling);
      else element.parentNode.insertBefore(oFormat, element.nextElementSibling);
      return oFormat;
    },
    /**
     * @description The method to insert a element and return. (used elements : table, hr, image, video)
     * If "element" is "HR", insert and return the new line.
     * @param {Element} element Element to be inserted
     * @param {Boolean} notHistoryPush When true, it does not update the history stack and the selection object and return EdgeNodes (util.getEdgeChildNodes)
     * @param {Boolean} checkCharCount If true, if "options.maxCharCount" is exceeded when "element" is added, null is returned without addition.
     * @param {Boolean} notSelect If true, Do not automatically select the inserted component.
     * @returns {Element}
     */
    insertComponent: function(element, notHistoryPush, checkCharCount, notSelect) {
      if (this.isReadOnly || checkCharCount && !this.checkCharCount(element, null)) {
        return null;
      }
      const r = this.removeNode();
      this.getRange_addLine(this.getRange(), r.container);
      let oNode = null;
      let selectionNode = this.getSelectionNode();
      let formatEl = util2.getFormatElement(selectionNode, null);
      if (util2.isListCell(formatEl)) {
        this.insertNode(element, selectionNode === formatEl ? null : (selectionNode || r.container).nextSibling, false);
        if (!element.nextSibling) element.parentNode.appendChild(util2.createElement("BR"));
      } else {
        if (this.getRange().collapsed && (r.container.nodeType === 3 || util2.isBreak(r.container))) {
          const depthFormat = util2.getParentElement(r.container, (function(current) {
            return this.isRangeFormatElement(current);
          }).bind(util2));
          oNode = util2.splitElement(r.container, r.offset, !depthFormat ? 0 : util2.getElementDepth(depthFormat) + 1);
          if (oNode) formatEl = oNode.previousSibling;
        }
        this.insertNode(element, util2.isRangeFormatElement(formatEl) ? null : formatEl, false);
        if (formatEl && util2.onlyZeroWidthSpace(formatEl)) util2.removeItem(formatEl);
      }
      if (!notSelect) {
        this.setRange(element, 0, element, 0);
        const fileComponentInfo = this.getFileComponent(element);
        if (fileComponentInfo) {
          this.selectComponent(fileComponentInfo.target, fileComponentInfo.pluginName);
        } else if (oNode) {
          oNode = util2.getEdgeChildNodes(oNode, null).sc || oNode;
          this.setRange(oNode, 0, oNode, 0);
        }
      }
      if (!notHistoryPush) this.history.push(1);
      return oNode || element;
    },
    /**
     * @description Gets the file component and that plugin name
     * return: {target, component, pluginName} | null
     * @param {Element} element Target element (figure tag, component div, file tag)
     * @returns {Object|null}
     */
    getFileComponent: function(element) {
      if (!this._fileManager.queryString || !element) return null;
      let target, pluginName;
      if (/^FIGURE$/i.test(element.nodeName) || /se-component/.test(element.className)) {
        target = element.querySelector(this._fileManager.queryString);
      }
      if (!target && element.nodeName && this._fileManager.regExp.test(element.nodeName)) {
        target = element;
      }
      if (target) {
        pluginName = this._fileManager.pluginMap[target.nodeName.toLowerCase()];
        if (pluginName) {
          return {
            target,
            component: util2.getParentElement(target, util2.isComponent),
            pluginName
          };
        }
      }
      return null;
    },
    /**
     * @description The component(image, video) is selected and the resizing module is called.
     * @param {Element} element Element tag (img, iframe, video)
     * @param {String} pluginName Plugin name (image, video)
     */
    selectComponent: function(element, pluginName) {
      if (util2.isUneditableComponent(util2.getParentElement(element, util2.isComponent)) || util2.isUneditableComponent(element)) return false;
      if (!this.hasFocus) this.focus();
      const plugin = this.plugins[pluginName];
      if (!plugin) return;
      _w.setTimeout((function() {
        if (typeof plugin.select === "function") this.callPlugin(pluginName, plugin.select.bind(this, element), null);
        this._setComponentLineBreaker(element);
      }).bind(this));
    },
    /**
     * @description Set line breaker of component
     * @param {Element} element Element tag (img, iframe, video)
     * @private
     */
    _setComponentLineBreaker: function(element) {
      this._lineBreaker.style.display = "none";
      const container = util2.getParentElement(element, util2.isComponent);
      if (!container) return;
      const t_style = context.element.lineBreaker_t.style;
      const b_style = context.element.lineBreaker_b.style;
      const target = this.context.resizing.resizeContainer.style.display === "block" ? this.context.resizing.resizeContainer : element;
      const isList = util2.isListCell(container.parentNode);
      let componentTop, wScroll, w;
      if (isList ? !container.previousSibling || util2.isComponent(container.previousElementSibling) : !util2.isFormatElement(container.previousElementSibling)) {
        this._variable._lineBreakComp = container;
        wScroll = context.element.wysiwyg.scrollTop;
        componentTop = util2.getOffset(element, context.element.wysiwygFrame).top + wScroll;
        w = target.offsetWidth / 2 / 2;
        t_style.top = componentTop - wScroll - 12 + "px";
        t_style.left = util2.getOffset(target).left + w + "px";
        t_style.display = "block";
      } else {
        t_style.display = "none";
      }
      if (isList ? !container.nextSibling || util2.isComponent(container.nextElementSibling) : !util2.isFormatElement(container.nextElementSibling)) {
        if (!componentTop) {
          this._variable._lineBreakComp = container;
          wScroll = context.element.wysiwyg.scrollTop;
          componentTop = util2.getOffset(element, context.element.wysiwygFrame).top + wScroll;
          w = target.offsetWidth / 2 / 2;
        }
        b_style.top = componentTop + target.offsetHeight - wScroll - 12 + "px";
        b_style.left = util2.getOffset(target).left + target.offsetWidth - w - 24 + "px";
        b_style.display = "block";
      } else {
        b_style.display = "none";
      }
    },
    _checkDuplicateNode: function(oNode, parentNode) {
      (function recursionFunc(current) {
        core._dupleCheck(current, parentNode);
        const childNodes = current.childNodes;
        for (let i = 0, len = childNodes.length; i < len; i++) {
          recursionFunc(childNodes[i]);
        }
      })(oNode);
    },
    _dupleCheck: function(oNode, parentNode) {
      if (!util2.isTextStyleElement(oNode)) return;
      const oStyles = (oNode.style.cssText.match(/[^;]+;/g) || []).map(function(v) {
        return v.trim();
      });
      const nodeName = oNode.nodeName;
      if (/^span$/i.test(nodeName) && oStyles.length === 0) return oNode;
      let duple = false;
      (function recursionFunc(ancestor) {
        if (util2.isWysiwygDiv(ancestor) || !util2.isTextStyleElement(ancestor)) return;
        if (ancestor.nodeName === nodeName) {
          duple = true;
          const styles = ancestor.style.cssText.match(/[^;]+;/g) || [];
          for (let i = 0, len = styles.length, j; i < len; i++) {
            if ((j = oStyles.indexOf(styles[i].trim())) > -1) {
              oStyles.splice(j, 1);
            }
          }
          for (let i = 0, len = ancestor.classList.length; i < len; i++) {
            oNode.classList.remove(ancestor.classList[i]);
          }
        }
        recursionFunc(ancestor.parentElement);
      })(parentNode);
      if (duple) {
        if (!(oNode.style.cssText = oStyles.join(" "))) {
          oNode.setAttribute("style", "");
          oNode.removeAttribute("style");
        }
        if (!oNode.attributes.length) {
          oNode.setAttribute("data-se-duple", "true");
        }
      }
      return oNode;
    },
    /**
     * @description Delete selected node and insert argument value node and return.
     * If the "afterNode" exists, it is inserted after the "afterNode"
     * Inserting a text node merges with both text nodes on both sides and returns a new "{ container, startOffset, endOffset }".
     * @param {Node} oNode Element to be inserted
     * @param {Node|null} afterNode If the node exists, it is inserted after the node
     * @param {Boolean} checkCharCount If true, if "options.maxCharCount" is exceeded when "element" is added, null is returned without addition.
     * @returns {Object|Node|null}
     */
    insertNode: function(oNode, afterNode, checkCharCount) {
      if (this.isReadOnly || checkCharCount && !this.checkCharCount(oNode, null)) {
        return null;
      }
      let fNode = null;
      let range = this.getRange();
      let line = util2.isListCell(range.commonAncestorContainer) ? range.commonAncestorContainer : util2.getFormatElement(this.getSelectionNode(), null);
      let insertListCell = util2.isListCell(line) && (util2.isListCell(oNode) || util2.isList(oNode));
      let parentNode, originAfter, tempAfterNode, tempParentNode = null;
      const freeFormat = util2.isFreeFormatElement(line);
      const isFormats = !freeFormat && (util2.isFormatElement(oNode) || util2.isRangeFormatElement(oNode)) || util2.isComponent(oNode);
      if (insertListCell) {
        tempAfterNode = afterNode || util2.isList(oNode) ? line.lastChild : line.nextElementSibling;
        tempParentNode = util2.isList(oNode) ? line : (tempAfterNode || line).parentNode;
      }
      if (!afterNode && (isFormats || util2.isComponent(oNode) || util2.isMedia(oNode))) {
        const isEdge = this.isEdgePoint(range.endContainer, range.endOffset, "end");
        const r = this.removeNode();
        const container = r.container;
        const prevContainer = container === r.prevContainer && range.collapsed ? null : r.prevContainer;
        if (insertListCell && prevContainer) {
          tempParentNode = prevContainer.nodeType === 3 ? prevContainer.parentNode : prevContainer;
          if (tempParentNode.contains(container)) {
            let sameParent = true;
            tempAfterNode = container;
            while (tempAfterNode.parentNode && tempAfterNode.parentNode !== tempParentNode) {
              tempAfterNode = tempAfterNode.parentNode;
              sameParent = false;
            }
            if (sameParent && container === prevContainer) tempAfterNode = tempAfterNode.nextSibling;
          } else {
            tempAfterNode = null;
          }
        } else if (insertListCell && util2.isListCell(container) && !line.parentElement) {
          line = util2.createElement("LI");
          tempParentNode.appendChild(line);
          container.appendChild(tempParentNode);
          tempAfterNode = null;
        } else if (container.nodeType === 3 || util2.isBreak(container) || insertListCell) {
          const depthFormat = util2.getParentElement(container, (function(current) {
            return this.isRangeFormatElement(current) || this.isListCell(current);
          }).bind(util2));
          afterNode = util2.splitElement(container, r.offset, !depthFormat ? 0 : util2.getElementDepth(depthFormat) + 1);
          if (!afterNode) {
            if (!util2.isListCell(line)) {
              tempAfterNode = afterNode = line;
            }
          } else if (insertListCell) {
            if (line.contains(container)) {
              const subList = util2.isList(line.lastElementChild);
              let newCell = null;
              if (!isEdge) {
                newCell = line.cloneNode(false);
                newCell.appendChild(afterNode.textContent.trim() ? afterNode : util2.createTextNode(util2.zeroWidthSpace));
              }
              if (subList) {
                if (!newCell) {
                  newCell = line.cloneNode(false);
                  newCell.appendChild(util2.createTextNode(util2.zeroWidthSpace));
                }
                newCell.appendChild(line.lastElementChild);
              }
              if (newCell) {
                line.parentNode.insertBefore(newCell, line.nextElementSibling);
                tempAfterNode = afterNode = newCell;
              }
            }
          } else {
            afterNode = afterNode.previousSibling;
          }
        }
      }
      range = !afterNode && !isFormats ? this.getRange_addLine(this.getRange(), null) : this.getRange();
      const commonCon = range.commonAncestorContainer;
      const startOff = range.startOffset;
      const endOff = range.endOffset;
      const formatRange = range.startContainer === commonCon && util2.isFormatElement(commonCon);
      const startCon = formatRange ? commonCon.childNodes[startOff] || commonCon.childNodes[0] || range.startContainer : range.startContainer;
      const endCon = formatRange ? commonCon.childNodes[endOff] || commonCon.childNodes[commonCon.childNodes.length - 1] || range.endContainer : range.endContainer;
      if (!insertListCell) {
        if (!afterNode) {
          parentNode = startCon;
          if (startCon.nodeType === 3) {
            parentNode = startCon.parentNode;
          }
          if (range.collapsed) {
            if (commonCon.nodeType === 3) {
              if (commonCon.textContent.length > endOff) afterNode = commonCon.splitText(endOff);
              else afterNode = commonCon.nextSibling;
            } else {
              if (!util2.isBreak(parentNode)) {
                let c = parentNode.childNodes[startOff];
                const focusNode = c && c.nodeType === 3 && util2.onlyZeroWidthSpace(c) && util2.isBreak(c.nextSibling) ? c.nextSibling : c;
                if (focusNode) {
                  if (!focusNode.nextSibling && util2.isBreak(focusNode)) {
                    parentNode.removeChild(focusNode);
                    afterNode = null;
                  } else {
                    afterNode = util2.isBreak(focusNode) && !util2.isBreak(oNode) ? focusNode : focusNode.nextSibling;
                  }
                } else {
                  afterNode = null;
                }
              } else {
                afterNode = parentNode;
                parentNode = parentNode.parentNode;
              }
            }
          } else {
            const isSameContainer = startCon === endCon;
            if (isSameContainer) {
              if (this.isEdgePoint(endCon, endOff)) afterNode = endCon.nextSibling;
              else afterNode = endCon.splitText(endOff);
              let removeNode = startCon;
              if (!this.isEdgePoint(startCon, startOff)) removeNode = startCon.splitText(startOff);
              parentNode.removeChild(removeNode);
              if (parentNode.childNodes.length === 0 && isFormats) {
                parentNode.innerHTML = "<br>";
              }
            } else {
              const removedTag = this.removeNode();
              const container = removedTag.container;
              const prevContainer = removedTag.prevContainer;
              if (container && container.childNodes.length === 0 && isFormats) {
                if (util2.isFormatElement(container)) {
                  container.innerHTML = "<br>";
                } else if (util2.isRangeFormatElement(container)) {
                  container.innerHTML = "<" + options.defaultTag + "><br></" + options.defaultTag + ">";
                }
              }
              if (util2.isListCell(container) && oNode.nodeType === 3) {
                parentNode = container;
                afterNode = null;
              } else if (!isFormats && prevContainer) {
                parentNode = prevContainer.nodeType === 3 ? prevContainer.parentNode : prevContainer;
                if (parentNode.contains(container)) {
                  let sameParent = true;
                  afterNode = container;
                  while (afterNode.parentNode && afterNode.parentNode !== parentNode) {
                    afterNode = afterNode.parentNode;
                    sameParent = false;
                  }
                  if (sameParent && container === prevContainer) afterNode = afterNode.nextSibling;
                } else {
                  afterNode = null;
                }
              } else if (util2.isWysiwygDiv(container) && !util2.isFormatElement(oNode)) {
                parentNode = container.appendChild(util2.createElement(options.defaultTag));
                afterNode = null;
              } else {
                afterNode = isFormats ? endCon : container === prevContainer ? container.nextSibling : container;
                parentNode = !afterNode || !afterNode.parentNode ? commonCon : afterNode.parentNode;
              }
              while (afterNode && !util2.isFormatElement(afterNode) && afterNode.parentNode !== commonCon) {
                afterNode = afterNode.parentNode;
              }
            }
          }
        } else {
          parentNode = afterNode.parentNode;
          afterNode = afterNode.nextSibling;
          originAfter = true;
        }
      }
      try {
        if (!insertListCell) {
          if (util2.isWysiwygDiv(afterNode) || parentNode === context.element.wysiwyg.parentNode) {
            parentNode = context.element.wysiwyg;
            afterNode = null;
          }
          if (util2.isFormatElement(oNode) || util2.isRangeFormatElement(oNode) || !util2.isListCell(parentNode) && util2.isComponent(oNode)) {
            const oldParent = parentNode;
            if (util2.isList(afterNode)) {
              parentNode = afterNode;
              afterNode = null;
            } else if (util2.isListCell(afterNode)) {
              parentNode = afterNode.previousElementSibling || afterNode;
            } else if (!originAfter && !afterNode) {
              const r = this.removeNode();
              const container = r.container.nodeType === 3 ? util2.isListCell(util2.getFormatElement(r.container, null)) ? r.container : util2.getFormatElement(r.container, null) || r.container.parentNode : r.container;
              const rangeCon = util2.isWysiwygDiv(container) || util2.isRangeFormatElement(container);
              parentNode = rangeCon ? container : container.parentNode;
              afterNode = rangeCon ? null : container.nextSibling;
            }
            if (oldParent.childNodes.length === 0 && parentNode !== oldParent) util2.removeItem(oldParent);
          }
          if (isFormats && !freeFormat && !util2.isRangeFormatElement(parentNode) && !util2.isListCell(parentNode) && !util2.isWysiwygDiv(parentNode)) {
            afterNode = parentNode.nextElementSibling;
            parentNode = parentNode.parentNode;
          }
          if (util2.isWysiwygDiv(parentNode) && (oNode.nodeType === 3 || util2.isBreak(oNode))) {
            const fomatNode = util2.createElement(options.defaultTag);
            fomatNode.appendChild(oNode);
            fNode = oNode;
            oNode = fomatNode;
          }
        }
        if (insertListCell) {
          if (!tempParentNode.parentNode) {
            parentNode = context.element.wysiwyg;
            afterNode = null;
          } else {
            parentNode = tempParentNode;
            afterNode = tempAfterNode;
          }
        } else {
          afterNode = parentNode === afterNode ? parentNode.lastChild : afterNode;
        }
        if (util2.isListCell(oNode) && !util2.isList(parentNode)) {
          if (util2.isListCell(parentNode)) {
            afterNode = parentNode.nextElementSibling;
            parentNode = parentNode.parentNode;
          } else {
            const ul = util2.createElement("ol");
            parentNode.insertBefore(ul, afterNode);
            parentNode = ul;
            afterNode = null;
          }
          insertListCell = true;
        }
        this._checkDuplicateNode(oNode, parentNode);
        parentNode.insertBefore(oNode, afterNode);
        if (insertListCell) {
          if (util2.onlyZeroWidthSpace(line.textContent.trim())) {
            util2.removeItem(line);
            oNode = oNode.lastChild;
          } else {
            const chList = util2.getArrayItem(line.children, util2.isList);
            if (chList) {
              if (oNode !== chList) {
                oNode.appendChild(chList);
                oNode = chList.previousSibling;
              } else {
                parentNode.appendChild(oNode);
                oNode = parentNode;
              }
              if (util2.onlyZeroWidthSpace(line.textContent.trim())) {
                util2.removeItem(line);
              }
            }
          }
        }
      } catch (error) {
        parentNode.appendChild(oNode);
        console.warn("[SUNEDITOR.insertNode.warn] " + error);
      } finally {
        if (fNode) oNode = fNode;
        const dupleNodes = parentNode.querySelectorAll("[data-se-duple]");
        if (dupleNodes.length > 0) {
          for (let i = 0, len = dupleNodes.length, d, c, ch, parent; i < len; i++) {
            d = dupleNodes[i];
            ch = d.childNodes;
            parent = d.parentNode;
            while (ch[0]) {
              c = ch[0];
              parent.insertBefore(c, d);
            }
            if (d === oNode) oNode = c;
            util2.removeItem(d);
          }
        }
        if ((util2.isFormatElement(oNode) || util2.isComponent(oNode)) && startCon === endCon) {
          const cItem = util2.getFormatElement(commonCon, null);
          if (cItem && cItem.nodeType === 1 && util2.isEmptyLine(cItem)) {
            util2.removeItem(cItem);
          }
        }
        if (freeFormat && (util2.isFormatElement(oNode) || util2.isRangeFormatElement(oNode))) {
          oNode = this._setIntoFreeFormat(oNode);
        }
        if (!util2.isComponent(oNode)) {
          let offset = 1;
          if (oNode.nodeType === 3) {
            offset = oNode.textContent.length;
            this.setRange(oNode, offset, oNode, offset);
          } else if (!util2.isBreak(oNode) && !util2.isListCell(oNode) && util2.isFormatElement(parentNode)) {
            let zeroWidth = null;
            if (!oNode.previousSibling || util2.isBreak(oNode.previousSibling)) {
              zeroWidth = util2.createTextNode(util2.zeroWidthSpace);
              oNode.parentNode.insertBefore(zeroWidth, oNode);
            }
            if (!oNode.nextSibling || util2.isBreak(oNode.nextSibling)) {
              zeroWidth = util2.createTextNode(util2.zeroWidthSpace);
              oNode.parentNode.insertBefore(zeroWidth, oNode.nextSibling);
            }
            if (util2._isIgnoreNodeChange(oNode)) {
              oNode = oNode.nextSibling;
              offset = 0;
            }
          }
          this.setRange(oNode, offset, oNode, offset);
        }
        return oNode;
      }
    },
    _setIntoFreeFormat: function(oNode) {
      const parentNode = oNode.parentNode;
      let oNodeChildren, lastONode;
      while (util2.isFormatElement(oNode) || util2.isRangeFormatElement(oNode)) {
        oNodeChildren = oNode.childNodes;
        lastONode = null;
        while (oNodeChildren[0]) {
          lastONode = oNodeChildren[0];
          if (util2.isFormatElement(lastONode) || util2.isRangeFormatElement(lastONode)) {
            this._setIntoFreeFormat(lastONode);
            if (!oNode.parentNode) break;
            oNodeChildren = oNode.childNodes;
            continue;
          }
          parentNode.insertBefore(lastONode, oNode);
        }
        if (oNode.childNodes.length === 0) util2.removeItem(oNode);
        oNode = util2.createElement("BR");
        parentNode.insertBefore(oNode, lastONode.nextSibling);
      }
      return oNode;
    },
    /**
     * @description Delete the currently selected nodes and reset selection range
     * Returns {container: "the last element after deletion", offset: "offset", prevContainer: "previousElementSibling Of the deleted area"}
     * @returns {Object}
     */
    removeNode: function() {
      this._resetRangeToTextNode();
      const range = this.getRange();
      if (range.startContainer === range.endContainer) {
        const fileComponent = util2.getParentElement(range.startContainer, util2.isMediaComponent);
        if (fileComponent) {
          const br = util2.createElement("BR");
          const format = util2.createElement(options.defaultTag);
          format.appendChild(br);
          util2.changeElement(fileComponent, format);
          core.setRange(format, 0, format, 0);
          this.history.push(true);
          return {
            container: format,
            offset: 0,
            prevContainer: null
          };
        }
      }
      const isStartEdge = range.startOffset === 0;
      const isEndEdge = core.isEdgePoint(range.endContainer, range.endOffset, "end");
      let prevContainer = null;
      let startPrevEl = null;
      let endNextEl = null;
      if (isStartEdge) {
        startPrevEl = util2.getFormatElement(range.startContainer);
        if (startPrevEl) {
          prevContainer = startPrevEl.previousElementSibling;
          startPrevEl = prevContainer;
        }
      }
      if (isEndEdge) {
        endNextEl = util2.getFormatElement(range.endContainer);
        endNextEl = endNextEl ? endNextEl.nextElementSibling : endNextEl;
      }
      let container, offset = 0;
      let startCon = range.startContainer;
      let endCon = range.endContainer;
      let startOff = range.startOffset;
      let endOff = range.endOffset;
      const commonCon = range.commonAncestorContainer.nodeType === 3 && range.commonAncestorContainer.parentNode === startCon.parentNode ? startCon.parentNode : range.commonAncestorContainer;
      if (commonCon === startCon && commonCon === endCon) {
        startCon = commonCon.children[startOff];
        endCon = commonCon.children[endOff];
        startOff = endOff = 0;
      }
      if (!startCon || !endCon) return {
        container: commonCon,
        offset: 0
      };
      if (startCon === endCon && range.collapsed) {
        if (startCon.textContent && util2.onlyZeroWidthSpace(startCon.textContent.substr(startOff))) {
          return {
            container: startCon,
            offset: startOff,
            prevContainer: startCon && startCon.parentNode ? startCon : null
          };
        }
      }
      let beforeNode = null;
      let afterNode = null;
      const childNodes = util2.getListChildNodes(commonCon, null);
      let startIndex = util2.getArrayIndex(childNodes, startCon);
      let endIndex = util2.getArrayIndex(childNodes, endCon);
      if (childNodes.length > 0 && startIndex > -1 && endIndex > -1) {
        for (let i = startIndex + 1, startNode = startCon; i >= 0; i--) {
          if (childNodes[i] === startNode.parentNode && childNodes[i].firstChild === startNode && startOff === 0) {
            startIndex = i;
            startNode = startNode.parentNode;
          }
        }
        for (let i = endIndex - 1, endNode = endCon; i > startIndex; i--) {
          if (childNodes[i] === endNode.parentNode && childNodes[i].nodeType === 1) {
            childNodes.splice(i, 1);
            endNode = endNode.parentNode;
            --endIndex;
          }
        }
      } else {
        if (childNodes.length === 0) {
          if (util2.isFormatElement(commonCon) || util2.isRangeFormatElement(commonCon) || util2.isWysiwygDiv(commonCon) || util2.isBreak(commonCon) || util2.isMedia(commonCon)) {
            return {
              container: commonCon,
              offset: 0
            };
          } else if (commonCon.nodeType === 3) {
            return {
              container: commonCon,
              offset: endOff
            };
          }
          childNodes.push(commonCon);
          startCon = endCon = commonCon;
        } else {
          startCon = endCon = childNodes[0];
          if (util2.isBreak(startCon) || util2.onlyZeroWidthSpace(startCon)) {
            return {
              container: util2.isMedia(commonCon) ? commonCon : startCon,
              offset: 0
            };
          }
        }
        startIndex = endIndex = 0;
      }
      for (let i = startIndex; i <= endIndex; i++) {
        const item = childNodes[i];
        if (item.length === 0 || item.nodeType === 3 && item.data === void 0) {
          this._nodeRemoveListItem(item);
          continue;
        }
        if (item === startCon) {
          if (startCon.nodeType === 1) {
            if (util2.isComponent(startCon)) continue;
            else beforeNode = util2.createTextNode(startCon.textContent);
          } else {
            if (item === endCon) {
              beforeNode = util2.createTextNode(startCon.substringData(0, startOff) + endCon.substringData(endOff, endCon.length - endOff));
              offset = startOff;
            } else {
              beforeNode = util2.createTextNode(startCon.substringData(0, startOff));
            }
          }
          if (beforeNode.length > 0) {
            startCon.data = beforeNode.data;
          } else {
            this._nodeRemoveListItem(startCon);
          }
          if (item === endCon) break;
          continue;
        }
        if (item === endCon) {
          if (endCon.nodeType === 1) {
            if (util2.isComponent(endCon)) continue;
            else afterNode = util2.createTextNode(endCon.textContent);
          } else {
            afterNode = util2.createTextNode(endCon.substringData(endOff, endCon.length - endOff));
          }
          if (afterNode.length > 0) {
            endCon.data = afterNode.data;
          } else {
            this._nodeRemoveListItem(endCon);
          }
          continue;
        }
        this._nodeRemoveListItem(item);
      }
      const endUl = util2.getParentElement(endCon, "ul");
      const startLi = util2.getParentElement(startCon, "li");
      if (endUl && startLi && startLi.contains(endUl)) {
        container = endUl.previousSibling;
        offset = container.textContent.length;
      } else {
        container = endCon && endCon.parentNode ? endCon : startCon && startCon.parentNode ? startCon : range.endContainer || range.startContainer;
        offset = !isStartEdge && !isEndEdge ? offset : isEndEdge ? container.textContent.length : 0;
      }
      if (!util2.isWysiwygDiv(container) && container.childNodes.length === 0) {
        const rc = util2.removeItemAllParents(container, null, null);
        if (rc) container = rc.sc || rc.ec || context.element.wysiwyg;
      }
      if (!util2.getFormatElement(container) && !(startCon && startCon.parentNode)) {
        if (endNextEl) {
          container = endNextEl;
          offset = 0;
        } else if (startPrevEl) {
          container = startPrevEl;
          offset = 1;
        }
      }
      this.setRange(container, offset, container, offset);
      this.history.push(true);
      return {
        container,
        offset,
        prevContainer
      };
    },
    _nodeRemoveListItem: function(item) {
      const format = util2.getFormatElement(item, null);
      util2.removeItem(item);
      if (!util2.isListCell(format)) return;
      util2.removeItemAllParents(format, null, null);
      if (format && util2.isList(format.firstChild)) {
        format.insertBefore(util2.createTextNode(util2.zeroWidthSpace), format.firstChild);
      }
    },
    /**
     * @description Appended all selected format Element to the argument element and insert
     * @param {Element} rangeElement Element of wrap the arguments (BLOCKQUOTE...)
     */
    applyRangeFormatElement: function(rangeElement) {
      this.getRange_addLine(this.getRange(), null);
      const rangeLines = this.getSelectedElementsAndComponents(false);
      if (!rangeLines || rangeLines.length === 0) return;
      linesLoop:
        for (let i = 0, len = rangeLines.length, line, nested, fEl, lEl, f, l; i < len; i++) {
          line = rangeLines[i];
          if (!util2.isListCell(line)) continue;
          nested = line.lastElementChild;
          if (nested && util2.isListCell(line.nextElementSibling) && rangeLines.indexOf(line.nextElementSibling) > -1) {
            lEl = nested.lastElementChild;
            if (rangeLines.indexOf(lEl) > -1) {
              let list = null;
              while (list = lEl.lastElementChild) {
                if (util2.isList(list)) {
                  if (rangeLines.indexOf(list.lastElementChild) > -1) {
                    lEl = list.lastElementChild;
                  } else {
                    continue linesLoop;
                  }
                }
              }
              fEl = nested.firstElementChild;
              f = rangeLines.indexOf(fEl);
              l = rangeLines.indexOf(lEl);
              rangeLines.splice(f, l - f + 1);
              len = rangeLines.length;
              continue;
            }
          }
        }
      let last = rangeLines[rangeLines.length - 1];
      let standTag, beforeTag, pElement;
      if (util2.isRangeFormatElement(last) || util2.isFormatElement(last)) {
        standTag = last;
      } else {
        standTag = util2.getRangeFormatElement(last, null) || util2.getFormatElement(last, null);
      }
      if (util2.isCell(standTag)) {
        beforeTag = null;
        pElement = standTag;
      } else {
        beforeTag = standTag.nextSibling;
        pElement = standTag.parentNode;
      }
      let parentDepth = util2.getElementDepth(standTag);
      let listParent = null;
      const lineArr = [];
      const removeItems = function(parent, origin, before) {
        let cc = null;
        if (parent !== origin && !util2.isTable(origin)) {
          if (origin && util2.getElementDepth(parent) === util2.getElementDepth(origin)) return before;
          cc = util2.removeItemAllParents(origin, null, parent);
        }
        return cc ? cc.ec : before;
      };
      for (let i = 0, len = rangeLines.length, line, originParent, depth, before, nextLine, nextList, nested; i < len; i++) {
        line = rangeLines[i];
        originParent = line.parentNode;
        if (!originParent || rangeElement.contains(originParent)) continue;
        depth = util2.getElementDepth(line);
        if (util2.isList(originParent)) {
          if (listParent === null) {
            if (nextList) {
              listParent = nextList;
              nested = true;
              nextList = null;
            } else {
              listParent = originParent.cloneNode(false);
            }
          }
          lineArr.push(line);
          nextLine = rangeLines[i + 1];
          if (i === len - 1 || nextLine && nextLine.parentNode !== originParent) {
            if (nextLine && line.contains(nextLine.parentNode)) {
              nextList = nextLine.parentNode.cloneNode(false);
            }
            let list = originParent.parentNode, p;
            while (util2.isList(list)) {
              p = util2.createElement(list.nodeName);
              p.appendChild(listParent);
              listParent = p;
              list = list.parentNode;
            }
            const edge2 = this.detachRangeFormatElement(originParent, lineArr, null, true, true);
            if (parentDepth >= depth) {
              parentDepth = depth;
              pElement = edge2.cc;
              beforeTag = removeItems(pElement, originParent, edge2.ec);
              if (beforeTag) pElement = beforeTag.parentNode;
            } else if (pElement === edge2.cc) {
              beforeTag = edge2.ec;
            }
            if (pElement !== edge2.cc) {
              before = removeItems(pElement, edge2.cc, before);
              if (before !== void 0) beforeTag = before;
              else beforeTag = edge2.cc;
            }
            for (let c = 0, cLen = edge2.removeArray.length; c < cLen; c++) {
              listParent.appendChild(edge2.removeArray[c]);
            }
            if (!nested) rangeElement.appendChild(listParent);
            if (nextList) edge2.removeArray[edge2.removeArray.length - 1].appendChild(nextList);
            listParent = null;
            nested = false;
          }
        } else {
          if (parentDepth >= depth) {
            parentDepth = depth;
            pElement = originParent;
            beforeTag = line.nextSibling;
          }
          rangeElement.appendChild(line);
          if (pElement !== originParent) {
            before = removeItems(pElement, originParent);
            if (before !== void 0) beforeTag = before;
          }
        }
      }
      this.effectNode = null;
      util2.mergeSameTags(rangeElement, null, false);
      util2.mergeNestedTags(rangeElement, (function(current) {
        return this.isList(current);
      }).bind(util2));
      if (beforeTag && util2.getElementDepth(beforeTag) > 0 && (util2.isList(beforeTag.parentNode) || util2.isList(beforeTag.parentNode.parentNode))) {
        const depthFormat = util2.getParentElement(beforeTag, (function(current) {
          return this.isRangeFormatElement(current) && !this.isList(current);
        }).bind(util2));
        const splitRange = util2.splitElement(beforeTag, null, !depthFormat ? 0 : util2.getElementDepth(depthFormat) + 1);
        splitRange.parentNode.insertBefore(rangeElement, splitRange);
      } else {
        pElement.insertBefore(rangeElement, beforeTag);
        removeItems(rangeElement, beforeTag);
      }
      const edge = util2.getEdgeChildNodes(rangeElement.firstElementChild, rangeElement.lastElementChild);
      if (rangeLines.length > 1) {
        this.setRange(edge.sc, 0, edge.ec, edge.ec.textContent.length);
      } else {
        this.setRange(edge.ec, edge.ec.textContent.length, edge.ec, edge.ec.textContent.length);
      }
      this.history.push(false);
    },
    /**
     * @description The elements of the "selectedFormats" array are detached from the "rangeElement" element. ("LI" tags are converted to "P" tags)
     * When "selectedFormats" is null, all elements are detached and return {cc: parentNode, sc: nextSibling, ec: previousSibling, removeArray: [Array of removed elements]}.
     * @param {Element} rangeElement Range format element (PRE, BLOCKQUOTE, OL, UL...)
     * @param {Array|null} selectedFormats Array of format elements (P, DIV, LI...) to remove.
     * If null, Applies to all elements and return {cc: parentNode, sc: nextSibling, ec: previousSibling}
     * @param {Element|null} newRangeElement The node(rangeElement) to replace the currently wrapped node.
     * @param {Boolean} remove If true, deleted without detached.
     * @param {Boolean} notHistoryPush When true, it does not update the history stack and the selection object and return EdgeNodes (util.getEdgeChildNodes)
     * @returns {Object}
     */
    detachRangeFormatElement: function(rangeElement, selectedFormats, newRangeElement, remove, notHistoryPush) {
      const range = this.getRange();
      let so = range.startOffset;
      let eo = range.endOffset;
      let children = util2.getListChildNodes(rangeElement, function(current) {
        return current.parentNode === rangeElement;
      });
      let parent = rangeElement.parentNode;
      let firstNode = null;
      let lastNode = null;
      let rangeEl = rangeElement.cloneNode(false);
      const removeArray = [];
      const newList = util2.isList(newRangeElement);
      let insertedNew = false;
      let reset = false;
      let moveComplete = false;
      function appendNode(parent2, insNode, sibling, originNode) {
        if (util2.onlyZeroWidthSpace(insNode)) {
          insNode.innerHTML = util2.zeroWidthSpace;
          so = eo = 1;
        }
        if (insNode.nodeType === 3) {
          parent2.insertBefore(insNode, sibling);
          return insNode;
        }
        const insChildren = (moveComplete ? insNode : originNode).childNodes;
        let format = insNode.cloneNode(false);
        let first = null;
        let c = null;
        while (insChildren[0]) {
          c = insChildren[0];
          if (util2._notTextNode(c) && !util2.isBreak(c) && !util2.isListCell(format)) {
            if (format.childNodes.length > 0) {
              if (!first) first = format;
              parent2.insertBefore(format, sibling);
              format = insNode.cloneNode(false);
            }
            parent2.insertBefore(c, sibling);
            if (!first) first = c;
          } else {
            format.appendChild(c);
          }
        }
        if (format.childNodes.length > 0) {
          if (util2.isListCell(parent2) && util2.isListCell(format) && util2.isList(sibling)) {
            if (newList) {
              first = sibling;
              while (sibling) {
                format.appendChild(sibling);
                sibling = sibling.nextSibling;
              }
              parent2.parentNode.insertBefore(format, parent2.nextElementSibling);
            } else {
              const originNext = originNode.nextElementSibling;
              const detachRange = util2.detachNestedList(originNode, false);
              if (rangeElement !== detachRange || originNext !== originNode.nextElementSibling) {
                const fChildren = format.childNodes;
                while (fChildren[0]) {
                  originNode.appendChild(fChildren[0]);
                }
                rangeElement = detachRange;
                reset = true;
              }
            }
          } else {
            parent2.insertBefore(format, sibling);
          }
          if (!first) first = format;
        }
        return first;
      }
      for (let i = 0, len = children.length, insNode, lineIndex, next; i < len; i++) {
        insNode = children[i];
        if (insNode.nodeType === 3 && util2.isList(rangeEl)) continue;
        moveComplete = false;
        if (remove && i === 0) {
          if (!selectedFormats || selectedFormats.length === len || selectedFormats[0] === insNode) {
            firstNode = rangeElement.previousSibling;
          } else {
            firstNode = rangeEl;
          }
        }
        if (selectedFormats) lineIndex = selectedFormats.indexOf(insNode);
        if (selectedFormats && lineIndex === -1) {
          if (!rangeEl) rangeEl = rangeElement.cloneNode(false);
          rangeEl.appendChild(insNode);
        } else {
          if (selectedFormats) next = selectedFormats[lineIndex + 1];
          if (rangeEl && rangeEl.children.length > 0) {
            parent.insertBefore(rangeEl, rangeElement);
            rangeEl = null;
          }
          if (!newList && util2.isListCell(insNode)) {
            if (next && util2.getElementDepth(insNode) !== util2.getElementDepth(next) && (util2.isListCell(parent) || util2.getArrayItem(insNode.children, util2.isList, false))) {
              const insNext = insNode.nextElementSibling;
              const detachRange = util2.detachNestedList(insNode, false);
              if (rangeElement !== detachRange || insNext !== insNode.nextElementSibling) {
                rangeElement = detachRange;
                reset = true;
              }
            } else {
              const inner = insNode;
              insNode = util2.createElement(remove ? inner.nodeName : util2.isList(rangeElement.parentNode) || util2.isListCell(rangeElement.parentNode) ? "LI" : util2.isCell(rangeElement.parentNode) ? "DIV" : options.defaultTag);
              const isCell = util2.isListCell(insNode);
              const innerChildren = inner.childNodes;
              while (innerChildren[0]) {
                if (util2.isList(innerChildren[0]) && !isCell) break;
                insNode.appendChild(innerChildren[0]);
              }
              util2.copyFormatAttributes(insNode, inner);
              moveComplete = true;
            }
          } else {
            insNode = insNode.cloneNode(false);
          }
          if (!reset) {
            if (!remove) {
              if (newRangeElement) {
                if (!insertedNew) {
                  parent.insertBefore(newRangeElement, rangeElement);
                  insertedNew = true;
                }
                insNode = appendNode(newRangeElement, insNode, null, children[i]);
              } else {
                insNode = appendNode(parent, insNode, rangeElement, children[i]);
              }
              if (!reset) {
                if (selectedFormats) {
                  lastNode = insNode;
                  if (!firstNode) {
                    firstNode = insNode;
                  }
                } else if (!firstNode) {
                  firstNode = lastNode = insNode;
                }
              }
            } else {
              removeArray.push(insNode);
              util2.removeItem(children[i]);
            }
            if (reset) {
              reset = moveComplete = false;
              children = util2.getListChildNodes(rangeElement, function(current) {
                return current.parentNode === rangeElement;
              });
              rangeEl = rangeElement.cloneNode(false);
              parent = rangeElement.parentNode;
              i = -1;
              len = children.length;
              continue;
            }
          }
        }
      }
      const rangeParent = rangeElement.parentNode;
      let rangeRight = rangeElement.nextSibling;
      if (rangeEl && rangeEl.children.length > 0) {
        rangeParent.insertBefore(rangeEl, rangeRight);
      }
      if (newRangeElement) firstNode = newRangeElement.previousSibling;
      else if (!firstNode) firstNode = rangeElement.previousSibling;
      rangeRight = rangeElement.nextSibling !== rangeEl ? rangeElement.nextSibling : rangeEl ? rangeEl.nextSibling : null;
      if (rangeElement.children.length === 0 || rangeElement.textContent.length === 0) {
        util2.removeItem(rangeElement);
      } else {
        util2.removeEmptyNode(rangeElement, null, false);
      }
      let edge = null;
      if (remove) {
        edge = {
          cc: rangeParent,
          sc: firstNode,
          so,
          ec: rangeRight,
          eo,
          removeArray
        };
      } else {
        if (!firstNode) firstNode = lastNode;
        if (!lastNode) lastNode = firstNode;
        const childEdge = util2.getEdgeChildNodes(firstNode, lastNode.parentNode ? firstNode : lastNode);
        edge = {
          cc: (childEdge.sc || childEdge.ec).parentNode,
          sc: childEdge.sc,
          so,
          ec: childEdge.ec,
          eo,
          removeArray: null
        };
      }
      this.effectNode = null;
      if (notHistoryPush) return edge;
      if (!remove && edge) {
        if (!selectedFormats) {
          this.setRange(edge.sc, 0, edge.sc, 0);
        } else {
          this.setRange(edge.sc, so, edge.ec, eo);
        }
      }
      this.history.push(false);
    },
    /**
     * @description "selectedFormats" array are detached from the list element.
     * The return value is applied when the first and last lines of "selectedFormats" are "LI" respectively.
     * @param {Array} selectedFormats Array of format elements (LI, P...) to remove.
     * @param {Boolean} remove If true, deleted without detached.
     * @returns {Object} {sc: <LI>, ec: <LI>}.
     */
    detachList: function(selectedFormats, remove) {
      let rangeArr = {};
      let listFirst = false;
      let listLast = false;
      let first = null;
      let last = null;
      const passComponent = (function(current) {
        return !this.isComponent(current);
      }).bind(util2);
      for (let i = 0, len = selectedFormats.length, r, o, lastIndex, isList; i < len; i++) {
        lastIndex = i === len - 1;
        o = util2.getRangeFormatElement(selectedFormats[i], passComponent);
        isList = util2.isList(o);
        if (!r && isList) {
          r = o;
          rangeArr = { r, f: [util2.getParentElement(selectedFormats[i], "LI")] };
          if (i === 0) listFirst = true;
        } else if (r && isList) {
          if (r !== o) {
            const edge = this.detachRangeFormatElement(rangeArr.f[0].parentNode, rangeArr.f, null, remove, true);
            o = selectedFormats[i].parentNode;
            if (listFirst) {
              first = edge.sc;
              listFirst = false;
            }
            if (lastIndex) last = edge.ec;
            if (isList) {
              r = o;
              rangeArr = { r, f: [util2.getParentElement(selectedFormats[i], "LI")] };
              if (lastIndex) listLast = true;
            } else {
              r = null;
            }
          } else {
            rangeArr.f.push(util2.getParentElement(selectedFormats[i], "LI"));
            if (lastIndex) listLast = true;
          }
        }
        if (lastIndex && util2.isList(r)) {
          const edge = this.detachRangeFormatElement(rangeArr.f[0].parentNode, rangeArr.f, null, remove, true);
          if (listLast || len === 1) last = edge.ec;
          if (listFirst) first = edge.sc || last;
        }
      }
      return {
        sc: first,
        ec: last
      };
    },
    /**
     * @description Add, update, and delete nodes from selected text.
     * 1. If there is a node in the "appendNode" argument, a node with the same tags and attributes as "appendNode" is added to the selection text.
     * 2. If it is in the same tag, only the tag's attributes are changed without adding a tag.
     * 3. If the "appendNode" argument is null, the node of the selection is update or remove without adding a new node.
     * 4. The same style as the style attribute of the "styleArray" argument is deleted.
     *    (Styles should be put with attribute names from css. ["background-color"])
     * 5. The same class name as the class attribute of the "styleArray" argument is deleted.
     *    (The class name is preceded by "." [".className"])
     * 6. Use a list of styles and classes of "appendNode" in "styleArray" to avoid duplicate property values.
     * 7. If a node with all styles and classes removed has the same tag name as "appendNode" or "removeNodeArray", or "appendNode" is null, that node is deleted.
     * 8. Regardless of the style and class of the node, the tag with the same name as the "removeNodeArray" argument value is deleted.
     * 9. If the "strictRemove" argument is true, only nodes with all styles and classes removed from the nodes of "removeNodeArray" are removed.
     *10. It won't work if the parent node has the same class and same value style.
     *    However, if there is a value in "removeNodeArray", it works and the text node is separated even if there is no node to replace.
     * @param {Element|null} appendNode The element to be added to the selection. If it is null, only delete the node.
     * @param {Array|null} styleArray The style or className attribute name Array to check (['font-size'], ['.className'], ['font-family', 'color', '.className']...])
     * @param {Array|null} removeNodeArray An array of node names to remove types from, remove all formats when "appendNode" is null and there is an empty array or null value. (['span'], ['strong', 'em'] ...])
     * @param {Boolean|null} strictRemove If true, only nodes with all styles and classes removed from the nodes of "removeNodeArray" are removed.
     */
    nodeChange: function(appendNode, styleArray, removeNodeArray, strictRemove) {
      this._resetRangeToTextNode();
      let range = this.getRange_addLine(this.getRange(), null);
      styleArray = styleArray && styleArray.length > 0 ? styleArray : false;
      removeNodeArray = removeNodeArray && removeNodeArray.length > 0 ? removeNodeArray : false;
      const isRemoveNode = !appendNode;
      const isRemoveFormat = isRemoveNode && !removeNodeArray && !styleArray;
      let startCon = range.startContainer;
      let startOff = range.startOffset;
      let endCon = range.endContainer;
      let endOff = range.endOffset;
      if (isRemoveFormat && range.collapsed && util2.isFormatElement(startCon.parentNode) || startCon === endCon && startCon.nodeType === 1 && util2.isNonEditable(startCon)) {
        const format = startCon.parentNode;
        if (!util2.isListCell(format) || !util2.getValues(format.style).some((function(k) {
          return this._listKebab.indexOf(k) > -1;
        }).bind(this))) return;
      }
      if (range.collapsed && !isRemoveFormat) {
        if (startCon.nodeType === 1 && !util2.isBreak(startCon) && !util2.isComponent(startCon)) {
          let afterNode = null;
          const focusNode = startCon.childNodes[startOff];
          if (focusNode) {
            if (!focusNode.nextSibling) {
              afterNode = null;
            } else {
              afterNode = util2.isBreak(focusNode) ? focusNode : focusNode.nextSibling;
            }
          }
          const zeroWidth = util2.createTextNode(util2.zeroWidthSpace);
          startCon.insertBefore(zeroWidth, afterNode);
          this.setRange(zeroWidth, 1, zeroWidth, 1);
          range = this.getRange();
          startCon = range.startContainer;
          startOff = range.startOffset;
          endCon = range.endContainer;
          endOff = range.endOffset;
        }
      }
      if (util2.isFormatElement(startCon)) {
        startCon = startCon.childNodes[startOff] || startCon.firstChild;
        startOff = 0;
      }
      if (util2.isFormatElement(endCon)) {
        endCon = endCon.childNodes[endOff] || endCon.lastChild;
        endOff = endCon.textContent.length;
      }
      if (isRemoveNode) {
        appendNode = util2.createElement("DIV");
      }
      const wRegExp = _w.RegExp;
      const newNodeName = appendNode.nodeName;
      if (!isRemoveFormat && startCon === endCon && !removeNodeArray && appendNode) {
        let sNode = startCon;
        let checkCnt = 0;
        const checkAttrs = [];
        const checkStyles = appendNode.style;
        for (let i = 0, len = checkStyles.length; i < len; i++) {
          checkAttrs.push(checkStyles[i]);
        }
        const ckeckClasses = appendNode.classList;
        for (let i = 0, len = ckeckClasses.length; i < len; i++) {
          checkAttrs.push("." + ckeckClasses[i]);
        }
        if (checkAttrs.length > 0) {
          while (!util2.isFormatElement(sNode) && !util2.isWysiwygDiv(sNode)) {
            for (let i = 0; i < checkAttrs.length; i++) {
              if (sNode.nodeType === 1) {
                const s = checkAttrs[i];
                const classReg = /^\./.test(s) ? new wRegExp("\\s*" + s.replace(/^\./, "") + "(\\s+|$)", "ig") : false;
                const styleCheck = isRemoveNode ? !!sNode.style[s] : !!sNode.style[s] && !!appendNode.style[s] && sNode.style[s] === appendNode.style[s];
                const classCheck = classReg === false ? false : isRemoveNode ? !!sNode.className.match(classReg) : !!sNode.className.match(classReg) && !!appendNode.className.match(classReg);
                if (styleCheck || classCheck) {
                  checkCnt++;
                }
              }
            }
            sNode = sNode.parentNode;
          }
          if (checkCnt >= checkAttrs.length) return;
        }
      }
      let start = {}, end = {};
      let newNode, styleRegExp = "", classRegExp = "", removeNodeRegExp = "";
      if (styleArray) {
        for (let i = 0, len = styleArray.length, s; i < len; i++) {
          s = styleArray[i];
          if (/^\./.test(s)) {
            classRegExp += (classRegExp ? "|" : "\\s*(?:") + s.replace(/^\./, "");
          } else {
            styleRegExp += (styleRegExp ? "|" : "(?:;|^|\\s)(?:") + s;
          }
        }
        if (styleRegExp) {
          styleRegExp += ")\\s*:[^;]*\\s*(?:;|$)";
          styleRegExp = new wRegExp(styleRegExp, "ig");
        }
        if (classRegExp) {
          classRegExp += ")(?=\\s+|$)";
          classRegExp = new wRegExp(classRegExp, "ig");
        }
      }
      if (removeNodeArray) {
        removeNodeRegExp = "^(?:" + removeNodeArray[0];
        for (let i = 1; i < removeNodeArray.length; i++) {
          removeNodeRegExp += "|" + removeNodeArray[i];
        }
        removeNodeRegExp += ")$";
        removeNodeRegExp = new wRegExp(removeNodeRegExp, "i");
      }
      const wBoolean = _w.Boolean;
      const _removeCheck = { v: false };
      const validation = function(checkNode) {
        const vNode = checkNode.cloneNode(false);
        if (vNode.nodeType === 3 || util2.isBreak(vNode)) return vNode;
        if (isRemoveFormat) return null;
        const tagRemove = !removeNodeRegExp && isRemoveNode || removeNodeRegExp && removeNodeRegExp.test(vNode.nodeName);
        if (tagRemove && !strictRemove) {
          _removeCheck.v = true;
          return null;
        }
        const originStyle = vNode.style.cssText;
        let style = "";
        if (styleRegExp && originStyle.length > 0) {
          style = originStyle.replace(styleRegExp, "").trim();
          if (style !== originStyle) _removeCheck.v = true;
        }
        const originClasses = vNode.className;
        let classes = "";
        if (classRegExp && originClasses.length > 0) {
          classes = originClasses.replace(classRegExp, "").trim();
          if (classes !== originClasses) _removeCheck.v = true;
        }
        if (isRemoveNode) {
          if ((classRegExp || !originClasses) && (styleRegExp || !originStyle) && !style && !classes && tagRemove) {
            _removeCheck.v = true;
            return null;
          }
        }
        if (style || classes || vNode.nodeName !== newNodeName || wBoolean(styleRegExp) !== wBoolean(originStyle) || wBoolean(classRegExp) !== wBoolean(originClasses)) {
          if (styleRegExp && originStyle.length > 0) vNode.style.cssText = style;
          if (!vNode.style.cssText) {
            vNode.removeAttribute("style");
          }
          if (classRegExp && originClasses.length > 0) vNode.className = classes.trim();
          if (!vNode.className.trim()) {
            vNode.removeAttribute("class");
          }
          if (!vNode.style.cssText && !vNode.className && (vNode.nodeName === newNodeName || tagRemove)) {
            _removeCheck.v = true;
            return null;
          }
          return vNode;
        }
        _removeCheck.v = true;
        return null;
      };
      const lineNodes = this.getSelectedElements(null);
      range = this.getRange();
      startCon = range.startContainer;
      startOff = range.startOffset;
      endCon = range.endContainer;
      endOff = range.endOffset;
      if (!util2.getFormatElement(startCon, null)) {
        startCon = util2.getChildElement(lineNodes[0], function(current) {
          return current.nodeType === 3;
        }, false);
        startOff = 0;
      }
      if (!util2.getFormatElement(endCon, null)) {
        endCon = util2.getChildElement(lineNodes[lineNodes.length - 1], function(current) {
          return current.nodeType === 3;
        }, false);
        endOff = endCon.textContent.length;
      }
      const oneLine = util2.getFormatElement(startCon, null) === util2.getFormatElement(endCon, null);
      const endLength = lineNodes.length - (oneLine ? 0 : 1);
      newNode = appendNode.cloneNode(false);
      const isRemoveAnchor = isRemoveFormat || isRemoveNode && (function(arr) {
        for (let n = 0, len = arr.length; n < len; n++) {
          if (util2._isMaintainedNode(arr[n]) || util2._isSizeNode(arr[n])) return true;
        }
        return false;
      })(removeNodeArray);
      const isSizeNode = isRemoveNode || util2._isSizeNode(newNode);
      const _getMaintainedNode = this._util_getMaintainedNode.bind(util2, isRemoveAnchor, isSizeNode);
      const _isMaintainedNode = this._util_isMaintainedNode.bind(util2, isRemoveAnchor, isSizeNode);
      if (oneLine) {
        if (this._resetCommonListCell(lineNodes[0], styleArray)) range = this.setRange(startCon, startOff, endCon, endOff);
        const newRange = this._nodeChange_oneLine(lineNodes[0], newNode, validation, startCon, startOff, endCon, endOff, isRemoveFormat, isRemoveNode, range.collapsed, _removeCheck, _getMaintainedNode, _isMaintainedNode);
        start.container = newRange.startContainer;
        start.offset = newRange.startOffset;
        end.container = newRange.endContainer;
        end.offset = newRange.endOffset;
        if (start.container === end.container && util2.onlyZeroWidthSpace(start.container)) {
          start.offset = end.offset = 1;
        }
        this._setCommonListStyle(newRange.ancestor, null);
      } else {
        let appliedCommonList = false;
        if (endLength > 0 && this._resetCommonListCell(lineNodes[endLength], styleArray)) appliedCommonList = true;
        if (this._resetCommonListCell(lineNodes[0], styleArray)) appliedCommonList = true;
        if (appliedCommonList) this.setRange(startCon, startOff, endCon, endOff);
        if (endLength > 0) {
          newNode = appendNode.cloneNode(false);
          end = this._nodeChange_endLine(lineNodes[endLength], newNode, validation, endCon, endOff, isRemoveFormat, isRemoveNode, _removeCheck, _getMaintainedNode, _isMaintainedNode);
        }
        for (let i = endLength - 1, newRange; i > 0; i--) {
          this._resetCommonListCell(lineNodes[i], styleArray);
          newNode = appendNode.cloneNode(false);
          newRange = this._nodeChange_middleLine(lineNodes[i], newNode, validation, isRemoveFormat, isRemoveNode, _removeCheck, end.container);
          if (newRange.endContainer && newRange.ancestor.contains(newRange.endContainer)) {
            end.ancestor = null;
            end.container = newRange.endContainer;
          }
          this._setCommonListStyle(newRange.ancestor, null);
        }
        newNode = appendNode.cloneNode(false);
        start = this._nodeChange_startLine(lineNodes[0], newNode, validation, startCon, startOff, isRemoveFormat, isRemoveNode, _removeCheck, _getMaintainedNode, _isMaintainedNode, end.container);
        if (start.endContainer) {
          end.ancestor = null;
          end.container = start.endContainer;
        }
        if (endLength <= 0) {
          end = start;
        } else if (!end.container) {
          end.ancestor = null;
          end.container = start.container;
          end.offset = start.container.textContent.length;
        }
        this._setCommonListStyle(start.ancestor, null);
        this._setCommonListStyle(end.ancestor || util2.getFormatElement(end.container), null);
      }
      this.controllersOff();
      this.setRange(start.container, start.offset, end.container, end.offset);
      this.history.push(false);
    },
    /**
     * @description Reset common style of list cell
     * @param {Element} el List cell element. <li>
     * @param {Array|null} styleArray Style array
     * @private
     */
    _resetCommonListCell: function(el, styleArray) {
      if (!util2.isListCell(el)) return;
      if (!styleArray) styleArray = this._listKebab;
      const children = util2.getArrayItem(el.childNodes, function(current) {
        return !util2.isBreak(current);
      }, true);
      const elStyles = el.style;
      const ec = [], ek = [], elKeys = util2.getValues(elStyles);
      for (let i = 0, len = this._listKebab.length; i < len; i++) {
        if (elKeys.indexOf(this._listKebab[i]) > -1 && styleArray.indexOf(this._listKebab[i]) > -1) {
          ec.push(this._listCamel[i]);
          ek.push(this._listKebab[i]);
        }
      }
      if (!ec.length) return;
      const refer = util2.createElement("SPAN");
      for (let i = 0, len = ec.length; i < len; i++) {
        refer.style[ec[i]] = elStyles[ek[i]];
        elStyles.removeProperty(ek[i]);
      }
      let sel = refer.cloneNode(false);
      let r = null, appliedEl = false;
      for (let i = 0, len = children.length, c, s; i < len; i++) {
        c = children[i];
        if (options._textTagsMap[c.nodeName.toLowerCase()]) continue;
        s = util2.getValues(c.style);
        if (s.length === 0 || ec.some(function(k) {
          return s.indexOf(k) === -1;
        }) && s.some(function(k) {
          ec.indexOf(k) > -1;
        })) {
          r = c.nextSibling;
          sel.appendChild(c);
        } else if (sel.childNodes.length > 0) {
          el.insertBefore(sel, r);
          sel = refer.cloneNode(false);
          r = null;
          appliedEl = true;
        }
      }
      if (sel.childNodes.length > 0) {
        el.insertBefore(sel, r);
        appliedEl = true;
      }
      if (!elStyles.length) {
        el.removeAttribute("style");
      }
      return appliedEl;
    },
    /**
     * @description If certain styles are applied to all child nodes of the list cell, the style of the list cell is also changed. (bold, color, size)
     * @param {Element} el List cell element. <li>
     * @param {Element|null} child Variable for recursive call. ("null" on the first call)
     * @private
     */
    _setCommonListStyle: function(el, child) {
      if (!util2.isListCell(el)) return;
      const children = util2.getArrayItem((child || el).childNodes, function(current) {
        return !util2.isBreak(current);
      }, true);
      child = children[0];
      if (!child || children.length > 1 || child.nodeType !== 1) return;
      const childStyle = child.style;
      const elStyle = el.style;
      const nodeName = child.nodeName.toLowerCase();
      let appliedEl = false;
      if (options._textTagsMap[nodeName] === options._defaultCommand.bold.toLowerCase()) elStyle.fontWeight = "bold";
      if (options._textTagsMap[nodeName] === options._defaultCommand.italic.toLowerCase()) elStyle.fontStyle = "italic";
      const cKeys = util2.getValues(childStyle);
      if (cKeys.length > 0) {
        for (let i = 0, len = this._listCamel.length; i < len; i++) {
          if (cKeys.indexOf(this._listKebab[i]) > -1) {
            elStyle[this._listCamel[i]] = childStyle[this._listCamel[i]];
            childStyle.removeProperty(this._listKebab[i]);
            appliedEl = true;
          }
        }
      }
      this._setCommonListStyle(el, child);
      if (!appliedEl) return;
      if (!childStyle.length) {
        const ch = child.childNodes;
        const p = child.parentNode;
        const n = child.nextSibling;
        while (ch.length > 0) {
          p.insertBefore(ch[0], n);
        }
        util2.removeItem(child);
      }
    },
    /**
     * @description Strip remove node
     * @param {Node} removeNode The remove node
     * @private
     */
    _stripRemoveNode: function(removeNode) {
      const element = removeNode.parentNode;
      if (!removeNode || removeNode.nodeType === 3 || !element) return;
      const children = removeNode.childNodes;
      while (children[0]) {
        element.insertBefore(children[0], removeNode);
      }
      element.removeChild(removeNode);
    },
    /**
     * @description Return the parent maintained tag. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_getMaintainedNode: function(_isRemove, _isSizeNode, element) {
      if (!element || _isRemove) return null;
      return this.getParentElement(element, this._isMaintainedNode.bind(this)) || (!_isSizeNode ? this.getParentElement(element, this._isSizeNode.bind(this)) : null);
    },
    /**
     * @description Check if element is a tag that should be persisted. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_isMaintainedNode: function(_isRemove, _isSizeNode, element) {
      if (!element || _isRemove || element.nodeType !== 1) return false;
      const anchor = this._isMaintainedNode(element);
      return this.getParentElement(element, this._isMaintainedNode.bind(this)) ? anchor : anchor || (!_isSizeNode ? this._isSizeNode(element) : false);
    },
    /**
     * @description wraps text nodes of line selected text.
     * @param {Element} element The node of the line that contains the selected text node.
     * @param {Element} newInnerNode The dom that will wrap the selected text area
     * @param {Function} validation Check if the node should be stripped.
     * @param {Node} startCon The startContainer property of the selection object.
     * @param {Number} startOff The startOffset property of the selection object.
     * @param {Node} endCon The endContainer property of the selection object.
     * @param {Number} endOff The endOffset property of the selection object.
     * @param {Boolean} isRemoveFormat Is the remove all formats command?
     * @param {Boolean} isRemoveNode "newInnerNode" is remove node?
     * @param {Boolean} collapsed range.collapsed
     * @returns {{ancestor: *, startContainer: *, startOffset: *, endContainer: *, endOffset: *}}
     * @private
     */
    _nodeChange_oneLine: function(element, newInnerNode, validation, startCon, startOff, endCon, endOff, isRemoveFormat, isRemoveNode, collapsed, _removeCheck, _getMaintainedNode, _isMaintainedNode) {
      let parentCon = startCon.parentNode;
      while (!parentCon.nextSibling && !parentCon.previousSibling && !util2.isFormatElement(parentCon.parentNode) && !util2.isWysiwygDiv(parentCon.parentNode)) {
        if (parentCon.nodeName === newInnerNode.nodeName) break;
        parentCon = parentCon.parentNode;
      }
      if (!isRemoveNode && parentCon === endCon.parentNode && parentCon.nodeName === newInnerNode.nodeName) {
        if (util2.onlyZeroWidthSpace(startCon.textContent.slice(0, startOff)) && util2.onlyZeroWidthSpace(endCon.textContent.slice(endOff))) {
          const children = parentCon.childNodes;
          let sameTag = true;
          for (let i = 0, len = children.length, c, s, e, z; i < len; i++) {
            c = children[i];
            z = !util2.onlyZeroWidthSpace(c);
            if (c === startCon) {
              s = true;
              continue;
            }
            if (c === endCon) {
              e = true;
              continue;
            }
            if (!s && z || s && e && z) {
              sameTag = false;
              break;
            }
          }
          if (sameTag) {
            util2.copyTagAttributes(parentCon, newInnerNode);
            return {
              ancestor: element,
              startContainer: startCon,
              startOffset: startOff,
              endContainer: endCon,
              endOffset: endOff
            };
          }
        }
      }
      _removeCheck.v = false;
      const el = element;
      const nNodeArray = [newInnerNode];
      const pNode = element.cloneNode(false);
      const isSameNode = startCon === endCon;
      let startContainer = startCon;
      let startOffset = startOff;
      let endContainer = endCon;
      let endOffset = endOff;
      let startPass = false;
      let endPass = false;
      let pCurrent, newNode, appendNode, cssText, anchorNode;
      const wRegExp = _w.RegExp;
      function checkCss(vNode) {
        const regExp = new wRegExp("(?:;|^|\\s)(?:" + cssText + "null)\\s*:[^;]*\\s*(?:;|$)", "ig");
        let style = "";
        if (regExp && vNode.style.cssText.length > 0) {
          style = regExp.test(vNode.style.cssText);
        }
        return !style;
      }
      (function recursionFunc(current, ancestor) {
        const childNodes = current.childNodes;
        for (let i = 0, len = childNodes.length, vNode; i < len; i++) {
          let child = childNodes[i];
          if (!child) continue;
          let coverNode = ancestor;
          let cloneNode;
          if (!startPass && child === startContainer) {
            let line = pNode;
            anchorNode = _getMaintainedNode(child);
            const prevNode = util2.createTextNode(startContainer.nodeType === 1 ? "" : startContainer.substringData(0, startOffset));
            const textNode = util2.createTextNode(
              startContainer.nodeType === 1 ? "" : startContainer.substringData(
                startOffset,
                isSameNode ? endOffset >= startOffset ? endOffset - startOffset : startContainer.data.length - startOffset : startContainer.data.length - startOffset
              )
            );
            if (anchorNode) {
              const a = _getMaintainedNode(ancestor);
              if (a && a.parentNode !== line) {
                let m = a;
                let p = null;
                while (m.parentNode !== line) {
                  ancestor = p = m.parentNode.cloneNode(false);
                  while (m.childNodes[0]) {
                    p.appendChild(m.childNodes[0]);
                  }
                  m.appendChild(p);
                  m = m.parentNode;
                }
                m.parentNode.appendChild(a);
              }
              anchorNode = anchorNode.cloneNode(false);
            }
            if (!util2.onlyZeroWidthSpace(prevNode)) {
              ancestor.appendChild(prevNode);
            }
            const prevAnchorNode = _getMaintainedNode(ancestor);
            if (!!prevAnchorNode) anchorNode = prevAnchorNode;
            if (anchorNode) line = anchorNode;
            newNode = child;
            pCurrent = [];
            cssText = "";
            while (newNode !== line && newNode !== el && newNode !== null) {
              vNode = _isMaintainedNode(newNode) ? null : validation(newNode);
              if (vNode && newNode.nodeType === 1 && checkCss(newNode)) {
                pCurrent.push(vNode);
                cssText += newNode.style.cssText.substr(0, newNode.style.cssText.indexOf(":")) + "|";
              }
              newNode = newNode.parentNode;
            }
            const childNode = pCurrent.pop() || textNode;
            appendNode = newNode = childNode;
            while (pCurrent.length > 0) {
              newNode = pCurrent.pop();
              appendNode.appendChild(newNode);
              appendNode = newNode;
            }
            newInnerNode.appendChild(childNode);
            line.appendChild(newInnerNode);
            if (anchorNode && !_getMaintainedNode(endContainer)) {
              newInnerNode = newInnerNode.cloneNode(false);
              pNode.appendChild(newInnerNode);
              nNodeArray.push(newInnerNode);
            }
            startContainer = textNode;
            startOffset = 0;
            startPass = true;
            if (newNode !== textNode) newNode.appendChild(startContainer);
            if (!isSameNode) continue;
          }
          if (!endPass && child === endContainer) {
            anchorNode = _getMaintainedNode(child);
            const afterNode = util2.createTextNode(endContainer.nodeType === 1 ? "" : endContainer.substringData(endOffset, endContainer.length - endOffset));
            const textNode = util2.createTextNode(isSameNode || endContainer.nodeType === 1 ? "" : endContainer.substringData(0, endOffset));
            if (anchorNode) {
              anchorNode = anchorNode.cloneNode(false);
            } else if (_isMaintainedNode(newInnerNode.parentNode) && !anchorNode) {
              newInnerNode = newInnerNode.cloneNode(false);
              pNode.appendChild(newInnerNode);
              nNodeArray.push(newInnerNode);
            }
            if (!util2.onlyZeroWidthSpace(afterNode)) {
              newNode = child;
              cssText = "";
              pCurrent = [];
              const anchors = [];
              while (newNode !== pNode && newNode !== el && newNode !== null) {
                if (newNode.nodeType === 1 && checkCss(newNode)) {
                  if (_isMaintainedNode(newNode)) anchors.push(newNode.cloneNode(false));
                  else pCurrent.push(newNode.cloneNode(false));
                  cssText += newNode.style.cssText.substr(0, newNode.style.cssText.indexOf(":")) + "|";
                }
                newNode = newNode.parentNode;
              }
              pCurrent = pCurrent.concat(anchors);
              cloneNode = appendNode = newNode = pCurrent.pop() || afterNode;
              while (pCurrent.length > 0) {
                newNode = pCurrent.pop();
                appendNode.appendChild(newNode);
                appendNode = newNode;
              }
              pNode.appendChild(cloneNode);
              newNode.textContent = afterNode.data;
            }
            if (anchorNode && cloneNode) {
              const afterAnchorNode = _getMaintainedNode(cloneNode);
              if (afterAnchorNode) {
                anchorNode = afterAnchorNode;
              }
            }
            newNode = child;
            pCurrent = [];
            cssText = "";
            while (newNode !== pNode && newNode !== el && newNode !== null) {
              vNode = _isMaintainedNode(newNode) ? null : validation(newNode);
              if (vNode && newNode.nodeType === 1 && checkCss(newNode)) {
                pCurrent.push(vNode);
                cssText += newNode.style.cssText.substr(0, newNode.style.cssText.indexOf(":")) + "|";
              }
              newNode = newNode.parentNode;
            }
            const childNode = pCurrent.pop() || textNode;
            appendNode = newNode = childNode;
            while (pCurrent.length > 0) {
              newNode = pCurrent.pop();
              appendNode.appendChild(newNode);
              appendNode = newNode;
            }
            if (anchorNode) {
              newInnerNode = newInnerNode.cloneNode(false);
              newInnerNode.appendChild(childNode);
              anchorNode.insertBefore(newInnerNode, anchorNode.firstChild);
              pNode.appendChild(anchorNode);
              nNodeArray.push(newInnerNode);
              anchorNode = null;
            } else {
              newInnerNode.appendChild(childNode);
            }
            endContainer = textNode;
            endOffset = textNode.data.length;
            endPass = true;
            if (!isRemoveFormat && collapsed) {
              newInnerNode = textNode;
              textNode.textContent = util2.zeroWidthSpace;
            }
            if (newNode !== textNode) newNode.appendChild(endContainer);
            continue;
          }
          if (startPass) {
            if (child.nodeType === 1 && !util2.isBreak(child)) {
              if (util2._isIgnoreNodeChange(child)) {
                pNode.appendChild(child.cloneNode(true));
                if (!collapsed) {
                  newInnerNode = newInnerNode.cloneNode(false);
                  pNode.appendChild(newInnerNode);
                  nNodeArray.push(newInnerNode);
                }
              } else {
                recursionFunc(child, child);
              }
              continue;
            }
            newNode = child;
            pCurrent = [];
            cssText = "";
            const anchors = [];
            while (newNode.parentNode !== null && newNode !== el && newNode !== newInnerNode) {
              vNode = endPass ? newNode.cloneNode(false) : validation(newNode);
              if (newNode.nodeType === 1 && !util2.isBreak(child) && vNode && checkCss(newNode)) {
                if (_isMaintainedNode(newNode)) {
                  if (!anchorNode) anchors.push(vNode);
                } else {
                  pCurrent.push(vNode);
                }
                cssText += newNode.style.cssText.substr(0, newNode.style.cssText.indexOf(":")) + "|";
              }
              newNode = newNode.parentNode;
            }
            pCurrent = pCurrent.concat(anchors);
            const childNode = pCurrent.pop() || child;
            appendNode = newNode = childNode;
            while (pCurrent.length > 0) {
              newNode = pCurrent.pop();
              appendNode.appendChild(newNode);
              appendNode = newNode;
            }
            if (_isMaintainedNode(newInnerNode.parentNode) && !_isMaintainedNode(childNode) && !util2.onlyZeroWidthSpace(newInnerNode)) {
              newInnerNode = newInnerNode.cloneNode(false);
              pNode.appendChild(newInnerNode);
              nNodeArray.push(newInnerNode);
            }
            if (!endPass && !anchorNode && _isMaintainedNode(childNode)) {
              newInnerNode = newInnerNode.cloneNode(false);
              const aChildren = childNode.childNodes;
              for (let a = 0, aLen = aChildren.length; a < aLen; a++) {
                newInnerNode.appendChild(aChildren[a]);
              }
              childNode.appendChild(newInnerNode);
              pNode.appendChild(childNode);
              nNodeArray.push(newInnerNode);
              if (newInnerNode.children.length > 0) ancestor = newNode;
              else ancestor = newInnerNode;
            } else if (childNode === child) {
              if (!endPass) ancestor = newInnerNode;
              else ancestor = pNode;
            } else if (endPass) {
              pNode.appendChild(childNode);
              ancestor = newNode;
            } else {
              newInnerNode.appendChild(childNode);
              ancestor = newNode;
            }
            if (anchorNode && child.nodeType === 3) {
              if (_getMaintainedNode(child)) {
                const ancestorAnchorNode = util2.getParentElement(ancestor, (function(current2) {
                  return this._isMaintainedNode(current2.parentNode) || current2.parentNode === pNode;
                }).bind(util2));
                anchorNode.appendChild(ancestorAnchorNode);
                newInnerNode = ancestorAnchorNode.cloneNode(false);
                nNodeArray.push(newInnerNode);
                pNode.appendChild(newInnerNode);
              } else {
                anchorNode = null;
              }
            }
          }
          cloneNode = child.cloneNode(false);
          ancestor.appendChild(cloneNode);
          if (child.nodeType === 1 && !util2.isBreak(child)) coverNode = cloneNode;
          recursionFunc(child, coverNode);
        }
      })(element, pNode);
      if (isRemoveNode && !isRemoveFormat && !_removeCheck.v) {
        return {
          ancestor: element,
          startContainer: startCon,
          startOffset: startOff,
          endContainer: endCon,
          endOffset: endOff
        };
      }
      isRemoveFormat = isRemoveFormat && isRemoveNode;
      if (isRemoveFormat) {
        for (let i = 0; i < nNodeArray.length; i++) {
          let removeNode = nNodeArray[i];
          let textNode, textNode_s, textNode_e;
          if (collapsed) {
            textNode = util2.createTextNode(util2.zeroWidthSpace);
            pNode.replaceChild(textNode, removeNode);
          } else {
            const rChildren = removeNode.childNodes;
            textNode_s = rChildren[0];
            while (rChildren[0]) {
              textNode_e = rChildren[0];
              pNode.insertBefore(textNode_e, removeNode);
            }
            util2.removeItem(removeNode);
          }
          if (i === 0) {
            if (collapsed) {
              startContainer = endContainer = textNode;
            } else {
              startContainer = textNode_s;
              endContainer = textNode_e;
            }
          }
        }
      } else {
        if (isRemoveNode) {
          for (let i = 0; i < nNodeArray.length; i++) {
            this._stripRemoveNode(nNodeArray[i]);
          }
        }
        if (collapsed) {
          startContainer = endContainer = newInnerNode;
        }
      }
      util2.removeEmptyNode(pNode, newInnerNode, false);
      if (collapsed) {
        startOffset = startContainer.textContent.length;
        endOffset = endContainer.textContent.length;
      }
      const endConReset = isRemoveFormat || endContainer.textContent.length === 0;
      if (!util2.isBreak(endContainer) && endContainer.textContent.length === 0) {
        util2.removeItem(endContainer);
        endContainer = startContainer;
      }
      endOffset = endConReset ? endContainer.textContent.length : endOffset;
      const newStartOffset = { s: 0, e: 0 };
      const startPath = util2.getNodePath(startContainer, pNode, newStartOffset);
      const mergeEndCon = !endContainer.parentNode;
      if (mergeEndCon) endContainer = startContainer;
      const newEndOffset = { s: 0, e: 0 };
      const endPath = util2.getNodePath(endContainer, pNode, !mergeEndCon && !endConReset ? newEndOffset : null);
      startOffset += newStartOffset.s;
      endOffset = collapsed ? startOffset : mergeEndCon ? startContainer.textContent.length : endConReset ? endOffset + newStartOffset.s : endOffset + newEndOffset.s;
      const newOffsets = util2.mergeSameTags(pNode, [startPath, endPath], true);
      element.parentNode.replaceChild(pNode, element);
      startContainer = util2.getNodeFromPath(startPath, pNode);
      endContainer = util2.getNodeFromPath(endPath, pNode);
      return {
        ancestor: pNode,
        startContainer,
        startOffset: startOffset + newOffsets[0],
        endContainer,
        endOffset: endOffset + newOffsets[1]
      };
    },
    /**
     * @description wraps first line selected text.
     * @param {Element} element The node of the line that contains the selected text node.
     * @param {Element} newInnerNode The dom that will wrap the selected text area
     * @param {Function} validation Check if the node should be stripped.
     * @param {Node} startCon The startContainer property of the selection object.
     * @param {Number} startOff The startOffset property of the selection object.
     * @param {Boolean} isRemoveFormat Is the remove all formats command?
     * @param {Boolean} isRemoveNode "newInnerNode" is remove node?
     * @returns {null|Node} If end container is renewed, returned renewed node
     * @returns {Object} { ancestor, container, offset, endContainer }
     * @private
     */
    _nodeChange_startLine: function(element, newInnerNode, validation, startCon, startOff, isRemoveFormat, isRemoveNode, _removeCheck, _getMaintainedNode, _isMaintainedNode, _endContainer) {
      let parentCon = startCon.parentNode;
      while (!parentCon.nextSibling && !parentCon.previousSibling && !util2.isFormatElement(parentCon.parentNode) && !util2.isWysiwygDiv(parentCon.parentNode)) {
        if (parentCon.nodeName === newInnerNode.nodeName) break;
        parentCon = parentCon.parentNode;
      }
      if (!isRemoveNode && parentCon.nodeName === newInnerNode.nodeName && !util2.isFormatElement(parentCon) && !parentCon.nextSibling && util2.onlyZeroWidthSpace(startCon.textContent.slice(0, startOff))) {
        let sameTag = true;
        let s = startCon.previousSibling;
        while (s) {
          if (!util2.onlyZeroWidthSpace(s)) {
            sameTag = false;
            break;
          }
          s = s.previousSibling;
        }
        if (sameTag) {
          util2.copyTagAttributes(parentCon, newInnerNode);
          return {
            ancestor: element,
            container: startCon,
            offset: startOff
          };
        }
      }
      _removeCheck.v = false;
      const el = element;
      const nNodeArray = [newInnerNode];
      const pNode = element.cloneNode(false);
      let container = startCon;
      let offset = startOff;
      let passNode = false;
      let pCurrent, newNode, appendNode, anchorNode;
      (function recursionFunc(current, ancestor) {
        const childNodes = current.childNodes;
        for (let i = 0, len = childNodes.length, vNode, cloneChild; i < len; i++) {
          const child = childNodes[i];
          if (!child) continue;
          let coverNode = ancestor;
          if (passNode && !util2.isBreak(child)) {
            if (child.nodeType === 1) {
              if (util2._isIgnoreNodeChange(child)) {
                newInnerNode = newInnerNode.cloneNode(false);
                cloneChild = child.cloneNode(true);
                pNode.appendChild(cloneChild);
                pNode.appendChild(newInnerNode);
                nNodeArray.push(newInnerNode);
                if (_endContainer && child.contains(_endContainer)) {
                  const endPath = util2.getNodePath(_endContainer, child);
                  _endContainer = util2.getNodeFromPath(endPath, cloneChild);
                }
              } else {
                recursionFunc(child, child);
              }
              continue;
            }
            newNode = child;
            pCurrent = [];
            const anchors = [];
            while (newNode.parentNode !== null && newNode !== el && newNode !== newInnerNode) {
              vNode = validation(newNode);
              if (newNode.nodeType === 1 && vNode) {
                if (_isMaintainedNode(newNode)) {
                  if (!anchorNode) anchors.push(vNode);
                } else {
                  pCurrent.push(vNode);
                }
              }
              newNode = newNode.parentNode;
            }
            pCurrent = pCurrent.concat(anchors);
            const isTopNode = pCurrent.length > 0;
            const childNode = pCurrent.pop() || child;
            appendNode = newNode = childNode;
            while (pCurrent.length > 0) {
              newNode = pCurrent.pop();
              appendNode.appendChild(newNode);
              appendNode = newNode;
            }
            if (_isMaintainedNode(newInnerNode.parentNode) && !_isMaintainedNode(childNode)) {
              newInnerNode = newInnerNode.cloneNode(false);
              pNode.appendChild(newInnerNode);
              nNodeArray.push(newInnerNode);
            }
            if (!anchorNode && _isMaintainedNode(childNode)) {
              newInnerNode = newInnerNode.cloneNode(false);
              const aChildren = childNode.childNodes;
              for (let a = 0, aLen = aChildren.length; a < aLen; a++) {
                newInnerNode.appendChild(aChildren[a]);
              }
              childNode.appendChild(newInnerNode);
              pNode.appendChild(childNode);
              ancestor = !_isMaintainedNode(newNode) ? newNode : newInnerNode;
              nNodeArray.push(newInnerNode);
            } else if (isTopNode) {
              newInnerNode.appendChild(childNode);
              ancestor = newNode;
            } else {
              ancestor = newInnerNode;
            }
            if (anchorNode && child.nodeType === 3) {
              if (_getMaintainedNode(child)) {
                const ancestorAnchorNode = util2.getParentElement(ancestor, (function(current2) {
                  return this._isMaintainedNode(current2.parentNode) || current2.parentNode === pNode;
                }).bind(util2));
                anchorNode.appendChild(ancestorAnchorNode);
                newInnerNode = ancestorAnchorNode.cloneNode(false);
                nNodeArray.push(newInnerNode);
                pNode.appendChild(newInnerNode);
              } else {
                anchorNode = null;
              }
            }
          }
          if (!passNode && child === container) {
            let line = pNode;
            anchorNode = _getMaintainedNode(child);
            const prevNode = util2.createTextNode(container.nodeType === 1 ? "" : container.substringData(0, offset));
            const textNode = util2.createTextNode(container.nodeType === 1 ? "" : container.substringData(offset, container.length - offset));
            if (anchorNode) {
              const a = _getMaintainedNode(ancestor);
              if (a && a.parentNode !== line) {
                let m = a;
                let p = null;
                while (m.parentNode !== line) {
                  ancestor = p = m.parentNode.cloneNode(false);
                  while (m.childNodes[0]) {
                    p.appendChild(m.childNodes[0]);
                  }
                  m.appendChild(p);
                  m = m.parentNode;
                }
                m.parentNode.appendChild(a);
              }
              anchorNode = anchorNode.cloneNode(false);
            }
            if (!util2.onlyZeroWidthSpace(prevNode)) {
              ancestor.appendChild(prevNode);
            }
            const prevAnchorNode = _getMaintainedNode(ancestor);
            if (!!prevAnchorNode) anchorNode = prevAnchorNode;
            if (anchorNode) line = anchorNode;
            newNode = ancestor;
            pCurrent = [];
            while (newNode !== line && newNode !== null) {
              vNode = validation(newNode);
              if (newNode.nodeType === 1 && vNode) {
                pCurrent.push(vNode);
              }
              newNode = newNode.parentNode;
            }
            const childNode = pCurrent.pop() || ancestor;
            appendNode = newNode = childNode;
            while (pCurrent.length > 0) {
              newNode = pCurrent.pop();
              appendNode.appendChild(newNode);
              appendNode = newNode;
            }
            if (childNode !== ancestor) {
              newInnerNode.appendChild(childNode);
              ancestor = newNode;
            } else {
              ancestor = newInnerNode;
            }
            if (util2.isBreak(child)) newInnerNode.appendChild(child.cloneNode(false));
            line.appendChild(newInnerNode);
            container = textNode;
            offset = 0;
            passNode = true;
            ancestor.appendChild(container);
            continue;
          }
          vNode = !passNode ? child.cloneNode(false) : validation(child);
          if (vNode) {
            ancestor.appendChild(vNode);
            if (child.nodeType === 1 && !util2.isBreak(child)) coverNode = vNode;
          }
          recursionFunc(child, coverNode);
        }
      })(element, pNode);
      if (isRemoveNode && !isRemoveFormat && !_removeCheck.v) {
        return {
          ancestor: element,
          container: startCon,
          offset: startOff,
          endContainer: _endContainer
        };
      }
      isRemoveFormat = isRemoveFormat && isRemoveNode;
      if (isRemoveFormat) {
        for (let i = 0; i < nNodeArray.length; i++) {
          let removeNode = nNodeArray[i];
          const rChildren = removeNode.childNodes;
          const textNode = rChildren[0];
          while (rChildren[0]) {
            pNode.insertBefore(rChildren[0], removeNode);
          }
          util2.removeItem(removeNode);
          if (i === 0) container = textNode;
        }
      } else if (isRemoveNode) {
        newInnerNode = newInnerNode.firstChild;
        for (let i = 0; i < nNodeArray.length; i++) {
          this._stripRemoveNode(nNodeArray[i]);
        }
      }
      if (!isRemoveFormat && pNode.childNodes.length === 0) {
        if (element.childNodes) {
          container = element.childNodes[0];
        } else {
          container = util2.createTextNode(util2.zeroWidthSpace);
          element.appendChild(container);
        }
      } else {
        util2.removeEmptyNode(pNode, newInnerNode, false);
        if (util2.onlyZeroWidthSpace(pNode.textContent)) {
          container = pNode.firstChild;
          offset = 0;
        }
        const offsets = { s: 0, e: 0 };
        const path = util2.getNodePath(container, pNode, offsets);
        offset += offsets.s;
        const newOffsets = util2.mergeSameTags(pNode, [path], true);
        element.parentNode.replaceChild(pNode, element);
        container = util2.getNodeFromPath(path, pNode);
        offset += newOffsets[0];
      }
      return {
        ancestor: pNode,
        container,
        offset,
        endContainer: _endContainer
      };
    },
    /**
     * @description wraps mid lines selected text.
     * @param {Element} element The node of the line that contains the selected text node.
     * @param {Element} newInnerNode The dom that will wrap the selected text area
     * @param {Function} validation Check if the node should be stripped.
     * @param {Boolean} isRemoveFormat Is the remove all formats command?
     * @param {Boolean} isRemoveNode "newInnerNode" is remove node?
     * @param {Node} _endContainer Offset node of last line already modified (end.container)
     * @returns {Object} { ancestor, endContainer: "If end container is renewed, returned renewed node" }
     * @private
     */
    _nodeChange_middleLine: function(element, newInnerNode, validation, isRemoveFormat, isRemoveNode, _removeCheck, _endContainer) {
      if (!isRemoveNode) {
        let endPath = null;
        if (_endContainer && element.contains(_endContainer)) endPath = util2.getNodePath(_endContainer, element);
        const tempNode = element.cloneNode(true);
        const newNodeName = newInnerNode.nodeName;
        const newCssText = newInnerNode.style.cssText;
        const newClass = newInnerNode.className;
        let children = tempNode.childNodes;
        let i = 0, len = children.length;
        for (let child; i < len; i++) {
          child = children[i];
          if (child.nodeType === 3) break;
          if (child.nodeName === newNodeName) {
            child.style.cssText += newCssText;
            util2.addClass(child, newClass);
          } else if (!util2.isBreak(child) && util2._isIgnoreNodeChange(child)) {
            continue;
          } else if (len === 1) {
            children = child.childNodes;
            len = children.length;
            i = -1;
            continue;
          } else {
            break;
          }
        }
        if (len > 0 && i === len) {
          element.innerHTML = tempNode.innerHTML;
          return {
            ancestor: element,
            endContainer: endPath ? util2.getNodeFromPath(endPath, element) : null
          };
        }
      }
      _removeCheck.v = false;
      const pNode = element.cloneNode(false);
      const nNodeArray = [newInnerNode];
      let noneChange = true;
      (function recursionFunc(current, ancestor) {
        const childNodes = current.childNodes;
        for (let i = 0, len = childNodes.length, vNode, cloneChild; i < len; i++) {
          let child = childNodes[i];
          if (!child) continue;
          let coverNode = ancestor;
          if (!util2.isBreak(child) && util2._isIgnoreNodeChange(child)) {
            if (newInnerNode.childNodes.length > 0) {
              pNode.appendChild(newInnerNode);
              newInnerNode = newInnerNode.cloneNode(false);
            }
            cloneChild = child.cloneNode(true);
            pNode.appendChild(cloneChild);
            pNode.appendChild(newInnerNode);
            nNodeArray.push(newInnerNode);
            ancestor = newInnerNode;
            if (_endContainer && child.contains(_endContainer)) {
              const endPath = util2.getNodePath(_endContainer, child);
              _endContainer = util2.getNodeFromPath(endPath, cloneChild);
            }
            continue;
          } else {
            vNode = validation(child);
            if (vNode) {
              noneChange = false;
              ancestor.appendChild(vNode);
              if (child.nodeType === 1) coverNode = vNode;
            }
          }
          if (!util2.isBreak(child)) recursionFunc(child, coverNode);
        }
      })(element, newInnerNode);
      if (noneChange || isRemoveNode && !isRemoveFormat && !_removeCheck.v) return { ancestor: element, endContainer: _endContainer };
      pNode.appendChild(newInnerNode);
      if (isRemoveFormat && isRemoveNode) {
        for (let i = 0; i < nNodeArray.length; i++) {
          let removeNode = nNodeArray[i];
          const rChildren = removeNode.childNodes;
          while (rChildren[0]) {
            pNode.insertBefore(rChildren[0], removeNode);
          }
          util2.removeItem(removeNode);
        }
      } else if (isRemoveNode) {
        newInnerNode = newInnerNode.firstChild;
        for (let i = 0; i < nNodeArray.length; i++) {
          this._stripRemoveNode(nNodeArray[i]);
        }
      }
      util2.removeEmptyNode(pNode, newInnerNode, false);
      util2.mergeSameTags(pNode, null, true);
      element.parentNode.replaceChild(pNode, element);
      return { ancestor: pNode, endContainer: _endContainer };
    },
    /**
     * @description wraps last line selected text.
     * @param {Element} element The node of the line that contains the selected text node.
     * @param {Element} newInnerNode The dom that will wrap the selected text area
     * @param {Function} validation Check if the node should be stripped.
     * @param {Node} endCon The endContainer property of the selection object.
     * @param {Number} endOff The endOffset property of the selection object.
     * @param {Boolean} isRemoveFormat Is the remove all formats command?
     * @param {Boolean} isRemoveNode "newInnerNode" is remove node?
     * @returns {Object} { ancestor, container, offset }
     * @private
     */
    _nodeChange_endLine: function(element, newInnerNode, validation, endCon, endOff, isRemoveFormat, isRemoveNode, _removeCheck, _getMaintainedNode, _isMaintainedNode) {
      let parentCon = endCon.parentNode;
      while (!parentCon.nextSibling && !parentCon.previousSibling && !util2.isFormatElement(parentCon.parentNode) && !util2.isWysiwygDiv(parentCon.parentNode)) {
        if (parentCon.nodeName === newInnerNode.nodeName) break;
        parentCon = parentCon.parentNode;
      }
      if (!isRemoveNode && parentCon.nodeName === newInnerNode.nodeName && !util2.isFormatElement(parentCon) && !parentCon.previousSibling && util2.onlyZeroWidthSpace(endCon.textContent.slice(endOff))) {
        let sameTag = true;
        let e = endCon.nextSibling;
        while (e) {
          if (!util2.onlyZeroWidthSpace(e)) {
            sameTag = false;
            break;
          }
          e = e.nextSibling;
        }
        if (sameTag) {
          util2.copyTagAttributes(parentCon, newInnerNode);
          return {
            ancestor: element,
            container: endCon,
            offset: endOff
          };
        }
      }
      _removeCheck.v = false;
      const el = element;
      const nNodeArray = [newInnerNode];
      const pNode = element.cloneNode(false);
      let container = endCon;
      let offset = endOff;
      let passNode = false;
      let pCurrent, newNode, appendNode, anchorNode;
      (function recursionFunc(current, ancestor) {
        const childNodes = current.childNodes;
        for (let i = childNodes.length - 1, vNode; 0 <= i; i--) {
          const child = childNodes[i];
          if (!child) continue;
          let coverNode = ancestor;
          if (passNode && !util2.isBreak(child)) {
            if (child.nodeType === 1) {
              if (util2._isIgnoreNodeChange(child)) {
                newInnerNode = newInnerNode.cloneNode(false);
                const cloneChild = child.cloneNode(true);
                pNode.insertBefore(cloneChild, ancestor);
                pNode.insertBefore(newInnerNode, cloneChild);
                nNodeArray.push(newInnerNode);
              } else {
                recursionFunc(child, child);
              }
              continue;
            }
            newNode = child;
            pCurrent = [];
            const anchors = [];
            while (newNode.parentNode !== null && newNode !== el && newNode !== newInnerNode) {
              vNode = validation(newNode);
              if (vNode && newNode.nodeType === 1) {
                if (_isMaintainedNode(newNode)) {
                  if (!anchorNode) anchors.push(vNode);
                } else {
                  pCurrent.push(vNode);
                }
              }
              newNode = newNode.parentNode;
            }
            pCurrent = pCurrent.concat(anchors);
            const isTopNode = pCurrent.length > 0;
            const childNode = pCurrent.pop() || child;
            appendNode = newNode = childNode;
            while (pCurrent.length > 0) {
              newNode = pCurrent.pop();
              appendNode.appendChild(newNode);
              appendNode = newNode;
            }
            if (_isMaintainedNode(newInnerNode.parentNode) && !_isMaintainedNode(childNode)) {
              newInnerNode = newInnerNode.cloneNode(false);
              pNode.insertBefore(newInnerNode, pNode.firstChild);
              nNodeArray.push(newInnerNode);
            }
            if (!anchorNode && _isMaintainedNode(childNode)) {
              newInnerNode = newInnerNode.cloneNode(false);
              const aChildren = childNode.childNodes;
              for (let a = 0, aLen = aChildren.length; a < aLen; a++) {
                newInnerNode.appendChild(aChildren[a]);
              }
              childNode.appendChild(newInnerNode);
              pNode.insertBefore(childNode, pNode.firstChild);
              nNodeArray.push(newInnerNode);
              if (newInnerNode.children.length > 0) ancestor = newNode;
              else ancestor = newInnerNode;
            } else if (isTopNode) {
              newInnerNode.insertBefore(childNode, newInnerNode.firstChild);
              ancestor = newNode;
            } else {
              ancestor = newInnerNode;
            }
            if (anchorNode && child.nodeType === 3) {
              if (_getMaintainedNode(child)) {
                const ancestorAnchorNode = util2.getParentElement(ancestor, (function(current2) {
                  return this._isMaintainedNode(current2.parentNode) || current2.parentNode === pNode;
                }).bind(util2));
                anchorNode.appendChild(ancestorAnchorNode);
                newInnerNode = ancestorAnchorNode.cloneNode(false);
                nNodeArray.push(newInnerNode);
                pNode.insertBefore(newInnerNode, pNode.firstChild);
              } else {
                anchorNode = null;
              }
            }
          }
          if (!passNode && child === container) {
            anchorNode = _getMaintainedNode(child);
            const afterNode = util2.createTextNode(container.nodeType === 1 ? "" : container.substringData(offset, container.length - offset));
            const textNode = util2.createTextNode(container.nodeType === 1 ? "" : container.substringData(0, offset));
            if (anchorNode) {
              anchorNode = anchorNode.cloneNode(false);
              const a = _getMaintainedNode(ancestor);
              if (a && a.parentNode !== pNode) {
                let m = a;
                let p = null;
                while (m.parentNode !== pNode) {
                  ancestor = p = m.parentNode.cloneNode(false);
                  while (m.childNodes[0]) {
                    p.appendChild(m.childNodes[0]);
                  }
                  m.appendChild(p);
                  m = m.parentNode;
                }
                m.parentNode.insertBefore(a, m.parentNode.firstChild);
              }
              anchorNode = anchorNode.cloneNode(false);
            } else if (_isMaintainedNode(newInnerNode.parentNode) && !anchorNode) {
              newInnerNode = newInnerNode.cloneNode(false);
              pNode.appendChild(newInnerNode);
              nNodeArray.push(newInnerNode);
            }
            if (!util2.onlyZeroWidthSpace(afterNode)) {
              ancestor.insertBefore(afterNode, ancestor.firstChild);
            }
            newNode = ancestor;
            pCurrent = [];
            while (newNode !== pNode && newNode !== null) {
              vNode = _isMaintainedNode(newNode) ? null : validation(newNode);
              if (vNode && newNode.nodeType === 1) {
                pCurrent.push(vNode);
              }
              newNode = newNode.parentNode;
            }
            const childNode = pCurrent.pop() || ancestor;
            appendNode = newNode = childNode;
            while (pCurrent.length > 0) {
              newNode = pCurrent.pop();
              appendNode.appendChild(newNode);
              appendNode = newNode;
            }
            if (childNode !== ancestor) {
              newInnerNode.insertBefore(childNode, newInnerNode.firstChild);
              ancestor = newNode;
            } else {
              ancestor = newInnerNode;
            }
            if (util2.isBreak(child)) newInnerNode.appendChild(child.cloneNode(false));
            if (anchorNode) {
              anchorNode.insertBefore(newInnerNode, anchorNode.firstChild);
              pNode.insertBefore(anchorNode, pNode.firstChild);
              anchorNode = null;
            } else {
              pNode.insertBefore(newInnerNode, pNode.firstChild);
            }
            container = textNode;
            offset = textNode.data.length;
            passNode = true;
            ancestor.insertBefore(container, ancestor.firstChild);
            continue;
          }
          vNode = !passNode ? child.cloneNode(false) : validation(child);
          if (vNode) {
            ancestor.insertBefore(vNode, ancestor.firstChild);
            if (child.nodeType === 1 && !util2.isBreak(child)) coverNode = vNode;
          }
          recursionFunc(child, coverNode);
        }
      })(element, pNode);
      if (isRemoveNode && !isRemoveFormat && !_removeCheck.v) {
        return {
          ancestor: element,
          container: endCon,
          offset: endOff
        };
      }
      isRemoveFormat = isRemoveFormat && isRemoveNode;
      if (isRemoveFormat) {
        for (let i = 0; i < nNodeArray.length; i++) {
          let removeNode = nNodeArray[i];
          const rChildren = removeNode.childNodes;
          let textNode = null;
          while (rChildren[0]) {
            textNode = rChildren[0];
            pNode.insertBefore(textNode, removeNode);
          }
          util2.removeItem(removeNode);
          if (i === nNodeArray.length - 1) {
            container = textNode;
            offset = textNode.textContent.length;
          }
        }
      } else if (isRemoveNode) {
        newInnerNode = newInnerNode.firstChild;
        for (let i = 0; i < nNodeArray.length; i++) {
          this._stripRemoveNode(nNodeArray[i]);
        }
      }
      if (!isRemoveFormat && pNode.childNodes.length === 0) {
        if (element.childNodes) {
          container = element.childNodes[0];
        } else {
          container = util2.createTextNode(util2.zeroWidthSpace);
          element.appendChild(container);
        }
      } else {
        if (!isRemoveNode && newInnerNode.textContent.length === 0) {
          util2.removeEmptyNode(pNode, null, false);
          return {
            ancestor: null,
            container: null,
            offset: 0
          };
        }
        util2.removeEmptyNode(pNode, newInnerNode, false);
        if (util2.onlyZeroWidthSpace(pNode.textContent)) {
          container = pNode.firstChild;
          offset = container.textContent.length;
        } else if (util2.onlyZeroWidthSpace(container)) {
          container = newInnerNode;
          offset = 1;
        }
        const offsets = { s: 0, e: 0 };
        const path = util2.getNodePath(container, pNode, offsets);
        offset += offsets.s;
        const newOffsets = util2.mergeSameTags(pNode, [path], true);
        element.parentNode.replaceChild(pNode, element);
        container = util2.getNodeFromPath(path, pNode);
        offset += newOffsets[0];
      }
      return {
        ancestor: pNode,
        container,
        offset: container.nodeType === 1 && offset === 1 ? container.childNodes.length : offset
      };
    },
    /**
     * @description Run plugin calls and basic commands.
     * @param {String} command Command string
     * @param {String} display Display type string ('command', 'submenu', 'dialog', 'container')
     * @param {Element} target The element of command button
     */
    actionCall: function(command, display, target) {
      if (display) {
        if (/more/i.test(display)) {
          if (target !== this._moreLayerActiveButton) {
            const layer = context.element.toolbar.querySelector("." + command);
            if (layer) {
              if (this._moreLayerActiveButton) this.moreLayerOff();
              this._moreLayerActiveButton = target;
              layer.style.display = "block";
              event._showToolbarBalloon();
              event._showToolbarInline();
            }
            util2.addClass(target, "on");
          } else {
            const layer = context.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command"));
            if (layer) {
              this.moreLayerOff();
              event._showToolbarBalloon();
              event._showToolbarInline();
            }
          }
          return;
        }
        if (/container/.test(display) && (this._menuTray[command] === null || target !== this.containerActiveButton)) {
          this.callPlugin(command, this.containerOn.bind(this, target), target);
          return;
        }
        if (this.isReadOnly && util2.arrayIncludes(this.resizingDisabledButtons, target)) return;
        if (/submenu/.test(display) && (this._menuTray[command] === null || target !== this.submenuActiveButton)) {
          this.callPlugin(command, this.submenuOn.bind(this, target), target);
          return;
        } else if (/dialog/.test(display)) {
          this.callPlugin(command, this.plugins[command].open.bind(this), target);
          return;
        } else if (/command/.test(display)) {
          this.callPlugin(command, this.plugins[command].action.bind(this), target);
        } else if (/fileBrowser/.test(display)) {
          this.callPlugin(command, this.plugins[command].open.bind(this, null), target);
        }
      } else if (command) {
        this.commandHandler(target, command);
      }
      if (/submenu/.test(display)) {
        this.submenuOff();
      } else if (!/command/.test(display)) {
        this.submenuOff();
        this.containerOff();
      }
    },
    /**
     * @description Execute command of command button(All Buttons except submenu and dialog)
     * (selectAll, codeView, fullScreen, indent, outdent, undo, redo, removeFormat, print, preview, showBlocks, save, bold, underline, italic, strike, subscript, superscript, copy, cut, paste)
     * @param {Element|null} target The element of command button
     * @param {String} command Property of command button (data-value)
     */
    commandHandler: function(target, command) {
      if (core.isReadOnly && !/copy|cut|selectAll|codeView|fullScreen|print|preview|showBlocks/.test(command)) return;
      switch (command) {
        case "copy":
        case "cut":
          this.execCommand(command);
          break;
        case "paste":
          break;
        case "selectAll":
          this.containerOff();
          const wysiwyg = context.element.wysiwyg;
          let first = util2.getChildElement(wysiwyg.firstChild, function(current) {
            return current.childNodes.length === 0 || current.nodeType === 3;
          }, false) || wysiwyg.firstChild;
          let last = util2.getChildElement(wysiwyg.lastChild, function(current) {
            return current.childNodes.length === 0 || current.nodeType === 3;
          }, true) || wysiwyg.lastChild;
          if (!first || !last) return;
          if (util2.isMedia(first)) {
            const info = this.getFileComponent(first);
            const br = util2.createElement("BR");
            const format = util2.createElement(options.defaultTag);
            format.appendChild(br);
            first = info ? info.component : first;
            first.parentNode.insertBefore(format, first);
            first = br;
          }
          if (util2.isMedia(last)) {
            const br = util2.createElement("BR");
            const format = util2.createElement(options.defaultTag);
            format.appendChild(br);
            wysiwyg.appendChild(format);
            last = br;
          }
          event._showToolbarBalloon(this.setRange(first, 0, last, last.textContent.length));
          break;
        case "codeView":
          this.toggleCodeView();
          break;
        case "fullScreen":
          this.toggleFullScreen(target);
          break;
        case "indent":
        case "outdent":
          this.indent(command);
          break;
        case "undo":
          this.history.undo();
          break;
        case "redo":
          this.history.redo();
          break;
        case "removeFormat":
          this.removeFormat();
          this.focus();
          break;
        case "print":
          this.print();
          break;
        case "preview":
          this.preview();
          break;
        case "showBlocks":
          this.toggleDisplayBlocks();
          break;
        case "dir":
          this.setDir(options.rtl ? "ltr" : "rtl");
          break;
        case "dir_ltr":
          this.setDir("ltr");
          break;
        case "dir_rtl":
          this.setDir("rtl");
          break;
        case "save":
          if (typeof options.callBackSave === "function") {
            options.callBackSave(this.getContents(false), this._variable.isChanged);
          } else if (this._variable.isChanged && typeof functions.save === "function") {
            functions.save();
          } else {
            throw Error("[SUNEDITOR.core.commandHandler.fail] Please register call back function in creation option. (callBackSave : Function)");
          }
          this._variable.isChanged = false;
          if (context.tool.save) context.tool.save.setAttribute("disabled", true);
          break;
        default:
          command = options._defaultCommand[command.toLowerCase()] || command;
          if (!this.commandMap[command]) this.commandMap[command] = target;
          const nodesMap = this._variable.currentNodesMap;
          const cmd = nodesMap.indexOf(command) > -1 ? null : util2.createElement(command);
          let removeNode = command;
          if (/^SUB$/i.test(command) && nodesMap.indexOf("SUP") > -1) {
            removeNode = "SUP";
          } else if (/^SUP$/i.test(command) && nodesMap.indexOf("SUB") > -1) {
            removeNode = "SUB";
          }
          this.nodeChange(cmd, this._commandMapStyles[command] || null, [removeNode], false);
          this.focus();
      }
    },
    /**
     * @description Remove format of the currently selected range
     */
    removeFormat: function() {
      this.nodeChange(null, null, null, null);
    },
    /**
     * @description This method implements indentation to selected range.
     * Setted "margin-left" to "25px" in the top "P" tag of the parameter node.
     * @param {String} command Separator ("indent" or "outdent")
     */
    indent: function(command) {
      const range = this.getRange();
      const rangeLines = this.getSelectedElements(null);
      const cells = [];
      const shift = "indent" !== command;
      const marginDir = options.rtl ? "marginRight" : "marginLeft";
      let sc = range.startContainer;
      let ec = range.endContainer;
      let so = range.startOffset;
      let eo = range.endOffset;
      for (let i = 0, len = rangeLines.length, f, margin; i < len; i++) {
        f = rangeLines[i];
        if (!util2.isListCell(f) || !this.plugins.list) {
          margin = /\d+/.test(f.style[marginDir]) ? util2.getNumber(f.style[marginDir], 0) : 0;
          if (shift) {
            margin -= 25;
          } else {
            margin += 25;
          }
          util2.setStyle(f, marginDir, margin <= 0 ? "" : margin + "px");
        } else {
          if (shift || f.previousElementSibling) {
            cells.push(f);
          }
        }
      }
      if (cells.length > 0) {
        this.plugins.list.editInsideList.call(this, shift, cells);
      }
      this.effectNode = null;
      this.setRange(sc, so, ec, eo);
      this.history.push(false);
    },
    /**
     * @description Add or remove the class name of "body" so that the code block is visible
     */
    toggleDisplayBlocks: function() {
      const wysiwyg = context.element.wysiwyg;
      util2.toggleClass(wysiwyg, "se-show-block");
      if (util2.hasClass(wysiwyg, "se-show-block")) {
        util2.addClass(this._styleCommandMap.showBlocks, "active");
      } else {
        util2.removeClass(this._styleCommandMap.showBlocks, "active");
      }
      this._resourcesStateChange();
    },
    /**
     * @description Changes to code view or wysiwyg view
     */
    toggleCodeView: function() {
      const isCodeView = this._variable.isCodeView;
      this.controllersOff();
      util2.setDisabledButtons(!isCodeView, this.codeViewDisabledButtons);
      if (isCodeView) {
        if (!util2.isNonEditable(context.element.wysiwygFrame)) this._setCodeDataToEditor();
        context.element.wysiwygFrame.scrollTop = 0;
        context.element.code.style.display = "none";
        context.element.wysiwygFrame.style.display = "block";
        this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none");
        this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block");
        if (options.height === "auto" && !options.codeMirrorEditor) context.element.code.style.height = "0px";
        this._variable.isCodeView = false;
        if (!this._variable.isFullScreen) {
          this._notHideToolbar = false;
          if (/balloon|balloon-always/i.test(options.mode)) {
            context.element._arrow.style.display = "";
            this._isInline = false;
            this._isBalloon = true;
            event._hideToolbar();
          }
        }
        this.nativeFocus();
        util2.removeClass(this._styleCommandMap.codeView, "active");
        if (!util2.isNonEditable(context.element.wysiwygFrame)) {
          this.history.push(false);
          this.history._resetCachingButton();
        }
      } else {
        this._setEditorDataToCodeView();
        this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block");
        this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none");
        if (this._variable.isFullScreen) context.element.code.style.height = "100%";
        else if (options.height === "auto" && !options.codeMirrorEditor) context.element.code.style.height = context.element.code.scrollHeight > 0 ? context.element.code.scrollHeight + "px" : "auto";
        if (options.codeMirrorEditor) options.codeMirrorEditor.refresh();
        this._variable.isCodeView = true;
        if (!this._variable.isFullScreen) {
          this._notHideToolbar = true;
          if (this._isBalloon) {
            context.element._arrow.style.display = "none";
            context.element.toolbar.style.left = "";
            this._isInline = true;
            this._isBalloon = false;
            event._showToolbarInline();
          }
        }
        this._variable._range = null;
        context.element.code.focus();
        util2.addClass(this._styleCommandMap.codeView, "active");
      }
      this._checkPlaceholder();
      if (this.isReadOnly) util2.setDisabledButtons(true, this.resizingDisabledButtons);
      if (typeof functions.toggleCodeView === "function") functions.toggleCodeView(this._variable.isCodeView, this);
    },
    /**
     * @description Convert the data of the code view and put it in the WYSIWYG area.
     * @private
     */
    _setCodeDataToEditor: function() {
      const code_html = this._getCodeView();
      if (options.fullPage) {
        const parseDocument = this._parser.parseFromString(code_html, "text/html");
        if (!this.options.__allowedScriptTag) {
          const headChildren = parseDocument.head.children;
          for (let i = 0, len = headChildren.length; i < len; i++) {
            if (/^script$/i.test(headChildren[i].tagName)) {
              parseDocument.head.removeChild(headChildren[i]);
              i--, len--;
            }
          }
        }
        let headers = parseDocument.head.innerHTML;
        if (!parseDocument.head.querySelector('link[rel="stylesheet"]') || this.options.height === "auto" && !parseDocument.head.querySelector("style")) {
          headers += util2._setIframeCssTags(this.options);
        }
        this._wd.head.innerHTML = headers;
        this._wd.body.innerHTML = this.convertContentsForEditor(parseDocument.body.innerHTML);
        const attrs = parseDocument.body.attributes;
        for (let i = 0, len = attrs.length; i < len; i++) {
          if (attrs[i].name === "contenteditable") continue;
          this._wd.body.setAttribute(attrs[i].name, attrs[i].value);
        }
        if (!util2.hasClass(this._wd.body, "sun-editor-editable")) {
          const editableClasses = options._editableClass.split(" ");
          for (let i = 0; i < editableClasses.length; i++) {
            util2.addClass(this._wd.body, options._editableClass[i]);
          }
        }
      } else {
        context.element.wysiwyg.innerHTML = code_html.length > 0 ? this.convertContentsForEditor(code_html) : "<" + options.defaultTag + "><br></" + options.defaultTag + ">";
      }
    },
    /**
     * @description Convert the data of the WYSIWYG area and put it in the code view area.
     * @private
     */
    _setEditorDataToCodeView: function() {
      const codeContents = this.convertHTMLForCodeView(context.element.wysiwyg, false);
      let codeValue = "";
      if (options.fullPage) {
        const attrs = util2.getAttributesToString(this._wd.body, null);
        codeValue = "<!DOCTYPE html>\n<html>\n" + this._wd.head.outerHTML.replace(/>(?!\n)/g, ">\n") + "<body " + attrs + ">\n" + codeContents + "</body>\n</html>";
      } else {
        codeValue = codeContents;
      }
      context.element.code.style.display = "block";
      context.element.wysiwygFrame.style.display = "none";
      this._setCodeView(codeValue);
    },
    /**
     * @description Changes to full screen or default screen
     * @param {Element|null} element full screen button
     */
    toggleFullScreen: function(element) {
      const topArea = context.element.topArea;
      const toolbar = context.element.toolbar;
      const editorArea = context.element.editorArea;
      const wysiwygFrame = context.element.wysiwygFrame;
      const code = context.element.code;
      const _var = this._variable;
      this.controllersOff();
      const wasToolbarHidden = toolbar.style.display === "none" || this._isInline && !this._inlineToolbarAttr.isShow;
      if (!_var.isFullScreen) {
        _var.isFullScreen = true;
        _var._fullScreenAttrs.inline = this._isInline;
        _var._fullScreenAttrs.balloon = this._isBalloon;
        if (this._isInline || this._isBalloon) {
          this._isInline = false;
          this._isBalloon = false;
        }
        if (!!options.toolbarContainer) context.element.relative.insertBefore(toolbar, editorArea);
        topArea.style.position = "fixed";
        topArea.style.top = "0";
        topArea.style.left = "0";
        topArea.style.width = "100%";
        topArea.style.maxWidth = "100%";
        topArea.style.height = "100%";
        topArea.style.zIndex = "2147483647";
        if (context.element._stickyDummy.style.display !== "") {
          _var._fullScreenAttrs.sticky = true;
          context.element._stickyDummy.style.display = "none";
          util2.removeClass(toolbar, "se-toolbar-sticky");
        }
        _var._bodyOverflow = _d.body.style.overflow;
        _d.body.style.overflow = "hidden";
        _var._editorAreaOriginCssText = editorArea.style.cssText;
        _var._wysiwygOriginCssText = wysiwygFrame.style.cssText;
        _var._codeOriginCssText = code.style.cssText;
        editorArea.style.cssText = toolbar.style.cssText = "";
        wysiwygFrame.style.cssText = (wysiwygFrame.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0] + options._editorStyles.editor;
        code.style.cssText = (code.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0];
        toolbar.style.width = wysiwygFrame.style.height = code.style.height = "100%";
        toolbar.style.position = "relative";
        toolbar.style.display = "block";
        _var.innerHeight_fullScreen = _w.innerHeight - toolbar.offsetHeight;
        editorArea.style.height = _var.innerHeight_fullScreen - options.fullScreenOffset + "px";
        if (element) util2.changeElement(element.firstElementChild, icons.reduction);
        if (options.iframe && options.height === "auto") {
          editorArea.style.overflow = "auto";
          this._iframeAutoHeight();
        }
        context.element.topArea.style.marginTop = options.fullScreenOffset + "px";
        util2.addClass(this._styleCommandMap.fullScreen, "active");
      } else {
        _var.isFullScreen = false;
        wysiwygFrame.style.cssText = _var._wysiwygOriginCssText;
        code.style.cssText = _var._codeOriginCssText;
        toolbar.style.cssText = "";
        editorArea.style.cssText = _var._editorAreaOriginCssText;
        topArea.style.cssText = _var._originCssText;
        _d.body.style.overflow = _var._bodyOverflow;
        if (options.height === "auto" && !options.codeMirrorEditor) event._codeViewAutoHeight();
        if (!!options.toolbarContainer) options.toolbarContainer.appendChild(toolbar);
        if (options.stickyToolbar > -1) {
          util2.removeClass(toolbar, "se-toolbar-sticky");
        }
        if (_var._fullScreenAttrs.sticky && !options.toolbarContainer) {
          _var._fullScreenAttrs.sticky = false;
          context.element._stickyDummy.style.display = "block";
          util2.addClass(toolbar, "se-toolbar-sticky");
        }
        this._isInline = _var._fullScreenAttrs.inline;
        this._isBalloon = _var._fullScreenAttrs.balloon;
        if (this._isInline) event._showToolbarInline();
        if (!!options.toolbarContainer) util2.removeClass(toolbar, "se-toolbar-balloon");
        event.onScroll_window();
        if (element) util2.changeElement(element.firstElementChild, icons.expansion);
        context.element.topArea.style.marginTop = "";
        util2.removeClass(this._styleCommandMap.fullScreen, "active");
      }
      if (wasToolbarHidden) functions.toolbar.hide();
      if (typeof functions.toggleFullScreen === "function") functions.toggleFullScreen(this._variable.isFullScreen, this);
    },
    /**
     * @description Prints the current contents of the editor.
     */
    print: function() {
      const iframe = util2.createElement("IFRAME");
      iframe.style.display = "none";
      _d.body.appendChild(iframe);
      const contentsHTML = options.printTemplate ? options.printTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(true)) : this.getContents(true);
      const printDocument = util2.getIframeDocument(iframe);
      const wDoc = this._wd;
      if (options.iframe) {
        const arrts = options._printClass !== null ? 'class="' + options._printClass + '"' : options.fullPage ? util2.getAttributesToString(wDoc.body, ["contenteditable"]) : 'class="' + options._editableClass + '"';
        printDocument.write(
          "<!DOCTYPE html><html><head>" + wDoc.head.innerHTML + "</head><body " + arrts + ">" + contentsHTML + "</body></html>"
        );
      } else {
        const links = _d.head.getElementsByTagName("link");
        const styles = _d.head.getElementsByTagName("style");
        let linkHTML = "";
        for (let i = 0, len = links.length; i < len; i++) {
          linkHTML += links[i].outerHTML;
        }
        for (let i = 0, len = styles.length; i < len; i++) {
          linkHTML += styles[i].outerHTML;
        }
        printDocument.write(
          "<!DOCTYPE html><html><head>" + linkHTML + '</head><body class="' + (options._printClass !== null ? options._printClass : options._editableClass) + '">' + contentsHTML + "</body></html>"
        );
      }
      this.showLoading();
      _w.setTimeout(function() {
        try {
          iframe.focus();
          if (util2.isIE_Edge || util2.isChromium || !!_d.documentMode || !!_w.StyleMedia) {
            try {
              iframe.contentWindow.document.execCommand("print", false, null);
            } catch (e) {
              iframe.contentWindow.print();
            }
          } else {
            iframe.contentWindow.print();
          }
        } catch (error) {
          throw Error("[SUNEDITOR.core.print.fail] error: " + error);
        } finally {
          core.closeLoading();
          util2.removeItem(iframe);
        }
      }, 1e3);
    },
    /**
     * @description Open the preview window.
     */
    preview: function() {
      core.submenuOff();
      core.containerOff();
      core.controllersOff();
      const contentsHTML = options.previewTemplate ? options.previewTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(true)) : this.getContents(true);
      const windowObject = _w.open("", "_blank");
      windowObject.mimeType = "text/html";
      const wDoc = this._wd;
      if (options.iframe) {
        const arrts = options._printClass !== null ? 'class="' + options._printClass + '"' : options.fullPage ? util2.getAttributesToString(wDoc.body, ["contenteditable"]) : 'class="' + options._editableClass + '"';
        windowObject.document.write(
          "<!DOCTYPE html><html><head>" + wDoc.head.innerHTML + "<style>body {overflow:auto !important; margin: 10px auto !important; height:auto !important; outline:1px dashed #ccc;}</style></head><body " + arrts + ">" + contentsHTML + "</body></html>"
        );
      } else {
        const links = _d.head.getElementsByTagName("link");
        const styles = _d.head.getElementsByTagName("style");
        let linkHTML = "";
        for (let i = 0, len = links.length; i < len; i++) {
          linkHTML += links[i].outerHTML;
        }
        for (let i = 0, len = styles.length; i < len; i++) {
          linkHTML += styles[i].outerHTML;
        }
        windowObject.document.write(
          '<!DOCTYPE html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><title>' + lang.toolbar.preview + "</title>" + linkHTML + '</head><body class="' + (options._printClass !== null ? options._printClass : options._editableClass) + '" style="margin:10px auto !important; height:auto !important; outline:1px dashed #ccc;">' + contentsHTML + "</body></html>"
        );
      }
    },
    /**
     * @description Set direction to "rtl" or "ltr".
     * @param {String} dir "rtl" or "ltr"
     */
    setDir: function(dir) {
      const rtl = dir === "rtl";
      const changeDir = this._prevRtl !== rtl;
      this._prevRtl = options.rtl = rtl;
      if (changeDir) {
        if (this.plugins.align) {
          this.plugins.align.exchangeDir.call(this);
        }
        if (context.tool.indent) util2.changeElement(context.tool.indent.firstElementChild, icons.indent);
        if (context.tool.outdent) util2.changeElement(context.tool.outdent.firstElementChild, icons.outdent);
      }
      const el = context.element;
      if (rtl) {
        util2.addClass(el.topArea, "se-rtl");
        util2.addClass(el.wysiwygFrame, "se-rtl");
      } else {
        util2.removeClass(el.topArea, "se-rtl");
        util2.removeClass(el.wysiwygFrame, "se-rtl");
      }
      const lineNodes = util2.getListChildren(el.wysiwyg, function(current) {
        return util2.isFormatElement(current) && (current.style.marginRight || current.style.marginLeft || current.style.textAlign);
      });
      for (let i = 0, len = lineNodes.length, n, l, r; i < len; i++) {
        n = lineNodes[i];
        r = n.style.marginRight;
        l = n.style.marginLeft;
        if (r || l) {
          n.style.marginRight = l;
          n.style.marginLeft = r;
        }
        r = n.style.textAlign;
        if (r === "left") n.style.textAlign = "right";
        else if (r === "right") n.style.textAlign = "left";
      }
      const tool = context.tool;
      if (tool.dir) {
        util2.changeTxt(tool.dir.querySelector(".se-tooltip-text"), lang.toolbar[options.rtl ? "dir_ltr" : "dir_rtl"]);
        util2.changeElement(tool.dir.firstElementChild, icons[options.rtl ? "dir_ltr" : "dir_rtl"]);
      }
      if (tool.dir_ltr) {
        if (rtl) util2.removeClass(tool.dir_ltr, "active");
        else util2.addClass(tool.dir_ltr, "active");
      }
      if (tool.dir_rtl) {
        if (rtl) util2.addClass(tool.dir_rtl, "active");
        else util2.removeClass(tool.dir_rtl, "active");
      }
    },
    /**
     * @description Sets the HTML string
     * @param {String|undefined} html HTML string
     */
    setContents: function(html) {
      this.removeRange();
      const convertValue = html === null || html === void 0 ? "" : this.convertContentsForEditor(html, null, null);
      if (!this._variable.isCodeView) {
        context.element.wysiwyg.innerHTML = convertValue;
        this._resetComponents();
        this.history.push(false);
      } else {
        const value = this.convertHTMLForCodeView(convertValue, false);
        this._setCodeView(value);
      }
    },
    /**
     * @description Sets the contents of the iframe's head tag and body tag when using the "iframe" or "fullPage" option.
     * @param {Object} ctx { head: HTML string, body: HTML string}
     */
    setIframeContents: function(ctx) {
      if (!options.iframe) return false;
      if (ctx.head) this._wd.head.innerHTML = this.options.__allowedScriptTag ? ctx.head : ctx.head.replace(this.__scriptTagRegExp, "");
      if (ctx.body) this._wd.body.innerHTML = this.convertContentsForEditor(ctx.body);
      this._resetComponents();
    },
    /**
     * @description Gets the current contents
     * @param {Boolean} onlyContents Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {Object}
     */
    getContents: function(onlyContents) {
      const contents = this.cleanHTML(context.element.wysiwyg.innerHTML, null, null);
      const renderHTML = util2.createElement("DIV");
      renderHTML.innerHTML = contents;
      const editableEls = util2.getListChildren(renderHTML, function(current) {
        return current.hasAttribute("contenteditable");
      });
      for (let i = 0, len = editableEls.length; i < len; i++) {
        editableEls[i].removeAttribute("contenteditable");
      }
      if (options.fullPage && !onlyContents) {
        const attrs = util2.getAttributesToString(this._wd.body, ["contenteditable"]);
        return "<!DOCTYPE html><html>" + this._wd.head.outerHTML + "<body " + attrs + ">" + renderHTML.innerHTML + "</body></html>";
      } else {
        return renderHTML.innerHTML;
      }
    },
    /**
     * @description Gets the current contents with containing parent div(div.sun-editor-editable).
     * <div class="sun-editor-editable">{contents}</div>
     * @param {Boolean} onlyContents Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {String}
     */
    getFullContents: function(onlyContents) {
      return '<div class="sun-editor-editable' + (options.rtl ? " se-rtl" : "") + '">' + this.getContents(onlyContents) + "</div>";
    },
    /**
     * @description Returns HTML string according to tag type and configuration.
     * Use only "cleanHTML"
     * @param {Node} node Node
     * @param {Boolean} requireFormat If true, text nodes that do not have a format node is wrapped with the format tag.
     * @private
     */
    _makeLine: function(node, requireFormat) {
      const defaultTag = options.defaultTag;
      if (node.nodeType === 1) {
        if (this.__disallowedTagNameRegExp.test(node.nodeName)) return "";
        if (/__se__tag/.test(node.className)) return node.outerHTML;
        const ch = util2.getListChildNodes(node, function(current) {
          return util2.isSpanWithoutAttr(current) && !util2.getParentElement(current, util2.isNotCheckingNode);
        }) || [];
        for (let i = ch.length - 1; i >= 0; i--) {
          ch[i].outerHTML = ch[i].innerHTML;
        }
        if (!requireFormat || (util2.isFormatElement(node) || util2.isRangeFormatElement(node) || util2.isComponent(node) || util2.isFigures(node) || util2.isAnchor(node) && util2.isMedia(node.firstElementChild))) {
          return util2.isSpanWithoutAttr(node) ? node.innerHTML : node.outerHTML;
        } else {
          return "<" + defaultTag + ">" + (util2.isSpanWithoutAttr(node) ? node.innerHTML : node.outerHTML) + "</" + defaultTag + ">";
        }
      }
      if (node.nodeType === 3) {
        if (!requireFormat) return util2._HTMLConvertor(node.textContent);
        const textArray = node.textContent.split(/\n/g);
        let html = "";
        for (let i = 0, tLen = textArray.length, text; i < tLen; i++) {
          text = textArray[i].trim();
          if (text.length > 0) html += "<" + defaultTag + ">" + util2._HTMLConvertor(text) + "</" + defaultTag + ">";
        }
        return html;
      }
      if (node.nodeType === 8 && this._allowHTMLComments) {
        return "<!--" + node.textContent.trim() + "-->";
      }
      return "";
    },
    /**
     * @description Removes attribute values such as style and converts tags that do not conform to the "html5" standard.
     * @param {String} text 
     * @returns {String} HTML string
     * @private
     */
    _tagConvertor: function(text) {
      if (!this._disallowedTextTagsRegExp) return text;
      const ec = options._textTagsMap;
      return text.replace(this._disallowedTextTagsRegExp, function(m, t, n, p) {
        return t + (typeof ec[n] === "string" ? ec[n] : n) + (p ? " " + p : "");
      });
    },
    /**
     * @description Delete disallowed tags
     * @param {String} html HTML string
     * @returns {String}
     * @private
     */
    _deleteDisallowedTags: function(html) {
      html = html.replace(this.__disallowedTagsRegExp, "").replace(/<[a-z0-9]+\:[a-z0-9]+[^>^\/]*>[^>]*<\/[a-z0-9]+\:[a-z0-9]+>/gi, "");
      if (!/\bfont\b/i.test(this.options._editorTagsWhitelist)) {
        html = html.replace(/(<\/?)font(\s?)/gi, "$1span$2");
      }
      return html.replace(this.editorTagsWhitelistRegExp, "").replace(this.editorTagsBlacklistRegExp, "");
    },
    _convertFontSize: function(to, size) {
      const math = this._w.Math;
      const value = size.match(/(\d+(?:\.\d+)?)(.+)/);
      const sizeNum = value ? value[1] * 1 : util2.fontValueMap[size];
      const from = value ? value[2] : "rem";
      let pxSize = sizeNum;
      if (/em/.test(from)) {
        pxSize = math.round(sizeNum / 0.0625);
      } else if (from === "pt") {
        pxSize = math.round(sizeNum * 1.333);
      } else if (from === "%") {
        pxSize = sizeNum / 100;
      }
      switch (to) {
        case "em":
        case "rem":
        case "%":
          return (pxSize * 0.0625).toFixed(2) + to;
        case "pt":
          return math.round(pxSize / 1.333) + to;
        default:
          return pxSize + to;
      }
    },
    _cleanStyle: function(m, v, name2) {
      let sv = (m.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/) || [])[0];
      if (/span/i.test(name2) && !sv && (m.match(/<[^\s]+\s(.+)/) || [])[1]) {
        const size = (m.match(/\ssize="([^"]+)"/i) || [])[1];
        const face = (m.match(/\sface="([^"]+)"/i) || [])[1];
        const color = (m.match(/\scolor="([^"]+)"/i) || [])[1];
        if (size || face || color) {
          sv = 'style="' + (size ? "font-size:" + this.util.getNumber(size / 3.333, 1) + "rem;" : "") + (face ? "font-family:" + face + ";" : "") + (color ? "color:" + color + ";" : "") + '"';
        }
      }
      if (sv) {
        if (!v) v = [];
        const style = sv.replace(/&quot;/g, "").match(this._cleanStyleRegExp[name2]);
        if (style) {
          const allowedStyle = [];
          for (let i = 0, len = style.length, r; i < len; i++) {
            r = style[i].match(/([a-zA-Z0-9-]+)(:)([^"']+)/);
            if (r && !/inherit|initial|revert|unset/i.test(r[3])) {
              const k = util2.kebabToCamelCase(r[1].trim());
              const v2 = this.wwComputedStyle[k] ? this.wwComputedStyle[k].replace(/"/g, "") : "";
              const c = r[3].trim();
              switch (k) {
                case "fontFamily":
                  if (!options.plugins.font || options.font.indexOf(c) === -1) continue;
                  break;
                case "fontSize":
                  if (!options.plugins.fontSize) continue;
                  if (!this._cleanStyleRegExp.fontSizeUnit.test(r[0])) {
                    r[0] = r[0].replace((r[0].match(/:\s*([^;]+)/) || [])[1], this._convertFontSize.bind(this, options.fontSizeUnit));
                  }
                  break;
                case "color":
                  if (!options.plugins.fontColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(c)) continue;
                  break;
                case "backgroundColor":
                  if (!options.plugins.hiliteColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(c)) continue;
                  break;
              }
              if (v2 !== c) {
                allowedStyle.push(r[0]);
              }
            }
          }
          if (allowedStyle.length > 0) v.push('style="' + allowedStyle.join(";") + '"');
        }
      }
      return v;
    },
    /**
     * @description Tag and tag attribute check RegExp function. (used by "cleanHTML" and "convertContentsForEditor")
     * @param {Boolean} lowLevelCheck Row level check
     * @param {String} m RegExp value
     * @param {String} t RegExp value
     * @returns {String}
     * @private
     */
    _cleanTags: function(lowLevelCheck, m, t) {
      if (/^<[a-z0-9]+\:[a-z0-9]+/i.test(m)) return m;
      let v = null;
      const tagName = t.match(/(?!<)[a-zA-Z0-9\-]+/)[0].toLowerCase();
      const bAttr = this._attributesTagsBlacklist[tagName];
      m = m.replace(/\s(?:on[a-z]+)\s*=\s*(")[^"]*\1/ig, "");
      if (bAttr) m = m.replace(bAttr, "");
      else m = m.replace(this._attributesBlacklistRegExp, "");
      const wAttr = this._attributesTagsWhitelist[tagName];
      if (wAttr) v = m.match(wAttr);
      else v = m.match(lowLevelCheck ? this._attributesWhitelistRegExp : this._attributesWhitelistRegExp_all_data);
      if (lowLevelCheck || tagName === "span" || tagName === "li" || this._cleanStyleRegExp[tagName]) {
        if (tagName === "a") {
          const sv = m.match(/(?:(?:id|name)\s*=\s*(?:"|')[^"']*(?:"|'))/g);
          if (sv) {
            if (!v) v = [];
            v.push(sv[0]);
          }
        } else if (!v || !/style=/i.test(v.toString())) {
          if (tagName === "span" || tagName === "li") {
            v = this._cleanStyle(m, v, "span");
          }
          if (this._cleanStyleRegExp[tagName]) {
            v = this._cleanStyle(m, v, tagName);
          } else if (/^(P|DIV|H[1-6]|PRE)$/i.test(tagName)) {
            v = this._cleanStyle(m, v, "format");
          }
        }
      } else {
        const sv = m.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        if (sv && !v) v = [sv[0]];
        else if (sv && !v.some(function(v2) {
          return /^style/.test(v2.trim());
        })) v.push(sv[0]);
      }
      if (util2.isFigures(tagName)) {
        const sv = m.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        if (!v) v = [];
        if (sv) v.push(sv[0]);
      }
      if (v) {
        for (let i = 0, len = v.length, a; i < len; i++) {
          a = /^(?:href|src)\s*=\s*('|"|\s)*javascript\s*\:/i.test(v[i].trim()) ? "" : v[i];
          t += (/^\s/.test(a) ? "" : " ") + a;
        }
      }
      return t;
    },
    /**
     * @description Determines if formatting is required and returns a domTree
     * @param {Element} dom documentFragment
     * @returns {Element}
     * @private
     */
    _editFormat: function(dom) {
      let value = "", f;
      const tempTree = dom.childNodes;
      for (let i = 0, len = tempTree.length, n; i < len; i++) {
        n = tempTree[i];
        if (n.nodeType === 8) {
          value += "<!-- " + n.textContent + " -->";
        } else if (!util2.isFormatElement(n) && !util2.isRangeFormatElement(n) && !util2.isComponent(n) && !/meta/i.test(n.nodeName)) {
          if (!f) f = util2.createElement(options.defaultTag);
          if (util2.isTextStyleElement(n)) {
            n.removeAttribute("style");
          }
          f.appendChild(n);
          i--;
          len--;
        } else {
          if (f) {
            value += f.outerHTML;
            f = null;
          }
          value += n.outerHTML;
        }
      }
      if (f) value += f.outerHTML;
      return _d.createRange().createContextualFragment(value);
    },
    _convertListCell: function(domTree) {
      let html = "";
      for (let i = 0, len = domTree.length, node; i < len; i++) {
        node = domTree[i];
        if (node.nodeType === 1) {
          if (util2.isList(node)) {
            html += node.innerHTML;
          } else if (util2.isListCell(node)) {
            html += node.outerHTML;
          } else if (util2.isFormatElement(node)) {
            html += "<li>" + (node.innerHTML.trim() || "<br>") + "</li>";
          } else if (util2.isRangeFormatElement(node) && !util2.isTable(node)) {
            html += this._convertListCell(node);
          } else {
            html += "<li>" + node.outerHTML + "</li>";
          }
        } else {
          html += "<li>" + (node.textContent || "<br>") + "</li>";
        }
      }
      return html;
    },
    _isFormatData: function(domTree) {
      let requireFormat = false;
      for (let i = 0, len = domTree.length, t; i < len; i++) {
        t = domTree[i];
        if (t.nodeType === 1 && !util2.isTextStyleElement(t) && !util2.isBreak(t) && !this.__disallowedTagNameRegExp.test(t.nodeName)) {
          requireFormat = true;
          break;
        }
      }
      return requireFormat;
    },
    /**
     * @description Gets the clean HTML code for editor
     * @param {String} html HTML string
     * @param {String|RegExp|null} whitelist Regular expression of allowed tags.
     * RegExp object is create by util.createTagsWhitelist method. (core.pasteTagsWhitelistRegExp)
     * @param {String|RegExp|null} blacklist Regular expression of disallowed tags.
     * RegExp object is create by util.createTagsBlacklist method. (core.pasteTagsBlacklistRegExp)
     * @returns {String}
     */
    cleanHTML: function(html, whitelist, blacklist) {
      if (!options.strictMode) return util2.htmlCompress(html);
      html = this._deleteDisallowedTags(this._parser.parseFromString(util2.htmlCompress(html), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, true)).replace(/<br\/?>$/i, "");
      const dom = _d.createRange().createContextualFragment(html);
      try {
        util2._consistencyCheckOfHTML(dom, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, options.strictHTMLValidation);
      } catch (error) {
        console.warn("[SUNEDITOR.cleanHTML.consistencyCheck.fail] " + error);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const textCompList = dom.querySelectorAll(this.managedTagsInfo.query);
        for (let i = 0, len = textCompList.length, initMethod, classList; i < len; i++) {
          classList = [].slice.call(textCompList[i].classList);
          for (let c = 0, cLen = classList.length; c < cLen; c++) {
            initMethod = this.managedTagsInfo.map[classList[c]];
            if (initMethod) {
              initMethod(textCompList[i]);
              break;
            }
          }
        }
      }
      let domTree = dom.childNodes;
      let cleanHTML = "";
      const requireFormat = this._isFormatData(domTree);
      if (requireFormat) {
        domTree = this._editFormat(dom).childNodes;
      }
      for (let i = 0, len = domTree.length, t; i < len; i++) {
        t = domTree[i];
        if (this.__allowedScriptRegExp.test(t.nodeName)) {
          cleanHTML += t.outerHTML;
          continue;
        }
        cleanHTML += this._makeLine(t, requireFormat);
      }
      cleanHTML = util2.htmlRemoveWhiteSpace(cleanHTML);
      if (!cleanHTML) {
        cleanHTML = html;
      } else {
        if (whitelist) cleanHTML = cleanHTML.replace(typeof whitelist === "string" ? util2.createTagsWhitelist(whitelist) : whitelist, "");
        if (blacklist) cleanHTML = cleanHTML.replace(typeof blacklist === "string" ? util2.createTagsBlacklist(blacklist) : blacklist, "");
      }
      return this._tagConvertor(cleanHTML);
    },
    /**
     * @description Converts contents into a format that can be placed in an editor
     * @param {String} contents contents
     * @returns {String}
     */
    convertContentsForEditor: function(contents) {
      if (!options.strictMode) return util2.htmlCompress(contents);
      contents = this._deleteDisallowedTags(this._parser.parseFromString(util2.htmlCompress(contents), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, true));
      const dom = _d.createRange().createContextualFragment(contents);
      try {
        util2._consistencyCheckOfHTML(dom, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, options.strictHTMLValidation);
      } catch (error) {
        console.warn("[SUNEDITOR.convertContentsForEditor.consistencyCheck.fail] " + error);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const textCompList = dom.querySelectorAll(this.managedTagsInfo.query);
        for (let i = 0, len = textCompList.length, initMethod, classList; i < len; i++) {
          classList = [].slice.call(textCompList[i].classList);
          for (let c = 0, cLen = classList.length; c < cLen; c++) {
            initMethod = this.managedTagsInfo.map[classList[c]];
            if (initMethod) {
              initMethod(textCompList[i]);
              break;
            }
          }
        }
      }
      const domTree = dom.childNodes;
      let cleanHTML = "", p = null;
      for (let i = 0, t; i < domTree.length; i++) {
        t = domTree[i];
        if (this.__allowedScriptRegExp.test(t.nodeName)) {
          cleanHTML += t.outerHTML;
          continue;
        }
        if (!util2.isFormatElement(t) && !util2.isRangeFormatElement(t) && !util2.isComponent(t) && !util2.isFigures(t) && t.nodeType !== 8 && !/__se__tag/.test(t.className)) {
          if (!p) p = util2.createElement(options.defaultTag);
          p.appendChild(t);
          i--;
          if (domTree[i + 1] && !util2.isFormatElement(domTree[i + 1])) {
            continue;
          } else {
            t = p;
            p = null;
          }
        }
        if (p) {
          cleanHTML += this._makeLine(p, true);
          p = null;
        }
        cleanHTML += this._makeLine(t, true);
      }
      if (p) cleanHTML += this._makeLine(p, true);
      if (cleanHTML.length === 0) return "<" + options.defaultTag + "><br></" + options.defaultTag + ">";
      cleanHTML = util2.htmlRemoveWhiteSpace(cleanHTML);
      return this._tagConvertor(cleanHTML);
    },
    /**
     * @description Converts wysiwyg area element into a format that can be placed in an editor of code view mode
     * @param {Element|String} html WYSIWYG element (context.element.wysiwyg) or HTML string.
     * @param {Boolean} comp If true, does not line break and indentation of tags.
     * @returns {String}
     */
    convertHTMLForCodeView: function(html, comp) {
      let returnHTML = "";
      const wRegExp = _w.RegExp;
      const brReg = new wRegExp("^(BLOCKQUOTE|PRE|TABLE|THEAD|TBODY|TR|TH|TD|OL|UL|IMG|IFRAME|VIDEO|AUDIO|FIGURE|FIGCAPTION|HR|BR|CANVAS|SELECT)$", "i");
      const wDoc = typeof html === "string" ? _d.createRange().createContextualFragment(html) : html;
      const isFormat = (function(current) {
        return this.isFormatElement(current) || this.isComponent(current);
      }).bind(util2);
      const brChar = comp ? "" : "\n";
      let indentSize = comp ? 0 : this._variable.codeIndent * 1;
      indentSize = indentSize > 0 ? new _w.Array(indentSize + 1).join(" ") : "";
      (function recursionFunc(element, indent) {
        const children = element.childNodes;
        const elementRegTest = brReg.test(element.nodeName);
        const elementIndent = elementRegTest ? indent : "";
        for (let i = 0, len = children.length, node, br, lineBR, nodeRegTest, tag, tagIndent; i < len; i++) {
          node = children[i];
          nodeRegTest = brReg.test(node.nodeName);
          br = nodeRegTest ? brChar : "";
          lineBR = isFormat(node) && !elementRegTest && !/^(TH|TD)$/i.test(element.nodeName) ? brChar : "";
          if (node.nodeType === 8) {
            returnHTML += "\n<!-- " + node.textContent.trim() + " -->" + br;
            continue;
          }
          if (node.nodeType === 3) {
            if (!util2.isList(node.parentElement)) returnHTML += util2._HTMLConvertor(/^\n+$/.test(node.data) ? "" : node.data);
            continue;
          }
          if (node.childNodes.length === 0) {
            returnHTML += (/^HR$/i.test(node.nodeName) ? brChar : "") + (/^PRE$/i.test(node.parentElement.nodeName) && /^BR$/i.test(node.nodeName) ? "" : elementIndent) + node.outerHTML + br;
            continue;
          }
          if (!node.outerHTML) {
            returnHTML += new _w.XMLSerializer().serializeToString(node);
          } else {
            tag = node.nodeName.toLowerCase();
            tagIndent = elementIndent || nodeRegTest ? indent : "";
            returnHTML += (lineBR || (elementRegTest ? "" : br)) + tagIndent + node.outerHTML.match(wRegExp("<" + tag + "[^>]*>", "i"))[0] + br;
            recursionFunc(node, indent + indentSize, "");
            returnHTML += (/\n$/.test(returnHTML) ? tagIndent : "") + "</" + tag + ">" + (lineBR || br || elementRegTest ? brChar : /^(TH|TD)$/i.test(node.nodeName) ? brChar : "");
          }
        }
      })(wDoc, "");
      return returnHTML.trim() + brChar;
    },
    /**
     * @description Add an event to document.
     * When created as an Iframe, the same event is added to the document in the Iframe.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     * @param {Boolean} useCapture Use event capture
     */
    addDocEvent: function(type, listener, useCapture) {
      _d.addEventListener(type, listener, useCapture);
      if (options.iframe) {
        this._wd.addEventListener(type, listener);
      }
    },
    /**
     * @description Remove events from document.
     * When created as an Iframe, the event of the document inside the Iframe is also removed.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     */
    removeDocEvent: function(type, listener) {
      _d.removeEventListener(type, listener);
      if (options.iframe) {
        this._wd.removeEventListener(type, listener);
      }
    },
    /**
     * @description The current number of characters is counted and displayed.
     * @param {String} inputText Text added.
     * @returns {Boolean}
     * @private
     */
    _charCount: function(inputText) {
      const maxCharCount = options.maxCharCount;
      const countType = options.charCounterType;
      let nextCharCount = 0;
      if (!!inputText) nextCharCount = this.getCharLength(inputText, countType);
      this._setCharCount();
      if (maxCharCount > 0) {
        let over = false;
        const count = functions.getCharCount(countType);
        if (count > maxCharCount) {
          over = true;
          if (nextCharCount > 0) {
            this._editorRange();
            const range = this.getRange();
            const endOff = range.endOffset - 1;
            const text = this.getSelectionNode().textContent;
            const slicePosition = range.endOffset - (count - maxCharCount);
            this.getSelectionNode().textContent = text.slice(0, slicePosition < 0 ? 0 : slicePosition) + text.slice(range.endOffset, text.length);
            this.setRange(range.endContainer, endOff, range.endContainer, endOff);
          }
        } else if (count + nextCharCount > maxCharCount) {
          over = true;
        }
        if (over) {
          this._callCounterBlink();
          if (nextCharCount > 0) return false;
        }
      }
      return true;
    },
    /**
     * @description When "element" is added, if it is greater than "options.maxCharCount", false is returned.
     * @param {Node|String} element Element node or String.
     * @param {String|null} charCounterType charCounterType. If it is null, the options.charCounterType
     * @returns {Boolean}
     */
    checkCharCount: function(element, charCounterType) {
      if (options.maxCharCount) {
        const countType = charCounterType || options.charCounterType;
        const length = this.getCharLength(typeof element === "string" ? element : this._charTypeHTML && element.nodeType === 1 ? element.outerHTML : element.textContent, countType);
        if (length > 0 && length + functions.getCharCount(countType) > options.maxCharCount) {
          this._callCounterBlink();
          return false;
        }
      }
      return true;
    },
    /**
     * @description Get the length of the content.
     * Depending on the option, the length of the character is taken. (charCounterType)
     * @param {String} content Content to count
     * @param {String} charCounterType options.charCounterType
     * @returns {Number}
     */
    getCharLength: function(content, charCounterType) {
      return /byte/.test(charCounterType) ? util2.getByteLength(content) : content.length;
    },
    /**
     * @description Reset buttons of the responsive toolbar.
     */
    resetResponsiveToolbar: function() {
      core.controllersOff();
      const responsiveSize = event._responsiveButtonSize;
      if (responsiveSize) {
        let w = 0;
        if ((core._isBalloon || core._isInline) && options.toolbarWidth === "auto") {
          w = context.element.topArea.offsetWidth;
        } else {
          w = context.element.toolbar.offsetWidth;
        }
        let responsiveWidth = "default";
        for (let i = 1, len = responsiveSize.length; i < len; i++) {
          if (w < responsiveSize[i]) {
            responsiveWidth = responsiveSize[i] + "";
            break;
          }
        }
        if (event._responsiveCurrentSize !== responsiveWidth) {
          event._responsiveCurrentSize = responsiveWidth;
          functions.setToolbarButtons(event._responsiveButtons[responsiveWidth]);
        }
      }
    },
    /**
     * @description Set the char count to charCounter element textContent.
     * @private
     */
    _setCharCount: function() {
      if (context.element.charCounter) {
        _w.setTimeout((function(functions2, options2) {
          if (this.textContent && functions2) {
            this.textContent = functions2.getCharCount(options2.charCounterType);
          }
        }).bind(context.element.charCounter, functions, options), 0);
      }
    },
    /**
     * @description The character counter blinks.
     * @private
     */
    _callCounterBlink: function() {
      const charWrapper = context.element.charWrapper;
      if (charWrapper && !util2.hasClass(charWrapper, "se-blink")) {
        util2.addClass(charWrapper, "se-blink");
        _w.setTimeout(function() {
          util2.removeClass(charWrapper, "se-blink");
        }, 600);
      }
    },
    /**
     * @description Check the components such as image and video and modify them according to the format.
     * @private
     */
    _checkComponents: function() {
      for (let i = 0, len = this._fileInfoPluginsCheck.length; i < len; i++) {
        this._fileInfoPluginsCheck[i]();
      }
    },
    /**
     * @description Initialize the information of the components.
     * @private
     */
    _resetComponents: function() {
      for (let i = 0, len = this._fileInfoPluginsReset.length; i < len; i++) {
        this._fileInfoPluginsReset[i]();
      }
    },
    /**
     * @description Set method in the code view area
     * @param {String} value HTML string
     * @private
     */
    _setCodeView: function(value) {
      if (options.codeMirrorEditor) {
        options.codeMirrorEditor.getDoc().setValue(value);
      } else {
        context.element.code.value = value;
      }
    },
    /**
     * @description Get method in the code view area
     * @private
     */
    _getCodeView: function() {
      return options.codeMirrorEditor ? options.codeMirrorEditor.getDoc().getValue() : context.element.code.value;
    },
    /**
     * @description remove class, display text.
     * @param {Array|null} ignoredList Igonred button list
     */
    _setKeyEffect: function(ignoredList) {
      const commandMap = this.commandMap;
      const activePlugins = this.activePlugins;
      for (let key in commandMap) {
        if (ignoredList.indexOf(key) > -1 || !util2.hasOwn(commandMap, key)) continue;
        if (activePlugins.indexOf(key) > -1) {
          plugins[key].active.call(this, null);
        } else if (commandMap.OUTDENT && /^OUTDENT$/i.test(key)) {
          if (!util2.isImportantDisabled(commandMap.OUTDENT)) commandMap.OUTDENT.setAttribute("disabled", true);
        } else if (commandMap.INDENT && /^INDENT$/i.test(key)) {
          if (!util2.isImportantDisabled(commandMap.INDENT)) commandMap.INDENT.removeAttribute("disabled");
        } else {
          util2.removeClass(commandMap[key], "active");
        }
      }
    },
    /**
     * @description Initializ core variable
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _init: function(reload, _initHTML) {
      const wRegExp = _w.RegExp;
      this._ww = options.iframe ? context.element.wysiwygFrame.contentWindow : _w;
      this._wd = _d;
      this._charTypeHTML = options.charCounterType === "byte-html";
      this.wwComputedStyle = _w.getComputedStyle(context.element.wysiwyg);
      this._editorHeight = context.element.wysiwygFrame.offsetHeight;
      this._editorHeightPadding = util2.getNumber(this.wwComputedStyle.getPropertyValue("padding-top")) + util2.getNumber(this.wwComputedStyle.getPropertyValue("padding-bottom"));
      this._classNameFilter = (function(v) {
        return this.test(v) ? v : "";
      }).bind(options.allowedClassNames);
      const sPrefix = options.__allowedScriptTag ? "" : "script|";
      this.__scriptTagRegExp = new wRegExp("<(script)[^>]*>([\\s\\S]*?)<\\/\\1>|<script[^>]*\\/?>", "gi");
      this.__disallowedTagsRegExp = new wRegExp("<(" + sPrefix + "style)[^>]*>([\\s\\S]*?)<\\/\\1>|<(" + sPrefix + "style)[^>]*\\/?>", "gi");
      this.__disallowedTagNameRegExp = new wRegExp("^(" + sPrefix + "meta|link|style|[a-z]+:[a-z]+)$", "i");
      this.__allowedScriptRegExp = new wRegExp("^" + (options.__allowedScriptTag ? "script" : "") + "$", "i");
      if (!options.iframe && typeof _w.ShadowRoot === "function") {
        let child = context.element.wysiwygFrame;
        while (child) {
          if (child.shadowRoot) {
            this._shadowRoot = child.shadowRoot;
            break;
          } else if (child instanceof _w.ShadowRoot) {
            this._shadowRoot = child;
            break;
          }
          child = child.parentNode;
        }
        if (this._shadowRoot) this._shadowRootControllerEventTarget = [];
      }
      const disallowTextTags = _w.Object.keys(options._textTagsMap);
      const allowTextTags = !options.addTagsWhitelist ? [] : options.addTagsWhitelist.split("|").filter(function(v) {
        return /b|i|ins|s|strike/i.test(v);
      });
      for (let i = 0; i < allowTextTags.length; i++) {
        disallowTextTags.splice(disallowTextTags.indexOf(allowTextTags[i].toLowerCase()), 1);
      }
      this._disallowedTextTagsRegExp = disallowTextTags.length === 0 ? null : new wRegExp("(<\\/?)(" + disallowTextTags.join("|") + ")\\b\\s*([^>^<]+)?\\s*(?=>)", "gi");
      const getRegList = function(str, str2) {
        return !str ? "^" : str === "*" ? "[a-z-]+" : !str2 ? str : str + "|" + str2;
      };
      const videoAttr = "|controls|autoplay|loop|muted|poster|preload|playsinline";
      const iframeAttr = "|allowfullscreen|sandbox|loading|allow|referrerpolicy|frameborder|scrolling";
      const defaultAttr = "contenteditable|colspan|rowspan|target|href|download|rel|src|alt|class|type|origin-size" + videoAttr + iframeAttr;
      const dataAttr = "data-format|data-size|data-file-size|data-file-name|data-origin|data-align|data-image-link|data-rotate|data-proportion|data-percentage|data-exp|data-font-size";
      this._allowHTMLComments = options._editorTagsWhitelist.indexOf("//") > -1 || options._editorTagsWhitelist === "*";
      this._htmlCheckWhitelistRegExp = new wRegExp("^(" + getRegList(options._editorTagsWhitelist.replace("|//", ""), "") + ")$", "i");
      this._htmlCheckBlacklistRegExp = new wRegExp("^(" + (options.tagsBlacklist || "^") + ")$", "i");
      this.editorTagsWhitelistRegExp = util2.createTagsWhitelist(getRegList(options._editorTagsWhitelist.replace("|//", "|<!--|-->"), ""));
      this.editorTagsBlacklistRegExp = util2.createTagsBlacklist(options.tagsBlacklist.replace("|//", "|<!--|-->"));
      this.pasteTagsWhitelistRegExp = util2.createTagsWhitelist(getRegList(options.pasteTagsWhitelist, ""));
      this.pasteTagsBlacklistRegExp = util2.createTagsBlacklist(options.pasteTagsBlacklist);
      const regEndStr = '\\s*=\\s*(")[^"]*\\1';
      const _wAttr = options.attributesWhitelist;
      let tagsAttr = {};
      let allAttr = "";
      if (!!_wAttr) {
        for (let k in _wAttr) {
          if (!util2.hasOwn(_wAttr, k) || /^on[a-z]+$/i.test(_wAttr[k])) continue;
          if (k === "all") {
            allAttr = getRegList(_wAttr[k], defaultAttr);
          } else {
            tagsAttr[k] = new wRegExp("\\s(?:" + getRegList(_wAttr[k], defaultAttr) + ")" + regEndStr, "ig");
          }
        }
      }
      this._attributesWhitelistRegExp = new wRegExp("\\s(?:" + (allAttr || defaultAttr + "|" + dataAttr) + ")" + regEndStr, "ig");
      this._attributesWhitelistRegExp_all_data = new wRegExp("\\s(?:" + ((allAttr || defaultAttr) + "|data-[a-z0-9\\-]+") + ")" + regEndStr, "ig");
      this._attributesTagsWhitelist = tagsAttr;
      const _bAttr = options.attributesBlacklist;
      tagsAttr = {};
      allAttr = "";
      if (!!_bAttr) {
        for (let k in _bAttr) {
          if (!util2.hasOwn(_bAttr, k)) continue;
          if (k === "all") {
            allAttr = getRegList(_bAttr[k], "");
          } else {
            tagsAttr[k] = new wRegExp("\\s(?:" + getRegList(_bAttr[k], "") + ")" + regEndStr, "ig");
          }
        }
      }
      this._attributesBlacklistRegExp = new wRegExp("\\s(?:" + (allAttr || "^") + ")" + regEndStr, "ig");
      this._attributesTagsBlacklist = tagsAttr;
      this._isInline = /inline/i.test(options.mode);
      this._isBalloon = /balloon|balloon-always/i.test(options.mode);
      this._isBalloonAlways = /balloon-always/i.test(options.mode);
      this._cachingButtons();
      this._fileInfoPluginsCheck = [];
      this._fileInfoPluginsReset = [];
      this.managedTagsInfo = { query: "", map: {} };
      const managedClass = [];
      this.activePlugins = [];
      this._fileManager.tags = [];
      this._fileManager.pluginMap = {};
      let filePluginRegExp = [];
      let plugin, button;
      for (let key in plugins) {
        if (!util2.hasOwn(plugins, key)) continue;
        plugin = plugins[key];
        button = pluginCallButtons[key];
        if ((plugin.active || plugin.action) && button) {
          this.callPlugin(key, null, button);
        }
        if (typeof plugin.checkFileInfo === "function" && typeof plugin.resetFileInfo === "function") {
          this.callPlugin(key, null, button);
          this._fileInfoPluginsCheck.push(plugin.checkFileInfo.bind(this));
          this._fileInfoPluginsReset.push(plugin.resetFileInfo.bind(this));
        }
        if (_w.Array.isArray(plugin.fileTags)) {
          const fileTags = plugin.fileTags;
          this.callPlugin(key, null, button);
          this._fileManager.tags = this._fileManager.tags.concat(fileTags);
          filePluginRegExp.push(key);
          for (let tag = 0, tLen = fileTags.length; tag < tLen; tag++) {
            this._fileManager.pluginMap[fileTags[tag].toLowerCase()] = key;
          }
        }
        if (plugin.managedTags) {
          const info = plugin.managedTags();
          managedClass.push("." + info.className);
          this.managedTagsInfo.map[info.className] = info.method.bind(this);
        }
      }
      this.managedTagsInfo.query = managedClass.toString();
      this._fileManager.queryString = this._fileManager.tags.join(",");
      this._fileManager.regExp = new wRegExp("^(" + (this._fileManager.tags.join("|") || "^") + ")$", "i");
      this._fileManager.pluginRegExp = new wRegExp("^(" + (filePluginRegExp.length === 0 ? "^" : filePluginRegExp.join("|")) + ")$", "i");
      this._variable._originCssText = context.element.topArea.style.cssText;
      this._placeholder = context.element.placeholder;
      this._lineBreaker = context.element.lineBreaker;
      this._lineBreakerButton = this._lineBreaker.querySelector("button");
      this.history = history_default(this, this._onChange_historyStack.bind(this));
      this.addModule([notice_default]);
      if (options.iframe) {
        this._wd = context.element.wysiwygFrame.contentDocument;
        context.element.wysiwyg = this._wd.body;
        if (options._editorStyles.editor) context.element.wysiwyg.style.cssText = options._editorStyles.editor;
        if (options.height === "auto") this._iframeAuto = this._wd.body;
      }
      this._initWysiwygArea(reload, _initHTML);
    },
    /**
     * @description Caching basic buttons to use
     * @private
     */
    _cachingButtons: function() {
      this.codeViewDisabledButtons = context.element._buttonTray.querySelectorAll('.se-menu-list button[data-display]:not([class~="se-code-view-enabled"]):not([data-display="MORE"])');
      this.resizingDisabledButtons = context.element._buttonTray.querySelectorAll('.se-menu-list button[data-display]:not([class~="se-resizing-enabled"]):not([data-display="MORE"])');
      const tool = context.tool;
      const commandMap = this.commandMap;
      commandMap.INDENT = tool.indent;
      commandMap.OUTDENT = tool.outdent;
      commandMap[options.textTags.bold.toUpperCase()] = tool.bold;
      commandMap[options.textTags.underline.toUpperCase()] = tool.underline;
      commandMap[options.textTags.italic.toUpperCase()] = tool.italic;
      commandMap[options.textTags.strike.toUpperCase()] = tool.strike;
      commandMap[options.textTags.sub.toUpperCase()] = tool.subscript;
      commandMap[options.textTags.sup.toUpperCase()] = tool.superscript;
      this._styleCommandMap = {
        fullScreen: tool.fullScreen,
        showBlocks: tool.showBlocks,
        codeView: tool.codeView
      };
      this._saveButtonStates();
    },
    /**
     * @description Initializ wysiwyg area (Only called from core._init)
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _initWysiwygArea: function(reload, _initHTML) {
      context.element.wysiwyg.innerHTML = reload ? _initHTML : this.convertContentsForEditor((typeof _initHTML === "string" ? _initHTML : /^TEXTAREA$/i.test(context.element.originElement.nodeName) ? context.element.originElement.value : context.element.originElement.innerHTML) || "");
    },
    /**
     * @description Called when there are changes to tags in the wysiwyg region.
     * @private
     */
    _resourcesStateChange: function() {
      this._iframeAutoHeight();
      this._checkPlaceholder();
    },
    /**
     * @description Called when after execute "history.push"
     * @private
     */
    _onChange_historyStack: function() {
      if (this.hasFocus) event._applyTagEffects();
      this._variable.isChanged = true;
      if (context.tool.save) context.tool.save.removeAttribute("disabled");
      if (functions.onChange) functions.onChange(this.getContents(true), this);
      if (context.element.toolbar.style.display === "block") event._showToolbarBalloon();
    },
    /**
     * @description Modify the height value of the iframe when the height of the iframe is automatic.
     * @private
     */
    _iframeAutoHeight: function() {
      if (this._iframeAuto) {
        _w.setTimeout(function() {
          const h = core._iframeAuto.offsetHeight;
          context.element.wysiwygFrame.style.height = h + "px";
          if (!util2.isResizeObserverSupported) core.__callResizeFunction(h, null);
        });
      } else if (!util2.isResizeObserverSupported) {
        core.__callResizeFunction(context.element.wysiwygFrame.offsetHeight, null);
      }
    },
    __callResizeFunction: function(h, resizeObserverEntry) {
      h = h === -1 ? resizeObserverEntry.borderBoxSize && resizeObserverEntry.borderBoxSize[0] ? resizeObserverEntry.borderBoxSize[0].blockSize : resizeObserverEntry.contentRect.height + this._editorHeightPadding : h;
      if (this._editorHeight !== h) {
        if (typeof functions.onResizeEditor === "function") functions.onResizeEditor(h, this._editorHeight, core, resizeObserverEntry);
        this._editorHeight = h;
      }
    },
    /**
     * @description Set display property when there is placeholder.
     * @private
     */
    _checkPlaceholder: function() {
      if (this._placeholder) {
        if (this._variable.isCodeView) {
          this._placeholder.style.display = "none";
          return;
        }
        const wysiwyg = context.element.wysiwyg;
        if (!util2.onlyZeroWidthSpace(wysiwyg.textContent) || wysiwyg.querySelector(util2._allowedEmptyNodeList) || (wysiwyg.innerText.match(/\n/g) || "").length > 1) {
          this._placeholder.style.display = "none";
        } else {
          this._placeholder.style.display = "block";
        }
      }
    },
    /**
     * @description If there is no default format, add a format and move "selection".
     * @param {String|null} formatName Format tag name (default: 'P')
     * @returns {undefined|null}
     * @private
     */
    _setDefaultFormat: function(formatName) {
      if (this._fileManager.pluginRegExp.test(this.currentControllerName)) return;
      const range = this.getRange();
      const commonCon = range.commonAncestorContainer;
      const startCon = range.startContainer;
      const rangeEl = util2.getRangeFormatElement(commonCon, null);
      let focusNode, offset, format;
      const fileComponent = util2.getParentElement(commonCon, util2.isComponent);
      if (fileComponent && !util2.isTable(fileComponent)) {
        return;
      } else if (commonCon.nodeType === 1 && commonCon.getAttribute("data-se-embed") === "true") {
        let el = commonCon.nextElementSibling;
        if (!util2.isFormatElement(el)) el = this.appendFormatTag(commonCon, options.defaultTag);
        this.setRange(el.firstChild, 0, el.firstChild, 0);
        return;
      }
      if ((util2.isRangeFormatElement(startCon) || util2.isWysiwygDiv(startCon)) && (util2.isComponent(startCon.children[range.startOffset]) || util2.isComponent(startCon.children[range.startOffset - 1]))) return;
      if (util2.getParentElement(commonCon, util2.isNotCheckingNode)) return null;
      if (rangeEl) {
        format = util2.createElement(formatName || options.defaultTag);
        format.innerHTML = rangeEl.innerHTML;
        if (format.childNodes.length === 0) format.innerHTML = util2.zeroWidthSpace;
        rangeEl.innerHTML = format.outerHTML;
        format = rangeEl.firstChild;
        focusNode = util2.getEdgeChildNodes(format, null).sc;
        if (!focusNode) {
          focusNode = util2.createTextNode(util2.zeroWidthSpace);
          format.insertBefore(focusNode, format.firstChild);
        }
        offset = focusNode.textContent.length;
        this.setRange(focusNode, offset, focusNode, offset);
        return;
      }
      if (util2.isRangeFormatElement(commonCon) && commonCon.childNodes.length <= 1) {
        let br = null;
        if (commonCon.childNodes.length === 1 && util2.isBreak(commonCon.firstChild)) {
          br = commonCon.firstChild;
        } else {
          br = util2.createTextNode(util2.zeroWidthSpace);
          commonCon.appendChild(br);
        }
        this.setRange(br, 1, br, 1);
        return;
      }
      try {
        if (commonCon.nodeType === 3) {
          format = util2.createElement(formatName || options.defaultTag);
          commonCon.parentNode.insertBefore(format, commonCon);
          format.appendChild(commonCon);
        }
        if (util2.isWysiwygDiv(commonCon)) {
          format = util2.createElement(formatName || options.defaultTag);
          format.innerHTML = commonCon.innerHTML;
          commonCon.innerHTML = "";
          commonCon.appendChild(format);
          this.effectNode = null;
          this.setRange(format, 1, format, 1);
          return;
        }
        if (format) {
          if (util2.isBreak(format.nextSibling)) util2.removeItem(format.nextSibling);
          if (util2.isBreak(format.previousSibling)) util2.removeItem(format.previousSibling);
        }
        if (util2.isBreak(focusNode)) {
          const zeroWidth = util2.createTextNode(util2.zeroWidthSpace);
          focusNode.parentNode.insertBefore(zeroWidth, focusNode);
          focusNode = zeroWidth;
        }
      } catch (e) {
        this.execCommand("formatBlock", false, formatName || options.defaultTag);
        this.removeRange();
        this._editorRange();
        this.effectNode = null;
        return;
      }
      if (format) {
        if (util2.isBreak(format.nextSibling)) util2.removeItem(format.nextSibling);
        if (util2.isBreak(format.previousSibling)) util2.removeItem(format.previousSibling);
        if (util2.isBreak(focusNode)) {
          const zeroWidth = util2.createTextNode(util2.zeroWidthSpace);
          focusNode.parentNode.insertBefore(zeroWidth, focusNode);
          focusNode = zeroWidth;
        }
      }
      this.effectNode = null;
      if (startCon) {
        this.setRange(startCon, 1, startCon, 1);
      } else {
        this.nativeFocus();
      }
    },
    /**
     * @description Initialization after "setOptions"
     * @param {Object} el context.element
     * @param {String} _initHTML Initial html string
     * @private
     */
    _setOptionsInit: function(el, _initHTML) {
      this.context = context = context_default(el.originElement, this._getConstructed(el), options);
      this._componentsInfoReset = true;
      this._editorInit(true, _initHTML);
    },
    /**
     * @description Initializ editor
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _editorInit: function(reload, _initHTML) {
      this._init(reload, _initHTML);
      event._addEvent();
      this._setCharCount();
      event._offStickyToolbar();
      event.onResize_window();
      context.element.toolbar.style.visibility = "";
      const attr = options.frameAttrbutes;
      for (let k in attr) {
        context.element.wysiwyg.setAttribute(k, attr[k]);
      }
      this._checkComponents();
      this._componentsInfoInit = false;
      this._componentsInfoReset = false;
      this.history.reset(true);
      _w.setTimeout(function() {
        if (typeof core._resourcesStateChange !== "function") return;
        if (event._resizeObserver) event._resizeObserver.observe(context.element.wysiwygFrame);
        if (event._toolbarObserver) event._toolbarObserver.observe(context.element._toolbarShadow);
        core._resourcesStateChange();
        if (typeof functions.onload === "function") functions.onload(core, reload);
      });
    },
    /**
     * @description Create and return an object to cache the new context.
     * @param {Element} contextEl context.element
     * @returns {Object}
     * @private
     */
    _getConstructed: function(contextEl2) {
      return {
        _top: contextEl2.topArea,
        _relative: contextEl2.relative,
        _toolBar: contextEl2.toolbar,
        _toolbarShadow: contextEl2._toolbarShadow,
        _menuTray: contextEl2._menuTray,
        _editorArea: contextEl2.editorArea,
        _wysiwygArea: contextEl2.wysiwygFrame,
        _codeArea: contextEl2.code,
        _placeholder: contextEl2.placeholder,
        _resizingBar: contextEl2.resizingBar,
        _navigation: contextEl2.navigation,
        _charCounter: contextEl2.charCounter,
        _charWrapper: contextEl2.charWrapper,
        _loading: contextEl2.loading,
        _lineBreaker: contextEl2.lineBreaker,
        _lineBreaker_t: contextEl2.lineBreaker_t,
        _lineBreaker_b: contextEl2.lineBreaker_b,
        _resizeBack: contextEl2.resizeBackground,
        _stickyDummy: contextEl2._stickyDummy,
        _arrow: contextEl2._arrow
      };
    }
  };
  const event = {
    _IEisComposing: false,
    // In IE, there is no "e.isComposing" in the key-up event.
    _lineBreakerBind: null,
    _responsiveCurrentSize: "default",
    _responsiveButtonSize: null,
    _responsiveButtons: null,
    _deleteKeyCode: new _w.RegExp("^(8|46)$"),
    _cursorMoveKeyCode: new _w.RegExp("^(8|3[2-9]|40|46)$"),
    _directionKeyCode: new _w.RegExp("^(8|13|3[2-9]|40|46)$"),
    _nonTextKeyCode: new _w.RegExp("^(8|13|1[6-9]|20|27|3[3-9]|40|45|46|11[2-9]|12[0-3]|144|145)$"),
    _historyIgnoreKeyCode: new _w.RegExp("^(1[6-9]|20|27|3[3-9]|40|45|11[2-9]|12[0-3]|144|145)$"),
    _onButtonsCheck: new _w.RegExp("^(" + _w.Object.keys(options._textTagsMap).join("|") + ")$", "i"),
    _frontZeroWidthReg: new _w.RegExp(util2.zeroWidthSpace + "+", ""),
    _keyCodeShortcut: {
      65: "A",
      66: "B",
      83: "S",
      85: "U",
      73: "I",
      89: "Y",
      90: "Z",
      219: "[",
      221: "]"
    },
    _shortcutCommand: function(keyCode, shift) {
      let command = null;
      const keyStr = event._keyCodeShortcut[keyCode];
      switch (keyStr) {
        case "A":
          command = "selectAll";
          break;
        case "B":
          if (options.shortcutsDisable.indexOf("bold") === -1) {
            command = "bold";
          }
          break;
        case "S":
          if (shift && options.shortcutsDisable.indexOf("strike") === -1) {
            command = "strike";
          } else if (!shift && options.shortcutsDisable.indexOf("save") === -1) {
            command = "save";
          }
          break;
        case "U":
          if (options.shortcutsDisable.indexOf("underline") === -1) {
            command = "underline";
          }
          break;
        case "I":
          if (options.shortcutsDisable.indexOf("italic") === -1) {
            command = "italic";
          }
          break;
        case "Z":
          if (options.shortcutsDisable.indexOf("undo") === -1) {
            if (shift) {
              command = "redo";
            } else {
              command = "undo";
            }
          }
          break;
        case "Y":
          if (options.shortcutsDisable.indexOf("undo") === -1) {
            command = "redo";
          }
          break;
        case "[":
          if (options.shortcutsDisable.indexOf("indent") === -1) {
            command = options.rtl ? "indent" : "outdent";
          }
          break;
        case "]":
          if (options.shortcutsDisable.indexOf("indent") === -1) {
            command = options.rtl ? "outdent" : "indent";
          }
          break;
      }
      if (!command) return !!keyStr;
      core.commandHandler(core.commandMap[command], command);
      return true;
    },
    _applyTagEffects: function() {
      if (util2.hasClass(context.element.wysiwyg, "se-read-only")) {
        return false;
      }
      let selectionNode = core.getSelectionNode();
      if (selectionNode === core.effectNode) return;
      core.effectNode = selectionNode;
      const marginDir = options.rtl ? "marginRight" : "marginLeft";
      const commandMap = core.commandMap;
      const classOnCheck = event._onButtonsCheck;
      const commandMapNodes = [];
      const currentNodes = [];
      const activePlugins = core.activePlugins;
      const cLen = activePlugins.length;
      let nodeName = "";
      while (selectionNode.firstChild) {
        selectionNode = selectionNode.firstChild;
      }
      for (let element = selectionNode; !util2.isWysiwygDiv(element); element = element.parentNode) {
        if (!element) break;
        if (element.nodeType !== 1 || util2.isBreak(element)) continue;
        nodeName = element.nodeName.toUpperCase();
        currentNodes.push(nodeName);
        if (!core.isReadOnly) {
          for (let c = 0, name2; c < cLen; c++) {
            name2 = activePlugins[c];
            if (commandMapNodes.indexOf(name2) === -1 && plugins[name2].active.call(core, element)) {
              commandMapNodes.push(name2);
            }
          }
        }
        if (util2.isFormatElement(element)) {
          if (commandMapNodes.indexOf("OUTDENT") === -1 && commandMap.OUTDENT && !util2.isImportantDisabled(commandMap.OUTDENT)) {
            if (util2.isListCell(element) || element.style[marginDir] && util2.getNumber(element.style[marginDir], 0) > 0) {
              commandMapNodes.push("OUTDENT");
              commandMap.OUTDENT.removeAttribute("disabled");
            }
          }
          if (commandMapNodes.indexOf("INDENT") === -1 && commandMap.INDENT && !util2.isImportantDisabled(commandMap.INDENT)) {
            commandMapNodes.push("INDENT");
            if (util2.isListCell(element) && !element.previousElementSibling) {
              commandMap.INDENT.setAttribute("disabled", true);
            } else {
              commandMap.INDENT.removeAttribute("disabled");
            }
          }
          continue;
        }
        if (classOnCheck && classOnCheck.test(nodeName)) {
          commandMapNodes.push(nodeName);
          util2.addClass(commandMap[nodeName], "active");
        }
      }
      core._setKeyEffect(commandMapNodes);
      core._variable.currentNodes = currentNodes.reverse();
      core._variable.currentNodesMap = commandMapNodes;
      if (options.showPathLabel) context.element.navigation.textContent = core._variable.currentNodes.join(" > ");
    },
    _buttonsEventHandler: function(e) {
      let target = e.target;
      if (core._bindControllersOff) e.stopPropagation();
      if (/^(input|textarea|select|option)$/i.test(target.nodeName)) {
        core._antiBlur = false;
      } else {
        e.preventDefault();
      }
      if (util2.getParentElement(target, ".se-submenu")) {
        e.stopPropagation();
        core._notHideToolbar = true;
      } else {
        let command = target.getAttribute("data-command");
        let className = target.className;
        while (!command && !/se-menu-list/.test(className) && !/sun-editor-common/.test(className)) {
          target = target.parentNode;
          command = target.getAttribute("data-command");
          className = target.className;
        }
        if (command === core._submenuName || command === core._containerName) {
          e.stopPropagation();
        }
      }
    },
    addGlobalEvent: function(type, listener, useCapture) {
      if (options.iframe) {
        core._ww.addEventListener(type, listener, useCapture);
      }
      core._w.addEventListener(type, listener, useCapture);
      return {
        type,
        listener,
        useCapture
      };
    },
    removeGlobalEvent: function(type, listener, useCapture) {
      if (!type) return;
      if (typeof type === "object") {
        listener = type.listener;
        useCapture = type.useCapture;
        type = type.type;
      }
      if (options.iframe) {
        core._ww.removeEventListener(type, listener, useCapture);
      }
      core._w.removeEventListener(type, listener, useCapture);
    },
    onClick_toolbar: function(e) {
      let target = e.target;
      let display = target.getAttribute("data-display");
      let command = target.getAttribute("data-command");
      let className = target.className;
      core.controllersOff();
      while (target.parentNode && !command && !/se-menu-list/.test(className) && !/se-toolbar/.test(className)) {
        target = target.parentNode;
        command = target.getAttribute("data-command");
        display = target.getAttribute("data-display");
        className = target.className;
      }
      if (!command && !display) return;
      if (target.disabled) return;
      core.actionCall(command, display, target);
    },
    __selectionSyncEvent: null,
    onMouseDown_wysiwyg: function(e) {
      if (core.isReadOnly || util2.isNonEditable(context.element.wysiwyg)) return;
      if (util2._isExcludeSelectionElement(e.target)) {
        e.preventDefault();
        return;
      }
      event.removeGlobalEvent(event.__selectionSyncEvent);
      event.__selectionSyncEvent = event.addGlobalEvent("mouseup", function() {
        if (core) {
          core._editorRange();
        }
        event.removeGlobalEvent(event.__selectionSyncEvent);
      });
      if (typeof functions.onMouseDown === "function" && functions.onMouseDown(e, core) === false) return;
      const tableCell = util2.getParentElement(e.target, util2.isCell);
      if (tableCell) {
        const tablePlugin = core.plugins.table;
        if (tablePlugin && tableCell !== tablePlugin._fixedCell && !tablePlugin._shift) {
          core.callPlugin("table", function() {
            tablePlugin.onTableCellMultiSelect.call(core, tableCell, false);
          }, null);
        }
      }
      if (core._isBalloon) {
        event._hideToolbar();
      }
    },
    onClick_wysiwyg: function(e) {
      const targetElement = e.target;
      if (core.isReadOnly) {
        e.preventDefault();
        if (util2.isAnchor(targetElement)) {
          _w.open(targetElement.href, targetElement.target);
        }
        return false;
      }
      if (util2.isNonEditable(context.element.wysiwyg)) return;
      if (typeof functions.onClick === "function" && functions.onClick(e, core) === false) return;
      const fileComponentInfo = core.getFileComponent(targetElement);
      if (fileComponentInfo) {
        e.preventDefault();
        core.selectComponent(fileComponentInfo.target, fileComponentInfo.pluginName);
        return;
      }
      const figcaption = util2.getParentElement(targetElement, "FIGCAPTION");
      if (figcaption && util2.isNonEditable(figcaption)) {
        e.preventDefault();
        figcaption.focus();
        if (core._isInline && !core._inlineToolbarAttr.isShow) {
          event._showToolbarInline();
          const hideToolbar = function() {
            event._hideToolbar();
            figcaption.removeEventListener("blur", hideToolbar);
          };
          figcaption.addEventListener("blur", hideToolbar);
        }
      }
      core._editorRange();
      if (e.detail === 3) {
        let range = core.getRange();
        if (util2.isFormatElement(range.endContainer) && range.endOffset === 0) {
          range = core.setRange(range.startContainer, range.startOffset, range.startContainer, range.startContainer.length);
          core._rangeInfo(range, core.getSelection());
        }
      }
      const selectionNode = core.getSelectionNode();
      const formatEl = util2.getFormatElement(selectionNode, null);
      const rangeEl = util2.getRangeFormatElement(selectionNode, null);
      let selectionNodeDeepestFirstChild = selectionNode;
      while (selectionNodeDeepestFirstChild && selectionNodeDeepestFirstChild.firstChild) selectionNodeDeepestFirstChild = selectionNodeDeepestFirstChild.firstChild;
      const selectedComponentInfo = core.getFileComponent(selectionNodeDeepestFirstChild);
      if (selectedComponentInfo) {
        const range = core.getRange();
        if (!rangeEl && range.startContainer === range.endContainer) core.selectComponent(selectedComponentInfo.target, selectedComponentInfo.pluginName);
      } else if (core.currentFileComponentInfo) core.controllersOff();
      if (!formatEl && !util2.isNonEditable(targetElement) && !util2.isList(rangeEl)) {
        const range = core.getRange();
        if (util2.getFormatElement(range.startContainer) === util2.getFormatElement(range.endContainer)) {
          if (util2.isList(rangeEl)) {
            e.preventDefault();
            const oLi = util2.createElement("LI");
            const prevLi = selectionNode.nextElementSibling;
            oLi.appendChild(selectionNode);
            rangeEl.insertBefore(oLi, prevLi);
            core.focus();
          } else if (!util2.isWysiwygDiv(selectionNode) && !util2.isComponent(selectionNode) && (!util2.isTable(selectionNode) || util2.isCell(selectionNode)) && core._setDefaultFormat(util2.isRangeFormatElement(rangeEl) ? "DIV" : options.defaultTag) !== null) {
            e.preventDefault();
            core.focus();
          } else {
            event._applyTagEffects();
          }
        }
      } else {
        event._applyTagEffects();
      }
      if (core._isBalloon) _w.setTimeout(event._toggleToolbarBalloon);
    },
    _balloonDelay: null,
    _showToolbarBalloonDelay: function() {
      if (event._balloonDelay) {
        _w.clearTimeout(event._balloonDelay);
      }
      event._balloonDelay = _w.setTimeout((function() {
        _w.clearTimeout(this._balloonDelay);
        this._balloonDelay = null;
        this._showToolbarBalloon();
      }).bind(event), 350);
    },
    _toggleToolbarBalloon: function() {
      if (core) {
        core._editorRange();
        const range = core.getRange();
        if (core._bindControllersOff || !core._isBalloonAlways && range.collapsed) event._hideToolbar();
        else event._showToolbarBalloon(range);
      }
    },
    _showToolbarBalloon: function(rangeObj) {
      if (!core._isBalloon) return;
      const range = rangeObj || core.getRange();
      const toolbar = context.element.toolbar;
      const topArea = context.element.topArea;
      const selection = core.getSelection();
      let isDirTop;
      if (core._isBalloonAlways && range.collapsed) {
        isDirTop = true;
      } else if (selection.focusNode === selection.anchorNode) {
        isDirTop = selection.focusOffset < selection.anchorOffset;
      } else {
        const childNodes = util2.getListChildNodes(range.commonAncestorContainer, null);
        isDirTop = util2.getArrayIndex(childNodes, selection.focusNode) < util2.getArrayIndex(childNodes, selection.anchorNode);
      }
      let rects = range.getClientRects();
      rects = rects[isDirTop ? 0 : rects.length - 1];
      const globalScroll = core.getGlobalScrollOffset();
      let scrollLeft = globalScroll.left;
      let scrollTop = globalScroll.top;
      const editorWidth = topArea.offsetWidth;
      const offsets = event._getEditorOffsets(null);
      const stickyTop = offsets.top;
      const editorLeft = offsets.left;
      toolbar.style.top = "-10000px";
      toolbar.style.visibility = "hidden";
      toolbar.style.display = "block";
      if (!rects) {
        const node = core.getSelectionNode();
        if (util2.isFormatElement(node)) {
          const zeroWidth = util2.createTextNode(util2.zeroWidthSpace);
          core.insertNode(zeroWidth, null, false);
          core.setRange(zeroWidth, 1, zeroWidth, 1);
          core._editorRange();
          rects = core.getRange().getClientRects();
          rects = rects[isDirTop ? 0 : rects.length - 1];
        }
        if (!rects) {
          const nodeOffset = util2.getOffset(node, context.element.wysiwygFrame);
          rects = {
            left: nodeOffset.left,
            top: nodeOffset.top,
            right: nodeOffset.left,
            bottom: nodeOffset.top + node.offsetHeight,
            noText: true
          };
          scrollLeft = 0;
          scrollTop = 0;
        }
        isDirTop = true;
      }
      const arrowMargin = _w.Math.round(context.element._arrow.offsetWidth / 2);
      const toolbarWidth = toolbar.offsetWidth;
      const toolbarHeight = toolbar.offsetHeight;
      const iframeRects = /iframe/i.test(context.element.wysiwygFrame.nodeName) ? context.element.wysiwygFrame.getClientRects()[0] : null;
      if (iframeRects) {
        rects = {
          left: rects.left + iframeRects.left,
          top: rects.top + iframeRects.top,
          right: rects.right + iframeRects.right - iframeRects.width,
          bottom: rects.bottom + iframeRects.bottom - iframeRects.height
        };
      }
      event._setToolbarOffset(isDirTop, rects, toolbar, editorLeft, editorWidth, scrollLeft, scrollTop, stickyTop, arrowMargin);
      if (toolbarWidth !== toolbar.offsetWidth || toolbarHeight !== toolbar.offsetHeight) {
        event._setToolbarOffset(isDirTop, rects, toolbar, editorLeft, editorWidth, scrollLeft, scrollTop, stickyTop, arrowMargin);
      }
      if (options.toolbarContainer) {
        const editorParent = topArea.parentElement;
        let container = options.toolbarContainer;
        let left = container.offsetLeft;
        let top = container.offsetTop;
        while (!container.parentElement.contains(editorParent) || !/^(BODY|HTML)$/i.test(container.parentElement.nodeName)) {
          container = container.offsetParent;
          left += container.offsetLeft;
          top += container.offsetTop;
        }
        toolbar.style.left = toolbar.offsetLeft - left + topArea.offsetLeft + "px";
        toolbar.style.top = toolbar.offsetTop - top + topArea.offsetTop + "px";
      }
      toolbar.style.visibility = "";
    },
    _setToolbarOffset: function(isDirTop, rects, toolbar, editorLeft, editorWidth, scrollLeft, scrollTop, stickyTop, arrowMargin) {
      const padding = 1;
      const toolbarWidth = toolbar.offsetWidth;
      const toolbarHeight = rects.noText && !isDirTop ? 0 : toolbar.offsetHeight;
      const absoluteLeft = (isDirTop ? rects.left : rects.right) - editorLeft - toolbarWidth / 2 + scrollLeft;
      const overRight = absoluteLeft + toolbarWidth - editorWidth;
      let t = (isDirTop ? rects.top - toolbarHeight - arrowMargin : rects.bottom + arrowMargin) - (rects.noText ? 0 : stickyTop) + scrollTop;
      let l = absoluteLeft < 0 ? padding : overRight < 0 ? absoluteLeft : absoluteLeft - overRight - padding - 1;
      let resetTop = false;
      const space = t + (isDirTop ? event._getEditorOffsets(null).top : toolbar.offsetHeight - context.element.wysiwyg.offsetHeight);
      if (!isDirTop && space > 0 && event._getPageBottomSpace() < space) {
        isDirTop = true;
        resetTop = true;
      } else if (isDirTop && _d.documentElement.offsetTop > space) {
        isDirTop = false;
        resetTop = true;
      }
      if (resetTop) t = (isDirTop ? rects.top - toolbarHeight - arrowMargin : rects.bottom + arrowMargin) - (rects.noText ? 0 : stickyTop) + scrollTop;
      toolbar.style.left = _w.Math.floor(l) + "px";
      toolbar.style.top = _w.Math.floor(t) + "px";
      if (isDirTop) {
        util2.removeClass(context.element._arrow, "se-arrow-up");
        util2.addClass(context.element._arrow, "se-arrow-down");
        context.element._arrow.style.top = toolbarHeight + "px";
      } else {
        util2.removeClass(context.element._arrow, "se-arrow-down");
        util2.addClass(context.element._arrow, "se-arrow-up");
        context.element._arrow.style.top = -arrowMargin + "px";
      }
      const arrow_left = _w.Math.floor(toolbarWidth / 2 + (absoluteLeft - l));
      context.element._arrow.style.left = (arrow_left + arrowMargin > toolbar.offsetWidth ? toolbar.offsetWidth - arrowMargin : arrow_left < arrowMargin ? arrowMargin : arrow_left) + "px";
    },
    _showToolbarInline: function() {
      if (!core._isInline) return;
      const toolbar = context.element.toolbar;
      if (options.toolbarContainer) toolbar.style.position = "relative";
      else toolbar.style.position = "absolute";
      toolbar.style.visibility = "hidden";
      toolbar.style.display = "block";
      core._inlineToolbarAttr.width = toolbar.style.width = options.toolbarWidth;
      core._inlineToolbarAttr.top = toolbar.style.top = (options.toolbarContainer ? 0 : -1 - toolbar.offsetHeight) + "px";
      if (typeof functions.showInline === "function") functions.showInline(toolbar, context, core);
      event.onScroll_window();
      core._inlineToolbarAttr.isShow = true;
      toolbar.style.visibility = "";
    },
    _hideToolbar: function() {
      if (!core._notHideToolbar && !core._variable.isFullScreen) {
        context.element.toolbar.style.display = "none";
        core._inlineToolbarAttr.isShow = false;
      }
    },
    onInput_wysiwyg: function(e) {
      if (/AUDIO/.test(e.target.nodeName)) return false;
      if (core.isReadOnly || core.isDisabled) {
        e.preventDefault();
        e.stopPropagation();
        core.history.go(core.history.getCurrentIndex());
        return false;
      }
      const range = core.getRange();
      const selectionNode = core.getSelectionNode();
      const formatEl = util2.getFormatElement(selectionNode, null);
      if (!formatEl && range.collapsed && !util2.isComponent(selectionNode) && !util2.isList(selectionNode)) {
        const rangeEl = util2.getRangeFormatElement(formatEl, null);
        core._setDefaultFormat(util2.isRangeFormatElement(rangeEl) ? "DIV" : options.defaultTag);
      }
      core._editorRange();
      const data = (e.data === null ? "" : e.data === void 0 ? " " : e.data) || "";
      if (!core._charCount(data)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      if (typeof functions.onInput === "function" && functions.onInput(e, core) === false) return;
      core.history.push(true);
    },
    _isUneditableNode: function(range, isFront) {
      const container = isFront ? range.startContainer : range.endContainer;
      const offset = isFront ? range.startOffset : range.endOffset;
      const siblingKey = isFront ? "previousSibling" : "nextSibling";
      const isElement = container.nodeType === 1;
      let siblingNode;
      if (isElement) {
        siblingNode = event._isUneditableNode_getSibling(container.childNodes[offset], siblingKey, container);
        return siblingNode && siblingNode.nodeType === 1 && siblingNode.getAttribute("contenteditable") === "false";
      } else {
        siblingNode = event._isUneditableNode_getSibling(container, siblingKey, container);
        return core.isEdgePoint(container, offset, isFront ? "start" : "end") && (siblingNode && siblingNode.nodeType === 1 && siblingNode.getAttribute("contenteditable") === "false");
      }
    },
    _isUneditableNode_getSibling: function(selectNode, siblingKey, container) {
      if (!selectNode) return null;
      let siblingNode = selectNode[siblingKey];
      if (!siblingNode) {
        siblingNode = util2.getFormatElement(container);
        siblingNode = siblingNode ? siblingNode[siblingKey] : null;
        if (siblingNode && !util2.isComponent(siblingNode)) siblingNode = siblingKey === "previousSibling" ? siblingNode.firstChild : siblingNode.lastChild;
        else return null;
      }
      return siblingNode;
    },
    _onShortcutKey: false,
    onKeyDown_wysiwyg: function(e) {
      let selectionNode = core.getSelectionNode();
      if (util2.isInputElement(selectionNode)) return;
      const keyCode = e.keyCode;
      const shift = e.shiftKey;
      const ctrl = e.ctrlKey || e.metaKey || keyCode === 91 || keyCode === 92 || keyCode === 224;
      const alt = e.altKey;
      event._IEisComposing = keyCode === 229;
      if (!ctrl && core.isReadOnly && !event._cursorMoveKeyCode.test(keyCode)) {
        e.preventDefault();
        return false;
      }
      core.submenuOff();
      if (core._isBalloon) {
        event._hideToolbar();
      }
      if (typeof functions.onKeyDown === "function" && functions.onKeyDown(e, core) === false) return;
      if (ctrl && event._shortcutCommand(keyCode, shift)) {
        event._onShortcutKey = true;
        e.preventDefault();
        e.stopPropagation();
        return false;
      } else if (event._onShortcutKey) {
        event._onShortcutKey = false;
      }
      if (keyCode === 13 && util2.isFormatElement(core.getRange().startContainer)) {
        core._resetRangeToTextNode();
        selectionNode = core.getSelectionNode();
      }
      const range = core.getRange();
      const selectRange = !range.collapsed || range.startContainer !== range.endContainer;
      const fileComponentName = core._fileManager.pluginRegExp.test(core.currentControllerName) ? core.currentControllerName : "";
      let formatEl = util2.getFormatElement(selectionNode, null) || selectionNode;
      let rangeEl = util2.getRangeFormatElement(formatEl, null);
      const isArrowKey = /37|38|39|40/.test(e.keyCode);
      if (isArrowKey && event._onKeyDown_wysiwyg_arrowKey(e) === false) return;
      switch (keyCode) {
        case 8:
          if (!selectRange) {
            if (fileComponentName) {
              e.preventDefault();
              e.stopPropagation();
              core.plugins[fileComponentName].destroy.call(core);
              break;
            }
          }
          if (selectRange && event._hardDelete()) {
            e.preventDefault();
            e.stopPropagation();
            break;
          }
          if (!util2.isFormatElement(formatEl) && !context.element.wysiwyg.firstElementChild && !util2.isComponent(selectionNode) && core._setDefaultFormat(options.defaultTag) !== null) {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
          if (!selectRange && !formatEl.previousElementSibling && (range.startOffset === 0 && !selectionNode.previousSibling && !util2.isListCell(formatEl) && (util2.isFormatElement(formatEl) && (!util2.isFreeFormatElement(formatEl) || util2.isClosureFreeFormatElement(formatEl))))) {
            if (util2.isClosureRangeFormatElement(formatEl.parentNode)) {
              e.preventDefault();
              e.stopPropagation();
              return false;
            }
            if (util2.isWysiwygDiv(formatEl.parentNode) && formatEl.childNodes.length <= 1 && (!formatEl.firstChild || util2.onlyZeroWidthSpace(formatEl.textContent))) {
              e.preventDefault();
              e.stopPropagation();
              if (formatEl.nodeName.toUpperCase() === options.defaultTag.toUpperCase()) {
                formatEl.innerHTML = "<br>";
                const attrs = formatEl.attributes;
                while (attrs[0]) {
                  formatEl.removeAttribute(attrs[0].name);
                }
              } else {
                const defaultFormat = util2.createElement(options.defaultTag);
                defaultFormat.innerHTML = "<br>";
                formatEl.parentElement.replaceChild(defaultFormat, formatEl);
              }
              core.nativeFocus();
              return false;
            }
          }
          const startCon = range.startContainer;
          if (formatEl && !formatEl.previousElementSibling && range.startOffset === 0 && startCon.nodeType === 3 && !util2.isFormatElement(startCon.parentNode)) {
            let prev = startCon.parentNode.previousSibling;
            const next = startCon.parentNode.nextSibling;
            if (!prev) {
              if (!next) {
                prev = util2.createElement("BR");
                formatEl.appendChild(prev);
              } else {
                prev = next;
              }
            }
            let con = startCon;
            while (formatEl.contains(con) && !con.previousSibling) {
              con = con.parentNode;
            }
            if (!formatEl.contains(con)) {
              startCon.textContent = "";
              util2.removeItemAllParents(startCon, null, formatEl);
              break;
            }
          }
          if (event._isUneditableNode(range, true)) {
            e.preventDefault();
            e.stopPropagation();
            break;
          }
          if (!selectRange && core._isEdgeFormat(range.startContainer, range.startOffset, "start")) {
            if (util2.isFormatElement(formatEl.previousElementSibling)) {
              core._formatAttrsTemp = formatEl.previousElementSibling.attributes;
            }
          }
          const commonCon = range.commonAncestorContainer;
          formatEl = util2.getFormatElement(range.startContainer, null);
          rangeEl = util2.getRangeFormatElement(formatEl, null);
          if (rangeEl && formatEl && !util2.isCell(rangeEl) && !/^FIGCAPTION$/i.test(rangeEl.nodeName)) {
            if (util2.isListCell(formatEl) && util2.isList(rangeEl) && (util2.isListCell(rangeEl.parentNode) || formatEl.previousElementSibling) && (selectionNode === formatEl || selectionNode.nodeType === 3 && (!selectionNode.previousSibling || util2.isList(selectionNode.previousSibling))) && (util2.getFormatElement(range.startContainer, null) !== util2.getFormatElement(range.endContainer, null) ? rangeEl.contains(range.startContainer) : range.startOffset === 0 && range.collapsed)) {
              if (range.startContainer !== range.endContainer) {
                e.preventDefault();
                core.removeNode();
                if (range.startContainer.nodeType === 3) {
                  core.setRange(range.startContainer, range.startContainer.textContent.length, range.startContainer, range.startContainer.textContent.length);
                }
                core.history.push(true);
              } else {
                let prev = formatEl.previousElementSibling || rangeEl.parentNode;
                if (util2.isListCell(prev)) {
                  e.preventDefault();
                  let prevLast = prev;
                  if (!prev.contains(formatEl) && util2.isListCell(prevLast) && util2.isList(prevLast.lastElementChild)) {
                    prevLast = prevLast.lastElementChild.lastElementChild;
                    while (util2.isListCell(prevLast) && util2.isList(prevLast.lastElementChild)) {
                      prevLast = prevLast.lastElementChild && prevLast.lastElementChild.lastElementChild;
                    }
                    prev = prevLast;
                  }
                  let con = prev === rangeEl.parentNode ? rangeEl.previousSibling : prev.lastChild;
                  if (!con) {
                    con = util2.createTextNode(util2.zeroWidthSpace);
                    rangeEl.parentNode.insertBefore(con, rangeEl.parentNode.firstChild);
                  }
                  const offset = con.nodeType === 3 ? con.textContent.length : 1;
                  const children = formatEl.childNodes;
                  let after = con;
                  let child = children[0];
                  while (child = children[0]) {
                    prev.insertBefore(child, after.nextSibling);
                    after = child;
                  }
                  util2.removeItem(formatEl);
                  if (rangeEl.children.length === 0) util2.removeItem(rangeEl);
                  core.setRange(con, offset, con, offset);
                  core.history.push(true);
                }
              }
              break;
            }
            if (!selectRange && range.startOffset === 0) {
              let detach = true;
              let comm = commonCon;
              while (comm && comm !== rangeEl && !util2.isWysiwygDiv(comm)) {
                if (comm.previousSibling) {
                  if (comm.previousSibling.nodeType === 1 || !util2.onlyZeroWidthSpace(comm.previousSibling.textContent.trim())) {
                    detach = false;
                    break;
                  }
                }
                comm = comm.parentNode;
              }
              if (detach && rangeEl.parentNode) {
                e.preventDefault();
                core.detachRangeFormatElement(rangeEl, util2.isListCell(formatEl) ? [formatEl] : null, null, false, false);
                core.history.push(true);
                break;
              }
            }
          }
          if (!selectRange && formatEl && (range.startOffset === 0 || (selectionNode === formatEl ? !!formatEl.childNodes[range.startOffset] : false))) {
            const isList = util2.isListCell(formatEl);
            const sel = selectionNode === formatEl ? formatEl.childNodes[range.startOffset] : selectionNode;
            const prev = isList ? sel.previousSibling : formatEl.previousSibling;
            const ignoreZWS = isList || (commonCon.nodeType === 3 || util2.isBreak(commonCon)) && !commonCon.previousSibling && range.startOffset === 0;
            if (sel && (isList || !sel.previousSibling) && (commonCon && util2.isComponent(commonCon.previousSibling) || ignoreZWS && util2.isComponent(prev))) {
              const fileComponentInfo = core.getFileComponent(prev);
              if (fileComponentInfo) {
                e.preventDefault();
                e.stopPropagation();
                if (isList) util2.removeItem(sel);
                else if (formatEl.textContent.length === 0) util2.removeItem(formatEl);
                if (core.selectComponent(fileComponentInfo.target, fileComponentInfo.pluginName) === false) core.blur();
              } else if (util2.isComponent(prev)) {
                e.preventDefault();
                e.stopPropagation();
                util2.removeItem(prev);
              }
              break;
            }
            if (sel && util2.isNonEditable(sel.previousSibling)) {
              e.preventDefault();
              e.stopPropagation();
              util2.removeItem(sel.previousSibling);
              break;
            }
          }
          break;
        case 46:
          if (fileComponentName) {
            e.preventDefault();
            e.stopPropagation();
            core.plugins[fileComponentName].destroy.call(core);
            break;
          }
          if (selectRange && event._hardDelete()) {
            e.preventDefault();
            e.stopPropagation();
            break;
          }
          if (!selectRange && core._isEdgeFormat(range.endContainer, range.endOffset, "end") && !formatEl.nextSibling) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          if (event._isUneditableNode(range, false)) {
            e.preventDefault();
            e.stopPropagation();
            break;
          }
          if ((util2.isFormatElement(selectionNode) || selectionNode.nextSibling === null || util2.onlyZeroWidthSpace(selectionNode.nextSibling) && selectionNode.nextSibling.nextSibling === null) && range.startOffset === selectionNode.textContent.length) {
            const nextEl = formatEl.nextElementSibling;
            if (!nextEl) break;
            if (util2.isComponent(nextEl)) {
              e.preventDefault();
              if (util2.onlyZeroWidthSpace(formatEl)) {
                util2.removeItem(formatEl);
                if (util2.isTable(nextEl)) {
                  let cell = util2.getChildElement(nextEl, util2.isCell, false);
                  cell = cell.firstElementChild || cell;
                  core.setRange(cell, 0, cell, 0);
                  break;
                }
              }
              const fileComponentInfo = core.getFileComponent(nextEl);
              if (fileComponentInfo) {
                e.stopPropagation();
                if (core.selectComponent(fileComponentInfo.target, fileComponentInfo.pluginName) === false) core.blur();
              } else if (util2.isComponent(nextEl)) {
                e.stopPropagation();
                util2.removeItem(nextEl);
              }
              break;
            }
          }
          if (!selectRange && (core.isEdgePoint(range.endContainer, range.endOffset) || (selectionNode === formatEl ? !!formatEl.childNodes[range.startOffset] : false))) {
            const sel = selectionNode === formatEl ? formatEl.childNodes[range.startOffset] || selectionNode : selectionNode;
            if (sel && util2.isNonEditable(sel.nextSibling)) {
              e.preventDefault();
              e.stopPropagation();
              util2.removeItem(sel.nextSibling);
              break;
            } else if (util2.isComponent(sel)) {
              e.preventDefault();
              e.stopPropagation();
              util2.removeItem(sel);
              break;
            }
          }
          if (!selectRange && core._isEdgeFormat(range.endContainer, range.endOffset, "end")) {
            if (util2.isFormatElement(formatEl.nextElementSibling)) {
              core._formatAttrsTemp = formatEl.attributes;
            }
          }
          formatEl = util2.getFormatElement(range.startContainer, null);
          rangeEl = util2.getRangeFormatElement(formatEl, null);
          if (util2.isListCell(formatEl) && util2.isList(rangeEl) && (selectionNode === formatEl || selectionNode.nodeType === 3 && (!selectionNode.nextSibling || util2.isList(selectionNode.nextSibling)) && (util2.getFormatElement(range.startContainer, null) !== util2.getFormatElement(range.endContainer, null) ? rangeEl.contains(range.endContainer) : range.endOffset === selectionNode.textContent.length && range.collapsed))) {
            if (range.startContainer !== range.endContainer) core.removeNode();
            let next = util2.getArrayItem(formatEl.children, util2.isList, false);
            next = next || formatEl.nextElementSibling || (rangeEl.parentNode ? rangeEl.parentNode.nextElementSibling : null);
            if (next && (util2.isList(next) || util2.getArrayItem(next.children, util2.isList, false))) {
              e.preventDefault();
              let con, children;
              if (util2.isList(next)) {
                const child = next.firstElementChild;
                children = child.childNodes;
                con = children[0];
                while (children[0]) {
                  formatEl.insertBefore(children[0], next);
                }
                util2.removeItem(child);
              } else {
                con = next.firstChild;
                children = next.childNodes;
                while (children[0]) {
                  formatEl.appendChild(children[0]);
                }
                util2.removeItem(next);
              }
              core.setRange(con, 0, con, 0);
              core.history.push(true);
            }
            break;
          }
          break;
        case 9:
          if (fileComponentName || options.tabDisable) break;
          e.preventDefault();
          if (ctrl || alt || util2.isWysiwygDiv(selectionNode)) break;
          const isEdge = !range.collapsed || core.isEdgePoint(range.startContainer, range.startOffset);
          const selectedFormats = core.getSelectedElements(null);
          selectionNode = core.getSelectionNode();
          const cells = [];
          let lines = [];
          let fc = util2.isListCell(selectedFormats[0]), lc = util2.isListCell(selectedFormats[selectedFormats.length - 1]);
          let r = { sc: range.startContainer, so: range.startOffset, ec: range.endContainer, eo: range.endOffset };
          for (let i = 0, len = selectedFormats.length, f; i < len; i++) {
            f = selectedFormats[i];
            if (util2.isListCell(f)) {
              if (!f.previousElementSibling && !shift) {
                continue;
              } else {
                cells.push(f);
              }
            } else {
              lines.push(f);
            }
          }
          if (cells.length > 0 && isEdge && core.plugins.list) {
            r = core.plugins.list.editInsideList.call(core, shift, cells);
          } else {
            const tableCell = util2.getParentElement(selectionNode, util2.isCell);
            if (tableCell && isEdge) {
              const table = util2.getParentElement(tableCell, "table");
              const cells2 = util2.getListChildren(table, util2.isCell);
              let idx = shift ? util2.prevIdx(cells2, tableCell) : util2.nextIdx(cells2, tableCell);
              if (idx === cells2.length && !shift) idx = 0;
              if (idx === -1 && shift) idx = cells2.length - 1;
              let moveCell = cells2[idx];
              if (!moveCell) break;
              moveCell = moveCell.firstElementChild || moveCell;
              core.setRange(moveCell, 0, moveCell, 0);
              break;
            }
            lines = lines.concat(cells);
            fc = lc = null;
          }
          if (lines.length > 0) {
            if (!shift) {
              const tabText = util2.createTextNode(new _w.Array(core._variable.tabSize + 1).join("\xA0"));
              if (lines.length === 1) {
                if (!core.insertNode(tabText, null, true)) return false;
                if (!fc) {
                  r.sc = tabText;
                  r.so = tabText.length;
                }
                if (!lc) {
                  r.ec = tabText;
                  r.eo = tabText.length;
                }
              } else {
                const len = lines.length - 1;
                for (let i = 0, child; i <= len; i++) {
                  child = lines[i].firstChild;
                  if (!child) continue;
                  if (util2.isBreak(child)) {
                    lines[i].insertBefore(tabText.cloneNode(false), child);
                  } else {
                    child.textContent = tabText.textContent + child.textContent;
                  }
                }
                const firstChild = util2.getChildElement(lines[0], "text", false);
                const endChild = util2.getChildElement(lines[len], "text", true);
                if (!fc && firstChild) {
                  r.sc = firstChild;
                  r.so = 0;
                }
                if (!lc && endChild) {
                  r.ec = endChild;
                  r.eo = endChild.textContent.length;
                }
              }
            } else {
              const len = lines.length - 1;
              for (let i = 0, line; i <= len; i++) {
                line = lines[i].childNodes;
                for (let c = 0, cLen = line.length, child; c < cLen; c++) {
                  child = line[c];
                  if (!child) break;
                  if (util2.onlyZeroWidthSpace(child)) continue;
                  if (/^\s{1,4}$/.test(child.textContent)) {
                    util2.removeItem(child);
                  } else if (/^\s{1,4}/.test(child.textContent)) {
                    child.textContent = child.textContent.replace(/^\s{1,4}/, "");
                  }
                  break;
                }
              }
              const firstChild = util2.getChildElement(lines[0], "text", false);
              const endChild = util2.getChildElement(lines[len], "text", true);
              if (!fc && firstChild) {
                r.sc = firstChild;
                r.so = 0;
              }
              if (!lc && endChild) {
                r.ec = endChild;
                r.eo = endChild.textContent.length;
              }
            }
          }
          core.setRange(r.sc, r.so, r.ec, r.eo);
          core.history.push(false);
          break;
        case 13:
          const freeFormatEl = util2.getFreeFormatElement(selectionNode, null);
          if (core._charTypeHTML) {
            let enterHTML = "";
            if (!shift && freeFormatEl || shift) {
              enterHTML = "<br>";
            } else {
              enterHTML = "<" + formatEl.nodeName + "><br></" + formatEl.nodeName + ">";
            }
            if (!core.checkCharCount(enterHTML, "byte-html")) {
              e.preventDefault();
              return false;
            }
          }
          if (!shift && !fileComponentName) {
            const formatEndEdge = core._isEdgeFormat(range.endContainer, range.endOffset, "end");
            const formatStartEdge = core._isEdgeFormat(range.startContainer, range.startOffset, "start");
            if (formatEndEdge && (/^H[1-6]$/i.test(formatEl.nodeName) || /^HR$/i.test(formatEl.nodeName))) {
              event._enterPrevent(e);
              let temp = null;
              const newFormat = core.appendFormatTag(formatEl, options.defaultTag);
              if (formatEndEdge && formatEndEdge.length > 0) {
                temp = formatEndEdge.pop();
                const innerNode = temp;
                while (formatEndEdge.length > 0) {
                  temp = temp.appendChild(formatEndEdge.pop());
                }
                newFormat.appendChild(innerNode);
              }
              temp = !temp ? newFormat.firstChild : temp.appendChild(newFormat.firstChild);
              if (util2.isBreak(temp)) {
                const zeroWidth = util2.createTextNode(util2.zeroWidthSpace);
                temp.parentNode.insertBefore(zeroWidth, temp);
                core.setRange(zeroWidth, 1, zeroWidth, 1);
              } else {
                core.setRange(temp, 0, temp, 0);
              }
              break;
            } else if (rangeEl && formatEl && !util2.isCell(rangeEl) && !/^FIGCAPTION$/i.test(rangeEl.nodeName)) {
              const range2 = core.getRange();
              if (core.isEdgePoint(range2.endContainer, range2.endOffset) && util2.isList(selectionNode.nextSibling)) {
                event._enterPrevent(e);
                const newEl = util2.createElement("LI");
                const br = util2.createElement("BR");
                newEl.appendChild(br);
                formatEl.parentNode.insertBefore(newEl, formatEl.nextElementSibling);
                newEl.appendChild(selectionNode.nextSibling);
                core.setRange(br, 1, br, 1);
                break;
              }
              if ((range2.commonAncestorContainer.nodeType === 3 ? !range2.commonAncestorContainer.nextElementSibling : true) && util2.onlyZeroWidthSpace(formatEl.innerText.trim()) && !util2.isListCell(formatEl.nextElementSibling)) {
                event._enterPrevent(e);
                let newEl = null;
                if (util2.isListCell(rangeEl.parentNode)) {
                  const parentLi = formatEl.parentNode.parentNode;
                  rangeEl = parentLi.parentNode;
                  const newListCell = util2.createElement("LI");
                  newListCell.innerHTML = "<br>";
                  util2.copyTagAttributes(newListCell, formatEl, options.lineAttrReset);
                  newEl = newListCell;
                  rangeEl.insertBefore(newEl, parentLi.nextElementSibling);
                } else {
                  const newFormat = util2.isCell(rangeEl.parentNode) ? "DIV" : util2.isList(rangeEl.parentNode) ? "LI" : util2.isFormatElement(rangeEl.nextElementSibling) && !util2.isRangeFormatElement(rangeEl.nextElementSibling) ? rangeEl.nextElementSibling.nodeName : util2.isFormatElement(rangeEl.previousElementSibling) && !util2.isRangeFormatElement(rangeEl.previousElementSibling) ? rangeEl.previousElementSibling.nodeName : options.defaultTag;
                  newEl = util2.createElement(newFormat);
                  util2.copyTagAttributes(newEl, formatEl, options.lineAttrReset);
                  const edge = core.detachRangeFormatElement(rangeEl, [formatEl], null, true, true);
                  edge.cc.insertBefore(newEl, edge.ec);
                }
                newEl.innerHTML = "<br>";
                util2.removeItemAllParents(formatEl, null, null);
                core.setRange(newEl, 1, newEl, 1);
                break;
              }
            }
            if (freeFormatEl) {
              event._enterPrevent(e);
              const selectionFormat = selectionNode === freeFormatEl;
              const wSelection = core.getSelection();
              const children = selectionNode.childNodes, offset = wSelection.focusOffset, prev = selectionNode.previousElementSibling, next = selectionNode.nextSibling;
              if (!util2.isClosureFreeFormatElement(freeFormatEl) && !!children && (selectionFormat && range.collapsed && children.length - 1 <= offset + 1 && util2.isBreak(children[offset]) && (!children[offset + 1] || (!children[offset + 2] || util2.onlyZeroWidthSpace(children[offset + 2].textContent)) && children[offset + 1].nodeType === 3 && util2.onlyZeroWidthSpace(children[offset + 1].textContent)) && offset > 0 && util2.isBreak(children[offset - 1]) || !selectionFormat && util2.onlyZeroWidthSpace(selectionNode.textContent) && util2.isBreak(prev) && (util2.isBreak(prev.previousSibling) || !util2.onlyZeroWidthSpace(prev.previousSibling.textContent)) && (!next || !util2.isBreak(next) && util2.onlyZeroWidthSpace(next.textContent)))) {
                if (selectionFormat) util2.removeItem(children[offset - 1]);
                else util2.removeItem(selectionNode);
                const newEl = core.appendFormatTag(freeFormatEl, util2.isFormatElement(freeFormatEl.nextElementSibling) && !util2.isRangeFormatElement(freeFormatEl.nextElementSibling) ? freeFormatEl.nextElementSibling : null);
                util2.copyFormatAttributes(newEl, freeFormatEl);
                core.setRange(newEl, 1, newEl, 1);
                break;
              }
              if (selectionFormat) {
                functions.insertHTML(range.collapsed && util2.isBreak(range.startContainer.childNodes[range.startOffset - 1]) ? "<br>" : "<br><br>", true, false);
                let focusNode = wSelection.focusNode;
                const wOffset = wSelection.focusOffset;
                if (freeFormatEl === focusNode) {
                  focusNode = focusNode.childNodes[wOffset - offset > 1 ? wOffset - 1 : wOffset];
                }
                core.setRange(focusNode, 1, focusNode, 1);
              } else {
                const focusNext = wSelection.focusNode.nextSibling;
                const br = util2.createElement("BR");
                core.insertNode(br, null, false);
                const brPrev = br.previousSibling, brNext = br.nextSibling;
                if (!util2.isBreak(focusNext) && !util2.isBreak(brPrev) && (!brNext || util2.onlyZeroWidthSpace(brNext))) {
                  br.parentNode.insertBefore(br.cloneNode(false), br);
                  core.setRange(br, 1, br, 1);
                } else {
                  core.setRange(brNext, 0, brNext, 0);
                }
              }
              event._onShortcutKey = true;
              break;
            }
            if (range.collapsed && (formatStartEdge || formatEndEdge)) {
              event._enterPrevent(e);
              const focusBR = util2.createElement("BR");
              const newFormat = util2.createElement(formatEl.nodeName);
              util2.copyTagAttributes(newFormat, formatEl, options.lineAttrReset);
              let child = focusBR;
              do {
                if (!util2.isBreak(selectionNode) && selectionNode.nodeType === 1) {
                  const f = selectionNode.cloneNode(false);
                  f.appendChild(child);
                  child = f;
                }
                selectionNode = selectionNode.parentNode;
              } while (formatEl !== selectionNode && formatEl.contains(selectionNode));
              newFormat.appendChild(child);
              formatEl.parentNode.insertBefore(newFormat, formatStartEdge && !formatEndEdge ? formatEl : formatEl.nextElementSibling);
              if (formatEndEdge) {
                core.setRange(focusBR, 1, focusBR, 1);
              }
              break;
            }
            if (formatEl) {
              e.stopPropagation();
              let newEl;
              let offset = 0;
              if (!range.collapsed) {
                const isMultiLine = util2.getFormatElement(range.startContainer, null) !== util2.getFormatElement(range.endContainer, null);
                const newFormat = formatEl.cloneNode(false);
                newFormat.innerHTML = "<br>";
                const commonCon2 = range.commonAncestorContainer;
                const r2 = commonCon2 === range.startContainer && commonCon2 === range.endContainer && util2.onlyZeroWidthSpace(commonCon2) ? range : core.removeNode();
                newEl = util2.getFormatElement(r2.container, null);
                if (!newEl) {
                  if (util2.isWysiwygDiv(r2.container)) {
                    event._enterPrevent(e);
                    context.element.wysiwyg.appendChild(newFormat);
                    newEl = newFormat;
                    util2.copyTagAttributes(newEl, formatEl, options.lineAttrReset);
                    core.setRange(newEl, offset, newEl, offset);
                  }
                  break;
                }
                const innerRange = util2.getRangeFormatElement(r2.container);
                newEl = newEl.contains(innerRange) ? util2.getChildElement(innerRange, util2.getFormatElement.bind(util2)) : newEl;
                if (isMultiLine) {
                  if (formatEndEdge && !formatStartEdge) {
                    newEl.parentNode.insertBefore(newFormat, !r2.prevContainer || r2.container === r2.prevContainer ? newEl.nextElementSibling : newEl);
                    newEl = newFormat;
                    offset = 0;
                  } else {
                    offset = r2.offset;
                    if (formatStartEdge) {
                      const tempEl = newEl.parentNode.insertBefore(newFormat, newEl);
                      if (formatEndEdge) {
                        newEl = tempEl;
                        offset = 0;
                      }
                    }
                  }
                } else {
                  if (formatEndEdge && formatStartEdge) {
                    newEl.parentNode.insertBefore(newFormat, r2.prevContainer && r2.container === r2.prevContainer ? newEl.nextElementSibling : newEl);
                    newEl = newFormat;
                    offset = 0;
                  } else {
                    newEl = util2.splitElement(r2.container, r2.offset, util2.getElementDepth(formatEl));
                  }
                }
              } else {
                if (util2.onlyZeroWidthSpace(formatEl)) {
                  newEl = core.appendFormatTag(formatEl, formatEl.cloneNode(false));
                } else {
                  newEl = util2.splitElement(range.endContainer, range.endOffset, util2.getElementDepth(formatEl));
                }
              }
              event._enterPrevent(e);
              util2.copyTagAttributes(newEl, formatEl, options.lineAttrReset);
              core.setRange(newEl, offset, newEl, offset);
              break;
            }
          }
          if (selectRange) break;
          if (rangeEl && util2.getParentElement(rangeEl, "FIGCAPTION") && util2.getParentElement(rangeEl, util2.isList)) {
            event._enterPrevent(e);
            formatEl = core.appendFormatTag(formatEl, null);
            core.setRange(formatEl, 0, formatEl, 0);
          }
          if (fileComponentName) {
            e.preventDefault();
            e.stopPropagation();
            core.containerOff();
            core.controllersOff();
            const compContext = context[fileComponentName];
            const container = compContext._container;
            const sibling = container.previousElementSibling || container.nextElementSibling;
            let newEl = null;
            if (util2.isListCell(container.parentNode)) {
              newEl = util2.createElement("BR");
            } else {
              newEl = util2.createElement(util2.isFormatElement(sibling) && !util2.isRangeFormatElement(sibling) ? sibling.nodeName : options.defaultTag);
              newEl.innerHTML = "<br>";
            }
            if (shift) container.parentNode.insertBefore(newEl, container);
            else container.parentNode.insertBefore(newEl, container.nextElementSibling);
            core.callPlugin(fileComponentName, function() {
              if (core.selectComponent(compContext._element, fileComponentName) === false) core.blur();
            }, null);
          }
          break;
        case 27:
          if (fileComponentName) {
            e.preventDefault();
            e.stopPropagation();
            core.controllersOff();
            return false;
          }
          break;
      }
      if (core.currentFileComponentInfo) core.controllersOff();
      if (shift && keyCode === 16) {
        e.preventDefault();
        e.stopPropagation();
        const tablePlugin = core.plugins.table;
        if (tablePlugin && !tablePlugin._shift && !tablePlugin._ref) {
          const cell = util2.getParentElement(formatEl, util2.isCell);
          if (cell) {
            tablePlugin.onTableCellMultiSelect.call(core, cell, true);
            return;
          }
        }
      } else if (shift && (util2.isOSX_IOS ? alt : ctrl) && keyCode === 32) {
        e.preventDefault();
        e.stopPropagation();
        const nbsp = core.insertNode(util2.createTextNode("\xA0"));
        if (nbsp) {
          core.setRange(nbsp, nbsp.length, nbsp, nbsp.length);
          return;
        }
      }
      if (util2.isIE && !ctrl && !alt && !selectRange && !event._nonTextKeyCode.test(keyCode) && util2.isBreak(range.commonAncestorContainer)) {
        const zeroWidth = util2.createTextNode(util2.zeroWidthSpace);
        core.insertNode(zeroWidth, null, false);
        core.setRange(zeroWidth, 1, zeroWidth, 1);
      }
      if (event._directionKeyCode.test(keyCode)) {
        _w.setTimeout(core._editorRange.bind(core), 0);
        event._applyTagEffects();
      }
    },
    _onKeyDown_wysiwyg_arrowKey: function(e) {
      if (e.shiftKey) return;
      let selectionNode = core.getSelectionNode();
      const selectNode = function(node, offset) {
        if (!offset) offset = 0;
        e.preventDefault();
        e.stopPropagation();
        if (!node) return;
        let componentInfo2 = core.getFileComponent(node);
        if (componentInfo2) {
          core.selectComponent(componentInfo2.target, componentInfo2.pluginName);
        } else {
          core.setRange(node, offset, node, offset);
          core.controllersOff();
        }
      };
      const table = util2.getParentElement(selectionNode, "table");
      if (table) {
        const currentRow = util2.getParentElement(selectionNode, "tr");
        const currentCell = util2.getParentElement(selectionNode, "td");
        let currentCellFirstNode = currentCell;
        let currentCellLastNode = currentCell;
        if (currentCell) {
          while (currentCellFirstNode && currentCellFirstNode.firstChild) currentCellFirstNode = currentCellFirstNode.firstChild;
          while (currentCellLastNode && currentCellLastNode.lastChild) currentCellLastNode = currentCellLastNode.lastChild;
        }
        let selectionNodeDeepestFirstChild = selectionNode;
        while (selectionNodeDeepestFirstChild && selectionNodeDeepestFirstChild.firstChild) selectionNodeDeepestFirstChild = selectionNodeDeepestFirstChild.firstChild;
        const isCellFirstNode = selectionNodeDeepestFirstChild === currentCellFirstNode;
        const isCellLastNode = selectionNodeDeepestFirstChild === currentCellLastNode;
        let siblingToSet = null;
        let offset = 0;
        if (e.keyCode === 38 && isCellFirstNode) {
          const previousRow = currentRow && currentRow.previousElementSibling;
          if (previousRow) siblingToSet = previousRow.children[currentCell.cellIndex];
          else siblingToSet = util2.getPreviousDeepestNode(table, core.context.element.wysiwyg);
          while (siblingToSet && siblingToSet.lastChild) siblingToSet = siblingToSet.lastChild;
          if (siblingToSet) offset = siblingToSet.textContent.length;
        } else if (e.keyCode === 40 && isCellLastNode) {
          const nextRow = currentRow && currentRow.nextElementSibling;
          if (nextRow) siblingToSet = nextRow.children[currentCell.cellIndex];
          else siblingToSet = util2.getNextDeepestNode(table, core.context.element.wysiwyg);
          while (siblingToSet && siblingToSet.firstChild) siblingToSet = siblingToSet.firstChild;
        }
        if (siblingToSet) {
          selectNode(siblingToSet, offset);
          return false;
        }
      }
      const componentInfo = core.getFileComponent(selectionNode);
      if (componentInfo) {
        const selectPrevious = /37|38/.test(e.keyCode);
        const selectNext = /39|40/.test(e.keyCode);
        if (selectPrevious) {
          const previousDeepestNode = util2.getPreviousDeepestNode(componentInfo.target, core.context.element.wysiwyg);
          selectNode(previousDeepestNode, previousDeepestNode && previousDeepestNode.textContent.length);
        } else if (selectNext) {
          const nextDeepestNode = util2.getNextDeepestNode(componentInfo.target, core.context.element.wysiwyg);
          selectNode(nextDeepestNode);
        }
      }
    },
    onKeyUp_wysiwyg: function(e) {
      if (event._onShortcutKey) return;
      core._editorRange();
      const keyCode = e.keyCode;
      const ctrl = e.ctrlKey || e.metaKey || keyCode === 91 || keyCode === 92 || keyCode === 224;
      const alt = e.altKey;
      if (core.isReadOnly) {
        if (!ctrl && event._cursorMoveKeyCode.test(keyCode)) event._applyTagEffects();
        return;
      }
      const range = core.getRange();
      let selectionNode = core.getSelectionNode();
      if (core._isBalloon && (core._isBalloonAlways && keyCode !== 27 || !range.collapsed)) {
        if (core._isBalloonAlways) {
          if (keyCode !== 27) event._showToolbarBalloonDelay();
        } else {
          event._showToolbarBalloon();
          return;
        }
      }
      let selectionNodeDeepestFirstChild = selectionNode;
      while (selectionNodeDeepestFirstChild && selectionNodeDeepestFirstChild.firstChild) selectionNodeDeepestFirstChild = selectionNodeDeepestFirstChild.firstChild;
      const selectedComponentInfo = core.getFileComponent(selectionNodeDeepestFirstChild);
      if (!(e.keyCode === 16 || e.shiftKey) && selectedComponentInfo) core.selectComponent(selectedComponentInfo.target, selectedComponentInfo.pluginName);
      if (keyCode === 8 && util2.isWysiwygDiv(selectionNode) && selectionNode.textContent === "" && selectionNode.children.length === 0) {
        e.preventDefault();
        e.stopPropagation();
        selectionNode.innerHTML = "";
        const oFormatTag = util2.createElement(util2.isFormatElement(core._variable.currentNodes[0]) ? core._variable.currentNodes[0] : options.defaultTag);
        oFormatTag.innerHTML = "<br>";
        selectionNode.appendChild(oFormatTag);
        core.setRange(oFormatTag, 0, oFormatTag, 0);
        event._applyTagEffects();
        core.history.push(false);
        return;
      }
      const formatEl = util2.getFormatElement(selectionNode, null);
      const rangeEl = util2.getRangeFormatElement(selectionNode, null);
      const attrs = core._formatAttrsTemp;
      if (attrs) {
        for (let i = 0, len = attrs.length; i < len; i++) {
          if (keyCode === 13 && /^id$/i.test(attrs[i].name)) {
            formatEl.removeAttribute("id");
            continue;
          }
          formatEl.setAttribute(attrs[i].name, attrs[i].value);
        }
        core._formatAttrsTemp = null;
      }
      if (!formatEl && range.collapsed && !util2.isComponent(selectionNode) && !util2.isList(selectionNode) && core._setDefaultFormat(util2.isRangeFormatElement(rangeEl) ? "DIV" : options.defaultTag) !== null) {
        selectionNode = core.getSelectionNode();
      }
      const textKey = !ctrl && !alt && !event._nonTextKeyCode.test(keyCode);
      if (textKey && selectionNode.nodeType === 3 && util2.zeroWidthRegExp.test(selectionNode.textContent) && !(e.isComposing !== void 0 ? e.isComposing : event._IEisComposing)) {
        let so = range.startOffset, eo = range.endOffset;
        const frontZeroWidthCnt = (selectionNode.textContent.substring(0, eo).match(event._frontZeroWidthReg) || "").length;
        so = range.startOffset - frontZeroWidthCnt;
        eo = range.endOffset - frontZeroWidthCnt;
        selectionNode.textContent = selectionNode.textContent.replace(util2.zeroWidthRegExp, "");
        core.setRange(selectionNode, so < 0 ? 0 : so, selectionNode, eo < 0 ? 0 : eo);
      }
      if (event._deleteKeyCode.test(keyCode) && formatEl && util2.onlyZeroWidthSpace(formatEl.textContent) && !formatEl.previousElementSibling) {
        formatEl.innerHTML = "<br>";
        core.setRange(formatEl, 0, formatEl, 0);
      }
      core._charCount("");
      if (typeof functions.onKeyUp === "function" && functions.onKeyUp(e, core) === false) return;
      if (!ctrl && !alt && !event._historyIgnoreKeyCode.test(keyCode)) {
        core.history.push(true);
      }
    },
    onScroll_wysiwyg: function(e) {
      core.controllersOff();
      if (core._isBalloon) event._hideToolbar();
      if (typeof functions.onScroll === "function") functions.onScroll(e, core);
    },
    onFocus_wysiwyg: function(e) {
      if (core._antiBlur) return;
      core.hasFocus = true;
      _w.setTimeout(event._applyTagEffects);
      if (core._isInline) event._showToolbarInline();
      if (typeof functions.onFocus === "function") functions.onFocus(e, core);
    },
    onBlur_wysiwyg: function(e) {
      if (core._antiBlur || core._variable.isCodeView) return;
      core.hasFocus = false;
      core.effectNode = null;
      core.controllersOff();
      if (core._isInline || core._isBalloon) event._hideToolbar();
      core._setKeyEffect([]);
      core._variable.currentNodes = [];
      core._variable.currentNodesMap = [];
      if (options.showPathLabel) context.element.navigation.textContent = "";
      if (typeof functions.onBlur === "function") functions.onBlur(e, core, this);
    },
    onMouseDown_resizingBar: function(e) {
      e.stopPropagation();
      core.submenuOff();
      core.controllersOff();
      core._variable.resizeClientY = e.clientY;
      context.element.resizeBackground.style.display = "block";
      function closureFunc() {
        context.element.resizeBackground.style.display = "none";
        _d.removeEventListener("mousemove", event._resize_editor);
        _d.removeEventListener("mouseup", closureFunc);
      }
      _d.addEventListener("mousemove", event._resize_editor);
      _d.addEventListener("mouseup", closureFunc);
    },
    _resize_editor: function(e) {
      const resizeInterval = context.element.editorArea.offsetHeight + (e.clientY - core._variable.resizeClientY);
      const h = resizeInterval < core._variable.minResizingSize ? core._variable.minResizingSize : resizeInterval;
      context.element.wysiwygFrame.style.height = context.element.code.style.height = h + "px";
      core._variable.resizeClientY = e.clientY;
      if (!util2.isResizeObserverSupported) core.__callResizeFunction(h, null);
    },
    onResize_window: function() {
      if (!util2.isResizeObserverSupported) core.resetResponsiveToolbar();
      const toolbar = context.element.toolbar;
      const isToolbarHidden = toolbar.style.display === "none" || core._isInline && !core._inlineToolbarAttr.isShow;
      if (toolbar.offsetWidth === 0 && !isToolbarHidden) return;
      if (context.fileBrowser && context.fileBrowser.area.style.display === "block") {
        context.fileBrowser.body.style.maxHeight = _w.innerHeight - context.fileBrowser.header.offsetHeight - 50 + "px";
      }
      if (core.submenuActiveButton && core.submenu) {
        core._setMenuPosition(core.submenuActiveButton, core.submenu);
      }
      if (core._variable.isFullScreen) {
        core._variable.innerHeight_fullScreen += _w.innerHeight - toolbar.offsetHeight - core._variable.innerHeight_fullScreen;
        context.element.editorArea.style.height = core._variable.innerHeight_fullScreen + "px";
        return;
      }
      if (core._variable.isCodeView && core._isInline) {
        event._showToolbarInline();
        return;
      }
      core._iframeAutoHeight();
      if (core._sticky) {
        toolbar.style.width = context.element.topArea.offsetWidth - 2 + "px";
        event.onScroll_window();
      }
    },
    onScroll_window: function() {
      if (core._variable.isFullScreen || context.element.toolbar.offsetWidth === 0 || options.stickyToolbar < 0) return;
      const element = context.element;
      const editorHeight = element.editorArea.offsetHeight;
      const y = (this.scrollY || _d.documentElement.scrollTop) + options.stickyToolbar;
      const editorTop = event._getEditorOffsets(options.toolbarContainer).top - (core._isInline ? element.toolbar.offsetHeight : 0);
      const inlineOffset = core._isInline && y - editorTop > 0 ? y - editorTop - context.element.toolbar.offsetHeight : 0;
      if (y < editorTop) {
        event._offStickyToolbar();
      } else if (y + core._variable.minResizingSize >= editorHeight + editorTop) {
        if (!core._sticky) event._onStickyToolbar(inlineOffset);
        element.toolbar.style.top = inlineOffset + editorHeight + editorTop + options.stickyToolbar - y - core._variable.minResizingSize + "px";
      } else if (y >= editorTop) {
        event._onStickyToolbar(inlineOffset);
      }
    },
    _getEditorOffsets: function(container) {
      let offsetEl = container || context.element.topArea;
      let t = 0, l = 0, s = 0;
      while (offsetEl) {
        t += offsetEl.offsetTop;
        l += offsetEl.offsetLeft;
        s += offsetEl.scrollTop;
        offsetEl = offsetEl.offsetParent;
      }
      return {
        top: t,
        left: l,
        scroll: s
      };
    },
    _getPageBottomSpace: function() {
      return _d.documentElement.scrollHeight - (event._getEditorOffsets(null).top + context.element.topArea.offsetHeight);
    },
    _onStickyToolbar: function(inlineOffset) {
      const element = context.element;
      if (!core._isInline && !options.toolbarContainer) {
        element._stickyDummy.style.height = element.toolbar.offsetHeight + "px";
        element._stickyDummy.style.display = "block";
      }
      element.toolbar.style.top = options.stickyToolbar + inlineOffset + "px";
      element.toolbar.style.width = core._isInline ? core._inlineToolbarAttr.width : element.toolbar.offsetWidth + "px";
      util2.addClass(element.toolbar, "se-toolbar-sticky");
      core._sticky = true;
    },
    _offStickyToolbar: function() {
      const element = context.element;
      element._stickyDummy.style.display = "none";
      element.toolbar.style.top = core._isInline ? core._inlineToolbarAttr.top : "";
      element.toolbar.style.width = core._isInline ? core._inlineToolbarAttr.width : "";
      element.editorArea.style.marginTop = "";
      util2.removeClass(element.toolbar, "se-toolbar-sticky");
      core._sticky = false;
    },
    _codeViewAutoHeight: function() {
      if (core._variable.isFullScreen) return;
      context.element.code.style.height = context.element.code.scrollHeight + "px";
    },
    // FireFox - table delete, Chrome - image, video, audio
    _hardDelete: function() {
      const range = core.getRange();
      const sc = range.startContainer;
      const ec = range.endContainer;
      const sCell = util2.getRangeFormatElement(sc);
      const eCell = util2.getRangeFormatElement(ec);
      const sIsCell = util2.isCell(sCell);
      const eIsCell = util2.isCell(eCell);
      const ancestor = range.commonAncestorContainer;
      if ((sIsCell && !sCell.previousElementSibling && !sCell.parentElement.previousElementSibling || eIsCell && !eCell.nextElementSibling && !eCell.parentElement.nextElementSibling) && sCell !== eCell) {
        if (!sIsCell) {
          util2.removeItem(util2.getParentElement(eCell, function(current) {
            return ancestor === current.parentNode;
          }));
        } else if (!eIsCell) {
          util2.removeItem(util2.getParentElement(sCell, function(current) {
            return ancestor === current.parentNode;
          }));
        } else {
          util2.removeItem(util2.getParentElement(sCell, function(current) {
            return ancestor === current.parentNode;
          }));
          core.nativeFocus();
          return true;
        }
      }
      const sComp = sc.nodeType === 1 ? util2.getParentElement(sc, ".se-component") : null;
      const eComp = ec.nodeType === 1 ? util2.getParentElement(ec, ".se-component") : null;
      if (sComp) util2.removeItem(sComp);
      if (eComp) util2.removeItem(eComp);
      return false;
    },
    onPaste_wysiwyg: function(e) {
      const clipboardData = util2.isIE ? _w.clipboardData : e.clipboardData;
      if (!clipboardData) return true;
      return event._dataTransferAction("paste", e, clipboardData);
    },
    _setClipboardComponent: function(e, info, clipboardData) {
      e.preventDefault();
      e.stopPropagation();
      clipboardData.setData("text/html", info.component.outerHTML);
    },
    onCopy_wysiwyg: function(e) {
      const clipboardData = util2.isIE ? _w.clipboardData : e.clipboardData;
      if (typeof functions.onCopy === "function" && functions.onCopy(e, clipboardData, core) === false) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      const info = core.currentFileComponentInfo;
      if (info && !util2.isIE) {
        event._setClipboardComponent(e, info, clipboardData);
        util2.addClass(info.component, "se-component-copy");
        _w.setTimeout(function() {
          util2.removeClass(info.component, "se-component-copy");
        }, 150);
      }
    },
    onSave_wysiwyg: function(content) {
      if (typeof functions.onSave === "function") {
        functions.onSave(content, core);
        return;
      }
    },
    onCut_wysiwyg: function(e) {
      const clipboardData = util2.isIE ? _w.clipboardData : e.clipboardData;
      if (typeof functions.onCut === "function" && functions.onCut(e, clipboardData, core) === false) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      const info = core.currentFileComponentInfo;
      if (info && !util2.isIE) {
        event._setClipboardComponent(e, info, clipboardData);
        util2.removeItem(info.component);
        core.controllersOff();
      }
      _w.setTimeout(function() {
        core.history.push(false);
      });
    },
    onDrop_wysiwyg: function(e) {
      if (core.isReadOnly || util2.isIE) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      const dataTransfer = e.dataTransfer;
      if (!dataTransfer) return true;
      event._setDropLocationSelection(e);
      core.removeNode();
      if (!document.body.contains(core.currentControllerTarget)) core.controllersOff();
      return event._dataTransferAction("drop", e, dataTransfer);
    },
    _setDropLocationSelection: function(e) {
      const range = { startContainer: null, startOffset: null, endContainer: null, endOffset: null };
      let r = null;
      if (e.rangeParent) {
        range.startContainer = e.rangeParent;
        range.startOffset = e.rangeOffset;
        range.endContainer = e.rangeParent;
        range.endOffset = e.rangeOffset;
      } else if (core._wd.caretRangeFromPoint) {
        r = core._wd.caretRangeFromPoint(e.clientX, e.clientY);
      } else {
        r = core.getRange();
      }
      if (r) {
        range.startContainer = r.startContainer;
        range.startOffset = r.startOffset;
        range.endContainer = r.endContainer;
        range.endOffset = r.endOffset;
      }
      if (range.startContainer === range.endContainer) {
        const component = util2.getParentElement(range.startContainer, util2.isComponent);
        if (component) {
          range.startContainer = component;
          range.startOffset = 0;
          range.endContainer = component;
          range.endOffset = 0;
        }
      }
      core.setRange(range.startContainer, range.startOffset, range.endContainer, range.endOffset);
    },
    _dataTransferAction: function(type, e, data) {
      let plainText, cleanData;
      if (util2.isIE) {
        plainText = data.getData("Text");
        const range = core.getRange();
        const tempDiv = util2.createElement("DIV");
        const tempRange = {
          sc: range.startContainer,
          so: range.startOffset,
          ec: range.endContainer,
          eo: range.endOffset
        };
        tempDiv.setAttribute("contenteditable", true);
        tempDiv.style.cssText = "position:absolute; top:0; left:0; width:1px; height:1px; overflow:hidden;";
        context.element.relative.appendChild(tempDiv);
        tempDiv.focus();
        _w.setTimeout(function() {
          cleanData = tempDiv.innerHTML;
          util2.removeItem(tempDiv);
          core.setRange(tempRange.sc, tempRange.so, tempRange.ec, tempRange.eo);
          event._setClipboardData(type, e, plainText, cleanData, data);
        });
        return true;
      } else {
        plainText = data.getData("text/plain");
        cleanData = data.getData("text/html");
        if (event._setClipboardData(type, e, plainText, cleanData, data) === false) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }
    },
    _setClipboardData: function(type, e, plainText, cleanData, data) {
      const MSData = /class=["']*Mso(Normal|List)/i.test(cleanData) || /content=["']*Word.Document/i.test(cleanData) || /content=["']*OneNote.File/i.test(cleanData) || /content=["']*Excel.Sheet/i.test(cleanData);
      const onlyText = !cleanData;
      if (!onlyText) {
        cleanData = cleanData.replace(/^<html>\r?\n?<body>\r?\n?\x3C!--StartFragment--\>|\x3C!--EndFragment-->\r?\n?<\/body\>\r?\n?<\/html>$/g, "");
        if (MSData) {
          cleanData = cleanData.replace(/\n/g, " ");
          plainText = plainText.replace(/\n/g, " ");
        }
        cleanData = core.cleanHTML(cleanData, core.pasteTagsWhitelistRegExp, core.pasteTagsBlacklistRegExp);
      } else {
        cleanData = util2._HTMLConvertor(plainText).replace(/\n/g, "<br>");
      }
      const maxCharCount = core._charCount(core._charTypeHTML ? cleanData : plainText);
      if (type === "paste" && typeof functions.onPaste === "function") {
        const value = functions.onPaste(e, cleanData, maxCharCount, core);
        if (value === false) {
          return false;
        } else if (typeof value === "string") {
          if (!value) return false;
          cleanData = value;
        }
      }
      if (type === "drop" && typeof functions.onDrop === "function") {
        const value = functions.onDrop(e, cleanData, maxCharCount, core);
        if (value === false) {
          return false;
        } else if (typeof value === "string") {
          if (!value) return false;
          cleanData = value;
        }
      }
      const files = data.files;
      if (files.length > 0 && !MSData) {
        if (/^image/.test(files[0].type) && core.plugins.image) {
          functions.insertImage(files);
        }
        return false;
      }
      if (!maxCharCount) {
        return false;
      }
      if (cleanData) {
        functions.insertHTML(cleanData, true, false);
        return false;
      }
    },
    onMouseMove_wysiwyg: function(e) {
      if (core.isDisabled || core.isReadOnly) return false;
      const component = util2.getParentElement(e.target, util2.isComponent);
      const lineBreakerStyle = core._lineBreaker.style;
      if (component && !core.currentControllerName) {
        const ctxEl = context.element;
        let scrollTop = 0;
        let el = ctxEl.wysiwyg;
        do {
          scrollTop += el.scrollTop;
          el = el.parentElement;
        } while (el && !/^(BODY|HTML)$/i.test(el.nodeName));
        const wScroll = ctxEl.wysiwyg.scrollTop;
        const offsets = event._getEditorOffsets(null);
        const componentTop = util2.getOffset(component, ctxEl.wysiwygFrame).top + wScroll;
        const y = e.pageY + scrollTop + (options.iframe && !options.toolbarContainer ? ctxEl.toolbar.offsetHeight : 0);
        const c = componentTop + (options.iframe ? scrollTop : offsets.top);
        const isList = util2.isListCell(component.parentNode);
        let dir = "", top = "";
        if ((isList ? !component.previousSibling : !util2.isFormatElement(component.previousElementSibling)) && y < c + 20) {
          top = componentTop;
          dir = "t";
        } else if ((isList ? !component.nextSibling : !util2.isFormatElement(component.nextElementSibling)) && y > c + component.offsetHeight - 20) {
          top = componentTop + component.offsetHeight;
          dir = "b";
        } else {
          lineBreakerStyle.display = "none";
          return;
        }
        core._variable._lineBreakComp = component;
        core._variable._lineBreakDir = dir;
        lineBreakerStyle.top = top - wScroll + "px";
        core._lineBreakerButton.style.left = util2.getOffset(component).left + component.offsetWidth / 2 - 15 + "px";
        lineBreakerStyle.display = "block";
      } else if (lineBreakerStyle.display !== "none") {
        lineBreakerStyle.display = "none";
      }
    },
    _enterPrevent: function(e) {
      e.preventDefault();
      if (!util2.isMobile) return;
      core.__focusTemp.focus();
    },
    _onMouseDown_lineBreak: function(e) {
      e.preventDefault();
    },
    _onLineBreak: function(e) {
      e.preventDefault();
      const component = core._variable._lineBreakComp;
      const dir = !this ? core._variable._lineBreakDir : this;
      const isList = util2.isListCell(component.parentNode);
      const format = util2.createElement(isList ? "BR" : util2.isCell(component.parentNode) ? "DIV" : options.defaultTag);
      if (!isList) format.innerHTML = "<br>";
      if (core._charTypeHTML && !core.checkCharCount(format.outerHTML, "byte-html")) return;
      component.parentNode.insertBefore(format, dir === "t" ? component : component.nextSibling);
      core._lineBreaker.style.display = "none";
      core._variable._lineBreakComp = null;
      const focusEl = isList ? format : format.firstChild;
      core.setRange(focusEl, 1, focusEl, 1);
      core.history.push(false);
    },
    _resizeObserver: null,
    _toolbarObserver: null,
    _addEvent: function() {
      const eventWysiwyg = options.iframe ? core._ww : context.element.wysiwyg;
      if (util2.isResizeObserverSupported) {
        this._resizeObserver = new _w.ResizeObserver(function(entries) {
          core.__callResizeFunction(-1, entries[0]);
        });
      }
      context.element.toolbar.addEventListener("mousedown", event._buttonsEventHandler, false);
      context.element._menuTray.addEventListener("mousedown", event._buttonsEventHandler, false);
      context.element.toolbar.addEventListener("click", event.onClick_toolbar, false);
      eventWysiwyg.addEventListener("mousedown", event.onMouseDown_wysiwyg, false);
      eventWysiwyg.addEventListener("click", event.onClick_wysiwyg, false);
      eventWysiwyg.addEventListener(util2.isIE ? "textinput" : "input", event.onInput_wysiwyg, false);
      eventWysiwyg.addEventListener("keydown", event.onKeyDown_wysiwyg, false);
      eventWysiwyg.addEventListener("keyup", event.onKeyUp_wysiwyg, false);
      eventWysiwyg.addEventListener("paste", event.onPaste_wysiwyg, false);
      eventWysiwyg.addEventListener("copy", event.onCopy_wysiwyg, false);
      eventWysiwyg.addEventListener("cut", event.onCut_wysiwyg, false);
      eventWysiwyg.addEventListener("drop", event.onDrop_wysiwyg, false);
      eventWysiwyg.addEventListener("scroll", event.onScroll_wysiwyg, false);
      eventWysiwyg.addEventListener("focus", event.onFocus_wysiwyg, false);
      eventWysiwyg.addEventListener("blur", event.onBlur_wysiwyg, false);
      event._lineBreakerBind = { a: event._onLineBreak.bind(""), t: event._onLineBreak.bind("t"), b: event._onLineBreak.bind("b") };
      eventWysiwyg.addEventListener("mousemove", event.onMouseMove_wysiwyg, false);
      core._lineBreakerButton.addEventListener("mousedown", event._onMouseDown_lineBreak, false);
      core._lineBreakerButton.addEventListener("click", event._lineBreakerBind.a, false);
      context.element.lineBreaker_t.addEventListener("mousedown", event._lineBreakerBind.t, false);
      context.element.lineBreaker_b.addEventListener("mousedown", event._lineBreakerBind.b, false);
      eventWysiwyg.addEventListener("touchstart", event.onMouseDown_wysiwyg, { passive: true, useCapture: false });
      eventWysiwyg.addEventListener("touchend", event.onClick_wysiwyg, { passive: true, useCapture: false });
      if (options.height === "auto" && !options.codeMirrorEditor) {
        context.element.code.addEventListener("keydown", event._codeViewAutoHeight, false);
        context.element.code.addEventListener("keyup", event._codeViewAutoHeight, false);
        context.element.code.addEventListener("paste", event._codeViewAutoHeight, false);
      }
      if (context.element.resizingBar) {
        if (/\d+/.test(options.height) && options.resizeEnable) {
          context.element.resizingBar.addEventListener("mousedown", event.onMouseDown_resizingBar, false);
        } else {
          util2.addClass(context.element.resizingBar, "se-resizing-none");
        }
      }
      event._setResponsiveToolbar();
      if (util2.isResizeObserverSupported) this._toolbarObserver = new _w.ResizeObserver(core.resetResponsiveToolbar);
      _w.addEventListener("resize", event.onResize_window, false);
      if (options.stickyToolbar > -1) {
        _w.addEventListener("scroll", event.onScroll_window, false);
      }
    },
    _removeEvent: function() {
      const eventWysiwyg = options.iframe ? core._ww : context.element.wysiwyg;
      context.element.toolbar.removeEventListener("mousedown", event._buttonsEventHandler);
      context.element._menuTray.removeEventListener("mousedown", event._buttonsEventHandler);
      context.element.toolbar.removeEventListener("click", event.onClick_toolbar);
      eventWysiwyg.removeEventListener("mousedown", event.onMouseDown_wysiwyg);
      eventWysiwyg.removeEventListener("click", event.onClick_wysiwyg);
      eventWysiwyg.removeEventListener(util2.isIE ? "textinput" : "input", event.onInput_wysiwyg);
      eventWysiwyg.removeEventListener("keydown", event.onKeyDown_wysiwyg);
      eventWysiwyg.removeEventListener("keyup", event.onKeyUp_wysiwyg);
      eventWysiwyg.removeEventListener("paste", event.onPaste_wysiwyg);
      eventWysiwyg.removeEventListener("copy", event.onCopy_wysiwyg);
      eventWysiwyg.removeEventListener("cut", event.onCut_wysiwyg);
      eventWysiwyg.removeEventListener("drop", event.onDrop_wysiwyg);
      eventWysiwyg.removeEventListener("scroll", event.onScroll_wysiwyg);
      eventWysiwyg.removeEventListener("mousemove", event.onMouseMove_wysiwyg);
      core._lineBreakerButton.removeEventListener("mousedown", event._onMouseDown_lineBreak);
      core._lineBreakerButton.removeEventListener("click", event._lineBreakerBind.a);
      context.element.lineBreaker_t.removeEventListener("mousedown", event._lineBreakerBind.t);
      context.element.lineBreaker_b.removeEventListener("mousedown", event._lineBreakerBind.b);
      event._lineBreakerBind = null;
      eventWysiwyg.removeEventListener("touchstart", event.onMouseDown_wysiwyg, { passive: true, useCapture: false });
      eventWysiwyg.removeEventListener("touchend", event.onClick_wysiwyg, { passive: true, useCapture: false });
      eventWysiwyg.removeEventListener("focus", event.onFocus_wysiwyg);
      eventWysiwyg.removeEventListener("blur", event.onBlur_wysiwyg);
      context.element.code.removeEventListener("keydown", event._codeViewAutoHeight);
      context.element.code.removeEventListener("keyup", event._codeViewAutoHeight);
      context.element.code.removeEventListener("paste", event._codeViewAutoHeight);
      if (context.element.resizingBar) {
        context.element.resizingBar.removeEventListener("mousedown", event.onMouseDown_resizingBar);
      }
      if (event._resizeObserver) {
        event._resizeObserver.unobserve(context.element.wysiwygFrame);
        event._resizeObserver = null;
      }
      if (event._toolbarObserver) {
        event._toolbarObserver.unobserve(context.element._toolbarShadow);
        event._toolbarObserver = null;
      }
      _w.removeEventListener("resize", event.onResize_window);
      _w.removeEventListener("scroll", event.onScroll_window);
    },
    _setResponsiveToolbar: function() {
      if (_responsiveButtons.length === 0) {
        _responsiveButtons = null;
        return;
      }
      event._responsiveCurrentSize = "default";
      const sizeArray = event._responsiveButtonSize = [];
      const buttonsObj = event._responsiveButtons = { default: _responsiveButtons[0] };
      for (let i = 1, len = _responsiveButtons.length, size, buttonGroup; i < len; i++) {
        buttonGroup = _responsiveButtons[i];
        size = buttonGroup[0] * 1;
        sizeArray.push(size);
        buttonsObj[size] = buttonGroup[1];
      }
      sizeArray.sort(function(a, b) {
        return a - b;
      }).unshift("default");
    }
  };
  const functions = {
    /**
     * @description Core, Util object
     */
    core,
    util: util2,
    /**
     * @description Event functions
     * @param {Object} e Event Object
     * @param {Object} core Core object
     */
    onload: null,
    onScroll: null,
    onMouseDown: null,
    onClick: null,
    onInput: null,
    onKeyDown: null,
    onKeyUp: null,
    onCopy: null,
    onCut: null,
    onFocus: null,
    /**
     * @description Event functions
     * @param {Object} e Event Object
     * @param {Object} core Core object
     * @param {String} contents Current contents
     */
    onBlur: null,
    /**
     * @description Event functions
     * @param {String} contents Current contents
     * @param {Object} core Core object
     */
    onChange: null,
    /**
     * @description Event functions
     * @param {String} contents Current contents
     * @param {Object} core Core object
     */
    onSave: null,
    /**
     * @description Event functions (drop, paste)
     * When false is returned, the default behavior is stopped.
     * If the string is returned, the cleanData value is modified to the return value.
     * @param {Object} e Event object.
     * @param {String} cleanData HTML string modified for editor format.
     * @param {Boolean} maxChartCount option (true if max character is exceeded)
     * @param {Object} core Core object
     * @returns {Boolean|String}
     */
    onDrop: null,
    onPaste: null,
    /**
     * @description Called just before the inline toolbar is positioned and displayed on the screen.
     * @param {Element} toolbar Toolbar Element
     * @param {Object} context The editor's context object (editor.getContext())
     * @param {Object} core Core object
     */
    showInline: null,
    /**
     * @description Called just after the controller is positioned and displayed on the screen.
     * controller - editing elements displayed on the screen [image resizing, table editor, link editor..]]
     * @param {String} name The name of the plugin that called the controller
     * @param {Array} controllers Array of Controller elements
     * @param {Object} core Core object
     */
    showController: null,
    /**
     * @description An event when toggling between code view and wysiwyg view.
     * @param {Boolean} isCodeView Whether the current code view mode
     * @param {Object} core Core object
     */
    toggleCodeView: null,
    /**
     * @description An event when toggling full screen.
     * @param {Boolean} isFullScreen Whether the current full screen mode
     * @param {Object} core Core object
     */
    toggleFullScreen: null,
    /**
     * @description It replaces the default callback function of the image upload
     * @param {Object} response Response object
     * @param {Object} info Input information
     * - linkValue: Link url value
     * - linkNewWindow: Open in new window Check Value
     * - inputWidth: Value of width input
     * - inputHeight: Value of height input
     * - align: Align Check Value
     * - isUpdate: Update image if true, create image if false
     * - element: If isUpdate is true, the currently selected image.
     * @param {Object} core Core object
     */
    imageUploadHandler: null,
    /**
     * @description It replaces the default callback function of the video upload
     * @param xmlHttp xmlHttpRequest object
     * @param info Input information
     * - inputWidth: Value of width input
     * - inputHeight: Value of height input
     * - align: Align Check Value
     * - isUpdate: Update video if true, create video if false
     * - element: If isUpdate is true, the currently selected video.
     * @param core Core object
     */
    videoUploadHandler: null,
    /**
     * @description It replaces the default callback function of the audio upload
     * @param xmlHttp xmlHttpRequest object
     * @param info Input information
     * - isUpdate: Update audio if true, create audio if false
     * - element: If isUpdate is true, the currently selected audio.
     * @param core Core object
     */
    audioUploadHandler: null,
    /**
     * @description Called before the image is uploaded
     * If true is returned, the internal upload process runs normally.
     * If false is returned, no image upload is performed.
     * If new fileList are returned,  replaced the previous fileList
     * If undefined is returned, it waits until "uploadHandler" is executed.
     * @param {Array} files Files array
     * @param {Object} info info: {
     * - linkValue: Link url value
     * - linkNewWindow: Open in new window Check Value
     * - inputWidth: Value of width input
     * - inputHeight: Value of height input
     * - align: Align Check Value
     * - isUpdate: Update image if true, create image if false
     * - element: If isUpdate is true, the currently selected image.
     * }
     * @param {Object} core Core object
     * @param {Function} uploadHandler If undefined is returned, it waits until "uploadHandler" is executed.
     *                "uploadHandler" is an upload function with "core" and "info" bound.
     *                [upload files] : uploadHandler(files or [new File(...),])
     *                [error]        : uploadHandler("Error message")
     *                [Just finish]  : uploadHandler()
     *                [directly register] : uploadHandler(response) // Same format as "imageUploadUrl" response
     *                                   ex) {
     *                                      // "errorMessage": "insert error message",
     *                                      "result": [ { "url": "...", "name": "...", "size": "999" }, ]
     *                                   }
     * @returns {Boolean|Array|undefined}
     */
    onImageUploadBefore: null,
    /**
     * @description Called before the video is uploaded
     * If true is returned, the internal upload process runs normally.
     * If false is returned, no video(iframe, video) upload is performed.
     * If new fileList are returned,  replaced the previous fileList
     * If undefined is returned, it waits until "uploadHandler" is executed.
     * @param {Array} files Files array
     * @param {Object} info info: {
     * - inputWidth: Value of width input
     * - inputHeight: Value of height input
     * - align: Align Check Value
     * - isUpdate: Update video if true, create video if false
     * - element: If isUpdate is true, the currently selected video.
     * }
     * @param {Object} core Core object
     * @param {Function} uploadHandler If undefined is returned, it waits until "uploadHandler" is executed.
     *                "uploadHandler" is an upload function with "core" and "info" bound.
     *                [upload files] : uploadHandler(files or [new File(...),])
     *                [error]        : uploadHandler("Error message")
     *                [Just finish]  : uploadHandler()
     *                [directly register] : uploadHandler(response) // Same format as "videoUploadUrl" response
     *                                   ex) {
     *                                      // "errorMessage": "insert error message",
     *                                      "result": [ { "url": "...", "name": "...", "size": "999" }, ]
     *                                   }
     * @returns {Boolean|Array|undefined}
     */
    onVideoUploadBefore: null,
    /**
     * @description Called before the audio is uploaded
     * If true is returned, the internal upload process runs normally.
     * If false is returned, no audio upload is performed.
     * If new fileList are returned,  replaced the previous fileList
     * If undefined is returned, it waits until "uploadHandler" is executed.
     * @param {Array} files Files array
     * @param {Object} info info: {
     * - isUpdate: Update audio if true, create audio if false
     * - element: If isUpdate is true, the currently selected audio.
     * }
     * @param {Object} core Core object
     * @param {Function} uploadHandler If undefined is returned, it waits until "uploadHandler" is executed.
     *                "uploadHandler" is an upload function with "core" and "info" bound.
     *                [upload files] : uploadHandler(files or [new File(...),])
     *                [error]        : uploadHandler("Error message")
     *                [Just finish]  : uploadHandler()
     *                [directly register] : uploadHandler(response) // Same format as "audioUploadUrl" response
     *                                   ex) {
     *                                      // "errorMessage": "insert error message",
     *                                      "result": [ { "url": "...", "name": "...", "size": "999" }, ]
     *                                   }
     * @returns {Boolean|Array|undefined}
     */
    onAudioUploadBefore: null,
    /**
     * @description Called when the image is uploaded, updated, deleted
     * @param {Element} targetElement Target element
     * @param {Number} index Uploaded index
     * @param {String} state Upload status ('create', 'update', 'delete')
     * @param {Object} info Image info object
     * - index: data index
     * - name: file name
     * - size: file size
     * - select: select function
     * - delete: delete function
     * - element: target element
     * - src: src attribute of tag
     * @param {Number} remainingFilesCount Count of remaining files to upload (0 when added as a url)
     * @param {Object} core Core object
     */
    onImageUpload: null,
    /**
    * @description Called when the video(iframe, video) is is uploaded, updated, deleted
    * -- arguments is same "onImageUpload" --
    */
    onVideoUpload: null,
    /**
    * @description Called when the audio is is uploaded, updated, deleted
    * -- arguments is same "onImageUpload" --
    */
    onAudioUpload: null,
    /**
     * @description Called when the image is upload failed
     * @param {String} errorMessage Error message
     * @param {Object} result Response Object
     * @param {Object} core Core object
     * @returns {Boolean}
     */
    onImageUploadError: null,
    /**
     * @description Called when the video(iframe, video) upload failed
     * -- arguments is same "onImageUploadError" --
     */
    onVideoUploadError: null,
    /**
     * @description Called when the audio upload failed
     * -- arguments is same "onImageUploadError" --
     */
    onAudioUploadError: null,
    /**
     * @description Called when the editor is resized using the bottom bar
     */
    onResizeEditor: null,
    /**
     * @description Called after the "setToolbarButtons" invocation.
     * Can be used to tweak buttons properties (useful for custom buttons)
     * @param {Array} buttonList Button list 
     * @param {Object} core Core object
     */
    onSetToolbarButtons: null,
    /**
     * @description Reset the buttons on the toolbar. (Editor is not reloaded)
     * You cannot set a new plugin for the button.
     * @param {Array} buttonList Button list 
     */
    setToolbarButtons: function(buttonList) {
      core.submenuOff();
      core.containerOff();
      core.moreLayerOff();
      const newToolbar = constructor_default._createToolBar(_d, buttonList, core.plugins, options);
      _responsiveButtons = newToolbar.responsiveButtons;
      event._setResponsiveToolbar();
      context.element.toolbar.replaceChild(newToolbar._buttonTray, context.element._buttonTray);
      const newContext = context_default(context.element.originElement, core._getConstructed(context.element), options);
      context.element = newContext.element;
      context.tool = newContext.tool;
      if (options.iframe) context.element.wysiwyg = core._wd.body;
      core._recoverButtonStates();
      core._cachingButtons();
      core.history._resetCachingButton();
      core.effectNode = null;
      if (core.hasFocus) event._applyTagEffects();
      if (core.isReadOnly) util2.setDisabledButtons(true, core.resizingDisabledButtons);
      if (typeof functions.onSetToolbarButtons === "function") functions.onSetToolbarButtons(newToolbar._buttonTray.querySelectorAll("button"), core);
    },
    /**
     * @description Add or reset option property (Editor is reloaded)
     * @param {Object} _options Options
     */
    setOptions: function(_options) {
      event._removeEvent();
      core._resetComponents();
      util2.removeClass(core._styleCommandMap.showBlocks, "active");
      util2.removeClass(core._styleCommandMap.codeView, "active");
      core._variable.isCodeView = false;
      core._iframeAuto = null;
      core.plugins = _options.plugins || core.plugins;
      const mergeOptions = [options, _options].reduce(function(init, option) {
        for (let key in option) {
          if (!util2.hasOwn(option, key)) continue;
          if (key === "plugins" && option[key] && init[key]) {
            let i = init[key], o = option[key];
            i = i.length ? i : _w.Object.keys(i).map(function(name2) {
              return i[name2];
            });
            o = o.length ? o : _w.Object.keys(o).map(function(name2) {
              return o[name2];
            });
            init[key] = o.filter(function(val) {
              return i.indexOf(val) === -1;
            }).concat(i);
          } else {
            init[key] = option[key];
          }
        }
        return init;
      }, {});
      const el = context.element;
      const _initHTML = el.wysiwyg.innerHTML;
      const cons = constructor_default._setOptions(mergeOptions, context, options);
      if (cons.callButtons) {
        pluginCallButtons = cons.callButtons;
        core.initPlugins = {};
      }
      if (cons.plugins) {
        core.plugins = plugins = cons.plugins;
      }
      if (el._menuTray.children.length === 0) this._menuTray = {};
      _responsiveButtons = cons.toolbar.responsiveButtons;
      core.options = options = mergeOptions;
      core.lang = lang = options.lang;
      if (options.iframe) {
        el.wysiwygFrame.addEventListener("load", function() {
          util2._setIframeDocument(this, options);
          core._setOptionsInit(el, _initHTML);
        });
      }
      el.editorArea.appendChild(el.wysiwygFrame);
      if (!options.iframe) {
        core._setOptionsInit(el, _initHTML);
      }
    },
    /**
     * @description Set "options.defaultStyle" style.
     * Define the style of the edit area
     * It can also be defined with the "setOptions" method, but the "setDefaultStyle" method does not render the editor again.
     * @param {String} style Style string
     */
    setDefaultStyle: function(style) {
      const newStyles = options._editorStyles = util2._setDefaultOptionStyle(options, style);
      const el = context.element;
      el.topArea.style.cssText = newStyles.top;
      el.code.style.cssText = options._editorStyles.frame;
      el.code.style.display = "none";
      if (options.height === "auto") {
        el.code.style.overflow = "hidden";
      } else {
        el.code.style.overflow = "";
      }
      if (!options.iframe) {
        el.wysiwygFrame.style.cssText = newStyles.frame + newStyles.editor;
      } else {
        el.wysiwygFrame.style.cssText = newStyles.frame;
        el.wysiwyg.style.cssText = newStyles.editor;
      }
    },
    /**
     * @description Open a notice area
     * @param {String} message Notice message
     */
    noticeOpen: function(message) {
      core.notice.open.call(core, message);
    },
    /**
     * @description Close a notice area
     */
    noticeClose: function() {
      core.notice.close.call(core);
    },
    /**
     * @description Copying the contents of the editor to the original textarea and execute onSave callback
     * * not working during enabled codeView mode
     */
    save: function() {
      const contents = core.getContents(false);
      context.element.originElement.value = contents;
      event.onSave_wysiwyg(contents, core);
    },
    /**
     * @description Gets the suneditor's context object. Contains settings, plugins, and cached element objects
     * @returns {Object}
     */
    getContext: function() {
      return context;
    },
    /**
     * @description Gets the contents of the suneditor
     * * not working during enabled codeView mode
     * @param {Boolean} onlyContents - Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {String}
     */
    getContents: function(onlyContents) {
      return core.getContents(onlyContents);
    },
    /**
     * @description Gets only the text of the suneditor contents
     * * not working during enabled codeView mode
     * @returns {String}
     */
    getText: function() {
      return context.element.wysiwyg.textContent;
    },
    /**
     * @description Get the editor's number of characters or binary data size.
     * You can use the "charCounterType" option format.
     * @param {String|null} charCounterType options - charCounterType ('char', 'byte', 'byte-html')
     * If argument is no value, the currently set "charCounterType" option is used.
     * @returns {Number}
     */
    getCharCount: function(charCounterType) {
      charCounterType = typeof charCounterType === "string" ? charCounterType : options.charCounterType;
      return core.getCharLength(core._charTypeHTML ? context.element.wysiwyg.innerHTML : context.element.wysiwyg.textContent, charCounterType);
    },
    /**
     * @description Gets uploaded images informations
     * - index: data index
     * - name: file name
     * - size: file size
     * - select: select function
     * - delete: delete function
     * - element: target element
     * - src: src attribute of tag
     * @returns {Array}
     */
    getImagesInfo: function() {
      return context.image ? context.image._infoList : [];
    },
    /**
     * @description Gets uploaded files(plugin using fileManager) information list.
     * image: [img], video: [video, iframe], audio: [audio]
     * When the argument value is 'image', it is the same function as "getImagesInfo".
     * - index: data index
     * - name: file name
     * - size: file size
     * - select: select function
     * - delete: delete function
     * - element: target element
     * - src: src attribute of tag
     * @param {String} pluginName Plugin name (image, video, audio)
     * @returns {Array}
     */
    getFilesInfo: function(pluginName) {
      return context[pluginName] ? context[pluginName]._infoList : [];
    },
    /**
     * @description Upload images using image plugin
     * @param {FileList} files FileList
     */
    insertImage: function(files) {
      if (!core.plugins.image || !files) return;
      if (!core.initPlugins.image) core.callPlugin("image", core.plugins.image.submitAction.bind(core, files), null);
      else core.plugins.image.submitAction.call(core, files);
      core.focus();
    },
    /**
     * @description Inserts an HTML element or HTML string or plain string at the current cursor position
     * @param {Element|String} html HTML Element or HTML string or plain string
     * @param {Boolean} notCleaningData If true, inserts the HTML string without refining it with core.cleanHTML.
     * @param {Boolean} checkCharCount If true, if "options.maxCharCount" is exceeded when "element" is added, null is returned without addition.
     * @param {Boolean} rangeSelection If true, range select the inserted node.
     */
    insertHTML: function(html, notCleaningData, checkCharCount, rangeSelection) {
      if (!context.element.wysiwygFrame.contains(core.getSelection().focusNode)) core.focus();
      if (typeof html === "string") {
        if (!notCleaningData) html = core.cleanHTML(html, null, null);
        try {
          if (util2.isListCell(util2.getFormatElement(core.getSelectionNode(), null))) {
            const dom2 = _d.createRange().createContextualFragment(html);
            const domTree2 = dom2.childNodes;
            if (core._isFormatData(domTree2)) html = core._convertListCell(domTree2);
          }
          const dom = _d.createRange().createContextualFragment(html);
          const domTree = dom.childNodes;
          if (checkCharCount) {
            const type = core._charTypeHTML ? "outerHTML" : "textContent";
            let checkHTML = "";
            for (let i = 0, len = domTree.length; i < len; i++) {
              checkHTML += domTree[i][type];
            }
            if (!core.checkCharCount(checkHTML, null)) return;
          }
          let c, a, t, prev, firstCon;
          while (c = domTree[0]) {
            if (prev && prev.nodeType === 3 && a && a.nodeType === 1 && util2.isBreak(c)) {
              prev = c;
              util2.removeItem(c);
              continue;
            }
            t = core.insertNode(c, a, false);
            a = t.container || t;
            if (!firstCon) firstCon = t;
            prev = c;
          }
          if (prev.nodeType === 3 && a.nodeType === 1) a = prev;
          const offset = a.nodeType === 3 ? t.endOffset || a.textContent.length : a.childNodes.length;
          if (rangeSelection) core.setRange(firstCon.container || firstCon, firstCon.startOffset || 0, a, offset);
          else core.setRange(a, offset, a, offset);
        } catch (error) {
          if (core.isDisabled || core.isReadOnly) return;
          console.warn("[SUNEDITOR.insertHTML.fail] " + error);
          core.execCommand("insertHTML", false, html);
        }
      } else {
        if (util2.isComponent(html)) {
          core.insertComponent(html, false, checkCharCount, false);
        } else {
          let afterNode = null;
          if (util2.isFormatElement(html) || util2.isMedia(html)) {
            afterNode = util2.getFormatElement(core.getSelectionNode(), null);
          }
          core.insertNode(html, afterNode, checkCharCount);
        }
      }
      core.effectNode = null;
      core.focus();
      core.history.push(false);
    },
    /**
     * @description Change the contents of the suneditor
     * @param {String|undefined} contents Contents to Input
     */
    setContents: function(contents) {
      core.setContents(contents);
    },
    /**
     * @description Add contents to the suneditor
     * @param {String} contents Contents to Input
     */
    appendContents: function(contents) {
      const convertValue = core.convertContentsForEditor(contents);
      if (!core._variable.isCodeView) {
        const temp = util2.createElement("DIV");
        temp.innerHTML = convertValue;
        const wysiwyg = context.element.wysiwyg;
        const children = temp.children;
        for (let i = 0, len = children.length; i < len; i++) {
          if (children[i]) {
            wysiwyg.appendChild(children[i]);
          }
        }
      } else {
        core._setCodeView(core._getCodeView() + "\n" + core.convertHTMLForCodeView(convertValue, false));
      }
      core.history.push(false);
    },
    /**
     * @description Switch to or off "ReadOnly" mode.
     * @param {Boolean} value "readOnly" boolean value.
     */
    readOnly: function(value) {
      core.isReadOnly = value;
      util2.setDisabledButtons(!!value, core.resizingDisabledButtons);
      if (value) {
        core.controllersOff();
        if (core.submenuActiveButton && core.submenuActiveButton.disabled) core.submenuOff();
        if (core._moreLayerActiveButton && core._moreLayerActiveButton.disabled) core.moreLayerOff();
        if (core.containerActiveButton && core.containerActiveButton.disabled) core.containerOff();
        if (core.modalForm) core.plugins.dialog.close.call(core);
        context.element.code.setAttribute("readOnly", "true");
        util2.addClass(context.element.wysiwygFrame, "se-read-only");
      } else {
        context.element.code.removeAttribute("readOnly");
        util2.removeClass(context.element.wysiwygFrame, "se-read-only");
      }
      if (options.codeMirrorEditor) options.codeMirrorEditor.setOption("readOnly", !!value);
    },
    /**
     * @description Disable the suneditor
     */
    disable: function() {
      this.toolbar.disable();
      this.wysiwyg.disable();
    },
    /**
     * @description Provided for backward compatibility and will be removed in 3.0.0 version
     */
    disabled: function() {
      this.disable();
    },
    /**
     * @description Enable the suneditor
     */
    enable: function() {
      this.toolbar.enable();
      this.wysiwyg.enable();
    },
    /**
     * @description Provided for backward compatibility and will be removed in 3.0.0 version
     */
    enabled: function() {
      this.enable();
    },
    /**
     * @description Show the suneditor
     */
    show: function() {
      const topAreaStyle = context.element.topArea.style;
      if (topAreaStyle.display === "none") topAreaStyle.display = options.display;
    },
    /**
     * @description Hide the suneditor
     */
    hide: function() {
      context.element.topArea.style.display = "none";
    },
    /**
     * @description Destroy the suneditor
     */
    destroy: function() {
      core.submenuOff();
      core.containerOff();
      core.controllersOff();
      if (core.notice) core.notice.close.call(core);
      if (core.modalForm) core.plugins.dialog.close.call(core);
      core.history._destroy();
      event._removeEvent();
      util2.removeItem(context.element.toolbar);
      util2.removeItem(context.element.topArea);
      for (let k in core.functions) {
        if (util2.hasOwn(core, k)) delete core.functions[k];
      }
      for (let k in core) {
        if (util2.hasOwn(core, k)) delete core[k];
      }
      for (let k in event) {
        if (util2.hasOwn(event, k)) delete event[k];
      }
      for (let k in context) {
        if (util2.hasOwn(context, k)) delete context[k];
      }
      for (let k in pluginCallButtons) {
        if (util2.hasOwn(pluginCallButtons, k)) delete pluginCallButtons[k];
      }
      for (let k in this) {
        if (util2.hasOwn(this, k)) delete this[k];
      }
    },
    /**
     * @description Toolbar methods
     */
    toolbar: {
      /**
       * @description Disable the toolbar
       */
      disable: function() {
        core.submenuOff();
        core.moreLayerOff();
        core.containerOff();
        context.tool.cover.style.display = "block";
      },
      /**
       * @description Provided for backward compatibility and will be removed in 3.0.0 version
       */
      disabled: function() {
        this.disable();
      },
      /**
       * @description Enable the toolbar
       */
      enable: function() {
        context.tool.cover.style.display = "none";
      },
      /**
       * @description Provided for backward compatibility and will be removed in 3.0.0 version
       */
      enabled: function() {
        this.enable();
      },
      /**
       * @description Show the toolbar
       */
      show: function() {
        if (core._isInline) {
          event._showToolbarInline();
        } else {
          context.element.toolbar.style.display = "";
          context.element._stickyDummy.style.display = "";
        }
        event.onResize_window();
      },
      /**
       * @description Hide the toolbar
       */
      hide: function() {
        if (core._isInline) {
          event._hideToolbar();
        } else {
          context.element.toolbar.style.display = "none";
          context.element._stickyDummy.style.display = "none";
        }
        event.onResize_window();
      }
    },
    /**
     * @description Wysiwyg methods
     */
    wysiwyg: {
      /**
       * @description Disable the wysiwyg area
       */
      disable: function() {
        core.controllersOff();
        if (core.modalForm) core.plugins.dialog.close.call(core);
        context.element.wysiwyg.setAttribute("contenteditable", false);
        core.isDisabled = true;
        if (options.codeMirrorEditor) {
          options.codeMirrorEditor.setOption("readOnly", true);
        } else {
          context.element.code.setAttribute("disabled", "disabled");
        }
      },
      /**
       * @description Enable the wysiwyg area
       */
      enable: function() {
        context.element.wysiwyg.setAttribute("contenteditable", true);
        core.isDisabled = false;
        if (options.codeMirrorEditor) {
          options.codeMirrorEditor.setOption("readOnly", false);
        } else {
          context.element.code.removeAttribute("disabled");
        }
      }
    }
  };
  core.functions = functions;
  core.options = options;
  let contextEl = context.element;
  let originEl = contextEl.originElement;
  let topEl = contextEl.topArea;
  originEl.style.display = "none";
  topEl.style.display = "block";
  if (options.iframe) {
    contextEl.wysiwygFrame.addEventListener("load", function() {
      util2._setIframeDocument(this, options);
      core._editorInit(false, options.value);
      options.value = null;
    });
  }
  if (typeof originEl.nextElementSibling === "object") {
    originEl.parentNode.insertBefore(topEl, originEl.nextElementSibling);
  } else {
    originEl.parentNode.appendChild(topEl);
  }
  contextEl.editorArea.appendChild(contextEl.wysiwygFrame);
  contextEl = originEl = topEl = null;
  if (!options.iframe) {
    core._editorInit(false, options.value);
    options.value = null;
  }
  return functions;
}

// node_modules/suneditor/src/suneditor.js
var suneditor_default = {
  /**
   * @description Returns the create function with preset options.
   * If the options overlap, the options of the 'create' function take precedence.
   * @param {Json} options Initialization options
   * @returns {Object}
   */
  init: function(init_options) {
    return {
      create: (function(idOrElement, options) {
        return this.create(idOrElement, options, init_options);
      }).bind(this)
    };
  },
  /**
   * @description Create the suneditor
   * @param {String|Element} idOrElement textarea Id or textarea element
   * @param {JSON|Object} options user options
   * @returns {Object}
   */
  create: function(idOrElement, options, _init_options) {
    util_default._propertiesInit();
    if (typeof options !== "object") options = {};
    if (_init_options) {
      options = [_init_options, options].reduce(function(init, option) {
        for (let key in option) {
          if (!util_default.hasOwn(option, key)) continue;
          if (key === "plugins" && option[key] && init[key]) {
            let i = init[key], o = option[key];
            i = i.length ? i : Object.keys(i).map(function(name2) {
              return i[name2];
            });
            o = o.length ? o : Object.keys(o).map(function(name2) {
              return o[name2];
            });
            init[key] = o.filter(function(val) {
              return i.indexOf(val) === -1;
            }).concat(i);
          } else {
            init[key] = option[key];
          }
        }
        return init;
      }, {});
    }
    const element = typeof idOrElement === "string" ? document.getElementById(idOrElement) : idOrElement;
    if (!element) {
      if (typeof idOrElement === "string") {
        throw Error('[SUNEDITOR.create.fail] The element for that id was not found (ID:"' + idOrElement + '")');
      }
      throw Error("[SUNEDITOR.create.fail] suneditor requires textarea's element or id value");
    }
    const cons = constructor_default.init(element, options);
    if (cons.constructed._top.id && document.getElementById(cons.constructed._top.id)) {
      throw Error('[SUNEDITOR.create.fail] The ID of the suneditor you are trying to create already exists (ID:"' + cons.constructed._top.id + '")');
    }
    return core_default(context_default(element, cons.constructed, cons.options), cons.pluginCallButtons, cons.plugins, cons.options.lang, options, cons._responsiveButtons);
  }
};

// node_modules/suneditor/src/plugins/submenu/font.js
var font_default = {
  name: "font",
  display: "submenu",
  add: function(core, targetElement) {
    const context = core.context;
    context.font = {
      targetText: targetElement.querySelector(".txt"),
      targetTooltip: targetElement.parentNode.querySelector(".se-tooltip-text"),
      _fontList: null,
      currentFont: ""
    };
    let listDiv = this.setSubmenu(core);
    listDiv.querySelector(".se-list-inner").addEventListener("click", this.pickup.bind(core));
    context.font._fontList = listDiv.querySelectorAll("ul li button");
    core.initMenuTarget(this.name, targetElement, listDiv);
    listDiv = null;
  },
  setSubmenu: function(core) {
    const lang = core.lang;
    const listDiv = core.util.createElement("DIV");
    listDiv.className = "se-submenu se-list-layer se-list-font-family";
    let font, text, i, len;
    let fontList = core.options.font;
    let list = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + lang.toolbar.default + '" aria-label="' + lang.toolbar.default + '">(' + lang.toolbar.default + ")</button></li>";
    for (i = 0, len = fontList.length; i < len; i++) {
      font = fontList[i];
      text = font.split(",")[0];
      list += '<li><button type="button" class="se-btn-list" data-value="' + font + '" data-txt="' + text + '" title="' + text + '" aria-label="' + text + '" style="font-family:' + font + ';">' + text + "</button></li>";
    }
    list += "</ul></div>";
    listDiv.innerHTML = list;
    return listDiv;
  },
  /**
  * @Override core
  */
  active: function(element) {
    const target = this.context.font.targetText;
    const tooltip = this.context.font.targetTooltip;
    if (!element) {
      const font = this.hasFocus ? this.wwComputedStyle.fontFamily : this.lang.toolbar.font;
      this.util.changeTxt(target, font);
      this.util.changeTxt(tooltip, this.hasFocus ? this.lang.toolbar.font + (font ? " (" + font + ")" : "") : font);
    } else if (element.style && element.style.fontFamily.length > 0) {
      const selectFont = element.style.fontFamily.replace(/["']/g, "");
      this.util.changeTxt(target, selectFont);
      this.util.changeTxt(tooltip, this.lang.toolbar.font + " (" + selectFont + ")");
      return true;
    }
    return false;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const fontContext = this.context.font;
    const fontList = fontContext._fontList;
    const currentFont = fontContext.targetText.textContent;
    if (currentFont !== fontContext.currentFont) {
      for (let i = 0, len = fontList.length; i < len; i++) {
        if (currentFont === (fontList[i].getAttribute("data-value") || "").replace(/'|"/g, "")) {
          this.util.addClass(fontList[i], "active");
        } else {
          this.util.removeClass(fontList[i], "active");
        }
      }
      fontContext.currentFont = currentFont;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName)) return false;
    e.preventDefault();
    e.stopPropagation();
    let value = e.target.getAttribute("data-value");
    if (value) {
      const newNode = this.util.createElement("SPAN");
      if (/[\s\d\W]/.test(value) && !/^['"].*['"]$/.test(value)) {
        value = '"' + value + '"';
      }
      newNode.style.fontFamily = value;
      this.nodeChange(newNode, ["font-family"], null, null);
    } else {
      this.nodeChange(null, ["font-family"], ["span"], true);
    }
    this.submenuOff();
  }
};

// node_modules/suneditor/src/plugins/submenu/fontSize.js
var fontSize_default = {
  name: "fontSize",
  display: "submenu",
  add: function(core, targetElement) {
    const context = core.context;
    context.fontSize = {
      targetText: targetElement.querySelector(".txt"),
      _sizeList: null,
      currentSize: ""
    };
    let listDiv = this.setSubmenu(core);
    let listUl = listDiv.querySelector("ul");
    listUl.addEventListener("click", this.pickup.bind(core));
    context.fontSize._sizeList = listUl.querySelectorAll("li button");
    core.initMenuTarget(this.name, targetElement, listDiv);
    listDiv = null, listUl = null;
  },
  setSubmenu: function(core) {
    const option = core.options;
    const lang = core.lang;
    const listDiv = core.util.createElement("DIV");
    listDiv.className = "se-submenu se-list-layer se-list-font-size";
    const sizeList = !option.fontSize ? [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72] : option.fontSize;
    let list = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + lang.toolbar.default + '" aria-label="' + lang.toolbar.default + '">(' + lang.toolbar.default + ")</button></li>";
    for (let i = 0, unit = option.fontSizeUnit, len = sizeList.length, size; i < len; i++) {
      size = sizeList[i];
      list += '<li><button type="button" class="se-btn-list" data-value="' + size + unit + '" title="' + size + unit + '" aria-label="' + size + unit + '" style="font-size:' + size + unit + ';">' + size + "</button></li>";
    }
    list += "</ul></div>";
    listDiv.innerHTML = list;
    return listDiv;
  },
  /**
  * @Override core
  */
  active: function(element) {
    if (!element) {
      this.util.changeTxt(this.context.fontSize.targetText, this.hasFocus ? this._convertFontSize.call(this, this.options.fontSizeUnit, this.wwComputedStyle.fontSize) : this.lang.toolbar.fontSize);
    } else if (element.style && element.style.fontSize.length > 0) {
      this.util.changeTxt(this.context.fontSize.targetText, this._convertFontSize.call(this, this.options.fontSizeUnit, element.style.fontSize));
      return true;
    }
    return false;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const fontSizeContext = this.context.fontSize;
    const sizeList = fontSizeContext._sizeList;
    const currentSize = fontSizeContext.targetText.textContent;
    if (currentSize !== fontSizeContext.currentSize) {
      for (let i = 0, len = sizeList.length; i < len; i++) {
        if (currentSize === sizeList[i].getAttribute("data-value")) {
          this.util.addClass(sizeList[i], "active");
        } else {
          this.util.removeClass(sizeList[i], "active");
        }
      }
      fontSizeContext.currentSize = currentSize;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName)) return false;
    e.preventDefault();
    e.stopPropagation();
    const value = e.target.getAttribute("data-value");
    if (value) {
      const newNode = this.util.createElement("SPAN");
      newNode.style.fontSize = value;
      this.nodeChange(newNode, ["font-size"], null, null);
    } else {
      this.nodeChange(null, ["font-size"], ["span"], true);
    }
    this.submenuOff();
  }
};

// node_modules/suneditor/src/plugins/submenu/list.js
var list_default = {
  name: "list",
  display: "submenu",
  add: function(core, targetElement) {
    const context = core.context;
    context.list = {
      targetButton: targetElement,
      _list: null,
      currentList: "",
      icons: {
        bullets: core.icons.list_bullets,
        number: core.icons.list_number
      }
    };
    let listDiv = this.setSubmenu(core);
    let listUl = listDiv.querySelector("ul");
    listUl.addEventListener("click", this.pickup.bind(core));
    context.list._list = listUl.querySelectorAll("li button");
    core.initMenuTarget(this.name, targetElement, listDiv);
    listDiv = null, listUl = null;
  },
  setSubmenu: function(core) {
    const lang = core.lang;
    const listDiv = core.util.createElement("DIV");
    listDiv.className = "se-submenu se-list-layer";
    listDiv.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="OL" title="' + lang.toolbar.orderList + '" aria-label="' + lang.toolbar.orderList + '">' + core.icons.list_number + '</button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="UL" title="' + lang.toolbar.unorderList + '" aria-label="' + lang.toolbar.unorderList + '">' + core.icons.list_bullets + "</button></li></ul></div>";
    return listDiv;
  },
  /**
  * @Override core
  */
  active: function(element) {
    const button = this.context.list.targetButton;
    const icon = button.firstElementChild;
    const util2 = this.util;
    if (util2.isList(element)) {
      const nodeName = element.nodeName;
      button.setAttribute("data-focus", nodeName);
      util2.addClass(button, "active");
      if (/UL/i.test(nodeName)) {
        util2.changeElement(icon, this.context.list.icons.bullets);
      } else {
        util2.changeElement(icon, this.context.list.icons.number);
      }
      return true;
    } else {
      button.removeAttribute("data-focus");
      util2.changeElement(icon, this.context.list.icons.number);
      util2.removeClass(button, "active");
    }
    return false;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const listContext = this.context.list;
    const list = listContext._list;
    const currentList = listContext.targetButton.getAttribute("data-focus") || "";
    if (currentList !== listContext.currentList) {
      for (let i = 0, len = list.length; i < len; i++) {
        if (currentList === list[i].getAttribute("data-command")) {
          this.util.addClass(list[i], "active");
        } else {
          this.util.removeClass(list[i], "active");
        }
      }
      listContext.currentList = currentList;
    }
  },
  editList: function(command, selectedCells, detach) {
    let range = this.getRange();
    let selectedFormats = !selectedCells ? this.getSelectedElementsAndComponents(false) : selectedCells;
    if (selectedFormats.length === 0) {
      if (selectedCells) return;
      range = this.getRange_addLine(range, null);
      selectedFormats = this.getSelectedElementsAndComponents(false);
      if (selectedFormats.length === 0) return;
    }
    const util2 = this.util;
    util2.sortByDepth(selectedFormats, true);
    let firstSel = selectedFormats[0];
    let lastSel = selectedFormats[selectedFormats.length - 1];
    let topEl = (util2.isListCell(firstSel) || util2.isComponent(firstSel)) && !firstSel.previousElementSibling ? firstSel.parentNode.previousElementSibling : firstSel.previousElementSibling;
    let bottomEl = (util2.isListCell(lastSel) || util2.isComponent(lastSel)) && !lastSel.nextElementSibling ? lastSel.parentNode.nextElementSibling : lastSel.nextElementSibling;
    const isCollapsed = range.collapsed;
    const originRange = {
      sc: range.startContainer,
      so: range.startContainer === range.endContainer && util2.onlyZeroWidthSpace(range.startContainer) && range.startOffset === 0 && range.endOffset === 1 ? range.endOffset : range.startOffset,
      ec: range.endContainer,
      eo: range.endOffset
    };
    let afterRange = null;
    let isRemove = true;
    for (let i = 0, len = selectedFormats.length; i < len; i++) {
      if (!util2.isList(util2.getRangeFormatElement(selectedFormats[i], (function(current) {
        return this.getRangeFormatElement(current) && current !== selectedFormats[i];
      }).bind(util2)))) {
        isRemove = false;
        break;
      }
    }
    if (isRemove && (!topEl || (firstSel.tagName !== topEl.tagName || command !== topEl.tagName.toUpperCase())) && (!bottomEl || (lastSel.tagName !== bottomEl.tagName || command !== bottomEl.tagName.toUpperCase()))) {
      if (detach) {
        for (let i = 0, len = selectedFormats.length; i < len; i++) {
          for (let j = i - 1; j >= 0; j--) {
            if (selectedFormats[j].contains(selectedFormats[i])) {
              selectedFormats.splice(i, 1);
              i--;
              len--;
              break;
            }
          }
        }
      }
      const currentFormat = util2.getRangeFormatElement(firstSel);
      const cancel = currentFormat && currentFormat.tagName === command;
      let rangeArr, tempList;
      const passComponent = (function(current) {
        return !this.isComponent(current);
      }).bind(util2);
      if (!cancel) tempList = util2.createElement(command);
      for (let i = 0, len = selectedFormats.length, r, o; i < len; i++) {
        o = util2.getRangeFormatElement(selectedFormats[i], passComponent);
        if (!o || !util2.isList(o)) continue;
        if (!r) {
          r = o;
          rangeArr = { r, f: [util2.getParentElement(selectedFormats[i], "LI")] };
        } else {
          if (r !== o) {
            if (detach && util2.isListCell(o.parentNode)) {
              this.plugins.list._detachNested.call(this, rangeArr.f);
            } else {
              afterRange = this.detachRangeFormatElement(rangeArr.f[0].parentNode, rangeArr.f, tempList, false, true);
            }
            o = selectedFormats[i].parentNode;
            if (!cancel) tempList = util2.createElement(command);
            r = o;
            rangeArr = { r, f: [util2.getParentElement(selectedFormats[i], "LI")] };
          } else {
            rangeArr.f.push(util2.getParentElement(selectedFormats[i], "LI"));
          }
        }
        if (i === len - 1) {
          if (detach && util2.isListCell(o.parentNode)) {
            this.plugins.list._detachNested.call(this, rangeArr.f);
          } else {
            afterRange = this.detachRangeFormatElement(rangeArr.f[0].parentNode, rangeArr.f, tempList, false, true);
          }
        }
      }
    } else {
      const topElParent = topEl ? topEl.parentNode : topEl;
      const bottomElParent = bottomEl ? bottomEl.parentNode : bottomEl;
      topEl = topElParent && !util2.isWysiwygDiv(topElParent) && topElParent.nodeName === command ? topElParent : topEl;
      bottomEl = bottomElParent && !util2.isWysiwygDiv(bottomElParent) && bottomElParent.nodeName === command ? bottomElParent : bottomEl;
      const mergeTop = topEl && topEl.tagName === command;
      const mergeBottom = bottomEl && bottomEl.tagName === command;
      let list = mergeTop ? topEl : util2.createElement(command);
      let firstList = null;
      let lastList = null;
      let topNumber = null;
      let bottomNumber = null;
      const passComponent = (function(current) {
        return !this.isComponent(current) && !this.isList(current);
      }).bind(util2);
      for (let i = 0, len = selectedFormats.length, newCell, fTag, isCell, next, originParent, nextParent, parentTag, siblingTag, rangeTag; i < len; i++) {
        fTag = selectedFormats[i];
        if (fTag.childNodes.length === 0 && !util2._isIgnoreNodeChange(fTag)) {
          util2.removeItem(fTag);
          continue;
        }
        next = selectedFormats[i + 1];
        originParent = fTag.parentNode;
        nextParent = next ? next.parentNode : null;
        isCell = util2.isListCell(fTag);
        rangeTag = util2.isRangeFormatElement(originParent) ? originParent : null;
        parentTag = isCell && !util2.isWysiwygDiv(originParent) ? originParent.parentNode : originParent;
        siblingTag = isCell && !util2.isWysiwygDiv(originParent) ? !next || util2.isListCell(parentTag) ? originParent : originParent.nextSibling : fTag.nextSibling;
        newCell = util2.createElement("LI");
        util2.copyFormatAttributes(newCell, fTag);
        if (i === 0 && originRange.sc === fTag) {
          originRange.sc = newCell;
        }
        if (i === len - 1 && originRange.ec === fTag) {
          originRange.ec = newCell;
        }
        if (util2.isComponent(fTag)) {
          const isHR = /^HR$/i.test(fTag.nodeName);
          if (!isHR) newCell.innerHTML = "<br>";
          newCell.innerHTML += fTag.outerHTML;
          if (isHR) newCell.innerHTML += "<br>";
        } else {
          const fChildren = fTag.childNodes;
          while (fChildren[0]) {
            newCell.appendChild(fChildren[0]);
          }
        }
        list.appendChild(newCell);
        if (!next) lastList = list;
        if (!next || parentTag !== nextParent || util2.isRangeFormatElement(siblingTag)) {
          if (!firstList) firstList = list;
          if ((!mergeTop || !next || parentTag !== nextParent) && !(next && util2.isList(nextParent) && nextParent === originParent)) {
            if (list.parentNode !== parentTag) parentTag.insertBefore(list, siblingTag);
          }
        }
        util2.removeItem(fTag);
        if (mergeTop && topNumber === null) topNumber = list.children.length - 1;
        if (next && (util2.getRangeFormatElement(nextParent, passComponent) !== util2.getRangeFormatElement(originParent, passComponent) || util2.isList(nextParent) && util2.isList(originParent) && util2.getElementDepth(nextParent) !== util2.getElementDepth(originParent))) {
          list = util2.createElement(command);
        }
        if (rangeTag && rangeTag.children.length === 0) util2.removeItem(rangeTag);
      }
      if (topNumber) {
        firstList = firstList.children[topNumber];
      }
      if (mergeBottom) {
        bottomNumber = list.children.length - 1;
        list.innerHTML += bottomEl.innerHTML;
        lastList = list.children[bottomNumber];
        util2.removeItem(bottomEl);
      }
    }
    this.effectNode = null;
    return !isCollapsed ? originRange : afterRange || originRange;
  },
  _detachNested: function(cells) {
    const first = cells[0];
    const last = cells[cells.length - 1];
    const next = last.nextElementSibling;
    const originList = first.parentNode;
    const sibling = originList.parentNode.nextElementSibling;
    const parentNode = originList.parentNode.parentNode;
    for (let c = 0, cLen = cells.length; c < cLen; c++) {
      parentNode.insertBefore(cells[c], sibling);
    }
    if (next && originList.children.length > 0) {
      const newList = originList.cloneNode(false);
      const children = originList.childNodes;
      const index = this.util.getPositionIndex(next);
      while (children[index]) {
        newList.appendChild(children[index]);
      }
      last.appendChild(newList);
    }
    if (originList.children.length === 0) this.util.removeItem(originList);
    this.util.mergeSameTags(parentNode);
    const edge = this.util.getEdgeChildNodes(first, last);
    return {
      cc: first.parentNode,
      sc: edge.sc,
      ec: edge.ec
    };
  },
  editInsideList: function(remove, selectedCells) {
    selectedCells = !selectedCells ? this.getSelectedElements().filter((function(el) {
      return this.isListCell(el);
    }).bind(this.util)) : selectedCells;
    const cellsLen = selectedCells.length;
    if (cellsLen === 0 || !remove && (!this.util.isListCell(selectedCells[0].previousElementSibling) && !this.util.isListCell(selectedCells[cellsLen - 1].nextElementSibling))) {
      return {
        sc: selectedCells[0],
        so: 0,
        ec: selectedCells[cellsLen - 1],
        eo: 1
      };
    }
    let originList = selectedCells[0].parentNode;
    let lastCell = selectedCells[cellsLen - 1];
    let range = null;
    if (remove) {
      if (originList !== lastCell.parentNode && this.util.isList(lastCell.parentNode.parentNode) && lastCell.nextElementSibling) {
        lastCell = lastCell.nextElementSibling;
        while (lastCell) {
          selectedCells.push(lastCell);
          lastCell = lastCell.nextElementSibling;
        }
      }
      range = this.plugins.list.editList.call(this, originList.nodeName.toUpperCase(), selectedCells, true);
    } else {
      let innerList = this.util.createElement(originList.nodeName);
      let prev = selectedCells[0].previousElementSibling;
      let next = lastCell.nextElementSibling;
      const nodePath = { s: null, e: null, sl: originList, el: originList };
      for (let i = 0, len = cellsLen, c; i < len; i++) {
        c = selectedCells[i];
        if (c.parentNode !== originList) {
          this.plugins.list._insiedList.call(this, originList, innerList, prev, next, nodePath);
          originList = c.parentNode;
          innerList = this.util.createElement(originList.nodeName);
        }
        prev = c.previousElementSibling;
        next = c.nextElementSibling;
        innerList.appendChild(c);
      }
      this.plugins.list._insiedList.call(this, originList, innerList, prev, next, nodePath);
      const sc = this.util.getNodeFromPath(nodePath.s, nodePath.sl);
      const ec = this.util.getNodeFromPath(nodePath.e, nodePath.el);
      range = {
        sc,
        so: 0,
        ec,
        eo: ec.textContent.length
      };
    }
    return range;
  },
  _insiedList: function(originList, innerList, prev, next, nodePath) {
    let insertPrev = false;
    if (prev && innerList.tagName === prev.tagName) {
      const children = innerList.children;
      while (children[0]) {
        prev.appendChild(children[0]);
      }
      innerList = prev;
      insertPrev = true;
    }
    if (next && innerList.tagName === next.tagName) {
      const children = next.children;
      while (children[0]) {
        innerList.appendChild(children[0]);
      }
      const temp = next.nextElementSibling;
      next.parentNode.removeChild(next);
      next = temp;
    }
    if (!insertPrev) {
      if (this.util.isListCell(prev)) {
        originList = prev;
        next = null;
      }
      originList.insertBefore(innerList, next);
      if (!nodePath.s) {
        nodePath.s = this.util.getNodePath(innerList.firstElementChild.firstChild, originList, null);
        nodePath.sl = originList;
      }
      const slPath = originList.contains(nodePath.sl) ? this.util.getNodePath(nodePath.sl, originList) : null;
      nodePath.e = this.util.getNodePath(innerList.lastElementChild.firstChild, originList, null);
      nodePath.el = originList;
      this.util.mergeSameTags(originList, [nodePath.s, nodePath.e, slPath], false);
      this.util.mergeNestedTags(originList);
      if (slPath) nodePath.sl = this.util.getNodeFromPath(slPath, originList);
    }
    return innerList;
  },
  pickup: function(e) {
    e.preventDefault();
    e.stopPropagation();
    let target = e.target;
    let command = "";
    while (!command && !/^UL$/i.test(target.tagName)) {
      command = target.getAttribute("data-command");
      target = target.parentNode;
    }
    if (!command) return;
    const range = this.plugins.list.editList.call(this, command, null, false);
    if (range) this.setRange(range.sc, range.so, range.ec, range.eo);
    this.submenuOff();
    this.history.push(false);
  }
};

// node_modules/suneditor/src/plugins/submenu/formatBlock.js
var formatBlock_default = {
  name: "formatBlock",
  display: "submenu",
  add: function(core, targetElement) {
    const context = core.context;
    context.formatBlock = {
      targetText: targetElement.querySelector(".txt"),
      targetTooltip: targetElement.parentNode.querySelector(".se-tooltip-text"),
      _formatList: null,
      currentFormat: ""
    };
    let listDiv = this.setSubmenu(core);
    listDiv.querySelector("ul").addEventListener("click", this.pickUp.bind(core));
    context.formatBlock._formatList = listDiv.querySelectorAll("li button");
    core.initMenuTarget(this.name, targetElement, listDiv);
    listDiv = null;
  },
  setSubmenu: function(core) {
    const option = core.options;
    const lang_toolbar = core.lang.toolbar;
    const listDiv = core.util.createElement("DIV");
    listDiv.className = "se-submenu se-list-layer se-list-format";
    const defaultFormats = ["p", "div", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"];
    const formatList = !option.formats || option.formats.length === 0 ? defaultFormats : option.formats;
    let list = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let i = 0, len = formatList.length, format, tagName, command, name2, h, attrs, className; i < len; i++) {
      format = formatList[i];
      if (typeof format === "string" && defaultFormats.indexOf(format) > -1) {
        tagName = format.toLowerCase();
        command = tagName === "blockquote" ? "range" : tagName === "pre" ? "free" : "replace";
        h = /^h/.test(tagName) ? tagName.match(/\d+/)[0] : "";
        name2 = lang_toolbar["tag_" + (h ? "h" : tagName)] + h;
        className = "";
        attrs = "";
      } else {
        tagName = format.tag.toLowerCase();
        command = format.command;
        name2 = format.name || tagName;
        className = format.class;
        attrs = className ? ' class="' + className + '"' : "";
      }
      list += '<li><button type="button" class="se-btn-list" data-command="' + command + '" data-value="' + tagName + '" data-class="' + className + '" title="' + name2 + '" aria-label="' + name2 + '"><' + tagName + attrs + ">" + name2 + "</" + tagName + "></button></li>";
    }
    list += "</ul></div>";
    listDiv.innerHTML = list;
    return listDiv;
  },
  /**
  * @Override core
  */
  active: function(element) {
    let formatTitle = this.lang.toolbar.formats;
    const target = this.context.formatBlock.targetText;
    if (!element) {
      this.util.changeTxt(target, formatTitle);
    } else if (this.util.isFormatElement(element)) {
      const formatContext = this.context.formatBlock;
      const formatList = formatContext._formatList;
      const nodeName = element.nodeName.toLowerCase();
      const className = (element.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim();
      for (let i = 0, len = formatList.length, f; i < len; i++) {
        f = formatList[i];
        if (nodeName === f.getAttribute("data-value") && className === f.getAttribute("data-class")) {
          formatTitle = f.title;
          break;
        }
      }
      this.util.changeTxt(target, formatTitle);
      target.setAttribute("data-value", nodeName);
      target.setAttribute("data-class", className);
      return true;
    }
    return false;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const formatContext = this.context.formatBlock;
    const formatList = formatContext._formatList;
    const target = formatContext.targetText;
    const currentFormat = (target.getAttribute("data-value") || "") + (target.getAttribute("data-class") || "");
    if (currentFormat !== formatContext.currentFormat) {
      for (let i = 0, len = formatList.length, f; i < len; i++) {
        f = formatList[i];
        if (currentFormat === f.getAttribute("data-value") + f.getAttribute("data-class")) {
          this.util.addClass(f, "active");
        } else {
          this.util.removeClass(f, "active");
        }
      }
      formatContext.currentFormat = currentFormat;
    }
  },
  pickUp: function(e) {
    e.preventDefault();
    e.stopPropagation();
    let target = e.target;
    let command = null, value = null, tag = null, className = "";
    while (!command && !/UL/i.test(target.tagName)) {
      command = target.getAttribute("data-command");
      value = target.getAttribute("data-value");
      className = target.getAttribute("data-class");
      if (command) {
        tag = target.firstChild;
        break;
      }
      target = target.parentNode;
    }
    if (!command) return;
    if (command === "range") {
      const rangeElement = tag.cloneNode(false);
      this.applyRangeFormatElement(rangeElement);
    } else {
      let range = this.getRange();
      let selectedFormsts = this.getSelectedElementsAndComponents(false);
      if (selectedFormsts.length === 0) {
        range = this.getRange_addLine(range, null);
        selectedFormsts = this.getSelectedElementsAndComponents(false);
        if (selectedFormsts.length === 0) return;
      }
      const startOffset = range.startOffset;
      const endOffset = range.endOffset;
      const util2 = this.util;
      let first = selectedFormsts[0];
      let last = selectedFormsts[selectedFormsts.length - 1];
      const firstPath = util2.getNodePath(range.startContainer, first, null, null);
      const lastPath = util2.getNodePath(range.endContainer, last, null, null);
      const rlist = this.detachList(selectedFormsts, false);
      if (rlist.sc) first = rlist.sc;
      if (rlist.ec) last = rlist.ec;
      this.setRange(util2.getNodeFromPath(firstPath, first), startOffset, util2.getNodeFromPath(lastPath, last), endOffset);
      const modifiedFormsts = this.getSelectedElementsAndComponents(false);
      if (command === "free") {
        const len = modifiedFormsts.length - 1;
        let parentNode = modifiedFormsts[len].parentNode;
        let freeElement = tag.cloneNode(false);
        const focusElement = freeElement;
        for (let i = len, f, html, before, next, inner, isComp, first2 = true; i >= 0; i--) {
          f = modifiedFormsts[i];
          if (f === (!modifiedFormsts[i + 1] ? null : modifiedFormsts[i + 1].parentNode)) continue;
          isComp = util2.isComponent(f);
          html = isComp ? "" : f.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " ");
          before = util2.getParentElement(f, function(current) {
            return current.parentNode === parentNode;
          });
          if (parentNode !== f.parentNode || isComp) {
            if (util2.isFormatElement(parentNode)) {
              parentNode.parentNode.insertBefore(freeElement, parentNode.nextSibling);
              parentNode = parentNode.parentNode;
            } else {
              parentNode.insertBefore(freeElement, before ? before.nextSibling : null);
              parentNode = f.parentNode;
            }
            next = freeElement.nextSibling;
            if (next && freeElement.nodeName === next.nodeName && util2.isSameAttributes(freeElement, next)) {
              freeElement.innerHTML += "<BR>" + next.innerHTML;
              util2.removeItem(next);
            }
            freeElement = tag.cloneNode(false);
            first2 = true;
          }
          inner = freeElement.innerHTML;
          freeElement.innerHTML = (first2 || !html || !inner || /<br>$/i.test(html) ? html : html + "<BR>") + inner;
          if (i === 0) {
            parentNode.insertBefore(freeElement, f);
            next = f.nextSibling;
            if (next && freeElement.nodeName === next.nodeName && util2.isSameAttributes(freeElement, next)) {
              freeElement.innerHTML += "<BR>" + next.innerHTML;
              util2.removeItem(next);
            }
            const prev = freeElement.previousSibling;
            if (prev && freeElement.nodeName === prev.nodeName && util2.isSameAttributes(freeElement, prev)) {
              prev.innerHTML += "<BR>" + freeElement.innerHTML;
              util2.removeItem(freeElement);
            }
          }
          if (!isComp) util2.removeItem(f);
          if (!!html) first2 = false;
        }
        this.setRange(focusElement, 0, focusElement, 0);
      } else {
        for (let i = 0, len = modifiedFormsts.length, node, newFormat; i < len; i++) {
          node = modifiedFormsts[i];
          if ((node.nodeName.toLowerCase() !== value.toLowerCase() || (node.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() !== className) && !util2.isComponent(node)) {
            newFormat = tag.cloneNode(false);
            util2.copyFormatAttributes(newFormat, node);
            newFormat.innerHTML = node.innerHTML;
            node.parentNode.replaceChild(newFormat, node);
          }
          if (i === 0) first = newFormat || node;
          if (i === len - 1) last = newFormat || node;
          newFormat = null;
        }
        this.setRange(util2.getNodeFromPath(firstPath, first), startOffset, util2.getNodeFromPath(lastPath, last), endOffset);
      }
      this.history.push(false);
    }
    this.submenuOff();
  }
};

// node_modules/suneditor/src/plugins/dialog/link.js
var import_dialog = __toESM(require_dialog());

// node_modules/suneditor/src/plugins/modules/_selectMenu.js
var selectMenu_default = {
  name: "selectMenu",
  add: function(core) {
    core.context.selectMenu = {
      caller: {},
      callerContext: null
    };
  },
  setForm: function() {
    return '<div class="se-select-list"></div>';
  },
  createList: function(listContext, items, html) {
    listContext.form.innerHTML = "<ul>" + html + "</ul>";
    listContext.items = items;
    listContext.menus = listContext.form.querySelectorAll("li");
  },
  initEvent: function(pluginName, forms) {
    const form = forms.querySelector(".se-select-list");
    const context = this.context.selectMenu.caller[pluginName] = {
      form,
      items: [],
      menus: [],
      index: -1,
      item: null,
      clickMethod: null,
      callerName: pluginName
    };
    form.addEventListener("mousedown", this.plugins.selectMenu.onMousedown_list);
    form.addEventListener("mousemove", this.plugins.selectMenu.onMouseMove_list.bind(this, context));
    form.addEventListener("click", this.plugins.selectMenu.onClick_list.bind(this, context));
  },
  onMousedown_list: function(e) {
    e.preventDefault();
    e.stopPropagation();
  },
  onMouseMove_list: function(context, e) {
    this.util.addClass(context.form, "__se_select-menu-mouse-move");
    const index = e.target.getAttribute("data-index");
    if (!index) return;
    context.index = index * 1;
  },
  onClick_list: function(context, e) {
    const index = e.target.getAttribute("data-index");
    if (!index) return;
    context.clickMethod.call(this, context.items[index]);
  },
  moveItem: function(listContext, num) {
    this.util.removeClass(listContext.form, "__se_select-menu-mouse-move");
    num = listContext.index + num;
    const menus = listContext.menus;
    const len = menus.length;
    const selectIndex = listContext.index = num >= len ? 0 : num < 0 ? len - 1 : num;
    for (let i = 0; i < len; i++) {
      if (i === selectIndex) {
        this.util.addClass(menus[i], "active");
      } else {
        this.util.removeClass(menus[i], "active");
      }
    }
    listContext.item = listContext.items[selectIndex];
  },
  getItem: function(listContext, index) {
    index = !index || index < 0 ? listContext.index : index;
    return listContext.items[index];
  },
  on: function(callerName, clickMethod) {
    const listContext = this.context.selectMenu.caller[callerName];
    this.context.selectMenu.callerContext = listContext;
    listContext.clickMethod = clickMethod;
    listContext.callerName = callerName;
  },
  open: function(listContext, positionHandler) {
    const form = listContext.form;
    form.style.visibility = "hidden";
    form.style.display = "block";
    positionHandler(form);
    form.style.visibility = "";
  },
  close: function(listContext) {
    listContext.form.style.display = "none";
    listContext.items = [];
    listContext.menus = [];
    listContext.index = -1;
    listContext.item = null;
  },
  init: function(listContext) {
    if (!listContext) return;
    listContext.items = [];
    listContext.menus = [];
    listContext.index = -1;
    listContext.item = null;
    listContext.callerName = "";
    this.context.selectMenu.callerContext = null;
  }
};

// node_modules/suneditor/src/plugins/modules/_anchor.js
var anchor_default = {
  name: "anchor",
  add: function(core) {
    core.addModule([selectMenu_default]);
    core.context.anchor = {
      caller: {},
      forms: this.setDialogForm(core),
      host: (core._w.location.origin + core._w.location.pathname).replace(/\/$/, ""),
      callerContext: null
    };
  },
  /** dialog */
  setDialogForm: function(core) {
    const lang = core.lang;
    const relList = core.options.linkRel;
    const defaultRel = (core.options.linkRelDefault.default || "").split(" ");
    const icons = core.icons;
    const forms = core.util.createElement("DIV");
    let html = '<div class="se-dialog-body"><div class="se-dialog-form"><label>' + lang.dialogBox.linkBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url" type="text" placeholder="' + (core.options.protocol || "") + '" /><button type="button" class="se-btn se-dialog-files-edge-button _se_bookmark_button" title="' + lang.dialogBox.linkBox.bookmark + '" aria-label="' + lang.dialogBox.linkBox.bookmark + '">' + icons.bookmark + "</button>" + core.plugins.selectMenu.setForm() + '</div><div class="se-anchor-preview-form"><span class="se-svg se-anchor-preview-icon _se_anchor_bookmark_icon">' + icons.bookmark + '</span><span class="se-svg se-anchor-preview-icon _se_anchor_download_icon">' + icons.download + '</span><pre class="se-link-preview"></pre></div></div><div class="se-dialog-form"><label>' + lang.dialogBox.linkBox.text + '</label><input class="se-input-form _se_anchor_text" type="text" /></div><div class="se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_check" />&nbsp;' + lang.dialogBox.linkBox.newWindowCheck + '</label><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_download" />&nbsp;' + lang.dialogBox.linkBox.downloadLinkCheck + "</label>";
    if (relList.length > 0) {
      html += '<div class="se-anchor-rel"><button type="button" class="se-btn se-btn-select se-anchor-rel-btn">&lt;rel&gt;</button><div class="se-anchor-rel-wrapper"><pre class="se-link-preview se-anchor-rel-preview"></pre></div><div class="se-list-layer"><div class="se-list-inner"><ul class="se-list-basic se-list-checked">';
      for (let i = 0, len = relList.length, rel; i < len; i++) {
        rel = relList[i];
        html += '<li><button type="button" class="se-btn-list' + (defaultRel.indexOf(rel) > -1 ? " se-checked" : "") + '" data-command="' + rel + '" title="' + rel + '" aria-label="' + rel + '"><span class="se-svg">' + icons.checked + "</span>" + rel + "</button></li>";
      }
      html += "</ul></div></div></div>";
    }
    html += "</div></div>";
    forms.innerHTML = html;
    return forms;
  },
  initEvent: function(pluginName, forms) {
    const anchorPlugin = this.plugins.anchor;
    const context = this.context.anchor.caller[pluginName] = {
      modal: forms,
      urlInput: null,
      linkDefaultRel: this.options.linkRelDefault,
      defaultRel: this.options.linkRelDefault.default || "",
      currentRel: [],
      linkAnchor: null,
      linkValue: "",
      _change: false,
      callerName: pluginName
    };
    if (typeof context.linkDefaultRel.default === "string") context.linkDefaultRel.default = context.linkDefaultRel.default.trim();
    if (typeof context.linkDefaultRel.check_new_window === "string") context.linkDefaultRel.check_new_window = context.linkDefaultRel.check_new_window.trim();
    if (typeof context.linkDefaultRel.check_bookmark === "string") context.linkDefaultRel.check_bookmark = context.linkDefaultRel.check_bookmark.trim();
    context.urlInput = forms.querySelector(".se-input-url");
    context.anchorText = forms.querySelector("._se_anchor_text");
    context.newWindowCheck = forms.querySelector("._se_anchor_check");
    context.downloadCheck = forms.querySelector("._se_anchor_download");
    context.download = forms.querySelector("._se_anchor_download_icon");
    context.preview = forms.querySelector(".se-link-preview");
    context.bookmark = forms.querySelector("._se_anchor_bookmark_icon");
    context.bookmarkButton = forms.querySelector("._se_bookmark_button");
    this.plugins.selectMenu.initEvent.call(this, pluginName, forms);
    const listContext = this.context.selectMenu.caller[pluginName];
    if (this.options.linkRel.length > 0) {
      context.relButton = forms.querySelector(".se-anchor-rel-btn");
      context.relList = forms.querySelector(".se-list-layer");
      context.relPreview = forms.querySelector(".se-anchor-rel-preview");
      context.relButton.addEventListener("click", anchorPlugin.onClick_relButton.bind(this, context));
      context.relList.addEventListener("click", anchorPlugin.onClick_relList.bind(this, context));
    }
    context.newWindowCheck.addEventListener("change", anchorPlugin.onChange_newWindowCheck.bind(this, context));
    context.downloadCheck.addEventListener("change", anchorPlugin.onChange_downloadCheck.bind(this, context));
    context.anchorText.addEventListener("input", anchorPlugin.onChangeAnchorText.bind(this, context));
    context.urlInput.addEventListener("input", anchorPlugin.onChangeUrlInput.bind(this, context));
    context.urlInput.addEventListener("keydown", anchorPlugin.onKeyDownUrlInput.bind(this, listContext));
    context.urlInput.addEventListener("focus", anchorPlugin.onFocusUrlInput.bind(this, context, listContext));
    context.urlInput.addEventListener("blur", anchorPlugin.onBlurUrlInput.bind(this, listContext));
    context.bookmarkButton.addEventListener("click", anchorPlugin.onClick_bookmarkButton.bind(this, context));
  },
  on: function(contextAnchor, update) {
    const anchorPlugin = this.plugins.anchor;
    if (!update) {
      anchorPlugin.init.call(this, contextAnchor);
      contextAnchor.anchorText.value = this.getSelection().toString().trim();
      contextAnchor.newWindowCheck.checked = this.options.linkTargetNewWindow;
    } else if (contextAnchor.linkAnchor) {
      this.context.dialog.updateModal = true;
      const href = contextAnchor.linkAnchor.getAttribute("href");
      contextAnchor.linkValue = contextAnchor.preview.textContent = contextAnchor.urlInput.value = anchorPlugin.selfPathBookmark.call(this, href) ? href.substr(href.lastIndexOf("#")) : href;
      contextAnchor.anchorText.value = contextAnchor.linkAnchor.textContent;
      contextAnchor.newWindowCheck.checked = /_blank/i.test(contextAnchor.linkAnchor.target) ? true : false;
      contextAnchor.downloadCheck.checked = contextAnchor.linkAnchor.download;
    }
    this.context.anchor.callerContext = contextAnchor;
    anchorPlugin.setRel.call(this, contextAnchor, update && contextAnchor.linkAnchor ? contextAnchor.linkAnchor.rel : contextAnchor.defaultRel);
    anchorPlugin.setLinkPreview.call(this, contextAnchor, contextAnchor.linkValue);
    this.plugins.selectMenu.on.call(this, contextAnchor.callerName, this.plugins.anchor.setHeaderBookmark);
  },
  selfPathBookmark: function(path) {
    const href = this._w.location.href.replace(/\/$/, "");
    return path.indexOf("#") === 0 || path.indexOf(href) === 0 && path.indexOf("#") === (href.indexOf("#") === -1 ? href.length : href.substr(0, href.indexOf("#")).length);
  },
  _closeRelMenu: null,
  toggleRelList: function(contextAnchor, show) {
    if (!show) {
      if (this.plugins.anchor._closeRelMenu) this.plugins.anchor._closeRelMenu();
    } else {
      const target = contextAnchor.relButton;
      const relList = contextAnchor.relList;
      this.util.addClass(target, "active");
      relList.style.visibility = "hidden";
      relList.style.display = "block";
      if (!this.options.rtl) relList.style.left = target.offsetLeft + target.offsetWidth + 1 + "px";
      else relList.style.left = target.offsetLeft - relList.offsetWidth - 1 + "px";
      relList.style.top = target.offsetTop + target.offsetHeight / 2 - relList.offsetHeight / 2 + "px";
      relList.style.visibility = "";
      this.plugins.anchor._closeRelMenu = (function(context, target2, e) {
        if (e && (context.relButton.contains(e.target) || context.relList.contains(e.target))) return;
        this.util.removeClass(target2, "active");
        context.relList.style.display = "none";
        this.modalForm.removeEventListener("click", this.plugins.anchor._closeRelMenu);
        this.plugins.anchor._closeRelMenu = null;
      }).bind(this, contextAnchor, target);
      this.modalForm.addEventListener("click", this.plugins.anchor._closeRelMenu);
    }
  },
  onClick_relButton: function(contextAnchor, e) {
    this.plugins.anchor.toggleRelList.call(this, contextAnchor, !this.util.hasClass(e.target, "active"));
  },
  onClick_relList: function(contextAnchor, e) {
    const target = e.target;
    const cmd = target.getAttribute("data-command");
    if (!cmd) return;
    const current = contextAnchor.currentRel;
    const checked = this.util.toggleClass(target, "se-checked");
    const index = current.indexOf(cmd);
    if (checked) {
      if (index === -1) current.push(cmd);
    } else {
      if (index > -1) current.splice(index, 1);
    }
    contextAnchor.relPreview.title = contextAnchor.relPreview.textContent = current.join(" ");
  },
  setRel: function(contextAnchor, relAttr) {
    const relListEl = contextAnchor.relList;
    const rels = contextAnchor.currentRel = !relAttr ? [] : relAttr.split(" ");
    if (!relListEl) return;
    const checkedRel = relListEl.querySelectorAll("button");
    for (let i = 0, len = checkedRel.length, cmd; i < len; i++) {
      cmd = checkedRel[i].getAttribute("data-command");
      if (rels.indexOf(cmd) > -1) {
        this.util.addClass(checkedRel[i], "se-checked");
      } else {
        this.util.removeClass(checkedRel[i], "se-checked");
      }
    }
    contextAnchor.relPreview.title = contextAnchor.relPreview.textContent = rels.join(" ");
  },
  createHeaderList: function(contextAnchor, contextList, urlValue) {
    const headers = this.util.getListChildren(this.context.element.wysiwyg, function(current) {
      return /h[1-6]/i.test(current.nodeName);
    });
    if (headers.length === 0) return;
    const valueRegExp = new this._w.RegExp("^" + urlValue.replace(/^#/, ""), "i");
    const list = [];
    let html = "";
    for (let i = 0, len = headers.length, h; i < len; i++) {
      h = headers[i];
      if (!valueRegExp.test(h.textContent)) continue;
      list.push(h);
      html += '<li class="se-select-item" data-index="' + i + '">' + h.textContent + "</li>";
    }
    if (list.length === 0) {
      this.plugins.selectMenu.close.call(this, contextList);
    } else {
      this.plugins.selectMenu.createList(contextList, list, html);
      this.plugins.selectMenu.open.call(this, contextList, this.plugins.anchor._setMenuListPosition.bind(this, contextAnchor));
    }
  },
  _setMenuListPosition: function(contextAnchor, list) {
    list.style.top = contextAnchor.urlInput.offsetHeight + 1 + "px";
  },
  onKeyDownUrlInput: function(contextList, e) {
    const keyCode = e.keyCode;
    switch (keyCode) {
      case 38:
        e.preventDefault();
        e.stopPropagation();
        this.plugins.selectMenu.moveItem.call(this, contextList, -1);
        break;
      case 40:
        e.preventDefault();
        e.stopPropagation();
        this.plugins.selectMenu.moveItem.call(this, contextList, 1);
        break;
      case 13:
        if (contextList.index > -1) {
          e.preventDefault();
          e.stopPropagation();
          this.plugins.anchor.setHeaderBookmark.call(this, this.plugins.selectMenu.getItem(contextList, null));
        }
        break;
    }
  },
  setHeaderBookmark: function(header) {
    const contextAnchor = this.context.anchor.callerContext;
    const id = header.id || "h_" + this._w.Math.random().toString().replace(/.+\./, "");
    header.id = id;
    contextAnchor.urlInput.value = "#" + id;
    if (!contextAnchor.anchorText.value.trim() || !contextAnchor._change) {
      contextAnchor.anchorText.value = header.textContent;
    }
    this.plugins.anchor.setLinkPreview.call(this, contextAnchor, contextAnchor.urlInput.value);
    this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext);
    this.context.anchor.callerContext.urlInput.focus();
  },
  onChangeAnchorText: function(contextAnchor, e) {
    contextAnchor._change = !!e.target.value.trim();
  },
  onChangeUrlInput: function(contextAnchor, e) {
    const value = e.target.value.trim();
    this.plugins.anchor.setLinkPreview.call(this, contextAnchor, value);
    if (this.plugins.anchor.selfPathBookmark.call(this, value)) this.plugins.anchor.createHeaderList.call(this, contextAnchor, this.context.selectMenu.callerContext, value);
    else this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext);
  },
  onFocusUrlInput: function(contextAnchor, contextLink) {
    const value = contextAnchor.urlInput.value;
    if (this.plugins.anchor.selfPathBookmark.call(this, value)) this.plugins.anchor.createHeaderList.call(this, contextAnchor, contextLink, value);
  },
  onBlurUrlInput: function(contextList) {
    this.plugins.selectMenu.close.call(this, contextList);
  },
  setLinkPreview: function(context, value) {
    const preview = context.preview;
    const protocol = this.options.linkProtocol;
    const noPrefix = this.options.linkNoPrefix;
    const reservedProtocol = /^(mailto\:|tel\:|sms\:|https*\:\/\/|#)/.test(value) || value.indexOf(protocol) === 0;
    const sameProtocol = !protocol ? false : this._w.RegExp("^" + this.util.escapeStringRegexp(value.substr(0, protocol.length))).test(protocol);
    value = context.linkValue = preview.textContent = !value ? "" : noPrefix ? value : protocol && !reservedProtocol && !sameProtocol ? protocol + value : reservedProtocol ? value : /^www\./.test(value) ? "http://" + value : this.context.anchor.host + (/^\//.test(value) ? "" : "/") + value;
    if (this.plugins.anchor.selfPathBookmark.call(this, value)) {
      context.bookmark.style.display = "block";
      this.util.addClass(context.bookmarkButton, "active");
    } else {
      context.bookmark.style.display = "none";
      this.util.removeClass(context.bookmarkButton, "active");
    }
    if (!this.plugins.anchor.selfPathBookmark.call(this, value) && context.downloadCheck.checked) {
      context.download.style.display = "block";
    } else {
      context.download.style.display = "none";
    }
  },
  setCtx: function(anchor, contextAnchor) {
    if (!anchor) return;
    contextAnchor.linkAnchor = anchor;
    contextAnchor.linkValue = anchor.href;
    contextAnchor.currentRel = anchor.rel.split(" ");
  },
  updateAnchor: function(anchor, url, displayText, contextAnchor, notText) {
    if (!this.plugins.anchor.selfPathBookmark.call(this, url) && contextAnchor.downloadCheck.checked) {
      anchor.setAttribute("download", displayText || url);
    } else {
      anchor.removeAttribute("download");
    }
    if (contextAnchor.newWindowCheck.checked) anchor.target = "_blank";
    else anchor.removeAttribute("target");
    const rel = contextAnchor.currentRel.join(" ");
    if (!rel) anchor.removeAttribute("rel");
    else anchor.rel = rel;
    anchor.href = url;
    if (notText) {
      if (anchor.children.length === 0) anchor.textContent = "";
    } else {
      anchor.textContent = displayText;
    }
  },
  createAnchor: function(contextAnchor, notText) {
    if (contextAnchor.linkValue.length === 0) return null;
    const url = contextAnchor.linkValue;
    const anchor = contextAnchor.anchorText;
    const displayText = anchor.value.length === 0 ? url : anchor.value;
    const oA = contextAnchor.linkAnchor || this.util.createElement("A");
    this.plugins.anchor.updateAnchor.call(this, oA, url, displayText, contextAnchor, notText);
    contextAnchor.linkValue = contextAnchor.preview.textContent = contextAnchor.urlInput.value = contextAnchor.anchorText.value = "";
    return oA;
  },
  onClick_bookmarkButton: function(contextAnchor) {
    let url = contextAnchor.urlInput.value;
    if (this.plugins.anchor.selfPathBookmark.call(this, url)) {
      url = url.substr(1);
      contextAnchor.bookmark.style.display = "none";
      this.util.removeClass(contextAnchor.bookmarkButton, "active");
      this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext);
    } else {
      url = "#" + url;
      contextAnchor.bookmark.style.display = "block";
      this.util.addClass(contextAnchor.bookmarkButton, "active");
      contextAnchor.downloadCheck.checked = false;
      contextAnchor.download.style.display = "none";
      this.plugins.anchor.createHeaderList.call(this, contextAnchor, this.context.selectMenu.callerContext, url);
    }
    contextAnchor.urlInput.value = url;
    this.plugins.anchor.setLinkPreview.call(this, contextAnchor, url);
    contextAnchor.urlInput.focus();
  },
  onChange_newWindowCheck: function(contextAnchor, e) {
    if (typeof contextAnchor.linkDefaultRel.check_new_window !== "string") return;
    if (e.target.checked) {
      this.plugins.anchor.setRel.call(this, contextAnchor, this.plugins.anchor._relMerge.call(this, contextAnchor, contextAnchor.linkDefaultRel.check_new_window));
    } else {
      this.plugins.anchor.setRel.call(this, contextAnchor, this.plugins.anchor._relDelete.call(this, contextAnchor, contextAnchor.linkDefaultRel.check_new_window));
    }
  },
  onChange_downloadCheck: function(contextAnchor, e) {
    if (e.target.checked) {
      contextAnchor.download.style.display = "block";
      contextAnchor.bookmark.style.display = "none";
      this.util.removeClass(contextAnchor.bookmarkButton, "active");
      contextAnchor.linkValue = contextAnchor.preview.textContent = contextAnchor.urlInput.value = contextAnchor.urlInput.value.replace(/^\#+/, "");
      if (typeof contextAnchor.linkDefaultRel.check_bookmark === "string") {
        this.plugins.anchor.setRel.call(this, contextAnchor, this.plugins.anchor._relMerge.call(this, contextAnchor, contextAnchor.linkDefaultRel.check_bookmark));
      }
    } else {
      contextAnchor.download.style.display = "none";
      if (typeof contextAnchor.linkDefaultRel.check_bookmark === "string") {
        this.plugins.anchor.setRel.call(this, contextAnchor, this.plugins.anchor._relDelete.call(this, contextAnchor, contextAnchor.linkDefaultRel.check_bookmark));
      }
    }
  },
  _relMerge: function(contextAnchor, relAttr) {
    const current = contextAnchor.currentRel;
    if (!relAttr) return current.join(" ");
    if (/^only\:/.test(relAttr)) {
      relAttr = relAttr.replace(/^only\:/, "").trim();
      contextAnchor.currentRel = relAttr.split(" ");
      return relAttr;
    }
    const rels = relAttr.split(" ");
    for (let i = 0, len = rels.length, index; i < len; i++) {
      index = current.indexOf(rels[i]);
      if (index === -1) current.push(rels[i]);
    }
    return current.join(" ");
  },
  _relDelete: function(contextAnchor, relAttr) {
    if (!relAttr) return contextAnchor.currentRel.join(" ");
    if (/^only\:/.test(relAttr)) relAttr = relAttr.replace(/^only\:/, "").trim();
    const rels = contextAnchor.currentRel.join(" ").replace(this._w.RegExp(relAttr + "\\s*"), "");
    contextAnchor.currentRel = rels.split(" ");
    return rels;
  },
  init: function(contextAnchor) {
    contextAnchor.linkAnchor = null;
    contextAnchor.linkValue = contextAnchor.preview.textContent = contextAnchor.urlInput.value = "";
    contextAnchor.anchorText.value = "";
    contextAnchor.newWindowCheck.checked = false;
    contextAnchor.downloadCheck.checked = false;
    contextAnchor._change = false;
    this.plugins.anchor.setRel.call(this, contextAnchor, contextAnchor.defaultRel);
    if (contextAnchor.relList) {
      this.plugins.anchor.toggleRelList.call(this, contextAnchor, false);
    }
    this.context.anchor.callerContext = null;
    this.plugins.selectMenu.init.call(this, this.context.selectMenu.callerContext);
  }
};

// node_modules/suneditor/src/plugins/dialog/link.js
var link_default = {
  name: "link",
  display: "dialog",
  add: function(core) {
    core.addModule([import_dialog.default, anchor_default]);
    const context = core.context;
    const contextLink = context.link = {
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      _linkAnchor: null,
      anchorCtx: null
    };
    let link_dialog = this.setDialog(core);
    contextLink.modal = link_dialog;
    let link_controller = this.setController_LinkButton(core);
    contextLink.linkController = link_controller;
    link_dialog.querySelector("form").addEventListener("submit", this.submit.bind(core));
    link_controller.addEventListener("click", this.onClick_linkController.bind(core));
    context.dialog.modal.appendChild(link_dialog);
    context.element.relative.appendChild(link_controller);
    core.plugins.anchor.initEvent.call(core, "link", link_dialog);
    contextLink.focusElement = context.anchor.caller.link.urlInput;
    link_dialog = null, link_controller = null;
  },
  /** dialog */
  setDialog: function(core) {
    const lang = core.lang;
    const dialog2 = core.util.createElement("DIV");
    const icons = core.icons;
    dialog2.className = "se-dialog-content";
    dialog2.style.display = "none";
    let html = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + lang.dialogBox.close + '" aria-label="' + lang.dialogBox.close + '">' + icons.cancel + '</button><span class="se-modal-title">' + lang.dialogBox.linkBox.title + "</span></div>" + core.context.anchor.forms.innerHTML + '<div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + lang.dialogBox.submitButton + '" aria-label="' + lang.dialogBox.submitButton + '"><span>' + lang.dialogBox.submitButton + "</span></button></div></form>";
    dialog2.innerHTML = html;
    return dialog2;
  },
  /** modify controller button */
  setController_LinkButton: function(core) {
    const lang = core.lang;
    const icons = core.icons;
    const link_btn = core.util.createElement("DIV");
    link_btn.className = "se-controller se-controller-link";
    link_btn.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><span><a target="_blank" href=""></a>&nbsp;</span><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + icons.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.edit + '</span></span></button><button type="button" data-command="unlink" tabindex="-1" class="se-btn se-tooltip">' + icons.unlink + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.unlink + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + icons.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.remove + "</span></span></button></div></div>";
    return link_btn;
  },
  /**
   * @Override dialog
   */
  open: function() {
    this.plugins.dialog.open.call(this, "link", "link" === this.currentControllerName);
  },
  submit: function(e) {
    this.showLoading();
    e.preventDefault();
    e.stopPropagation();
    try {
      const oA = this.plugins.anchor.createAnchor.call(this, this.context.anchor.caller.link, false);
      if (oA === null) return;
      if (!this.context.dialog.updateModal) {
        const selectedFormats = this.getSelectedElements();
        if (selectedFormats.length > 1) {
          const oFormat = this.util.createElement(selectedFormats[0].nodeName);
          oFormat.appendChild(oA);
          if (!this.insertNode(oFormat, null, true)) return;
        } else {
          if (!this.insertNode(oA, null, true)) return;
        }
        this.setRange(oA.childNodes[0], 0, oA.childNodes[0], oA.textContent.length);
      } else {
        const textNode = this.context.link._linkAnchor.childNodes[0];
        this.setRange(textNode, 0, textNode, textNode.textContent.length);
      }
    } finally {
      this.plugins.dialog.close.call(this);
      this.closeLoading();
      this.history.push(false);
    }
    return false;
  },
  /**
   * @Override core
   */
  active: function(element) {
    if (!element) {
      if (this.controllerArray.indexOf(this.context.link.linkController) > -1) {
        this.controllersOff();
      }
    } else if (this.util.isAnchor(element) && element.getAttribute("data-image-link") === null) {
      if (this.controllerArray.indexOf(this.context.link.linkController) < 0) {
        this.plugins.link.call_controller.call(this, element);
      }
      return true;
    }
    return false;
  },
  /**
   * @Override dialog
   */
  on: function(update) {
    this.plugins.anchor.on.call(this, this.context.anchor.caller.link, update);
  },
  call_controller: function(selectionATag) {
    this.editLink = this.context.link._linkAnchor = this.context.anchor.caller.link.linkAnchor = selectionATag;
    const linkBtn = this.context.link.linkController;
    const link = linkBtn.querySelector("a");
    link.href = selectionATag.href;
    link.title = selectionATag.textContent;
    link.textContent = selectionATag.textContent;
    this.util.addClass(selectionATag, "on");
    this.setControllerPosition(linkBtn, selectionATag, "bottom", { left: 0, top: 0 });
    this.controllersOn(linkBtn, selectionATag, "link", this.util.removeClass.bind(this.util, this.context.link._linkAnchor, "on"));
  },
  onClick_linkController: function(e) {
    e.stopPropagation();
    const command = e.target.getAttribute("data-command") || e.target.parentNode.getAttribute("data-command");
    if (!command) return;
    e.preventDefault();
    if (/update/.test(command)) {
      this.plugins.dialog.open.call(this, "link", true);
    } else if (/unlink/.test(command)) {
      const sc = this.util.getChildElement(this.context.link._linkAnchor, function(current) {
        return current.childNodes.length === 0 || current.nodeType === 3;
      }, false);
      const ec = this.util.getChildElement(this.context.link._linkAnchor, function(current) {
        return current.childNodes.length === 0 || current.nodeType === 3;
      }, true);
      this.setRange(sc, 0, ec, ec.textContent.length);
      this.nodeChange(null, null, ["A"], false);
    } else {
      this.util.removeItem(this.context.link._linkAnchor);
      this.context.anchor.caller.link.linkAnchor = null;
      this.focus();
      this.history.push(false);
    }
    this.controllersOff();
  },
  /**
   * @Override dialog
   */
  init: function() {
    this.context.link.linkController.style.display = "none";
    this.plugins.anchor.init.call(this, this.context.anchor.caller.link);
  }
};

// src/app/ui/custom-fields/rich-text-input.component.ts
var _c0 = ["container"];
var _c1 = ["editor"];
var RichTextInputComponent = class _RichTextInputComponent extends AsyncHandler {
  placeholder = input("", ...ngDevMode ? [{ debugName: "placeholder" }] : []);
  readonly = input(false, ...ngDevMode ? [{ debugName: "readonly" }] : []);
  images_allowed = input(false, ...ngDevMode ? [{ debugName: "images_allowed" }] : []);
  _container_el = viewChild("container", ...ngDevMode ? [{ debugName: "_container_el" }] : []);
  _editor_el = viewChild("editor", ...ngDevMode ? [{ debugName: "_editor_el" }] : []);
  _editor;
  _onChange;
  _onTouch;
  registerOnChange = (fn) => this._onChange = fn;
  registerOnTouched = (fn) => this._onTouch = fn;
  ngOnChanges(changes) {
    if (changes.images_allowed) {
      this.timeout("init", () => this._initialiseEditor());
    }
  }
  ngAfterViewInit() {
    this.timeout("init", () => this._initialiseEditor());
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    console.log("Value:", new_value);
    if (this._onChange)
      this._onChange(new_value);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.timeout("write", () => {
      if (this._editor) {
        this._setAuth();
        setTimeout(() => {
          this._editor.setContents(value);
        }, 100);
      } else
        this.timeout("write", () => this.writeValue(value));
    });
  }
  _initialiseEditor() {
    const _editor_el = this._editor_el()?.nativeElement;
    const _container_el = this._container_el()?.nativeElement;
    if (!_editor_el || !_container_el) {
      return this.timeout("init", () => this._initialiseEditor());
    }
    const buttons = [
      ["font"],
      ["fontSize"],
      ["formatBlock"],
      ["bold", "underline", "italic"],
      ["align", "list"],
      ["link"]
    ];
    if (this.images_allowed()) {
      buttons.push(["embedImage", "embedAttachment"]);
    }
    if (this._editor) {
      this.unsub("changes");
      _editor_el.innerHTML = "";
      delete this._editor;
    }
    const embedImagePlugin = {
      name: "embedImage",
      display: "command",
      title: "Insert Image",
      innerHTML: '<div class="h-full w-full flex justify-center items-center"><i class="material-symbols-outlined text-2xl">image</i></div>',
      add: (_core, _targetElement) => {
      },
      action: () => this._embedImage()
    };
    const embedAttachmentPlugin = {
      name: "embedAttachment",
      display: "command",
      title: "Insert Attachment",
      innerHTML: '<div class="h-full w-full flex justify-center items-center"><i class="material-symbols-outlined text-2xl">attachment</i></div>',
      add: (_core, _targetElement) => {
      },
      action: () => this._embedAttachment()
    };
    const box = this._container_el()?.nativeElement.getBoundingClientRect() || {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    };
    this._editor = suneditor_default.create(_editor_el, {
      placeholder: this.placeholder(),
      height: `${box.height}`,
      plugins: [
        font_default,
        fontSize_default,
        formatBlock_default,
        list_default,
        link_default,
        embedImagePlugin,
        embedAttachmentPlugin
      ],
      buttonList: buttons
    });
    this._editor.readOnly(this.readonly());
    this._editor.onChange = (c) => this.setValue(c);
  }
  _embedImage() {
    if (!this._editor)
      return;
    const file_input = document.createElement("input");
    file_input.setAttribute("type", "file");
    file_input.setAttribute("accept", "image/*");
    file_input.click();
    file_input.onchange = () => {
      const file = file_input.files[0];
      uploadFile(file, true).subscribe((upload) => {
        if (!upload.id)
          return;
        const link = `/api/engine/v2/uploads/${encodeURIComponent(upload.id)}/url`;
        this._setAuth();
        setTimeout(() => {
          this._editor.insertHTML(`<img src="${link}" alt="${file.name}" />`);
        }, 100);
      });
    };
  }
  _embedAttachment() {
    if (!this._editor)
      return;
    const file_input = document.createElement("input");
    file_input.setAttribute("type", "file");
    file_input.click();
    file_input.onchange = () => {
      const file = file_input.files[0];
      uploadFile(file, true).subscribe((upload) => {
        if (!upload.id)
          return;
        const link = `/api/engine/v2/uploads/${encodeURIComponent(upload.id)}/url`;
        const is_image = file.type.startsWith("image/");
        this._setAuth();
        setTimeout(() => {
          if (is_image) {
            this._editor.insertHTML(`<img src="${link}" alt="${file.name}" />`);
          } else {
            this._editor.insertHTML(`<a href="${link}" target="_blank">${file.name}</a>`);
          }
        }, 100);
      });
    };
  }
  _setAuth() {
    const tkn = X();
    document.cookie = `${tkn === "x-api-key" ? "api-key=" + encodeURIComponent(Ht()) : "bearer_token=" + encodeURIComponent(tkn)};max-age=30;path=/api/engine/v2/uploads;samesite=strict;${location.protocol === "https:" ? "secure;" : ""}`;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RichTextInputComponent_BaseFactory;
    return function RichTextInputComponent_Factory(__ngFactoryType__) {
      return (\u0275RichTextInputComponent_BaseFactory || (\u0275RichTextInputComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RichTextInputComponent)))(__ngFactoryType__ || _RichTextInputComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RichTextInputComponent, selectors: [["rich-text-input"]], viewQuery: function RichTextInputComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._container_el, _c0, 5);
      \u0275\u0275viewQuerySignal(ctx._editor_el, _c1, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, inputs: { placeholder: [1, "placeholder"], readonly: [1, "readonly"], images_allowed: [1, "images_allowed"] }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      /* istanbul ignore next */
      useExisting: forwardRef(() => _RichTextInputComponent),
      multi: true
    }
  ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 4, vars: 0, consts: [["container", ""], ["editor", ""], [1, "absolute", "inset-0"], [1, "h-full"]], template: function RichTextInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 2, 0);
      \u0275\u0275domElement(2, "div", 3, 1);
      \u0275\u0275domElementEnd();
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  min-height: 8rem;\n  margin-bottom: 4rem;\n  z-index: 10;\n}\n/*# sourceMappingURL=rich-text-input.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RichTextInputComponent, [{
    type: Component,
    args: [{ selector: "rich-text-input", template: `
        <div #container class="absolute inset-0">
            <div #editor class="h-full"></div>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => RichTextInputComponent),
        multi: true
      }
    ], styles: ["/* angular:styles/component:css;ffdd3e3728755969f79b4ef8994f97de6b3c6ec4c0877dc6129c63fdfab0d991;/home/runner/work/backoffice/backoffice/src/app/ui/custom-fields/rich-text-input.component.ts */\n:host {\n  display: block;\n  position: relative;\n  min-height: 8rem;\n  margin-bottom: 4rem;\n  z-index: 10;\n}\n/*# sourceMappingURL=rich-text-input.component.css.map */\n"] }]
  }], null, { placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], images_allowed: [{ type: Input, args: [{ isSignal: true, alias: "images_allowed", required: false }] }], _container_el: [{ type: ViewChild, args: ["container", { isSignal: true }] }], _editor_el: [{ type: ViewChild, args: ["editor", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RichTextInputComponent, { className: "RichTextInputComponent", filePath: "src/app/ui/custom-fields/rich-text-input.component.ts", lineNumber: 46 });
})();

// src/app/admin/mailing-lists/email-template-form.component.ts
var _c02 = () => [];
var _c12 = () => ["/admin", "mailing-list"];
function EmailTemplateFormComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12)(1, "div", 26)(2, "div", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 29);
    \u0275\u0275text(7, ":");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const template_r2 = ctx.$implicit;
    \u0275\u0275property("value", template_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", template_r2.name_details[0], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", template_r2.name_details[1], " ");
  }
}
function EmailTemplateFormComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function EmailTemplateFormComponent_For_23_Template_button_click_0_listener() {
      const field_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.copyField(field_r4.name));
    });
    \u0275\u0275elementStart(1, "div", 31)(2, "div", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const field_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", field_r4.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", field_r4.description, " ");
  }
}
function EmailTemplateFormComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275text(1, " No placeholders available ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
  }
}
function EmailTemplateFormComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275element(2, "mat-spinner", 35);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.loading);
  }
}
function extractTextFromHTML(html_string) {
  const temp_element = document.createElement("div");
  temp_element.innerHTML = html_string;
  return temp_element.textContent || temp_element.innerText || "";
}
var EmailTemplateFormComponent = class _EmailTemplateFormComponent extends AsyncHandler {
  _state = inject(EmailStateService);
  _route = inject(ActivatedRoute);
  _router = inject(Router);
  _clipboard = inject(Clipboard);
  loading = "";
  template;
  definitions = this._state.template_definitions;
  form = new FormGroup({
    id: new FormControl(""),
    reply_to: new FormControl(""),
    from: new FormControl(""),
    subject: new FormControl("", [Validators.required]),
    category: new FormControl("internal"),
    trigger: new FormControl(""),
    html: new FormControl("", [Validators.required]),
    zone_id: new FormControl("")
  });
  active_trigger = null;
  ngOnInit() {
    this.subscription("route.params", this._route.paramMap.subscribe(async (params) => {
      if (params.has("id")) {
        this.loading = "Loading email template...";
        this.template = await this._state.loadTemplate(params.get("id"));
        this.loading = "";
        console.log("Template:", this.template);
        if (!this.template) {
          this._router.navigate(["/email-templates", "manage"]);
        } else {
          this.form.patchValue(this.template);
        }
      }
    }));
    this.subscription("trigger", this.form.valueChanges.subscribe(async (value) => {
      if (value.trigger) {
        const trigger_list = await nextValueFrom(this.definitions);
        this.active_trigger = trigger_list.find((_) => _.id === value.trigger);
      }
    }));
  }
  copyField(field) {
    this._clipboard.copy(`%{${field}}`);
    notifySuccess(`Copied field "${field}" to clipboard.`);
  }
  async save() {
    this.loading = "Saving email template...";
    await this._state.saveTemplate(__spreadProps(__spreadValues(__spreadValues({}, this.template || {}), this.form.getRawValue()), {
      text: extractTextFromHTML(this.form.getRawValue().html || "")
    }));
    this.loading = "";
    notifySuccess("Successfully saved email template");
    this._router.navigate(["/email-templates"]);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EmailTemplateFormComponent_BaseFactory;
    return function EmailTemplateFormComponent_Factory(__ngFactoryType__) {
      return (\u0275EmailTemplateFormComponent_BaseFactory || (\u0275EmailTemplateFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_EmailTemplateFormComponent)))(__ngFactoryType__ || _EmailTemplateFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplateFormComponent, selectors: [["email-template-form"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 48, vars: 12, consts: [["tracking_menu", "matMenu"], ["load_state", ""], [1, "bg-base-100", "absolute", "inset-0", "overflow-auto", "p-4"], [1, "mx-auto", "min-h-full", "w-3xl", "max-w-full", "pt-4", 3, "formGroup"], [1, "mb-8", "flex", "items-center", "space-x-2"], [1, "text-2xl", "font-medium"], [1, "flex", "items-center", "space-x-4"], [1, "w-1/4", "flex-1", "space-y-2"], ["for", "trigger"], ["appearance", "outline", 1, "w-full"], ["name", "trigger", "placeholder", "Select Trigger", "formControlName", "trigger"], ["value", ""], [3, "value"], ["btn", "", "matRipple", "", "matTooltip", "Values that get replaced in the email template when sent", 1, "my-4", "w-1/4", "flex-1", 3, "disabled", "matMenuTriggerFor"], [1, "max-h-96"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "disabled"], ["appearance", "outline", 1, "flex-1"], ["matInput", "", "placeholder", "Reply to address", "formControlName", "reply_to"], ["matInput", "", "placeholder", "From address", "formControlName", "from"], ["matPrefix", "", 1, "relative", "-left-1", "text-2xl"], ["matInput", "", "placeholder", "Template Subject", "formControlName", "subject"], ["formControlName", "html", "placeholder", "Body of the email template", 1, "block", "min-h-[calc(100vh-28rem)]", 3, "images_allowed"], [1, "bg-base-100", "sticky", "bottom-0", "flex", "items-center", "justify-end", "space-x-2"], ["btn", "", "matRipple", "", 1, "inverse", "w-32", 3, "routerLink"], ["btn", "", "matRipple", "", "type", "button", 1, "w-48", 3, "click"], [1, "my-2", "flex", "flex-col-reverse", "leading-tight"], [1, "text-xs", "opacity-30"], [1, "text-sm"], [1, "opacity-0"], ["mat-menu-item", "", 3, "click"], [1, "flex", "flex-col", "leading-tight"], [1, "font-mono", "text-sm"], [1, "bg-base-100", "absolute", "inset-0"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"]], template: function EmailTemplateFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "form", 3)(2, "div", 4)(3, "h2", 5);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 6)(6, "div", 7)(7, "label", 8);
      \u0275\u0275text(8, "Trigger");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "mat-form-field", 9)(10, "mat-select", 10)(11, "mat-option", 11);
      \u0275\u0275text(12, "None");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(13, EmailTemplateFormComponent_For_14_Template, 8, 3, "mat-option", 12, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275pipe(15, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "mat-error");
      \u0275\u0275text(17, "A trigger is required");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "button", 13);
      \u0275\u0275text(19, " Placeholders ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "mat-menu", 14, 0);
      \u0275\u0275repeaterCreate(22, EmailTemplateFormComponent_For_23_Template, 6, 2, "button", 15, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(24, EmailTemplateFormComponent_Conditional_24_Template, 2, 1, "button", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 6)(26, "mat-form-field", 17);
      \u0275\u0275element(27, "input", 18);
      \u0275\u0275elementStart(28, "mat-error");
      \u0275\u0275text(29, "A reply address is required");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "mat-form-field", 17);
      \u0275\u0275element(31, "input", 19);
      \u0275\u0275elementStart(32, "mat-error");
      \u0275\u0275text(33, "A from address is required");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "mat-form-field", 9)(35, "icon", 20);
      \u0275\u0275text(36, " description ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 21);
      \u0275\u0275elementStart(38, "mat-error");
      \u0275\u0275text(39, "A title for the template is required");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(40, "rich-text-input", 22);
      \u0275\u0275elementStart(41, "div", 23)(42, "a", 24);
      \u0275\u0275text(43, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 25);
      \u0275\u0275listener("click", function EmailTemplateFormComponent_Template_button_click_44_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.save());
      });
      \u0275\u0275text(45, " Save Template ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(46, EmailTemplateFormComponent_ng_template_46_Template, 5, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const tracking_menu_r6 = \u0275\u0275reference(21);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", (ctx.template == null ? null : ctx.template.id) ? "Edit" : "New", " Email Template ");
      \u0275\u0275advance(9);
      \u0275\u0275repeater(\u0275\u0275pipeBind1(15, 7, ctx.definitions));
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", !ctx.form.value.trigger)("matMenuTriggerFor", tracking_menu_r6);
      \u0275\u0275advance(4);
      \u0275\u0275repeater((ctx.active_trigger == null ? null : ctx.active_trigger.fields) || \u0275\u0275pureFunction0(9, _c02));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!((ctx.active_trigger == null ? null : ctx.active_trigger.fields) || \u0275\u0275pureFunction0(10, _c02)).length ? 24 : -1);
      \u0275\u0275advance(16);
      \u0275\u0275property("images_allowed", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c12));
    }
  }, dependencies: [
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatRippleModule,
    MatRipple,
    RichTextInputComponent,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatPrefix,
    MatInputModule,
    MatInput,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatTooltipModule,
    MatTooltip,
    RouterModule,
    RouterLink,
    MatSelectModule,
    MatSelect,
    MatOption,
    AsyncPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailTemplateFormComponent, [{
    type: Component,
    args: [{ selector: "email-template-form", template: `
        <div class="bg-base-100 absolute inset-0 overflow-auto p-4">
            <form
                class="mx-auto min-h-full w-3xl max-w-full pt-4"
                [formGroup]="form"
            >
                <div class="mb-8 flex items-center space-x-2">
                    <h2 class="text-2xl font-medium">
                        {{ template?.id ? 'Edit' : 'New' }} Email Template
                    </h2>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="w-1/4 flex-1 space-y-2">
                        <label for="trigger">Trigger</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="trigger"
                                placeholder="Select Trigger"
                                formControlName="trigger"
                            >
                                <mat-option value="">None</mat-option>
                                @for (
                                    template of definitions | async;
                                    track template
                                ) {
                                    <mat-option [value]="template.id">
                                        <div
                                            class="my-2 flex flex-col-reverse leading-tight"
                                        >
                                            <div class="text-xs opacity-30">
                                                {{ template.name_details[0] }}
                                            </div>
                                            <div class="text-sm">
                                                {{ template.name_details[1] }}
                                                <span class="opacity-0">:</span>
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                            <mat-error>A trigger is required</mat-error>
                        </mat-form-field>
                    </div>
                    <button
                        btn
                        matRipple
                        class="my-4 w-1/4 flex-1"
                        matTooltip="Values that get replaced in the email template when sent"
                        [disabled]="!form.value.trigger"
                        [matMenuTriggerFor]="tracking_menu"
                    >
                        Placeholders
                    </button>
                    <mat-menu #tracking_menu="matMenu" class="max-h-96">
                        @for (
                            field of active_trigger?.fields || [];
                            track field
                        ) {
                            <button
                                mat-menu-item
                                (click)="copyField(field.name)"
                            >
                                <div class="flex flex-col leading-tight">
                                    <div class="font-mono text-sm">
                                        {{ field.name }}
                                    </div>
                                    <div class="text-xs opacity-30">
                                        {{ field.description }}
                                    </div>
                                </div>
                            </button>
                        }
                        @if (!(active_trigger?.fields || []).length) {
                            <button mat-menu-item [disabled]="true">
                                No placeholders available
                            </button>
                        }
                    </mat-menu>
                </div>
                <div class="flex items-center space-x-4">
                    <mat-form-field appearance="outline" class="flex-1">
                        <input
                            matInput
                            placeholder="Reply to address"
                            formControlName="reply_to"
                        />
                        <mat-error>A reply address is required</mat-error>
                    </mat-form-field>
                    <mat-form-field appearance="outline" class="flex-1">
                        <input
                            matInput
                            placeholder="From address"
                            formControlName="from"
                        />
                        <mat-error>A from address is required</mat-error>
                    </mat-form-field>
                </div>
                <mat-form-field appearance="outline" class="w-full">
                    <icon matPrefix class="relative -left-1 text-2xl">
                        description
                    </icon>
                    <input
                        matInput
                        placeholder="Template Subject"
                        formControlName="subject"
                    />
                    <mat-error>A title for the template is required</mat-error>
                </mat-form-field>
                <rich-text-input
                    formControlName="html"
                    placeholder="Body of the email template"
                    [images_allowed]="true"
                    class="block min-h-[calc(100vh-28rem)]"
                ></rich-text-input>
                <div
                    class="bg-base-100 sticky bottom-0 flex items-center justify-end space-x-2"
                >
                    <a
                        btn
                        matRipple
                        class="inverse w-32"
                        [routerLink]="['/admin', 'mailing-list']"
                    >
                        Cancel
                    </a>
                    <button
                        btn
                        matRipple
                        type="button"
                        class="w-48"
                        (click)="save()"
                    >
                        Save Template
                    </button>
                </div>
            </form>
        </div>
        <ng-template #load_state>
            <div class="bg-base-100 absolute inset-0">
                <div
                    class="flex h-full w-full flex-col items-center justify-center space-y-2"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>{{ loading }}</p>
                </div>
            </div>
        </ng-template>
    `, imports: [
      CommonModule,
      MatProgressSpinnerModule,
      MatRippleModule,
      RichTextInputComponent,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatMenuModule,
      MatTooltipModule,
      RouterModule,
      MatSelectModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailTemplateFormComponent, { className: "EmailTemplateFormComponent", filePath: "src/app/admin/mailing-lists/email-template-form.component.ts", lineNumber: 195 });
})();
export {
  EmailTemplateFormComponent,
  extractTextFromHTML
};
//# sourceMappingURL=chunk-B3AE7FOG.js.map

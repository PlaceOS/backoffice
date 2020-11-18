(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["systems-systems-module"],{

/***/ "./src/app/systems/system-about/system-about.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/systems/system-about/system-about.component.ts ***!
  \****************************************************************/
/*! exports provided: SystemAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemAboutComponent", function() { return SystemAboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/esm/index.js");
/* harmony import */ var src_app_common_base_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/base.class */ "./src/app/common/base.class.ts");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_common_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/notifications */ "./src/app/common/notifications.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_common_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/item.service */ "./src/app/common/item.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _ui_forms_settings_form_settings_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/forms/settings-form/settings-form.component */ "./src/app/ui/forms/settings-form/settings-form.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _ui_pipes_date_from_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/pipes/date-from.pipe */ "./src/app/ui/pipes/date-from.pipe.ts");















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_systemStartAction$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS__1 = goog.getMsg("Start System");
    I18N_0 = MSG_EXTERNAL_systemStartAction$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:@@systemStartAction␟6f81a8c7820d574bfb9547825d7fa432bfc66af1␟8154115013285965605:Start System`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_systemStopAction$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS__3 = goog.getMsg("Stop System");
    I18N_2 = MSG_EXTERNAL_systemStopAction$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:@@systemStopAction␟87a27185ae52b451c0f6d4127ce7fedf70ab1fb1␟5161697597209904801:Stop System`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_settingsLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS__5 = goog.getMsg("Settings");
    I18N_4 = MSG_EXTERNAL_settingsLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:@@settingsLabel␟121cc5391cd2a5115bc2b3160379ee5b36cd7716␟4930506384627295710:Settings`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_systemUrlLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___7 = goog.getMsg("Support URL:");
    I18N_6 = MSG_EXTERNAL_systemUrlLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___7;
}
else {
    I18N_6 = $localize `:@@systemUrlLabel␟7e26fea74dd85099364f23205324001d5f08d729␟206794270698958656:Support URL:`;
}
function SystemAboutComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r3.item.support_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.item.support_url);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_systemBookableLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___9 = goog.getMsg("Bookable Room:");
    I18N_8 = MSG_EXTERNAL_systemBookableLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___9;
}
else {
    I18N_8 = $localize `:@@systemBookableLabel␟1729892dec33ddc3daf35f197b6882eb1c4a8a1b␟238801422848943760:Bookable Room:`;
}
function SystemAboutComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.item.bookable ? "Yes" : "No");
} }
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_emailLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___11 = goog.getMsg("Email:\u00A0");
    I18N_10 = MSG_EXTERNAL_emailLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___11;
}
else {
    I18N_10 = $localize `:@@emailLabel␟31703f614ddd8547d63317830a59c0a7b935778e␟8507709425849513695:Email: `;
}
function SystemAboutComponent_div_0_div_9_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "mailto:" + ctx_r11.item.email, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.item.email);
} }
function SystemAboutComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, I18N_10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SystemAboutComponent_div_0_div_9_a_3_Template, 2, 2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.item.email);
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_capacityLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___13 = goog.getMsg("Capacity:");
    I18N_12 = MSG_EXTERNAL_capacityLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___13;
}
else {
    I18N_12 = $localize `:@@capacityLabel␟a1170e85d1897210d5fe03d1f363587de15d02cd␟8062822823331512246:Capacity:`;
}
function SystemAboutComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, I18N_12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.item.capacity);
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_systemPanelCountLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___15 = goog.getMsg("Installed Touch Panels:");
    I18N_14 = MSG_EXTERNAL_systemPanelCountLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:@@systemPanelCountLabel␟45b07d34ed29d3a5269b5bac86182781001845a9␟4375591254429334656:Installed Touch Panels:`;
}
function SystemAboutComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.item.installed_ui_devices);
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_systemCreatedAtLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___17 = goog.getMsg("Created:");
    I18N_16 = MSG_EXTERNAL_systemCreatedAtLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:@@systemCreatedAtLabel␟a5ed099ffc9e96f6970df843289ade8a7d20ab9f␟1616250945945379783:Created:`;
}
function SystemAboutComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, I18N_16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "dateFrom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx_r8.item.created_at * 1000));
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc \@systemUpdatedAtLabel
     */ 
    const MSG_EXTERNAL_1116759395536210856$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___19 = goog.getMsg("Updated:");
    I18N_18 = MSG_EXTERNAL_1116759395536210856$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS___19;
}
else {
    I18N_18 = $localize `:@systemUpdatedAtLabel␟f94240161f912dbd8758b858877cddeab80f36cb␟1116759395536210856:Updated:`;
}
function SystemAboutComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, I18N_18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "dateFrom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx_r9.item.updated_at * 1000));
} }
const _c20 = function () { return []; };
function SystemAboutComponent_div_0_section_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "a-settings-form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx_r10.item.id)("merge", true)("settings", ctx_r10.item.settings)("merge_settings", ctx_r10.other_settings || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c20));
} }
function SystemAboutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemAboutComponent_div_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.start(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemAboutComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.stop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SystemAboutComponent_div_0_div_7_Template, 6, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SystemAboutComponent_div_0_div_8_Template, 5, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SystemAboutComponent_div_0_div_9_Template, 4, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SystemAboutComponent_div_0_div_10_Template, 5, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SystemAboutComponent_div_0_div_11_Template, 5, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SystemAboutComponent_div_0_div_12_Template, 6, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SystemAboutComponent_div_0_div_13_Template, 6, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](16, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SystemAboutComponent_div_0_section_17_Template, 2, 5, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.support_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.bookable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.bookable && ctx_r0.item.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.capacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.installed_ui_devices);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.created_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.settings && ctx_r0.other_settings)("ngIfElse", _r1);
} }
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_systemLoadingLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS__22 = goog.getMsg("Loading system settings...");
    I18N_21 = MSG_EXTERNAL_systemLoadingLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_SYSTEM_ABOUT_COMPONENT_TS__22;
}
else {
    I18N_21 = $localize `:@@systemLoadingLabel␟12761354f7c79edc553ff408524f5b791cd54481␟3385246531183416995:Loading system settings...`;
}
function SystemAboutComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-spinner", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, I18N_21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SystemAboutComponent extends src_app_common_base_class__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_dialog, _service) {
        super();
        this._dialog = _dialog;
        this._service = _service;
        /** List of settings for associated modules, drivers and zones */
        this.other_settings = null;
    }
    /** List of module ids associated with the system */
    modules() {
        return [...this.item.modules];
    }
    get item() {
        return this._service.active_item;
    }
    ngOnInit() {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadZones();
            this.loadSettings();
        }));
    }
    /**
     * Open confirmation modal for starting the active system
     */
    start() {
        const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["CONFIRM_METADATA"]), { data: {
                title: 'Start system?',
                content: `Are you sure you want to start this system?<br>All stopped modules within the system will boot up.`,
                icon: { type: 'icon', class: 'backoffice-controller-play' },
            } }));
        ref.componentInstance.event.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])((_) => _.reason === 'done')).subscribe((_) => {
            Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["startSystem"])(this.item.id).subscribe((_) => {
                Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_6__["notifySuccess"])(`Successfully started system`);
                ref.close();
            }, (err) => Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_6__["notifyError"])(`Failed to start system: ${JSON.stringify(err.response || err.message || err)}`));
        });
    }
    /**
     * Open confirmation modal for stopping the active system
     */
    stop() {
        const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["CONFIRM_METADATA"]), { data: {
                title: 'Stop system?',
                content: `Are you sure you want to stop this system?<br>All modules will be immediately stopped regardless of any other systems they may be in.`,
                icon: { type: 'icon', class: 'backoffice-controller-stop' },
            } }));
        ref.componentInstance.event.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])((_) => _.reason === 'done')).subscribe((_) => {
            Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["stopSystem"])(this.item.id).subscribe((_) => {
                Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_6__["notifySuccess"])(`Successfully stopped system`);
                ref.close();
            }, (err) => Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_6__["notifyError"])(`Failed to stop system: ${JSON.stringify(err.response || err.message || err)}`));
        });
    }
    /**
     * Load zones associated with the system to allow for merging
     */
    loadZones() {
        if (!this.item) {
            return;
        }
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["queryZones"])({ control_system_id: this.item.id, offset: 0 })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((resp) => resp.data))
            .subscribe((list) => {
            list.sort((a, b) => this.item.zones.indexOf(b.id) - this.item.zones.indexOf(a.id));
            this.zones = list;
        }, () => null);
    }
    loadSettings() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.item) {
                return;
            }
            this.other_settings = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["systemSettings"])(this.item.id).toPromise();
        });
    }
}
SystemAboutComponent.ɵfac = function SystemAboutComponent_Factory(t) { return new (t || SystemAboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_item_service__WEBPACK_IMPORTED_MODULE_8__["ActiveItemService"])); };
SystemAboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SystemAboutComponent, selectors: [["system-about"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 1, consts: [["class", "container", 4, "ngIf"], ["load_state", ""], [1, "container"], [1, "select"], ["mat-button", "", 3, "click"], [1, "details"], ["class", "field", 4, "ngIf"], [1, "settings"], [4, "ngIf", "ngIfElse"], [1, "field"], [1, "value"], ["target", "_blank", 3, "href"], ["target", "_blank", 3, "href", 4, "ngIf"], [3, "id", "merge", "settings", "merge_settings"], [1, "info-block"], [1, "icon"], ["diameter", "32"], [1, "text"]], template: function SystemAboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SystemAboutComponent_div_0_Template, 18, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SystemAboutComponent_ng_template_1_Template, 5, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _ui_forms_settings_form_settings_form_component__WEBPACK_IMPORTED_MODULE_11__["SettingsFormComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"]], pipes: [_ui_pipes_date_from_pipe__WEBPACK_IMPORTED_MODULE_13__["DateFromPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n  font-size: 1.1em;\n  margin-bottom: 0.5em;\n}\nheader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  color: rgba(0, 0, 0, 0.6);\n  padding: 0 1em;\n  font-weight: 300;\n  text-decoration: underline;\n  cursor: pointer;\n  transition: color 200ms;\n}\nheader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: rgba(0, 0, 0, 0.85);\n}\nheader.settings[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.75em;\n  margin: 0;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 0.5em 0.25em;\n}\n.select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.25em;\n}\nbutton[_ngcontent-%COMP%] {\n  margin: 0 0.25em;\n}\nbutton[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\nbutton[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0.25em 0;\n}\n.field[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  padding: 0 0.5em;\n  -webkit-user-select: all;\n     -moz-user-select: all;\n      -ms-user-select: all;\n          user-select: all;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  font-weight: 500;\n}\na[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9zeXN0ZW1zL3N5c3RlbS1hYm91dC9zeXN0ZW0tYWJvdXQuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBcUNBOztjQUFBO0FBWUE7O2VBQUE7QUFPQTs7ZUFBQTtBQWdCQTs7c0JBQUE7QUN0RUE7RUFDSSxZQUFBO0FBYUo7QUFWQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQWFKO0FBWkk7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFjUjtBQWJRO0VBQ0ksMEJBQUE7QUFlWjtBQVhJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQWFSO0FBVEE7RUFDSSxxQkFBQTtBQVlKO0FBVEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQVlKO0FBVEE7RUFDSSxnQkFBQTtBQVlKO0FBWEk7RUFDSSxjQUFBO0FBYVI7QUFYSTtFQUNJLGVBQUE7QUFhUjtBQVRBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFZSjtBQVZJO0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtLQUFBLHFCQUFBO01BQUEsb0JBQUE7VUFBQSxnQkFBQTtBQVlSO0FBUkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBV0o7QUFSQTtFQUNJLGdCQUFBO0FBV0oiLCJmaWxlIjoic3JjL2FwcC9zeXN0ZW1zL3N5c3RlbS1hYm91dC9zeXN0ZW0tYWJvdXQuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNGNhZjUwO1xuJHN1Y2Nlc3MtbGlnaHQ6ICM2NmJiNmE7XG4kc3VjY2Vzcy1kYXJrOiAjMDA3OTZiO1xuXG4kcGVuZGluZzogI2ZmOGYwMDtcbiRwZW5kaW5nLWxpZ2h0OiAjZmZjMDQ2O1xuJHBlbmRpbmctZGFyazogI2M1NjAwMDtcblxuJGVycm9yOiAjZjQ0MzM2O1xuJGVycm9yLWxpZ2h0OiAjZmY2ZjYwO1xuJGVycm9yLWRhcms6ICNhYjAwMGQ7XG5cbiRjb2xvci1wcmltYXJ5OiAjQzkyMzY2O1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6ICNjZDU2OGE7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjYjYwMDVkO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjNUM2NEZGO1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogIzcyNzJlNztcbiRjb2xvci1zZWNvbmRhcnktZGFyazogIzU1NTdkMTtcblxuJGNvbG9yLWRldmVsb3A6ICNmMGYwZjA7XG4kY29sb3ItZGV2ZWxvcC1saWdodDogI2ZmZjtcbiRjb2xvci1kZXZlbG9wLWRhcms6ICNlMGUwZTA7XG5cbiRiYWNrZ3JvdW5kOiAjMjYzMjM4O1xuJGJhY2tncm91bmQtbGlnaHQ6ICM0NTVhNjQ7XG4kYmFja2dyb3VuZC1kYXJrOiAjMjAyNjMyO1xuXG4kaGVhZGVyLWNvbG9yOiAjMEEwRDJFO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiUm9ib3RvXCIsIFwiVmVyZGFuYVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJZb3VuZ1wiLCAkZm9udDtcbiRtb25vLWZvbnQ6IFwiRmlyYSBDb2RlXCIsIG1vbm9zcGFjZTtcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgU2l6aW5nICAgfHxcblxcKj09PT09PT09PT09PSovXG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG5cblxuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgTWl4aW5zICAgfHxcblxcKj09PT09PT09PT09PSovXG5cbkBtaXhpbiBoaWRlLXRleHQtb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGJveC1zaGFkb3coJGRlcHRoOiAxLCAkc3ByZWFkOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAoMXB4ICogJHNwcmVhZCkgKDNweCAqICRzcHJlYWQpIDAgcmdiYSgjMDAwLCAuMiAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMXB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIDAgcmdiYSgjMDAwLCAuMTQgKiAkZGVwdGgpLFxuICAgICAgICAgICAgICAgIDAgKDJweCAqICRzcHJlYWQpICgxcHggKiAkc3ByZWFkKSAtKDFweCAqICRzcHJlYWQpIHJnYmEoIzAwMCwgLjEyICogJGRlcHRoKTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICAgIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IC43ZW07XG4gICAgICAgIGNvbG9yOiByZ2JhKCMwMDAsIC42KTtcbiAgICAgICAgcGFkZGluZzogMCAxZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKCMwMDAsIC44NSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLnNldHRpbmdzIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC43NWVtO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufVxuXG5zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAuNWVtIC4yNWVtO1xufVxuXG4uc2VsZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogLjI1ZW07XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwIC4yNWVtO1xuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAuMjVlbSAwO1xuXG4gICAgLnZhbHVlIHtcbiAgICAgICAgcGFkZGluZzogMCAuNWVtO1xuICAgICAgICB1c2VyLXNlbGVjdDogYWxsO1xuICAgIH1cbn1cblxubGFiZWwge1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5hIHtcbiAgICBmb250LXNpemU6IC45ZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SystemAboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'system-about',
                templateUrl: './system-about.template.html',
                styleUrls: ['./system-about.styles.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: src_app_common_item_service__WEBPACK_IMPORTED_MODULE_8__["ActiveItemService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/systems/system-metadata/system-metadata.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/systems/system-metadata/system-metadata.component.ts ***!
  \**********************************************************************/
/*! exports provided: SystemMetadataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemMetadataComponent", function() { return SystemMetadataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/esm/index.js");
/* harmony import */ var src_app_common_base_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/base.class */ "./src/app/common/base.class.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_common_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/validation */ "./src/app/common/validation.ts");
/* harmony import */ var src_app_overlays_metadata_details_modal_metadata_details_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/overlays/metadata-details-modal/metadata-details-modal.component */ "./src/app/overlays/metadata-details-modal/metadata-details-modal.component.ts");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var src_app_common_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/notifications */ "./src/app/common/notifications.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_common_item_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/item.service */ "./src/app/common/item.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/icon/icon.component */ "./src/app/ui/icon/icon.component.ts");
/* harmony import */ var _ui_custom_fields_settings_field_settings_field_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/custom-fields/settings-field/settings-field.component */ "./src/app/ui/custom-fields/settings-field/settings-field.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");



















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_addMetadataAction$$SRC_APP_SYSTEMS_SYSTEM_METADATA_SYSTEM_METADATA_COMPONENT_TS__1 = goog.getMsg("Add new Metadata Field");
    I18N_0 = MSG_EXTERNAL_addMetadataAction$$SRC_APP_SYSTEMS_SYSTEM_METADATA_SYSTEM_METADATA_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:@@addMetadataAction␟66e216a462bc7341b9ebe35b6f505aaf6686979d␟761273550236065439:Add new Metadata Field`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_saveAction$$SRC_APP_SYSTEMS_SYSTEM_METADATA_SYSTEM_METADATA_COMPONENT_TS_______3 = goog.getMsg(" Save ");
    I18N_2 = MSG_EXTERNAL_saveAction$$SRC_APP_SYSTEMS_SYSTEM_METADATA_SYSTEM_METADATA_COMPONENT_TS_______3;
}
else {
    I18N_2 = $localize `:@@saveAction␟e6dacf5dd600076656c2000df939159471028cde␟984804248584219690: Save `;
}
function SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_ng_container_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_ng_container_6_button_1_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); return $event.stopPropagation(); })("click", function SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_ng_container_6_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.saveMetadata(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_ng_container_6_button_1_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.loading[item_r7.name])("ngIfElse", _r3);
} }
const _c4 = function () { return { class: "backoffice-trash" }; };
function SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.deleteMetadata(item_r7.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c4));
} }
const _c5 = function () { return { class: "backoffice-edit" }; };
function SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_Template_div_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r20.editMetadataDetails(item_r7); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_ng_container_6_Template, 2, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_div_7_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "settings-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("no-padding", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r8.form_map[item_r7.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r8.form_map[item_r7.name].controls.description.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.form_map[item_r7.name].controls.name.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.edited[item_r7.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r7.new);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", false);
} }
function SystemMetadataComponent_div_0_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_Template, 10, 10, "mat-expansion-panel", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.form_map[item_r7.name]);
} }
function SystemMetadataComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SystemMetadataComponent_div_0_div_3_ng_container_2_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.metadata);
} }
function SystemMetadataComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemMetadataComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.newMetadata(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SystemMetadataComponent_div_0_div_3_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.metadata && ctx_r0.metadata.length > 0)("ngIfElse", _r1);
} }
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_zoneMetadataEmpty$$SRC_APP_SYSTEMS_SYSTEM_METADATA_SYSTEM_METADATA_COMPONENT_TS__7 = goog.getMsg("No zone metadata found");
    I18N_6 = MSG_EXTERNAL_zoneMetadataEmpty$$SRC_APP_SYSTEMS_SYSTEM_METADATA_SYSTEM_METADATA_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:@@zoneMetadataEmpty␟4f7107b96342d0c3de0cf39c667c8ca2b7eee741␟7905411441108095194:No zone metadata found`;
}
function SystemMetadataComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SystemMetadataComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 21);
} }
class SystemMetadataComponent extends src_app_common_base_class__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(_dialog, _service) {
        super();
        this._dialog = _dialog;
        this._service = _service;
        /** List of metadata associated with the zone */
        this.metadata = [];
        /** Map of form field groups to metadata fields */
        this.form_map = {};
        /** Map of metadata fields to whether they have been edited */
        this.edited = {};
        /** Map of metadata properties to whether they are saving */
        this.loading = {};
    }
    get item() {
        return this._service.active_item;
    }
    validateName(name_list) {
        return (control) => {
            return name_list.indexOf(control.value) >= 0 ? { name: true } : null;
        };
    }
    ngOnInit() {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadMetadata();
        }));
    }
    newMetadata() {
        this.metadata.push({
            name: `new_field_${Math.floor(Math.random() * 999999999)}`,
            description: '',
            new: true,
            details: {},
        });
        this.generateForms();
    }
    editMetadataDetails(field) {
        const form = this.form_map[field.name];
        this._dialog.open(src_app_overlays_metadata_details_modal_metadata_details_modal_component__WEBPACK_IMPORTED_MODULE_5__["MetadataDetailsModalComponent"], {
            maxWidth: '95vw',
            data: {
                form,
            },
        });
    }
    /**
     * Delete the given metadata field
     * @param field Name of the field to remove
     */
    deleteMetadata(field) {
        const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["CONFIRM_METADATA"]), { data: {
                title: `Kill process`,
                content: `
                    <p>Are you sure you want delete the metadata property "${field}"?</p>
                `,
                icon: { type: 'icon', class: 'backoffice-trash' },
            } }));
        this.subscription('confirm', ref.componentInstance.event.subscribe((event) => {
            if (event.reason === 'done') {
                Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["removeMetadata"])(this.item.id, { name: field }).subscribe(() => {
                    Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_7__["notifySuccess"])(`Successfully removed "${field}" metadata.`);
                    this.metadata = this.metadata.filter((prop) => prop.name !== field);
                    this.generateForms();
                }, (err) => Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_7__["notifyError"])(`Error removing old "${field}" metadata. Error: ${err.response || err.message || err}`));
            }
            ref.close();
        }));
    }
    saveMetadata(field) {
        const form = this.form_map[field.name];
        form.markAllAsTouched();
        if (form.valid) {
            const value = form.value;
            this.loading[field.name] = true;
            Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["updateMetadata"])(this.item.id, Object.assign(Object.assign({}, value), { details: JSON.parse(value.details) })).subscribe((item) => {
                this.loading[field.name] = false;
                const index = this.metadata.findIndex((i) => i.name === field.name);
                this.edited[field.name] = false;
                if (field.name !== item.name) {
                    Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["removeMetadata"])(this.item.id, field)
                        .toPromise()
                        .catch((err) => Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_7__["notifyError"])(`Error removing old "${field.name}" metadata. Error: ${JSON.stringify(err.response || err.message || err)}`));
                }
                if (index >= 0) {
                    this.metadata.splice(index, 1, Object.assign(Object.assign({}, item), { new: false }));
                }
                Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_7__["notifySuccess"])(`Saved "${value.name}" metadata.`);
                this.generateForms();
            }, (err) => {
                this.loading[field.name] = false;
                Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_7__["notifyError"])(`Error saving "${value.name}" metadata. Error: ${JSON.stringify(err.response || err.message || err)}`);
            });
        }
        else {
            Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_7__["notifyError"])(`JSON for property "${form.controls.name.value}" is invalid`);
        }
    }
    generateForms() {
        delete this.form_map;
        this.form_map = {};
        this.metadata.forEach((group) => {
            this.form_map[group.name] = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](group.name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    this.validateName(this.metadata.filter((i) => i.name !== group.name).map((i) => i.name)),
                ]),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](group.name),
                editors: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](group.editors),
                details: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](JSON.stringify(group.details || {}, undefined, 4), [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    src_app_common_validation__WEBPACK_IMPORTED_MODULE_4__["validateJSONString"],
                ]),
            });
            this.subscription(`${group.name}_name`, this.form_map[group.name].controls.name.valueChanges.subscribe(() => (this.edited[group.name] = true)));
            this.subscription(`${group.name}_description`, this.form_map[group.name].controls.description.valueChanges.subscribe(() => (this.edited[group.name] = true)));
            this.subscription(`${group.name}_details`, this.form_map[group.name].controls.details.valueChanges.subscribe(() => (this.edited[group.name] = true)));
        });
    }
    loadMetadata() {
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["showMetadata"])(this.item.id).subscribe((map) => {
            this.metadata = Object.keys(map).map((key) => map[key]);
            this.generateForms();
        });
    }
}
SystemMetadataComponent.ɵfac = function SystemMetadataComponent_Factory(t) { return new (t || SystemMetadataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_item_service__WEBPACK_IMPORTED_MODULE_9__["ActiveItemService"])); };
SystemMetadataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SystemMetadataComponent, selectors: [["system-metadata"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 1, consts: [["class", "container", 4, "ngIf"], ["empty_state", ""], ["load_state", ""], [1, "container"], ["mat-button", "", 3, "click"], ["class", "list", 4, "ngIf", "ngIfElse"], [1, "list"], [4, "ngFor", "ngForOf"], [3, "no-padding", "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "text", 3, "matTooltip", "click"], [3, "icon"], [4, "ngIf"], ["class", "contents", 4, "ngIf"], [1, "settings"], ["formControlName", "details", "lang", "json", 3, "readonly"], ["mat-button", "", 3, "click", 4, "ngIf", "ngIfElse"], [1, "contents"], ["mat-icon-button", "", 3, "click"], [1, "info-block"], [1, "text"], ["diameter", "32"]], template: function SystemMetadataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SystemMetadataComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SystemMetadataComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SystemMetadataComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelTitle"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__["IconComponent"], _ui_custom_fields_settings_field_settings_field_component__WEBPACK_IMPORTED_MODULE_15__["SettingsFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.text[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n.text[_ngcontent-%COMP%]:hover   app-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.list[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n}\nmat-panel-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 1.2em;\n  overflow: visible;\n}\nmat-panel-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  background: none;\n  border: none;\n  text-decoration: underline;\n  color: inherit;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3em;\n}\n.settings[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30.35em;\n}\n.contents[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  flex: 1;\n  min-width: 2em;\n}\n.contents[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9zeXN0ZW1zL3N5c3RlbS1tZXRhZGF0YS9zeXN0ZW0tbWV0YWRhdGEuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBcUNBOztjQUFBO0FBWUE7O2VBQUE7QUFPQTs7ZUFBQTtBQWdCQTs7c0JBQUE7QUN2RUE7RUFDSSxZQUFBO0FBY0o7QUFYQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQWNKO0FBWkk7RUFDSSxVQUFBO0VBQ0EseUJBQUE7QUFjUjtBQVZRO0VBQ0ksVUFBQTtBQVlaO0FBUEE7RUFDSSxpQkFBQTtBQVVKO0FBUEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFVSjtBQVJJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUFVUjtBQU5BO0VBQ0ksV0FBQTtBQVNKO0FBTkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQVNKO0FBTkE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtBQVNKO0FBUkk7RUFDSSxxQkFBQTtBQVVSIiwiZmlsZSI6InNyYy9hcHAvc3lzdGVtcy9zeXN0ZW0tbWV0YWRhdGEvc3lzdGVtLW1ldGFkYXRhLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzRjYWY1MDtcbiRzdWNjZXNzLWxpZ2h0OiAjNjZiYjZhO1xuJHN1Y2Nlc3MtZGFyazogIzAwNzk2YjtcblxuJHBlbmRpbmc6ICNmZjhmMDA7XG4kcGVuZGluZy1saWdodDogI2ZmYzA0NjtcbiRwZW5kaW5nLWRhcms6ICNjNTYwMDA7XG5cbiRlcnJvcjogI2Y0NDMzNjtcbiRlcnJvci1saWdodDogI2ZmNmY2MDtcbiRlcnJvci1kYXJrOiAjYWIwMDBkO1xuXG4kY29sb3ItcHJpbWFyeTogI0M5MjM2NjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiAjY2Q1NjhhO1xuJGNvbG9yLXByaW1hcnktZGFyazogI2I2MDA1ZDtcblxuJGNvbG9yLXNlY29uZGFyeTogIzVDNjRGRjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6ICM3MjcyZTc7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6ICM1NTU3ZDE7XG5cbiRjb2xvci1kZXZlbG9wOiAjZjBmMGYwO1xuJGNvbG9yLWRldmVsb3AtbGlnaHQ6ICNmZmY7XG4kY29sb3ItZGV2ZWxvcC1kYXJrOiAjZTBlMGUwO1xuXG4kYmFja2dyb3VuZDogIzI2MzIzODtcbiRiYWNrZ3JvdW5kLWxpZ2h0OiAjNDU1YTY0O1xuJGJhY2tncm91bmQtZGFyazogIzIwMjYzMjtcblxuJGhlYWRlci1jb2xvcjogIzBBMEQyRTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlJvYm90b1wiLCBcIlZlcmRhbmFcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiWW91bmdcIiwgJGZvbnQ7XG4kbW9uby1mb250OiBcIkZpcmEgQ29kZVwiLCBtb25vc3BhY2U7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09KlxcXG58fCAgIFNpemluZyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWhlaWdodDogNGVtO1xuXG5cbi8qPT09PT09PT09PT09KlxcXG58fCAgIE1peGlucyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRkZXB0aDogMSwgJHNwcmVhZDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgKDFweCAqICRzcHJlYWQpICgzcHggKiAkc3ByZWFkKSAwIHJnYmEoIzAwMCwgLjIgKiAkZGVwdGgpLFxuICAgICAgICAgICAgICAgIDAgKDFweCAqICRzcHJlYWQpICgxcHggKiAkc3ByZWFkKSAwIHJnYmEoIzAwMCwgLjE0ICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgycHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgLSgxcHggKiAkc3ByZWFkKSByZ2JhKCMwMDAsIC4xMiAqICRkZXB0aCk7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMWVtO1xufVxuXG4udGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYXBwLWljb24ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICBhcHAtaWNvbiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubGlzdCB7XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG59XG5cbm1hdC1wYW5lbC10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMS4yZW07XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG5cbiAgICBidXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgICBoZWlnaHQ6IDNlbTtcbn1cblxuLnNldHRpbmdzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwLjM1ZW07XG59XG5cbi5jb250ZW50cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAyZW07XG4gICAgYnV0dG9uIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemMetadataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'system-metadata',
                templateUrl: './system-metadata.template.html',
                styleUrls: ['./system-metadata.styles.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }, { type: src_app_common_item_service__WEBPACK_IMPORTED_MODULE_9__["ActiveItemService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/systems/system-modules/system-modules.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/systems/system-modules/system-modules.component.ts ***!
  \********************************************************************/
/*! exports provided: SystemModulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemModulesComponent", function() { return SystemModulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/esm/index.js");
/* harmony import */ var src_app_common_base_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/base.class */ "./src/app/common/base.class.ts");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var src_app_overlays_view_module_state_view_module_state_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/overlays/view-module-state/view-module-state.component */ "./src/app/overlays/view-module-state/view-module-state.component.ts");
/* harmony import */ var src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/overlays/item-modal/item-modal.component */ "./src/app/overlays/item-modal/item-modal.component.ts");
/* harmony import */ var src_app_overlays_view_response_modal_view_response_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/overlays/view-response-modal/view-response-modal.component */ "./src/app/overlays/view-response-modal/view-response-modal.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_common_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common/notifications */ "./src/app/common/notifications.ts");
/* harmony import */ var src_app_common_item_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common/item.service */ "./src/app/common/item.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_common_debug_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/common/debug.service */ "./src/app/common/debug.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ui_custom_fields_item_search_field_item_search_field_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/custom-fields/item-search-field/item-search-field.component */ "./src/app/ui/custom-fields/item-search-field/item-search-field.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _ui_custom_fields_system_exec_field_system_exec_field_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ui/custom-fields/system-exec-field/system-exec-field.component */ "./src/app/ui/custom-fields/system-exec-field/system-exec-field.component.ts");
/* harmony import */ var _ui_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ui/context-menu/context-menu.component */ "./src/app/ui/context-menu/context-menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../ui/icon/icon.component */ "./src/app/ui/icon/icon.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _ui_binding_binding_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../ui/binding/binding.directive */ "./src/app/ui/binding/binding.directive.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");





























var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_addExistingAction$$SRC_APP_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS__1 = goog.getMsg(" Add existing ");
    I18N_0 = MSG_EXTERNAL_addExistingAction$$SRC_APP_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:@@addExistingAction␟e03814486fe2ec3ed315060ae27c4ccec0380c00␟4096041993839955424: Add existing `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_newAction$$SRC_APP_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS__3 = goog.getMsg("Add new");
    I18N_2 = MSG_EXTERNAL_newAction$$SRC_APP_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:@@newAction␟52cb3a1dbc20365867f39819932e43d19542474d␟4948407374074297419:Add new`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_moduleListHeader$$SRC_APP_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS__5 = goog.getMsg("Module List");
    I18N_4 = MSG_EXTERNAL_moduleListHeader$$SRC_APP_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:@@moduleListHeader␟d6444eff6432d536c4d50ba42a33099ce5f7088b␟8179099976175023415:Module List`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_execHeader$$SRC_APP_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS___7 = goog.getMsg("Execute command");
    I18N_6 = MSG_EXTERNAL_execHeader$$SRC_APP_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS___7;
}
else {
    I18N_6 = $localize `:@@execHeader␟35f05bbd8314aa4af70300d377f1c64c8128207c␟8077695877143433436:Execute command`;
}
function SystemModulesComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "system-exec-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("system", ctx_r1.item)("refresh", ctx_r1.refresh_modules);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_moduleStateLabel$$SRC_APP_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS____9 = goog.getMsg("State");
    I18N_8 = MSG_EXTERNAL_moduleStateLabel$$SRC_APP_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS____9;
}
else {
    I18N_8 = $localize `:@@moduleStateLabel␟873b72903b1858a9cd6c8967521030b4d7d1435b␟5911214550882917183:State`;
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_moduleNameLabel$$SRC_APP_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS____11 = goog.getMsg("Name");
    I18N_10 = MSG_EXTERNAL_moduleNameLabel$$SRC_APP_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS____11;
}
else {
    I18N_10 = $localize `:@@moduleNameLabel␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
}
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_moduleClassLabel$$SRC_APP_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS____13 = goog.getMsg("Class");
    I18N_12 = MSG_EXTERNAL_moduleClassLabel$$SRC_APP_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS____13;
}
else {
    I18N_12 = $localize `:@@moduleClassLabel␟f60c6c571ed1e6266976ca261a2b2d0ebaa16c6e␟4378796785985219718:Class`;
}
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_moduleIpLabel$$SRC_APP_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS____15 = goog.getMsg("IP/URI");
    I18N_14 = MSG_EXTERNAL_moduleIpLabel$$SRC_APP_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS____15;
}
else {
    I18N_14 = $localize `:@@moduleIpLabel␟2217451678c314dac35bbb2eb4f0e378dc6489b4␟3770692832990652705:IP/URI`;
}
function SystemModulesComponent_div_0_ng_container_12_table_1_tr_13_i_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("modelChange", function SystemModulesComponent_div_0_ng_container_12_table_1_tr_13_i_5_Template_i_modelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const device_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return device_r8.connected = $event; })("modelChange", function SystemModulesComponent_div_0_ng_container_12_table_1_tr_13_i_5_Template_i_modelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r17.refresh_modules = !ctx_r17.refresh_modules; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("model", device_r8.connected)("sys", ctx_r9.item.id)("mod", ctx_r9.device_classes[device_r8.id]);
} }
function SystemModulesComponent_div_0_ng_container_12_table_1_tr_13_i_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 38);
} }
function SystemModulesComponent_div_0_ng_container_12_table_1_tr_13_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemModulesComponent_div_0_ng_container_12_table_1_tr_13_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const item_r19 = ctx.$implicit; const device_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r20.handleContextEvent(item_r19, device_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", item_r19.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r19.name);
} }
function SystemModulesComponent_div_0_ng_container_12_table_1_tr_13_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 41);
} }
const _c16 = function (a1) { return ["/modules", a1]; };
const _c17 = function () { return { class: "backoffice-edit" }; };
const _c18 = function () { return { class: "backoffice-dots-three-vertical" }; };
function SystemModulesComponent_div_0_ng_container_12_table_1_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextAction", function SystemModulesComponent_div_0_ng_container_12_table_1_tr_13_Template_tr_contextAction_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const device_r8 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r23.handleContextEvent($event, device_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SystemModulesComponent_div_0_ng_container_12_table_1_tr_13_i_5_Template, 1, 3, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemModulesComponent_div_0_ng_container_12_table_1_tr_13_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const device_r8 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r25.power(device_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function SystemModulesComponent_div_0_ng_container_12_table_1_tr_13_Template_a_contextmenu_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SystemModulesComponent_div_0_ng_container_12_table_1_tr_13_Template_mat_checkbox_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const device_r8 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r27.toggleDebugEvents(device_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SystemModulesComponent_div_0_ng_container_12_table_1_tr_13_i_15_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemModulesComponent_div_0_ng_container_12_table_1_tr_13_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const device_r8 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r28.editModule(device_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "app-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "app-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-menu", null, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SystemModulesComponent_div_0_ng_container_12_table_1_tr_13_button_25_Template, 4, 2, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SystemModulesComponent_div_0_ng_container_12_table_1_tr_13_td_26_Template, 1, 0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r8 = ctx.$implicit;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("context-menu", _r11)("offset_y", 0 - 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r8 && ctx_r7.item.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", device_r8.running && !!device_r8.connected)("inactive", device_r8.running && !device_r8.connected)("black", !device_r8.running);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c16, device_r8.id))("matTooltip", device_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((device_r8.driver == null ? null : device_r8.driver.name) || "<Unnamed>");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r7.debugged_modules[device_r8.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.device_classes[device_r8.id], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r8.tls);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", device_r8.ip ? (device_r8.tls ? "https://" : "http://") + device_r8.ip : device_r8.uri, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](device_r8.ip || device_r8.uri);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c17));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c18));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", device_r8.running ? ctx_r7.menu_options : ctx_r7.offline_options);
} }
const _c19 = function () { return []; };
function SystemModulesComponent_div_0_ng_container_12_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, I18N_10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, I18N_12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](10, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tbody", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function SystemModulesComponent_div_0_ng_container_12_table_1_Template_tbody_cdkDropListDropped_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r29.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SystemModulesComponent_div_0_ng_container_12_table_1_tr_13_Template, 27, 25, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.devices || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c19));
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_moduleListEmpty$$SRC_APP_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS____21 = goog.getMsg("No devices for system");
    I18N_20 = MSG_EXTERNAL_moduleListEmpty$$SRC_APP_SYSTEMS_SYSTEM_MODULES_SYSTEM_MODULES_COMPONENT_TS____21;
}
else {
    I18N_20 = $localize `:@@moduleListEmpty␟9836797cbe920e8e21cad7119e531cf1a762f4f1␟3944265689033175665:No devices for system`;
}
function SystemModulesComponent_div_0_ng_container_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, I18N_20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SystemModulesComponent_div_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SystemModulesComponent_div_0_ng_container_12_table_1_Template, 14, 2, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SystemModulesComponent_div_0_ng_container_12_div_2_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.devices && ctx_r2.devices.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.devices || ctx_r2.devices.length <= 0);
} }
function SystemModulesComponent_div_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading modules...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 48);
} }
function SystemModulesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "item-search-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemModulesComponent_div_0_Template_item_search_field_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.new_module = $event.id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemModulesComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.addModule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemModulesComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.newModule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](7, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SystemModulesComponent_div_0_ng_container_8_Template, 5, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](11, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SystemModulesComponent_div_0_ng_container_12_Template, 3, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SystemModulesComponent_div_0_ng_template_13_Template, 4, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("query_fn", ctx_r0.query_fn)("exclude", ctx_r0.exclude_fn)("ngModel", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.new_module);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.id && ctx_r0.item.modules && !ctx_r0.hide_exec);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.loading)("ngIfElse", _r3);
} }
class SystemModulesComponent extends src_app_common_base_class__WEBPACK_IMPORTED_MODULE_4__["BaseClass"] {
    constructor(_service, _dialog, _debug_service) {
        super();
        this._service = _service;
        this._dialog = _dialog;
        this._debug_service = _debug_service;
        /** Mapping of devices to the module bindings */
        this.device_classes = {};
        /** Whether a device should be listened to */
        this.device_listener = {};
        this.loading = false;
        /** Actions available for the context menu */
        this.menu_options = [
            {
                id: 'power',
                name: 'Toggle Power',
                icon: { type: 'icon', class: 'backoffice-power-plug' },
            },
            { id: 'state', name: 'View State', icon: { type: 'icon', class: 'backoffice-eye' } },
            { id: 'reload', name: 'Recompile Driver', icon: { type: 'icon', class: 'backoffice-cw' } },
            { id: 'edit', name: 'Edit Module', icon: { type: 'icon', class: 'backoffice-edit' } },
            { id: 'remove', name: 'Remove Module', icon: { type: 'icon', class: 'backoffice-trash' } },
            {
                id: 'load',
                name: 'Load Module',
                icon: { type: 'icon', class: 'backoffice-arrow-with-circle-up' },
            },
        ];
        this.offline_options = [
            {
                id: 'power',
                name: 'Toggle Power',
                icon: { type: 'icon', class: 'backoffice-power-plug' },
            },
            { id: 'edit', name: 'Edit Module', icon: { type: 'icon', class: 'backoffice-edit' } },
            { id: 'remove', name: 'Remove Module', icon: { type: 'icon', class: 'backoffice-trash' } },
            {
                id: 'load',
                name: 'Load Module',
                icon: { type: 'icon', class: 'backoffice-arrow-with-circle-up' },
            },
        ];
        /** Query method for modules */
        this.query_fn = (_) => Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["queryModules"])({ q: _ }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(_ => _.data));
        /** Function for excluding modules already within this system */
        this.exclude_fn = (item) => item.control_system_id === this.item.id || item.role === _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["PlaceDriverRole"].Logic;
    }
    get item() {
        return this._service.active_item;
    }
    /** Map of modules to whether they are listening for debug messages */
    get debugged_modules() {
        return this.devices.reduce((map, device) => {
            map[device.id] = this._debug_service.isListening(device);
            return map;
        }, {});
    }
    ngOnInit() {
        this.loading = true;
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadModules();
        }));
    }
    /**
     * Load the modules for the active system
     * @param offset Offset to load
     */
    loadModules(offset = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.item) {
                return;
            }
            this.loading = true;
            const module_list = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["queryModules"])({
                control_system_id: this.item.id,
                complete: true,
                offset,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])((resp) => resp.data))
                .toPromise();
            if (module_list) {
                module_list.sort((a, b) => this.item.modules.indexOf(a.id) - this.item.modules.indexOf(b.id));
                this.devices = module_list;
                this.generateModuleBindings();
            }
            this.loading = false;
        });
    }
    /**
     * Handle context menu event
     * @param event Event posted by the context menu
     * @param device Module associated with the context menu event
     */
    handleContextEvent(event, device) {
        if (event) {
            switch (event.id) {
                case 'power':
                    this.power(device);
                    break;
                case 'state':
                    this.viewState(device);
                    break;
                case 'reload':
                    this.reloadModule(device);
                    break;
                case 'remove':
                    this.remove(device);
                    break;
                case 'load':
                    this.loadModule(device);
                    break;
                case 'edit':
                    this.editModule(device);
                    break;
            }
        }
    }
    /**
     * Toggle the power state
     * @param device Module to toggle the power state
     */
    power(device) {
        this.hide_exec = true;
        if (device.running) {
            Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["stopModule"])(device.id)
                .toPromise()
                .then(() => {
                this.hide_exec = false;
                Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_10__["notifySuccess"])('Module successfully stopped');
                device.running = false;
                this.refresh_modules = !this.refresh_modules;
            }, (err) => {
                this.hide_exec = false;
                if (typeof err === 'string' && err.length < 64) {
                    Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_10__["notifyError"])(err);
                }
                else {
                    Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_10__["notifyError"])(`Failed to stop module '${device.id}'.\nView Error?`, 'View', () => this.viewDetails(err));
                }
            });
        }
        else {
            Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["startModule"])(device.id)
                .toPromise()
                .then(() => {
                this.hide_exec = false;
                Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_10__["notifySuccess"])('Module successfully started');
                device.running = true;
                this.refresh_modules = !this.refresh_modules;
            }, (err) => {
                this.hide_exec = false;
                if (typeof err === 'string' && err.length < 64) {
                    Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_10__["notifyError"])(err);
                }
                else {
                    Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_10__["notifyError"])(`Failed to start module '${device.id}'.\nView Error?`, 'View', () => this.viewDetails(err));
                }
            });
        }
    }
    /**
     * Update the state of the module
     * @param device Module to reload
     */
    reload(device) {
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["showModule"])(device.id)
            .toPromise()
            .then((item) => {
            for (const k in item) {
                if (item.hasOwnProperty(k)) {
                    device[k] = item[k];
                }
            }
        }, () => null);
    }
    viewState(device) {
        this._dialog.open(src_app_overlays_view_module_state_view_module_state_component__WEBPACK_IMPORTED_MODULE_6__["ViewModuleStateModalComponent"], { data: { system: this.item, module: device, devices: this.devices } });
    }
    reloadModule(device) {
        const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["CONFIRM_METADATA"]), { data: {
                title: 'Recompile module?',
                content: `New driver code will be loaded and the device settings will be reloaded.`,
                icon: { type: 'icon', class: 'backoffice-install' },
            } }));
        this.subscription('confirm_ref', ref.componentInstance.event.subscribe((e) => {
            var _a;
            if (e.reason === 'done') {
                Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["recompileDriver"])(((_a = device.driver) === null || _a === void 0 ? void 0 : _a.id) || device.driver_id)
                    .toPromise()
                    .then((_) => Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_10__["notifySuccess"])('Driver successfully recompiled.'), (err) => Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_10__["notifyError"])(JSON.stringify(err.response || err.message || err)));
                ref.close();
                this.unsub('confirm_ref');
            }
        }));
    }
    loadModule(device) {
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["loadModule"])(device.id)
            .toPromise()
            .then(() => Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_10__["notifySuccess"])(`Successfully loaded module "${device.name || device.id}"`), (err) => Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_10__["notifyError"])(`Error loading module. Error: ${JSON.stringify(err.response || err.message || err)}`));
    }
    editModule(device) {
        const ref = this._dialog.open(src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_7__["ItemCreateUpdateModalComponent"], {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: device,
                name: 'Module',
                save: (item) => Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["updateModule"])(item.id, item),
            },
        });
        this.subscription('edit_module', ref.componentInstance.event.subscribe((event) => {
            if (event.reason === 'done' && event.metadata) {
                this.devices.splice(this.devices.findIndex((d) => d.id === device.id), 1, event.metadata.item);
                this.generateModuleBindings();
            }
        }));
        ref.afterClosed().subscribe(() => {
            this.unsub('modal_events');
        });
    }
    /** View Results of the execute */
    viewDetails(content) {
        this._dialog.open(src_app_overlays_view_response_modal_view_response_modal_component__WEBPACK_IMPORTED_MODULE_8__["ViewResponseModalComponent"], {
            data: { content },
        });
    }
    /**
     * Handle drop event for reordering the devices
     * @param event Drag drop details
     */
    drop(event) {
        if (event && event.previousIndex !== event.currentIndex) {
            const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["CONFIRM_METADATA"]), { data: {
                    title: 'Change order?',
                    content: `Are you sure you want to change the module priority?<br>Settings will be updated immediately for the system.`,
                    icon: { type: 'icon', class: 'backoffice-layers' },
                } }));
            this.subscription('confirm_ref', ref.componentInstance.event.subscribe((e) => {
                if (e.reason === 'done') {
                    this.hide_exec = true;
                    ref.componentInstance.loading = 'Updating module order...';
                    const list = [...this.item.modules];
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(list, event.previousIndex, event.currentIndex);
                    Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["updateSystem"])(this.item.id, Object.assign(Object.assign({}, this.item.toJSON()), { modules: list }))
                        .toPromise()
                        .then(() => {
                        this.hide_exec = false;
                        ref.close();
                        this.unsub('confirm_ref');
                    }, (err) => {
                        this.hide_exec = false;
                        ref.componentInstance.loading = null;
                        Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_10__["notifyError"])(`Error reording modules. Error: ${JSON.stringify(err.response || err.message || err)}`);
                    });
                }
            }));
        }
    }
    remove(device) {
        const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["CONFIRM_METADATA"]), { data: {
                title: 'Remove module?',
                content: `Remove ${device.driver_id} from this system?<br>If this is not used elsewhere the associated data will be removed immediately.`,
                icon: { type: 'icon', class: 'backoffice-trash' },
            } }));
        this.subscription('confirm_ref', ref.componentInstance.event.subscribe((e) => {
            if (e.reason === 'done') {
                this.hide_exec = true;
                Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["removeSystemModule"])(this.item.id, device.id)
                    .toPromise()
                    .then((item) => {
                    this.hide_exec = false;
                    if (item instanceof _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["PlaceSystem"]) {
                        this._service.replaceItem(item);
                    }
                    Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_10__["notifySuccess"])('Succefully removed module.');
                    this.devices.splice(this.devices.indexOf(device), 1);
                    ref.close();
                    this.unsub('confirm_ref');
                }, (err) => {
                    this.hide_exec = false;
                    Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_10__["notifyError"])(`Error removing module. Error: ${JSON.stringify(err.response || err.message || err)}`);
                    ref.close();
                    this.unsub('confirm_ref');
                });
            }
        }));
    }
    newModule() {
        const ref = this._dialog.open(src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_7__["ItemCreateUpdateModalComponent"], {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["PlaceModule"]({
                    control_system_id: this.item.id,
                    control_system: this.item,
                }),
                name: 'Module',
                save: (item) => Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["addModule"])(item),
                readonly: true,
            },
        });
        this.subscription('modal_events', ref.componentInstance.event.subscribe((event) => {
            if (event.reason === 'done') {
                this.hide_exec = true;
                Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["addSystemModule"])(this.item.id, event.metadata.item.id)
                    .toPromise()
                    .then((item) => {
                    this.hide_exec = false;
                    this._service.replaceItem(item);
                    this.timeout('reload_module_list', () => this.loadModules(), 1000);
                }, (err) => {
                    this.hide_exec = false;
                });
            }
        }));
        ref.afterClosed().subscribe(() => {
            this.unsub('modal_events');
        });
    }
    addModule() {
        if (this.new_module) {
            this.joinModule(this.new_module);
            this.new_module = '';
        }
    }
    joinModule(id) {
        const mod_list = [...this.item.modules];
        if (mod_list.indexOf(id) < 0) {
            mod_list.push(id);
        }
        this.hide_exec = true;
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["addSystemModule"])(this.item.id, id)
            .toPromise()
            .then((item) => {
            this.hide_exec = false;
            this._service.replaceItem(item);
            Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_10__["notifySuccess"])('Successfully added device to system');
            this.loadModules();
        }, () => {
            this.hide_exec = false;
            Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_10__["notifyError"])('Failed to add module to system');
        });
    }
    /**
     * Toggle debug events for a device
     * @param device Module to listen to debug events for
     */
    toggleDebugEvents(device) {
        if (!device) {
            return;
        }
        if (this._debug_service.isListening(device)) {
            this._debug_service.unbind(device);
        }
        else {
            this._debug_service.bind(device, this.device_classes[device.id]);
        }
    }
    /**
     * Generate the binding modules for each device
     */
    generateModuleBindings() {
        const counter = {};
        for (const device of this.devices) {
            const name = device.custom_name || device.name || 'Blank';
            if (!counter[name]) {
                counter[name] = 0;
            }
            this.device_classes[device.id] = `${name}_${++counter[name]}`;
        }
    }
}
SystemModulesComponent.ɵfac = function SystemModulesComponent_Factory(t) { return new (t || SystemModulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_item_service__WEBPACK_IMPORTED_MODULE_11__["ActiveItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_debug_service__WEBPACK_IMPORTED_MODULE_13__["PlaceDebugService"])); };
SystemModulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SystemModulesComponent, selectors: [["system-modules"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "select"], [1, "dropdown"], ["name", "module", 3, "query_fn", "exclude", "ngModel", "ngModelChange"], ["mat-button", "", 3, "disabled", "click"], ["mat-button", "", 3, "click"], [4, "ngIf"], [1, "device-list"], [4, "ngIf", "ngIfElse"], ["load_state", ""], [1, "exec"], [3, "system", "refresh"], ["class", "info-block", 4, "ngIf"], [1, "small"], [1, "name"], [1, "module"], [1, "ip"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["cdkDrag", "", 3, "context-menu", "offset_y", "contextAction", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 3, "context-menu", "offset_y", "contextAction"], ["cdkDragHandle", "", 1, "action", "grab"], [1, "backoffice-select-arrows"], ["binding", "", "bind", "connected", 3, "model", "sys", "mod", "modelChange", 4, "ngIf"], [1, "state", 3, "click"], ["routerLinkActive", "router-link-active", 3, "routerLink", "matTooltip", "contextmenu"], [3, "checked", "change"], [1, "lock"], ["class", "backoffice-lock", 4, "ngIf"], [3, "href"], ["touchrelease", "", 1, "duo"], ["mat-icon-button", "", 3, "click"], [3, "icon"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["class", "placeholder", "colspan", "6", 4, "cdkDragPlaceholder"], ["binding", "", "bind", "connected", 3, "model", "sys", "mod", "modelChange"], [1, "backoffice-lock"], ["mat-menu-item", "", 3, "click"], [1, "text"], ["colspan", "6", 1, "placeholder"], [1, "info-block"], [1, "info-block", "center"], [3, "diameter"]], template: function SystemModulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SystemModulesComponent_div_0_Template, 15, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ui_custom_fields_item_search_field_item_search_field_component__WEBPACK_IMPORTED_MODULE_15__["ItemSearchFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _ui_custom_fields_system_exec_field_system_exec_field_component__WEBPACK_IMPORTED_MODULE_18__["SystemExecFieldComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], _ui_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_19__["ContextMenuComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDragHandle"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkActive"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltip"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckbox"], _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_23__["IconComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["_MatMenu"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDragPlaceholder"], _ui_binding_binding_directive__WEBPACK_IMPORTED_MODULE_25__["BindingDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuItem"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatSpinner"]], styles: [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  top: 4em;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n}\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 1.2em;\n  max-width: 5em;\n  margin: 0;\n}\n.dropdown[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 3.25em;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.duo[_ngcontent-%COMP%] {\n  width: 7em;\n}\n.table-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 5em;\n}\n.table-row[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%] {\n  width: 10em;\n  min-width: 7em;\n}\n.placeholder[_ngcontent-%COMP%] {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 3em;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.device-list[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 8em;\n  overflow: auto;\n  padding: 0 1em;\n}\nh3[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n}\n.exec[_ngcontent-%COMP%] {\n  padding: 0 1em;\n}\n.lock[_ngcontent-%COMP%] {\n  height: 1.2em;\n  width: 1.2em;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.state[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin: 0.25em;\n  background-color: #000;\n  border-radius: 0.8em;\n  transition: margin 250ms, height 250ms, width 250ms, background-color 300ms;\n}\n.state.inactive[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.state.active[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  height: 8px;\n  width: 8px;\n  margin: 8px;\n}\n.state.black[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n.terminal[_ngcontent-%COMP%] {\n  padding-top: 0.5em;\n}\n.select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5em 1em 0;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .select[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .select[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .select[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .select[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 0.25em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 0.25em;\n    flex: 1;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 0.25em;\n    flex: 1;\n  }\n}\n.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n    margin-left: 0;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n    margin-left: 0;\n  }\n}\n.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.grab[_ngcontent-%COMP%] {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.placeholder[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.1);\n  border: 4px dashed rgba(0, 0, 0, 0.6);\n  height: 2em;\n}\n.mat-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1em;\n}\n.mat-menu-item[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.mat-menu-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n  margin-left: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9zeXN0ZW1zL3N5c3RlbS1tb2R1bGVzL3N5c3RlbS1tb2R1bGVzLnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQXFDQTs7Y0FBQTtBQVlBOztlQUFBO0FBT0E7O2VBQUE7QUFnQkE7O3NCQUFBO0FDdkVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFjSjtBQVhBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFjSjtBQVhBO0VBQ0ksT0FBQTtFQUNBLGNBQUE7QUFjSjtBQVhBO0VBQ0ksT0FBQTtBQWNKO0FBWEE7RUFDSSxVQUFBO0FBY0o7QUFWSTtFQUNJLE9BQUE7RUFDQSxVQUFBO0FBYVI7QUFWSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBWVI7QUFSQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0RBQUE7QUFXSjtBQVJBO0VBQ0ksT0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQVdKO0FBUkE7RUFDSSxlQUFBO0FBV0o7QUFSQTtFQUNJLGNBQUE7QUFXSjtBQVJBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFXSjtBQVJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJFQUFBO0FBV0o7QUFUSTtFQUNJLHlCRHBFQTtBQytFUjtBQVJJO0VBQ0kseUJEaEZFO0VDaUZGLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQVVSO0FBUEk7RUFDSSxzQkFBQTtBQVNSO0FBTEE7RUFDSSxrQkFBQTtBQVFKO0FBTEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBUUo7QUQ1QlE7RUNnQlI7SUFPUSxlQUFBO0VBU047QUFDRjtBRDlCUTtFQ2FSO0lBT1EsZUFBQTtFQWNOO0FBQ0Y7QUR0Q1E7RUMwQko7SUFFUSxlQUFBO0VBY1Y7QUFDRjtBRHhDUTtFQ3VCSjtJQUVRLGVBQUE7RUFtQlY7QUFDRjtBQWhCSTtFQUNJLGdCQUFBO0FBa0JSO0FEbkRRO0VDZ0NKO0lBR1EsY0FBQTtJQUNBLE9BQUE7RUFvQlY7QUFDRjtBRHREUTtFQzZCSjtJQUdRLGNBQUE7SUFDQSxPQUFBO0VBMEJWO0FBQ0Y7QUF6QlE7RUFDSSxjQUFBO0FBMkJaO0FEbEVRO0VDeUNBO0lBRVEsY0FBQTtFQTJCZDtBQUNGO0FEcEVRO0VDc0NBO0lBRVEsY0FBQTtFQWdDZDtBQUNGO0FBOUJRO0VBQ0ksZUFBQTtBQWdDWjtBQTNCQTtFQUNJLG9CQUFBO0VBQUEsWUFBQTtBQThCSjtBQTNCQTtFQUNJLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0FBOEJKO0FBM0JBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBOEJKO0FBNUJJO0VBQ0ksZ0JBQUE7QUE4QlI7QUEzQkk7RUFDSSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBNkJSIiwiZmlsZSI6InNyYy9hcHAvc3lzdGVtcy9zeXN0ZW0tbW9kdWxlcy9zeXN0ZW0tbW9kdWxlcy5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0Y2FmNTA7XG4kc3VjY2Vzcy1saWdodDogIzY2YmI2YTtcbiRzdWNjZXNzLWRhcms6ICMwMDc5NmI7XG5cbiRwZW5kaW5nOiAjZmY4ZjAwO1xuJHBlbmRpbmctbGlnaHQ6ICNmZmMwNDY7XG4kcGVuZGluZy1kYXJrOiAjYzU2MDAwO1xuXG4kZXJyb3I6ICNmNDQzMzY7XG4kZXJyb3ItbGlnaHQ6ICNmZjZmNjA7XG4kZXJyb3ItZGFyazogI2FiMDAwZDtcblxuJGNvbG9yLXByaW1hcnk6ICNDOTIzNjY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogI2NkNTY4YTtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICNiNjAwNWQ7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM1QzY0RkY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiAjNzI3MmU3O1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiAjNTU1N2QxO1xuXG4kY29sb3ItZGV2ZWxvcDogI2YwZjBmMDtcbiRjb2xvci1kZXZlbG9wLWxpZ2h0OiAjZmZmO1xuJGNvbG9yLWRldmVsb3AtZGFyazogI2UwZTBlMDtcblxuJGJhY2tncm91bmQ6ICMyNjMyMzg7XG4kYmFja2dyb3VuZC1saWdodDogIzQ1NWE2NDtcbiRiYWNrZ3JvdW5kLWRhcms6ICMyMDI2MzI7XG5cbiRoZWFkZXItY29sb3I6ICMwQTBEMkU7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJSb2JvdG9cIiwgXCJWZXJkYW5hXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIllvdW5nXCIsICRmb250O1xuJG1vbm8tZm9udDogXCJGaXJhIENvZGVcIiwgbW9ub3NwYWNlO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBTaXppbmcgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcblxuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkZGVwdGg6IDEsICRzcHJlYWQ6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwICgxcHggKiAkc3ByZWFkKSAoM3B4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4yICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgxcHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4xNCAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMnB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIC0oMXB4ICogJHNwcmVhZCkgcmdiYSgjMDAwLCAuMTIgKiAkZGVwdGgpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdG9wOiA0ZW07XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBtYXgtd2lkdGg6IDVlbTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5kcm9wZG93biB7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDMuMjVlbTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICAgIGZsZXg6IDE7XG59XG5cbi5kdW8ge1xuICAgIHdpZHRoOiA3ZW07XG59XG5cbi50YWJsZS1yb3cge1xuICAgIC5uYW1lIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgd2lkdGg6IDVlbTtcbiAgICB9XG5cbiAgICAubW9kdWxlIHtcbiAgICAgICAgd2lkdGg6IDEwZW07XG4gICAgICAgIG1pbi13aWR0aDogN2VtO1xuICAgIH1cbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgIGJvcmRlcjogZG90dGVkIDNweCAjOTk5O1xuICAgIG1pbi1oZWlnaHQ6IDNlbTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5kZXZpY2UtbGlzdCB7XG4gICAgZmxleDogMTtcbiAgICBtaW4taGVpZ2h0OiA4ZW07XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZzogMCAxZW07XG59XG5cbmgzIHtcbiAgICBtYXJnaW46IDAuNWVtIDA7XG59XG5cbi5leGVjIHtcbiAgICBwYWRkaW5nOiAwIDFlbTtcbn1cblxuLmxvY2sge1xuICAgIGhlaWdodDogMS4yZW07XG4gICAgd2lkdGg6IDEuMmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdGF0ZSB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIG1hcmdpbjogMC4yNWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMC44ZW07XG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDI1MG1zLCBoZWlnaHQgMjUwbXMsIHdpZHRoIDI1MG1zLCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xuXG4gICAgJi5pbmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRlcnJvcjtcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzdWNjZXNzO1xuICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgfVxuXG4gICAgJi5ibGFjayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgfVxufVxuXG4udGVybWluYWwge1xuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcbn1cblxuLnNlbGVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IC41ZW0gMWVtIDA7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duIHtcbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMCAwLjI1ZW07XG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgICAgICBtYXJnaW46IC4yNWVtO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmdyYWIge1xuICAgIGN1cnNvcjogZ3JhYjtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsIDAuMSk7XG4gICAgYm9yZGVyOiA0cHggZGFzaGVkIHJnYmEoIzAwMCwgMC42KTtcbiAgICBoZWlnaHQ6IDJlbTtcbn1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDFlbTtcblxuICAgIGFwcC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SystemModulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'system-modules',
                templateUrl: './system-modules.template.html',
                styleUrls: ['./system-modules.styles.scss'],
            }]
    }], function () { return [{ type: src_app_common_item_service__WEBPACK_IMPORTED_MODULE_11__["ActiveItemService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] }, { type: src_app_common_debug_service__WEBPACK_IMPORTED_MODULE_13__["PlaceDebugService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/systems/system-triggers/system-triggers.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/systems/system-triggers/system-triggers.component.ts ***!
  \**********************************************************************/
/*! exports provided: SystemTriggersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemTriggersComponent", function() { return SystemTriggersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/esm/index.js");
/* harmony import */ var src_app_common_base_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/base.class */ "./src/app/common/base.class.ts");
/* harmony import */ var src_app_overlays_select_item_modal_select_item_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/overlays/select-item-modal/select-item-modal.component */ "./src/app/overlays/select-item-modal/select-item-modal.component.ts");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/overlays/item-modal/item-modal.component */ "./src/app/overlays/item-modal/item-modal.component.ts");
/* harmony import */ var src_app_common_general__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/general */ "./src/app/common/general.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_common_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/notifications */ "./src/app/common/notifications.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_common_item_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common/item.service */ "./src/app/common/item.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/icon/icon.component */ "./src/app/ui/icon/icon.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ui_binding_binding_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ui/binding/binding.directive */ "./src/app/ui/binding/binding.directive.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ui_pipes_date_from_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../ui/pipes/date-from.pipe */ "./src/app/ui/pipes/date-from.pipe.ts");























var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_addTriggerAction$$SRC_APP_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS__1 = goog.getMsg(" Add trigger ");
    I18N_0 = MSG_EXTERNAL_addTriggerAction$$SRC_APP_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:@@addTriggerAction␟53b28570603d4d42117a5591c3ded42c146c3332␟1383484828198336236: Add trigger `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_triggerTableName$$SRC_APP_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS___3 = goog.getMsg("Name");
    I18N_2 = MSG_EXTERNAL_triggerTableName$$SRC_APP_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS___3;
}
else {
    I18N_2 = $localize `:@@triggerTableName␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_triggerTableCount$$SRC_APP_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS___5 = goog.getMsg("Count");
    I18N_4 = MSG_EXTERNAL_triggerTableCount$$SRC_APP_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS___5;
}
else {
    I18N_4 = $localize `:@@triggerTableCount␟06412bce0f4fe4311193e9763666089bf9d980da␟8177873832400820695:Count`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_triggerTableErrors$$SRC_APP_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS___7 = goog.getMsg("Errors");
    I18N_6 = MSG_EXTERNAL_triggerTableErrors$$SRC_APP_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS___7;
}
else {
    I18N_6 = $localize `:@@triggerTableErrors␟402c8cec6902868ba52ba5aa3bd1f3c2bba807ba␟8157372473189397040:Errors`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_triggerTableAddedTime$$SRC_APP_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS___9 = goog.getMsg("Added");
    I18N_8 = MSG_EXTERNAL_triggerTableAddedTime$$SRC_APP_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS___9;
}
else {
    I18N_8 = $localize `:@@triggerTableAddedTime␟80e3b490720757978c99a7b5af3885faf202b955␟231679111972850796:Added`;
}
const _c10 = function (a1) { return ["/triggers", a1]; };
const _c11 = function () { return { class: "backoffice-link" }; };
const _c12 = function () { return { class: "backoffice-edit" }; };
const _c13 = function () { return { class: "backoffice-trash" }; };
function SystemTriggersComponent_div_0_table_11_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("modelChange", function SystemTriggersComponent_div_0_table_11_tr_13_Template_i_modelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const trigger_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return (ctx_r6.trigger_state[trigger_r5.id] = $event); })("modelChange", function SystemTriggersComponent_div_0_table_11_tr_13_Template_i_modelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const trigger_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r8.updateComparisons(trigger_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "dateFrom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemTriggersComponent_div_0_table_11_tr_13_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const trigger_r5 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r9.copyWebhookURL(trigger_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemTriggersComponent_div_0_table_11_tr_13_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const trigger_r5 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r10.editTrigger(trigger_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemTriggersComponent_div_0_table_11_tr_13_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const trigger_r5 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r11.deleteTrigger(trigger_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trigger_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sys", ctx_r4.item.id)("bind", trigger_r5.id)("model", ctx_r4.trigger_state[trigger_r5.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r4.comparisons[trigger_r5.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r4.trigger_state[trigger_r5.id] == null ? null : ctx_r4.trigger_state[trigger_r5.id].triggered);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c10, trigger_r5.id))("matTooltip", trigger_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](trigger_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx_r4.trigger_state[trigger_r5.id] == null ? null : ctx_r4.trigger_state[trigger_r5.id].trigger_count) || "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", "Action Errors: " + (ctx_r4.trigger_state[trigger_r5.id] == null ? null : ctx_r4.trigger_state[trigger_r5.id].action_errors) + "\nComparision Errors: " + (ctx_r4.trigger_state[trigger_r5.id] == null ? null : ctx_r4.trigger_state[trigger_r5.id].comparison_errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r4.trigger_state[trigger_r5.id] == null ? null : ctx_r4.trigger_state[trigger_r5.id].action_errors) + (ctx_r4.trigger_state[trigger_r5.id] == null ? null : ctx_r4.trigger_state[trigger_r5.id].comparison_errors) || "0", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 16, (trigger_r5.created_at - 0) * 1000));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c11));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c13));
} }
function SystemTriggersComponent_div_0_table_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](10, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SystemTriggersComponent_div_0_table_11_tr_13_Template, 22, 23, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.filtered_triggers);
} }
const _c14 = function () { return { class: "backoffice-magnifying-glass" }; };
function SystemTriggersComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemTriggersComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.selectTriggerToAdd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemTriggersComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.search_str = $event; })("ngModelChange", function SystemTriggersComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.filter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SystemTriggersComponent_div_0_table_11_Template, 14, 1, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c14));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.search_str);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.filtered_triggers.length > 0)("ngIfElse", _r1);
} }
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_triggerTableEmpty$$SRC_APP_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS__16 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" });
    I18N_15 = MSG_EXTERNAL_triggerTableEmpty$$SRC_APP_SYSTEMS_SYSTEM_TRIGGERS_SYSTEM_TRIGGERS_COMPONENT_TS__16;
}
else {
    I18N_15 = $localize `:@@triggerTableEmpty␟f42c99e29eea9ccd368cfac887ed20745a004bc6␟3828723240774653061: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
}
function SystemTriggersComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, I18N_15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nExp"](ctx_r2.search_str ? "No matching triggers" : "No triggers for system");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nApply"](2);
} }
class SystemTriggersComponent extends src_app_common_base_class__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_dialog, _service) {
        super();
        this._dialog = _dialog;
        this._service = _service;
        /** List of triggers associated with the active system */
        this.trigger_list = [];
        /** List of triggers associated with the active system */
        this.filtered_triggers = [];
        /** Mapping of trigger instances to their current state */
        this.trigger_state = {};
        /** Mapping of trigger instances to their condition state list */
        this.comparisons = {};
    }
    get item() {
        return this._service.active_item;
    }
    ngOnInit() {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadSystemTriggers();
        }));
    }
    loadSystemTriggers(offset = 0) {
        if (!this.item) {
            return;
        }
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["listSystemTriggers"])(this.item.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((resp) => resp.data))
            .subscribe((list) => {
            this.trigger_list = list;
            this.filter(this.search_str);
        }, () => null);
    }
    filter(search = '') {
        const s = search.toLowerCase();
        this.filtered_triggers = this.trigger_list.filter((item) => item.name.toLowerCase().includes(s));
    }
    updateComparisons(id) {
        this.comparisons[id] = '';
        if (this.trigger_state[id]) {
            for (const key in this.trigger_state[id].conditions) {
                if (this.trigger_state[id].conditions.hasOwnProperty(key)) {
                    if (this.comparisons[id]) {
                        this.comparisons[id] += '\n';
                    }
                    this.comparisons[id] += `${key}: ${this.trigger_state[id].conditions[key]}`;
                }
            }
        }
    }
    /** Copy the generated webhook URL for the given trigger */
    copyWebhookURL(trigger) {
        Object(src_app_common_general__WEBPACK_IMPORTED_MODULE_7__["copyToClipboard"])(`${location.origin}/api/engine/v2/webhook/${trigger.id}/notify?secret=${trigger.webhook_secret}`);
        Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_9__["notifyInfo"])('Webhook link copied to clipboard');
    }
    /**
     * Open the modal to create a new system
     */
    editTrigger(trigger) {
        if (this.item && trigger) {
            const ref = this._dialog.open(src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_6__["ItemCreateUpdateModalComponent"], {
                height: 'auto',
                width: 'auto',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    item: trigger,
                    name: 'Trigger',
                    save: (item) => Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["updateTrigger"])(item.id, item),
                    external_save: true,
                },
            });
            this.subscription('delete_confirm', ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'action') {
                    ref.componentInstance.loading = 'Saving trigger settings...';
                    const url = `${Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["apiEndpoint"])()}/systems/${this.item.id}/triggers/${trigger.id}`;
                    Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["put"])(url, event.metadata).subscribe(() => null, (err) => {
                        ref.componentInstance.loading = null;
                        Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_9__["notifyError"])(`Error updating trigger settings. Error: ${JSON.stringify(err.response || err.message || err)}`);
                    }, () => {
                        Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_9__["notifySuccess"])(`Successfully updated trigger settings.`);
                        ref.close();
                        this.unsub('delete_confirm');
                    });
                }
            }));
        }
    }
    /**
     * Remove a trigger from the active system
     * @param trigger Trigger to remove
     */
    deleteTrigger(trigger) {
        if (this.item && trigger) {
            const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["CONFIRM_METADATA"]), { data: {
                    title: `Remove trigger`,
                    content: `<p>Are you sure you want remove trigger "${trigger.name}"?</p><p>Configuration will be updated <strong>immediately</strong>.</p>`,
                    icon: { type: 'icon', class: 'backoffice-trash' },
                } }));
            this.subscription('delete_confirm', ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    ref.componentInstance.loading = 'Removing trigger...';
                    const url = `${Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["apiEndpoint"])()}/systems/${this.item.id}/triggers/${trigger.id}`;
                    Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["del"])(url).subscribe(() => null, (err) => {
                        ref.componentInstance.loading = null;
                        Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_9__["notifyError"])(`Error removing trigger. Error: ${JSON.stringify(err.response || err.message || err)}`);
                        this.trigger_list.splice(this.trigger_list.findIndex((item) => this.item.id === item.id), 1);
                        this.filter(this.search_str);
                    }, () => {
                        Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_9__["notifySuccess"])(`Successfully deleted trigger "${this.item.name}".`);
                        ref.close();
                        this.unsub('delete_confirm');
                    });
                }
            }));
        }
    }
    /**
     * Open modal to select a trigger to add
     */
    selectTriggerToAdd() {
        const ref = this._dialog.open(src_app_overlays_select_item_modal_select_item_modal_component__WEBPACK_IMPORTED_MODULE_4__["SelectItemModalComponent"], {
            height: 'auto',
            width: 'auto',
            data: {
                service_name: 'Triggers',
                query_fn: (_) => Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["queryTriggers"])({ q: _ }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((resp) => resp.data)),
            },
        });
        this.subscription('dialog_events', ref.componentInstance.event.subscribe((event) => {
            const item = ref.componentInstance.item;
            if (event.reason === 'action' && item) {
                this.addTrigger(item);
                ref.close();
            }
        }));
        ref.afterClosed().subscribe(() => this.unsub('dialog_events'));
    }
    /**
     * Add the selected trigger to the active system
     * @param trigger Trigger to add to system
     */
    addTrigger(trigger) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["addSystemTrigger"])(this.item.id, {
                control_system_id: this.item.id,
                enabled: true,
                important: false,
                trigger_id: trigger.id,
            }).toPromise();
            this.trigger_list.push(item);
            this.filter(this.search_str);
        });
    }
}
SystemTriggersComponent.ɵfac = function SystemTriggersComponent_Factory(t) { return new (t || SystemTriggersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_item_service__WEBPACK_IMPORTED_MODULE_11__["ActiveItemService"])); };
SystemTriggersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SystemTriggersComponent, selectors: [["system-triggers"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 1, consts: [["class", "container", 4, "ngIf"], ["empty_state", ""], [1, "container"], [1, "settings"], [1, "select"], [1, "dropdown"], ["mat-button", "", 3, "click"], ["appearance", "outline"], ["matPrefix", "", 1, "prefix"], [3, "icon"], ["matInput", "", "name", "search-filter", "placeholder", "Filter Triggers", 3, "ngModel", "ngModelChange"], [1, "list"], [4, "ngIf", "ngIfElse"], [1, "small"], [1, "flex"], [1, "count"], [1, "added"], [1, "duo"], [4, "ngFor", "ngForOf"], ["hidden", "", "binding", "", "mod", "_TRIGGER__1", 3, "sys", "bind", "model", "modelChange"], [1, "small", 3, "matTooltip"], [1, "state"], [3, "routerLink", "matTooltip"], [1, "count", 3, "matTooltip"], [1, "actions"], ["mat-icon-button", "", 3, "click"], [1, "info-block"], [1, "text"]], template: function SystemTriggersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SystemTriggersComponent_div_0_Template, 12, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SystemTriggersComponent_ng_template_1_Template, 3, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatPrefix"], _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_15__["IconComponent"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _ui_binding_binding_directive__WEBPACK_IMPORTED_MODULE_18__["BindingDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterLinkWithHref"]], pipes: [_ui_pipes_date_from_pipe__WEBPACK_IMPORTED_MODULE_21__["DateFromPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.list[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n}\n.table-row[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%]   .added[_ngcontent-%COMP%] {\n  width: 8em;\n  min-width: 8em;\n}\n.action[_ngcontent-%COMP%] {\n  height: 1.5em;\n  width: 1.5em;\n  min-width: 1.5em;\n  border-radius: 0.65em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3em;\n}\n.action[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.state[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin: 0.25em;\n  background-color: #d32f2f;\n  border-radius: 0.8em;\n  transition: margin 250ms, height 250ms, width 250ms, background-color 300ms;\n}\n.state.active[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  height: 8px;\n  width: 8px;\n  margin: 0.625em;\n}\n.select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.select[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n}\n.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 0.25em 1.5em;\n}\n.select[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n}\ntbody[_ngcontent-%COMP%]   td.count[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.duo[_ngcontent-%COMP%] {\n  width: 6em;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9zeXN0ZW1zL3N5c3RlbS10cmlnZ2Vycy9zeXN0ZW0tdHJpZ2dlcnMuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBcUNBOztjQUFBO0FBWUE7O2VBQUE7QUFPQTs7ZUFBQTtBQWdCQTs7c0JBQUE7QUN0RUE7RUFDSSxZQUFBO0FBYUo7QUFWQTtFQUNJLGlCQUFBO0FBYUo7QUFUSTs7RUFFSSxVQUFBO0VBQ0EsY0FBQTtBQVlSO0FBUkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBV0o7QUFWSTtFQUNJLG9DQUFBO0FBWVI7QUFSQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyRUFBQTtBQVdKO0FBVkk7RUFDSSx5QkRqQ0U7RUNrQ0YsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBWVI7QUFQQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQVVKO0FBUkk7RUFDSSxPQUFBO0VBQ0EsY0FBQTtBQVVSO0FBUEk7RUFDSSxzQkFBQTtBQVNSO0FBTkk7RUFDSSxpQkFBQTtBQVFSO0FBSEk7RUFDSSxpQkFBQTtBQU1SO0FBRkE7RUFDSSxVQUFBO0FBS0o7QUFGQTtFQUNJLGFBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbXMvc3lzdGVtLXRyaWdnZXJzL3N5c3RlbS10cmlnZ2Vycy5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0Y2FmNTA7XG4kc3VjY2Vzcy1saWdodDogIzY2YmI2YTtcbiRzdWNjZXNzLWRhcms6ICMwMDc5NmI7XG5cbiRwZW5kaW5nOiAjZmY4ZjAwO1xuJHBlbmRpbmctbGlnaHQ6ICNmZmMwNDY7XG4kcGVuZGluZy1kYXJrOiAjYzU2MDAwO1xuXG4kZXJyb3I6ICNmNDQzMzY7XG4kZXJyb3ItbGlnaHQ6ICNmZjZmNjA7XG4kZXJyb3ItZGFyazogI2FiMDAwZDtcblxuJGNvbG9yLXByaW1hcnk6ICNDOTIzNjY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogI2NkNTY4YTtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICNiNjAwNWQ7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM1QzY0RkY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiAjNzI3MmU3O1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiAjNTU1N2QxO1xuXG4kY29sb3ItZGV2ZWxvcDogI2YwZjBmMDtcbiRjb2xvci1kZXZlbG9wLWxpZ2h0OiAjZmZmO1xuJGNvbG9yLWRldmVsb3AtZGFyazogI2UwZTBlMDtcblxuJGJhY2tncm91bmQ6ICMyNjMyMzg7XG4kYmFja2dyb3VuZC1saWdodDogIzQ1NWE2NDtcbiRiYWNrZ3JvdW5kLWRhcms6ICMyMDI2MzI7XG5cbiRoZWFkZXItY29sb3I6ICMwQTBEMkU7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJSb2JvdG9cIiwgXCJWZXJkYW5hXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIllvdW5nXCIsICRmb250O1xuJG1vbm8tZm9udDogXCJGaXJhIENvZGVcIiwgbW9ub3NwYWNlO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBTaXppbmcgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcblxuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkZGVwdGg6IDEsICRzcHJlYWQ6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwICgxcHggKiAkc3ByZWFkKSAoM3B4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4yICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgxcHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4xNCAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMnB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIC0oMXB4ICogJHNwcmVhZCkgcmdiYSgjMDAwLCAuMTIgKiAkZGVwdGgpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAndmFyaWFibGVzJztcblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMWVtO1xufVxuXG4ubGlzdCB7XG4gICAgbWFyZ2luLXRvcDogLjVlbTtcbn1cblxuLnRhYmxlLXJvdyB7XG4gICAgLmNvdW50LFxuICAgIC5hZGRlZCB7XG4gICAgICAgIHdpZHRoOiA4ZW07XG4gICAgICAgIG1pbi13aWR0aDogOGVtO1xuICAgIH1cbn1cblxuLmFjdGlvbiB7XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICB3aWR0aDogMS41ZW07XG4gICAgbWluLXdpZHRoOiAxLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAuNjVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAuMSk7XG4gICAgfVxufVxuXG4uc3RhdGUge1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICBtYXJnaW46IC4yNWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzJmMmY7XG4gICAgYm9yZGVyLXJhZGl1czogLjhlbTtcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMjUwbXMsIGhlaWdodCAyNTBtcywgd2lkdGggMjUwbXMsIGJhY2tncm91bmQtY29sb3IgMzAwbXM7XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VjY2VzcztcbiAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgIG1hcmdpbjogLjYyNWVtO1xuICAgIH1cbn1cblxuXG4uc2VsZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMCAuMjVlbSAxLjVlbTtcbiAgICB9XG5cbiAgICBhcHAtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICAgIH1cbn1cblxudGJvZHkge1xuICAgIHRkLmNvdW50IHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxufVxuXG4uZHVvIHtcbiAgICB3aWR0aDogNmVtO1xufVxuXG4uYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SystemTriggersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'system-triggers',
                templateUrl: './system-triggers.template.html',
                styleUrls: ['./system-triggers.styles.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }, { type: src_app_common_item_service__WEBPACK_IMPORTED_MODULE_11__["ActiveItemService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/systems/system-zones/system-zones.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/systems/system-zones/system-zones.component.ts ***!
  \****************************************************************/
/*! exports provided: SystemZonesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemZonesComponent", function() { return SystemZonesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/esm/index.js");
/* harmony import */ var src_app_common_base_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/base.class */ "./src/app/common/base.class.ts");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var src_app_common_general__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/general */ "./src/app/common/general.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_common_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/notifications */ "./src/app/common/notifications.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_common_item_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/item.service */ "./src/app/common/item.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ui_custom_fields_item_search_field_item_search_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/custom-fields/item-search-field/item-search-field.component */ "./src/app/ui/custom-fields/item-search-field/item-search-field.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");


















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_zoneTableEmpty$$SRC_APP_SYSTEMS_SYSTEM_ZONES_SYSTEM_ZONES_COMPONENT_TS___1 = goog.getMsg("Name");
    I18N_0 = MSG_EXTERNAL_zoneTableEmpty$$SRC_APP_SYSTEMS_SYSTEM_ZONES_SYSTEM_ZONES_COMPONENT_TS___1;
}
else {
    I18N_0 = $localize `:@@zoneTableEmpty␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_descriptionLabel$$SRC_APP_SYSTEMS_SYSTEM_ZONES_SYSTEM_ZONES_COMPONENT_TS___3 = goog.getMsg("Description");
    I18N_2 = MSG_EXTERNAL_descriptionLabel$$SRC_APP_SYSTEMS_SYSTEM_ZONES_SYSTEM_ZONES_COMPONENT_TS___3;
}
else {
    I18N_2 = $localize `:@@descriptionLabel␟eec715de352a6b114713b30b640d319fa78207a0␟4902817035128594900:Description`;
}
function SystemZonesComponent_div_0_table_8_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 9);
} }
function SystemZonesComponent_div_0_table_8_tr_9_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemZonesComponent_div_0_table_8_tr_9_td_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const zone_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.removeZone(zone_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SystemZonesComponent_div_0_table_8_tr_9_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 22);
} }
const _c4 = function (a1) { return ["/zones", a1]; };
function SystemZonesComponent_div_0_table_8_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SystemZonesComponent_div_0_table_8_tr_9_td_9_Template, 3, 0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SystemZonesComponent_div_0_table_8_tr_9_td_10_Template, 1, 0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const zone_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c4, zone_r5.id))("matTooltip", zone_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](zone_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](zone_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.zones.length > 1);
} }
function SystemZonesComponent_div_0_table_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SystemZonesComponent_div_0_table_8_td_7_Template, 1, 0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function SystemZonesComponent_div_0_table_8_Template_tbody_cdkDropListDropped_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SystemZonesComponent_div_0_table_8_tr_9_Template, 11, 7, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.zones.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.zones);
} }
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_zoneTableEmpty$$SRC_APP_SYSTEMS_SYSTEM_ZONES_SYSTEM_ZONES_COMPONENT_TS___6 = goog.getMsg("No zones for system");
    I18N_5 = MSG_EXTERNAL_zoneTableEmpty$$SRC_APP_SYSTEMS_SYSTEM_ZONES_SYSTEM_ZONES_COMPONENT_TS___6;
}
else {
    I18N_5 = $localize `:@@zoneTableEmpty␟5ba52f7f708dd84732d74bb76b8643df29370f16␟3859183549731946351:No zones for system`;
}
function SystemZonesComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SystemZonesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "item-search-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SystemZonesComponent_div_0_Template_item_search_field_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.new_zone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemZonesComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.joinZone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Join zone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SystemZonesComponent_div_0_table_8_Template, 10, 2, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SystemZonesComponent_div_0_div_9_Template, 3, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("query_fn", ctx_r0.query_fn)("exclude", ctx_r0.exclude_fn)("ngModel", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.new_zone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.zones && ctx_r0.zones.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.zones || ctx_r0.zones.length <= 0);
} }
class SystemZonesComponent extends src_app_common_base_class__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_dialog, _service) {
        super();
        this._dialog = _dialog;
        this._service = _service;
        /** Emitter for changes to the loading state of the item */
        this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Query function for systems */
        this.query_fn = (_) => Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["queryZones"])({ q: _ }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((resp) => resp.data));
        this.exclude_fn = (zone) => this.item.zones.indexOf(zone.id) >= 0;
    }
    get item() {
        return this._service.active_item;
    }
    ngOnInit() {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadZones();
        }));
    }
    /**
     * Load zone data for the active item
     * @param offset Page offset for the service request
     */
    loadZones(offset = 0) {
        if (!this.item) {
            return;
        }
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["listSystemZones"])(this.item.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((resp) => resp.data))
            .subscribe((list) => {
            list.sort((a, b) => this.item.zones.indexOf(a.id) - this.item.zones.indexOf(b.id));
            this.zones = list;
        }, () => null);
    }
    drop(event) {
        if (event && event.previousIndex !== event.currentIndex) {
            const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["CONFIRM_METADATA"]), { data: {
                    title: 'Change order?',
                    content: `Are you sure you want to change the zone priority?<br>Settings will be updated immediately for the system.`,
                    icon: { type: 'icon', class: 'backoffice-cycle' },
                } }));
            this.subscription('confirm_ref', ref.componentInstance.event.subscribe((e) => {
                if (e.reason === 'done') {
                    const zones = [...this.item.zones];
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(zones, event.previousIndex, event.currentIndex);
                    ref.componentInstance.loading = 'Updating zone ordering...';
                    Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["updateSystem"])(this.item.id, Object.assign(Object.assign({}, this.item.toJSON()), { zones })).subscribe(() => {
                        ref.close();
                        this.unsub('confirm_ref');
                    }, (err) => {
                        ref.componentInstance.loading = null;
                        Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_7__["notifyError"])(`Error reording zones. Error: ${JSON.stringify(err.response || err.message || err)}`);
                    });
                }
            }));
        }
    }
    removeZone(zone) {
        if (zone && zone.id) {
            const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["CONFIRM_METADATA"]), { data: {
                    title: 'Remove zone?',
                    content: `<p>Are you sure you want remove zone "${zone.name}" from the system?</p>Configuration will be updated immediately.`,
                    icon: { type: 'icon', class: 'backoffice-trash' },
                } }));
            this.subscription('confirm_ref', ref.componentInstance.event.subscribe((e) => {
                if (e.reason === 'done') {
                    this.loading.emit(true);
                    const zones = this.item.zones.filter((id) => id !== zone.id);
                    Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["updateSystem"])(this.item.id, Object.assign(Object.assign({}, this.item.toJSON()), { zones })).subscribe((item) => {
                        this.loading.emit(false);
                        this._service.replaceItem(item);
                        this.zones = this.zones.filter(z => z.id !== zone.id);
                        Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_7__["notifySuccess"])(`Remove zone "${zone.name}" from system`);
                        ref.close();
                        this.unsub('confirm_ref');
                    }, (err) => {
                        this.loading.emit(false);
                        Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_7__["notifySuccess"])(`Error removing "${zone.name}" from system. Error: ${JSON.stringify(err.response || err.message || err)}`);
                        ref.close();
                        this.unsub('confirm_ref');
                    });
                }
            }));
        }
    }
    joinZone() {
        if (this.new_zone) {
            if (this.item.zones.indexOf(this.new_zone.id) < 0) {
                this.loading.emit(true);
                const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["CONFIRM_METADATA"]), { data: {
                        title: 'Add zone',
                        content: `Add zone "${this.new_zone.name}" to system "${this.item.name}"`,
                        icon: { type: 'icon', class: 'backoffice-upload-to-cloud' },
                    } }));
                this.subscription('confirm_ref', ref.componentInstance.event.subscribe((e) => {
                    if (e.reason === 'done') {
                        ref.componentInstance.loading = 'Adding zone to system...';
                        const zones = Object(src_app_common_general__WEBPACK_IMPORTED_MODULE_5__["unique"])([...this.item.zones, this.new_zone.id]);
                        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["updateSystem"])(this.item.id, Object.assign(Object.assign({}, this.item.toJSON()), { zones })).subscribe((item) => {
                            this.loading.emit(false);
                            Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_7__["notifySuccess"])(`Added zone "${this.new_zone.name}" to system`);
                            this._service.replaceItem(item);
                            this.zones.push(this.new_zone);
                            ref.close();
                            this.unsub('confirm_ref');
                            this.new_zone = null;
                        }, (err) => {
                            ref.componentInstance.loading = null;
                            this.loading.emit(false);
                            Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_7__["notifyError"])(`Error adding zone "${this.new_zone.name}". Error: ${JSON.stringify(err.response || err.message || err)}`);
                        });
                    }
                    else {
                        this.loading.emit(false);
                    }
                }));
            }
            else {
                Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_7__["notifyInfo"])('The selected zone is already linked to this system');
            }
        }
    }
}
SystemZonesComponent.ɵfac = function SystemZonesComponent_Factory(t) { return new (t || SystemZonesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_item_service__WEBPACK_IMPORTED_MODULE_9__["ActiveItemService"])); };
SystemZonesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SystemZonesComponent, selectors: [["system-zones"]], outputs: { loading: "loading" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "settings"], [1, "select"], [1, "dropdown"], ["name", "zone", 3, "query_fn", "exclude", "ngModel", "ngModelChange"], ["mat-button", "", 3, "disabled", "click"], [4, "ngIf"], ["class", "info-block", 4, "ngIf"], [1, "small"], [1, "name"], [1, "description"], ["class", "small", 4, "ngIf"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", ""], ["cdkDragHandle", "", 1, "action", "grab"], [1, "backoffice-select-arrows"], ["routerLinkActive", "router-link-active", 3, "routerLink", "matTooltip"], ["class", "placeholder", "colspan", "6", 4, "cdkDragPlaceholder"], ["mat-icon-button", "", 3, "click"], [1, "backoffice-trash"], ["colspan", "6", 1, "placeholder"], [1, "info-block"], [1, "text"]], template: function SystemZonesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SystemZonesComponent_div_0_Template, 10, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ui_custom_fields_item_search_field_item_search_field_component__WEBPACK_IMPORTED_MODULE_11__["ItemSearchFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDragHandle"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkActive"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDragPlaceholder"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\nheader[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.1em;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 0.5em 0.25em;\n}\n.select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 0.25em 1.5em;\n}\n.dropdown[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.placeholder[_ngcontent-%COMP%] {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 3em;\n  height: 3em;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.name[_ngcontent-%COMP%] {\n  min-width: 10em;\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  padding: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9zeXN0ZW1zL3N5c3RlbS16b25lcy9zeXN0ZW0tem9uZXMuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBcUNBOztjQUFBO0FBWUE7O2VBQUE7QUFPQTs7ZUFBQTtBQWdCQTs7c0JBQUE7QUN2RUE7RUFDSSxZQUFBO0FBY0o7QUFYQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFjSjtBQVhBO0VBQ0kscUJBQUE7QUFjSjtBQVhBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFjSjtBQVpJO0VBQ0ksc0JBQUE7QUFjUjtBQVZBO0VBQ0ksT0FBQTtBQWFKO0FBVkE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzREFBQTtBQWFKO0FBVkE7RUFDSSxlQUFBO0FBYUo7QUFWQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQWFKIiwiZmlsZSI6InNyYy9hcHAvc3lzdGVtcy9zeXN0ZW0tem9uZXMvc3lzdGVtLXpvbmVzLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzRjYWY1MDtcbiRzdWNjZXNzLWxpZ2h0OiAjNjZiYjZhO1xuJHN1Y2Nlc3MtZGFyazogIzAwNzk2YjtcblxuJHBlbmRpbmc6ICNmZjhmMDA7XG4kcGVuZGluZy1saWdodDogI2ZmYzA0NjtcbiRwZW5kaW5nLWRhcms6ICNjNTYwMDA7XG5cbiRlcnJvcjogI2Y0NDMzNjtcbiRlcnJvci1saWdodDogI2ZmNmY2MDtcbiRlcnJvci1kYXJrOiAjYWIwMDBkO1xuXG4kY29sb3ItcHJpbWFyeTogI0M5MjM2NjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiAjY2Q1NjhhO1xuJGNvbG9yLXByaW1hcnktZGFyazogI2I2MDA1ZDtcblxuJGNvbG9yLXNlY29uZGFyeTogIzVDNjRGRjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6ICM3MjcyZTc7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6ICM1NTU3ZDE7XG5cbiRjb2xvci1kZXZlbG9wOiAjZjBmMGYwO1xuJGNvbG9yLWRldmVsb3AtbGlnaHQ6ICNmZmY7XG4kY29sb3ItZGV2ZWxvcC1kYXJrOiAjZTBlMGUwO1xuXG4kYmFja2dyb3VuZDogIzI2MzIzODtcbiRiYWNrZ3JvdW5kLWxpZ2h0OiAjNDU1YTY0O1xuJGJhY2tncm91bmQtZGFyazogIzIwMjYzMjtcblxuJGhlYWRlci1jb2xvcjogIzBBMEQyRTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlJvYm90b1wiLCBcIlZlcmRhbmFcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiWW91bmdcIiwgJGZvbnQ7XG4kbW9uby1mb250OiBcIkZpcmEgQ29kZVwiLCBtb25vc3BhY2U7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09KlxcXG58fCAgIFNpemluZyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWhlaWdodDogNGVtO1xuXG5cbi8qPT09PT09PT09PT09KlxcXG58fCAgIE1peGlucyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRkZXB0aDogMSwgJHNwcmVhZDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgKDFweCAqICRzcHJlYWQpICgzcHggKiAkc3ByZWFkKSAwIHJnYmEoIzAwMCwgLjIgKiAkZGVwdGgpLFxuICAgICAgICAgICAgICAgIDAgKDFweCAqICRzcHJlYWQpICgxcHggKiAkc3ByZWFkKSAwIHJnYmEoIzAwMCwgLjE0ICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgycHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgLSgxcHggKiAkc3ByZWFkKSByZ2JhKCMwMDAsIC4xMiAqICRkZXB0aCk7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMWVtO1xufVxuXG5oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbnNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDAuNWVtIDAuMjVlbTtcbn1cblxuLnNlbGVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiAwIDAuMjVlbSAxLjVlbTtcbiAgICB9XG59XG5cbi5kcm9wZG93biB7XG4gICAgZmxleDogMTtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgIGJvcmRlcjogZG90dGVkIDNweCAjOTk5O1xuICAgIG1pbi1oZWlnaHQ6IDNlbTtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5uYW1lIHtcbiAgICBtaW4td2lkdGg6IDEwZW07XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemZonesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'system-zones',
                templateUrl: './system-zones.template.html',
                styleUrls: ['./system-zones.styles.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }, { type: src_app_common_item_service__WEBPACK_IMPORTED_MODULE_9__["ActiveItemService"] }]; }, { loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/systems/systems.component.ts":
/*!**********************************************!*\
  !*** ./src/app/systems/systems.component.ts ***!
  \**********************************************/
/*! exports provided: SystemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemsComponent", function() { return SystemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/esm/index.js");
/* harmony import */ var _common_base_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/base.class */ "./src/app/common/base.class.ts");
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/api */ "./src/app/common/api.ts");
/* harmony import */ var _common_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/item.service */ "./src/app/common/item.service.ts");
/* harmony import */ var _ui_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/sidebar/sidebar.component */ "./src/app/ui/sidebar/sidebar.component.ts");
/* harmony import */ var _ui_item_display_item_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/item-display/item-display.component */ "./src/app/ui/item-display/item-display.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










class SystemsComponent extends _common_base_class__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_service) {
        super();
        this._service = _service;
        /** Number of metadata fields for the active system */
        this.metadata_count = 0;
        this.name = 'systems';
        this.show_options = this._service.show_options;
        this.tab_list = [];
    }
    get extensions() {
        return Object(_common_api__WEBPACK_IMPORTED_MODULE_4__["extensionsForItem"])(this._service.active_item, this.name);
    }
    updateTabList() {
        this.tab_list = [
            { id: 'about', name: 'About', icon: { class: 'backoffice-info-with-circle' } },
            {
                id: 'modules',
                name: 'Modules',
                count: this.device_count,
                icon: { class: 'backoffice-tablet' }
            },
            { id: 'zones', name: 'Zones', count: this.zone_count, icon: { class: 'backoffice-layers' } },
            {
                id: 'triggers',
                name: 'Triggers',
                count: this.trigger_count,
                icon: { class: 'backoffice-stopwatch' }
            },
            {
                id: 'metadata',
                name: 'Metadata',
                count: this.metadata_count,
                icon: { class: 'backoffice-gist' }
            }
        ].concat(this.extensions);
    }
    ngOnInit() {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadValues(item);
        }));
        this.updateTabList();
    }
    loadValues(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!item)
                return;
            const query = { offset: 0, limit: 1, sys_id: item.id };
            // Get trigger count
            this.trigger_count = (yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["listSystemTriggers"])(item.id).toPromise()).total;
            // Get device count
            this.device_count = (item.modules || []).length;
            // Get zone count
            this.zone_count = (item.zones || []).length;
            // Get metadata
            const map = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["showMetadata"])(item.id).toPromise();
            this.metadata_count = map.length;
            this.updateTabList();
        });
    }
}
SystemsComponent.ɵfac = function SystemsComponent_Factory(t) { return new (t || SystemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_item_service__WEBPACK_IMPORTED_MODULE_5__["ActiveItemService"])); };
SystemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SystemsComponent, selectors: [["app-systems"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 5, consts: [[1, "container"], [1, "sidebar"], ["heading", "Systems", "name", "systems"], ["name", "system", "route", "systems", 3, "tabs"]], template: function SystemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "item-display", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, ctx.show_options));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabs", ctx.tab_list);
    } }, directives: [_ui_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _ui_item_display_item_display_component__WEBPACK_IMPORTED_MODULE_7__["ItemDisplayComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n    height: 0%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n    height: 0%;\n  }\n}\n.sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 20em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .sidebar[_ngcontent-%COMP%] {\n    height: 3em;\n    min-height: 3em;\n    width: 100%;\n    transition: height 300ms;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .sidebar[_ngcontent-%COMP%] {\n    height: 3em;\n    min-height: 3em;\n    width: 100%;\n    transition: height 300ms;\n  }\n}\nmain[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n  flex: 1;\n  background-color: #f0f0f0;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  main[_ngcontent-%COMP%] {\n    transition: height 300ms;\n    width: 100%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  main[_ngcontent-%COMP%] {\n    transition: height 300ms;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9zeXN0ZW1zL3N5c3RlbXMuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBcUNBOztjQUFBO0FBWUE7O2VBQUE7QUFPQTs7ZUFBQTtBQWdCQTs7c0JBQUE7QUN0RUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWFKO0FEbUVRO0VDcEZSO0lBTVEsc0JBQUE7RUFlTjtBQUNGO0FEaUVRO0VDdkZSO0lBTVEsc0JBQUE7RUFvQk47QUFDRjtBRHlEUTtFQzFFQTtJQUVRLFlBQUE7RUFtQmQ7QUFDRjtBRHVEUTtFQzdFQTtJQUVRLFlBQUE7RUF3QmQ7QUFDRjtBRCtDUTtFQ3JFQTtJQUVRLFVBQUE7RUF3QmQ7QUFDRjtBRDZDUTtFQ3hFQTtJQUVRLFVBQUE7RUE2QmQ7QUFDRjtBQXhCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBMkJKO0FEZ0NRO0VDN0RSO0lBSVEsV0FBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0Esd0JBQUE7RUE2Qk47QUFDRjtBRDJCUTtFQ2hFUjtJQUlRLFdBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLHdCQUFBO0VBcUNOO0FBQ0Y7QUFsQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtBQXFDSjtBRFFRO0VDbERSO0lBT1Esd0JBQUE7SUFDQSxXQUFBO0VBdUNOO0FBQ0Y7QURLUTtFQ3JEUjtJQU9RLHdCQUFBO0lBQ0EsV0FBQTtFQTZDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3lzdGVtcy9zeXN0ZW1zLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzRjYWY1MDtcbiRzdWNjZXNzLWxpZ2h0OiAjNjZiYjZhO1xuJHN1Y2Nlc3MtZGFyazogIzAwNzk2YjtcblxuJHBlbmRpbmc6ICNmZjhmMDA7XG4kcGVuZGluZy1saWdodDogI2ZmYzA0NjtcbiRwZW5kaW5nLWRhcms6ICNjNTYwMDA7XG5cbiRlcnJvcjogI2Y0NDMzNjtcbiRlcnJvci1saWdodDogI2ZmNmY2MDtcbiRlcnJvci1kYXJrOiAjYWIwMDBkO1xuXG4kY29sb3ItcHJpbWFyeTogI0M5MjM2NjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiAjY2Q1NjhhO1xuJGNvbG9yLXByaW1hcnktZGFyazogI2I2MDA1ZDtcblxuJGNvbG9yLXNlY29uZGFyeTogIzVDNjRGRjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6ICM3MjcyZTc7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6ICM1NTU3ZDE7XG5cbiRjb2xvci1kZXZlbG9wOiAjZjBmMGYwO1xuJGNvbG9yLWRldmVsb3AtbGlnaHQ6ICNmZmY7XG4kY29sb3ItZGV2ZWxvcC1kYXJrOiAjZTBlMGUwO1xuXG4kYmFja2dyb3VuZDogIzI2MzIzODtcbiRiYWNrZ3JvdW5kLWxpZ2h0OiAjNDU1YTY0O1xuJGJhY2tncm91bmQtZGFyazogIzIwMjYzMjtcblxuJGhlYWRlci1jb2xvcjogIzBBMEQyRTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlJvYm90b1wiLCBcIlZlcmRhbmFcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiWW91bmdcIiwgJGZvbnQ7XG4kbW9uby1mb250OiBcIkZpcmEgQ29kZVwiLCBtb25vc3BhY2U7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09KlxcXG58fCAgIFNpemluZyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWhlaWdodDogNGVtO1xuXG5cbi8qPT09PT09PT09PT09KlxcXG58fCAgIE1peGlucyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRkZXB0aDogMSwgJHNwcmVhZDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgKDFweCAqICRzcHJlYWQpICgzcHggKiAkc3ByZWFkKSAwIHJnYmEoIzAwMCwgLjIgKiAkZGVwdGgpLFxuICAgICAgICAgICAgICAgIDAgKDFweCAqICRzcHJlYWQpICgxcHggKiAkc3ByZWFkKSAwIHJnYmEoIzAwMCwgLjE0ICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgycHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgLSgxcHggKiAkc3ByZWFkKSByZ2JhKCMwMDAsIC4xMiAqICRkZXB0aCk7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgJi5zaG93IHtcbiAgICAgICAgLnNpZGViYXIge1xuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zaWRlYmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDIwZW07XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICAgIG1pbi1oZWlnaHQ6IDNlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcztcbiAgICB9XG59XG5cbm1haW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmbGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SystemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-systems',
                templateUrl: './systems.template.html',
                styleUrls: ['./systems.styles.scss'],
            }]
    }], function () { return [{ type: _common_item_service__WEBPACK_IMPORTED_MODULE_5__["ActiveItemService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/systems/systems.module.ts":
/*!*******************************************!*\
  !*** ./src/app/systems/systems.module.ts ***!
  \*******************************************/
/*! exports provided: AppSystemsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSystemsModule", function() { return AppSystemsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _systems_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./systems.routes */ "./src/app/systems/systems.routes.ts");
/* harmony import */ var _systems_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./systems.component */ "./src/app/systems/systems.component.ts");
/* harmony import */ var _system_about_system_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./system-about/system-about.component */ "./src/app/systems/system-about/system-about.component.ts");
/* harmony import */ var _system_modules_system_modules_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./system-modules/system-modules.component */ "./src/app/systems/system-modules/system-modules.component.ts");
/* harmony import */ var _system_triggers_system_triggers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./system-triggers/system-triggers.component */ "./src/app/systems/system-triggers/system-triggers.component.ts");
/* harmony import */ var _system_zones_system_zones_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./system-zones/system-zones.component */ "./src/app/systems/system-zones/system-zones.component.ts");
/* harmony import */ var _system_metadata_system_metadata_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./system-metadata/system-metadata.component */ "./src/app/systems/system-metadata/system-metadata.component.ts");
/* harmony import */ var src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/ui/ui.module */ "./src/app/ui/ui.module.ts");















class AppSystemsModule {
}
AppSystemsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppSystemsModule });
AppSystemsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppSystemsModule_Factory(t) { return new (t || AppSystemsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_systems_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"]),
            src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_12__["SharedContentModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppSystemsModule, { declarations: [_systems_component__WEBPACK_IMPORTED_MODULE_6__["SystemsComponent"],
        _system_about_system_about_component__WEBPACK_IMPORTED_MODULE_7__["SystemAboutComponent"],
        _system_modules_system_modules_component__WEBPACK_IMPORTED_MODULE_8__["SystemModulesComponent"],
        _system_triggers_system_triggers_component__WEBPACK_IMPORTED_MODULE_9__["SystemTriggersComponent"],
        _system_zones_system_zones_component__WEBPACK_IMPORTED_MODULE_10__["SystemZonesComponent"],
        _system_metadata_system_metadata_component__WEBPACK_IMPORTED_MODULE_11__["SystemMetadataComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_12__["SharedContentModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppSystemsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _systems_component__WEBPACK_IMPORTED_MODULE_6__["SystemsComponent"],
                    _system_about_system_about_component__WEBPACK_IMPORTED_MODULE_7__["SystemAboutComponent"],
                    _system_modules_system_modules_component__WEBPACK_IMPORTED_MODULE_8__["SystemModulesComponent"],
                    _system_triggers_system_triggers_component__WEBPACK_IMPORTED_MODULE_9__["SystemTriggersComponent"],
                    _system_zones_system_zones_component__WEBPACK_IMPORTED_MODULE_10__["SystemZonesComponent"],
                    _system_metadata_system_metadata_component__WEBPACK_IMPORTED_MODULE_11__["SystemMetadataComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_systems_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"]),
                    src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_12__["SharedContentModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/systems/systems.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/systems/systems.routes.ts ***!
  \*******************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _systems_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./systems.component */ "./src/app/systems/systems.component.ts");
/* harmony import */ var _system_about_system_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system-about/system-about.component */ "./src/app/systems/system-about/system-about.component.ts");
/* harmony import */ var _system_modules_system_modules_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system-modules/system-modules.component */ "./src/app/systems/system-modules/system-modules.component.ts");
/* harmony import */ var _system_triggers_system_triggers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-triggers/system-triggers.component */ "./src/app/systems/system-triggers/system-triggers.component.ts");
/* harmony import */ var _system_zones_system_zones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./system-zones/system-zones.component */ "./src/app/systems/system-zones/system-zones.component.ts");
/* harmony import */ var _system_metadata_system_metadata_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./system-metadata/system-metadata.component */ "./src/app/systems/system-metadata/system-metadata.component.ts");
/* harmony import */ var _ui_extension_outlet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/extension-outlet.component */ "./src/app/ui/extension-outlet.component.ts");







const ROUTES = [
    {
        path: ':id',
        component: _systems_component__WEBPACK_IMPORTED_MODULE_0__["SystemsComponent"],
        children: [
            { path: '', redirectTo: 'about' },
            { path: 'about', component: _system_about_system_about_component__WEBPACK_IMPORTED_MODULE_1__["SystemAboutComponent"] },
            { path: 'modules', component: _system_modules_system_modules_component__WEBPACK_IMPORTED_MODULE_2__["SystemModulesComponent"] },
            { path: 'triggers', component: _system_triggers_system_triggers_component__WEBPACK_IMPORTED_MODULE_3__["SystemTriggersComponent"] },
            { path: 'zones', component: _system_zones_system_zones_component__WEBPACK_IMPORTED_MODULE_4__["SystemZonesComponent"] },
            { path: 'metadata', component: _system_metadata_system_metadata_component__WEBPACK_IMPORTED_MODULE_5__["SystemMetadataComponent"] },
            { path: 'extend/:id', component: _ui_extension_outlet_component__WEBPACK_IMPORTED_MODULE_6__["ExtensionOutletComponent"] },
            { path: '**', redirectTo: 'about' }
        ]
    },
    { path: '**', redirectTo: '-' }
];


/***/ })

}]);
//# sourceMappingURL=systems-systems-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["systems-systems-module"],{

/***/ "0a2d":
/*!******************************************************!*\
  !*** ./src/app/systems/system-triggers.component.ts ***!
  \******************************************************/
/*! exports provided: SystemTriggersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemTriggersComponent", function() { return SystemTriggersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/general */ "auUi");
/* harmony import */ var _common_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/notifications */ "GGZo");
/* harmony import */ var _system_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./system-state.service */ "YG7R");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/icon/icon.component */ "BilL");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_binding_binding_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/binding/binding.directive */ "1Qul");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _ui_pipes_date_from_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ui/pipes/date-from.pipe */ "8MW+");

















const _c8 = function (a1) { return ["/triggers", a1]; };
function SystemTriggersComponent_ng_container_7_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function SystemTriggersComponent_ng_container_7_div_1_div_13_Template_i_modelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const trigger_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return (ctx_r9.trigger_state[trigger_r7.id] = $event); })("modelChange", function SystemTriggersComponent_ng_container_7_div_1_div_13_Template_i_modelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const trigger_r7 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.updateComparisons(trigger_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "dateFrom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemTriggersComponent_ng_container_7_div_1_div_13_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const trigger_r7 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.copyWebhookURL(trigger_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemTriggersComponent_ng_container_7_div_1_div_13_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const trigger_r7 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.editTrigger(trigger_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemTriggersComponent_ng_container_7_div_1_div_13_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const trigger_r7 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.deleteTrigger(trigger_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trigger_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sys", ctx_r6.item.id)("bind", trigger_r7.id)("model", ctx_r6.trigger_state[trigger_r7.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bg-black", !(ctx_r6.trigger_state[trigger_r7.id] == null ? null : ctx_r6.trigger_state[trigger_r7.id].triggered))("bg-success", ctx_r6.trigger_state[trigger_r7.id] == null ? null : ctx_r6.trigger_state[trigger_r7.id].triggered);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c8, trigger_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trigger_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.trigger_state[trigger_r7.id] == null ? null : ctx_r6.trigger_state[trigger_r7.id].trigger_count, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r6.trigger_state[trigger_r7.id] == null ? null : ctx_r6.trigger_state[trigger_r7.id].action_errors) + (ctx_r6.trigger_state[trigger_r7.id] == null ? null : ctx_r6.trigger_state[trigger_r7.id].comparison_errors) || "0", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 12, +trigger_r7.created_at * 1000), " ");
} }
function SystemTriggersComponent_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](10, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SystemTriggersComponent_ng_container_7_div_1_div_13_Template, 21, 16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 1, ctx_r5.triggers));
} }
function SystemTriggersComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SystemTriggersComponent_ng_container_7_div_1_Template, 15, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r0.triggers)) == null ? null : tmp_0_0.length)("ngIfElse", _r3);
} }
function SystemTriggersComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading triggers...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 48);
} }
function SystemTriggersComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No triggers for system");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SystemTriggersComponent {
    constructor(_service) {
        this._service = _service;
        this.filter$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.loading = this._service.loading;
        this.trigger_state = {};
        this.comparisons = {};
        this.triggers = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.filter$, this._service.triggers]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((details) => {
            const [filter, triggers] = details;
            const search = filter.toLowerCase();
            return filter
                ? triggers.filter((t) => t.name.toLowerCase().includes(search))
                : triggers;
        }));
        this.copyWebhookURL = (t) => {
            Object(_common_general__WEBPACK_IMPORTED_MODULE_3__["copyToClipboard"])(`${location.origin}/api/engine/v2/webhook/${t.id}/notify?secret=${t.webhook_secret}`);
            Object(_common_notifications__WEBPACK_IMPORTED_MODULE_4__["notifyInfo"])('Webhook link copied to clipboard');
        };
        this.editTrigger = (t) => this._service.editTrigger(t);
        this.deleteTrigger = (t) => this._service.removeTrigger(t);
        this.selectTrigger = () => this._service.selectTrigger();
    }
    get item() {
        return this._service.active_item;
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
}
SystemTriggersComponent.ɵfac = function SystemTriggersComponent_Factory(t) { return new (t || SystemTriggersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_system_state_service__WEBPACK_IMPORTED_MODULE_5__["SystemStateService"])); };
SystemTriggersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SystemTriggersComponent, selectors: [["system-triggers"]], decls: 13, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_nameLabel$$SRC_APP_SYSTEMS_SYSTEM_TRIGGERS_COMPONENT_TS___1 = goog.getMsg("Name");
        i18n_0 = MSG_EXTERNAL_nameLabel$$SRC_APP_SYSTEMS_SYSTEM_TRIGGERS_COMPONENT_TS___1;
    }
    else {
        i18n_0 = $localize `:@@nameLabel␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_triggerCountLabel$$SRC_APP_SYSTEMS_SYSTEM_TRIGGERS_COMPONENT_TS___3 = goog.getMsg("Count");
        i18n_2 = MSG_EXTERNAL_triggerCountLabel$$SRC_APP_SYSTEMS_SYSTEM_TRIGGERS_COMPONENT_TS___3;
    }
    else {
        i18n_2 = $localize `:@@triggerCountLabel␟06412bce0f4fe4311193e9763666089bf9d980da␟8177873832400820695:Count`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_triggerErrorsLabel$$SRC_APP_SYSTEMS_SYSTEM_TRIGGERS_COMPONENT_TS___5 = goog.getMsg("Errors");
        i18n_4 = MSG_EXTERNAL_triggerErrorsLabel$$SRC_APP_SYSTEMS_SYSTEM_TRIGGERS_COMPONENT_TS___5;
    }
    else {
        i18n_4 = $localize `:@@triggerErrorsLabel␟402c8cec6902868ba52ba5aa3bd1f3c2bba807ba␟8157372473189397040:Errors`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_descriptionLabel$$SRC_APP_SYSTEMS_SYSTEM_TRIGGERS_COMPONENT_TS___7 = goog.getMsg("Added");
        i18n_6 = MSG_EXTERNAL_descriptionLabel$$SRC_APP_SYSTEMS_SYSTEM_TRIGGERS_COMPONENT_TS___7;
    }
    else {
        i18n_6 = $localize `:@@descriptionLabel␟80e3b490720757978c99a7b5af3885faf202b955␟231679111972850796:Added`;
    } return [[1, "flex", "items-center", "mb-4", "space-x-2"], ["mat-button", "", 2, "min-width", "8rem", 3, "click"], ["appearance", "outline", 1, "h-12", "flex-1"], ["matPrefix", "", "className", "backoffice-magnifying-glass text-xl mr-2"], ["matInput", "", "placeholder", "Filter triggers...", 1, "rounded-none", 3, "ngModel", "ngModelChange"], [4, "ngIf", "ngIfElse"], ["load_state", ""], ["empty_state", ""], ["role", "table", "class", "overflow-x-auto", 4, "ngIf", "ngIfElse"], ["role", "table", 1, "overflow-x-auto"], ["table-head", ""], [1, "w-12", "p-2"], ["flex", "", 1, "flex-1", "p-2"], i18n_0, [1, "w-16", "p-2"], i18n_2, i18n_4, [1, "w-28", "p-2"], i18n_6, [1, "w-32", "p-2"], ["table-body", "", 1, "overflow-y-auto"], ["table-row", "", 4, "ngFor", "ngForOf"], ["table-row", ""], ["hidden", "", "binding", "", "mod", "_TRIGGER__1", 3, "sys", "bind", "model", "modelChange"], [1, "w-12", "flex", "items-center", "justify-center", "h-full", "p-2"], [1, "h-2", "w-2", "rounded-full"], [1, "truncate", 3, "routerLink"], ["desc", "", 1, "w-16", "p-2"], ["desc", "", 1, "w-28", "p-2"], [1, "w-32", "p-2", "items-center", "justify-center"], ["mat-icon-button", "", 3, "click"], ["className", "backoffice-link"], ["className", "backoffice-edit"], ["className", "backoffice-trash"], [1, "flex", "flex-col", "items-center", "p-8", "mx-auto"], [1, "mb-4", 3, "diameter"]]; }, template: function SystemTriggersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemTriggersComponent_Template_button_click_1_listener() { return ctx.selectTrigger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SystemTriggersComponent_Template_input_ngModelChange_5_listener($event) { return ctx.filter$.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SystemTriggersComponent_ng_container_7_Template, 3, 4, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SystemTriggersComponent_ng_template_9_Template, 4, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SystemTriggersComponent_ng_template_11_Template, 3, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx.loading).triggers)("ngIfElse", _r1);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__["IconComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatPrefix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ui_binding_binding_directive__WEBPACK_IMPORTED_MODULE_12__["BindingDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _ui_pipes_date_from_pipe__WEBPACK_IMPORTED_MODULE_15__["DateFromPipe"]], styles: ["[_nghost-%COMP%] {\n                height: 100%;\n                width: 100%;\n                padding: 1rem;\n            }\n\n            [flex][_ngcontent-%COMP%] {\n                min-width: 8rem;\n            }\n\n            [role='table'][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n                width: 100%;\n                min-width: 36rem;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemTriggersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'system-triggers',
                template: `
        <section class="flex items-center mb-4 space-x-2">
            <button mat-button style="min-width: 8rem" (click)="selectTrigger()">Add Trigger</button>
            <mat-form-field appearance="outline" class="h-12 flex-1">
                <app-icon matPrefix className="backoffice-magnifying-glass text-xl mr-2"></app-icon>
                <input
                    [ngModel]="''"
                    (ngModelChange)="filter$.next($event)"
                    matInput
                    placeholder="Filter triggers..."
                    class="rounded-none"
                />
            </mat-form-field>
        </section>
        <section>
            <ng-container *ngIf="!(loading | async).triggers; else load_state">
                <div
                    role="table"
                    class="overflow-x-auto"
                    *ngIf="(triggers | async)?.length; else empty_state"
                >
                    <div table-head>
                        <div class="w-12 p-2"></div>
                        <div flex class="flex-1 p-2" i18n="@@nameLabel">Name</div>
                        <div class="w-16 p-2" i18n="@@triggerCountLabel">Count</div>
                        <div class="w-16 p-2" i18n="@@triggerErrorsLabel">Errors</div>
                        <div class="w-28 p-2" i18n="@@descriptionLabel">Added</div>
                        <div class="w-32 p-2"></div>
                    </div>
                    <div table-body class="overflow-y-auto">
                        <div table-row *ngFor="let trigger of triggers | async; let i = index">
                            <i
                                hidden
                                binding
                                [sys]="item.id"
                                mod="_TRIGGER__1"
                                [bind]="trigger.id"
                                [(model)]="trigger_state[trigger.id]"
                                (modelChange)="updateComparisons(trigger.id)"
                            ></i>
                            <div class="w-12 flex items-center justify-center h-full p-2">
                                <div
                                    class="h-2 w-2 rounded-full"
                                    [class.bg-black]="!trigger_state[trigger.id]?.triggered"
                                    [class.bg-success]="trigger_state[trigger.id]?.triggered"
                                ></div>
                            </div>
                            <div flex class="flex-1 p-2">
                                <a class="truncate" [routerLink]="['/triggers', trigger.id]">{{
                                    trigger.name
                                }}</a>
                            </div>
                            <div desc class="w-16 p-2">
                                {{ trigger_state[trigger.id]?.trigger_count }}
                            </div>
                            <div desc class="w-16 p-2">
                                {{
                                    trigger_state[trigger.id]?.action_errors +
                                        trigger_state[trigger.id]?.comparison_errors || '0'
                                }}
                            </div>
                            <div desc class="w-28 p-2">
                                {{ +trigger.created_at * 1000 | dateFrom }}
                            </div>
                            <div class="w-32 p-2 items-center justify-center">
                                <button mat-icon-button (click)="copyWebhookURL(trigger)">
                                    <app-icon className="backoffice-link"></app-icon>
                                </button>
                                <button mat-icon-button (click)="editTrigger(trigger)">
                                    <app-icon className="backoffice-edit"></app-icon>
                                </button>
                                <button mat-icon-button (click)="deleteTrigger(trigger)">
                                    <app-icon className="backoffice-trash"></app-icon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </ng-container>
        </section>
        <ng-template #load_state>
            <div class="flex flex-col items-center p-8 mx-auto">
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>Loading triggers...</p>
            </div>
        </ng-template>
        <ng-template #empty_state>
            <div class="flex flex-col items-center p-8 mx-auto">
                <p>No triggers for system</p>
            </div>
        </ng-template>
    `,
                styles: [
                    `
            :host {
                height: 100%;
                width: 100%;
                padding: 1rem;
            }

            [flex] {
                min-width: 8rem;
            }

            [role='table'] > div {
                width: 100%;
                min-width: 36rem;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _system_state_service__WEBPACK_IMPORTED_MODULE_5__["SystemStateService"] }]; }, null); })();


/***/ }),

/***/ "2w4P":
/*!***************************************************!*\
  !*** ./src/app/systems/system-about.component.ts ***!
  \***************************************************/
/*! exports provided: SystemAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemAboutComponent", function() { return SystemAboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _system_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system-state.service */ "YG7R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ui_forms_settings_form_settings_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/forms/settings-form/settings-form.component */ "ZP2d");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _ui_pipes_date_from_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/pipes/date-from.pipe */ "8MW+");








function SystemAboutComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r3.item.support_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.item.support_url);
} }
function SystemAboutComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.item.bookable ? "Yes" : "No");
} }
function SystemAboutComponent_div_0_div_9_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "mailto:" + ctx_r11.item.email, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.item.email);
} }
function SystemAboutComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SystemAboutComponent_div_0_div_9_a_3_Template, 2, 2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.item.email);
} }
function SystemAboutComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.item.capacity);
} }
function SystemAboutComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.item.installed_ui_devices);
} }
function SystemAboutComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "dateFrom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx_r8.item.created_at * 1000));
} }
function SystemAboutComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "dateFrom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx_r9.item.updated_at * 1000));
} }
const _c20 = function () { return []; };
function SystemAboutComponent_div_0_section_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a-settings-form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r10.item.id)("merge", true)("settings", ctx_r10.item.settings)("merge_settings", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r10.other_settings) || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c20));
} }
function SystemAboutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemAboutComponent_div_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.start(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemAboutComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.stop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SystemAboutComponent_div_0_div_7_Template, 6, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SystemAboutComponent_div_0_div_8_Template, 5, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SystemAboutComponent_div_0_div_9_Template, 4, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SystemAboutComponent_div_0_div_10_Template, 5, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SystemAboutComponent_div_0_div_11_Template, 5, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SystemAboutComponent_div_0_div_12_Template, 6, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SystemAboutComponent_div_0_div_13_Template, 6, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "header", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](16, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SystemAboutComponent_div_0_section_17_Template, 3, 7, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.support_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.bookable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.bookable && ctx_r0.item.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.capacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.installed_ui_devices);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.created_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.settings && ctx_r0.other_settings)("ngIfElse", _r1);
} }
function SystemAboutComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 32);
} }
class SystemAboutComponent {
    constructor(_service) {
        this._service = _service;
        /** List of settings for associated modules, drivers and zones */
        this.other_settings = this._service.associated_settings;
        this.start = () => this._service.startSystem();
        this.stop = () => this._service.stopSystem();
    }
    get item() {
        return this._service.active_item;
    }
}
SystemAboutComponent.ɵfac = function SystemAboutComponent_Factory(t) { return new (t || SystemAboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_system_state_service__WEBPACK_IMPORTED_MODULE_1__["SystemStateService"])); };
SystemAboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SystemAboutComponent, selectors: [["system-about"]], decls: 3, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_systemStartAction$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS__1 = goog.getMsg(" Start System ");
        i18n_0 = MSG_EXTERNAL_systemStartAction$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS__1;
    }
    else {
        i18n_0 = $localize `:@@systemStartAction␟6b6a1db08fff3d2c62a69b58ade857ec837f953b␟8326158329170011500: Start System `;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_systemStopAction$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS__3 = goog.getMsg(" Stop System ");
        i18n_2 = MSG_EXTERNAL_systemStopAction$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:@@systemStopAction␟75a9ceef1582a4e9c9319f147e7f0a42614b28d8␟958300794550458513: Stop System `;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_settingsLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS__5 = goog.getMsg("Settings");
        i18n_4 = MSG_EXTERNAL_settingsLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:@@settingsLabel␟121cc5391cd2a5115bc2b3160379ee5b36cd7716␟4930506384627295710:Settings`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_systemUrlLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS___7 = goog.getMsg("Support URL:");
        i18n_6 = MSG_EXTERNAL_systemUrlLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS___7;
    }
    else {
        i18n_6 = $localize `:@@systemUrlLabel␟7e26fea74dd85099364f23205324001d5f08d729␟206794270698958656:Support URL:`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_systemBookableLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS___9 = goog.getMsg("Bookable Room:");
        i18n_8 = MSG_EXTERNAL_systemBookableLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS___9;
    }
    else {
        i18n_8 = $localize `:@@systemBookableLabel␟1729892dec33ddc3daf35f197b6882eb1c4a8a1b␟238801422848943760:Bookable Room:`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_emailLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS___11 = goog.getMsg("Email:\u00A0");
        i18n_10 = MSG_EXTERNAL_emailLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS___11;
    }
    else {
        i18n_10 = $localize `:@@emailLabel␟31703f614ddd8547d63317830a59c0a7b935778e␟8507709425849513695:Email: `;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_capacityLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS___13 = goog.getMsg("Capacity:");
        i18n_12 = MSG_EXTERNAL_capacityLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS___13;
    }
    else {
        i18n_12 = $localize `:@@capacityLabel␟a1170e85d1897210d5fe03d1f363587de15d02cd␟8062822823331512246:Capacity:`;
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_systemPanelCountLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS___15 = goog.getMsg("Installed Touch Panels:");
        i18n_14 = MSG_EXTERNAL_systemPanelCountLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS___15;
    }
    else {
        i18n_14 = $localize `:@@systemPanelCountLabel␟45b07d34ed29d3a5269b5bac86182781001845a9␟4375591254429334656:Installed Touch Panels:`;
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_systemCreatedAtLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS___17 = goog.getMsg("Created:");
        i18n_16 = MSG_EXTERNAL_systemCreatedAtLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS___17;
    }
    else {
        i18n_16 = $localize `:@@systemCreatedAtLabel␟a5ed099ffc9e96f6970df843289ade8a7d20ab9f␟1616250945945379783:Created:`;
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc \@systemUpdatedAtLabel
         */
        const MSG_EXTERNAL_1116759395536210856$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS___19 = goog.getMsg("Updated:");
        i18n_18 = MSG_EXTERNAL_1116759395536210856$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS___19;
    }
    else {
        i18n_18 = $localize `:@systemUpdatedAtLabel␟f94240161f912dbd8758b858877cddeab80f36cb␟1116759395536210856:Updated:`;
    } let i18n_21; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_systemLoadingLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS__22 = goog.getMsg("Loading system settings...");
        i18n_21 = MSG_EXTERNAL_systemLoadingLabel$$SRC_APP_SYSTEMS_SYSTEM_ABOUT_COMPONENT_TS__22;
    }
    else {
        i18n_21 = $localize `:@@systemLoadingLabel␟12761354f7c79edc553ff408524f5b791cd54481␟3385246531183416995:Loading system settings...`;
    } return [["class", "p-4", 4, "ngIf"], ["load_state", ""], [1, "p-4"], [1, "flex", "items-center", "space-x-2", "mb-4"], ["mat-button", "", 1, "flex-1", "sm:flex-none", 3, "click"], i18n_0, i18n_2, [1, "details"], ["class", "flex items-center space-x-2", 4, "ngIf"], [1, "my-4"], [1, "font-medium", "text-lg"], i18n_4, [4, "ngIf", "ngIfElse"], [1, "flex", "items-center", "space-x-2"], i18n_6, [1, "value"], ["target", "_blank", 1, "underline", 3, "href"], i18n_8, i18n_10, ["class", "underline", "target", "_blank", 3, "href", 4, "ngIf"], i18n_12, i18n_14, i18n_16, i18n_18, [3, "id", "merge", "settings", "merge_settings"], [1, "flex", "flex-col", "p-8", "items-center", "justify-center"], [1, "mb-4", 3, "diameter"], i18n_21]; }, template: function SystemAboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SystemAboutComponent_div_0_Template, 18, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SystemAboutComponent_ng_template_1_Template, 4, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _ui_forms_settings_form_settings_form_component__WEBPACK_IMPORTED_MODULE_4__["SettingsFormComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"]], pipes: [_ui_pipes_date_from_pipe__WEBPACK_IMPORTED_MODULE_6__["DateFromPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["button[_ngcontent-%COMP%] {\n            min-width: 8rem;\n        }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemAboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'system-about',
                template: `
        <div class="p-4" *ngIf="item">
            <section class="flex items-center space-x-2 mb-4">
                <button
                    mat-button
                    class="flex-1 sm:flex-none"
                    (click)="start()"
                    i18n="@@systemStartAction"
                >
                    Start System
                </button>
                <button
                    mat-button
                    class="flex-1 sm:flex-none"
                    (click)="stop()"
                    i18n="@@systemStopAction"
                >
                    Stop System
                </button>
            </section>
            <section class="details">
                <div class="flex items-center space-x-2" *ngIf="item.support_url">
                    <label i18n="@@systemUrlLabel">Support URL:</label>
                    <div class="value">
                        <a class="underline" [href]="item.support_url" target="_blank">{{ item.support_url }}</a>
                    </div>
                </div>
                <div class="flex items-center space-x-2" *ngIf="item.bookable">
                    <label i18n="@@systemBookableLabel">Bookable Room:</label>
                    <div class="value">{{ item.bookable ? 'Yes' : 'No' }}</div>
                </div>
                <div class="flex items-center space-x-2" *ngIf="item.bookable && item.email">
                    <label i18n="@@emailLabel">Email:&nbsp;</label>
                    <a *ngIf="item.email" class="underline" [href]="'mailto:' + item.email" target="_blank">{{
                        item.email
                    }}</a>
                </div>
                <div class="flex items-center space-x-2" *ngIf="item.capacity">
                    <label i18n="@@capacityLabel">Capacity:</label>
                    <div class="value">{{ item.capacity }}</div>
                </div>
                <div class="flex items-center space-x-2" *ngIf="item.installed_ui_devices">
                    <label i18n="@@systemPanelCountLabel">Installed Touch Panels:</label>
                    <div class="value">{{ item.installed_ui_devices }}</div>
                </div>
                <div class="flex items-center space-x-2" *ngIf="item.created_at">
                    <label i18n="@@systemCreatedAtLabel">Created:</label>
                    <div class="value">{{ item.created_at * 1000 | dateFrom }}</div>
                </div>
                <div class="flex items-center space-x-2" *ngIf="item.updated_at">
                    <label i18n="@systemUpdatedAtLabel">Updated:</label>
                    <div class="value">{{ item.updated_at * 1000 | dateFrom }}</div>
                </div>
            </section>
            <hr class="my-4" />
            <header class="font-medium text-lg" i18n="@@settingsLabel">Settings</header>
            <section *ngIf="item.settings && other_settings; else load_state">
                <a-settings-form
                    [id]="item.id"
                    [merge]="true"
                    [settings]="item.settings"
                    [merge_settings]="(other_settings | async) || []"
                ></a-settings-form>
            </section>
        </div>
        <ng-template #load_state>
            <div class="flex flex-col p-8 items-center justify-center">
                <mat-spinner class="mb-4" [diameter]="32"></mat-spinner>
                <p i18n="@@systemLoadingLabel">Loading system settings...</p>
            </div>
        </ng-template>
    `,
                styles: [`
        button {
            min-width: 8rem;
        }
    `],
            }]
    }], function () { return [{ type: _system_state_service__WEBPACK_IMPORTED_MODULE_1__["SystemStateService"] }]; }, null); })();


/***/ }),

/***/ "FN56":
/*!*****************************************************!*\
  !*** ./src/app/systems/system-modules.component.ts ***!
  \*****************************************************/
/*! exports provided: SystemModulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemModulesComponent", function() { return SystemModulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "K2Fw");
/* harmony import */ var src_app_common_base_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/base.class */ "fnpZ");
/* harmony import */ var src_app_overlays_view_module_state_view_module_state_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/overlays/view-module-state/view-module-state.component */ "DuJs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/notifications */ "GGZo");
/* harmony import */ var _system_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./system-state.service */ "YG7R");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_custom_fields_item_search_field_item_search_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui/custom-fields/item-search-field/item-search-field.component */ "wRAM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ui_custom_fields_system_exec_field_system_exec_field_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ui/custom-fields/system-exec-field/system-exec-field.component */ "kVT0");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _ui_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ui/context-menu/context-menu.component */ "zprZ");
/* harmony import */ var _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ui/icon/icon.component */ "BilL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");






















function SystemModulesComponent_ng_container_0_section_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "system-exec-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("system", ctx_r5.item)("refresh", ctx_r5.refresh_modules);
} }
function SystemModulesComponent_ng_container_0_ng_container_11_div_1_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 48);
} }
function SystemModulesComponent_ng_container_0_ng_container_11_div_1_div_13_app_icon_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-icon", 49);
} }
function SystemModulesComponent_ng_container_0_ng_container_11_div_1_div_13_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemModulesComponent_ng_container_0_ng_container_11_div_1_div_13_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const item_r15 = ctx.$implicit; const device_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r16.handleContextEvent(item_r15, device_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", item_r15.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r15.name);
} }
const _c16 = function (a1) { return ["/modules", a1]; };
const _c17 = function () { return { class: "backoffice-edit" }; };
const _c18 = function () { return { class: "backoffice-dots-three-vertical" }; };
function SystemModulesComponent_ng_container_0_ng_container_11_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextAction", function SystemModulesComponent_ng_container_0_ng_container_11_div_1_div_13_Template_div_contextAction_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const device_r9 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r19.handleContextEvent($event, device_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SystemModulesComponent_ng_container_0_ng_container_11_div_1_div_13_div_1_Template, 1, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemModulesComponent_ng_container_0_ng_container_11_div_1_div_13_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const device_r9 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r21.power(device_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function SystemModulesComponent_ng_container_0_ng_container_11_div_1_div_13_Template_a_contextmenu_7_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-checkbox", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SystemModulesComponent_ng_container_0_ng_container_11_div_1_div_13_Template_mat_checkbox_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const device_r9 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r23.toggleDebug(device_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SystemModulesComponent_ng_container_0_ng_container_11_div_1_div_13_app_icon_15_Template, 1, 0, "app-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemModulesComponent_ng_container_0_ng_container_11_div_1_div_13_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const device_r9 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r24.editModule(device_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "app-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "app-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-menu", null, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SystemModulesComponent_ng_container_0_ng_container_11_div_1_div_13_button_25_Template, 4, 2, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("context-menu", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-black", !device_r9.running)("bg-error", device_r9.running && !device_r9.connected)("bg-success", device_r9.running && !!device_r9.connected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c16, device_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (device_r9.driver == null ? null : device_r9.driver.name) || "<Unnamed>", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 18, ctx_r8.debugging)[device_r9.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 20, ctx_r8.bindings)[i_r10], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", device_r9.tls);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", device_r9.ip ? (device_r9.tls ? "https://" : "http://") + device_r9.ip : device_r9.uri, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](device_r9.ip || device_r9.uri);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c17));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c18));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", device_r9.running ? ctx_r8.menu_options : ctx_r8.offline_options);
} }
function SystemModulesComponent_ng_container_0_ng_container_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](10, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function SystemModulesComponent_ng_container_0_ng_container_11_div_1_Template_div_cdkDropListDropped_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r25.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SystemModulesComponent_ng_container_0_ng_container_11_div_1_div_13_Template, 26, 26, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 1, ctx_r7.modules));
} }
function SystemModulesComponent_ng_container_0_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SystemModulesComponent_ng_container_0_ng_container_11_div_1_Template, 15, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r6.modules)) == null ? null : tmp_0_0.length)("ngIfElse", _r3);
} }
function SystemModulesComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "item-search-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemModulesComponent_ng_container_0_Template_item_search_field_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.new_module = $event.id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemModulesComponent_ng_container_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.addModule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemModulesComponent_ng_container_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.newModule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SystemModulesComponent_ng_container_0_section_7_Template, 4, 2, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](10, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SystemModulesComponent_ng_container_0_ng_container_11_Template, 3, 4, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("query_fn", ctx_r0.query_fn)("exclude", ctx_r0.exclude_fn)("ngModel", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.new_module);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.id && ctx_r0.item.modules && !ctx_r0.hide_exec);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 7, ctx_r0.loading).modules)("ngIfElse", _r1);
} }
function SystemModulesComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading modules...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 48);
} }
function SystemModulesComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No devices for system");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SystemModulesComponent extends src_app_common_base_class__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_service, _dialog) {
        super();
        this._service = _service;
        this._dialog = _dialog;
        /** Whether a device should be listened to */
        this.device_listener = {};
        this.loading = this._service.loading;
        this.modules = this._service.modules;
        this.debugging = this._service.debug_state;
        this.bindings = this._service.module_bindings;
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
        this.query_fn = (_) => Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["queryModules"])({ q: _ }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_) => _.data));
        /** Function for excluding modules already within this system */
        this.exclude_fn = (item) => item.control_system_id === this.item.id || item.role === _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["PlaceDriverRole"].Logic;
        this.newModule = () => this._service.newModule();
        this.removeModule = (d) => this._service.removeModule(d);
        this.editModule = (d) => this._service.editModule(d);
        this.joinModule = (id) => this._service.joinModule(id);
        this.reloadModule = (d) => this._service.reloadModule(d);
        this.power = (d) => this._service.toggleModulePower(d);
        this.toggleDebug = (d) => this._service.toggleModuleDebug(d);
    }
    get item() {
        return this._service.active_item;
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
                    this.removeModule(device);
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
     * Update the state of the module
     * @param device Module to reload
     */
    reload(device) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["showModule"])(device.id).toPromise();
            for (const k in item) {
                if (item.hasOwnProperty(k)) {
                    device[k] = item[k];
                }
            }
        });
    }
    viewState(device) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modules = this._service.getModules();
            this._dialog.open(src_app_overlays_view_module_state_view_module_state_component__WEBPACK_IMPORTED_MODULE_4__["ViewModuleStateModalComponent"], { data: { system: this.item, module: device, devices: modules } });
        });
    }
    loadModule(device) {
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["loadModule"])(device.id)
            .toPromise()
            .then(() => Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_6__["notifySuccess"])(`Successfully loaded module "${device.name || device.id}"`), (err) => Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_6__["notifyError"])(`Error loading module. Error: ${JSON.stringify(err.response || err.message || err)}`));
    }
    /**
     * Handle drop event for reordering the devices
     * @param event Drag drop details
     */
    drop(event) {
        if (event && event.previousIndex !== event.currentIndex) {
            this._service.reorderModules(event.previousIndex, event.currentIndex);
        }
    }
    addModule() {
        if (!this.new_module)
            return;
        this.joinModule(this.new_module);
        this.new_module = '';
    }
}
SystemModulesComponent.ɵfac = function SystemModulesComponent_Factory(t) { return new (t || SystemModulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_system_state_service__WEBPACK_IMPORTED_MODULE_7__["SystemStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
SystemModulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SystemModulesComponent, selectors: [["system-modules"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_addExistingAction$$SRC_APP_SYSTEMS_SYSTEM_MODULES_COMPONENT_TS__1 = goog.getMsg(" Add existing ");
        i18n_0 = MSG_EXTERNAL_addExistingAction$$SRC_APP_SYSTEMS_SYSTEM_MODULES_COMPONENT_TS__1;
    }
    else {
        i18n_0 = $localize `:@@addExistingAction␟8f50eee9d9b0eebaeadd97255bc3e5dc1f095c30␟4161166080314782574: Add existing `;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_newAction$$SRC_APP_SYSTEMS_SYSTEM_MODULES_COMPONENT_TS__3 = goog.getMsg(" Add new ");
        i18n_2 = MSG_EXTERNAL_newAction$$SRC_APP_SYSTEMS_SYSTEM_MODULES_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:@@newAction␟1f048f39d0b8565dc14a060ab7fa746e7f780f84␟778924775597593118: Add new `;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_moduleListHeader$$SRC_APP_SYSTEMS_SYSTEM_MODULES_COMPONENT_TS__5 = goog.getMsg("Module List");
        i18n_4 = MSG_EXTERNAL_moduleListHeader$$SRC_APP_SYSTEMS_SYSTEM_MODULES_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:@@moduleListHeader␟d6444eff6432d536c4d50ba42a33099ce5f7088b␟8179099976175023415:Module List`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_execHeader$$SRC_APP_SYSTEMS_SYSTEM_MODULES_COMPONENT_TS___7 = goog.getMsg("Execute command");
        i18n_6 = MSG_EXTERNAL_execHeader$$SRC_APP_SYSTEMS_SYSTEM_MODULES_COMPONENT_TS___7;
    }
    else {
        i18n_6 = $localize `:@@execHeader␟35f05bbd8314aa4af70300d377f1c64c8128207c␟8077695877143433436:Execute command`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_moduleStateLabel$$SRC_APP_SYSTEMS_SYSTEM_MODULES_COMPONENT_TS____9 = goog.getMsg("State");
        i18n_8 = MSG_EXTERNAL_moduleStateLabel$$SRC_APP_SYSTEMS_SYSTEM_MODULES_COMPONENT_TS____9;
    }
    else {
        i18n_8 = $localize `:@@moduleStateLabel␟873b72903b1858a9cd6c8967521030b4d7d1435b␟5911214550882917183:State`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_moduleNameLabel$$SRC_APP_SYSTEMS_SYSTEM_MODULES_COMPONENT_TS____11 = goog.getMsg("Name");
        i18n_10 = MSG_EXTERNAL_moduleNameLabel$$SRC_APP_SYSTEMS_SYSTEM_MODULES_COMPONENT_TS____11;
    }
    else {
        i18n_10 = $localize `:@@moduleNameLabel␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_moduleClassLabel$$SRC_APP_SYSTEMS_SYSTEM_MODULES_COMPONENT_TS____13 = goog.getMsg("Class");
        i18n_12 = MSG_EXTERNAL_moduleClassLabel$$SRC_APP_SYSTEMS_SYSTEM_MODULES_COMPONENT_TS____13;
    }
    else {
        i18n_12 = $localize `:@@moduleClassLabel␟f60c6c571ed1e6266976ca261a2b2d0ebaa16c6e␟4378796785985219718:Class`;
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_moduleIpLabel$$SRC_APP_SYSTEMS_SYSTEM_MODULES_COMPONENT_TS____15 = goog.getMsg("IP/URI");
        i18n_14 = MSG_EXTERNAL_moduleIpLabel$$SRC_APP_SYSTEMS_SYSTEM_MODULES_COMPONENT_TS____15;
    }
    else {
        i18n_14 = $localize `:@@moduleIpLabel␟2217451678c314dac35bbb2eb4f0e378dc6489b4␟3770692832990652705:IP/URI`;
    } return [[4, "ngIf"], ["load_state", ""], ["empty_state", ""], ["add-module", "", 1, "flex", "space-x-2", "flex-wrap", "mb-2"], ["name", "module", 1, "flex-grow-1", "w-full", "sm:flex-1", "sm:w-auto", "h-12", 3, "query_fn", "exclude", "ngModel", "ngModelChange"], ["mat-button", "", 1, "flex-1", "w-40", "sm:w-32", "sm:flex-none", "h-11", 3, "disabled", "click"], i18n_0, ["mat-button", "", 1, "flex-1", "w-40", "sm:w-32", "sm:flex-none", "h-11", 3, "click"], i18n_2, ["exec", "", "class", "mb-2", 4, "ngIf"], ["device-list", ""], [1, "font-medium", "text-lg", "mb-2"], i18n_4, [4, "ngIf", "ngIfElse"], ["exec", "", 1, "mb-2"], i18n_6, [3, "system", "refresh"], ["role", "table", "class", "overflow-x-auto", 4, "ngIf", "ngIfElse"], ["role", "table", 1, "overflow-x-auto"], ["table-head", ""], [1, "w-12", "p-2"], i18n_8, [1, "flex-1", "p-2"], i18n_10, [1, "w-48", "p-2"], i18n_12, i18n_14, [1, "w-24", "p-2", "h-9"], ["body", "", "cdkDropList", "", 1, "overflow-y-auto", 3, "cdkDropListDropped"], ["table-row", "", "cdkDrag", "", 3, "context-menu", "contextAction", 4, "ngFor", "ngForOf"], ["table-row", "", "cdkDrag", "", 3, "context-menu", "contextAction"], ["class", "w-full h-10 border-2 border-dashed border-gray-600 bg-gray-300 bg-opacity-25", 4, "cdkDragPlaceholder"], [1, "w-12", "flex", "justify-center", "h-full", "p-2", 2, "cursor", "grab"], ["className", "backoffice-select-arrows", "cdkDragHandle", ""], [1, "w-12", "flex", "items-center", "justify-center", "p-2", "h-10"], ["dot", "", 1, "h-4", "w-4", "rounded-full", 3, "click"], [1, "flex-1", "p-2", "h-10"], [1, "truncate", 3, "routerLink", "contextmenu"], [3, "checked", "change"], [1, "w-48", "text-right", "flex", "items-center", "h-full", "p-2"], ["className", "backoffice-lock", 4, "ngIf"], [1, "truncate", 3, "href"], [1, "w-24", "flex", "px-2"], ["mat-icon-button", "", 3, "click"], [3, "icon"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "w-full", "h-10", "border-2", "border-dashed", "border-gray-600", "bg-gray-300", "bg-opacity-25"], ["className", "backoffice-lock"], ["mat-menu-item", "", 3, "click"], [1, "text"], [1, "flex", "flex-col", "items-center", "p-8", "mx-auto"], [1, "mb-4", 3, "diameter"]]; }, template: function SystemModulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SystemModulesComponent_ng_container_0_Template, 13, 9, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SystemModulesComponent_ng_template_1_Template, 4, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SystemModulesComponent_ng_template_3_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ui_custom_fields_item_search_field_item_search_field_component__WEBPACK_IMPORTED_MODULE_10__["ItemSearchFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _ui_custom_fields_system_exec_field_system_exec_field_component__WEBPACK_IMPORTED_MODULE_13__["SystemExecFieldComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["CdkDrag"], _ui_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_15__["ContextMenuComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["CdkDragPlaceholder"], _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_16__["IconComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["CdkDragHandle"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterLinkWithHref"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckbox"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuItem"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                padding: 1rem;\n            }\n\n            button[mat-button][_ngcontent-%COMP%] {\n                min-width: 8rem;\n            }\n\n            button.mat-menu-item[_ngcontent-%COMP%] {\n                display: flex;\n                align-items: center;\n            }\n\n            button[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n                margin-left: 1rem;\n            }\n\n            [role=\"table\"][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n                width: 100%;\n                min-width: 48rem;\n            }\n\n            .bg-success[_ngcontent-%COMP%] {\n                height: .5rem !important;\n                width: .5rem !important;\n            }\n\n            [dot][_ngcontent-%COMP%] {\n                transition: height 200ms, width 200ms;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SystemModulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'system-modules',
                template: `
        <ng-container *ngIf="item">
            <section add-module class="flex space-x-2 flex-wrap mb-2">
                <item-search-field
                    class="flex-grow-1 w-full sm:flex-1 sm:w-auto h-12"
                    name="module"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [ngModel]="null"
                    (ngModelChange)="new_module = $event.id"
                ></item-search-field>
                <button
                    mat-button
                    class="flex-1 w-40 sm:w-32 sm:flex-none h-11"
                    [disabled]="!new_module"
                    (click)="addModule()"
                    i18n="@@addExistingAction"
                >
                    Add existing
                </button>
                <button
                    mat-button
                    class="flex-1 w-40 sm:w-32 sm:flex-none h-11"
                    (click)="newModule()"
                    i18n="@@newAction"
                >
                    Add new
                </button>
            </section>
            <section exec *ngIf="item.id && item.modules && !hide_exec" class="mb-2">
                <h3 class="font-medium text-lg mb-2" i18n="@@execHeader">Execute command</h3>
                <system-exec-field [system]="item" [refresh]="refresh_modules"></system-exec-field>
            </section>
            <section device-list>
                <h3 class="font-medium text-lg mb-2" i18n="@@moduleListHeader">Module List</h3>
                <ng-container *ngIf="!(loading | async).modules; else load_state">
                    <div role="table" class="overflow-x-auto" *ngIf="(modules | async)?.length; else empty_state">
                        <div table-head >
                            <div class="w-12 p-2"></div>
                            <div class="w-12 p-2" i18n="@@moduleStateLabel">State</div>
                            <div class="flex-1 p-2" i18n="@@moduleNameLabel">Name</div>
                            <div class="w-48 p-2" i18n="@@moduleClassLabel">Class</div>
                            <div class="w-48 p-2" i18n="@@moduleIpLabel">IP/URI</div>
                            <div class="w-24 p-2 h-9"></div>
                        </div>
                        <div
                            body
                            cdkDropList
                            (cdkDropListDropped)="drop($event)"
                            class="overflow-y-auto"
                        >
                            <div table-row
                                cdkDrag
                                *ngFor="let device of modules | async; let i = index"
                                [context-menu]="menu"
                                (contextAction)="handleContextEvent($event, device)"
                            >
                                <div
                                    class="w-full h-10 border-2 border-dashed border-gray-600 bg-gray-300 bg-opacity-25"
                                    *cdkDragPlaceholder
                                ></div>
                                <div
                                    class="w-12 flex justify-center h-full p-2"
                                    style="cursor: grab"
                                >
                                    <app-icon
                                        className="backoffice-select-arrows"
                                        cdkDragHandle
                                    ></app-icon>
                                </div>
                                <div class="w-12 flex items-center justify-center p-2 h-10">
                                    <div
                                        dot
                                        class="h-4 w-4 rounded-full"
                                        [class.bg-black]="!device.running"
                                        [class.bg-error]="device.running && !device.connected"
                                        [class.bg-success]="device.running && !!device.connected"
                                        (click)="power(device)"
                                    ></div>
                                </div>
                                <div class="flex-1 p-2 h-10">
                                    <a
                                        [routerLink]="['/modules', device.id]"
                                        (contextmenu)="$event.stopPropagation()"
                                        class="truncate"
                                    >
                                        {{ device.driver?.name || '&lt;Unnamed&gt;' }}
                                    </a>
                                </div>
                                <div class="w-48 p-2">
                                    <mat-checkbox
                                        [checked]="(debugging | async)[device.id]"
                                        (change)="toggleDebug(device)"
                                    >
                                        {{ (bindings | async)[i] }}
                                    </mat-checkbox>
                                </div>
                                <div class="w-48 text-right flex items-center h-full p-2">
                                    <app-icon
                                        *ngIf="device.tls"
                                        className="backoffice-lock"
                                    ></app-icon>
                                    <a
                                        [href]="
                                            device.ip
                                                ? (device.tls ? 'https://' : 'http://') + device.ip
                                                : device.uri
                                        "
                                        class="truncate"
                                        >{{ device.ip || device.uri }}</a
                                    >
                                </div>
                                <div class="w-24 flex px-2">
                                    <button mat-icon-button (click)="editModule(device)">
                                        <app-icon [icon]="{ class: 'backoffice-edit' }"></app-icon>
                                    </button>
                                    <button mat-icon-button [matMenuTriggerFor]="menu">
                                        <app-icon
                                            [icon]="{ class: 'backoffice-dots-three-vertical' }"
                                        ></app-icon>
                                    </button>
                                    <mat-menu #menu="matMenu">
                                        <button
                                            mat-menu-item
                                            *ngFor="
                                                let item of device.running
                                                    ? menu_options
                                                    : offline_options
                                            "
                                            (click)="handleContextEvent(item, device)"
                                        >
                                            <app-icon [icon]="item.icon"></app-icon>
                                            <div class="text">{{ item.name }}</div>
                                        </button>
                                    </mat-menu>
                                </div>
                            </div>
                        </div>
                    </div>
                </ng-container>
            </section>
        </ng-container>
        <ng-template #load_state>
            <div class="flex flex-col items-center p-8 mx-auto">
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>Loading modules...</p>
            </div>
        </ng-template>
        <ng-template #empty_state>
            <div class="flex flex-col items-center p-8 mx-auto">
                <p>No devices for system</p>
            </div>
        </ng-template>
    `,
                styles: [
                    `
            :host {
                padding: 1rem;
            }

            button[mat-button] {
                min-width: 8rem;
            }

            button.mat-menu-item {
                display: flex;
                align-items: center;
            }

            button .text {
                margin-left: 1rem;
            }

            [role="table"] > div {
                width: 100%;
                min-width: 48rem;
            }

            .bg-success {
                height: .5rem !important;
                width: .5rem !important;
            }

            [dot] {
                transition: height 200ms, width 200ms;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _system_state_service__WEBPACK_IMPORTED_MODULE_7__["SystemStateService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "Py3l":
/*!*******************************************!*\
  !*** ./src/app/systems/systems.routes.ts ***!
  \*******************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _systems_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./systems.component */ "d8Vu");
/* harmony import */ var _system_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system-about.component */ "2w4P");
/* harmony import */ var _system_modules_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system-modules.component */ "FN56");
/* harmony import */ var _system_triggers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-triggers.component */ "0a2d");
/* harmony import */ var _system_zones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./system-zones.component */ "yi+l");
/* harmony import */ var _system_metadata_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./system-metadata.component */ "jqiC");
/* harmony import */ var _ui_extension_outlet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/extension-outlet.component */ "55V4");







const ROUTES = [
    {
        path: ':id',
        component: _systems_component__WEBPACK_IMPORTED_MODULE_0__["SystemsComponent"],
        children: [
            { path: '', redirectTo: 'about' },
            { path: 'about', component: _system_about_component__WEBPACK_IMPORTED_MODULE_1__["SystemAboutComponent"] },
            { path: 'modules', component: _system_modules_component__WEBPACK_IMPORTED_MODULE_2__["SystemModulesComponent"] },
            { path: 'triggers', component: _system_triggers_component__WEBPACK_IMPORTED_MODULE_3__["SystemTriggersComponent"] },
            { path: 'zones', component: _system_zones_component__WEBPACK_IMPORTED_MODULE_4__["SystemZonesComponent"] },
            { path: 'metadata', component: _system_metadata_component__WEBPACK_IMPORTED_MODULE_5__["SystemMetadataComponent"] },
            { path: 'extend/:id', component: _ui_extension_outlet_component__WEBPACK_IMPORTED_MODULE_6__["ExtensionOutletComponent"] },
            { path: '**', redirectTo: 'about' }
        ]
    },
    { path: '**', redirectTo: '-' }
];


/***/ }),

/***/ "YG7R":
/*!*************************************************!*\
  !*** ./src/app/systems/system-state.service.ts ***!
  \*************************************************/
/*! exports provided: SystemStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemStateService", function() { return SystemStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ "K2Fw");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/api */ "9Mvx");
/* harmony import */ var _common_general__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/general */ "auUi");
/* harmony import */ var _common_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/notifications */ "GGZo");
/* harmony import */ var _overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../overlays/item-modal/item-modal.component */ "D/9M");
/* harmony import */ var _overlays_select_item_modal_select_item_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../overlays/select-item-modal/select-item-modal.component */ "uxQG");
/* harmony import */ var _overlays_view_response_modal_view_response_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../overlays/view-response-modal/view-response-modal.component */ "av/m");
/* harmony import */ var _common_item_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/item.service */ "ty9M");
/* harmony import */ var _common_debug_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/debug.service */ "9umL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
















class SystemStateService {
    constructor(_state, _debug, _dialog) {
        this._state = _state;
        this._debug = _debug;
        this._dialog = _dialog;
        /** Observable of the active item */
        this.item = this._state.item;
        this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
        this._modules = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this._change = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        /** Observable for associated settings of the active item */
        this.associated_settings = this._state.all_item.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((item) => {
            if (!item || !(item instanceof _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["PlaceSystem"]))
                return [];
            return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["systemSettings"])(item.id);
        }));
        /** Observable of the counts of the active item */
        this.counts = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this._state.all_item, this._change]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((_) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const [item] = _;
            if (!item || !(item instanceof _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["PlaceSystem"]))
                return {};
            this._loading.next(Object.assign(Object.assign({}, this._loading.getValue()), { settings: true }));
            const details = yield Promise.all([
                Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["listSystemTriggers"])(item.id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((d) => d.total))
                    .toPromise(),
                Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["showMetadata"])(item.id).toPromise(),
            ]);
            const [triggers, metadata] = details;
            this._loading.next(Object.assign(Object.assign({}, this._loading.getValue()), { settings: false }));
            return {
                devices: item.modules.length,
                zones: item.zones.length,
                triggers,
                metadata: metadata.length,
            };
        })));
        /** Observable for modules associated with system */
        this.modules = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.item, this._change]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((_) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = _[0];
            if (!item || !(item instanceof _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["PlaceSystem"]))
                return [];
            this._loading.next(Object.assign(Object.assign({}, this._loading.getValue()), { modules: true }));
            const modules = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["queryModules"])({
                control_system_id: item.id,
                complete: true,
                limit: 200,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((i) => i.data))
                .toPromise();
            this._loading.next(Object.assign(Object.assign({}, this._loading.getValue()), { modules: false }));
            this._modules.next(modules);
            return modules;
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])());
        /** Observable for debug state of the active modules */
        this.debug_state = this.modules.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((modules) => {
            return modules.reduce((mapping, device) => {
                mapping[device.id] = this._debug.isListening(device);
                return mapping;
            }, {});
        }));
        /** Observable for module bindings */
        this.module_bindings = this.modules.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((modules) => modules.map((mod) => `${mod.custom_name || mod.name || 'Blank'}_${Object(_common_api__WEBPACK_IMPORTED_MODULE_6__["calculateModuleIndex"])(modules, mod)}`)));
        /** Observable for zones associated with system */
        this.zones = this._state.item.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((item) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!item || !(item instanceof _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["PlaceSystem"]))
                return [];
            this._loading.next(Object.assign(Object.assign({}, this._loading.getValue()), { zones: true }));
            const zones = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["listSystemZones"])(item.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((i) => i.data))
                .toPromise();
            this._loading.next(Object.assign(Object.assign({}, this._loading.getValue()), { zones: false }));
            return zones;
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])());
        /** Observable for triggers associated with system */
        this.triggers = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.item, this._change]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((_) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const [item] = _;
            if (!item || !(item instanceof _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["PlaceSystem"]))
                return [];
            this._loading.next(Object.assign(Object.assign({}, this._loading.getValue()), { triggers: true }));
            const triggers = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["listSystemTriggers"])(item.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((i) => i.data))
                .toPromise();
            this._loading.next(Object.assign(Object.assign({}, this._loading.getValue()), { triggers: false }));
            return triggers;
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])());
        /** Observable of the active item */
        this.loading = this._loading.asObservable();
        this.getModules = () => this._modules.getValue();
    }
    /** Observable of the active item */
    get active_item() {
        return this._state.active_item;
    }
    /**
     * Open confirmation modal for stopping the active system
     */
    startSystem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const details = yield this.confirm({
                title: 'Start system?',
                content: `Are you sure you want to start this system?<br>All stopped modules within the system will boot up.`,
                icon: { type: 'icon', class: 'backoffice-controller-play' },
            });
            if (details && details.reason) {
                details.loading('Starting system...');
                const resp = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["startSystem"])(this.active_item.id)
                    .toPromise()
                    .catch((err) => {
                    Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifyError"])(`Failed to start system: ${JSON.stringify(err.response || err.message || err)}`);
                    return err;
                });
                if (!resp)
                    Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifySuccess"])(`Successfully started system`);
                details.close();
            }
        });
    }
    /**
     * Open confirmation modal for stopping the active system
     */
    stopSystem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const details = yield this.confirm({
                title: 'Stop system?',
                content: `Are you sure you want to stop this system?<br>All modules will be immediately stopped regardless of any other systems they may be in.`,
                icon: { type: 'icon', class: 'backoffice-controller-stop' },
            });
            if (!details || !details.reason)
                return;
            details.loading('Stopping system...');
            const resp = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["stopSystem"])(this.active_item.id)
                .toPromise()
                .catch((err) => {
                Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifyError"])(`Failed to stop system: ${JSON.stringify(err.response || err.message || err)}`);
                return err;
            });
            if (!resp)
                Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifySuccess"])(`Successfully stopped system`);
            details.close();
        });
    }
    toggleModuleDebug(device) {
        if (!device)
            return;
        if (this._debug.isListening(device)) {
            this._debug.unbind(device);
        }
        else {
            this._debug.bind(device, `${device.custom_name || device.name || 'Blank'}_${Object(_common_api__WEBPACK_IMPORTED_MODULE_6__["calculateModuleIndex"])(this._modules.getValue(), device)}`);
        }
    }
    newModule() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const module = yield this._state.create(new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["PlaceModule"]()).catch((_) => null);
            if (!module)
                return;
            this.joinModule(module.id);
        });
    }
    editModule(device) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._state.edit(device).catch((_) => null);
            this._change.next(!this._change.getValue());
        });
    }
    selectTrigger() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ref = this._dialog.open(_overlays_select_item_modal_select_item_modal_component__WEBPACK_IMPORTED_MODULE_10__["SelectItemModalComponent"], {
                data: {
                    service_name: 'Triggers',
                    query_fn: (_) => Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["queryTriggers"])({ q: _ }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((resp) => resp.data)),
                },
            });
            const details = yield Promise.race([
                ref.componentInstance.event.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])((_) => _.reason === 'action')).toPromise(),
                ref.afterClosed().toPromise(),
            ]);
            if (!details || !details.reason)
                return ref.close();
            yield this.addTrigger(ref.componentInstance.item);
            ref.close();
            this._change.next(!this._change.getValue());
        });
    }
    addTrigger(trigger) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["addSystemTrigger"])(this.active_item.id, {
                control_system_id: this.active_item.id,
                enabled: true,
                important: false,
                trigger_id: trigger.id,
            }).toPromise();
        });
    }
    editTrigger(trigger) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.item && trigger) {
                const ref = this._dialog.open(_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_9__["ItemCreateUpdateModalComponent"], {
                    height: 'auto',
                    width: 'auto',
                    maxHeight: 'calc(100vh - 2em)',
                    maxWidth: 'calc(100vw - 2em)',
                    data: {
                        item: trigger,
                        name: 'Trigger',
                        save: (item) => Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["updateTrigger"])(item.id, item),
                        external_save: true,
                    },
                });
                const details = yield Promise.race([
                    ref.componentInstance.event.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(_ => _.reason === 'action')).toPromise(),
                    ref.afterClosed().toPromise()
                ]);
                if (!details || !details.reason)
                    return;
                ref.componentInstance.loading = 'Saving trigger settings...';
                const url = `${Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["apiEndpoint"])()}/systems/${this.active_item.id}/triggers/${trigger.id}`;
                const trig = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["put"])(url, details.metadata).toPromise().catch(err => {
                    Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifyError"])(`Error updating trigger settings. Error: ${JSON.stringify(err.response || err.message || err)}`);
                    throw err;
                });
                ref.close();
                if (trig)
                    return;
                Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifySuccess"])(`Successfully updated trigger settings.`);
                ref.close();
                this._change.next(!this._change.getValue());
            }
        });
    }
    removeTrigger(trigger) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const details = yield this.confirm({
                title: `Remove trigger`,
                content: `<p>Are you sure you want remove trigger "${trigger.name}"?</p><p>Configuration will be updated <strong>immediately</strong>.</p>`,
                icon: { type: 'icon', class: 'backoffice-trash' },
            });
            if (!details || !details.reason)
                return;
            yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["removeSystemTrigger"])(this.active_item.id, trigger.id)
                .toPromise()
                .catch((err) => {
                details.close();
                Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifyError"])(`Error removing trigger ${trigger.id} from system. Error: ${err.statusText || err.message || err}`);
                throw err;
            });
            details.close();
            Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifySuccess"])(`Successfully removed trigger from system.`);
            this._change.next(!this._change.getValue());
        });
    }
    reorderModules(fst, snd) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const details = yield this.confirm({
                title: 'Change order?',
                content: `Are you sure you want to change the module priority?<br>Settings will be updated immediately for the system.`,
                icon: { type: 'icon', class: 'backoffice-layers' },
            });
            if (!details || !details.reason)
                return;
            details.loading('Updating module order...');
            const list = [...this.active_item.modules];
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(list, fst, snd);
            const resp = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["updateSystem"])(this.active_item.id, Object.assign(Object.assign({}, this.active_item), { modules: list }))
                .toPromise()
                .catch((err) => {
                Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifyError"])(`Failed to reorder system modules: ${JSON.stringify(err.response || err.message || err)}`);
                return err;
            });
            if (!resp)
                Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifySuccess"])(`Successfully reordered system modules.`);
            details.close();
        });
    }
    reorderZones(fst, snd) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const details = yield this.confirm({
                title: 'Change order?',
                content: `Are you sure you want to change the zone priority?<br>Settings will be updated immediately for the system.`,
                icon: { type: 'icon', class: 'backoffice-layers' },
            });
            if (!details || !details.reason)
                return;
            details.loading('Updating zone order...');
            const list = [...this.active_item.zones];
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(list, fst, snd);
            const resp = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["updateSystem"])(this.active_item.id, Object.assign(Object.assign({}, this.active_item), { zones: list }))
                .toPromise()
                .catch((err) => {
                Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifyError"])(`Failed to reorder system zones: ${JSON.stringify(err.response || err.message || err)}`);
                return err;
            });
            if (!resp)
                Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifySuccess"])(`Successfully reordered system zones.`);
            details.close();
        });
    }
    /**
     * Associate module with the active system
     * @param id ID of the module to associate with the active system
     */
    joinModule(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const system = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["addSystemModule"])(this.active_item.id, id)
                .toPromise()
                .catch((err) => {
                Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifyError"])(`Error adding module ${id} to system. Error: ${err.statusText || err.message || err}`);
            });
            if (!system)
                return;
            this._state.replaceItem(system);
            Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifySuccess"])(`Successfully added module to system.`);
        });
    }
    /**
     * Remove associated module from the active system
     * @param id ID of the module to disassociate with the active system
     */
    removeModule(device) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const details = yield this.confirm({
                title: 'Remove module?',
                content: `Remove ${device.driver_id} from this system?<br>If this is not used elsewhere the associated data will be removed immediately.`,
                icon: { type: 'icon', class: 'backoffice-trash' },
            });
            if (!details || !details.reason)
                return;
            const system = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["removeSystemModule"])(this.active_item.id, device.id)
                .toPromise()
                .catch((err) => {
                Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifyError"])(`Error removing module ${device.id} from system. Error: ${err.statusText || err.message || err}`);
            });
            details.close();
            if (!system)
                return;
            this._state.replaceItem(system);
            Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifySuccess"])(`Successfully removed module from system.`);
        });
    }
    /**
     * Reload module from the active system
     * @param id ID of the module to disassociate with the active system
     */
    reloadModule(device) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const details = yield this.confirm({
                title: 'Recompile module?',
                content: `New driver code will be loaded and the device settings will be reloaded.`,
                icon: { type: 'icon', class: 'backoffice-install' },
            });
            if (!details || !details.reason)
                return;
            details.loading('Recompiling and reloading driver...');
            yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["recompileDriver"])(((_a = device.driver) === null || _a === void 0 ? void 0 : _a.id) || device.driver_id)
                .toPromise()
                .catch((err) => {
                Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifyError"])(`Error removing module ${device.id} from system. Error: ${err.statusText || err.message || err}`);
                throw err;
            });
            Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifySuccess"])(`Successfully removed module from system.`);
            details.close();
        });
    }
    /**
     * Remove associated module from the active system
     * @param id ID of the module to disassociate with the active system
     */
    addZone(zone) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const zones = Object(_common_general__WEBPACK_IMPORTED_MODULE_7__["unique"])([...this.active_item.zones, zone.id]);
            const system = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["updateSystem"])(this.active_item.id, Object.assign(Object.assign({}, this.active_item), { zones }))
                .toPromise()
                .catch((err) => {
                Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifyError"])(`Error adding zone ${zone.id} to system. Error: ${err.statusText || err.message || err}`);
            });
            if (!system)
                return;
            this._state.replaceItem(system);
            Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifySuccess"])(`Successfully added zone to system.`);
        });
    }
    /**
     * Remove associated module from the active system
     * @param id ID of the module to disassociate with the active system
     */
    removeZone(zone) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const details = yield this.confirm({
                title: 'Remove zone?',
                content: `<p>Are you sure you want remove zone "${zone.name}" from the system?</p>Configuration will be updated immediately.`,
                icon: { type: 'icon', class: 'backoffice-trash' },
            });
            if (!details || !details.reason)
                return;
            const zones = this.active_item.zones.filter((z) => z !== zone.id);
            const system = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["updateSystem"])(this.active_item.id, Object.assign(Object.assign({}, this.active_item), { zones }))
                .toPromise()
                .catch((err) => {
                Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifyError"])(`Error removing zone ${zone.id} from system. Error: ${err.statusText || err.message || err}`);
            });
            details.close();
            if (!system)
                return;
            this._state.replaceItem(system);
            Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifySuccess"])(`Successfully removed zone from system.`);
        });
    }
    /**
     * Toggle the power state
     * @param device Module to toggle the power state
     */
    toggleModulePower(device) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const method = device.running ? _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["stopModule"] : _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["startModule"];
            yield method(device.id)
                .toPromise()
                .catch((err) => {
                if (typeof err === 'string' && err.length < 64) {
                    Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifyError"])(err);
                }
                else {
                    Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifyError"])(`Failed to ${device.running ? 'stop' : 'start'} module '${device.id}'.\nView Error?`, 'View', () => this.viewDetails(err));
                }
                throw err;
            });
            Object(_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifySuccess"])(`Module successfully ${device.running ? 'stopped' : 'started'}`);
            device.running = !device.running;
        });
    }
    /** View Results of the execute */
    viewDetails(content) {
        this._dialog.open(_overlays_view_response_modal_view_response_modal_component__WEBPACK_IMPORTED_MODULE_11__["ViewResponseModalComponent"], {
            data: { content },
        });
    }
    confirm(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return Object(_common_general__WEBPACK_IMPORTED_MODULE_7__["openConfirmModal"])(data, this._dialog);
        });
    }
}
SystemStateService.ɵfac = function SystemStateService_Factory(t) { return new (t || SystemStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_common_item_service__WEBPACK_IMPORTED_MODULE_12__["ActiveItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_common_debug_service__WEBPACK_IMPORTED_MODULE_13__["PlaceDebugService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"])); };
SystemStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SystemStateService, factory: SystemStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SystemStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _common_item_service__WEBPACK_IMPORTED_MODULE_12__["ActiveItemService"] }, { type: _common_debug_service__WEBPACK_IMPORTED_MODULE_13__["PlaceDebugService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "bWXK":
/*!*******************************************!*\
  !*** ./src/app/systems/systems.module.ts ***!
  \*******************************************/
/*! exports provided: AppSystemsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSystemsModule", function() { return AppSystemsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _systems_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./systems.routes */ "Py3l");
/* harmony import */ var _systems_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./systems.component */ "d8Vu");
/* harmony import */ var _system_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./system-about.component */ "2w4P");
/* harmony import */ var _system_modules_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./system-modules.component */ "FN56");
/* harmony import */ var _system_triggers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./system-triggers.component */ "0a2d");
/* harmony import */ var _system_zones_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./system-zones.component */ "yi+l");
/* harmony import */ var _system_metadata_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./system-metadata.component */ "jqiC");
/* harmony import */ var src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/ui/ui.module */ "oRDy");















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
        _system_about_component__WEBPACK_IMPORTED_MODULE_7__["SystemAboutComponent"],
        _system_modules_component__WEBPACK_IMPORTED_MODULE_8__["SystemModulesComponent"],
        _system_triggers_component__WEBPACK_IMPORTED_MODULE_9__["SystemTriggersComponent"],
        _system_zones_component__WEBPACK_IMPORTED_MODULE_10__["SystemZonesComponent"],
        _system_metadata_component__WEBPACK_IMPORTED_MODULE_11__["SystemMetadataComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_12__["SharedContentModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppSystemsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _systems_component__WEBPACK_IMPORTED_MODULE_6__["SystemsComponent"],
                    _system_about_component__WEBPACK_IMPORTED_MODULE_7__["SystemAboutComponent"],
                    _system_modules_component__WEBPACK_IMPORTED_MODULE_8__["SystemModulesComponent"],
                    _system_triggers_component__WEBPACK_IMPORTED_MODULE_9__["SystemTriggersComponent"],
                    _system_zones_component__WEBPACK_IMPORTED_MODULE_10__["SystemZonesComponent"],
                    _system_metadata_component__WEBPACK_IMPORTED_MODULE_11__["SystemMetadataComponent"]
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

/***/ "d8Vu":
/*!**********************************************!*\
  !*** ./src/app/systems/systems.component.ts ***!
  \**********************************************/
/*! exports provided: SystemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemsComponent", function() { return SystemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_base_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/base.class */ "fnpZ");
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/api */ "9Mvx");
/* harmony import */ var _system_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-state.service */ "YG7R");
/* harmony import */ var _ui_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/sidebar/sidebar.component */ "BGbG");
/* harmony import */ var _ui_item_display_item_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/item-display/item-display.component */ "Iv9d");







class SystemsComponent extends _common_base_class__WEBPACK_IMPORTED_MODULE_1__["BaseClass"] {
    constructor(_service) {
        super();
        this._service = _service;
        this.name = 'systems';
        this.tab_list = [];
    }
    get extensions() {
        return Object(_common_api__WEBPACK_IMPORTED_MODULE_2__["extensionsForItem"])(this._service.active_item, this.name);
    }
    updateTabList(counts) {
        this.tab_list = [
            { id: 'about', name: 'About', icon: { class: 'backoffice-info-with-circle' } },
            {
                id: 'modules',
                name: 'Modules',
                count: counts.devices,
                icon: { class: 'backoffice-tablet' },
            },
            {
                id: 'zones',
                name: 'Zones',
                count: counts.zones,
                icon: { class: 'backoffice-layers' },
            },
            {
                id: 'triggers',
                name: 'Triggers',
                count: counts.triggers,
                icon: { class: 'backoffice-stopwatch' },
            },
            {
                id: 'metadata',
                name: 'Metadata',
                count: counts.metadata,
                icon: { class: 'backoffice-gist' },
            },
        ].concat(this.extensions);
    }
    ngOnInit() {
        this.updateTabList({});
        this.subscription('counts', this._service.counts.subscribe((counts) => this.updateTabList(counts)));
    }
}
SystemsComponent.ɵfac = function SystemsComponent_Factory(t) { return new (t || SystemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_system_state_service__WEBPACK_IMPORTED_MODULE_3__["SystemStateService"])); };
SystemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SystemsComponent, selectors: [["app-systems"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 1, consts: [[1, "flex-1", "flex-col", "sm:flex-row", "flex", "h-full", "w-full", "relative"], ["heading", "Systems", "name", "systems", 1, "absolute", "top-0", "left-0", "h-12", "w-full", "sm:h-full", "sm:static"], ["name", "system", "route", "systems", 1, "flex-1", "relative", "mt-12", "sm:mt-0", 3, "tabs"]], template: function SystemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "sidebar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "item-display", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabs", ctx.tab_list);
    } }, directives: [_ui_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _ui_item_display_item_display_component__WEBPACK_IMPORTED_MODULE_5__["ItemDisplayComponent"]], styles: ["sidebar[_ngcontent-%COMP%] {\n                transition: height 300ms;\n            }\n            @media screen and (min-width: 640px) {\n                sidebar[_ngcontent-%COMP%] {\n                    width: 20em !important;\n                }\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-systems',
                template: `
        <div
            class="flex-1 flex-col sm:flex-row flex h-full w-full relative"
        >
            <sidebar
                heading="Systems"
                name="systems"
                class="absolute top-0 left-0 h-12 w-full sm:h-full sm:static"
            ></sidebar>
            <item-display
                name="system"
                route="systems"
                [tabs]="tab_list"
                class="flex-1 relative mt-12 sm:mt-0"
            ></item-display>
        </div>
    `,
                styles: [
                    `
            sidebar {
                transition: height 300ms;
            }
            @media screen and (min-width: 640px) {
                sidebar {
                    width: 20em !important;
                }
            }
        `,
                ],
            }]
    }], function () { return [{ type: _system_state_service__WEBPACK_IMPORTED_MODULE_3__["SystemStateService"] }]; }, null); })();


/***/ }),

/***/ "jqiC":
/*!******************************************************!*\
  !*** ./src/app/systems/system-metadata.component.ts ***!
  \******************************************************/
/*! exports provided: SystemMetadataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemMetadataComponent", function() { return SystemMetadataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ "K2Fw");
/* harmony import */ var src_app_common_base_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/base.class */ "fnpZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_common_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/validation */ "sJ8Q");
/* harmony import */ var src_app_overlays_metadata_details_modal_metadata_details_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/overlays/metadata-details-modal/metadata-details-modal.component */ "caat");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "g+Po");
/* harmony import */ var src_app_common_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/notifications */ "GGZo");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_common_item_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/item.service */ "ty9M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ui/icon/icon.component */ "BilL");
/* harmony import */ var _ui_custom_fields_settings_field_settings_field_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ui/custom-fields/settings-field/settings-field.component */ "YT8G");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");



















function SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_ng_container_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_ng_container_6_button_1_Template_button_click_0_listener($event) { return $event.stopPropagation(); })("click", function SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_ng_container_6_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.saveMetadata(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_ng_container_6_button_1_Template, 2, 0, "button", 17);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.deleteMetadata(item_r7.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c4));
} }
const _c5 = function () { return { class: "backoffice-edit" }; };
function SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_Template_div_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r20.editMetadataDetails(item_r7); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_ng_container_6_Template, 2, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_div_7_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "settings-form-field", 16);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SystemMetadataComponent_div_0_div_3_ng_container_2_mat_expansion_panel_1_Template, 10, 10, "mat-expansion-panel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.form_map[item_r7.name]);
} }
function SystemMetadataComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SystemMetadataComponent_div_0_div_3_ng_container_2_Template, 2, 1, "ng-container", 8);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SystemMetadataComponent_div_0_div_3_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.metadata && ctx_r0.metadata.length > 0)("ngIfElse", _r1);
} }
function SystemMetadataComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SystemMetadataComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 24);
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
        if (!form.valid)
            return Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_7__["notifyError"])(`JSON for property "${form.controls.name.value}" is invalid`);
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
SystemMetadataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SystemMetadataComponent, selectors: [["system-metadata"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_addMetadataAction$$SRC_APP_SYSTEMS_SYSTEM_METADATA_COMPONENT_TS__1 = goog.getMsg(" Add new Metadata Field ");
        i18n_0 = MSG_EXTERNAL_addMetadataAction$$SRC_APP_SYSTEMS_SYSTEM_METADATA_COMPONENT_TS__1;
    }
    else {
        i18n_0 = $localize `:@@addMetadataAction␟21539c364f82b6b766d912c3734a014cb30f27a9␟6503325999299484981: Add new Metadata Field `;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_saveAction$$SRC_APP_SYSTEMS_SYSTEM_METADATA_COMPONENT_TS_______3 = goog.getMsg(" Save ");
        i18n_2 = MSG_EXTERNAL_saveAction$$SRC_APP_SYSTEMS_SYSTEM_METADATA_COMPONENT_TS_______3;
    }
    else {
        i18n_2 = $localize `:@@saveAction␟baa3a276f05a6226cb663918714882c53b84da34␟25086637338905953: Save `;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_zoneMetadataEmpty$$SRC_APP_SYSTEMS_SYSTEM_METADATA_COMPONENT_TS__7 = goog.getMsg("No zone metadata found");
        i18n_6 = MSG_EXTERNAL_zoneMetadataEmpty$$SRC_APP_SYSTEMS_SYSTEM_METADATA_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:@@zoneMetadataEmpty␟4f7107b96342d0c3de0cf39c667c8ca2b7eee741␟7905411441108095194:No zone metadata found`;
    } return [["class", "p-4", 4, "ngIf"], ["empty_state", ""], ["load_state", ""], [1, "p-4"], ["mat-button", "", 3, "click"], i18n_0, ["class", "mt-4", 4, "ngIf", "ngIfElse"], [1, "mt-4"], [4, "ngFor", "ngForOf"], [3, "no-padding", "formGroup", 4, "ngIf"], [3, "formGroup"], ["edit", "", 1, "flex", "items-center", 3, "matTooltip", "click"], [3, "icon"], [4, "ngIf"], ["class", "contents", 4, "ngIf"], [1, "settings"], ["formControlName", "details", "lang", "json", 3, "readonly"], ["mat-button", "", 3, "click", 4, "ngIf", "ngIfElse"], i18n_2, [1, "contents"], ["mat-icon-button", "", 3, "click"], [1, "info-block"], [1, "text"], i18n_6, ["diameter", "32"]]; }, template: function SystemMetadataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SystemMetadataComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SystemMetadataComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SystemMetadataComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelTitle"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__["IconComponent"], _ui_custom_fields_settings_field_settings_field_component__WEBPACK_IMPORTED_MODULE_15__["SettingsFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"]], styles: ["[edit][_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n                opacity: 0;\n                transition: opacity 200ms;\n            }\n\n            [edit][_ngcontent-%COMP%]:hover   app-icon[_ngcontent-%COMP%] {\n                opacity: 1;\n            }\n\n            mat-panel-title[_ngcontent-%COMP%] {\n                display: flex;\n                align-items: center;\n                height: 1.2em;\n                overflow: visible;\n            }\n\n            mat-panel-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n                font-size: 0.8em;\n                background: none;\n                border: none;\n                text-decoration: underline;\n                color: inherit;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                height: 3em;\n            }\n\n            .settings[_ngcontent-%COMP%] {\n                width: 100%;\n                height: 30.35em;\n            }\n\n            .contents[_ngcontent-%COMP%] {\n                display: flex;\n                justify-content: flex-end;\n                flex: 1;\n                min-width: 2em;\n            }\n\n            .contents[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n                text-decoration: none;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemMetadataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'system-metadata',
                template: `
        <div class="p-4" *ngIf="item">
            <button mat-button (click)="newMetadata()" i18n="@@addMetadataAction">
                Add new Metadata Field
            </button>
            <div class="mt-4" *ngIf="metadata && metadata.length > 0; else empty_state">
                <mat-accordion>
                    <ng-container *ngFor="let item of metadata">
                        <mat-expansion-panel
                            [class.no-padding]="true"
                            *ngIf="form_map[item.name]"
                            [formGroup]="form_map[item.name]"
                        >
                            <mat-expansion-panel-header>
                                <mat-panel-title>
                                    <div
                                        edit
                                        class="flex items-center"
                                        [matTooltip]="
                                            form_map[item.name].controls.description.value
                                        "
                                        (click)="
                                            editMetadataDetails(item); $event.stopPropagation()
                                        "
                                    >
                                        {{ form_map[item.name].controls.name.value }}
                                        <app-icon [icon]="{ class: 'backoffice-edit' }"></app-icon>
                                    </div>
                                    <ng-container *ngIf="edited[item.name]">
                                        <button
                                            mat-button
                                            *ngIf="!loading[item.name]; else load_state"
                                            (click)="$event.stopPropagation()"
                                            (click)="saveMetadata(item)"
                                            i18n="@@saveAction"
                                        >
                                            Save
                                        </button>
                                    </ng-container>
                                    <div class="contents" *ngIf="!item.new">
                                        <button mat-icon-button (click)="deleteMetadata(item.name)">
                                            <app-icon
                                                [icon]="{ class: 'backoffice-trash' }"
                                            ></app-icon>
                                        </button>
                                    </div>
                                </mat-panel-title>
                            </mat-expansion-panel-header>
                            <div class="settings">
                                <settings-form-field
                                    formControlName="details"
                                    lang="json"
                                    [readonly]="false"
                                ></settings-form-field>
                            </div>
                        </mat-expansion-panel>
                    </ng-container>
                </mat-accordion>
            </div>
        </div>
        <ng-template #empty_state>
            <div class="info-block">
                <div class="text" i18n="@@zoneMetadataEmpty">No zone metadata found</div>
            </div>
        </ng-template>
        <ng-template #load_state>
            <mat-spinner diameter="32"></mat-spinner>
        </ng-template>
    `,
                styles: [
                    `
            [edit] app-icon {
                opacity: 0;
                transition: opacity 200ms;
            }

            [edit]:hover app-icon {
                opacity: 1;
            }

            mat-panel-title {
                display: flex;
                align-items: center;
                height: 1.2em;
                overflow: visible;
            }

            mat-panel-title button {
                font-size: 0.8em;
                background: none;
                border: none;
                text-decoration: underline;
                color: inherit;
            }

            mat-form-field {
                height: 3em;
            }

            .settings {
                width: 100%;
                height: 30.35em;
            }

            .contents {
                display: flex;
                justify-content: flex-end;
                flex: 1;
                min-width: 2em;
            }

            .contents button {
                text-decoration: none;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }, { type: src_app_common_item_service__WEBPACK_IMPORTED_MODULE_9__["ActiveItemService"] }]; }, null); })();


/***/ }),

/***/ "yi+l":
/*!***************************************************!*\
  !*** ./src/app/systems/system-zones.component.ts ***!
  \***************************************************/
/*! exports provided: SystemZonesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemZonesComponent", function() { return SystemZonesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ "K2Fw");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _system_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-state.service */ "YG7R");
/* harmony import */ var _ui_custom_fields_item_search_field_item_search_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/custom-fields/item-search-field/item-search-field.component */ "wRAM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/icon/icon.component */ "BilL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");













function SystemZonesComponent_ng_container_5_div_1_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 24);
} }
function SystemZonesComponent_ng_container_5_div_1_div_9_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemZonesComponent_ng_container_5_div_1_div_9_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const zone_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.removeZone(zone_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c4 = function (a1) { return ["/zones", a1]; };
function SystemZonesComponent_ng_container_5_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SystemZonesComponent_ng_container_5_div_1_div_9_div_1_Template, 1, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SystemZonesComponent_ng_container_5_div_1_div_9_button_10_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const zone_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c4, zone_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](zone_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](zone_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, ctx_r4.zones).length > 1);
} }
function SystemZonesComponent_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function SystemZonesComponent_ng_container_5_div_1_Template_div_cdkDropListDropped_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SystemZonesComponent_ng_container_5_div_1_div_9_Template, 12, 8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 1, ctx_r3.zones));
} }
function SystemZonesComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SystemZonesComponent_ng_container_5_div_1_Template, 11, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.zones)) == null ? null : tmp_0_0.length);
} }
function SystemZonesComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading zones...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 48);
} }
class SystemZonesComponent {
    constructor(_service) {
        this._service = _service;
        /** Whether zones for active item are loading */
        this.loading = this._service.loading;
        /** List of zones assoicated with the active item */
        this.zones = this._service.zones;
        /** Query function for systems */
        this.query_fn = (_) => Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["queryZones"])({ q: _ }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((resp) => resp.data));
        this.exclude_fn = (zone) => this.item.zones.indexOf(zone.id) >= 0;
        this.removeZone = (z) => this._service.removeZone(z);
        this.joinZone = (z) => this._service.addZone(z);
    }
    get item() {
        return this._service.active_item;
    }
    drop(event) {
        if (event && event.previousIndex !== event.currentIndex) {
            this._service.reorderZones(event.previousIndex, event.currentIndex);
        }
    }
}
SystemZonesComponent.ɵfac = function SystemZonesComponent_Factory(t) { return new (t || SystemZonesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_system_state_service__WEBPACK_IMPORTED_MODULE_3__["SystemStateService"])); };
SystemZonesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SystemZonesComponent, selectors: [["system-zones"]], decls: 9, vars: 8, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_nameLabel$$SRC_APP_SYSTEMS_SYSTEM_ZONES_COMPONENT_TS___1 = goog.getMsg("Name");
        i18n_0 = MSG_EXTERNAL_nameLabel$$SRC_APP_SYSTEMS_SYSTEM_ZONES_COMPONENT_TS___1;
    }
    else {
        i18n_0 = $localize `:@@nameLabel␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_descriptionLabel$$SRC_APP_SYSTEMS_SYSTEM_ZONES_COMPONENT_TS___3 = goog.getMsg("Description");
        i18n_2 = MSG_EXTERNAL_descriptionLabel$$SRC_APP_SYSTEMS_SYSTEM_ZONES_COMPONENT_TS___3;
    }
    else {
        i18n_2 = $localize `:@@descriptionLabel␟eec715de352a6b114713b30b640d319fa78207a0␟4902817035128594900:Description`;
    } return [[1, "flex", "items-center", "space-x-2", "mb-4"], ["name", "zone", 1, "flex-1", "h-12", 3, "query_fn", "exclude", "ngModel", "ngModelChange"], ["mat-button", "", 3, "disabled", "click"], [4, "ngIf", "ngIfElse"], ["load_state", ""], ["role", "table", "class", "overflow-x-auto", 4, "ngIf"], ["role", "table", 1, "overflow-x-auto"], ["table-head", ""], [1, "w-12", "p-2"], [1, "w-48", "p-2"], i18n_0, ["desc", "", 1, "flex-1", "p-2"], i18n_2, [1, "w-16", "p-2"], ["body", "", "cdkDropList", "", 1, "overflow-y-auto", 3, "cdkDropListDropped"], ["table-row", "", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["table-row", "", "cdkDrag", ""], ["class", "w-full h-10 border-2 border-dashed border-gray-600 bg-gray-300 bg-opacity-25", 4, "cdkDragPlaceholder"], [1, "w-12", "flex", "justify-center", "h-full", "p-2", 2, "cursor", "grab"], ["className", "backoffice-select-arrows", "cdkDragHandle", ""], [3, "routerLink"], ["desc", "", 1, "flex-1", "truncate"], [1, "w-16", "p-2", "items-center", "justify-center"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "w-full", "h-10", "border-2", "border-dashed", "border-gray-600", "bg-gray-300", "bg-opacity-25"], ["mat-icon-button", "", 3, "click"], ["className", "backoffice-trash"], [1, "flex", "flex-col", "items-center", "p-8", "mx-auto"], [1, "mb-4", 3, "diameter"]]; }, template: function SystemZonesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "item-search-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SystemZonesComponent_Template_item_search_field_ngModelChange_1_listener($event) { return ctx.new_zone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemZonesComponent_Template_button_click_2_listener() { return ctx.joinZone(ctx.new_zone); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Join zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SystemZonesComponent_ng_container_5_Template, 3, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SystemZonesComponent_ng_template_7_Template, 4, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("query_fn", ctx.query_fn)("exclude", ctx.exclude_fn)("ngModel", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.new_zone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, ctx.loading).zones)("ngIfElse", _r1);
    } }, directives: [_ui_custom_fields_item_search_field_item_search_field_component__WEBPACK_IMPORTED_MODULE_4__["ItemSearchFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["CdkDragPlaceholder"], _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__["IconComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["CdkDragHandle"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                height: 100%;\n                width: 100%;\n                padding: 1rem;\n            }\n\n            [desc][_ngcontent-%COMP%] {\n                min-width: 8rem;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemZonesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'system-zones',
                template: `
        <section class="flex items-center space-x-2 mb-4">
            <item-search-field
                name="zone"
                class="flex-1 h-12"
                [query_fn]="query_fn"
                [exclude]="exclude_fn"
                [ngModel]="null"
                (ngModelChange)="new_zone = $event"
            ></item-search-field>
            <button mat-button [disabled]="!new_zone" (click)="joinZone(new_zone)">Join zone</button>
        </section>
        <section>
            <ng-container *ngIf="!(loading | async).zones; else load_state">
                <div role="table" class="overflow-x-auto" *ngIf="(zones | async)?.length">
                    <div table-head>
                        <div class="w-12 p-2"></div>
                        <div class="w-48 p-2" i18n="@@nameLabel">Name</div>
                        <div desc class="flex-1 p-2" i18n="@@descriptionLabel">Description</div>
                        <div class="w-16 p-2"></div>
                    </div>
                    <div
                        body
                        cdkDropList
                        (cdkDropListDropped)="drop($event)"
                        class="overflow-y-auto"
                    >
                        <div table-row cdkDrag *ngFor="let zone of zones | async; let i = index">
                            <div
                                class="w-full h-10 border-2 border-dashed border-gray-600 bg-gray-300 bg-opacity-25"
                                *cdkDragPlaceholder
                            ></div>
                            <div class="w-12 flex justify-center h-full p-2" style="cursor: grab">
                                <app-icon
                                    className="backoffice-select-arrows"
                                    cdkDragHandle
                                ></app-icon>
                            </div>
                            <div class="w-48 p-2">
                                <a [routerLink]="['/zones', zone.id]">{{ zone.name }}</a>
                            </div>
                            <div desc class="flex-1 truncate">{{ zone.description }}</div>
                            <div class="w-16 p-2 items-center justify-center">
                                <button mat-icon-button *ngIf="(zones | async).length > 1" (click)="removeZone(zone)">
                                    <app-icon className="backoffice-trash"></app-icon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </ng-container>
        </section>
        <ng-template #load_state>
            <div class="flex flex-col items-center p-8 mx-auto">
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>Loading zones...</p>
            </div>
        </ng-template>
    `,
                styles: [
                    `
            :host {
                height: 100%;
                width: 100%;
                padding: 1rem;
            }

            [desc] {
                min-width: 8rem;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _system_state_service__WEBPACK_IMPORTED_MODULE_3__["SystemStateService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=systems-systems-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["triggers-triggers-module"],{

/***/ "2yaN":
/*!************************************************!*\
  !*** ./src/app/triggers/triggers.component.ts ***!
  \************************************************/
/*! exports provided: TriggersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriggersComponent", function() { return TriggersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "K2Fw");
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/api */ "9Mvx");
/* harmony import */ var _common_base_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/base.class */ "fnpZ");
/* harmony import */ var _common_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/item.service */ "ty9M");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _ui_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/sidebar/sidebar.component */ "BGbG");
/* harmony import */ var _ui_item_display_item_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/item-display/item-display.component */ "Iv9d");










class TriggersComponent extends _common_base_class__WEBPACK_IMPORTED_MODULE_4__["BaseClass"] {
    constructor(_service, _dialog) {
        super();
        this._service = _service;
        this._dialog = _dialog;
        this.name = 'triggers';
        this.show_options = this._service.show_options;
        this.tab_list = [];
    }
    get extensions() {
        return Object(_common_api__WEBPACK_IMPORTED_MODULE_3__["extensionsForItem"])(this._service.active_item, this.name);
    }
    updateTabList() {
        this.tab_list = [
            { id: 'about', name: 'About', icon: { class: 'backoffice-info-with-circle' } },
            {
                id: 'systems',
                name: 'Systems',
                count: this.system_count,
                icon: { class: 'backoffice-documents' },
            },
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
            const query = { offset: 0, limit: 1, trigger_id: item.id };
            // Get trigger count
            this.system_count = (yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["querySystems"])(query).toPromise()).total;
            this.updateTabList();
        });
    }
}
TriggersComponent.ɵfac = function TriggersComponent_Factory(t) { return new (t || TriggersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_item_service__WEBPACK_IMPORTED_MODULE_5__["ActiveItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
TriggersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TriggersComponent, selectors: [["app-triggers"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 1, consts: [[1, "flex-1", "flex-col", "sm:flex-row", "flex", "h-full", "w-full", "relative"], ["heading", "Triggers", "name", "triggers", 1, "absolute", "top-0", "left-0", "h-12", "w-full", "sm:h-full", "sm:static"], ["name", "trigger", "route", "triggers", 1, "flex-1", "relative", "mt-12", "sm:mt-0", 3, "tabs"]], template: function TriggersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "sidebar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "item-display", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabs", ctx.tab_list);
    } }, directives: [_ui_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _ui_item_display_item_display_component__WEBPACK_IMPORTED_MODULE_8__["ItemDisplayComponent"]], styles: ["sidebar[_ngcontent-%COMP%] {\n                transition: height 300ms;\n            }\n            @media screen and (min-width: 640px) {\n                sidebar[_ngcontent-%COMP%] {\n                    width: 20em !important;\n                }\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TriggersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-triggers',
                template: `
        <div
            class="flex-1 flex-col sm:flex-row flex h-full w-full relative"
        >
            <sidebar
                heading="Triggers"
                name="triggers"
                class="absolute top-0 left-0 h-12 w-full sm:h-full sm:static"
            ></sidebar>
            <item-display
                name="trigger"
                route="triggers"
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
    }], function () { return [{ type: _common_item_service__WEBPACK_IMPORTED_MODULE_5__["ActiveItemService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "9yHu":
/*!***********************************************************************!*\
  !*** ./src/app/triggers/trigger-systems/trigger-systems.component.ts ***!
  \***********************************************************************/
/*! exports provided: TriggerSystemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriggerSystemsComponent", function() { return TriggerSystemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "K2Fw");
/* harmony import */ var src_app_common_base_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/base.class */ "fnpZ");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "g+Po");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/notifications */ "GGZo");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_common_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/item.service */ "ty9M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/icon/icon.component */ "BilL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _ui_pipes_date_from_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/pipes/date-from.pipe */ "8MW+");
















const _c4 = function (a1) { return ["/systems", a1]; };
function TriggerSystemsComponent_div_0_table_2_tr_9_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trigger_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c4, trigger_r5.id))("matTooltip", trigger_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", trigger_r5.name, " ");
} }
const _c5 = function () { return { class: "backoffice-trash" }; };
function TriggerSystemsComponent_div_0_table_2_tr_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TriggerSystemsComponent_div_0_table_2_tr_9_a_4_Template, 2, 5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "dateFrom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TriggerSystemsComponent_div_0_table_2_tr_9_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const trigger_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r8.delete(trigger_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trigger_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", trigger_r5.bookable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", trigger_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, +trigger_r5.created_at * 1000));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c5));
} }
function TriggerSystemsComponent_div_0_table_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TriggerSystemsComponent_div_0_table_2_tr_9_Template, 11, 8, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.system_trigger_list);
} }
function TriggerSystemsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TriggerSystemsComponent_div_0_table_2_Template, 10, 1, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.system_trigger_list.length > 0)("ngIfElse", _r1);
} }
function TriggerSystemsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class TriggerSystemsComponent extends src_app_common_base_class__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_dialog, _service) {
        super();
        this._dialog = _dialog;
        this._service = _service;
        /** List of systems associated with the trigger */
        this.system_trigger_list = [];
        /** Map of systems ids to connected status */
        this.connected = {};
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.system_trigger_list = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["querySystems"])({
                trigger_id: this.item.id,
                offset,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((resp) => resp.data))
                .toPromise();
        });
    }
    /**
     * Delete the trigger from system
     */
    delete(trigger) {
        if (trigger) {
            const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["CONFIRM_METADATA"]), { data: {
                    title: `Remove trigger`,
                    content: `<p>Are you sure you want remove this trigger?</p><p>Deleting this trigger will <strong>immediately</strong> remove from the system "${trigger.system_name || ''}"</p>`,
                    icon: { type: 'icon', class: 'backoffice-trash' },
                } }));
            this.subscription('delete_confirm', ref.componentInstance.event.subscribe((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (event.reason === 'done') {
                    ref.componentInstance.loading = 'Removing trigger...';
                    yield this.deleteTrigger(trigger).catch((err) => {
                        ref.componentInstance.loading = null;
                        Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_6__["notifyError"])(`Error removing trigger. Error: ${JSON.stringify(err.response || err.message || err)}`);
                        throw err;
                    });
                    this.loadSystemTriggers();
                    ref.close();
                    this.unsub('delete_confirm');
                }
            })));
        }
    }
    /**
     * Remove the trigger from it's associated system
     * @param trigger Trigger to remove
     */
    deleteTrigger(trigger) {
        return new Promise((resolve, reject) => {
            const url = `${Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["apiEndpoint"])()}/systems/${trigger.system_id}/triggers/${trigger.id}`;
            Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["del"])(url).subscribe((_) => null, (_) => reject(_), () => resolve());
        });
    }
}
TriggerSystemsComponent.ɵfac = function TriggerSystemsComponent_Factory(t) { return new (t || TriggerSystemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_item_service__WEBPACK_IMPORTED_MODULE_8__["ActiveItemService"])); };
TriggerSystemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TriggerSystemsComponent, selectors: [["trigger-systems"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_systemTableName$$SRC_APP_TRIGGERS_TRIGGER_SYSTEMS_TRIGGER_SYSTEMS_COMPONENT_TS___1 = goog.getMsg("Name");
        i18n_0 = MSG_EXTERNAL_systemTableName$$SRC_APP_TRIGGERS_TRIGGER_SYSTEMS_TRIGGER_SYSTEMS_COMPONENT_TS___1;
    }
    else {
        i18n_0 = $localize `:@@systemTableName␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_systemTableAdded$$SRC_APP_TRIGGERS_TRIGGER_SYSTEMS_TRIGGER_SYSTEMS_COMPONENT_TS___3 = goog.getMsg("Added");
        i18n_2 = MSG_EXTERNAL_systemTableAdded$$SRC_APP_TRIGGERS_TRIGGER_SYSTEMS_TRIGGER_SYSTEMS_COMPONENT_TS___3;
    }
    else {
        i18n_2 = $localize `:@@systemTableAdded␟80e3b490720757978c99a7b5af3885faf202b955␟231679111972850796:Added`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_systemTableEmpty$$SRC_APP_TRIGGERS_TRIGGER_SYSTEMS_TRIGGER_SYSTEMS_COMPONENT_TS__7 = goog.getMsg("No systems with trigger");
        i18n_6 = MSG_EXTERNAL_systemTableEmpty$$SRC_APP_TRIGGERS_TRIGGER_SYSTEMS_TRIGGER_SYSTEMS_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:@@systemTableEmpty␟edad99e460bba0d0256ef0624907d8d26d84595b␟5399503921552553899:No systems with trigger`;
    } return [["class", "container", 4, "ngIf"], ["empty_state", ""], [1, "container"], [1, "settings"], [4, "ngIf", "ngIfElse"], [1, "small"], [1, "flex"], i18n_0, i18n_2, [4, "ngFor", "ngForOf"], [1, "state"], [3, "routerLink", "matTooltip", 4, "ngIf"], ["mat-icon-button", "", 3, "click"], [3, "icon"], [3, "routerLink", "matTooltip"], [1, "info-block"], [1, "text"], i18n_6]; }, template: function TriggerSystemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TriggerSystemsComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TriggerSystemsComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__["IconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"]], pipes: [_ui_pipes_date_from_pipe__WEBPACK_IMPORTED_MODULE_14__["DateFromPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.list[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n}\ntbody[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\ndiv[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  width: 2em;\n}\ndiv[_ngcontent-%COMP%]   .duo[_ngcontent-%COMP%] {\n  width: 4em;\n}\ndiv[_ngcontent-%COMP%]   .duo[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.action[_ngcontent-%COMP%] {\n  height: 1.5em;\n  width: 1.5em;\n  min-width: 1.5em;\n  border-radius: 0.65em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3em;\n}\n.action[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.state[_ngcontent-%COMP%] {\n  height: 1.5em;\n  width: 1.5em;\n  margin: 0.25em;\n  background-color: #d32f2f;\n  border-radius: 0.8em;\n  transition: margin 250ms, height 250ms, width 250ms, background-color 300ms;\n}\n.state.active[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  height: 0.75em;\n  width: 0.75em;\n  margin: 0.625em;\n}\n.select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.select[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL3RyaWdnZXItc3lzdGVtcy5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFxQ0E7O2NBQUE7QUFZQTs7ZUFBQTtBQU9BOztlQUFBO0FBZ0JBOztzQkFBQTtBQ3ZFQTtFQUNFLFlBQUE7QUFjRjtBQVhBO0VBQ0UsaUJBQUE7QUFjRjtBQVhBO0VBQ0UsZ0JBQUE7QUFjRjtBQWJFO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtBQWVKO0FBVkU7RUFDRSxVQUFBO0FBYUo7QUFYRTtFQUNFLFVBQUE7QUFhSjtBQVpJO0VBQ0Usb0JBQUE7QUFjTjtBQVRBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQVlGO0FBWEU7RUFDRSxvQ0FBQTtBQWFKO0FBVEE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkVBQUE7QUFZRjtBQVhFO0VBQ0UseUJENUNNO0VDNkNOLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQWFKO0FBVEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFZRjtBQVhFO0VBQ0UsT0FBQTtBQWFKIiwiZmlsZSI6InRyaWdnZXItc3lzdGVtcy5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0Y2FmNTA7XG4kc3VjY2Vzcy1saWdodDogIzY2YmI2YTtcbiRzdWNjZXNzLWRhcms6ICMwMDc5NmI7XG5cbiRwZW5kaW5nOiAjZmY4ZjAwO1xuJHBlbmRpbmctbGlnaHQ6ICNmZmMwNDY7XG4kcGVuZGluZy1kYXJrOiAjYzU2MDAwO1xuXG4kZXJyb3I6ICNmNDQzMzY7XG4kZXJyb3ItbGlnaHQ6ICNmZjZmNjA7XG4kZXJyb3ItZGFyazogI2FiMDAwZDtcblxuJGNvbG9yLXByaW1hcnk6ICNDOTIzNjY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogI2NkNTY4YTtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICNiNjAwNWQ7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM1QzY0RkY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiAjNzI3MmU3O1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiAjNTU1N2QxO1xuXG4kY29sb3ItZGV2ZWxvcDogI2YwZjBmMDtcbiRjb2xvci1kZXZlbG9wLWxpZ2h0OiAjZmZmO1xuJGNvbG9yLWRldmVsb3AtZGFyazogI2UwZTBlMDtcblxuJGJhY2tncm91bmQ6ICMyNjMyMzg7XG4kYmFja2dyb3VuZC1saWdodDogIzQ1NWE2NDtcbiRiYWNrZ3JvdW5kLWRhcms6ICMyMDI2MzI7XG5cbiRoZWFkZXItY29sb3I6ICMwQTBEMkU7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJSb2JvdG9cIiwgXCJWZXJkYW5hXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIllvdW5nXCIsICRmb250O1xuJG1vbm8tZm9udDogXCJGaXJhIENvZGVcIiwgbW9ub3NwYWNlO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBTaXppbmcgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcblxuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkZGVwdGg6IDEsICRzcHJlYWQ6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwICgxcHggKiAkc3ByZWFkKSAoM3B4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4yICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgxcHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4xNCAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMnB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIC0oMXB4ICogJHNwcmVhZCkgcmdiYSgjMDAwLCAuMTIgKiAkZGVwdGgpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxZW07XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLXRvcDogLjVlbTtcbn1cblxudGJvZHkge1xuICBmb250LXNpemU6IC45ZW07XG4gIHRkIHtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG59XG5cbmRpdiB7XG4gIC5zbWFsbCB7XG4gICAgd2lkdGg6IDJlbTtcbiAgfVxuICAuZHVvIHtcbiAgICB3aWR0aDogNGVtO1xuICAgICoge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgfVxuICB9XG59XG5cbi5hY3Rpb24ge1xuICBoZWlnaHQ6IDEuNWVtO1xuICB3aWR0aDogMS41ZW07XG4gIG1pbi13aWR0aDogMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IC42NWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAuMSk7XG4gIH1cbn1cblxuLnN0YXRlIHtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgd2lkdGg6IDEuNWVtO1xuICBtYXJnaW46IC4yNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyZjJmO1xuICBib3JkZXItcmFkaXVzOiAuOGVtO1xuICB0cmFuc2l0aW9uOiBtYXJnaW4gMjUwbXMsIGhlaWdodCAyNTBtcywgd2lkdGggMjUwbXMsIGJhY2tncm91bmQtY29sb3IgMzAwbXM7XG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VjY2VzcztcbiAgICBoZWlnaHQ6IC43NWVtO1xuICAgIHdpZHRoOiAuNzVlbTtcbiAgICBtYXJnaW46IC42MjVlbTtcbiAgfVxufVxuXG4uc2VsZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLmJ0biB7XG4gICAgZmxleDogMTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TriggerSystemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'trigger-systems',
                templateUrl: './trigger-systems.template.html',
                styleUrls: ['./trigger-systems.styles.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: src_app_common_item_service__WEBPACK_IMPORTED_MODULE_8__["ActiveItemService"] }]; }, null); })();


/***/ }),

/***/ "MRfK":
/*!*********************************************!*\
  !*** ./src/app/triggers/triggers.module.ts ***!
  \*********************************************/
/*! exports provided: AppTriggersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTriggersModule", function() { return AppTriggersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _triggers_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./triggers.routes */ "O6T3");
/* harmony import */ var _triggers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./triggers.component */ "2yaN");
/* harmony import */ var _trigger_about_trigger_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trigger-about/trigger-about.component */ "VCeb");
/* harmony import */ var _trigger_systems_trigger_systems_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trigger-systems/trigger-systems.component */ "9yHu");
/* harmony import */ var src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/ui/ui.module */ "oRDy");












class AppTriggersModule {
}
AppTriggersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppTriggersModule });
AppTriggersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppTriggersModule_Factory(t) { return new (t || AppTriggersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_triggers_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"]),
            src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_9__["SharedContentModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppTriggersModule, { declarations: [_triggers_component__WEBPACK_IMPORTED_MODULE_6__["TriggersComponent"],
        _trigger_about_trigger_about_component__WEBPACK_IMPORTED_MODULE_7__["TriggerAboutComponent"],
        _trigger_systems_trigger_systems_component__WEBPACK_IMPORTED_MODULE_8__["TriggerSystemsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_9__["SharedContentModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppTriggersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _triggers_component__WEBPACK_IMPORTED_MODULE_6__["TriggersComponent"],
                    _trigger_about_trigger_about_component__WEBPACK_IMPORTED_MODULE_7__["TriggerAboutComponent"],
                    _trigger_systems_trigger_systems_component__WEBPACK_IMPORTED_MODULE_8__["TriggerSystemsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_triggers_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"]),
                    src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_9__["SharedContentModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "O6T3":
/*!*********************************************!*\
  !*** ./src/app/triggers/triggers.routes.ts ***!
  \*********************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _triggers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./triggers.component */ "2yaN");
/* harmony import */ var _trigger_about_trigger_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trigger-about/trigger-about.component */ "VCeb");
/* harmony import */ var _trigger_systems_trigger_systems_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trigger-systems/trigger-systems.component */ "9yHu");
/* harmony import */ var _ui_extension_outlet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/extension-outlet.component */ "55V4");




const ROUTES = [
    {
        path: ':id',
        component: _triggers_component__WEBPACK_IMPORTED_MODULE_0__["TriggersComponent"],
        children: [
            { path: 'about', component: _trigger_about_trigger_about_component__WEBPACK_IMPORTED_MODULE_1__["TriggerAboutComponent"] },
            { path: 'systems', component: _trigger_systems_trigger_systems_component__WEBPACK_IMPORTED_MODULE_2__["TriggerSystemsComponent"] },
            { path: 'extend/:id', component: _ui_extension_outlet_component__WEBPACK_IMPORTED_MODULE_3__["ExtensionOutletComponent"] },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];


/***/ }),

/***/ "VCeb":
/*!*******************************************************************!*\
  !*** ./src/app/triggers/trigger-about/trigger-about.component.ts ***!
  \*******************************************************************/
/*! exports provided: TriggerAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriggerAboutComponent", function() { return TriggerAboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ "K2Fw");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_base_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/base.class */ "fnpZ");
/* harmony import */ var src_app_overlays_trigger_action_modal_trigger_action_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/overlays/trigger-action-modal/trigger-action-modal.component */ "xQV9");
/* harmony import */ var src_app_overlays_trigger_condition_modal_trigger_condition_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/overlays/trigger-condition-modal/trigger-condition-modal.component */ "mrP1");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "g+Po");
/* harmony import */ var src_app_common_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/notifications */ "GGZo");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_common_item_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/common/item.service */ "ty9M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _ui_custom_fields_item_search_field_item_search_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/custom-fields/item-search-field/item-search-field.component */ "wRAM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ui/icon/icon.component */ "BilL");
/* harmony import */ var _ui_pipes_date_from_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ui/pipes/date-from.pipe */ "8MW+");
/* harmony import */ var _ui_pipes_format_list_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ui/pipes/format-list.pipe */ "er/G");






















function TriggerAboutComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "dateFrom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx_r5.item.created_at * 1000));
} }
function TriggerAboutComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "dateFrom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx_r6.item.updated_at * 1000));
} }
const _c14 = function () { return { class: "backoffice-edit" }; };
const _c15 = function () { return { class: "backoffice-trash" }; };
function TriggerAboutComponent_div_0_div_18_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TriggerAboutComponent_div_0_div_18_div_4_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const comparison_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r12.editCondition(comparison_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TriggerAboutComponent_div_0_div_18_div_4_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const comparison_r11 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r14.confirmRemoveCondition(comparison_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comparison_r11 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, comparison_r11.left), " ", comparison_r11.operator, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, comparison_r11.right), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r9.template_system);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c14));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c15));
} }
function TriggerAboutComponent_div_0_div_18_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TriggerAboutComponent_div_0_div_18_div_8_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const time_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r16.editCondition(time_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TriggerAboutComponent_div_0_div_18_div_8_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const time_r15 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r18.confirmRemoveCondition(time_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r15 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", time_r15.type === "at" ? "At time" : "CRON", " ", time_r15.type === "at" ? time_r15.time : time_r15.cron, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r10.template_system);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c14));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c15));
} }
function TriggerAboutComponent_div_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TriggerAboutComponent_div_0_div_18_div_4_Template, 10, 12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TriggerAboutComponent_div_0_div_18_div_8_Template, 8, 7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.comparisons);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.time_dependents);
} }
function TriggerAboutComponent_div_0_div_26_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 39);
} }
const _c20 = function () { return { class: "backoffice-select-arrows" }; };
function TriggerAboutComponent_div_0_div_26_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TriggerAboutComponent_div_0_div_26_div_4_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const action_r21 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r23.editAction(action_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TriggerAboutComponent_div_0_div_26_div_4_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const action_r21 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r25.confirmRemoveAction(action_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TriggerAboutComponent_div_0_div_26_div_4_div_10_Template, 1, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r21 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c20));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", action_r21.mod, ", ", action_r21.method, "(", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 7, action_r21.args), ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r19.template_system);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c14));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c15));
} }
function TriggerAboutComponent_div_0_div_26_div_8_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 39);
} }
function TriggerAboutComponent_div_0_div_26_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "formatList");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TriggerAboutComponent_div_0_div_26_div_8_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const action_r26 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r28.editAction(action_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TriggerAboutComponent_div_0_div_26_div_8_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const action_r26 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r30.confirmRemoveAction(action_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TriggerAboutComponent_div_0_div_26_div_8_div_12_Template, 1, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r26 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c20));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 8, action_r26.emails));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nExp"](action_r26.emails.length)(action_r26.emails.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nApply"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" | Body Length: ", action_r26.content.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r20.template_system);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c14));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c15));
} }
function TriggerAboutComponent_div_0_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function TriggerAboutComponent_div_0_div_26_Template_div_cdkDropListDropped_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r31.confirmReorder("function", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TriggerAboutComponent_div_0_div_26_div_4_Template, 11, 12, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function TriggerAboutComponent_div_0_div_26_Template_div_cdkDropListDropped_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r33.confirmReorder("mailer", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TriggerAboutComponent_div_0_div_26_div_8_Template, 13, 13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.functions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.mailers);
} }
const _c25 = function () { return { class: "backoffice-plus" }; };
function TriggerAboutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TriggerAboutComponent_div_0_div_2_Template, 6, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TriggerAboutComponent_div_0_div_3_Template, 6, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](9, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "item-search-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TriggerAboutComponent_div_0_Template_item_search_field_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.template_system = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TriggerAboutComponent_div_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.editCondition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](16, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TriggerAboutComponent_div_0_div_18_Template, 9, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TriggerAboutComponent_div_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.editAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](24, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, TriggerAboutComponent_div_0_div_26_Template, 9, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.created_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("query_fn", ctx_r0.query_fn)("ngModel", ctx_r0.template_system);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.template_system);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c25));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.comparisons.length || ctx_r0.time_dependents.length)("ngIfElse", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.template_system);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c25));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.functions.length || ctx_r0.mailers.length)("ngIfElse", _r3);
} }
function TriggerAboutComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TriggerAboutComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class TriggerAboutComponent extends src_app_common_base_class__WEBPACK_IMPORTED_MODULE_5__["BaseClass"] {
    constructor(_dialog, _service) {
        super();
        this._dialog = _dialog;
        this._service = _service;
        /** List of variable comparison trigger conditions */
        this.comparisons = [];
        /** List of time dependent trigger conditions */
        this.time_dependents = [];
        /** List of function call trigger actions */
        this.functions = [];
        /** List of email trigger actions */
        this.mailers = [];
        /** Query function for systems */
        this.query_fn = (_) => Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["querySystems"])({ q: _ }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((resp) => resp.data));
    }
    get item() {
        return this._service.active_item;
    }
    ngOnInit() {
        this.subscription('item', this._service.item.subscribe((item) => {
            if (this.item && this.item.conditions) {
                this.comparisons = this.item.conditions.comparisons || [];
                this.time_dependents = this.item.conditions.time_dependents || [];
                this.functions = this.item.actions.functions || [];
                this.mailers = this.item.actions.mailers || [];
            }
            if (this.confirm_ref) {
                this.confirm_ref.close();
                this.confirm_ref = null;
                this.unsub('delete_confirm');
            }
        }));
    }
    /**
     * Add new condition to trigger
     */
    editCondition(condition) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ref = this._dialog.open(src_app_overlays_trigger_condition_modal_trigger_condition_modal_component__WEBPACK_IMPORTED_MODULE_7__["TriggerConditionModalComponent"], {
                width: 'auto',
                height: 'auto',
                data: {
                    trigger: this.item,
                    condition: condition ? JSON.parse(JSON.stringify(condition)) : undefined,
                    system: this.template_system,
                },
            });
            const result = yield Promise.race([
                ref.componentInstance.event.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])((_) => _.reason === 'done')).toPromise(),
                ref.afterClosed().toPromise(),
            ]);
            if (result && ((_a = result === null || result === void 0 ? void 0 : result.metadata) === null || _a === void 0 ? void 0 : _a.trigger)) {
                this._service.replaceItem(result.metadata.trigger);
            }
        });
    }
    /**
     * Edit existing action on active trigger
     * @param action Action to edit
     */
    editAction(action) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ref = this._dialog.open(src_app_overlays_trigger_action_modal_trigger_action_modal_component__WEBPACK_IMPORTED_MODULE_6__["TriggerActionModalComponent"], {
                data: {
                    trigger: this.item,
                    action,
                    system: this.template_system,
                },
            });
            const result = yield Promise.race([
                ref.componentInstance.event.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])((_) => _.reason === 'done')).toPromise(),
                ref.afterClosed().toPromise(),
            ]);
            if (result && ((_a = result === null || result === void 0 ? void 0 : result.metadata) === null || _a === void 0 ? void 0 : _a.trigger)) {
                this._service.replaceItem(result.metadata.trigger);
            }
        });
    }
    confirmRemoveCondition(condition) {
        this.confirm_ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["CONFIRM_METADATA"]), { data: {
                title: `Remove trigger condition`,
                content: `<p>Are you sure you want remove this trigger condition?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>`,
                icon: { type: 'icon', class: 'backoffice-trash' },
            } }));
        this.subscription('delete_confirm', this.confirm_ref.componentInstance.event.subscribe((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (event.reason === 'done') {
                this.confirm_ref.componentInstance.loading = 'Removing trigger condition...';
                yield this.removeCondition(condition).catch((_) => null);
                this.confirm_ref.close();
            }
        })));
    }
    /**
     * Remove a condition from the active trigger
     * @param condition Condition to remove
     */
    removeCondition(condition) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const conditions = {
                comparisons: [...this.comparisons],
                time_dependents: [...this.time_dependents],
            };
            if (condition.type) {
                const index = this.time_dependents.findIndex((item) => JSON.stringify(item) === JSON.stringify(condition));
                conditions.time_dependents.splice(index, 1);
            }
            else {
                const index = this.comparisons.findIndex((item) => JSON.stringify(item) === JSON.stringify(condition));
                conditions.comparisons.splice(index, 1);
            }
            const trigger = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["updateTrigger"])(this.item.id, Object.assign(Object.assign({}, this.item.toJSON()), { conditions }))
                .toPromise()
                .catch((err) => {
                Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_9__["notifyError"])(`Error removing trigger condition. Error: ${JSON.stringify(err.response || err.message || err)}`);
                return null;
            });
            if (trigger) {
                this._service.replaceItem(trigger);
                Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_9__["notifySuccess"])('Successfully removed trigger condition.');
            }
        });
    }
    /**
     * Open confirmation modal for removing an action
     * @param action Action to remove
     */
    confirmRemoveAction(action) {
        this.confirm_ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["CONFIRM_METADATA"]), { data: {
                title: `Remove trigger action`,
                content: `<p>Are you sure you want remove this trigger action?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>`,
                icon: { type: 'icon', class: 'backoffice-trash' },
            } }));
        this.subscription('delete_confirm', this.confirm_ref.componentInstance.event.subscribe((event) => {
            if (event.reason === 'done') {
                this.confirm_ref.componentInstance.loading = 'Removing trigger action...';
                this.removeAction(action);
            }
        }));
    }
    /**
     * Remove an action from the active trigger
     * @param action Action to remove
     */
    removeAction(action) {
        const actions = {
            functions: [...this.item.actions.functions],
            mailers: [...this.item.actions.mailers],
        };
        if (action.emails) {
            const index = this.mailers.findIndex((item) => JSON.stringify(item) === JSON.stringify(action));
            actions.mailers.splice(index, 1);
        }
        else {
            const index = this.functions.findIndex((item) => JSON.stringify(item) === JSON.stringify(action));
            actions.functions.splice(index, 1);
        }
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["updateTrigger"])(this.item.id, Object.assign(Object.assign({}, this.item.toJSON()), { actions })).subscribe(() => Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_9__["notifySuccess"])('Successfully removed trigger action.'), (err) => Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_9__["notifyError"])(`Error removing trigger action. Error: ${JSON.stringify(err.response || err.message || err)}`));
    }
    /**
     * Open confirmation modal for re-ordering action for active trigger
     * @param type Type of action to reorder
     * @param event Drop event details
     */
    confirmReorder(type, event) {
        this.confirm_ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["CONFIRM_METADATA"]), { data: {
                title: `Reoreder trigger ${type} action`,
                content: `<p>Are you sure you want remove this trigger condition?</p><p>All systems using this trigger will be updated <strong>immediately</strong>.</p>`,
                icon: { type: 'icon', class: 'backoffice-trash' },
            } }));
        this.subscription('delete_confirm', this.confirm_ref.componentInstance.event.subscribe((e) => {
            if (e.reason === 'done') {
                this.confirm_ref.componentInstance.loading = `Reordering trigger ${type} action...`;
                this.reorderAction(type, event);
            }
        }));
    }
    /**
     * Re-order action for active trigger
     * @param type Type of action to reorder
     * @param event Drop event details
     */
    reorderAction(type, event) {
        const list = [...(type === 'function' ? this.functions : this.mailers)];
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(list, event.previousIndex, event.currentIndex);
        const actions = {
            functions: type === 'function' ? list : this.functions,
            mailers: type === 'function' ? this.mailers : list,
        };
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["updateTrigger"])(this.item.id, Object.assign(Object.assign({}, this.item.toJSON()), { actions })).subscribe(() => Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_9__["notifySuccess"])(`Successfully re-ordered trigger ${type} action.`), (err) => Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_9__["notifyError"])(`Error re-ordered trigger ${type} action. Error: ${JSON.stringify(err.response || err.message || err)}`));
    }
}
TriggerAboutComponent.ɵfac = function TriggerAboutComponent_Factory(t) { return new (t || TriggerAboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_item_service__WEBPACK_IMPORTED_MODULE_11__["ActiveItemService"])); };
TriggerAboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TriggerAboutComponent, selectors: [["trigger-about"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_triggerTemplateSystemLabel$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS__1 = goog.getMsg("Template System: ");
        i18n_0 = MSG_EXTERNAL_triggerTemplateSystemLabel$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS__1;
    }
    else {
        i18n_0 = $localize `:@@triggerTemplateSystemLabel␟e0756ac7c3aa344be20cf6e324a333ef5ff0466c␟2847369180436747415:Template System: `;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_triggerConditionsHeader$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS__3 = goog.getMsg("Conditions");
        i18n_2 = MSG_EXTERNAL_triggerConditionsHeader$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:@@triggerConditionsHeader␟986668e81481d0fd0934b4ef56b4236ccb298712␟2079395509894825886:Conditions`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_triggerActionsHeader$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS__5 = goog.getMsg("Actions");
        i18n_4 = MSG_EXTERNAL_triggerActionsHeader$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:@@triggerActionsHeader␟030b4423b92167200e39519599f9b863b4f7c62c␟3193976279273491157:Actions`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_triggerCreatedAtLabel$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS___7 = goog.getMsg("Created:");
        i18n_6 = MSG_EXTERNAL_triggerCreatedAtLabel$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS___7;
    }
    else {
        i18n_6 = $localize `:@@triggerCreatedAtLabel␟a5ed099ffc9e96f6970df843289ade8a7d20ab9f␟1616250945945379783:Created:`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc \@triggerUpdatedAtLabel
         */
        const MSG_EXTERNAL_1116759395536210856$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS___9 = goog.getMsg("Updated:");
        i18n_8 = MSG_EXTERNAL_1116759395536210856$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS___9;
    }
    else {
        i18n_8 = $localize `:@triggerUpdatedAtLabel␟f94240161f912dbd8758b858877cddeab80f36cb␟1116759395536210856:Updated:`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_triggerComparisonLabel$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS___11 = goog.getMsg("Variable Comparison Condtions");
        i18n_10 = MSG_EXTERNAL_triggerComparisonLabel$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS___11;
    }
    else {
        i18n_10 = $localize `:@@triggerComparisonLabel␟a5cf036084ee11326617b12304dbeefc6e1bb36a␟6551073590639857317:Variable Comparison Condtions`;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_triggerTimeLabel$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS___13 = goog.getMsg("Time Dependent Conditions");
        i18n_12 = MSG_EXTERNAL_triggerTimeLabel$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS___13;
    }
    else {
        i18n_12 = $localize `:@@triggerTimeLabel␟b8fd6c10ba159a3c30430f63820d801bfb7354f2␟2477713009538214942:Time Dependent Conditions`;
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_triggerFunctionsLabel$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS___17 = goog.getMsg("Function Call Actions");
        i18n_16 = MSG_EXTERNAL_triggerFunctionsLabel$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS___17;
    }
    else {
        i18n_16 = $localize `:@@triggerFunctionsLabel␟bcd0d3c23fa6498d39bffabeec346417a572c40b␟3821303502506692310:Function Call Actions`;
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_triggerEmailsLabel$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS___19 = goog.getMsg("Email Actions");
        i18n_18 = MSG_EXTERNAL_triggerEmailsLabel$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS___19;
    }
    else {
        i18n_18 = $localize `:@@triggerEmailsLabel␟fd50da1d6809d4560322a924221a854f1d21dc3b␟7098100161332510393:Email Actions`;
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3981906223455182500$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS____23 = goog.getMsg("{VAR_PLURAL, plural, =1 {Address } other {Addresses }}");
        i18n_22 = MSG_EXTERNAL_3981906223455182500$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS____23;
    }
    else {
        i18n_22 = $localize `:␟6e542484e5a5b97451d8db2f7dfdbb6ae9882409␟3981906223455182500:{VAR_PLURAL, plural, =1 {Address } other {Addresses }}`;
    } i18n_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nPostprocess"](i18n_22, { "VAR_PLURAL": "\uFFFD1\uFFFD" }); let i18n_21; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_emailCountDisplay$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS____24 = goog.getMsg("{$interpolation} {$icu}", { "interpolation": "\uFFFD0\uFFFD", "icu": i18n_22 });
        i18n_21 = MSG_EXTERNAL_emailCountDisplay$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS____24;
    }
    else {
        i18n_21 = $localize `:@@emailCountDisplay␟0999296882eee5cef69cbe222cf6f242c97a20f5␟468872276403073781:${"\uFFFD0\uFFFD"}:INTERPOLATION: ${i18n_22}:ICU:`;
    } let i18n_26; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_triggerConditionsEmpty$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS__27 = goog.getMsg("No condtions for trigger");
        i18n_26 = MSG_EXTERNAL_triggerConditionsEmpty$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS__27;
    }
    else {
        i18n_26 = $localize `:@@triggerConditionsEmpty␟653b5ca90ecf78dcc8c860e03ffb38be6f5c8bee␟1315028183848030960:No condtions for trigger`;
    } let i18n_28; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_triggerActionsEmpty$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS__29 = goog.getMsg("No actions for trigger");
        i18n_28 = MSG_EXTERNAL_triggerActionsEmpty$$SRC_APP_TRIGGERS_TRIGGER_ABOUT_TRIGGER_ABOUT_COMPONENT_TS__29;
    }
    else {
        i18n_28 = $localize `:@@triggerActionsEmpty␟71cb74873d6a75ae16e84e75d6249a79bbe1c505␟3814611805731914236:No actions for trigger`;
    } return [["class", "container", 4, "ngIf"], ["no_conditions", ""], ["no_actions", ""], [1, "container"], [1, "details"], ["class", "field", 4, "ngIf"], [1, "settings"], [1, "field"], ["for", "driver", "matTooltip", "System to use for available status variables and function calls"], i18n_0, ["name", "system", 3, "query_fn", "ngModel", "ngModelChange"], [1, "action"], ["mat-icon-button", "", 3, "disabled", "click"], [3, "icon"], [1, "text"], i18n_2, ["class", "list", 4, "ngIf", "ngIfElse"], i18n_4, i18n_6, [1, "value"], i18n_8, [1, "list"], [1, "header"], i18n_10, [1, "group", "comparisons"], ["class", "item", 4, "ngFor", "ngForOf"], i18n_12, [1, "group", "time-dependents"], [1, "item"], [1, "handle"], ["mat-icon-button", "", 3, "click"], i18n_16, ["cdkDropList", "", 1, "group", "functions", 3, "cdkDropListDropped"], ["class", "item", "cdkDrag", "", 4, "ngFor", "ngForOf"], i18n_18, ["cdkDropList", "", 1, "group", "emails", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "item"], ["cdkDragHandle", "", 1, "handle"], ["class", "placeholder", 4, "cdkDragPlaceholder"], [1, "placeholder"], [3, "matTooltip"], i18n_21, [1, "info-block"], i18n_26, i18n_28]; }, template: function TriggerAboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TriggerAboutComponent_div_0_Template, 27, 14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TriggerAboutComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TriggerAboutComponent_ng_template_3_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _ui_custom_fields_item_search_field_item_search_field_component__WEBPACK_IMPORTED_MODULE_14__["ItemSearchFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_17__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDragHandle"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDragPlaceholder"]], pipes: [_ui_pipes_date_from_pipe__WEBPACK_IMPORTED_MODULE_18__["DateFromPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["JsonPipe"], _ui_pipes_format_list_pipe__WEBPACK_IMPORTED_MODULE_19__["FormatListPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n  font-size: 1.1em;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 0.5em 0.25em;\n}\n.no-item[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n}\n.group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n  margin: 2px 0;\n  width: 100%;\n}\n.item[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2.5rem;\n  width: 2.5rem;\n}\n.item[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n  font-family: \"Fira Code\", monospace;\n  white-space: nowrap;\n  font-size: 0.6em;\n  padding: 0 0.5rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Fira Code\", monospace;\n}\n.item[_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: #f0f0f0;\n}\n.item[_ngcontent-%COMP%]:hover {\n  background-color: #ccc;\n}\nbutton[_ngcontent-%COMP%] {\n  margin: 0.25em;\n}\nheader[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 0.5em 0 0;\n  border: 1px solid rgba(0, 0, 0, 0.85);\n}\nheader[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  border-color: #ccc;\n}\n.header[_ngcontent-%COMP%] {\n  padding: 1em;\n  font-size: 1em;\n  font-weight: 500;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 0px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: none;\n}\n.placeholder[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.1);\n  border: 4px dashed rgba(0, 0, 0, 0.6);\n  height: 3em;\n  width: 100%;\n  border-radius: 4px;\n}\n.details[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0.25em 0;\n}\n.details[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  padding: 0 0.5em;\n  -webkit-user-select: all;\n  -moz-user-select: all;\n  user-select: all;\n}\n.details[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL3RyaWdnZXItYWJvdXQuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBcUNBOztjQUFBO0FBWUE7O2VBQUE7QUFPQTs7ZUFBQTtBQWdCQTs7c0JBQUE7QUN2RUE7RUFDRSxZQUFBO0FBY0Y7QUFYQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFjRjtBQVhBO0VBQ0UscUJBQUE7QUFjRjtBQVhBO0VBQ0UsaUJBQUE7QUFjRjtBQVhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBY0Y7QUFYQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFjRjtBQWJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQWVKO0FBZEk7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QUFnQk47QUFiRTtFQUNFLE9BQUE7RUFDQSxjQUFBO0VBQ0EsbUNESlE7RUNLUixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBZUo7QUFkSTtFQUNFLG1DRFhNO0FDMkJaO0FBYkU7RUFDRSx5QkFBQTtBQWVKO0FBYkU7RUFDRSxzQkFBQTtBQWVKO0FBWEE7RUFDRSxjQUFBO0FBY0Y7QUFWRTtFQUNFLG1CQUFBO0VBQ0EscUNBQUE7QUFhSjtBQVpJO0VBQ0Usa0JBQUE7QUFjTjtBQVRBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVlGO0FBVEE7RUFDRSxzQkFBQTtFRG5CRSwwR0FBQTtBQ2dDSjtBQVhFO0VBQ0UsYUFBQTtBQWFKO0FBVEE7RUFDRSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVlGO0FBUkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVdKO0FBVkk7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0cscUJBQUE7RUFDSyxnQkFBQTtBQVlkO0FBVEU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBV0oiLCJmaWxlIjoidHJpZ2dlci1hYm91dC5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0Y2FmNTA7XG4kc3VjY2Vzcy1saWdodDogIzY2YmI2YTtcbiRzdWNjZXNzLWRhcms6ICMwMDc5NmI7XG5cbiRwZW5kaW5nOiAjZmY4ZjAwO1xuJHBlbmRpbmctbGlnaHQ6ICNmZmMwNDY7XG4kcGVuZGluZy1kYXJrOiAjYzU2MDAwO1xuXG4kZXJyb3I6ICNmNDQzMzY7XG4kZXJyb3ItbGlnaHQ6ICNmZjZmNjA7XG4kZXJyb3ItZGFyazogI2FiMDAwZDtcblxuJGNvbG9yLXByaW1hcnk6ICNDOTIzNjY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogI2NkNTY4YTtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICNiNjAwNWQ7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM1QzY0RkY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiAjNzI3MmU3O1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiAjNTU1N2QxO1xuXG4kY29sb3ItZGV2ZWxvcDogI2YwZjBmMDtcbiRjb2xvci1kZXZlbG9wLWxpZ2h0OiAjZmZmO1xuJGNvbG9yLWRldmVsb3AtZGFyazogI2UwZTBlMDtcblxuJGJhY2tncm91bmQ6ICMyNjMyMzg7XG4kYmFja2dyb3VuZC1saWdodDogIzQ1NWE2NDtcbiRiYWNrZ3JvdW5kLWRhcms6ICMyMDI2MzI7XG5cbiRoZWFkZXItY29sb3I6ICMwQTBEMkU7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJSb2JvdG9cIiwgXCJWZXJkYW5hXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIllvdW5nXCIsICRmb250O1xuJG1vbm8tZm9udDogXCJGaXJhIENvZGVcIiwgbW9ub3NwYWNlO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBTaXppbmcgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcblxuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkZGVwdGg6IDEsICRzcHJlYWQ6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwICgxcHggKiAkc3ByZWFkKSAoM3B4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4yICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgxcHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4xNCAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMnB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIC0oMXB4ICogJHNwcmVhZCkgcmdiYSgjMDAwLCAuMTIgKiAkZGVwdGgpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxZW07XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMWVtO1xufVxuXG5zZWN0aW9uIHtcbiAgcGFkZGluZzogLjVlbSAuMjVlbTtcbn1cblxuLm5vLWl0ZW0ge1xuICBmb250LXNpemU6IC43NWVtO1xufVxuXG4uZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLml0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMnB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICAuaGFuZGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICBhcHAtaWNvbiB7XG4gICAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbiAgICAgIGN1cnNvcjogZ3JhYjtcbiAgICB9XG4gIH1cbiAgLmRldGFpbHMge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiA1MCU7XG4gICAgZm9udC1mYW1pbHk6ICRtb25vLWZvbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmb250LXNpemU6IC42ZW07XG4gICAgcGFkZGluZzogMCAuNXJlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHNwYW4ge1xuICAgICAgZm9udC1mYW1pbHk6ICRtb25vLWZvbnQ7XG4gICAgfVxuICB9XG4gICY6bnRoLWNoaWxkKDJuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICB9XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogLjI1ZW07XG59XG5cbmhlYWRlciB7XG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwIC41ZW0gMCAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIzAwMCwgLjg1KTtcbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gICAgfVxuICB9XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAxZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3c7XG4gIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4ucGxhY2Vob2xkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsIC4xKTtcbiAgYm9yZGVyOiA0cHggZGFzaGVkIHJnYmEoIzAwMCwgLjYpO1xuICBoZWlnaHQ6IDNlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmRldGFpbHMge1xuICAuZmllbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IC4yNWVtIDA7XG4gICAgLnZhbHVlIHtcbiAgICAgIHBhZGRpbmc6IDAgLjVlbTtcbiAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IGFsbDtcbiAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGFsbDtcbiAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IGFsbDtcbiAgICB9XG4gIH1cbiAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TriggerAboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'trigger-about',
                templateUrl: './trigger-about.template.html',
                styleUrls: ['./trigger-about.styles.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }, { type: src_app_common_item_service__WEBPACK_IMPORTED_MODULE_11__["ActiveItemService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=triggers-triggers-module-es2015.js.map
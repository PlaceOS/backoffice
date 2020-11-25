(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-modules-module"],{

/***/ "+dkL":
/*!*******************************************!*\
  !*** ./src/app/modules/modules.module.ts ***!
  \*******************************************/
/*! exports provided: AppModulesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModulesModule", function() { return AppModulesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules.routes */ "90bR");
/* harmony import */ var _modules_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules.component */ "/9IV");
/* harmony import */ var _module_about_module_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module-about/module-about.component */ "AYHC");
/* harmony import */ var _module_systems_module_systems_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module-systems/module-systems.component */ "4aFQ");
/* harmony import */ var src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/ui/ui.module */ "oRDy");











class AppModulesModule {
}
AppModulesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModulesModule });
AppModulesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModulesModule_Factory(t) { return new (t || AppModulesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_modules_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]),
            src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_8__["SharedContentModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModulesModule, { declarations: [_modules_component__WEBPACK_IMPORTED_MODULE_5__["ModulesComponent"],
        _module_about_module_about_component__WEBPACK_IMPORTED_MODULE_6__["ModuleAboutComponent"],
        _module_systems_module_systems_component__WEBPACK_IMPORTED_MODULE_7__["ModuleSystemsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_8__["SharedContentModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModulesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _modules_component__WEBPACK_IMPORTED_MODULE_5__["ModulesComponent"],
                    _module_about_module_about_component__WEBPACK_IMPORTED_MODULE_6__["ModuleAboutComponent"],
                    _module_systems_module_systems_component__WEBPACK_IMPORTED_MODULE_7__["ModuleSystemsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_modules_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]),
                    src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_8__["SharedContentModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "/9IV":
/*!**********************************************!*\
  !*** ./src/app/modules/modules.component.ts ***!
  \**********************************************/
/*! exports provided: ModulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesComponent", function() { return ModulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "K2Fw");
/* harmony import */ var _common_base_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/base.class */ "fnpZ");
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/api */ "9Mvx");
/* harmony import */ var _common_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/item.service */ "ty9M");
/* harmony import */ var _ui_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/sidebar/sidebar.component */ "BGbG");
/* harmony import */ var _ui_item_display_item_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/item-display/item-display.component */ "Iv9d");









class ModulesComponent extends _common_base_class__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_service) {
        super();
        this._service = _service;
        this.name = 'modules';
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
            this.updateTabList();
        }));
        this.updateTabList();
    }
    loadValues(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!item)
                return;
            const query = { offset: 0, limit: 1, module_id: item.id };
            // Get system count
            this.system_count = (yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["querySystems"])(query).toPromise()).total;
        });
    }
}
ModulesComponent.ɵfac = function ModulesComponent_Factory(t) { return new (t || ModulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_item_service__WEBPACK_IMPORTED_MODULE_5__["ActiveItemService"])); };
ModulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModulesComponent, selectors: [["app-modules"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 1, consts: [[1, "flex-1", "flex-col", "sm:flex-row", "flex", "h-full", "w-full", "relative"], ["heading", "Modules", "name", "modules", 1, "absolute", "top-0", "left-0", "h-12", "w-full", "sm:h-full", "sm:static"], ["name", "module", "route", "modules", 1, "flex-1", "relative", "mt-12", "sm:mt-0", 3, "tabs"]], template: function ModulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "sidebar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "item-display", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabs", ctx.tab_list);
    } }, directives: [_ui_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _ui_item_display_item_display_component__WEBPACK_IMPORTED_MODULE_7__["ItemDisplayComponent"]], styles: ["sidebar[_ngcontent-%COMP%] {\n                transition: height 300ms;\n            }\n            @media screen and (min-width: 640px) {\n                sidebar[_ngcontent-%COMP%] {\n                    width: 20em !important;\n                }\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-modules',
                template: `
        <div
            class="flex-1 flex-col sm:flex-row flex h-full w-full relative"
        >
            <sidebar
                heading="Modules"
                name="modules"
                class="absolute top-0 left-0 h-12 w-full sm:h-full sm:static"
            ></sidebar>
            <item-display
                name="module"
                route="modules"
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
    }], function () { return [{ type: _common_item_service__WEBPACK_IMPORTED_MODULE_5__["ActiveItemService"] }]; }, null); })();


/***/ }),

/***/ "4aFQ":
/*!********************************************************************!*\
  !*** ./src/app/modules/module-systems/module-systems.component.ts ***!
  \********************************************************************/
/*! exports provided: ModuleSystemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleSystemsComponent", function() { return ModuleSystemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "K2Fw");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_common_base_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/base.class */ "fnpZ");
/* harmony import */ var src_app_common_item_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/item.service */ "ty9M");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/icon/icon.component */ "BilL");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");















const _c8 = function (a1) { return ["/systems", a1]; };
function ModuleSystemsComponent_div_6_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c8, item_r4.id))("matTooltip", item_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.modules == null ? null : item_r4.modules.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.display == null ? null : item_r4.display.created);
} }
function ModuleSystemsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ModuleSystemsComponent_div_6_tr_10_Template, 8, 7, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.system_list);
} }
function ModuleSystemsComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c11 = function () { return { class: "backoffice-magnifying-glass" }; };
class ModuleSystemsComponent extends src_app_common_base_class__WEBPACK_IMPORTED_MODULE_5__["BaseClass"] {
    constructor(_service) {
        super();
        this._service = _service;
        /** Subject holding the value of the search */
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    get item() {
        return this._service.active_item;
    }
    ngOnInit() {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadSystems();
        }));
        this.search_results$ = this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((query) => {
            this.loading = true;
            return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["querySystems"])({
                q: query,
                module_id: this.item.id,
                offset: 0,
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            console.error(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((list) => {
            this.loading = false;
            const search = this.search_str.toLowerCase();
            return list.filter((item) => item.name.toLowerCase().indexOf(search) >= 0 ||
                (item.email || '').toLowerCase().indexOf(search) >= 0);
        }));
        // Process API results
        this.subscription('search_results', this.search_results$.subscribe((list) => (this.system_list = list)));
    }
    loadSystems(offset = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.item) {
                return;
            }
            this.system_list = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["querySystems"])({ module_id: this.item.id, offset })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((resp) => resp.data))
                .toPromise();
        });
    }
}
ModuleSystemsComponent.ɵfac = function ModuleSystemsComponent_Factory(t) { return new (t || ModuleSystemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_item_service__WEBPACK_IMPORTED_MODULE_6__["ActiveItemService"])); };
ModuleSystemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModuleSystemsComponent, selectors: [["module-systems"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_systemTableFilter$$SRC_APP_MODULES_MODULE_SYSTEMS_MODULE_SYSTEMS_COMPONENT_TS_1 = goog.getMsg("Filter Systems");
        i18n_0 = MSG_EXTERNAL_systemTableFilter$$SRC_APP_MODULES_MODULE_SYSTEMS_MODULE_SYSTEMS_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:@@systemTableFilter␟e061b77d73310ee327e60b98974ab6f271bd634c␟6043721849916324447:Filter Systems`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_systemTableName$$SRC_APP_MODULES_MODULE_SYSTEMS_MODULE_SYSTEMS_COMPONENT_TS__3 = goog.getMsg("Name");
        i18n_2 = MSG_EXTERNAL_systemTableName$$SRC_APP_MODULES_MODULE_SYSTEMS_MODULE_SYSTEMS_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:@@systemTableName␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_systemTablePanelCount$$SRC_APP_MODULES_MODULE_SYSTEMS_MODULE_SYSTEMS_COMPONENT_TS__5 = goog.getMsg("No. Modules");
        i18n_4 = MSG_EXTERNAL_systemTablePanelCount$$SRC_APP_MODULES_MODULE_SYSTEMS_MODULE_SYSTEMS_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:@@systemTablePanelCount␟6c24d3e08bc16576fbd5580dc255a31c4b08c366␟8919524640139321287:No. Modules`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_systemTableCreated$$SRC_APP_MODULES_MODULE_SYSTEMS_MODULE_SYSTEMS_COMPONENT_TS__7 = goog.getMsg("Created");
        i18n_6 = MSG_EXTERNAL_systemTableCreated$$SRC_APP_MODULES_MODULE_SYSTEMS_MODULE_SYSTEMS_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:@@systemTableCreated␟1b051734b0ee9021991c91b3ed4e81c244322462␟4207916966377787111:Created`;
    } let i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_systemTableEmpty$$SRC_APP_MODULES_MODULE_SYSTEMS_MODULE_SYSTEMS_COMPONENT_TS__10 = goog.getMsg("No matching systems found");
        i18n_9 = MSG_EXTERNAL_systemTableEmpty$$SRC_APP_MODULES_MODULE_SYSTEMS_MODULE_SYSTEMS_COMPONENT_TS__10;
    }
    else {
        i18n_9 = $localize `:@@systemTableEmpty␟060be2387cae308d13c40744a0d7b04d4662a715␟3180608531475305782:No matching systems found`;
    } return [[1, "container"], [1, "btn"], ["appearance", "outline"], ["matPrefix", "", 1, "prefix"], [3, "icon"], ["matInput", "", "name", "search-filter", "placeholder", i18n_0, 3, "ngModel", "ngModelChange"], ["class", "list", 4, "ngIf", "ngIfElse"], ["empty_state", ""], [1, "list"], [1, "flex"], i18n_2, [1, "devices"], i18n_4, [1, "created"], i18n_6, [4, "ngFor", "ngForOf"], ["routerLinkActive", "router-link-active", 3, "routerLink", "matTooltip"], [1, "info-block"], [1, "text"], i18n_9]; }, template: function ModuleSystemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ModuleSystemsComponent_Template_input_ngModelChange_5_listener($event) { return ctx.search_str = $event; })("ngModelChange", function ModuleSystemsComponent_Template_input_ngModelChange_5_listener($event) { return ctx.search$.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ModuleSystemsComponent_div_6_Template, 11, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ModuleSystemsComponent_ng_template_7_Template, 3, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c11));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.search_str);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.system_list && ctx.system_list.length > 0)("ngIfElse", _r1);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatPrefix"], _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__["IconComponent"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkActive"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-form-field[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n}\n.list[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n}\n.table-row[_ngcontent-%COMP%]   .devices[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%]   .created[_ngcontent-%COMP%] {\n  width: 8em;\n  min-width: 8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL21vZHVsZS1zeXN0ZW1zLnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQXFDQTs7Y0FBQTtBQVlBOztlQUFBO0FBT0E7O2VBQUE7QUFnQkE7O3NCQUFBO0FDdkVBO0VBQ0UsWUFBQTtBQWNGO0FBWEE7RUFDRSxXQUFBO0FBY0Y7QUFiRTtFQUNFLGlCQUFBO0FBZUo7QUFYQTtFQUNFLGlCQUFBO0FBY0Y7QUFWRTs7RUFFRSxVQUFBO0VBQ0EsY0FBQTtBQWFKIiwiZmlsZSI6Im1vZHVsZS1zeXN0ZW1zLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzRjYWY1MDtcbiRzdWNjZXNzLWxpZ2h0OiAjNjZiYjZhO1xuJHN1Y2Nlc3MtZGFyazogIzAwNzk2YjtcblxuJHBlbmRpbmc6ICNmZjhmMDA7XG4kcGVuZGluZy1saWdodDogI2ZmYzA0NjtcbiRwZW5kaW5nLWRhcms6ICNjNTYwMDA7XG5cbiRlcnJvcjogI2Y0NDMzNjtcbiRlcnJvci1saWdodDogI2ZmNmY2MDtcbiRlcnJvci1kYXJrOiAjYWIwMDBkO1xuXG4kY29sb3ItcHJpbWFyeTogI0M5MjM2NjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiAjY2Q1NjhhO1xuJGNvbG9yLXByaW1hcnktZGFyazogI2I2MDA1ZDtcblxuJGNvbG9yLXNlY29uZGFyeTogIzVDNjRGRjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6ICM3MjcyZTc7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6ICM1NTU3ZDE7XG5cbiRjb2xvci1kZXZlbG9wOiAjZjBmMGYwO1xuJGNvbG9yLWRldmVsb3AtbGlnaHQ6ICNmZmY7XG4kY29sb3ItZGV2ZWxvcC1kYXJrOiAjZTBlMGUwO1xuXG4kYmFja2dyb3VuZDogIzI2MzIzODtcbiRiYWNrZ3JvdW5kLWxpZ2h0OiAjNDU1YTY0O1xuJGJhY2tncm91bmQtZGFyazogIzIwMjYzMjtcblxuJGhlYWRlci1jb2xvcjogIzBBMEQyRTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlJvYm90b1wiLCBcIlZlcmRhbmFcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiWW91bmdcIiwgJGZvbnQ7XG4kbW9uby1mb250OiBcIkZpcmEgQ29kZVwiLCBtb25vc3BhY2U7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09KlxcXG58fCAgIFNpemluZyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWhlaWdodDogNGVtO1xuXG5cbi8qPT09PT09PT09PT09KlxcXG58fCAgIE1peGlucyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRkZXB0aDogMSwgJHNwcmVhZDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgKDFweCAqICRzcHJlYWQpICgzcHggKiAkc3ByZWFkKSAwIHJnYmEoIzAwMCwgLjIgKiAkZGVwdGgpLFxuICAgICAgICAgICAgICAgIDAgKDFweCAqICRzcHJlYWQpICgxcHggKiAkc3ByZWFkKSAwIHJnYmEoIzAwMCwgLjE0ICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgycHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgLSgxcHggKiAkc3ByZWFkKSByZ2JhKCMwMDAsIC4xMiAqICRkZXB0aCk7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgYXBwLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICB9XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLXRvcDogLjVlbTtcbn1cblxuLnRhYmxlLXJvdyB7XG4gIC5kZXZpY2VzLFxuICAgIC5jcmVhdGVkIHtcbiAgICB3aWR0aDogOGVtO1xuICAgIG1pbi13aWR0aDogOGVtO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModuleSystemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'module-systems',
                templateUrl: './module-systems.template.html',
                styleUrls: ['./module-systems.styles.scss'],
            }]
    }], function () { return [{ type: src_app_common_item_service__WEBPACK_IMPORTED_MODULE_6__["ActiveItemService"] }]; }, null); })();


/***/ }),

/***/ "90bR":
/*!*******************************************!*\
  !*** ./src/app/modules/modules.routes.ts ***!
  \*******************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _modules_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules.component */ "/9IV");
/* harmony import */ var _module_about_module_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-about/module-about.component */ "AYHC");
/* harmony import */ var _module_systems_module_systems_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-systems/module-systems.component */ "4aFQ");
/* harmony import */ var _ui_extension_outlet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/extension-outlet.component */ "55V4");




const ROUTES = [
    {
        path: ':id',
        component: _modules_component__WEBPACK_IMPORTED_MODULE_0__["ModulesComponent"],
        children: [
            { path: 'about', component: _module_about_module_about_component__WEBPACK_IMPORTED_MODULE_1__["ModuleAboutComponent"] },
            { path: 'systems', component: _module_systems_module_systems_component__WEBPACK_IMPORTED_MODULE_2__["ModuleSystemsComponent"] },
            { path: 'extend/:id', component: _ui_extension_outlet_component__WEBPACK_IMPORTED_MODULE_3__["ExtensionOutletComponent"] },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];


/***/ }),

/***/ "AYHC":
/*!****************************************************************!*\
  !*** ./src/app/modules/module-about/module-about.component.ts ***!
  \****************************************************************/
/*! exports provided: ModuleAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleAboutComponent", function() { return ModuleAboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "K2Fw");
/* harmony import */ var src_app_common_base_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/base.class */ "fnpZ");
/* harmony import */ var src_app_overlays_view_response_modal_view_response_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/overlays/view-response-modal/view-response-modal.component */ "av/m");
/* harmony import */ var src_app_common_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/notifications */ "GGZo");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_common_item_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/item.service */ "ty9M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _ui_forms_settings_form_settings_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/forms/settings-form/settings-form.component */ "ZP2d");
/* harmony import */ var _ui_pipes_date_from_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/pipes/date-from.pipe */ "8MW+");















function ModuleAboutComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.item.notes);
} }
function ModuleAboutComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.item.ip);
} }
function ModuleAboutComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.item.port);
} }
function ModuleAboutComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "dateFrom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx_r6.item.created_at * 1000));
} }
function ModuleAboutComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "dateFrom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx_r7.item.updated_at * 1000));
} }
const _c19 = function (a1) { return ["/drivers", a1]; };
function ModuleAboutComponent_div_0_header_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c19, ctx_r8.item.driver_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nExp"](ctx_r8.item.driver.name || "<Unnamed>");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nApply"](1);
} }
const _c21 = function (a1) { return ["/systems", a1, "modules"]; };
function ModuleAboutComponent_div_0_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](0, 11, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c21, ctx_r9.system.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nExp"](ctx_r9.system == null ? null : ctx_r9.system.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nApply"](0);
} }
function ModuleAboutComponent_div_0_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nExp"](ctx_r10.item.running);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nApply"](1);
} }
function ModuleAboutComponent_div_0_mat_spinner_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 26);
} }
const _c26 = function () { return []; };
function ModuleAboutComponent_div_0_section_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "a-settings-form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx_r12.item.id)("merge", true)("settings", ctx_r12.item.settings)("merge_settings", ctx_r12.other_settings || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c26));
} }
function ModuleAboutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModuleAboutComponent_div_0_div_2_Template, 5, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModuleAboutComponent_div_0_div_3_Template, 5, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ModuleAboutComponent_div_0_div_4_Template, 5, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](7, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](12, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ModuleAboutComponent_div_0_div_15_Template, 6, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ModuleAboutComponent_div_0_div_16_Template, 6, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ModuleAboutComponent_div_0_header_19_Template, 4, 4, "header", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](21, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ModuleAboutComponent_div_0_span_22_Template, 3, 4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModuleAboutComponent_div_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.item.running ? ctx_r13.stopModule() : ctx_r13.startModule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ModuleAboutComponent_div_0_div_25_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ModuleAboutComponent_div_0_mat_spinner_26_Template, 1, 0, "mat-spinner", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "header", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](29, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ModuleAboutComponent_div_0_section_30_Template, 2, 5, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.ip);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.port);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.item.tls);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.item.udp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.created_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.driver);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.system);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.stopping);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.stopping);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.stopping);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.settings && ctx_r0.other_settings)("ngIfElse", _r1);
} }
function ModuleAboutComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-spinner", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ModuleAboutComponent extends src_app_common_base_class__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_dialog, _service) {
        super();
        this._dialog = _dialog;
        this._service = _service;
        /** List of settings for associated modules, drivers and zones */
        this.other_settings = null;
    }
    get item() {
        return this._service.active_item;
    }
    ngOnInit() {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadDriver();
            this.loadSystem();
            this.loadSettings();
        }));
    }
    loadDriver() {
        if (this.item && this.item.driver_id) {
            Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["showDriver"])(this.item.driver_id).subscribe((driver) => {
                this.driver = driver;
            });
        }
    }
    loadSystem() {
        if (this.item && this.item.system_id) {
            Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["showSystem"])(this.item.system_id).subscribe((system) => {
                this.system = system;
            });
        }
    }
    loadSettings() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.item) {
                return;
            }
            this.other_settings = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["moduleSettings"])(this.item.id).toPromise();
        });
    }
    stopModule() {
        this.stopping = true;
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["stopModule"])(this.item.id).subscribe(() => {
            this.stopping = false;
            Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_5__["notifySuccess"])('Module successfully stopped');
            this.item.running = false;
        }, (err) => {
            this.stopping = false;
            if (typeof err === 'string' && err.length < 64) {
                Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_5__["notifyError"])(err);
            }
            else {
                Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_5__["notifyError"])(`Failed to stop device '${this.item.id}'.\nView Error?`, 'View', () => this.viewDetails(err));
            }
        });
    }
    startModule() {
        this.stopping = true;
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["startModule"])(this.item.id).subscribe(() => {
            this.stopping = false;
            Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_5__["notifySuccess"])('Module successfully started');
            this.item.running = true;
        }, (err) => {
            this.stopping = false;
            if (typeof err === 'string' && err.length < 64) {
                Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_5__["notifyError"])(err);
            }
            else {
                Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_5__["notifyError"])(`Failed to start device '${this.item.id}'.\nView Error?`, 'View', () => this.viewDetails(err));
            }
        });
    }
    /** View Results of the execute */
    viewDetails(content) {
        this._dialog.open(src_app_overlays_view_response_modal_view_response_modal_component__WEBPACK_IMPORTED_MODULE_4__["ViewResponseModalComponent"], {
            data: { content },
        });
    }
}
ModuleAboutComponent.ɵfac = function ModuleAboutComponent_Factory(t) { return new (t || ModuleAboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_item_service__WEBPACK_IMPORTED_MODULE_7__["ActiveItemService"])); };
ModuleAboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModuleAboutComponent, selectors: [["module-about"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc \@moduleTLSLabel
         */
        const MSG_EXTERNAL_6787048658913260060$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS__1 = goog.getMsg("TLS:");
        i18n_0 = MSG_EXTERNAL_6787048658913260060$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS__1;
    }
    else {
        i18n_0 = $localize `:@moduleTLSLabel␟fc14542d8661d50a55ec617e759b8275266b4084␟6787048658913260060:TLS:`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc \@moduleUDPLabel
         */
        const MSG_EXTERNAL_9217682045572066115$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS__3 = goog.getMsg("UDP:");
        i18n_2 = MSG_EXTERNAL_9217682045572066115$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:@moduleUDPLabel␟45a627302b2be9d4d92e8361c28128b8747a3a76␟9217682045572066115:UDP:`;
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_settingsLabel$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS__6 = goog.getMsg("Settings");
        i18n_5 = MSG_EXTERNAL_settingsLabel$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS__6;
    }
    else {
        i18n_5 = $localize `:@@settingsLabel␟121cc5391cd2a5115bc2b3160379ee5b36cd7716␟4930506384627295710:Settings`;
    } let i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc \@moduleNotesLabel
         */
        const MSG_EXTERNAL_8421971980013015956$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS___8 = goog.getMsg("Notes:");
        i18n_7 = MSG_EXTERNAL_8421971980013015956$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS___8;
    }
    else {
        i18n_7 = $localize `:@moduleNotesLabel␟3b193ba24bd715ed412f5419df3acb59090141d3␟8421971980013015956:Notes:`;
    } let i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc \@moduleIPLabel
         */
        const MSG_EXTERNAL_253752108238785328$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS___10 = goog.getMsg("IP:");
        i18n_9 = MSG_EXTERNAL_253752108238785328$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS___10;
    }
    else {
        i18n_9 = $localize `:@moduleIPLabel␟8271bb466916303dc1516952bf50e7e6626f7b2c␟253752108238785328:IP:`;
    } let i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc \@modulePortLabel
         */
        const MSG_EXTERNAL_6167294183925653141$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS___12 = goog.getMsg("Port:");
        i18n_11 = MSG_EXTERNAL_6167294183925653141$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS___12;
    }
    else {
        i18n_11 = $localize `:@modulePortLabel␟a2ceedad860954f374fc1ac8bae057292b1cec2e␟6167294183925653141:Port:`;
    } let i18n_13; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_moduleCreatedAtLabel$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS___14 = goog.getMsg("Created:");
        i18n_13 = MSG_EXTERNAL_moduleCreatedAtLabel$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS___14;
    }
    else {
        i18n_13 = $localize `:@@moduleCreatedAtLabel␟a5ed099ffc9e96f6970df843289ade8a7d20ab9f␟1616250945945379783:Created:`;
    } let i18n_15; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc \@moduleUpdatedAtLabel
         */
        const MSG_EXTERNAL_1116759395536210856$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS___16 = goog.getMsg("Updated:");
        i18n_15 = MSG_EXTERNAL_1116759395536210856$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS___16;
    }
    else {
        i18n_15 = $localize `:@moduleUpdatedAtLabel␟f94240161f912dbd8758b858877cddeab80f36cb␟1116759395536210856:Updated:`;
    } let i18n_17; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_moduleDetailsDriver$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS___18 = goog.getMsg(" Driver:\u00A0{$startTagSpan}{$startLink}{$interpolation}{$closeLink}{$closeTagSpan}", { "startTagSpan": "\uFFFD#2\uFFFD", "startLink": "\uFFFD#3\uFFFD", "interpolation": "\uFFFD0\uFFFD", "closeLink": "\uFFFD/#3\uFFFD", "closeTagSpan": "\uFFFD/#2\uFFFD" });
        i18n_17 = MSG_EXTERNAL_moduleDetailsDriver$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS___18;
    }
    else {
        i18n_17 = $localize `:@@moduleDetailsDriver␟4651751cdd284b8ab924aec97998a2d8ad46e95f␟7082352451989540643: Driver: ${"\uFFFD#2\uFFFD"}:START_TAG_SPAN:${"\uFFFD#3\uFFFD"}:START_LINK:${"\uFFFD0\uFFFD"}:INTERPOLATION:${"\uFFFD/#3\uFFFD"}:CLOSE_LINK:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_SPAN:`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_moduleDetailsSystem$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS___20 = goog.getMsg(" Logic for system:\u00A0{$startTagSpan}{$startLink}{$interpolation}{$closeLink}{$closeTagSpan}", { "startTagSpan": "\uFFFD*22:1\uFFFD\uFFFD#1:1\uFFFD", "closeTagSpan": "\uFFFD/#1:1\uFFFD\uFFFD/*22:1\uFFFD", "startLink": "\uFFFD#2:1\uFFFD", "interpolation": "\uFFFD0:1\uFFFD", "closeLink": "\uFFFD/#2:1\uFFFD" });
        i18n_4 = MSG_EXTERNAL_moduleDetailsSystem$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS___20;
    }
    else {
        i18n_4 = $localize `:@@moduleDetailsSystem␟8dae01d0cd1bb98b4ac6e2ff6856c38e65d15e71␟6377598301195407213: Logic for system: ${"\uFFFD*22:1\uFFFD\uFFFD#1:1\uFFFD"}:START_TAG_SPAN:${"\uFFFD#2:1\uFFFD"}:START_LINK:${"\uFFFD0:1\uFFFD"}:INTERPOLATION:${"\uFFFD/#2:1\uFFFD"}:CLOSE_LINK:${"\uFFFD/#1:1\uFFFD\uFFFD/*22:1\uFFFD"}:CLOSE_TAG_SPAN:`;
    } let i18n_23; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2537520834646109979$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS___24 = goog.getMsg("{VAR_SELECT, select, true {Stop Module } false {Start Module }}");
        i18n_23 = MSG_EXTERNAL_2537520834646109979$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS___24;
    }
    else {
        i18n_23 = $localize `:␟2e434410a64453fd12259ac38cfcb4f7b4b26137␟2537520834646109979:{VAR_SELECT, select, true {Stop Module } false {Start Module }}`;
    } i18n_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nPostprocess"](i18n_23, { "VAR_SELECT": "\uFFFD0\uFFFD" }); let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_moduleStateToggle$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS___25 = goog.getMsg(" {$icu} ", { "icu": i18n_23 });
        i18n_22 = MSG_EXTERNAL_moduleStateToggle$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS___25;
    }
    else {
        i18n_22 = $localize `:@@moduleStateToggle␟d09fa3d7f10a3f4ba1dbb8ede1ea6f993f0adc3b␟6594646568873405470: ${i18n_23}:ICU: `;
    } let i18n_27; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_moduleDetailsLoading$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS__28 = goog.getMsg("Loading module settings...");
        i18n_27 = MSG_EXTERNAL_moduleDetailsLoading$$SRC_APP_MODULES_MODULE_ABOUT_MODULE_ABOUT_COMPONENT_TS__28;
    }
    else {
        i18n_27 = $localize `:@@moduleDetailsLoading␟cb7cffb188a2b0bce758e40f67c29387dd6ccfcf␟3678638452756535871:Loading module settings...`;
    } return [["class", "container", 4, "ngIf"], ["load_state", ""], [1, "container"], [1, "details"], ["class", "field", 4, "ngIf"], [1, "field"], i18n_0, [1, "value"], i18n_2, [1, "settings"], [4, "ngIf"], i18n_4, ["mat-button", "", 3, "disabled", "click"], ["class", "text", 4, "ngIf"], ["diameter", "32", 4, "ngIf"], i18n_5, [4, "ngIf", "ngIfElse"], i18n_7, i18n_9, i18n_11, i18n_13, i18n_15, i18n_17, [3, "routerLink"], [1, "text"], i18n_22, ["diameter", "32"], [3, "id", "merge", "settings", "merge_settings"], [1, "info-block"], [1, "icon"], ["diameter", "48"], i18n_27]; }, template: function ModuleAboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ModuleAboutComponent_div_0_Template, 31, 14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModuleAboutComponent_ng_template_1_Template, 5, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"], _ui_forms_settings_form_settings_form_component__WEBPACK_IMPORTED_MODULE_12__["SettingsFormComponent"]], pipes: [_ui_pipes_date_from_pipe__WEBPACK_IMPORTED_MODULE_13__["DateFromPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n  font-size: 1.1em;\n  margin-bottom: 0.5em;\n}\nheader.settings[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.75em;\n  margin: 0;\n}\nheader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  opacity: 0.65;\n  padding: 0 1em;\n  font-weight: 300;\n  text-decoration: underline;\n  cursor: pointer;\n  transition: color 200ms;\n}\nheader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: rgba(0, 0, 0, 0.85);\n}\nsection[_ngcontent-%COMP%] {\n  padding: 0.5em 0.25em;\n}\n.details[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0.25em 0;\n}\n.details[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  padding: 0 0.5em;\n  -webkit-user-select: all;\n  -moz-user-select: all;\n  user-select: all;\n}\n.details[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL21vZHVsZS1hYm91dC5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFxQ0E7O2NBQUE7QUFZQTs7ZUFBQTtBQU9BOztlQUFBO0FBZ0JBOztzQkFBQTtBQ3ZFQTtFQUNFLFlBQUE7QUFjRjtBQVhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBY0Y7QUFiRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFlSjtBQWJFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFlSjtBQWRJO0VBQ0UsMEJBQUE7QUFnQk47QUFYQTtFQUNFLHFCQUFBO0FBY0Y7QUFWRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBYUo7QUFaSTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDRyxxQkFBQTtFQUNLLGdCQUFBO0FBY2Q7QUFYRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFhSiIsImZpbGUiOiJtb2R1bGUtYWJvdXQuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNGNhZjUwO1xuJHN1Y2Nlc3MtbGlnaHQ6ICM2NmJiNmE7XG4kc3VjY2Vzcy1kYXJrOiAjMDA3OTZiO1xuXG4kcGVuZGluZzogI2ZmOGYwMDtcbiRwZW5kaW5nLWxpZ2h0OiAjZmZjMDQ2O1xuJHBlbmRpbmctZGFyazogI2M1NjAwMDtcblxuJGVycm9yOiAjZjQ0MzM2O1xuJGVycm9yLWxpZ2h0OiAjZmY2ZjYwO1xuJGVycm9yLWRhcms6ICNhYjAwMGQ7XG5cbiRjb2xvci1wcmltYXJ5OiAjQzkyMzY2O1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6ICNjZDU2OGE7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjYjYwMDVkO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjNUM2NEZGO1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogIzcyNzJlNztcbiRjb2xvci1zZWNvbmRhcnktZGFyazogIzU1NTdkMTtcblxuJGNvbG9yLWRldmVsb3A6ICNmMGYwZjA7XG4kY29sb3ItZGV2ZWxvcC1saWdodDogI2ZmZjtcbiRjb2xvci1kZXZlbG9wLWRhcms6ICNlMGUwZTA7XG5cbiRiYWNrZ3JvdW5kOiAjMjYzMjM4O1xuJGJhY2tncm91bmQtbGlnaHQ6ICM0NTVhNjQ7XG4kYmFja2dyb3VuZC1kYXJrOiAjMjAyNjMyO1xuXG4kaGVhZGVyLWNvbG9yOiAjMEEwRDJFO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiUm9ib3RvXCIsIFwiVmVyZGFuYVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJZb3VuZ1wiLCAkZm9udDtcbiRtb25vLWZvbnQ6IFwiRmlyYSBDb2RlXCIsIG1vbm9zcGFjZTtcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgU2l6aW5nICAgfHxcblxcKj09PT09PT09PT09PSovXG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG5cblxuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgTWl4aW5zICAgfHxcblxcKj09PT09PT09PT09PSovXG5cbkBtaXhpbiBoaWRlLXRleHQtb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGJveC1zaGFkb3coJGRlcHRoOiAxLCAkc3ByZWFkOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAoMXB4ICogJHNwcmVhZCkgKDNweCAqICRzcHJlYWQpIDAgcmdiYSgjMDAwLCAuMiAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMXB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIDAgcmdiYSgjMDAwLCAuMTQgKiAkZGVwdGgpLFxuICAgICAgICAgICAgICAgIDAgKDJweCAqICRzcHJlYWQpICgxcHggKiAkc3ByZWFkKSAtKDFweCAqICRzcHJlYWQpIHJnYmEoIzAwMCwgLjEyICogJGRlcHRoKTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMWVtO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbiAgJi5zZXR0aW5ncyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLjc1ZW07XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICBvcGFjaXR5OiAuNjU7XG4gICAgcGFkZGluZzogMCAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogcmdiYSgjMDAwLCAuODUpO1xuICAgIH1cbiAgfVxufVxuXG5zZWN0aW9uIHtcbiAgcGFkZGluZzogLjVlbSAuMjVlbTtcbn1cblxuLmRldGFpbHMge1xuICAuZmllbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IC4yNWVtIDA7XG4gICAgLnZhbHVlIHtcbiAgICAgIHBhZGRpbmc6IDAgLjVlbTtcbiAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IGFsbDtcbiAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGFsbDtcbiAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IGFsbDtcbiAgICB9XG4gIH1cbiAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModuleAboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'module-about',
                templateUrl: './module-about.template.html',
                styleUrls: ['./module-about.styles.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: src_app_common_item_service__WEBPACK_IMPORTED_MODULE_7__["ActiveItemService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-modules-module-es2015.js.map
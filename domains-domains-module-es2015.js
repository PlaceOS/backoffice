(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["domains-domains-module"],{

/***/ "./src/app/domains/domain-about/domain-about.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/domains/domain-about/domain-about.component.ts ***!
  \****************************************************************/
/*! exports provided: DomainAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainAboutComponent", function() { return DomainAboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/esm/index.js");
/* harmony import */ var src_app_common_base_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/base.class */ "./src/app/common/base.class.ts");
/* harmony import */ var src_app_common_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/validation */ "./src/app/common/validation.ts");
/* harmony import */ var src_app_common_item_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/item.service */ "./src/app/common/item.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _ui_custom_fields_settings_field_settings_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/custom-fields/settings-field/settings-field.component */ "./src/app/ui/custom-fields/settings-field/settings-field.component.ts");












function DomainAboutComponent_section_2_settings_form_field_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "settings-form-field", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", false);
} }
function DomainAboutComponent_section_2_settings_form_field_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "settings-form-field", 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", false);
} }
function DomainAboutComponent_section_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-tab-group", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedIndexChange", function DomainAboutComponent_section_2_Template_mat_tab_group_selectedIndexChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.index = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-tab", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-tab", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DomainAboutComponent_section_2_settings_form_field_4_Template, 1, 1, "settings-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DomainAboutComponent_section_2_settings_form_field_5_Template, 1, 1, "settings-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedIndex", ctx_r0.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.index !== 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.index === 1);
} }
class DomainAboutComponent extends src_app_common_base_class__WEBPACK_IMPORTED_MODULE_4__["BaseClass"] {
    constructor(_service) {
        super();
        this._service = _service;
    }
    get item() {
        return this._service.active_item;
    }
    ngOnInit() {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadForm();
        }));
    }
    /** Load form fields for active item */
    loadForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            config: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](JSON.stringify(this.item.config, undefined, 4), [
                src_app_common_validation__WEBPACK_IMPORTED_MODULE_5__["validateJSONString"],
            ]),
            internals: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](JSON.stringify(this.item.internals, undefined, 4), [
                src_app_common_validation__WEBPACK_IMPORTED_MODULE_5__["validateJSONString"],
            ]),
        });
        this.subscription('form', this.form.valueChanges.subscribe(() => this.saveChanges()));
    }
    /** Save changes to the form fields */
    saveChanges() {
        this.timeout('save', () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.form.valid) {
                const domain = new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["PlaceDomain"](Object.assign(Object.assign({}, this.item), { config: JSON.parse(this.form.value.config), internals: JSON.parse(this.form.value.internals) }));
                const item = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["updateDomain"])(domain.id, domain).toPromise();
                this._service.replaceItem(item);
            }
        }), 3000);
    }
}
DomainAboutComponent.ɵfac = function DomainAboutComponent_Factory(t) { return new (t || DomainAboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_item_service__WEBPACK_IMPORTED_MODULE_6__["ActiveItemService"])); };
DomainAboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DomainAboutComponent, selectors: [["app-domain-about"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 1, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], [3, "selectedIndex", "selectedIndexChange"], ["label", "Config"], ["label", "Internals"], ["formControlName", "config", "lang", "json", 3, "readonly", 4, "ngIf"], ["formControlName", "internals", "lang", "json", 3, "readonly", 4, "ngIf"], ["formControlName", "config", "lang", "json", 3, "readonly"], ["formControlName", "internals", "lang", "json", 3, "readonly"]], template: function DomainAboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DomainAboutComponent_section_2_Template, 6, 4, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _ui_custom_fields_settings_field_settings_field_component__WEBPACK_IMPORTED_MODULE_9__["SettingsFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: [".content[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 50vh;\n}\n\nh3[_ngcontent-%COMP%] {\n  padding: 0 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9tYWlucy9kb21haW4tYWJvdXQvZG9tYWluLWFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9kb21haW5zL2RvbWFpbi1hYm91dC9kb21haW4tYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xufVxuXG5oMyB7XG4gICAgcGFkZGluZzogMCAxZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DomainAboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-domain-about',
                templateUrl: './domain-about.component.html',
                styleUrls: ['./domain-about.component.scss'],
            }]
    }], function () { return [{ type: src_app_common_item_service__WEBPACK_IMPORTED_MODULE_6__["ActiveItemService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/domains/domain-applications/domain-applications.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/domains/domain-applications/domain-applications.component.ts ***!
  \******************************************************************************/
/*! exports provided: DomainApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainApplicationsComponent", function() { return DomainApplicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/esm/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_common_base_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/base.class */ "./src/app/common/base.class.ts");
/* harmony import */ var src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/overlays/item-modal/item-modal.component */ "./src/app/overlays/item-modal/item-modal.component.ts");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var src_app_common_general__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/general */ "./src/app/common/general.ts");
/* harmony import */ var src_app_common_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/notifications */ "./src/app/common/notifications.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_common_item_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common/item.service */ "./src/app/common/item.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/icon/icon.component */ "./src/app/ui/icon/icon.component.ts");
















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_newAction$$SRC_APP_DOMAINS_DOMAIN_APPLICATIONS_DOMAIN_APPLICATIONS_COMPONENT_TS__1 = goog.getMsg("Add new");
    I18N_0 = MSG_EXTERNAL_newAction$$SRC_APP_DOMAINS_DOMAIN_APPLICATIONS_DOMAIN_APPLICATIONS_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:@@newAction␟52cb3a1dbc20365867f39819932e43d19542474d␟4948407374074297419:Add new`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_applicationTableName$$SRC_APP_DOMAINS_DOMAIN_APPLICATIONS_DOMAIN_APPLICATIONS_COMPONENT_TS___3 = goog.getMsg("Name");
    I18N_2 = MSG_EXTERNAL_applicationTableName$$SRC_APP_DOMAINS_DOMAIN_APPLICATIONS_DOMAIN_APPLICATIONS_COMPONENT_TS___3;
}
else {
    I18N_2 = $localize `:@@applicationTableName␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_applicationTableRedirect$$SRC_APP_DOMAINS_DOMAIN_APPLICATIONS_DOMAIN_APPLICATIONS_COMPONENT_TS___5 = goog.getMsg("Redirect");
    I18N_4 = MSG_EXTERNAL_applicationTableRedirect$$SRC_APP_DOMAINS_DOMAIN_APPLICATIONS_DOMAIN_APPLICATIONS_COMPONENT_TS___5;
}
else {
    I18N_4 = $localize `:@@applicationTableRedirect␟35b26492e63567eae1f0a480bdd793f1dc335b80␟7549750882380880957:Redirect`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_applicationTableClientId$$SRC_APP_DOMAINS_DOMAIN_APPLICATIONS_DOMAIN_APPLICATIONS_COMPONENT_TS___7 = goog.getMsg("Client ID");
    I18N_6 = MSG_EXTERNAL_applicationTableClientId$$SRC_APP_DOMAINS_DOMAIN_APPLICATIONS_DOMAIN_APPLICATIONS_COMPONENT_TS___7;
}
else {
    I18N_6 = $localize `:@@applicationTableClientId␟152344a93fb1022382cc1a10e38e4290019224e4␟5273501066845923426:Client ID`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_applicationTableClientSecret$$SRC_APP_DOMAINS_DOMAIN_APPLICATIONS_DOMAIN_APPLICATIONS_COMPONENT_TS___9 = goog.getMsg("Secret");
    I18N_8 = MSG_EXTERNAL_applicationTableClientSecret$$SRC_APP_DOMAINS_DOMAIN_APPLICATIONS_DOMAIN_APPLICATIONS_COMPONENT_TS___9;
}
else {
    I18N_8 = $localize `:@@applicationTableClientSecret␟124424c2379dec595edaef370b2554b2f86ea105␟7896650584449704588:Secret`;
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_applicationTableScope$$SRC_APP_DOMAINS_DOMAIN_APPLICATIONS_DOMAIN_APPLICATIONS_COMPONENT_TS___11 = goog.getMsg("Scope");
    I18N_10 = MSG_EXTERNAL_applicationTableScope$$SRC_APP_DOMAINS_DOMAIN_APPLICATIONS_DOMAIN_APPLICATIONS_COMPONENT_TS___11;
}
else {
    I18N_10 = $localize `:@@applicationTableScope␟1481b8488e10dbc437accce89d2ae35a0106e8ba␟5590086849807274701:Scope`;
}
const _c12 = function () { return { class: "backoffice-edit" }; };
const _c13 = function () { return { class: "backoffice-trash" }; };
function DomainApplicationsComponent_div_0_div_5_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DomainApplicationsComponent_div_0_div_5_tr_15_Template_td_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return !ctx_r5.show_secret[item_r4.id] ? (ctx_r5.show_secret[item_r4.id] = true) : ctx_r5.copySecret(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DomainApplicationsComponent_div_0_div_5_tr_15_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r7.editApplication(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DomainApplicationsComponent_div_0_div_5_tr_15_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r8.deleteApplication(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", item_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", item_r4.redirect_uri, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.redirect_uri);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.uid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.show_secret[item_r4.id] ? item_r4.secret : "Show", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.scopes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c13));
} }
function DomainApplicationsComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](10, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](12, I18N_10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, DomainApplicationsComponent_div_0_div_5_tr_15_Template, 17, 11, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.application_list);
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_applicationTableEmpty$$SRC_APP_DOMAINS_DOMAIN_APPLICATIONS_DOMAIN_APPLICATIONS_COMPONENT_TS___15 = goog.getMsg("No applications found");
    I18N_14 = MSG_EXTERNAL_applicationTableEmpty$$SRC_APP_DOMAINS_DOMAIN_APPLICATIONS_DOMAIN_APPLICATIONS_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:@@applicationTableEmpty␟923cb1a5e46a6e5ba971e0cd2fa58c53e4ad4f26␟342003372328863922:No applications found`;
}
function DomainApplicationsComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DomainApplicationsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DomainApplicationsComponent_div_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.newApplication(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DomainApplicationsComponent_div_0_div_5_Template, 16, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DomainApplicationsComponent_div_0_div_6_Template, 3, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.application_list && ctx_r0.application_list.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.application_list || ctx_r0.application_list.length <= 0);
} }
class DomainApplicationsComponent extends src_app_common_base_class__WEBPACK_IMPORTED_MODULE_4__["BaseClass"] {
    constructor(_dialog, _service) {
        super();
        this._dialog = _dialog;
        this._service = _service;
        this.show_secret = {};
    }
    get item() {
        return this._service.active_item;
    }
    ngOnInit() {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadApplications();
        }));
    }
    copySecret(item) {
        this.show_secret[item.id] = false;
        Object(src_app_common_general__WEBPACK_IMPORTED_MODULE_7__["copyToClipboard"])(item.secret);
        Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifyInfo"])('Copied client secret to clipboard');
    }
    loadApplications(offset = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.item) {
                return;
            }
            this.application_list = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["queryApplications"])()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((resp) => resp.data))
                .toPromise();
        });
    }
    /**
     * Open the modal to create a new system
     */
    newApplication() {
        const ref = this._dialog.open(src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_5__["ItemCreateUpdateModalComponent"], {
            height: 'auto',
            width: 'auto',
            maxHeight: 'calc(100vh - 2em)',
            maxWidth: 'calc(100vw - 2em)',
            data: {
                item: new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["PlaceApplication"]({ owner_id: this.item.id }),
                name: 'Application',
                save: (item) => Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["addApplication"])(item),
            },
        });
        this.subscription('item-form', ref.componentInstance.event.subscribe((event) => {
            if (event.reason === 'done') {
                this.application_list = [...this.application_list, event.metadata.item];
            }
        }));
    }
    /**
     * Open the modal to create a new system
     */
    editApplication(item) {
        if (this.item) {
            const ref = this._dialog.open(src_app_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_5__["ItemCreateUpdateModalComponent"], {
                height: 'auto',
                width: 'auto',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    item,
                    name: 'Application',
                    save: (item) => Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["updateApplication"])(item.id, item),
                },
            });
            this.subscription('item-form', ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    const index = this.application_list.findIndex((app) => app.id === event.metadata.item.id);
                    if (index >= 0) {
                        this.application_list.splice(index, 1, event.metadata.item);
                        this.application_list = [...this.application_list];
                    }
                }
            }));
        }
    }
    deleteApplication(item) {
        if (item) {
            const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["CONFIRM_METADATA"]), { data: {
                    title: `Delete application`,
                    content: `<p>Are you sure you want delete the application ${item.name}?</p><p>Configuration will be <strong>immediately</strong> updated</p>`,
                    icon: { type: 'icon', class: 'backoffice-trash' },
                } }));
            this.subscription('delete_confirm', ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    ref.componentInstance.loading = 'Deleting application...';
                    Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["removeApplication"])(item.id).subscribe(() => {
                        Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifySuccess"])(`Successfully deleted application "${item.name}".`);
                        this.loadApplications();
                        ref.close();
                        this.unsub('delete_confirm');
                    }, (err) => {
                        ref.componentInstance.loading = null;
                        Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_8__["notifyError"])(`Error deleting application. Error: ${JSON.stringify(err.response || err.message || err)}`);
                    });
                }
            }));
        }
    }
}
DomainApplicationsComponent.ɵfac = function DomainApplicationsComponent_Factory(t) { return new (t || DomainApplicationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_item_service__WEBPACK_IMPORTED_MODULE_10__["ActiveItemService"])); };
DomainApplicationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DomainApplicationsComponent, selectors: [["domain-applications"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "select"], ["mat-button", "", 3, "click"], ["class", "list", 4, "ngIf"], ["class", "info-block", 4, "ngIf"], [1, "list"], [1, "name"], [1, "flex"], [1, "scope"], [1, "duo"], [4, "ngFor", "ngForOf"], [1, "name", 3, "matTooltip"], [3, "href"], [1, "id"], [1, "secret", 3, "click"], ["mat-icon-button", "", 3, "click"], [3, "icon"], [1, "info-block"], [1, "text"]], template: function DomainApplicationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DomainApplicationsComponent_div_0_Template, 7, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__["IconComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 1.2em;\n  max-width: 5em;\n  margin: 0;\n}\n.state[_ngcontent-%COMP%] {\n  height: 1.5em;\n  width: 1.5em;\n  margin: 0.25em;\n  background-color: #d32f2f;\n  border-radius: 0.8em;\n  transition: margin 250ms, height 250ms, width 250ms, background-color 300ms;\n}\n.state.active[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  height: 0.75em;\n  width: 0.75em;\n  margin: 0.625em;\n}\n.id[_ngcontent-%COMP%], .secret[_ngcontent-%COMP%] {\n  font-family: \"Fira Code\", monospace;\n  -webkit-user-select: all;\n     -moz-user-select: all;\n      -ms-user-select: all;\n          user-select: all;\n  cursor: cell;\n  font-size: 0.8em;\n}\n.secret[_ngcontent-%COMP%] {\n  color: #1976d2;\n  text-decoration: underline;\n}\n.duo[_ngcontent-%COMP%] {\n  width: 6.75em;\n  display: flex;\n}\n.table-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%]   .scope[_ngcontent-%COMP%] {\n  width: 8em;\n  min-width: 8em;\n}\n.select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 0.5em 0.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9kb21haW5zL2RvbWFpbi1hcHBsaWNhdGlvbnMvZG9tYWluLWFwcGxpY2F0aW9ucy5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFxQ0E7O2NBQUE7QUFZQTs7ZUFBQTtBQU9BOztlQUFBO0FBZ0JBOztzQkFBQTtBQ3RFQTtFQUNJLFlBQUE7QUFhSjtBQVZBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFhSjtBQVZBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLDJFQUFBO0FBYUo7QUFaSTtFQUNJLHlCRGRFO0VDZUYsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBY1I7QUFWQTs7RUFFSSxtQ0RhUTtFQ1pSLHdCQUFBO0tBQUEscUJBQUE7TUFBQSxvQkFBQTtVQUFBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBYUo7QUFWQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQWFKO0FBVkE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQWFKO0FBVEk7O0VBRUksVUFBQTtFQUNBLGNBQUE7QUFZUjtBQVJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFXSjtBQVJBO0VBQ0kscUJBQUE7QUFXSiIsImZpbGUiOiJzcmMvYXBwL2RvbWFpbnMvZG9tYWluLWFwcGxpY2F0aW9ucy9kb21haW4tYXBwbGljYXRpb25zLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzRjYWY1MDtcbiRzdWNjZXNzLWxpZ2h0OiAjNjZiYjZhO1xuJHN1Y2Nlc3MtZGFyazogIzAwNzk2YjtcblxuJHBlbmRpbmc6ICNmZjhmMDA7XG4kcGVuZGluZy1saWdodDogI2ZmYzA0NjtcbiRwZW5kaW5nLWRhcms6ICNjNTYwMDA7XG5cbiRlcnJvcjogI2Y0NDMzNjtcbiRlcnJvci1saWdodDogI2ZmNmY2MDtcbiRlcnJvci1kYXJrOiAjYWIwMDBkO1xuXG4kY29sb3ItcHJpbWFyeTogI0M5MjM2NjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiAjY2Q1NjhhO1xuJGNvbG9yLXByaW1hcnktZGFyazogI2I2MDA1ZDtcblxuJGNvbG9yLXNlY29uZGFyeTogIzVDNjRGRjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6ICM3MjcyZTc7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6ICM1NTU3ZDE7XG5cbiRjb2xvci1kZXZlbG9wOiAjZjBmMGYwO1xuJGNvbG9yLWRldmVsb3AtbGlnaHQ6ICNmZmY7XG4kY29sb3ItZGV2ZWxvcC1kYXJrOiAjZTBlMGUwO1xuXG4kYmFja2dyb3VuZDogIzI2MzIzODtcbiRiYWNrZ3JvdW5kLWxpZ2h0OiAjNDU1YTY0O1xuJGJhY2tncm91bmQtZGFyazogIzIwMjYzMjtcblxuJGhlYWRlci1jb2xvcjogIzBBMEQyRTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlJvYm90b1wiLCBcIlZlcmRhbmFcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiWW91bmdcIiwgJGZvbnQ7XG4kbW9uby1mb250OiBcIkZpcmEgQ29kZVwiLCBtb25vc3BhY2U7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09KlxcXG58fCAgIFNpemluZyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWhlaWdodDogNGVtO1xuXG5cbi8qPT09PT09PT09PT09KlxcXG58fCAgIE1peGlucyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRkZXB0aDogMSwgJHNwcmVhZDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgKDFweCAqICRzcHJlYWQpICgzcHggKiAkc3ByZWFkKSAwIHJnYmEoIzAwMCwgLjIgKiAkZGVwdGgpLFxuICAgICAgICAgICAgICAgIDAgKDFweCAqICRzcHJlYWQpICgxcHggKiAkc3ByZWFkKSAwIHJnYmEoIzAwMCwgLjE0ICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgycHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgLSgxcHggKiAkc3ByZWFkKSByZ2JhKCMwMDAsIC4xMiAqICRkZXB0aCk7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxZW07XG59XG5cbi5vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgbWF4LXdpZHRoOiA1ZW07XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uc3RhdGUge1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIG1hcmdpbjogLjI1ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzMmYyZjtcbiAgICBib3JkZXItcmFkaXVzOiAuOGVtO1xuICAgIHRyYW5zaXRpb246IG1hcmdpbiAyNTBtcywgaGVpZ2h0IDI1MG1zLCB3aWR0aCAyNTBtcywgYmFja2dyb3VuZC1jb2xvciAzMDBtcztcbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzdWNjZXNzO1xuICAgICAgICBoZWlnaHQ6IC43NWVtO1xuICAgICAgICB3aWR0aDogLjc1ZW07XG4gICAgICAgIG1hcmdpbjogLjYyNWVtO1xuICAgIH1cbn1cblxuLmlkLFxuLnNlY3JldCB7XG4gICAgZm9udC1mYW1pbHk6ICRtb25vLWZvbnQ7XG4gICAgdXNlci1zZWxlY3Q6IGFsbDtcbiAgICBjdXJzb3I6IGNlbGw7XG4gICAgZm9udC1zaXplOiAuOGVtO1xufVxuXG4uc2VjcmV0IHtcbiAgICBjb2xvcjogIzE5NzZkMjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmR1byB7XG4gICAgd2lkdGg6IDYuNzVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGFibGUtcm93IHtcbiAgICAubmFtZSxcbiAgICAuc2NvcGUge1xuICAgICAgICB3aWR0aDogOGVtO1xuICAgICAgICBtaW4td2lkdGg6IDhlbTtcbiAgICB9XG59XG5cbi5zZWxlY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuc2VjdGlvbiB7XG4gICAgcGFkZGluZzogLjVlbSAuMjVlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DomainApplicationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'domain-applications',
                templateUrl: './domain-applications.template.html',
                styleUrls: ['./domain-applications.styles.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }, { type: src_app_common_item_service__WEBPACK_IMPORTED_MODULE_10__["ActiveItemService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/domains/domain-authentication/domain-authentication.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/domains/domain-authentication/domain-authentication.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DomainAuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainAuthenticationComponent", function() { return DomainAuthenticationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/esm/index.js");
/* harmony import */ var src_app_common_base_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/base.class */ "./src/app/common/base.class.ts");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var src_app_overlays_auth_source_modal_auth_source_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/overlays/auth-source-modal/auth-source-modal.component */ "./src/app/overlays/auth-source-modal/auth-source-modal.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_common_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/notifications */ "./src/app/common/notifications.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_common_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/item.service */ "./src/app/common/item.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/icon/icon.component */ "./src/app/ui/icon/icon.component.ts");














var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_newAction$$SRC_APP_DOMAINS_DOMAIN_AUTHENTICATION_DOMAIN_AUTHENTICATION_COMPONENT_TS_1 = goog.getMsg("Add new");
    I18N_0 = MSG_EXTERNAL_newAction$$SRC_APP_DOMAINS_DOMAIN_AUTHENTICATION_DOMAIN_AUTHENTICATION_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:@@newAction␟52cb3a1dbc20365867f39819932e43d19542474d␟4948407374074297419:Add new`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_authTableName$$SRC_APP_DOMAINS_DOMAIN_AUTHENTICATION_DOMAIN_AUTHENTICATION_COMPONENT_TS__3 = goog.getMsg("Name");
    I18N_2 = MSG_EXTERNAL_authTableName$$SRC_APP_DOMAINS_DOMAIN_AUTHENTICATION_DOMAIN_AUTHENTICATION_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:@@authTableName␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_authTableType$$SRC_APP_DOMAINS_DOMAIN_AUTHENTICATION_DOMAIN_AUTHENTICATION_COMPONENT_TS__5 = goog.getMsg("Type");
    I18N_4 = MSG_EXTERNAL_authTableType$$SRC_APP_DOMAINS_DOMAIN_AUTHENTICATION_DOMAIN_AUTHENTICATION_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:@@authTableType␟f61c6867295f3b53d23557021f2f4e0aa1d0b8fc␟8650499415827640724:Type`;
}
const _c6 = function () { return { class: "backoffice-edit" }; };
const _c7 = function () { return { class: "backoffice-trash" }; };
function DomainAuthenticationComponent_div_5_tr_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomainAuthenticationComponent_div_5_tr_9_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.editAuthSource(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomainAuthenticationComponent_div_5_tr_9_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.deleteAuthSource(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", item_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.source_types[item_r4.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c7));
} }
function DomainAuthenticationComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DomainAuthenticationComponent_div_5_tr_9_Template, 10, 7, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.auth_sources);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_authTableEmpty$$SRC_APP_DOMAINS_DOMAIN_AUTHENTICATION_DOMAIN_AUTHENTICATION_COMPONENT_TS__9 = goog.getMsg("No authentication sources found");
    I18N_8 = MSG_EXTERNAL_authTableEmpty$$SRC_APP_DOMAINS_DOMAIN_AUTHENTICATION_DOMAIN_AUTHENTICATION_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:@@authTableEmpty␟506dd45c68934158515169b689d4f77c5befe8f0␟6274894139040079425:No authentication sources found`;
}
function DomainAuthenticationComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DomainAuthenticationComponent extends src_app_common_base_class__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(_dialog, _service) {
        super();
        this._dialog = _dialog;
        this._service = _service;
        /** List of auth sources associated with the active domain */
        this.auth_sources = [];
        /** Mapping of auth sources to their type */
        this.source_types = {};
    }
    get item() {
        return this._service.active_item;
    }
    ngOnInit() {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadAuthSources();
        }));
    }
    /**
     * Load auth sources of all types for domain
     * @param offset Request page offset
     */
    loadAuthSources(offset = 0) {
        if (!this.item) {
            return;
        }
        Promise.all([
            Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["queryOAuthSources"])({ authority_id: this.item.id, offset })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((resp) => resp.data))
                .toPromise(),
            Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["querySAMLSources"])({ authority_id: this.item.id, offset })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((resp) => resp.data))
                .toPromise(),
            Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["queryLDAPSources"])({ authority_id: this.item.id, offset })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((resp) => resp.data))
                .toPromise(),
        ]).then((responses) => {
            if (!offset) {
                this.auth_sources = [];
            }
            for (const list of responses) {
                list.forEach((auth_source) => this.addAuthSourceToList(auth_source));
            }
        }, () => null);
    }
    /**
     * Open modal to create a new  auth source for the domain
     * @param item Auth source to delete
     */
    newAuthSource() {
        const ref = this._dialog.open(src_app_overlays_auth_source_modal_auth_source_modal_component__WEBPACK_IMPORTED_MODULE_4__["AuthSourceModalComponent"], {
            width: 'auto',
            height: 'auto',
            data: {
                domain: this.item,
            },
        });
        ref.componentInstance.event.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])((_) => _.reason === 'done')).subscribe((event) => {
            this.addAuthSourceToList(event.metadata.source);
            this.timeout('load', () => this.loadAuthSources(), 2000);
        });
    }
    /**
     * Open modal to edit auth source
     * @param item Auth source to edit
     */
    editAuthSource(item) {
        const ref = this._dialog.open(src_app_overlays_auth_source_modal_auth_source_modal_component__WEBPACK_IMPORTED_MODULE_4__["AuthSourceModalComponent"], {
            width: 'auto',
            height: 'auto',
            data: {
                domain: this.item,
                auth_source: item,
            },
        });
        ref.componentInstance.event.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])((_) => _.reason === 'done')).subscribe((event) => {
            this.addAuthSourceToList(event.metadata.source);
            this.timeout('load', () => this.loadAuthSources(), 2000);
        });
    }
    deleteMethod(item) {
        if (item instanceof _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["PlaceSAMLSource"]) {
            return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["removeSAMLSource"])(item.id);
        }
        else if (item instanceof _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["PlaceLDAPSource"]) {
            return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["removeLDAPSource"])(item.id);
        }
        return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["removeOAuthSource"])(item.id);
    }
    /**
     * Delete the auth source from the domain
     * @param item Auth source to delete
     */
    deleteAuthSource(item) {
        if (item) {
            const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["CONFIRM_METADATA"]), { data: {
                    title: `Delete auth source`,
                    content: `<p>Are you sure you want delete this auth source?</p><p>Deleting this will remove this auth source <strong>immediately</strong></p>`,
                    icon: { type: 'icon', class: 'backoffice-trash' },
                } }));
            this.subscription('delete_confirm', ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    ref.componentInstance.loading = 'Deleting auth source...';
                    this.deleteMethod(item)
                        .toPromise()
                        .then(() => {
                        this.auth_sources = this.auth_sources.filter((source) => source.id !== item.id);
                        Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_6__["notifySuccess"])('Successfully deleted auth source.');
                        ref.close();
                        this.unsub('delete_confirm');
                        this.loadAuthSources();
                    }, (err) => {
                        Object(src_app_common_notifications__WEBPACK_IMPORTED_MODULE_6__["notifyError"])(`Error deleting auth source. Error ${JSON.stringify(err.response || err.message || err)}`);
                        ref.componentInstance.loading = null;
                    });
                }
            }));
        }
    }
    /**
     * Add source the the auth source list. Updated item if it already exists
     * @param source Source to add the the list
     */
    addAuthSourceToList(source) {
        this.source_types[source.id] =
            source instanceof _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["PlaceSAMLSource"]
                ? 'saml'
                : source instanceof _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["PlaceLDAPSource"]
                    ? 'ldap'
                    : 'oauth';
        const index = this.auth_sources.findIndex((a_source) => a_source.id === source.id);
        if (index < 0) {
            this.auth_sources.push(source);
        }
        else {
            this.auth_sources.splice(index, 1, source);
        }
    }
}
DomainAuthenticationComponent.ɵfac = function DomainAuthenticationComponent_Factory(t) { return new (t || DomainAuthenticationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_item_service__WEBPACK_IMPORTED_MODULE_8__["ActiveItemService"])); };
DomainAuthenticationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DomainAuthenticationComponent, selectors: [["domain-authentication"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 2, consts: [[1, "container"], [1, "select"], ["mat-button", "", 3, "click"], ["class", "list", 4, "ngIf", "ngIfElse"], ["no_auth_sources", ""], [1, "list"], [1, "name"], [1, "flex"], [1, "duo"], [4, "ngFor", "ngForOf"], [1, "name", 3, "matTooltip"], ["mat-icon-button", "", 3, "click"], [3, "icon"], [1, "info-block"], [1, "text"]], template: function DomainAuthenticationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomainAuthenticationComponent_Template_button_click_2_listener() { return ctx.newAuthSource(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DomainAuthenticationComponent_div_5_Template, 10, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DomainAuthenticationComponent_ng_template_6_Template, 3, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth_sources && ctx.auth_sources.length > 0)("ngIfElse", _r1);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__["IconComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 1.2em;\n  max-width: 5em;\n  margin: 0;\n}\n.action[_ngcontent-%COMP%] {\n  height: 1.5em;\n  width: 1.5em;\n  min-width: 1.5em;\n  border-radius: 0.65em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3em;\n}\n.action[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.table-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  width: 8em;\n  min-width: 8em;\n}\n.state[_ngcontent-%COMP%] {\n  height: 1.5em;\n  width: 1.5em;\n  margin: 0.25em;\n  background-color: #d32f2f;\n  border-radius: 0.8em;\n  transition: margin 250ms, height 250ms, width 250ms, background-color 300ms;\n}\n.state.active[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  height: 0.75em;\n  width: 0.75em;\n  margin: 0.625em;\n}\n.select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 0.5em 0.25em;\n}\n.duo[_ngcontent-%COMP%] {\n  width: 7em;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9kb21haW5zL2RvbWFpbi1hdXRoZW50aWNhdGlvbi9kb21haW4tYXV0aGVudGljYXRpb24uc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBcUNBOztjQUFBO0FBWUE7O2VBQUE7QUFPQTs7ZUFBQTtBQWdCQTs7c0JBQUE7QUN0RUE7RUFDSSxZQUFBO0FBYUo7QUFWQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBYUo7QUFWQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFhSjtBQVpJO0VBQ0ksb0NBQUE7QUFjUjtBQVRJO0VBQ0ksVUFBQTtFQUNBLGNBQUE7QUFZUjtBQVJBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLDJFQUFBO0FBV0o7QUFWSTtFQUNJLHlCRG5DRTtFQ29DRixjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFZUjtBQVJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFXSjtBQVJBO0VBQ0kscUJBQUE7QUFXSjtBQVJBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBV0oiLCJmaWxlIjoic3JjL2FwcC9kb21haW5zL2RvbWFpbi1hdXRoZW50aWNhdGlvbi9kb21haW4tYXV0aGVudGljYXRpb24uc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNGNhZjUwO1xuJHN1Y2Nlc3MtbGlnaHQ6ICM2NmJiNmE7XG4kc3VjY2Vzcy1kYXJrOiAjMDA3OTZiO1xuXG4kcGVuZGluZzogI2ZmOGYwMDtcbiRwZW5kaW5nLWxpZ2h0OiAjZmZjMDQ2O1xuJHBlbmRpbmctZGFyazogI2M1NjAwMDtcblxuJGVycm9yOiAjZjQ0MzM2O1xuJGVycm9yLWxpZ2h0OiAjZmY2ZjYwO1xuJGVycm9yLWRhcms6ICNhYjAwMGQ7XG5cbiRjb2xvci1wcmltYXJ5OiAjQzkyMzY2O1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6ICNjZDU2OGE7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjYjYwMDVkO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjNUM2NEZGO1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogIzcyNzJlNztcbiRjb2xvci1zZWNvbmRhcnktZGFyazogIzU1NTdkMTtcblxuJGNvbG9yLWRldmVsb3A6ICNmMGYwZjA7XG4kY29sb3ItZGV2ZWxvcC1saWdodDogI2ZmZjtcbiRjb2xvci1kZXZlbG9wLWRhcms6ICNlMGUwZTA7XG5cbiRiYWNrZ3JvdW5kOiAjMjYzMjM4O1xuJGJhY2tncm91bmQtbGlnaHQ6ICM0NTVhNjQ7XG4kYmFja2dyb3VuZC1kYXJrOiAjMjAyNjMyO1xuXG4kaGVhZGVyLWNvbG9yOiAjMEEwRDJFO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiUm9ib3RvXCIsIFwiVmVyZGFuYVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJZb3VuZ1wiLCAkZm9udDtcbiRtb25vLWZvbnQ6IFwiRmlyYSBDb2RlXCIsIG1vbm9zcGFjZTtcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgU2l6aW5nICAgfHxcblxcKj09PT09PT09PT09PSovXG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG5cblxuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgTWl4aW5zICAgfHxcblxcKj09PT09PT09PT09PSovXG5cbkBtaXhpbiBoaWRlLXRleHQtb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGJveC1zaGFkb3coJGRlcHRoOiAxLCAkc3ByZWFkOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAoMXB4ICogJHNwcmVhZCkgKDNweCAqICRzcHJlYWQpIDAgcmdiYSgjMDAwLCAuMiAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMXB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIDAgcmdiYSgjMDAwLCAuMTQgKiAkZGVwdGgpLFxuICAgICAgICAgICAgICAgIDAgKDJweCAqICRzcHJlYWQpICgxcHggKiAkc3ByZWFkKSAtKDFweCAqICRzcHJlYWQpIHJnYmEoIzAwMCwgLjEyICogJGRlcHRoKTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuLm9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBtYXgtd2lkdGg6IDVlbTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5hY3Rpb24ge1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIG1pbi13aWR0aDogMS41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjY1ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzAwMCwgLjEpO1xuICAgIH1cbn1cblxuLnRhYmxlLXJvdyB7XG4gICAgLm5hbWUge1xuICAgICAgICB3aWR0aDogOGVtO1xuICAgICAgICBtaW4td2lkdGg6IDhlbTtcbiAgICB9XG59XG5cbi5zdGF0ZSB7XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICB3aWR0aDogMS41ZW07XG4gICAgbWFyZ2luOiAuMjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyZjJmO1xuICAgIGJvcmRlci1yYWRpdXM6IC44ZW07XG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDI1MG1zLCBoZWlnaHQgMjUwbXMsIHdpZHRoIDI1MG1zLCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xuICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHN1Y2Nlc3M7XG4gICAgICAgIGhlaWdodDogLjc1ZW07XG4gICAgICAgIHdpZHRoOiAuNzVlbTtcbiAgICAgICAgbWFyZ2luOiAuNjI1ZW07XG4gICAgfVxufVxuXG4uc2VsZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbnNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IC41ZW0gLjI1ZW07XG59XG5cbi5kdW8ge1xuICAgIHdpZHRoOiA3ZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomainAuthenticationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'domain-authentication',
                templateUrl: './domain-authentication.template.html',
                styleUrls: ['./domain-authentication.styles.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: src_app_common_item_service__WEBPACK_IMPORTED_MODULE_8__["ActiveItemService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/domains/domain-users/domain-users.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/domains/domain-users/domain-users.component.ts ***!
  \****************************************************************/
/*! exports provided: DomainUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainUsersComponent", function() { return DomainUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/esm/index.js");
/* harmony import */ var src_app_common_base_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/base.class */ "./src/app/common/base.class.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_common_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/item.service */ "./src/app/common/item.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_userTableName$$SRC_APP_DOMAINS_DOMAIN_USERS_DOMAIN_USERS_COMPONENT_TS__1 = goog.getMsg("Name");
    I18N_0 = MSG_EXTERNAL_userTableName$$SRC_APP_DOMAINS_DOMAIN_USERS_DOMAIN_USERS_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:@@userTableName␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_userTableEmail$$SRC_APP_DOMAINS_DOMAIN_USERS_DOMAIN_USERS_COMPONENT_TS__3 = goog.getMsg("Email");
    I18N_2 = MSG_EXTERNAL_userTableEmail$$SRC_APP_DOMAINS_DOMAIN_USERS_DOMAIN_USERS_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:@@userTableEmail␟244aae9346da82b0922506c2d2581373a15641cc␟4768749765465246664:Email`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_userTableRole$$SRC_APP_DOMAINS_DOMAIN_USERS_DOMAIN_USERS_COMPONENT_TS__5 = goog.getMsg("Role");
    I18N_4 = MSG_EXTERNAL_userTableRole$$SRC_APP_DOMAINS_DOMAIN_USERS_DOMAIN_USERS_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:@@userTableRole␟c36a66f2107e8da5371ebc9d15c2008dff567f46␟4145496584631696119:Role`;
}
function DomainUsersComponent_div_2_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", item_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.role);
} }
function DomainUsersComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DomainUsersComponent_div_2_tr_10_Template, 7, 4, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.model.list);
} }
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_userTableEmpty$$SRC_APP_DOMAINS_DOMAIN_USERS_DOMAIN_USERS_COMPONENT_TS__7 = goog.getMsg("No users found");
    I18N_6 = MSG_EXTERNAL_userTableEmpty$$SRC_APP_DOMAINS_DOMAIN_USERS_DOMAIN_USERS_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:@@userTableEmpty␟d4379e5174410d35da7928e24d0f49a45d74fcdb␟6279406018740594152:No users found`;
}
function DomainUsersComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DomainUsersComponent extends src_app_common_base_class__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(_service) {
        super();
        this._service = _service;
        this.model = {};
    }
    get item() {
        return this._service.active_item;
    }
    ngOnInit() {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadUsers();
        }));
    }
    loadUsers(offset = 0) {
        if (!this.item) {
            return;
        }
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["queryUsers"])({ authority_id: this.item.id, offset }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp.data)).subscribe((list) => {
            if (!offset) {
                this.model.list = [];
            }
            for (const item of (list || [])) {
                let found = false;
                for (const i of this.model.list) {
                    if (i.id === item.id) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    this.model.list.push(item);
                }
            }
        }, () => null);
    }
}
DomainUsersComponent.ɵfac = function DomainUsersComponent_Factory(t) { return new (t || DomainUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_item_service__WEBPACK_IMPORTED_MODULE_4__["ActiveItemService"])); };
DomainUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DomainUsersComponent, selectors: [["domain-users"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 2, consts: [[1, "container"], ["class", "list", 4, "ngIf"], ["class", "info-block", 4, "ngIf"], [1, "list"], [1, "name"], [1, "flex"], [1, "role"], [4, "ngFor", "ngForOf"], [1, "name", 3, "matTooltip"], [1, "info-block"], [1, "text"]], template: function DomainUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DomainUsersComponent_div_2_Template, 11, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DomainUsersComponent_div_3_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model.list && ctx.model.list.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.model.list || ctx.model.list.length <= 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 1.2em;\n  max-width: 5em;\n  margin: 0;\n}\n.action[_ngcontent-%COMP%] {\n  height: 1.5em;\n  width: 1.5em;\n  min-width: 1.5em;\n  border-radius: 0.65em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3em;\n}\n.action[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.table-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  width: 12em;\n  min-width: 12em;\n}\n.table-row[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  width: 8em;\n  min-width: 8em;\n}\n.state[_ngcontent-%COMP%] {\n  height: 1.5em;\n  width: 1.5em;\n  margin: 0.25em;\n  background-color: #d32f2f;\n  border-radius: 0.8em;\n  transition: margin 250ms, height 250ms, width 250ms, background-color 300ms;\n}\n.state.active[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  height: 0.75em;\n  width: 0.75em;\n  margin: 0.625em;\n}\n.select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 0.5em 0.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9kb21haW5zL2RvbWFpbi11c2Vycy9kb21haW4tdXNlcnMuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBcUNBOztjQUFBO0FBWUE7O2VBQUE7QUFPQTs7ZUFBQTtBQWdCQTs7c0JBQUE7QUN0RUE7RUFDSSxZQUFBO0FBYUo7QUFWQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBYUo7QUFWQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFhSjtBQVpJO0VBQ0ksb0NBQUE7QUFjUjtBQVRJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFZUjtBQVZJO0VBQ0ksVUFBQTtFQUNBLGNBQUE7QUFZUjtBQVJBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLDJFQUFBO0FBV0o7QUFWSTtFQUNJLHlCRHZDRTtFQ3dDRixjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFZUjtBQVJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFXSjtBQVJBO0VBQ0kscUJBQUE7QUFXSiIsImZpbGUiOiJzcmMvYXBwL2RvbWFpbnMvZG9tYWluLXVzZXJzL2RvbWFpbi11c2Vycy5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0Y2FmNTA7XG4kc3VjY2Vzcy1saWdodDogIzY2YmI2YTtcbiRzdWNjZXNzLWRhcms6ICMwMDc5NmI7XG5cbiRwZW5kaW5nOiAjZmY4ZjAwO1xuJHBlbmRpbmctbGlnaHQ6ICNmZmMwNDY7XG4kcGVuZGluZy1kYXJrOiAjYzU2MDAwO1xuXG4kZXJyb3I6ICNmNDQzMzY7XG4kZXJyb3ItbGlnaHQ6ICNmZjZmNjA7XG4kZXJyb3ItZGFyazogI2FiMDAwZDtcblxuJGNvbG9yLXByaW1hcnk6ICNDOTIzNjY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogI2NkNTY4YTtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICNiNjAwNWQ7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM1QzY0RkY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiAjNzI3MmU3O1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiAjNTU1N2QxO1xuXG4kY29sb3ItZGV2ZWxvcDogI2YwZjBmMDtcbiRjb2xvci1kZXZlbG9wLWxpZ2h0OiAjZmZmO1xuJGNvbG9yLWRldmVsb3AtZGFyazogI2UwZTBlMDtcblxuJGJhY2tncm91bmQ6ICMyNjMyMzg7XG4kYmFja2dyb3VuZC1saWdodDogIzQ1NWE2NDtcbiRiYWNrZ3JvdW5kLWRhcms6ICMyMDI2MzI7XG5cbiRoZWFkZXItY29sb3I6ICMwQTBEMkU7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJSb2JvdG9cIiwgXCJWZXJkYW5hXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIllvdW5nXCIsICRmb250O1xuJG1vbm8tZm9udDogXCJGaXJhIENvZGVcIiwgbW9ub3NwYWNlO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBTaXppbmcgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcblxuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkZGVwdGg6IDEsICRzcHJlYWQ6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwICgxcHggKiAkc3ByZWFkKSAoM3B4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4yICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgxcHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4xNCAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMnB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIC0oMXB4ICogJHNwcmVhZCkgcmdiYSgjMDAwLCAuMTIgKiAkZGVwdGgpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAndmFyaWFibGVzJztcblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMWVtO1xufVxuXG4ub3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIG1heC13aWR0aDogNWVtO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmFjdGlvbiB7XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICB3aWR0aDogMS41ZW07XG4gICAgbWluLXdpZHRoOiAxLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAuNjVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAuMSk7XG4gICAgfVxufVxuXG4udGFibGUtcm93IHtcbiAgICAubmFtZSB7XG4gICAgICAgIHdpZHRoOiAxMmVtO1xuICAgICAgICBtaW4td2lkdGg6IDEyZW07XG4gICAgfVxuICAgIC5yb2xlIHtcbiAgICAgICAgd2lkdGg6IDhlbTtcbiAgICAgICAgbWluLXdpZHRoOiA4ZW07XG4gICAgfVxufVxuXG4uc3RhdGUge1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIG1hcmdpbjogLjI1ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzMmYyZjtcbiAgICBib3JkZXItcmFkaXVzOiAuOGVtO1xuICAgIHRyYW5zaXRpb246IG1hcmdpbiAyNTBtcywgaGVpZ2h0IDI1MG1zLCB3aWR0aCAyNTBtcywgYmFja2dyb3VuZC1jb2xvciAzMDBtcztcbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzdWNjZXNzO1xuICAgICAgICBoZWlnaHQ6IC43NWVtO1xuICAgICAgICB3aWR0aDogLjc1ZW07XG4gICAgICAgIG1hcmdpbjogLjYyNWVtO1xuICAgIH1cbn1cblxuLnNlbGVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAuNWVtIC4yNWVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomainUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'domain-users',
                templateUrl: './domain-users.template.html',
                styleUrls: ['./domain-users.styles.scss']
            }]
    }], function () { return [{ type: src_app_common_item_service__WEBPACK_IMPORTED_MODULE_4__["ActiveItemService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/domains/domains.component.ts":
/*!**********************************************!*\
  !*** ./src/app/domains/domains.component.ts ***!
  \**********************************************/
/*! exports provided: DomainsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainsComponent", function() { return DomainsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/esm/index.js");
/* harmony import */ var _common_base_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/base.class */ "./src/app/common/base.class.ts");
/* harmony import */ var _common_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/item.service */ "./src/app/common/item.service.ts");
/* harmony import */ var _ui_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/sidebar/sidebar.component */ "./src/app/ui/sidebar/sidebar.component.ts");
/* harmony import */ var _ui_item_display_item_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/item-display/item-display.component */ "./src/app/ui/item-display/item-display.component.ts");








const _c0 = function () { return { class: "backoffice-info-with-circle" }; };
const _c1 = function (a2) { return { id: "about", name: "About", icon: a2 }; };
const _c2 = function () { return { class: "backoffice-publish" }; };
const _c3 = function (a2, a3) { return { id: "applications", name: "Applications", count: a2, icon: a3 }; };
const _c4 = function () { return { class: "backoffice-lock-open" }; };
const _c5 = function (a2, a3) { return { id: "authentication", name: "Authentication", count: a2, icon: a3 }; };
const _c6 = function () { return { class: "backoffice-users" }; };
const _c7 = function (a2, a3) { return { id: "users", name: "Users", count: a2, icon: a3 }; };
const _c8 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
class DomainsComponent extends _common_base_class__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_service) {
        super();
        this._service = _service;
        this.name = 'domains';
        this.show_options = this._service.show_options;
    }
    ngOnInit() {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadValues(item);
        }));
    }
    loadValues(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!item)
                return;
            let query = { offset: 0, limit: 1, owner: item.id };
            // Get application count
            this.applications = (yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["queryApplications"])(query).toPromise()).total;
            query = { offset: 0, limit: 1, authority_id: item.id };
            // Get auth source count
            // this._service.AuthSources.query(query).then(
            //     () => (this.auth_sources = this._service.AuthSources.last_total)
            // );
            // Get users count
            this.user_count = (yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["queryUsers"])(query).toPromise()).total;
        });
    }
}
DomainsComponent.ɵfac = function DomainsComponent_Factory(t) { return new (t || DomainsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_item_service__WEBPACK_IMPORTED_MODULE_4__["ActiveItemService"])); };
DomainsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DomainsComponent, selectors: [["app-domains"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 23, consts: [[1, "container"], [1, "sidebar"], ["heading", "Domains", "name", "domains"], ["name", "domain", "route", "domains", 3, "tabs"]], template: function DomainsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "item-display", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.show_options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabs", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](18, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c3, ctx.applications || 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c5, ctx.auth_sources || 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](15, _c7, ctx.user_count || 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c6))));
    } }, directives: [_ui_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _ui_item_display_item_display_component__WEBPACK_IMPORTED_MODULE_6__["ItemDisplayComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container.show[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n    height: 0%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container.show[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n    height: 0%;\n  }\n}\n.sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 20em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .sidebar[_ngcontent-%COMP%] {\n    height: 3em;\n    min-height: 3em;\n    width: 100%;\n    transition: height 300ms;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .sidebar[_ngcontent-%COMP%] {\n    height: 3em;\n    min-height: 3em;\n    width: 100%;\n    transition: height 300ms;\n  }\n}\nmain[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n  flex: 1;\n  background-color: #f0f0f0;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  main[_ngcontent-%COMP%] {\n    transition: height 300ms;\n    width: 100%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  main[_ngcontent-%COMP%] {\n    transition: height 300ms;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9kb21haW5zL2RvbWFpbnMuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBcUNBOztjQUFBO0FBWUE7O2VBQUE7QUFPQTs7ZUFBQTtBQWdCQTs7c0JBQUE7QUN0RUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWFKO0FEbUVRO0VDcEZSO0lBTVEsc0JBQUE7RUFlTjtBQUNGO0FEaUVRO0VDdkZSO0lBTVEsc0JBQUE7RUFvQk47QUFDRjtBRHlEUTtFQzFFQTtJQUVRLFlBQUE7RUFtQmQ7QUFDRjtBRHVEUTtFQzdFQTtJQUVRLFlBQUE7RUF3QmQ7QUFDRjtBRCtDUTtFQ3JFQTtJQUVRLFVBQUE7RUF3QmQ7QUFDRjtBRDZDUTtFQ3hFQTtJQUVRLFVBQUE7RUE2QmQ7QUFDRjtBQXhCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBMkJKO0FEZ0NRO0VDN0RSO0lBSVEsV0FBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0Esd0JBQUE7RUE2Qk47QUFDRjtBRDJCUTtFQ2hFUjtJQUlRLFdBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLHdCQUFBO0VBcUNOO0FBQ0Y7QUFsQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtBQXFDSjtBRFFRO0VDbERSO0lBT1Esd0JBQUE7SUFDQSxXQUFBO0VBdUNOO0FBQ0Y7QURLUTtFQ3JEUjtJQU9RLHdCQUFBO0lBQ0EsV0FBQTtFQTZDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZG9tYWlucy9kb21haW5zLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzRjYWY1MDtcbiRzdWNjZXNzLWxpZ2h0OiAjNjZiYjZhO1xuJHN1Y2Nlc3MtZGFyazogIzAwNzk2YjtcblxuJHBlbmRpbmc6ICNmZjhmMDA7XG4kcGVuZGluZy1saWdodDogI2ZmYzA0NjtcbiRwZW5kaW5nLWRhcms6ICNjNTYwMDA7XG5cbiRlcnJvcjogI2Y0NDMzNjtcbiRlcnJvci1saWdodDogI2ZmNmY2MDtcbiRlcnJvci1kYXJrOiAjYWIwMDBkO1xuXG4kY29sb3ItcHJpbWFyeTogI0M5MjM2NjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiAjY2Q1NjhhO1xuJGNvbG9yLXByaW1hcnktZGFyazogI2I2MDA1ZDtcblxuJGNvbG9yLXNlY29uZGFyeTogIzVDNjRGRjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6ICM3MjcyZTc7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6ICM1NTU3ZDE7XG5cbiRjb2xvci1kZXZlbG9wOiAjZjBmMGYwO1xuJGNvbG9yLWRldmVsb3AtbGlnaHQ6ICNmZmY7XG4kY29sb3ItZGV2ZWxvcC1kYXJrOiAjZTBlMGUwO1xuXG4kYmFja2dyb3VuZDogIzI2MzIzODtcbiRiYWNrZ3JvdW5kLWxpZ2h0OiAjNDU1YTY0O1xuJGJhY2tncm91bmQtZGFyazogIzIwMjYzMjtcblxuJGhlYWRlci1jb2xvcjogIzBBMEQyRTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlJvYm90b1wiLCBcIlZlcmRhbmFcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiWW91bmdcIiwgJGZvbnQ7XG4kbW9uby1mb250OiBcIkZpcmEgQ29kZVwiLCBtb25vc3BhY2U7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09KlxcXG58fCAgIFNpemluZyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWhlaWdodDogNGVtO1xuXG5cbi8qPT09PT09PT09PT09KlxcXG58fCAgIE1peGlucyAgIHx8XG5cXCo9PT09PT09PT09PT0qL1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRkZXB0aDogMSwgJHNwcmVhZDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgKDFweCAqICRzcHJlYWQpICgzcHggKiAkc3ByZWFkKSAwIHJnYmEoIzAwMCwgLjIgKiAkZGVwdGgpLFxuICAgICAgICAgICAgICAgIDAgKDFweCAqICRzcHJlYWQpICgxcHggKiAkc3ByZWFkKSAwIHJnYmEoIzAwMCwgLjE0ICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgycHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgLSgxcHggKiAkc3ByZWFkKSByZ2JhKCMwMDAsIC4xMiAqICRkZXB0aCk7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgJi5zaG93IHtcbiAgICAgICAgLnNpZGViYXIge1xuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zaWRlYmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDIwZW07XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICAgIG1pbi1oZWlnaHQ6IDNlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcztcbiAgICB9XG59XG5cbm1haW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmbGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DomainsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-domains',
                templateUrl: './domains.template.html',
                styleUrls: ['./domains.styles.scss'],
            }]
    }], function () { return [{ type: _common_item_service__WEBPACK_IMPORTED_MODULE_4__["ActiveItemService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/domains/domains.module.ts":
/*!*******************************************!*\
  !*** ./src/app/domains/domains.module.ts ***!
  \*******************************************/
/*! exports provided: AppDomainsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDomainsModule", function() { return AppDomainsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _domains_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domains.routes */ "./src/app/domains/domains.routes.ts");
/* harmony import */ var _domains_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domains.component */ "./src/app/domains/domains.component.ts");
/* harmony import */ var _domain_applications_domain_applications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domain-applications/domain-applications.component */ "./src/app/domains/domain-applications/domain-applications.component.ts");
/* harmony import */ var _domain_authentication_domain_authentication_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domain-authentication/domain-authentication.component */ "./src/app/domains/domain-authentication/domain-authentication.component.ts");
/* harmony import */ var _domain_users_domain_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./domain-users/domain-users.component */ "./src/app/domains/domain-users/domain-users.component.ts");
/* harmony import */ var src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _domain_about_domain_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./domain-about/domain-about.component */ "./src/app/domains/domain-about/domain-about.component.ts");













class AppDomainsModule {
}
AppDomainsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppDomainsModule });
AppDomainsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppDomainsModule_Factory(t) { return new (t || AppDomainsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_domains_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]),
            src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_9__["SharedContentModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppDomainsModule, { declarations: [_domains_component__WEBPACK_IMPORTED_MODULE_5__["DomainsComponent"],
        _domain_applications_domain_applications_component__WEBPACK_IMPORTED_MODULE_6__["DomainApplicationsComponent"],
        _domain_authentication_domain_authentication_component__WEBPACK_IMPORTED_MODULE_7__["DomainAuthenticationComponent"],
        _domain_users_domain_users_component__WEBPACK_IMPORTED_MODULE_8__["DomainUsersComponent"],
        _domain_about_domain_about_component__WEBPACK_IMPORTED_MODULE_10__["DomainAboutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_9__["SharedContentModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppDomainsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _domains_component__WEBPACK_IMPORTED_MODULE_5__["DomainsComponent"],
                    _domain_applications_domain_applications_component__WEBPACK_IMPORTED_MODULE_6__["DomainApplicationsComponent"],
                    _domain_authentication_domain_authentication_component__WEBPACK_IMPORTED_MODULE_7__["DomainAuthenticationComponent"],
                    _domain_users_domain_users_component__WEBPACK_IMPORTED_MODULE_8__["DomainUsersComponent"],
                    _domain_about_domain_about_component__WEBPACK_IMPORTED_MODULE_10__["DomainAboutComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_domains_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]),
                    src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_9__["SharedContentModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/domains/domains.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/domains/domains.routes.ts ***!
  \*******************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _domains_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domains.component */ "./src/app/domains/domains.component.ts");
/* harmony import */ var _domain_applications_domain_applications_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain-applications/domain-applications.component */ "./src/app/domains/domain-applications/domain-applications.component.ts");
/* harmony import */ var _domain_authentication_domain_authentication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domain-authentication/domain-authentication.component */ "./src/app/domains/domain-authentication/domain-authentication.component.ts");
/* harmony import */ var _domain_users_domain_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domain-users/domain-users.component */ "./src/app/domains/domain-users/domain-users.component.ts");
/* harmony import */ var _domain_about_domain_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domain-about/domain-about.component */ "./src/app/domains/domain-about/domain-about.component.ts");





const ROUTES = [
    {
        path: ':id',
        component: _domains_component__WEBPACK_IMPORTED_MODULE_0__["DomainsComponent"],
        children: [
            { path: 'about', component: _domain_about_domain_about_component__WEBPACK_IMPORTED_MODULE_4__["DomainAboutComponent"] },
            { path: 'applications', component: _domain_applications_domain_applications_component__WEBPACK_IMPORTED_MODULE_1__["DomainApplicationsComponent"] },
            { path: 'authentication', component: _domain_authentication_domain_authentication_component__WEBPACK_IMPORTED_MODULE_2__["DomainAuthenticationComponent"] },
            { path: 'users', component: _domain_users_domain_users_component__WEBPACK_IMPORTED_MODULE_3__["DomainUsersComponent"] },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];


/***/ })

}]);
//# sourceMappingURL=domains-domains-module-es2015.js.map
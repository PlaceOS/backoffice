(function () {
  function _templateObject() {
    var data = _taggedTemplateLiteral([":@@metricsHeader\u241F447ffd4cbfd3d8c3ca8dd216c0a82ecadc24a7de\u241F4196232656388343089:Metrics"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["metrics-metrics-module"], {
    /***/
    "5aI0":
    /*!**********************************************!*\
      !*** ./src/app/metrics/metrics.component.ts ***!
      \**********************************************/

    /*! exports provided: MetricsComponent */

    /***/
    function aI0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MetricsComponent", function () {
        return MetricsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @placeos/ts-client */
      "K2Fw");
      /* harmony import */


      var src_app_common_base_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/common/base.class */
      "fnpZ");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! dayjs */
      "Wgwc");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _common_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/settings.service */
      "q6Am");
      /* harmony import */


      var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @acaprojects/ngx-pipes */
      "q/DJ");

      var MetricsComponent = /*#__PURE__*/function (_src_app_common_base_) {
        _inherits(MetricsComponent, _src_app_common_base_);

        var _super = _createSuper(MetricsComponent);

        function MetricsComponent(_settings) {
          var _this;

          _classCallCheck(this, MetricsComponent);

          _this = _super.call(this);
          _this._settings = _settings;
          return _this;
        }
        /** URL for the metrics interface */


        _createClass(MetricsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.updateTime();
            this.interval('time', function () {
              return _this2.updateTime();
            }, 1000);
            this._settings.title = 'Metrics';
          }
        }, {
          key: "updateTime",
          value: function updateTime() {
            var now = dayjs__WEBPACK_IMPORTED_MODULE_3__();
            this.time = now.format('hh:mm A');
            this.date = now.format('ddd, MMM D');
            this.hour_angle = (now.hour() % 12 + now.minute() / 60) / 12 * 360;
            this.minute_angle = (now.minute() + now.second() / 60) / 60 * 360;
            this.second_angle = now.second() / 60 * 360;
          }
        }, {
          key: "metrics_url",
          get: function get() {
            var api_authority = Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["authority"])();
            return api_authority ? api_authority.metrics : '';
          }
        }]);

        return MetricsComponent;
      }(src_app_common_base_class__WEBPACK_IMPORTED_MODULE_2__["BaseClass"]);

      MetricsComponent.ɵfac = function MetricsComponent_Factory(t) {
        return new (t || MetricsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]));
      };

      MetricsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MetricsComponent,
        selectors: [["app-metrics"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 18,
        vars: 14,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_metricsHeader$$SRC_APP_METRICS_METRICS_COMPONENT_TS_1 = goog.getMsg("Metrics");
            i18n_0 = MSG_EXTERNAL_metricsHeader$$SRC_APP_METRICS_METRICS_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject());
          }

          return [[1, "container"], [1, "header"], [1, "heading"], i18n_0, [1, "time-display"], [1, "clock"], [1, "hand", "hour"], [1, "hand", "minute"], [1, "hand", "second"], [1, "center"], [1, "display"], [1, "time"], [1, "day"], [1, "body"], [3, "src"]];
        },
        template: function MetricsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "iframe", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "safe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fullscreen", ctx.fullscreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", "translateX(-50%) rotate(" + ctx.hour_angle + "deg)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", "translateX(-50%) rotate(" + ctx.minute_angle + "deg)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", "translateX(-50%) rotate(" + ctx.second_angle + "deg)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.time);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.date);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 11, ctx.metrics_url, "resource"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
          }
        },
        pipes: [_acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_5__["ɵa"]],
        styles: [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.container.fullscreen[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 999;\n  top: -3.5em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container.fullscreen[_ngcontent-%COMP%] {\n    top: -3em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container.fullscreen[_ngcontent-%COMP%] {\n    top: -3em;\n  }\n}\n.container.fullscreen[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%], .container.fullscreen[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: none;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 3.5em;\n  height: 3.5em;\n  background-color: #00796b;\n  width: 100%;\n  color: #fff;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 4px 2px -2px rgba(0, 0, 0, 0.12);\n  z-index: 100;\n}\n.header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\n.heading[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: 400;\n  padding: 0 0.5em;\n  flex: 1;\n  width: 50%;\n}\n.body[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  background-color: #455a64;\n  flex: 1;\n  overflow: hidden;\n  z-index: 99;\n}\n@media only screen and (orientation: portrait) and (max-width: 800px) {\n  .body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 1048px) {\n  .body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.no-item[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.54);\n}\n.time-display[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 0.5em;\n}\n.time-display[_ngcontent-%COMP%]   .display[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\n.system[_ngcontent-%COMP%], .device[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.5em;\n}\n.device[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  background-color: rgba(244, 67, 54, 0.87);\n  border-bottom: 1px solid #455a64;\n}\n.device[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.device.connected[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.87);\n}\n.device[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 0 0.25em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.device[_ngcontent-%COMP%]   .module-class[_ngcontent-%COMP%], .device[_ngcontent-%COMP%]   .created[_ngcontent-%COMP%] {\n  flex: 2;\n}\n.device[_ngcontent-%COMP%]   .ip[_ngcontent-%COMP%], .device[_ngcontent-%COMP%]   .state[_ngcontent-%COMP%] {\n  flex: 3;\n}\n.device[_ngcontent-%COMP%]   .ip[_ngcontent-%COMP%] {\n  font-family: \"Fira Code\", monospace;\n}\n.device[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  flex: 4;\n}\n.count[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  top: 0;\n  left: 0;\n  right: 26.666666666em;\n  height: 2em;\n  font-size: 0.75em;\n  padding: 0 0.5em;\n  background-color: #2c393f;\n  color: #fff;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 4px 2px -2px rgba(0, 0, 0, 0.12);\n}\n@media only screen and (orientation: portrait) and (max-width: 800px) {\n  .count[_ngcontent-%COMP%] {\n    right: 0;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 1048px) {\n  .count[_ngcontent-%COMP%] {\n    right: 0;\n  }\n}\n.issues[_ngcontent-%COMP%] {\n  overflow: auto;\n  padding: 2.5em 1em 1em;\n  color: #fff;\n  flex: 1;\n  height: 100%;\n  width: 16em;\n}\n@media only screen and (orientation: portrait) and (max-width: 800px) {\n  .issues[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 1048px) {\n  .issues[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.graphs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n  width: 20em;\n  border-left: 1px solid rgba(0, 0, 0, 0.54);\n}\n.graphs[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 18em;\n  padding: 0.5em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .graphs[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    min-width: 100vw;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .graphs[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    min-width: 100vw;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 800px) {\n  .graphs[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 16em;\n    border: none;\n    border-top: 1px solid rgba(0, 0, 0, 0.54);\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 1048px) {\n  .graphs[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 16em;\n    border: none;\n    border-top: 1px solid rgba(0, 0, 0, 0.54);\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .graphs[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n    flex-wrap: nowrap;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .graphs[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n    flex-wrap: nowrap;\n  }\n}\n.item[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.2);\n  margin-bottom: 1em;\n}\n.item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 4px 2px -2px rgba(0, 0, 0, 0.12);\n}\n.hover[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.options[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.5em;\n  width: 1.5em;\n  font-size: 1.2em;\n  cursor: pointer;\n  margin-left: 0.5em;\n}\n.options[_ngcontent-%COMP%]   dropdown[_ngcontent-%COMP%] {\n  padding: 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.action[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  border-radius: 100%;\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.action[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.87);\n}\n.clock[_ngcontent-%COMP%] {\n  position: relative;\n  height: 2.5em;\n  width: 2.5em;\n  min-width: 2.5em;\n  border: 2px solid #fff;\n  border-radius: 100%;\n}\n.clock[_ngcontent-%COMP%]   .hand[_ngcontent-%COMP%] {\n  position: absolute;\n  transform-origin: 50% 100%;\n  background-color: #fff;\n  left: 50%;\n  bottom: 50%;\n}\n.clock[_ngcontent-%COMP%]   .hand.hour[_ngcontent-%COMP%] {\n  height: 0.8em;\n  width: 4px;\n  border-radius: 2px;\n}\n.clock[_ngcontent-%COMP%]   .hand.minute[_ngcontent-%COMP%] {\n  height: 1em;\n  width: 2px;\n  border-radius: 1px;\n}\n.clock[_ngcontent-%COMP%]   .hand.second[_ngcontent-%COMP%] {\n  height: 1em;\n  width: 1px;\n}\n.clock[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  height: 6px;\n  width: 6px;\n  border-radius: 100%;\n  background-color: #fff;\n}\n.mat-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1em;\n}\n.mat-menu-item[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.mat-menu-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n  margin-left: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uL21ldHJpY3Muc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBcUNBOztjQUFBO0FBWUE7O2VBQUE7QUFPQTs7ZUFBQTtBQWdCQTs7c0JBQUE7QUN2RUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQWNGO0FBYkU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFlSjtBRDBEUTtFQzVFTjtJQUtJLFNBQUE7RUFpQko7QUFDRjtBRHdEUTtFQy9FTjtJQUtJLFNBQUE7RUFzQko7QUFDRjtBQXJCSTs7RUFFRSxhQUFBO0FBdUJOO0FBbEJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJEcEJhO0VDcUJiLFdBQUE7RUFDQSxXQUFBO0VBQ0EsK0dBQUE7RUFDQSxZQUFBO0FBcUJGO0FBcEJFO0VBQ0Usa0JBQUE7QUFzQko7QUFsQkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQXFCRjtBQWxCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCRHBCaUI7RUNxQmpCLE9BQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFxQkY7QUQ4RFE7RUMzRlI7SUFVSSxzQkFBQTtFQXVCRjtBQUNGO0FENERRO0VDOUZSO0lBVUksc0JBQUE7RUE0QkY7QUFDRjtBQXpCQTtFQUNFLGdDQUFBO0FBNEJGO0FBekJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUE0QkY7QUEzQkU7RUFDRSxrQkFBQTtBQTZCSjtBQXpCQTs7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBNEJGO0FBekJBO0VBQ0UsZ0JBQUE7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dHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0Y2FmNTA7XG4kc3VjY2Vzcy1saWdodDogIzY2YmI2YTtcbiRzdWNjZXNzLWRhcms6ICMwMDc5NmI7XG5cbiRwZW5kaW5nOiAjZmY4ZjAwO1xuJHBlbmRpbmctbGlnaHQ6ICNmZmMwNDY7XG4kcGVuZGluZy1kYXJrOiAjYzU2MDAwO1xuXG4kZXJyb3I6ICNmNDQzMzY7XG4kZXJyb3ItbGlnaHQ6ICNmZjZmNjA7XG4kZXJyb3ItZGFyazogI2FiMDAwZDtcblxuJGNvbG9yLXByaW1hcnk6ICNDOTIzNjY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogI2NkNTY4YTtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICNiNjAwNWQ7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM1QzY0RkY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiAjNzI3MmU3O1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiAjNTU1N2QxO1xuXG4kY29sb3ItZGV2ZWxvcDogI2YwZjBmMDtcbiRjb2xvci1kZXZlbG9wLWxpZ2h0OiAjZmZmO1xuJGNvbG9yLWRldmVsb3AtZGFyazogI2UwZTBlMDtcblxuJGJhY2tncm91bmQ6ICMyNjMyMzg7XG4kYmFja2dyb3VuZC1saWdodDogIzQ1NWE2NDtcbiRiYWNrZ3JvdW5kLWRhcms6ICMyMDI2MzI7XG5cbiRoZWFkZXItY29sb3I6ICMwQTBEMkU7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJSb2JvdG9cIiwgXCJWZXJkYW5hXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIllvdW5nXCIsICRmb250O1xuJG1vbm8tZm9udDogXCJGaXJhIENvZGVcIiwgbW9ub3NwYWNlO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBTaXppbmcgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcblxuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkZGVwdGg6IDEsICRzcHJlYWQ6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwICgxcHggKiAkc3ByZWFkKSAoM3B4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4yICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgxcHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4xNCAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMnB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIC0oMXB4ICogJHNwcmVhZCkgcmdiYSgjMDAwLCAuMTIgKiAkZGVwdGgpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgJi5mdWxsc2NyZWVuIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHRvcDogLTMuNWVtO1xuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICB0b3A6IC0zZW07XG4gICAgfVxuICAgIC50eXBlLFxuICAgICAgICAubWVudSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMy41ZW07XG4gIGhlaWdodDogMy41ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICRzdWNjZXNzLWRhcms7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgjMDAwLCAuMiksIDAgMnB4IDJweCAwIHJnYmEoIzAwMCwgLjE0KSwgMCA0cHggMnB4IC0ycHggcmdiYSgjMDAwLCAuMTIpO1xuICB6LWluZGV4OiAxMDA7XG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IC41ZW07XG4gIH1cbn1cblxuLmhlYWRpbmcge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAwIC41ZW07XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtbGlnaHQ7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDk5O1xuICBAaW5jbHVkZSByZXNwb25kLXRvKG5vdC1kZXNrdG9wKSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4ubm8taXRlbSB7XG4gIGNvbG9yOiByZ2JhKCNmZmYsIC41NCk7XG59XG5cbi50aW1lLWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgLjVlbTtcbiAgLmRpc3BsYXkge1xuICAgIG1hcmdpbi1sZWZ0OiAuNWVtO1xuICB9XG59XG5cbi5zeXN0ZW0sXG4uZGV2aWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogLjVlbTtcbn1cblxuLmRldmljZSB7XG4gIGZvbnQtc2l6ZTogLjhlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZXJyb3IsIC44Nyk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYmFja2dyb3VuZC1saWdodDtcbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgJi5jb25uZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHN1Y2Nlc3MsIC44Nyk7XG4gIH1cbiAgJj5kaXYge1xuICAgIHBhZGRpbmc6IDAgLjI1ZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIC5tb2R1bGUtY2xhc3MsXG4gICAgLmNyZWF0ZWQge1xuICAgIGZsZXg6IDI7XG4gIH1cbiAgLmlwLFxuICAgIC5zdGF0ZSB7XG4gICAgZmxleDogMztcbiAgfVxuICAuaXAge1xuICAgIGZvbnQtZmFtaWx5OiAkbW9uby1mb250O1xuICB9XG4gIC5uYW1lIHtcbiAgICBmbGV4OiA0O1xuICB9XG59XG5cbi5jb3VudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMjYuNjY2NjY2NjY2ZW07XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IC43NWVtO1xuICBwYWRkaW5nOiAwIC41ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzM5M2Y7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKCMwMDAsIC4yKSwgMCAycHggMnB4IDAgcmdiYSgjMDAwLCAuMTQpLCAwIDRweCAycHggLTJweCByZ2JhKCMwMDAsIC4xMik7XG4gIEBpbmNsdWRlIHJlc3BvbmQtdG8obm90LWRlc2t0b3ApIHtcbiAgICByaWdodDogMDtcbiAgfVxufVxuXG4uaXNzdWVzIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDIuNWVtIDFlbSAxZW07XG4gIGNvbG9yOiAjZmZmO1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxNmVtO1xuICBAaW5jbHVkZSByZXNwb25kLXRvKG5vdC1kZXNrdG9wKSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmdyYXBocyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjBlbTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKCMwMDAsIC41NCk7XG4gICY+ZGl2IHtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiAxOGVtO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICBtaW4td2lkdGg6IDEwMHZ3O1xuICAgIH1cbiAgfVxuICBAaW5jbHVkZSByZXNwb25kLXRvKG5vdC1kZXNrdG9wKSB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBoZWlnaHQ6IDE2ZW07XG5cbiAgICBib3JkZXI6IG5vbmU7XG5cbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgjMDAwLCAuNTQpO1xuICB9XG4gIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuXG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gIH1cbn1cblxuLml0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsIC4yKTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKCMwMDAsIC4yKSwgMCAycHggMnB4IDAgcmdiYSgjMDAwLCAuMTQpLCAwIDRweCAycHggLTJweCByZ2JhKCMwMDAsIC4xMilcbiAgfVxufVxuXG4uaG92ZXIge1xuICAmOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuXG4ub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICB3aWR0aDogMS41ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IC41ZW07XG4gIH1cbiAgZHJvcGRvd24ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6IHJnYmEoIzAwMCwgLjg3KTtcbiAgfVxufVxuXG4uYWN0aW9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgd2lkdGg6IDEuMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogcmdiYSgjMDAwLCAuODcpO1xuICB9XG59XG5cbi5jbG9jayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgd2lkdGg6IDIuNWVtO1xuICBtaW4td2lkdGg6IDIuNWVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAuaGFuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvdHRvbTogNTAlO1xuICAgICYuaG91ciB7XG4gICAgICBoZWlnaHQ6IC44ZW07XG4gICAgICB3aWR0aDogNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cbiAgICAmLm1pbnV0ZSB7XG4gICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgIHdpZHRoOiAycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgfVxuICAgICYuc2Vjb25kIHtcbiAgICAgIGhlaWdodDogMWVtO1xuICAgICAgd2lkdGg6IDFweDtcbiAgICB9XG4gIH1cbiAgLmNlbnRlciB7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgd2lkdGg6IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxZW07XG4gIGFwcC1pY29uIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG4gIC50ZXh0IHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAuNWVtO1xuICB9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetricsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-metrics',
            templateUrl: './metrics.template.html',
            styleUrls: ['./metrics.styles.scss']
          }]
        }], function () {
          return [{
            type: _common_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AmG4":
    /*!*******************************************!*\
      !*** ./src/app/metrics/metrics.module.ts ***!
      \*******************************************/

    /*! exports provided: AppMetricsModule */

    /***/
    function AmG4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppMetricsModule", function () {
        return AppMetricsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _metrics_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./metrics.routes */
      "tPrN");
      /* harmony import */


      var _metrics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./metrics.component */
      "5aI0");
      /* harmony import */


      var src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/ui/ui.module */
      "oRDy");

      var AppMetricsModule = function AppMetricsModule() {
        _classCallCheck(this, AppMetricsModule);
      };

      AppMetricsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppMetricsModule
      });
      AppMetricsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppMetricsModule_Factory(t) {
          return new (t || AppMetricsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_metrics_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]), src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedContentModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppMetricsModule, {
          declarations: [_metrics_component__WEBPACK_IMPORTED_MODULE_5__["MetricsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedContentModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMetricsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_metrics_component__WEBPACK_IMPORTED_MODULE_5__["MetricsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_metrics_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]), src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedContentModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "tPrN":
    /*!*******************************************!*\
      !*** ./src/app/metrics/metrics.routes.ts ***!
      \*******************************************/

    /*! exports provided: ROUTES */

    /***/
    function tPrN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });
      /* harmony import */


      var _metrics_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./metrics.component */
      "5aI0");

      var ROUTES = [{
        path: '',
        component: _metrics_component__WEBPACK_IMPORTED_MODULE_0__["MetricsComponent"],
        children: []
      }, {
        path: 'dashboard',
        component: _metrics_component__WEBPACK_IMPORTED_MODULE_0__["MetricsComponent"],
        children: []
      }, {
        path: 'dashboard/:period',
        component: _metrics_component__WEBPACK_IMPORTED_MODULE_0__["MetricsComponent"],
        children: []
      }, {
        path: ':period',
        component: _metrics_component__WEBPACK_IMPORTED_MODULE_0__["MetricsComponent"],
        children: []
      }, {
        path: '**',
        redirectTo: ''
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=metrics-metrics-module-es5.js.map
(function () {
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

  function _templateObject() {
    var data = _taggedTemplateLiteral([":@@metricsHeader\u241F447ffd4cbfd3d8c3ca8dd216c0a82ecadc24a7de\u241F4196232656388343089:Metrics"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["metrics-metrics-module"], {
    /***/
    "./src/app/metrics/metrics.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/metrics/metrics.component.ts ***!
      \**********************************************/

    /*! exports provided: MetricsComponent */

    /***/
    function srcAppMetricsMetricsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MetricsComponent", function () {
        return MetricsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @placeos/ts-client */
      "./node_modules/@placeos/ts-client/dist/esm/index.js");
      /* harmony import */


      var src_app_common_base_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/common/base.class */
      "./src/app/common/base.class.ts");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! dayjs */
      "./node_modules/dayjs/dayjs.min.js");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _common_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/settings.service */
      "./src/app/common/settings.service.ts");
      /* harmony import */


      var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @acaprojects/ngx-pipes */
      "./node_modules/@acaprojects/ngx-pipes/__ivy_ngcc__/fesm2015/acaprojects-ngx-pipes.js");

      var I18N_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        var MSG_EXTERNAL_metricsHeader$$SRC_APP_METRICS_METRICS_COMPONENT_TS_1 = goog.getMsg("Metrics");
        I18N_0 = MSG_EXTERNAL_metricsHeader$$SRC_APP_METRICS_METRICS_COMPONENT_TS_1;
      } else {
        I18N_0 = $localize(_templateObject());
      }

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
        consts: [[1, "container"], [1, "header"], [1, "heading"], [1, "time-display"], [1, "clock"], [1, "hand", "hour"], [1, "hand", "minute"], [1, "hand", "second"], [1, "center"], [1, "display"], [1, "time"], [1, "day"], [1, "body"], [3, "src"]],
        template: function MetricsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, I18N_0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "iframe", 13);

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
        styles: [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.container.fullscreen[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 999;\n  top: -3.5em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container.fullscreen[_ngcontent-%COMP%] {\n    top: -3em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container.fullscreen[_ngcontent-%COMP%] {\n    top: -3em;\n  }\n}\n.container.fullscreen[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%], .container.fullscreen[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: none;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 3.5em;\n  height: 3.5em;\n  background-color: #00796b;\n  width: 100%;\n  color: #fff;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 4px 2px -2px rgba(0, 0, 0, 0.12);\n  z-index: 100;\n}\n.header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\n.heading[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: 400;\n  padding: 0 0.5em;\n  flex: 1;\n  width: 50%;\n}\n.body[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  background-color: #455a64;\n  flex: 1;\n  overflow: hidden;\n  z-index: 99;\n}\n@media only screen and (orientation: portrait) and (max-width: 800px) {\n  .body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 1048px) {\n  .body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.no-item[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.54);\n}\n.time-display[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 0.5em;\n}\n.time-display[_ngcontent-%COMP%]   .display[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\n.system[_ngcontent-%COMP%], .device[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.5em;\n}\n.device[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  background-color: rgba(244, 67, 54, 0.87);\n  border-bottom: 1px solid #455a64;\n}\n.device[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.device.connected[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.87);\n}\n.device[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 0 0.25em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.device[_ngcontent-%COMP%]   .module-class[_ngcontent-%COMP%], .device[_ngcontent-%COMP%]   .created[_ngcontent-%COMP%] {\n  flex: 2;\n}\n.device[_ngcontent-%COMP%]   .ip[_ngcontent-%COMP%], .device[_ngcontent-%COMP%]   .state[_ngcontent-%COMP%] {\n  flex: 3;\n}\n.device[_ngcontent-%COMP%]   .ip[_ngcontent-%COMP%] {\n  font-family: \"Fira Code\", monospace;\n}\n.device[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  flex: 4;\n}\n.count[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  top: 0;\n  left: 0;\n  right: 26.666666666em;\n  height: 2em;\n  font-size: 0.75em;\n  padding: 0 0.5em;\n  background-color: #2c393f;\n  color: #fff;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 4px 2px -2px rgba(0, 0, 0, 0.12);\n}\n@media only screen and (orientation: portrait) and (max-width: 800px) {\n  .count[_ngcontent-%COMP%] {\n    right: 0;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 1048px) {\n  .count[_ngcontent-%COMP%] {\n    right: 0;\n  }\n}\n.issues[_ngcontent-%COMP%] {\n  overflow: auto;\n  padding: 2.5em 1em 1em;\n  color: #fff;\n  flex: 1;\n  height: 100%;\n  width: 16em;\n}\n@media only screen and (orientation: portrait) and (max-width: 800px) {\n  .issues[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 1048px) {\n  .issues[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.graphs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n  width: 20em;\n  border-left: 1px solid rgba(0, 0, 0, 0.54);\n}\n.graphs[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 18em;\n  padding: 0.5em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .graphs[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    min-width: 100vw;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .graphs[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    min-width: 100vw;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 800px) {\n  .graphs[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 16em;\n    border: none;\n    border-top: 1px solid rgba(0, 0, 0, 0.54);\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 1048px) {\n  .graphs[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 16em;\n    border: none;\n    border-top: 1px solid rgba(0, 0, 0, 0.54);\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .graphs[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n    flex-wrap: nowrap;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .graphs[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n    flex-wrap: nowrap;\n  }\n}\n.item[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.2);\n  margin-bottom: 1em;\n}\n.item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 4px 2px -2px rgba(0, 0, 0, 0.12);\n}\n.hover[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.options[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.5em;\n  width: 1.5em;\n  font-size: 1.2em;\n  cursor: pointer;\n  margin-left: 0.5em;\n}\n.options[_ngcontent-%COMP%]   dropdown[_ngcontent-%COMP%] {\n  padding: 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.action[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  border-radius: 100%;\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.action[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.87);\n}\n.clock[_ngcontent-%COMP%] {\n  position: relative;\n  height: 2.5em;\n  width: 2.5em;\n  min-width: 2.5em;\n  border: 2px solid #fff;\n  border-radius: 100%;\n}\n.clock[_ngcontent-%COMP%]   .hand[_ngcontent-%COMP%] {\n  position: absolute;\n  transform-origin: 50% 100%;\n  background-color: #fff;\n  left: 50%;\n  bottom: 50%;\n}\n.clock[_ngcontent-%COMP%]   .hand.hour[_ngcontent-%COMP%] {\n  height: 0.8em;\n  width: 4px;\n  border-radius: 2px;\n}\n.clock[_ngcontent-%COMP%]   .hand.minute[_ngcontent-%COMP%] {\n  height: 1em;\n  width: 2px;\n  border-radius: 1px;\n}\n.clock[_ngcontent-%COMP%]   .hand.second[_ngcontent-%COMP%] {\n  height: 1em;\n  width: 1px;\n}\n.clock[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  height: 6px;\n  width: 6px;\n  border-radius: 100%;\n  background-color: #fff;\n}\n.mat-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1em;\n}\n.mat-menu-item[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.mat-menu-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n  margin-left: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tZXRyaWNzL21ldHJpY3Muc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBcUNBOztjQUFBO0FBWUE7O2VBQUE7QUFPQTs7ZUFBQTtBQWdCQTs7c0JBQUE7QUN2RUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQWNKO0FBYkk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFlUjtBRDBEUTtFQzVFSjtJQUtRLFNBQUE7RUFpQlY7QUFDRjtBRHdEUTtFQy9FSjtJQUtRLFNBQUE7RUFzQlY7QUFDRjtBQXBCUTs7RUFFSSxhQUFBO0FBc0JaO0FBakJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJEckJXO0VDc0JYLFdBQUE7RUFDQSxXQUFBO0VBQ0EsK0dBQUE7RUFDQSxZQUFBO0FBb0JKO0FBbEJJO0VBQ0ksa0JBQUE7QUFvQlI7QUFoQkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQW1CSjtBQWhCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCRHRCZTtFQ3VCZixPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBbUJKO0FEOERRO0VDekZSO0lBV1Esc0JBQUE7RUFvQk47QUFDRjtBRDREUTtFQzVGUjtJQVdRLHNCQUFBO0VBeUJOO0FBQ0Y7QUF0QkE7RUFDSSxnQ0FBQTtBQXlCSjtBQXRCQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBeUJKO0FBdkJJO0VBQ0ksa0JBQUE7QUF5QlI7QUFyQkE7O0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQXdCSjtBQXJCQTtFQUNJLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQ0FBQTtBQXdCSjtBQXRCSTtFQUNJLFlBQUE7QUF3QlI7QUFyQkk7RUFDSSx5Q0FBQTtBQXVCUjtBQXBCSTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBc0JSO0FBbkJJOztFQUVJLE9BQUE7QUFxQlI7QUFsQkk7O0VBRUksT0FBQTtBQW9CUjtBQWpCSTtFQUNJLG1DRHhFSTtBQzJGWjtBQWhCSTtFQUNJLE9BQUE7QUFrQlI7QUFkQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsK0dBQUE7QUFpQko7QURkUTtFQ2ZSO0lBZVEsUUFBQTtFQWtCTjtBQUNGO0FEaEJRO0VDbEJSO0lBZVEsUUFBQTtFQXVCTjtBQUNGO0FBcEJBO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXVCSjtBRGpDUTtFQ0lSO0lBU1EsV0FBQTtFQXdCTjtBQUNGO0FEbkNRO0VDQ1I7SUFTUSxXQUFBO0VBNkJOO0FBQ0Y7QUExQkE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7QUE2Qko7QUEzQkk7RUFDSSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTZCUjtBRC9HUTtFQzRFSjtJQVNRLGdCQUFBO0VBOEJWO0FBQ0Y7QURqSFE7RUN5RUo7SUFTUSxnQkFBQTtFQW1DVjtBQUNGO0FEckVRO0VDaUJSO0lBcUJRLFdBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLHlDQUFBO0VBbUNOO0FBQ0Y7QUQxRVE7RUNjUjtJQXFCUSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSx5Q0FBQTtFQTJDTjtBQUNGO0FEeklRO0VDcUVSO0lBNEJRLGtCQUFBO0lBQ0EsaUJBQUE7RUE0Q047QUFDRjtBRDVJUTtFQ2tFUjtJQTRCUSxrQkFBQTtJQUNBLGlCQUFBO0VBa0ROO0FBQ0Y7QUEvQ0E7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0FBa0RKO0FBaERJO0VBQ0ksK0dBQUE7QUFrRFI7QUE3Q0k7RUFDSSwwQkFBQTtBQWdEUjtBQTVDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQStDSjtBQTdDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQStDUjtBQTVDSTtFQUNJLFVBQUE7RUFDQSwwQkFBQTtBQThDUjtBQTFDQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBNkNKO0FBM0NJO0VBQ0ksc0JBQUE7RUFDQSwwQkFBQTtBQTZDUjtBQXpDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUE0Q0o7QUExQ0k7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQTRDUjtBQTFDUTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUE0Q1o7QUF6Q1E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBMkNaO0FBeENRO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUEwQ1o7QUF0Q0k7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUF3Q1I7QUFwQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUF1Q0o7QUFyQ0k7RUFDSSxnQkFBQTtBQXVDUjtBQXBDSTtFQUNJLE9BQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFzQ1IiLCJmaWxlIjoic3JjL2FwcC9tZXRyaWNzL21ldHJpY3Muc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNGNhZjUwO1xuJHN1Y2Nlc3MtbGlnaHQ6ICM2NmJiNmE7XG4kc3VjY2Vzcy1kYXJrOiAjMDA3OTZiO1xuXG4kcGVuZGluZzogI2ZmOGYwMDtcbiRwZW5kaW5nLWxpZ2h0OiAjZmZjMDQ2O1xuJHBlbmRpbmctZGFyazogI2M1NjAwMDtcblxuJGVycm9yOiAjZjQ0MzM2O1xuJGVycm9yLWxpZ2h0OiAjZmY2ZjYwO1xuJGVycm9yLWRhcms6ICNhYjAwMGQ7XG5cbiRjb2xvci1wcmltYXJ5OiAjQzkyMzY2O1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6ICNjZDU2OGE7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjYjYwMDVkO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjNUM2NEZGO1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogIzcyNzJlNztcbiRjb2xvci1zZWNvbmRhcnktZGFyazogIzU1NTdkMTtcblxuJGNvbG9yLWRldmVsb3A6ICNmMGYwZjA7XG4kY29sb3ItZGV2ZWxvcC1saWdodDogI2ZmZjtcbiRjb2xvci1kZXZlbG9wLWRhcms6ICNlMGUwZTA7XG5cbiRiYWNrZ3JvdW5kOiAjMjYzMjM4O1xuJGJhY2tncm91bmQtbGlnaHQ6ICM0NTVhNjQ7XG4kYmFja2dyb3VuZC1kYXJrOiAjMjAyNjMyO1xuXG4kaGVhZGVyLWNvbG9yOiAjMEEwRDJFO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiUm9ib3RvXCIsIFwiVmVyZGFuYVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJZb3VuZ1wiLCAkZm9udDtcbiRtb25vLWZvbnQ6IFwiRmlyYSBDb2RlXCIsIG1vbm9zcGFjZTtcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgU2l6aW5nICAgfHxcblxcKj09PT09PT09PT09PSovXG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG5cblxuLyo9PT09PT09PT09PT0qXFxcbnx8ICAgTWl4aW5zICAgfHxcblxcKj09PT09PT09PT09PSovXG5cbkBtaXhpbiBoaWRlLXRleHQtb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGJveC1zaGFkb3coJGRlcHRoOiAxLCAkc3ByZWFkOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAoMXB4ICogJHNwcmVhZCkgKDNweCAqICRzcHJlYWQpIDAgcmdiYSgjMDAwLCAuMiAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMXB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIDAgcmdiYSgjMDAwLCAuMTQgKiAkZGVwdGgpLFxuICAgICAgICAgICAgICAgIDAgKDJweCAqICRzcHJlYWQpICgxcHggKiAkc3ByZWFkKSAtKDFweCAqICRzcHJlYWQpIHJnYmEoIzAwMCwgLjEyICogJGRlcHRoKTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4uY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICYuZnVsbHNjcmVlbiB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICB0b3A6IC0zLjVlbTtcbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgICAgIHRvcDogLTNlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50eXBlLFxuICAgICAgICAubWVudSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMy41ZW07XG4gICAgaGVpZ2h0OiAzLjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VjY2Vzcy1kYXJrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoIzAwMCwgLjIpLCAwIDJweCAycHggMCByZ2JhKCMwMDAsIC4xNCksIDAgNHB4IDJweCAtMnB4IHJnYmEoIzAwMCwgLjEyKTtcbiAgICB6LWluZGV4OiAxMDA7XG5cbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogLjVlbTtcbiAgICB9XG59XG5cbi5oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgcGFkZGluZzogMCAuNWVtO1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLmJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtbGlnaHQ7XG4gICAgZmxleDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDk5O1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhub3QtZGVza3RvcCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbn1cblxuLm5vLWl0ZW0ge1xuICAgIGNvbG9yOiByZ2JhKCNmZmYsIC41NCk7XG59XG5cbi50aW1lLWRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIC41ZW07XG5cbiAgICAuZGlzcGxheSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAuNWVtO1xuICAgIH1cbn1cblxuLnN5c3RlbSxcbi5kZXZpY2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAuNWVtO1xufVxuXG4uZGV2aWNlIHtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZXJyb3IsIC44Nyk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRiYWNrZ3JvdW5kLWxpZ2h0O1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuICAgICYuY29ubmVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3VjY2VzcywgLjg3KTtcbiAgICB9XG5cbiAgICAmPmRpdiB7XG4gICAgICAgIHBhZGRpbmc6IDAgLjI1ZW07XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cblxuICAgIC5tb2R1bGUtY2xhc3MsXG4gICAgLmNyZWF0ZWQge1xuICAgICAgICBmbGV4OiAyO1xuICAgIH1cblxuICAgIC5pcCxcbiAgICAuc3RhdGUge1xuICAgICAgICBmbGV4OiAzO1xuICAgIH1cblxuICAgIC5pcCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkbW9uby1mb250O1xuICAgIH1cblxuICAgIC5uYW1lIHtcbiAgICAgICAgZmxleDogNDtcbiAgICB9XG59XG5cbi5jb3VudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMjYuNjY2NjY2NjY2ZW07XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgZm9udC1zaXplOiAuNzVlbTtcbiAgICBwYWRkaW5nOiAwIC41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMzkzZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKCMwMDAsIC4yKSwgMCAycHggMnB4IDAgcmdiYSgjMDAwLCAuMTQpLCAwIDRweCAycHggLTJweCByZ2JhKCMwMDAsIC4xMik7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmlzc3VlcyB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZzogMi41ZW0gMWVtIDFlbTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTZlbTtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obm90LWRlc2t0b3ApIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uZ3JhcGhzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDIwZW07XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKCMwMDAsIC41NCk7XG5cbiAgICAmPmRpdiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHdpZHRoOiAxOGVtO1xuICAgICAgICBwYWRkaW5nOiAuNWVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDB2dztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obm90LWRlc2t0b3ApIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTZlbTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgjMDAwLCAuNTQpO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgfVxufVxuXG4uaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAuMik7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoIzAwMCwgLjIpLCAwIDJweCAycHggMCByZ2JhKCMwMDAsIC4xNCksIDAgNHB4IDJweCAtMnB4IHJnYmEoIzAwMCwgLjEyKVxuICAgIH1cbn1cblxuLmhvdmVyIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxufVxuXG4ub3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLm1lbnUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAuNWVtO1xuICAgIH1cblxuICAgIGRyb3Bkb3duIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgY29sb3I6IHJnYmEoIzAwMCwgLjg3KTtcbiAgICB9XG59XG5cbi5hY3Rpb24ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBoZWlnaHQ6IDEuMmVtO1xuICAgIHdpZHRoOiAxLjJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgY29sb3I6IHJnYmEoIzAwMCwgLjg3KTtcbiAgICB9XG59XG5cbi5jbG9jayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMi41ZW07XG4gICAgd2lkdGg6IDIuNWVtO1xuICAgIG1pbi13aWR0aDogMi41ZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4gICAgLmhhbmQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIGJvdHRvbTogNTAlO1xuXG4gICAgICAgICYuaG91ciB7XG4gICAgICAgICAgICBoZWlnaHQ6IC44ZW07XG4gICAgICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5taW51dGUge1xuICAgICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICB3aWR0aDogMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5zZWNvbmQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNlbnRlciB7XG4gICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICB3aWR0aDogNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbn1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDFlbTtcblxuICAgIGFwcC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLjVlbTtcbiAgICB9XG59XG4iXX0= */"]
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
    "./src/app/metrics/metrics.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/metrics/metrics.module.ts ***!
      \*******************************************/

    /*! exports provided: AppMetricsModule */

    /***/
    function srcAppMetricsMetricsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppMetricsModule", function () {
        return AppMetricsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _metrics_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./metrics.routes */
      "./src/app/metrics/metrics.routes.ts");
      /* harmony import */


      var _metrics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./metrics.component */
      "./src/app/metrics/metrics.component.ts");
      /* harmony import */


      var src_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/ui/ui.module */
      "./src/app/ui/ui.module.ts");

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
    "./src/app/metrics/metrics.routes.ts":
    /*!*******************************************!*\
      !*** ./src/app/metrics/metrics.routes.ts ***!
      \*******************************************/

    /*! exports provided: ROUTES */

    /***/
    function srcAppMetricsMetricsRoutesTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });
      /* harmony import */


      var _metrics_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./metrics.component */
      "./src/app/metrics/metrics.component.ts");

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
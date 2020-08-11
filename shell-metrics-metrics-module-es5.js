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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shell-metrics-metrics-module"], {
    /***/
    "./src/app/shell/metrics/metrics.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/shell/metrics/metrics.component.ts ***!
      \****************************************************/

    /*! exports provided: MetricsComponent */

    /***/
    function srcAppShellMetricsMetricsComponentTs(module, __webpack_exports__, __webpack_require__) {
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


      var _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/globals/base.directive */
      "./src/app/shared/globals/base.directive.ts");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! dayjs */
      "./node_modules/dayjs/dayjs.min.js");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/app.service */
      "./src/app/services/app.service.ts");
      /* harmony import */


      var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @acaprojects/ngx-pipes */
      "./node_modules/@acaprojects/ngx-pipes/__ivy_ngcc__/fesm2015/acaprojects-ngx-pipes.js");

      var I18N_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        var MSG_EXTERNAL_metricsHeader$$SRC_APP_SHELL_METRICS_METRICS_COMPONENT_TS_1 = goog.getMsg("Metrics");
        I18N_0 = MSG_EXTERNAL_metricsHeader$$SRC_APP_SHELL_METRICS_METRICS_COMPONENT_TS_1;
      } else {
        I18N_0 = $localize(_templateObject());
      }

      var MetricsComponent = /*#__PURE__*/function (_shared_globals_base_) {
        _inherits(MetricsComponent, _shared_globals_base_);

        var _super = _createSuper(MetricsComponent);

        function MetricsComponent(_service) {
          var _this;

          _classCallCheck(this, MetricsComponent);

          _this = _super.call(this);
          _this._service = _service;
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
            this._service.title = 'Metrics';
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
      }(_shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]);

      MetricsComponent.ɵfac = function MetricsComponent_Factory(t) {
        return new (t || MetricsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]));
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
        styles: [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.container.fullscreen[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 999;\n  top: -3.5em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .container.fullscreen[_ngcontent-%COMP%] {\n    top: -3em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .container.fullscreen[_ngcontent-%COMP%] {\n    top: -3em;\n  }\n}\n.container.fullscreen[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%], .container.fullscreen[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: none;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 3.5em;\n  height: 3.5em;\n  background-color: #00796b;\n  width: 100%;\n  color: #fff;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 4px 2px -2px rgba(0, 0, 0, 0.12);\n  z-index: 100;\n}\n.header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\n.heading[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: 400;\n  padding: 0 0.5em;\n  flex: 1;\n  width: 50%;\n}\n.body[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  background-color: #455a64;\n  flex: 1;\n  overflow: hidden;\n  z-index: 99;\n}\n@media only screen and (orientation: portrait) and (max-width: 800px) {\n  .body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 1048px) {\n  .body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.no-item[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.54);\n}\n.time-display[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 0.5em;\n}\n.time-display[_ngcontent-%COMP%]   .display[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\n.system[_ngcontent-%COMP%], .device[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.5em;\n}\n.device[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  background-color: rgba(244, 67, 54, 0.87);\n  border-bottom: 1px solid #455a64;\n}\n.device[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.device.connected[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.87);\n}\n.device[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 0 0.25em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.device[_ngcontent-%COMP%]   .module-class[_ngcontent-%COMP%], .device[_ngcontent-%COMP%]   .created[_ngcontent-%COMP%] {\n  flex: 2;\n}\n.device[_ngcontent-%COMP%]   .ip[_ngcontent-%COMP%], .device[_ngcontent-%COMP%]   .state[_ngcontent-%COMP%] {\n  flex: 3;\n}\n.device[_ngcontent-%COMP%]   .ip[_ngcontent-%COMP%] {\n  font-family: \"Fira Code\", monospace;\n}\n.device[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  flex: 4;\n}\n.count[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  top: 0;\n  left: 0;\n  right: 26.666666666em;\n  height: 2em;\n  font-size: 0.75em;\n  padding: 0 0.5em;\n  background-color: #2c393f;\n  color: #fff;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 4px 2px -2px rgba(0, 0, 0, 0.12);\n}\n@media only screen and (orientation: portrait) and (max-width: 800px) {\n  .count[_ngcontent-%COMP%] {\n    right: 0;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 1048px) {\n  .count[_ngcontent-%COMP%] {\n    right: 0;\n  }\n}\n.issues[_ngcontent-%COMP%] {\n  overflow: auto;\n  padding: 2.5em 1em 1em;\n  color: #fff;\n  flex: 1;\n  height: 100%;\n  width: 16em;\n}\n@media only screen and (orientation: portrait) and (max-width: 800px) {\n  .issues[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 1048px) {\n  .issues[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.graphs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n  width: 20em;\n  border-left: 1px solid rgba(0, 0, 0, 0.54);\n}\n.graphs[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 18em;\n  padding: 0.5em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .graphs[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    min-width: 100vw;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .graphs[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    min-width: 100vw;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 800px) {\n  .graphs[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 16em;\n    border: none;\n    border-top: 1px solid rgba(0, 0, 0, 0.54);\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 1048px) {\n  .graphs[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 16em;\n    border: none;\n    border-top: 1px solid rgba(0, 0, 0, 0.54);\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .graphs[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n    flex-wrap: nowrap;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .graphs[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n    flex-wrap: nowrap;\n  }\n}\n.item[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.2);\n  margin-bottom: 1em;\n}\n.item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 4px 2px -2px rgba(0, 0, 0, 0.12);\n}\n.hover[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.options[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.5em;\n  width: 1.5em;\n  font-size: 1.2em;\n  cursor: pointer;\n  margin-left: 0.5em;\n}\n.options[_ngcontent-%COMP%]   dropdown[_ngcontent-%COMP%] {\n  padding: 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.action[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  border-radius: 100%;\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.action[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.87);\n}\n.clock[_ngcontent-%COMP%] {\n  position: relative;\n  height: 2.5em;\n  width: 2.5em;\n  min-width: 2.5em;\n  border: 2px solid #fff;\n  border-radius: 100%;\n}\n.clock[_ngcontent-%COMP%]   .hand[_ngcontent-%COMP%] {\n  position: absolute;\n  transform-origin: 50% 100%;\n  background-color: #fff;\n  left: 50%;\n  bottom: 50%;\n}\n.clock[_ngcontent-%COMP%]   .hand.hour[_ngcontent-%COMP%] {\n  height: 0.8em;\n  width: 4px;\n  border-radius: 2px;\n}\n.clock[_ngcontent-%COMP%]   .hand.minute[_ngcontent-%COMP%] {\n  height: 1em;\n  width: 2px;\n  border-radius: 1px;\n}\n.clock[_ngcontent-%COMP%]   .hand.second[_ngcontent-%COMP%] {\n  height: 1em;\n  width: 1px;\n}\n.clock[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  height: 6px;\n  width: 6px;\n  border-radius: 100%;\n  background-color: #fff;\n}\n.mat-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1em;\n}\n.mat-menu-item[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.mat-menu-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n  margin-left: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3NoZWxsL21ldHJpY3MvbWV0cmljcy5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFxQ0E7O2NBQUE7QUFZQTs7ZUFBQTtBQU9BOztlQUFBO0FBZ0JBOztzQkFBQTtBQ3ZFQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBY0o7QUFiSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWVSO0FEMERRO0VDNUVKO0lBS1EsU0FBQTtFQWlCVjtBQUNGO0FEd0RRO0VDL0VKO0lBS1EsU0FBQTtFQXNCVjtBQUNGO0FBcEJROztFQUVJLGFBQUE7QUFzQlo7QUFqQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkRyQlc7RUNzQlgsV0FBQTtFQUNBLFdBQUE7RUFDQSwrR0FBQTtFQUNBLFlBQUE7QUFvQko7QUFsQkk7RUFDSSxrQkFBQTtBQW9CUjtBQWhCQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBbUJKO0FBaEJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJEdEJlO0VDdUJmLE9BQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFtQko7QUQ4RFE7RUN6RlI7SUFXUSxzQkFBQTtFQW9CTjtBQUNGO0FENERRO0VDNUZSO0lBV1Esc0JBQUE7RUF5Qk47QUFDRjtBQXRCQTtFQUNJLGdDQUFBO0FBeUJKO0FBdEJBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUF5Qko7QUF2Qkk7RUFDSSxrQkFBQTtBQXlCUjtBQXJCQTs7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBd0JK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ImZpbGUiOiJzcmMvYXBwL3NoZWxsL21ldHJpY3MvbWV0cmljcy5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0Y2FmNTA7XG4kc3VjY2Vzcy1saWdodDogIzY2YmI2YTtcbiRzdWNjZXNzLWRhcms6ICMwMDc5NmI7XG5cbiRwZW5kaW5nOiAjZmY4ZjAwO1xuJHBlbmRpbmctbGlnaHQ6ICNmZmMwNDY7XG4kcGVuZGluZy1kYXJrOiAjYzU2MDAwO1xuXG4kZXJyb3I6ICNmNDQzMzY7XG4kZXJyb3ItbGlnaHQ6ICNmZjZmNjA7XG4kZXJyb3ItZGFyazogI2FiMDAwZDtcblxuJGNvbG9yLXByaW1hcnk6ICNDOTIzNjY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogI2NkNTY4YTtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICNiNjAwNWQ7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM1QzY0RkY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiAjNzI3MmU3O1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiAjNTU1N2QxO1xuXG4kY29sb3ItZGV2ZWxvcDogI2YwZjBmMDtcbiRjb2xvci1kZXZlbG9wLWxpZ2h0OiAjZmZmO1xuJGNvbG9yLWRldmVsb3AtZGFyazogI2UwZTBlMDtcblxuJGJhY2tncm91bmQ6ICMyNjMyMzg7XG4kYmFja2dyb3VuZC1saWdodDogIzQ1NWE2NDtcbiRiYWNrZ3JvdW5kLWRhcms6ICMyMDI2MzI7XG5cbiRoZWFkZXItY29sb3I6ICMwQTBEMkU7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJSb2JvdG9cIiwgXCJWZXJkYW5hXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIllvdW5nXCIsICRmb250O1xuJG1vbm8tZm9udDogXCJGaXJhIENvZGVcIiwgbW9ub3NwYWNlO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBTaXppbmcgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcblxuXG4vKj09PT09PT09PT09PSpcXFxufHwgICBNaXhpbnMgICB8fFxuXFwqPT09PT09PT09PT09Ki9cblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkZGVwdGg6IDEsICRzcHJlYWQ6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwICgxcHggKiAkc3ByZWFkKSAoM3B4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4yICogJGRlcHRoKSxcbiAgICAgICAgICAgICAgICAwICgxcHggKiAkc3ByZWFkKSAoMXB4ICogJHNwcmVhZCkgMCByZ2JhKCMwMDAsIC4xNCAqICRkZXB0aCksXG4gICAgICAgICAgICAgICAgMCAoMnB4ICogJHNwcmVhZCkgKDFweCAqICRzcHJlYWQpIC0oMXB4ICogJHNwcmVhZCkgcmdiYSgjMDAwLCAuMTIgKiAkZGVwdGgpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICYuZnVsbHNjcmVlbiB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICB0b3A6IC0zLjVlbTtcbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgICAgIHRvcDogLTNlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50eXBlLFxuICAgICAgICAubWVudSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMy41ZW07XG4gICAgaGVpZ2h0OiAzLjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VjY2Vzcy1kYXJrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoIzAwMCwgLjIpLCAwIDJweCAycHggMCByZ2JhKCMwMDAsIC4xNCksIDAgNHB4IDJweCAtMnB4IHJnYmEoIzAwMCwgLjEyKTtcbiAgICB6LWluZGV4OiAxMDA7XG5cbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogLjVlbTtcbiAgICB9XG59XG5cbi5oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgcGFkZGluZzogMCAuNWVtO1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLmJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtbGlnaHQ7XG4gICAgZmxleDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDk5O1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhub3QtZGVza3RvcCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbn1cblxuLm5vLWl0ZW0ge1xuICAgIGNvbG9yOiByZ2JhKCNmZmYsIC41NCk7XG59XG5cbi50aW1lLWRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIC41ZW07XG5cbiAgICAuZGlzcGxheSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAuNWVtO1xuICAgIH1cbn1cblxuLnN5c3RlbSxcbi5kZXZpY2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAuNWVtO1xufVxuXG4uZGV2aWNlIHtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZXJyb3IsIC44Nyk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRiYWNrZ3JvdW5kLWxpZ2h0O1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuICAgICYuY29ubmVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3VjY2VzcywgLjg3KTtcbiAgICB9XG5cbiAgICAmPmRpdiB7XG4gICAgICAgIHBhZGRpbmc6IDAgLjI1ZW07XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cblxuICAgIC5tb2R1bGUtY2xhc3MsXG4gICAgLmNyZWF0ZWQge1xuICAgICAgICBmbGV4OiAyO1xuICAgIH1cblxuICAgIC5pcCxcbiAgICAuc3RhdGUge1xuICAgICAgICBmbGV4OiAzO1xuICAgIH1cblxuICAgIC5pcCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkbW9uby1mb250O1xuICAgIH1cblxuICAgIC5uYW1lIHtcbiAgICAgICAgZmxleDogNDtcbiAgICB9XG59XG5cbi5jb3VudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMjYuNjY2NjY2NjY2ZW07XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgZm9udC1zaXplOiAuNzVlbTtcbiAgICBwYWRkaW5nOiAwIC41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMzkzZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKCMwMDAsIC4yKSwgMCAycHggMnB4IDAgcmdiYSgjMDAwLCAuMTQpLCAwIDRweCAycHggLTJweCByZ2JhKCMwMDAsIC4xMik7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmlzc3VlcyB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZzogMi41ZW0gMWVtIDFlbTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTZlbTtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obm90LWRlc2t0b3ApIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uZ3JhcGhzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDIwZW07XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKCMwMDAsIC41NCk7XG5cbiAgICAmPmRpdiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHdpZHRoOiAxOGVtO1xuICAgICAgICBwYWRkaW5nOiAuNWVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDB2dztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obm90LWRlc2t0b3ApIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTZlbTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgjMDAwLCAuNTQpO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgfVxufVxuXG4uaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAuMik7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoIzAwMCwgLjIpLCAwIDJweCAycHggMCByZ2JhKCMwMDAsIC4xNCksIDAgNHB4IDJweCAtMnB4IHJnYmEoIzAwMCwgLjEyKVxuICAgIH1cbn1cblxuLmhvdmVyIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxufVxuXG4ub3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLm1lbnUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAuNWVtO1xuICAgIH1cblxuICAgIGRyb3Bkb3duIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgY29sb3I6IHJnYmEoIzAwMCwgLjg3KTtcbiAgICB9XG59XG5cbi5hY3Rpb24ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBoZWlnaHQ6IDEuMmVtO1xuICAgIHdpZHRoOiAxLjJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgY29sb3I6IHJnYmEoIzAwMCwgLjg3KTtcbiAgICB9XG59XG5cbi5jbG9jayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMi41ZW07XG4gICAgd2lkdGg6IDIuNWVtO1xuICAgIG1pbi13aWR0aDogMi41ZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuXG4gICAgLmhhbmQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIGJvdHRvbTogNTAlO1xuXG4gICAgICAgICYuaG91ciB7XG4gICAgICAgICAgICBoZWlnaHQ6IC44ZW07XG4gICAgICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5taW51dGUge1xuICAgICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICB3aWR0aDogMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5zZWNvbmQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNlbnRlciB7XG4gICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICB3aWR0aDogNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbn1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDFlbTtcblxuICAgIGFwcC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLjVlbTtcbiAgICB9XG59XG4iXX0= */"]
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
            type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shell/metrics/metrics.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/shell/metrics/metrics.module.ts ***!
      \*************************************************/

    /*! exports provided: AppMetricsModule */

    /***/
    function srcAppShellMetricsMetricsModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/shell/metrics/metrics.routes.ts");
      /* harmony import */


      var _metrics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./metrics.component */
      "./src/app/shell/metrics/metrics.component.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");

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
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_metrics_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedContentModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppMetricsModule, {
          declarations: [_metrics_component__WEBPACK_IMPORTED_MODULE_5__["MetricsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedContentModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMetricsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_metrics_component__WEBPACK_IMPORTED_MODULE_5__["MetricsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_metrics_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedContentModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/shell/metrics/metrics.routes.ts":
    /*!*************************************************!*\
      !*** ./src/app/shell/metrics/metrics.routes.ts ***!
      \*************************************************/

    /*! exports provided: ROUTES */

    /***/
    function srcAppShellMetricsMetricsRoutesTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });
      /* harmony import */


      var _metrics_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./metrics.component */
      "./src/app/shell/metrics/metrics.component.ts");

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
//# sourceMappingURL=shell-metrics-metrics-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\I Will\navbar-testing\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EF5B":
/*!***************************************************!*\
  !*** ./src/app/components/gift/gift.component.ts ***!
  \***************************************************/
/*! exports provided: GiftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftComponent", function() { return GiftComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function (a0) { return { "hover": a0 }; };
class GiftComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.pageLoaded = false;
        this.firstBox = '';
        this.secondBox = '';
        this.thirdBox = '';
        this.fourthBox = '';
        this.giftForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.messageOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selection = [
            'Triceratopsz',
            'Autó',
            'Motorka',
            'Cupákos',
            'Vicces kép',
            'Kép egy Zetorról',
            'Válasz egy kérdésre',
            'Zorro álarca',
            'Megszerelek valamit',
            'Elrontok valamit',
            'Vesénrúgok valakit',
            'Nyelvtörő',
            'Zokni',
            'Megindító film',
            'Tockos',
            'Elárulom Hannah Montana nevét'
        ];
    }
    ngOnInit() {
        this.newSelection();
        this.giftForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
            mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        setTimeout(() => this.pageLoaded = true, 500);
    }
    newSelection() {
        let index = Math.floor(Math.random() * this.selection.length);
        this.firstBox = this.selection[index];
        this.selection.splice(index, 1);
        index = Math.floor(Math.random() * this.selection.length);
        this.secondBox = this.selection[index];
        this.selection.splice(index, 1);
        index = Math.floor(Math.random() * this.selection.length);
        this.thirdBox = this.selection[index];
        this.selection.splice(index, 1);
        index = Math.floor(Math.random() * this.selection.length);
        this.fourthBox = this.selection[index];
        this.selection.splice(index, 1);
    }
    sendToMe(message) {
        console.log(message);
        if (this.giftForm.valid) {
            const url = 'https://myespm.eu/christmas/gift-provider';
            const body = {
                data: this.giftForm.value,
                message,
            };
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'myespm.eu'
            });
            const jsonBody = JSON.stringify(body);
            console.log(this.giftForm);
            this.httpClient.post(url, jsonBody).subscribe(data => {
                console.log(data);
                this.messageOut.emit('info');
            }, error => {
                console.log(error);
                this.messageOut.emit('error');
            });
        }
        else {
            this.messageOut.emit('error');
        }
    }
}
GiftComponent.ɵfac = function GiftComponent_Factory(t) { return new (t || GiftComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
GiftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GiftComponent, selectors: [["app-gift"]], outputs: { messageOut: "messageOut" }, decls: 45, vars: 29, consts: [[1, "light"], [1, "container"], [1, "form"], ["autocomplete", "off", 3, "formGroup"], [1, "row"], ["for", "name"], ["id", "name", "type", "text", "placeholder", "N\u00E9v", "formControlName", "name", "required", "", "autocomplete", "off"], ["for", "mail"], ["id", "mail", "type", "text", "placeholder", "E-mail", "formControlName", "mail", "required", "", "autocomplete", "off"], [1, "flex"], [1, "box-parent", "red", "col-12", "mt-5", "d-flex", "justify-content-center", 3, "click"], [1, "box", 3, "ngClass"], [1, "box-body", 3, "ngClass"], [1, "text"], [1, "box-lid"], [1, "box-bowtie"], [1, "box-parent", "blue", "col-12", "mt-5", "d-flex", "justify-content-center", 3, "click"]], template: function GiftComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "T\u00F6ltsd ki az \u00EDvet \u00E9s katt a k\u00EDv\u00E1nt csomagra!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "N\u00E9v");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GiftComponent_Template_div_click_16_listener() { return ctx.sendToMe(ctx.firstBox); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GiftComponent_Template_div_click_23_listener() { return ctx.sendToMe(ctx.secondBox); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GiftComponent_Template_div_click_31_listener() { return ctx.sendToMe(ctx.thirdBox); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GiftComponent_Template_div_click_38_listener() { return ctx.sendToMe(ctx.fourthBox); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.giftForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx.pageLoaded));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx.pageLoaded));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.firstBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx.pageLoaded));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c0, ctx.pageLoaded));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.secondBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c0, ctx.pageLoaded));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c0, ctx.pageLoaded));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.thirdBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c0, ctx.pageLoaded));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](27, _c0, ctx.pageLoaded));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.fourthBox);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["app-gift[_ngcontent-%COMP%] {\n  height: 100vh;\n  position: relative;\n  display: block;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #222;\n  height: 100%;\n}\n\ndiv.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n\ndiv.form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-top: 16px;\n}\n\ndiv.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  font-weight: bolder;\n  font-size: 20px;\n}\n\ndiv.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 0;\n  font-size: 24px;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-top: 0;\n  display: flex;\n  justify-content: center;\n}\n\nh1.light[_ngcontent-%COMP%] {\n  color: #bcbcbc;\n}\n\ndiv.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\ndiv.flex[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 130px;\n}\n\n.col-12[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.box[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 0;\n}\n\n.box-parent.red[_ngcontent-%COMP%]   .box-body[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  width: 200px;\n  margin-top: 123.3333333333px;\n  background-color: #cc231e;\n  border-bottom-left-radius: 5%;\n  border-bottom-right-radius: 5%;\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);\n  background: linear-gradient(#762c2c, #ff0303);\n}\n\n.box-parent.red[_ngcontent-%COMP%]   .box-body[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  width: 150px;\n  height: 150px;\n  margin-left: 25px;\n}\n\n.box-parent.red[_ngcontent-%COMP%]   .box-body[_ngcontent-%COMP%]   .box-lid[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 90%;\n  height: 40px;\n  background-color: #cc231e;\n  height: 40px;\n  width: 220px;\n  border-radius: 5%;\n  box-shadow: 0 8px 4px -4px rgba(0, 0, 0, 0.3);\n}\n\n.box-parent.blue[_ngcontent-%COMP%]   .box-body[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  width: 200px;\n  margin-top: 123.3333333333px;\n  background-color: #0e6bdd;\n  border-bottom-left-radius: 5%;\n  border-bottom-right-radius: 5%;\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);\n  background: linear-gradient(#0a4081, #2779de);\n}\n\n.box-parent.blue[_ngcontent-%COMP%]   .box-body[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  width: 150px;\n  height: 150px;\n  margin-left: 25px;\n}\n\n.box-parent.blue[_ngcontent-%COMP%]   .box-body[_ngcontent-%COMP%]   .box-lid[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 90%;\n  height: 40px;\n  background-color: #0e6bdd;\n  height: 40px;\n  width: 220px;\n  border-radius: 5%;\n  box-shadow: 0 8px 4px -4px rgba(0, 0, 0, 0.3);\n}\n\n.box[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 440px;\n  height: 440px;\n  background-color: #89cff0;\n  position: absolute;\n  z-index: -1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n}\n\n.box-body[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(0%);\n  transition: all 0.5s;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-self: center;\n  border-radius: 10px;\n}\n\n.box-body.hover[_ngcontent-%COMP%] {\n  cursor: pointer;\n  animation: box-body 1s forwards ease-in-out;\n}\n\n.box-body.hover[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 0;\n  transform: translateY(-157px);\n}\n\n.box-body.hover[_ngcontent-%COMP%]   .box-lid[_ngcontent-%COMP%] {\n  animation: box-lid 1s forwards ease-in-out;\n}\n\n.box-body.hover[_ngcontent-%COMP%]   .box-bowtie[_ngcontent-%COMP%]::before {\n  animation: box-bowtie-left 1.1s forwards ease-in-out;\n}\n\n.box-body.hover[_ngcontent-%COMP%]   .box-bowtie[_ngcontent-%COMP%]::after {\n  animation: box-bowtie-right 1.1s forwards ease-in-out;\n}\n\n.box-body[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 50px;\n  background: linear-gradient(#ffffff, #ffefa0);\n}\n\n.box-lid[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 50px;\n  background: linear-gradient(#ffefa0, #fff);\n}\n\n.box-bowtie[_ngcontent-%COMP%] {\n  z-index: 1;\n  height: 100%;\n}\n\n.box-bowtie[_ngcontent-%COMP%]::before, .box-bowtie[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 83.3333333333px;\n  height: 83.3333333333px;\n  border: 16.6666666667px solid white;\n  border-radius: 50% 50% 0 50%;\n  position: absolute;\n  bottom: 99%;\n  z-index: -1;\n}\n\n.box-bowtie[_ngcontent-%COMP%]::before {\n  left: 50%;\n  transform: translateX(-100%) skew(10deg, 10deg);\n}\n\n.box-bowtie[_ngcontent-%COMP%]::after {\n  left: 50%;\n  transform: translateX(0%) rotate(90deg) skew(10deg, 10deg);\n}\n\n@keyframes box-lid {\n  0%, 42% {\n    transform: translate3d(-50%, 0%, 0) rotate(0deg);\n  }\n  60% {\n    transform: translate3d(-85%, -230%, 0) rotate(-25deg);\n  }\n  90%, 100% {\n    transform: translate3d(-119%, 225%, 0) rotate(-70deg);\n  }\n}\n\n@keyframes box-body {\n  0% {\n    transform: translate3d(0%, 0%, 0) rotate(0deg);\n  }\n  25% {\n    transform: translate3d(0%, 25%, 0) rotate(20deg);\n  }\n  50% {\n    transform: translate3d(0%, -15%, 0) rotate(0deg);\n  }\n  70% {\n    transform: translate3d(0%, 0%, 0) rotate(0deg);\n  }\n}\n\n@keyframes box-bowtie-right {\n  0%, 50%, 75% {\n    transform: translateX(0%) rotate(90deg) skew(10deg, 10deg);\n  }\n  90%, 100% {\n    transform: translate(-50%, -15%) rotate(45deg) skew(10deg, 10deg);\n    box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.3);\n  }\n}\n\n@keyframes box-bowtie-left {\n  0% {\n    transform: translateX(-100%) rotate(0deg) skew(10deg, 10deg);\n  }\n  50%, 75% {\n    transform: translate(-50%, -15%) rotate(45deg) skew(10deg, 10deg);\n  }\n  90%, 100% {\n    transform: translateX(-100%) rotate(0deg) skew(10deg, 10deg);\n  }\n}\n\n@media screen and (max-width: 1070px) {\n  .flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .flex[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin: 70px !important;\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnaWZ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFESjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFIRjs7QUFLRTtFQUNFLGNBQUE7QUFISjs7QUFPQTtFQUNFLGFBQUE7QUFKRjs7QUFNQTtFQUNFLGFBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBSEY7O0FBT0k7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4Q0FBQTtFQUNBLDZDQUFBO0FBSko7O0FBTUk7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFKTjs7QUFPSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFFUSwyQkFBQTtFQUNSLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7QUFMTjs7QUFVSTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDhDQUFBO0VBQ0EsNkNBQUE7QUFQSjs7QUFTSTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQVBOOztBQVVJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUVRLDJCQUFBO0VBQ1IsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtBQVJOOztBQWFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVRLGdDQUFBO0VBQ1Isa0JBQUE7QUFWRjs7QUFhQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVZGOztBQWFBO0VBQ0UsZUFBQTtFQUVRLDJDQUFBO0FBVlY7O0FBWUE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBVEY7O0FBY0E7RUFFVSwwQ0FBQTtBQVhWOztBQWFBO0VBRVUsb0RBQUE7QUFWVjs7QUFZQTtFQUVVLHFEQUFBO0FBVFY7O0FBV0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFFUSwyQkFBQTtFQUNSLFdBQUE7RUFDQSw2Q0FBQTtBQVJGOztBQVdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBRVEsMkJBQUE7RUFDUixXQUFBO0VBQ0EsMENBQUE7QUFSRjs7QUFVQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBUEY7O0FBU0E7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBTkY7O0FBUUE7RUFDRSxTQUFBO0VBRVEsK0NBQUE7QUFMVjs7QUFPQTtFQUNFLFNBQUE7RUFFUSwwREFBQTtBQUpWOztBQXVCQTtFQUNFO0lBR1UsZ0RBQUE7RUFQVjtFQVNBO0lBRVUscURBQUE7RUFQVjtFQVNBO0lBRVUscURBQUE7RUFQVjtBQUNGOztBQTJCQTtFQUNFO0lBRVUsOENBQUE7RUFQVjtFQVNBO0lBRVUsZ0RBQUE7RUFQVjtFQVNBO0lBRVUsZ0RBQUE7RUFQVjtFQVNBO0lBRVUsOENBQUE7RUFQVjtBQUNGOztBQXVCQTtFQUNFO0lBSVUsMERBQUE7RUFaVjtFQWNBO0lBR1UsaUVBQUE7SUFDUiwrQ0FBQTtFQWJGO0FBQ0Y7O0FBK0JBO0VBQ0U7SUFFVSw0REFBQTtFQWZWO0VBaUJBO0lBR1UsaUVBQUE7RUFoQlY7RUFrQkE7SUFHVSw0REFBQTtFQWpCVjtBQUNGOztBQXFCQTtFQUNFO0lBQ0Usc0JBQUE7RUFuQkY7RUFvQkU7SUFDRSx1QkFBQTtJQUNBLHlCQUFBO0lBQ0EsMEJBQUE7RUFsQko7QUFDRiIsImZpbGUiOiJnaWZ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWdpZnR7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5kaXYuZm9ybXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJiBkaXZ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICB9XHJcblxyXG4gICYgbGFiZWx7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAmIGlucHV0e1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuaDF7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAmLmxpZ2h0e1xyXG4gICAgY29sb3I6IHJnYigxODgsIDE4OCwgMTg4KTtcclxuICB9XHJcbn1cclxuXHJcbmRpdi5mbGV4e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuZGl2LmZsZXg+ZGl2e1xyXG4gIG1hcmdpbjogMTMwcHg7XHJcbn1cclxuXHJcbi5jb2wtMTJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLmJveC1wYXJlbnQucmVke1xyXG4gICAgJiAuYm94LWJvZHl7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTIzLjMzMzMzMzMzMzNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYzIzMWU7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1JTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1JTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzc2MmMyYywjZmYwMzAzKTtcclxuXHJcbiAgICAmIC50ZXh0e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICYgLmJveC1saWQge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICBib3R0b206IDkwJTtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MyMzFlO1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDRweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmJveC1wYXJlbnQuYmx1ZXtcclxuICAgICYgLmJveC1ib2R5e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEyMy4zMzMzMzMzMzMzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU2YmRkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNSU7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNSU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwYTQwODEsIzI3NzlkZSk7XHJcblxyXG4gICAgJiAudGV4dHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAmIC5ib3gtbGlkIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgYm90dG9tOiA5MCU7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNmJkZDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDhweCA0cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYm94OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDQ0MHB4O1xyXG4gIGhlaWdodDogNDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg5Y2ZmMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5ib3gtYm9keSAudGV4dHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxufVxyXG4uYm94LWJvZHkuaG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYm94LWJvZHkgMXMgZm9yd2FyZHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IGJveC1ib2R5IDFzIGZvcndhcmRzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5ib3gtYm9keS5ob3ZlciAudGV4dHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNTdweCk7XHJcblxyXG5cclxuXHJcbn1cclxuLmJveC1ib2R5LmhvdmVyIC5ib3gtbGlkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYm94LWxpZCAxcyBmb3J3YXJkcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogYm94LWxpZCAxcyBmb3J3YXJkcyBlYXNlLWluLW91dDtcclxufVxyXG4uYm94LWJvZHkuaG92ZXIgLmJveC1ib3d0aWU6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGJveC1ib3d0aWUtbGVmdCAxLjFzIGZvcndhcmRzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBib3gtYm93dGllLWxlZnQgMS4xcyBmb3J3YXJkcyBlYXNlLWluLW91dDtcclxufVxyXG4uYm94LWJvZHkuaG92ZXIgLmJveC1ib3d0aWU6OmFmdGVyIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYm94LWJvd3RpZS1yaWdodCAxLjFzIGZvcndhcmRzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBib3gtYm93dGllLXJpZ2h0IDEuMXMgZm9yd2FyZHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmJveC1ib2R5OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmZmZmYsI2ZmZWZhMClcclxufVxyXG5cclxuLmJveC1saWQ6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB3aWR0aDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZWZhMCwjZmZmKVxyXG59XHJcbi5ib3gtYm93dGllIHtcclxuICB6LWluZGV4OiAxO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uYm94LWJvd3RpZTo6YmVmb3JlLCAuYm94LWJvd3RpZTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDgzLjMzMzMzMzMzMzNweDtcclxuICBoZWlnaHQ6IDgzLjMzMzMzMzMzMzNweDtcclxuICBib3JkZXI6IDE2LjY2NjY2NjY2NjdweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDAgNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDk5JTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4uYm94LWJvd3RpZTo6YmVmb3JlIHtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHNrZXcoMTBkZWcsIDEwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgc2tldygxMGRlZywgMTBkZWcpO1xyXG59XHJcbi5ib3gtYm93dGllOjphZnRlciB7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKSByb3RhdGUoOTBkZWcpIHNrZXcoMTBkZWcsIDEwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSkgcm90YXRlKDkwZGVnKSBza2V3KDEwZGVnLCAxMGRlZyk7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3gtbGlkIHtcclxuICAwJSxcclxuICA0MiUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDAlLCAwKSByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCUsIDApIHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtODUlLCAtMjMwJSwgMCkgcm90YXRlKC0yNWRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTg1JSwgLTIzMCUsIDApIHJvdGF0ZSgtMjVkZWcpO1xyXG4gIH1cclxuICA5MCUsIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMTklLCAyMjUlLCAwKSByb3RhdGUoLTcwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTE5JSwgMjI1JSwgMCkgcm90YXRlKC03MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJveC1saWQge1xyXG4gIDAlLFxyXG4gIDQyJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCUsIDApIHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwJSwgMCkgcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04NSUsIC0yMzAlLCAwKSByb3RhdGUoLTI1ZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtODUlLCAtMjMwJSwgMCkgcm90YXRlKC0yNWRlZyk7XHJcbiAgfVxyXG4gIDkwJSwgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTExOSUsIDIyNSUsIDApIHJvdGF0ZSgtNzBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMTklLCAyMjUlLCAwKSByb3RhdGUoLTcwZGVnKTtcclxuICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJveC1ib2R5IHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAlLCAwKSByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAlLCAwKSByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDI1JSwgMCkgcm90YXRlKDIwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgMjUlLCAwKSByb3RhdGUoMjBkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAtMTUlLCAwKSByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIC0xNSUsIDApIHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgNzAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgMCUsIDApIHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgMCUsIDApIHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBib3gtYm9keSB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAwJSwgMCkgcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAwJSwgMCkgcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAyNSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAyNSUsIDApIHJvdGF0ZSgyMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDI1JSwgMCkgcm90YXRlKDIwZGVnKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgLTE1JSwgMCkgcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAtMTUlLCAwKSByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDcwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAlLCAwKSByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAlLCAwKSByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3gtYm93dGllLXJpZ2h0IHtcclxuICAwJSxcclxuICA1MCUsXHJcbiAgNzUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKSByb3RhdGUoOTBkZWcpIHNrZXcoMTBkZWcsIDEwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKSByb3RhdGUoOTBkZWcpIHNrZXcoMTBkZWcsIDEwZGVnKTtcclxuICB9XHJcbiAgOTAlLFxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTUlKSByb3RhdGUoNDVkZWcpIHNrZXcoMTBkZWcsIDEwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1JSkgcm90YXRlKDQ1ZGVnKSBza2V3KDEwZGVnLCAxMGRlZyk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBib3gtYm93dGllLXJpZ2h0IHtcclxuICAwJSxcclxuICA1MCUsXHJcbiAgNzUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKSByb3RhdGUoOTBkZWcpIHNrZXcoMTBkZWcsIDEwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKSByb3RhdGUoOTBkZWcpIHNrZXcoMTBkZWcsIDEwZGVnKTtcclxuICB9XHJcbiAgOTAlLFxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTUlKSByb3RhdGUoNDVkZWcpIHNrZXcoMTBkZWcsIDEwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1JSkgcm90YXRlKDQ1ZGVnKSBza2V3KDEwZGVnLCAxMGRlZyk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJveC1ib3d0aWUtbGVmdCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgwZGVnKSBza2V3KDEwZGVnLCAxMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlKDBkZWcpIHNrZXcoMTBkZWcsIDEwZGVnKTtcclxuICB9XHJcbiAgNTAlLFxyXG4gIDc1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xNSUpIHJvdGF0ZSg0NWRlZykgc2tldygxMGRlZywgMTBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTUlKSByb3RhdGUoNDVkZWcpIHNrZXcoMTBkZWcsIDEwZGVnKTtcclxuICB9XHJcbiAgOTAlLFxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgwZGVnKSBza2V3KDEwZGVnLCAxMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlKDBkZWcpIHNrZXcoMTBkZWcsIDEwZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBib3gtYm93dGllLWxlZnQge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSByb3RhdGUoMGRlZykgc2tldygxMGRlZywgMTBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgwZGVnKSBza2V3KDEwZGVnLCAxMGRlZyk7XHJcbiAgfVxyXG4gIDUwJSxcclxuICA3NSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTUlKSByb3RhdGUoNDVkZWcpIHNrZXcoMTBkZWcsIDEwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1JSkgcm90YXRlKDQ1ZGVnKSBza2V3KDEwZGVnLCAxMGRlZyk7XHJcbiAgfVxyXG4gIDkwJSxcclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSByb3RhdGUoMGRlZykgc2tldygxMGRlZywgMTBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgwZGVnKSBza2V3KDEwZGVnLCAxMGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA3MHB4KSB7XHJcbiAgLmZsZXh7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgJj5kaXZ7XHJcbiAgICAgIG1hcmdpbjogNzBweCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ElGD":
/*!**************************************!*\
  !*** ./src/app/app-body/app.body.ts ***!
  \**************************************/
/*! exports provided: AppBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBodyComponent", function() { return AppBodyComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AppBodyComponent_div_36_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppBodyComponent_div_36_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const but_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.Relocate(but_r10.link); })("mouseleave", function AppBodyComponent_div_36_div_9_Template_button_mouseleave_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const di_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.setBgBackToStart(di_r6.id); })("mouseenter", function AppBodyComponent_div_36_div_9_Template_button_mouseenter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const but_r10 = ctx.$implicit; const di_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.ChangeBackgroundImage(but_r10.background, di_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const but_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("class", but_r10.buttonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](but_r10.button);
} }
function AppBodyComponent_div_36_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function AppBodyComponent_div_36_div_10_div_1_Template_img_mouseenter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const i_r19 = ctx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return (ctx_r20.show[i_r19] = 1); })("mouseout", function AppBodyComponent_div_36_div_10_div_1_Template_img_mouseout_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const i_r19 = ctx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return (ctx_r22.show[i_r19] = 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctrl_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("src", ctrl_r18.icon, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("absolute ", ctx_r17.show[i_r19] ? "" : "hidden", " popUpIcons");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctrl_r18.script, " ");
} }
function AppBodyComponent_div_36_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppBodyComponent_div_36_div_10_div_1_Template, 4, 5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const di_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", di_r6.controls);
} }
function AppBodyComponent_div_36_div_11_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppBodyComponent_div_36_div_11_li_1_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r27.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](listItem_r25.middle);
} }
function AppBodyComponent_div_36_div_11_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppBodyComponent_div_36_div_11_li_1_a_3_Template, 2, 1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listItem_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](listItem_r25.middle ? "middle" : "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](listItem_r25.left);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", listItem_r25.middle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](listItem_r25.right);
} }
function AppBodyComponent_div_36_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppBodyComponent_div_36_div_11_li_1_Template, 6, 5, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const di_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", di_r6.list);
} }
const _c0 = function (a0) { return { "rg-bgo-black": a0 }; };
function AppBodyComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AppBodyComponent_div_36_div_9_Template, 3, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AppBodyComponent_div_36_div_10_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AppBodyComponent_div_36_div_11_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const di_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("class", di_r6.divClasses)("id", di_r6.divId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("style", di_r6.style, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeStyle"])("id", di_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, di_r6.style));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](di_r6.divId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](di_r6.including);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", di_r6.buttons);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", di_r6.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", di_r6.list);
} }
document.addEventListener('scroll', GetActiveContainer);
window.onload = function () {
    if ((window.innerHeight < 1080) && (window.innerHeight < window.innerWidth)) {
        GetActiveContainer();
    }
};
function GetActiveContainer() {
    //number of homeContainers
    let homeContainerNum = document.getElementsByClassName('homeContainers').length;
    //number of full body height
    let body = document.body;
    let maxHeight = body.scrollHeight;
    //get height of each homeContainers
    let homeCtNumHeight = document.getElementsByClassName('homeContainers');
    let activeDivNum = homeContainerNum - Math.round((maxHeight - window.pageYOffset - 200) / 600);
    const homeContainers = Array.from(document.getElementsByClassName('homeContainers'));
    homeContainers.forEach(element => {
        if (element.classList.contains('activeHomeContainer')) {
            element.classList.remove('activeHomeContainer');
        }
    });
    homeCtNumHeight[activeDivNum].classList.add('activeHomeContainer');
}
class AppBodyComponent {
    constructor() {
        this.isOpen = false;
        this.canReset = false;
        this.show = [];
        this.sendForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            topic: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        //From this we are starting to send the data from form to a file via POST
        //which we can't really test because of this page is running on localhost only, not on webserver and we don't even have
        //wamp/lamp-server installed yet. But I believe in this. Let's get back to learn!
        // This needs to be in the "Send" button as an attribute -->(click)="SendMail([Name.value,Email.value,Phone.value,Topic.value,Description.value])"<--
        /*
        constructor(private http: HttpClient) {
        }
    
        errors:any = "";
        URL:string="";
        //get values from mail popup
        SendMail(val:string[]):Observable<any>{
    
            this.URL = "https://";
            const headers = new Headers();
            headers.append('Content-Type','application/json');
            let data = "firstData = 5";
    
            return this.http.post(this.URL,JSON.stringify(data)).pipe(catchError(this.errors));
        }
        */
        this.nameOfSender = 'Add us a name!';
        this.divs = [
            {
                divClasses: ['middle pd-t-5 hoverBgT'],
                divId: 'home',
                including: 'Turn your ideas into reality.',
                style: ['background-color: rgba(0,0,0,0.2)'],
            },
            {
                divClasses: ['middle pd-t-5 hoverBgT'],
                divId: 'portfolio',
                including: "You can check some works I made. These have simple and complicated functions with reason -> Everything for the Customer needs! My AIM is to serve the Customers which includes not just one-time job but service too.",
                style: ["background-position: center; background-repeat: no-repeat; background-size: cover; filter: saturate(30%)"],
                id: 'switchBgImage',
                buttons: [{
                        button: 'MyESPM',
                        link: 'https://myespm.eu',
                        background: 'myespm',
                    },
                    {
                        button: 'WAYA',
                        link: 'http://waya.sk',
                        background: 'waya',
                    },
                    {
                        button: 'VANREGALS',
                        link: 'http://vanregals.sk',
                        background: 'vanregals'
                    }
                ]
            },
            {
                divClasses: ['middle pd-t-5 hoverBgT'],
                divId: 'about',
                including: 'What is my weapon as Web Developer? \n This is a great question. But the answer is not simple. For those who wants to belong to the group of the best developers must have the property of Intelligence. What does that mean? In the world of the internet every staff is just changing continuously. If you want to stay on the top you have to learn about things you already learned. This is the price we pay all day long.',
                style: ["background-color: rgba(0,0,0,0.2)"],
                controls: [{
                        language: 'Angular',
                        icon: '../../../../assets/icons/angular.png',
                        script: '<div *ngIf="statement == true">shown</div>\n\
                <div *ngIf="statement == false">[empty]</div>\n\
                export clas AppComponent{\n\
                    statement = true\n\
                }',
                    }, {
                        language: 'JavaScript',
                        icon: '../../../../assets/icons/javascript.png',
                        script: '<script>\n\
                element.style.color = "red"\
                \n</script>',
                    }, {
                        language: 'jQuery',
                        icon: '../../../../assets/icons/jquery.png',
                        script: '$("elem").on("click",\nfunction(e){\
                    $(this).css("background-color","red")})',
                    }, {
                        language: 'JSON',
                        icon: '../../../../assets/icons/json.png',
                        script: '{\
                    "just_a_name": [\
                            {\
                                "item_one": "Name of item 1",\n\
                                "item_two": "Name of item 2",\n\
                            }\
                        ]\
                    }',
                    }, {
                        language: 'HTML5',
                        icon: '../../../../assets/icons/html.png',
                        script: '<input type="number" value="144" min="10"\n\
                    max="150" name="Name" step=".01">',
                    }, {
                        language: 'CSS3',
                        icon: '../../../../assets/icons/css.png',
                        script: 'input{\n\
                        position: relative;\n\
                        width: 500px;\n\
                        background-color: red;\n\
                    }',
                    }, {
                        language: 'PHP',
                        icon: '../../../../assets/icons/php.png',
                        script: '$conn->query("SELECT * FROM table_name AS TN\n\
                    RIGHT JOIN second_table_name AS STN\n\
                    ON (TN.ID = STN.TNID) WHERE(isDeleted = FALSE)")',
                    }, {
                        language: 'SQL',
                        icon: '../../../../assets/icons/sql.png',
                        script: 'UPDATE table SET\n\
                    item_one="FirstItem",\n\
                    item_two="SecondItem",\n\
                    item_date="01.01.2020"\n\
                    WHERE(ID = "1" AND TRUE)',
                    }]
            },
            {
                divClasses: ['middle pd-t-5 hoverBgT'],
                divId: 'contact',
                list: [{
                        left: 'Name:',
                        right: 'Ádám Szitás'
                    }, {
                        left: 'Phone:',
                        right: '+421 908 731 893'
                    }, {
                        left: 'E-mail:',
                        right: 'adam.szitas.as@gmail.com'
                    }, {
                        middle: 'Or just Click me!',
                        contactPop: 'contactMe'
                    }],
                style: ["background-image: url('../../../../assets/body-images/about-min.png'); background-color: #ccc; background-position: center; background-repeat: no-repeat; background-size: cover"],
            }
        ];
    }
    Log(nameOfSender) {
        console.log(nameOfSender);
    }
    ChangeBackgroundImage(toImage, element) {
        this.canReset = false;
        if (toImage && element) {
            let elBgChange = document.getElementById(element);
            if (elBgChange) {
                elBgChange.style.backgroundImage = 'url(../assets/body-images/' + toImage + '-min.png)';
            }
            ;
        }
    }
    setBgBackToStart(element) {
        this.canReset = true;
        setTimeout(() => {
            if (element && this.canReset) {
                let elBgChange = document.getElementById(element);
                if (elBgChange) {
                    elBgChange.style.backgroundImage = '';
                }
            }
        }, 2000);
    }
    submitForm() {
        if (this.sendForm.valid) {
            console.log(this.sendForm.value);
        }
    }
    handleKeyboardEvent(event) {
        event.stopImmediatePropagation;
        this.isOpen = false;
    }
    toggle() {
        this.isOpen = !this.isOpen;
    }
    Relocate(href) {
        window.open(href, '_blank');
    }
}
AppBodyComponent.ɵfac = function AppBodyComponent_Factory(t) { return new (t || AppBodyComponent)(); };
AppBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppBodyComponent, selectors: [["app-body"]], hostBindings: function AppBodyComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.escape", function AppBodyComponent_keydown_escape_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    } }, decls: 37, vars: 4, consts: [[1, "open-close-container", "fixed", "middle"], [1, "middle", 3, "formGroup", "submit"], [1, "row", "middle"], [1, "middle"], ["type", "text", "name", "Name", "placeholder", "Name", "formControlName", "name"], ["Name", ""], ["type", "text", "name", "eMail", "placeholder", "E-mail", "formControlName", "mail"], ["Email", ""], ["type", "text", "name", "phoneNumber", "placeholder", "Phone number", "formControlName", "phone"], ["Phone", ""], ["type", "text", "name", "topic", "placeholder", "Topic", "formControlName", "topic"], ["Topic", ""], ["name", "description", "formControlName", "description", 1, "middle"], ["Description", ""], [1, "right"], ["type", "submit"], [4, "ngFor", "ngForOf"], [1, "middle", "homeContainers", 3, "ngClass"], [1, "middle", 2, "color", "white", "font-size", "30px", "font-weight", "bold"], [1, "hidden"], ["class", "df", 4, "ngFor", "ngForOf"], ["class", "df iContainer", 4, "ngIf"], [4, "ngIf"], [1, "df"], [3, "click", "mouseleave", "mouseenter"], [1, "df", "iContainer"], ["class", "block", 4, "ngFor", "ngForOf"], [1, "block"], [3, "mouseenter", "mouseout"], ["class", "w-100 pd-20 block underline contact", "style", "border-bottom: 1px solid white", 3, "class", 4, "ngFor", "ngForOf"], [1, "w-100", "pd-20", "block", "underline", "contact", 2, "border-bottom", "1px solid white"], [1, "left"], ["class", "middle", "style", "border: 2px solid white", 3, "click", 4, "ngIf"], [1, "middle", 2, "border", "2px solid white", 3, "click"]], template: function AppBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Send your mail easily here!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function AppBodyComponent_Template_form_submit_4_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "textarea", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, AppBodyComponent_div_36_Template, 12, 12, "div", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@openCloseOverlay", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@openClose", ctx.isOpen ? "open" : "closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.sendForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.divs);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["@keyframes containerHomeHover {\n  0% {\n    background-size: cover;\n  }\n  100% {\n    background-size: auto;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\nbody[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  padding-right: 5vw;\n  padding-left: 5vw;\n  position: relative;\n  background-image: url('bg-min.jpg');\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  border-radius: 5px;\n  overflow: hidden;\n  padding-bottom: 50px;\n}\ndiv#modal[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 50;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\ndiv#modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  z-index: 55;\n  width: 50%;\n  height: 60%;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n}\ndiv#modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], div#modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  align-self: center;\n  justify-content: center;\n}\ndiv#modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  z-index: 60;\n  max-width: 100%;\n  max-height: 100%;\n  position: relative;\n}\ndiv#modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background-color: #d7081587;\n  margin-top: 22px;\n  padding: 20px 10px;\n  transition: all 0.2s ease-in-out;\n  font-weight: bold;\n  font-size: 20px;\n  color: white;\n}\ndiv#modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0px 10px whitesmoke;\n  background-color: #d70816;\n}\nnav[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 90%;\n  padding: 0;\n  margin: 0;\n  position: fixed;\n  top: 0;\n  z-index: 5;\n  background-color: white;\n}\nnav[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\na[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 400;\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  height: 60px;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));\n}\nli[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dropbtn[_ngcontent-%COMP%], li[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 16px 16px;\n  text-decoration: none;\n  font-size: 24px;\n  font-weight: 600;\n}\nli[_ngcontent-%COMP%]:hover, .dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));\n}\nli.dropdown[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #d1d1d1;\n}\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n.homeContainers[_ngcontent-%COMP%] {\n  height: 600px;\n  padding: 10%;\n}\n.homeContainers[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.homeContainers.activeHomeContainer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  animation: fadeIn 1s;\n  opacity: 1;\n}\n.homeContainers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n  font-size: 26px;\n  color: white;\n  font-weight: bold;\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 0;\n  border: 0;\n  box-shadow: 3px 1px rgba(200, 200, 200, 0.4);\n  transition: all 0.5s ease-in-out;\n}\n.homeContainers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(80, 80, 80, 0.8);\n  padding: 5px 25px;\n  text-decoration: underline;\n  transition: all 0.5s ease-in-out;\n}\n.homeContainers[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.homeContainers[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.hoverBgT[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  transition: all 0.5s;\n}\n.hoverBgT[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n  -ms-transform: scale(1.2);\n  -moz-transform: scale(1.2);\n  -webkit-transform: scale(1.2);\n  -o-transform: scale(1.2);\n  padding-left: -10%;\n  padding-right: -10%;\n}\n.hoverBgT[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%] {\n  transition: background-size inherit 1s ease-in-out;\n}\n.hoverBgT[_ngcontent-%COMP%]:hover   .rg-bgo-black[_ngcontent-%COMP%] {\n  background: radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));\n}\n#switchBgImage[_ngcontent-%COMP%] {\n  transition: all 0.5s;\n}\n.hoverBgT[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   #switchBgImage[_ngcontent-%COMP%] {\n  height: auto;\n}\n.iContainer[_ngcontent-%COMP%] {\n  background-color: rgba(250, 250, 250, 0.8);\n  width: 100%;\n  height: 100%;\n}\n.iContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(.popUpIcons) {\n  position: inherit;\n  float: left;\n  flex-basis: 20%;\n  width: auto;\n}\n.iContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotateZ(360deg) scale(0);\n  transition: transform 0.5s;\n  position: relative;\n  display: inline;\n  height: 10vh;\n  max-height: 140px;\n  margin: 2vh;\n}\n.iContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  padding: 10px;\n}\n@media only screen and (orientation: portrait), (max-width: 1800px) {\n  .iContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 5vw;\n    height: auto;\n    max-width: 100px;\n    margin: 0;\n  }\n\n  .popUpIcons[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.homeContainers.activeHomeContainer[_ngcontent-%COMP%]   .iContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotateZ(0deg) scale(1);\n}\n.hoverBgT[_ngcontent-%COMP%] {\n  animation: fadeIn 1s;\n}\n@media only screen and (orientation: portrait), (min-height: 1080px) {\n  .homeContainers[_ngcontent-%COMP%]   .iContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transform: rotateZ(0deg) scale(1);\n  }\n\n  .homeContainers[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    animation: fadeIn 1s;\n    opacity: 1;\n  }\n}\n.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.df[_ngcontent-%COMP%] {\n  display: flex;\n}\n.df[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex-basis: 33.33%;\n}\n.inline[_ngcontent-%COMP%] {\n  display: inline;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.left[_ngcontent-%COMP%] {\n  float: left;\n  text-align: left;\n}\n.right[_ngcontent-%COMP%] {\n  float: right;\n  text-align: right;\n}\n.middle[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  text-align: center;\n}\n.mg-25-auto[_ngcontent-%COMP%] {\n  margin: 25px auto;\n}\n.pd-b-15[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n.pd-t-5[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n.pd-t-b-15[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.rg-bgo-black[_ngcontent-%COMP%] {\n  background: radial-gradient(rgba(128, 128, 128, 0.2), rgba(0, 0, 0, 0.8));\n}\n.block[_ngcontent-%COMP%] {\n  display: block;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.pd-20[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.contact[_ngcontent-%COMP%]   a.middle[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.absolute[_ngcontent-%COMP%] {\n  position: absolute !important;\n}\n.relative[_ngcontent-%COMP%] {\n  position: relative !important;\n}\n.fixed[_ngcontent-%COMP%] {\n  position: fixed !important;\n}\n.open-close-container[_ngcontent-%COMP%] {\n  z-index: 0;\n  width: 60vw;\n  margin: 10%;\n  margin-top: 5%;\n  background-color: transparent;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n}\nform[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 5% auto;\n}\n.row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: black;\n}\n.row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  margin: 2%;\n  margin-top: 20px;\n  margin-bottom: 0;\n  height: 40px;\n  width: 46%;\n  font-size: 26px;\n  border: 2px solid grey;\n}\n.row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 40vw;\n  margin-top: 20px;\n  height: 140px;\n  font-size: 24px;\n  border: 2px solid grey;\n}\n.row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: 20px;\n  height: 20px;\n  font-size: 20px;\n}\n.row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: right;\n  float: right;\n  right: 0;\n  font-size: 26px;\n}\n.popUpIcons[_ngcontent-%COMP%] {\n  white-space: pre-line;\n  background-color: aliceblue;\n  margin-left: -80px;\n  border: 3px solid grey;\n  border-radius: 15px;\n  padding: 15px;\n  font-size: 1vw;\n}\n.leftImage[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  z-index: 5;\n  left: 0;\n  top: 0;\n  margin-top: 0;\n  margin-left: 0;\n  clip: rect(0, calc(100% - 50%), calc(100% - 0), 0);\n  object-fit: cover;\n  object-position: left;\n}\n.rightImage[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  z-index: 5;\n  right: 0;\n  top: 0;\n  margin-top: 0;\n  margin-right: 0;\n  object-fit: cover;\n  object-position: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0k7SUFDSSxzQkFBQTtFQUpOO0VBTUU7SUFDSSxxQkFBQTtFQUpOO0FBQ0Y7QUFPQTtFQUNJO0lBQ0ksVUFBQTtFQUxOO0VBT0U7SUFDSSxVQUFBO0VBTE47QUFDRjtBQVFBO0VBQ0ksc0JBQUE7RUFDQSxzSEFBQTtBQU5KO0FBU0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQU5KO0FBU0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQU5GO0FBUUU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQU5KO0FBUUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBTk47QUFTSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVBOO0FBU0k7RUFDRSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBUE47QUFRTTtFQUNFLGlDQUFBO0VBQ0EseUJBQUE7QUFOUjtBQWFBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBVko7QUFhQTtFQUNJLHlCQUFBO0FBVko7QUFhQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQVZKO0FBYUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFWSjtBQWFBO0VBQ0ksZUFBQTtBQVZKO0FBYUE7OztFQUdJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVZKO0FBYUE7O0VBRUksbUVBQUE7QUFWSjtBQWFBO0VBQ0kscUJBQUE7QUFWSjtBQWFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtBQVZKO0FBYUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVZKO0FBYUE7RUFDSSx5QkFBQTtBQVZKO0FBYUE7RUFDSSxjQUFBO0FBVko7QUFhQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBVko7QUFhQTtFQUNJLGdCQUFBO0FBVko7QUFhQTtFQUNJLG9CQUFBO0VBQ0EsVUFBQTtBQVZKO0FBYUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FoTU07RUFpTU4sZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsNENBQUE7RUFDQSxnQ0FBQTtBQVZKO0FBYUE7RUFDSSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtBQVZKO0FBYUE7RUFDSSx5QkFBQTtBQVZKO0FBYUE7RUFDSSxlQUFBO0FBVko7QUFhQTtFQUNJLDRCQUFBO0VBSUEsb0JBQUE7QUFWSjtBQWFBO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFWSjtBQWFBO0VBQ0ksa0RBQUE7QUFWSjtBQWFBO0VBQ0ksbUVBQUE7QUFWSjtBQWFBO0VBQ0ksb0JBQUE7QUFWSjtBQWFBO0VBQ0ksWUFBQTtBQVZKO0FBYUE7RUFDSSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBVko7QUFhQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBVko7QUFhQTtFQUtJLG1DQUFBO0VBS0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBVko7QUFhQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FBVko7QUFhQTtFQUVJO0lBQ0ksVUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLFNBQUE7RUFYTjs7RUFhRTtJQUNJLGVBQUE7RUFWTjtBQUNGO0FBYUE7RUFLSSxpQ0FBQTtBQVhKO0FBY0E7RUFDSSxvQkFBQTtBQVhKO0FBY0E7RUFFSTtJQUtJLGlDQUFBO0VBWk47O0VBY0U7SUFDSSxvQkFBQTtJQUNBLFVBQUE7RUFYTjtBQUNGO0FBY0E7RUFDSSxVQUFBO0FBWko7QUFlQTtFQUNJLGFBQUE7QUFaSjtBQWVBO0VBQ0ksa0JBQUE7QUFaSjtBQWVBO0VBQ0ksZUFBQTtBQVpKO0FBZUE7RUFDSSxlQUFBO0FBWko7QUFlQTtFQUNJLHlCQUFBO0FBWko7QUFlQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQVpKO0FBZUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFaSjtBQWVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBWko7QUFlQTtFQUNJLGlCQUFBO0FBWko7QUFlQTtFQUNJLG9CQUFBO0FBWko7QUFlQTtFQUNJLGdCQUFBO0FBWko7QUFlQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFaSjtBQWVBO0VBQ0kseUVBQUE7QUFaSjtBQWVBO0VBQ0ksY0FBQTtBQVpKO0FBZUE7RUFDSSxXQUFBO0FBWko7QUFlQTtFQUNJLGFBQUE7QUFaSjtBQWVBO0VBQ0ksMEJBQUE7QUFaSjtBQWVBO0VBQ0ksMENBOVlLO0FBa1lUO0FBZUE7RUFDSSw2QkFBQTtBQVpKO0FBZUE7RUFDSSw2QkFBQTtBQVpKO0FBZUE7RUFDSSwwQkFBQTtBQVpKO0FBZUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUFaSjtBQWVBO0VBQ0ksYUFBQTtBQVpKO0FBZUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQVpKO0FBZUE7RUFDSSxZQUFBO0FBWko7QUFlQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQVpKO0FBZUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBWko7QUFlQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVpKO0FBZUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBWko7QUFlQTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQVpKO0FBZ0NBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0RBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBN0JKO0FBZ0NBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQTdCSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkT0JTZXZlbjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4kT0JFaWdodDogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4kT0JUd286IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJE9HVHdvOiByZ2JhKDAsIDEwMCwgMjAsIDAuOCk7XHJcbiRPV0ZpdmU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuQGtleWZyYW1lcyBjb250YWluZXJIb21lSG92ZXIge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1dnc7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDV2dztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2JvZHktaW1hZ2VzL2JnLW1pbi5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuZGl2I21vZGFse1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogNTA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmIC5tb2RhbC1jb250ZW50e1xyXG4gICAgei1pbmRleDogNTU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICYgaDIsIGgze1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICYgKntcclxuICAgICAgei1pbmRleDogNjA7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgJiBidXR0b257XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3MDgxNTg3O1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBib3gtc2hhZG93OiAwIDBweCAxMHB4IHdoaXRlc21va2U7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3MDgxNjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbm5hdiB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxubmF2Pioge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkT0JUd28sICRPQkVpZ2h0KTtcclxufVxyXG5cclxubGk+KiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmxpIGEsXHJcbi5kcm9wYnRuLFxyXG5saSBmYS1pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbmxpOmhvdmVyLFxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRPQkVpZ2h0LCAkT0JFaWdodCk7XHJcbn1cclxuXHJcbmxpLmRyb3Bkb3duIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCAkT0JUd287XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkMWQxO1xyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5ob21lQ29udGFpbmVycyB7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG59XHJcblxyXG4uaG9tZUNvbnRhaW5lcnMgZGl2IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5ob21lQ29udGFpbmVycy5hY3RpdmVIb21lQ29udGFpbmVyPmRpdiB7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5ob21lQ29udGFpbmVycyBidXR0b24ge1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRPQkVpZ2h0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaGFkb3c6IDNweCAxcHggcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjQpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmhvbWVDb250YWluZXJzIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgwLCA4MCwgODAsIDAuOCk7XHJcbiAgICBwYWRkaW5nOiA1cHggMjVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmhvbWVDb250YWluZXJzIHAge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmhvbWVDb250YWluZXJzIGEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uaG92ZXJCZ1Qge1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC41cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC41cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG59XHJcblxyXG4uaG92ZXJCZ1Q6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC0xMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAtMTAlO1xyXG59XHJcblxyXG4uaG92ZXJCZ1Q6aG92ZXIgZGl2IHtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSBpbmhlcml0IDFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uaG92ZXJCZ1Q6aG92ZXIgLnJnLWJnby1ibGFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoJE9CU2V2ZW4sICRPQlNldmVuKTtcclxufVxyXG5cclxuI3N3aXRjaEJnSW1hZ2Uge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxufVxyXG5cclxuLmhvdmVyQmdUIGJ1dHRvbjpob3ZlciAjc3dpdGNoQmdJbWFnZSB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5pQ29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC44KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaUNvbnRhaW5lciBkaXY6bm90KC5wb3BVcEljb25zKSB7XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZmxleC1iYXNpczogMjAlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5pQ29udGFpbmVyIGltZyB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHNjYWxlKDApO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSBzY2FsZSgwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSBzY2FsZSgwKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHNjYWxlKDApO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZykgc2NhbGUoMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogLW1zLXRyYW5zaXRpb24gMC41cztcclxuICAgIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNDBweDtcclxuICAgIG1hcmdpbjogMnZoO1xyXG59XHJcblxyXG4uaUNvbnRhaW5lciBpbWc6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSxcclxuKG1heC13aWR0aDogMTgwMHB4KSB7XHJcbiAgICAuaUNvbnRhaW5lciBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA1dnc7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLnBvcFVwSWNvbnMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuLmhvbWVDb250YWluZXJzLmFjdGl2ZUhvbWVDb250YWluZXIgLmlDb250YWluZXIgaW1nIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpIHNjYWxlKDEpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooMGRlZykgc2NhbGUoMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpIHNjYWxlKDEpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpIHNjYWxlKDEpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpIHNjYWxlKDEpO1xyXG59XHJcblxyXG4uaG92ZXJCZ1Qge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksXHJcbihtaW4taGVpZ2h0OiAxMDgwcHgpIHtcclxuICAgIC5ob21lQ29udGFpbmVycyAuaUNvbnRhaW5lciBpbWcge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpIHNjYWxlKDEpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpIHNjYWxlKDEpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooMGRlZykgc2NhbGUoMSk7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpIHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKSBzY2FsZSgxKTtcclxuICAgIH1cclxuICAgIC5ob21lQ29udGFpbmVycz5kaXYge1xyXG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmRmIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5kZj4qIHtcclxuICAgIGZsZXgtYmFzaXM6IDMzLjMzJTtcclxufVxyXG5cclxuLmlubGluZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi51cHBlcmNhc2Uge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmxlZnQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5taWRkbGUge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZy0yNS1hdXRvIHtcclxuICAgIG1hcmdpbjogMjVweCBhdXRvO1xyXG59XHJcblxyXG4ucGQtYi0xNSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnBkLXQtNSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4ucGQtdC1iLTE1IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5yZy1iZ28tYmxhY2sge1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yKSwgJE9CRWlnaHQpO1xyXG59XHJcblxyXG4uYmxvY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi53LTEwMCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBkLTIwIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi51bmRlcmxpbmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5jb250YWN0IGEubWlkZGxlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRPV0ZpdmU7XHJcbn1cclxuXHJcbi5hYnNvbHV0ZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlbGF0aXZlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZml4ZWQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vcGVuLWNsb3NlLWNvbnRhaW5lciB7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgd2lkdGg6IDYwdnc7XHJcbiAgICBtYXJnaW46IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuZm9ybSAucm93IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDUlIGF1dG87XHJcbn1cclxuXHJcbi5yb3cgcCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5yb3cgZGl2IGlucHV0IHtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDYlO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxufVxyXG5cclxuLnJvdyBkaXYgdGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XHJcbn1cclxuXHJcbi5yb3cgZGl2IGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ucm93IGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG4ucG9wVXBJY29ucyB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTgwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDF2dztcclxufVxyXG5cclxuLy9jYXB0dXJlIHNlcnZpY2VcclxuLy8gZGl2LmNhcHR1cmVCb3gge1xyXG4vLyAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4vLyAgICAgd2lkdGg6IDEwMHZ3O1xyXG4vLyAgICAgaGVpZ2h0OiAxMDB2aDtcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICB6LWluZGV4OiA1NTtcclxuLy8gICAgIGxlZnQ6IDA7XHJcbi8vICAgICB0b3A6IDA7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuLy8gICAgICYgaW1nIHtcclxuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi5sZWZ0SW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgY2xpcDogcmVjdCgwLCBjYWxjKDEwMCUgLSA1MCUpLCBjYWxjKDEwMCUgLSAwKSwgMCk7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogbGVmdDtcclxufVxyXG5cclxuLnJpZ2h0SW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogcmlnaHQ7XHJcbn1cclxuIl19 */"], data: { animation: [
            //triggering first the overlay and second the div inside
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openCloseOverlay', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    display: 'block',
                    height: '65vh',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    display: 'none',
                    height: '0vh'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => closed,closed => open', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openClose', [
                //state if open
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    height: '65vh',
                    opacity: 1,
                    backgroundColor: 'white',
                    zIndex: 10,
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    height: '0',
                    opacity: 0,
                    backgroundColor: 'transparent',
                    zIndex: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => closed, closed => open', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s')
                ])
            ]),
        ] } });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "twK/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var ngx_capture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-capture */ "6RAO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_gift_gift_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/gift/gift.component */ "EF5B");










const _c0 = ["screen"];
function AppComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Sikeres m\u0171velet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_div_3_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r3.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Bez\u00E1r\u00E1s");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AppComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Sikertelen m\u0171velet! :(");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Ellen\u0151rizd le k\u00E9rlek a megadott adatokat.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_div_3_div_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r5.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Bez\u00E1r\u00E1s");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_div_3_div_1_Template, 8, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AppComponent_div_3_div_2_Template, 11, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.modalContent === "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.modalContent === "error");
} }
/*
@Directive({selector: 'a[click]'})
export class CountClicks {
  numberOfClicks = 0;
  @HostListener('click', ['$event.target']) onClick(btn:Element) {
    console.log("button", btn, "number of clicks:", this.numberOfClicks++);
  }
}*/
class AppComponent {
    constructor(library, captureService, _router) {
        this.captureService = captureService;
        this._router = _router;
        this.showModal = false;
        this.modalContent = null;
        this.img = '';
        this.title = 'Gifting';
        this.navItems = [
            { orientation: 'left', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faHome"], button: 'home', value: 'home', hasChildren: false },
            { orientation: 'right', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faEnvelope"], button: 'contact', value: 'contact', hasChildren: false },
            { orientation: 'right', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faInfo"], button: 'about', value: 'about', hasChildren: false },
            { orientation: 'right', icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUser"], button: 'portfolio', value: 'portfolio', hasChildren: false },
        ];
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["far"]);
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faHome"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faFilm"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUser"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faInfo"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faEnvelope"]);
    }
    //capture
    Capture() {
        this.img = '';
        setTimeout(() => {
            this.captureService.getImage(this.screen.nativeElement, true)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((img) => {
                this.img = img;
            })).subscribe();
            //this._router.navigateByUrl('void');
        }, 2500);
    }
    ScrollTo(el) {
        let elem = document.getElementById(el);
        if (elem) {
            elem.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }
    closeModal() {
        this.showModal = false;
    }
    catchMessage(message) {
        this.modalContent = message;
        this.showModal = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconLibrary"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_capture__WEBPACK_IMPORTED_MODULE_6__["NgxCaptureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.screen = _t.first);
    } }, decls: 5, vars: 2, consts: [["id", "modal", "class", "modal", 4, "ngIf"], [3, "messageOut"], ["id", "modal", 1, "modal"], ["class", "modal-content", 4, "ngIf"], [1, "modal-content"], ["src", "https://img.freepik.com/free-vector/funny-santa-claus-celebrating-christmas_74855-962.jpg?w=2000"], ["type", "button", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AppComponent_div_3_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "app-gift", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("messageOut", function AppComponent_Template_app_gift_messageOut_4_listener($event) { return ctx.catchMessage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showModal && ctx.modalContent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_gift_gift_component__WEBPACK_IMPORTED_MODULE_9__["GiftComponent"]], styles: ["@keyframes containerHomeHover {\n  0% {\n    background-size: cover;\n  }\n  100% {\n    background-size: auto;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\nbody[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  padding-right: 5vw;\n  padding-left: 5vw;\n  position: relative;\n  background-image: url('bg-min.jpg');\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  border-radius: 5px;\n  overflow: hidden;\n  padding-bottom: 50px;\n}\ndiv#modal[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 50;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\ndiv#modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  z-index: 55;\n  width: 50%;\n  height: 60%;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n}\ndiv#modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], div#modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  align-self: center;\n  justify-content: center;\n}\ndiv#modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  z-index: 60;\n  max-width: 100%;\n  max-height: 100%;\n  position: relative;\n}\ndiv#modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background-color: #d7081587;\n  margin-top: 22px;\n  padding: 20px 10px;\n  transition: all 0.2s ease-in-out;\n  font-weight: bold;\n  font-size: 20px;\n  color: white;\n}\ndiv#modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0px 10px whitesmoke;\n  background-color: #d70816;\n}\nnav[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 90%;\n  padding: 0;\n  margin: 0;\n  position: fixed;\n  top: 0;\n  z-index: 5;\n  background-color: white;\n}\nnav[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\na[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 400;\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  height: 60px;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));\n}\nli[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dropbtn[_ngcontent-%COMP%], li[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 16px 16px;\n  text-decoration: none;\n  font-size: 24px;\n  font-weight: 600;\n}\nli[_ngcontent-%COMP%]:hover, .dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));\n}\nli.dropdown[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #d1d1d1;\n}\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n.homeContainers[_ngcontent-%COMP%] {\n  height: 600px;\n  padding: 10%;\n}\n.homeContainers[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.homeContainers.activeHomeContainer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  animation: fadeIn 1s;\n  opacity: 1;\n}\n.homeContainers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n  font-size: 26px;\n  color: white;\n  font-weight: bold;\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 0;\n  border: 0;\n  box-shadow: 3px 1px rgba(200, 200, 200, 0.4);\n  transition: all 0.5s ease-in-out;\n}\n.homeContainers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(80, 80, 80, 0.8);\n  padding: 5px 25px;\n  text-decoration: underline;\n  transition: all 0.5s ease-in-out;\n}\n.homeContainers[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.homeContainers[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.hoverBgT[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  transition: all 0.5s;\n}\n.hoverBgT[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n  -ms-transform: scale(1.2);\n  -moz-transform: scale(1.2);\n  -webkit-transform: scale(1.2);\n  -o-transform: scale(1.2);\n  padding-left: -10%;\n  padding-right: -10%;\n}\n.hoverBgT[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%] {\n  transition: background-size inherit 1s ease-in-out;\n}\n.hoverBgT[_ngcontent-%COMP%]:hover   .rg-bgo-black[_ngcontent-%COMP%] {\n  background: radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));\n}\n#switchBgImage[_ngcontent-%COMP%] {\n  transition: all 0.5s;\n}\n.hoverBgT[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   #switchBgImage[_ngcontent-%COMP%] {\n  height: auto;\n}\n.iContainer[_ngcontent-%COMP%] {\n  background-color: rgba(250, 250, 250, 0.8);\n  width: 100%;\n  height: 100%;\n}\n.iContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(.popUpIcons) {\n  position: inherit;\n  float: left;\n  flex-basis: 20%;\n  width: auto;\n}\n.iContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotateZ(360deg) scale(0);\n  transition: transform 0.5s;\n  position: relative;\n  display: inline;\n  height: 10vh;\n  max-height: 140px;\n  margin: 2vh;\n}\n.iContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  padding: 10px;\n}\n@media only screen and (orientation: portrait), (max-width: 1800px) {\n  .iContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 5vw;\n    height: auto;\n    max-width: 100px;\n    margin: 0;\n  }\n\n  .popUpIcons[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.homeContainers.activeHomeContainer[_ngcontent-%COMP%]   .iContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotateZ(0deg) scale(1);\n}\n.hoverBgT[_ngcontent-%COMP%] {\n  animation: fadeIn 1s;\n}\n@media only screen and (orientation: portrait), (min-height: 1080px) {\n  .homeContainers[_ngcontent-%COMP%]   .iContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transform: rotateZ(0deg) scale(1);\n  }\n\n  .homeContainers[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    animation: fadeIn 1s;\n    opacity: 1;\n  }\n}\n.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.df[_ngcontent-%COMP%] {\n  display: flex;\n}\n.df[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex-basis: 33.33%;\n}\n.inline[_ngcontent-%COMP%] {\n  display: inline;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.left[_ngcontent-%COMP%] {\n  float: left;\n  text-align: left;\n}\n.right[_ngcontent-%COMP%] {\n  float: right;\n  text-align: right;\n}\n.middle[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  text-align: center;\n}\n.mg-25-auto[_ngcontent-%COMP%] {\n  margin: 25px auto;\n}\n.pd-b-15[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n.pd-t-5[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n.pd-t-b-15[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.rg-bgo-black[_ngcontent-%COMP%] {\n  background: radial-gradient(rgba(128, 128, 128, 0.2), rgba(0, 0, 0, 0.8));\n}\n.block[_ngcontent-%COMP%] {\n  display: block;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.pd-20[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.contact[_ngcontent-%COMP%]   a.middle[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.absolute[_ngcontent-%COMP%] {\n  position: absolute !important;\n}\n.relative[_ngcontent-%COMP%] {\n  position: relative !important;\n}\n.fixed[_ngcontent-%COMP%] {\n  position: fixed !important;\n}\n.open-close-container[_ngcontent-%COMP%] {\n  z-index: 0;\n  width: 60vw;\n  margin: 10%;\n  margin-top: 5%;\n  background-color: transparent;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n}\nform[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 5% auto;\n}\n.row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: black;\n}\n.row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  margin: 2%;\n  margin-top: 20px;\n  margin-bottom: 0;\n  height: 40px;\n  width: 46%;\n  font-size: 26px;\n  border: 2px solid grey;\n}\n.row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 40vw;\n  margin-top: 20px;\n  height: 140px;\n  font-size: 24px;\n  border: 2px solid grey;\n}\n.row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: 20px;\n  height: 20px;\n  font-size: 20px;\n}\n.row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: right;\n  float: right;\n  right: 0;\n  font-size: 26px;\n}\n.popUpIcons[_ngcontent-%COMP%] {\n  white-space: pre-line;\n  background-color: aliceblue;\n  margin-left: -80px;\n  border: 3px solid grey;\n  border-radius: 15px;\n  padding: 15px;\n  font-size: 1vw;\n}\n.leftImage[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  z-index: 5;\n  left: 0;\n  top: 0;\n  margin-top: 0;\n  margin-left: 0;\n  clip: rect(0, calc(100% - 50%), calc(100% - 0), 0);\n  object-fit: cover;\n  object-position: left;\n}\n.rightImage[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  z-index: 5;\n  right: 0;\n  top: 0;\n  margin-top: 0;\n  margin-right: 0;\n  object-fit: cover;\n  object-position: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0k7SUFDSSxzQkFBQTtFQUpOO0VBTUU7SUFDSSxxQkFBQTtFQUpOO0FBQ0Y7QUFPQTtFQUNJO0lBQ0ksVUFBQTtFQUxOO0VBT0U7SUFDSSxVQUFBO0VBTE47QUFDRjtBQVFBO0VBQ0ksc0JBQUE7RUFDQSxzSEFBQTtBQU5KO0FBU0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQU5KO0FBU0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQU5GO0FBUUU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQU5KO0FBUUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBTk47QUFTSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVBOO0FBU0k7RUFDRSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBUE47QUFRTTtFQUNFLGlDQUFBO0VBQ0EseUJBQUE7QUFOUjtBQWFBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBVko7QUFhQTtFQUNJLHlCQUFBO0FBVko7QUFhQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQVZKO0FBYUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7QUFWSjtBQWFBO0VBQ0ksZUFBQTtBQVZKO0FBYUE7OztFQUdJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVZKO0FBYUE7O0VBRUksbUVBQUE7QUFWSjtBQWFBO0VBQ0kscUJBQUE7QUFWSjtBQWFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtBQVZKO0FBYUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVZKO0FBYUE7RUFDSSx5QkFBQTtBQVZKO0FBYUE7RUFDSSxjQUFBO0FBVko7QUFhQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBVko7QUFhQTtFQUNJLGdCQUFBO0FBVko7QUFhQTtFQUNJLG9CQUFBO0VBQ0EsVUFBQTtBQVZKO0FBYUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FoTU07RUFpTU4sZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsNENBQUE7RUFDQSxnQ0FBQTtBQVZKO0FBYUE7RUFDSSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtBQVZKO0FBYUE7RUFDSSx5QkFBQTtBQVZKO0FBYUE7RUFDSSxlQUFBO0FBVko7QUFhQTtFQUNJLDRCQUFBO0VBSUEsb0JBQUE7QUFWSjtBQWFBO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFWSjtBQWFBO0VBQ0ksa0RBQUE7QUFWSjtBQWFBO0VBQ0ksbUVBQUE7QUFWSjtBQWFBO0VBQ0ksb0JBQUE7QUFWSjtBQWFBO0VBQ0ksWUFBQTtBQVZKO0FBYUE7RUFDSSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBVko7QUFhQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBVko7QUFhQTtFQUtJLG1DQUFBO0VBS0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBVko7QUFhQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FBVko7QUFhQTtFQUVJO0lBQ0ksVUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLFNBQUE7RUFYTjs7RUFhRTtJQUNJLGVBQUE7RUFWTjtBQUNGO0FBYUE7RUFLSSxpQ0FBQTtBQVhKO0FBY0E7RUFDSSxvQkFBQTtBQVhKO0FBY0E7RUFFSTtJQUtJLGlDQUFBO0VBWk47O0VBY0U7SUFDSSxvQkFBQTtJQUNBLFVBQUE7RUFYTjtBQUNGO0FBY0E7RUFDSSxVQUFBO0FBWko7QUFlQTtFQUNJLGFBQUE7QUFaSjtBQWVBO0VBQ0ksa0JBQUE7QUFaSjtBQWVBO0VBQ0ksZUFBQTtBQVpKO0FBZUE7RUFDSSxlQUFBO0FBWko7QUFlQTtFQUNJLHlCQUFBO0FBWko7QUFlQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQVpKO0FBZUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFaSjtBQWVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBWko7QUFlQTtFQUNJLGlCQUFBO0FBWko7QUFlQTtFQUNJLG9CQUFBO0FBWko7QUFlQTtFQUNJLGdCQUFBO0FBWko7QUFlQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFaSjtBQWVBO0VBQ0kseUVBQUE7QUFaSjtBQWVBO0VBQ0ksY0FBQTtBQVpKO0FBZUE7RUFDSSxXQUFBO0FBWko7QUFlQTtFQUNJLGFBQUE7QUFaSjtBQWVBO0VBQ0ksMEJBQUE7QUFaSjtBQWVBO0VBQ0ksMENBOVlLO0FBa1lUO0FBZUE7RUFDSSw2QkFBQTtBQVpKO0FBZUE7RUFDSSw2QkFBQTtBQVpKO0FBZUE7RUFDSSwwQkFBQTtBQVpKO0FBZUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUFaSjtBQWVBO0VBQ0ksYUFBQTtBQVpKO0FBZUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQVpKO0FBZUE7RUFDSSxZQUFBO0FBWko7QUFlQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQVpKO0FBZUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBWko7QUFlQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVpKO0FBZUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBWko7QUFlQTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQVpKO0FBZ0NBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0RBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBN0JKO0FBZ0NBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQTdCSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkT0JTZXZlbjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4kT0JFaWdodDogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4kT0JUd286IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJE9HVHdvOiByZ2JhKDAsIDEwMCwgMjAsIDAuOCk7XHJcbiRPV0ZpdmU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuQGtleWZyYW1lcyBjb250YWluZXJIb21lSG92ZXIge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1dnc7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDV2dztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2JvZHktaW1hZ2VzL2JnLW1pbi5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuZGl2I21vZGFse1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogNTA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmIC5tb2RhbC1jb250ZW50e1xyXG4gICAgei1pbmRleDogNTU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICYgaDIsIGgze1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICYgKntcclxuICAgICAgei1pbmRleDogNjA7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgJiBidXR0b257XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3MDgxNTg3O1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBib3gtc2hhZG93OiAwIDBweCAxMHB4IHdoaXRlc21va2U7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3MDgxNjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbm5hdiB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxubmF2Pioge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkT0JUd28sICRPQkVpZ2h0KTtcclxufVxyXG5cclxubGk+KiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmxpIGEsXHJcbi5kcm9wYnRuLFxyXG5saSBmYS1pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbmxpOmhvdmVyLFxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRPQkVpZ2h0LCAkT0JFaWdodCk7XHJcbn1cclxuXHJcbmxpLmRyb3Bkb3duIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCAkT0JUd287XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkMWQxO1xyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5ob21lQ29udGFpbmVycyB7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG59XHJcblxyXG4uaG9tZUNvbnRhaW5lcnMgZGl2IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5ob21lQ29udGFpbmVycy5hY3RpdmVIb21lQ29udGFpbmVyPmRpdiB7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5ob21lQ29udGFpbmVycyBidXR0b24ge1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRPQkVpZ2h0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaGFkb3c6IDNweCAxcHggcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjQpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmhvbWVDb250YWluZXJzIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgwLCA4MCwgODAsIDAuOCk7XHJcbiAgICBwYWRkaW5nOiA1cHggMjVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmhvbWVDb250YWluZXJzIHAge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmhvbWVDb250YWluZXJzIGEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uaG92ZXJCZ1Qge1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC41cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC41cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG59XHJcblxyXG4uaG92ZXJCZ1Q6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC0xMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAtMTAlO1xyXG59XHJcblxyXG4uaG92ZXJCZ1Q6aG92ZXIgZGl2IHtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSBpbmhlcml0IDFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uaG92ZXJCZ1Q6aG92ZXIgLnJnLWJnby1ibGFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoJE9CU2V2ZW4sICRPQlNldmVuKTtcclxufVxyXG5cclxuI3N3aXRjaEJnSW1hZ2Uge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxufVxyXG5cclxuLmhvdmVyQmdUIGJ1dHRvbjpob3ZlciAjc3dpdGNoQmdJbWFnZSB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5pQ29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC44KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaUNvbnRhaW5lciBkaXY6bm90KC5wb3BVcEljb25zKSB7XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZmxleC1iYXNpczogMjAlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5pQ29udGFpbmVyIGltZyB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHNjYWxlKDApO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSBzY2FsZSgwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSBzY2FsZSgwKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHNjYWxlKDApO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZykgc2NhbGUoMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogLW1zLXRyYW5zaXRpb24gMC41cztcclxuICAgIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNDBweDtcclxuICAgIG1hcmdpbjogMnZoO1xyXG59XHJcblxyXG4uaUNvbnRhaW5lciBpbWc6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSxcclxuKG1heC13aWR0aDogMTgwMHB4KSB7XHJcbiAgICAuaUNvbnRhaW5lciBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA1dnc7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLnBvcFVwSWNvbnMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuLmhvbWVDb250YWluZXJzLmFjdGl2ZUhvbWVDb250YWluZXIgLmlDb250YWluZXIgaW1nIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpIHNjYWxlKDEpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooMGRlZykgc2NhbGUoMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpIHNjYWxlKDEpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpIHNjYWxlKDEpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpIHNjYWxlKDEpO1xyXG59XHJcblxyXG4uaG92ZXJCZ1Qge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksXHJcbihtaW4taGVpZ2h0OiAxMDgwcHgpIHtcclxuICAgIC5ob21lQ29udGFpbmVycyAuaUNvbnRhaW5lciBpbWcge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpIHNjYWxlKDEpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpIHNjYWxlKDEpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooMGRlZykgc2NhbGUoMSk7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpIHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKSBzY2FsZSgxKTtcclxuICAgIH1cclxuICAgIC5ob21lQ29udGFpbmVycz5kaXYge1xyXG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmRmIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5kZj4qIHtcclxuICAgIGZsZXgtYmFzaXM6IDMzLjMzJTtcclxufVxyXG5cclxuLmlubGluZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi51cHBlcmNhc2Uge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmxlZnQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5taWRkbGUge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZy0yNS1hdXRvIHtcclxuICAgIG1hcmdpbjogMjVweCBhdXRvO1xyXG59XHJcblxyXG4ucGQtYi0xNSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnBkLXQtNSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4ucGQtdC1iLTE1IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5yZy1iZ28tYmxhY2sge1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yKSwgJE9CRWlnaHQpO1xyXG59XHJcblxyXG4uYmxvY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi53LTEwMCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBkLTIwIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi51bmRlcmxpbmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5jb250YWN0IGEubWlkZGxlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRPV0ZpdmU7XHJcbn1cclxuXHJcbi5hYnNvbHV0ZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlbGF0aXZlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZml4ZWQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vcGVuLWNsb3NlLWNvbnRhaW5lciB7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgd2lkdGg6IDYwdnc7XHJcbiAgICBtYXJnaW46IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuZm9ybSAucm93IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDUlIGF1dG87XHJcbn1cclxuXHJcbi5yb3cgcCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5yb3cgZGl2IGlucHV0IHtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDYlO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxufVxyXG5cclxuLnJvdyBkaXYgdGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XHJcbn1cclxuXHJcbi5yb3cgZGl2IGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ucm93IGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG4ucG9wVXBJY29ucyB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTgwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDF2dztcclxufVxyXG5cclxuLy9jYXB0dXJlIHNlcnZpY2VcclxuLy8gZGl2LmNhcHR1cmVCb3gge1xyXG4vLyAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4vLyAgICAgd2lkdGg6IDEwMHZ3O1xyXG4vLyAgICAgaGVpZ2h0OiAxMDB2aDtcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICB6LWluZGV4OiA1NTtcclxuLy8gICAgIGxlZnQ6IDA7XHJcbi8vICAgICB0b3A6IDA7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuLy8gICAgICYgaW1nIHtcclxuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi5sZWZ0SW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgY2xpcDogcmVjdCgwLCBjYWxjKDEwMCUgLSA1MCUpLCBjYWxjKDEwMCUgLSAwKSwgMCk7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogbGVmdDtcclxufVxyXG5cclxuLnJpZ2h0SW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogcmlnaHQ7XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('w-50', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('w-full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    width: '50%'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('w-0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    width: '0'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => w-0', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s ease-in-out')
                ])
            ])
        ] } });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _app_body_app_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-body/app.body */ "ElGD");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_capture__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-capture */ "6RAO");
/* harmony import */ var _components_void_void_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/void/void.component */ "vD0B");
/* harmony import */ var _components_gift_gift_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/gift/gift.component */ "EF5B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _app_body_app_body__WEBPACK_IMPORTED_MODULE_4__["AppBodyComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ngx_capture__WEBPACK_IMPORTED_MODULE_8__["NgxCaptureModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _app_body_app_body__WEBPACK_IMPORTED_MODULE_4__["AppBodyComponent"],
        _components_void_void_component__WEBPACK_IMPORTED_MODULE_9__["VoidComponent"],
        _components_gift_gift_component__WEBPACK_IMPORTED_MODULE_10__["GiftComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        ngx_capture__WEBPACK_IMPORTED_MODULE_8__["NgxCaptureModule"]] }); })();


/***/ }),

/***/ "vD0B":
/*!***************************************************!*\
  !*** ./src/app/components/void/void.component.ts ***!
  \***************************************************/
/*! exports provided: VoidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoidComponent", function() { return VoidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class VoidComponent {
    constructor() { }
    ngOnInit() {
    }
}
VoidComponent.ɵfac = function VoidComponent_Factory(t) { return new (t || VoidComponent)(); };
VoidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoidComponent, selectors: [["app-void"]], decls: 2, vars: 0, template: function VoidComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "void works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b2lkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_void_void_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/void/void.component */ "vD0B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: 'void', component: _components_void_void_component__WEBPACK_IMPORTED_MODULE_1__["VoidComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
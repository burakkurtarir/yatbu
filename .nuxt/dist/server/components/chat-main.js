exports.ids = [10,4,5,6,7,8,9];
exports.modules = {

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(184);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("426cde60", content, true, context)
};

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/components/messages/left.vue?vue&type=template&id=32fda4ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"left"},[_vm._ssrNode("<p>","</p>",[(_vm.showSettings)?_c('m-icon',{staticStyle:{"float":"right"},attrs:{"cursor":""}},[_vm._v("more_horiz")]):_vm._e(),_vm._ssrNode("\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga eveniet sed quam rerum qui animi error laboriosam. Omnis consectetur magni quibusdam reprehenderit qui magnam ad modi, atque quia eaque.\n    ")],2),_vm._ssrNode(" <div>  Gürhan Arslan - 17:21  </div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/chat/components/messages/left.vue?vue&type=template&id=32fda4ac&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/components/messages/left.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var leftvue_type_script_lang_js_ = ({
  data() {
    return {
      showSettings: false
    };
  }

});
// CONCATENATED MODULE: ./components/chat/components/messages/left.vue?vue&type=script&lang=js&
 /* harmony default export */ var messages_leftvue_type_script_lang_js_ = (leftvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/chat/components/messages/left.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  messages_leftvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "76fd6fe8"
  
)

/* harmony default export */ var left = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/components/messages/right.vue?vue&type=template&id=2dff5872&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"right"},[_vm._ssrNode("<p>","</p>",[(_vm.showSettings)?_c('m-icon',{staticStyle:{"float":"right"},attrs:{"cursor":""}},[_vm._v("more_horiz")]):_vm._e(),_vm._ssrNode(" <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga eveniet sed quam rerum qui animi error laboriosam. Omnis consectetur magni quibusdam reprehenderit qui magnam ad modi, atque quia eaque.</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('m-icon',{attrs:{"color":"rgb(80, 164, 213)"}},[_vm._v("done_all")]),_vm._ssrNode(" Okundu - 17:21 - Siz")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/chat/components/messages/right.vue?vue&type=template&id=2dff5872&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/components/messages/right.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var rightvue_type_script_lang_js_ = ({
  data() {
    return {
      showSettings: false
    };
  }

});
// CONCATENATED MODULE: ./components/chat/components/messages/right.vue?vue&type=script&lang=js&
 /* harmony default export */ var messages_rightvue_type_script_lang_js_ = (rightvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/chat/components/messages/right.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  messages_rightvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "08ecd367"
  
)

/* harmony default export */ var right = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/components/messages/center.vue?vue&type=template&id=1374de26&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"center"},[_vm._ssrNode("<p>","</p>",[_c('m-icon',{attrs:{"color":"red"}},[_vm._v("report_problem")]),_vm._ssrNode(" <span class=\"ml-03\">Lorem ipsum dolor sit amet.</span>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/chat/components/messages/center.vue?vue&type=template&id=1374de26&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/components/messages/center.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var centervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/chat/components/messages/center.vue?vue&type=script&lang=js&
 /* harmony default export */ var messages_centervue_type_script_lang_js_ = (centervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/chat/components/messages/center.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  messages_centervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a173d3cc"
  
)

/* harmony default export */ var center = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/main.vue?vue&type=template&id=777ce1c9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"chat-company"},[_c('chatHeader'),_vm._ssrNode(" "),_c('chatBody'),_vm._ssrNode(" "),_c('chatFooter')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/chat/main.vue?vue&type=template&id=777ce1c9&

// EXTERNAL MODULE: ./components/chat/components/header.vue + 4 modules
var header = __webpack_require__(178);

// EXTERNAL MODULE: ./components/chat/components/body.vue + 4 modules
var body = __webpack_require__(179);

// EXTERNAL MODULE: ./components/chat/components/footer.vue + 4 modules
var footer = __webpack_require__(180);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//



/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  components: {
    chatHeader: header["default"],
    chatBody: body["default"],
    chatFooter: footer["default"]
  }
});
// CONCATENATED MODULE: ./components/chat/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var chat_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/chat/main.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(183)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  chat_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "524f7cd8"
  
)

/* harmony default export */ var main = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/components/header.vue?vue&type=template&id=1fc3d7ca&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"chat-company-header"},[_vm._ssrNode("<div class=\"chat-company-header-left\">","</div>",[_c('m-icon',{attrs:{"cursor":"","size":"48"}},[_vm._v("chevron_left")]),_vm._ssrNode(" "),_c('er-avatar',{staticClass:"ml-03"}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"chat-company-header-owner\">","</div>",[_vm._ssrNode("<h5 class=\"text-white\"><strong>Gürhan Arslan</strong></h5> "),_vm._ssrNode("<div class=\"d-flex align-center\">","</div>",[_c('m-icon',{attrs:{"color":"white"}},[_vm._v("radio_button_checked")]),_vm._ssrNode(" <small class=\"ml-03\">Çevrimiçi</small>")],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('m-icon',{attrs:{"size":"32","cursor":""}},[_vm._v("more_horiz")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/chat/components/header.vue?vue&type=template&id=1fc3d7ca&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/components/header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var headervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/chat/components/header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_headervue_type_script_lang_js_ = (headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/chat/components/header.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "22445b4a"
  
)

/* harmony default export */ var header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/components/body.vue?vue&type=template&id=fe913b66&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"chat-company-body"},[_vm._ssrNode("<div class=\"message\">","</div>",[_c('left-app'),_vm._ssrNode(" "),_c('center-app'),_vm._ssrNode(" "),_c('right-app'),_vm._ssrNode(" "),_c('left-app'),_vm._ssrNode(" "),_c('center-app'),_vm._ssrNode(" "),_c('right-app'),_vm._ssrNode(" "),_c('left-app'),_vm._ssrNode(" "),_c('center-app'),_vm._ssrNode(" "),_c('right-app')],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/chat/components/body.vue?vue&type=template&id=fe913b66&

// EXTERNAL MODULE: ./components/chat/components/messages/left.vue + 4 modules
var left = __webpack_require__(174);

// EXTERNAL MODULE: ./components/chat/components/messages/right.vue + 4 modules
var right = __webpack_require__(175);

// EXTERNAL MODULE: ./components/chat/components/messages/center.vue + 4 modules
var center = __webpack_require__(176);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/components/body.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var bodyvue_type_script_lang_js_ = ({
  components: {
    leftApp: left["default"],
    centerApp: center["default"],
    rightApp: right["default"]
  }
});
// CONCATENATED MODULE: ./components/chat/components/body.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_bodyvue_type_script_lang_js_ = (bodyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/chat/components/body.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_bodyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2e670c70"
  
)

/* harmony default export */ var body = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/components/footer.vue?vue&type=template&id=7580b262&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"chat-company-footer"},[_vm._ssrNode("<textarea"+(_vm._ssrAttr("placeholder",_vm.$t('chat.textarea.placeholder')))+" name id>"+_vm._ssrEscape(_vm._s(_vm.message))+"</textarea>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/chat/components/footer.vue?vue&type=template&id=7580b262&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/components/footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var footervue_type_script_lang_js_ = ({
  data() {
    return {
      message: ""
    };
  },

  methods: {
    pressedLetter(e) {
      console.log(e);

      if (e.keyCode == 13) {
        e.preventDefault();
        this.message = "";
      }
    }

  }
});
// CONCATENATED MODULE: ./components/chat/components/footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_footervue_type_script_lang_js_ = (footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/chat/components/footer.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "64a9232e"
  
)

/* harmony default export */ var footer = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".chat-company{width:100%;height:100vh;background-color:#f8fdff}.chat-company-header{border-radius:0 0 2rem 2rem;color:#fff;margin-bottom:10px;background-color:#3183e6;width:100%!important;display:flex;align-items:center;box-shadow:2px 1px 5px 2px rgba(0,119,188,.564);justify-content:space-between;padding:0 30px}.chat-company-header p{color:#fff}.chat-company-header-left{display:flex;align-items:center}@media screen and (min-width:1365px){.chat-company-header{height:10vh}}@media screen and (max-width:700px){.chat-company-header{height:15vh}}@media screen and (max-width:1364px){.chat-company-header{height:12vh}}.chat-company-header-owner{margin-left:17px}@media screen and (max-width:700px){.chat-company-header-owner h3{white-space:nowrap;width:100px;overflow:hidden;display:inline-block;text-overflow:ellipsis}}.chat-company-body{font-weight:500!important;background-color:#f8fdff;width:100%;overflow-y:scroll}.chat-company-body .message .right{width:100%;justify-content:flex-end;align-items:flex-end;display:flex;flex-direction:column}.chat-company-body .message .right p{background:#196acb;box-shadow:2px 1px 5px 2px rgba(0,119,188,.564);font-size:13px;padding:20px 30px;margin:.5rem .5rem .5rem .3rem;color:#fff;border-radius:10rem 10rem 0 10rem;max-width:25vw}@media screen and (min-width:1365px){.chat-company-body .message .right p{max-width:25vw}}@media screen and (max-width:700px){.chat-company-body .message .right p{max-width:75vw;border-radius:10px 10px 0 10px}}@media screen and (max-width:1364px){.chat-company-body .message .right p{max-width:60vw}}.chat-company-body .message .right div{color:#3183e6;display:flex;align-items:center;font-size:12px;font-weight:700!important;margin:0 .5rem .5rem .3rem}.chat-company-body .message .right div i{color:#3183e6!important}.chat-company-body .message .left{width:100%;justify-content:flex-start;display:flex;flex-direction:column}.chat-company-body .message .left p{max-width:50vw;font-size:13px;background:#b9d5f7;padding:20px 30px;box-shadow:2px 1px 5px 2px rgba(210,238,254,.674);margin:.5rem .5rem .3rem;border-radius:10rem 10rem 10rem 0}@media screen and (min-width:1365px){.chat-company-body .message .left p{max-width:25vw}}@media screen and (max-width:700px){.chat-company-body .message .left p{max-width:75vw;border-radius:10px 10px 10px 0}}@media screen and (max-width:1364px){.chat-company-body .message .left p{max-width:60vw}}.chat-company-body .message .left div{color:#3183e6;font-size:12px;display:flex;align-items:center;font-weight:700!important;margin:0 0 .3rem .5rem}.chat-company-body .message .left div i{color:#3183e6!important}.chat-company-body .message .center{width:100%;display:flex;justify-content:center}.chat-company-body .message .center p{max-width:50vw;display:flex;align-items:center}@media screen and (min-width:1365px){.chat-company-body .message .center p{max-width:30vw}}@media screen and (max-width:700px){.chat-company-body .message .center p{max-width:100vw}}@media screen and (min-width:1365px){.chat-company-body{height:78vh}}@media screen and (max-width:1364px){.chat-company-body{height:75vh}}@media screen and (max-width:700px){.chat-company-body{height:70vh}}.chat-company-footer{margin-top:1rem;position:relative}@media screen and (min-width:1365px){.chat-company-footer{height:12vh}}@media screen and (max-width:700px){.chat-company-footer{height:12vh}}@media screen and (max-width:1364px){.chat-company-footer{height:12vh}}.chat-company-footer textarea{width:100%;background:#fefeff;border:none;border-top:1px solid #3183e6;font-size:16px;font-family:\"Poppins\",sans-serif;font-weight:400;padding:10px}.chat-company-footer textarea::-moz-placeholder{font-style:italic;color:#13529e;font-weight:400}.chat-company-footer textarea:-ms-input-placeholder{font-style:italic;color:#13529e;font-weight:400}.chat-company-footer textarea::placeholder{font-style:italic;color:#13529e;font-weight:400}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=chat-main.js.map
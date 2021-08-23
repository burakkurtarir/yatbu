exports.ids = [11];
exports.modules = {

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(266);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2c1c6a7f", content, true, context)
};

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_page_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(244);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_page_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_page_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_page_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_page_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@-webkit-keyframes firstView{0%{background-color:#33cb15!important;background:linear-gradient(90deg,#33cb15 0,#85f76e)!important}to{background-color:#30a8d5!important;background:linear-gradient(90deg,#30a8d5 0,#0fe5f0)!important}}@keyframes firstView{0%{background-color:#33cb15!important;background:linear-gradient(90deg,#33cb15 0,#85f76e)!important}to{background-color:#30a8d5!important;background:linear-gradient(90deg,#30a8d5 0,#0fe5f0)!important}}.compare{position:fixed;bottom:0;right:0;z-index:1055;display:flex;justify-content:flex-end;align-items:center;width:100%}.compare-item{background-color:#2389af!important;-webkit-animation:firstView 2s ease;animation:firstView 2s ease;margin:0 2px;background:linear-gradient(90deg,#2389af 0,#0cb7c0)!important;width:200px}.compare-clean,.compare-item{display:flex;cursor:pointer;border-radius:10px 3px;align-items:center;justify-content:space-between;border:none;padding:10px;color:#fff}.compare-clean{position:fixed;bottom:95px;right:0;background-color:#d53030!important;background:linear-gradient(90deg,#d53030 0,#d56c6c)!important}.compare-button{position:fixed;bottom:45px;border-radius:10px 3px;cursor:pointer;right:0;display:flex;align-items:center;border:none;padding:10px;color:#fff;background-color:#30a8d5!important;background:linear-gradient(90deg,#30a8d5 0,#0fe5f0)!important}.pricing-box{border:1px solid #e0e4e6;border-radius:5px;overflow:hidden}@media screen and (max-width:991px){.pricing-box{margin-bottom:30px}}.pricing-box .p-head{background-color:#f9f9f9;padding:15px;text-align:center}.pricing-box .p-head h4{margin-bottom:25px}.pricing-box .p-head>span{font-size:18px}.pricing-box .p-head .ribbon{top:15px;bottom:auto;padding:3px 10px;font-size:14px;text-transform:uppercase}.pricing-box .price{font-family:\"Poppins\",sans-serif;font-size:56px;font-weight:500;margin-bottom:10px}.pricing-box .price span{font-weight:400;text-decoration:none;margin-left:0}.pricing-box .p-body{padding:15px 0}.pricing-box .p-body ul{margin-bottom:30px}.pricing-box .p-body li{display:block;padding:10px 15px;border-bottom:1px solid #e0e4e6;transition:all .3s}.pricing-box .p-body li i{margin-right:10px}.pricing-box .p-body li i.ti-check{color:#3fd35e}.pricing-box .p-body li i.ti-close{color:#e53131}.pricing-box .btn{display:block;margin:0 15px}.sec-heading .sec-title{font-size:42px;margin-bottom:0}.compare-img{display:block;width:100%;height:auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/compare/compare-page.vue?vue&type=template&id=3bc3c4e4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Title'),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"pricing\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row justify-content-md-center\">","</div>",[_vm._ssrNode("<div class=\"col-lg-3 col-md-6\"><div class=\"pricing-box\"><div class=\"p-head\"><img src=\"https://demo.themeies.com/davit/images/sm-yacht/yacht-thumb.jpg\" alt class=\"compare-img\"></div> <div class=\"p-body\"><ul><li style=\"background: transparent;\"><i class=\"ti-home\"></i>Builder</li> <li style=\"background: transparent;\"><i class=\"ti-bookmark-alt\"></i>Model</li> <li style=\"background: transparent;\"><i class=\"ti-ruler-alt\"></i>Length</li> <li style=\"background: transparent;\"><i class=\"ti-calendar\"></i>Year</li> <li style=\"background: transparent;\"><i class=\"ti-calendar\"></i>Refit</li> <li style=\"background: transparent;\"><i class=\"ti-user\"></i>Guests</li> <li style=\"background: transparent;\"><i class=\"ti-bolt\"></i>Jetski</li> <li style=\"background: transparent;\"><i class=\"ti-bar-chart\"></i>Tender</li> <li style=\"background: transparent;\"><i class=\"ti-user\"></i>Crew</li> <li style=\"background: transparent;\"><i class=\"ti-layers-alt\"></i>Staterooms</li> <li style=\"background: transparent;\"><i class=\"ti-agenda\"></i>Sleeps</li> <li style=\"background: transparent;\"><i class=\"ti-target\"></i>Boat type</li> <li style=\"background: transparent;\"><i class=\"ti-map\"></i>Winter Location</li> <li style=\"background: transparent;\"><i class=\"ti-map\"></i>Summer Location</li></ul> <a href=\"home-01.html\" class=\"btn btn-filled\"><i class=\"ti-home\"></i> Back To Home</a></div></div></div> "),_vm._l((_vm.getComparies),function(comp,i){return _vm._ssrNode("<div class=\"col-lg-3 col-md-6\">","</div>",[_vm._ssrNode("<div class=\"pricing-box\">","</div>",[_vm._ssrNode("<div class=\"p-head\"><img src=\"https://demo.themeies.com/davit/images/sm-yacht/3.jpg\" alt class=\"compare-img\"> <p class=\"ribbon\">1030$<span> / Week</span></p></div> "),_vm._ssrNode("<div class=\"p-body\">","</div>",[_vm._ssrNode("<ul><li style=\"background: transparent;\">Azimut</li> <li style=\"background: transparent;\">None</li> <li style=\"background: transparent;\">55.00</li> <li style=\"background: transparent;\">2007</li> <li style=\"background: transparent;\">2014</li> <li style=\"background: transparent;\">None</li> <li style=\"background: transparent;\">None</li> <li style=\"background: transparent;\">None</li> <li style=\"background: transparent;\">None</li> <li style=\"background: transparent;\">3</li> <li style=\"background: transparent;\">4</li> <li style=\"background: transparent;\">Motor Yacht</li> <li style=\"background: transparent;\">Florida</li> <li style=\"background: transparent;\">Florida</li></ul> "),_c('nuxt-link',{staticClass:"btn btn-filled",attrs:{"to":"/detail/224"}},[_vm._v("Book Now")])],2)],2)])})],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/compare/compare-page.vue?vue&type=template&id=3bc3c4e4&

// EXTERNAL MODULE: ./components/shared/title.vue + 4 modules
var title = __webpack_require__(16);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/compare/compare-page.vue?vue&type=script&lang=js&
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


/* harmony default export */ var compare_pagevue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapGetters"])({
      'getComparies': 'compare/getComparies'
    })
  },
  components: {
    Title: title["default"]
  }
});
// CONCATENATED MODULE: ./components/compare/compare-page.vue?vue&type=script&lang=js&
 /* harmony default export */ var compare_compare_pagevue_type_script_lang_js_ = (compare_pagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/compare/compare-page.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(265)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  compare_compare_pagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0a21710d"
  
)

/* harmony default export */ var compare_page = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=compare-page.js.map
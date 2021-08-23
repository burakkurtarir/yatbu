exports.ids = [54];
exports.modules = {

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(276);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7cbf54fe", content, true, context)
};

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_profile_image_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(250);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_profile_image_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_profile_image_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_profile_image_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_profile_image_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".account-settings .user-profile{margin:0 0 1rem;padding-bottom:1rem;text-align:center}.account-settings .user-profile .user-avatar{margin:0 0 1rem}.account-settings .user-profile .user-avatar img{width:90px;height:90px;border-radius:100px}.account-settings .user-profile h5.user-name{margin:0 0 .5rem}.account-settings .user-profile h6.user-email{margin:0;font-size:.8rem;font-weight:400;color:#9fa8b9}.account-settings .about{margin:2rem 0 0;text-align:center}.account-settings .about h5{margin:0 0 15px;color:#007ae1}.account-settings .about p{font-size:.825rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/change-profile-image.vue?vue&type=template&id=969cd9aa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row justify-content-md-center w-100"},[_vm._ssrNode("<div class=\"col-12 col-md-12 col-lg-8\">","</div>",[_vm._ssrNode("<div class=\"my-3\"><h5 class=\"bg-light-primary p-3\">"+_vm._ssrEscape(_vm._s(_vm.$t('profile.title.changeProfileImage')))+"</h5></div> "),_vm._ssrNode("<div class=\"card h-100\">","</div>",[_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode("<div class=\"account-settings  mt-4\">","</div>",[_vm._ssrNode("<div class=\"user-profile\">","</div>",[_vm._ssrNode("<div class=\"user-avatar\"><img src=\"https://bootdey.com/img/Content/avatar/avatar7.png\" alt=\"Maxwell Admin\"></div> "),_vm._ssrNode("<div class=\"text-center my-3\">","</div>",[_c('er-primary-button',{staticClass:"m-0 p-2 header-change__btn",staticStyle:{"font-size":"12px"}},[_vm._v(_vm._s(_vm.$t('button.changeProfileImage')))])],1),_vm._ssrNode(" <h5 class=\"user-name\">Yuki Hayashi</h5> <h6 class=\"user-email\">yuki@Maxwell.com</h6>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"text-center mt-3\">","</div>",[_c('er-primary-button',{staticClass:"m-0"},[_vm._v(_vm._s(_vm.$t('button.submit')))])],1)],2)])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/profile/change-profile-image.vue?vue&type=template&id=969cd9aa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/change-profile-image.vue?vue&type=script&lang=js&
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
/* harmony default export */ var change_profile_imagevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/profile/change-profile-image.vue?vue&type=script&lang=js&
 /* harmony default export */ var profile_change_profile_imagevue_type_script_lang_js_ = (change_profile_imagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/profile/change-profile-image.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(275)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_change_profile_imagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "dacd30a8"
  
)

/* harmony default export */ var change_profile_image = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=profile-change-profile-image.js.map
exports.ids = [47];
exports.modules = {

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(270);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("f06856aa", content, true, context)
};

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step2_chooseCategory_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(248);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step2_chooseCategory_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step2_chooseCategory_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step2_chooseCategory_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step2_chooseCategory_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--red:#ea5353;--cyan:#45d3d3;--orange:#fcaf4a;--blue:#549ef2;--varyDarkBlue:#4c4e61;--grayishBlue:#a3a5ae;--veryLightGray:#fafafa;--weight1:200;--weight2:400;--weight3:600}.box-ads-2 p{color:#000;font-weight:700}.box-ads-2{border-radius:5px;box-shadow:0 30px 40px -20px #a3a5ae;box-shadow:0 30px 40px -20px var(--grayishBlue);padding:30px;margin:20px;height:200px}.box-ads-2-no-icon{height:100px!important}.box-ads-2:hover{cursor:pointer;transition:all .5s linear;background-color:#30a8d5;border-bottom:3px solid #1b6784}.box-ads-2:hover p{color:#fff!important}@media (max-width:450px){.box-ads-2{height:200px}}@media (max-width:950px) and (min-width:450px){.box-ads-2{text-align:center;height:180px}}.cyan-ads{border-top:3px solid #45d3d3;border-top:3px solid var(--cyan)}.red-ads{border-top:3px solid #ea5353;border-top:3px solid var(--red)}.blue-ads{border-top:3px solid #549ef2;border-top:3px solid var(--blue)}.orange-ads{border-top:3px solid #fcaf4a;border-top:3px solid var(--orange)}@media (min-width:950px){.box-ads-2,.header p{width:100%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/new-ads/step2-chooseCategory.vue?vue&type=template&id=bbbde444&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container my-4"},[_vm._ssrNode("<div class=\"mt-3\">","</div>",[_vm._ssrNode("<h4>","</h4>",[_vm._ssrNode("<span>2. Adım</span> "),_c('m-icon',[_vm._v("arrow_forward")]),_vm._ssrNode(" Kategorinizi Seçin")],2)]),_vm._ssrNode(" <div class=\"my-2\">"+(_vm._ssrList((_vm.getNewAds.mainCategory.data),function(mainCategory,i){return ("<span>"+_vm._ssrEscape(_vm._s(mainCategory.name)+" > ")+"</span>")}))+" "+(_vm._ssrList((_vm.getNewAds.categories.data),function(cate,i){return ("<span>"+_vm._ssrEscape(_vm._s(cate.name)+" > ")+"</span>")}))+"</div> <div class=\"row d-flex justify-content-center\">"+(_vm._ssrList((_vm.getCategories),function(category,i){return ("<div class=\"col-6 col-md-4 col-lg-2\"><div"+(_vm._ssrClass("box-ads-2",_vm.randomClass()))+"><h2 class=\"d-flex align-center justify-content-center\"><img src=\"https://assets.codepen.io/2301174/icon-team-builder.svg\" alt></h2> <p class=\" text-center\">"+_vm._ssrEscape(" "+_vm._s(category.name))+"</p></div></div>")}))+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/new-ads/step2-chooseCategory.vue?vue&type=template&id=bbbde444&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/new-ads/step2-chooseCategory.vue?vue&type=script&lang=js&
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

/* harmony default export */ var step2_chooseCategoryvue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapGetters"])({
      'getCategories': 'category/getCategories',
      'getNewAds': 'ads/getNewAds'
    })
  },

  data() {
    return {
      colors: ['red-ads', 'cyan-ads', 'blue-ads', 'orange-ads']
    };
  },

  methods: {
    randomClass() {
      let rnd = Math.floor(Math.random() * this.colors.length);
      return this.colors[rnd];
    },

    setMainCategory(item) {
      this.$store.commit('ads/setNewAds', {
        key: 'categories',
        data: {
          id: item.id,
          name: item.name,
          validations: true
        }
      });
      this.$router.push('/give-ads/forms');
    },

    controlMainCategory() {
      if (this.getNewAds.mainCategory.data.length == 0) {
        this.$router.push('/give-ads');
      }
    }

  },

  created() {
    this.controlMainCategory();
  }

});
// CONCATENATED MODULE: ./components/new-ads/step2-chooseCategory.vue?vue&type=script&lang=js&
 /* harmony default export */ var new_ads_step2_chooseCategoryvue_type_script_lang_js_ = (step2_chooseCategoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/new-ads/step2-chooseCategory.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(269)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  new_ads_step2_chooseCategoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "039fa098"
  
)

/* harmony default export */ var step2_chooseCategory = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=new-ads-step2-choose-category.js.map
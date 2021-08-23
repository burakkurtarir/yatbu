exports.ids = [51];
exports.modules = {

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("1b8a8a46", content, true, context)
};

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_horizontal_product_vue_vue_type_style_index_0_id_70069a04_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_horizontal_product_vue_vue_type_style_index_0_id_70069a04_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_horizontal_product_vue_vue_type_style_index_0_id_70069a04_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_horizontal_product_vue_vue_type_style_index_0_id_70069a04_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_horizontal_product_vue_vue_type_style_index_0_id_70069a04_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Baloo+2&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".postcard[data-v-70069a04]{flex-wrap:wrap;display:flex;height:180px;box-shadow:0 4px 21px -12px rgba(0,0,0,.66);border-radius:10px;margin:0 0 2rem;overflow:hidden;position:relative;color:#fff}.postcard.dark[data-v-70069a04]{background-color:#aac2ff}.postcard.light[data-v-70069a04]{background-color:#e1e5ea}.postcard .t-dark[data-v-70069a04]{color:#18151f}.postcard a[data-v-70069a04]{color:inherit}.postcard .h1[data-v-70069a04],.postcard h1[data-v-70069a04]{margin-bottom:.5rem;font-weight:500;line-height:1.2}.postcard .small[data-v-70069a04]{font-size:80%}.postcard .postcard__title[data-v-70069a04]{font-size:1.75rem}.postcard .postcard__img[data-v-70069a04]{max-height:120px;width:100%;-o-object-fit:cover;object-fit:cover;position:relative}.postcard .postcard__img_link[data-v-70069a04]{display:contents}.postcard .postcard__bar[data-v-70069a04]{width:50px;height:10px;margin:10px 0;border-radius:5px;background-color:#424242;transition:width .2s ease}.postcard .postcard__text[data-v-70069a04]{padding:1.5rem;position:relative;display:flex;flex-direction:column}.postcard .postcard__preview-txt[data-v-70069a04]{overflow:hidden;text-overflow:ellipsis;text-align:justify;height:100%}.postcard .postcard__tagbox[data-v-70069a04]{display:flex;flex-flow:row wrap;font-size:14px;margin:20px 0 0;padding:0;justify-content:center}.postcard .postcard__tagbox .tag__item[data-v-70069a04]{display:inline-block;background:rgba(83,83,83,.4);border-radius:3px;padding:2.5px 10px;margin:0 5px 5px 0;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:background-color .3s}.postcard .postcard__tagbox .tag__item .red[data-v-70069a04]:hover{background-color:#ed1a0e!important}.postcard .postcard__tagbox .tag__item[data-v-70069a04]:hover{background:rgba(83,83,83,.8)}.postcard[data-v-70069a04]:before{content:\"\";position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(-70deg,#424242,transparent 50%);opacity:1;border-radius:10px}.postcard:hover .postcard__bar[data-v-70069a04]{width:100px}@media screen and (min-width:769px){.postcard[data-v-70069a04]{flex-wrap:inherit}.postcard .postcard__title[data-v-70069a04]{font-size:2rem}.postcard .postcard__tagbox[data-v-70069a04]{justify-content:start}.postcard .postcard__img[data-v-70069a04]{max-width:300px;max-height:100%;transition:transform .3s ease}.postcard .postcard__text[data-v-70069a04]{padding:10px 3rem;width:100%}.postcard .media.postcard__text[data-v-70069a04]:before{content:\"\";position:absolute;display:block;background:#aac2ff;top:-20%;height:130%;width:55px}.postcard:hover .postcard__img[data-v-70069a04]{transform:scale(1.1)}.postcard[data-v-70069a04]:nth-child(odd){flex-direction:row}.postcard[data-v-70069a04]:nth-child(2n+0){flex-direction:row-reverse}.postcard:nth-child(odd) .postcard__text[data-v-70069a04]:before{left:-12px!important;transform:rotate(4deg)}.postcard:nth-child(2n+0) .postcard__text[data-v-70069a04]:before{right:-12px!important;transform:rotate(-4deg)}}@media screen and (min-width:1024px){.postcard__text[data-v-70069a04]{padding:2rem 3.5rem}.postcard__text[data-v-70069a04]:before{content:\"\";position:absolute;display:block;top:-20%;height:130%;width:55px}.postcard.dark .postcard__text[data-v-70069a04]:before{background:#aac2ff}.postcard.light .postcard__text[data-v-70069a04]:before{background:#e1e5ea}}.postcard .postcard__tagbox .green.play[data-v-70069a04]:hover{background:#79dd09;color:#000}.green .postcard__title[data-v-70069a04]:hover{color:#79dd09}.green .postcard__bar[data-v-70069a04]{background-color:#79dd09}.green[data-v-70069a04]:before{background-image:linear-gradient(-30deg,rgba(121,221,9,.1),transparent 50%)}.green[data-v-70069a04]:nth-child(2n):before{background-image:linear-gradient(30deg,rgba(121,221,9,.1),transparent 50%)}.postcard .postcard__tagbox .blue.play[data-v-70069a04]:hover{background:#0076bd}.blue .postcard__title[data-v-70069a04]:hover{color:#0076bd}.blue .postcard__bar[data-v-70069a04]{background-color:#0076bd}.blue[data-v-70069a04]:before{background-image:linear-gradient(-30deg,rgba(0,118,189,.1),transparent 50%)}.blue[data-v-70069a04]:nth-child(2n):before{background-image:linear-gradient(30deg,rgba(0,118,189,.1),transparent 50%)}.postcard .postcard__tagbox .red.play[data-v-70069a04]:hover{background:#bd150b}.red .postcard__title[data-v-70069a04]:hover{color:#bd150b}.red .postcard__bar[data-v-70069a04]{background-color:#bd150b}.red[data-v-70069a04]:before{background-image:linear-gradient(-30deg,rgba(189,21,11,.1),transparent 50%)}.red[data-v-70069a04]:nth-child(2n):before{background-image:linear-gradient(30deg,rgba(189,21,11,.1),transparent 50%)}.postcard .postcard__tagbox .yellow.play[data-v-70069a04]:hover{background:#bdbb49;color:#000}.yellow .postcard__title[data-v-70069a04]:hover{color:#bdbb49}.yellow .postcard__bar[data-v-70069a04]{background-color:#bdbb49}.yellow[data-v-70069a04]:before{background-image:linear-gradient(-30deg,rgba(189,187,73,.1),transparent 50%)}.yellow[data-v-70069a04]:nth-child(2n):before{background-image:linear-gradient(30deg,rgba(189,187,73,.1),transparent 50%)}@media screen and (min-width:769px){.green[data-v-70069a04]:before{background-image:linear-gradient(-80deg,rgba(121,221,9,.1),transparent 50%)}.green[data-v-70069a04]:nth-child(2n):before{background-image:linear-gradient(80deg,rgba(121,221,9,.1),transparent 50%)}.blue[data-v-70069a04]:before{background-image:linear-gradient(-80deg,rgba(0,118,189,.1),transparent 50%)}.blue[data-v-70069a04]:nth-child(2n):before{background-image:linear-gradient(80deg,rgba(0,118,189,.1),transparent 50%)}.red[data-v-70069a04]:before{background-image:linear-gradient(-80deg,rgba(189,21,11,.1),transparent 50%)}.red[data-v-70069a04]:nth-child(2n):before{background-image:linear-gradient(80deg,rgba(189,21,11,.1),transparent 50%)}.yellow[data-v-70069a04]:before{background-image:linear-gradient(-80deg,rgba(189,187,73,.1),transparent 50%)}.yellow[data-v-70069a04]:nth-child(2n):before{background-image:linear-gradient(80deg,rgba(189,187,73,.1),transparent 50%)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product-card/horizontal-product.vue?vue&type=template&id=70069a04&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"postcard light  my-3",class:("" + _vm.color)},[_c('nuxt-link',{staticClass:"postcard__img_link",attrs:{"to":"/detail/225"}},[_c('img',{staticClass:"postcard__img",attrs:{"src":"https://demo.themeies.com/davit/images/yacht/img4.jpg","alt":"Image Title"}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"postcard__text\" data-v-70069a04>","</div>",[_vm._ssrNode("<h4"+(_vm._ssrClass("postcard__title",("" + _vm.color)))+" data-v-70069a04>","</h4>",[_c('nuxt-link',{attrs:{"to":"/detail/225"}},[_vm._v("Amaryllis")])],1),_vm._ssrNode(" <div class=\"postcard__subtitle small\" data-v-70069a04><time datetime=\"2020-05-25 12:00:00\" data-v-70069a04><i class=\"fas fa-calendar-alt mr-2\" data-v-70069a04></i>Mon, May 25th 2020\n\t\t\t\t\t</time></div> <div class=\"postcard__bar\" data-v-70069a04></div> "),_vm._ssrNode("<ul class=\"postcard__tagbox\" data-v-70069a04>","</ul>",[_vm._ssrNode("<li"+(_vm._ssrClass("tag__item play d-flex align-center ",("" + _vm.color)))+" data-v-70069a04>","</li>",[_c('m-icon',{staticClass:"mr-2"},[_vm._v("visibility")]),_vm._ssrNode(" 2256")],2),_vm._ssrNode(" <li"+(_vm._ssrClass("tag__item play ",("" + _vm.color)))+" data-v-70069a04><i class=\"fas fa-clock mr-2\" data-v-70069a04></i>55 mins.</li> "),_vm._ssrNode("<li"+(_vm._ssrClass("tag__item play ",("" + _vm.color)))+" data-v-70069a04>","</li>",[_c('nuxt-link',{staticClass:"d-flex align-center",attrs:{"to":"/detail/225"}},[_c('m-icon',[_vm._v("subdirectory_arrow_right")]),_vm._v("\n              "+_vm._s(_vm.$t('product.review')))],1)],1)],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/product-card/horizontal-product.vue?vue&type=template&id=70069a04&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product-card/horizontal-product.vue?vue&type=script&lang=js&
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
/* harmony default export */ var horizontal_productvue_type_script_lang_js_ = ({
  props: {
    color: {
      default: "red"
    }
  }
});
// CONCATENATED MODULE: ./components/product-card/horizontal-product.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_card_horizontal_productvue_type_script_lang_js_ = (horizontal_productvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/product-card/horizontal-product.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(170)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_card_horizontal_productvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "70069a04",
  "003cddcb"
  
)

/* harmony default export */ var horizontal_product = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-card-horizontal-product.js.map
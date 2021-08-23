exports.ids = [5];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=chat-components-footer.js.map
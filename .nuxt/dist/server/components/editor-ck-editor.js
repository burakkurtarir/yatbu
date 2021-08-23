exports.ids = [29];
exports.modules = {

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/ck-editor.vue?vue&type=template&id=29f7485e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',{attrs:{"placeholder":"loading..."}},[_c('ckeditor-nuxt',{attrs:{"config":_vm.editorConfig},model:{value:(_vm.contentHolder),callback:function ($$v) {_vm.contentHolder=$$v},expression:"contentHolder"}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/editor/ck-editor.vue?vue&type=template&id=29f7485e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/editor/ck-editor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var ck_editorvue_type_script_lang_js_ = ({
  watch: {
    contentHolder: {
      deep: true,

      handler(data) {
        this.$emit('input', data);
      }

    }
  },
  props: {
    value: {
      default: ""
    }
  },
  components: {
    'ckeditor-nuxt': () => {
      if (false) {}
    }
  },

  data() {
    return {
      editorConfig: {
        height: 600,
        language: "tr_TR",
        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', ''],
        removePlugins: ['Link'],
        placeholder: this.$t('editor.placeholder'),
        title: {
          placeholder: this.$t('editor.titlePlaceholder')
        },
        simpleUpload: {
          uploadUrl: 'path_to_image_controller',
          headers: {
            'Authorization': 'optional_token'
          }
        }
      },
      contentHolder: ""
    };
  }

});
// CONCATENATED MODULE: ./components/editor/ck-editor.vue?vue&type=script&lang=js&
 /* harmony default export */ var editor_ck_editorvue_type_script_lang_js_ = (ck_editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/editor/ck-editor.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  editor_ck_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4d79e87c"
  
)

/* harmony default export */ var ck_editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=editor-ck-editor.js.map
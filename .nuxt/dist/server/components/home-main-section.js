exports.ids = [39];
exports.modules = {

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/components/home-main-section.vue?vue&type=template&id=47ea5af2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"b-main-slider slider-pro",attrs:{"id":"main-slider","data-slider-width":"100%","data-slider-height":"920px","data-slider-arrows":"false","data-slider-buttons":"false"}},[_vm._ssrNode("<div class=\"sp-slides\"><div class=\"b-main-slider__slide b-main-slider__slide-1 sp-slide\"><img src=\"assets/img/b01.jpg\" alt=\"slider\" class=\"sp-image\"> <p>Yat ve yatçılığa dair aradığınız tam da bu</p> <div class=\"container\"><div id=\"findTabContent\" class=\"b-main-filter-content tab-content  mt-5\"><div id=\"content-allCar\" class=\"tab-pane fade show active\"><div class=\"row align-items-end no-gutters\"><div class=\"b-main-filter__main col-lg\"><div class=\"b-main-filter__inner row no-gutters\"><div class=\"b-main-filter__item col-md-4\"><div class=\"b-main-filter__label\">"+_vm._ssrEscape(_vm._s(_vm.$t('category.chooseCategory')))+"</div> <div class=\"b-main-filter__selector\"><select data-width=\"100%\" data-live-search=\"true\" data-style=\"ui-select\" class=\"selectpicker\">"+(_vm._ssrList((_vm.getMainCategories),function(category,i){return ("<option"+(_vm._ssrAttr("value",category.url))+">"+_vm._ssrEscape(_vm._s(category.name))+"</option>")}))+"</select></div></div> <div class=\"b-main-filter__item col-md-4\"><div class=\"b-main-filter__label\">Select a Model</div> <div class=\"b-main-filter__selector\"><select data-width=\"100%\" data-style=\"ui-select\" class=\"selectpicker\"><option>Model 1</option> <option>Model 2</option> <option>Model 3</option></select></div></div> <div class=\"b-main-filter__item col-md-4\"><div class=\"b-main-filter__label\">Price Range</div> <div class=\"b-main-filter__selector\"><select data-width=\"100%\" data-style=\"ui-select\" class=\"selectpicker\"><option>Max $50 per day</option> <option>Max $100 per day</option> <option>Max $150 per day</option></select></div></div></div></div> <div class=\"col-lg-auto\"><button class=\"radius b-main-filter__btn btn btn-secondary\">"+_vm._ssrEscape(_vm._s(_vm.$t('general.search')))+"</button></div></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/components/home-main-section.vue?vue&type=template&id=47ea5af2&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/components/home-main-section.vue?vue&type=script&lang=js&
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

/* harmony default export */ var home_main_sectionvue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapGetters"])({
      'getMainCategories': 'category/getMainCategories'
    })
  },

  data() {
    return {
      settmout: -1
    };
  },

  methods: {
    goListPage() {
      this.$router.push('/list');
    },

    setCategories(val) {
      if (this.settmout != -1) {
        clearTimeout(this.settmout);
      }

      this.settmout = setTimeout(() => {
        console.log("API'YE ISTEK ATILDI", val);
      }, 1000);
    }

  },

  mounted() {
    let vm = this;
    setTimeout(() => {
      let inp = document.querySelectorAll('.bs-searchbox input');
      console.log(inp);

      if (inp.length !== 0) {
        inp.forEach(i => {
          i.addEventListener('keyup', e => {
            inp.forEach((update, index) => {
              inp[index].value = e.target.value;
            });
            vm.setCategories(e.target.value);
          });
        });
      }
    }, 1000);
  }

});
// CONCATENATED MODULE: ./components/home/components/home-main-section.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_home_main_sectionvue_type_script_lang_js_ = (home_main_sectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home/components/home-main-section.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_home_main_sectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1c319dfa"
  
)

/* harmony default export */ var home_main_section = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-main-section.js.map
exports.ids = [65,29,48];
exports.modules = {

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const initial = () => {
  /*
  | ----------------------------------------------------------------------------------
  | TABLE OF CONTENT
  | ----------------------------------------------------------------------------------
  -Preloader
  -Scroll Animation
  -Scale images
  -Chars Start
  -Loader blocks
  -Zoom Images
  -Select customization
  -Main slider
  -Sliders
  -Sliders with thumbnails
  -Slider numbers
  -Video player
  -View catalog
  */
  $(document).ready(function () {
    "use strict"; /////////////////////////////////////////////////////////////////
    // Preloader
    /////////////////////////////////////////////////////////////////

    $(function () {
      $("[rel='tooltip']").tooltip();
    });
    var $preloader = $('#page-preloader'),
        $spinner = $preloader.find('.spinner-loader');
    $spinner.fadeOut();
    $preloader.delay(50).fadeOut('slow'); /////////////////////////////////////
    //  Scroll Animation
    /////////////////////////////////////

    if ($('.scrollreveal').length) {
      window.sr = ScrollReveal({
        reset: true,
        duration: 1000,
        delay: 200
      });
      sr.reveal('.scrollreveal');
    } /////////////////////////////////////////////////////////////////
    // Scale images
    /////////////////////////////////////////////////////////////////


    if ($('.img-scale').length) {
      $(function () {
        objectFitImages('.img-scale');
      });
    } /////////////////////////////////////
    //  Chars Start
    /////////////////////////////////////


    if ($('body').length) {
      $(window).on('scroll', function () {
        var winH = $(window).scrollTop();
        $('.b-progress-list').waypoint(function () {
          $('.js-chart').each(function () {
            CharsStart();
          });
        }, {
          offset: '80%'
        });
      });
    }

    function CharsStart() {
      $('.js-chart').easyPieChart({
        barColor: false,
        trackColor: false,
        scaleColor: false,
        scaleLength: false,
        lineCap: false,
        lineWidth: false,
        size: false,
        animate: 5000,
        onStep: function (from, to, percent) {
          $(this.el).find('.js-percent').text(Math.round(percent));
        }
      });
    } /////////////////////////////////////
    //  Loader blocks
    /////////////////////////////////////


    $(".js-scroll-next").on("click", function () {
      var hiddenContent = $(".js-scroll-next + .js-scroll-content");
      $(".js-scroll-next").hide();
      hiddenContent.show();
      hiddenContent.addClass("animated");
      hiddenContent.addClass("animation-done");
      hiddenContent.addClass("bounceInUp");
    }); /////////////////////////////////////
    //  Zoom Images
    /////////////////////////////////////

    if ($('.js-zoom-gallery').length) {
      $('.js-zoom-gallery').each(function () {
        // the containers for all your galleries
        $(this).magnificPopup({
          delegate: '.js-zoom-gallery__item',
          // the selector for gallery item
          type: 'image',
          gallery: {
            enabled: true
          },
          mainClass: 'mfp-with-zoom',
          // this class is for CSS animation below
          zoom: {
            enabled: true,
            // By default it's false, so don't forget to enable it
            duration: 300,
            // duration of the effect, in milliseconds
            easing: 'ease-in-out',
            // CSS transition easing function
            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function (openerElement) {
              // openerElement is the element on which popup was initialized, in this case its <a> tag
              // you don't need to add "opener" option if this code matches your needs, it's defailt one.
              return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
          }
        });
      });
    }

    if ($('.js-zoom-images').length) {
      $('.js-zoom-images').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        // this class is for CSS animation below
        zoom: {
          enabled: true,
          // By default it's false, so don't forget to enable it
          duration: 300,
          // duration of the effect, in milliseconds
          easing: 'ease-in-out',
          // CSS transition easing function
          // The "opener" function should return the element from which popup will be zoomed in
          // and to which popup will be scaled down
          // By defailt it looks for an image tag:
          opener: function (openerElement) {
            // openerElement is the element on which popup was initialized, in this case its <a> tag
            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        }
      });
    }

    if ($('.popup-youtube').length) {
      $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
      });
    } /////////////////////////////////////
    // Select customization
    /////////////////////////////////////


    if ($('.selectpicker').length) {
      $('.selectpicker').selectpicker();
    } ////////////////////////////////////////////
    // Main slider
    ///////////////////////////////////////////


    if ($('#main-slider').length) {
      var sliderWidth = $("#main-slider").data("slider-width");
      var sliderHeigth = $("#main-slider").data("slider-height");
      var sliderArrows = $("#main-slider").data("slider-arrows");
      var sliderButtons = $("#main-slider").data("slider-buttons");
      $('#main-slider').sliderPro({
        width: sliderWidth,
        height: sliderHeigth,
        arrows: sliderArrows,
        buttons: sliderButtons,
        fade: true,
        fullScreen: true,
        touchSwipe: false,
        autoplay: true
      });
    } ////////////////////////////////////////////
    // Sliders
    ///////////////////////////////////////////


    if ($('.js-slider').length) {
      $('.js-slider').slick();
    } ////////////////////////////////////////////
    // Sliders with thumbnails
    ///////////////////////////////////////////


    if ($('.js-slider-for').length) {
      $('.js-slider-for').slick({
        arrows: true,
        fade: true,
        asNavFor: '.js-slider-nav'
      });
      $('.js-slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.js-slider-for',
        focusOnSelect: true
      });
    } /////////////////////////////////////////////////////////////////
    // Slider numbers
    /////////////////////////////////////////////////////////////////


    if ($('#filterPrice').length) {
      var keypressSlider = document.getElementById('filterPrice');
      var input0 = document.getElementById('input-with-keypress-0');
      var input1 = document.getElementById('input-with-keypress-1');
      var inputs = [input0, input1];
      noUiSlider.create(keypressSlider, {
        start: [5000, 35000],
        connect: true,
        step: 100,
        format: wNumb({
          decimals: 0,
          prefix: '$',
          thousand: ','
        }),
        range: {
          'min': 1000,
          'max': 50000
        }
      });
      keypressSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = values[handle];
      });
    }

    if ($('#sliderRange').length) {
      var keypressSliderRange = document.getElementById('sliderRange');
      var inputRange = document.getElementById('input-range');
      var inputsRange = [inputRange];
      noUiSlider.create(keypressSliderRange, {
        start: 100,
        connect: true,
        step: 10,
        format: wNumb({
          decimals: 0,
          prefix: 'within ',
          suffix: 'km',
          thousand: ','
        }),
        range: {
          'min': 0,
          'max': 200
        }
      });
      keypressSliderRange.noUiSlider.on('update', function (values, handle) {
        inputsRange[handle].value = values[handle];
      });
    } /////////////////////////////////////
    //  Video player
    /////////////////////////////////////


    if ($('.player').length) {
      $(".player").flowplayer();
    } ////////////////////////////////////////////
    // View catalog
    ///////////////////////////////////////////


    $('.btns-switch__item').on('click', function () {
      $('.btns-switch').find('.active').removeClass('active');
      $(this).addClass('active');
    });
    $('.js-view-th').on('click', function () {
      $('.b-goods-group > .col-12').removeClass('col-12').addClass('col-lg-4 col-md-6');
      $('.b-goods').removeClass('b-goods_list');
      $('.b-filter-goods').addClass('b-filter-goods_brd');
    });
    $('.js-view-list').on('click', function () {
      $('.b-goods-group > .col-lg-4').addClass('col-12').removeClass('col-lg-4 col-md-6');
      $('.b-goods').addClass('b-goods_list');
      $('.b-filter-goods').removeClass('b-filter-goods_brd');
    });
    $('.flip-btn').on('click', function () {
      $(this).parent().toggleClass('flip-active');
    });
    $('.flip-btn-hide').on('click', function () {
      $(this).parents('.b-goods').removeClass('flip-active');
    });

    if ($(window).width() < 768) {
      $('.b-goods-group > .col-12').removeClass('col-12').addClass('col-lg-4 col-md-6');
      $('.b-goods').removeClass('b-goods_list');
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  mounted() {
    initial();
  }

});

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(274);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7365bb4a", content, true, context)
};

/***/ }),

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

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(272);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("7a3aee09", content, true)

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@-webkit-keyframes passing-through{0%{opacity:0;transform:translateY(40px)}30%,70%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@keyframes passing-through{0%{opacity:0;transform:translateY(40px)}30%,70%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@-webkit-keyframes slide-in{0%{opacity:0;transform:translateY(40px)}30%{opacity:1;transform:translateY(0)}}@keyframes slide-in{0%{opacity:0;transform:translateY(40px)}30%{opacity:1;transform:translateY(0)}}@-webkit-keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.1)}20%{transform:scale(1)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.1)}20%{transform:scale(1)}}.dropzone,.dropzone *{box-sizing:border-box}.dropzone{min-height:150px;border:2px solid rgba(0,0,0,.3);background:#fff;padding:20px}.dropzone.dz-clickable{cursor:pointer}.dropzone.dz-clickable *{cursor:default}.dropzone.dz-clickable .dz-message,.dropzone.dz-clickable .dz-message *{cursor:pointer}.dropzone.dz-started .dz-message{display:none}.dropzone.dz-drag-hover{border-style:solid}.dropzone.dz-drag-hover .dz-message{opacity:.5}.dropzone .dz-message{text-align:center;margin:2em 0}.dropzone .dz-preview{position:relative;display:inline-block;vertical-align:top;margin:16px;min-height:100px}.dropzone .dz-preview:hover{z-index:1000}.dropzone .dz-preview.dz-file-preview .dz-image{border-radius:20px;background:#999;background:linear-gradient(180deg,#eee,#ddd)}.dropzone .dz-preview.dz-file-preview .dz-details{opacity:1}.dropzone .dz-preview.dz-image-preview{background:#fff}.dropzone .dz-preview.dz-image-preview .dz-details{transition:opacity .2s linear}.dropzone .dz-preview .dz-remove{font-size:14px;text-align:center;display:block;cursor:pointer;border:none}.dropzone .dz-preview .dz-remove:hover{text-decoration:underline}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview .dz-details{z-index:20;position:absolute;top:0;left:0;opacity:0;font-size:13px;min-width:100%;max-width:100%;padding:2em 1em;text-align:center;color:rgba(0,0,0,.9);line-height:150%}.dropzone .dz-preview .dz-details .dz-size{margin-bottom:1em;font-size:16px}.dropzone .dz-preview .dz-details .dz-filename{white-space:nowrap}.dropzone .dz-preview .dz-details .dz-filename:hover span{border:1px solid hsla(0,0%,78.4%,.8);background-color:hsla(0,0%,100%,.8)}.dropzone .dz-preview .dz-details .dz-filename:not(:hover){overflow:hidden;text-overflow:ellipsis}.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:1px solid transparent}.dropzone .dz-preview .dz-details .dz-filename span,.dropzone .dz-preview .dz-details .dz-size span{background-color:hsla(0,0%,100%,.4);padding:0 .4em;border-radius:3px}.dropzone .dz-preview:hover .dz-image img{transform:scale(1.05);filter:blur(8px)}.dropzone .dz-preview .dz-image{border-radius:20px;overflow:hidden;width:120px;height:120px;position:relative;display:block;z-index:10}.dropzone .dz-preview .dz-image img{display:block}.dropzone .dz-preview.dz-success .dz-success-mark{-webkit-animation:passing-through 3s cubic-bezier(.77,0,.175,1);animation:passing-through 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview.dz-error .dz-error-mark{opacity:1;-webkit-animation:slide-in 3s cubic-bezier(.77,0,.175,1);animation:slide-in 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview .dz-error-mark,.dropzone .dz-preview .dz-success-mark{pointer-events:none;opacity:0;z-index:500;position:absolute;display:block;top:50%;left:50%;margin-left:-27px;margin-top:-27px}.dropzone .dz-preview .dz-error-mark svg,.dropzone .dz-preview .dz-success-mark svg{display:block;width:54px;height:54px}.dropzone .dz-preview.dz-processing .dz-progress{opacity:1;transition:all .2s linear}.dropzone .dz-preview.dz-complete .dz-progress{opacity:0;transition:opacity .4s ease-in}.dropzone .dz-preview:not(.dz-processing) .dz-progress{-webkit-animation:pulse 6s ease infinite;animation:pulse 6s ease infinite}.dropzone .dz-preview .dz-progress{opacity:1;z-index:1000;pointer-events:none;position:absolute;height:16px;left:50%;top:50%;margin-top:-8px;width:80px;margin-left:-40px;background:hsla(0,0%,100%,.9);-webkit-transform:scale(1);border-radius:8px;overflow:hidden}.dropzone .dz-preview .dz-progress .dz-upload{background:#333;background:linear-gradient(180deg,#666,#444);position:absolute;top:0;left:0;bottom:0;width:0;transition:width .3s ease-in-out}.dropzone .dz-preview.dz-error .dz-error-message{display:block}.dropzone .dz-preview.dz-error:hover .dz-error-message{opacity:1;pointer-events:auto}.dropzone .dz-preview .dz-error-message{pointer-events:none;z-index:1000;position:absolute;display:block;display:none;opacity:0;transition:opacity .3s ease;border-radius:8px;font-size:13px;top:130px;left:-10px;width:140px;background:#be2626;background:linear-gradient(180deg,#be2626,#a92222);padding:.5em 1.2em;color:#fff}.dropzone .dz-preview .dz-error-message:after{content:\"\";position:absolute;top:-6px;left:64px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #be2626}.vue-dropzone{border:2px solid #e5e5e5;font-family:Arial,sans-serif;letter-spacing:.2px;color:#777;transition:.2s linear}.vue-dropzone:hover{background-color:#f6f6f6}.vue-dropzone>i{color:#ccc}.vue-dropzone>.dz-preview .dz-image{border-radius:0;width:100%;height:100%}.vue-dropzone>.dz-preview .dz-image img:not([src]){width:200px;height:200px}.vue-dropzone>.dz-preview .dz-image:hover img{transform:none;-webkit-filter:none}.vue-dropzone>.dz-preview .dz-details{bottom:0;top:0;color:#fff;background-color:rgba(33,150,243,.8);transition:opacity .2s linear;text-align:left}.vue-dropzone>.dz-preview .dz-details .dz-filename{overflow:hidden}.vue-dropzone>.dz-preview .dz-details .dz-filename span,.vue-dropzone>.dz-preview .dz-details .dz-size span{background-color:transparent}.vue-dropzone>.dz-preview .dz-details .dz-filename:not(:hover) span{border:none}.vue-dropzone>.dz-preview .dz-details .dz-filename:hover span{background-color:transparent;border:none}.vue-dropzone>.dz-preview .dz-progress .dz-upload{background:#ccc}.vue-dropzone>.dz-preview .dz-remove{position:absolute;z-index:30;color:#fff;margin-left:15px;padding:10px;top:inherit;bottom:15px;border:2px solid #fff;text-decoration:none;text-transform:uppercase;font-size:.8rem;font-weight:800;letter-spacing:1.1px;opacity:0}.vue-dropzone>.dz-preview:hover .dz-remove{opacity:1}.vue-dropzone>.dz-preview .dz-error-mark,.vue-dropzone>.dz-preview .dz-success-mark{margin-left:auto;margin-top:auto;width:100%;top:35%;left:0}.vue-dropzone>.dz-preview .dz-error-mark svg,.vue-dropzone>.dz-preview .dz-success-mark svg{margin-left:auto;margin-right:auto}.vue-dropzone>.dz-preview .dz-error-message{margin-left:auto;margin-right:auto;left:0;width:100%;text-align:center}.vue-dropzone>.dz-preview .dz-error-message:after{display:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_forms_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(249);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_forms_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_forms_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_forms_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_step3_forms_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--red:#ea5353;--cyan:#45d3d3;--orange:#fcaf4a;--blue:#549ef2;--varyDarkBlue:#4c4e61;--grayishBlue:#a3a5ae;--veryLightGray:#fafafa;--weight1:200;--weight2:400;--weight3:600}.box-ads-2 p{color:#000;font-weight:700}.box-ads-2{border-radius:5px;box-shadow:0 30px 40px -20px #a3a5ae;box-shadow:0 30px 40px -20px var(--grayishBlue);padding:30px;margin:20px;height:200px}.box-ads-2-no-icon{height:100px!important}.box-ads-2:hover{cursor:pointer;transition:all .5s linear;background-color:#30a8d5;border-bottom:3px solid #1b6784}.box-ads-2:hover p{color:#fff!important}@media (max-width:450px){.box-ads-2{height:200px}}@media (max-width:950px) and (min-width:450px){.box-ads-2{text-align:center;height:180px}}.cyan-ads{border-top:3px solid #45d3d3;border-top:3px solid var(--cyan)}.red-ads{border-top:3px solid #ea5353;border-top:3px solid var(--red)}.blue-ads{border-top:3px solid #549ef2;border-top:3px solid var(--blue)}.orange-ads{border-top:3px solid #fcaf4a;border-top:3px solid var(--orange)}@media (min-width:950px){.box-ads-2,.header p{width:100%}}.preview-img{border-radius:20px;overflow:hidden;width:100%;height:200px;position:relative;display:block;z-index:10;-o-object-fit:contain;object-fit:contain}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/new-ads/step3-forms.vue?vue&type=template&id=7f8e3eb9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container my-4"},[_vm._ssrNode("<div class=\"mt-3\">","</div>",[_vm._ssrNode("<h4>","</h4>",[_vm._ssrNode("<span>3. Adım</span> "),_c('m-icon',[_vm._v("arrow_forward")]),_vm._ssrNode(" İlan Detayını Girin")],2)]),_vm._ssrNode(" <div class=\"my-2\">"+(_vm._ssrList((_vm.getNewAds.mainCategory.data),function(mainCategory,i){return ("<span>"+_vm._ssrEscape(_vm._s(mainCategory.name)+" > ")+"</span>")}))+" "+(_vm._ssrList((_vm.getNewAds.categories.data),function(cate,i){return ("<span>"+_vm._ssrEscape(_vm._s(cate.name)+" > ")+"</span>")}))+"</div> <hr> "),_vm._ssrNode("<h4>","</h4>",[_c('m-icon',{attrs:{"color":"#30a8d5"}},[_vm._v("hdr_strong")]),_vm._ssrNode(" İlan Detayı")],2),_vm._ssrNode(" "),_c('er-form-input',{attrs:{"id":"title","block":"","label":_vm.$t('ads.new.title')}}),_vm._ssrNode(" <label for=\"editor\">"+_vm._ssrEscape(_vm._s(_vm.$t('ads.new.description')))+"</label> "),_c('CkEditor',{attrs:{"id":"editor"},model:{value:(_vm.description),callback:function ($$v) {_vm.description=$$v},expression:"description"}}),_vm._ssrNode(" <hr> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12 col-md-8 col-lg-6\">","</div>",[_c('er-form-input',{attrs:{"id":"price","label":_vm.$t('ads.new.price')}}),_vm._ssrNode(" "),_c('er-form-input',{attrs:{"id":"year","label":_vm.$t('ads.new.year')}}),_vm._ssrNode(" "),_c('er-form-input',{attrs:{"id":"stateRooms","label":_vm.$t('ads.new.stateRooms')}}),_vm._ssrNode(" "),_c('er-form-input',{attrs:{"id":"guest","label":_vm.$t('ads.new.guest')}}),_vm._ssrNode(" "),_c('er-form-input',{attrs:{"id":"sleeps","label":_vm.$t('ads.new.sleeps')}})],2)]),_vm._ssrNode(" <hr> "),_vm._ssrNode("<div class=\"row my-3\">","</div>",[_vm._ssrNode("<h4>","</h4>",[_c('m-icon',{attrs:{"color":"#30a8d5"}},[_vm._v("hdr_strong")]),_vm._ssrNode(" Adres Bilgileri")],2)]),_vm._ssrNode(" <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-4\"><label for=\"city\">İlinizi Seçin</label> <select id=\"city\" data-width=\"100%\" data-live-search=\"true\" data-style=\"ui-select\" class=\"selectpicker\">"+(_vm._ssrList((_vm.cities),function(city,i){return ("<option"+(_vm._ssrAttr("value",city.id))+">"+_vm._ssrEscape(_vm._s(city.name))+"</option>")}))+"</select></div> <div class=\"col-12 col-md-6 col-lg-4\"><label for=\"city\">İlçenizi Seçin</label> <select id=\"city\" data-width=\"100%\" data-live-search=\"true\" data-style=\"ui-select\" class=\"selectpicker\">"+(_vm._ssrList((_vm.cities),function(city,i){return ("<option"+(_vm._ssrAttr("value",city.id))+">"+_vm._ssrEscape(_vm._s(city.name))+"</option>")}))+"</select></div></div> "),_vm._ssrNode("<div class=\"my-3\">","</div>",[_vm._ssrNode("<h4>","</h4>",[_c('m-icon',{attrs:{"color":"#30a8d5"}},[_vm._v("hdr_strong")]),_vm._ssrNode(" Fotoğraf")],2),_vm._ssrNode(" <h6>Resimlerinizi yüklemek için kutucuğun içine tıklayın veya sürükleyin.</h6>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12 col-md-12 col-lg-12\">","</div>",[_c('dropzone',{ref:"el",attrs:{"id":"foo","options":_vm.options,"destroyDropzone":true,"duplicateCheck":""},on:{"vdropzone-success":_vm.test}},[_c('span',[_vm._v("Resimlerinizi yüklemek için kutucuğun içine tıklayın veya sürükleyin.")])])],1)]),_vm._ssrNode(" "),(_vm.MyUploads.length!=0)?_vm._ssrNode("<div class=\"row my-3\">","</div>",[_vm._ssrNode("<h4>","</h4>",[_c('m-icon',{attrs:{"color":"#30a8d5"}},[_vm._v("hdr_strong")]),_vm._ssrNode(" Eklenen Fotoğraflar <small>(En fazla 10 resim yüklenebilir.)</small>")],2)]):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",_vm._l((_vm.MyUploads),function(file,i){return _vm._ssrNode("<div class=\"col-6-col-md-3 col-lg-2\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",file.dataURL))+" alt class=\"preview-img\"> "),_vm._ssrNode("<div class=\"my-2 text-center\">","</div>",[_vm._ssrNode("<button class=\"button-error w-100\">","</button>",[_c('m-icon',{staticClass:"mr-2"},[_vm._v("close")]),_vm._ssrNode(" Fotoğrafı Kaldır\n    ")],2)])],2)}),0),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"row my-3\">","</div>",[_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<h4>","</h4>",[_c('m-icon',{attrs:{"color":"#30a8d5"}},[_vm._v("hdr_strong")]),_vm._ssrNode(" Size Nasıl Ulaşılsın?")],2)]),_vm._ssrNode(" <div class=\"col-12\"><div class=\"card\"><div class=\"card-body d-flex justify-content-center align-center\"><div class=\"user-avatar\"><img src=\"https://bootdey.com/img/Content/avatar/avatar7.png\" alt=\"Maxwell Admin\" style=\"width:70px\"></div> <p class=\"mx-3\"><strong> GÜRHAN ARSLAN</strong> <br> <strong> Telefon : 506 487 0557</strong> <br></p></div></div> <div><input type=\"checkbox\" name=\"phone\" id=\"phone\"><label for=\"phone\" class=\"mx-2\">Telefon Numaram gözüksün.</label></div> <div><input type=\"checkbox\" name=\"message\" id=\"message\"><label for=\"message\" class=\"mx-2\">Kullanıcılar bana site üzerinden mesaj atabilsin.</label></div></div>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row d-flex justify-content-end mt-4\">","</div>",[_c('er-primary-button',[_vm._v("DEVAM ET")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/new-ads/step3-forms.vue?vue&type=template&id=7f8e3eb9&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./components/editor/ck-editor.vue + 4 modules
var ck_editor = __webpack_require__(258);

// CONCATENATED MODULE: ./helpers/city.js
/* harmony default export */ var city = ([{
  "id": "15",
  "name": "BURDUR"
}, {
  "id": "26",
  "name": "ESKIŞEHIR"
}, {
  "id": "18",
  "name": "ÇANKIRI"
}, {
  "id": "80",
  "name": "OSMANIYE"
}, {
  "id": "41",
  "name": "KOCAELI"
}, {
  "id": "27",
  "name": "GAZIANTEP"
}, {
  "id": "31",
  "name": "HATAY"
}, {
  "id": "38",
  "name": "KAYSERI"
}, {
  "id": "29",
  "name": "GÜMÜŞHANE"
}, {
  "id": "54",
  "name": "SAKARYA"
}, {
  "id": "16",
  "name": "BURSA"
}, {
  "id": "69",
  "name": "BAYBURT"
}, {
  "id": "17",
  "name": "ÇANAKKALE"
}, {
  "id": "57",
  "name": "SINOP"
}, {
  "id": "74",
  "name": "BARTIN"
}, {
  "id": "503",
  "name": "MAĞUSA (KIBRIS)"
}, {
  "id": "33",
  "name": "MERSIN"
}, {
  "id": "51",
  "name": "NIĞDE"
}, {
  "id": "42",
  "name": "KONYA"
}, {
  "id": "60",
  "name": "TOKAT"
}, {
  "id": "2",
  "name": "ADIYAMAN"
}, {
  "id": "6",
  "name": "ANKARA"
}, {
  "id": "66",
  "name": "YOZGAT"
}, {
  "id": "52",
  "name": "ORDU"
}, {
  "id": "53",
  "name": "RIZE"
}, {
  "id": "1",
  "name": "ADANA"
}, {
  "id": "40",
  "name": "KIRŞEHIR"
}, {
  "id": "76",
  "name": "IĞDIR"
}, {
  "id": "45",
  "name": "MANISA"
}, {
  "id": "21",
  "name": "DIYARBAKIR"
}, {
  "id": "64",
  "name": "UŞAK"
}, {
  "id": "501",
  "name": "LEFKOŞE (KIBRIS)"
}, {
  "id": "5",
  "name": "AMASYA"
}, {
  "id": "24",
  "name": "ERZINCAN"
}, {
  "id": "32",
  "name": "ISPARTA"
}, {
  "id": "502",
  "name": "GIRNE (KIBRIS)"
}, {
  "id": "23",
  "name": "ELAZIĞ"
}, {
  "id": "78",
  "name": "KARABÜK"
}, {
  "id": "30",
  "name": "HAKKARI"
}, {
  "id": "36",
  "name": "KARS"
}, {
  "id": "67",
  "name": "ZONGULDAK"
}, {
  "id": "68",
  "name": "AKSARAY"
}, {
  "id": "44",
  "name": "MALATYA"
}, {
  "id": "10",
  "name": "BALIKESIR"
}, {
  "id": "20",
  "name": "DENIZLI"
}, {
  "id": "49",
  "name": "MUŞ"
}, {
  "id": "73",
  "name": "ŞIRNAK"
}, {
  "id": "48",
  "name": "MUĞLA"
}, {
  "id": "59",
  "name": "TEKIRDAĞ"
}, {
  "id": "39",
  "name": "KIRKLARELI"
}, {
  "id": "56",
  "name": "SIIRT"
}, {
  "id": "28",
  "name": "GIRESUN"
}, {
  "id": "63",
  "name": "ŞANLIURFA"
}, {
  "id": "9",
  "name": "AYDIN"
}, {
  "id": "72",
  "name": "BATMAN"
}, {
  "id": "13",
  "name": "BITLIS"
}, {
  "id": "3",
  "name": "AFYONKARAHISAR"
}, {
  "id": "8",
  "name": "ARTVIN"
}, {
  "id": "4",
  "name": "AĞRI"
}, {
  "id": "77",
  "name": "YALOVA"
}, {
  "id": "50",
  "name": "NEVŞEHIR"
}, {
  "id": "61",
  "name": "TRABZON"
}, {
  "id": "58",
  "name": "SIVAS"
}, {
  "id": "7",
  "name": "ANTALYA"
}, {
  "id": "37",
  "name": "KASTAMONU"
}, {
  "id": "47",
  "name": "MARDIN"
}, {
  "id": "46",
  "name": "KAHRAMANMARAŞ"
}, {
  "id": "25",
  "name": "ERZURUM"
}, {
  "id": "75",
  "name": "ARDAHAN"
}, {
  "id": "81",
  "name": "DÜZCE"
}, {
  "id": "55",
  "name": "SAMSUN"
}, {
  "id": "19",
  "name": "ÇORUM"
}, {
  "id": "65",
  "name": "VAN"
}, {
  "id": "14",
  "name": "BOLU"
}, {
  "id": "43",
  "name": "KÜTAHYA"
}, {
  "id": "11",
  "name": "BILECIK"
}, {
  "id": "34",
  "name": "ISTANBUL"
}, {
  "id": "79",
  "name": "KILIS"
}, {
  "id": "62",
  "name": "TUNCELI"
}, {
  "id": "12",
  "name": "BINGÖL"
}, {
  "id": "22",
  "name": "EDIRNE"
}, {
  "id": "71",
  "name": "KIRIKKALE"
}, {
  "id": "70",
  "name": "KARAMAN"
}, {
  "id": "35",
  "name": "IZMIR"
}]);
// EXTERNAL MODULE: external "nuxt-dropzone"
var external_nuxt_dropzone_ = __webpack_require__(164);
var external_nuxt_dropzone_default = /*#__PURE__*/__webpack_require__.n(external_nuxt_dropzone_);

// EXTERNAL MODULE: ./node_modules/nuxt-dropzone/dropzone.css
var dropzone = __webpack_require__(271);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/new-ads/step3-forms.vue?vue&type=script&lang=js&
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





/* harmony default export */ var step3_formsvue_type_script_lang_js_ = ({
  components: {
    CkEditor: ck_editor["default"],
    Dropzone: external_nuxt_dropzone_default.a
  },
  computed: { ...Object(external_vuex_["mapGetters"])({
      'getCategories': 'category/getCategories',
      'getNewAds': 'ads/getNewAds'
    })
  },

  data() {
    return {
      MyUploads: [],
      options: {
        url: "http://httpbin.org/anything"
      },
      cities: city,
      description: "",
      colors: ['red-ads', 'cyan-ads', 'blue-ads', 'orange-ads']
    };
  },

  methods: {
    removeItem(thisFile, i) {
      this.$refs.el.removeFile(thisFile);
      this.MyUploads.splice(i, 1);
      console.log("File removed!");
    },

    test(e, b) {
      this.$console(e);
      this.MyUploads.push(e);
      setTimeout(() => {// this.removeItem(this.MyUploads[0])
      }, 3000);
    },

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

  mounted() {
    const instance = this.$refs.el;
    console.log(instance);
    this.controlMainCategory();
  }

});
// CONCATENATED MODULE: ./components/new-ads/step3-forms.vue?vue&type=script&lang=js&
 /* harmony default export */ var new_ads_step3_formsvue_type_script_lang_js_ = (step3_formsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/new-ads/step3-forms.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(273)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  new_ads_step3_formsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6529f2c1"
  
)

/* harmony default export */ var step3_forms = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/give-ads/forms.vue?vue&type=template&id=0b401dc4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Title'),_vm._ssrNode(" "),_c('Forms')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/give-ads/forms.vue?vue&type=template&id=0b401dc4&

// EXTERNAL MODULE: ./components/shared/title.vue + 4 modules
var title = __webpack_require__(16);

// EXTERNAL MODULE: ./components/new-ads/step3-forms.vue + 5 modules
var step3_forms = __webpack_require__(281);

// EXTERNAL MODULE: ./mixins/initialApp.js
var initialApp = __webpack_require__(166);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/give-ads/forms.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//



/* harmony default export */ var formsvue_type_script_lang_js_ = ({
  mixins: [initialApp["a" /* default */]],
  components: {
    Title: title["default"],
    Forms: step3_forms["default"]
  }
});
// CONCATENATED MODULE: ./pages/give-ads/forms.vue?vue&type=script&lang=js&
 /* harmony default export */ var give_ads_formsvue_type_script_lang_js_ = (formsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/give-ads/forms.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  give_ads_formsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6ea89988"
  
)

/* harmony default export */ var give_ads_forms = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=forms.js.map
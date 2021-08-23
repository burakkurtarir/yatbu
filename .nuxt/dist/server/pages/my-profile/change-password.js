exports.ids = [70,53];
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

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/change-password.vue?vue&type=template&id=5942e4a0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row justify-content-md-center w-100"},[_vm._ssrNode("<div class=\"col-12 col-md-12 col-lg-8\">","</div>",[_vm._ssrNode("<div class=\"my-3\"><h5 class=\"bg-light-primary p-3\">"+_vm._ssrEscape(_vm._s(_vm.$t('profile.title.changePassword')))+"</h5></div> "),_c('er-form-input',{attrs:{"id":"oldpassword","label":_vm.$t('profile.oldPassword')}}),_vm._ssrNode(" "),_c('er-form-input',{attrs:{"id":"password","label":_vm.$t('profile.password')}}),_vm._ssrNode(" "),_c('er-form-input',{attrs:{"id":"repassword","label":_vm.$t('profile.rePassword')}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"text-right mt-3\">","</div>",[_c('er-primary-button',[_vm._v(_vm._s(_vm.$t('button.submit')))])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/profile/change-password.vue?vue&type=template&id=5942e4a0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/change-password.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var change_passwordvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/profile/change-password.vue?vue&type=script&lang=js&
 /* harmony default export */ var profile_change_passwordvue_type_script_lang_js_ = (change_passwordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/profile/change-password.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_change_passwordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "45e0c594"
  
)

/* harmony default export */ var change_password = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/my-profile/change-password.vue?vue&type=template&id=645a0fc0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ChangePassword')}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/my-profile/change-password.vue?vue&type=template&id=645a0fc0&

// EXTERNAL MODULE: ./components/profile/change-password.vue + 4 modules
var change_password = __webpack_require__(286);

// EXTERNAL MODULE: ./mixins/initialApp.js
var initialApp = __webpack_require__(166);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/my-profile/change-password.vue?vue&type=script&lang=js&
//
//
//
//


/* harmony default export */ var change_passwordvue_type_script_lang_js_ = ({
  // mixins:[Init],
  components: {
    ChangePassword: change_password["default"]
  },
  layout: 'profile'
});
// CONCATENATED MODULE: ./pages/my-profile/change-password.vue?vue&type=script&lang=js&
 /* harmony default export */ var my_profile_change_passwordvue_type_script_lang_js_ = (change_passwordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/my-profile/change-password.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  my_profile_change_passwordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "557c6cf9"
  
)

/* harmony default export */ var my_profile_change_password = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=change-password.js.map
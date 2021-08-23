exports.ids = [67,30,31,32,33,34,35,36,37,38,39,50,57];
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

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/faq.vue?vue&type=template&id=b11e85fa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"text-left title-padding-m-top\"><h2 class=\"ui-title\">Boat Rental FAQ’s</h2> <p>Dolore magna aliqua enim ad minim veniam, quis nostrudreprehenderits\n\t\t\t\t\t\t\t\t<br> dolore fugiat nulla pariatur lorem ipsum dolor sit amet. </p> <img src=\"assets/img/decore03.png\" alt=\"photo\"></div> <div id=\"accordion-1\" class=\"ui-accordion accordion\"><div class=\"card\"><div id=\"heading1\" class=\"card-header\"><h3 class=\"mb-0\"><button type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse1\" aria-expanded=\"true\" aria-controls=\"collapse1\" class=\"ui-accordion__link collapsed\"><span class=\"ui-accordion__number\">01</span>How to book a yacht/boat from Nevica?<i class=\"ic fas fa-chevron-down\"></i></button></h3></div> <div id=\"collapse1\" data-aria-labelledby=\"heading1\" data-parent=\"#accordion-1\" class=\"collapse show\"><div class=\"card-body\">Quis nostrud exercitate laboridy aliquip duis irure sed dolor ipsum excpture fugiat estan veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex velit esse cillum dolore eu fugiat nulla pariatur.</div></div></div> <div class=\"card\"><div id=\"heading2\" class=\"card-header\"><h3 class=\"mb-0\"><button type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse2\" aria-expanded=\"false\" aria-controls=\"collapse2\" class=\"ui-accordion__link collapsed\"><span class=\"ui-accordion__number\">02</span>What are the safety precautions maintained by you?<i class=\"ic fas fa-chevron-down\"></i></button></h3></div> <div id=\"collapse2\" data-aria-labelledby=\"heading2\" data-parent=\"#accordion-1\" class=\"collapse\"><div class=\"card-body\">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson</div></div></div> <div class=\"card\"><div id=\"heading3\" class=\"card-header\"><h3 class=\"mb-0\"><button type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse3\" aria-expanded=\"false\" aria-controls=\"collapse3\" class=\"ui-accordion__link collapsed\"><span class=\"ui-accordion__number\">03</span>What if the weather gets unfavourable for boating?<i class=\"ic fas fa-chevron-down\"></i></button></h3></div> <div id=\"collapse3\" data-aria-labelledby=\"heading3\" data-parent=\"#accordion-1\" class=\"collapse\"><div class=\"card-bodyFood\">truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</div></div></div> <div class=\"card\"><div id=\"heading4\" class=\"card-header\"><h3 class=\"mb-0\"><button type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse4\" aria-expanded=\"false\" aria-controls=\"collapse4\" class=\"ui-accordion__link collapsed\"><span class=\"ui-accordion__number\">04</span>Can I bring my own food or drinking water?<i class=\"ic fas fa-chevron-down\"></i></button></h3></div> <div id=\"collapse4\" data-aria-labelledby=\"heading4\" data-parent=\"#accordion-1\" class=\"collapse\"><div class=\"card-body\">Nliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson</div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/shared/faq.vue?vue&type=template&id=b11e85fa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/faq.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var faqvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/shared/faq.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_faqvue_type_script_lang_js_ = (faqvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/shared/faq.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shared_faqvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4e0c1798"
  
)

/* harmony default export */ var faq = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product-card/best-product.card.vue?vue&type=template&id=04c1ddaa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"b-goods"},[_c('nuxt-link',{staticClass:"b-goods__img",attrs:{"to":"detail/223"}},[_c('img',{staticClass:"img-scale",attrs:{"src":"assets/img/y008.jpg","alt":"photo"}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"b-goods__main\">","</div>",[_vm._ssrNode("<div class=\"row no-gutters\">","</div>",[_vm._ssrNode("<div class=\"col\">","</div>",[_c('nuxt-link',{staticClass:"b-goods__title",attrs:{"to":"detail/223"}},[_vm._v("Cozmic Sunny")]),_vm._ssrNode(" <div class=\"b-goods__info\">Stock#: 45098ES - 4 door, White, 2.5L, FWD, Automatic 6-Speed, 2.5L 5 cyls, Florida CA</div>")],2),_vm._ssrNode(" <div class=\"col-auto\"><div class=\"b-goods__price text-primary\"><span class=\"b-goods__price-title\">DEALER<br>PRICE</span><span class=\"b-goods__price-number\">$230\n                                                    <span class=\"b-goods__price-after-price\">"+_vm._ssrEscape(_vm._s(_vm.$t('general.perDay')))+"</span></span></div></div>")],2),_vm._ssrNode(" <div class=\"b-goods-descrip_nev_wrap\"><div class=\"b-goods-descrip_nev\"><div class=\"b-goods-descrip__nev\"><i class=\"fas fa-user\"></i> <span class=\"b-goods-descrip__info\">"+_vm._ssrEscape("12 "+_vm._s(_vm.$t('general.guests')))+"</span></div> <div class=\"b-goods-descrip__nev\"><i class=\"fas fa-bed\"></i> <span class=\"b-goods-descrip__info\">2 Master Bedroom</span></div></div> <div class=\"b-goods-descrip_nev\"><div class=\"b-goods-descrip__nev\"><i class=\"fas fa-arrows-alt-h\"></i> <span class=\"b-goods-descrip__info\">"+_vm._ssrEscape(" 44 "+_vm._s(_vm.$t('general.feet')))+"</span></div> <div class=\"b-goods-descrip__nev\"><i class=\"fas fa-columns\"></i> <span class=\"b-goods-descrip__info\"> Sun Deck, Kitchen ...</span></div></div></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/product-card/best-product.card.vue?vue&type=template&id=04c1ddaa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product-card/best-product.card.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var best_product_cardvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/product-card/best-product.card.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_card_best_product_cardvue_type_script_lang_js_ = (best_product_cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/product-card/best-product.card.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_card_best_product_cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5dc68503"
  
)

/* harmony default export */ var best_product_card = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/components/section-5/progress.vue?vue&type=template&id=49af0f62&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row bg-counters"},[_vm._ssrNode("<div class=\"col-12 col-md-6 col-lg-3\"><div class=\"b-progress-list cr-counters bg-accent-1 bg-accent-color1\"><div class=\"cr-counters__icon\"><i class=\"flaticon-sailor\"></i></div> <div data-percent=\"240\" class=\"cr-counters__numbers js-chart\"><span class=\"js-percent\"></span> <span>+</span></div> <div class=\"cr-counters__description\">Travel Destinations Offered</div></div></div> <div class=\"col-12 col-md-6 col-lg-3\"><div class=\"cr-counters bg-accent-2 bg-accent-color2 \"><div class=\"cr-counters__icon\"><i class=\"flaticon-snorkel\"></i></div> <div data-percent=\"980\" class=\"cr-counters__numbers js-chart\"><span class=\"js-percent\"></span> <span>+</span></div> <div class=\"cr-counters__description\">Travel Destinations Offered</div></div></div> <div class=\"col-12 col-md-6 col-lg-3\"><div class=\"cr-counters bg-accent-1 bg-accent-color3\"><div class=\"cr-counters__icon\"><i class=\"flaticon-island-1\"></i></div> <div data-percent=\"175\" class=\"cr-counters__numbers js-chart\"><span class=\"js-percent\"></span> <span>+</span></div> <div class=\"cr-counters__description\">Travel Destinations Offered</div></div></div> <div class=\"col-12 col-md-6 col-lg-3\"><div class=\"cr-counters  bg-accent-color4\"><div class=\"cr-counters__icon\"><i class=\"flaticon-chef-hat\"></i></div> <div data-percent=\"630\" class=\"cr-counters__numbers js-chart\"><span class=\"js-percent\"></span> <span>+</span></div> <div class=\"cr-counters__description\">Travel Destinations Offered</div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/components/section-5/progress.vue?vue&type=template&id=49af0f62&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/components/section-5/progress.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var progressvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/home/components/section-5/progress.vue?vue&type=script&lang=js&
 /* harmony default export */ var section_5_progressvue_type_script_lang_js_ = (progressvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home/components/section-5/progress.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  section_5_progressvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "66351844"
  
)

/* harmony default export */ var progress = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/components/section-6/apply.vue?vue&type=template&id=064f46d9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-md-6 col-lg-6"},[_vm._ssrNode("<div class=\"text-left\">","</div>",[_vm._ssrNode("<h2 class=\"ui-title\">Booking Form</h2> <p>Dolore magna aliqua enim ad minim veniam, quis nostrudreprehenderits\n\t\t\t\t\t\t\t\t<br> dolore fugiat nulla pariatur lorem ipsum dolor sit amet. </p> <img src=\"assets/img/decore03.png\" alt=\"photo\"> "),_vm._ssrNode("<form action=\"#\">","</form>",[_vm._ssrNode("<div class=\"row row-form-b\">","</div>",[_vm._ssrNode("<div class=\"col-md-6\"><div class=\"form-group\"><input type=\"text\" placeholder=\"First Name\" class=\"form-control\"></div></div> <div class=\"col-md-6\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Last Name\" class=\"form-control\"></div></div> <div class=\"col-md-6\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Email\" class=\"form-control\"></div></div> <div class=\"col-md-6\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Phone\" class=\"form-control\"></div></div> <div class=\"col-md-12\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Subject\" class=\"form-control\"></div></div> <div class=\"col-12\"><div class=\"form-group\"><textarea rows=\"6\" placeholder=\"Message\" class=\"form-control\"></textarea></div></div> "),_vm._ssrNode("<div class=\"col-md-12\">","</div>",[_c('er-primary-button',{staticClass:"radius m-0"},[_vm._v(_vm._s(_vm.$t('button.submit')))])],1)],2)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/components/section-6/apply.vue?vue&type=template&id=064f46d9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/components/section-6/apply.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var applyvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/home/components/section-6/apply.vue?vue&type=script&lang=js&
 /* harmony default export */ var section_6_applyvue_type_script_lang_js_ = (applyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home/components/section-6/apply.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  section_6_applyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "422f5828"
  
)

/* harmony default export */ var apply = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/components/section-6/faq.vue?vue&type=template&id=6cd2818a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-md-6 col-lg-6"},[_c('FAQ')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/components/section-6/faq.vue?vue&type=template&id=6cd2818a&

// EXTERNAL MODULE: ./components/shared/faq.vue + 4 modules
var faq = __webpack_require__(194);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/components/section-6/faq.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var faqvue_type_script_lang_js_ = ({
  components: {
    FAQ: faq["default"]
  }
});
// CONCATENATED MODULE: ./components/home/components/section-6/faq.vue?vue&type=script&lang=js&
 /* harmony default export */ var section_6_faqvue_type_script_lang_js_ = (faqvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home/components/section-6/faq.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  section_6_faqvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b205a760"
  
)

/* harmony default export */ var section_6_faq = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/components/section-5-opportunity.vue?vue&type=template&id=61cede22&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"section-progress  "},[_vm._ssrNode("<div class=\"container\">","</div>",[_c('Opportunity'),_vm._ssrNode(" "),_c('Progress')],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/components/section-5-opportunity.vue?vue&type=template&id=61cede22&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/components/section-5/opportunity.vue?vue&type=template&id=170cd0a6&
var opportunityvue_type_template_id_170cd0a6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dw-wrap"},[_vm._ssrNode("<div class=\"row\"><div class=\"col-xs-12 col-md-4\"><div class=\"dw-img\"><img src=\"assets/img/deal-weak.jpg\" alt=\"photo\"></div></div> <div class=\"col-xs-12 col-md-8\"><div class=\"dw-info\"><h5 class=\"decore-title\">Deal Of The Week\n\n                                </h5> <h3>DayDream Boat <span>Rent For $800 / HRS</span></h3> <div class=\"dw-text\">Builder /Model: French Waves | Type/Year: House Boat 2019 | Length: 105 FT 32 M Charter Guests: 200 | Crew Members: 6</div> <div class=\"dw-footer\"><i class=\"fas fa-phone-square\"></i> Booking a Charter Boat <strong>+1 755 302 8549</strong></div></div></div></div>")])}
var opportunityvue_type_template_id_170cd0a6_staticRenderFns = []


// CONCATENATED MODULE: ./components/home/components/section-5/opportunity.vue?vue&type=template&id=170cd0a6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/components/section-5/opportunity.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var opportunityvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/home/components/section-5/opportunity.vue?vue&type=script&lang=js&
 /* harmony default export */ var section_5_opportunityvue_type_script_lang_js_ = (opportunityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home/components/section-5/opportunity.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  section_5_opportunityvue_type_script_lang_js_,
  opportunityvue_type_template_id_170cd0a6_render,
  opportunityvue_type_template_id_170cd0a6_staticRenderFns,
  false,
  injectStyles,
  null,
  "ab387ce8"
  
)

/* harmony default export */ var opportunity = (component.exports);
// EXTERNAL MODULE: ./components/home/components/section-5/progress.vue + 4 modules
var progress = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/components/section-5-opportunity.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var components_section_5_opportunityvue_type_script_lang_js_ = ({
  components: {
    Opportunity: opportunity,
    Progress: progress["default"]
  }
});
// CONCATENATED MODULE: ./components/home/components/section-5-opportunity.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_components_section_5_opportunityvue_type_script_lang_js_ = (components_section_5_opportunityvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/home/components/section-5-opportunity.vue



function section_5_opportunity_injectStyles (context) {
  
  
}

/* normalize component */

var section_5_opportunity_component = Object(componentNormalizer["a" /* default */])(
  home_components_section_5_opportunityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  section_5_opportunity_injectStyles,
  null,
  "317ff464"
  
)

/* harmony default export */ var section_5_opportunity = __webpack_exports__["default"] = (section_5_opportunity_component.exports);

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/components/section-2.vue?vue&type=template&id=c4055082&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"b-about"},[_vm._ssrNode("<div class=\"ui-decor ui-decor_down\"></div> <div class=\"container\"><div class=\"row\"><div class=\"col-lg-6 \"><div class=\"text-left\"><h2 class=\"ui-title\">Providing a large fleet\n                                of Boats for a perfect\n                                and dreamy experience</h2> <div class=\"ui-content\"><p>Eorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor\n\t\t\t\t\t\t\t\t\t<br> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n\t\t\t\t\t\t\t\t\t<br> aliquip ex ea commodo consequat. Duis aute irure dolorin reprehenderits vol\n\t\t\t\t\t\t\t\t\t<br> dolore fugiat nulla pariatur excepteur sint occaecat.</p> <ul class=\"arrow-list\"><li><i class=\"fas fa-long-arrow-alt-right\"></i>Stunning Cruise Paths You Follow</li> <li><i class=\"fas fa-long-arrow-alt-right\"></i>Premium Boats &amp; Yachts</li> <li><i class=\"fas fa-long-arrow-alt-right\"></i>Our Professional Approach</li> <li><i class=\"fas fa-long-arrow-alt-right\"></i>Quality Service Guaranteed</li></ul> <div class=\"gap25\"></div> <img src=\"assets/img/sign.jpg\" alt=\"sign\" class=\"sign\"> <span class=\"sign\">CEO, Autlines Boat Rentals</span></div></div></div> <div class=\"col-lg-6\"><img src=\"assets/img/2356456.png\" alt=\"photo\" class=\"about-image\"></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/components/section-2.vue?vue&type=template&id=c4055082&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/components/section-2.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var section_2vue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/home/components/section-2.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_section_2vue_type_script_lang_js_ = (section_2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home/components/section-2.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_section_2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "bec0fc76"
  
)

/* harmony default export */ var section_2 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/components/section-3-advantage.vue?vue&type=template&id=33d96774&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-advantages"},[_vm._ssrNode("<div class=\"container\"><div class=\"row\"><div class=\"col-lg-4\"><div class=\"b-advantages\"><div class=\"ic flaticon-rudder-1 text-secondary\"></div> <div class=\"b-advantages__main\"><div class=\"b-advantages__title\">Priceless Experience</div> <div class=\"decore01\"></div> <div class=\"b-advantages__info\">Asmod tempor incididunt labore magna ust enim sed veniams quis nostrud sed commodo ipsum duals.</div></div></div></div> <div class=\"col-lg-4\"><div class=\"b-advantages\"><div class=\"ic flaticon-snorkel text-secondary\"></div> <div class=\"b-advantages__main\"><div class=\"b-advantages__title\">Custom Packages</div> <div class=\"decore01\"></div> <div class=\"b-advantages__info\">Asmod tempor incididunt labore magna ust enim sed veniams quis nostrud sed commodo ipsum duals.</div></div></div></div> <div class=\"col-lg-4\"><div class=\"b-advantages\"><div class=\"ic flaticon-sailor text-secondary\"></div> <div class=\"b-advantages__main\"><div class=\"b-advantages__title\">Peoples Oriented </div> <div class=\"decore01\"></div> <div class=\"b-advantages__info\">Asmod tempor incididunt labore magna ust enim sed veniams quis nostrud sed commodo ipsum duals.</div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/components/section-3-advantage.vue?vue&type=template&id=33d96774&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/components/section-3-advantage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var section_3_advantagevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/home/components/section-3-advantage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_section_3_advantagevue_type_script_lang_js_ = (section_3_advantagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home/components/section-3-advantage.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_section_3_advantagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "51097938"
  
)

/* harmony default export */ var section_3_advantage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/components/section-4-ads.vue?vue&type=template&id=351377df&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"section-goods"},[_vm._ssrNode("<div class=\"section-default section-goods__inner bg-dark\"><div class=\"ui-decor ui-decor_mirror ui-decor_center\"></div> <div class=\"container\"><div class=\"text-center\"><h2 class=\"ui-title ui-title_light text-white\">"+_vm._ssrEscape(_vm._s(_vm.$t('ads.showcase')))+"</h2> <div class=\"row\"><div class=\"col-md-8 offset-md-2\"><p>"+_vm._ssrEscape(_vm._s(_vm.$t('ads.showcaseDescription')))+"</p> <img src=\"/assets/img/decore03.png\" alt=\"photo\"></div></div></div></div></div> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"section-goods__list\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",_vm._l((8),function(product,i){return _vm._ssrNode("<div class=\"col-xl-3 col-md-6\">","</div>",[_c('BestProductCard')],1)}),0),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"text-center mt-3\">","</div>",[_c('nuxt-link',{staticClass:"btn radius btn-border view-all-boats",attrs:{"to":"/list"}},[_vm._v(_vm._s(_vm.$t('ads.viewAllAds')))])],1)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/components/section-4-ads.vue?vue&type=template&id=351377df&

// EXTERNAL MODULE: ./components/product-card/best-product.card.vue + 4 modules
var best_product_card = __webpack_require__(202);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/components/section-4-ads.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var section_4_adsvue_type_script_lang_js_ = ({
  components: {
    BestProductCard: best_product_card["default"]
  }
});
// CONCATENATED MODULE: ./components/home/components/section-4-ads.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_section_4_adsvue_type_script_lang_js_ = (section_4_adsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home/components/section-4-ads.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_section_4_adsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a924f5ac"
  
)

/* harmony default export */ var section_4_ads = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/components/section-6-apply-faq.vue?vue&type=template&id=20efde72&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"section-form"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_c('ApplyForm'),_vm._ssrNode(" "),_c('FAQ')],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/components/section-6-apply-faq.vue?vue&type=template&id=20efde72&

// EXTERNAL MODULE: ./components/home/components/section-6/apply.vue + 4 modules
var apply = __webpack_require__(204);

// EXTERNAL MODULE: ./components/home/components/section-6/faq.vue + 4 modules
var faq = __webpack_require__(205);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/components/section-6-apply-faq.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var section_6_apply_faqvue_type_script_lang_js_ = ({
  components: {
    ApplyForm: apply["default"],
    FAQ: faq["default"]
  }
});
// CONCATENATED MODULE: ./components/home/components/section-6-apply-faq.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_section_6_apply_faqvue_type_script_lang_js_ = (section_6_apply_faqvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home/components/section-6-apply-faq.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_section_6_apply_faqvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5cd51f9a"
  
)

/* harmony default export */ var section_6_apply_faq = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/main.vue?vue&type=template&id=deb38a3e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"l-theme animated-css",attrs:{"data-header":"sticky","data-header-top":"200","data-canvas":"container"}},[_c('HomeMainSection'),_vm._ssrNode(" "),_c('Section2'),_vm._ssrNode(" "),_c('Section3'),_vm._ssrNode(" "),_c('Section4'),_vm._ssrNode(" "),_c('Section5'),_vm._ssrNode(" "),_c('Section6')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/main.vue?vue&type=template&id=deb38a3e&

// EXTERNAL MODULE: ./components/home/components/home-main-section.vue + 4 modules
var home_main_section = __webpack_require__(195);

// EXTERNAL MODULE: ./components/home/components/section-2.vue + 4 modules
var section_2 = __webpack_require__(240);

// EXTERNAL MODULE: ./components/home/components/section-3-advantage.vue + 4 modules
var section_3_advantage = __webpack_require__(241);

// EXTERNAL MODULE: ./components/home/components/section-4-ads.vue + 4 modules
var section_4_ads = __webpack_require__(242);

// EXTERNAL MODULE: ./components/home/components/section-5-opportunity.vue + 9 modules
var section_5_opportunity = __webpack_require__(224);

// EXTERNAL MODULE: ./components/home/components/section-6-apply-faq.vue + 4 modules
var section_6_apply_faq = __webpack_require__(243);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//







const initialSlider = () => {
  if ($('#main-slider').length) {
    setTimeout(() => {
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
    }, 250);
  }
};

/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  components: {
    HomeMainSection: home_main_section["default"],
    Section2: section_2["default"],
    Section3: section_3_advantage["default"],
    Section4: section_4_ads["default"],
    Section5: section_5_opportunity["default"],
    Section6: section_6_apply_faq["default"]
  },

  mounted() {
    if (window.jQuery) {
      initialSlider();
    }
  }

});
// CONCATENATED MODULE: ./components/home/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home/main.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5fada7ed"
  
)

/* harmony default export */ var main = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HomeMainSection: __webpack_require__(195).default})


/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=6e1ddcb9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Main')}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=6e1ddcb9&

// EXTERNAL MODULE: ./components/home/main.vue + 4 modules
var main = __webpack_require__(264);

// EXTERNAL MODULE: ./mixins/initialApp.js
var initialApp = __webpack_require__(166);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  mixins: [initialApp["a" /* default */]],
  components: {
    Main: main["default"]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "95ff9fcc"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map
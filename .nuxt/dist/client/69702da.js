(window.webpackJsonp=window.webpackJsonp||[]).push([[77,53,54],{384:function(t,e,r){"use strict";r(102);var o=function(){$(document).ready((function(){$((function(){$("[rel='tooltip']").tooltip()}));var t=$("#page-preloader");if(t.find(".spinner-loader").fadeOut(),t.delay(50).fadeOut("slow"),$(".scrollreveal").length&&(window.sr=ScrollReveal({reset:!0,duration:1e3,delay:200}),sr.reveal(".scrollreveal")),$(".img-scale").length&&$((function(){objectFitImages(".img-scale")})),$("body").length&&$(window).on("scroll",(function(){$(window).scrollTop();$(".b-progress-list").waypoint((function(){$(".js-chart").each((function(){$(".js-chart").easyPieChart({barColor:!1,trackColor:!1,scaleColor:!1,scaleLength:!1,lineCap:!1,lineWidth:!1,size:!1,animate:5e3,onStep:function(t,e,r){$(this.el).find(".js-percent").text(Math.round(r))}})}))}),{offset:"80%"})})),$(".js-scroll-next").on("click",(function(){var t=$(".js-scroll-next + .js-scroll-content");$(".js-scroll-next").hide(),t.show(),t.addClass("animated"),t.addClass("animation-done"),t.addClass("bounceInUp")})),$(".js-zoom-gallery").length&&$(".js-zoom-gallery").each((function(){$(this).magnificPopup({delegate:".js-zoom-gallery__item",type:"image",gallery:{enabled:!0},mainClass:"mfp-with-zoom",zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(t){return t.is("img")?t:t.find("img")}}})})),$(".js-zoom-images").length&&$(".js-zoom-images").magnificPopup({type:"image",mainClass:"mfp-with-zoom",zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(t){return t.is("img")?t:t.find("img")}}}),$(".popup-youtube").length&&$(".popup-youtube").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),$(".selectpicker").length&&$(".selectpicker").selectpicker(),$("#main-slider").length){var e=$("#main-slider").data("slider-width"),r=$("#main-slider").data("slider-height"),o=$("#main-slider").data("slider-arrows"),d=$("#main-slider").data("slider-buttons");$("#main-slider").sliderPro({width:e,height:r,arrows:o,buttons:d,fade:!0,fullScreen:!0,touchSwipe:!1,autoplay:!0})}if($(".js-slider").length&&$(".js-slider").slick(),$(".js-slider-for").length&&($(".js-slider-for").slick({arrows:!0,fade:!0,asNavFor:".js-slider-nav"}),$(".js-slider-nav").slick({slidesToShow:5,slidesToScroll:1,asNavFor:".js-slider-for",focusOnSelect:!0})),$("#filterPrice").length){var n=document.getElementById("filterPrice"),l=[document.getElementById("input-with-keypress-0"),document.getElementById("input-with-keypress-1")];noUiSlider.create(n,{start:[5e3,35e3],connect:!0,step:100,format:wNumb({decimals:0,prefix:"$",thousand:","}),range:{min:1e3,max:5e4}}),n.noUiSlider.on("update",(function(t,e){l[e].value=t[e]}))}if($("#sliderRange").length){var c=document.getElementById("sliderRange"),m=[document.getElementById("input-range")];noUiSlider.create(c,{start:100,connect:!0,step:10,format:wNumb({decimals:0,prefix:"within ",suffix:"km",thousand:","}),range:{min:0,max:200}}),c.noUiSlider.on("update",(function(t,e){m[e].value=t[e]}))}$(".player").length&&$(".player").flowplayer(),$(".btns-switch__item").on("click",(function(){$(".btns-switch").find(".active").removeClass("active"),$(this).addClass("active")})),$(".js-view-th").on("click",(function(){$(".b-goods-group > .col-12").removeClass("col-12").addClass("col-lg-4 col-md-6"),$(".b-goods").removeClass("b-goods_list"),$(".b-filter-goods").addClass("b-filter-goods_brd")})),$(".js-view-list").on("click",(function(){$(".b-goods-group > .col-lg-4").addClass("col-12").removeClass("col-lg-4 col-md-6"),$(".b-goods").addClass("b-goods_list"),$(".b-filter-goods").removeClass("b-filter-goods_brd")})),$(".flip-btn").on("click",(function(){$(this).parent().toggleClass("flip-active")})),$(".flip-btn-hide").on("click",(function(){$(this).parents(".b-goods").removeClass("flip-active")})),$(window).width()<768&&($(".b-goods-group > .col-12").removeClass("col-12").addClass("col-lg-4 col-md-6"),$(".b-goods").removeClass("b-goods_list"))}))};e.a={mounted:function(){o()}}},385:function(t,e,r){var content=r(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("1b8a8a46",content,!0,{sourceMap:!1})},388:function(t,e,r){"use strict";r(385)},389:function(t,e,r){var o=r(13)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Baloo+2&display=swap);"]),o.push([t.i,'.postcard[data-v-70069a04]{flex-wrap:wrap;display:flex;height:180px;box-shadow:0 4px 21px -12px rgba(0,0,0,.66);border-radius:10px;margin:0 0 2rem;overflow:hidden;position:relative;color:#fff}.postcard.dark[data-v-70069a04]{background-color:#aac2ff}.postcard.light[data-v-70069a04]{background-color:#e1e5ea}.postcard .t-dark[data-v-70069a04]{color:#18151f}.postcard a[data-v-70069a04]{color:inherit}.postcard .h1[data-v-70069a04],.postcard h1[data-v-70069a04]{margin-bottom:.5rem;font-weight:500;line-height:1.2}.postcard .small[data-v-70069a04]{font-size:80%}.postcard .postcard__title[data-v-70069a04]{font-size:1.75rem}.postcard .postcard__img[data-v-70069a04]{max-height:120px;width:100%;-o-object-fit:cover;object-fit:cover;position:relative}.postcard .postcard__img_link[data-v-70069a04]{display:contents}.postcard .postcard__bar[data-v-70069a04]{width:50px;height:10px;margin:10px 0;border-radius:5px;background-color:#424242;transition:width .2s ease}.postcard .postcard__text[data-v-70069a04]{padding:1.5rem;position:relative;display:flex;flex-direction:column}.postcard .postcard__preview-txt[data-v-70069a04]{overflow:hidden;text-overflow:ellipsis;text-align:justify;height:100%}.postcard .postcard__tagbox[data-v-70069a04]{display:flex;flex-flow:row wrap;font-size:14px;margin:20px 0 0;padding:0;justify-content:center}.postcard .postcard__tagbox .tag__item[data-v-70069a04]{display:inline-block;background:rgba(83,83,83,.4);border-radius:3px;padding:2.5px 10px;margin:0 5px 5px 0;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:background-color .3s}.postcard .postcard__tagbox .tag__item .red[data-v-70069a04]:hover{background-color:#ed1a0e!important}.postcard .postcard__tagbox .tag__item[data-v-70069a04]:hover{background:rgba(83,83,83,.8)}.postcard[data-v-70069a04]:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(-70deg,#424242,transparent 50%);opacity:1;border-radius:10px}.postcard:hover .postcard__bar[data-v-70069a04]{width:100px}@media screen and (min-width:769px){.postcard[data-v-70069a04]{flex-wrap:inherit}.postcard .postcard__title[data-v-70069a04]{font-size:2rem}.postcard .postcard__tagbox[data-v-70069a04]{justify-content:start}.postcard .postcard__img[data-v-70069a04]{max-width:300px;max-height:100%;transition:transform .3s ease}.postcard .postcard__text[data-v-70069a04]{padding:10px 3rem;width:100%}.postcard .media.postcard__text[data-v-70069a04]:before{content:"";position:absolute;display:block;background:#aac2ff;top:-20%;height:130%;width:55px}.postcard:hover .postcard__img[data-v-70069a04]{transform:scale(1.1)}.postcard[data-v-70069a04]:nth-child(odd){flex-direction:row}.postcard[data-v-70069a04]:nth-child(2n+0){flex-direction:row-reverse}.postcard:nth-child(odd) .postcard__text[data-v-70069a04]:before{left:-12px!important;transform:rotate(4deg)}.postcard:nth-child(2n+0) .postcard__text[data-v-70069a04]:before{right:-12px!important;transform:rotate(-4deg)}}@media screen and (min-width:1024px){.postcard__text[data-v-70069a04]{padding:2rem 3.5rem}.postcard__text[data-v-70069a04]:before{content:"";position:absolute;display:block;top:-20%;height:130%;width:55px}.postcard.dark .postcard__text[data-v-70069a04]:before{background:#aac2ff}.postcard.light .postcard__text[data-v-70069a04]:before{background:#e1e5ea}}.postcard .postcard__tagbox .green.play[data-v-70069a04]:hover{background:#79dd09;color:#000}.green .postcard__title[data-v-70069a04]:hover{color:#79dd09}.green .postcard__bar[data-v-70069a04]{background-color:#79dd09}.green[data-v-70069a04]:before{background-image:linear-gradient(-30deg,rgba(121,221,9,.1),transparent 50%)}.green[data-v-70069a04]:nth-child(2n):before{background-image:linear-gradient(30deg,rgba(121,221,9,.1),transparent 50%)}.postcard .postcard__tagbox .blue.play[data-v-70069a04]:hover{background:#0076bd}.blue .postcard__title[data-v-70069a04]:hover{color:#0076bd}.blue .postcard__bar[data-v-70069a04]{background-color:#0076bd}.blue[data-v-70069a04]:before{background-image:linear-gradient(-30deg,rgba(0,118,189,.1),transparent 50%)}.blue[data-v-70069a04]:nth-child(2n):before{background-image:linear-gradient(30deg,rgba(0,118,189,.1),transparent 50%)}.postcard .postcard__tagbox .red.play[data-v-70069a04]:hover{background:#bd150b}.red .postcard__title[data-v-70069a04]:hover{color:#bd150b}.red .postcard__bar[data-v-70069a04]{background-color:#bd150b}.red[data-v-70069a04]:before{background-image:linear-gradient(-30deg,rgba(189,21,11,.1),transparent 50%)}.red[data-v-70069a04]:nth-child(2n):before{background-image:linear-gradient(30deg,rgba(189,21,11,.1),transparent 50%)}.postcard .postcard__tagbox .yellow.play[data-v-70069a04]:hover{background:#bdbb49;color:#000}.yellow .postcard__title[data-v-70069a04]:hover{color:#bdbb49}.yellow .postcard__bar[data-v-70069a04]{background-color:#bdbb49}.yellow[data-v-70069a04]:before{background-image:linear-gradient(-30deg,rgba(189,187,73,.1),transparent 50%)}.yellow[data-v-70069a04]:nth-child(2n):before{background-image:linear-gradient(30deg,rgba(189,187,73,.1),transparent 50%)}@media screen and (min-width:769px){.green[data-v-70069a04]:before{background-image:linear-gradient(-80deg,rgba(121,221,9,.1),transparent 50%)}.green[data-v-70069a04]:nth-child(2n):before{background-image:linear-gradient(80deg,rgba(121,221,9,.1),transparent 50%)}.blue[data-v-70069a04]:before{background-image:linear-gradient(-80deg,rgba(0,118,189,.1),transparent 50%)}.blue[data-v-70069a04]:nth-child(2n):before{background-image:linear-gradient(80deg,rgba(0,118,189,.1),transparent 50%)}.red[data-v-70069a04]:before{background-image:linear-gradient(-80deg,rgba(189,21,11,.1),transparent 50%)}.red[data-v-70069a04]:nth-child(2n):before{background-image:linear-gradient(80deg,rgba(189,21,11,.1),transparent 50%)}.yellow[data-v-70069a04]:before{background-image:linear-gradient(-80deg,rgba(189,187,73,.1),transparent 50%)}.yellow[data-v-70069a04]:nth-child(2n):before{background-image:linear-gradient(80deg,rgba(189,187,73,.1),transparent 50%)}}',""]),t.exports=o},391:function(t,e,r){"use strict";r.r(e);var o={props:{color:{default:"red"}}},d=(r(388),r(2)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"postcard light  my-3",class:""+t.color},[r("nuxt-link",{staticClass:"postcard__img_link",attrs:{to:"/detail/225"}},[r("img",{staticClass:"postcard__img",attrs:{src:"https://demo.themeies.com/davit/images/yacht/img4.jpg",alt:"Image Title"}})]),t._v(" "),r("div",{staticClass:"postcard__text"},[r("h4",{staticClass:"postcard__title",class:""+t.color},[r("nuxt-link",{attrs:{to:"/detail/225"}},[t._v("Amaryllis")])],1),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"postcard__bar"}),t._v(" "),r("ul",{staticClass:"postcard__tagbox"},[r("li",{staticClass:"tag__item play d-flex align-center ",class:""+t.color},[r("m-icon",{staticClass:"mr-2"},[t._v("visibility")]),t._v(" 2256")],1),t._v(" "),r("li",{staticClass:"tag__item play ",class:""+t.color},[r("i",{staticClass:"fas fa-clock mr-2"}),t._v("55 mins.")]),t._v(" "),r("li",{staticClass:"tag__item play ",class:""+t.color},[r("nuxt-link",{staticClass:"d-flex align-center",attrs:{to:"/detail/225"}},[r("m-icon",[t._v("subdirectory_arrow_right")]),t._v("\n              "+t._s(t.$t("product.review")))],1)],1)])])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"postcard__subtitle small"},[r("time",{attrs:{datetime:"2020-05-25 12:00:00"}},[r("i",{staticClass:"fas fa-calendar-alt mr-2"}),t._v("Mon, May 25th 2020\n\t\t\t\t\t")])])}],!1,null,"70069a04",null);e.default=component.exports},413:function(t,e,r){"use strict";r.r(e);var o={components:{HorizontalCard:r(391).default},props:{title:{default:"profile.title.publish"},icon:{default:""},color:{default:"yellow"}}},d=r(2),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row justify-content-md-center w-100"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"my-3"},[r("h5",{staticClass:"bg-light-primary p-3"},[t._v(t._s(t.$t(t.title))+" "),r("m-icon",{staticClass:"float-right",attrs:{color:t.color,size:"26"}},[t._v(t._s(t.icon))])],1)]),t._v(" "),t._l(5,(function(e,i){return r("HorizontalCard",{key:i,attrs:{color:t.color}})}))],2)])}),[],!1,null,null,null);e.default=component.exports},529:function(t,e,r){"use strict";r.r(e);var o=r(413),d={mixins:[r(384).a],components:{Ads:o.default},layout:"profile"},n=r(2),component=Object(n.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("Ads",{attrs:{title:"profile.title.purchase",color:"yellow"}})}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{437:function(e,t,r){var content=r(463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(14).default)("14e2c89f",content,!0,{sourceMap:!1})},462:function(e,t,r){"use strict";r(437)},463:function(e,t,r){var o=r(13)(!1);o.push([e.i,":root{--red:#ea5353;--cyan:#45d3d3;--orange:#fcaf4a;--blue:#549ef2;--varyDarkBlue:#4c4e61;--grayishBlue:#a3a5ae;--veryLightGray:#fafafa;--weight1:200;--weight2:400;--weight3:600}.box-ads-2 p{color:#000;font-weight:700}.box-ads-2{border-radius:5px;box-shadow:0 30px 40px -20px #a3a5ae;box-shadow:0 30px 40px -20px var(--grayishBlue);padding:30px;margin:20px;height:200px}.box-ads-2-no-icon{height:100px!important}.box-ads-2:hover{cursor:pointer;transition:all .5s linear;background-color:#30a8d5;border-bottom:3px solid #1b6784}.box-ads-2:hover p{color:#fff!important}@media (max-width:450px){.box-ads-2{height:200px}}@media (max-width:950px) and (min-width:450px){.box-ads-2{text-align:center;height:180px}}.cyan-ads{border-top:3px solid #45d3d3;border-top:3px solid var(--cyan)}.red-ads{border-top:3px solid #ea5353;border-top:3px solid var(--red)}.blue-ads{border-top:3px solid #549ef2;border-top:3px solid var(--blue)}.orange-ads{border-top:3px solid #fcaf4a;border-top:3px solid var(--orange)}@media (min-width:950px){.box-ads-2,.header p{width:100%}}",""]),e.exports=o},488:function(e,t,r){"use strict";r.r(t);r(30),r(17),r(29),r(40),r(19),r(41);var o=r(11),n=(r(31),r(82),r(49));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c={computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.b)({getMainCategories:"category/getMainCategories"})),data:function(){return{colors:["red-ads","cyan-ads","blue-ads","orange-ads"]}},methods:{randomClass:function(){var e=Math.floor(Math.random()*this.colors.length);return this.colors[e]},setMainCategory:function(e){var t=this;this.$store.commit("ads/setNewAds",{key:"mainCategory",data:{id:e.id,name:e.name,validations:!0}}),setTimeout((function(){t.$router.push("/give-ads/categories")}),250)}},mounted:function(){this.$store.commit("ads/setResetNewAds",{key:"mainCategory"})}},l=(r(462),r(2)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container my-4"},[r("div",{staticClass:"mt-3"},[r("h4",[r("span",[e._v("1. Adım")]),e._v(" "),r("m-icon",[e._v("arrow_forward")]),e._v("  Ana Kategorinizi Seçin")],1)]),e._v(" "),r("div",{staticClass:"row d-flex justify-content-center"},e._l(e.getMainCategories,(function(t,i){return r("div",{key:i,staticClass:"col-6 col-md-4 col-lg-2",on:{click:function(r){return e.setMainCategory(t)}}},[r("div",{staticClass:"box-ads-2 d-block",class:e.randomClass()},[e._m(0,!0),e._v(" "),r("p",{staticClass:" text-center"},[e._v(" "+e._s(t.name))])])])})),0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{staticClass:"d-flex align-center justify-content-center"},[t("img",{attrs:{src:"https://assets.codepen.io/2301174/icon-team-builder.svg",alt:""}})])}],!1,null,null,null);t.default=component.exports}}]);
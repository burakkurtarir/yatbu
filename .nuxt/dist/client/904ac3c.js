(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{398:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{message:""}},methods:{pressedLetter:function(e){console.log(e),13==e.keyCode&&(e.preventDefault(),this.message="")}}},r=n(2),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat-company-footer"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{placeholder:e.$t("chat.textarea.placeholder"),name:"",id:""},domProps:{value:e.message},on:{keydown:e.pressedLetter,input:function(t){t.target.composing||(e.message=t.target.value)}}})])}),[],!1,null,null,null);t.default=component.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b6d2218"],{"155a":function(t,e,s){},4934:function(t,e,s){"use strict";s("155a")},7101:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[t._m(0),s("v-form",{staticClass:"login-form_container",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-text-field",{staticClass:"login-form_input",attrs:{rules:t.EmailRules,counter:10,label:"E-mail",required:""},model:{value:t.Email,callback:function(e){t.Email=e},expression:"Email"}}),s("v-text-field",{staticClass:"login-form_input",attrs:{rules:t.passwordRules,label:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("v-btn",{staticClass:"login-form_btn",attrs:{loading:t.loading,disabled:t.loading,color:"secondary"},on:{click:function(e){t.loader="loading"}}},[t._v(" LOGIN ")])],1)],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-form_desc"},[s("p",{staticClass:"desc_title"},[t._v("Register or Log in")]),s("p",{staticClass:"desc_content"},[t._v("Obtain evironmentally friendly item puzzle by saving the koala game")])])}],n=s("2b0e"),l={name:"Login",data:function(){return{valid:!1,password:"",passwordRules:[function(t){return!!t||"Password is required"},function(t){return t.length>=6||"Password must be less than 6 characters"}],Email:"",EmailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],loader:null,loading:!1}},methods:{Login:function(){}},watch:{loader:function(){var t=this,e=this.loader;this[e]=!this[e],setTimeout((function(){t[e]=!1,t.$router.push({path:"/index/userhome",query:{id:t.Email,password:t.password}}),n["default"].prototype.isLogin=!0,console.log(n["default"].prototype.isLogin)}),3e3),this.loader=null}}},o=l,r=(s("4934"),s("2877")),u=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-5b6d2218.257c879d.js.map
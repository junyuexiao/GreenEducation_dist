(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b6d2218"],{"155a":function(t,s,e){},4934:function(t,s,e){"use strict";e("155a")},7101:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"login"}},[t._m(0),e("v-form",{staticClass:"login-form_container",model:{value:t.valid,callback:function(s){t.valid=s},expression:"valid"}},[e("v-text-field",{staticClass:"login-form_input",attrs:{rules:t.EmailRules,counter:10,label:"E-mail",required:""},model:{value:t.Email,callback:function(s){t.Email=s},expression:"Email"}}),e("v-text-field",{staticClass:"login-form_input",attrs:{rules:t.passwordRules,label:"password",type:"password",required:""},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}}),e("v-btn",{staticClass:"login-form_btn",attrs:{loading:t.loading,disabled:t.loading,color:"secondary"},on:{click:function(s){t.loader="loading"}}},[t._v(" LOGIN ")])],1)],1)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"login-form_desc"},[e("p",{staticClass:"desc_title"},[t._v("Register or Log in")]),e("p",{staticClass:"desc_content"},[t._v("Obtain evironmentally friendly item puzzle by saving the koala game")])])}],l=e("2b0e"),n={name:"Login",data:function(){return{valid:!1,password:"",passwordRules:[function(t){return!!t||"Password is required"},function(t){return t.length>=6||"Password must be less than 6 characters"}],Email:"",EmailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],loader:null,loading:!1}},methods:{Login:function(){}},watch:{loader:function(){var t=this,s=this.loader;return this[s]=!this[s],this.Email?this.password?(sessionStorage.setItem("userinfo",this.Email),setTimeout((function(){t.$router.push({path:"/index/userhome",query:{id:t.Email,password:t.password}}),l["default"].prototype.isLogin=!0,console.log(l["default"].prototype.isLogin)}),3e3),void(this[s]=!1)):(alert("请填写密码"),this[s]=!1,!1):(alert("请填写邮箱号码"),this.loader=null,this[s]=!1,!1)}}},o=n,r=(e("4934"),e("2877")),u=Object(r["a"])(o,i,a,!1,null,null,null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-5b6d2218.98fee38e.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"076e":function(n,t,c){"use strict";var a=function(){var n=this,t=n.$createElement,c=n._self._c||t;return c("div",{staticClass:"bottom-nav"},[c("ul",n._l(n.navConfig,function(t,a){return c("li",{class:{active:a===n.curIndex},on:{click:function(c){return n.changeNav(t,a)}}},[c("a",[c("i",{class:t.icon}),c("div",[n._v(n._s(t.name))])])])}),0)])},o=[],e=(c("386d"),c("e814")),r=c.n(e),i=c("4328"),u=c.n(i),s=(c("b7e8"),{name:"foot",data:function(){return{navConfig:[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"user.html"}],curIndex:r()(u.a.parse(location.search.substr(1)).index)||0}},methods:{changeNav:function(n,t){location.href="".concat(n.href,"?index=").concat(t)}}}),f=s,l=(c("4272"),c("2877")),d=Object(l["a"])(f,a,o,!1,null,"653d30a1",null);t["a"]=d.exports},"30c9":function(n,t,c){"use strict";c.d(t,"b",function(){return r}),c.d(t,"a",function(){return i});c("cadf"),c("551c"),c("f751"),c("097d");var a=c("bc3a"),o=c.n(a),e="http://rap2api.taobao.org/app/mock/7058",r=function(n,t){return console.log("in_post:",t),o.a.post("".concat(e).concat(n),t,{headers:{}}).then(function(n){return n.data})},i=function(n,t){return console.log("in_post:",t),o.a.get("".concat(e).concat(n),{params:t,headers:{}}).then(function(n){return n.data})}},"3a05":function(n,t,c){},"3cb4":function(n,t,c){},4272:function(n,t,c){"use strict";var a=c("3a05"),o=c.n(a);o.a},a2c0:function(n,t,c){"use strict";c("28a5");var a={filters:{currency:function(n){var t=""+n;if(t.indexOf(".")>-1){var c=t.split(".");return c[0]+"."+(c[1]+"0").substr(0,2)}return t+".00"}}};t["a"]=a},b7e8:function(n,t,c){},d1a6:function(n,t,c){}}]);
(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)r=o[d],a[r]&&f.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={index:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([3,"chunk-vendors","chunk-common"]),n()})({1613:function(t,e,n){},"1d5b":function(t,e,n){},"2cd6":function(t,e,n){"use strict";var s=n("1d5b"),a=n.n(s);a.a},3:function(t,e,n){t.exports=n("44eb")},"44eb":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("div",{staticClass:"container with-bottom-nav",staticStyle:{"min-height":"667px"}},[n("div",{staticClass:"content"},[n("Swiper"),n("Recommended"),t._m(0),t._m(1),n("Waterfull"),n("div",{staticClass:"js-show-find category-guid",staticStyle:{display:"none"}})],1)]),n("Foot")],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-content daily"},[n("ul")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"line-block line-block-gray"},[n("div",{staticClass:"lineblock-title"},[n("span",{staticClass:"lineblock-font"},[t._v("最热商品推荐")])])])}],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-swiper",{ref:"swiper",attrs:{"is-prevent":!1,"useNative-driver":!1}},t._l(t.bannerLists,function(t){return n("md-swiper-item",{staticClass:"swiper-slide swp-page"},[n("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[n("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])}),1)],1)},o=[],c=(n("3cb4"),n("30c9")),l={name:"swiper",data:function(){return{bannerLists:null}},methods:{getBanner:function(){var t=this;c["a"]("/index/banner").then(function(e){t.bannerLists=e.lists})}},created:function(){this.getBanner()},mounted:function(){}},u=l,d=(n("2cd6"),n("2877")),f=Object(d["a"])(u,r,o,!1,null,"81c1a738",null),p=f.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"section-title"},[t._v("优店推荐")]),n("div",{staticClass:"section-content shops"},[n("div",{staticClass:"shop-wrap"},[n("div",{staticClass:"shop-item"},[n("a",{attrs:{href:"https://h5.koudaitong.com/v2/showcase/feature?alias=zjtozpgn"}},[n("img",{staticClass:"fadeIn",attrs:{src:"https://img.yzcdn.cn/upload_files/2016/09/23/FgQUVNXnvpFKFl1DIN2LXhPA1cxy.png?imageView2/2/w/300/h/0/q/75/format/png"}})])]),n("div",{staticClass:"shop-item"},[n("a",{attrs:{href:"https://h5.koudaitong.com/v2/feature/1e22e3vtu"}},[n("img",{staticClass:"fadeIn",attrs:{src:"https://img.yzcdn.cn/upload_files/2016/08/03/FqNGnCQS1eq9nIhRg48E_UfFf9K2.png?imageView2/2/w/300/h/0/q/75/format/png"}})])]),n("div",{staticClass:"shop-item"},[n("a",{attrs:{href:"https://h5.koudaitong.com/v2/feature/8oups7zk"}},[n("img",{staticClass:"fadeIn",attrs:{src:"https://img.yzcdn.cn/upload_files/2016/08/05/Fv5hhMZrtPZQWE7fape0ddEYtSuy.png?imageView2/2/w/300/h/0/q/75/format/png"}})])])])])])}],v={name:"recommended",data:function(){return{pageSize:void 0,pageNumber:void 0}},mounted:function(){c["a"]("/index/hotLists/pageNum=".concat(this.pageNumber,"&pageSize=").concat(this.pageSize)).then(function(t){})}},g=v,b=Object(d["a"])(g,m,h,!1,null,"4b09333a",null),w=b.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hot-goods js-waterfull-wrap"},[n("md-scroll-view",{ref:"scrollView",staticClass:"js-list js-lazy",attrs:{"scrolling-x":!1},on:{endReached:t.getLists}},[t._l(t.lists,function(e){return n("li",{key:e.id},[n("div",{staticClass:"goods-item"},[n("a",{attrs:{href:"goods.html?id="+e.id}},[n("div",{staticClass:"thumb img-box"},[n("img",{staticClass:"fadeIn",attrs:{src:e.img}})]),n("div",{staticClass:"detail"},[n("div",{staticClass:"title"},[t._v(t._s(e.name))]),n("div",{staticClass:"price"},[t._v("￥"+t._s(e.price))])])])])])}),n("md-scroll-view-more",{attrs:{slot:"more","is-finished":t.allLoaded},slot:"more"})],2)],1)},y=[],C={name:"waterfull",data:function(){return{pageNum:1,pageSize:6,lists:[],allLoaded:!1}},methods:{getLists:function(){var t=this;this.allLoaded||(c["a"]("/index/hotLists?pageNum=".concat(this.pageNum,"&pageSize=").concat(this.pageSize)).then(function(e){var n=e.lists;n.length<t.pageSize&&(t.allLoaded=!0),t.lists?t.lists=t.lists.concat(n):t.lists=n,t.$refs.scrollView.finishLoadMore()}),this.pageNum+=1)}},created:function(){this.getLists()}},S=C,j=Object(d["a"])(S,_,y,!1,null,null,null),x=j.exports,k=n("076e"),z={name:"app",components:{Swiper:p,Recommended:w,Waterfull:x,Foot:k["a"]},data:function(){return{}}},L=z,O=(n("b297"),Object(d["a"])(L,a,i,!1,null,null,null)),N=O.exports,E=n("8c4f");s["a"].use(E["a"]);var $=new E["a"]({routes:[]}),F=n("2f62");s["a"].use(F["a"]);var P=new F["a"].Store({state:{},mutations:{},actions:{}}),I=(n("d1a6"),n("1613"),n("b9eb"));n("acea");s["a"].use(I["a"]),s["a"].config.productionTip=!1,new s["a"]({router:$,store:P,render:function(t){return t(N)}}).$mount("#app")},"69ad":function(t,e,n){},b297:function(t,e,n){"use strict";var s=n("69ad"),a=n.n(s);a.a}});
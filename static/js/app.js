webpackJsonp([1],{"/Gkv":function(t,a,n){"use strict";a.a={data:function(){return{footerLinks:[{text:"Board of County Commissioners",href:"http://www.hillsboroughcounty.org/en/government/board-of-county-commissioners"},{text:"County Locations",href:"http://www.hillsboroughcounty.org/en/residents/citizens/county-locations"},{text:"Jobs",href:"http://www.hillsboroughcounty.org/en/about-hillsborough/jobs"},{text:"Contact Us",href:"http://www.hillsboroughcounty.org/en/about-hillsborough/contact-us"}]}}}},0:function(t,a){},"6XRP":function(t,a,n){"use strict";var s=n("/Gkv"),e=n("o1fj");a.a={mixins:[s.a,e.a],data:function(){return{logoUrl:"https://raw.githubusercontent.com/Commbocc/html-wrapper/master/src/assets/hc-logo-horizontal-RGB_drkbgrd.png"}}}},BiRv:function(t,a,n){"use strict";var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("footer",{staticClass:"bg-secondary text-white py-5",attrs:{id:"hc-footer"}},[n("div",{staticClass:"container"},[n("section",{staticClass:"row align-items-center text-center"},[n("div",{staticClass:"col-md-4 mb-4 order-md-4"},[n("ul",{staticClass:"list-inline mb-0"},t._l(t.footerLinks,function(a){return n("li",{staticClass:"list-inline-item mx-3"},[n("a",{staticClass:"text-white",attrs:{href:a.href}},[t._v("\n              "+t._s(a.text)+"\n            ")])])}))]),t._v(" "),n("div",{staticClass:"col-md-4 mb-4 order-md-1"},[n("a",{attrs:{href:"http://hcflgov.net"}},[n("img",{staticClass:"logo img-fluid",attrs:{src:t.logoUrl,alt:"Hillsborough County Logo"}})])]),t._v(" "),n("div",{staticClass:"col-md-4 mb-4 order-md-12"},[n("ul",{staticClass:"list-inline mb-0"},t._l(t.socialLinks,function(t){return n("li",{staticClass:"list-inline-item"},[n("a",{staticClass:"text-white",attrs:{href:t.href,title:t.name,target:"_blank"}},[n("i",{staticClass:"fa fa-fw",class:t.iconClass})])])}))])]),t._v(" "),t._m(0)])])},e=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("p",{staticClass:"text-center small mt-3 mb-0"},[n("a",{staticClass:"text-white",attrs:{href:"https://goo.gl/maps/jetXJdK71mu",target:"_blank"}},[t._v("\n        601 E. Kennedy Blvd."),n("br"),t._v("\n        Tampa, FL 33602\n      ")])])}],o={render:s,staticRenderFns:e};a.a=o},GCbu:function(t,a,n){"use strict";var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-white",attrs:{id:"hc-nav"}},[n("div",{staticClass:"container-fluid"},[n("a",{staticClass:"navbar-brand",attrs:{href:t.logoHref}},[n("img",{staticClass:"logo",attrs:{src:t.logoUrl,alt:"Hillsborough County Logo"}})]),t._v(" "),n("button",{ref:"navToggler",staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[t._l(t.navLinks,function(a){return n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle",class:a.linkClass,attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            "+t._s(a.text)+"\n          ")]),t._v(" "),n("div",{staticClass:"dropdown-menu"},[n("h4",{staticClass:"d-none d-lg-block text-info"},[t._v(t._s(a.text))]),t._v(" "),n("div",{staticClass:"dropdown-menu-2-col"},t._l(a.children,function(a){return n("a",{staticClass:"dropdown-item",attrs:{href:"http://hcflgov.net/"+a.ItemUrl}},[t._v("\n                "+t._s(a.DisplayName)+"\n              ")])}))])])}),t._v(" "),t._m(0),t._v(" "),n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle d-none d-lg-inline-block",attrs:{href:"#",title:"Search",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},on:{click:function(a){t.focusSearch()}}},[n("i",{staticClass:"fa fa-fw fa-search"})]),t._v(" "),n("div",{ref:"searchDropdown",staticClass:"dropdown-menu"},[n("form",{attrs:{action:"http://www.hillsboroughcounty.org/en/search",method:"get"}},[n("div",{staticClass:"input-group input-group-lg"},[n("input",{ref:"searchInput",staticClass:"form-control",attrs:{name:"q",type:"search",placeholder:"Search For...","aria-label":"Search",required:""}}),t._v(" "),t._m(1)])])])])],2)])])])},e=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("li",{staticClass:"nav-item d-lg-none"},[n("hr",{staticClass:"my-1"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("span",{staticClass:"input-group-btn"},[n("button",{staticClass:"btn btn-primary text-white",attrs:{type:"submit"}},[t._v("Search")])])}],o={render:s,staticRenderFns:e};a.a=o},L9eR:function(t,a,n){"use strict";function s(t){n("d2FH")}var e=n("6XRP"),o=n("BiRv"),i=n("VU/8"),r=s,l=i(e.a,o.a,!1,r,null,null);a.a=l.exports},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=n("7+uW"),e=n("ORbq"),o=n("K3J8"),i=(n.n(o),n("md8n")),r=n("L9eR");s.a.use(e.a),s.a.config.productionTip=!1,new s.a({el:"#hc-main",components:{HcNavigation:i.a,HcFooter:r.a}})},Nd8X:function(t,a,n){"use strict";a.a={methods:{showSearchWhenMobile:function(){this.$refs.navToggler.offsetLeft>0?this.$refs.searchDropdown.classList.add("show"):this.$refs.searchDropdown.classList.remove("show")}},mounted:function(){window.onload=this.showSearchWhenMobile,window.onresize=this.showSearchWhenMobile}}},d2FH:function(t,a){},md8n:function(t,a,n){"use strict";var s=n("siLz"),e=n("GCbu"),o=n("VU/8"),i=o(s.a,e.a,!1,null,null,null);a.a=i.exports},o1fj:function(t,a,n){"use strict";a.a={data:function(){return{socialLinks:[{name:"Facebook",href:"https://www.facebook.com/HillsboroughFL/",iconClass:"fa-facebook"},{name:"Twitter",href:"https://twitter.com/HillsboroughFL",iconClass:"fa-twitter"},{name:"YouTube",href:"https://www.youtube.com/user/HillsboroughCounty",iconClass:"fa-youtube"},{name:"InstaGram",href:"https://www.instagram.com/hillsboroughfl/",iconClass:"fa-instagram"},{name:"LinkedIn",href:"https://www.linkedin.com/company/hillsborough-county",iconClass:"fa-linkedin"}]}}}},qvPN:function(t,a,n){"use strict";a.a={data:function(){return{navLinks:[{text:"Residents",identifier:"residents-children",linkClass:null,children:[]},{text:"Businesses",identifier:"businesses-children",linkClass:null,children:[]},{text:"Government",identifier:"government-children",linkClass:null,children:[]},{text:"About Hillsborough",identifier:"about-hillsborough-children",linkClass:null,children:[]},{text:"I Want To...",identifier:"i-want-to-children",linkClass:"text-primary",children:[]}]}},methods:{fetchNavChildren:function(){var t=this;this.navLinks.forEach(function(a){var n="https://gist.githubusercontent.com/mccarthyk/93e7ece6a2d1ba903261c6f25479a6cd/raw/2b01d85967dfb2a7727caba9b8f8f44b5010fea9/"+a.identifier+".json";t.$http.get(n).then(function(t){a.children=t.body.filter(function(t){return t["Show in Menu"]})})})}},mounted:function(){this.fetchNavChildren()}}},siLz:function(t,a,n){"use strict";var s=n("7+uW"),e=n("qvPN"),o=n("Nd8X");a.a={mixins:[e.a,o.a],props:{logoHref:{type:String,default:"http://hcflgov.net"}},data:function(){return{logoUrl:"https://github.com/Commbocc/html-wrapper/raw/master/src/assets/hc-logo-horizontal-RGB.png"}},methods:{focusSearch:function(){var t=this;s.a.nextTick(function(){t.$refs.searchInput.focus()})}}}}},["NHnr"]);
//# sourceMappingURL=app.js.map
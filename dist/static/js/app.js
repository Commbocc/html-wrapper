webpackJsonp([0],{0:function(t,a){},"1IdE":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"bg-secondary text-white py-5",attrs:{id:"hc-footer"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center text-center"},[e("div",{staticClass:"col-md-4 mb-4 order-md-4"},[e("ul",{staticClass:"list-inline mb-0"},t._l(t.footerLinks,function(a){return e("li",{staticClass:"list-inline-item mx-3"},[e("a",{staticClass:"text-white",attrs:{href:a.href,target:t.linkTargets}},[t._v("\n              "+t._s(a.text)+"\n            ")])])}))]),t._v(" "),e("div",{staticClass:"col-md-4 mb-4 order-md-1"},[e("a",{attrs:{href:"https://hillsboroughcounty.org",target:t.linkTargets}},[e("img",{staticClass:"logo img-fluid",attrs:{src:t.logoUrl,alt:"Hillsborough County Logo"}})])]),t._v(" "),e("div",{staticClass:"col-md-4 mb-4 order-md-12"},[e("ul",{staticClass:"list-inline my-2 hide-external-indicator"},t._l(t.socialLinks,function(t){return e("li",{staticClass:"list-inline-item"},[e("a",{staticClass:"text-white",attrs:{href:t.href,title:t.name,target:"_blank","aria-label":t.name}},[e("span",{staticClass:"fa-fw",class:t.iconClass,attrs:{"aria-hidden":"true"}})])])})),t._v(" "),e("div",{attrs:{id:"google_translate_element"}})])]),t._v(" "),t._m(0)])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"text-center small mt-3 mb-0"},[e("a",{staticClass:"text-white hide-external-indicator",attrs:{href:"https://goo.gl/maps/jetXJdK71mu",target:"_blank"}},[t._v("\n        601 E. Kennedy Blvd."),e("br"),t._v("\n        Tampa, FL 33602\n      ")])])}],r={render:s,staticRenderFns:n};a.a=r},"28QG":function(t,a,e){"use strict";a.a={props:{title:{type:String,required:!0}}}},"6XRP":function(t,a,e){"use strict";var s=e("ScBB");a.a={mixins:[s.a],data:function(){return{footerLinks:[{text:"Board of County Commissioners",href:"https://hillsboroughcounty.org/government/board-of-county-commissioners"},{text:"County Locations",href:"https://hillsboroughcounty.org/residents/citizens/county-locations"},{text:"Jobs",href:"https://hillsboroughcounty.org/about-hillsborough/jobs"},{text:"Contact Us",href:"https://hillsboroughcounty.org/about-hillsborough/contact-us"}],socialLinks:[{name:"Facebook",href:"https://www.facebook.com/HillsboroughFL/",iconClass:"fab fa-facebook"},{name:"Twitter",href:"https://twitter.com/HillsboroughFL",iconClass:"fab fa-twitter"},{name:"YouTube",href:"https://www.youtube.com/user/HillsboroughCounty",iconClass:"fab fa-youtube"},{name:"InstaGram",href:"https://www.instagram.com/hillsboroughfl/",iconClass:"fab fa-instagram"},{name:"LinkedIn",href:"https://www.linkedin.com/company/hillsborough-county",iconClass:"fab fa-linkedin"}],logoUrl:"https://raw.githubusercontent.com/Commbocc/html-wrapper/master/src/assets/hc-logo-horizontal-RGB_drkbgrd.png"}}}},L9eR:function(t,a,e){"use strict";function s(t){e("hsKP")}var n=e("6XRP"),r=e("1IdE"),o=e("VU/8"),i=s,l=o(n.a,r.a,!1,i,null,null);a.a=l.exports},M93x:function(t,a,e){"use strict";function s(t){e("W4fZ")}var n=e("xJD8"),r=e("VU/8"),o=s,i=r(n.a,null,!1,o,null,null);a.a=i.exports},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),n=e("M93x"),r=e("8+8L"),o=e("K3J8");e.n(o);s.a.use(r.a),s.a.config.productionTip=!1,new s.a({el:"#hc-main",extends:n.a})},PyiM:function(t,a,e){"use strict";var s=e("28QG"),n=e("nmTJ"),r=e("VU/8"),o=r(s.a,n.a,!1,null,null,null);a.a=o.exports},RAVo:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{attrs:{action:t.action,method:t.method,target:t.target}},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8"},[e("hr",{staticClass:"mb-2 mb-lg-0 d-lg-none"}),t._v(" "),e("div",{staticClass:"input-group input-group-lg",attrs:{id:"hc-nav-search-input-group"}},[e("input",{ref:"searchInput",staticClass:"form-control",attrs:{name:"q",type:"search",placeholder:"Search For...","aria-label":"Search Input",required:""}}),t._v(" "),t._m(0)]),t._v(" "),e("hr",{staticClass:"mt-2 mt-lg-0 mb-0 mb-lg-2"})])]),t._v(" "),t.showFilters?e("fieldset",{staticClass:"d-none d-lg-block"},[e("legend",{staticClass:"sr-only"},[t._v("Filters")]),t._v(" "),e("div",{staticClass:"d-flex justify-content-center small"},t._l(t.filters,function(a){return e("label",{staticClass:"px-2"},[e("input",{attrs:{type:"checkbox","aria-label":a.text},domProps:{value:a.key,checked:a.checked}}),t._v(" "),e("span",{staticClass:"fa-fw",class:a.icon,attrs:{"aria-hidden":"true"}}),t._v("\n        "+t._s(a.text)+"\n      ")])}))]):t._e()])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"input-group-btn"},[e("button",{staticClass:"btn btn-link",attrs:{type:"submit"}},[e("span",{staticClass:"fas fa-fw fa-search",attrs:{"aria-label":"Search"}})])])}],r={render:s,staticRenderFns:n};a.a=r},ScBB:function(t,a,e){"use strict";a.a={props:{linkTargets:{type:String,default:"_self"}}}},W4fZ:function(t,a){},eMYj:function(t,a,e){"use strict";var s=e("mTMR"),n=e("RAVo"),r=e("VU/8"),o=r(s.a,n.a,!1,null,null,null);a.a=o.exports},geF4:function(t,a,e){"use strict";a.a={props:{crossOrigin:{type:Boolean,default:!0},crossOriginRoot:{type:String,default:"https://hillsboroughcounty.org"}},data:function(){return{navLinks:[]}},methods:{fetchNavbar:function(){var t=this;return this.$http.get("https://hillsboroughcounty.org/endpoints/navbar.aspx").then(function(a){t.navLinks=a.body})},navbarUrl:function(t){return this.crossOrigin?this.crossOriginRoot+t.Path:t.Path}},mounted:function(){this.fetchNavbar()}}},hsKP:function(t,a){},mTMR:function(t,a,e){"use strict";a.a={props:["action","method","target","showFilters"],data:function(){return{filters:[{key:"article",text:"Web Pages",icon:" far fa-file",checked:!0},{key:"story",text:"Newsroom Stories",icon:" far fa-newspaper",checked:!0},{key:"documents",text:"Documents",icon:" far fa-file-pdf",checked:!1},{key:"events",text:"Events",icon:" far fa-calendar-alt",checked:!1},{key:"locations",text:"Locations",icon:" fas fa-map-marker-alt",checked:!1},{key:"departments",text:"Departments",icon:" far fa-building",checked:!1}]}}}},md8n:function(t,a,e){"use strict";var s=e("siLz"),n=e("qG9x"),r=e("VU/8"),o=r(s.a,n.a,!1,null,null,null);a.a=o.exports},nmTJ:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"hc-banner jumbotron jumbotron-fluid bg-info text-white my-0 py-4"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"hc-banner-title font-weight-bold m-0"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),e("nav",{attrs:{"aria-label":"Breadcrumb Navigation"}},[e("ol",{staticClass:"breadcrumb hc-banner-breadcrumb mb-0"},[t._t("default"),t._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.title))])],2)])])])},n=[],r={render:s,staticRenderFns:n};a.a=r},o3A7:function(t,a,e){"use strict";var s=e("md8n"),n=e("PyiM"),r=e("L9eR");a.a={components:{HcNavigation:s.a,HcBanner:n.a,HcFooter:r.a}}},qG9x:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-white",attrs:{id:"hc-nav","aria-label":"Site Navigation"}},[e("div",{staticClass:"container-fluid"},[e("a",{staticClass:"sr-only",attrs:{href:t.skipContentLink}},[t._v("Skip to Main Content")]),t._v(" "),e("a",{staticClass:"navbar-brand",attrs:{href:t.logoHref,target:t.logoTarget}},[e("img",{staticClass:"logo",attrs:{src:t.logoUrl,alt:"Hillsborough County Logo"}})]),t._v(" "),e("button",{ref:"navToggler",staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[t.showForm?e("li",{staticClass:"nav-item order-lg-12 dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle d-none d-lg-inline-block",attrs:{href:"#",title:"Search",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},on:{click:function(a){t.focusSearch()}}},[e("span",{staticClass:"fas fa-fw fa-search",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Search")])]),t._v(" "),e("div",{ref:"searchDropdown",staticClass:"dropdown-menu"},[e("NavSearchForm",{ref:"searchForm",attrs:{action:t.formAction,method:t.formMethod,target:t.formTarget,"show-filters":"formShowFilters"}})],1)]):t._e(),t._v(" "),t.customNav?t._t("default"):t._l(t.navLinks,function(a){return e("li",{staticClass:"nav-item order-lg-1 dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            "+t._s(a.Name)+"\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("h4",{staticClass:"d-none d-lg-block text-info font-serif font-weight-bold"},[t._v(t._s(a.Name))]),t._v(" "),e("div",{staticClass:"dropdown-menu-2-col"},t._l(a.Children,function(a){return e("a",{staticClass:"dropdown-item",attrs:{href:t.navbarUrl(a),target:t.linkTargets}},[t._v("\n                "+t._s(a.Name)+"\n              ")])}))])])})],2)])])])},n=[],r={render:s,staticRenderFns:n};a.a=r},siLz:function(t,a,e){"use strict";var s=e("7+uW"),n=e("eMYj"),r=e("geF4"),o=e("ScBB");a.a={mixins:[r.a,o.a],props:{logoHref:{type:String,default:"https://hillsboroughcounty.org"},logoTarget:{type:String,default:"_self"},showForm:{type:Boolean,default:!0},formAction:{type:String,default:"https://hillsboroughcounty.org/search"},formMethod:{type:String,default:"get"},formTarget:{type:String,default:"_self"},formShowFilters:{type:Boolean,default:!0},customNav:{type:Boolean,default:!1},skipContentLink:{type:String,default:"#main-content"}},components:{NavSearchForm:n.a},data:function(){return{logoUrl:"https://github.com/Commbocc/html-wrapper/raw/master/src/assets/hc-logo-horizontal-RGB.png"}},methods:{focusSearch:function(){var t=this;s.a.nextTick(function(){t.$refs.searchForm.$refs.searchInput.focus()})},showSearchWhenMobile:function(){this.$refs.navToggler.offsetLeft>0?this.$refs.searchDropdown.classList.add("show"):this.$refs.searchDropdown.classList.remove("show")}},mounted:function(){window.onload=this.showSearchWhenMobile,window.onresize=this.showSearchWhenMobile}}},xJD8:function(t,a,e){"use strict";var s=e("o3A7");a.a={mixins:[s.a]}}},["NHnr"]);
//# sourceMappingURL=app.js.map
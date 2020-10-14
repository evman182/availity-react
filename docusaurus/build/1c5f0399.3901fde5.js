(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{156:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=b(r),u=n,f=m["".concat(i,".").concat(u)]||m[u]||s[u]||o;return r?a.a.createElement(f,l(l({ref:t},p),{},{components:r})):a.a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},68:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),o=(r(0),r(156)),i={title:"Getting Started",summary:"Availity form components that are wired to be hooked up to formik"},l={unversionedId:"form/index",id:"form/index",isDocsHomePage:!1,title:"Getting Started",description:"Version",source:"@site/docs/form/index.mdx",slug:"/form/index",permalink:"/form/index",editUrl:"https://github.com/avaiity/availity-react/edit/master/docs/form/index.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Contributing",permalink:"/contributing"},next:{title:"Migrating from reactstrap validation",permalink:"/form/migrating"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Programmatically controlling the state of the form",id:"programmatically-controlling-the-state-of-the-form",children:[]},{value:"Validation",id:"validation",children:[]},{value:"Browser Compatibility! ( Internet Explorer )",id:"browser-compatibility--internet-explorer-",children:[]}],p={rightToc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@availity/form"}),Object(o.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/@availity/form.svg?style=for-the-badge",alt:"Version"})))),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npx install-peerdeps @availity/form --save\n")),Object(o.b)("h2",{id:"programmatically-controlling-the-state-of-the-form"},"Programmatically controlling the state of the form"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://jaredpalmer.com/formik/docs/api/formik"}),"Formik documentation")),Object(o.b)("h2",{id:"validation"},"Validation"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jquense/yup"}),"yup")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Availity/sdk-js/tree/master/packages/yup"}),"@availity/yup"),"."),Object(o.b)("h2",{id:"browser-compatibility--internet-explorer-"},"Browser Compatibility! ( Internet Explorer )"),Object(o.b)("p",null,"In order for this library to be compatible with Internet Explorer, the following polyfills need to be provided. If you are on ",Object(o.b)("inlineCode",{parentName:"p"},"@availity/workflow@6.0.0")," or later, they are already provided for you."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from"}),"Array.from")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"}),"Object.assign"))))}b.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk_availity_dinosaurdocs=self.webpackChunk_availity_dinosaurdocs||[]).push([[3105],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5128:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],l={title:"Getting Started"},p=void 0,c={unversionedId:"form/date/index",id:"form/date/index",title:"Getting Started",description:"Wrapper for react-dates to work with formik.",source:"@site/docs/form/date/index.mdx",sourceDirName:"form/date",slug:"/form/date/",permalink:"/availity-react/form/date/",draft:!1,editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/form/date/index.mdx",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"someSidebar",previous:{title:"<Radio />",permalink:"/availity-react/form/components/radio"},next:{title:"<Date />",permalink:"/availity-react/form/date/components/date"}},u={},s=[{value:"Installation",id:"installation",level:3},{value:"Styling",id:"styling",level:3},{value:"Validation",id:"validation",level:3},{value:"References",id:"references",level:3}],d={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wrapper for react-dates to work with ",(0,i.kt)("inlineCode",{parentName:"p"},"formik"),"."),(0,i.kt)("p",null,"It can be helpful to understand the ",(0,i.kt)("inlineCode",{parentName:"p"},"formik")," hook ",(0,i.kt)("inlineCode",{parentName:"p"},"useFormikContext()")," for accessing values from the form. The documentation can be found ",(0,i.kt)("a",{parentName:"p",href:"https://formik.org/docs/api/useFormikContext"},"here"),"."),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"NPM"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @availity/date @availity/form formik reactstrap@^8.0.0\n")),(0,i.kt)("p",null,"Yarn"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add @availity/date @availity/form formik reactstrap@^8.0.0\n")),(0,i.kt)("h3",{id:"styling"},"Styling"),(0,i.kt)("p",null,"You must import the ",(0,i.kt)("inlineCode",{parentName:"p"},"styles.scss")," file ",(0,i.kt)("inlineCode",{parentName:"p"},"@availity/date")," provides in order to have the field styled correctly"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Date from '@availity/date';\nimport '@availity/date/styles.scss';\n")),(0,i.kt)("h3",{id:"validation"},"Validation"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jquense/yup"},"yup")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Availity/sdk-js/tree/master/packages/yup"},"@availity/yup"),". Note: to use this package with ",(0,i.kt)("inlineCode",{parentName:"p"},"@availity/yup")," you will need to import the ",(0,i.kt)("inlineCode",{parentName:"p"},"moment")," version as noted in the example below."),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbnb/react-dates"},"react-dates")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jaredpalmer/formik"},"formik")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://deploy-preview-2356--reactstrap.netlify.app/"},"reactstrap"))))}m.isMDXComponent=!0}}]);
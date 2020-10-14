(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{125:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(2),o=t(6),a=(t(0),t(156)),i={title:"<Form />",summary:"Reactstrap Form component wrapped in Formik"},c={unversionedId:"form/components/form",id:"form/components/form",isDocsHomePage:!1,title:"<Form />",description:"Example",source:"@site/docs/form/components/form.md",slug:"/form/components/form",permalink:"/form/components/form",editUrl:"https://github.com/avaiity/availity-react/edit/master/docs/form/components/form.md",version:"current",sidebar:"someSidebar",previous:{title:"<FormGroup />",permalink:"/form/components/form-group"},next:{title:"<Input />",permalink:"/form/components/input"}},l=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>initialValues: Formik.Values</code>",id:"initialvalues-formikvalues",children:[]},{value:"<code>onSubmit?: (values: Values, formikBag: FormikBag) =&gt; void</code>",id:"onsubmit-values-values-formikbag-formikbag--void",children:[]},{value:"<code>...rest</code>",id:"rest",children:[]}]}],m={rightToc:l};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},m,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"header=Form.js viewCode=true",header:"Form.js",viewCode:"true"}),"import React from 'react';\nimport { Form, Field } from '@availity/form';\n\n<Form\n  initialValues={{\n    hello: '',\n  }}\n  onSubmit={values => alert(JSON.stringify(values))}\n  validationSchema={yup.object().shape({\n    hello: yup.string().required(),\n  })}\n>\n  <Field name=\"hello\" type=\"text\" label=\"Hello\" />\n</Form>;\n")),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("h3",{id:"initialvalues-formikvalues"},Object(a.b)("inlineCode",{parentName:"h3"},"initialValues: Formik.Values")),Object(a.b)("p",null,"Object of values to initialize the form components with by name."),Object(a.b)("h3",{id:"onsubmit-values-values-formikbag-formikbag--void"},Object(a.b)("inlineCode",{parentName:"h3"},"onSubmit?: (values: Values, formikBag: FormikBag) => void")),Object(a.b)("p",null,"Action to perform on submit."),Object(a.b)("h3",{id:"rest"},Object(a.b)("inlineCode",{parentName:"h3"},"...rest")),Object(a.b)("p",null,"View full set of ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://jaredpalmer.com/formik/docs/api/formik#props"}),"Formik Form Props")))}p.isMDXComponent=!0},156:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=o.a.createContext({}),p=function(e){var r=o.a.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return o.a.createElement(m.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=n,b=u["".concat(i,".").concat(f)]||u[f]||s[f]||a;return t?o.a.createElement(b,c(c({ref:r},m),{},{components:t})):o.a.createElement(b,c({ref:r},m))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var m=2;m<a;m++)i[m]=t[m];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);
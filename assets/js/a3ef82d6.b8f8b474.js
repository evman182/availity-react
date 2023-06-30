"use strict";(self.webpackChunk_availity_dinosaurdocs=self.webpackChunk_availity_dinosaurdocs||[]).push([[9071],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),f=o,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},305:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],l={title:"<Form />"},s=void 0,u={unversionedId:"form/components/form",id:"form/components/form",title:"<Form />",description:"Reactstrap Form component wrapped in Formik",source:"@site/docs/form/components/form.md",sourceDirName:"form/components",slug:"/form/components/form",permalink:"/availity-react/form/components/form",draft:!1,editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/form/components/form.md",tags:[],version:"current",frontMatter:{title:"<Form />"},sidebar:"someSidebar",previous:{title:"<FormGroup />",permalink:"/availity-react/form/components/form-group"},next:{title:"<Input />",permalink:"/availity-react/form/components/input"}},p={},m=[{value:"Example",id:"example",level:3},{value:"Live example: Storybook",id:"live-example-storybook",level:4},{value:"Props",id:"props",level:3},{value:"<code>initialValues: Formik.Values</code>",id:"initialvalues-formikvalues",level:4},{value:"<code>onSubmit?: (values: Values, formikBag: FormikBag) =&gt; void</code>",id:"onsubmit-values-values-formikbag-formikbag--void",level:4},{value:"<code>focusInvalidField: boolean</code>",id:"focusinvalidfield-boolean",level:4},{value:"<code>invalidInputSelectors: string</code>",id:"invalidinputselectors-string",level:4},{value:"<code>...rest</code>",id:"rest",level:4}],c={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Reactstrap Form component wrapped in Formik"),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Form, Field } from '@availity/form';\n\nconst Example = () => (\n  <Form\n    initialValues={{\n      hello: '',\n    }}\n    onSubmit={(values) => alert(JSON.stringify(values))}\n    validationSchema={yup.object().shape({\n      hello: yup.string().required(),\n    })}\n  >\n    <Field name=\"hello\" type=\"text\" label=\"Hello\" />\n  </Form>\n);\n")),(0,i.kt)("h4",{id:"live-example-storybook"},"Live example: ",(0,i.kt)("a",{parentName:"h4",href:"https://availity.github.io/availity-react/storybook/?path=/story/formik-form--default"},"Storybook")),(0,i.kt)("h3",{id:"props"},"Props"),(0,i.kt)("h4",{id:"initialvalues-formikvalues"},(0,i.kt)("inlineCode",{parentName:"h4"},"initialValues: Formik.Values")),(0,i.kt)("p",null,"Object of values to initialize the form components with by name."),(0,i.kt)("h4",{id:"onsubmit-values-values-formikbag-formikbag--void"},(0,i.kt)("inlineCode",{parentName:"h4"},"onSubmit?: (values: Values, formikBag: FormikBag) => void")),(0,i.kt)("p",null,"Action to perform on submit."),(0,i.kt)("h4",{id:"focusinvalidfield-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"focusInvalidField: boolean")),(0,i.kt)("p",null,"Determines whether invalid submission focuses first invalid field. ",(0,i.kt)("strong",{parentName:"p"},"Default:")," true"),(0,i.kt)("h4",{id:"invalidinputselectors-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"invalidInputSelectors: string")),(0,i.kt)("p",null,"CSS selectors used to find first invalid field within form for focus. ",(0,i.kt)("strong",{parentName:"p"},"Default:")," 'input",'[aria-invalid="true"]',", div.is-invalid input:first-of-type:not(","[hidden]","):not(",'[style*="display:none"]',"):not(",'[style*="display: none"]',")'"),(0,i.kt)("h4",{id:"rest"},(0,i.kt)("inlineCode",{parentName:"h4"},"...rest")),(0,i.kt)("p",null,"View full set of ",(0,i.kt)("a",{parentName:"p",href:"https://jaredpalmer.com/formik/docs/api/formik#props"},"Formik Form Props")))}f.isMDXComponent=!0}}]);
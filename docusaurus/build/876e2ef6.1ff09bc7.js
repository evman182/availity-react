(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(156)),o={title:"<DateRangeField />"},l={unversionedId:"form/date/components/date-range-field",id:"form/date/components/date-range-field",isDocsHomePage:!1,title:"<DateRangeField />",description:"The same as DateRange but with a Label that appears above the input and a Feedback that appears below the input.",source:"@site/docs/form/date/components/date-range-field.md",slug:"/form/date/components/date-range-field",permalink:"/form/date/components/date-range-field",editUrl:"https://github.com/avaiity/availity-react/edit/master/docs/form/date/components/date-range-field.md",version:"current",sidebar:"someSidebar",previous:{title:"<DateField />",permalink:"/form/date/components/date-field"},next:{title:"<DateRange />",permalink:"/form/date/components/date-range"}},d=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>name: string</code>",id:"name-string",children:[]},{value:"<code>startKey: string</code>",id:"startkey-string",children:[]},{value:"<code>endKey: string</code>",id:"endkey-string",children:[]},{value:"<code>label?: string</code>",id:"label-string",children:[]},{value:"<code>labelClass?: string</code>",id:"labelclass-string",children:[]},{value:"<code>labelHidden?: boolean</code>",id:"labelhidden-boolean",children:[]},{value:"<code>labelAttrs?: React.HTMLAttributes&lt;HTMLLabelElement&gt;</code>",id:"labelattrs-reacthtmlattributeshtmllabelelement",children:[]}]}],c={rightToc:d};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The same as ",Object(i.b)("inlineCode",{parentName:"p"},"DateRange")," but with a ",Object(i.b)("inlineCode",{parentName:"p"},"Label")," that appears above the input and a ",Object(i.b)("inlineCode",{parentName:"p"},"Feedback")," that appears below the input."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"viewCode=true",viewCode:"true"}),"import { Form } from '@availity/form';\nimport { DateRange } from '@availity/date';\nimport { dateRange } from '@availity/yup';\nimport moment from 'moment';\nimport * as yup from 'yup';\n\n<div className=\"w-100 d-flex flex-row justify-content-around align-items-center\">\n  <Form\n    initialValues={{\n      dateOfService: {\n        startDate: moment().format('YYYY-MM-DD'),\n        endDate: moment().format('YYYY-MM-DD'),\n      },\n    }}\n    onSubmit={values => console.log(values)}\n    validationSchema={yup.object().shape({\n      dateOfService: dateRange(\n        {\n          min: moment()\n            .subtract(7, 'day')\n            .format('MM/DD/YYYY'),\n          max: moment()\n            .add(7, 'day')\n            .format('MM/DD/YYYY'),\n          format: 'MM/DD/YYYY',\n        },\n        `Date must be between ${moment()\n          .subtract(7, 'day')\n          .format('MM/DD/YYYY')} and ${moment()\n          .add(7, 'day')\n          .format('MM/DD/YYYY')}`\n      )\n        .typeError('This field is invalid.')\n        .required('This field is required.'),\n    })}\n  >\n    <DateRangeField\n      id=\"dateOfService\"\n      label=\"Date of Service\"\n      name=\"dateOfService\"\n      min={{ value: 7, units: 'day' }}\n      max={{ value: 7, units: 'day' }}\n    />\n    <Button color=\"primary\" type=\"submit\">\n      Submit\n    </Button>\n  </Form>\n</div>;\n")),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("p",null,"Extends ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/form/date/components/date-range/#props"}),"DateRange Props"),"."),Object(i.b)("h3",{id:"name-string"},Object(i.b)("inlineCode",{parentName:"h3"},"name: string")),Object(i.b)("p",null,"The name of the field. Will be the key of the selected date that comes through in the values of the ",Object(i.b)("inlineCode",{parentName:"p"},"onSubmit")," callback."),Object(i.b)("h3",{id:"startkey-string"},Object(i.b)("inlineCode",{parentName:"h3"},"startKey: string")),Object(i.b)("p",null,"Key to return start date as on form submit. Should match the yup schema ",Object(i.b)("inlineCode",{parentName:"p"},"startKey"),"."),Object(i.b)("h3",{id:"endkey-string"},Object(i.b)("inlineCode",{parentName:"h3"},"endKey: string")),Object(i.b)("p",null,"Key to return end date as on form submit. Should match the yup schema ",Object(i.b)("inlineCode",{parentName:"p"},"endKey"),"."),Object(i.b)("h3",{id:"label-string"},Object(i.b)("inlineCode",{parentName:"h3"},"label?: string")),Object(i.b)("p",null,"The text that renders inside the ",Object(i.b)("inlineCode",{parentName:"p"},"Label")," above the input."),Object(i.b)("h3",{id:"labelclass-string"},Object(i.b)("inlineCode",{parentName:"h3"},"labelClass?: string")),Object(i.b)("p",null,"The name of the class for the label. Will be passed to the ",Object(i.b)("inlineCode",{parentName:"p"},"className")," prop of the label in the field."),Object(i.b)("h3",{id:"labelhidden-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"labelHidden?: boolean")),Object(i.b)("p",null,"Used to control if the label is displayed. When set to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", the label in the field won't be visible."),Object(i.b)("h3",{id:"labelattrs-reacthtmlattributeshtmllabelelement"},Object(i.b)("inlineCode",{parentName:"h3"},"labelAttrs?: React.HTMLAttributes<HTMLLabelElement>")),Object(i.b)("p",null,"Pass additonal attributes to the label"))}b.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=b(n),p=a,u=s["".concat(o,".").concat(p)]||s[p]||m[p]||i;return n?r.a.createElement(u,l(l({ref:t},c),{},{components:n})):r.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
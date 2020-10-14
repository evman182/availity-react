(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var a,r=n(2),o=n(6),i=(n(0),n(156)),c={title:"<Date /> ( Default Export )"},d={unversionedId:"form/date/components/date",id:"form/date/components/date",isDocsHomePage:!1,title:"<Date /> ( Default Export )",description:"Date picker without a Label or Feedback",source:"@site/docs/form/date/components/date.md",slug:"/form/date/components/date",permalink:"/form/date/components/date",editUrl:"https://github.com/avaiity/availity-react/edit/master/docs/form/date/components/date.md",version:"current",sidebar:"someSidebar",previous:{title:"<DateRange />",permalink:"/form/date/components/date-range"},next:{title:"Getting Started",permalink:"/form/phone/index"}},l=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>name: string</code>",id:"name-string",children:[]},{value:"<code>disabled?: boolean</code>",id:"disabled-boolean",children:[]},{value:"<code>min?: string | LimitType</code>",id:"min-string--limittype",children:[]},{value:"<code>max?: string | LimitType</code>",id:"max-string--limittype",children:[]},{value:"<code>calendarIcon?: ReactNode</code>",id:"calendaricon-reactnode",children:[]},{value:"<code>onPickerFocusChange?: ({ focused: boolean }) =&gt; void</code>",id:"onpickerfocuschange--focused-boolean---void",children:[]},{value:"<code>format?: string</code>",id:"format-string",children:[]},{value:"<code>datepicker?: boolean</code>",id:"datepicker-boolean",children:[]},{value:"<code>datePickerProps?: SingleDatePickerShape</code>",id:"datepickerprops-singledatepickershape",children:[]}]}],p=(a="Icon",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),b={rightToc:l};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Date picker without a ",Object(i.b)("inlineCode",{parentName:"p"},"Label")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Feedback")),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"initialValues")," need to be specified for a Date or DateRange, they should be in the format ",Object(i.b)("inlineCode",{parentName:"p"},'"YYYY-MM-DD"')," or ",Object(i.b)("inlineCode",{parentName:"p"},'moment().format("YYYY-MM-DD")'),", even though dates are displayed to the user as ",Object(i.b)("inlineCode",{parentName:"p"},"MM/DD/YYYY")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"viewCode=true",viewCode:"true"}),"import { Form } from '@availity/form';\nimport { avDate } from '@availity/yup';\nimport { Button } from 'reactstrap';\nimport Date from '@availity/date';\nimport moment from 'moment';\nimport * as yup from 'yup';\n\n<div className=\"w-100 d-flex flex-row justify-content-around align-items-center\">\n  <Form\n    initialValues={{\n      dateOfService: '',\n    }}\n    onSubmit={values => console.log(values)}\n    validationSchema={yup.object().shape({\n      dateOfService: avDate().required(),\n    })}\n  >\n    <Date\n      id=\"dateOfService\"\n      name=\"dateOfService\"\n      min={{ value: 7, units: 'day' }}\n      max={{ value: 7, units: 'day' }}\n    />\n    <Button color=\"primary\" type=\"submit\">\n      Submit\n    </Button>\n  </Form>\n</div>;\n")),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/airbnb/react-dates#singledatepicker"}),"react-dates")," for additional props"),Object(i.b)("h3",{id:"name-string"},Object(i.b)("inlineCode",{parentName:"h3"},"name: string")),Object(i.b)("p",null,"The name of the field. Will be the key of the selected date that comes through in the values of the ",Object(i.b)("inlineCode",{parentName:"p"},"onSubmit")," callback."),Object(i.b)("h3",{id:"disabled-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"disabled?: boolean")),Object(i.b)("p",null,"Whether the date is disabled."),Object(i.b)("h3",{id:"min-string--limittype"},Object(i.b)("inlineCode",{parentName:"h3"},"min?: string | LimitType")),Object(i.b)("p",null,"Used in conjunction with ",Object(i.b)("inlineCode",{parentName:"p"},"max")," to derive ",Object(i.b)("inlineCode",{parentName:"p"},"isOutsideRange")," prop from ",Object(i.b)("inlineCode",{parentName:"p"},"react-dates")," and selectable year options in datepicker. Dates outside the allowed range will not be clickable in datepicker."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:"hideCopy=true",hideCopy:"true"}),'{\n  // LimitType\n  "value": "12",\n  "units": "day"\n}\n')),Object(i.b)("h3",{id:"max-string--limittype"},Object(i.b)("inlineCode",{parentName:"h3"},"max?: string | LimitType")),Object(i.b)("p",null,"Used in conjunction with ",Object(i.b)("inlineCode",{parentName:"p"},"min")," to derive ",Object(i.b)("inlineCode",{parentName:"p"},"isOutsideRange")," prop from ",Object(i.b)("inlineCode",{parentName:"p"},"react-dates")," and selectable year options in datepicker. Dates outside the allowed range will not be clickable in datepicker."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:"hideCopy=true",hideCopy:"true"}),'{\n  // LimitType\n  "value": "12",\n  "units": "day"\n}\n')),Object(i.b)("h3",{id:"calendaricon-reactnode"},Object(i.b)("inlineCode",{parentName:"h3"},"calendarIcon?: ReactNode")),Object(i.b)("p",null,"Override the default icon that appears. Default: `",Object(i.b)(p,{name:"calendar",mdxType:"Icon"})),Object(i.b)("h3",{id:"onpickerfocuschange--focused-boolean---void"},Object(i.b)("inlineCode",{parentName:"h3"},"onPickerFocusChange?: ({ focused: boolean }) => void")),Object(i.b)("p",null,"Function to be run when focus on the input changes."),Object(i.b)("h3",{id:"format-string"},Object(i.b)("inlineCode",{parentName:"h3"},"format?: string")),Object(i.b)("p",null,"How to format date value in ",Object(i.b)("inlineCode",{parentName:"p"},"onSubmit")," callback. Must be a format recognized by ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://momentjs.com/docs/#/displaying/format/"}),"moment"),". ",Object(i.b)("strong",{parentName:"p"},"Default: ",Object(i.b)("inlineCode",{parentName:"strong"},"MM/DD/YYYY"))),Object(i.b)("h3",{id:"datepicker-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"datepicker?: boolean")),Object(i.b)("p",null,"Toggle whether the calendar is shown."),Object(i.b)("h3",{id:"datepickerprops-singledatepickershape"},Object(i.b)("inlineCode",{parentName:"h3"},"datePickerProps?: SingleDatePickerShape")),Object(i.b)("p",null,"Props to be spread onto the datepicker component from ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/airbnb/react-dates#singledatepicker"}),"react-dates"),"."))}m.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),b=p(n),s=a,u=b["".concat(i,".").concat(s)]||b[s]||m[s]||o;return n?r.a.createElement(u,c(c({ref:t},l),{},{components:n})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);
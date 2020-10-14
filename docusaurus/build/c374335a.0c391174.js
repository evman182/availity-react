(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a,r=n(2),i=n(6),o=(n(0),n(156)),c={title:"<DateRange />"},d={unversionedId:"form/date/components/date-range",id:"form/date/components/date-range",isDocsHomePage:!1,title:"<DateRange />",description:"A date range, consisting of 2 fields, a start date and an end date, without a Label or Feedback",source:"@site/docs/form/date/components/date-range.mdx",slug:"/form/date/components/date-range",permalink:"/form/date/components/date-range",editUrl:"https://github.com/avaiity/availity-react/edit/master/docs/form/date/components/date-range.mdx",version:"current",sidebar:"someSidebar",previous:{title:"<DateRangeField />",permalink:"/form/date/components/date-range-field"},next:{title:"<Date /> ( Default Export )",permalink:"/form/date/components/date"}},l=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>name: string</code>",id:"name-string",children:[]},{value:"<code>startKey: string</code>",id:"startkey-string",children:[]},{value:"<code>endKey: string</code>",id:"endkey-string",children:[]},{value:"<code>min?: string | LimitType</code>",id:"min-string--limittype",children:[]},{value:"<code>max?: string | LimitType</code>",id:"max-string--limittype",children:[]},{value:"<code>disabled?: boolean</code>",id:"disabled-boolean",children:[]},{value:"<code>onPickerFocusChange?: ({ focusedInput: string }) =&gt; void</code>",id:"onpickerfocuschange--focusedinput-string---void",children:[]},{value:"<code>calendarIcon?: ReactNode</code>",id:"calendaricon-reactnode",children:[]},{value:"<code>format?: string</code>",id:"format-string",children:[]},{value:"<code>datepicker?: boolean</code>",id:"datepicker-boolean",children:[]},{value:"<code>datepickerProps?: SingleDatePickerShape</code>",id:"datepickerprops-singledatepickershape",children:[]},{value:"<code>autoSync?: boolean</code>",id:"autosync-boolean",children:[]},{value:"<code>ranges?: boolean | string[] | {[key:string]:MomentDateRange}</code>",id:"ranges-boolean--string--keystringmomentdaterange",children:[]}]}],b=(a="Icon",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),p={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A date range, consisting of 2 fields, a start date and an end date, without a ",Object(o.b)("inlineCode",{parentName:"p"},"Label")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Feedback")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"viewCode=true",viewCode:"true"}),"import { Form } from '@availity/form';\nimport { DateRange } from '@availity/date';\nimport { dateRange } from '@availity/yup';\nimport moment from 'moment';\nimport * as yup from 'yup';\n\n<div className=\"w-100 d-flex flex-row justify-content-around align-items-center\">\n  <Form\n    initialValues={{\n      dateOfService: undefined,\n    }}\n    onSubmit={values => console.log(values)}\n    validationSchema={yup.object().shape({\n      dateOfService: dateRange(\n        {\n          min: moment()\n            .subtract(7, 'day')\n            .format('MM/DD/YYYY'),\n          max: moment()\n            .add(7, 'day')\n            .format('MM/DD/YYYY'),\n          format: 'MM/DD/YYYY',\n        },\n        `Date must be between ${moment()\n          .subtract(7, 'day')\n          .format('MM/DD/YYYY')} and ${moment()\n          .add(7, 'day')\n          .format('MM/DD/YYYY')}`\n      )\n        .typeError('This field is invalid.')\n        .required('This field is required.'),\n    })}\n  >\n    <DateRange\n      id=\"dateOfService\"\n      name=\"dateOfService\"\n      min={{ value: 7, units: 'day' }}\n      max={{ value: 7, units: 'day' }}\n    />\n    <Button color=\"primary\" type=\"submit\">\n      Submit\n    </Button>\n  </Form>\n</div>;\n")),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/airbnb/react-dates#daterangepicker"}),"react-dates")," for additional props"),Object(o.b)("h3",{id:"name-string"},Object(o.b)("inlineCode",{parentName:"h3"},"name: string")),Object(o.b)("p",null,"The name of the field. Will be the key of the selected dates that come through in the values of the ",Object(o.b)("inlineCode",{parentName:"p"},"onSubmit")," callback."),Object(o.b)("h3",{id:"startkey-string"},Object(o.b)("inlineCode",{parentName:"h3"},"startKey: string")),Object(o.b)("p",null,"Key to return start date as on form submit. Should match the yup schema ",Object(o.b)("inlineCode",{parentName:"p"},"startKey"),"."),Object(o.b)("h3",{id:"endkey-string"},Object(o.b)("inlineCode",{parentName:"h3"},"endKey: string")),Object(o.b)("p",null,"Key to return end date as on form submit. Should match the yup schema ",Object(o.b)("inlineCode",{parentName:"p"},"endKey"),"."),Object(o.b)("h3",{id:"min-string--limittype"},Object(o.b)("inlineCode",{parentName:"h3"},"min?: string | LimitType")),Object(o.b)("p",null,"Used in conjunction with ",Object(o.b)("inlineCode",{parentName:"p"},"max")," to derive ",Object(o.b)("inlineCode",{parentName:"p"},"isOutsideRange")," prop from ",Object(o.b)("inlineCode",{parentName:"p"},"react-dates")," and selectable year options in datepicker. Dates outside the allowed range will not be clickable in datepicker."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:"hideCopy=true",hideCopy:"true"}),'{\n  // LimitType\n  "value": "12",\n  "units": "day"\n}\n')),Object(o.b)("h3",{id:"max-string--limittype"},Object(o.b)("inlineCode",{parentName:"h3"},"max?: string | LimitType")),Object(o.b)("p",null,"Used in conjunction with ",Object(o.b)("inlineCode",{parentName:"p"},"min")," to derive ",Object(o.b)("inlineCode",{parentName:"p"},"isOutsideRange")," prop from ",Object(o.b)("inlineCode",{parentName:"p"},"react-dates")," and selectable year options in datepicker. Dates outside the allowed range will not be clickable in datepicker."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:"hideCopy=true",hideCopy:"true"}),'{\n  // LimitType\n  "value": "12",\n  "units": "day"\n}\n')),Object(o.b)("h3",{id:"disabled-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"disabled?: boolean")),Object(o.b)("p",null,"Whether the date range is disabled."),Object(o.b)("h3",{id:"onpickerfocuschange--focusedinput-string---void"},Object(o.b)("inlineCode",{parentName:"h3"},"onPickerFocusChange?: ({ focusedInput: string }) => void")),Object(o.b)("p",null,"Function to be run when focus on the input changes. ",Object(o.b)("inlineCode",{parentName:"p"},"focusedInput")," contains the ",Object(o.b)("inlineCode",{parentName:"p"},"id")," of the focused field."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Possible Values"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"startId")," - the id of the start field. ",Object(o.b)("inlineCode",{parentName:"li"},'"<name>-start"')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"endId")," - the id of the end field. ",Object(o.b)("inlineCode",{parentName:"li"},'"<name>-end"')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"undefined")," - the date range was unfocused")),Object(o.b)("h3",{id:"calendaricon-reactnode"},Object(o.b)("inlineCode",{parentName:"h3"},"calendarIcon?: ReactNode")),Object(o.b)("p",null,"Override the default icon that appears. Default: `",Object(o.b)(b,{name:"calendar",mdxType:"Icon"})),Object(o.b)("h3",{id:"format-string"},Object(o.b)("inlineCode",{parentName:"h3"},"format?: string")),Object(o.b)("p",null,"How to format date value in ",Object(o.b)("inlineCode",{parentName:"p"},"onSubmit")," callback. Must be a format recognized by ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://momentjs.com/docs/#/displaying/format/"}),"moment"),". ",Object(o.b)("strong",{parentName:"p"},"Default: ",Object(o.b)("inlineCode",{parentName:"strong"},"MM/DD/YYYY"))),Object(o.b)("h3",{id:"datepicker-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"datepicker?: boolean")),Object(o.b)("p",null,"Toggle whether the calendar is shown."),Object(o.b)("h3",{id:"datepickerprops-singledatepickershape"},Object(o.b)("inlineCode",{parentName:"h3"},"datepickerProps?: SingleDatePickerShape")),Object(o.b)("p",null,"Props to be spread onto the datepicker component from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/airbnb/react-dates#singledatepicker"}),"react-dates"),"."),Object(o.b)("h3",{id:"autosync-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"autoSync?: boolean")),Object(o.b)("p",null,"Toggle whether the other date should be automatically synced to the selected date when focus changes. Dates are only auto synced the first time the input is touched and if the date field to auto sync is empty"),Object(o.b)("p",null,"Props to be spread onto the datepicker component from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/airbnb/react-dates#singledatepicker"}),"react-dates"),"."),Object(o.b)("h3",{id:"ranges-boolean--string--keystringmomentdaterange"},Object(o.b)("inlineCode",{parentName:"h3"},"ranges?: boolean | string[] | {[key:string]:MomentDateRange}")),Object(o.b)("p",null,"Show preset date ranges when calendar is visible. Accepts ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")," to display default ranges. If ",Object(o.b)("inlineCode",{parentName:"p"},"string[]")," will strip subset of ranges off defaults. If ",Object(o.b)("inlineCode",{parentName:"p"},"object")," will overwrite the default ranges."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:"hideCopy=true",hideCopy:"true"}),"interface MomentDateRange {\n  startDate: Moment;\n  endDate: Moment;\n}\n")))}s.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,u=p["".concat(o,".").concat(m)]||p[m]||s[m]||i;return n?r.a.createElement(u,c(c({ref:t},l),{},{components:n})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
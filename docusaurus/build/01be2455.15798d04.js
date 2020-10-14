(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{156:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),b=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=r,m=p["".concat(l,".").concat(u)]||p[u]||s[u]||o;return n?a.a.createElement(m,i(i({ref:t},d),{},{components:n})):a.a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(156)),l={title:"<Field />",summary:"Input field wrapped in additional features such as label, feedback, grid options, etc"},i={unversionedId:"form/components/field",id:"form/components/field",isDocsHomePage:!1,title:"<Field />",description:"Example",source:"@site/docs/form/components/field.md",slug:"/form/components/field",permalink:"/form/components/field",editUrl:"https://github.com/avaiity/availity-react/edit/master/docs/form/components/field.md",version:"current",sidebar:"someSidebar",previous:{title:"<Feedback />",permalink:"/form/components/feedback"},next:{title:"<FormGroup />",permalink:"/form/components/form-group"}},c=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>name: string</code>",id:"name-string",children:[]},{value:"<code>tag?: React.ComponentType | string</code>",id:"tag-reactcomponenttype--string",children:[]},{value:"<code>label?: React.ReactNode</code>",id:"label-reactreactnode",children:[]},{value:"<code>labelHidden? boolean</code>",id:"labelhidden-boolean",children:[]},{value:"<code>disabled? boolean</code>",id:"disabled-boolean",children:[]},{value:"<code>readOnly? boolean</code>",id:"readonly-boolean",children:[]},{value:"<code>size? string</code>",id:"size-string",children:[]},{value:"<code>inputClass?: string</code>",id:"inputclass-string",children:[]},{value:"<code>labelClass?: string</code>",id:"labelclass-string",children:[]},{value:"<code>helpMessage?: React.ReactNode</code>",id:"helpmessage-reactreactnode",children:[]},{value:"<code>labelAttrs?: React.HTMLAttributes&lt;HTMLLabelElement&gt;</code>",id:"labelattrs-reacthtmlattributeshtmllabelelement",children:[]},{value:"<code>groupAttrs?: FormGroupProps</code>",id:"groupattrs-formgroupprops",children:[]},{value:"<code>grid?: object</code>",id:"grid-object",children:[]}]}],d={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"viewCode=true",viewCode:"true"}),'<Form\n  initialValues={{\n    hello: \'\',\n  }}\n  onSubmit={values => alert(JSON.stringify(values))}\n  validationSchema={yup.object({\n    hello: yup.string().isRequired(true),\n  })}\n>\n  <Field name="hello" label="Greeting" />\n  <Button type="submit" color="primary">\n    Submit\n  </Button>\n</Form>\n')),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"name-string"},Object(o.b)("inlineCode",{parentName:"h3"},"name: string")),Object(o.b)("p",null,"Identifies the field and matches the validation schema."),Object(o.b)("h3",{id:"tag-reactcomponenttype--string"},Object(o.b)("inlineCode",{parentName:"h3"},"tag?: React.ComponentType | string")),Object(o.b)("p",null,"The Node or tag to substitute as the input field. Default is reactstrap ",Object(o.b)("inlineCode",{parentName:"p"},"Input")," tag."),Object(o.b)("h3",{id:"label-reactreactnode"},Object(o.b)("inlineCode",{parentName:"h3"},"label?: React.ReactNode")),Object(o.b)("p",null,"Displays a Reactstrap ",Object(o.b)("inlineCode",{parentName:"p"},"<Label />")," for the field"),Object(o.b)("h3",{id:"labelhidden-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"labelHidden? boolean")),Object(o.b)("p",null,"Used to hide the label."),Object(o.b)("h3",{id:"disabled-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"disabled? boolean")),Object(o.b)("p",null,"Disable the ",Object(o.b)("inlineCode",{parentName:"p"},"<Field />"),"."),Object(o.b)("h3",{id:"readonly-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"readOnly? boolean")),Object(o.b)("p",null,"Mark the field as read only."),Object(o.b)("h3",{id:"size-string"},Object(o.b)("inlineCode",{parentName:"h3"},"size? string")),Object(o.b)("p",null,"Size of the input field. Potential values: ",Object(o.b)("inlineCode",{parentName:"p"},'"lg"'),", ",Object(o.b)("inlineCode",{parentName:"p"},'"sm"')),Object(o.b)("h3",{id:"inputclass-string"},Object(o.b)("inlineCode",{parentName:"h3"},"inputClass?: string")),Object(o.b)("p",null,"Class names passed to the input tag."),Object(o.b)("h3",{id:"labelclass-string"},Object(o.b)("inlineCode",{parentName:"h3"},"labelClass?: string")),Object(o.b)("p",null,"Class names passed to the label tag."),Object(o.b)("h3",{id:"helpmessage-reactreactnode"},Object(o.b)("inlineCode",{parentName:"h3"},"helpMessage?: React.ReactNode")),Object(o.b)("p",null,"Display info text below the field"),Object(o.b)("h3",{id:"labelattrs-reacthtmlattributeshtmllabelelement"},Object(o.b)("inlineCode",{parentName:"h3"},"labelAttrs?: React.HTMLAttributes<HTMLLabelElement>")),Object(o.b)("p",null,"Pass additonal attributes to the label"),Object(o.b)("h3",{id:"groupattrs-formgroupprops"},Object(o.b)("inlineCode",{parentName:"h3"},"groupAttrs?: FormGroupProps")),Object(o.b)("p",null,"Pass additonal attributes to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/form/components/form-group/#props"}),"Form Group")),Object(o.b)("h3",{id:"grid-object"},Object(o.b)("inlineCode",{parentName:"h3"},"grid?: object")),Object(o.b)("p",null,"Object mapping number of columns to the label and input."))}b.isMDXComponent=!0}}]);
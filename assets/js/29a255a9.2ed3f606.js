"use strict";(self.webpackChunk_availity_dinosaurdocs=self.webpackChunk_availity_dinosaurdocs||[]).push([[6530],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),p=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(d,".").concat(m)]||s[m]||c[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6862:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i=["components"],l={title:"<Radio />"},d=void 0,p={unversionedId:"form/components/radio",id:"form/components/radio",title:"<Radio />",description:"Inputs of type radio. Radios should be wrapped in a RadioGroup.",source:"@site/docs/form/components/radio.md",sourceDirName:"form/components",slug:"/form/components/radio",permalink:"/availity-react/form/components/radio",draft:!1,editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/form/components/radio.md",tags:[],version:"current",frontMatter:{title:"<Radio />"},sidebar:"someSidebar",previous:{title:"<RadioGroup />",permalink:"/availity-react/form/components/radio-group"},next:{title:"Getting Started",permalink:"/availity-react/form/date/"}},u={},c=[{value:"Example",id:"example",level:3},{value:"Live example: Storybook",id:"live-example-storybook",level:4},{value:"Props",id:"props",level:3},{value:"<code>id?: string</code>",id:"id-string",level:4},{value:"<code>name?: string</code>",id:"name-string",level:4},{value:"<code>label?: ReactNode</code>",id:"label-reactnode",level:4},{value:"<code>helpId?: string</code>",id:"helpid-string",level:4},{value:"<code>value?: string</code>",id:"value-string",level:4},{value:"<code>disabled?: boolean</code>",id:"disabled-boolean",level:4}],s={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Inputs of type radio. Radios should be wrapped in a RadioGroup."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport { Form, Radio, RadioGroup } from \'@availity/form\';\nimport { Button } from \'reactstrap\';\nimport * as yup from \'yup\';\n\nconst Example = () => (\n  <Form\n    initialValues={{\n      hello: \'\',\n    }}\n    onSubmit={() => {}}\n    validationSchema={yup.object().shape({\n      hello: yup.string().required(\'This field is required\'),\n    })}\n  >\n    <RadioGroup name="hello" label="Radio Group">\n      <Radio name="hello" label="Radio One" value="uno" />\n      <Radio name="hello" label="Radio Two" value="dos" />\n      <Radio name="hello" label="Radio Three" value="tres" />\n    </RadioGroup>\n    <Button type="submit">Submit</Button>\n  </Form>\n);\n')),(0,a.kt)("h4",{id:"live-example-storybook"},"Live example: ",(0,a.kt)("a",{parentName:"h4",href:"https://availity.github.io/availity-react/storybook/?path=/story/formik-form--radio"},"Storybook")),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)("h4",{id:"id-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"id?: string")),(0,a.kt)("p",null,"Id for the radio button."),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"name?: string")),(0,a.kt)("p",null,"Should match ",(0,a.kt)("inlineCode",{parentName:"p"},"<RadioGroup />")," name for validation and accessibly linking button to form feedback."),(0,a.kt)("h4",{id:"label-reactnode"},(0,a.kt)("inlineCode",{parentName:"h4"},"label?: ReactNode")),(0,a.kt)("p",null,"Label for the radio button."),(0,a.kt)("h4",{id:"helpid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"helpId?: string")),(0,a.kt)("p",null,"Help topic id, adds ",(0,a.kt)("inlineCode",{parentName:"p"},"<FieldHelpIcon/>")," next to the label (should not be within label for accessibility)."),(0,a.kt)("h4",{id:"value-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"value?: string")),(0,a.kt)("p",null,"Value of the radio button."),(0,a.kt)("h4",{id:"disabled-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"disabled?: boolean")),(0,a.kt)("p",null,"Disables the radio button."))}m.isMDXComponent=!0}}]);
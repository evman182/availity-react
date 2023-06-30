"use strict";(self.webpackChunk_availity_dinosaurdocs=self.webpackChunk_availity_dinosaurdocs||[]).push([[1670],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,b=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?o.createElement(b,l(l({ref:t},u),{},{components:n})):o.createElement(b,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9199:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),l=["components"],i={title:"<Checkbox />"},c=void 0,p={unversionedId:"form/components/checkbox",id:"form/components/checkbox",title:"<Checkbox />",description:"Inputs of type checkbox. Checkboxes should be wrapped in a CheckboxGroup.",source:"@site/docs/form/components/checkbox.md",sourceDirName:"form/components",slug:"/form/components/checkbox",permalink:"/availity-react/form/components/checkbox",draft:!1,editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/form/components/checkbox.md",tags:[],version:"current",frontMatter:{title:"<Checkbox />"},sidebar:"someSidebar",previous:{title:"<CheckboxGroup />",permalink:"/availity-react/form/components/checkbox-group"},next:{title:"<Feedback />",permalink:"/availity-react/form/components/feedback"}},u={},d=[{value:"Example",id:"example",level:3},{value:"Live example: Storybook",id:"live-example-storybook",level:4},{value:"Props",id:"props",level:3},{value:"<code>id?: string</code>",id:"id-string",level:4},{value:"<code>groupName?: string</code>",id:"groupname-string",level:4},{value:"<code>label?: ReactNode</code>",id:"label-reactnode",level:4},{value:"<code>helpId?: string</code>",id:"helpid-string",level:4},{value:"<code>value?: string</code>",id:"value-string",level:4},{value:"<code>disabled?: boolean</code>",id:"disabled-boolean",level:4},{value:"<code>inline?: boolean</code>",id:"inline-boolean",level:4}],s={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Inputs of type checkbox. Checkboxes should be wrapped in a CheckboxGroup."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport { Form, Checkbox, CheckboxGroup } from \'@availity/form\';\nimport { Button } from \'reactstrap\';\nimport * as yup from \'yup\';\n\nconst Example = () => (\n  <Form\n    initialValues={{\n      hello: [],\n    }}\n    onSubmit={() => {}}\n    validationSchema={yup.object().shape({\n      hello: yup.array().required(\'At least one checkbox is required\'),\n    })}\n  >\n    <CheckboxGroup name="hello" label="Checkbox Group">\n      <Checkbox groupName="hello" label="Check One" value="uno" />\n      <Checkbox groupName="hello" label="Check Two" value="dos" />\n      <Checkbox groupName="hello" label="Check Three" value="tres" />\n      <Checkbox\n        groupName="checkboxGroup"\n        label={<>Check Four</>}\n        value="cuatro"\n      />\n    </CheckboxGroup>\n    <Button type="submit" color="primary">\n      Submit\n    </Button>\n  </Form>\n);\n')),(0,a.kt)("h4",{id:"live-example-storybook"},"Live example: ",(0,a.kt)("a",{parentName:"h4",href:"https://availity.github.io/availity-react/storybook/?path=/story/formik-form--checkbox"},"Storybook")),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)("h4",{id:"id-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"id?: string")),(0,a.kt)("p",null,"Id and name for the checkbox."),(0,a.kt)("h4",{id:"groupname-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"groupName?: string")),(0,a.kt)("p",null,"Should match ",(0,a.kt)("inlineCode",{parentName:"p"},"<CheckboxGroup />")," name to accessibly link input to form feedback."),(0,a.kt)("h4",{id:"label-reactnode"},(0,a.kt)("inlineCode",{parentName:"h4"},"label?: ReactNode")),(0,a.kt)("p",null,"Label for the checkbox."),(0,a.kt)("h4",{id:"helpid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"helpId?: string")),(0,a.kt)("p",null,"Help topic id, adds ",(0,a.kt)("inlineCode",{parentName:"p"},"<FieldHelpIcon/>")," next to the label (should not be within label for accessibility)."),(0,a.kt)("h4",{id:"value-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"value?: string")),(0,a.kt)("p",null,"Value of the checkbox."),(0,a.kt)("h4",{id:"disabled-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"disabled?: boolean")),(0,a.kt)("p",null,"Disables the checkbox."),(0,a.kt)("h4",{id:"inline-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"inline?: boolean")),(0,a.kt)("p",null,"Will render the checkbox inline with other checkboxes. ",(0,a.kt)("strong",{parentName:"p"},"Default:")," true."))}m.isMDXComponent=!0}}]);
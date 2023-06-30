"use strict";(self.webpackChunk_availity_dinosaurdocs=self.webpackChunk_availity_dinosaurdocs||[]).push([[1863],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9702:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),l=["components"],i={title:"Progress"},p=void 0,s={unversionedId:"components/progress",id:"components/progress",title:"Progress",description:"Availity Progress Bar",source:"@site/docs/components/progress.mdx",sourceDirName:"components",slug:"/components/progress",permalink:"/availity-react/components/progress",draft:!1,editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/progress.mdx",tags:[],version:"current",frontMatter:{title:"Progress"},sidebar:"someSidebar",previous:{title:"Badge",permalink:"/availity-react/components/badge"},next:{title:"Getting Started",permalink:"/availity-react/components/spaces/"}},c={},m=[{value:"Installation",id:"installation",level:3},{value:"Example",id:"example",level:3},{value:"Live example",id:"live-example",level:4},{value:"Props",id:"props",level:3},{value:"<code>tag?: React.ComponentType | string</code>",id:"tag-reactcomponenttype--string",level:4},{value:"<code>animated?: boolean</code>",id:"animated-boolean",level:4},{value:"<code>striped?: boolean</code>",id:"striped-boolean",level:4},{value:"<code>complete?: boolean</code>",id:"complete-boolean",level:4},{value:"<code>value?: number</code>",id:"value-number",level:4},{value:"<code>max? number</code>",id:"max-number",level:4},{value:"<code>color?: string</code>",id:"color-string",level:4}],u={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Availity Progress Bar"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@availity/progress"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@availity/progress.svg?style=for-the-badge",alt:"Version"}))),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"npm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @availity/progress\n")),(0,o.kt)("p",null,"Yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @availity/progress\n")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Progress from '@availity/progress';\n\nconst Example = () => (\n  <>\n    <p>50% Complete</p>\n    <Progress animated={false} striped complete={false} value={50} max={100} />\n  </>\n);\n")),(0,o.kt)("h4",{id:"live-example"},"Live example"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://availity.github.io/availity-react/storybook/?path=/story/components-progress--default"},"Storybook")),(0,o.kt)("h3",{id:"props"},"Props"),(0,o.kt)("h4",{id:"tag-reactcomponenttype--string"},(0,o.kt)("inlineCode",{parentName:"h4"},"tag?: React.ComponentType | string")),(0,o.kt)("p",null,"The tag to render the progress bar as. ",(0,o.kt)("strong",{parentName:"p"},"Default:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"<div>"),"."),(0,o.kt)("h4",{id:"animated-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"animated?: boolean")),(0,o.kt)("p",null,'Triggers the "animated" style in the progress bar.'),(0,o.kt)("h4",{id:"striped-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"striped?: boolean")),(0,o.kt)("p",null,'Triggers the "striped" style in the progress bar.'),(0,o.kt)("h4",{id:"complete-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"complete?: boolean")),(0,o.kt)("p",null,'Triggers the "complete" style in the progress bar. When true, a checkmark appears at the end of the progress bar'),(0,o.kt)("h4",{id:"value-number"},(0,o.kt)("inlineCode",{parentName:"h4"},"value?: number")),(0,o.kt)("p",null,"The amount of the progress bar that should be filled (relative to the ",(0,o.kt)("inlineCode",{parentName:"p"},"max"),") ",(0,o.kt)("strong",{parentName:"p"},"Default:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,o.kt)("h4",{id:"max-number"},(0,o.kt)("inlineCode",{parentName:"h4"},"max? number")),(0,o.kt)("p",null,"The maximum amount of the progress bar. ",(0,o.kt)("strong",{parentName:"p"},"Default:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"100"),"."),(0,o.kt)("h4",{id:"color-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"color?: string")),(0,o.kt)("p",null,"The color of the progress bar. ",(0,o.kt)("strong",{parentName:"p"},"Default:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"success"),"."))}d.isMDXComponent=!0}}]);
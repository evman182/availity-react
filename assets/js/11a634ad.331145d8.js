"use strict";(self.webpackChunk_availity_dinosaurdocs=self.webpackChunk_availity_dinosaurdocs||[]).push([[5014],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3922:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],l={title:"App Tiles",summary:"Availity UI Kit application tiles react component."},p=void 0,s={unversionedId:"components/app-tiles",id:"components/app-tiles",title:"App Tiles",description:"A component which outputs an Icon made of tiles.",source:"@site/docs/components/app-tiles.mdx",sourceDirName:"components",slug:"/components/app-tiles",permalink:"/availity-react/components/app-tiles",draft:!1,editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/app-tiles.mdx",tags:[],version:"current",frontMatter:{title:"App Tiles",summary:"Availity UI Kit application tiles react component."},sidebar:"someSidebar",previous:{title:"App Icon",permalink:"/availity-react/components/app-icon"},next:{title:"Getting Started",permalink:"/availity-react/components/authorize/"}},c={},u=[{value:"Installation",id:"installation",level:3},{value:"Example",id:"example",level:3},{value:"Live example",id:"live-example",level:4},{value:"Props",id:"props",level:3},{value:"<code>size? string</code>",id:"size-string",level:4},{value:"<code>color?: string</code>",id:"color-string",level:4},{value:"<code>branded?: boolean</code>",id:"branded-boolean",level:4},{value:"<code>image?: string</code>",id:"image-string",level:4},{value:"<code>alt?: string</code>",id:"alt-string",level:4},{value:"<code>parents?: object[]</code>",id:"parents-object",level:4}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A component which outputs an Icon made of tiles."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@availity/app-tiles"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@availity/app-tiles.svg?style=for-the-badge",alt:"Version"}))),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"npm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @availity/app-tiles --save\n")),(0,i.kt)("p",null,"Yarn"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @availity/app-tiles\n")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport AppTiles from \'@availity/app-tiles\';\n\nconst Example = () => (\n  <>\n    <AppTiles shortName="SN" color="blue" image="/path/to/image" branded size="sm"/>\n    <AppTiles shortName="SN" color="red" size="xl" parents={[\n      { images: { tile: "/path/to/image" } },\n      { shortName: "SN" }\n    ]}/>\n    <AppTiles shortName="SN"/>\n  </>\n);\n')),(0,i.kt)("h4",{id:"live-example"},"Live example"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://availity.github.io/availity-react/storybook/?path=/docs/components-apptiles--default"},"Storybook")),(0,i.kt)("h3",{id:"props"},"Props"),(0,i.kt)("h4",{id:"size-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"size? string")),(0,i.kt)("p",null,"Potential values: ",(0,i.kt)("inlineCode",{parentName:"p"},'"lg"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"xl"')),(0,i.kt)("h4",{id:"color-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"color?: string")),(0,i.kt)("p",null,"Potential values: ",(0,i.kt)("inlineCode",{parentName:"p"},'"black"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"blue"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"green"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"orange"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"red"'),". ",(0,i.kt)("strong",{parentName:"p"},"Default:")," ",(0,i.kt)("inlineCode",{parentName:"p"},'"black"')),(0,i.kt)("h4",{id:"branded-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"branded?: boolean")),(0,i.kt)("p",null,'Triggers "branded" styles'),(0,i.kt)("h4",{id:"image-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"image?: string")),(0,i.kt)("p",null,"If image source is provided, it will render this instead of parents."),(0,i.kt)("h4",{id:"alt-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"alt?: string")),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," prop. the alt property for your image source is not found or is loading."),(0,i.kt)("h4",{id:"parents-object"},(0,i.kt)("inlineCode",{parentName:"h4"},"parents?: object[]")),(0,i.kt)("p",null,"If parents are provided, it will render up to the first in the icon, ether images.tile or shortName."))}d.isMDXComponent=!0}}]);
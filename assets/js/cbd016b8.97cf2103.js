"use strict";(self.webpackChunk_availity_dinosaurdocs=self.webpackChunk_availity_dinosaurdocs||[]).push([[3673],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},929:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),s=["components"],i={title:"<SpacesGhostText />"},c=void 0,p={unversionedId:"components/spaces/ghost-text",id:"components/spaces/ghost-text",title:"<SpacesGhostText />",description:"Display the ghost text for a given space. Renders null if the ghost text should not display.",source:"@site/docs/components/spaces/ghost-text.md",sourceDirName:"components/spaces",slug:"/components/spaces/ghost-text",permalink:"/availity-react/components/spaces/ghost-text",draft:!1,editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/spaces/ghost-text.md",tags:[],version:"current",frontMatter:{title:"<SpacesGhostText />"},sidebar:"someSidebar",previous:{title:"<SpacesAgreement />",permalink:"/availity-react/components/spaces/agreement"},next:{title:"useSpaces",permalink:"/availity-react/components/spaces/use-spaces"}},l={},u=[{value:"Example",id:"example",level:3},{value:'Live example: <a href="https://availity.github.io/availity-react/storybook/?path=/story/components-spaces--ghost-text"> Storybook</a>',id:"live-example--storybook",level:4},{value:"Props",id:"props",level:3},{value:"<code>spaceId?: string</code>",id:"spaceid-string",level:4}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Display the ghost text for a given space. Renders ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," if the ghost text should not display."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Spaces, { SpacesGhostText } from '@availity/spaces';\n\nconst Example = () => (\n  <Spaces\n    spaceIds={['73162546201441126239486200007187']}\n    clientId=\"my-client-id\"\n  >\n    <SpacesGhostText />\n  </Spaces>\n);\n")),(0,a.kt)("h4",{id:"live-example--storybook"},"Live example: ",(0,a.kt)("a",{href:"https://availity.github.io/availity-react/storybook/?path=/story/components-spaces--ghost-text"}," Storybook")),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)("h4",{id:"spaceid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"spaceId?: string")),(0,a.kt)("p",null,"The id of the space to render the ghost text for. If no ",(0,a.kt)("inlineCode",{parentName:"p"},"spaceId")," is provided, the first space in the ",(0,a.kt)("inlineCode",{parentName:"p"},"spaces")," array is used. Note: This is only to be used when the Spaces provider should only ever contain a single space. |"))}m.isMDXComponent=!0}}]);
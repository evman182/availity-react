"use strict";(self.webpackChunk_availity_dinosaurdocs=self.webpackChunk_availity_dinosaurdocs||[]).push([[3091],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||l[f]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},663:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],u={title:"useCurrentRegion"},s=void 0,c={unversionedId:"components/hooks/use-region",id:"components/hooks/use-region",title:"useCurrentRegion",description:"Hook that returns the user's current region.",source:"@site/docs/components/hooks/use-region.md",sourceDirName:"components/hooks",slug:"/components/hooks/use-region",permalink:"/availity-react/components/hooks/use-region",draft:!1,editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/hooks/use-region.md",tags:[],version:"current",frontMatter:{title:"useCurrentRegion"},sidebar:"someSidebar",previous:{title:"useMount",permalink:"/availity-react/components/hooks/use-mount"},next:{title:"useTimeout",permalink:"/availity-react/components/hooks/use-timeout"}},p={},l=[{value:"Example",id:"example",level:3},{value:"Props",id:"props",level:2},{value:"<code>options?: QueryConfig</code>",id:"options-queryconfig",level:3}],m={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hook that returns the user's current region."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useCurrentRegion } from '@availity/hooks';\n\nconst Example = () => {\n  const { data: region, isFetching } = useCurrentRegion();\n\n  return <div>{isFetching ? 'Loading...' : region?.value || 'Nowhere'}</div>;\n};\n")),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("h3",{id:"options-queryconfig"},(0,i.kt)("inlineCode",{parentName:"h3"},"options?: QueryConfig")),(0,i.kt)("p",null,"Options to be passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery")," hook such as ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"retry"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"onSuccess"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"More information on the options can be found ",(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/docs/api/#usequery"},"here"))))}f.isMDXComponent=!0}}]);
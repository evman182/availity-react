"use strict";(self.webpackChunk_availity_dinosaurdocs=self.webpackChunk_availity_dinosaurdocs||[]).push([[8557],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5950:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return f}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),c=["components"],s={title:"useEffectAsync"},i=void 0,u={unversionedId:"components/hooks/use-effect-async",id:"components/hooks/use-effect-async",title:"useEffectAsync",description:"Hook that allows asynchronous functions to be called in the standard useEffect hook.",source:"@site/docs/components/hooks/use-effect-async.md",sourceDirName:"components/hooks",slug:"/components/hooks/use-effect-async",permalink:"/availity-react/components/hooks/use-effect-async",draft:!1,editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/hooks/use-effect-async.md",tags:[],version:"current",frontMatter:{title:"useEffectAsync"},sidebar:"someSidebar",previous:{title:"useCurrentUser",permalink:"/availity-react/components/hooks/use-current-user"},next:{title:"useMount",permalink:"/availity-react/components/hooks/use-mount"}},l={},f=[{value:"Example",id:"example",level:3},{value:"Props",id:"props",level:3},{value:"<code>effect: React.useEffect</code>",id:"effect-reactuseeffect",level:4},{value:"<code>inputs: any[]</code>",id:"inputs-any",level:4}],p={toc:f};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hook that allows asynchronous functions to be called in the standard useEffect hook."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { useEffectAsync } from '@availity/hooks';\n\nconst Example = ({ asyncFunction }) => {\n  const [state, setState] = useState('Hello');\n\n  useEffectAsync(async () => {\n    const newState = await asyncFunction();\n\n    setState(newState);\n  }, []);\n\n  return <div>{state}</div>;\n};\n")),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)("h4",{id:"effect-reactuseeffect"},(0,a.kt)("inlineCode",{parentName:"h4"},"effect: React.useEffect")),(0,a.kt)("p",null,"The effect to call - just like the function given to ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect"),"."),(0,a.kt)("h4",{id:"inputs-any"},(0,a.kt)("inlineCode",{parentName:"h4"},"inputs: any[]")),(0,a.kt)("p",null,"The watch params for the effect - just like the second arg in ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect"),"."))}m.isMDXComponent=!0}}]);
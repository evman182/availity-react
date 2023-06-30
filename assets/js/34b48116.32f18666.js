"use strict";(self.webpackChunk_availity_dinosaurdocs=self.webpackChunk_availity_dinosaurdocs||[]).push([[8350],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),c=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=r,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||i;return t?o.createElement(m,a(a({ref:n},p),{},{components:t})):o.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6827:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var o=t(3117),r=t(102),i=(t(7294),t(3905)),a=["components"],s={title:"useOrganizations"},u=void 0,c={unversionedId:"components/hooks/use-organizations",id:"components/hooks/use-organizations",title:"useOrganizations",description:"Hook that returns organizations.",source:"@site/docs/components/hooks/use-organizations.md",sourceDirName:"components/hooks",slug:"/components/hooks/use-organizations",permalink:"/availity-react/components/hooks/use-organizations",draft:!1,editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/hooks/use-organizations.md",tags:[],version:"current",frontMatter:{title:"useOrganizations"},sidebar:"someSidebar",previous:{title:"usePermissions",permalink:"/availity-react/components/hooks/use-permissions"},next:{title:"useProviders",permalink:"/availity-react/components/hooks/use-providers"}},p={},l=[{value:"Example",id:"example",level:3},{value:"Props",id:"props",level:2},{value:"<code>config: AxiosRequestConfig</code>",id:"config-axiosrequestconfig",level:3},{value:"<code>options?: QueryConfig</code>",id:"options-queryconfig",level:3}],d={toc:l};function f(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hook that returns organizations."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useCurrentUser, useOrganizations } from '@availity/hooks';\n\nconst Example = () => {\n  const { data: user } = useCurrentUser();\n  const { data, isFetching } = useOrganizations(\n    { params: { permissionId: ['5'], userId: user?.id } },\n    { enabled: !!user?.id }\n  );\n\n  return (\n    <div>\n      {isFetching\n        ? 'Loading...'\n        : data?.data?.organizations?.[0]?.name || 'No organizations found'}\n    </div>\n  );\n};\n")),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("h3",{id:"config-axiosrequestconfig"},(0,i.kt)("inlineCode",{parentName:"h3"},"config: AxiosRequestConfig")),(0,i.kt)("p",null,"Config passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"getOrganizations")," call from ",(0,i.kt)("inlineCode",{parentName:"p"},"@availity/api-axios"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"More information about this config can be found ",(0,i.kt)("a",{parentName:"p",href:"https://availity.github.io/sdk-js/api/getting-started/#config-1"},"here"))),(0,i.kt)("h3",{id:"options-queryconfig"},(0,i.kt)("inlineCode",{parentName:"h3"},"options?: QueryConfig")),(0,i.kt)("p",null,"Options to be passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery")," hook such as ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"retry"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"onSuccess"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"More information on the options can be found ",(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/docs/api/#usequery"},"here"))))}f.isMDXComponent=!0}}]);
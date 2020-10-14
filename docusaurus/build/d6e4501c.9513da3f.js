(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(156)),c={title:"Page Header",summary:"The standard page header for Availity Portal Applications"},i={unversionedId:"components/page-header",id:"components/page-header",isDocsHomePage:!1,title:"Page Header",description:"The standard Availity application header that appears at the top of the page. It can include an app icon, payer logo, and/or the feedback loop.",source:"@site/docs/components/page-header.mdx",slug:"/components/page-header",permalink:"/components/page-header",editUrl:"https://github.com/avaiity/availity-react/edit/master/docs/components/page-header.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Link",permalink:"/components/link"},next:{title:"Getting Started",permalink:"/components/spaces/index"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>appName: string</code>",id:"appname-string",children:[]},{value:"<code>spaceName?: string</code>",id:"spacename-string",children:[]},{value:"<code>spaceId?: string</code>",id:"spaceid-string",children:[]},{value:"<code>appAbbr?: string</code>",id:"appabbr-string",children:[]},{value:"<code>iconColor?: string</code>",id:"iconcolor-string",children:[]},{value:"<code>branded?: boolean</code>",id:"branded-boolean",children:[]},{value:"<code>payerId?: string</code>",id:"payerid-string",children:[]},{value:"<code>logo?: boolean</code>",id:"logo-boolean",children:[]},{value:"<code>component?: ReactNode</code>",id:"component-reactnode",children:[]},{value:"<code>feedback?: boolean</code>",id:"feedback-boolean",children:[]},{value:"<code>feedbackProps?: FeedbackProps</code>",id:"feedbackprops-feedbackprops",children:[]},{value:"<code>children?: ReactNode</code>",id:"children-reactnode",children:[]},{value:"<code>crumbs?: Array&lt;Object&gt; | ReactNode</code>",id:"crumbs-arrayobject--reactnode",children:[]},{value:"<code>tag?: React.ComponentType</code>",id:"tag-reactcomponenttype",children:[]},{value:"<code>clientId?: string</code>",id:"clientid-string",children:[]},{value:"<code>iconSrc?: string</code>",id:"iconsrc-string",children:[]},{value:"<code>iconAlt?: string</code>",id:"iconalt-string",children:[]},{value:"<code>homeUrl?: string</code>",id:"homeurl-string",children:[]},{value:"<code>titleProps?: React.HTMLAttributes&lt;HTMLSpanElement&gt;</code>",id:"titleprops-reacthtmlattributeshtmlspanelement",children:[]},{value:"<code>renderRightContent: React.ComponentType&lt;{ payerLogo: ReactNode, feedback: ReactNode, className: string }&gt;</code>",id:"renderrightcontent-reactcomponenttype-payerlogo-reactnode-feedback-reactnode-classname-string-",children:[]},{value:"<code>linkTag?: React.ComponentType&lt;React.HTMLAttributes&lt;HTMLAnchorElement&gt;&gt; | string</code>",id:"linktag-reactcomponenttypereacthtmlattributeshtmlanchorelement--string",children:[]}]}],d={rightToc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The standard Availity application header that appears at the top of the page. It can include an app icon, payer logo, and/or the feedback loop."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx install-peerdeps @availity/page-header --save\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"viewCode=true",viewCode:"true"}),'import PageHeader from \'@availity/page-header\';\n<div className="w-100 d-flex flex-column justify-content-around align-items-start">\n  <PageHeader appName="Payer Space" appAbbr="PS" iconColor="blue" feedback />\n</div>;\n')),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"appname-string"},Object(o.b)("inlineCode",{parentName:"h3"},"appName: string")),Object(o.b)("p",null,"Name of the applicaiton"),Object(o.b)("h3",{id:"spacename-string"},Object(o.b)("inlineCode",{parentName:"h3"},"spaceName?: string")),Object(o.b)("p",null,"Payer Space Name of the space in which this page is under."),Object(o.b)("h3",{id:"spaceid-string"},Object(o.b)("inlineCode",{parentName:"h3"},"spaceId?: string")),Object(o.b)("p",null,"Payer Space ID of the space in which this page is under."),Object(o.b)("h3",{id:"appabbr-string"},Object(o.b)("inlineCode",{parentName:"h3"},"appAbbr?: string")),Object(o.b)("p",null,"If provided and payerId is not provided, the app icon will appear."),Object(o.b)("h3",{id:"iconcolor-string"},Object(o.b)("inlineCode",{parentName:"h3"},"iconColor?: string")),Object(o.b)("p",null,"Potential values: ",Object(o.b)("inlineCode",{parentName:"p"},'"black"'),", ",Object(o.b)("inlineCode",{parentName:"p"},'"blue"'),", ",Object(o.b)("inlineCode",{parentName:"p"},'"green"'),", ",Object(o.b)("inlineCode",{parentName:"p"},'"orange"'),", ",Object(o.b)("inlineCode",{parentName:"p"},'"red"'),". Only used if the app icon should appear. ",Object(o.b)("strong",{parentName:"p"},"Default:")," ",Object(o.b)("inlineCode",{parentName:"p"},'"black"'),"."),Object(o.b)("h3",{id:"branded-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"branded?: boolean")),Object(o.b)("p",null,'Triggers the app icon\'s "branded" styles. Only used if the app icon should appear.'),Object(o.b)("h3",{id:"payerid-string"},Object(o.b)("inlineCode",{parentName:"h3"},"payerId?: string")),Object(o.b)("p",null,"The ID of the payer the application is for. If provided, the payer logo appears and not the app icon."),Object(o.b)("h3",{id:"logo-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"logo?: boolean")),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"true")," will fetch the payer logo using the ",Object(o.b)("inlineCode",{parentName:"p"},"spaceId")," or ",Object(o.b)("inlineCode",{parentName:"p"},"payerId"),"."),Object(o.b)("h3",{id:"component-reactnode"},Object(o.b)("inlineCode",{parentName:"h3"},"component?: ReactNode")),Object(o.b)("p",null,"Allow rendering of an optional component in the top right of the header."),Object(o.b)("h3",{id:"feedback-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"feedback?: boolean")),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", the feedback loop button appears."),Object(o.b)("h3",{id:"feedbackprops-feedbackprops"},Object(o.b)("inlineCode",{parentName:"h3"},"feedbackProps?: FeedbackProps")),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/components/feedback/feedback/#props"}),"Feedback"),". Props to send to ",Object(o.b)("inlineCode",{parentName:"p"},"<Feedback />")," component"),Object(o.b)("h3",{id:"children-reactnode"},Object(o.b)("inlineCode",{parentName:"h3"},"children?: ReactNode")),Object(o.b)("p",null,"This value appears at the ",Object(o.b)("inlineCode",{parentName:"p"},"h1")," of the page. Overrides the ",Object(o.b)("inlineCode",{parentName:"p"},"appName"),' to allow for custom elements (such as a "beta" tag). ',Object(o.b)("strong",{parentName:"p"},"Default:")," ",Object(o.b)("inlineCode",{parentName:"p"},"${appName}"),"."),Object(o.b)("h3",{id:"crumbs-arrayobject--reactnode"},Object(o.b)("inlineCode",{parentName:"h3"},"crumbs?: Array<Object> | ReactNode")),Object(o.b)("p",null,"Array of Objects containing ",Object(o.b)("inlineCode",{parentName:"p"},"name")," (String) and ",Object(o.b)("inlineCode",{parentName:"p"},"url")," (String) properties. The ancestor pages which get passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"Breadcrumbs")," component. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/components/breadcrumbs/#crumbs-arrayobject"}),"Breadcrumbs")),Object(o.b)("h3",{id:"tag-reactcomponenttype"},Object(o.b)("inlineCode",{parentName:"h3"},"tag?: React.ComponentType")),Object(o.b)("p",null,"The tag to render the page header as. ",Object(o.b)("strong",{parentName:"p"},"Default:")," ",Object(o.b)("inlineCode",{parentName:"p"},"<h1>"),"."),Object(o.b)("h3",{id:"clientid-string"},Object(o.b)("inlineCode",{parentName:"h3"},"clientId?: string")),Object(o.b)("p",null,"Client ID to use in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/components/spaces/spaces/"}),"Spaces")," to fetch the payer's logo"),Object(o.b)("h3",{id:"iconsrc-string"},Object(o.b)("inlineCode",{parentName:"h3"},"iconSrc?: string")),Object(o.b)("p",null,"Image source for ",Object(o.b)("inlineCode",{parentName:"p"},"<AppIcon />")," to be used instead of ",Object(o.b)("inlineCode",{parentName:"p"},"appAbbr"),"."),Object(o.b)("h3",{id:"iconalt-string"},Object(o.b)("inlineCode",{parentName:"h3"},"iconAlt?: string")),Object(o.b)("p",null,"Required if ",Object(o.b)("inlineCode",{parentName:"p"},"iconSrc")," is used. Image alt property of ",Object(o.b)("inlineCode",{parentName:"p"},"<AppIcon />")),Object(o.b)("h3",{id:"homeurl-string"},Object(o.b)("inlineCode",{parentName:"h3"},"homeUrl?: string")),Object(o.b)("p",null,"Url for the Home route. ",Object(o.b)("strong",{parentName:"p"},"Default:")," ",Object(o.b)("inlineCode",{parentName:"p"},"public/apps/dashboard"),"."),Object(o.b)("h3",{id:"titleprops-reacthtmlattributeshtmlspanelement"},Object(o.b)("inlineCode",{parentName:"h3"},"titleProps?: React.HTMLAttributes<HTMLSpanElement>")),Object(o.b)("p",null,"Additional props passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"page-header-title"),"."),Object(o.b)("h3",{id:"renderrightcontent-reactcomponenttype-payerlogo-reactnode-feedback-reactnode-classname-string-"},Object(o.b)("inlineCode",{parentName:"h3"},"renderRightContent: React.ComponentType<{ payerLogo: ReactNode, feedback: ReactNode, className: string }>")),Object(o.b)("p",null,"Used to customize the contents of the right side of the page header where the feedback and payer logo get rendered. Accepts the rendered ",Object(o.b)("inlineCode",{parentName:"p"},"payerLogo")," and ",Object(o.b)("inlineCode",{parentName:"p"},"feedback")," as props"),Object(o.b)("h3",{id:"linktag-reactcomponenttypereacthtmlattributeshtmlanchorelement--string"},Object(o.b)("inlineCode",{parentName:"h3"},"linkTag?: React.ComponentType<React.HTMLAttributes<HTMLAnchorElement>> | string")),Object(o.b)("p",null,"Custom link tag for the links. ",Object(o.b)("strong",{parentName:"p"},"Default:")," ",Object(o.b)("inlineCode",{parentName:"p"},"<a>")))}l.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),b=l(n),m=a,h=b["".concat(c,".").concat(m)]||b[m]||s[m]||o;return n?r.a.createElement(h,i(i({ref:t},d),{},{components:n})):r.a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var d=2;d<o;d++)c[d]=n[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
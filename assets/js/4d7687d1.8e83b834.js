"use strict";(self.webpackChunkmher_club_documentation=self.webpackChunkmher_club_documentation||[]).push([[484],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),o=n(6010),i=n(2389),l=n(7392),u=n(7094),s=n(2466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var t,n;const{lazy:i,block:p,defaultValue:d,values:f,groupId:g,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,l.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:O}=(0,u.U)(),[w,E]=(0,r.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:P}=(0,s.o5)();if(null!=g){const e=T[g];null!=e&&e!==w&&h.some((t=>t.value===e))&&E(e)}const j=e=>{const t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==w&&(P(t),E(a),null!=g&&O(g,String(a)))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;n=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},b)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:N,onFocus:j,onClick:j},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},7329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),i=n(5162);const l={id:"main-configuration",title:"Main Configuration",description:"This page contains the documentation about the main configuration file."},u=void 0,s={unversionedId:"private-games/configuration/main-configuration",id:"private-games/configuration/main-configuration",title:"Main Configuration",description:"This page contains the documentation about the main configuration file.",source:"@site/docs/private-games/configuration/main-configuration.md",sourceDirName:"private-games/configuration",slug:"/private-games/configuration/main-configuration",permalink:"/private-games/configuration/main-configuration",draft:!1,editUrl:"https://github.com/MherZaqaryan/Mher-Club-Documentation/edit/master/docs/private-games/configuration/main-configuration.md",tags:[],version:"current",lastUpdatedBy:"MherZaqaryan",lastUpdatedAt:1656441244,formattedLastUpdatedAt:"6/28/2022",frontMatter:{id:"main-configuration",title:"Main Configuration",description:"This page contains the documentation about the main configuration file."},sidebar:"private_games",previous:{title:"Bungee Installation",permalink:"/private-games/addon-installation/bungee-installation"},next:{title:"Messages Configuration",permalink:"/private-games/configuration/messages-configuration"}},c={},m=[],p={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page contains the documentation about the main configuration file."),(0,r.kt)("p",null,"The main configuration file is location."),(0,r.kt)(o.Z,{groupId:"dependency-plugin",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"bedwars1058",label:"BedWars1058",mdxType:"TabItem"},"File location: ",(0,r.kt)("code",null,"plugins/BedWars1058/Addons/Private-Games/config.yml")),(0,r.kt)(i.Z,{value:"bedwarsproxy",label:"BedWarsProxy",mdxType:"TabItem"},"File location: ",(0,r.kt)("code",null,"plugins/BedWarsProxy/Addons/Private-Games/config.yml"))),(0,r.kt)("p",null,"From the config.yml file, you can edit:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Main modifier menu, sub-modifier menus, item's materials, slots, amount, etc."),(0,r.kt)("li",{parentName:"ul"},"Enable or disable statistics counting option for private arenas."),(0,r.kt)("li",{parentName:"ul"},"Enable or disable modifiers.")))}d.isMDXComponent=!0}}]);
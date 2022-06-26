"use strict";(self.webpackChunkmher_club_documentation=self.webpackChunkmher_club_documentation||[]).push([[972],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,v=m["".concat(d,".").concat(u)]||m[u]||s[u]||i;return r?n.createElement(v,o(o({ref:t},l),{},{components:r})):n.createElement(v,o({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={id:"maven-dependency",title:"Maven Dependency"},o=void 0,p={unversionedId:"private-games/developer-api/maven-dependency",id:"private-games/developer-api/maven-dependency",title:"Maven Dependency",description:"You must replace all the x.x.x with the current version, which you can find from here.",source:"@site/docs/private-games/developer-api/maven-dependency.md",sourceDirName:"private-games/developer-api",slug:"/private-games/developer-api/maven-dependency",permalink:"/private-games/developer-api/maven-dependency",draft:!1,editUrl:"https://github.com/MherZaqaryan/Mher-Club-Documentation/edit/master/docs/private-games/developer-api/maven-dependency.md",tags:[],version:"current",lastUpdatedBy:"MherZaqaryan",lastUpdatedAt:1656253964,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"maven-dependency",title:"Maven Dependency"},sidebar:"private_games",previous:{title:"Getting Started",permalink:"/private-games/developer-api/getting-started"},next:{title:"Feedback",permalink:"/private-games/feedback"}},d={},c=[{value:"1. Get the API .jar file from the Discord server.",id:"1-get-the-api-jar-file-from-the-discord-server",level:2},{value:"2. Creating your Maven project.",id:"2-creating-your-maven-project",level:2},{value:"3. Adding the Maven dependency.",id:"3-adding-the-maven-dependency",level:2}],l={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You ",(0,a.kt)("strong",{parentName:"p"},"must")," replace all the ",(0,a.kt)("inlineCode",{parentName:"p"},"x.x.x")," with the current version, which you can find from ",(0,a.kt)("a",{parentName:"p",href:"https://api.polymart.org/v1/getResourceInfoSimple/?resource_id=1620&key=version"},"here"),"."))),(0,a.kt)("p",null,"Currently, there is no repository for Private Games API dependency, you must manually upload the API ",(0,a.kt)("strong",{parentName:"p"},".jar")," file and add the dependency with ",(0,a.kt)("em",{parentName:"p"},"system")," scope."),(0,a.kt)("h2",{id:"1-get-the-api-jar-file-from-the-discord-server"},"1. Get the API .jar file from the Discord server."),(0,a.kt)("p",null,"Join my ",(0,a.kt)("a",{parentName:"p",href:"https://mher.club/discord"},"Discord")," server, create a ticket and ask for Private Games API ",(0,a.kt)("inlineCode",{parentName:"p"},".jar")," file."),(0,a.kt)("p",null,"The author (Mher) will give you the jar file which must has ",(0,a.kt)("inlineCode",{parentName:"p"},"private-games-api-x.x.x.jar")," name, but ",(0,a.kt)("inlineCode",{parentName:"p"},"x.x.x")," replaced with the ",(0,a.kt)("a",{parentName:"p",href:"https://api.polymart.org/v1/getResourceInfoSimple/?resource_id=1620&key=version"},"current version"),"."),(0,a.kt)("h2",{id:"2-creating-your-maven-project"},"2. Creating your Maven project."),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("a",{parentName:"p",href:"https://maven.apache.org/"},"Maven")," project and put the jar file into the {projectDirectory}/libraries directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"my-project\n\u251c\u2500\u2500 libraries\n\u2502   \u251c\u2500\u2500 private-games-api-x.x.x.jar\n")),(0,a.kt)("h2",{id:"3-adding-the-maven-dependency"},"3. Adding the Maven dependency."),(0,a.kt)("p",null,"Now open your project's ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," file and add the block below in dependencies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>club.mher</groupId>\n  <artifactId>private-games-api</artifactId>\n  <version>x.x.x</version>\n  <scope>system</scope>\n  <systemPath>${project.basedir}\\libraries\\private-games-api-x.x.x.jar</systemPath>\n</dependency>\n")))}s.isMDXComponent=!0}}]);
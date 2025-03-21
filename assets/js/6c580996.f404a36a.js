"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=i,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={id:"ios-appium-tests",title:"iOS Appium tests"},o=void 0,l={unversionedId:"ios-appium-tests",id:"ios-appium-tests",title:"iOS Appium tests",description:"Components needed:",source:"@site/docs/ios-appium-tests.md",sourceDirName:".",slug:"/ios-appium-tests",permalink:"/docs/docs/ios-appium-tests",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ios-appium-tests.md",tags:[],version:"current",frontMatter:{id:"ios-appium-tests",title:"iOS Appium tests"},sidebar:"tutorialSidebar",previous:{title:"Smartdust CLI Client",permalink:"/docs/docs/cli-client"},next:{title:"iOS CI-CD pipeline with Jenkins and Appium",permalink:"/docs/docs/ios-appium"}},p={},s=[],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Components needed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"WDA running on the tested device (thankfully we already have that in the Lab)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Port forwarding from the iOS device to the test running client (Linux machine)"))),(0,i.kt)("p",null,"This can be done using iproxy or go-ios tools: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://github.com/danielpaulus/go-ios")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Appium installed on test machine ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Appium project set up with appropriate Capabilities, for example:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const opts = {\n  path: \'/wd/hub\',\n  port: 4723,\n  capabilities: {\n    deviceName: "blabla",\n    automationName: "XCUITest",\n    platformName: "iOS",\n    // browserName: "Safari",\n    udid: "auto",\n        usePrebuiltWDA: true,\n    startIWDP: true,\n        webDriverAgentUrl: "http://localhost:7777"\n  }\n};\n')),(0,i.kt)("p",null,"Supposedly, some of the Capabilities need to be set but their value doesn\u2019t matter (lol)."),(0,i.kt)("p",null,"Pay attention to the \u201cusePrebuiltWDA\u201d field. If it isn\u2019t set, Appium will probably try to interact with XCode to get WDA installed on the tested device, which is unnecessary, not to mention futile if you\u2019re on Linux."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For the tests themselves, you can probably use a number of WebDriver implementations but you should keep in mind the limitations of WDA (not everything is implemented or behaves the same way as on Android).")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The tested app already installed on the tested devices. If you have a built and signed app file on a Mac computer, you might be able to copy it on a Linux machine and install it using ideviceinstaller.")),(0,i.kt)("p",null,"Further reading:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://daniel-paulus.medium.com/automate-ios-devices-the-almost-mac-free-way-973e8760f9df")," "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://docs.eggplantsoftware.com/mobilegateway/")))}m.isMDXComponent=!0}}]);
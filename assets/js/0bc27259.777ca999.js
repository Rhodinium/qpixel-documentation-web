"use strict";(self.webpackChunkqpixel_documentation_web=self.webpackChunkqpixel_documentation_web||[]).push([[9624],{3905:(e,o,n)=>{n.d(o,{Zo:()=>s,kt:()=>p});var t=n(7294);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function l(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?l(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function i(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),d=function(e){var o=t.useContext(c),n=o;return e&&(n="function"==typeof e?e(o):a(a({},o),e)),n},s=function(e){var o=d(e.components);return t.createElement(c.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},m=t.forwardRef((function(e,o){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(n),p=r,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||l;return n?t.createElement(f,a(a({ref:o},s),{},{components:n})):t.createElement(f,a({ref:o},s))}));function p(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var c in o)hasOwnProperty.call(o,c)&&(i[c]=o[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var d=2;d<l;d++)a[d]=n[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1063:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=n(7462),r=(n(7294),n(3905));const l={title:"MLO"},a=void 0,i={unversionedId:"paid-scripts/jl-motel/adding-new-motel/MLO",id:"paid-scripts/jl-motel/adding-new-motel/MLO",title:"MLO",description:"Config",source:"@site/docs/paid-scripts/jl-motel/adding-new-motel/MLO.md",sourceDirName:"paid-scripts/jl-motel/adding-new-motel",slug:"/paid-scripts/jl-motel/adding-new-motel/MLO",permalink:"/qpixel-documentation-web/docs/paid-scripts/jl-motel/adding-new-motel/MLO",draft:!1,tags:[],version:"current",frontMatter:{title:"MLO"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udee6 Adding New Motel",permalink:"/qpixel-documentation-web/docs/paid-scripts/jl-motel/adding-new-motel/"},next:{title:"Shell",permalink:"/qpixel-documentation-web/docs/paid-scripts/jl-motel/adding-new-motel/Shell"}},c={},d=[{value:"Config",id:"config",level:2},{value:"Doorlock",id:"doorlock",level:2},{value:"Example:",id:"example",level:2},{value:"QB Doorlock",id:"qb-doorlock",level:3},{value:"OX Doorlock",id:"ox-doorlock",level:3}],s={toc:d};function u(e){let{components:o,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},s,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- EXAMPLE FOR MLO MOTEL\n\nConfig.Motel[\'yourmotel\'] = {\n    renew = \'1w\',\n    owner = \'yourjob\', -- Job name or citizenid (qb) or player identifier (esx)\n    label = "Your Shiny motel",\n    mlo = true,\n    rent = {\n        coords = vector4(43.59, -280.55, 58.12, 10.0)\n    },\n    -- Use target\n    Target = {\n        outfit = false,\n        stash = true,\n        logout = true\n    },\n    price = 3000,\n    motel = {\n        ["yourshiny-motel:1"] = {\n            enter = vec3(43.59, -280.55, 58.12), -- door coordinates, take it from ox_doorlock db or qb-doorlock\n            -- don\'t touch this\n            locked = true,\n            owned = false,\n            --\n            -- CREATED WITH OX LIB ZONES\n            stash = {\n                name = "yourshiny-motel:stash:1",\n                coords = vec3(374.6, -1792.9, 29.0),\n                size = vec3(1.5, 1.4, 1.0),\n                rotation = 35.0,\n            },\n            outfit = {\n                name = "yourshiny-motel:outfit:1",\n                coords = vec3(373.0, -1797.0, 29.0),\n                size = vec3(1, 1, 2.5),\n                rotation = 39.0,\n            },\n            logout = {\n                name = "yourshiny-motel:1:logout",\n                coords = vec3(371.4, -1798.4, 29.0),\n                size = vec3(0.4, 0.35, 1.0),\n                rotation = 42.0,\n            }\n        },\n        -- add more motel here\n    }\n}\n')),(0,r.kt)("h2",{id:"doorlock"},"Doorlock"),(0,r.kt)("p",null,"Make sure your doorlock config name is same as your motel room name\nif you named your room as ",(0,r.kt)("inlineCode",{parentName:"p"},"yourshiny-motel:1")," your door name must be ",(0,r.kt)("inlineCode",{parentName:"p"},"yourshiny-motel:1")," too"),(0,r.kt)("h2",{id:"example"},"Example:"),(0,r.kt)("h3",{id:"qb-doorlock"},"QB Doorlock"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"Config.DoorList['yourshiny-motel:1'] = {\n    distance = 2,\n    locked = true,\n    objCoords = vec3(306.848938, -213.674500, 54.371540),\n    objName = -1156992775,\n    objYaw = 68.909614562988,\n    fixText = false,\n    pickable = true,\n    audioRemote = false,\n    doorType = 'door',\n    doorRate = 1.0,\n    --audioLock = {['file'] = 'metal-locker.ogg', ['volume'] = 0.6},\n    --audioUnlock = {['file'] = 'metallic-creak.ogg', ['volume'] = 0.7},\n    --autoLock = 1000,\n}\n")),(0,r.kt)("h3",{id:"ox-doorlock"},"OX Doorlock"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO `ox_doorlock` (`id`, `name`, `data`) VALUES\n    (1, \'yourshiny-motel:1\', \'{"state":1,"coords":{"x":372.92047119140627,"y":-1791.2442626953126,"z":29.38381576538086},"doors":false,"maxDistance":2,"model":-1753326354,"heading":320}\'),\n')))}u.isMDXComponent=!0}}]);
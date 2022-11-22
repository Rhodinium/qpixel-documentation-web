"use strict";(self.webpackChunkqpixel_documentation_web=self.webpackChunkqpixel_documentation_web||[]).push([[2334],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var l=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,o=function(e,n){if(null==e)return{};var t,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=l.createContext({}),c=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return l.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?l.createElement(f,a(a({ref:n},p),{},{components:t})):l.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<r;c++)a[c]=t[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},330:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var l=t(7462),o=(t(7294),t(3905));const r={title:"Shell"},a=void 0,i={unversionedId:"paid-scripts/jl-motel/adding-new-motel/Shell",id:"paid-scripts/jl-motel/adding-new-motel/Shell",title:"Shell",description:"Config",source:"@site/docs/paid-scripts/jl-motel/adding-new-motel/Shell.md",sourceDirName:"paid-scripts/jl-motel/adding-new-motel",slug:"/paid-scripts/jl-motel/adding-new-motel/Shell",permalink:"/qpixel-documentation-web/docs/paid-scripts/jl-motel/adding-new-motel/Shell",draft:!1,tags:[],version:"current",frontMatter:{title:"Shell"},sidebar:"tutorialSidebar",previous:{title:"MLO",permalink:"/qpixel-documentation-web/docs/paid-scripts/jl-motel/adding-new-motel/MLO"},next:{title:"\ud83d\ude36\u200d\ud83c\udf2b\ufe0f Customize",permalink:"/qpixel-documentation-web/docs/paid-scripts/jl-motel/customize"}},s={},c=[{value:"Config",id:"config",level:2},{value:"Add new shell",id:"add-new-shell",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,l.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"owner: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - You can put your identifier here or job name"),(0,o.kt)("li",{parentName:"ul"},"label: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"rent: ",(0,o.kt)("inlineCode",{parentName:"li"},"table")," - Where the guy stand"),(0,o.kt)("li",{parentName:"ul"},"price: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," - Your motel price, you can also put this inside your motel room to make it have different price"),(0,o.kt)("li",{parentName:"ul"},"shell: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," - Shell number, inside ",(0,o.kt)("inlineCode",{parentName:"li"},"spawnshell.lua/SpawnShell function")),(0,o.kt)("li",{parentName:"ul"},"motel: ",(0,o.kt)("inlineCode",{parentName:"li"},"table"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"enter : ",(0,o.kt)("inlineCode",{parentName:"li"},"vector4")," enter coords"),(0,o.kt)("li",{parentName:"ul"},"label : ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," room label"),(0,o.kt)("li",{parentName:"ul"},"locked : ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," always set this to true"),(0,o.kt)("li",{parentName:"ul"},"owned : ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," always set this to false"),(0,o.kt)("li",{parentName:"ul"},"price? : ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," ",(0,o.kt)("inlineCode",{parentName:"li"},"optional"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'Config.Motel["newmotel"] = {\n    owner = "newmotel",\n    label = "New Motel",\n    rent = {\n        coords = vector4(570.02, -1746.43, 29.22, 247.45)\n    },\n    price = 1200,\n    shell = 3,\n    motel = {\n        [\'newmotel:1\'] = {\n            enter = vector4(566.26, -1777.95, 29.35, 343.83),\n            label = "New Motel 1",\n            locked = true,\n            owned = false,\n            price = 500\n        },\n        -- you can add more room below here with the same format as above\n    }\n}\n\n')),(0,o.kt)("h2",{id:"add-new-shell"},"Add new shell"),(0,o.kt)("p",null,"Create new function inside client/spawnshell.lua"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/loaf-scripts/loaf_offsetfinder"},"loaf offset finder")," to get your shell offset")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'function SpawnNewShell(coords)\n    local POIOffsets = {\n        -- you get all the coords from loaf offset finder.\n        exit = json.decode(\'{"x": -0.43, "y": -2.51, "z": 1.0, "h": 271.29}\'),\n        stash = json.decode(\'{"x": 1.427551, "y": -3.175781, "z": -0.773796, "h": 184.584869}\'),\n        logout = json.decode(\'{"x": -1.108032, "y": 1.074829, "z":  -0.340126, "h": 95.320656}\'),\n        outfit = json.decode(\'{"x": 1.332947, "y": 2.519531, "z": -1.546425, "h": 359.401703}\')\n    }\n    local ZoneData = {\n        --[[\n            vec3(x, y, z) is same as (width, height, minZ + maxZ)\n        ]]\n        exit = {\n            size = vec3(1.5, 1.5, 2.0),\n        },\n        stash = {\n            size = vec3(2.0, 1.5, 1)\n        },\n        logout = {\n            size = vec3(1.0, 1.0, 1.0)\n        },\n        outfit = {\n            size = vec3(1.0, 1.0, 2.0),\n        }\n    }\n    DoScreenFadeOut(500)\n    while not IsScreenFadedOut() do\n        Wait(10)\n    end\n    lib.requestModel(joaat(\'your_shell_name\')) -- example: shell_trailer\n    local model = CreateObject(joaat(\'your_shell_name\'), coords.x, coords.y, coords.z, false, false, false)\n    FreezeEntityPosition(model, true)\n    Teleport(coords.x + POIOffsets.exit.x, coords.y + POIOffsets.exit.y, coords.z + POIOffsets.exit.z, POIOffsets.exit.h)\n    return {\n        model, POIOffsets, ZoneData\n    }\nend\n')),(0,o.kt)("p",null,"After that go to SpawnShell function and add your new shell spawn function there"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"function SpawnShell(coords, shell)\n    if shell == 1 then\n        return SpawnDefaultShell(coords)\n    elseif shell == 2 then\n        return SpawnModernMotel(coords)\n    elseif shell == 3 then\n    -- your new shell here\n        return SpawnNewShell(coords)\n    else\n        return SpawnDefaultShell(coords)\n    end\nend\n")))}d.isMDXComponent=!0}}]);
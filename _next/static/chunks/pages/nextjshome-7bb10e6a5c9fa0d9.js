(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34],{9361:function(e,t){"use strict";t.Z=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},2963:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nextjshome",function(){return i(4256)}])},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9361).Z,a=i(4941).Z,o=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i,s=e.src,c=e.sizes,g=e.unoptimized,p=void 0!==g&&g,x=e.priority,S=void 0!==x&&x,N=e.loading,k=e.lazyRoot,E=e.lazyBoundary,I=e.className,L=e.quality,R=e.width,O=e.height,q=e.style,C=e.objectFit,P=e.objectPosition,H=e.onLoadingComplete,D=e.placeholder,W=void 0===D?"empty":D,B=e.blurDataURL,M=l(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),V=d.useContext(h.ImageConfigContext),Z=d.useMemo(function(){var e=y||V||m.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return r({},e,{allSizes:t,deviceSizes:i})},[V]),T=c?"responsive":"intrinsic";"layout"in M&&(M.layout&&(T=M.layout),delete M.layout);var U=z;if("loader"in M){if(M.loader){var F=M.loader;U=function(e){e.config;var t=l(e,["config"]);return F(t)}}delete M.loader}var G="";if(function(e){var t;return"object"==typeof e&&(w(e)||void 0!==e.src)}(s)){var Q=w(s)?s.default:s;if(!Q.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(B=B||Q.blurDataURL,G=Q.src,(!T||"fill"!==T)&&(O=O||Q.height,R=R||Q.width,!Q.height||!Q.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}s="string"==typeof s?s:G;var J=!S&&("lazy"===N||void 0===N);(s.startsWith("data:")||s.startsWith("blob:"))&&(p=!0,J=!1),b.has(s)&&(J=!1),Z.unoptimized&&(p=!0);var X=a(d.useState(!1),2),K=X[0],Y=X[1],$=a(f.useIntersection({rootRef:void 0===k?null:k,rootMargin:E||"200px",disabled:!J}),3),ee=$[0],et=$[1],ei=$[2],en=!J||et,ea={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},eo={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},er=!1,es=j(R),ec=j(O),el=j(L),ed=Object.assign({},q,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:P}),eu="blur"!==W||K?{}:{backgroundSize:C||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(B,'")')};if("fill"===T)ea.display="block",ea.position="absolute",ea.top=0,ea.left=0,ea.bottom=0,ea.right=0;else if(void 0!==es&&void 0!==ec){var em=ec/es,ef=isNaN(em)?"100%":"".concat(100*em,"%");"responsive"===T?(ea.display="block",ea.position="relative",er=!0,eo.paddingTop=ef):"intrinsic"===T?(ea.display="inline-block",ea.position="relative",ea.maxWidth="100%",er=!0,eo.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(es,"%27%20height=%27").concat(ec,"%27/%3e")):"fixed"===T&&(ea.display="inline-block",ea.position="relative",ea.width=es,ea.height=ec)}var eh={src:v,srcSet:void 0,sizes:void 0};en&&(eh=_({config:Z,src:s,unoptimized:p,layout:T,width:es,quality:el,sizes:c,loader:U}));var eg=s,ep="imagesizes";ep="imageSizes";var ey=(n(i={},"imageSrcSet",eh.srcSet),n(i,ep,eh.sizes),n(i,"crossOrigin",M.crossOrigin),i),eb=d.default.useLayoutEffect,ev=d.useRef(H),ex=d.useRef(s);d.useEffect(function(){ev.current=H},[H]),eb(function(){ex.current!==s&&(ei(),ex.current=s)},[ei,s]);var ew=r({isLazy:J,imgAttributes:eh,heightInt:ec,widthInt:es,qualityInt:el,layout:T,className:I,imgStyle:ed,blurStyle:eu,loading:N,config:Z,unoptimized:p,placeholder:W,loader:U,srcString:eg,onLoadingCompleteRef:ev,setBlurComplete:Y,setIntersection:ee,isVisible:en,noscriptSizes:c},M);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:ea},er?d.default.createElement("span",{style:eo},t?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,d.default.createElement(A,Object.assign({},ew))),S?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+eh.src+eh.srcSet+eh.sizes,rel:"preload",as:"image",href:eh.srcSet?void 0:eh.src},ey))):null)};var r=i(6495).Z,s=i(2648).Z,c=i(1598).Z,l=i(7273).Z,d=c(i(7294)),u=s(i(5443)),m=i(9309),f=i(7190),h=i(9977);i(3794);var g=i(2392);function p(e){return"/"===e[0]?e.slice(1):e}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1},b=new Set,v="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",x=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,a=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(a||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,a=e.quality,o=new URL("".concat(t.path).concat(p(i))),r=o.searchParams;return r.set("auto",r.getAll("auto").join(",")||"format"),r.set("fit",r.get("fit")||"max"),r.set("w",r.get("w")||n.toString()),a&&r.set("q",a.toString()),o.href}],["cloudinary",function(e){var t,i=e.config,n=e.src,a=e.width,o=["f_auto","c_limit","w_"+a,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(i.path).concat(o).concat(p(n))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(p(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function w(e){return void 0!==e.default}function _(e){var t=e.config,i=e.src,n=e.unoptimized,a=e.layout,r=e.width,s=e.quality,c=e.sizes,l=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,n){var a=e.deviceSizes,r=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var s=/(^|\s)(1?\d?\d)vw/g,c=[];l=s.exec(n);l)c.push(parseInt(l[2]));if(c.length){var l,d,u=.01*(d=Math).min.apply(d,o(c));return{widths:r.filter(function(e){return e>=a[0]*u}),kind:"w"}}return{widths:r,kind:"w"}}return"number"!=typeof t||"fill"===i||"responsive"===i?{widths:a,kind:"w"}:{widths:o(new Set([t,2*t].map(function(e){return r.find(function(t){return t>=e})||r[r.length-1]}))),kind:"x"}}(t,r,a,c),u=d.widths,m=d.kind,f=u.length-1;return{sizes:c||"w"!==m?c:"100vw",srcSet:u.map(function(e,n){return"".concat(l({config:t,src:i,quality:s,width:e})," ").concat("w"===m?e:n+1).concat(m)}).join(", "),src:l({config:t,src:i,quality:s,width:u[f]})}}function j(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function z(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=x.get(i);if(n)return n(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(m.VALID_LOADERS.join(", "),". Received: ").concat(i))}function S(e,t,i,n,a,o){e&&e.src!==v&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(b.add(t),"blur"===n&&o(!0),null==a?void 0:a.current)){var i=e.naturalWidth,r=e.naturalHeight;a.current({naturalWidth:i,naturalHeight:r})}}))}var A=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,a=e.layout,o=e.className,s=e.imgStyle,c=e.blurStyle,u=e.isLazy,m=e.placeholder,f=e.loading,h=e.srcString,g=e.config,p=e.unoptimized,y=e.loader,b=e.onLoadingCompleteRef,v=e.setBlurComplete,x=e.setIntersection,w=e.onLoad,j=e.onError,z=(e.isVisible,e.noscriptSizes),A=l(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return f=u?"lazy":f,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},A,t,{decoding:"async","data-nimg":a,className:o,style:r({},s,c),ref:d.useCallback(function(e){x(e),(null==e?void 0:e.complete)&&S(e,h,a,m,b,v)},[x,h,a,m,b,v,]),onLoad:function(e){S(e.currentTarget,h,a,m,b,v),w&&w(e)},onError:function(e){"blur"===m&&v(!0),j&&j(e)}})),(u||"blur"===m)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},A,_({config:g,src:h,unoptimized:p,layout:a,width:i,quality:n,sizes:z,loader:y}),{decoding:"async","data-nimg":a,style:s,className:o,loading:f}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4256:function(e,t,i){"use strict";i.r(t);var n=i(5893),a=i(5675),o=i.n(a),r=i(214),s=i.n(r),c=function(){return(0,n.jsxs)("div",{className:s().container,children:[(0,n.jsxs)("main",{className:s().main,children:[(0,n.jsxs)("h1",{className:s().title,children:["Welcome to ",(0,n.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,n.jsxs)("p",{className:s().description,children:["Get started by editing"," ",(0,n.jsx)("code",{className:s().code,children:"pages/index.tsx"})]}),(0,n.jsxs)("div",{className:s().grid,children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs",className:s().card,children:[(0,n.jsx)("h2",{children:"Documentation →"}),(0,n.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn",className:s().card,children:[(0,n.jsx)("h2",{children:"Learn →"}),(0,n.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,n.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:s().card,children:[(0,n.jsx)("h2",{children:"Examples →"}),(0,n.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:s().card,children:[(0,n.jsx)("h2",{children:"Deploy →"}),(0,n.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,n.jsx)("footer",{className:s().footer,children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,n.jsx)("span",{className:s().logo,children:(0,n.jsx)(o(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})};t.default=c},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},5675:function(e,t,i){e.exports=i(8045)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2963)}),_N_E=e.O()}]);
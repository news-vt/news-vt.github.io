(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33],{9191:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo/bibtex",function(){return n(4622)}])},4622:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return l},default:function(){return r}});var o=n(2222),c=n(5893),a=n(4644),i=n.n(a),l=!0;function r(t){var e=t.bibtex,n=new(i())(e),a=function(t){var e=new(i())(n.data[t]),o=e.format("biblatex",{type:"object"})[0],c=e.format("biblatex",{type:"text"}),a=document.createElement("a"),l=new Blob([c],{type:"text/plain"});a.href=URL.createObjectURL(l),a.download="".concat(o.label,".bib"),document.body.appendChild(a),a.click()},l=function(t,e){var n=new(i())(t),o=n.format("biblatex",{type:"object"})[0];console.log("[".concat(e,"] JSON: ").concat(JSON.stringify(o)));try{console.log("[".concat(e,"] NC: ").concat(JSON.stringify(n)));var l=n.format("bibliography",{type:"text",lang:"en-US",template:"apa",format:"html"});console.log("[".concat(e,"] HTML: ").concat(JSON.stringify(l)))}catch(r){console.log(r)}return(0,c.jsx)("div",{href:o.properties.url,className:"list-group-item list-group-item-action flex-column align-items-start",children:(0,c.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[(0,c.jsx)("h3",{className:"m-3",children:e}),(0,c.jsx)("a",{className:"p-3",href:"#",onClick:function(){return a(e)},children:"BibLaTeX"})]})},e)};return console.log("typeof bib: ".concat(void 0===n?"undefined":(0,o.Z)(n))),console.log("bib.data: ".concat(JSON.stringify(n.data))),(0,c.jsxs)("div",{className:"m-5",children:[(0,c.jsx)("h1",{children:"BibTex Demo"}),(0,c.jsx)("div",{className:"list-group",children:void 0!==n?n.data.map(l):null})]})}}},function(t){t.O(0,[906,596,764,714,774,888,179],function(){return t(t.s=9191)}),_N_E=t.O()}]);
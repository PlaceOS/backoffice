function h(e,t,n,o=`debug`,r=!1,s=`BACKOFFICE`){if(window.debug||r){let c=[`color: #E91E63`,`color: #ffb300`,`color: default`];n?console[o](`%c[${s}]%c[${e}] %c${t}`,...c,n):console[o](`%c[${s}]%c[${e}] %c${t}`,...c)}}function a(e,t){let n=e[0];return t&&n in t?e.length>1?a(e.slice(1),t[n]||{}):t[n]:null}function m(e,t,n){let o=r=>Math.max(0,Math.min(r,e.length-1));t=o(t),n=o(n),t!==n&&e.splice(n,0,...e.splice(t,1))}function x(e,t=``){return e.filter((n,o,r)=>r.indexOf(t?r.find(s=>s[t]===n[t]):r.find(s=>s===n))===o)}var f={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`};function w(e){return`${e??``}`.replace(/[&<>"']/g,t=>f[t])}function b(e,t=0){return Math.floor(Math.random()*(e-t))+t}function y(e){let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`absolute`,t.style.left=`-9999px`,document.body.appendChild(t);let n=document.getSelection().rangeCount>0?document.getSelection().getRangeAt(0):!1;t.select(),document.execCommand(`copy`),document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n))}function S(e){let t=e%10;return e>10&&e<20?`${e}th`:t===1?`${e}st`:t===2?`${e}nd`:t===3?`${e}rd`:`${e}th`}function T(e,t=`,`){let[n,...o]=d(e,t);return n?o.map(r=>{let s={};return n.forEach((c,l)=>{let i=r[l]??``;try{s[c]=i!==``?JSON.parse(i):``}catch{let u=`${i}`.toLowerCase();s[c]=u===`true`?!0:u===`false`?!1:i}}),s}):[]}function d(e,t){let n=[],o=[],r=``,s=!1,c=()=>{o.push(r),(o.length>1||o[0].trim()!==``)&&n.push(o),o=[],r=``};for(let l=0;l<e.length;l++){let i=e[l];s?i!==`"`?r+=i:e[l+1]===`"`?(r+=`"`,l++):s=!1:i===`"`?s=!0:t&&e.startsWith(t,l)?(o.push(r),r=``,l+=t.length-1):i===`
`?c():i===`\r`&&e[l+1]===`
`?(c(),l++):r+=i}return c(),n}function C(e,t=[],n=`,`){if(!e.length)return``;let o=t.length?t:[...new Set(e.flatMap(c=>Object.keys(c)))];return[o.join(n),...e.map(c=>o.map(l=>{let i=c[l];i&&typeof i==`object`&&(i=JSON.stringify(i));let u=i==null?``:String(i);return u.includes(n)||u.includes(`"`)||u.includes(`
`)||u.includes(`\r`)?`"${u.replace(/"/g,`""`)}"`:u}).join(n))].join(`
`)}function M(e){return e?e instanceof MouseEvent?{x:e.clientX,y:e.clientY}:e.touches&&e.touches.length>0?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:-1,y:-1}:{x:-1,y:-1}}function k(e,t){let n=document.createElement(`a`);n.setAttribute(`href`,`data:text/plain;charset=utf-8,`+encodeURIComponent(t)),n.setAttribute(`download`,e),n.style.display=`none`,document.body.appendChild(n),n.click(),document.body.removeChild(n)}var $=(e,t)=>`
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Desktop (please complete the following information):**
 - OS: [e.g. iOS]
 - Browser [e.g. chrome, safari]
 - Version [e.g. 22]

**Smartphone (please complete the following information):**
 - Device: [e.g. iPhone6]
 - OS: [e.g. iOS8.1]
 - Browser [e.g. stock browser, safari]
 - Version [e.g. 22]

**Additional context**

**Hash:** ${e}
**Built:** ${t}
`;function R(e,t){for(let n of Object.keys(e))t.includes(e[n])&&delete e[n];return e}function E(e,t=!1){let n=t?1e3:1024;if(e<n)return e+(t?` iB`:` B`);let o=Math.floor(Math.log(e)/Math.log(n)),r=(t?`kMGTPE`:`KMGTPE`).charAt(o-1)+(t?`iB`:`B`);return(e/Math.pow(n,o)).toFixed(2)+` `+r}function p(e){if(typeof e!=`string`)return e??{};try{return JSON.parse(e)}catch{return e}}function A(e){let t=typeof e==`string`?p(e):e;return t&&typeof t==`object`&&!Array.isArray(t)?t:{}}export{y as _,M as a,T as c,h as d,k as f,x as g,w as h,E as i,a as l,p as m,A as n,R as o,m as p,C as r,S as s,$ as t,b as u};
//# debugId=34d43032-dcf4-5533-acd6-a92563d7278a

import{r as R,R as Tt}from"./react-bc4662ae.js";import{r as Ht}from"./react-dom-e043f906.js";const V=Math.min,D=Math.max,rt=Math.round,nt=Math.floor,Y=t=>({x:t,y:t}),_t={left:"right",right:"left",bottom:"top",top:"bottom"},zt={start:"end",end:"start"};function ut(t,e,n){return D(t,V(e,n))}function H(t,e){return typeof t=="function"?t(e):t}function I(t){return t.split("-")[0]}function Z(t){return t.split("-")[1]}function mt(t){return t==="x"?"y":"x"}function gt(t){return t==="y"?"height":"width"}function U(t){return["top","bottom"].includes(I(t))?"y":"x"}function ht(t){return mt(U(t))}function jt(t,e,n){n===void 0&&(n=!1);const o=Z(t),i=ht(t),r=gt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=st(s)),[s,st(s)]}function Yt(t){const e=st(t);return[dt(t),e,dt(e)]}function dt(t){return t.replace(/start|end/g,e=>zt[e])}function Xt(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function qt(t,e,n,o){const i=Z(t);let r=Xt(I(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(dt)))),r}function st(t){return t.replace(/left|right|bottom|top/g,e=>_t[e])}function Ut(t){return{top:0,right:0,bottom:0,left:0,...t}}function pt(t){return typeof t!="number"?Ut(t):{top:t,right:t,bottom:t,left:t}}function J(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function bt(t,e,n){let{reference:o,floating:i}=t;const r=U(e),s=ht(e),l=gt(s),c=I(e),f=r==="y",d=o.x+o.width/2-i.width/2,a=o.y+o.height/2-i.height/2,g=o[l]/2-i[l]/2;let u;switch(c){case"top":u={x:d,y:o.y-i.height};break;case"bottom":u={x:d,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:a};break;case"left":u={x:o.x-i.width,y:a};break;default:u={x:o.x,y:o.y}}switch(Z(e)){case"start":u[s]-=g*(n&&f?-1:1);break;case"end":u[s]+=g*(n&&f?-1:1);break}return u}const Kt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:a}=bt(f,o,c),g=o,u={},h=0;for(let p=0;p<l.length;p++){const{name:x,fn:w}=l[p],{x:v,y:b,data:m,reset:y}=await w({x:d,y:a,initialPlacement:o,placement:g,strategy:i,middlewareData:u,rects:f,platform:s,elements:{reference:t,floating:e}});d=v??d,a=b??a,u={...u,[x]:{...u[x],...m}},y&&h<=50&&(h++,typeof y=="object"&&(y.placement&&(g=y.placement),y.rects&&(f=y.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):y.rects),{x:d,y:a}=bt(f,g,c)),p=-1)}return{x:d,y:a,placement:g,strategy:i,middlewareData:u}};async function xt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:c}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:a="floating",altBoundary:g=!1,padding:u=0}=H(e,t),h=pt(u),x=l[g?a==="floating"?"reference":"floating":a],w=J(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(x)))==null||n?x:x.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:f,rootBoundary:d,strategy:c})),v=a==="floating"?{...s.floating,x:o,y:i}:s.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),m=await(r.isElement==null?void 0:r.isElement(b))?await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1}:{x:1,y:1},y=J(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:b,strategy:c}):v);return{top:(w.top-y.top+h.top)/m.y,bottom:(y.bottom-w.bottom+h.bottom)/m.y,left:(w.left-y.left+h.left)/m.x,right:(y.right-w.right+h.right)/m.x}}const Gt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:l,middlewareData:c}=e,{element:f,padding:d=0}=H(t,e)||{};if(f==null)return{};const a=pt(d),g={x:n,y:o},u=ht(i),h=gt(u),p=await s.getDimensions(f),x=u==="y",w=x?"top":"left",v=x?"bottom":"right",b=x?"clientHeight":"clientWidth",m=r.reference[h]+r.reference[u]-g[u]-r.floating[h],y=g[u]-r.reference[u],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(f));let E=A?A[b]:0;(!E||!await(s.isElement==null?void 0:s.isElement(A)))&&(E=l.floating[b]||r.floating[h]);const M=m/2-y/2,W=E/2-p[h]/2-1,L=V(a[w],W),k=V(a[v],W),S=L,F=E-p[h]-k,T=E/2-p[h]/2+M,O=ut(S,T,F),P=!c.arrow&&Z(i)!=null&&T!==O&&r.reference[h]/2-(T<S?L:k)-p[h]/2<0,C=P?T<S?T-S:T-F:0;return{[u]:g[u]+C,data:{[u]:O,centerOffset:T-O-C,...P&&{alignmentOffset:C}},reset:P}}}),Jt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:c,elements:f}=e,{mainAxis:d=!0,crossAxis:a=!0,fallbackPlacements:g,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:p=!0,...x}=H(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const w=I(i),v=I(l)===l,b=await(c.isRTL==null?void 0:c.isRTL(f.floating)),m=g||(v||!p?[st(l)]:Yt(l));!g&&h!=="none"&&m.push(...qt(l,p,h,b));const y=[l,...m],A=await xt(e,x),E=[];let M=((o=r.flip)==null?void 0:o.overflows)||[];if(d&&E.push(A[w]),a){const S=jt(i,s,b);E.push(A[S[0]],A[S[1]])}if(M=[...M,{placement:i,overflows:E}],!E.every(S=>S<=0)){var W,L;const S=(((W=r.flip)==null?void 0:W.index)||0)+1,F=y[S];if(F)return{data:{index:S,overflows:M},reset:{placement:F}};let T=(L=M.filter(O=>O.overflows[0]<=0).sort((O,P)=>O.overflows[1]-P.overflows[1])[0])==null?void 0:L.placement;if(!T)switch(u){case"bestFit":{var k;const O=(k=M.map(P=>[P.placement,P.overflows.filter(C=>C>0).reduce((C,j)=>C+j,0)]).sort((P,C)=>P[1]-C[1])[0])==null?void 0:k[0];O&&(T=O);break}case"initialPlacement":T=l;break}if(i!==T)return{reset:{placement:T}}}return{}}}};function Mt(t){const e=V(...t.map(r=>r.left)),n=V(...t.map(r=>r.top)),o=D(...t.map(r=>r.right)),i=D(...t.map(r=>r.bottom));return{x:e,y:n,width:o-e,height:i-n}}function Qt(t){const e=t.slice().sort((i,r)=>i.y-r.y),n=[];let o=null;for(let i=0;i<e.length;i++){const r=e[i];!o||r.y-o.y>o.height/2?n.push([r]):n[n.length-1].push(r),o=r}return n.map(i=>J(Mt(i)))}const Zt=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:o,rects:i,platform:r,strategy:s}=e,{padding:l=2,x:c,y:f}=H(t,e),d=Array.from(await(r.getClientRects==null?void 0:r.getClientRects(o.reference))||[]),a=Qt(d),g=J(Mt(d)),u=pt(l);function h(){if(a.length===2&&a[0].left>a[1].right&&c!=null&&f!=null)return a.find(x=>c>x.left-u.left&&c<x.right+u.right&&f>x.top-u.top&&f<x.bottom+u.bottom)||g;if(a.length>=2){if(U(n)==="y"){const L=a[0],k=a[a.length-1],S=I(n)==="top",F=L.top,T=k.bottom,O=S?L.left:k.left,P=S?L.right:k.right,C=P-O,j=T-F;return{top:F,bottom:T,left:O,right:P,width:C,height:j,x:O,y:F}}const x=I(n)==="left",w=D(...a.map(L=>L.right)),v=V(...a.map(L=>L.left)),b=a.filter(L=>x?L.left===v:L.right===w),m=b[0].top,y=b[b.length-1].bottom,A=v,E=w,M=E-A,W=y-m;return{top:m,bottom:y,left:A,right:E,width:M,height:W,x:A,y:m}}return g}const p=await r.getElementRects({reference:{getBoundingClientRect:h},floating:o.floating,strategy:s});return i.reference.x!==p.reference.x||i.reference.y!==p.reference.y||i.reference.width!==p.reference.width||i.reference.height!==p.reference.height?{reset:{rects:p}}:{}}}};async function te(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=I(n),l=Z(n),c=U(n)==="y",f=["left","top"].includes(s)?-1:1,d=r&&c?-1:1,a=H(e,t);let{mainAxis:g,crossAxis:u,alignmentAxis:h}=typeof a=="number"?{mainAxis:a,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...a};return l&&typeof h=="number"&&(u=l==="end"?h*-1:h),c?{x:u*d,y:g*f}:{x:g*f,y:u*d}}const Ve=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:l}=e,c=await te(e,t);return s===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:r+c.y,data:{...c,placement:s}}}}},ee=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:x=>{let{x:w,y:v}=x;return{x:w,y:v}}},...c}=H(t,e),f={x:n,y:o},d=await xt(e,c),a=U(I(i)),g=mt(a);let u=f[g],h=f[a];if(r){const x=g==="y"?"top":"left",w=g==="y"?"bottom":"right",v=u+d[x],b=u-d[w];u=ut(v,u,b)}if(s){const x=a==="y"?"top":"left",w=a==="y"?"bottom":"right",v=h+d[x],b=h-d[w];h=ut(v,h,b)}const p=l.fn({...e,[g]:u,[a]:h});return{...p,data:{x:p.x-n,y:p.y-o}}}}},ne=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:i,rects:r,middlewareData:s}=e,{offset:l=0,mainAxis:c=!0,crossAxis:f=!0}=H(t,e),d={x:n,y:o},a=U(i),g=mt(a);let u=d[g],h=d[a];const p=H(l,e),x=typeof p=="number"?{mainAxis:p,crossAxis:0}:{mainAxis:0,crossAxis:0,...p};if(c){const b=g==="y"?"height":"width",m=r.reference[g]-r.floating[b]+x.mainAxis,y=r.reference[g]+r.reference[b]-x.mainAxis;u<m?u=m:u>y&&(u=y)}if(f){var w,v;const b=g==="y"?"width":"height",m=["top","left"].includes(I(i)),y=r.reference[a]-r.floating[b]+(m&&((w=s.offset)==null?void 0:w[a])||0)+(m?0:x.crossAxis),A=r.reference[a]+r.reference[b]+(m?0:((v=s.offset)==null?void 0:v[a])||0)-(m?x.crossAxis:0);h<y?h=y:h>A&&(h=A)}return{[g]:u,[a]:h}}}},oe=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:i,elements:r}=e,{apply:s=()=>{},...l}=H(t,e),c=await xt(e,l),f=I(n),d=Z(n),a=U(n)==="y",{width:g,height:u}=o.floating;let h,p;f==="top"||f==="bottom"?(h=f,p=d===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(p=f,h=d==="end"?"top":"bottom");const x=u-c[h],w=g-c[p],v=!e.middlewareData.shift;let b=x,m=w;if(a){const A=g-c.left-c.right;m=d||v?V(w,A):A}else{const A=u-c.top-c.bottom;b=d||v?V(x,A):A}if(v&&!d){const A=D(c.left,0),E=D(c.right,0),M=D(c.top,0),W=D(c.bottom,0);a?m=g-2*(A!==0||E!==0?A+E:D(c.left,c.right)):b=u-2*(M!==0||W!==0?M+W:D(c.top,c.bottom))}await s({...e,availableWidth:m,availableHeight:b});const y=await i.getDimensions(r.floating);return g!==y.width||u!==y.height?{reset:{rects:!0}}:{}}}};function X(t){return Pt(t)?(t.nodeName||"").toLowerCase():"#document"}function B(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function z(t){var e;return(e=(Pt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Pt(t){return t instanceof Node||t instanceof B(t).Node}function _(t){return t instanceof Element||t instanceof B(t).Element}function N(t){return t instanceof HTMLElement||t instanceof B(t).HTMLElement}function Rt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof B(t).ShadowRoot}function et(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=$(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function ie(t){return["table","td","th"].includes(X(t))}function wt(t){const e=yt(),n=$(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function re(t){let e=Q(t);for(;N(e)&&!lt(e);){if(wt(e))return e;e=Q(e)}return null}function yt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function lt(t){return["html","body","#document"].includes(X(t))}function $(t){return B(t).getComputedStyle(t)}function ft(t){return _(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Q(t){if(X(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Rt(t)&&t.host||z(t);return Rt(e)?e.host:e}function Dt(t){const e=Q(t);return lt(e)?t.ownerDocument?t.ownerDocument.body:t.body:N(e)&&et(e)?e:Dt(e)}function tt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Dt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=B(i);return r?e.concat(s,s.visualViewport||[],et(i)?i:[],s.frameElement&&n?tt(s.frameElement):[]):e.concat(i,tt(i,[],n))}function kt(t){const e=$(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=N(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,l=rt(n)!==r||rt(o)!==s;return l&&(n=r,o=s),{width:n,height:o,$:l}}function vt(t){return _(t)?t:t.contextElement}function G(t){const e=vt(t);if(!N(e))return Y(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=kt(e);let s=(r?rt(n.width):n.width)/o,l=(r?rt(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const se=Y(0);function Ft(t){const e=B(t);return!yt()||!e.visualViewport?se:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ce(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==B(t)?!1:e}function q(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=vt(t);let s=Y(1);e&&(o?_(o)&&(s=G(o)):s=G(t));const l=ce(r,n,o)?Ft(r):Y(0);let c=(i.left+l.x)/s.x,f=(i.top+l.y)/s.y,d=i.width/s.x,a=i.height/s.y;if(r){const g=B(r),u=o&&_(o)?B(o):o;let h=g,p=h.frameElement;for(;p&&o&&u!==h;){const x=G(p),w=p.getBoundingClientRect(),v=$(p),b=w.left+(p.clientLeft+parseFloat(v.paddingLeft))*x.x,m=w.top+(p.clientTop+parseFloat(v.paddingTop))*x.y;c*=x.x,f*=x.y,d*=x.x,a*=x.y,c+=b,f+=m,h=B(p),p=h.frameElement}}return J({width:d,height:a,x:c,y:f})}const le=[":popover-open",":modal"];function Bt(t){return le.some(e=>{try{return t.matches(e)}catch{return!1}})}function fe(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=z(o),l=e?Bt(e.floating):!1;if(o===s||l&&r)return n;let c={scrollLeft:0,scrollTop:0},f=Y(1);const d=Y(0),a=N(o);if((a||!a&&!r)&&((X(o)!=="body"||et(s))&&(c=ft(o)),N(o))){const g=q(o);f=G(o),d.x=g.x+o.clientLeft,d.y=g.y+o.clientTop}return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-c.scrollLeft*f.x+d.x,y:n.y*f.y-c.scrollTop*f.y+d.y}}function ae(t){return Array.from(t.getClientRects())}function Wt(t){return q(z(t)).left+ft(t).scrollLeft}function ue(t){const e=z(t),n=ft(t),o=t.ownerDocument.body,i=D(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=D(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Wt(t);const l=-n.scrollTop;return $(o).direction==="rtl"&&(s+=D(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:l}}function de(t,e){const n=B(t),o=z(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,c=0;if(i){r=i.width,s=i.height;const f=yt();(!f||f&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:l,y:c}}function me(t,e){const n=q(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=N(t)?G(t):Y(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,c=i*r.x,f=o*r.y;return{width:s,height:l,x:c,y:f}}function At(t,e,n){let o;if(e==="viewport")o=de(t,n);else if(e==="document")o=ue(z(t));else if(_(e))o=me(e,n);else{const i=Ft(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return J(o)}function $t(t,e){const n=Q(t);return n===e||!_(n)||lt(n)?!1:$(n).position==="fixed"||$t(n,e)}function ge(t,e){const n=e.get(t);if(n)return n;let o=tt(t,[],!1).filter(l=>_(l)&&X(l)!=="body"),i=null;const r=$(t).position==="fixed";let s=r?Q(t):t;for(;_(s)&&!lt(s);){const l=$(s),c=wt(s);!c&&l.position==="fixed"&&(i=null),(r?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||et(s)&&!c&&$t(t,s))?o=o.filter(d=>d!==s):i=l,s=Q(s)}return e.set(t,o),o}function he(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?ge(e,this._c):[].concat(n),o],l=s[0],c=s.reduce((f,d)=>{const a=At(e,d,i);return f.top=D(a.top,f.top),f.right=V(a.right,f.right),f.bottom=V(a.bottom,f.bottom),f.left=D(a.left,f.left),f},At(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function pe(t){const{width:e,height:n}=kt(t);return{width:e,height:n}}function xe(t,e,n){const o=N(e),i=z(e),r=n==="fixed",s=q(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=Y(0);if(o||!o&&!r)if((X(e)!=="body"||et(i))&&(l=ft(e)),o){const a=q(e,!0,r,e);c.x=a.x+e.clientLeft,c.y=a.y+e.clientTop}else i&&(c.x=Wt(i));const f=s.left+l.scrollLeft-c.x,d=s.top+l.scrollTop-c.y;return{x:f,y:d,width:s.width,height:s.height}}function Ct(t,e){return!N(t)||$(t).position==="fixed"?null:e?e(t):t.offsetParent}function Vt(t,e){const n=B(t);if(!N(t)||Bt(t))return n;let o=Ct(t,e);for(;o&&ie(o)&&$(o).position==="static";)o=Ct(o,e);return o&&(X(o)==="html"||X(o)==="body"&&$(o).position==="static"&&!wt(o))?n:o||re(t)||n}const we=async function(t){const e=this.getOffsetParent||Vt,n=this.getDimensions;return{reference:xe(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await n(t.floating)}}};function ye(t){return $(t).direction==="rtl"}const ve={convertOffsetParentRelativeRectToViewportRelativeRect:fe,getDocumentElement:z,getClippingRect:he,getOffsetParent:Vt,getElementRects:we,getClientRects:ae,getDimensions:pe,getScale:G,isElement:_,isRTL:ye};function be(t,e){let n=null,o;const i=z(t);function r(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),r();const{left:f,top:d,width:a,height:g}=t.getBoundingClientRect();if(l||e(),!a||!g)return;const u=nt(d),h=nt(i.clientWidth-(f+a)),p=nt(i.clientHeight-(d+g)),x=nt(f),v={rootMargin:-u+"px "+-h+"px "+-p+"px "+-x+"px",threshold:D(0,V(1,c))||1};let b=!0;function m(y){const A=y[0].intersectionRatio;if(A!==c){if(!b)return s();A?s(!1,A):o=setTimeout(()=>{s(!1,1e-7)},100)}b=!1}try{n=new IntersectionObserver(m,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(m,v)}n.observe(t)}return s(!0),r}function Ie(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,f=vt(t),d=i||r?[...f?tt(f):[],...tt(e)]:[];d.forEach(w=>{i&&w.addEventListener("scroll",n,{passive:!0}),r&&w.addEventListener("resize",n)});const a=f&&l?be(f,n):null;let g=-1,u=null;s&&(u=new ResizeObserver(w=>{let[v]=w;v&&v.target===f&&u&&(u.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var b;(b=u)==null||b.observe(e)})),n()}),f&&!c&&u.observe(f),u.observe(e));let h,p=c?q(t):null;c&&x();function x(){const w=q(t);p&&(w.x!==p.x||w.y!==p.y||w.width!==p.width||w.height!==p.height)&&n(),p=w,h=requestAnimationFrame(x)}return n(),()=>{var w;d.forEach(v=>{i&&v.removeEventListener("scroll",n),r&&v.removeEventListener("resize",n)}),a==null||a(),(w=u)==null||w.disconnect(),u=null,c&&cancelAnimationFrame(h)}}const Ne=ee,He=Jt,_e=oe,Et=Gt,ze=Zt,je=ne,Re=(t,e,n)=>{const o=new Map,i={platform:ve,...n},r={...i.platform,_c:o};return Kt(t,e,{...i,platform:r})},Ye=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:i}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?Et({element:o.current,padding:i}).fn(n):{}:o?Et({element:o,padding:i}).fn(n):{}}}};var it=typeof document<"u"?R.useLayoutEffect:R.useEffect;function ct(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!ct(t[o],e[o]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,i[o]))return!1;for(o=n;o--!==0;){const r=i[o];if(!(r==="_owner"&&t.$$typeof)&&!ct(t[r],e[r]))return!1}return!0}return t!==t&&e!==e}function It(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Ot(t,e){const n=It(t);return Math.round(e*n)/n}function St(t){const e=R.useRef(t);return it(()=>{e.current=t}),e}function Ae(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:r,floating:s}={},transform:l=!0,whileElementsMounted:c,open:f}=t,[d,a]=R.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[g,u]=R.useState(o);ct(g,o)||u(o);const[h,p]=R.useState(null),[x,w]=R.useState(null),v=R.useCallback(C=>{C!==A.current&&(A.current=C,p(C))},[]),b=R.useCallback(C=>{C!==E.current&&(E.current=C,w(C))},[]),m=r||h,y=s||x,A=R.useRef(null),E=R.useRef(null),M=R.useRef(d),W=c!=null,L=St(c),k=St(i),S=R.useCallback(()=>{if(!A.current||!E.current)return;const C={placement:e,strategy:n,middleware:g};k.current&&(C.platform=k.current),Re(A.current,E.current,C).then(j=>{const K={...j,isPositioned:!0};F.current&&!ct(M.current,K)&&(M.current=K,Ht.flushSync(()=>{a(K)}))})},[g,e,n,k]);it(()=>{f===!1&&M.current.isPositioned&&(M.current.isPositioned=!1,a(C=>({...C,isPositioned:!1})))},[f]);const F=R.useRef(!1);it(()=>(F.current=!0,()=>{F.current=!1}),[]),it(()=>{if(m&&(A.current=m),y&&(E.current=y),m&&y){if(L.current)return L.current(m,y,S);S()}},[m,y,S,L,W]);const T=R.useMemo(()=>({reference:A,floating:E,setReference:v,setFloating:b}),[v,b]),O=R.useMemo(()=>({reference:m,floating:y}),[m,y]),P=R.useMemo(()=>{const C={position:n,left:0,top:0};if(!O.floating)return C;const j=Ot(O.floating,d.x),K=Ot(O.floating,d.y);return l?{...C,transform:"translate("+j+"px, "+K+"px)",...It(O.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:j,top:K}},[n,l,O.floating,d.x,d.y]);return R.useMemo(()=>({...d,update:S,refs:T,elements:O,floatingStyles:P}),[d,S,T,O,P])}var Nt=typeof document<"u"?R.useLayoutEffect:R.useEffect;let at=!1,Ce=0;const Lt=()=>"floating-ui-"+Ce++;function Ee(){const[t,e]=R.useState(()=>at?Lt():void 0);return Nt(()=>{t==null&&e(Lt())},[]),R.useEffect(()=>{at||(at=!0)},[]),t}const Oe=Tt["useId".toString()],Se=Oe||Ee;function Le(){const t=new Map;return{emit(e,n){var o;(o=t.get(e))==null||o.forEach(i=>i(n))},on(e,n){t.set(e,[...t.get(e)||[],n])},off(e,n){var o;t.set(e,((o=t.get(e))==null?void 0:o.filter(i=>i!==n))||[])}}}const Te=R.createContext(null),Me=()=>R.useContext(Te);function Pe(t){return(t==null?void 0:t.ownerDocument)||document}function De(t){return Pe(t).defaultView||window}function ot(t){return t?t instanceof Element||t instanceof De(t).Element:!1}const ke=Tt["useInsertionEffect".toString()],Fe=ke||(t=>t());function Be(t){const e=R.useRef(()=>{});return Fe(()=>{e.current=t}),R.useCallback(function(){for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return e.current==null?void 0:e.current(...o)},[])}function Xe(t){var e;t===void 0&&(t={});const{open:n=!1,onOpenChange:o,nodeId:i}=t,[r,s]=R.useState(null),l=((e=t.elements)==null?void 0:e.reference)||r,c=Ae(t),f=Me(),d=Be((m,y)=>{m&&(g.current.openEvent=y),o==null||o(m,y)}),a=R.useRef(null),g=R.useRef({}),u=R.useState(()=>Le())[0],h=Se(),p=R.useCallback(m=>{const y=ot(m)?{getBoundingClientRect:()=>m.getBoundingClientRect(),contextElement:m}:m;c.refs.setReference(y)},[c.refs]),x=R.useCallback(m=>{(ot(m)||m===null)&&(a.current=m,s(m)),(ot(c.refs.reference.current)||c.refs.reference.current===null||m!==null&&!ot(m))&&c.refs.setReference(m)},[c.refs]),w=R.useMemo(()=>({...c.refs,setReference:x,setPositionReference:p,domReference:a}),[c.refs,x,p]),v=R.useMemo(()=>({...c.elements,domReference:l}),[c.elements,l]),b=R.useMemo(()=>({...c,refs:w,elements:v,dataRef:g,nodeId:i,floatingId:h,events:u,open:n,onOpenChange:d}),[c,i,h,u,n,d,w,v]);return Nt(()=>{const m=f==null?void 0:f.nodesRef.current.find(y=>y.id===i);m&&(m.context=b)}),R.useMemo(()=>({...c,context:b,refs:w,elements:v}),[c,w,v,b])}export{Ie as a,Ye as b,_e as c,He as f,ze as i,je as l,Ve as o,Ne as s,Xe as u};
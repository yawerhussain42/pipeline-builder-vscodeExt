import{a as H,r as P}from"./react-bc4662ae.js";function de(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a}var Y;(function(e){e.event="event",e.props="prop"})(Y||(Y={}));function W(){}function Ae(e){var r,a=void 0;return function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return r&&n.length===r.length&&n.every(function(o,f){return o===r[f]})||(r=n,a=e.apply(void 0,n)),a}}function ee(e){return!!(e||"").match(/\d/)}function q(e){return e==null}function Ee(e){return typeof e=="number"&&isNaN(e)}function ge(e){return q(e)||Ee(e)||typeof e=="number"&&!isFinite(e)}function me(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function Re(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function Be(e,r,a){var n=Re(a),t=e.search(/[1-9]/);return t=t===-1?e.length:t,e.substring(0,t)+e.substring(t,e.length).replace(n,"$1"+r)}function Oe(e){var r=P.useRef(e);r.current=e;var a=P.useRef(function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return r.current.apply(r,n)});return a.current}function ue(e,r){r===void 0&&(r=!0);var a=e[0]==="-",n=a&&r;e=e.replace("-","");var t=e.split("."),o=t[0],f=t[1]||"";return{beforeDecimal:o,afterDecimal:f,hasNegation:a,addNegation:n}}function Te(e){if(!e)return e;var r=e[0]==="-";r&&(e=e.substring(1,e.length));var a=e.split("."),n=a[0].replace(/^0+/,"")||"0",t=a[1]||"";return(r?"-":"")+n+(t?"."+t:"")}function he(e,r,a){for(var n="",t=a?"0":"",o=0;o<=r-1;o++)n+=e[o]||t;return n}function le(e,r){return Array(r+1).join(e)}function Se(e){var r=e+"",a=r[0]==="-"?"-":"";a&&(r=r.substring(1));var n=r.split(/[eE]/g),t=n[0],o=n[1];if(o=Number(o),!o)return a+t;t=t.replace(".","");var f=1+o,h=t.length;return f<0?t="0."+le("0",Math.abs(f))+t:f>=h?t=t+le("0",f-h):t=(t.substring(0,f)||"0")+"."+t.substring(f),a+t}function ve(e,r,a){if(["","-"].indexOf(e)!==-1)return e;var n=(e.indexOf(".")!==-1||a)&&r,t=ue(e),o=t.beforeDecimal,f=t.afterDecimal,h=t.hasNegation,V=parseFloat("0."+(f||"0")),y=f.length<=r?"0."+f:V.toFixed(r),x=y.split("."),g=o.split("").reverse().reduce(function(N,b,d){return N.length>d?(Number(N[0])+Number(b)).toString()+N.substring(1,N.length):b+N},x[0]),m=he(x[1]||"",r,a),S=h?"-":"",c=n?".":"";return""+S+g+c+m}function Z(e,r){if(e.value=e.value,e!==null){if(e.createTextRange){var a=e.createTextRange();return a.move("character",r),a.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(r,r),!0):(e.focus(),!1)}}var xe=Ae(function(e,r){for(var a=0,n=0,t=e.length,o=r.length;e[a]===r[a]&&a<t;)a++;for(;e[t-1-n]===r[o-1-n]&&o-n>a&&t-n>a;)n++;return{from:{start:a,end:t-n},to:{start:a,end:o-n}}});function _e(e,r,a){return Math.min(Math.max(e,r),a)}function oe(e){return Math.max(e.selectionStart,e.selectionEnd)}function Fe(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function Le(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function Me(e){var r=e.currentValue,a=e.formattedValue,n=e.currentValueIndex,t=e.formattedValueIndex;return r[n]===a[t]}function Pe(e,r,a,n,t,o,f){f===void 0&&(f=Me);var h=t.findIndex(function(k){return k}),V=e.slice(0,h);!r&&!a.startsWith(V)&&(r=V,a=V+a,n=n+V.length);for(var y=a.length,x=e.length,g={},m=new Array(y),S=0;S<y;S++){m[S]=-1;for(var c=0,N=x;c<N;c++){var b=f({currentValue:a,lastValue:r,formattedValue:e,currentValueIndex:S,formattedValueIndex:c});if(b&&g[c]!==!0){m[S]=c,g[c]=!0;break}}}for(var d=n;d<y&&(m[d]===-1||!o(a[d]));)d++;var T=d===y||m[d]===-1?x:m[d];for(d=n-1;d>0&&m[d]===-1;)d--;var F=d===-1||m[d]===-1?0:m[d]+1;return F>T?T:n-F<T-n?F:T}function se(e,r,a,n){var t=e.length;if(r=_e(r,0,t),n==="left"){for(;r>=0&&!a[r];)r--;r===-1&&(r=a.indexOf(!0))}else{for(;r<=t&&!a[r];)r++;r>t&&(r=a.lastIndexOf(!0))}return r===-1&&(r=t),r}function je(e){for(var r=Array.from({length:e.length+1}).map(function(){return!0}),a=0,n=r.length;a<n;a++)r[a]=!!(ee(e[a])||ee(e[a-1]));return r}function pe(e,r,a,n,t,o){o===void 0&&(o=W);var f=Oe(function(c,N){var b,d;return ge(c)?(d="",b=""):typeof c=="number"||N?(d=typeof c=="number"?Se(c):c,b=n(d)):(d=t(c,void 0),b=n(d)),{formattedValue:b,numAsString:d}}),h=P.useState(function(){return f(q(e)?r:e,a)}),V=h[0],y=h[1],x=function(c,N){c.formattedValue!==V.formattedValue&&y({formattedValue:c.formattedValue,numAsString:c.value}),o(c,N)},g=e,m=a;q(e)&&(g=V.numAsString,m=!0);var S=f(g,m);return P.useMemo(function(){y(S)},[S.formattedValue]),[V,x]}function ke(e){return e.replace(/[^0-9]/g,"")}function Ke(e){return e}function Ue(e){var r=e.type;r===void 0&&(r="text");var a=e.displayType;a===void 0&&(a="input");var n=e.customInput,t=e.renderText,o=e.getInputRef,f=e.format;f===void 0&&(f=Ke);var h=e.removeFormatting;h===void 0&&(h=ke);var V=e.defaultValue,y=e.valueIsNumericString,x=e.onValueChange,g=e.isAllowed,m=e.onChange;m===void 0&&(m=W);var S=e.onKeyDown;S===void 0&&(S=W);var c=e.onMouseUp;c===void 0&&(c=W);var N=e.onFocus;N===void 0&&(N=W);var b=e.onBlur;b===void 0&&(b=W);var d=e.value,T=e.getCaretBoundary;T===void 0&&(T=je);var F=e.isValidInputCharacter;F===void 0&&(F=ee);var k=e.isCharacterSame,L=de(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),G=pe(d,V,!!y,f,h,x),K=G[0],p=K.formattedValue,M=K.numAsString,U=G[1],j=P.useRef({formattedValue:p,numAsString:M}),z=function(i,u){j.current={formattedValue:i.formattedValue,numAsString:i.value},U(i,u)},$=P.useState(!1),J=$[0],Q=$[1],l=P.useRef(null),v=P.useRef({setCaretTimeout:null,focusTimeout:null});P.useEffect(function(){return Q(!0),function(){clearTimeout(v.current.setCaretTimeout),clearTimeout(v.current.focusTimeout)}},[]);var B=f,D=function(i,u){var s=parseFloat(u);return{formattedValue:i,value:u,floatValue:isNaN(s)?void 0:s}},I=function(i,u,s){i.selectionStart===0&&i.selectionEnd===i.value.length||(Z(i,u),v.current.setCaretTimeout=setTimeout(function(){i.value===s&&i.selectionStart!==i.selectionEnd&&Z(i,u)},0))},E=function(i,u,s){return se(i,u,T(i),s)},_=function(i,u,s){var C=T(u),A=Pe(u,p,i,s,C,F,k);return A=se(u,A,C),A},re=function(i){var u=i.formattedValue;u===void 0&&(u="");var s=i.input,C=i.setCaretPosition;C===void 0&&(C=!0);var A=i.source,w=i.event,R=i.numAsString,O=i.caretPos;if(s){if(O===void 0&&C){var X=i.inputValue||s.value,ie=oe(s);s.value=u,O=_(X,u,ie)}s.value=u,C&&O!==void 0&&I(s,O,u)}u!==p&&z(D(u,R),{event:w,source:A})};P.useEffect(function(){var i=j.current,u=i.formattedValue,s=i.numAsString;p!==u&&(p!==M||u!==s)&&z(D(p,M),{event:void 0,source:Y.props})},[p,M]);var ne=l.current?oe(l.current):void 0,ae=typeof window<"u"?P.useLayoutEffect:P.useEffect;ae(function(){var i=l.current;if(p!==j.current.formattedValue&&i){var u=_(j.current.formattedValue,p,ne);i.value=p,I(i,u,p)}},[p]);var Ve=function(i,u,s){var C=xe(p,i),A=Object.assign(Object.assign({},C),{lastValue:p}),w=h(i,A),R=B(w);if(w=h(R,void 0),g&&!g(D(R,w))){var O=u.target,X=oe(O),ie=_(i,p,X);return O.value=p,I(O,ie,p),!1}return re({formattedValue:R,numAsString:w,inputValue:i,event:u,source:s,setCaretPosition:!0,input:u.target}),!0},ye=function(i){var u=i.target,s=u.value,C=Ve(s,i,Y.event);C&&m(i)},we=function(i){var u=i.target,s=i.key,C=u.selectionStart,A=u.selectionEnd,w=u.value;w===void 0&&(w="");var R;if(s==="ArrowLeft"||s==="Backspace"?R=Math.max(C-1,0):s==="ArrowRight"?R=Math.min(C+1,w.length):s==="Delete"&&(R=C),R===void 0||C!==A){S(i);return}var O=R;if(s==="ArrowLeft"||s==="ArrowRight"){var X=s==="ArrowLeft"?"left":"right";O=E(w,R,X),O!==R&&i.preventDefault()}else s==="Delete"&&!F(w[R])?O=E(w,R,"right"):s==="Backspace"&&!F(w[R])&&(O=E(w,R,"left"));O!==R&&I(u,O,w),i.isUnitTestRun&&I(u,O,w),S(i)},Ne=function(i){var u=i.target,s=u.selectionStart,C=u.selectionEnd,A=u.value;if(A===void 0&&(A=""),s===C){var w=E(A,s);w!==s&&I(u,w,A)}c(i)},be=function(i){i.persist&&i.persist();var u=i.target;l.current=u,v.current.focusTimeout=setTimeout(function(){var s=u.selectionStart,C=u.selectionEnd,A=u.value;A===void 0&&(A="");var w=E(A,s);w!==s&&!(s===0&&C===A.length)&&I(u,w,A),N(i)},0)},De=function(i){l.current=null,clearTimeout(v.current.focusTimeout),clearTimeout(v.current.setCaretTimeout),b(i)},Ie=J&&Fe()?"numeric":void 0,fe=Object.assign({inputMode:Ie},L,{type:r,value:p,onChange:ye,onKeyDown:we,onMouseUp:Ne,onFocus:be,onBlur:De});if(a==="text")return t?H.createElement(H.Fragment,null,t(p,L)||null):H.createElement("span",Object.assign({},L,{ref:o}),p);if(n){var Ce=n;return H.createElement(Ce,Object.assign({},fe,{ref:o}))}return H.createElement("input",Object.assign({},fe,{ref:o}))}function ce(e,r){var a=r.decimalScale,n=r.fixedDecimalScale,t=r.prefix;t===void 0&&(t="");var o=r.suffix;o===void 0&&(o="");var f=r.allowNegative,h=r.thousandsGroupStyle;if(h===void 0&&(h="thousand"),e===""||e==="-")return e;var V=te(r),y=V.thousandSeparator,x=V.decimalSeparator,g=a!==0&&e.indexOf(".")!==-1||a&&n,m=ue(e,f),S=m.beforeDecimal,c=m.afterDecimal,N=m.addNegation;return a!==void 0&&(c=he(c,a,!!n)),y&&(S=Be(S,y,h)),t&&(S=t+S),o&&(c=c+o),N&&(S="-"+S),e=S+(g&&x||"")+c,e}function te(e){var r=e.decimalSeparator;r===void 0&&(r=".");var a=e.thousandSeparator,n=e.allowedDecimalSeparators;return a===!0&&(a=","),n||(n=[r,"."]),{decimalSeparator:r,thousandSeparator:a,allowedDecimalSeparators:n}}function $e(e,r){e===void 0&&(e="");var a=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),t=a.test(e),o=n.test(e);return e=e.replace(/-/g,""),t&&!o&&r&&(e="-"+e),e}function We(e,r){return new RegExp("(^-)|[0-9]|"+me(e),r?"g":void 0)}function Ge(e,r,a){return e===""?!0:!(r!=null&&r.match(/\d/))&&!(a!=null&&a.match(/\d/))&&typeof e=="string"&&!isNaN(Number(e))}function Ze(e,r,a){var n;r===void 0&&(r=Le(e));var t=a.allowNegative,o=a.prefix;o===void 0&&(o="");var f=a.suffix;f===void 0&&(f="");var h=a.decimalScale,V=r.from,y=r.to,x=y.start,g=y.end,m=te(a),S=m.allowedDecimalSeparators,c=m.decimalSeparator,N=e[g]===c;if(ee(e)&&(e===o||e===f)&&r.lastValue==="")return e;if(g-x===1&&S.indexOf(e[x])!==-1){var b=h===0?"":c;e=e.substring(0,x)+b+e.substring(x+1,e.length)}var d=function(v,B,D){var I=!1,E=!1;o.startsWith("-")?I=!1:v.startsWith("--")?(I=!1,E=!0):f.startsWith("-")&&v.length===f.length?I=!1:v[0]==="-"&&(I=!0);var _=I?1:0;return E&&(_=2),_&&(v=v.substring(_),B-=_,D-=_),{value:v,start:B,end:D,hasNegation:I}},T=d(e,x,g),F=T.hasNegation;n=T,e=n.value,x=n.start,g=n.end;var k=d(r.lastValue,V.start,V.end),L=k.start,G=k.end,K=k.value,p=e.substring(x,g);e.length&&K.length&&(L>K.length-f.length||G<o.length)&&!(p&&f.startsWith(p))&&(e=K);var M=0;e.startsWith(o)?M+=o.length:x<o.length&&(M=x),e=e.substring(M),g-=M;var U=e.length,j=e.length-f.length;e.endsWith(f)?U=j:(g>j||g>e.length-f.length)&&(U=g),e=e.substring(0,U),e=$e(F?"-"+e:e,t),e=(e.match(We(c,!0))||[]).join("");var z=e.indexOf(c);e=e.replace(new RegExp(me(c),"g"),function(v,B){return B===z?".":""});var $=ue(e,t),J=$.beforeDecimal,Q=$.afterDecimal,l=$.addNegation;return y.end-y.start<V.end-V.start&&J===""&&N&&!parseFloat(Q)&&(e=l?"-":""),e}function ze(e,r){var a=r.prefix;a===void 0&&(a="");var n=r.suffix;n===void 0&&(n="");var t=Array.from({length:e.length+1}).map(function(){return!0}),o=e[0]==="-";t.fill(!1,0,a.length+(o?1:0));var f=e.length;return t.fill(!1,f-n.length+1,f+1),t}function He(e){var r=te(e),a=r.thousandSeparator,n=r.decimalSeparator,t=e.prefix;t===void 0&&(t="");var o=e.allowNegative;if(o===void 0&&(o=!0),a===n)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+a+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+n+` (default value for decimalSeparator is .)
     `);return t.startsWith("-")&&o&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+t+`
      allowNegative: `+o+`
    `),o=!1),Object.assign(Object.assign({},e),{allowNegative:o})}function qe(e){e=He(e),e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle;var r=e.suffix,a=e.allowNegative,n=e.allowLeadingZeros,t=e.onKeyDown;t===void 0&&(t=W);var o=e.onBlur;o===void 0&&(o=W);var f=e.thousandSeparator,h=e.decimalScale,V=e.fixedDecimalScale,y=e.prefix;y===void 0&&(y="");var x=e.defaultValue,g=e.value,m=e.valueIsNumericString,S=e.onValueChange,c=de(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),N=te(e),b=N.decimalSeparator,d=N.allowedDecimalSeparators,T=function(l){return ce(l,e)},F=function(l,v){return Ze(l,v,e)},k=q(g)?x:g,L=m??Ge(k,y,r);q(g)?q(x)||(L=L||typeof x=="number"):L=L||typeof g=="number";var G=function(l){return ge(l)?l:(typeof l=="number"&&(l=Se(l)),L&&typeof h=="number"?ve(l,h,!!V):l)},K=pe(G(g),G(x),!!L,T,F,S),p=K[0],M=p.numAsString,U=p.formattedValue,j=K[1],z=function(l){var v=l.target,B=l.key,D=v.selectionStart,I=v.selectionEnd,E=v.value;if(E===void 0&&(E=""),D!==I){t(l);return}B==="Backspace"&&E[0]==="-"&&D===y.length+1&&a&&Z(v,1),h&&V&&(B==="Backspace"&&E[D-1]===b?(Z(v,D-1),l.preventDefault()):B==="Delete"&&E[D]===b&&l.preventDefault()),d!=null&&d.includes(B)&&E[D]===b&&Z(v,D+1);var _=f===!0?",":f;B==="Backspace"&&E[D-1]===_&&Z(v,D-1),B==="Delete"&&E[D]===_&&Z(v,D+1),t(l)},$=function(l){var v=M;if(v.match(/\d/g)||(v=""),n||(v=Te(v)),V&&h&&(v=ve(v,h,V)),v!==M){var B=ce(v,e);j({formattedValue:B,value:v,floatValue:parseFloat(v)},{event:l,source:Y.event})}o(l)},J=function(l){return l===b?!0:ee(l)},Q=function(l){var v=l.currentValue,B=l.lastValue,D=l.formattedValue,I=l.currentValueIndex,E=l.formattedValueIndex,_=v[I],re=D[E],ne=xe(B,v),ae=ne.to;return I>=ae.start&&I<ae.end&&d&&d.includes(_)&&re===b?!0:_===re};return Object.assign(Object.assign({},c),{value:U,valueIsNumericString:!1,isValidInputCharacter:J,isCharacterSame:Q,onValueChange:j,format:T,removeFormatting:F,getCaretBoundary:function(l){return ze(l,e)},onKeyDown:z,onBlur:$})}function Qe(e){var r=qe(e);return H.createElement(Ue,Object.assign({},r))}export{Qe as N};
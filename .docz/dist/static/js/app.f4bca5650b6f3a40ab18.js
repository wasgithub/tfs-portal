!function(e){function o(o){for(var n,t,a=o[0],i=o[1],s=o[2],d=o[3]||[],c=0,u=[];c<a.length;c++)t=a[c],k[t]&&u.push(k[t][0]),k[t]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(R&&R(o),S.push.apply(S,d);u.length;)u.shift()();return I.push.apply(I,s||[]),r()}function r(){for(var e,o=0;o<I.length;o++){for(var r=I[o],n=!0,t=1;t<r.length;t++){var a=r[t];0!==k[a]&&(n=!1)}n&&(I.splice(o--,1),e=H(H.s=r[0]))}return 0===I.length&&(S.forEach(function(e){if(void 0===k[e]){k[e]=null;var o=document.createElement("link");o.crossOrigin="anonymous",H.nc&&o.setAttribute("nonce",H.nc),o.rel="prefetch",o.as="script",o.href=C(e),document.head.appendChild(o)}}),S.length=0),e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,o){!function(e,o){if(!x[e]||!w[e])return;for(var r in w[e]=!1,o)Object.prototype.hasOwnProperty.call(o,r)&&(m[r]=o[r]);0===--y&&0===b&&P()}(e,o),n&&n(e,o)};var t,a=!0,i="f4bca5650b6f3a40ab18",s=1e4,d={},c=[],u=[];function l(e){var o={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,r){if(void 0===e)o._selfAccepted=!0;else if("function"===typeof e)o._selfAccepted=e;else if("object"===typeof e)for(var n=0;n<e.length;n++)o._acceptedDependencies[e[n]]=r||function(){};else o._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)o._selfDeclined=!0;else if("object"===typeof e)for(var r=0;r<e.length;r++)o._declinedDependencies[e[r]]=!0;else o._declinedDependencies[e]=!0},dispose:function(e){o._disposeHandlers.push(e)},addDisposeHandler:function(e){o._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=o._disposeHandlers.indexOf(e);r>=0&&o._disposeHandlers.splice(r,1)},check:E,apply:D,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var o=p.indexOf(e);o>=0&&p.splice(o,1)},data:d[e]};return t=void 0,o}var p=[],f="idle";function h(e){f=e;for(var o=0;o<p.length;o++)p[o].call(null,e)}var v,m,g,y=0,b=0,j={},w={},x={};function O(e){return+e+""===e?+e:e}function E(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(o=s,o=o||1e4,new Promise(function(e,r){if("undefined"===typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,t=H.p+""+i+".hot-update.json";n.open("GET",t,!0),n.timeout=o,n.send(null)}catch(a){return r(a)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+t+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+t+" failed."));else{try{var o=JSON.parse(n.responseText)}catch(a){return void r(a)}e(o)}}})).then(function(e){if(!e)return h("idle"),null;w={},j={},x=e.c,g=e.h,h("prepare");var o=new Promise(function(e,o){v={resolve:e,reject:o}});for(var r in m={},k)_(r);return"prepare"===f&&0===b&&0===y&&P(),o});var o}function _(e){x[e]?(w[e]=!0,y++,function(e){var o=document.createElement("script");o.charset="utf-8",o.src=H.p+""+e+"."+i+".hot-update.js",o.crossOrigin="anonymous",document.head.appendChild(o)}(e)):j[e]=!0}function P(){h("ready");var e=v;if(v=null,e)if(a)Promise.resolve().then(function(){return D(a)}).then(function(o){e.resolve(o)},function(o){e.reject(o)});else{var o=[];for(var r in m)Object.prototype.hasOwnProperty.call(m,r)&&o.push(O(r));e.resolve(o)}}function D(o){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,n,t,a,s;function u(e){for(var o=[e],r={},n=o.map(function(e){return{chain:[e],id:e}});n.length>0;){var t=n.pop(),i=t.id,s=t.chain;if((a=A[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var d=0;d<a.parents.length;d++){var c=a.parents[d],u=A[c];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([c]),moduleId:i,parentId:c};-1===o.indexOf(c)&&(u.hot._acceptedDependencies[i]?(r[c]||(r[c]=[]),l(r[c],[i])):(delete r[c],o.push(c),n.push({chain:s.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:o,outdatedDependencies:r}}function l(e,o){for(var r=0;r<o.length;r++){var n=o[r];-1===e.indexOf(n)&&e.push(n)}}o=o||{};var p={},v=[],y={},b=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var j in m)if(Object.prototype.hasOwnProperty.call(m,j)){var w;s=O(j);var E=!1,_=!1,P=!1,D="";switch((w=m[j]?u(s):{type:"disposed",moduleId:j}).chain&&(D="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":o.onDeclined&&o.onDeclined(w),o.ignoreDeclined||(E=new Error("Aborted because of self decline: "+w.moduleId+D));break;case"declined":o.onDeclined&&o.onDeclined(w),o.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+D));break;case"unaccepted":o.onUnaccepted&&o.onUnaccepted(w),o.ignoreUnaccepted||(E=new Error("Aborted because "+s+" is not accepted"+D));break;case"accepted":o.onAccepted&&o.onAccepted(w),_=!0;break;case"disposed":o.onDisposed&&o.onDisposed(w),P=!0;break;default:throw new Error("Unexception type "+w.type)}if(E)return h("abort"),Promise.reject(E);if(_)for(s in y[s]=m[s],l(v,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,s)&&(p[s]||(p[s]=[]),l(p[s],w.outdatedDependencies[s]));P&&(l(v,[w.moduleId]),y[s]=b)}var I,S=[];for(n=0;n<v.length;n++)s=v[n],A[s]&&A[s].hot._selfAccepted&&y[s]!==b&&S.push({module:s,errorHandler:A[s].hot._selfAccepted});h("dispose"),Object.keys(x).forEach(function(e){!1===x[e]&&function(e){delete k[e]}(e)});for(var C,T,q=v.slice();q.length>0;)if(s=q.pop(),a=A[s]){var N={},R=a.hot._disposeHandlers;for(t=0;t<R.length;t++)(r=R[t])(N);for(d[s]=N,a.hot.active=!1,delete A[s],delete p[s],t=0;t<a.children.length;t++){var M=A[a.children[t]];M&&((I=M.parents.indexOf(s))>=0&&M.parents.splice(I,1))}}for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(a=A[s]))for(T=p[s],t=0;t<T.length;t++)C=T[t],(I=a.children.indexOf(C))>=0&&a.children.splice(I,1);for(s in h("apply"),i=g,y)Object.prototype.hasOwnProperty.call(y,s)&&(e[s]=y[s]);var U=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(a=A[s])){T=p[s];var z=[];for(n=0;n<T.length;n++)if(C=T[n],r=a.hot._acceptedDependencies[C]){if(-1!==z.indexOf(r))continue;z.push(r)}for(n=0;n<z.length;n++){r=z[n];try{r(T)}catch(J){o.onErrored&&o.onErrored({type:"accept-errored",moduleId:s,dependencyId:T[n],error:J}),o.ignoreErrored||U||(U=J)}}}for(n=0;n<S.length;n++){var G=S[n];s=G.module,c=[s];try{H(s)}catch(J){if("function"===typeof G.errorHandler)try{G.errorHandler(J)}catch(B){o.onErrored&&o.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:B,originalError:J}),o.ignoreErrored||U||(U=B),U||(U=J)}else o.onErrored&&o.onErrored({type:"self-accept-errored",moduleId:s,error:J}),o.ignoreErrored||U||(U=J)}}return U?(h("fail"),Promise.reject(U)):(h("idle"),new Promise(function(e){e(v)}))}var A={},k={1:0},I=[],S=[];function C(e){return H.p+"static/js/"+({2:"src-docs-documentation-document-settings",3:"src-docs-documentation-projects"}[e]||e)+"."+{2:"ac76ae27",3:"862b95bb"}[e]+".js"}function H(o){if(A[o])return A[o].exports;var r=A[o]={i:o,l:!1,exports:{},hot:l(o),parents:(u=c,c=[],u),children:[]};return e[o].call(r.exports,r,r.exports,function(e){var o=A[e];if(!o)return H;var r=function(r){return o.hot.active?(A[r]?-1===A[r].parents.indexOf(e)&&A[r].parents.push(e):(c=[e],t=r),-1===o.children.indexOf(r)&&o.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),H(r)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(o){H[e]=o}}};for(var a in H)Object.prototype.hasOwnProperty.call(H,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(r,a,n(a));return r.e=function(e){return"ready"===f&&h("prepare"),b++,H.e(e).then(o,function(e){throw o(),e});function o(){b--,"prepare"===f&&(j[e]||_(e),0===b&&0===y&&P())}},r.t=function(e,o){return 1&o&&(e=r(e)),H.t(e,-2&o)},r}(o)),r.l=!0,r.exports}H.e=function(e){var o=[],r=k[e];if(0!==r)if(r)o.push(r[2]);else{var n=new Promise(function(o,n){r=k[e]=[o,n]});o.push(r[2]=n);var t,a=document.createElement("script");a.charset="utf-8",a.timeout=120,H.nc&&a.setAttribute("nonce",H.nc),a.src=C(e),0!==a.src.indexOf(window.location.origin+"/")&&(a.crossOrigin="anonymous");var i=new Error;t=function(o){a.onerror=a.onload=null,clearTimeout(s);var r=k[e];if(0!==r){if(r){var n=o&&("load"===o.type?"missing":o.type),t=o&&o.target&&o.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+t+")",i.name="ChunkLoadError",i.type=n,i.request=t,r[1](i)}k[e]=void 0}};var s=setTimeout(function(){t({type:"timeout",target:a})},12e4);a.onerror=a.onload=t,document.head.appendChild(a)}return Promise.all(o)},H.m=e,H.c=A,H.d=function(e,o,r){H.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},H.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,o){if(1&o&&(e=H(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(H.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)H.d(r,n,function(o){return e[o]}.bind(null,n));return r},H.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(o,"a",o),o},H.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},H.p="/",H.oe=function(e){throw console.error(e),e},H.h=function(){return i};var T=window.webpackJsonp=window.webpackJsonp||[],q=T.push.bind(T);T.push=o,T=T.slice();for(var N=0;N<T.length;N++)o(T[N]);var R=q,M=(I.push([0,0]),r());o([[],{},0,[0,2,3]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"Tfs Portal","description":"My awesome app using docz","menu":[],"version":"0.1.0","repository":null,"native":false,"codeSandbox":true,"themeConfig":{"logo":{"width":150}},"separator":"-"},"props":[{"key":"src/App.js","value":[{"description":"","displayName":"App","methods":[],"actualName":"App"}]}],"entries":[{"key":"src/docs/documentation/document-settings.mdx","value":{"name":"Guias Gerais","route":"/","id":"0437236ad998f9f7af89acf467ed58f9","filepath":"src/docs/documentation/document-settings.mdx","link":"","slug":"src-docs-documentation-document-settings","menu":"","headings":[{"slug":"documenta\xe7\xe3o","depth":1,"value":"Documenta\xe7\xe3o"},{"slug":"introdu\xe7\xe3o","depth":2,"value":"Introdu\xe7\xe3o"},{"slug":"fluxo","depth":2,"value":"Fluxo"},{"slug":"regras-para-cria\xe7\xe3o-da-branch","depth":2,"value":"Regras para cria\xe7\xe3o da  Branch"},{"slug":"regras-para-cria\xe7\xe3o-de-commits","depth":2,"value":"Regras para cria\xe7\xe3o de  Commits"},{"slug":"tipo","depth":3,"value":"Tipo"},{"slug":"escopo","depth":3,"value":"Escopo"},{"slug":"descri\xe7\xe3o-curta","depth":3,"value":"Descri\xe7\xe3o curta"},{"slug":"corpo","depth":3,"value":"Corpo"},{"slug":"rodap\xe9","depth":3,"value":"Rodap\xe9"},{"slug":"breaking-changes","depth":3,"value":"Breaking Changes"},{"slug":"exemplos-de-descri\xe7\xf5es-de-commits-completos","depth":3,"value":"Exemplos de descri\xe7\xf5es de  commits  completos"},{"slug":"regras-para-cria\xe7\xe3o-de-pull-requests","depth":2,"value":"Regras para cria\xe7\xe3o de  Pull Requests"},{"slug":"componente","depth":3,"value":"Componente"},{"slug":"n\xfamero-da-issue","depth":3,"value":"N\xfamero da ISSUE"},{"slug":"pr-checklist","depth":3,"value":"PR Checklist"},{"slug":"qual-o-comportamento-atual","depth":3,"value":"Qual o comportamento atual?"},{"slug":"qual-o-novo-comportamento","depth":3,"value":"Qual o novo comportamento?"},{"slug":"simula\xe7\xe3o","depth":3,"value":"Simula\xe7\xe3o"}]}},{"key":"src/docs/documentation/projects.mdx","value":{"name":"Internet Banking","route":"/ib","menu":"Projetos","id":"06ed6693f494a988c509a53f5e0c43ac","filepath":"src/docs/documentation/projects.mdx","link":"","slug":"src-docs-documentation-projects","headings":[{"slug":"projeto-internet-banking","depth":1,"value":"Projeto INTERNET BANKING"},{"slug":"se-estiver-criando-uma-nova-release-do-produto-se-atente-a-se\xe7\xe3o-configurando-para-novos-releases","depth":2,"value":"Se estiver criando uma nova release do produto se atente a se\xe7\xe3o  Configurando para novos releases"},{"slug":"se-estiver-clonando-o-projeto-para-trabalhar-sobre-uma-release-j\xe1-existente-se-atente-a-se\xe7\xe3o-desenvolvimento","depth":2,"value":"Se estiver clonando o projeto para trabalhar sobre uma release j\xe1 existente se atente a se\xe7\xe3o  Desenvolvimento"},{"slug":"palavras-chave","depth":2,"value":"Palavras-chave"},{"slug":"-conceito-importante-","depth":1,"value":"!!! CONCEITO IMPORTANTE !!!"},{"slug":"configurando-para-novos-releases","depth":2,"value":"Configurando para novos releases"},{"slug":"react-native","depth":3,"value":"REACT NATIVE"},{"slug":"ios","depth":3,"value":"iOS"},{"slug":"android","depth":3,"value":"ANDROID"},{"slug":"","depth":1,"value":""},{"slug":"desenvolvimento","depth":2,"value":"Desenvolvimento"},{"slug":"configura\xe7\xe3o-do-ambiente","depth":3,"value":"Configura\xe7\xe3o do ambiente"},{"slug":"executando-a-aplica\xe7\xe3o","depth":3,"value":"Executando a aplica\xe7\xe3o"},{"slug":"android-1","depth":4,"value":"Android"},{"slug":"ios-1","depth":4,"value":"iOS"},{"slug":"gerando-a-release","depth":3,"value":"Gerando a release"},{"slug":"android-2","depth":4,"value":"Android"},{"slug":"ios-2","depth":4,"value":"iOS"},{"slug":"erros-comuns","depth":1,"value":"Erros comuns"},{"slug":"android-3","depth":2,"value":"Android"},{"slug":"android-erro-ao-compilar-o-lottie-react-native-nullpointerexception","depth":3,"value":"(Android) Erro ao compilar o lottie-react-native NullPointerException"},{"slug":"android-algum-erro-ao-gerar-a-release-ou-executar-a-aplica\xe7\xe3o","depth":3,"value":"(Android) Algum erro ao gerar a release ou executar a aplica\xe7\xe3o"},{"slug":"ios-algum-erro-ao-gerar-a-release-ou-executar-a-aplica\xe7\xe3o","depth":3,"value":"(iOS) Algum erro ao gerar a release ou executar a aplica\xe7\xe3o"},{"slug":"ap\xf3s-alterar-o-arquivo-babelrcjs-ou-o-valor-de-react_app_costumer-o-aplicativo-obt\xe9m-os-arquivos-do-valor-anterior","depth":3,"value":"Ap\xf3s alterar o arquivo .babelrc.js ou o valor de REACT_APP_COSTUMER o aplicativo obt\xe9m os arquivos do valor anterior"},{"slug":"sugest\xf5es","depth":1,"value":"Sugest\xf5es"},{"slug":"para-gerenciar-as-vers\xf5es-do-nodejs-e-npm","depth":2,"value":"Para gerenciar as vers\xf5es do NodeJS e npm"}]}}]}')},"./.docz/app/index.jsx":function(e,o,r){"use strict";r.r(o);var n=r("./node_modules/react/index.js"),t=r.n(n),a=r("./node_modules/react-dom/index.js"),i=r.n(a),s=r("./node_modules/docz/dist/index.esm.js"),d=r("./node_modules/docz-theme-default/dist/index.esm.js"),c={"src/docs/documentation/document-settings.mdx":function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"./src/docs/documentation/document-settings.mdx"))},"src/docs/documentation/projects.mdx":function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"./src/docs/documentation/projects.mdx"))}},u=r("./.docz/app/db.json"),l=function(){return t.a.createElement(d.a,{linkComponent:s.b,db:u},t.a.createElement(s.c,{imports:c}))},p=[],f=[],h=function(){return p.forEach(function(e){return e&&e()})},v=function(){return f.forEach(function(e){return e&&e()})},m=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;h(),i.a.render(t.a.createElement(e,null),m,v)}(l)},0:function(e,o,r){e.exports=r("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.f4bca5650b6f3a40ab18.js.map
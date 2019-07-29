!function(e){function o(o){for(var n,t,a=o[0],s=o[1],i=o[2],d=o[3]||[],c=0,u=[];c<a.length;c++)t=a[c],k[t]&&u.push(k[t][0]),k[t]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(N&&N(o),I.push.apply(I,d);u.length;)u.shift()();return S.push.apply(S,i||[]),r()}function r(){for(var e,o=0;o<S.length;o++){for(var r=S[o],n=!0,t=1;t<r.length;t++){var a=r[t];0!==k[a]&&(n=!1)}n&&(S.splice(o--,1),e=H(H.s=r[0]))}return 0===S.length&&(I.forEach(function(e){if(void 0===k[e]){k[e]=null;var o=document.createElement("link");o.crossOrigin="anonymous",H.nc&&o.setAttribute("nonce",H.nc),o.rel="prefetch",o.as="script",o.href=C(e),document.head.appendChild(o)}}),I.length=0),e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,o){!function(e,o){if(!w[e]||!j[e])return;for(var r in j[e]=!1,o)Object.prototype.hasOwnProperty.call(o,r)&&(v[r]=o[r]);0===--y&&0===b&&_()}(e,o),n&&n(e,o)};var t,a=!0,s="b64bb1b87707318371e1",i=1e4,d={},c=[],u=[];function l(e){var o={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,r){if(void 0===e)o._selfAccepted=!0;else if("function"===typeof e)o._selfAccepted=e;else if("object"===typeof e)for(var n=0;n<e.length;n++)o._acceptedDependencies[e[n]]=r||function(){};else o._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)o._selfDeclined=!0;else if("object"===typeof e)for(var r=0;r<e.length;r++)o._declinedDependencies[e[r]]=!0;else o._declinedDependencies[e]=!0},dispose:function(e){o._disposeHandlers.push(e)},addDisposeHandler:function(e){o._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=o._disposeHandlers.indexOf(e);r>=0&&o._disposeHandlers.splice(r,1)},check:E,apply:D,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var o=p.indexOf(e);o>=0&&p.splice(o,1)},data:d[e]};return t=void 0,o}var p=[],f="idle";function h(e){f=e;for(var o=0;o<p.length;o++)p[o].call(null,e)}var m,v,g,y=0,b=0,x={},j={},w={};function O(e){return+e+""===e?+e:e}function E(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(o=i,o=o||1e4,new Promise(function(e,r){if("undefined"===typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,t=H.p+""+s+".hot-update.json";n.open("GET",t,!0),n.timeout=o,n.send(null)}catch(a){return r(a)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+t+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+t+" failed."));else{try{var o=JSON.parse(n.responseText)}catch(a){return void r(a)}e(o)}}})).then(function(e){if(!e)return h("idle"),null;j={},x={},w=e.c,g=e.h,h("prepare");var o=new Promise(function(e,o){m={resolve:e,reject:o}});for(var r in v={},k)P(r);return"prepare"===f&&0===b&&0===y&&_(),o});var o}function P(e){w[e]?(j[e]=!0,y++,function(e){var o=document.createElement("script");o.charset="utf-8",o.src=H.p+""+e+"."+s+".hot-update.js",o.crossOrigin="anonymous",document.head.appendChild(o)}(e)):x[e]=!0}function _(){h("ready");var e=m;if(m=null,e)if(a)Promise.resolve().then(function(){return D(a)}).then(function(o){e.resolve(o)},function(o){e.reject(o)});else{var o=[];for(var r in v)Object.prototype.hasOwnProperty.call(v,r)&&o.push(O(r));e.resolve(o)}}function D(o){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,n,t,a,i;function u(e){for(var o=[e],r={},n=o.map(function(e){return{chain:[e],id:e}});n.length>0;){var t=n.pop(),s=t.id,i=t.chain;if((a=A[s])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:s};if(a.hot._main)return{type:"unaccepted",chain:i,moduleId:s};for(var d=0;d<a.parents.length;d++){var c=a.parents[d],u=A[c];if(u){if(u.hot._declinedDependencies[s])return{type:"declined",chain:i.concat([c]),moduleId:s,parentId:c};-1===o.indexOf(c)&&(u.hot._acceptedDependencies[s]?(r[c]||(r[c]=[]),l(r[c],[s])):(delete r[c],o.push(c),n.push({chain:i.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:o,outdatedDependencies:r}}function l(e,o){for(var r=0;r<o.length;r++){var n=o[r];-1===e.indexOf(n)&&e.push(n)}}o=o||{};var p={},m=[],y={},b=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var x in v)if(Object.prototype.hasOwnProperty.call(v,x)){var j;i=O(x);var E=!1,P=!1,_=!1,D="";switch((j=v[x]?u(i):{type:"disposed",moduleId:x}).chain&&(D="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":o.onDeclined&&o.onDeclined(j),o.ignoreDeclined||(E=new Error("Aborted because of self decline: "+j.moduleId+D));break;case"declined":o.onDeclined&&o.onDeclined(j),o.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+D));break;case"unaccepted":o.onUnaccepted&&o.onUnaccepted(j),o.ignoreUnaccepted||(E=new Error("Aborted because "+i+" is not accepted"+D));break;case"accepted":o.onAccepted&&o.onAccepted(j),P=!0;break;case"disposed":o.onDisposed&&o.onDisposed(j),_=!0;break;default:throw new Error("Unexception type "+j.type)}if(E)return h("abort"),Promise.reject(E);if(P)for(i in y[i]=v[i],l(m,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,i)&&(p[i]||(p[i]=[]),l(p[i],j.outdatedDependencies[i]));_&&(l(m,[j.moduleId]),y[i]=b)}var S,I=[];for(n=0;n<m.length;n++)i=m[n],A[i]&&A[i].hot._selfAccepted&&y[i]!==b&&I.push({module:i,errorHandler:A[i].hot._selfAccepted});h("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete k[e]}(e)});for(var C,q,R=m.slice();R.length>0;)if(i=R.pop(),a=A[i]){var T={},N=a.hot._disposeHandlers;for(t=0;t<N.length;t++)(r=N[t])(T);for(d[i]=T,a.hot.active=!1,delete A[i],delete p[i],t=0;t<a.children.length;t++){var M=A[a.children[t]];M&&((S=M.parents.indexOf(i))>=0&&M.parents.splice(S,1))}}for(i in p)if(Object.prototype.hasOwnProperty.call(p,i)&&(a=A[i]))for(q=p[i],t=0;t<q.length;t++)C=q[t],(S=a.children.indexOf(C))>=0&&a.children.splice(S,1);for(i in h("apply"),s=g,y)Object.prototype.hasOwnProperty.call(y,i)&&(e[i]=y[i]);var z=null;for(i in p)if(Object.prototype.hasOwnProperty.call(p,i)&&(a=A[i])){q=p[i];var U=[];for(n=0;n<q.length;n++)if(C=q[n],r=a.hot._acceptedDependencies[C]){if(-1!==U.indexOf(r))continue;U.push(r)}for(n=0;n<U.length;n++){r=U[n];try{r(q)}catch(J){o.onErrored&&o.onErrored({type:"accept-errored",moduleId:i,dependencyId:q[n],error:J}),o.ignoreErrored||z||(z=J)}}}for(n=0;n<I.length;n++){var G=I[n];i=G.module,c=[i];try{H(i)}catch(J){if("function"===typeof G.errorHandler)try{G.errorHandler(J)}catch(B){o.onErrored&&o.onErrored({type:"self-accept-error-handler-errored",moduleId:i,error:B,originalError:J}),o.ignoreErrored||z||(z=B),z||(z=J)}else o.onErrored&&o.onErrored({type:"self-accept-errored",moduleId:i,error:J}),o.ignoreErrored||z||(z=J)}}return z?(h("fail"),Promise.reject(z)):(h("idle"),new Promise(function(e){e(m)}))}var A={},k={1:0},S=[],I=[];function C(e){return H.p+"static/js/"+({2:"src-docs-documentation-challenge",3:"src-docs-documentation-document-settings",4:"src-docs-documentation-projects"}[e]||e)+"."+{2:"fc28465d",3:"fe0f93f6",4:"64ec4d1a"}[e]+".js"}function H(o){if(A[o])return A[o].exports;var r=A[o]={i:o,l:!1,exports:{},hot:l(o),parents:(u=c,c=[],u),children:[]};return e[o].call(r.exports,r,r.exports,function(e){var o=A[e];if(!o)return H;var r=function(r){return o.hot.active?(A[r]?-1===A[r].parents.indexOf(e)&&A[r].parents.push(e):(c=[e],t=r),-1===o.children.indexOf(r)&&o.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),H(r)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(o){H[e]=o}}};for(var a in H)Object.prototype.hasOwnProperty.call(H,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(r,a,n(a));return r.e=function(e){return"ready"===f&&h("prepare"),b++,H.e(e).then(o,function(e){throw o(),e});function o(){b--,"prepare"===f&&(x[e]||P(e),0===b&&0===y&&_())}},r.t=function(e,o){return 1&o&&(e=r(e)),H.t(e,-2&o)},r}(o)),r.l=!0,r.exports}H.e=function(e){var o=[],r=k[e];if(0!==r)if(r)o.push(r[2]);else{var n=new Promise(function(o,n){r=k[e]=[o,n]});o.push(r[2]=n);var t,a=document.createElement("script");a.charset="utf-8",a.timeout=120,H.nc&&a.setAttribute("nonce",H.nc),a.src=C(e),0!==a.src.indexOf(window.location.origin+"/")&&(a.crossOrigin="anonymous");var s=new Error;t=function(o){a.onerror=a.onload=null,clearTimeout(i);var r=k[e];if(0!==r){if(r){var n=o&&("load"===o.type?"missing":o.type),t=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+t+")",s.name="ChunkLoadError",s.type=n,s.request=t,r[1](s)}k[e]=void 0}};var i=setTimeout(function(){t({type:"timeout",target:a})},12e4);a.onerror=a.onload=t,document.head.appendChild(a)}return Promise.all(o)},H.m=e,H.c=A,H.d=function(e,o,r){H.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},H.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,o){if(1&o&&(e=H(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(H.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)H.d(r,n,function(o){return e[o]}.bind(null,n));return r},H.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(o,"a",o),o},H.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},H.p="/",H.oe=function(e){throw console.error(e),e},H.h=function(){return s};var q=window.webpackJsonp=window.webpackJsonp||[],R=q.push.bind(q);q.push=o,q=q.slice();for(var T=0;T<q.length;T++)o(q[T]);var N=R,M=(S.push([0,0]),r());o([[],{},0,[0,2,3,4]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"Tfs Portal","description":"My awesome app using docz","menu":[],"version":"0.1.0","repository":null,"native":false,"codeSandbox":true,"themeConfig":{"logo":{"src":"/public/images/logo.png","width":150}},"separator":"-"},"props":[{"key":"src/App.js","value":[{"description":"","displayName":"App","methods":[],"actualName":"App"}]}],"entries":[{"key":"src/docs/documentation/challenge.mdx","value":{"name":"Desafio","route":"/challenge","menu":"Projetos","id":"0b311d3aeb3f2aa372036a31649e9c5d","filepath":"src/docs/documentation/challenge.mdx","link":"","slug":"src-docs-documentation-challenge","headings":[{"slug":"desafio","depth":1,"value":"Desafio"},{"slug":"construir-a-p\xe1gina-do-administrador","depth":2,"value":"Construir a P\xe1gina do administrador."},{"slug":"construir-o-aplicativo-do-usu\xe1rio","depth":2,"value":"Construir o aplicativo do usu\xe1rio"},{"slug":"requisitos","depth":2,"value":"Requisitos:"},{"slug":"ganhe-mais-pontos","depth":2,"value":"Ganhe mais pontos:"},{"slug":"submiss\xe3o","depth":2,"value":"Submiss\xe3o:"},{"slug":"prazo-de-entrega-sugerido","depth":2,"value":"Prazo de entrega sugerido:"}]}},{"key":"src/docs/documentation/document-settings.mdx","value":{"name":"Guias Gerais","route":"/","id":"0437236ad998f9f7af89acf467ed58f9","filepath":"src/docs/documentation/document-settings.mdx","link":"","slug":"src-docs-documentation-document-settings","menu":"","headings":[{"slug":"documenta\xe7\xe3o","depth":1,"value":"Documenta\xe7\xe3o"},{"slug":"introdu\xe7\xe3o","depth":2,"value":"Introdu\xe7\xe3o"},{"slug":"fluxos","depth":2,"value":"Fluxos"},{"slug":"regras-para-cria\xe7\xe3o-da-branch","depth":2,"value":"Regras para cria\xe7\xe3o da  Branch"},{"slug":"regras-para-cria\xe7\xe3o-de-commits","depth":2,"value":"Regras para cria\xe7\xe3o de  Commits"},{"slug":"tipo","depth":3,"value":"Tipo"},{"slug":"escopo","depth":3,"value":"Escopo"},{"slug":"descri\xe7\xe3o-curta","depth":3,"value":"Descri\xe7\xe3o curta"},{"slug":"corpo","depth":3,"value":"Corpo"},{"slug":"rodap\xe9","depth":3,"value":"Rodap\xe9"},{"slug":"breaking-changes","depth":3,"value":"Breaking Changes"},{"slug":"exemplos-de-descri\xe7\xf5es-de-commits-completos","depth":3,"value":"Exemplos de descri\xe7\xf5es de  commits  completos"},{"slug":"regras-para-cria\xe7\xe3o-de-pull-requests","depth":2,"value":"Regras para cria\xe7\xe3o de  Pull Requests"},{"slug":"componente","depth":3,"value":"Componente"},{"slug":"n\xfamero-da-issue","depth":3,"value":"N\xfamero da ISSUE"},{"slug":"pr-checklist","depth":3,"value":"PR Checklist"},{"slug":"qual-o-comportamento-atual","depth":3,"value":"Qual o comportamento atual?"},{"slug":"qual-o-novo-comportamento","depth":3,"value":"Qual o novo comportamento?"},{"slug":"simula\xe7\xe3o","depth":3,"value":"Simula\xe7\xe3o"}]}},{"key":"src/docs/documentation/projects.mdx","value":{"name":"Internet Banking","route":"/ib","menu":"Projetos","id":"06ed6693f494a988c509a53f5e0c43ac","filepath":"src/docs/documentation/projects.mdx","link":"","slug":"src-docs-documentation-projects","headings":[{"slug":"projeto-internet-banking","depth":1,"value":"Projeto INTERNET BANKING"},{"slug":"se-estiver-criando-uma-nova-release-do-produto-se-atente-a-se\xe7\xe3o-configurando-para-novos-releases","depth":2,"value":"Se estiver criando uma nova release do produto se atente a se\xe7\xe3o  Configurando para novos releases"},{"slug":"se-estiver-clonando-o-projeto-para-trabalhar-sobre-uma-release-j\xe1-existente-se-atente-a-se\xe7\xe3o-desenvolvimento","depth":2,"value":"Se estiver clonando o projeto para trabalhar sobre uma release j\xe1 existente se atente a se\xe7\xe3o  Desenvolvimento"},{"slug":"palavras-chave","depth":2,"value":"Palavras-chave"},{"slug":"-conceito-importante-","depth":1,"value":"!!! CONCEITO IMPORTANTE !!!"},{"slug":"configurando-para-novos-releases","depth":2,"value":"Configurando para novos releases"},{"slug":"react-native","depth":3,"value":"REACT NATIVE"},{"slug":"ios","depth":3,"value":"iOS"},{"slug":"android","depth":3,"value":"ANDROID"},{"slug":"","depth":1,"value":""},{"slug":"desenvolvimento","depth":2,"value":"Desenvolvimento"},{"slug":"configura\xe7\xe3o-do-ambiente","depth":3,"value":"Configura\xe7\xe3o do ambiente"},{"slug":"executando-a-aplica\xe7\xe3o","depth":3,"value":"Executando a aplica\xe7\xe3o"},{"slug":"android-1","depth":4,"value":"Android"},{"slug":"ios-1","depth":4,"value":"iOS"},{"slug":"gerando-a-release","depth":3,"value":"Gerando a release"},{"slug":"android-2","depth":4,"value":"Android"},{"slug":"ios-2","depth":4,"value":"iOS"},{"slug":"erros-comuns","depth":1,"value":"Erros comuns"},{"slug":"android-3","depth":2,"value":"Android"},{"slug":"android-erro-ao-compilar-o-lottie-react-native-nullpointerexception","depth":3,"value":"(Android) Erro ao compilar o lottie-react-native NullPointerException"},{"slug":"android-algum-erro-ao-gerar-a-release-ou-executar-a-aplica\xe7\xe3o","depth":3,"value":"(Android) Algum erro ao gerar a release ou executar a aplica\xe7\xe3o"},{"slug":"ios-algum-erro-ao-gerar-a-release-ou-executar-a-aplica\xe7\xe3o","depth":3,"value":"(iOS) Algum erro ao gerar a release ou executar a aplica\xe7\xe3o"},{"slug":"ap\xf3s-alterar-o-arquivo-babelrcjs-ou-o-valor-de-react_app_costumer-o-aplicativo-obt\xe9m-os-arquivos-do-valor-anterior","depth":3,"value":"Ap\xf3s alterar o arquivo .babelrc.js ou o valor de REACT_APP_COSTUMER o aplicativo obt\xe9m os arquivos do valor anterior"},{"slug":"sugest\xf5es","depth":1,"value":"Sugest\xf5es"},{"slug":"para-gerenciar-as-vers\xf5es-do-nodejs-e-npm","depth":2,"value":"Para gerenciar as vers\xf5es do NodeJS e npm"}]}}]}')},"./.docz/app/index.jsx":function(e,o,r){"use strict";r.r(o);var n=r("./node_modules/react/index.js"),t=r.n(n),a=r("./node_modules/react-dom/index.js"),s=r.n(a),i=r("./node_modules/docz/dist/index.esm.js"),d=r("./node_modules/docz-theme-default/dist/index.esm.js"),c={"src/docs/documentation/challenge.mdx":function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"./src/docs/documentation/challenge.mdx"))},"src/docs/documentation/document-settings.mdx":function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"./src/docs/documentation/document-settings.mdx"))},"src/docs/documentation/projects.mdx":function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"./src/docs/documentation/projects.mdx"))}},u=r("./.docz/app/db.json"),l=function(){return t.a.createElement(d.a,{linkComponent:i.b,db:u},t.a.createElement(i.c,{imports:c}))},p=[],f=[],h=function(){return p.forEach(function(e){return e&&e()})},m=function(){return f.forEach(function(e){return e&&e()})},v=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;h(),s.a.render(t.a.createElement(e,null),v,m)}(l)},0:function(e,o,r){e.exports=r("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.b64bb1b87707318371e1.js.map
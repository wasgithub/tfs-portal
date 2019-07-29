(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/docs/documentation/document-settings.mdx":function(e,a,o){"use strict";o.r(a),o.d(a,"default",function(){return c});var t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),n={},b="wrapper";function c(e){var a=e.components,o=Object(t.a)(e,["components"]);return Object(r.b)(b,Object.assign({},n,o,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"documenta\xe7\xe3o"},"Documenta\xe7\xe3o"),Object(r.b)("a",{id:"introduction"}),"## Introdu\xe7\xe3o",Object(r.b)("p",null,"Este guia tem por objetivo definir as regras para cria\xe7\xe3o de ",Object(r.b)("em",{parentName:"p"},"Branchs"),", ",Object(r.b)("em",{parentName:"p"},"Pull Requests")," e ",Object(r.b)("em",{parentName:"p"},"Commits")," no projetos TFS.\nPara seguir o guia \xe9 fundamental o conhecimento da ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://git-scm.com/book/en/v2"}),"ferramenta Git"),"."),Object(r.b)("a",{id:"flow"}),"## Fluxos",Object(r.b)("a",{id:"branchs"}),"## Regras para cria\xe7\xe3o da *Branch*",Object(r.b)("p",null,"Antes de criar uma nova ",Object(r.b)("em",{parentName:"p"},"branch")," deve-se assegurar de estar na ",Object(r.b)("em",{parentName:"p"},"branch master")," do projeto.\nCaso j\xe1 esteja na ",Object(r.b)("em",{parentName:"p"},"master")," rode o comando:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"git pull\n")),Object(r.b)("p",null,"Se n\xe3o retornar nenhum erro ela estar\xe1 atualizada e \xe9 hora de criar a ",Object(r.b)("em",{parentName:"p"},"branch")," no projeto. Para isso rode o comando:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"git checkout -b <COMPONENTE>/<ISSUE>\n")),Object(r.b)("p",null,"Onde o ",Object(r.b)("inlineCode",{parentName:"p"},"<COMPONENTE>")," deve conter o nome do componente e n\xe3o o projeto onde ele se encontra. E a ",Object(r.b)("inlineCode",{parentName:"p"},"<ISSUE>")," \xe9 o n\xfamero da ocorr\xeancia a qual se refere a altera\xe7\xe3o.\nExemplos:"),Object(r.b)("p",null,"Caso a ISSUE seja gerada no Jira:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"git checkout -b tfs-button/TFS-222\n")),Object(r.b)("p",null,"Caso a ISSUE seja gerada no GitHub:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"git checkout -b tfs-button/235\n")),Object(r.b)("a",{id:"commits"}),"## Regras para cria\xe7\xe3o de *Commits*",Object(r.b)("p",null,"A descri\xe7\xe3o dos ",Object(r.b)("em",{parentName:"p"},"commits")," podem ser feitos em portugu\xeas ou ingl\xeas."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Caso durante o desenvolvimento da melhoria ou corre\xe7\xe3o forem gerados v\xe1rios ",Object(r.b)("em",{parentName:"p"},"commits")," deve-se utilizar o comando ",Object(r.b)("em",{parentName:"p"},"rebase")," do git com a op\xe7\xe3o de ",Object(r.b)("em",{parentName:"p"},"squash")," para que o mesmo transforme em apenas um ",Object(r.b)("em",{parentName:"p"},"commit")," antes de gerar a ",Object(r.b)("em",{parentName:"p"},"Pull Request"),". Segue documenta\xe7\xe3o: ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History"}),"Git rebase"),".")),Object(r.b)("p",null,"Deve-se seguir um padr\xe3o para cria\xe7\xe3o dos ",Object(r.b)("em",{parentName:"p"},"commits"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"<TIPO>(ESCOPO): <DESCRI\xc7\xc3O CURTA>\n<LINHA EM BRANCO>\n<CORPO>\n<LINHA EM BRANCO>\n<RODAP\xc9>\n")),Object(r.b)("p",null,"Agora vamos detalhar melhor o que deve ser descrito em cada parte:"),Object(r.b)("a",{id:"type"}),"### Tipo",Object(r.b)("p",null,"Deve ser utilizado um dos tipos descritos abaixo conforme o objetivo da altera\xe7\xe3o:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"build (quando a altera\xe7\xe3o est\xe1 relacionada ao ",Object(r.b)("em",{parentName:"li"},"build"),");"),Object(r.b)("li",{parentName:"ul"},"docs (quando a altera\xe7\xe3o for na documenta\xe7\xe3o);"),Object(r.b)("li",{parentName:"ul"},"feat (quando for uma melhoria, for criada uma nova funcionalidade ou um novo componente);"),Object(r.b)("li",{parentName:"ul"},"fix (para corre\xe7\xe3o de ",Object(r.b)("em",{parentName:"li"},"bugs"),");"),Object(r.b)("li",{parentName:"ul"},"perf (quando o item \xe9 gerado para melhoria de performance);"),Object(r.b)("li",{parentName:"ul"},"refactor (quando for feito uma refatora\xe7\xe3o ou aplica\xe7\xe3o de boas pr\xe1ticas);"),Object(r.b)("li",{parentName:"ul"},"test (quando forem adicionados ou refatorados os testes);")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Nunca colocar espa\xe7o entre a descri\xe7\xe3o do tipo e a abertura de par\xeanteses do escopo.")),Object(r.b)("a",{id:"scope"}),"### Escopo",Object(r.b)("p",null,"No escopo dever\xe1 ser definido o nome do componente ou servi\xe7o diretamente afetado pelo ",Object(r.b)("em",{parentName:"p"},"commit"),", caso mais de um componente seja afetado, deve-se definir o principal. N\xe3o deve ser utilizado o prefixo na nomenclatura, por exemplo:"),Object(r.b)("p",null,"Corretos:\n(button): , (event-sourcing): , (avatar): , ..."),Object(r.b)("p",null,"Errados:\n(tfs-button): , (tfs-event-sourcing): , (tfs-avatar): , ..."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Sempre deve estar entre par\xeanteses e ap\xf3s o fechamento do par\xeanteses deve-se colocar dois pontos e um espa\xe7o.")),Object(r.b)("a",{id:"short-description"}),"### Descri\xe7\xe3o curta",Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Deve-se colocar uma breve descri\xe7\xe3o do que foi feito no ",Object(r.b)("em",{parentName:"li"},"commit"),"."),Object(r.b)("li",{parentName:"ul"},"Nunca iniciar a descri\xe7\xe3o com letra mai\xfascula."),Object(r.b)("li",{parentName:"ul"},"Nunca deve utilizar ponto final na descri\xe7\xe3o."),Object(r.b)("li",{parentName:"ul"},"Deve-se utilizar o modo imperativo na descri\xe7\xe3o."),Object(r.b)("li",{parentName:"ul"},"N\xe3o deve-se ultrapassar 72 caracteres na soma dos caracteres do tipo, escopo e descri\xe7\xe3o curta.")),Object(r.b)("p",null,"por exemplo:"),Object(r.b)("p",null,"Corretas:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"adiciona nova funcionalidade\n")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"remove vari\xe1vel n\xe3o mais utilizada\n")),Object(r.b)("p",null,"Erradas:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"Adicionada nova funcionalidade.\n")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"Removida vari\xe1vel n\xe3o mais utilizada no componente tfs-button devido a quebra no uso do mesmo.\n")),Object(r.b)("a",{id:"body"}),"### Corpo",Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Deve-se utilizar o modo imperativo na descri\xe7\xe3o."),Object(r.b)("li",{parentName:"ul"},"Deve-se quebrar linha a cada 72 caracteres para que a mesma n\xe3o seja cortada no GitHub."),Object(r.b)("li",{parentName:"ul"},"Deve descrever a motiva\xe7\xe3o que levou a mudan\xe7a e tamb\xe9m o que foi alterado em rela\xe7\xe3o ao comportamento anterior.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Antes da declara\xe7\xe3o do corpo deve-se deixar uma linha em branco.")),Object(r.b)("a",{id:"footer"}),"### Rodap\xe9",Object(r.b)("p",null,"No rodap\xe9 deve-se colocar a palavra ",Object(r.b)("inlineCode",{parentName:"p"},"Fixes")," e em seguida o n\xfamero da ISSUE atendida. Exemplos:"),Object(r.b)("p",null,"Caso a ISSUE seja gerada no Jira:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"Fixes DTFSUI-222\n")),Object(r.b)("p",null,"Caso a ISSUE seja gerada no GitHub e no Jira:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"Fixes #235, DTFSUI-222\n")),Object(r.b)("p",null,"Caso a ISSUE seja gerada no GitHub:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"Fixes #235, #456, #665\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Antes da declara\xe7\xe3o do rodap\xe9 deve-se deixar uma linha em branco.")),Object(r.b)("a",{id:"breaking-changes"}),"### *Breaking Changes*",Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"As ",Object(r.b)("em",{parentName:"li"},"breaking changes")," devem ser declaradas no rodap\xe9 uma linha ap\xf3s a declara\xe7\xe3o do ",Object(r.b)("em",{parentName:"li"},"Fixes"),"."),Object(r.b)("li",{parentName:"ul"},'Deve iniciar utilizando "BREAKING CHANGES: " e ap\xf3s o espa\xe7o colocar uma breve descri\xe7\xe3o da quebra iniciando sempre com caractere min\xfasculo e n\xe3o colocar ponto final.'),Object(r.b)("li",{parentName:"ul"},"Deve-se pular uma linha ap\xf3s a breve descri\xe7\xe3o e iniciar a descri\xe7\xe3o do que deve ser migrado ou alterado."),Object(r.b)("li",{parentName:"ul"},"Deve-se quebrar linha a cada 72 caracteres para que a mesma n\xe3o seja cortada no GitHub."),Object(r.b)("li",{parentName:"ul"},"O tipo do item de ",Object(r.b)("em",{parentName:"li"},"breaking change")," depende do que est\xe1 sendo implementado, por exemplo, caso for apenas removida alguma propriedade o tipo deve ser definido como ",Object(r.b)("em",{parentName:"li"},"refactor"),", caso ao corrigir um problema seja gerado um ",Object(r.b)("em",{parentName:"li"},"breaking change")," ent\xe3o o tipo deve ser definido como ",Object(r.b)("em",{parentName:"li"},"fix"),".")),Object(r.b)("a",{id:"commit-example"}),"### Exemplos de descri\xe7\xf5es de *commits* completos",Object(r.b)("p",null,"Sem ",Object(r.b)("em",{parentName:"p"},"Breaking Changes"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"feat(button): adiciona a propriedade p-size\n\nO componente tfs-button apenas aceita o uso das classes de grid \npara definir sua largura, n\xe3o permitindo assim fazer um ajuste \nfino.\nAdiciona a propriedade size para que o componente possa receber um valor\nem pixels fixo para sua largura.\n\nFixes DTHFUI-221\n")),Object(r.b)("p",null,"Com ",Object(r.b)("em",{parentName:"p"},"Breaking Changes"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),'refactor(button): remove a propriedade p-size\n\nFoi removida a propriedade p-size do componente.\n\nFixes DTHFUI-225\n\nBREAKING CHANGES: removida propriedade p-size\n\nFoi removida a propriedade p-size do tfs-button pois o mesmo deve ser\ndefinido atrav\xe9s do uso das classes de grid.\n\nAntes: \n<tfs-button p-size="md"></tfs-button>\n\nDepois:\n<tfs-button class="tfs-md-4"></tfs-button>\n')),Object(r.b)("a",{id:"pull-requests"}),"## Regras para cria\xe7\xe3o de *Pull Requests*",Object(r.b)("p",null,"Antes de criar a ",Object(r.b)("em",{parentName:"p"},"Pull Request")," \xe9 importante verificar se algumas perguntas foram respondidas:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Pull Request")," resolveu o problema solicitado na ISSUE?"),Object(r.b)("li",{parentName:"ul"},"Foi gerado apenas um ",Object(r.b)("em",{parentName:"li"},"commit")," para solu\xe7\xe3o do problema? Caso tenha mais de um ",Object(r.b)("em",{parentName:"li"},"commit")," ou o padr\xe3o n\xe3o esteja de acordo deve seguir este ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"#commits"}),"Guia de ",Object(r.b)("em",{parentName:"a"},"commits")),".")),Object(r.b)("p",null,"Ap\xf3s essas verifica\xe7\xf5es e tudo estando correto basta gerar a ",Object(r.b)("em",{parentName:"p"},"Pull Request"),"."),Object(r.b)("a",{id:"componente"}),"### Componente",Object(r.b)("p",null,"Esse texto deve ser substitu\xeddo pelo nome do componente diretamente afetado pela altera\xe7\xe3o gerada na ",Object(r.b)("em",{parentName:"p"},"Pull Request"),".\nExemplos:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"tfs-modal\n")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"tfs-button\n")),Object(r.b)("a",{id:"issue-number"}),"### N\xfamero da ISSUE",Object(r.b)("p",null,"Esse texto deve ser substitu\xeddo pelo n\xfamero da ISSUE gerada no Jira ou no GitHub.\nExemplos:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"DTHFUI-577\n")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"#334\n")),Object(r.b)("a",{id:"pr-checklist"}),"### PR Checklist",Object(r.b)("p",null,"Deve-se adicionar um ",Object(r.b)("inlineCode",{parentName:"p"},"x")," dentro dos colchetes sem deixar espa\xe7o em cada um dos itens que forem alterados na ",Object(r.b)("em",{parentName:"p"},"Pull Request"),".\nExemplo:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"- [x] C\xf3digo\n- [x] Testes unit\xe1rios\n- [ ] Documenta\xe7\xe3o\n- [x] Samples\n")),Object(r.b)("a",{id:"current-behavior"}),"### Qual o comportamento atual?",Object(r.b)("p",null,"Deve-se descrever o atual comportamento e o motivo que levou a gerar a altera\xe7\xe3o."),Object(r.b)("p",null,"Exemplo:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"O tfs-modal n\xe3o est\xe1 permitindo definir uma largura maior que 768px. Est\xe1 gerando problema pois ao criar um formul\xe1rio maior gera-se um scroll dificultando a visualiza\xe7\xe3o do cliente.\n")),Object(r.b)("a",{id:"new-behavior"}),"### Qual o novo comportamento?",Object(r.b)("p",null,"Deve-se descrever o novo comportamento gerado, bem como o que e como foi alterado para solucionar o motivo que foi descrito no comportamento atual."),Object(r.b)("p",null,"Exemplo:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),'Cria\xe7\xe3o do novo valor "full" na propriedade p-size.\nEste valor serve para poder deixar o tfs-modal ter o tamanho conforme o conte\xfado sem a limita\xe7\xe3o de tamanho.\n')),Object(r.b)("a",{id:"simulation"}),"### Simula\xe7\xe3o",Object(r.b)("p",null,"Aqui deve-se descrever sugest\xf5es de formas de validar a altera\xe7\xe3o gerada."),Object(r.b)("p",null,"Exemplo:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"Esta corre\xe7\xe3o pode ser validada utilizando o sample labs no portal\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Al\xe9m desses requisitos podem ser adicionados t\xf3picos para facilitar o entendimento da ",Object(r.b)("em",{parentName:"p"},"Pull Request"),". Exemplo: Observa\xe7\xf5es, defini\xe7\xf5es, links...")),Object(r.b)("p",null,"Ap\xf3s gerar a ",Object(r.b)("em",{parentName:"p"},"Pull Request")," \xe9 s\xf3 aguardar aprova\xe7\xe3o.\nFa\xe7a um ",Object(r.b)("em",{parentName:"p"},"rebase")," e em seguida fa\xe7a um ",Object(r.b)("em",{parentName:"p"},"push")," com as altera\xe7\xf5es e aguarde a aprova\xe7\xe3o.\nCaso seja aprovado, parab\xe9ns, sua altera\xe7\xe3o j\xe1 estar\xe1 na ",Object(r.b)("em",{parentName:"p"},"branch master")," do projeto."))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/documentation/document-settings.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-documentation-document-settings.63075107704791714b87.js.map
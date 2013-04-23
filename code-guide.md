# Guia de código HTML e CSS
Padrões para o desenvolvimento de um HTML e CSS flexível, durável e sustentável.



----------



## Índice

* [O Principal](#o-principal)
* [HTML](#html)
  * [Sintaxe](#sintaxe-do-html)
  * [Doctype HTML5](#doctype-html5)
  * [Ordem dos atributos](#ordem-dos-atributos)
  * [Comentário em HTML](#comentrios-explicativos)
* [CSS](#css)
  * [Sintaxe do CSS](#sintaxe-do-css)
  * [Ordem de declaração](#ordem-de-declarao)
  * [Excessões de formatação](#excesses-de-formatao)
    * [Propriedades com prefixo](#propriedades-com-prefixo)
    * [Regras com declarações únicas](#regras-com-decalaraes-nicas)
  * [Legibilidade](#legibilidade)
    * [Comentários](#comentrios)
      * [Adotando um padrão](#adotando-um-padro)
    * [Classes](#classes)
    * [Seletores](#seletores)
  * [Organização](#organizao)
  * [Referências](#referncias)



----------



## O Principal

> Todo código em qualquer base de código deve parecer como se uma única pessoa o digitou, não importando quantas pessoas contribuiram.

Isso significa sempre respeitar rigorosamente estas diretrizes. 



----------



## HTML


### Sintaxe do HTML

* Use tabs com três espaços
* Elementos inseridos dentro de outros elementos sempre devem ser indentados uma vez (3 espaços)
* Para nomes de classe, IDs ou quaisquer outros atributos, sempre use aspas dupla, nunca aspas simples
* Não inclua uma barra invertida de fechamento em elementos de fechamento automático

**Exemplo incorreto:**

````html
<!DOCTYPE html>
<html>
<head>
<title>Título da Página</title>
</head>
<body>
<img src='images/company-logo.png' alt='Company' />
<h1 class='hello-world'>Hello, world!</h1>
</body>
</html>
````

**Exemplo correto:**

````html
<!DOCTYPE html>
<html>
   <head>
      <title>Título da Página</title>
   </head>
   <body>
      <img src="images/company-logo.png" alt="Company">
      <h1 class="hello-world">Hello, world!</h1>
   </body>
</html>
````


### Doctype HTML5

Use o *doctype* do HTML5 no início de cada página HTML.


````html
<!DOCTYPE html>
````



### Ordem dos Atributos

Atributos HTML devem vir nessa ordem particular para uma leitura mais fácil do código.

* classe
* id
* data-*
* for|type|href

Com isso a marcação ficaria mais ou menos assim::

````html
<a class="" id="" data-modal="" href="">Example link</a>
````



### Comentários explicativos

Sempre que possível, para uma melhor leitura do código, insira comentários entre o HTML que possam auxiliar na compreensão geral do fluxo.

````html
<!-- header -->
<header class="header">
	<!-- menu principal -->
	<nav class="nav-bar">
	.....
````


----------



## CSS

### Sintaxe do CSS

* Use tabs com três espaços
* Ao agrupar seletores, mantenha cada um em uma linha
* Inclua um espaço antes da <code>{</code>
* Coloque a chave de fechamento dos blocos de declaração em uma nova linha
* Inclua um espaço depois de <code>:</code> em cada propriedade
* Cada declaração deve aparecer em sua própria linha
* Termine todas as declaraçoes com um ponto e vírgula
* Valores separados por vírgula devem ter um espaço depois de cada vírgula
* Não inclua espaços depois das vírgulas em cores RGB ou RGBa, e não preceda valores com um zero à esquerda
* Coloque em caixa baixa todos os valores hexadecimais, e.g., <code>#fff</code> ao invés de <code>#FFF</code>
* Use valores hexadecimais abreviados quando possível, e.g., <code>#fff</code> ao invés de <code>#ffffff</code>
* Indique os atributos de valores no seletores, e.g., <code>input[type="text"]</code>
* Evite especificar unidade para valores zero, e.g., <code>margin: 0;</code> ao invés de <code>margin: 0px;</code>

**Exemplo incorreto:**

````css
.seletor, .seletor-secundario, .seletor[type=text] {
  padding:15px;
  margin:0px 0px 15px;
  background-color:rgba(0, 0, 0, 0.5);
  box-shadow:0 1px 2px #CCC,inset 0 1px 0 #FFFFFF
}
````

**Exemplo correto:**

````css
.seletor,
.seletor-secundario,
.seletor[type="text"] {
  padding: 15px;
  margin: 0 0 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
}
````


### Ordem de Declaração

Declarações relacionadas devem ser agrupadas juntas, colocando as propriedades de posicionamento e box-model próximas do topo, seguidas por tipografia e propriedades visuais.

````css
.ordem-de-declaracao {
   /* Posicionamento */
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 100;
   margin: 0;
   padding: 0;

   /* Box-model */
   display: block;
   float: right;
   width: 100px;
   height: 100px;

   /* Tipografia */
   font: normal 13px "Helvetica Neue", sans-serif;
   line-height: 1.5
   color: #333;
   text-align: center;

   /* Visual */
   background-color: #f5f5f5;
   border: 1px solid #e5e5e5;
   border-radius: 3px;

   /* Diversos */
   opacity: 1;
}
````


### Excessões de formatação

Em alguns casos, faz sentido fugirmos um pouco [sintaxe](#sintaxe-do-css) padrão.

#### Propriedades com Prefixo

Ao usar propriedades com prefixos, indente cada propriedade de tal forma que o valor se alinhe verticalmente para uma fácil edição multi-linha.

````css
.seletor {
  -webkit-border-radius: 3px;
     -moz-border-radius: 3px;
          border-radius: 3px;
}
````


#### Regras com decalarações únicas

No casos em que várias regras apresentarem apenas uma declaração cada, considere remover as quebras de linha para facilitar a leitura e agilizar a edição.

````css
.span1 { width: 60px; }
.span2 { width: 140px; }
.span3 { width: 220px; }

.sprite {
  display: inline-block;
  width: 16px;
  height: 15px;
  background-image: url(../img/sprite.png);
}
.icon           { background-position: 0 0; }
.icon-home      { background-position: 0 -20px; }
.icon-account   { background-position: 0 -40px; }
````


### Legibilidade

Código é escrito e mantido por pessoas. Garanta que seu código seja descritivo, bem comentado e acessível por outros.

#### Comentários

Um código bem comentado além de auxiliar na organização, facilita o entendimento mesmo depois de um bom tempo sem abrir o arquivo.


##### Adotando um padrão

Baseado no [Idiomatic CSS](https://github.com/necolas/idiomatic-css).

````css
/* ==========================================================================
   Bloco de comentário de seção
   ========================================================================== */

/* Bloco de comentário de sub-seção
   ========================================================================== */

/*
 * Bloco de comentário de grupo
 * Ideal para explicações em múltiplas linhas e documentação.
 */

/* Comentário básico */
````

###### Exemplo


````css
/* ==========================================================================
   Header
   ========================================================================== */

/*
 * Header do site.
 * Agrupa o logo, caixa de busca, menu principal, menu para dispositivos mobile 
 * escondido via CSS e lista das redes sociais.
 */

.header {
   width: 100%;
   height: 200px;
   display: block;
}

/* Menu de navegação
   ========================================================================== */

.navbar {
   width: 100%;
   ....
}

.navbar-mobile {
   /* Esconde menu mobile para resoluções maiores */
   display: none;
}
````


#### Classes

* Manter classes em caixa baixa e usar traços (não usar underline ou camelCase)
* Mantenha as classes o mais curto e sucinta possíveis
* Use nomes significativos e que sejam de fácil entendimento
* Utilize as classes em inglês (excessões podem acontecer claro)


**Exemplo ruim:**

````css
.t { ... }
.red { ... }
.header { ... }
````

**Exemplo bom:**

````css
.tweet { ... }
.important { ... }
.tweet-header { ... }
````

#### Seletores

* Use classes ao invés de tags de elementos genéricos (evita possível conflito com o A2 Sitebox)
* Mantenha-os curtos e limite o número de elementos em cada seletor para três

**Exemplo ruim:**

````css
form { ... }
.page-container #stream .stream-item .tweet .tweet-header .username { ... }
.avatar { ... }
````

**Exemplo bom:**

````css
.forn { ... }
.tweet-header .username { ... }
.tweet .avatar { ... }
````

### Organização

* Organize seções de código por componente
* Sempre que possível comente seu código


### Referências

Criamos isso do nada? Claro que não. Pegamos um pouco de vários [projetos](https://github.com/a2comunicacao/Grid-A2/wiki/Refer%C3%AAncias) legais, misturamos com alguns ingredientes da casa e fizemos o nosso bolo.

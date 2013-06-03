# Grid A2

Template para auxiliar no **pontapé inicial** em um projeto web. Juntamos [alguns dos projetos](https://github.com/a2comunicacao/Grid-A2/wiki/Refer%C3%AAncias) que mais utilizávamos como referência e adaptamos para um modelo de desenvolvimento da A2.
Entenda a idéia [aqui](https://github.com/a2comunicacao/Grid-A2/wiki).

**Padrões são sempre bons**. Auxiliam no entendimento do código, principalmente numa fase posterior de manutenção. Por isso, seguimos um padrão de código. [Veja o guia](https://github.com/a2comunicacao/Grid-A2/blob/master/code-guide.md).

****

## Estrutura

* [HTML](https://github.com/a2comunicacao/Grid-A2#html)
	* [O grid](#o-grid)
	* [A idéia](#a-idia)
* [SASS](https://github.com/a2comunicacao/Grid-A2#sass)
* [CSS](https://github.com/a2comunicacao/Grid-A2#css)
* [JS](https://github.com/a2comunicacao/Grid-A2#js)
	* LIBS
		* jQuery
		* Modernizr
		* Respond
	* `scripts.js`
* [IN](https://github.com/a2comunicacao/Grid-A2#in)
	* `estilos.php`
	* `meta.php`
	* `scripts.php`
	* `mobile_detect.php`
	* `header.php`
	* `footer.php`

## HTML

### O grid

Dentro da pasta *SASS* existe um arquivo chamado `grid.scss`. É nele que inserimos as configurações do grid.

```scss
/* ==========================================================================
   Cálculo grid
   ========================================================================== */
   $totalColumns   : 12;
   $columnWidth    : 60px;
   $gutterWidth    : 20px;
   $gridWidth      : 940px;
```

- *$totalColumns*: número de colunas do grid;
- *$columnWidth*: largura de cada coluna;
- *$gutterWidth*: margem entre cada coluna;
- *$gridWidth*: largura máxima do grid;

E.. pronto! O grid é calculado seguindo os valores inseridos.

### A Idéia

Entendendo a marcação: 

- cada *linha* deve possuir **x** colunas, onde **x** é o número definido  em `$totalColumns`;
- a última coluna de cada linha precisa ter a sua *margem direita zerada*;
- o número máximo de colunas em cada *linha* deve ser igual ao valor definido em $totalColumns`;

### Marcação Padrão

Para criar um layout de duas colunas por exemplo, precisamos criar uma `.row` e adicionar dentro dela o número de colunas conforme definido na variável `$totalColumns`. Cada coluna deve ter a classe `.xcol`, onde x é o número de colunas referente à largura.

```html
<div class="row">
	<div class="fourcol">4 colunas</div>
	<div class="eightcol last">8 colunas</div>
</div>
```
> No exemplo temos uma classe `.fourcol` ( *4 colunas* ) e uma classe `.eightcol` ( *8 colunas* ), totalizando 12 colunas e completando a `.row`.

### Deslocamento

Mova as colunas para a direita usando a classe `.offset-x`, onde o *x* é o valor do deslocamento (em colunas). Por exemplo, a classe `.offset-four` desloca o elemento aplicado em 4 colunas.

```html
<div class="row">
	<div class="fourcol">4 colunas</div>
	<div class="sixcol offset-two last">6 colunas | 2 colunas descolamento</div>
</div>
```

> No exemplo temos uma classe `.fourcol` ( *4 colunas* ) e uma classe `.sixcol` ( *6 colunas* ) com `.offset-two` ( *2 colunas* ), totalizando 12 colunas e fechando o `.row`.

### Centralizando

Centralize o elemento, independente da quantidade de colunas, aplicando a classe `.centered`. 

```html
<div class="row">
	<div class="fivecol centered">5 colunas (Centralizado)</div>
</div>
```

### Linha Filha

Caso precisemos adicionar uma linha filha, é só mantermos a marcação padrão e respeitar o número de colunas do grid.

```html
<div class="row">
	<div class="fourcol">4 colunas
		<!-- linha filha -->
		<div class="row">
			<div class="eightcol">8 colunas</div>
			<div class="fourcol last">4 colunas</div>
		</div><!-- ##fim linha filha -->
	</div>
	<div class="eightcol last">8 coluna</div>
</div>
```
> No exemplo temos uma classe `.fourcol` que possui uma `.row` filha. Esta por sua vez possui uma classe `.eightcol` ( *8 colunas* ) e uma `.fourcol ( *4 colunas* ) totalizando 12 colunas.

### Grid semântico

Podemos utilizar as classes acima, ou podemos utilizar algumas *features* que o *SASS* nos oferece em conjunto com as funções que calculam o grid, para deixarmos o código mais semântico.

Se formos olhar o arquivo `grid.scss` que contém as declarações do grid, podemos observar quatro *includes*: 

- *column()*: define o elemento como uma coluna, aplicando as propriedades específicas;
- *width(n)*: define a largura do elemento com **n** colunas;
- *last()*: se relaciona ao último elemento (coluna) de cada linha do grid, zerando a margem direita do mesmo;
- *push(n)*: define o deslocamento esquerdo do elemento com **n** colunas.

Com isso, uma marcação que antes era assim:

```html
<div class="fourcol">
	<div class="about"></div>
</div>
<div class="eightcol last">
	<div class="box"></div>
</div>
```

... pode ficar assim:

```html
<div class="about column"></div>
<div class="box column"></div>
```

```scss
.about {
	@include width(4);
}

.about {
	@include width(8);
	@include last();
}
```

.. podemos mudar um pouco mais e ficaria assim:

```html
<div class="about"></div>
<div class="box"></div>
```

```scss
.about {
	@include width(4);
	@include column();
}

.about {
	@include width(8);
	@include column();
	@include last();
}
```

> A diferença entre o exemplo anterior e esse é que no exemplo anterior adicionamos uma classe `.column` aos elementos que desejamos que se comportem como uma coluna e, nesse último exemplo, adicionamos o `@include column();` diretamente na classe do elemento que desejamos que se comporte como uma coluna.


## SASS

Essa pasta contém todos os arquivos *SASS* utilizados. A idéia é termos apenas **um arquivo CSS**, diminuindo assim o número de requisições.

### O funcionamento

O arquivo `sass/main.scss` importa todos os arquivos *SASS* e exporta em um único arquivo *CSS* minificado: `css/main.css`. Instruções [aqui](https://github.com/a2comunicacao/Grid-A2/wiki/SASS).


### Os arquivos

* **`base.scss`**
   * Declaração das *variáveis* e *mixins* utlizados no projeto e de classes auxiliares.
* **`font-awesome.scss`**
   * Fonte em formato de ícones. 
* **`grid.scss`**
   * Define todas as propriedades relacionadas ao grid.
* **`grid-functions.scss`**
   * Contém as funções que fazem o cálculo do grid ( *não é necessário editar esse arquivo* )
* **`icons.scss`**
   * Arquivo específico para as declarações de *sprite* do projeto
* **`layout.scss`**
   * Contém as declarações de *CSS* referentes ao layout do projeto, como cores, posição, etc.
* **`main.scss`**
   * Arquivo que reúne todos os arquivos *SASS*.
* **`navigation.scss`**
   * Contém as declarações referentes aos componentes de navegação, como *header*, *footer* e *menu*.
* **`normalize.scss`**
   * Arquivo que *reseta* algumas propriedades CSS, com o objetivo de se manter um padrão *crossbrowser*; 
* **`print.scss`**
   * Arquivo específico para impressão.
* **`typography.scss`**
   * Contém as declarações referentes à tipografia, links, listas e tabelas.

## CSS

Pasta com o arquivo *CSS* final exportado pelo *SASS*.

## JS

### Libs

#### jQuery

Biblioteca JS linkada no fim da página.

#### Modernizr

Biblioteca que auxilia na detecção de algumas propriedades *HTML5* e *CSS3*.

#### Respond

Versão minificada linkada no início da página (*polyfill* para min/max-width do CSS3 Media Queries para IE6-8 ).

### `scripts.js`

Arquivo JS '[pronto pra ser usado](http://img855.imageshack.us/img855/2449/coronel2.jpg)'.

## IN

### `estilos.php`

Links do arquivo *CSS*, dos scripts *Modernizr* e *Respond* e, da verificação mobile.

### `meta.php`

Arquivo que contém as chamadas das *Meta Tags* e do *Favicon*.

### `scripts.php`

Contém as chamada da biblioteca jQuery, do arquivo `scripts.js` e do código do *Google Analytics*.

### `mobile_detect.php`

Verificação mobile em *PHP* (instruções de como usar em breve).

### `header.php` e `footer.php`

Sugestão para arquivos referentes ao cabeçalho e rodapé do projeto.






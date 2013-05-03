# Grid A2

Template para auxiliar no **pontapé inicial** em um projeto web. Juntamos [alguns dos projetos](https://github.com/a2comunicacao/Grid-A2/wiki/Refer%C3%AAncias) que mais utilizávamos como referência e adaptamos para um modelo de desenvolvimento da A2.
Entenda a idéia [aqui](https://github.com/a2comunicacao/Grid-A2/wiki).

**Padrões são sempre bons**. Auxiliam no entendimento do código, principalmente numa fase posterior de manutenção. Por isso, seguimos um padrão de código. [Veja o guia](https://github.com/a2comunicacao/Grid-A2/blob/master/code-guide.md).

****

## Estrutura

* [HTML](https://github.com/a2comunicacao/Grid-A2#html) | index.php
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

Primeiro inserimos as configurações das colunas: *número*, *largura* e *espaço entre elas*.

```scss
/* Calculo grid
   ========================================================================== */
   /* Número de colunas */
   $columns: 12;
   /* Largura das colunas */
   $column-width: 60;
   /* Largura dos espaços entre as colunas */
   $gutter-width: 20;
```

Depois setamos a *largura máxima* do grid.

```css
/* Largura máximo do Grid */
.row { max-width: 960px; }

```

E.. pronto! O grid é calculado seguindo os valores inseridos.

### Marcação Padrão

Para criar um layout de duas colunas por exemplo, crie uma `.row` e adicione dentro dela o número de colunas conforme o grid com a classe `.*col`. Dentro de cada `.row` o número máximo de colunas deve ser o número de colunas do grid.

```html
<div class="row">
	<div class="fourcol">4 colunas</div>
	<div class="eightcol">8 colunas</div>
</div>
```
> No exemplo temos uma classe `.fourcol` ( *4 colunas* ) e uma classe `.eightcol` ( *8 colunas* ), totalizando 12 colunas e completando a `.row`.

### Deslocamento

Mova as colunas para a direita usando a classe `.offset-*`, onde o *** é o valor do deslocamento (em colunas). Por exemplo, a classe `.offset-four` desloca o elemento aplicado em 4 colunas.

Aqui também o número máximo de colunas deve ser o número de colunas do grid (contando os deslocamentos).

```html
<div class="row">
	<div class="fourcol">4 colunas</div>
	<div class="sixcol offset-two">6 colunas | 2 colunas descolamento</div>
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

Caso precise adicionar uma linha filha é só manter a marcação padrão: criar uma `.row` e adicionar dentro dela o número de colunas com a classe `.*col`, respeitando o número máximo de colunas do grid. 

```html
<div class="row">
	<div class="fourcol">4 colunas
		<!-- linha filha -->
		<div class="row">
			<div class="eightcol">8 colunas</div>
			<div class="fourcol">4 colunas</div>
		</div><!-- ##fim linha filha -->
	</div>
	<div class="eightcol">8 coluna</div>
</div>
```
> No exemplo temos uma classe `.fourcol` que possui uma `.row` filha. Esta por sua vez possui uma classe `.eightcol` ( *8 colunas* ) e uma `.fourcol ( *4 colunas* ) totalizando 12 colunas.

### Grid semântico

Podemos utilizar as classes acima, ou podemos utilizar algumas *features* que o *SASS* nos oferece em conjunto com as funções que calculam o grid, para tentarmos deixar o código mais semântico.

Se formos olhar o arquivo `grid.scss` que contém as declarações do grid, podemos observar dois *includes*: *column* e *push*.

```scss
/* Larguras grid
   ========================================================================== */
   .onecol { @include column(1); }
   .twocol { @include column(2); }
   .threecol { @include column(3); }

...

/* Offsets
  ========================================================================== */
  .offset-one { @include push(1); }
  .offset-two { @include push(2); }
  .offset-three { @include push(3); }
```

O que cada um faz é o seguinte:
* **column(x)**: renderiza o elemento com a largura de *x colunas* e com as propriedades específicas da coluna.
* **push(x)**:  renderiza o elemento com um espaçamento esquerdo de *x colunas*.

Com isso, uma marcação que antes era assim:

```html
<div class="sixcol">
	<div class="about"></div>
</div>
<div class="sixcol">
	<div class="box"></div>
</div>
```

... pode ficar assim:

```html
<div class="about"></div>
<div class="box"></div>
```

```scss
.about,
.box { @include column(6); }
```


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






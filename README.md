# Web Template

Template para auxiliar no 'pontapé inicial' em um projeto web. Utiliza como base o HTML5 Boilerplate e tem opções de grids responsivos e fixos. Para saber mais sobre o projeto [clique aqui](https://github.com/a2comunicacao/template-web/wiki/Layout-do-Grid). 

****

## Estrutura

* [HTML](https://github.com/a2comunicacao/template-web#html) | index.php
	* [CSS](https://github.com/a2comunicacao/template-web#css)
		* `normalize.css`
		* `main.css`
		* grids
	* [JS](https://github.com/a2comunicacao/template-web#js)
		* LIBS
			* jQuery
			* Modernizr
		* `scripts.js`
	* [IN](https://github.com/a2comunicacao/template-web#in)
		* `estilos.php`
		* `meta.php`
		* `scripts.php`
		* `header.php`
		* `footer.php`

## HTML

### Marcação Padrão

Para criar um layout de duas colunas por exemplo, crie uma `.row` e adicione dentro dela o número de colunas conforme o grid (12 ou 16 colunas) com a classe `.*col`. Dentro de cada `.row` o número máximo de colunas deve ser o número de colunas do grid.
Por fim, adicione a classe `.last` no último elemento.

```html
<div class="row">
	<div class="fourcol">4 colunas</div>
	<div class="eightcol last">8 colunas | último elemento</div>
</div>
```
> No exemplo temos uma classe `.fourcol` ( *4 colunas* ) e uma classe `.eightcol` ( *8 colunas* ), totalizando 12 colunas e completando a `.row`.

### Deslocamento

Mova as colunas para a direita usando a classe `.offset-*`, onde o * é o valor do deslocamento (em colunas). Por exemplo, a classe `.offset-four` desloca o elemento aplicado em 4 colunas.

Aqui também o número máximo de colunas deve ser o número de colunas do grid (contando os deslocamentos).

```html
<div class="row">
	<div class="fourcol">4 colunas</div>
	<div class="sixcol offset-two last">4 colunas | 4 colunas descolamento | último elemento</div>
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
			<div class="fourcol">4 colunas | Último elemento</div>
		</div><!-- ##fim linha filha -->
	</div>
	<div class="eightcol last">8 colunas | último elemento</div>
</div>
```
> No exemplo temos uma classe `.fourcol` que possui uma `.row` filha. Esta por sua vez possui uma classe `.eightcol` ( *8 colunas* ) e uma `.fourcol ( *4 colunas* ) totalizando 12 colunas.

## CSS

### `normalize.css`

Contém a base do arquivo original acrescido de algumas alterações a fim de manter um único arquivo de folha de estilos com a função de normalizar/padronizar os elementos. Esse arquivo também contém as classes auxiliares do HTML5 Boilerplate ([caso não conheça](https://github.com/h5bp/html5-boilerplate/blob/master/doc/css.md#common-helpers)). Por questão de perfomance já está minificado (arquivo original contém documentação inline).

### `main.css`

Folha de estilos '[pronta pra ser usada](http://img9.imageshack.us/img9/9097/coronell.jpg)'.

### grids

<table>
	<tr>
		<th>Arquivo CSS</th>
		<th>Grid</th>
		<th>Medida</th>
		<th>Largura</th>
	</tr>
	<tr>
		<td><code>grid-12-960-fixo.css</code></td>
		<td>Fixo</td>
		<td>Pixels</td>
		<td>960 pixels</td>
	</tr>
	<tr>
		<td><code>grid-12-960.css</code></td>
		<td>Responsivo</td>
		<td>Pixels</td>
		<td>960 pixels</td>
	</tr>
	<tr>
		<td><code>grid-12-1140.css</code></td>
		<td>Responsivo</td>
		<td>Pixels</td>
		<td>1140 pixels</td>
	</tr>
</table>

## JS

### jQuery 1.8.3

Versão minificada linkada no fim da página.

### Modernizr 2.6.2

Versão minificada linkada no início da página.

### Respond

Versão minificada linkada no início da página (polyfill para min/max-width CSS3 Media Queries para IE6-8 ).

### Google Analytics

Código padrão localizado no arquivo `/in/scripts.php`

### `scripts.js`

Arquivo JS '[pronto pra ser usado](http://img855.imageshack.us/img855/2449/coronel2.jpg)'.

## IN

### `estilos.php`

Links das folhas de estilo e dos scripts Modernizr e Respond.

### `meta.php`

Arquivo que contém as chamadas das Meta Tags e do Favicon.

### `scripts.php`

Contém a chamada da biblioteca jQuery, do arquivo `scripts.js` e do código do Google Analytics.

### `header.php` e `footer.php`

Sugestão para arquivos referentes ao cabeçalho e rodapé do projeto.


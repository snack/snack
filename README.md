# Web Template

Template para dar o 'pontapé inicial' em um projeto web com base no HTML5 Boilerplate e em grids responsivos.

****

## Estrutura

* index
	* CSS
		* `normalize.css`
		* `main.css`
		* grids
	* JS
		* LIBS
			* jQuery
			* Modernizr
		* `scripts.js`
	* IN
		* `estilos.php`
		* `meta.php`
		* `scripts.php`
		* `header.php`
		* `footer.php`

## CSS

### `normalize.css`

Contém a base do arquivo original acrescido de algumas alterações a fim de manter um único arquivo de folha de estilos com a função de normalizar/padronizar os elementos. Esse arquivo também contém as classes auxiliares do HTML5 Boilerplate ([caso não conheça](https://github.com/h5bp/html5-boilerplate/blob/master/doc/css.md#common-helpers)). Já minificado, por questão de perfomance (arquivo original contém documentação inline).

### `main.css`

Folha de estilos '[pronta pra ser usada](http://img9.imageshack.us/img9/9097/coronell.jpg)'.

### grids

<table>
	<tr>
		<th></th>
		<th>Grid</th>
		<th>Medida</th>
		<th>Largura</th>
	</tr>
	<tr>
		<th>`grid-960-fixo.css`</th>
		<td>Fixo</td>
		<td>Pixels</td>
		<td>960 pixels</td>
	</tr>
</table>

* 12 colunas
	* `grid-960-fixo.css` ( *Grid*: Fixo | *Medida*: Pixels | *Largura*: 960 pixels)
	* `grid-960.css`  ( *Grid*: Responsivo | *Medida*: Porcentagem | *Largura*: 960 pixels)
	* `grid-1140.css` ( *Grid*: Responsivo | *Medida*: Porcentagem | *Largura*: 1140 pixels)

## HTML Grid

Para criar um layout de duas colunas por exemplo, crie uma `.row` e adicione dentro dela o número de colunas conforme o grid (12 ou 16 colunas) com a classe `.Xcol`. Dentro de cada `.row` o número máximo de colunas deve ser o número de colunas do grid.
Por fim, adicione a classe `.last` no último elemento.

```html
<div class="row">
	<div class="fourcol">4 colunas</div>
	<div class="eightcol last">8 colunas | último elemento</div>
</div>
```

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


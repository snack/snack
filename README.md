# Web Template

Template para dar o 'pontapé inicial' em um projeto web com base no HTML5 Boilerplate.

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

### normalize.css

Contém a base do arquivo original acrescido de algumas alterações a fim de manter um único arquivo de folha de estilos com a função de normalizar/padronizar os elementos. Esse arquivo também contém as classes auxiliares do HTML5 Boilerplate ([caso não conheça](https://github.com/h5bp/html5-boilerplate/blob/master/doc/css.md#common-helpers)). Já minificado, por questão de perfomance (arquivo original contém documentação inline).

### main.css

Folha de estilos '[pronta pra ser usada](http://img9.imageshack.us/img9/9097/coronell.jpg)'.

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

Arquivo que contém as chamadas das Meta Tags, do Favicon e imagens de ícones.

### `scripts.php`

Contém a chamada da biblioteca jQuery, do arquivo `scripts.js` e do código do Google Analytics.

### `header.php` e `footer.php`


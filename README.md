# Web Template

Template para dar o 'pontapé inicial' em um projeto web com base no HTML5 Boilerplate.

## Estrutura

1. index
	1. CSS
		1. normalize
		2. main
		3. grids
	2. JS
		1. LIBS
			1. jQuery
			2. Modernizr
		2. setup.js
	3. IN
		1. estilos
		2. meta
		3. scripts
		4. header
		5. footer

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
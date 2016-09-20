![Snack](https://cloud.githubusercontent.com/assets/13695346/9314113/43eed556-44fd-11e5-844a-34f8e13b2863.png)

[:house:](../../../) » [Documentação](index.md) » HTML

# HTML

* [Roles](#roles)
* [Includes](#includes)
    * [`meta.php`](#metaphp)
    * [`estilos.php`](#estilosphp)
    * [`header.php`](#headerphp)
    * [`footer.php`](#footerphp)

## Roles

Alguns atributos **roles** já estão inseridos nos arquivos. São eles:

* **contentinfo** ==> `build/in/footer.php`
* **banner** ==> `build/in/header.php`
* **main** ==> `index.php`

## Includes

O Snack possui por padrão 4 **includes**. Todos eles ficam em: _`build/in`_. São eles: `meta.php`, `estilos.php`, `header.php` e `footer.php`.

### `meta.php`

É o arquivo onde ficam localizadas as meta tags bem como as chamadas para ícones (ex. favicon). Por padrão contém:

* Metas
    - description
    - keyword
    - viewport
* Ícones
    - favicon
    - apple-touch-icon
* Facebook
* TwitterCard

### `estilos.php`

Contém chamada para:

* Estilo CSS

```html
<!-- CSS -->
<link rel="stylesheet" href="build/css/main.min.css">
```
* Libs Modernizr e Respond (Necessária tarefa inicial do projeto `gulp`. [Leia aqui](index.md#gulp))

```html
<!-- Html5shiv / Respond -->
<!--[if lt IE 9]>
	<script src="build/js/libs/html5shiv-respond.min.js"></script>
<![endif]-->
```
* Snippet Google Analytics

```html
<script>
(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
e=o.createElement(i);r=o.getElementsByTagName(i)[0];
e.src='https://www.google-analytics.com/analytics.js';
r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
ga('create', 'UA-XXXX-Y', 'auto'); ga('require', 'displayfeatures'); ga('send', 'pageview');
</script>
```

### `header.php`

Arquivo padrão para cabeçalho do projeto.

### `footer.php`

Arquivo padrão para rodapé do projeto.

:point_right: Próximo: [JS](js.md)

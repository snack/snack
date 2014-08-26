![A2boilerplate][https://cloud.githubusercontent.com/assets/1345662/4002471/12af2f4c-296d-11e4-8c6d-ddee89d68c85.png]

[:house:](../../../) » [Documentação](index.md) » HTML

# HTML

* [Includes](#includes)
    * [`meta.php`](#meta.php)
    * [`estilos.php`](#estilos.php)
    * [`header.php`](#header.php)
    * [`footer.php`](#footer.php)

## Includes

O A2boilerplate possui por padrão 4 **includes**. Todos eles ficam em: _`build/in`_. São eles: `meta.php`, `estilos.php`, `header.php` e `footer.php`.

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
* Libs Modernizr e Respond (Necessária tarefa inicial do projeto `grunt init`. [Leia aqui](index.md#grunt))
* Snippet Google Analytics

### `header.php`

Arquivo padrão para cabeçalho do projeto.

### `footer.php`

Arquivo padrão para rodapé do projeto.
[Início](../../../) » [Documentação](index.md) » JS

# JS

## Libs

Bibliotecas padrões utilizados no projeto. Localizadas em: `js/libs/`.

### jQuery

Adicionada via _Bower_.

### Modernizr

O projeto utiliza uma versão customizada e já minificada da biblioteca. É linkada no `head` da página dentro do arquivo `in/estilos.php`.

Para detecção de uma propriedade ou atributo específico que não esteja nessa versão da biblioteca, você pode atualizar a versão usando o gerenciador de dependências Bower Ex:  `bower install modernizr#2.7.1 --save`

### Respond

Versão minificada linkada no início da página (*polyfill* para min/max-width do CSS3 Media Queries para IE6-8 ), você pode atualizar a versão usando o gerenciador de dependências Bower Ex:  `bower install respond#1.4.2 --save`

## Assets

### `analytics.js`

Código de rastreamento do _Google Analytics_.

### `scripts.js`

Arquivo JS [pronto pra ser usado](http://img855.imageshack.us/img855/2449/coronel2.jpg). Localizado em `js/assets/scripts.js`.

## `scripts.min.js`

Arquivo gerado pela concatenação/minificação da lib _jQuery_ e dos arquivos `assets/scripts.js` e `assets/analytics.js`.



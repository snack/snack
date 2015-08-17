![A2boilerplate](https://cloud.githubusercontent.com/assets/1345662/4002471/12af2f4c-296d-11e4-8c6d-ddee89d68c85.png)

[:house:](../../../) » [Documentação](index.md) » CSS

# CSS

* [SASS](#sass)
* [Mobile first](#mobile-first)
* [Design Atômico](#design-at%C3%B4mico)
    * [Os arquivos](#os-arquivos)
* [Mixin e variáveis](#mixins-e-vari%C3%A1veis)
    * [Mixins](#mixins)
    * [Variáveis](#vari%C3%A1veis)
        - [Definindo o grid](#definindo-o-grid)
* [Usando o grid](#usando-o-grid)
    * [Marcação padrão](#marca%C3%A7%C3%A3o-padr%C3%A3o)
    * [Deslocamento](#deslocamento)
    * [Centralizando](#centralizando)
    * [Linha filha](#linha-filha)
    * [Grid semântico](#grid-sem%C3%A2ntico)
* [Font icons](#font-icons)

## SASS

O projeto utiliza [SASS](http://sass-lang.com/) que é um pré-processador de CSS. Você precisa tê-lo instalado no seu computador para poder rodá-lo (depende também do _Ruby_). Saiba como instalar na [documentação do SASS](http://sass-lang.com/install).

Todos os arquivos ficam localizados em _`assets/scss`_.

## Mobile first

Aplicamos o conceito de _mobile first_ nos arquivos de estilo.

```scss
@media only screen {
}

/*
 * CSS for devices with resolution bigger than breakpoint
*/

@media only screen and (min-width: $breakpoint) {
}
```

A variável breakpoint é definida no arquivo `variables.scss`. Claro que o conceito de _Mobile first_ **não se resume só a isso**; coisas essenciais como conteúdo por exemplo, são primordiais nessa questão.

## Design Atômico

Outro conceito aplicado foi o [Design Atômico](http://bradfrostweb.com/blog/post/atomic-web-design/) com alguns adaptações que achamos legais. Dividimos as camadas de estilo entre **Átomos**, **Moléculas** e **Organismos**; adicionamos a camada **Base** com as configurações que achamos ser a base de estilo do projeto.

### Os arquivos

* **Base**
    * `normalize.scss` ==> Normaliza diferenças de renderizações entre os navegadores ([Link](http://necolas.github.com/normalize.css/) do projeto)
    * `variables.scss` ==> Declaração das variáveis (grid, cores e demais que poderão ser utilizadas)
    * `mixins.scss` ==> Declaração de mixins padrões e, onde deverão ser colocados novos mixins
    * `base.scss` ==> Declaração de propriedades básicas de estilo e classes auxiliares
* **Átomos** (_atoms_)
    * `grid.scss`
    * `grid-functions.scss` ==> Funções para cálculo do grid
    * `font-awesome.scss`
    * `typography.scss`
    * `buttons.scss`
    * `inputs.scss`
    * `lists.scss`
    * `tables.scss`
* **Moléculas** (_molecules_)
    * `forms.scss`
    * `navigation.scss` ==> Declarações relacionadas a elementos de navegação (cabeçalho, rodapé, menus, ...)
    * `icons.scss` ==> Declaração de _sprites_
* **Organismos** (_organisms_)
    * `layout.scss`
    * `print.scss`

## Mixins e variáveis

Se você já ouviu falar de pré-processadores, provavelmente conhece sobre variáveis e mixins. Utilizamos alguns padrões no A2boilerplate.

### Mixins

Declaramos alguns mixins padrões para utilização. Ficam declarados em: _`assets/scss/mixins.scss`_. Um exemplo abaixo:

```scss
/*  Transition
    ========================================================================== */
    @mixin transition($parameters...) {
        -webkit-transition: $parameters;
           -moz-transition: $parameters;
             -o-transition: $parameters;
            -ms-transition: $parameters;
                transition: $parameters;
    }
```

### Variáveis

Ficam declaradas em _`assets/scss/base/variables.scss`_. Basicamente definimos duas categorias de variáveis: uma relacionada ao **grid** e outra relacionada às **cores**.

```scss
/*  ==========================================================================
    Colors
    ========================================================================== */
    $color-default:     #eee;
    $color-primary:     #1972D1;
    $color-secondary:   #5CB85C;
    $color-terciary:    #D9534F;
```

#### Definindo o grid

A idéia básica do grid é que:

- cada *linha* deve possuir **x** colunas, onde **x** é o número definido  em `$total-columns`;
- o número máximo de colunas em cada *linha* deve ser igual ao valor definido em `$total-columns`;

As variáveis abaixo definem o grid do projeto. Por padrão, ele tem **940 pixels** de largura, com **12** colunas de **60 pixels** cada e **20 pixels** de espaço entre elas.

```scss
/*  ==========================================================================
    Grid
    ========================================================================== */
    $total-columns : 12;    // Total of columns
    $column-width  : 60px;  // Columns width
    $gutter-width  : 20px;  // Space between the columns
    $breath        : 20px;  // Option of lateral space for grid
    $breakpoint    : 768px; // Breakpoint for small devices
    $space         : 25px;  // Vertical space
```

* **`$total-columns`** ==> número total de colunas que seu grid vai ter.
* **`$column-width`** ==> largura em _pixels_ de cada coluna.
* **`$gutter-width`** ==> largura em _pixels_ do espaço entre cada coluna.
* **`$breath`** ==> opção de espaço lateral no grid.

:exclamation: **Importante** ==> É obrigatório que as medidas se encaixem no grid, ou seja, tendo por base as configurações acima, teríamos o seguinte:

(**`$total-columns`** * **`$column-width`**) + ( (**`$total-columns`** - 1) *  **`$gutter-width`**) = **`$grid-with`**

(12 * 60) + ( (12 - 1) * 20 ) = 940 ==> :heavy_check_mark:

Essa é uma primeira idéia para o cálculo do grid. Vamos [melhorando aos poucos](../README.md#atualiza%C3%A7%C3%A3o).

![Grid](https://cloud.githubusercontent.com/assets/1345662/4016961/e25dee40-2a3a-11e4-9c3a-209b255dfe98.png)

:grey_exclamation: Vale ressaltar, que optamos por separar as declarações de estilo e, **todas** as informações relacionadas ao **grid**, como largura de elementos e definição de colunas (como vai ser visto no próximo tópico), devem ser inseridas no arquivo `grid.scss`.

## Usando o grid

### Marcação Padrão

Abaixo vamos criar um layout com duas colunas.

```html
<div class="row">
    <div class="col-4">4 colunas</div>
    <div class="col-8 last">8 colunas</div>
</div>
```

> No exemplo, temos uma classe `.col-4` ( *4 colunas* ) e uma classe `.col-8` ( *8 colunas* ), totalizando 12 colunas.

### Deslocamento

Mova as colunas para a direita usando a classe `.offset-x`, onde o **x** é o valor do deslocamento (em colunas). Por exemplo, a classe `.offset-4` desloca um elemento em 4 colunas.

```html
<div class="row">
    <div class="col-4">4 colunas</div>
    <div class="col-6 offset-2 last">6 colunas | 2 colunas descolamento</div>
</div>
```

> No exemplo, temos uma classe `.col-4` ( *4 colunas* ) e uma classe `.col-6` ( *6 colunas* ) com `.offset-2` ( *2 colunas* ), totalizando 12 colunas.

### Centralizando

Centralize o elemento, independente da quantidade de colunas, aplicando a classe `.centered`.

```html
<div class="row">
    <div class="col-5 centered">5 colunas (centralizado)</div>
</div>
```

### Linha filha

Caso precise adicionar uma linha filha, é só manter a marcação padrão e respeitar o número de colunas do grid.

```html
<div class="row">
    <div class="col-4">4 colunas
        <!-- linha filha -->
        <div class="row">
            <div class="col-8">8 colunas</div>
            <div class="col-4 last">4 colunas</div>
        </div><!-- ##fim linha filha -->
    </div>
    <div class="eightcol last">8 coluna</div>
</div>
```
> No exemplo, temos uma classe `.col-4` que possui uma `.row` filha. Esta por sua vez possui uma classe `.col-8` ( *8 colunas* ) e uma `.col-4` ( *4 colunas* ) totalizando 12 colunas.

### Grid semântico

É possível deixarmos nosso código mais semântico, com a utilização de algumas *features* que o *SASS* nos oferece em conjunto com as funções que calculam o grid.

- *column()*: define o elemento como uma coluna, aplicando as propriedades específicas;
- *width(n)*: define a largura do elemento com **n** colunas;
- *last()*: se relaciona ao último elemento (coluna) de cada linha do grid, zerando a margem direita do mesmo;
- *push(n)*: define o deslocamento esquerdo do elemento com **n** colunas.

Com isso, uma marcação que antes era assim:

```html
<div class="col-4">
    <div class="about"></div>
</div>
<div class="col-8 last">
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
    @extend %last;
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
    @extend %column;
}

.about {
    @include width(8);
    @extend %column;
    @extend %last;
}
```

> A diferença entre o exemplo anterior e esse é que em um adicionamos uma classe `.column` aos elementos que desejamos que se comportem como uma coluna e, nesse último, adicionamos o `@extend %column;` diretamente na classe do elemento.

## Font icons

Por padrão utilizamos o [Font Awesome](http://fortawesome.github.io/Font-Awesome/) no projeto. Ainda fizemos do jeito antigo e inserimos manualmente as fontes e o arquivo de estilo responsáveis mas para as próximas versões a idéia é isso ser gerenciado via *Bower*.


Por padrão utilizamos o [Font Awesome](http://fortawesome.github.io/Font-Awesome/) no projeto. Ele esta dentro dos componente do bower, então quando roda a tarefa `gulp` ele copia automáticamente os arquivos para pasta _BUILD_.

Se for necessario atualizar, rodar o comando do _Bower_ primeiro `bower install font-awesome --save-dev`, após isso rodar a tarefa `gulp` e ele copia a nova versão para o _BUILD_


:point_right: Próximo: [HTML](html.md)

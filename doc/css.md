![Snack](https://cloud.githubusercontent.com/assets/13695346/9314113/43eed556-44fd-11e5-844a-34f8e13b2863.png)

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
/*
 * CSS for all devices
 */

@media only screen {

}

/*
 * CSS for Extra small devices (phones, less than 768px)
 */

@media (max-width: $breakpoint) {

}

/*
 * CSS for Small devices (tablets, 768px and up)
 */

@media (min-width: $breakpoint) {

}

/*
 * CSS for Medium devices (desktops, 992px and up)
 */

@media (min-width: $breakpoint-medium) {

}

/*
 * CSS for Large devices (large desktops, 1200px and up)
 */

@media (min-width: $breakpoint-large) {

}

```
## Breakpoints

As variáveis do breakpoint são definidas no arquivo `variables.scss`. Claro que o conceito de _Mobile first_ **não se resume só a isso**; coisas essenciais como conteúdo por exemplo, são primordiais nessa questão.

```scss
/*  Breakpoints
    ========================================================================== */
    $breakpoint         : 768px;  // Breakpoint for small devices (Phones and Tablets)
    $breakpoint-medium  : 992px;  // Breakpoint for medium devices (Desktops)
    $breakpoint-large   : 1200px; // Breakpoint for large devices (Desktops)

```


## Design Atômico

Outro conceito aplicado foi o [Design Atômico](http://bradfrostweb.com/blog/post/atomic-web-design/) com alguns adaptações que achamos legais. Dividimos as camadas de estilo entre **Átomos**, **Moléculas** e **Organismos**;

### Os arquivos

* **Átomos** (_atoms_)
    * `normalize.scss` ==> Normaliza diferenças de renderizações entre os navegadores ([Link](http://necolas.github.com/normalize.css/) do projeto)
    * `variables.scss` ==> Declaração das variáveis (grid, cores e demais que poderão ser utilizadas)
    * `mixins.scss` ==> Declaração de mixins padrões e, onde deverão ser colocados novos mixins
    * `base.scss` ==> Declaração de propriedades básicas de estilo e classes auxiliares
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
    * `icons.mustache` ==> Template que gera o _sprites_
    * `icons.scss` ==> Arquivo gerado automáticamente a partir do _icons.mustache_
* **Organismos** (_organisms_)
    * `layout.scss`
    * `print.scss`

> Isso não é uma regra, é uma forma que nós encontramos de dividir melhor os arquivos, tornando o trabalho mais fácil. O Design Atômico não se resume a só isso, e também você pode estender essa estrutura para (Templates, Pages, ...)

## Mixins e variáveis

Se você já ouviu falar de pré-processadores, provavelmente conhece sobre variáveis e mixins. Utilizamos alguns padrões no Snack.

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

Ficam declaradas em _`assets/scss/atoms/variables.scss`_. Basicamente definimos duas categorias de variáveis: uma relacionada ao **grid** e outra relacionada às **cores**.

```scss
/*  Colors
    ========================================================================== */

    /* Default */
    $color-gray: #666;
    $color-gray-light: #CCC;
    $color-gray-lightest: #f9f9f9;
    $color-gray-dark: #333;

    $color-primary: #2ca8ff;
    $color-primary-light: #d9edf7;
    $color-warning: #ffa92c;
    $color-warning-light: #f7ecbe;
    $color-success: #1abc9c;
    $color-success-light: #c6eed7;
    $color-danger: #e74c3c;
    $color-danger-light: #f4ceca;
```

#### Definindo o grid

A idéia básica do grid é que:

- cada *linha* deve possuir **x** colunas, onde **x** é o número definido  em `$total-columns`;
- o número máximo de colunas em cada *linha* deve ser igual ao valor definido em `$total-columns`;

As variáveis abaixo definem o grid do projeto. Por padrão, ele tem **940 pixels** de largura, com **12** colunas de **60 pixels** cada e **20 pixels** de espaço entre elas.

```scss
/*  Grid
    ========================================================================== */
    $total-columns : 12; // Total of columns
    $column-width  : 85px; // Columns width
    $gutter-width  : 20px; // Space between the columns
    $breath        : 20px; // Option of lateral space for grid
    $space         : 25px; // Vertical space
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

Por padrão utilizamos o [Font Awesome](http://fortawesome.github.io/Font-Awesome/) no projeto. Ele esta dentro dos componente do bower, então quando roda a tarefa `gulp` ele copia automáticamente os arquivos para pasta _BUILD_.

Se for necessario atualizar, rodar o comando do _Bower_ primeiro `bower install font-awesome --save-dev`, após isso rodar a tarefa `gulp` e ele copia a nova versão para o _BUILD_


:point_right: Próximo: [HTML](html.md)

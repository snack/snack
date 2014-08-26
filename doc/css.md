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

A variável breakpoint é definida no arquivo _`variables.scss`_. Claro que o conceito de _Mobile first_ **não se resume só a isso**; coisas essenciais como conteúdo por exemplo, são primordiais nessa questão.

## Design Atômico

Outro conceito aplicado foi o [Design Atômico](http://bradfrostweb.com/blog/post/atomic-web-design/) com alguns adaptações que achamos legais. Dividimos as camadas de estilo entre _Átomos_ _Moléculas_ e _Organismos_; adicionamos a camada _Base_ com as configurações que achamos ser a base de estilo do projeto.

### Os arquivos

* **Base**
    * normalize | Normaliza diferenças de renderizações entre os navegadores ([Link](http://necolas.github.com/normalize.css/) do projeto)
    * variables | Declaração das variáveis (grid, cores e demais que poderão ser utilizadas)
    * mixins | Declaração de mixins padrões e, onde deverão ser colocados novos mixins
    * base | Declaração de propriedades básicas de estilo e classes auxiliares
* **Átomos** (_atoms_)
    * grid
    * grid-functions | Funções para cálculo do grid
    * font-awesome
    * typography
    * buttons
    * inputs
    * lists
    * tables
* **Moléculas** (_molecules_)
    * forms
    * navigation | Declarações relacionadas a elementos de navegação (cabeçalho, rodapé, menus, ...)
    * icons | Declaração de _sprites_
* **Organismos** (_organisms_)
    * layout
    * print

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
    $total-columns   : 12; // Total of columns
    $column-width    : 60px; // Columns width
    $gutter-width    : 20px; // Space between the columns
    $grid-width      : 940px; // Width of the grid 
    $breath         : 20px; // Option of lateral space for grid
    $grid-full       : $gridWidth + $breath + $breath; // Grid width with lateral space
    $breakpoint     : 768px; // Breakpoint for small devices
    $space          : 25px; // Vertical space
```

* **`$total-columns`** ==> número total de colunas que seu grid vai ter.
* **`$column-width`** ==> largura em _pixels_ de cada coluna.
* **`$gutter-width`** ==> largura em _pixels_ do espaço entre cada coluna.
* **`$grid-with`** ==> largura total do grid em _pixels_.
* **`$breath`** ==> opção de espaço lateral no grid.
* **`$grid-full`** ==> apenas adiciona os _espaços laterais_ setados na variável anterior para uma nova largura do grid.

:exclamation: **Importante** ==> É obrigatório que as medidas se encaixem no grid, ou seja, tendo por base as configurações acima, teríamos o seguinte:

(**`$total-columns`** * **`$column-width`**) + ( (**`$total-columns`** - 1) *  **`$gutter-width`**) = **`$grid-with`**

(12 * 60) + ( (12 - 1) * 20 ) = 940 ==> :heavy_check_mark:

Essa é uma primeira idéia para o cálculo do grid. Vamos [melhorando aos poucos](../README.md#atualiza%C3%A7%C3%A3o).

![Grid](https://cloud.githubusercontent.com/assets/1345662/4016961/e25dee40-2a3a-11e4-9c3a-209b255dfe98.png)

## Usando o grid

### Marcação Padrão

Abaixo vamos criar um layout com duas colunas.

```html
<div class="row">
    <div class="fourcol">4 colunas</div>
    <div class="eightcol last">8 colunas</div>
</div>
```

> No exemplo, temos uma classe `.fourcol` ( *4 colunas* ) e uma classe `.eightcol` ( *8 colunas* ), totalizando 12 colunas.

### Deslocamento

Mova as colunas para a direita usando a classe `.offset-x`, onde o **x** é o valor do deslocamento (em colunas). Por exemplo, a classe `.offset-four` desloca um elemento em 4 colunas.

```html
<div class="row">
    <div class="fourcol">4 colunas</div>
    <div class="sixcol offset-two last">6 colunas | 2 colunas descolamento</div>
</div>
```

> No exemplo, temos uma classe `.fourcol` ( *4 colunas* ) e uma classe `.sixcol` ( *6 colunas* ) com `.offset-two` ( *2 colunas* ), totalizando 12 colunas.

### Centralizando

Centralize o elemento, independente da quantidade de colunas, aplicando a classe `.centered`.

```html
<div class="row">
    <div class="fivecol centered">5 colunas (centralizado)</div>
</div>
```

### Linha filha

Caso precise adicionar uma linha filha, é só manter a marcação padrão e respeitar o número de colunas do grid.

```html
<div class="row">
    <div class="fourcol">4 colunas
        <!-- linha filha -->
        <div class="row">
            <div class="eightcol">8 colunas</div>
            <div class="fourcol last">4 colunas</div>
        </div><!-- ##fim linha filha -->
    </div>
    <div class="eightcol last">8 coluna</div>
</div>
```
> No exemplo, temos uma classe `.fourcol` que possui uma `.row` filha. Esta por sua vez possui uma classe `.eightcol` ( *8 colunas* ) e uma `.fourcol ( *4 colunas* ) totalizando 12 colunas.

### Grid semântico

É possível deixarmos nosso código mais semântico, com a utilização de algumas *features* que o *SASS* nos oferece em conjunto com as funções que calculam o grid.

Se formos olhar o arquivo `grid.scss` que contém as declarações do grid, podemos observar quatro *includes*:

- *column()*: define o elemento como uma coluna, aplicando as propriedades específicas;
- *width(n)*: define a largura do elemento com **n** colunas;
- *last()*: se relaciona ao último elemento (coluna) de cada linha do grid, zerando a margem direita do mesmo;
- *push(n)*: define o deslocamento esquerdo do elemento com **n** colunas.

Com isso, uma marcação que antes era assim:

```html
<div class="fourcol">
    <div class="about"></div>
</div>
<div class="eightcol last">
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
    @include last();
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
    @include column();
}

.about {
    @include width(8);
    @include column();
    @include last();
}
```

> A diferença entre o exemplo anterior e esse é que em um adicionamos uma classe `.column` aos elementos que desejamos que se comportem como uma coluna e, nesse último, adicionamos o `@include column();` diretamente na classe do elemento..

:point_right: Próximo: [HTML](html.md)
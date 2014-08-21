![A2boilerplate](https://cloud.githubusercontent.com/assets/1345662/4002471/12af2f4c-296d-11e4-8c6d-ddee89d68c85.png)

[:house:](../../../) » [Documentação](index.md) » HTML

# HTML

* [O grid](#o-grid)
* [A idéia](#a-idia)
* [Marcação Padrão](#marcao-padro)
* [Deslocamento](#deslocamento)
* [Centralizando](#centralizando)
* [Linha filha](#linha-filha)
* [Grid semântico](#grid-semntico)

## O grid

Nos arquivos *SASS* existe um arquivo chamado `variables.scss`. É nele que inserimos as configurações do grid.

```scss
/*  ==========================================================================
    Variables
    ========================================================================== */

    /*  Grid
        ========================================================================== */
        $gridWidth      : 960px;
        $totalColumns   : 12;
        $spaceColumns   : 10px;
        $breakpoint     : 768px;
```

- *$gridWidth*: largura máxima do grid;
- *$totalColumns*: número de colunas do grid;
- *$spaceColumns*: espaço entre as colunas;
- *$breakpoint*: breakpoint básico.

E.. pronto! O grid é calculado seguindo os valores inseridos.

## A Idéia

Entendendo a marcação:

- cada *linha* deve possuir **x** colunas, onde **x** é o número definido  em `$totalColumns`;
- o número máximo de colunas em cada *linha* deve ser igual ao valor definido em `$totalColumns`;

### Marcação Padrão

Para criar um layout de duas colunas por exemplo, precisamos criar uma `.row` e adicionar dentro dela o número de colunas conforme definido na variável `$totalColumns`. Cada coluna deve ter a classe `.xcol`, onde **x** é o número de colunas referente à largura do elemento.

```html
<div class="row">
    <div class="fourcol">4 colunas</div>
    <div class="eightcol last">8 colunas</div>
</div>
```
> No exemplo, temos uma classe `.fourcol` ( *4 colunas* ) e uma classe `.eightcol` ( *8 colunas* ), totalizando 12 colunas.

## Deslocamento

Mova as colunas para a direita usando a classe `.offset-x`, onde o **x** é o valor do deslocamento (em colunas). Por exemplo, a classe `.offset-four` desloca um elemento em 4 colunas.

```html
<div class="row">
    <div class="fourcol">4 colunas</div>
    <div class="sixcol offset-two last">6 colunas | 2 colunas descolamento</div>
</div>
```

> No exemplo, temos uma classe `.fourcol` ( *4 colunas* ) e uma classe `.sixcol` ( *6 colunas* ) com `.offset-two` ( *2 colunas* ), totalizando 12 colunas.

## Centralizando

Centralize o elemento, independente da quantidade de colunas, aplicando a classe `.centered`.

```html
<div class="row">
    <div class="fivecol centered">5 colunas (Centralizado)</div>
</div>
```

## Linha filha

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

## Grid semântico

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

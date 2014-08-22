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
        - [Grid](#grid)

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

#### Grid

As variáveis abaixo definem o grid do projeto. Por padrão, ele tem **940 pixels** de largura, com **12** colunas de **60 pixels** cada e **20 pixels** de espaço entre elas.

```scss
/*  ==========================================================================
    Grid
    ========================================================================== */
    $totalColumns   : 12; // Total of columns
    $columnWidth    : 60px; // Columns width
    $gutterWidth    : 20px; // Space between the columns
    $gridWidth      : 940px; // Width of the grid 
    $breath         : 20px; // Option of lateral space for grid
    $gridFull       : $gridWidth + $breath + $breath; // Grid width with lateral space
    $breakpoint     : 768px; // Breakpoint for small devices
    $space          : 25px; // Vertical space
```

**`$totalColumns`** ==> número total de colunas que seu grid vai ter.
**`$columnWidth`** ==> largura em _pixels_ de cada coluna.
**`$gutterWidth`** ==> largura em _pixels_ do espaço entre cada coluna.
**`$gridWith`** ==> largura total do grid em _pixels_.
**`$breath`** ==> opção de espaço lateral no grid.
**`$gridFull`** ==> apenas adiciona os _espaços laterais_ setados na variável anterior para uma nova largura do grid.

:exclamation: **Importante** ==> É obrigatório que as medidas se encaixem no grid, ou seja, tendo por base as configurações acima, teríamos o seguinte:

(**`$totalColumns`** * **`$columnWidth`**) + ( (**`$totalColumns`** - 1) *  **`$gutterWidth`**) = **`$gridWith`**

(12 * 60) + ( (12 - 1) * 20 ) = 940 ==> :heavy_check_mark:

Essa é uma primeira idéia para o cálculo do grid. Vamos [melhorando aos poucos](../../#atualiza%C3%A7%C3%A3o).
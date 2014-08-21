![A2boilerplate](https://cloud.githubusercontent.com/assets/1345662/4002471/12af2f4c-296d-11e4-8c6d-ddee89d68c85.png)

[:house:](../../../) » [Documentação](index.md) » CSS

# CSS

* [SASS](#sass)
* [Mobile first](#mobile-first)
* [Design Atômico](#design-at%C3%B4mico)
    * [Os arquivos](#os-arquivos)
* [Como funciona](#como-funciona)

## SASS

O projeto utiliza [SASS](http://sass-lang.com/) que é um pré-processador de CSS. Você precisa tê-lo instalado no seu computador para poder rodá-lo (depende também do _Ruby_). Saiba como instalar na [documentação do SASS](http://sass-lang.com/install).

Todos os arquivos ficam localizados em `assets/scss`

## Design Atômico

Aplicamos o conceito de [Design Atômico](http://bradfrostweb.com/blog/post/atomic-web-design/) com alguns toques da casa. Dividimos as camadas de estilo entre _Átomos_ _Moléculas_ e _Organismos_; adicionamos a camada _Base_ com as configurações que achamos ser a base de estilo do projeto.

### Os arquivos

* Base
    * normalize | Normaliza diferenças de renderizações entre os navegadores ([Link](http://necolas.github.com/normalize.css/) do projeto)
    * variables | Declaração das variáveis (grid, cores e demais que poderão ser utilizadas)
    * mixins | Declaração de mixins padrões e, onde deverão ser colocados novos mixins
    * base | Declaração de propriedades básicas de estilo e classes auxiliares
* Átomos (_atoms_)
    * grid
    * grid-functions | Funções para cálculo do grid
    * font-awesome
    * typography
    * buttons
    * inputs
    * lists
    * tables
* Moléculas (_molecules_)
    * forms
    * navigation | Declarações relacionadas a elementos de navegação (cabeçalho, rodapé, menus, ...)
    * icons | Declaração de _sprites_
* Organismos (_organisms_)
    * layout
    * print

## Mixins e variáveis

Se você já ouviu falar de pré-processadores, provavelmente conhece sobre variáveis e mixins. Utilizamos alguns padrões no A2boilerplate.

### Mixins

Declaramos alguns mixins padrões para utilização. Ficam declarados em: `assets/scss/mixins.scss`. Um exemplo abaixo:

```scss
*   Transition
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

Ficam declaradas em `assets/scss/base/variables.scss`. Basicamente definimos duas categorias de variáveis: uma relacionada ao **grid** e outra relacionada às **cores**.

```scss
/*  ==========================================================================
    Colors
    ========================================================================== */
    $color-default:     #eee;
    $color-primary:     #1972D1;
    $color-secondary:   #5CB85C;
    $color-terciary:    #D9534F;
```

#### O grid

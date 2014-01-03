[Início](../../../) » [Documentação](index.md) » CSS

# CSS

* [SASS](#sass)
* [Design Atômico](#design-atmico)
* [Arquivos](#arquivos)

## SASS

O projeto utiliza o [SASS](http://sass-lang.com/) que é um pré-processador de CSS. Você precisa tê-lo instalado no seu computador para poder rodá-lo (depende também do _Ruby_). Saiba como instalar na [documentação do SASS](http://sass-lang.com/install).

## Design Atômico

Aplicando o conceito de [Design Atômico](http://bradfrostweb.com/blog/post/atomic-web-design/), dividimos as camadas de estilo entre _Átomos_ _Moléculas_ e _Organismos_. Adicionamos a camada _Base_ com as configurações base de estilo do projeto.

### Os arquivos

* Base
    * normalize | Normaliza diferenças de renderizações entre os navegadores ([Link](http://necolas.github.com/normalize.css/) do projeto)
    * variables | Declaração das variáveis (grid, cores e demais que poderão ser utilizadas)
    * mixins | Declaração de alguns mixins padrões e, onde deverão ser colocados novos mixins
    * base | Declaração de propriedades básicas de estilo e classes auxiliares
* Átomos (_atoms_)
    * grid
    * font-awesome | Fonte em formato de ícones
    * typography
    * buttons
    * inputs
    * lists
    * tables
* Moléculas (_molecules)
    * forms
    * navigation | Declaração de propriedades de estilos dos menus de navegação, cabeçalho e rodapé
    * icons | Declaração de _sprites_
* Organismos (_organisms_)
    * layout
    * print

## O funcionamento

Nunca mexeu com pré-processadores de CSS? Não existe muito segredo. Ele te possibilita a criação de variáveis e funções evitando você de ter que digitar o mesmo código de cor ou o snippet de _gradient-color_ com todos aqueles prefixos várias vezes.

O arquivo `css/sass/main.scss` importa todos os arquivos *SASS* e exporta em um único arquivo *CSS* minificado: `css/main.css`.

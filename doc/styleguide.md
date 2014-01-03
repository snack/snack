[Início](../../../) » [Documentação](index.md) » Guia de Estilo

# Guia de Estilo

Durante o desenvolvimento de diversos projetos, surgiu a necessidade da criação de um guia de Estilos. A idéia era mantê-lo dentro do projeto, podendo ele ser utilizado ou não, sem interferir em nada.

Com a ajuda do [Willian](https://twitter.com/willcampideli) desenvolvemos uma primeira versão utilizando [Twig](http://twig.sensiolabs.org/). O Guia, ainda está em sua primeira versão e já temos um *roadmap* de pontos a serem melhorados.

## Como funciona?

O Guia de Estilos fica dentro da pasta `styleguide` na raiz do projeto. Caso você não tenha interesse em utilizá-lo é só apagar a pasta.

Dentro da pasta do guia, excluindo as pastas *assets* e *lib*, as demais são relacionadas à *categorias* de módulos do Guia de Estilos.

Se você sabe um pouco de Twig, fique a vontade para estilizar da maneira que quiser. Dentro da pasta `assets` estão os arquivos *CSS* e *JS* e, na pasta `lib/layout` estão os templates utilizadas no Guia.

A adição de uma nova categoria é manual. Você precisa:

1. Duplicar a pasta `botoes` (dê preferência por duplicar essa pasta, pois as demais pastas - cores, grid e layout - por serem bem específicas, possuem estruturas diferentes)
2. Renomear a pasta com o nome que desejar (vale lembrar que o que você colocar aqui é o que vai aparecer na *url*)
3. Dentro da pasta, abrir o arquivo index e renomear os seguintes itens:
    * $container['module'] = "Nome do título da categoria (Ex. Botões, Formulários, etc)";
    * $container['body_class'] = "Classe aplicada ao *body* da página (Por padrão utilizamos nomes em inglês. Ex. buttons, forms, etc)";
4. Abrir o arquivo de menu `lib/layout/menu.html.twig`
5. Inserir o novo item na lista editando o link e texto de acordo com o nova categoria criada
6. Vale ressaltar, que a classe do item criado precisa ser igual ao atributo *body_class* editado no item _3_. (Ex. se a classe escolhida foi *buttons*, o item do menu precisa ter a classe *styleguide-menu-buttons*)

Para começar a inserir módulos numa categoria, entre na pasta `modules` de cada categoria e duplique ou crie novos arquivos. A estrutura de cada módulo é a seguinte:

```html
<h2 class="styleguide-title-module">Título do módulo</h2>
<p>Descrição do módulo</p>

<!-- code -->
<div class="styleguide-demo">
<p>Aqui vai o código do módulo!</p>
</div>

<pre class="styleguide-code"><code data-language="html"></code></pre>
```

Para essa primeira versão, toda a adição de categorias e módulos ainda é manual. E, apesar de ter atendido bem aos requisitos, já temos melhorias na fila de produção.


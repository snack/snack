![Snack](https://cloud.githubusercontent.com/assets/13695346/9314113/43eed556-44fd-11e5-844a-34f8e13b2863.png)

[:house:](../../../) » [Documentação](index.md) » Guia de Estilo

# Guia de Estilo

Durante o desenvolvimento de alguns projetos, surgiu a necessidade da criação de um Guia de Estilo. A idéia era mantê-lo dentro do projeto, podendo ele ser utilizado ou não, sem interferir em nada.

## Como funciona?

O Guia de Estilos fica dentro da pasta `styleguide` na raiz do projeto. Caso você não tenha interesse em utilizá-lo é só apagar a pasta *styleguide* na raiz do projeto.

## Criando um novo módulo

Por enquanto a adição de um novo módulo ainda é manual mas agora nessa nova versão usando AngularJS se torna muito mais fácil que na versão antiga usando PHP(Twig) [#24](https://github.com/a2comunicacao/A2boilerplate/issues/24).

Para criar um novo módulo você pode seguir os passos abaixo, nesse exemplo iremos criar o módulo **tipografia**:

* Duplique a pasta `botoes` (dê preferência por duplicar essa pasta, pois as demais pastas - cores, grid e layout - por serem bem específicas, possuem estruturas diferentes)
* Renomeie a pasta com o novo nome de categoria que desejar (vale lembrar que o que você colocar aqui é o que vai aparecer na *url*, no nosso caso fica */styleguide/tipografia*)
* Dentro da pasta, abra o arquivo `index.php` e faça algumas alterações:

```php
    # Antes ( /styleguide/botoes/index.php )

    $container['module'] = "Botões";
    $container['body_class'] = "buttons";
    $buttons = $yaml->parse(file_get_contents(__DIR__.'/buttons.yml'));

    echo $twig->render('/buttons.html.twig', array('buttons' => $buttons, 'container' => $container));

    # Depois ( /styleguide/tipografia/index.php )

    $container['module'] = "Tipografia"; # Aqui inserimos o título da categoria
    $container['body_class'] = "typography"; # Essa é a classe aplicada ao *body* da página (Por padrão utilizamos nomes em inglês).
    $modules = $yaml->parse(file_get_contents(__DIR__.'/typographies.yml')); # O arquivo .yml é o que vai ser utilizado no loop, costumamos aqui definir a variável no plural exatamente por isso

    echo $twig->render('/typography.html.twig', array('modules' => $modules, 'container' => $container)); # O arquivo typography.html.twig é o template que você criar, fique a vontade para colocar o nome que desejar, logo em seguida passamos para o template a variável typografies e o container.
```

* Abra o arquivo de menu `lib/layout/menu.html.twig` e insira o novo item na lista editando colocando o link e texto de acordo com o nova categoria criada. Vale ressaltar, que a classe do item criado precisa ser igual ao atributo *body_class*. (Ex. se a classe escolhida foi *typography*, o item do menu precisa ter a classe *styleguide-menu-typography*)

* É hora de atualizar o template abra o arquivo que criou dentro da pasta `template` e atualize da seguinte maneira:

```html
{% extends 'layout.html.twig' %}

{% block content %}
    <h1 class="styleguide-title styleguide-title-page">{{ container.module }}</h1>
    <!-- Module -->
    {% for module in modules %}
    <h2 class="styleguide-title-module">{{ module.title }}</h2>
    <p>{{ module.subtitle }}</p>
    <!-- code -->
    <div class='styleguide-demo'>
        {% include module.sourceCode %}
    </div>
    <pre class="styleguide-code"><code data-language="html"></code></pre>
{% endfor %}

{% endblock %}
```

* Por fim para fazer com que os seus módulos apareçam na página atualize o arquivo .yml inserindo título, subtitulo e o sourceCode do módulo

```
"module 1":
  title: Esse é o título do módulo 1
  subtitle: Esse é o subtitulo/descrição do módulo 1
  sourceCode: module-default.html.twig # Esse é o código html do módulo 1 que você criou na pasta modules
```

Como já informamos sabemos que esse processo por enquanto é complexo e já estamos trabalhando para melhorar isso, se tiver alguma dúvida é só abrir uma issue que ajudaremos da melhor forma possível.

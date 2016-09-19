![Snack](https://cloud.githubusercontent.com/assets/13695346/9314113/43eed556-44fd-11e5-844a-34f8e13b2863.png)

[:house:](../../../) » [Documentação](index.md) » Guia de Estilo

# Guia de Estilo

Durante o desenvolvimento de alguns projetos, surgiu a necessidade da criação de um Guia de Estilo. A idéia era mantê-lo dentro do projeto, podendo ele ser utilizado ou não, sem interferir em nada.

## Como funciona?

O Guia de Estilos fica dentro da pasta `styleguide` na raiz do projeto. Caso você não tenha interesse em utilizá-lo é só apagar a pasta *styleguide* na raiz do projeto.

## Criando um novo módulo

Por enquanto a adição de um novo módulo ainda é manual mas agora nessa nova versão usando AngularJS se torna muito mais fácil que na versão antiga usando PHP(Twig) [#24](https://github.com/a2comunicacao/A2boilerplate/issues/24).

Para criar um novo módulo você pode seguir os passos abaixo, nesse exemplo iremos criar o módulo **tipografia**:

* Duplique o arquivo `template.html` na pasta _(/styleguide/views/)_;
* Renomeie o arquivo para o nome do novo módulo/componente/seção que você pretende criar, no nosso exemplo ficara `tipografia.html`;
* Abra o arquivo `index.html` na raiz da pasta _(/styleguide/)_, e faça o include desse novo móidulo;

```html
<!-- Styleguide Item -->
<div class="styleguide-item" ng-include="'views/tipografia.html'"></div>`
```

* Agora vamos inserir os módulos nesse novo arquivo que acabamos de criar.

```html
<div class="row full">
    <div class="col-6">

        <!-- SG Example -->
        <snack-example title="Títulos" desc="" lang="html">
            <h1>h1. Um header show de bola</h1>
            <h2>h2. Um header show de bola</h2>
            <h3>h3. Um header show de bola</h3>
            <h4>h4. Um header show de bola</h4>
            <h5>h5. Um header show de bola</h5>
            <h6>h6. Um header show de bola</h6>
        </snack-example>

        <!-- SG Example -->
        <snack-example title="Paragrafo" desc="" lang="html">
            <p>Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Delegadis gente finis, bibendum egestas augue arcu ut est. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose</p>
        </snack-example>
    </div>
    <div class="col-6 last">

        <!-- SG Example -->
        <snack-example title="Subtítulos" desc="" lang="html">
            <h1>h1. Um header show de bola</h1>
            <h2>h2. Um header show de bola</h2>
            <h3>h3. Um header show de bola</h3>
            <h4>h4. Um header show de bola</h4>
            <h5>h5. Um header show de bola</h5>
            <h6>h6. Um header show de bola</h6>
        </snack-example>

        <!-- SG Example -->
        <snack-example title="Blockquote" desc="" lang="html">
            <blockquote>
                <p>"Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor, ou palavras aleatórias que não parecem nem um pouco convincentes"</p>
            </blockquote>
        </snack-example>
    </div>
</div>
```

## Entendendo as diretivas do html

Utilizando o AngularJS criamos a diretiva:

`<snack-example title="Título da seção" desc="Descrição da seção" lang="html"></snack-example>`

Com os seguintes atributos:

* Título
* Descrição
* Linguagem

Essa diretiva nada mais é do que o template `snack-example.html` que se encontra na pasta _(/styleguide/templates/)_

```html
<div class="styleguide-example">

    <!-- Toggle Button -->
    <span class="toggle-code"></span>

    <!-- SG Title Item -->
    <h4 class="styleguide-title">{{title}}<span>{{desc}}</span></h4>

    <!-- Exemple -->
    <ng-transclude></ng-transclude>

    <!-- Code -->
    <pre class="code"><code data-language="html" class="html" ng-transclude></code></pre>

</div>
```
Então toda vez que você chamar a diretiva `snack-example` ele vai gerar esse html, assim facilitando a criação dos módulos.





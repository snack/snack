![Snack](https://cloud.githubusercontent.com/assets/13695346/9314113/43eed556-44fd-11e5-844a-34f8e13b2863.png)

[:house:](../../../) » [Documentação](index.md) » Guia de Estilo

# Guia de Estilo

Durante o desenvolvimento de alguns projetos, surgiu a necessidade da criação de um Guia de Estilo. A idéia era mantê-lo dentro do projeto, podendo ele ser utilizado ou não, sem interferir em nada.

## Como funciona?

O Guia de Estilos fica dentro da pasta `styleguide` na raiz do projeto. Caso você não tenha interesse em utilizá-lo é só apagar a pasta *styleguide* na raiz do projeto.

## Criando um novo módulo

Por enquanto a adição de um novo módulo ainda é manual mas agora nessa nova versão usando AngularJS se torna muito mais fácil que na versão antiga usando PHP(Twig) [#24](https://github.com/a2comunicacao/A2boilerplate/issues/24).

Para criar um novo módulo você pode seguir os passos abaixo, nesse exemplo iremos criar o módulo **tipografia**:

* Duplique o arquivo `template.html` na pasta __(/styleguide/views/)__;
* Renomeie o arquivo para o nome do novo módulo/componente/seção que você pretende criar, no nosso exemplo ficara `tipografia.html`;
* Abra o arquivo `index.html` na raiz da pasta __(/styleguide/)__, e faça o include desse novo móidulo;
```html
<!-- Styleguide Item -->
<div class="styleguide-item" ng-include="'views/tipografia.html'"></div>`
```






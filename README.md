# ![snack-logo](https://cloud.githubusercontent.com/assets/13695346/9314113/43eed556-44fd-11e5-844a-34f8e13b2863.png)

Biblioteca para auxiliar no **pontapé inicial** em um projeto web. A idéia foi juntar [alguns dos projetos](https://github.com/snack/snack/wiki/Refer%C3%AAncias) que mais utilizávamos como referência e adaptarmos para um modelo de desenvolvimento com um Guia de Estilo incluso. Entenda a idéia [aqui](https://github.com/snack/snack/wiki).

## Requisitos

* **NodeJS** - _(para poder instalar as bibliotecas usando o npm)_
* **Gulp** - _(para rodar as tarefas de pré-processador: CSS/JS/IMAGENS entre outras)_
* **Ruby/SASS** - _(para poder usar a biblioteca `gulp-ruby-sass`)_
* **Bower** - _(para poder instalar os componente: font-awesome/jquery/respond/normalize.css entre outros)_

## Instalação

### Começando

Existem algumas opções disponíveis:

* Faça o [download do zip](https://github.com/snack/Snack/archive/master.zip) ou do [último release](https://github.com/snack/Snack/releases)
* Clone o projeto `git clone https://github.com/snack/snack.git`

### Boilerplate

Para instalar as bibliotecas do Gulp: `npm install`

Para instalar todas as dependências: `bower install`

Para rodas as tarefas de inicialização do projeto usando _Gulp_: `gulp`

Para sincronizar a página em diversos dispositivos usar: `gulp sync`

* *Lembrar de alterar no Gulpfile.js o proxy*: `proxy: "local.snack"`

para a url do seu projeto.

## Styleguide

O styleguide utiliza algumas bibliotecas PHP que são gerenciadas utilizando o [Composer](https://getcomposer.org/). Para instalar as dependências rode o seguinte comando na raiz do projeto:

`php composer.phar install`

## Documentação

Muita coisa? :confounded: Dá uma olhada na [documentação](doc/index.md) completa. Fica dentro da pasta `doc` na raiz do projeto.

## Atualização

**Esse é um projeto em constante atualização.** Pode ser que algo apresentado aqui não se adeque ao seu _workflow_. Fique a vontade para abrir uma [_issue_](https://github.com/snack/Snack/issues) e vamos discuti-la. :metal:

## Suporte

Foi testado em diversos navegadores, mas como queremos que a web não pare no tempo, recomendamos você seguir a lista abaixo:

- IE8+
- Firefox 2+
- Chrome 4+
- Safari 3.1+
- Opera 15

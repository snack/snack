# A2boilerplate

Biblioteca para auxiliar no **pontapé inicial** em um projeto web. A idéia foi juntar [alguns dos projetos](https://github.com/a2comunicacao/Grid-A2/wiki/Refer%C3%AAncias) que mais utilizávamos como referência e adaptarmos para um modelo de desenvolvimento da A2 com um Guia de Estilo incluso. Entenda a idéia [aqui](https://github.com/a2comunicacao/Grid-A2/wiki).

## Requisitos

* NodeJS
* Grunt ou Gulp
* Ruby/SASS
* Bower
* PHP 5.4+*

*Para o Styleguide.

## Instalação

### Começando

Existem algumas opções disponíveis:

* Faça o [download do zip](https://github.com/a2comunicacao/A2boilerplate/archive/master.zip) ou do [último release](https://github.com/a2comunicacao/A2boilerplate/releases)
* Clone o projeto `git clone https://github.com/a2comunicacao/A2boilerplate.git`

### Boilerplate

Para instalar as bibliotecas do Grunt e Gulp:

`npm install`

Para instalar todas as dependências: 

`bower install`

Para rodas as tarefas de inicialização do projeto usando _Grunt_:

`grunt init`

## Styleguide

O styleguide utiliza algumas bibliotecas PHP que são gerenciadas utilizando o [Composer](https://getcomposer.org/). Para instalar as dependências rode o seguinte comando na raiz do projeto:

`php composer.phar install`

## Documentação

Muita coisa? :confounded: Dá uma olhada na [documentação](doc/index.md) completa. Fica dentro da pasta `doc` na raiz do projeto.

## Atualização

**Esse é um projeto em constante atualização.** Pode ser que algo apresentado aqui não se adeque ao seu _workflow_. Fique a vontade para abrir uma [_issue_](https://github.com/a2comunicacao/A2boilerplate/issues) e vamos discuti-la. :metal:

## Suporte

Foi testado em diversos navegadores, mas como queremos que a web não pare no tempo, recomendamos você seguir a lista abaixo:

- IE8+
- Firefox 2+
- Chrome 4+
- Safari 3.1+
- Opera 15

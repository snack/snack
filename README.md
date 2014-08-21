# A2boilerplate

Padrão para auxiliar no **pontapé inicial** em um projeto web. A idéia foi juntar [alguns dos projetos](https://github.com/a2comunicacao/Grid-A2/wiki/Refer%C3%AAncias) que mais utilizávamos como referência e adaptarmos para um modelo de desenvolvimento da A2 com um Guia de Estilo incluso. Entenda a idéia [aqui](https://github.com/a2comunicacao/Grid-A2/wiki).

## Requisitos

* Grunt
* Bower
* PHP 5.4+

## Instalação

## Começando

Existem algumas opções disponíveis:

* Faça o [download do zip](https://github.com/a2comunicacao/A2boilerplate/archive/master.zip) ou do [último release](https://github.com/a2comunicacao/A2boilerplate/releases)
* Clone o projeto `git clone https://github.com/a2comunicacao/A2boilerplate.git`

### Boilerplate

Para instalar todos módulos que irão executar as _tasks_:

`npm install`

Para instalar todas as dependências: 

`bower install`

Para rodas as tarefas de inicialização do projeto:

`grunt init`

## Styleguide

O styleguide utiliza algumas bibliotecas PHP que são gerenciadas utilizando o [Composer](https://getcomposer.org/). Para rode o seguinte comando na raiz do projeto:

`php composer.phar install`

## Documentação

Meio confuso? Muita coisa? Dá uma olhada na [documentação](doc/index.md) completa. Fica dentro da pasta `doc` na raiz do projeto.

## Suporte

Foi testado em diversos navegadores, mas como queremos que a web não pare no tempo, recomendamos você seguir a lista abaixo:
- IE8+
- Firefox 2+
- Chrome 4+
- Safari 3.1+
- Opera 15

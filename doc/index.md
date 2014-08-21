# ![A2boilerplate](https://cloud.githubusercontent.com/assets/1345662/4001760/56faa480-2966-11e4-8311-a878a8b423a4.png)

[Início](../../../) » Documentação

# Documentação

## Passo a passo

Novo por aqui? Recomendamos dar uma lida seguindo os passos abaixos para entender o projeto.

* [Estrutura básica](#estrutura-b%C3%A1sica)
* [Entendendo a organização](#entendendo-a-organiza%C3%A7%C3%A3o)
* [Grunt e Bower](#grunt-e-bower)
* [HTML](html.md)
* [CSS](css.md)
* [JS](js.md)
* [Includes](includes.md)
* [Guia de Estilo](styleguide.md)
* [Considerações](outros.md)

## Estrutura básica

Para melhor visualização da estrutura como um todo, podemos resumir que o projeto é dividido em 2 partes: **Boilerplate** e **Styleguide**.

O **Boilerplate** está relacionado à sua aplicação em si. É aonde você vai criar suas páginas, estilos e scripts. Já o **Styleguide** está relacionado ao Guia de Estilo da sua aplicação. É aonde você vai definir os padrões dos seus componentes visuais (fica dentro da pasta _styleguide_).

```
├── ASSETS (_arquivos de desenvolvimento_)
│   ├── SCSS
│   ├── JS
│   └── IMG
│
├── BUILD (_arquivos gerados pelas tarefas do Grunt_)
│   ├── CSS
│   ├── JS
│   ├── IMG
│   └── IN
│
├── STYLEGUIDE (_tudo relacionado ao Guia de Estilo da aplicação_)
│   ├── `project.yml`
│   ├── LIB
│   └── MODULOS (botoes, cores, formularios, layouts...)
│
├── DOC (_arquivos da documentação_)
│
└── `index.php`
```

## Entendendo a organização

### As pastas _ASSETS_ e _BUILD_

O projeto (tanto o Boilerplate como Styleguide) utiliza algumas _tasks_ do _Grunt_ que resumidamente pega todo o conteúdo da pasta _ASSETS_ e concatena/minifica/otimiza e joga para a pasta _BUILD_.

Em tese, quando você for dar o deploy da sua aplicação, você pode fazer o upload apenas da pasta _BUILD_ com todos arquivos otimizados.

#### Assets

A pasta `assets` contém os arquivos de desenvolvimento. Possui 3 pastas internas:

* _SCSS_ ==> Arquivos SASS. Essa pasta é organizada seguindo o conceito de _Design Atômico_ com alguns toques pessoais nossos.
* _JS_ ==> Pasta com os arquivos _javascript_. Todo arquivo desenvolvido para o projeto deve ficar nessa pasta. Dentro dessa pasta tem uma pasta _LIBS_, que deve agrupar todas bibliotecas utilizadas que **não forem** geradas através do _Bower_.
* _IMG_ ==> Pasta com as imagens do projeto, antes de serem otimizadas.

#### Build

Essa pasta contém todos os arquivos originados das taks do _Grunt_.

* _CSS_ ==> Contém arquivo de estilo minificado.
* _JS_ ==> Contém arquivo(s) _javascript_ concatenados e minificados.
    - _LIBS_ ==> Contém as bibliotecas minificadas utilizadas por padrão no projeto (_Modernizr, jQuery_ e _Respond_).
* _IMG_ ==> Contém as imagens otimizadas através do _Grunt_.
* _IN_ ==> Pasta com os arquivos _include_ do projeto.

---

### Grunt e Bower

O A2boilerplate utiliza [Grunt](http://gruntjs.com/) para automatizar algumas tarefas e o [Bower](http://bower.io/) para gerenciar dependências. Para rodá-los você precisa ter o [NodeJS](http://nodejs.org/) instalado na máquina.

#### Bower

O _Bower_ é um gerenciador de dependências. No A2boilerplate temos por padrão apenas 3 dependências: _Modernirz_, _jQuery_ e _Respond_.

Através do comando _bower install_, o _Bower_ faz o download de todas essas dependências e joga na pasta _COMPONENTS_.  

##### Instalando uma dependência nova

Caso você queira colocar uma nova dependência no seu projeto é possível fazer isso com o _Bower_. Para procurar uma _LIB_ nova, é só passar o seguinte comando: `bower search nomedalib`. 

Com a _lib_ encontrada digite: `bower install nomedalib --save-dev`.

```
**IMPORTANTE** ==> Lembre-se de passar o parâmetro `--save-dev` para deixar aquela _lib_ como dependência do projeto. Assim, quando outra pessoa for utilizá-lo, ela será instalada automaticamente no comando `bower install`.
```

###### E se eu não achar?

Pode ser que você não encontre a _lib_ que queria através do _Bower_ ou pode ser que você não queira utilizá-lo. Nesse caso, faça o download dessa _lib_, crie uma pasta com o nome da _lib_ dentro de: `assets/js/libs` e jogue os arquivos lá dentro. Aí com o _Grunt_ você pode criar uma tarefa para minificar e concatenar ela com outros arquivos.

#### Grunt

A configuração do _Grunt_ fica no arquivo `Gruntfile.js` e as dependências de módulos ficam listadas no `package.json`.

##### Tarefas padrão

Por padrão temos algumas tarefas registradas:

`grunt init` ==> Minifica as bibliotecas padrão do projeto geradas pelo _Bower_ e joga na pasta _BUILD_.

`grunt css` ==> Roda a tarefa de CSS, concatenando todos os arquivos `.scss` em um arquivo `.css` minificado.

`grunt js` ==> Roda as tarefas de JS: validação pelo [_JSHint_](http://www.jshint.com/) e minificação/concatenação dos arquivos.

`grunt images` ==> Tarefas relacionadas a imagens: otimização de _JPEGs, GIFs_ e _PNGs_, minificação de _SVGs_ e transformação de _SVGs_ em _PNGs_ para utilização em navegadores que não dão suporte.

`grunt live` ==> É a tarefa de _watch_. Basicamente fica de olho nos arquivos que são passados na configuração, realiza as tarefas automaticamente de acordo com o arquivo que for alterado e atualiza o navegador. Funciona em conjunto com as [extensões do LiveReload](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions).

Essas são apenas as tarefas básicas e padrões. Fique a vontade para criar as suas tarefas e customizar da melhor maneira que lhe atender.

:point_right: Próximo: [HTML](html.md)
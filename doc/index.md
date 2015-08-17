# A2boilerplate

## Documentação

Novo por aqui? Recomendamos dar uma lida seguindo os passos abaixos.

* [Estrutura básica](#estrutura-b%C3%A1sica)
* [Entendendo a organização](#entendendo-a-organiza%C3%A7%C3%A3o)
* [Grunt e Bower](#grunt-e-bower)
* [CSS](css.md)
* [HTML](html.md)
* [JS](js.md)
* [Includes](includes.md)
* [Guia de Estilo](styleguide.md)
* [Considerações](outros.md)

## Estrutura básica

Para melhor visualização da estrutura como um todo, podemos resumir que o projeto é dividido em 2 partes: **Boilerplate** e **Styleguide**.

O **Boilerplate** está relacionado à sua aplicação em si. É aonde você vai criar suas páginas, estilos e scripts. Já o **Styleguide** está relacionado ao Guia de Estilo da sua aplicação. É aonde você vai definir os padrões dos seus componentes visuais (fica dentro da pasta _styleguide_).

```html
├── ASSETS (arquivos de desenvolvimento)
│   ├── SCSS
│   ├── JS
│   └── IMG
│       └── SPRITE (imagens para gerar o sprite automaticamente)
│
├── BUILD (arquivos gerados pelas tarefas do Gulp)
│   ├── CSS
│   ├── JS
│   ├── IMG
│   ├── FONTS
│   └── IN
│
├── STYLEGUIDE (tudo relacionado ao Guia de Estilo da aplicação)
│   ├── project.yml
│   ├── LIB
│   └── MODULOS (botoes, cores, formularios, layouts...)
│
├── DOC (arquivos da documentação)
│
└── index.php
```

## Entendendo a organização

### As pastas `ASSETS` e `BUILD`

O projeto (tanto o **Boilerplate** como **Styleguide**) utiliza algumas _tasks_ do _Gulp_, que resumidamente pega todo o conteúdo da pasta _`assets`_ e concatena/minifica/otimiza e joga para a pasta _`build`_.

Em tese, quando você for dar o deploy da sua aplicação, você pode fazer o upload apenas da pasta _`build`_ com todos arquivos otimizados.

#### Assets

A pasta _`assets`_ contém os arquivos de desenvolvimento. Possui 3 pastas internas:

* _`scss`_ ==> Arquivos SASS. Essa pasta é organizada seguindo o conceito de _Design Atômico_ com alguns toques pessoais nossos.
* _`js`_ ==> Pasta com os arquivos _javascript_. Todo arquivo desenvolvido para o projeto deve ficar nessa pasta. Dentro dessa pasta tem uma pasta _LIBS_, que deve agrupar todas bibliotecas utilizadas que **não forem** geradas através do _Bower_.
* _`img`_ ==> Pasta com as imagens do projeto, antes de serem otimizadas.

#### Build

Essa pasta contém todos os arquivos originados das taks do _Gulp_.

* _`css`_ ==> Contém arquivo de estilo minificado.
* _`js`_ ==> Contém arquivo(s) _javascript_ concatenados e minificados.
    - _`libs`_ ==> Contém as bibliotecas minificadas utilizadas por padrão no projeto (_html5shiv, jQuery_ e _Respond_).
* _`img`_ ==> Contém as imagens otimizadas através do _Grunt_.
    - _`sprite`_ ==> Contém as imagens que geram o sprite na pasta _build_.
* _`fonts`_ ==> Fontes utilizadas no projeto.
* _`in`_ ==> Pasta com os arquivos _include_ do projeto.

---

### Gulp e Bower

O A2boilerplate utiliza [Gulp](http://gulpjs.com/) para automatizar algumas tarefas e o [Bower](http://bower.io/) para gerenciar dependências. Para rodá-los você precisa ter o [NodeJS](http://nodejs.org/) instalado na máquina.

#### Bower

O _Bower_ é um gerenciador de dependências. No A2boilerplate temos por padrão apenas 3 dependências: _html5shiv_, _jQuery_ e _Respond_.

Através do comando _bower install_, o _Bower_ faz o download de todas essas dependências e joga na pasta _COMPONENTS_.  

##### Instalando uma dependência nova

Caso você queira colocar uma nova dependência no seu projeto é possível fazer isso com o _Bower_. Para procurar uma _LIB_ nova, é só passar o seguinte comando: `bower search nomecomponente`. 

Com a _lib_ encontrada digite: `bower install nomecomponente --save-dev`.

:exclamation: **IMPORTANTE** ==> Lembre-se de passar o parâmetro `--save-dev` para deixar aquela _lib_ como dependência do projeto. Assim, quando outra pessoa for utilizá-lo, ela será instalada automaticamente no comando `bower install`.

###### E se eu não achar?

Pode ser que você não encontre a _lib_ que queria através do _Bower_ ou pode ser que você não queira utilizá-lo. Nesse caso, faça o download dessa _lib_, crie uma pasta com o nome da _lib_ dentro de: `assets/js/libs` e jogue os arquivos lá dentro. Aí com o _Gulp_ você pode criar uma tarefa para minificar e concatenar ela com outros arquivos.

#### Gulp

A configuração do _Grunt_ fica no arquivo `Gulpfile.js` e as dependências de módulos ficam listadas no `package.json`.

##### Tarefas padrão

Por padrão temos algumas tarefas registradas:

`gulp` ==> Minifica as bibliotecas padrão do projeto geradas pelo _Bower_ e joga na pasta _BUILD_.

`grunt css` ==> Roda a tarefa de CSS, concatenando todos os arquivos `.scss` em um arquivo `.css` minificado.

`grunt js` ==> Roda as tarefas de JS: validação pelo [_JSHint_](http://www.jshint.com/) e minificação/concatenação dos arquivos.

`grunt images` ==> Tarefas relacionadas a imagens: otimização de _JPEGs, GIFs_ e _PNGs_, minificação de _SVGs_ e transformação de _SVGs_ em _PNGs_ para utilização em navegadores que não dão suporte e gerar imagem de sprite.

`grunt live` ==> É a tarefa de _watch_. Basicamente fica de olho nos arquivos que são passados na configuração, realiza as tarefas automaticamente de acordo com o arquivo que for alterado e atualiza o navegador. Funciona em conjunto com as [extensões do LiveReload](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions).

`grunt sync` ==> Tarefa para poder sincronizar seu site local em diversos dispositivos, acessando pelo ip que ele gera, e também roda a tarefa de _watch_ que fica de olho nos arquivos que são passados na configuração, realiza as tarefas automaticamente de acordo com o arquivo que for alterado e atualiza o navegador.

`grunt copy` ==> Essa tarefa copia os arquivos da pasta _components_ e joga nos seus respequitivos lugares na pasta _BUILD_

Essas são apenas as tarefas básicas e padrões. Fique a vontade para criar as suas tarefas e customizar da melhor maneira que lhe atender.

:point_right: Próximo: [CSS](css.md)

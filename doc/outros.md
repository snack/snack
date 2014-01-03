[Início](../../../) » [Documentação](index.md) » Considerações

# Considerações

## Font Awesome

Foi escolhido devido ao fato de ser independete de resolução o que auxilia no desenvolvimento do design responsivo. No entanto, os arquivos das fontes são bem grandes. É uma boa prática, reduzir o arquivo apenas com as fontes que são utilizadas no projeto. O [IconMoon](http://icomoon.io/) ajuda nesse ponto. E, claro, se não estiver sendo utilizada, excluir os arquivos relacionados.

## Guia de Estilo

Como comentado, por se tratar de uma versão inicial e beta de desenvolvimento, muitas das funcionalidades como adição de categorias e módulos ainda são manuais. Apesar de já ter atendido bem às expectativas, temos melhorias em nossa fila de produção para as próximas versões.

## Grunt

O projeto utiliza-se do Grunt para algumas tarefas. Pra quem não conhece, o papel do Grunt é exatamente esse, ser um automatizador de tarefas. Para instalá-lo em sua máquina você precisa ter Node.JS na sua máquina. Para instalar, [veja a documentação do site do Grunt](http://icomoon.io/).

As tarefas padrões utilizadas são:

- Cocatenação dos arquivos *SASS* em um arquivo *CSS* minificado
- Validação dos arquivos JS pelo [JSHint](http://www.jshint.com/)
- Minificação dos arquivos JS
- *Watch* de alguns para *livereload* da página (utilizada em conjunto com a ferramenta [LiveReload](http://livereload.com/))
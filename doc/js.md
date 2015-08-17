![A2boilerplate](https://cloud.githubusercontent.com/assets/1345662/4002471/12af2f4c-296d-11e4-8c6d-ddee89d68c85.png)

[:house:](../../../) » [Documentação](index.md) » JS

* [Libs](#libs)
* [Scripts](#scripts)

# JS

## Libs

São as bibliotecas padrão utilizadas no projeto. São gerenciadas pelo **Bower**, por isso, recomendamos dar uma lida nas seções de [Bower](index.md#bower) e [Grunt](index.md#grunt).

* jQuery
* html5shiv
* Respond

## Scripts

Dentro da pasta _`assets`_ fica o arquivo `scripts.js` que é por padrão o arquivo onde colocamos nossos scripts. Geralmente, colocamos ali as coisas que serão utilizadas no projeto inteiro. 

Para algo mais específico, ou se formos pensar na questão da perfomance em apenas chamarmos na página o que de fato está sendo utilizado, costumamos criar arquivos separados e tarefas customizadas no **Grunt**. Assim, carregamos apenas o que é necessário pra determinada página e entregamos em um arquivo minificado.

:point_right: Próximo: [Styleguide](styleguide.md)



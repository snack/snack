![Snack](https://cloud.githubusercontent.com/assets/13695346/9314113/43eed556-44fd-11e5-844a-34f8e13b2863.png)

[:house:](../../../) » [Documentação](index.md) » JS

* [Libs](#libs)
* [Scripts](#scripts)

# JS

## Libs

São as bibliotecas padrão utilizadas no projeto. São gerenciadas pelo **Bower**, por isso, recomendamos dar uma lida nas seções de [Bower](index.md#bower) e [Gulp](index.md#gulp).

* jQuery
* html5shiv
* Respond

## Scripts

Dentro da pasta _`assets`_ fica o arquivo `scripts.js` que é por padrão o arquivo onde colocamos nossos scripts. Geralmente, colocamos ali as coisas que serão utilizadas no projeto inteiro. 

Para algo mais específico, ou se formos pensar na questão da perfomance em apenas chamarmos na página o que de fato está sendo utilizado, costumamos criar arquivos separados e tarefas customizadas no **Gulp**. Assim, carregamos apenas o que é necessário pra determinada página e entregamos em um arquivo minificado.

:point_right: Próximo: [Styleguide](styleguide.md)



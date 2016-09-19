![Snack](https://cloud.githubusercontent.com/assets/13695346/9314113/43eed556-44fd-11e5-844a-34f8e13b2863.png)

[:house:](../../../) » [Documentação](index.md) » JS

* [Libs](#libs)
* [Scripts](#scripts)

# JS

## Libs

São as bibliotecas padrão utilizadas no projeto. São gerenciadas pelo **Bower**, por isso, recomendamos dar uma lida nas seções de [Bower](index.md#bower) e [Gulp](index.md#gulp).

* angular
* font-awesome
* html5shiv
* jQuery
* normalize.css
* rainbow
* Respond

## Scripts

Dentro da pasta _`assets`_ fica o arquivo `scripts.js` que é por padrão o arquivo onde colocamos nossos scripts. Geralmente, colocamos ali as coisas que serão utilizadas no projeto inteiro. 

```
(function(){
    'use strict';

    // Config
    var app = {
        body:         $('body'),
        linkBackTop:  $('.back-top a')
    };

    // Default scripts
    var initialConfig = {

        // Start functions
        init: function(){
            var self = this;
            self.externalLinks();
            self.accessibleDropDown();
            self.backTop();
        },

        // External links
        externalLinks: function() {
            $("a[href*='http://']:not([href*='"+location.hostname+"']),[href*='https://']:not([href*='"+location.hostname+"'])").attr("target","_blank");
        },

        // Accessible menu
        accessibleDropDown: function() {
            var el = $(this);

            $('a', el).focus(function() {
                $(this).parents('li').addClass('menu-open');
            }).blur(function() {
                $(this).parents('li').removeClass('menu-open');
            });
        },

        // Back top
        backTop: function(){

            app.linkBackTop.click(function(event) {
                event.preventDefault();
                $("html, body").animate({ scrollTop: 0 }, 500);
            });
        },

        // New function ...
        // add no init self.suaNovaFuncao();
        suaNovaFuncao: function(){

        }

    };


    initialConfig.init();

})();

```

Para algo mais específico, ou se formos pensar na questão da perfomance em apenas chamarmos na página o que de fato está sendo utilizado, costumamos criar arquivos separados e tarefas customizadas no **Gulp**. Assim, carregamos apenas o que é necessário pra determinada página e entregamos em um arquivo minificado.

:point_right: Próximo: [Styleguide](styleguide.md)



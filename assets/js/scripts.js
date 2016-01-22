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


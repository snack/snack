(function(){
    'use strict';

    // Config
    var app = {
        body:         document.querySelector('body'),
        linkBackTop:  document.querySelector('.back-top a'),
        linkExternal: document.querySelectorAll("a[href*='http://']:not([href*='"+location.hostname+"']),[href*='https://']:not([href*='"+location.hostname+"'])")
    };

    // Default scripts
    var initialConfig = {

        // Start functions
        init: function(){
            var self = this;
            self.externalLinks();
            self.backTop();
        },

        // External links
        externalLinks: function() {

            [].forEach.call(app.linkExternal, function(el) {
                el.setAttribute('target', 'blank');
            });
        },

        // Back top
        backTop: function(){

            if(app.linkBackTop)

            app.linkBackTop.addEventListener('click', function(event){
                event.preventDefault();
                window.scrollTo(500, 0);
            });
        },

        // New function ...
        // add no init self.suaNovaFuncao();
        suaNovaFuncao: function(){

        }

    };


    initialConfig.init();

})();


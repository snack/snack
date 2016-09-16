(function(){
    'use strict';

    // Config
    var app = {
        body:         document.querySelector('body'),
        linkBackTop:  document.querySelector('.back-top'),
        linkExternal: document.querySelectorAll("a[href*='http://']:not([href*='"+location.hostname+"']),[href*='https://']:not([href*='"+location.hostname+"'])"),
        sgExample:    document.querySelectorAll(".styleguide-example")
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

            function scrollToTop(scrollDuration) {
                var scrollStep = -window.scrollY / (scrollDuration / 15),
                scrollInterval = setInterval(function(){
                    if ( window.scrollY != 0 ) {
                        window.scrollBy( 0, scrollStep );
                    }
                    else clearInterval(scrollInterval);
                },15);
            }

            if(app.linkBackTop)

            app.linkBackTop.addEventListener('click', function(event){
                event.preventDefault();
                scrollToTop(500, 0);
            });
        },

        // New function ...
        // add no init self.suaNovaFuncao();
        suaNovaFuncao: function(){

        }

    };


    initialConfig.init();

})();


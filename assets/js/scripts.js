(function(){
    //'use strict';

    // Config
    var app = {
        body:               document.querySelector('body'),
        linkBackTop:        document.querySelector('.back-top a'),
    };

    // Default scripts
    var initialConfig = {

        // Start functions
        init: function(){
            var self = this;
            self.externalLinks();
            self.backTop();
            self.suaNovaFuncao();
        },

        // External links
        externalLinks: function() {
            [].forEach.call(document.querySelectorAll("a[href*='http://']:not([href*='"+location.hostname+"']),[href*='https://']:not([href*='"+location.hostname+"'])"), function(el) {
                el.setAttribute('target','_blank');
            });
        },

        // scrollToTop
        scrollToTop: function(){
            var scrollStep = -window.scrollY / (scrollDuration / 15),
            scrollInterval = setInterval(function(){
                if ( window.scrollY !== 0 ) {
                    window.scrollBy( 0, scrollStep );
                }
                else clearInterval(scrollInterval);
            },15);
        },

        // Back top
        backTop: function(){

            if(app.linkBackTop)

            app.linkBackTop.addEventListener('click', function(event){
                event.preventDefault();
                initialConfig.scrollToTop(500, 0);
            });
        },

        // New function ...
        // add no init self.suaNovaFuncao();
        suaNovaFuncao: function(){

        }

    };


    initialConfig.init();

})();


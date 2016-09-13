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
            self.showCode();
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

        // Click show code
        showCode: function(){

            setTimeout(function(){

                [].forEach.call(document.querySelectorAll(".styleguide-example"), function(el) {
                    el.addEventListener('click', function(e){

                        // Toggle Class
                        this.classList.toggle('current');




                        /**********************************************/


                        // Clone
                        var clonedElement = this.cloneNode(true);

                        // Tag Code
                        var tagCode = document.createElement('code');

                        // Tag Pre
                        var tagPre = document.createElement('pre');
                        tagPre.classList.toggle('code');
                        tagPre.appendChild(tagCode);
                        tagCode.appendChild(clonedElement);
                        tagCode.setAttribute("data-language", "html");

                        // Append
                        this.appendChild(tagPre);

                        // select element to unwrap
                        var el = document.querySelector('.code .styleguide-example');

                        // get the element's parent node
                        var parent = el.parentNode;

                        // move all children out of the element
                        while (el.firstChild) parent.insertBefore(el.firstChild, el);

                        // remove the empty element
                        parent.removeChild(el);
                    });
                });
            }, 1500);
        },

        // New function ...
        // add no init self.suaNovaFuncao();
        suaNovaFuncao: function(){

        }

    };


    initialConfig.init();

})();


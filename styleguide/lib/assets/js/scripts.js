'use strict';

(function(){

    // Menu add class active
    function menuActive() {
        var bodyClass = $('body').attr('class').slice(27);
        $('.styleguide-navbar .menu').children('.styleguide-menu-' + bodyClass).addClass('active');
    }

    menuActive();

    // Sidebar add class active
    function sidebarActive(){
        var hash = window.location.hash;
        $('[href$='+hash+']').addClass('active');
    }

    sidebarActive();

    $('.styleguide-sidebar a').click(function(){
        $('.styleguide-sidebar a').removeClass('active');
        $(this).addClass('active');
    });

    $('.styleguide-title-module a').click(function(){
        var href = $(this).attr('href');
        $('.styleguide-sidebar a').removeClass('active');
        $('[href$='+href+']').addClass('active');
    });

    // Hash click
    $("a[href*='/#']").click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 60
                }, 800);
                //return false;
            }
        }
    });

    // Code styleguide
    var boxCode = $('.styleguide-demo');

    $.each(boxCode, function(index, val) {
        var currentCode = $(val).html(),
        destCode = $(this).next('pre').find('code');

        destCode.append(currentCode).find('.show-code').remove();
    });

    // Sidebar scroll
    var $sidebar   = $(".styleguide-sidebar"),
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 60;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });

    // JS Demos
    $(".call-menu").click(function(){
        $(this).siblings('.nav-menu').toggleClass('nav-menu-open');
    });
    $(".nav-menu").click(function(){
        $(this).toggleClass('nav-menu-open');
    });

    //JS Tabs Menu
    var allWidth = 0;
    var tabList = $(".styleguide-demo [role='tablist']");
    tabList.children().each(function(){
        allWidth += $(this)[0].getBoundingClientRect().width;
    });
    tabList.css('min-width', allWidth);


    $("[role='tab']").click(function(e) {
      e.preventDefault();
      $(this).attr("aria-selected", "true");
      $(this).parent().siblings().children().attr("aria-selected", "false");
      var tabpanelShow = $(this).attr("href");
      tabpanelShow.attr("aria-hidden", "false");
      tabpanelShow.siblings().attr("aria-hidden", "true");
    });


    // Styleguide Code show/hide
    $('.btn-show').click(function(e){
        e.preventDefault();

        var code = $(this).parents('.styleguide-demo').next('.styleguide-code');

        if( code.hasClass('show') ){
            $(this).html('Ver Código');
        }else{
            $(this).html('Ocultar');
        }

        code.toggleClass('show');
    });

})();



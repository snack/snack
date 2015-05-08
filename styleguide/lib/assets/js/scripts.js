(function(){

    // Menu add class active
    function menuActive() {
        var bodyClass = $('body').attr('class').slice(27);
        $('.styleguide-navbar .menu').children('.styleguide-menu-' + bodyClass).addClass('active');
    }

    menuActive();

    // Sidebar add class active
    function sidebarActive(){
        $('[href$='+window.location.hash+']').addClass('active');
        console.log(window.location.hash);
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

    // Code styleguide
    var boxCode = $('.styleguide-demo');

    $.each(boxCode, function(index, val) {
        var currentCode = $(val).html(),
        destCode = $(this).next('pre').find('code');

        destCode.append(currentCode);
    });

    // Sidebar scroll
    var $sidebar   = $(".styleguide-sidebar"),
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 15;

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

})();



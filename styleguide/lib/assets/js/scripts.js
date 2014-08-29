function menuActive() {
    var bodyClass = $('body').attr('class').slice(27);
    $('#styleguide-menu').children('.styleguide-menu-' + bodyClass).addClass('active');
}

jQuery(document).ready(function($) {

    var boxCode = $('.styleguide-demo');

    $.each(boxCode, function(index, val) {
        var currentCode = $(val).html(),
        destCode = $(this).next('pre').find('code');

        destCode.append(currentCode);
    });

    menuActive();
});

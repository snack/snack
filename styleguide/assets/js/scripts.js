jQuery(document).ready(function($) {
    
    var boxCode = $('.styleguide-demo');

    $.each(boxCode, function(index, val) {
        var currentCode = $(val).html(),
            destCode = $(this).next('pre').find('code');
        destCode.prepend(currentCode);
    });

});

(function(){
    $('.social-share a').click(function(e){
        e.preventDefault();
        var url = $(this).attr('href');
        window.open(url,'targetWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=600, height=350');
    });
})();

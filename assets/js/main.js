$(function(){
    // métodos de jQuery...

    $(window).resize( function(){
        const { width } = window.screen;
        if (width>=768) {
            $('#first-divider').hide();
            $('.slider').show();
        } else {
            $('#first-divider').show();
            $('.slider').hide();
        }
        //console.log(width);
    })
});
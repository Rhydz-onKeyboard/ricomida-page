$(function(){
    // métodos de jQuery...

    $(window).resize( function(){
        const { width } = window.screen;
        if (width>=768) {
            $('#first-divider').hide();
            $('.slider').show();
            $('#title').css("text-align", "left");
            $('#btns').css("justify-content", "start");
            $('header').css("padding-top", "2rem");
        } else {
            $('#first-divider').show();
            $('.slider').hide();
            $('#title').css("text-align", "center");
            $('#btns').css("justify-content", "center");
            $('header').css("padding-top", "1rem");
        }
        //console.log(width);
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

    
    $(document).ready(function(){
        $('.carousel').carousel({
            interval: 2000
        });
    });
});
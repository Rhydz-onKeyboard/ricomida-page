$(function(){
    // métodos de jQuery...

    $(window).resize( function(){
        const { width } = window.screen;
        if (width>=768) {
            $('#first-divider').hide();
            $('.carousel-rico').show();
            $('#title').css("text-align", "left");
            $('#title').css("padding-right", "9rem");
            $('#btns').css("justify-content", "start");
            $('header').css("padding-top", "2rem");
        } else {
            $('#first-divider').show();
            $('.carousel-rico').hide();
            $('#title').css("text-align", "center");
            $('#title').css("padding-right", "0");
            $('#btns').css("justify-content", "center");
            $('header').css("padding-top", "1rem");
        }
        //console.log(width);
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    
    $(document).ready(function(){
        $('.carousel').carousel({
            interval: 2000
        });
    });
});
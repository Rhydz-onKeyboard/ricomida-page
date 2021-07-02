$(function(){
    // métodos de jQuery...

    const { width } = window.screen;
        if (width>=768) {
            $('#first-divider').hide();
            $('#title').css("text-align", "left");
            $('#title').css("padding-right", "9rem");
            $('#btns').css("justify-content", "start");
            $('header').css("padding-top", "2rem");
        } else {
            $('#first-divider').show();
            $('#title').css("text-align", "center");
            $('#title').css("padding-right", "0");
            $('#btns').css("justify-content", "center");
            $('header').css("padding-top", "1rem");
        }

    $(window).resize( function(){
        const { width } = window.screen;
        if (width>=768) {
            $('#first-divider').hide();
            $('#title').css("text-align", "left");
            $('#title').css("padding-right", "9rem");
            $('#btns').css("justify-content", "start");
            $('header').css("padding-top", "2rem");
        } else {
            $('#first-divider').show();
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

    $('#enviarCorreo').click(function (){
        alert("El correo fue enviado correctamente...")
    })
    

    $('.carousel').carousel({
        interval: 3000
    });

    $("h5.step-section").on('dblclick', function(){
        ($(this).css("color", "red"));
    });

    $('.card').click(function(){
        $('.card-text').toggle()
    })

});
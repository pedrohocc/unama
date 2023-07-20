$(document).ready(function() {
    $("button").click(function() {
        
        const azul = $(".azul");
        const vermelho = $(".vermelho");

        $(azul).each(function() {
            $(this).removeClass("azul");
            $(this).addClass("vermelho");
        });

        $(vermelho).each(function() {
            $(this).removeClass("vermelho");
            $(this).addClass("azul");
        });
    })
})
function exibirValores() {
    $(document).ready(function(){
        console.log($("h1").text());
        console.log($("#descricao").text());
        const valores = $(".itens").each(function(index) {
            console.log($(this).text())
        })
    })
}
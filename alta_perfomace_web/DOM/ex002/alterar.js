function mudarCores() {
    let listaAzul = document.querySelectorAll(".azul");
    let listaVermelho = document.querySelectorAll(".vermelho");
    

    listaAzul.forEach(element => {
        element.classList.remove("azul");
        element.classList.add("vermelho");
    })

    listaVermelho.forEach(element => {
        element.classList.remove("vermelho");
        element.classList.add("azul");
    })
}
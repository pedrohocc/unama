function exibirValores() {
    const valorH1 = document.querySelector("h1");
    const valorDescricao = document.querySelector("#descricao");
    let valoresItens = [];
    valoresItens = document.querySelectorAll(".itens");

    console.log(valorH1.textContent);
    console.log(valorDescricao.textContent);
    valoresItens.forEach(element => console.log(element.textContent));
}

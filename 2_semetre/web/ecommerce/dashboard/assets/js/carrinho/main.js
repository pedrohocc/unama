function carregarProdutosEscolhidos() {
    let produtos =  localStorage.getItem('carrinho');
    produtos = JSON.parse(produtos);
    console.log(produtos);
}

function totalProdutos() {
    const produtos = localStorage.getItem('carrinho').split(',');
    const pTotalProdutos = document.querySelector('.totalProdutos');
    pTotalProdutos.textContent = `Total de Produtos: ${produtos.length}`;
}
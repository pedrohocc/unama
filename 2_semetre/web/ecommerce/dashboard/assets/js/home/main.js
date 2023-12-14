const logado = localStorage.getItem('logado')

if (logado !== 'true') {
    window.location.href = '/index.html';
} else {
    function carregarCards() {
        const divProdutos = document.querySelector('.produtos');
        divProdutos.innerHTML = `<div class="spinner-border" role="status">
        <span class="visually-hidden">Buscando Produtos...</span>
      </div>`
        fetch('/actions/getProdutos.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then(response => response.json())
            .then(produtos => {
                let cards = ''
                produtos.forEach(produto => {
                    cards += `<div class="card m-3 shadow" style="width: 18rem;">
                    <img src="${produto.imagem}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${produto.nome}</h5>
                      <p class="card-text text-black">${produto.descricao}</p>
                      <button id="${produto.id_produto}" class="bnt-compra btn btn-primary" onclick="salvarLocalStorage({
                        id_produto: ${produto.id_produto},
                        nome: '${produto.nome}',
                        descricao: '${produto.descricao}',
                        preco: ${produto.preco},
                        imagem: '${produto.imagem}',
                        qtd: 1
                      });"><i class="fa-solid fa-cart-plus"></i> R$ ${produto.preco}</button>
                    </div> 
                    </div>`
                });
                divProdutos.innerHTML = cards;
                atualizarCarrinho();
            })
            .catch(error => console.error('Erro:', error));
    }

    function atualizarCarrinho() {
        const carrinho = document.querySelector('.badge');
        const valor = JSON.parse(localStorage.getItem('carrinho'))
        carrinho.textContent = valor.length;
    }

    function salvarLocalStorage(produto) {
        let carrinho = []
        carrinho.find
        if (localStorage.getItem('carrinho') != null) {
            carrinho = JSON.parse(localStorage.getItem('carrinho'));
            if (carrinho.find(item => item.id_produto === produto.id_produto) !== undefined) {
                carrinho.find(item => item.id_produto === produto.id_produto).qtd++;
                localStorage.setItem('carrinho', JSON.stringify(carrinho));
                alert('Produto adicionado ao carrinho!');
            } else {
                carrinho.push(produto);
                localStorage.setItem('carrinho', JSON.stringify(carrinho));
                alert('Produto adicionado ao carrinho!');
            }
        } else {
            carrinho.push(produto);
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            alert('Produto adicionado ao carrinho!');
        }
        atualizarCarrinho();
    }

    function sair() {
        localStorage.setItem('logado', false);
        localStorage.removeItem('carrinho');
        localStorage.removeItem('total');
        localStorage.removeItem('usuario');
        window.location.href = '/index.html';
    }
}

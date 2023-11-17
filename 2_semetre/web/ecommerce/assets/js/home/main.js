const logado = localStorage.getItem('logado')

if (logado !== 'true') {
    window.location.href = '/index.html';
} else {
    function carregarCards() {
        fetch('/actions/getProdutos.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then(response => response.json())
            .then(produtos => {
                const divProdutos = document.querySelector('.produtos');
                let cards = ''
                produtos.forEach(produto => {
                    cards += `<div class="card m-3 shadow" style="width: 18rem;">
                    <img src="https://www.inoxcompany.ind.br/image/cache/no-image-default-926x926.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${produto.nome}</h5>
                      <p class="card-text text-black">${produto.descricao}</p>
                      <a href="#" id="${produto.id_produto}" class="bnt-compra btn btn-primary"><i class="fa-solid fa-cart-plus"></i> R$ ${produto.preco}</a>
                    </div> 
                    </div>`
                });
                divProdutos.innerHTML = cards;
                atualizarCarrinho();
                adicionarEventos();
            })
            .catch(error => console.error('Erro:', error));
    }

    function adicionarEventos() {
        const btnCompra = document.querySelectorAll('.bnt-compra');

        btnCompra.forEach(element => {
            element.onclick = () => {
                salvarLocalStorage(element.id);
                atualizarCarrinho();
            }
        });
    }

    function atualizarCarrinho() {
        const carrinho = document.querySelector('.badge');
        const valor = localStorage.getItem('carrinho')
        carrinho.innerHTML = valor != null ? valor.split(',').length : 0;
    }

    function salvarLocalStorage(id_produto) {
        const carrinho = localStorage.getItem('carrinho');
        localStorage.setItem('carrinho', carrinho != null ? [carrinho, id_produto] : [id_produto]);
        alert('Produto adicionado ao carrinho!');
    }

    function sair() {
        localStorage.setItem('logado', false);
        localStorage.removeItem('carrinho');
        window.location.href = '/index.html';
    }
}

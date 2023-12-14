let carrinho = [];

function carregarProdutosEscolhidos() {
    let produtos = localStorage.getItem('carrinho');
    carrinho = JSON.parse(produtos);
    exibirProdutos()
    totalPreco()
}

function exibirProdutos() {
    localStorage.setItem('total', 0)
    const produtosEscolhidos = document.querySelector('.produtosEscolhidos');
    let itens = '';
    carrinho.forEach(produto => {
        itens += (
            `<div class="d-flex flex-column produto mb-3 me-3 p-1 rounded shadow ">
            <img src="${produto.imagem}">
            <hr>
            <p class="me-2">Nome: ${produto.nome}</p> 
            <p class="me-2">Quantidade: ${produto.qtd}</p> 
            <p class="me-2">Preço: R$ ${produto.preco}</p>
            <p class="me-2">Preço total: R$ ${Number(produto.preco) * Number(produto.qtd)}</p>
        </div>`
        );
    });
    carrinho.forEach(produto => {
        const total = Number(produto.preco) * Number(produto.qtd);

        if (localStorage.getItem('total') === 0) {
            localStorage.setItem('total', total.toFixed(2));
        } else {
            let totalAtual = Number(localStorage.getItem('total'));
            totalAtual = Number(totalAtual) + total;
            localStorage.setItem('total', totalAtual.toFixed(2));
        }
    });
    produtosEscolhidos.innerHTML = itens;
    totalPreco()
}

function totalPreco() {
    const pTotalPreco = document.querySelector('.totalPreco');
    const totalComFretePreco = document.querySelector('.totalComFretePreco');
    const total = localStorage.getItem('total');
    const frete = localStorage.getItem('frete');
    const totalComFrete = Number(total) + Number(frete);
    pTotalPreco.textContent = `Total: R$ ${total}`;
    totalComFretePreco.textContent = `Total Com Frete: R$ ${totalComFrete}`;

}

function calcularFrete() {
    const cep = document.querySelector('#cep').value;
    if (cep.length != 8) {
        alert('Digite um cep valido')
        return
    } else {
        const pFrete = document.querySelector('#frete');
        const url = `https://viacep.com.br/ws/${cep}/json/`
        const estados = {
            "norte": ["AC", "AP", "AM", "PA", "RO", "RR", "TO"],
            "nordeste": ["AL", "BA", "CE", "MA", "PB", "PE", "PI", "RN", "SE"],
            "centro-oeste": ["GO", "MT", "MS"],
            "sudeste": ["ES", "MG", "RJ", "SP"],
            "sul": ["PR", "RS", "SC"]
        }
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                for (const regiao in estados) {
                    if (estados[regiao].includes(data.uf)) {
                        if (regiao.includes('norte', 'nordeste')) {
                            pFrete.textContent = 'Frete: R$ 50,00'
                            localStorage.setItem('frete', 50)
                        } else {
                            pFrete.textContent = 'Frete Gratis!'
                            localStorage.setItem('frete', 0)
                        }
                    }
                }
                totalPreco()
                ativarBntCompra()
            });
    }
}

function ativarBntCompra() {
    const btnCompra = document.querySelector('#bntCompra');
    btnCompra.textContent = 'Concluir compra';
    btnCompra.disabled = false;
}

function concluirCompra() {
    if (localStorage.getItem('carrinho') === null) {
        alert('Adicione um produto ao carrinho')
    } else {
        let formData = new URLSearchParams();
        let produtos = [];
        carrinho.forEach(produto => {
            produtos.push(`${produto.nome} - ${produto.qtd}`)
        })
        formData.append('id_cliente', localStorage.getItem('usuario'))
        formData.append('produtos', produtos.toString())
        formData.append('preco_total', Number(localStorage.getItem('total')) + Number(localStorage.getItem('frete')))
        fetch('../../../actions/addCompras.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            if(data == 'Compra cadastrada com sucesso!') {
                localStorage.removeItem('carrinho')
                localStorage.removeItem('total')
                localStorage.removeItem('frete')
                alert('Compra concluida')
                window.location.href = 'home.html'
            } else {
                alert(data)
            }
        })
    }
}
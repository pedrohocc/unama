function carregarDados() {
    if(localStorage.getItem('logado') !== 'true' && localStorage.getItem('isAdmin') !== 'true') {
        window.location.href = 'index.html';
    } else {
        const logado = localStorage.getItem('logado');
        const isAdmin = localStorage.getItem('isAdmin');
    
        if (logado !== 'true' || isAdmin !== 'true') {
            window.location.href = 'index.html';
        } else {
            const tbody = document.querySelector('tbody');
    
            fetch('../../../../actions/getProdutos.php')
                .then(response => response.json())
                .then(produtos => {
                    let dados = ''
                    produtos.forEach(produto => {
                        dados += `<tr>
                            <td>${produto.id_produto}</td>
                            <td>${produto.nome}</td>
                            <td>${produto.descricao}</td>
                            <td>${produto.estoque}</td>
                            <td>${produto.preco}</td>
                            <td><img src="${produto.imagem}" alt="${produto.nome}" width="100px"></td>`
                    });
                    tbody.innerHTML = dados;
                })
                .catch(error => console.error('Erro:', error));
        }
    }
}

function sair() {
    localStorage.removeItem('logado');
    localStorage.removeItem('isAdmin');
    window.location.href = 'index.html';
}

function listarProdutos() {
    fetch("../../../actions/products/get.php")
    .then(response => response.json())
    .then(data => {
        toTable(data)
    })
}

function toTable(data) {
    const tbody = document.querySelector('tbody')
    let tr = ''
    data.forEach(produto => {
        tr += `<tr data-id="${produto.id}">
        <td data-nome="${produto.nome}">${produto.nome}</td>
        <td data-descricao="${produto.descricao}">${produto.descricao}</td>
        <td data-preco="${produto.preco}">R$ ${produto.preco}</td>
        <td>${produto.ativo}</td>
        <td>
          <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick={autoComplete(${produto.id})}>Editar</button>
          <button class="btn btn-danger" onclick={excluir(${produto.id})}>Excluir</button
        </td>
    </tr>`
    });

    tbody.innerHTML = tr
}

function autoComplete(id) {
    const inputs = document.querySelectorAll('input');

    const tr = document.querySelector(`tr[data-id="${id}"]`);
    const nome = tr.querySelector('td[data-nome]').dataset.nome;
    const descricao = tr.querySelector('td[data-descricao]').dataset.descricao;
    const preco = tr.querySelector('td[data-preco]').dataset.preco;

    inputs[0].value = id;
    inputs[1].value = nome;
    inputs[2].value = descricao;
    inputs[3].value = Number(preco);
}

function excluir(id) {
    const confirm = window.confirm('Deseja realmente excluir?')
    if (confirm) {
        fetch(`../../../actions/products/delete.php?id=${id}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Excluído com sucesso!')
                listarProdutos()
            } else {
                console.log(data)
            }
        })
    }
}
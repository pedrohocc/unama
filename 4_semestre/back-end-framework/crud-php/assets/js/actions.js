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
        location.href = `desativar.php?id=${id}`
    }
}